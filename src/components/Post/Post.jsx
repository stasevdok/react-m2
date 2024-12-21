import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import { localeDateString } from '@/utils/localeDateString'; 

const Post = React.forwardRef(({ id, title, category, date, photos, categories }, ref) => {
  const imageRef = useRef(null);

  const categoryName = categories.find((cat) => cat.id === category)?.name || 'Неизвестная категория';

  useEffect(() => {
    if (imageRef.current && imageRef.current.dataset.src) {
      imageRef.current.src = imageRef.current.dataset.src;
      imageRef.current.onload = () => imageRef.current.classList.remove('lazyload');
    }
  }, [photos]);

  return (
    <Link to={`/post/${id}`} className="post-link">
      <div className="post" ref={ref}>
        <h2>{title}</h2>
        {photos && photos.length > 0 && (
          <img 
            ref={imageRef}
            className="lazyload" 
            src="placeholder.jpg"
            data-src={photos[0]} 
            width={400}
            height={400}
            alt={title}
          />
        )}
        <p>{categoryName}</p>
        <time dateTime={date}>{localeDateString(date)}</time>
      </div>
    </Link>
  );
});

export default Post;

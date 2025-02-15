import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { localeDateString } from '@/utils/localeDateString'; 
import '@/components/Post/Post.scss';

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
      <motion.div
        className="post"
        ref={ref}
        whileHover={{ scale: 1.05}} // Анимация при наведении
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        >
          <h2>{title}</h2>
        </motion.p>
        {photos && photos.length > 0 && (
          <motion.img
            ref={imageRef}
            className="lazyload" 
            src="placeholder.jpg"
            data-src={photos[0]} 
            width={400}
            height={400}
            alt={title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          />
        )}
        <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        >
          <p>{categoryName}</p>
        </motion.p>
        <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        >
          <p><time dateTime={date}>{localeDateString(date)}</time></p>
        </motion.p>
      </motion.div>
    </Link>
  );
});

export default Post;

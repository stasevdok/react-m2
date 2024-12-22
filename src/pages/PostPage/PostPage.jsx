import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import postsDB from '@/data/posts.json';
import styles from '@/pages/PostPage/PostPage.module.scss';
import { throttle } from '@/utils/throttle';
import Navbar from '@/components/Navbar/Navbar';
import useViewportHeight from '@/hooks/useViewPortHeight';
import usePageHeight from '@/hooks/usePageHeight';
import useScrollY from '@/hooks/useScrollY';
import placeholder from '@/assets/placeholder.jpg';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import { localeDateString } from "@/utils/localeDateString";
import { Helmet } from "react-helmet-async";

const PostPage = () => {
  const { id } = useParams();

  const progressRef = useRef(null);
  const viewportHeight = useViewportHeight();
  const pageHeight = usePageHeight();
  const scrollY = useScrollY();

  const post = postsDB.find((post) => post.id === id);

  const calculateProgress = () => {
    const availableHeight = pageHeight - viewportHeight;
    const percent = availableHeight > 0 ? (scrollY / availableHeight) * 100 : 0;

    if (progressRef.current) {
      progressRef.current.value = percent;
    }
  };

  const throttleCalculateProgress = throttle(calculateProgress, 50);

  useEffect(() => {
    window.addEventListener('scroll', throttleCalculateProgress);
    window.addEventListener('resize', throttleCalculateProgress);

    return () => {
      window.removeEventListener('scroll', throttleCalculateProgress);
      window.removeEventListener('resize', throttleCalculateProgress);
    };
  }, [viewportHeight, pageHeight, scrollY, throttleCalculateProgress]);

  if (!post) {
    return <ErrorPage />;
  }

  return (
    <div>
      <Helmet>
        <title key="title">{post.title}</title>
        <meta key="description" name="description" content={post.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
      </Helmet>
      <Navbar />
      <progress
        className={styles.articleProgressbar}
        value="0"
        max="100"
        ref={progressRef}
      ></progress>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <time dateTime={post.date}>{localeDateString(post.date)}</time>
      <div className={styles.articlePhotos}>
        {post.photos &&
          post.photos.map((photo, index) => (
            <img
              key={index}
              className="lazyload"
              src={placeholder}
              data-src={photo}
              width={400}
              height={400}
              alt={`Фото ${index + 1}`}
            />
          ))}
      </div>
      <p>{post.text}</p>
      <button onClick={() => window.history.back()}>Назад</button>
    </div>
  );
};

export default PostPage;

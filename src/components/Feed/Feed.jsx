import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import Post from '@/components/Post/Post';
import styles from '@/components/Feed/Feed.module.scss';

const Feed = ({ posts, categories }) => {
  const [sortOrder, setSortOrder] = useState('desc');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const postRefs = useRef([]);

  const sortPosts = useCallback((posts) => {
    return [...posts].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });
  }, [sortOrder]);

  const filterPostsByCategory = useCallback((posts) => {
    return categoryFilter === 'all'
      ? posts
      : posts.filter((post) => String(post.category) === categoryFilter);
  }, [categoryFilter]);

  const handleSortToggle = () => {
    setSortOrder((prevOrder) => (prevOrder === 'desc' ? 'asc' : 'desc'));
  };

  const handleCategoryFilter = (categoryId) => {
    setCategoryFilter(categoryId);
  };

  useEffect(() => {
    const sortedAndFilteredPosts = filterPostsByCategory(sortPosts(posts));
    setFilteredPosts(sortedAndFilteredPosts);
  }, [posts, categoryFilter, sortOrder, filterPostsByCategory, sortPosts]);

  return (
    <div className={styles.feed}>
      <div className={styles.filters}>
        <div className={styles.categoryFilter}>
          <button
            className={categoryFilter === 'all' ? styles.active : ''}
            onClick={() => handleCategoryFilter('all')}
          >
            Все
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={categoryFilter === category.id ? styles.active : ''}
              onClick={() => handleCategoryFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <button className={styles.sortButton} onClick={handleSortToggle}>
          {sortOrder === 'desc' ? 'Сначала новые' : 'Сначала старые'}
        </button>
      </div>

      <AnimatePresence>
        <motion.div className={styles.cardContainer}>
          {filteredPosts.length === 0 ? (
            <p>Нет публикаций в этой категории.</p>
          ) : (
            filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}   
                exit={{ opacity: 0, y: 20 }}     
                transition={{ duration: 0.5 }}
              >
                <Post
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  category={post.category}
                  date={post.date}
                  photos={post.photos}
                  categories={categories}
                  ref={(el) => (postRefs.current[index] = el)}
                />
              </motion.div>
            ))
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Feed;

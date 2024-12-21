import React, { useState, useEffect, useRef } from 'react';
import Post from '@/components/Post/Post';
import '@/components/Feed/Feed.scss';

const Feed = ({ posts, categories }) => {
  const [sortOrder, setSortOrder] = useState('desc');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const postRefs = useRef([]);

  const sortPosts = (posts) => {
    return [...posts].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });
  };

  const filterPostsByCategory = (posts) => {
    return categoryFilter === 'all'
      ? posts
      : posts.filter((post) => post.category === categoryFilter);
  };

  const handleSortToggle = () => {
    setSortOrder((prevOrder) => (prevOrder === 'desc' ? 'asc' : 'desc'));
  };

  const handleCategoryFilter = (categoryId) => {
    setCategoryFilter(categoryId);
  };

  useEffect(() => {
    const sortedAndFilteredPosts = filterPostsByCategory(sortPosts(posts));
    setFilteredPosts(sortedAndFilteredPosts);
  }, [posts, categoryFilter, sortOrder]);

  return (
    <div className="feed">
      <button onClick={handleSortToggle}>
        {sortOrder === 'desc' ? 'Сначала новые' : 'Сначала старые'}
      </button>

      <div className="category-filter">
        <button
          className={categoryFilter === 'all' ? 'active' : ''}
          onClick={() => handleCategoryFilter('all')}
        >
          Все
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            className={categoryFilter === category.id ? 'active' : ''}
            onClick={() => handleCategoryFilter(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <p>Нет публикаций в этой категории.</p>
      ) : (
        filteredPosts.map((post, index) => (
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
        ))
      )}
    </div>
  );
};

export default Feed;

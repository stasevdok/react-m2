import React, { useState } from "react";
import postsDB from "@/data/posts.json";
import categoriesDB from "@/data/categories.json";

const ArticlesCategories = () => {
  const [posts, setPosts] = useState(postsDB);

  const handleDelete = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  const handleDuplicate = (id) => {
    const postToDuplicate = posts.find((post) => post.id === id);
    if (postToDuplicate) {
      const newPost = {
        ...postToDuplicate,
        id: String(posts.length + 1),
        title: `${postToDuplicate.title} (Копия)`,
      };
      setPosts([...posts, newPost]);
    }
  };

  const handleEdit = (id) => {
    alert(`Редактирование статьи с ID: ${id}`);
  };

  return (
    <div>
      <h1>Список статей</h1>
      <table>
        <thead>
          <tr>
            <th>Заголовок</th>
            <th>Категория</th>
            <th>Дата</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            const categoryName =
              categoriesDB.find((category) => category.id === post.category)?.name ||
              "Без категории";

            return (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{categoryName}</td>
                <td>{post.date}</td>
                <td>
                  <button onClick={() => handleEdit(post.id)}>Редактировать</button>
                  <button onClick={() => handleDuplicate(post.id)}>Дублировать</button>
                  <button onClick={() => handleDelete(post.id)}>Удалить</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ArticlesCategories;

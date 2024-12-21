import React, { useState } from "react";
import categoriesDB from "@/data/categories.json";

const CreateArticle = () => {
  const [categories, setCategories] = useState(categoriesDB);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newCategoryName, setNewCategoryName] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [photos, setPhotos] = useState([""]);
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      const newCategory = {
        id: String(categories.length + 1),
        name: newCategoryName.trim(),
      };
      setCategories([...categories, newCategory]);
      setSelectedCategory(newCategory.id);
      setNewCategoryName("");
    }
  };

  const handleAddPhoto = () => {
    setPhotos([...photos, ""]);
  };

  const handlePhotoChange = (index, value) => {
    const updatedPhotos = [...photos];
    updatedPhotos[index] = value;
    setPhotos(updatedPhotos);
  };

  const handleRemovePhoto = (index) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos);
  };

  const handleSubmit = () => {
    const newArticle = {
      id: String(new Date().getTime()),
      title,
      date,
      photos,
      description,
      text,
      category: selectedCategory,
    };
    console.log("Новая статья:", newArticle);
    alert("Статья успешно создана!");
  };

  return (
    <div>
      <h1>Создать статью</h1>

      {/* Выбор категории */}
      <div>
        <label>Категория:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Выберите категорию</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        {/* Создание новой категории */}
        <div>
          <input
            type="text"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            placeholder="Название новой категории"
          />
          <button onClick={handleAddCategory}>Добавить категорию</button>
        </div>
      </div>

      {/* Поля статьи */}
      <div>
        <label>Заголовок:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Введите заголовок"
        />
      </div>

      <div>
        <label>Дата:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <label>Фотографии:</label>
        {photos.map((photo, index) => (
          <div key={index}>
            <input
              type="text"
              value={photo}
              onChange={(e) => handlePhotoChange(index, e.target.value)}
              placeholder="Введите URL фотографии"
            />
            <button onClick={() => handleRemovePhoto(index)}>Удалить</button>
          </div>
        ))}
        <button onClick={handleAddPhoto}>Добавить фото</button>
      </div>

      <div>
        <label>Описание:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Введите описание"
        ></textarea>
      </div>

      <div>
        <label>Текст:</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введите текст статьи"
        ></textarea>
      </div>

      <button onClick={handleSubmit}>Сохранить статью</button>
    </div>
  );
};

export default CreateArticle;

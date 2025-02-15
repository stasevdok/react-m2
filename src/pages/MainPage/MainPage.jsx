import React from 'react';
import Feed from '@/components/Feed/Feed';
import postsDB from '@/data/posts.json';
import categoriesDB from '@/data/categories.json';
import Navbar from "@/components/Navbar/Navbar";
import { Helmet } from "react-helmet-async";
import styles from '@/pages/MainPage/MainPage.module.scss';
import logo from '@/assets/logo.svg';


const MainPage = () => {
  return (
    <div>
      <Helmet>
        <title key="title">Улица</title>
        <meta key="description" name="description" content="Медиа о стрит-арте" />
        <meta key="keywords" name="keywords" content="Стрит-арт, улица, искусство" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Улица" />
        <meta property="og:description" content="Медиа о стрит-арте" />
      </Helmet>
      <div className={styles.heroBlock}>
        <img src={logo} className={styles.logo}></img>
      </div>
      <Navbar />
      <h1>Публикации</h1>
      <Feed posts={postsDB} categories={categoriesDB} />
    </div>
  );
};

export default MainPage;

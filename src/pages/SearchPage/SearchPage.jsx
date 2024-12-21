import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import classNames from "classnames";
import debounce from "@/utils/debounce";
import styles from "@/pages/SearchPage/SearchPage.module.scss";
import { getPosts } from "@/utils/getPosts";
import { Helmet } from "react-helmet-async";

const SearchPage = () => {
  const [posts, setPosts] = useState(null);
  const [searchResults, setSearchResults] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPosts();
      setPosts(res);
    };
    fetchPosts();
  }, []);

  const handleInput = (e) => {
    if (e.target) {
      const { value } = e.target;
      if (value && value.length > 2) {
        const result = posts.filter((post) =>
          post.title.toLowerCase().includes(value.toLowerCase())
        );
        const listItems = result.reduce(
          (markup, item) =>
            `${markup}<li><a href="#/post/${item.id}">${item.title}</a></li>`,
          ""
        );
        setSearchResults(listItems);
      }
      if (!value) {
        setSearchResults("");
      }
    }
  };

  const debouncedHandleInput = debounce(handleInput, 300);

  return (
    <div>
      <Helmet>
        <title key="title">Поиск</title>
        <meta key="description" name="description" content="Поиск по публикациям" />
        <meta key="keywords" name="keywords" content="Поиск, публикации" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Поиск" />
        <meta property="og:description" content="Поиск по публикациям" />
      </Helmet>
      <Navbar />
      <h1>Поиск публикаций</h1>
      <form className={styles.form}>
        <label>Найдите нужную публикацию:</label>
        <input
          onInput={debouncedHandleInput}
          type="search"
          name="query"
          placeholder="Введите название"
        />
      </form>
      <ul
        className={classNames(styles["search-results"], {
          [styles.active]: searchResults,
        })}
        dangerouslySetInnerHTML={{ __html: searchResults }}
      ></ul>
    </div>
  );
};

export default SearchPage;

import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar/Navbar";
import { Helmet } from "react-helmet-async";


const ErrorPage = () => {
    return (
      <div>
        <Helmet>
          <title key="title">Страница не существует</title>
          <meta key="description" name="description" content="Страница была удалена или перемещена" />
          <meta key="keywords" name="keywords" content="Ошибка, не существует, 404" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Страница не существует" />
          <meta property="og:description" content="Страница была удалена или перемещена" />
        </Helmet>
        <Navbar />
        <h1>Такой страницы у нас нет</h1>
        <Link to="/">На главную</Link>
      </div>
    );
  };
  
  export default ErrorPage;
  
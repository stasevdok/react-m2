import Navbar from "@/components/Navbar/Navbar";
import { Helmet } from "react-helmet-async";

const ProfilePage = () => {
    return (
      <div>
        <Helmet>
          <title key="title">Профиль</title>
          <meta key="description" name="description" content="Профиль пользователя" />
          <meta key="keywords" name="keywords" content="Профиль, кабинет, личный" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Профиль" />
          <meta property="og:description" content="Профиль пользователя" />
        </Helmet>
        <Navbar />
        <h1>Профиль</h1>
      </div>
    );
  };
  
  export default ProfilePage;
  
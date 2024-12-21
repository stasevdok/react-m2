import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import MainPage from '@/pages/MainPage/MainPage';
import ProfilePage from '@/pages/Profile/Profile';
import PostPage from '@/pages/PostPage/PostPage';
import SearchPage from '@/pages/SearchPage/SearchPage';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import AdminPage from '@/pages/Articles/Articles';
import Layout from '@/components/Layout';
import { HelmetProvider } from 'react-helmet-async';

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { 
        path: "/", 
        element: <MainPage /> 
      },
      { 
        path: "/profile",
        element: <ProfilePage />
      },
      { 
        path: "/search", 
        element: <SearchPage /> 
      },
      { 
        path: "/post/:id", 
        element: <PostPage /> 
      },
      { 
        path: "*", 
        element: <ErrorPage /> 
      },
      { 
        path: "/admin", 
        element: <AdminPage /> 
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </div>
  );
}

export default App;

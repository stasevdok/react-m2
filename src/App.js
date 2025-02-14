import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from '@/pages/MainPage/MainPage';
import ProfilePage from '@/pages/Profile/Profile';
import PostPage from '@/pages/PostPage/PostPage';
import SearchPage from '@/pages/SearchPage/SearchPage';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import StyleGuide from '@/pages/StyleGuide/StyleGuide'
import Layout from '@/components/Layout';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
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
        path: "/styleguide", 
        element: <StyleGuide /> 
      },
      { 
        path: "*", 
        element: <ErrorPage /> 
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

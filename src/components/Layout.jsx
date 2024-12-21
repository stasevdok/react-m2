import React from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import useLazyLoad from "@/hooks/useLazyLoad";

const Layout = () => {
  const location = useLocation(); 
  useLazyLoad(); 

  return (
    <div>
      <Outlet key={location.pathname} />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;

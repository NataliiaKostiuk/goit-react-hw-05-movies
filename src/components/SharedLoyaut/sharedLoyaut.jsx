import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
// import { Layout } from 'components/Layout/Layout';
import { Suspense } from 'react';
import { Toaster } from "react-hot-toast";

export const Layout = () => {
    return (
       <div>
        <Header />
        <Toaster position="top-right" />
      <Suspense fallback={'LOADING PAGE...'}> 
        <Outlet />
     </Suspense> 
  </div>   
    )
}


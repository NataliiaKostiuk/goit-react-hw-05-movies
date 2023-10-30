import { Routes, Route } from "react-router-dom";
 import { lazy } from "react";
import { Cast } from './cast/cast';
import { Review } from './review/review';
// eslint-disable-next-line
import { Layout } from "./SharedLoyaut/sharedLoyaut";

 const HomePage = lazy(() => import('../pages/home'));
 const MoviesPage = lazy(() => import('../pages/movies'));
 const  MovieDescriptionPage = lazy(() => import('../pages/MovieDescription'));
const NotFoundPage = lazy(() => import('./notFound/notFound'));

export const App = () => {
  return (
       <Routes>
        <Route path='/'element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDescriptionPage/>} >
        <Route path='cast' element={<Cast/>} />
        <Route path='review' element={<Review/>} />
        </Route>
          <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>

  );
};




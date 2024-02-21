import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';

// const HomePage = lazy(() => import('../pages/Home'));
// const CarsPage = lazy(() => import('../pages/Cars'));
// const FavoriteCarsPage = lazy(() => import('../pages/FavoriteCars'));

import Home from '../pages/Home';
import { Cars } from '../pages/Cars';
import FavoriteCars from '../pages/FavoriteCars';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="cars" element={<Cars />} />
        <Route path="favorite" element={<FavoriteCars />} />
      </Route>
    </Routes>
  );
};

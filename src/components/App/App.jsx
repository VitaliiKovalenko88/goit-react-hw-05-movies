import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import Home from 'pages/Home/Home';
import { MoviesLayout } from 'components/MoviesLayout/MoviesLayout';
// import { Movies } from 'pages/Movies/Movies';
// import { MovieDetal } from 'pages/MoviesDetails/MovieDetal';
// import { Cast } from 'pages/Cast/Cast';
// import { Reviews } from 'pages/Reviews/Reviews';

// const {MoviesLayot } = lazy(() =>

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetail = lazy(() => import('pages/MoviesDetail/MovieDetail'));
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MoviesLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetail />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </div>
  );
};

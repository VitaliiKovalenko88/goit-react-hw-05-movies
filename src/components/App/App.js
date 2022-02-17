import { Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { HomePage } from 'pages/HomePage/HomePage';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { MoviesDetaile } from 'pages/MoviesDetailesPage/MoviesDetailesPage';
import { Cast } from 'pages/Cast/Cast';
import { Reviews } from 'pages/Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MoviesDetaile />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

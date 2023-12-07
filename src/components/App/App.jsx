import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import { MoviesLayot } from 'components/MoviesLayot/MoviesLayot';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetal } from 'pages/MoviesDetails/MovieDetal';
import { Cast } from 'pages/Cast/Cast';
import { Reviews } from 'pages/Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MoviesLayot />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetal />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </div>
  );
};

import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import { MoviesLayot } from 'components/MoviesLayot/MoviesLayot';
import { Movies } from 'pages/Movies/Movies';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MoviesLayot />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route path="" />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

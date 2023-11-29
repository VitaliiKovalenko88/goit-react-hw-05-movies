import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import fetchTrendingMovies from '../../filmApi/filmApi';

export const App = () => {
  // fetchTrendingMovies(1);
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </div>
  );
};


import { Routes, Route, Link } from "react-router-dom";
import { Navigation } from "components/Navigation/Navigation";
import { HomePage } from "pages/HomePage/HomePage";
import { MoviesPage } from "pages/MoviesPage/MoviesPage";
import { MoviesDetaile } from "pages/MoviesDetailesPage/MoviesDetailesPage";

export const App = () => {
  return (
    <>
      <Navigation />
      <div></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} >
          <Route path="/" element={<MoviesDetaile />} />
        </Route>
        
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
};

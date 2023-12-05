import { NavLink, Outlet } from 'react-router-dom';
import css from './MoviesLayot.module.css';

export const MoviesLayot = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.navigation}>
          <ul className={css.navList}>
            <li>
              <NavLink className={css.navLink} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={css.navLink} to="movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

import { Link, useLocation } from 'react-router-dom';
import { defaultImg } from 'helpers/defaultFoto';
import css from './MoviesList.module.css';
export const MoviesList = ({ movies }) => {
  const { pathname } = useLocation();
  return (
    <ul className={css.list}>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id} className={css.item}>
          <Link to={`/movies/${id}`} state={{ from: pathname }}>
            <div className={css.wrapper}>
              <img
                className={css.img}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
                    : defaultImg
                }
                alt={title}
              />
            </div>
            <p className={css.titleItem}>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

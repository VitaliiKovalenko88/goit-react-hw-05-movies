import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const { location } = useLocation();
  return (
    <ul>
      {movies.map(({ id, poster_path, title }) => (
        <li key={id}>
          <Link to={`movies/${id}`} state={{ from: location }}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
                alt={title}
                width={200}
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

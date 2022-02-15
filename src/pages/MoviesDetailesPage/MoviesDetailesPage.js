import { useEffect, useState, Suspense } from "react";

import {
  useHistory,
  useParams,
  useLocation,
  Link,
  Routes,
  Route,
  Outlet,
  useRouteMatch,
} from "react-router-dom";
import { Cast } from "../Cast/Cast";
import { Reviews } from "../Reviews/Reviews";
import { fetchDetaileMovie } from "../../serviceApi/servisApi";

export const MoviesDetaile = () => {
  const [movie, setFilm] = useState([]);

  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  

  useEffect(() => {
    fetchDetaileMovie(movieId)
      .then(({ data }) => {
        setFilm(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  const {
    title,
    release_date,
    overview,
    poster_path,
    vote_average,
    genres = [],
  } = movie;

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/films");
  };
  return (
    <>
      <button type="button" onClick={onGoBack}>
        Go back
      </button>

      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        </div>
        <div>
          <h2>
            {title} {release_date}
          </h2>
          <p>
            Use score: <span>{vote_average}</span>
          </p>
          <h3>Overview</h3>
          <p>{overview} </p>
          <h3>Genre</h3>
          <p>
            {genres
              .map(({ name }) => {
                return name;
              })
              .join(", ")}
          </p>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to={`${url}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`${url}/review`}>Reviews</Link>
            </li>
          </ul>
          <Outlet/>
        </div>
      </div>
      <Routes>
        <Route path={`${path}/cast`}>
          <Cast />
        </Route>
        <Route path={`${path}/review`}>
          <Reviews />
        </Route>
      </Routes>

      
    </>
  );
};

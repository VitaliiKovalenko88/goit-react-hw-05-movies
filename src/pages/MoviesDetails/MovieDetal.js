import { fetchMovieDetal } from "filmApi/filmApi";
import { useState, useEffect } from "react"
import { Link, Outlet, useParams, useLocation } from "react-router-dom"

export const MovieDetal = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    fetchMovieDetal(movieId)
      .then(({ data }) => {
        setData(data);
      })
      .catch(error => {
        console.log(`fetchMovieDetail: ${error}`);
      })
      .finally(() => setIsLoading(false));

  }, [movieId])


  const { title, release_data, overview, poster_path, vote_average,
    genres = [] } = data;
  console.log(title);
  return (
    <><div>
      <Link to={location?.state?.from ?? '/'}>Go back
      </Link>

      <div>
        {poster_path
          ?
          <div>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
          </div>
          : null}
        <div>
          <h2>{title} {release_data}</h2>
          <p>Use score: <span>{vote_average}</span> </p>
          <h3>Overwiew</h3>
          <p>{overview}</p>
          <h3>Genre</h3>
          <p>{genres.map(({ name }) => name).join(', ')} </p>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link state={{ from: location?.state?.from }} to={`cast`}>
                Cast
              </Link >
            </li>
            <li>
              <Link state={{ from: location?.state?.from }} to={`reviews`} >Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
    </div >
    </>
  )
}

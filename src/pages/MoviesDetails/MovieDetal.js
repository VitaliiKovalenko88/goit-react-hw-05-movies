
import { fetchMovieDetal } from "filmApi/filmApi";
import { defaultImg } from "helpers/defaultFoto";
import { useState, useEffect } from "react"
import { Link, Outlet, useParams, useLocation } from "react-router-dom"
import css from './MovieDetal.module.css'

export const MovieDetal = () => {
  const [data, setData] = useState([]);

  const location = useLocation();
  const { movieId } = useParams();
  console.log(useParams())
  useEffect(() => {


    fetchMovieDetal(movieId)
      .then(({ data }) => {
        setData(data);
      })
      .catch(error => {
        console.log(`fetchMovieDetail: ${error}`);
      })


  }, [movieId])


  const { title, release_data, overview, poster_path, vote_average,
    genres = [] } = data;

  return (
    <>
      <Link className={css['back-link']} to={location?.state?.from ?? '/'}>Go back</Link>

      <div className={css.wrapper}>
        <div className={css['img-wrapper']}>
          <img className={css.img} src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : defaultImg} alt={title} />
        </div>

        <div className={css['text-wrapper']}>
          <h2 className={css.title}>{title} {release_data}</h2>
          <p className={css.text}>Use score: <span>{vote_average}</span> </p>
          <h3 className={css['sub-title']}>Overwiew</h3>
          <p>{overview}</p>
          <h3>Genre</h3>
          <p className={css.text}>{genres.map(({ name }) => name).join(', ')} </p>
          <h3 className={css['sub-title']}>Additional information</h3>
          <ul>
            <li>
              <Link className={css['page-link']} state={{ from: location?.state?.from }} to={`cast`}>
                Cast
              </Link>
            </li>
            <li>
              <Link className={css['page-link']} state={{ from: location?.state?.from }} to={`reviews`} >Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MovieDetal;
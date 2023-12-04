import { fetchTrendingMovies } from "filmApi/filmApi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { mapper } from "helpers/mapper";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies(page)
      .then((({ data }) => {
        setMovies([...mapper(data.results)]);
      }))
      .catch(error => console.log(`fetchTrendigMovies:${error}`)
      );
  }, [page]);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1)
  }
  return (
    <main>
      <div>
        <h1>Trends today</h1>
        <ul>{movies.map(({ id, poster_path, title }) =>
          <li key={id}>
            <Link to=
              {`movies/${id}`} state={{ from: location }} >
              <div>
                <img src={`https://image.tmdb.org/t/p/w400/${poster_path}`
                } alt={title} width={200} />
              </div>
            </Link>
          </li>)}
        </ul>
        <button onClick={onLoadMore}></button>
      </div>
    </main >
  )
}

export default Home;
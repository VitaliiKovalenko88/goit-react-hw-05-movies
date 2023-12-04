import { fetchTrendingMovies } from "filmApi/filmApi";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { mapper } from "helpers/mapper";
import { MoviesList } from "components/MoviesList/MoviesList";

const Home = () => {
  const [data, setMovies] = useState([]);
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
        <MoviesList movies={data} location={location} />
        <button onClick={onLoadMore}></button>
      </div>
    </main >
  )
}

export default Home;
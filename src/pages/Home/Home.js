import { fetchTrendingMovies } from "filmApi/filmApi";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { mapper } from "helpers/mapper";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Button } from "components/Button/Button";
import { Container } from "components/Container/Container";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies(page)
      .then(({ data: { results } }) => {
        setData(prevData => [...prevData, ...mapper(results)]);
      })
      .catch(error => console.log(`fetchTrendigMovies:${error}`));
  }, [page]);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1)
  }
  return (
    <main>
      <Container>
        <h1>Trends today</h1>
        <MoviesList movies={data} location={location} />
        <Button onLoadMore={onLoadMore} />
      </Container>
    </main>
  )
}

export default Home;
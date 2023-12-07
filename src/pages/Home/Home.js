import { fetchTrendingMovies } from "filmApi/filmApi";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { mapper } from "helpers/mapper";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Button } from "components/Button/Button";
// import { Container } from "components/Container/Container";
import css from './Home.module.css'

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);



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
    <>
      <h1 className={css.title} >Trends today</h1>
      <MoviesList movies={data} />
      <Button onLoadMore={onLoadMore} />
    </>
  )
}

export default Home;
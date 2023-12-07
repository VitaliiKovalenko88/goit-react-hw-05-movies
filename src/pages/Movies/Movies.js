import { useState, useEffect } from 'react'
import { SearchBar } from 'components/SearchBar/SearchBar'
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'filmApi/filmApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
// import { Container } from 'components/Container/Container';

export const Movies = () => {
  const [data, setData] = useState([]);
  const [page] = useState(1)

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (value) => {
    setSearchParams({ query: value })
  }

  useEffect(() => {
    const query = searchParams.get('query') || '';

    if (!query) return;
    fetchMovieByQuery(query, page).then(({ results }) => {

      setData(results);
    })
      .catch(error => console.log(`fetchMovieByQuery:${error}`));
  }, [searchParams, page])



  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {data.length > 0 && <MoviesList movies={data} />}
    </>
  )
}

import { useState, useEffect } from 'react'
import { SearchBar } from 'components/SearchBar/SearchBar'
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'filmApi/filmApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
// import { Container } from 'components/Container/Container';

export const Movies = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1)
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams);


  const query = searchParams.get('film');
  const handleSubmite = (value) => {
    setSearchParams({ film: value })
  }

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    fetchMovieByQuery(query, page).then(({ results }) => {

      setData(results);
    })
      .catch(error => console.log(`fetchMovieByQuery:${error}`));
  }, [searchParams, page])


  console.log(data);
  return (
    <>
      <SearchBar onSubmite={handleSubmite} />
      {data.length > 0 && <MoviesList movies={data} />}

    </>
  )
}

import { SearchBar } from 'components/SearchBar/SearchBar'
import React, { useState, useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'filmApi/filmApi';

export const Movies = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      fetchMovieByQuery(query).then(({ results }) => {
        setData(results);
      })
    }
  }, [query])

  const handleSubmite = (value) => {
    setSearchParams({ query: value })
  }


  return (
    <SearchBar onSubmite={handleSubmite} />
  )
}

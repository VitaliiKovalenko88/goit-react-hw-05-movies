import { fetchMovieReviews } from 'filmApi/filmApi';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchMovieReviews(movieId)
      .then(({ results }) => {
        setData([...results]);
      })
      .catch(error => console.log(`fetchMovieReviews: ${error}`))
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {data.length !== 0 && !isLoading ? (
        <div>
          <h2>Reviews</h2>
          <ul>
            {data.map(({ id, content, author }) => (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>There are no reviews yet, be the first to leave it!!!</p>
      )}
    </>
  );
};

import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchReviews } from '../../serviceApi/servisApi';
import { ReviewsItem, ReviewsText, SubTitle, Title } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchReviews(movieId)
      .then(({ results }) => {
        setReviews(prevReviews => [...prevReviews, ...results]);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {isLoading && <p>Content loading...</p>}
      {reviews.length !== 0 && !isLoading ? (
        <div>
          <Title>Reviews</Title>
          <ul>
            {reviews.map(({ id, content, author }) => {
              return (
                <ReviewsItem key={id}>
                  <SubTitle>{author}</SubTitle>
                  <ReviewsText>{content}</ReviewsText>
                </ReviewsItem>
              );
            })}
          </ul>
        </div>
      ) : (
        <p>There are no reviews yet, be the first to leave it!!!</p>
      )}
    </>
  );
};

export default Reviews;

import styled from 'styled-components';

export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const MovieItem = styled.li`
  width: 300px;
  height: 480px;
  margin-bottom: 50px;
  overflow: hidden;

  border-radius: 5px;
  transition: all 0.25s ease-in-out;
  box-shadow: 0 1px 1px rgb(0 0 0 / 12%), 0 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px #ff6b08;

  :hover {
    transform: scale(1.07);
    transition: transform 250ms ease-in-out;
  }

  :not(:nth-child(3n)) {
    margin-right: 50px;
  }
`;

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const ImageMovie = styled.img`
  width: 100%;
  max-height: 420px;
`;

export const NameMovie = styled.p`
  margin: 10px;
  text-align: center;
  color: #ff6b08;
  font-size: 20px;
  font-style: none;
  font-weight: 500;
  line-height: 1.2;
  text-decoration: none;
`;

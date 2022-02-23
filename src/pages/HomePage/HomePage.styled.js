import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  color: #ff6b08;
  margin-bottom: 30px;
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const MoviesListItem = styled.li`
  width: 300px;
  height: 480px;
  margin-bottom: 50px;
  overflow: hidden;
  border-radius: 5px;

  box-shadow: 0 1px 1px rgb(0 0 0 / 12%), 0 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px #ff6b08;

  :hover {
    transform: scale(1.07);
    transition: transform 250ms ease-in-out;
  }
`;

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 420px;

  :hover,
  :focus {
    transform: scale(1.07);
    transition: transform 250ms ease-in-out;
  }
`;

export const TitleItem = styled.p`
  padding: 10px;
  margin: 0 auto;
  text-align: center;
  color: #ff6b08;
  font-size: 20px;
  font-style: none;
  font-weight: 500;
  line-height: 1.2;
`;

export const MainEl = styled.main`
  background-color: #bec4c4;
`;

import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

export const ImageCast = styled.img`
  width: 100%;
  height: 100%;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const CastItem = styled.li`
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
`;

export const Title = styled.h2`
  text-align: center;
  color: #3f4143;
  margin-bottom: 30px;
`;

export const NameTitle = styled.h3`
  padding-left: 10px;
  color: #3f4143;
`;

export const CharacterCast = styled.p`
  padding-left: 10px;
  padding-right: 10px;
  color: #ff6b08;
`;

import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const BackLink = styled(Link)`
  margin-top: 10px;
  margin-bottom: 36px;
  text-align: center;
  text-decoration: none;
  /* padding-top: 10px;
  padding-bottom: 10px; */
  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 40px;
  color: #ffffff;
  background-color: #ff6b08;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.2);

  transition: background-color 250ms ease-in-out;
  :hover {
    background-color: #b14b06;
    transition: background-color 250ms ease-in-out;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 50px;
  /* margin-top: 50px; */
  /* flex-direction: column; */
`;

export const ImgWrapper = styled.div`
  max-width: 300px;
  max-height: 500px;
  margin-right: 50px;
`;

export const TextContentWrapper = styled.div`
  max-width: 475px;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export const ImgEl = styled.img`
  border-radius: 5px;
`;

export const Title = styled.h2`
  color: #ff6b08;
  margin-bottom: 30px;
`;

export const Text = styled.p`
  color: #3f4143;
`;

export const SubTitle = styled.h3`
  margin-bottom: 10px;
  margin-top: 30px;
  color: #3f4143;
`;

export const PagesList = styled.ul`
  display: flex;
`;

export const DetailsItem = styled.li`
  :not(:last-child) {
    margin-right: 30px;
  }
`;

export const PageLink = styled(Link)`
  display: inline-block;
  padding: 15px;
  font-weight: 500;
  color: #3f4143;
  font-size: 18px;

  &.active {
    color: #ff6b08;
  }
`;

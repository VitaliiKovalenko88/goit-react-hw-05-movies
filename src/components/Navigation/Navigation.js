import { NavLink, Outlet } from 'react-router-dom';
import { HeaderEl, Container, NavigationList } from './Navigation.styled';
import styled from 'styled-components';

export const LinkEl = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 15px;
  font-weight: 500;
  color: #ffffff;
  font-size: 18px;

  :hover,
  :focus {
    color: tomato;

    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.active {
    color: #ff6b08;
  }
`;

export const Navigation = () => {
  return (
    <>
      <HeaderEl>
        <Container>
          <NavigationList>
            <li>
              <LinkEl to="/">Home</LinkEl>
            </li>
            <li>
              <LinkEl to="/movies">Movies</LinkEl>
            </li>
          </NavigationList>
        </Container>
      </HeaderEl>
      <Outlet />
    </>
  );
};

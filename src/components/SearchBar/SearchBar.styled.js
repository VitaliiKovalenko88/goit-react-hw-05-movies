import styled from 'styled-components';

export const FormMovie = styled.form`
  text-align: center;
  margin-bottom: 50px;
  margin-top: 50px;
`;

export const InputMovie = styled.input`
  width: 400px;
  height: 35px;
  border: 3px solid #ff6b08;
  border-radius: 10px;
  outline: none;
  margin-right: 20px;

  ::placeholder {
    color: #3f4143;
  }
`;

export const SearchButton = styled.button`
  height: 35px;
  width: 100px;
  border-radius: 10px;
  background-color: #ff6b08;
  border: none;
  outline: none;
  color: #ffffff;
  box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.2);

  transition: background-color 250ms ease-in-out;

  :hover {
    background-color: #b14b06;
    transition: background-color 250ms ease-in-out;
  }
`;

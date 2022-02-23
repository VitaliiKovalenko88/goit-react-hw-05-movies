import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormMovie, InputMovie, SearchButton } from './SearchBar.styled';

export const SearchBar = props => {
  const [query, setQuery] = useState('');

  const handleSubmite = e => {
    e.preventDefault();

    if (query.trim() === '') {
      alert('write something please!!!');
      return;
    }

    props.onSubmite(query);

    setQuery('');
  };

  const handleNameChange = e => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  return (
    <FormMovie onSubmit={handleSubmite}>
      <InputMovie
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={query}
        onChange={handleNameChange}
      />
      <SearchButton type="submit">search</SearchButton>
    </FormMovie>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};

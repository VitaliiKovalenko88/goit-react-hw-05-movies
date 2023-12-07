import { useState } from 'react';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      alert('write something please!!!');
      return;
    }

    onSubmit(query);

    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Films</label>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        value={query}
        onChange={handleChange}
      />
      <button type="submit">search</button>
    </form>
  );
};

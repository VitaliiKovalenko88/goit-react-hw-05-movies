import { useState } from 'react';

export const SearchBar = ({ onSubmite }) => {
  const [query, setQuery] = useState('');

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmite = e => {
    e.preventDefault();

    if (query.trim() === '') {
      alert('write something please!!!');
      return;
    }

    onSubmite(query);

    setQuery('');
  };

  return (
    <form onSubmit={handleSubmite}>
      <label>Films</label>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        value={query}
        onChange={handleChange}
      />
      <button type="submite">search</button>
    </form>
  );
};

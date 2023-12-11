import { useState } from 'react';
import css from './SearchBar.module.css';

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
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.inp}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        value={query}
        onChange={handleChange}
      />
      <button className={css.btn} type="submit">
        search
      </button>
    </form>
  );
};

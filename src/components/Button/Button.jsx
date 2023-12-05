import css from './Button.module.css';

export const Button = ({ onLoadMore }) => (
  <button className={css.btn} onClick={onLoadMore} type="submite">
    LoadMore
  </button>
);

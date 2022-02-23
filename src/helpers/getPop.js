export const mapper = array => {
  return array.map(({ poster_path, title, id }) => {
    return { poster_path, title, id };
  });
};

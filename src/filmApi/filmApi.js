import axios from "axios";

const API_KEY = 'ea3bc943aa3fc0f55c10b5359222491e';
const BASE_URL = 'https://api.themoviedb.org/3/';
axios.defaults.baseURL = BASE_URL;

export const fetchTrendingMovies = async (page) => {
  const url = `trending/movie/day?language=en-US&&api_key=${API_KEY}&page=${page}`;
  const movies = await axios(url);
  return movies
}
export const fetchMovieDetal = async (id) => {
  const url = `movie/${id}?api_key=${API_KEY}`
  const film = await axios(url)
  return film;
};

export const fetchMovieByQuery = async (query, page) => {
  const url = `search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=${page}'`
  // const url = `search/movie?api_key=${API_KEY}&query=${query}`
  const response = await axios.get(url)

  const { data } = response;

  return data;
};

export const fetchMovieCast = async (id) => {
  const url = `movie/${id}/credits?api_key=${API_KEY}`
  const { data } = await axios.get(url);

  return data;
}

export const fetchMovieReviews = async (id) => {
  const url = `movie/${id}/reviews?api_key=${API_KEY}`
  const { data } = await axios.get(url);

  return data;
}



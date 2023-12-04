import axios from "axios";

const API_KEY = 'ea3bc943aa3fc0f55c10b5359222491e';
const BASE_URL = 'https://api.themoviedb.org';
axios.defaults.baseURL = BASE_URL;

export const fetchTrendingMovies = async (page) => {
  const url = `/3/trending/movie/day?api_key=${API_KEY}&page=${page}`;
  const movies = await axios(url);
  return movies
}
export const fetchMovieDetal = async (id) => {
  const film = await axios(`/3/movie/${id}?api_key=${API_KEY}`)
  return film;
};

export const fetchMovieByQuery = async (query) => {
  const response = await axios.get(`/3/search/movie?api_key=${API_KEY}&query=${query}`)

  const { data } = response;

  return data;
};

export const fetchMovieCast = async (id) => {
  const { data } = await axios.get(`/3/movie/${id}/credits?api_key=${API_KEY}`);

  return data;
}

export const fetchMovieReviews = async (id) => {
  const { data } = await axios.get(`/3/movie/${id}/reviews?api_key=${API_KEY}`);
  return data;
}



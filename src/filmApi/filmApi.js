import axios from "axios";

const API_KEY = '52102081be446c1b62679888583e10e9';
const BASE_URL = 'https://api.themoviedb.org';
axios.defaults.baseURL = BASE_URL;

const fetchTrendingMovies = async (page) => {
  const url = `/3/trending/movie/day?api_key=${API_KEY}&page=${page}`;
  const movies = await axios(url);
  console.log(movies)
}

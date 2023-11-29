import axios from "axios";

const API_KEY = 'ea3bc943aa3fc0f55c10b5359222491e';
const BASE_URL = 'https://api.themoviedb.org';
axios.defaults.baseURL = BASE_URL;

const fetchTrendingMovies = async (page) => {
  const url = `/3/trending/movie/day?api_key=${API_KEY}&page=${page}`;
  const movies = await axios(url);
  console.log(movies)
}
export default fetchTrendingMovies

fetchTrendingMovies(1)
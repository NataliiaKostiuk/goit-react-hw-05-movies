import axios from 'axios';


axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'be0837ad7b12209d8669bb03827597b0';


export const fetchMoviesByKeyword = async (query,page) => {
    const response = await axios.get(
      `search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}&per_page=12&include_adult=false`
    );
    return response.data.results;
};

export const fetchMovieById = async (movieId) => {
    const response = await axios.get(
      `/movie/${movieId}?api_key=${KEY}&language=en-US`
    );
    return response.data ;
};

export const fetchMovieCasts = async (movieId) => {
    const response = await axios.get(
      `movie/${movieId}/credits?api_key=${KEY}&language=en-US`
    );
    return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
    const response = await axios.get(
      `movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
    );
    return response.data.results;
};

export const fetchTrendingMovies = async () => {
    const response = await axios.get(
      `trending/movie/day?api_key=${KEY}`
    );
    return response.data.results;
};

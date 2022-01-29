import axios from "axios";

export const options = { query: '', pageNumber: 1, pageItemCount: 20, genresId: [], maxPage: 0 };


async function fetchPhoto() {
    const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?`
    const params = {
    params: {
      api_key: '6dae1a863e182d2e5c972909bcd1e575',
      language:`en-US`,
      query: options.query,
      page: options.pageNumber,
    },
  };
    const {data} = await axios.get(SEARCH_URL,params);
    return data
}

async function fetchGenres() {
  try {
    const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=6dae1a863e182d2e5c972909bcd1e575&language=en-US`);
    return data
  
  } catch (error) {
    console.log(error)
  }
}

async function fetchTrandingMovie() {
  try {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=6dae1a863e182d2e5c972909bcd1e575&&page=${options.pageNumber}`);
    // const ratings = document.querySelectorAll('.gallery-list__rating');
    // ratings.classList.add('visually-hidden');
    // console.log(ratings)
    return data

  } catch (error) {
    console.log(error)
  }
}

async function discoverGenres() {
  try {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=6dae1a863e182d2e5c972909bcd1e575&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${options.pageNumber}&with_genres=${options.genresId}&with_watch_monetization_types=flatrate`)
    return data
  } catch (e) {
    console.log(e)
  }
}

export { fetchPhoto, fetchGenres,discoverGenres, fetchTrandingMovie}
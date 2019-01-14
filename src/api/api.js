import { BASE_URL, NOW_PLAYING_PATH } from "./api.constants";

const fetchMovies = () => {
  return fetch(
    `${BASE_URL}/discover/movie?api_key=09991eb2985bce3334ee07e936171ea8&sort_by=popularity.asc`
  );
};

const fetchGenres = () => {
  return fetch(
    `${BASE_URL}/genre/movie/list?api_key=09991eb2985bce3334ee07e936171ea8`
  );
};

export { fetchMovies, fetchGenres };

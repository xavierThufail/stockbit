import axios from 'axios';

import CONSTANTS from '../../../Constants/reducers';

const baseUrl = 'http://www.omdbapi.com?';
const apiKey = 'ce169b84';

const setLoading = (payload) => ({
  type: CONSTANTS.movie.SET_LOADING,
  payload
});

const setError = (payload) => ({
  type: CONSTANTS.movie.SET_ERROR,
  payload
});

const setMovieList = (payload) => ({
  type: CONSTANTS.movie.SET_LIST_MOVIE,
  payload
});

const setMovieDetail = (payload) => ({
  type: CONSTANTS.movie.SET_MOVIE_DETAIL,
  payload
});

const setSearchTerm = (payload) => ({
  type: CONSTANTS.movie.SET_SEARCH_TERM,
  payload
});

const fetchData = (props, type = 'search') => {
  const params = {
    apikey: apiKey,
    ...props
  };

  return (dispatch) => {
    dispatch(setLoading(true));

    if(type === 'detail') dispatch(setMovieDetail({}));

    axios
      .get(baseUrl, { params })
      .then(({ data }) => {
        if(type === 'search') {
          dispatch(setMovieList(data));
        } else {
          dispatch(setMovieDetail(data))
        }
      })
      .catch(err => dispatch(setError(err)));

    dispatch(setLoading(false));
  }
};

const fetchDetail = (props) => {

}

const movieActions = {
  fetchData,
  setSearchTerm
}

export default movieActions;

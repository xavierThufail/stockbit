import CONSTANTS from '../../../Constants/reducers';

const initialReducers = {
  listMovies: [],
  movieDetail: {},
  favorites: [],
  loading: false,
  error: null,
  totalPage: 0,
  searchTerm: ''
};

const movieReducers = (state = initialReducers, actions) => {
  switch(actions.type) {
    case CONSTANTS.movie.SET_LIST_MOVIE:
      const totalPage = Math.floor(actions.payload.Search.length / 5);
      const newListMovie = [];

      for(let i = 1; i <= totalPage; i++) {
        newListMovie.push(actions.payload.Search.slice((i - 1) * 5, i * 5))
      };

      return {...state, listMovies: newListMovie, totalPage};
    case CONSTANTS.movie.SET_MOVIE_DETAIL:
      return {...state, movieDetail: actions.payload};
    case CONSTANTS.movie.ADD_FAVORITE:
      return {...state, favorites: [...state.favorites, actions.payload]};
    case CONSTANTS.movie.SET_SEARCH_TERM:
      return {...state, searchTerm: actions.payload}
    case CONSTANTS.movie.SET_LOADING:
      return {...state, loading: actions.payload};
    case CONSTANTS.movie.SET_ERROR:
      return {...state, error: actions.payload};
    default:
      return state;
  };
};

export default movieReducers;

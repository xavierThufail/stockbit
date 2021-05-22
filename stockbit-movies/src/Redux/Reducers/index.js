import { combineReducers } from 'redux';
import movieReducers from './Movie/Movie.reducer';

const rootReducers = combineReducers({
  movies: movieReducers
});

export default rootReducers;

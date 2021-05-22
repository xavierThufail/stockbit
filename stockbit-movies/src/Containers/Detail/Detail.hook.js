import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import allActions from '../../Redux/Actions';

const useDetail = () => {
  const { movieDetail } = useSelector(state => state.movies);

  const { id } = useParams();
  const history = useHistory();

  const dispatch = useDispatch();

  console.log({ movieDetail, hook: true });

  const handleToDetail = ({ imdbID }) => () => {
    history.push(`/details/${imdbID}`);
  }

  useEffect(() => {
    dispatch(allActions.movie.fetchData({ i: id }, 'detail'));
  }, []);

  return {
    movieDetail,
    handleToDetail
  }
};

export default useDetail;

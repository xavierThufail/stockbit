import { useEffect, useState, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import allActions from '../../Redux/Actions';

const useDashboard = () => {
  const [page, setPage] = useState(0);
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [imgUrl, setImgUrl] = useState('');
  const [refresh, setRefresh] = useState(true);

  const loader = useRef(null);

  const { listMovies, favorites, loading, error, totalPage, searchTerm } = useSelector(state => state.movies);
  const defaultSearch = 'deadpool';

  const dispatch = useDispatch();
  const history = useHistory();

  const handleOpenModal = (url) => () => {
    setShowModal(!showModal);
    setImgUrl(url);
  };

  const handleCloseModal = () => setShowModal(!showModal);

  const handleToDetail = ({ imdbID }) => () => {
    history.push(`/details/${imdbID}`);
  }

  useEffect(() => {
    dispatch(allActions.movie.fetchData({ s: defaultSearch }));
  },[]);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];

    if (target.isIntersecting) {
      setTimeout(() => setPage((prev) => {
        return prev + 1 <= 2 ? prev + 1 : prev
      }), 1000);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (loader.current) observer.observe(loader.current);
  }, [handleObserver, refresh]);

  useEffect(() => {
    if(listMovies[page - 1]) {
      setMovies((prev) => prev.concat(listMovies[page - 1]));
      setRefresh(false);
    }
    if(movies.length === 0 && listMovies.length === 2 && page === 0 && !refresh ) {
      setRefresh(true);
    }
  }, [listMovies, page]);

  useEffect(() => {
    setMovies([]);
    setPage(0)
  }, [searchTerm]);

  console.log({ movies, listMovies, searchTerm, page, loader: loader.current })

  return {
    listMovies: movies,
    lastPage: totalPage === 1 || page === 2,
    loader,
    page,
    handleToDetail,
    showModal,
    handleOpenModal,
    handleCloseModal,
    imgUrl
  }
};

export default useDashboard;

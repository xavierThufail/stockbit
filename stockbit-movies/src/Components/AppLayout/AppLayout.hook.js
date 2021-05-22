import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import allActions from '../../Redux/Actions';
import { useDebounce } from '../../Hooks';

const useLayout = () => {
  const [searchValue, setSearchValue] = useState('');
  const { listMovies, loading } = useSelector(state => state.movies);
  
  const dispatch = useDispatch();
  
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  }

  const debounceValue = useDebounce({ watchedValue: searchValue, delay: 1000 });

  useEffect(() => {
    if(searchValue) {
      dispatch(allActions.movie.setSearchTerm(debounceValue));
      dispatch(allActions.movie.fetchData({ s: debounceValue }));
    }
  }, [debounceValue]);

  return { handleSearch, loading }
};

export default useLayout;

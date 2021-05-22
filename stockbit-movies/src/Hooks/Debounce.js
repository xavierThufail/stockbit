import { useEffect, useState } from 'react';

const useDebounce = ({ watchedValue, delay }) => {
  const [debounceValue, setDebounceValue] = useState(watchedValue);

  useEffect(() => {
    const timeoutHandler = setTimeout(() => setDebounceValue(watchedValue), delay);

    return () => clearTimeout(timeoutHandler);
  }, [watchedValue]);

  return debounceValue;
};

export default useDebounce;

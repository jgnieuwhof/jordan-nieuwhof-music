import { useEffect, useState } from 'react';

const useLocalStorage = (key, defaultValue = null, transform = x => x) => {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    const foundValue = window.localStorage.getItem(key);
    if (foundValue !== null) {
      setValue(transform(foundValue));
    }
  }, []);
  return [
    value,
    x => {
      setValue(x);
      window.localStorage.setItem(key, x);
    }
  ];
};

export default useLocalStorage;

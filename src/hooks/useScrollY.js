import { useState, useEffect } from 'react';

const useScrollY = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const updateScrollY = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', updateScrollY);
    return () => window.removeEventListener('scroll', updateScrollY);
  }, []);

  return scrollY;
};

export default useScrollY;

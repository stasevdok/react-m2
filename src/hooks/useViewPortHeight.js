import { useState, useEffect } from 'react';

const useViewportHeight = () => {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateHeight = () => setViewportHeight(window.innerHeight);

    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return viewportHeight;
};

export default useViewportHeight;

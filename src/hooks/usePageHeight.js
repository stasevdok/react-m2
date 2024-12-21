import { useState, useEffect } from 'react';

const usePageHeight = () => {
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => setPageHeight(document.documentElement.scrollHeight);

    updateHeight();

    window.addEventListener('resize', updateHeight);

    const observer = new MutationObserver(updateHeight);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', updateHeight);
      observer.disconnect();
    };
  }, []);

  return pageHeight;
};

export default usePageHeight;

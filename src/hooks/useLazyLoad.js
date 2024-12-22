import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useLazyLoad = (
  selector = ".lazyload",
  options = { rootMargin: "0px 0px 100px 0px", threshold: 0.2 }
) => {
  const location = useLocation(); 

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src; 
          img.classList.add("loaded"); 
          observerInstance.unobserve(img);
        }
      });
    }, options);

    const elements = document.querySelectorAll(selector); 
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [selector, options, location]);
};

export default useLazyLoad;

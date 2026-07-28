import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Multiple methods for better mobile browser support
    window.scrollTo(0, 0);

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
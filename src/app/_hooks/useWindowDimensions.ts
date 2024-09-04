import { useState, useEffect } from 'react';

// TODO: fix 'window is not defined' error
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({width: window.innerWidth, height: window.innerHeight});

  useEffect(() => {
    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height
      };
    }

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


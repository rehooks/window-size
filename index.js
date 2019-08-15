'use strict';
let { useState, useEffect, useMemo } = require('react');

function useWindowSize() {
  const getSize = useMemo(() => () => ({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  }), [
    window.innerHeight,
    window.innerWidth,
    window.outerHeight,
    window.outerWidth,
  ]);
  
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

module.exports = useWindowSize;

'use strict';
let { useState, useEffect } = require('react');

function isClient() {
  return typeof window === 'object';
}

function getSize() {
  if (!isClient()) {
    return {
      innerHeight: undefined,
      innerWidth: undefined,
      outerHeight: undefined,
      outerWidth: undefined,
    };
  }

  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    if (!isClient()) return undefined;

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

module.exports = useWindowSize;

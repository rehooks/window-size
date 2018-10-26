'use strict'
let { useState, useEffect } = require('react');

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
};

function useWindowSize(debounceMs) {
  let [windowSize, setWindowSize] = useState(getSize());

  let timeoutId;

  function handleResize() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(function() {
      setWindowSize(getSize());
    }, debounceMs);
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

'use strict';
let { useState, useEffect } = require('react');

function useWindowSize() {
  let isClient = typeof window === 'object';
  let [windowSize, setWindowSize] = useState(getSize());

  function getSize() {
    return {
      innerHeight: isClient ? window.innerHeight : undefined,
      innerWidth: isClient ? window.innerWidth : undefined,
      outerHeight: isClient ? window.outerHeight : undefined,
      outerWidth: isClient ? window.outerWidth : undefined
    };
  }

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    if (!isClient) return undefined;

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

module.exports = useWindowSize;

import React from 'react';
import { render } from 'react-dom';
import useWindowWidth from './';

function App() {
  let windowWidth = useWindowWidth();
  return <pre>{JSON.stringify(windowWidth)}</pre>;
}

render(<App />, window.root);

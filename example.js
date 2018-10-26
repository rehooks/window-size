import React from 'react';
import { render } from 'react-dom';
import useWindowWidth from './';

function App() {
	let debouncedWindowWidth = useWindowWidth(500);
	let windowWidth = useWindowWidth();
	return [
		<pre>Debounced: {JSON.stringify(debouncedWindowWidth)}</pre>,
		<pre>Firehose: {JSON.stringify(windowWidth)}</pre>,
	];
}

render(<App />, window.root);

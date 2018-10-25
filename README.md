# `@rehooks/window-size`

> React hook for subscribing to window size

## Install

```sh
yarn add @rehooks/window-size
```

## Usage

```js
import useWindowSize from '@rehooks/window-size';

function MyComponent() {
  let windowSize = useWindowSize();
  // {
  //   innerWidth: window.innerWidth,
  //   innerHeight: window.innerHeight,
  //   outerWidth: window.outerWidth,
  //   outerHeight: window.outerHeight,
  // }

  // ...
}
```

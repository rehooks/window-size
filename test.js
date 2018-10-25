'use strict';
let test = require('ava');
let { createElement: h } = require('react');
let ReactTestRenderer = require('react-test-renderer');
let useWindowSize = require('./');

function render(val) {
  return ReactTestRenderer.create(val).toJSON();
}

test(t => {
  function Component() {
    return JSON.stringify(useWindowSize());
  }

  t.is(render(h(Component)), JSON.stringify({
    innerHeight: window.innerHeight,
    innerWidth: window.innerHeight,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  }));
});

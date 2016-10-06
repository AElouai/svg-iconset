'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Google;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Google(_ref) {
  var size = _ref.size;
  var color = _ref.color;

  return _react2.default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      style: color ? { fill: color, stroke: color } : null,
      viewBox: '0 0 32 32'
    },
    _react2.default.createElement('path', { d: 'M15.22,14.488c0.482-0.484,0.525-1.155,0.525-1.534c0-1.511-0.903-3.863-2.646-3.863 c-0.546,0-1.134,0.273-1.47,0.694c-0.357,0.441-0.462,1.007-0.462,1.553c0,1.406,0.819,3.738,2.625,3.738 C14.316,15.076,14.883,14.824,15.22,14.488L15.22,14.488z M14.61,18.477c-0.168-0.021-0.273-0.021-0.483-0.021 c-0.189,0-1.323,0.042-2.205,0.336c-0.462,0.168-1.806,0.671-1.806,2.162c0,1.491,1.449,2.561,3.696,2.561 c2.016,0,3.086-0.965,3.086-2.267C16.899,20.178,16.207,19.611,14.61,18.477L14.61,18.477z M20.768,11.807h-2.273v-1.136h2.273 V8.399h1.136v2.273h2.273v1.136h-2.273v2.273h-1.136V11.807z M16.102,9.154c0.483,0.399,1.491,1.239,1.491,2.835 c0,1.554-0.882,2.289-1.764,2.981C15.556,15.244,15.24,15.538,15.24,16s0.315,0.714,0.546,0.903l0.756,0.588 c0.924,0.777,1.764,1.491,1.764,2.94c0,1.973-1.911,3.968-5.522,3.968c-3.044,0-4.514-1.449-4.514-3.003 c0-0.756,0.378-1.827,1.617-2.562c1.301-0.798,3.066-0.902,4.01-0.966c-0.294-0.378-0.63-0.778-0.63-1.428 c0-0.357,0.105-0.567,0.21-0.819c-0.231,0.021-0.462,0.042-0.672,0.042c-2.225,0-3.485-1.66-3.485-3.297 c0-0.965,0.441-2.037,1.344-2.814c1.197-0.987,2.625-1.155,3.758-1.155h4.325l-1.344,0.755L16.102,9.154L16.102,9.154z' })
  );
}
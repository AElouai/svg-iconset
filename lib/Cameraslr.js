'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Cameraslr;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Cameraslr(_ref) {
  var size = _ref.size;
  var strokeColor = _ref.strokeColor;
  var strokeWidth = _ref.strokeWidth;
  var fillColor = _ref.fillColor;
  var svgClass = _ref.svgClass;

  var inlineStyling = {
    fill: fillColor,
    stroke: strokeColor,
    strokeWidth: strokeWidth
  };

  return _react2.default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      style: inlineStyling,
      className: svgClass,
      viewBox: '0 0 8 8'
    },
    _react2.default.createElement('path', { d: 'M4.09 0c-.05 0-.1.04-.13.09l-.94 1.81c-.02.05-.07.09-.13.09h-1.41c-.83 0-1.5.67-1.5 1.5v4.41c0 .05.04.09.09.09h7.81c.05 0 .09-.04.09-.09v-5.81c0-.06-.04-.09-.09-.09h-.81c-.05 0-.1-.04-.13-.09l-.94-1.81c-.03-.05-.07-.09-.13-.09h-1.81zm-2.59 3c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zm3.5 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z'
    })
  );
}

Cameraslr.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};
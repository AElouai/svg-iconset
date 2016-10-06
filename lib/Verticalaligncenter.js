'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Verticalaligncenter;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Verticalaligncenter(_ref) {
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
    _react2.default.createElement('path', { d: 'M.09 0c-.06 0-.09.04-.09.09v1.91h2v-1.91c0-.06-.04-.09-.09-.09h-1.81zm6 0c-.05 0-.09.04-.09.09v1.91h2v-1.91c0-.06-.04-.09-.09-.09h-1.81zm-3 1c-.06 0-.09.04-.09.09v.91h2v-.91c0-.05-.04-.09-.09-.09h-1.81zm-3.09 2v1h8v-1h-8zm0 2v1.91c0 .05.04.09.09.09h1.81c.05 0 .09-.04.09-.09v-1.91h-2zm3 0v.91c0 .05.04.09.09.09h1.81c.05 0 .09-.04.09-.09v-.91h-2zm3 0v1.91c0 .05.04.09.09.09h1.81c.05 0 .09-.04.09-.09v-1.91h-2z'
    })
  );
}

Verticalaligncenter.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Eyedropper;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Eyedropper(_ref) {
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
    _react2.default.createElement('path', { d: 'M3.31 0a.5.5 0 0 0-.19.84l.63.63-3.59 3.66-.16.16v2.7199999999999998h2.69l.16-.16 3.66-3.66.63.66a.5.5 0 1 0 .72-.69l-.94-.94.66-.66c.59-.58.59-1.54 0-2.13-.57-.57-1.56-.57-2.13 0l-.66.66-.94-.94a.5.5 0 0 0-.47-.16.5.5 0 0 0-.06 0zm1.16 2.19l1.31 1.31-3.16 3.16-1.28-1.31 3.13-3.16z'
    })
  );
}

Eyedropper.defaultProps = {
  strokeColor: 'blue',
  strokeWidth: 0,
  fillColor: '#bada55',
  size: 32,
  svgClass: 'sui-SVGicon'
};
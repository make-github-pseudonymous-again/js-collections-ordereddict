'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._OrderedDict = exports._ordereddict = exports.OrderedDict = exports.ordereddict = undefined;

var _OrderedDict2 = require('./_OrderedDict');

var _OrderedDict3 = _interopRequireDefault(_OrderedDict2);

var _ordereddict2 = require('./_ordereddict');

var _ordereddict3 = _interopRequireDefault(_ordereddict2);

var _jsCollectionsDict = require('@aureooms/js-collections-dict');

var _jsDll = require('@aureooms/js-dll');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderedDict = (0, _OrderedDict3.default)(_jsCollectionsDict.Dict, Map, _jsDll.DoublyLinkedList); // Map is the native map implementation
var ordereddict = (0, _ordereddict3.default)(OrderedDict);

exports.default = ordereddict;
exports.ordereddict = ordereddict;
exports.OrderedDict = OrderedDict;
exports._ordereddict = _ordereddict3.default;
exports._OrderedDict = _OrderedDict3.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPcmRlcmVkRGljdCIsIk1hcCIsIm9yZGVyZWRkaWN0IiwiX29yZGVyZWRkaWN0IiwiX09yZGVyZWREaWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBRUEsSUFBTUEsY0FBYyxvREFBcUJDLEdBQXJCLDBCQUFwQixDLENBQW9FO0FBQ3BFLElBQU1DLGNBQWMsMkJBQWNGLFdBQWQsQ0FBcEI7O2tCQUVlRSxXO1FBR2RBLFcsR0FBQUEsVztRQUNBRixXLEdBQUFBLFc7UUFDQUcsWTtRQUNBQyxZIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9PcmRlcmVkRGljdCBmcm9tICcuL19PcmRlcmVkRGljdCcgO1xuaW1wb3J0IF9vcmRlcmVkZGljdCBmcm9tICcuL19vcmRlcmVkZGljdCcgO1xuXG5pbXBvcnQgeyBEaWN0IH0gZnJvbSAnQGF1cmVvb21zL2pzLWNvbGxlY3Rpb25zLWRpY3QnIDtcbmltcG9ydCB7IERvdWJseUxpbmtlZExpc3QgfSBmcm9tICdAYXVyZW9vbXMvanMtZGxsJyA7XG5cbmNvbnN0IE9yZGVyZWREaWN0ID0gX09yZGVyZWREaWN0KCBEaWN0ICwgTWFwICwgRG91Ymx5TGlua2VkTGlzdCApIDsgLy8gTWFwIGlzIHRoZSBuYXRpdmUgbWFwIGltcGxlbWVudGF0aW9uXG5jb25zdCBvcmRlcmVkZGljdCA9IF9vcmRlcmVkZGljdCggT3JkZXJlZERpY3QgKSA7XG5cbmV4cG9ydCBkZWZhdWx0IG9yZGVyZWRkaWN0IDtcblxuZXhwb3J0IHtcblx0b3JkZXJlZGRpY3QgLFxuXHRPcmRlcmVkRGljdCAsXG5cdF9vcmRlcmVkZGljdCAsXG5cdF9PcmRlcmVkRGljdCAsXG59IDtcblxuIl19
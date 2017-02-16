'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._OrderedDict = exports._ordereddict = exports.OrderedDict = exports.ordereddict = undefined;

var _OrderedDict2 = require('./_OrderedDict');

var _OrderedDict3 = _interopRequireDefault(_OrderedDict2);

var _ordereddict2 = require('./_ordereddict');

var _ordereddict3 = _interopRequireDefault(_ordereddict2);

var _aureoomsJsCollectionsDict = require('@aureooms/js-collections-dict');

var _aureoomsJsDll = require('@aureooms/js-dll');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderedDict = (0, _OrderedDict3.default)(_aureoomsJsCollectionsDict.Dict, Map, _aureoomsJsDll.DoublyLinkedList); // Map is the native map implementation
var ordereddict = (0, _ordereddict3.default)(OrderedDict);

exports.default = ordereddict;
exports.ordereddict = ordereddict;
exports.OrderedDict = OrderedDict;
exports._ordereddict = _ordereddict3.default;
exports._OrderedDict = _OrderedDict3.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJPcmRlcmVkRGljdCIsIk1hcCIsIm9yZGVyZWRkaWN0IiwiX29yZGVyZWRkaWN0IiwiX09yZGVyZWREaWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBRUEsSUFBTUEsY0FBYyw0REFBcUJDLEdBQXJCLGtDQUFwQixDLENBQW9FO0FBQ3BFLElBQU1DLGNBQWMsMkJBQWNGLFdBQWQsQ0FBcEI7O2tCQUVlRSxXO1FBR2RBLFcsR0FBQUEsVztRQUNBRixXLEdBQUFBLFc7UUFDQUcsWTtRQUNBQyxZIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9PcmRlcmVkRGljdCBmcm9tICcuL19PcmRlcmVkRGljdCcgO1xuaW1wb3J0IF9vcmRlcmVkZGljdCBmcm9tICcuL19vcmRlcmVkZGljdCcgO1xuXG5pbXBvcnQgeyBEaWN0IH0gZnJvbSAnYXVyZW9vbXMtanMtY29sbGVjdGlvbnMtZGljdCcgO1xuaW1wb3J0IHsgRG91Ymx5TGlua2VkTGlzdCB9IGZyb20gJ2F1cmVvb21zLWpzLWRsbCcgO1xuXG5jb25zdCBPcmRlcmVkRGljdCA9IF9PcmRlcmVkRGljdCggRGljdCAsIE1hcCAsIERvdWJseUxpbmtlZExpc3QgKSA7IC8vIE1hcCBpcyB0aGUgbmF0aXZlIG1hcCBpbXBsZW1lbnRhdGlvblxuY29uc3Qgb3JkZXJlZGRpY3QgPSBfb3JkZXJlZGRpY3QoIE9yZGVyZWREaWN0ICkgO1xuXG5leHBvcnQgZGVmYXVsdCBvcmRlcmVkZGljdCA7XG5cbmV4cG9ydCB7XG5cdG9yZGVyZWRkaWN0ICxcblx0T3JkZXJlZERpY3QgLFxuXHRfb3JkZXJlZGRpY3QgLFxuXHRfT3JkZXJlZERpY3QgLFxufSA7XG5cbiJdfQ==
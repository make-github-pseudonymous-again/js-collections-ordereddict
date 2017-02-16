'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _OrderedDict;

var _jsError = require('@aureooms/js-error');

var _jsMapping = require('@aureooms/js-mapping');

function _OrderedDict(Dict, Map, DoublyLinkedList) {

	var OrderedDict = function OrderedDict(mapping) {

		this.container = new Map();

		this.map = new Map();

		this.list = new DoublyLinkedList();

		if (mapping !== null) this.update(mapping);
	};

	OrderedDict.prototype = new Dict();

	OrderedDict.prototype.isequal = function (other) {

		if (!(other instanceof OrderedDict)) return false;

		if (!Dict.prototype.isequal.call(this, other)) return false;

		var keys = this.keys();

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = other.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var key = _step.value;


				if (keys.next().value !== key) return false;
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return true;
	};

	OrderedDict.prototype.set = function (key, value) {

		if (!this.has(key)) {

			this.map.set(key, this.list.push(key));
		}

		this.container.set(key, value);

		return this;
	};

	OrderedDict.prototype.delete = function (key) {

		if (!this.container.delete(key)) throw new _jsError.KeyError();

		this.list.erase(this.map.get(key));
		this.map.delete(key);

		return this;
	};

	OrderedDict.prototype.clear = function () {

		this.container.clear();

		this.map.clear();

		this.list.clear();

		return this;
	};

	OrderedDict.prototype.copy = function () {

		return new OrderedDict(this.items());
	};

	OrderedDict.fromkeys = function (seq) {
		var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


		return new OrderedDict((0, _jsMapping.fromkeys)(seq, value));
	};

	OrderedDict.prototype.popitem = function () {
		var last = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;


		if (this.len() === 0) throw new _jsError.KeyError();

		var key = last ? this.list.end().prev().value : this.list.begin().next().value;

		return [key, this.pop(key)];
	};

	OrderedDict.prototype.move_to_end = function (key) {
		var last = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


		if (!this.container.has(key)) throw new _jsError.KeyError();

		this.list.erase(this.map.get(key));

		var iterator = last ? this.list.push(key) : this.list.unshift(key);

		this.map.set(key, iterator);

		return this;
	};

	OrderedDict.prototype.keys = regeneratorRuntime.mark(function _callee() {
		var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, key;

		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_iteratorNormalCompletion2 = true;
						_didIteratorError2 = false;
						_iteratorError2 = undefined;
						_context.prev = 3;
						_iterator2 = this.list[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
							_context.next = 12;
							break;
						}

						key = _step2.value;
						_context.next = 9;
						return key;

					case 9:
						_iteratorNormalCompletion2 = true;
						_context.next = 5;
						break;

					case 12:
						_context.next = 18;
						break;

					case 14:
						_context.prev = 14;
						_context.t0 = _context['catch'](3);
						_didIteratorError2 = true;
						_iteratorError2 = _context.t0;

					case 18:
						_context.prev = 18;
						_context.prev = 19;

						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}

					case 21:
						_context.prev = 21;

						if (!_didIteratorError2) {
							_context.next = 24;
							break;
						}

						throw _iteratorError2;

					case 24:
						return _context.finish(21);

					case 25:
						return _context.finish(18);

					case 26:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[3, 14, 18, 26], [19,, 21, 25]]);
	});

	OrderedDict.prototype.values = regeneratorRuntime.mark(function _callee2() {
		var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, key;

		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_iteratorNormalCompletion3 = true;
						_didIteratorError3 = false;
						_iteratorError3 = undefined;
						_context2.prev = 3;
						_iterator3 = this.keys()[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
							_context2.next = 12;
							break;
						}

						key = _step3.value;
						_context2.next = 9;
						return this.container.get(key);

					case 9:
						_iteratorNormalCompletion3 = true;
						_context2.next = 5;
						break;

					case 12:
						_context2.next = 18;
						break;

					case 14:
						_context2.prev = 14;
						_context2.t0 = _context2['catch'](3);
						_didIteratorError3 = true;
						_iteratorError3 = _context2.t0;

					case 18:
						_context2.prev = 18;
						_context2.prev = 19;

						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}

					case 21:
						_context2.prev = 21;

						if (!_didIteratorError3) {
							_context2.next = 24;
							break;
						}

						throw _iteratorError3;

					case 24:
						return _context2.finish(21);

					case 25:
						return _context2.finish(18);

					case 26:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, this, [[3, 14, 18, 26], [19,, 21, 25]]);
	});

	OrderedDict.prototype.items = regeneratorRuntime.mark(function _callee3() {
		var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, key;

		return regeneratorRuntime.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						_iteratorNormalCompletion4 = true;
						_didIteratorError4 = false;
						_iteratorError4 = undefined;
						_context3.prev = 3;
						_iterator4 = this.keys()[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
							_context3.next = 12;
							break;
						}

						key = _step4.value;
						_context3.next = 9;
						return [key, this.container.get(key)];

					case 9:
						_iteratorNormalCompletion4 = true;
						_context3.next = 5;
						break;

					case 12:
						_context3.next = 18;
						break;

					case 14:
						_context3.prev = 14;
						_context3.t0 = _context3['catch'](3);
						_didIteratorError4 = true;
						_iteratorError4 = _context3.t0;

					case 18:
						_context3.prev = 18;
						_context3.prev = 19;

						if (!_iteratorNormalCompletion4 && _iterator4.return) {
							_iterator4.return();
						}

					case 21:
						_context3.prev = 21;

						if (!_didIteratorError4) {
							_context3.next = 24;
							break;
						}

						throw _iteratorError4;

					case 24:
						return _context3.finish(21);

					case 25:
						return _context3.finish(18);

					case 26:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, this, [[3, 14, 18, 26], [19,, 21, 25]]);
	});

	OrderedDict.prototype[Symbol.iterator] = OrderedDict.prototype.items;

	return OrderedDict;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fT3JkZXJlZERpY3QuanMiXSwibmFtZXMiOlsiX09yZGVyZWREaWN0IiwiRGljdCIsIk1hcCIsIkRvdWJseUxpbmtlZExpc3QiLCJPcmRlcmVkRGljdCIsIm1hcHBpbmciLCJjb250YWluZXIiLCJtYXAiLCJsaXN0IiwidXBkYXRlIiwicHJvdG90eXBlIiwiaXNlcXVhbCIsIm90aGVyIiwiY2FsbCIsImtleXMiLCJrZXkiLCJuZXh0IiwidmFsdWUiLCJzZXQiLCJoYXMiLCJwdXNoIiwiZGVsZXRlIiwiZXJhc2UiLCJnZXQiLCJjbGVhciIsImNvcHkiLCJpdGVtcyIsImZyb21rZXlzIiwic2VxIiwicG9waXRlbSIsImxhc3QiLCJsZW4iLCJlbmQiLCJwcmV2IiwiYmVnaW4iLCJwb3AiLCJtb3ZlX3RvX2VuZCIsIml0ZXJhdG9yIiwidW5zaGlmdCIsInZhbHVlcyIsIlN5bWJvbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBR3dCQSxZOztBQUh4Qjs7QUFDQTs7QUFFZSxTQUFTQSxZQUFULENBQXdCQyxJQUF4QixFQUErQkMsR0FBL0IsRUFBcUNDLGdCQUFyQyxFQUF3RDs7QUFFdEUsS0FBTUMsY0FBYyxTQUFkQSxXQUFjLENBQVdDLE9BQVgsRUFBcUI7O0FBRXhDLE9BQUtDLFNBQUwsR0FBaUIsSUFBSUosR0FBSixFQUFqQjs7QUFFQSxPQUFLSyxHQUFMLEdBQVcsSUFBSUwsR0FBSixFQUFYOztBQUVBLE9BQUtNLElBQUwsR0FBWSxJQUFJTCxnQkFBSixFQUFaOztBQUVBLE1BQUtFLFlBQVksSUFBakIsRUFBd0IsS0FBS0ksTUFBTCxDQUFhSixPQUFiO0FBRXhCLEVBVkQ7O0FBWUFELGFBQVlNLFNBQVosR0FBd0IsSUFBSVQsSUFBSixFQUF4Qjs7QUFFQUcsYUFBWU0sU0FBWixDQUFzQkMsT0FBdEIsR0FBZ0MsVUFBV0MsS0FBWCxFQUFtQjs7QUFFbEQsTUFBSyxFQUFJQSxpQkFBaUJSLFdBQXJCLENBQUwsRUFBMEMsT0FBTyxLQUFQOztBQUUxQyxN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QUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBL0I7O0FBTUFYLGFBQVlNLFNBQVosQ0FBc0JnQixLQUF0QiwyQkFBOEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRVosS0FBS1osSUFBTCxFQUZZOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRW5CQyxTQUZtQjtBQUFBO0FBQUEsYUFFUyxDQUFFQSxHQUFGLEVBQVEsS0FBS1QsU0FBTCxDQUFlaUIsR0FBZixDQUFvQlIsR0FBcEIsQ0FBUixDQUZUOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFBOUI7O0FBTUFYLGFBQVlNLFNBQVosQ0FBc0I4QixPQUFPSCxRQUE3QixJQUF5Q2pDLFlBQVlNLFNBQVosQ0FBc0JnQixLQUEvRDs7QUFFQSxRQUFPdEIsV0FBUDtBQUVBIiwiZmlsZSI6Il9PcmRlcmVkRGljdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtleUVycm9yIH0gZnJvbSAnQGF1cmVvb21zL2pzLWVycm9yJyA7XG5pbXBvcnQgeyBmcm9ta2V5cyB9IGZyb20gJ0BhdXJlb29tcy9qcy1tYXBwaW5nJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9PcmRlcmVkRGljdCAoIERpY3QgLCBNYXAgLCBEb3VibHlMaW5rZWRMaXN0ICkge1xuXG5cdGNvbnN0IE9yZGVyZWREaWN0ID0gZnVuY3Rpb24gKCBtYXBwaW5nICkge1xuXG5cdFx0dGhpcy5jb250YWluZXIgPSBuZXcgTWFwKCApIDtcblxuXHRcdHRoaXMubWFwID0gbmV3IE1hcCggKSA7XG5cblx0XHR0aGlzLmxpc3QgPSBuZXcgRG91Ymx5TGlua2VkTGlzdCggKSA7XG5cblx0XHRpZiAoIG1hcHBpbmcgIT09IG51bGwgKSB0aGlzLnVwZGF0ZSggbWFwcGluZyApIDtcblxuXHR9IDtcblxuXHRPcmRlcmVkRGljdC5wcm90b3R5cGUgPSBuZXcgRGljdCggKSA7XG5cblx0T3JkZXJlZERpY3QucHJvdG90eXBlLmlzZXF1YWwgPSBmdW5jdGlvbiAoIG90aGVyICkge1xuXG5cdFx0aWYgKCAhICggb3RoZXIgaW5zdGFuY2VvZiBPcmRlcmVkRGljdCApICkgcmV0dXJuIGZhbHNlIDtcblxuXHRcdGlmICggIURpY3QucHJvdG90eXBlLmlzZXF1YWwuY2FsbCggdGhpcyAsIG90aGVyICkgKSByZXR1cm4gZmFsc2UgO1xuXG5cdFx0bGV0IGtleXMgPSB0aGlzLmtleXMoICkgO1xuXG5cdFx0Zm9yICggbGV0IGtleSBvZiBvdGhlci5rZXlzKCApICkge1xuXG5cdFx0XHRpZiAoIGtleXMubmV4dCggKS52YWx1ZSAhPT0ga2V5ICkgcmV0dXJuIGZhbHNlIDtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlIDtcblxuXHR9IDtcblxuXHRPcmRlcmVkRGljdC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKCBrZXkgLCB2YWx1ZSApIHtcblxuXHRcdGlmICggIXRoaXMuaGFzKCBrZXkgKSApIHtcblxuXHRcdFx0dGhpcy5tYXAuc2V0KCBrZXkgLCB0aGlzLmxpc3QucHVzaCgga2V5ICkgKSA7XG5cblx0XHR9XG5cblx0XHR0aGlzLmNvbnRhaW5lci5zZXQoIGtleSAsIHZhbHVlICkgO1xuXG5cdFx0cmV0dXJuIHRoaXMgO1xuXG5cdH0gO1xuXG5cdE9yZGVyZWREaWN0LnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoIGtleSApIHtcblxuXHRcdGlmICggIXRoaXMuY29udGFpbmVyLmRlbGV0ZSgga2V5ICkgKSB0aHJvdyBuZXcgS2V5RXJyb3IoICkgO1xuXG5cdFx0dGhpcy5saXN0LmVyYXNlKCB0aGlzLm1hcC5nZXQoIGtleSApICkgO1xuXHRcdHRoaXMubWFwLmRlbGV0ZSgga2V5ICkgO1xuXG5cdFx0cmV0dXJuIHRoaXMgO1xuXG5cdH0gO1xuXG5cdE9yZGVyZWREaWN0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICggKSB7XG5cblx0XHR0aGlzLmNvbnRhaW5lci5jbGVhciggKSA7XG5cblx0XHR0aGlzLm1hcC5jbGVhciggKSA7XG5cblx0XHR0aGlzLmxpc3QuY2xlYXIoICkgO1xuXG5cdFx0cmV0dXJuIHRoaXMgO1xuXG5cdH0gO1xuXG5cdE9yZGVyZWREaWN0LnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKCApIHtcblxuXHRcdHJldHVybiBuZXcgT3JkZXJlZERpY3QoIHRoaXMuaXRlbXMoICkgKSA7XG5cblx0fSA7XG5cblx0T3JkZXJlZERpY3QuZnJvbWtleXMgPSBmdW5jdGlvbiAoIHNlcSAsIHZhbHVlID0gbnVsbCApIHtcblxuXHRcdHJldHVybiBuZXcgT3JkZXJlZERpY3QoIGZyb21rZXlzKCBzZXEgLCB2YWx1ZSApICkgO1xuXG5cdH0gO1xuXG5cdE9yZGVyZWREaWN0LnByb3RvdHlwZS5wb3BpdGVtID0gZnVuY3Rpb24gKCBsYXN0ID0gdHJ1ZSApIHtcblxuXHRcdGlmICggdGhpcy5sZW4oICkgPT09IDAgKSB0aHJvdyBuZXcgS2V5RXJyb3IoICkgO1xuXG5cdFx0Y29uc3Qga2V5ID0gbGFzdCA/XG5cdFx0dGhpcy5saXN0LmVuZCggKS5wcmV2KCApLnZhbHVlIDpcblx0XHR0aGlzLmxpc3QuYmVnaW4oICkubmV4dCggKS52YWx1ZSA7XG5cblx0XHRyZXR1cm4gWyBrZXkgLCB0aGlzLnBvcCgga2V5ICkgXSA7XG5cblx0fSA7XG5cblx0T3JkZXJlZERpY3QucHJvdG90eXBlLm1vdmVfdG9fZW5kID0gZnVuY3Rpb24gKCBrZXkgLCBsYXN0ID0gdHJ1ZSApIHtcblxuXHRcdGlmICggIXRoaXMuY29udGFpbmVyLmhhcygga2V5ICkgKSB0aHJvdyBuZXcgS2V5RXJyb3IoICkgO1xuXG5cdFx0dGhpcy5saXN0LmVyYXNlKCB0aGlzLm1hcC5nZXQoIGtleSApICkgO1xuXG5cdFx0Y29uc3QgaXRlcmF0b3IgPSBsYXN0ID8gdGhpcy5saXN0LnB1c2goIGtleSApIDogdGhpcy5saXN0LnVuc2hpZnQoIGtleSApIDtcblxuXHRcdHRoaXMubWFwLnNldCgga2V5ICwgaXRlcmF0b3IgKSA7XG5cblx0XHRyZXR1cm4gdGhpcyA7XG5cblx0fSA7XG5cblx0T3JkZXJlZERpY3QucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiogKCApIHtcblxuXHRcdGZvciAoIGxldCBrZXkgb2YgdGhpcy5saXN0ICkgeWllbGQga2V5IDtcblxuXHR9IDtcblxuXHRPcmRlcmVkRGljdC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24qICggKSB7XG5cblx0XHRmb3IgKCBsZXQga2V5IG9mIHRoaXMua2V5cyggKSApIHlpZWxkIHRoaXMuY29udGFpbmVyLmdldCgga2V5ICkgO1xuXG5cdH0gO1xuXG5cdE9yZGVyZWREaWN0LnByb3RvdHlwZS5pdGVtcyA9IGZ1bmN0aW9uKiAoICkge1xuXG5cdFx0Zm9yICggbGV0IGtleSBvZiB0aGlzLmtleXMoICkgKSB5aWVsZCBbIGtleSAsIHRoaXMuY29udGFpbmVyLmdldCgga2V5ICkgXSA7XG5cblx0fSA7XG5cblx0T3JkZXJlZERpY3QucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBPcmRlcmVkRGljdC5wcm90b3R5cGUuaXRlbXMgO1xuXG5cdHJldHVybiBPcmRlcmVkRGljdCA7XG5cbn1cbiJdfQ==
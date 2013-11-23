/*jslint vars: true, plusplus: true*/
/*global window, console*/
(function (window) {
	'use strict';
	
	var bezierPresets = {
		'default'			: [
			[0.000, 0.500, 0.500, 1.000],
			[0.000, 0.250, 0.750, 1.000]
		],
		'ease'				: [
			[0.000, 0.250, 0.250, 1.000],
			[0.000, 0.100, 1.000, 1.000]
		],
		'ease-in'			: [
			[0.000, 0.420, 1.000, 1.000],
			[0.000, 0.000, 1.000, 1.000]
		],
		'ease-out'			: [
			[0.000, 0.000, 0.580, 1.000],
			[0.000, 0.000, 1.000, 1.000]
		],
		'ease-in-out'		: [
			[0.000, 0.420, 0.580, 1.000],
			[0.000, 0.000, 1.000, 1.000]
		],
		'ease-in-quad'		: [
			[0.000, 0.550, 0.680, 1.000],
			[0.000, 0.085, 0.530, 1.000]
		],
		'ease-in-cubic'		: [
			[0.000, 0.550, 0.675, 1.000],
			[0.000, 0.055, 0.190, 1.000]
		],
		'ease-in-quart'		: [
			[0.000, 0.895, 0.685, 1.000],
			[0.000, 0.030, 0.220, 1.000]
		],
		'ease-in-quint'		: [
			[0.000, 0.755, 0.855, 1.000],
			[0.000, 0.050, 0.060, 1.000]
		],
		'ease-in-sine'		: [
			[0.000, 0.470, 0.745, 1.000],
			[0.000, 0.000, 0.715, 1.000]
		],
		'ease-in-expo'		: [
			[0.000, 0.950, 0.795, 1.000],
			[0.000, 0.050, 0.035, 1.000]
		],
		'ease-in-circ'		: [
			[0.000, 0.600, 0.980, 1.000],
			[0.000, 0.040, 0.335, 1.000]
		],
		'ease-in-back'		: [
			[0.000, 0.600, 0.735, 1.000],
			[0.000, -0.280, 0.045, 1.000]
		],
		'ease-out-quad'		: [
			[0.000, 0.250, 0.450, 1.000],
			[0.000, 0.460, 0.940, 1.000]
		],
		'ease-out-cubic'	: [
			[0.000, 0.215, 0.355, 1.000],
			[0.000, 0.610, 1.000, 1.000]
		],
		'ease-out-quart'	: [
			[0.000, 0.165, 0.440, 1.000],
			[0.000, 0.840, 1.000, 1.000]
		],
		'ease-out-quint'	: [
			[0.000, 0.230, 0.320, 1.000],
			[0.000, 1.000, 1.000, 1.000]
		],
		'ease-out-sine'		: [
			[0.000, 0.470, 0.745, 1.000],
			[0.000, 0.610, 1.000, 1.000]
		],
		'ease-out-expo'		: [
			[0.000, 0.190, 0.220, 1.000],
			[0.000, 1.000, 1.000, 1.000]
		],
		'ease-out-circ'		: [
			[0.000, 0.075, 0.165, 1.000],
			[0.000, 0.820, 1.000, 1.000]
		],
		'ease-out-back'		: [
			[0.000, 0.175, 0.320, 1.000],
			[0.000, 0.885, 1.275, 1.000]
		],
		'ease-in-out-quad'	: [
			[0.000, 0.455, 0.515, 1.000],
			[0.000, 0.030, 0.955, 1.000]
		],
		'ease-in-out-cubic'	: [
			[0.000, 0.645, 0.355, 1.000],
			[0.000, 0.045, 1.000, 1.000]
		],
		'ease-in-out-quart'	: [
			[0.000, 0.770, 0.175, 1.000],
			[0.000, 0.000, 1.000, 1.000]
		],
		'ease-in-out-quint'	: [
			[0.000, 0.860, 0.070, 1.000],
			[0.000, 0.000, 1.000, 1.000]
		],
		'ease-in-out-sine'	: [
			[0.000, 0.445, 0.550, 1.000],
			[0.000, 0.050, 0.950, 1.000]
		],
		'ease-in-out-expo'	: [
			[0.000, 1.000, 0.000, 1.000],
			[0.000, 0.000, 1.000, 1.000]
		],
		'ease-in-out-circ'	: [
			[0.000, 0.785, 0.150, 1.000],
			[0.000, 0.135, 0.860, 1.000]
		],
		'ease-in-out-back'	: [
			[0.000, 0.680, 0.265, 1.000],
			[0.000, -0.550, 1.550, 1.000]
		]
	};
	
	var document = window.document;
	
	var getType = function (obj) {
		return Object.prototype.toString.call(obj).slice(8, -1);
	};
	
	var isFn = function (fn) {
		return getType(fn) === 'Function';
	};
	
	var isArray = function (arr) {
		return getType(arr) === 'Array';
	};
	
	var isString = function (str) {
		return getType(str) === 'String';
	};
	
	var trim = String.prototype.trim
		? function (str) {
			return String.prototype.trim.call(str);
		}
		: function (str) {
			return (str + '').replace(/^\s+|\s+$/g, '');
		};
	
	var addEvent = window.addEventListener
		? function (target, event, action) {
			return target.addEventListener(event, action, false);
		}
		: function (target, event, action) {
			return target.attachEvent('on' + event, action, false);
		};
	
	var removeEvent = window.addEventListener
		? function (target, event, action) {
			if (!target) {
				return null;
			}
			return target.removeEventListener(event, action, false);
		}
		: function (target, event, action) {
			if (!target) {
				return null;
			}
			return target.detachEvent('on' + event, action, false);
		};
	
	var animFrame = window.requestAnimationFrame
				 || window.webkitRequestAnimationFrame
				 || window.mozRequestAnimationFrame
				 || function (callback) {
					window.setTimeout(function () {
						callback(new Date().getTime());
					}, 1);
				};
	
	var cancelAnimFrame = window.cancelAnimationFrame ||
						window.mozCancelAnimationFrame ||
						function (id) {
							return window.clearTimeout(id);
						};
	
	var getScroll = function (axis) {
		axis = axis.toUpperCase();
		var dir = axis === 'X' ? 'Left' : 'Top';
		return window['scroll' + axis]
			|| window['page' + axis + 'Offset']
			|| document.documentElement['scroll' + dir]
			|| document.body['scroll' + dir];
	};
	
	var cubicBezier = function (points, t) {
		return Math.pow(1 - t, 3) * points[0]
			 + 3 * t * Math.pow(1 - t, 2) * points[1]
			 + 3 * Math.pow(t, 2) * (1 - t) * points[2]
			 + Math.pow(t, 3) * points[3];
	};
	
	var parseOptions = function (options, x, y, offsetX, offsetY) {
		options = options || {};
		
		console.log(x + '\t' + offsetX + '\t' + y + '\t' + offsetY);
		
		if (x === 'begin') {
			x = getScroll('x');
		} else if (x === 'end') {
			x = document.width - window.innerWidth - getScroll('x');
		} else {
			x = parseFloat(x) - offsetX;
		}
		x = isNaN(x) ? 0 : x;
		
		if (y === 'top') {
			y = -getScroll('y');
		} else if (y === 'bottom') {
			y = document.height - window.innerHeight - getScroll('y');
		} else {
			y = parseFloat(y) - offsetY;
		}
		y = isNaN(y) ? 0 : y;
		
		var points = [[0], [0]];
		if (isArray(options.points)) {
			var i = 0;
			while (i < 4 && i < options.points.length) {
				var value = parseFloat(options.points[i]);
				points[i % 2].push(isNaN(value) ? bezierPresets['default'][i] : value);
				i++;
			}
			while (i < 4) {
				points[i % 2].push(bezierPresets['default'][i]);
				i++;
			}
			points[0].push(1);
			points[1].push(1);
		} else if (isString(options.points)) {
			points = bezierPresets[options.points] || bezierPresets['default'];
		}
		
		/*
		 * Args:
		 * t -> time E [0, 1]
		 * total -> distance E ]-oo, +oo[
		 */
		var func;
		var method = options.method;
		if (isFn(method)) {
			func = function () {
				try {
					return method.apply(this, arguments);
				} catch (ex) {
					console.error(ex);
					return 0;
				}
			};
		} else if (isString(method)) {
			switch (method.toLowerCase()) {
				case 'cubic-bezier':
					func = function (t, total, points) {
						return total * cubicBezier(points, t);
					};
				break;
				default:
					func = function (t, total) {
						return total * t;
					};
			}
		} else {
			func = function (t, total) {
				return total * t;
			};
		}
		
		var duration = trim(options.duration || '');
		duration = (parseFloat(duration) || 0) * (/[\s\d]s$/i.test(duration) ? 1000 : 1);
		
		var callback = (function (callback) {
			return function () {
				if (isFn(callback)) {
					try {
						callback.call(this);
					} catch (ex) {
						console.error(ex);
					}
				}
			};
		})(options.callback);
		
		return {
			x: x,
			y: y,
			xfunc: function (t, x) {
				return func(t, x, points[0]);
			},
			yfunc: function (t, y) {
				return func(t, y, points[1]);
			},
			duration: duration,
			callback: callback
		};
	};
	
	var currentAnimation = null;
	
	var scroll = function (options) {
		if (currentAnimation !== null) {
			cancelAnimFrame(currentAnimation);
		}
		var start = null;
		var last = 0;
		var x = getScroll('x');
		var y = getScroll('y');
		var id = 0;
		var animate = function (time) {
			if (id !== currentAnimation) {
				cancelAnimFrame(id);
			}
			if (start === null) {
				start = time;
			}
			var t = Math.min(time - start, options.duration);
			window.scrollTo(
				x + options.xfunc(t / options.duration, options.x),
				y + options.yfunc(t / options.duration, options.y)
			);
			if (t >= options.duration) {
				cancelAnimFrame(currentAnimation);
				currentAnimation = null;
				window.scrollTo(
					x + options.x,
					y + options.y
				);
				options.callback();
			} else {
				last = t;
				animFrame(animate);
			}
		};
		id = animFrame(animate);
		currentAnimation = id;
	};
	
	var scrollToElement = function (element, options) {
		element = element || {};
		options = parseOptions(options, element.offsetLeft, element.offsetTop, getScroll('x'), getScroll('y'));
		scroll(options);
	};
	
	var defaultOptions = {};
	
	var click = function (e) {
		e = e || window.event;
		var anchor = e.target || e.srcElement || e.toElement;
		var href = window.location.href.replace(/#.*$/, '');
		/*
		 * IE <=8 doesn't support `getType(anchor) === 'HTMLAnchorElement'`
		 * IE <= 7 doesn't support `anchor && anchor.constructor.toString().indexOf('HTMLAnchorElement')`
		 */
		if (anchor && anchor.nodeName === 'A' !== -1 && anchor.href.indexOf(href) === 0) {
			var element = document.getElementById(anchor.hash.substr(1));
			if (element !== null) {
				e.returnValue = false;
				if (e.preventDefault) {
					e.preventDefault();
				}
				defaultOptions.callback = (function (hash) {
					return function () {
						window.location.hash = hash;
					};
				})(anchor.hash);
				scrollToElement(element, defaultOptions);
			}
		}
	};
	
	var SoftScroll = {
		about: {
			NAME: 'SoftScroll.js',
			VERSION: '1.0.0',
			DATE: '2013-08-09 (yyyy-mm-dd)',	// yyyy-mm-dd
			DESCRIPTION: 'A JavaScript framework for easy and soft page scrolling',
			AUTHORS: [
				{
					NAME: 'Danilo Marcolino Valente',
					EMAIL: 'dani_lovalente@hotmail.com'
				}
			],
			COPYRIGHT: '(C)2013 by Danilo Marcolino Valente'
		},
		scroll: function (x, y, options) {
			options = parseOptions(options, x, y, 0, 0);
			scroll(options);
		},
		scrollTo: function (x, y, options) {
			options = parseOptions(options, x, y, getScroll('x'), getScroll('y'));
			scroll(options);
		},
		scrollToElement: function (element, options) {
			scrollToElement(element, options);
		},
		activate: function (options) {
			defaultOptions = options;
			removeEvent(document, 'click', click);
			addEvent(document, 'click', click);
		},
		deactivate: function () {
			removeEvent(document, 'click', click);
		}
	};
	
	/*
	 * Expose
	 */
	window.SoftScroll = SoftScroll;
})(window);
function _callSuper(t, o, e) {
  return (
    (o = _getPrototypeOf(o)),
    _possibleConstructorReturn(
      t,
      _isNativeReflectConstruct()
        ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor)
        : o.apply(t, e)
    )
  );
}
function _possibleConstructorReturn(t, e) {
  if (e && ('object' == _typeof(e) || 'function' == typeof e)) return e;
  if (void 0 !== e)
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    );
  return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function _inherits(t, e) {
  if ('function' != typeof e && null !== e)
    throw new TypeError('Super expression must either be null or a function');
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, 'prototype', { writable: !1 }),
    e && _setPrototypeOf(t, e);
}
function _wrapNativeSuper(t) {
  var r = 'function' == typeof Map ? new Map() : void 0;
  return (
    (_wrapNativeSuper = function _wrapNativeSuper(t) {
      if (null === t || !_isNativeFunction(t)) return t;
      if ('function' != typeof t)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, Wrapper);
      }
      function Wrapper() {
        return _construct(t, arguments, _getPrototypeOf(this).constructor);
      }
      return (
        (Wrapper.prototype = Object.create(t.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        _setPrototypeOf(Wrapper, t)
      );
    }),
    _wrapNativeSuper(t)
  );
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct())
    return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf('[native code]');
  } catch (n) {
    return 'function' == typeof t;
  }
}
function _setPrototypeOf(t, e) {
  return (
    (_setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, e) {
          return (t.__proto__ = e), t;
        }),
    _setPrototypeOf(t, e)
  );
}
function _getPrototypeOf(t) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    _getPrototypeOf(t)
  );
}
function _createForOfIteratorHelper(r, e) {
  var t =
    ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
  if (!t) {
    if (
      Array.isArray(r) ||
      (t = _unsupportedIterableToArray(r)) ||
      (e && r && 'number' == typeof r.length)
    ) {
      t && (r = t);
      var _n24 = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n24 >= r.length
            ? { done: !0 }
            : { done: !1, value: r[_n24++] };
        },
        e: function e(r) {
          throw r;
        },
        f: F,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r = t.next();
      return (a = r.done), r;
    },
    e: function e(r) {
      (u = !0), (o = r);
    },
    f: function f() {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    },
  };
}
function _classCallCheck(a, n) {
  if (!(a instanceof n))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      'value' in o && (o.writable = !0),
      Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return (
    r && _defineProperties(e.prototype, r),
    t && _defineProperties(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function _toConsumableArray(r) {
  return (
    _arrayWithoutHoles(r) ||
    _iterableToArray(r) ||
    _unsupportedIterableToArray(r) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
function _iterableToArray(r) {
  if (
    ('undefined' != typeof Symbol && null != r[Symbol.iterator]) ||
    null != r['@@iterator']
  )
    return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, 'next', n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, 'throw', n);
      }
      _next(void 0);
    });
  };
}
function _slicedToArray(r, e) {
  return (
    _arrayWithHoles(r) ||
    _iterableToArrayLimit(r, e) ||
    _unsupportedIterableToArray(r, e) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ('string' == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return (
      'Object' === t && r.constructor && (t = r.constructor.name),
      'Map' === t || 'Set' === t
        ? Array.from(r)
        : 'Arguments' === t ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? _arrayLikeToArray(r, a)
        : void 0
    );
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t =
    null == r
      ? null
      : ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (((i = (t = t.call(r)).next), 0 === l)) {
        if (Object(t) !== t) return;
        f = !1;
      } else
        for (
          ;
          !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l);
          f = !0
        );
    } catch (r) {
      (o = !0), (n = r);
    } finally {
      try {
        if (!f && null != t.return && ((u = t.return()), Object(u) !== u))
          return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (
    (r = _toPropertyKey(r)) in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : i + '';
}
function _toPrimitive(t, r) {
  if ('object' != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != _typeof(i)) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
function _typeof(o) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              'function' == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          }),
    _typeof(o)
  );
}
!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var i = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == _typeof(e) && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          n.d(
            o,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 49));
})([
  function (e, t, n) {
    'use strict';
    n.r(t);
    t.default = {
      artsLimit: 10,
      partnerSectionXX: 150723,
      isPartnersMaterial: !1,
      URLs: {
        graphQL: 'https://document-agregator-api.gazeta.pl/queryDocument',
        indexApi: function indexApi(e) {
          var t =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : 1;
          return 'https://api.gazeta.pl/index/v1/custom.servlet?ind_punkt_zerowy_jednostka=YY&ind_punkt_zerowy=1&ind_page=1&ind_liczba_elementow='
            .concat(t, '&ind_wyciagaj=a&ind_sortuj=dt&ind_xx_dzial=')
            .concat(e, '&apikey=fc3d4db6edee42cca2d04c3005e118ed');
        },
      },
      elementsToObserve: {
        safetyMargin: 150,
        debounceTimeout: 150,
        queueEmpty: !0,
      },
      backup: { sectionXX: 152121, limit: 10 },
      serviceWithNoRightColumn: ['special.gazeta.pl'],
    };
  },
  function (e, t, n) {
    var o,
      i,
      a = {},
      r =
        ((o = function o() {
          return window && document && document.all && !window.atob;
        }),
        function () {
          return void 0 === i && (i = o.apply(this, arguments)), i;
        }),
      s = function s(e, t) {
        return t ? t.querySelector(e) : document.querySelector(e);
      },
      l = (function (e) {
        var t = {};
        return function (e, n) {
          if ('function' == typeof e) return e();
          if (void 0 === t[e]) {
            var o = s.call(this, e, n);
            if (
              window.HTMLIFrameElement &&
              o instanceof window.HTMLIFrameElement
            )
              try {
                o = o.contentDocument.head;
              } catch (e) {
                o = null;
              }
            t[e] = o;
          }
          return t[e];
        };
      })(),
      c = null,
      p = 0,
      d = [],
      u = n(78);
    function m(e, t) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n],
          i = a[o.id];
        if (i) {
          i.refs++;
          for (var r = 0; r < i.parts.length; r++) i.parts[r](o.parts[r]);
          for (; r < o.parts.length; r++) i.parts.push(y(o.parts[r], t));
        } else {
          var s = [];
          for (r = 0; r < o.parts.length; r++) s.push(y(o.parts[r], t));
          a[o.id] = { id: o.id, refs: 1, parts: s };
        }
      }
    }
    function h(e, t) {
      for (var n = [], o = {}, i = 0; i < e.length; i++) {
        var a = e[i],
          r = t.base ? a[0] + t.base : a[0],
          s = { css: a[1], media: a[2], sourceMap: a[3] };
        o[r] ? o[r].parts.push(s) : n.push((o[r] = { id: r, parts: [s] }));
      }
      return n;
    }
    function f(e, t) {
      var n = l(e.insertInto);
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var o = d[d.length - 1];
      if ('top' === e.insertAt)
        o
          ? o.nextSibling
            ? n.insertBefore(t, o.nextSibling)
            : n.appendChild(t)
          : n.insertBefore(t, n.firstChild),
          d.push(t);
      else if ('bottom' === e.insertAt) n.appendChild(t);
      else {
        if ('object' != _typeof(e.insertAt) || !e.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        var i = l(e.insertAt.before, n);
        n.insertBefore(t, i);
      }
    }
    function g(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
      var t = d.indexOf(e);
      t >= 0 && d.splice(t, 1);
    }
    function v(e) {
      var t = document.createElement('style');
      if (
        (void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
        void 0 === e.attrs.nonce)
      ) {
        var o = (function () {
          0;
          return n.nc;
        })();
        o && (e.attrs.nonce = o);
      }
      return _(t, e.attrs), f(e, t), t;
    }
    function _(e, t) {
      Object.keys(t).forEach(function (n) {
        e.setAttribute(n, t[n]);
      });
    }
    function y(e, t) {
      var n, o, i, a;
      if (t.transform && e.css) {
        if (
          !(a =
            'function' == typeof t.transform
              ? t.transform(e.css)
              : t.transform.default(e.css))
        )
          return function () {};
        e.css = a;
      }
      if (t.singleton) {
        var r = p++;
        (n = c || (c = v(t))),
          (o = w.bind(null, n, r, !1)),
          (i = w.bind(null, n, r, !0));
      } else
        e.sourceMap &&
        'function' == typeof URL &&
        'function' == typeof URL.createObjectURL &&
        'function' == typeof URL.revokeObjectURL &&
        'function' == typeof Blob &&
        'function' == typeof btoa
          ? ((n = (function (e) {
              var t = document.createElement('link');
              return (
                void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
                (e.attrs.rel = 'stylesheet'),
                _(t, e.attrs),
                f(e, t),
                t
              );
            })(t)),
            (o = T.bind(null, n, t)),
            (i = function i() {
              g(n), n.href && URL.revokeObjectURL(n.href);
            }))
          : ((n = v(t)),
            (o = A.bind(null, n)),
            (i = function i() {
              g(n);
            }));
      return (
        o(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            o((e = t));
          } else i();
        }
      );
    }
    e.exports = function (e, t) {
      if (
        'undefined' != typeof DEBUG &&
        DEBUG &&
        'object' !=
          (typeof document === 'undefined' ? 'undefined' : _typeof(document))
      )
        throw new Error(
          'The style-loader cannot be used in a non-browser environment'
        );
      ((t = t || {}).attrs = 'object' == _typeof(t.attrs) ? t.attrs : {}),
        t.singleton || 'boolean' == typeof t.singleton || (t.singleton = r()),
        t.insertInto || (t.insertInto = 'head'),
        t.insertAt || (t.insertAt = 'bottom');
      var n = h(e, t);
      return (
        m(n, t),
        function (e) {
          for (var o = [], i = 0; i < n.length; i++) {
            var r = n[i];
            (s = a[r.id]).refs--, o.push(s);
          }
          e && m(h(e, t), t);
          for (i = 0; i < o.length; i++) {
            var s;
            if (0 === (s = o[i]).refs) {
              for (var l = 0; l < s.parts.length; l++) s.parts[l]();
              delete a[s.id];
            }
          }
        }
      );
    };
    var b,
      E =
        ((b = []),
        function (e, t) {
          return (b[e] = t), b.filter(Boolean).join('\n');
        });
    function w(e, t, n, o) {
      var i = n ? '' : o.css;
      if (e.styleSheet) e.styleSheet.cssText = E(t, i);
      else {
        var a = document.createTextNode(i),
          r = e.childNodes;
        r[t] && e.removeChild(r[t]),
          r.length ? e.insertBefore(a, r[t]) : e.appendChild(a);
      }
    }
    function A(e, t) {
      var n = t.css,
        o = t.media;
      if ((o && e.setAttribute('media', o), e.styleSheet))
        e.styleSheet.cssText = n;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(n));
      }
    }
    function T(e, t, n) {
      var o = n.css,
        i = n.sourceMap,
        a = void 0 === t.convertToAbsoluteUrls && i;
      (t.convertToAbsoluteUrls || a) && (o = u(o)),
        i &&
          (o +=
            '\n/*# sourceMappingURL=data:application/json;base64,' +
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
            ' */');
      var r = new Blob([o], { type: 'text/css' }),
        s = e.href;
      (e.href = URL.createObjectURL(r)), s && URL.revokeObjectURL(s);
    }
  },
  function (e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'BEFORE_COMMENTS_TEMPLATE_INSERTED', function () {
        return o;
      }),
      n.d(t, 'AFTER_COMMENTS_TEMPLATE_INSERTED', function () {
        return i;
      }),
      n.d(t, 'FETCH_REQUEST_SENT_GET_COMMENTS', function () {
        return a;
      }),
      n.d(t, 'FETCH_REQUEST_SUCCESS_GET_COMMENTS', function () {
        return r;
      }),
      n.d(t, 'FETCH_REQUEST_FAILURE_GET_COMMENTS', function () {
        return s;
      }),
      n.d(t, 'LOAD_MORE_COMMENTS', function () {
        return l;
      }),
      n.d(t, 'SHOW_REPLIES', function () {
        return c;
      });
    var o = 'BEFORE_COMMENTS_TEMPLATE_INSERTED',
      i = 'AFTER_COMMENTS_TEMPLATE_INSERTED',
      a = 'FETCH_REQUEST_SENT_GET_COMMENTS',
      r = 'FETCH_REQUEST_SUCCESS_GET_COMMENTS',
      s = 'FETCH_REQUEST_FAILURE_GET_COMMENTS',
      l = 'LOAD_MORE_COMMENTS',
      c = 'SHOW_REPLIES';
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    t.default = {
      appId: 'commentsApp',
      commentsApiUrl: '/fix/cms/opinions/opinions-action.jsp',
      commentsApiLoginUrl: '/mfa/login.servlet',
      commentsApiLoginFBUrl: 'https://konto.gazeta.pl/login/facebook.servlet',
      commentsApiLoginGoogleUrl: 'https://konto.gazeta.pl/login/google.servlet',
      commentsApiSetNickUrl: '/setNick.servlet',
    };
  },
  function (e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'FETCH_REQUEST_SENT_LOGIN_USER', function () {
        return o;
      }),
      n.d(t, 'FETCH_REQUEST_SUCCESS_LOGIN_USER', function () {
        return i;
      }),
      n.d(t, 'FETCH_REQUEST_FAILURE_LOGIN_USER', function () {
        return a;
      }),
      n.d(t, 'FETCH_REQUEST_SENT_GET_USER', function () {
        return r;
      }),
      n.d(t, 'FETCH_REQUEST_SUCCESS_GET_USER', function () {
        return s;
      }),
      n.d(t, 'FETCH_REQUEST_FAILURE_GET_USER', function () {
        return l;
      }),
      n.d(t, 'FETCH_REQUEST_SENT_LOGOUT_USER', function () {
        return c;
      }),
      n.d(t, 'FETCH_REQUEST_SUCCESS_LOGOUT_USER', function () {
        return p;
      }),
      n.d(t, 'FETCH_REQUEST_FAILURE_LOGOUT_USER', function () {
        return d;
      });
    var o = 'FETCH_REQUEST_SENT_LOGIN_USER',
      i = 'FETCH_REQUEST_SUCCESS_LOGIN_USER',
      a = 'FETCH_REQUEST_FAILURE_LOGIN_USER',
      r = 'FETCH_REQUEST_SENT_GET_USER',
      s = 'FETCH_REQUEST_SUCCESS_GET_USER',
      l = 'FETCH_REQUEST_FAILURE_GET_USER',
      c = 'FETCH_REQUEST_SENT_LOGOUT_USER',
      p = 'FETCH_REQUEST_SUCCESS_LOGOUT_USER',
      d = 'FETCH_REQUEST_FAILURE_LOGOUT_USER';
  },
  function (e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'DataOcean', function () {
        return o;
      }),
      n.d(t, 'Queue', function () {
        return i;
      }),
      n.d(t, 'Utils', function () {
        return a;
      });
    var o = {
        _locationHost: window.location.host,
        _locationHref: window.location.href,
        _composeURL: function _composeURL(_ref) {
          var e = _ref.eventModel;
          // var t = new URL('https://squid.gazeta.pl/bdtUpdDcEvGet');
          // return (
          //   t.searchParams.set('events', window.btoa(JSON.stringify([e]))),
          //   t.toString()
          // );
        },
        send: function send(_ref2) {
          var e = _ref2.eventID,
            t = _ref2.data;
          var n = o._composeURL({
            eventModel: {
              e: e,
              a: t,
              c: { ld: o._locationHost, vu: o._locationHref },
              et: 7,
              t: [Date.now()],
            },
          });
          fetch(n, { credentials: 'include', method: 'GET', keepalive: !0 });
        },
      },
      i = {
        add: function add(_ref3) {
          var e = _ref3.data,
            t = _ref3.prefix;
          (i._data = _objectSpread(
            _objectSpread({}, i._data),
            Object.fromEntries(
              Object.entries(e).map(function (_ref4) {
                var _ref5 = _slicedToArray(_ref4, 2),
                  e = _ref5[0],
                  n = _ref5[1];
                return [''.concat(t, '_').concat(e).toLowerCase(), n];
              })
            )
          )),
            (i._isEmpty = !1);
        },
        init: function init() {
          i._clean(),
            document.addEventListener('visibilitychange', function () {
              'hidden' !== document.visibilityState || i._isEmpty || i._flush();
            });
        },
        _clean: function _clean() {
          i._initData(), (i._isEmpty = !0);
        },
        _data: {},
        _isEmpty: !0,
        _initData: function _initData() {
          i._data = {
            _cpu: a.getCPUQuantity(),
            _memory: a.getDeviceMemory(),
            _url: a.getURL(),
            _userAgent: a.getUserAgent(),
          };
        },
        _flush: function _flush() {
          o.send({ eventID: 921, data: i._data }), i._clean();
        },
      },
      a = {
        getURL: function getURL() {
          return window.location.href;
        },
        getCPUQuantity: function getCPUQuantity() {
          return window.navigator.hardwareConcurrency || 1;
        },
        getDeviceMemory: function getDeviceMemory() {
          return window.navigator.deviceMemory || 0;
        },
        getUserAgent: function getUserAgent() {
          return window.navigator.userAgent || '';
        },
      };
  },
  function (e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'commentsContainerTemplate', function () {
        return l;
      }),
      n.d(t, 'singleCommentTemplate', function () {
        return s;
      }),
      n.d(t, 'commentsTextfieldTemplate', function () {
        return a;
      });
    n(42);
    var o,
      i = 'tak';
    var a = function a(e, t) {
      return (
        t && t.commentsLoggedUsers && (i = t.commentsLoggedUsers),
        (o =
          'nie' === i
            ? { text: 'Skomentuj', action: 'popup' }
            : { text: 'Zaloguj si\u0119 i skomentuj', action: 'popup' }),
        '\n        <form class="commentsApp__textField">\n            <textarea data-oxx="'
          .concat(
            e.OXX,
            '" class="commentsApp__addCommentTextarea commentsApp__interactiveEl '
          )
          .concat(
            0 !== e.OXX ? 'commentsApp__addCommentTextarea--revealBottom' : '',
            '" placeholder="Dodaj komentarz..." data-action="popup" rows="1" readonly></textarea>\n            <div class="commentsApp__bottom">\n                <div class="commentsApp__bottomFrame commentsApp__interactiveEl">\n                    <div class="commentsApp__bottomFrameElement commentsApp__userName commentsApp__interactiveEl"></div>\n                    \n                </div>\n                <div>\n                    <button onmouseover="this.focus()" data-oxx="'
          )
          .concat(
            e.OXX,
            '" type="button" class="commentsApp__button commentsApp__button--login commentsApp__button--comment commentsApp__interactiveEl" data-action="'
          )
          .concat(o.action, '">')
          .concat(
            o.text,
            '</button>\n                    <button onmouseover="this.focus()" data-oxx="'
          )
          .concat(
            e.OXX,
            '" type="button" class="commentsApp__button commentsApp__button--send commentsApp__interactiveEl" data-action="send">Skomentuj</button>\n                </div>\n            </div>\n            '
          )
          .concat(
            Object.keys(e)
              .map(function (t) {
                return '<input type="hidden" name="'
                  .concat(t, '" value="')
                  .concat(e[t], '">');
              })
              .join(''),
            '\n        </form>\n        <div class="commentsApp__infoMessage" data-message="'
          )
          .concat(
            e.OXX,
            '"><span class="commentsApp__infoMessageText"></span><span data-action="closeMessage" class="commentsApp__interactiveEl commentsApp__infoMessageClose">&#10006;</span></div>\n    '
          )
      );
    };
    var r = '';
    var s = function s(e, t) {
        var n = (e.votesCount - e.votesRank) / 2,
          o = e.votesCount - n,
          i = (function (e) {
            if ('' === r) {
              var _t = new URL(e.commentsRegisterPage);
              _t.searchParams.delete('back'),
                _t.searchParams.append('back', window.location.href),
                (r = _t.toString());
            }
            return r;
          })(t);
        var s = !0;
        return (
          t.commentsVotes && 'nie' === t.commentsVotes && (s = !1),
          '\n        <div class="commentsApp__comment" id="commentId'
            .concat(e.entryId, '" data-deleted="')
            .concat(e.f < 0 ? 'yes' : 'no', '" data-entryId="')
            .concat(e.entryId, '" data-date="')
            .concat(e.timestamp, '" data-votesRank="')
            .concat(e.votesRank, '" style="order:')
            .concat(
              e.order,
              '">\n            <div class="commentsApp__commentHead">\n                <div class="commentsApp__commentAuthor">'
            )
            .concat(
              e.userName,
              '</div>\n                <div class="commentsApp__commentDate">'
            )
            .concat(
              e.date,
              '</div>\n                <div class="commentsApp__commentLink commentsApp__interactiveEl" data-action="copyLink" data-id="commentId'
            )
            .concat(
              e.entryId,
              '"><div class="commentsApp__commentLinkInfo">URL komentarza skopiowany do schowka</div><button class="commentsApp__commentLinkButton commentsApp__interactiveEl" data-action="copyLink" data-id="commentId'
            )
            .concat(
              e.entryId,
              '"><svg class="commentsApp__interactiveEl" data-action="copyLink" data-id="commentId'
            )
            .concat(
              e.entryId,
              '" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><defs><style>.a{fill:#666;opacity:0.87;}</style></defs><path class="a commentsApp__interactiveEl" data-action="copyLink" data-id="commentId'
            )
            .concat(
              e.entryId,
              '" d="M8.69,10.825a.737.737,0,0,1,0,1.075.763.763,0,0,1-1.075,0,3.789,3.789,0,0,1,0-5.355h0L10.3,3.865A3.786,3.786,0,0,1,15.65,9.22l-1.128,1.128a5.232,5.232,0,0,0-.3-1.833l.356-.364a2.271,2.271,0,0,0-3.211-3.211L8.69,7.614a2.258,2.258,0,0,0,0,3.211m2.136-3.211a.763.763,0,0,1,1.075,0,3.789,3.789,0,0,1,0,5.355h0L9.22,15.65A3.786,3.786,0,0,1,3.865,10.3L4.994,9.167a5.3,5.3,0,0,0,.3,1.84l-.356.356a2.271,2.271,0,0,0,3.211,3.211L10.825,11.9a2.258,2.258,0,0,0,0-3.211A.737.737,0,0,1,10.825,7.614Z" transform="translate(-2.758 -2.758)"/></svg></button></div>\n                <div class="commentsApp__options">\n                    <button type="button" class="commentsApp__BoxTrigger commentsApp__textStyledBtn commentsApp__optionsDots commentsApp__interactiveEl" data-action="optionsBox"></button>\n                    <div class="commentsApp__Box commentsApp__Box--options">\n                        <button type="button" class="commentsApp__BoxOption commentsApp__textStyledBtn commentsApp__BoxOption--trash commentsApp__interactiveEl" data-action="trashOpenPopup" data-entryid="'
            )
            .concat(
              e.entryId,
              '">Zg\u0142o\u015B komentarz</button>\n                    </div>\n                </div>\n            </div>\n            <div class="commentsApp__commentBody">'
            )
            .concat(
              e.content,
              '</div>\n            <div class="commentsApp__commentFooter">\n                '
            )
            .concat(
              s
                ? '<div class="commentsApp__votes">\n                        <div class="commentsApp__votesInfo">Aby oceni\u0107 <a href="#" class="commentsApp__interactiveEl" data-action="popupVote" data-oxx="'
                    .concat(e.entryId, '">zaloguj si\u0119</a> lub <a href="')
                    .concat(
                      i,
                      '">zarejestruj</a> <span class="commentsApp__votesInfo--close commentsApp__interactiveEl" data-action="votesInfoClose">&#10006;</span></div>\n                        <div class="commentsApp__votesInfo commentsApp__votesInfo--nick">Aby oceni\u0107 <a href="#" class="commentsApp__interactiveEl" data-action="toggleNickPopup" data-oxx="'
                    )
                    .concat(
                      e.entryId,
                      '">nadaj nick</a> </div>\n                            <button id="voteUpLogged'
                    )
                    .concat(
                      e.entryId,
                      '" type="button" class="commentsApp__vote commentsApp__vote--up commentsApp__vote--logged commentsApp__textStyledBtn commentsApp__interactiveEl" data-action="voteUp"><svg class="commentsApp__voteSVG commentsApp__vodeSVG--up commentsApp__interactiveEl" data-action="voteUp" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path data-action="voteUp" class="commentsApp__interactiveEl commentsApp__voteSVGPath commentsApp__voteSVGPath--transparent" d="M0,0H16V16H0Z"/><path data-action="voteUp" class="commentsApp__interactiveEl commentsApp__voteSVGPath commentsApp__voteSVGPath--fill" d="M1,14.333H3.667v-8H1ZM15.667,7a1.337,1.337,0,0,0-1.333-1.333H10.127L10.76,2.62l.02-.213a1,1,0,0,0-.293-.707L9.78,1,5.393,5.393A1.3,1.3,0,0,0,5,6.333V13a1.337,1.337,0,0,0,1.333,1.333h6a1.324,1.324,0,0,0,1.227-.813l2.013-4.7a1.317,1.317,0,0,0,.093-.487Z" transform="translate(-0.333 -0.333)"/></svg> <span id="plusVoteA_'
                    )
                    .concat(e.entryId, '">')
                    .concat(
                      o,
                      '</span></button>\n                            <button id="voteDownLogged'
                    )
                    .concat(
                      e.entryId,
                      '" type="button" class="commentsApp__vote commentsApp__vote--down commentsApp__vote--logged commentsApp__textStyledBtn commentsApp__interactiveEl" data-action="voteDown"><svg class="commentsApp__voteSVG commentsApp__vodeSVG--down commentsApp__interactiveEl" data-action="voteDown" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path data-action="voteDown" class="commentsApp__interactiveEl commentsApp__voteSVGPath commentsApp__voteSVGPath--transparent" d="M0,0H16V16H0Z"/><path data-action="voteDown" class="commentsApp__interactiveEl commentsApp__voteSVGPath commentsApp__voteSVGPath--fill" d="M10.333,3h-6a1.324,1.324,0,0,0-1.227.813l-2.013,4.7A1.317,1.317,0,0,0,1,9v1.333a1.337,1.337,0,0,0,1.333,1.333H6.54l-.633,3.047-.02.213a1,1,0,0,0,.293.707l.707.7L11.28,11.94a1.325,1.325,0,0,0,.387-.94V4.333A1.337,1.337,0,0,0,10.333,3ZM13,3v8h2.667V3Z" transform="translate(-0.333 -1)"/></svg> <span id="minusVoteA_'
                    )
                    .concat(e.entryId, '">')
                    .concat(
                      n,
                      '</span></button>\n                            <button id="voteUpLoggedOut'
                    )
                    .concat(
                      e.entryId,
                      '" title="Aby oceni\u0107 zaloguj si\u0119 lub zarejestruj" type="button" class="commentsApp__vote commentsApp__vote--up commentsApp__vote--unlogged commentsApp__textStyledBtn commentsApp__interactiveEl" data-action="votesInfo"><svg data-action="votesInfo" class="commentsApp__interactiveEl commentsApp__voteSVG commentsApp__vodeSVG--up" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path data-action="votesInfo" class="commentsApp__interactiveEl commentsApp__voteSVGPath commentsApp__voteSVGPath--transparent" d="M0,0H16V16H0Z"/><path data-action="votesInfo" class="commentsApp__interactiveEl commentsApp__voteSVGPath commentsApp__voteSVGPath--fill" d="M1,14.333H3.667v-8H1ZM15.667,7a1.337,1.337,0,0,0-1.333-1.333H10.127L10.76,2.62l.02-.213a1,1,0,0,0-.293-.707L9.78,1,5.393,5.393A1.3,1.3,0,0,0,5,6.333V13a1.337,1.337,0,0,0,1.333,1.333h6a1.324,1.324,0,0,0,1.227-.813l2.013-4.7a1.317,1.317,0,0,0,.093-.487Z" transform="translate(-0.333 -0.333)"/></svg> <span id="plusVoteB_'
                    )
                    .concat(e.entryId, '">')
                    .concat(
                      o,
                      '</span></button>\n                            <button id="voteDownLoggedOut'
                    )
                    .concat(
                      e.entryId,
                      '" title="Aby oceni\u0107 zaloguj si\u0119 lub zarejestruj" type="button" class="commentsApp__vote commentsApp__vote--down commentsApp__vote--unlogged commentsApp__textStyledBtn commentsApp__interactiveEl" data-action="votesInfo"><svg data-action="votesInfo" class="commentsApp__interactiveEl commentsApp__voteSVG commentsApp__vodeSVG--down" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path data-action="votesInfo" class="commentsApp__interactiveEl commentsApp__voteSVGPath commentsApp__voteSVGPath--transparent" d="M0,0H16V16H0Z"/><path data-action="votesInfo" class="commentsApp__interactiveEl commentsApp__voteSVGPath commentsApp__voteSVGPath--fill" d="M10.333,3h-6a1.324,1.324,0,0,0-1.227.813l-2.013,4.7A1.317,1.317,0,0,0,1,9v1.333a1.337,1.337,0,0,0,1.333,1.333H6.54l-.633,3.047-.02.213a1,1,0,0,0,.293.707l.707.7L11.28,11.94a1.325,1.325,0,0,0,.387-.94V4.333A1.337,1.337,0,0,0,10.333,3ZM13,3v8h2.667V3Z" transform="translate(-0.333 -1)"/></svg> <span id="minusVoteB_'
                    )
                    .concat(e.entryId, '">')
                    .concat(n, '</span></button>\n                    </div>')
                : '',
              '\n                <button type="button" class="commentsApp__reply commentsApp__textStyledBtn commentsApp__interactiveEl" data-action="reply">Odpowiedz</button>\n                '
            )
            .concat(
              parseInt(e.replies, 0)
                ? '\n                <button type="button" class="commentsApp__showReplies commentsApp__textStyledBtn commentsApp__interactiveEl" data-action="showReplies"><span class="commentsApp__showRepliesText commentsApp__interactiveEl" data-action="showReplies">Poka\u017C odpowiedzi</span> ('.concat(
                    e.replies,
                    ')</button>\n                '
                  )
                : '',
              '\n            </div>\n            '
            )
            .concat(a({ OXX: e.entryId }), '\n            ')
            .concat(
              parseInt(e.replies, 0)
                ? '<div class="commentsApp__subComments"></div>'
                : '',
              '\n        </div>\n    '
            )
        );
      },
      l = function l(e, t, n) {
        var o =
          arguments.length > 3 && arguments[3] !== undefined
            ? arguments[3]
            : '0';
        var i = e.add.filter(function (e) {
            return e.parentId === o;
          }),
          a = n || { startPosition: 0, size: t.showComments };
        return '\n        '
          .concat(
            n ? '' : '<div class="commentsApp__commentsContainer">',
            '\n        '
          )
          .concat(
            i.length
              ? i
                  .slice(a.startPosition, a.startPosition + a.size)
                  .map(function (e) {
                    return s(e, t);
                  })
                  .join('')
              : '<p class="commentsApp__callToAction">Nie ma jeszcze \u017Cadnych komentarzy - napisz pierwszy z nich!</p>',
            '\n        '
          )
          .concat(n ? '' : '</div>', '\n    ');
      };
  },
  function (e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'FETCH_REQUEST_SUCCESS', function () {
        return o;
      }),
      n.d(t, 'FETCH_REQUEST_FAILURE', function () {
        return i;
      }),
      n.d(t, 'FETCH_REQUEST_SENT', function () {
        return a;
      });
    var o = 'FETCH_REQUEST_SUCCESS',
      i = 'FETCH_REQUEST_FAILURE',
      a = 'FETCH_REQUEST_SENT';
  },
  function (e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'FETCH_REQUEST_SUCCESS_NICK', function () {
        return o;
      }),
      n.d(t, 'FETCH_REQUEST_FAILURE_NICK', function () {
        return i;
      }),
      n.d(t, 'FETCH_REQUEST_SENT_NICK', function () {
        return a;
      });
    var o = 'FETCH_REQUEST_SUCCESS_NICK',
      i = 'FETCH_REQUEST_FAILURE_NICK',
      a = 'FETCH_REQUEST_SENT_NICK';
  },
  function (e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'ArticleFooter', function () {
        return a;
      }),
      n.d(t, 'CommentsContainer', function () {
        return i;
      }),
      n.d(t, 'ArticleSidebarExtraModules', function () {
        return p;
      }),
      n.d(t, 'getMinimalArticle', function () {
        return d;
      });
    var o = n(0);
    var i = function i(e) {
        return '\n        <div id="bottom_wrapper-'
          .concat(
            e,
            '" class="section_wrapper_premium">\n            <div class="bottom_aside_wrap_premium"></div>\n            <div class="content_wrap_premium">\n                <div class="columns_container withCommentsApp">\n                    <div class="main_content">\n                        <div id="premiumArticle__commentsContainer--'
          )
          .concat(
            e,
            '" class="premiumArticle__commentsContainer commentsApp"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    '
          );
      },
      a = function a(e) {
        var t = e.title,
          n = e.description,
          o = e.link,
          _e$callToAction = e.callToAction,
          i = _e$callToAction === void 0 ? 'Sprawd\u017A' : _e$callToAction;
        var a = o;
        o && o.startsWith('www') && (a = 'https://' + o);
        return '\n        <div class="article__bottomTextFrame">\n            <span class="article__bottomTextFrame_label"></span>\n            <h3 class="article__bottomTextFrame_header">'
          .concat(
            t,
            '</h3>\n            <p class="article__bottomTextFrame_body">'
          )
          .concat(n, '</p>\n            ')
          .concat(
            a
              ? '\n        <div class="article__bottomTextFrame_linkContainer">\n            <a class="article__bottomTextFrame_link" href="'
                  .concat(a, '" target="_blank" title="')
                  .concat(t, '">')
                  .concat(i, '</a>\n        </div>\n    ')
              : '',
            '\n        </div>\n    '
          );
      },
      r = function r(e) {
        return e
          .replace(/['"]/g, '&quot;')
          .replace(/[>]/g, '&gt;')
          .replace(/[<]/g, '&lt;')
          .replace(/[/]/g, '&sol;');
      },
      s = function s(e, t) {
        var n;
        if (e.data && e.data.documentById) {
          var _e$data$documentById = e.data.documentById,
            _o = _e$data$documentById.title,
            _i = _e$data$documentById.url,
            _a = _e$data$documentById.photoRelated,
            _s = _e$data$documentById.authors,
            _l = {},
            _c = {};
          _s &&
            _s[0] &&
            'object' == _typeof(_s[0]) &&
            _s[0].selectedSignature &&
            (_l.name = _s[0].selectedSignature.name);
          var _p = _a[0];
          _p &&
            ((_c.URL = _p.url
              ? PhotoAPI.photoChangeFormat(_p.url, 'IER')
              : null),
            (_c.title = _p.title));
          var _d = !(!_c.URL || !_c.title),
            u = document.querySelector('.article__sidebar_extraContent--' + t);
          if (_d) {
            var _e2 = _i;
            _i.startsWith('www') && (_e2 = 'https://' + _i),
              (n =
                '\n            <div class="article__sidebar_art">\n                <a href="'
                  .concat(
                    _e2,
                    '" target="_blank" class="article__sidebar_artImageLink" title="'
                  )
                  .concat(r(_o), '">\n                    <img src="')
                  .concat(_c.URL, '" class="article__sidebar_artImage" alt="')
                  .concat(
                    r(_c.title),
                    '"/>\n                    <h2 class="article__sidebar_artHeader">'
                  )
                  .concat(
                    _o,
                    '</h2>\n                </a>\n                <div class="article__sidebar_artAuthor">'
                  )
                  .concat(
                    _l.name ? _l.name : 'Redakcja',
                    '</div>\n            </div>\n            '
                  )),
              (u.innerHTML = n);
          } else u.remove();
        }
      },
      l = function l(e) {
        document.querySelector('.article__sidebar_extraContent--' + e).remove();
      },
      c = {
        freedom: function freedom(e) {
          var t;
          var n = e.link,
            o = e.description,
            i = e.photoXX,
            a = e.photoType;
          var s = 'N',
            l = 'normalBook';
          'normal' == a && ((s = 'IC'), (l = 'universal'));
          var c = PhotoAPI.photoFromXX(i, s);
          if (c) {
            var _e3 = n;
            n && n.startsWith('www') && (_e3 = 'https://' + n),
              (t =
                '\n                <div class="article__sidebar_book article__sidebar_book--'
                  .concat(l, '">\n                    ')
                  .concat(
                    _e3
                      ? '<a href="'
                          .concat(_e3, '" target="_blank" title="')
                          .concat(r(o), '">')
                      : '',
                    '\n                        <div class="article__sidebar_bookContainer">\n                            <div class="article__sidebar_bookImageContainer">\n                                <img src="'
                  )
                  .concat(c, '" class="article__sidebar_bookImage" alt="')
                  .concat(r(o), ' title="')
                  .concat(
                    r(o),
                    '" />\n                            </div>\n                            <div class="article__sidebar_bookDescription">\n                                <p class="article__sidebar_bookDescriptionBody">'
                  )
                  .concat(
                    o,
                    '</p>\n                            </div>\n                        </div>\n                    '
                  )
                  .concat(
                    _e3 ? '</a>' : '',
                    '\n                </div>\n            '
                  ));
          }
          return t;
        },
        series: function series(e) {
          var t;
          return (
            !(!o.default.cycleData || !o.default.cycleData.description) &&
              (t =
                '\n                <div class="article__sidebar_cycle">\n                    <span class="article__sidebar_cycleLabel"></span>\n                    <h2 class="article__sidebar_cycleHeader">'
                  .concat(
                    o.default.cycleData.title,
                    '</h2>\n                    <p class="article__sidebar_cycleDescription">'
                  )
                  .concat(
                    o.default.cycleData.description,
                    '</p>\n                    <div class="article__sidebar_cycleLinkContainer">\n                        <a \n                            href="'
                  )
                  .concat(window.location.origin, '/')
                  .concat(o.default.pageRoot, '/0,')
                  .concat(
                    o.default.sectionXX,
                    '.html"\n                            target="_blank"\n                            class="article__sidebar_cycleLink"\n                            title="zobacz wszystkie z cyklu '
                  )
                  .concat(
                    o.default.cycleData.title,
                    '"\n                        >zobacz wszystkie</a>\n                    </div>\n                </div>\n            '
                  )),
            t
          );
        },
        article: function article(e) {
          var _arguments = arguments;
          return _asyncToGenerator(function* () {
            var t =
              _arguments.length > 1 && _arguments[1] !== undefined
                ? _arguments[1]
                : s;
            var n = 'query {\n            documentById(id: "'
                .concat(e.articleXX, '", deviceType: ')
                .concat(
                  o.default.device,
                  ', adsInContent: true) {\n                title,\n                url,\n                lead,\n                photoRelated {\n                    url,\n                    title,\n                },\n                authors {\n                    selectedSignature {\n                        name,\n                    },\n                },\n            }\n        }'
                ),
              i = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: n }),
              };
            return yield fetch(o.default.URLs.graphQL, i)
              .then(function (t) {
                if (!t.ok)
                  throw (
                    (e.errorHandler && e.errorHandler(e.xx, t),
                    new Error('graphQL error'))
                  );
                return t.json();
              })
              .then(function (n) {
                return t(n, e.xx);
              })
              .then(function (e) {
                return e;
              })
              .catch(function (e) {
                return console.error(e);
              });
          })();
        },
      },
      p = function p(e) {
        var t = c[e.type],
          n = e;
        'article' == e.type && (n.errorHandler = l);
        var o = t ? t(n) : '';
        return o
          ? '<div class="article__sidebar_extraContent article__sidebar_extraContent--'
              .concat(n.xx, '">')
              .concat(o, '</div>')
          : '';
      },
      d = c.article;
  },
  function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return k;
    }),
      n.d(t, 'b', function () {
        return ee;
      }),
      n.d(t, 'c', function () {
        return oe;
      });
    var o,
      i,
      a = function a() {
        var e =
          self.performance &&
          performance.getEntriesByType &&
          performance.getEntriesByType('navigation')[0];
        if (e && e.responseStart > 0 && e.responseStart < performance.now())
          return e;
      },
      r = function r(e) {
        if ('loading' === document.readyState) return 'loading';
        var t = a();
        if (t) {
          if (e < t.domInteractive) return 'loading';
          if (
            0 === t.domContentLoadedEventStart ||
            e < t.domContentLoadedEventStart
          )
            return 'dom-interactive';
          if (0 === t.domComplete || e < t.domComplete)
            return 'dom-content-loaded';
        }
        return 'complete';
      },
      s = function s(e) {
        var t = e.nodeName;
        return 1 === e.nodeType
          ? t.toLowerCase()
          : t.toUpperCase().replace(/^#/, '');
      },
      l = function l(e, t) {
        var n = '';
        try {
          for (; e && 9 !== e.nodeType; ) {
            var o = e,
              i = o.id
                ? '#' + o.id
                : s(o) +
                  (o.classList &&
                  o.classList.value &&
                  o.classList.value.trim() &&
                  o.classList.value.trim().length
                    ? '.' + o.classList.value.trim().replace(/\s+/g, '.')
                    : '');
            if (n.length + i.length > (t || 100) - 1) return n || i;
            if (((n = n ? i + '>' + n : i), o.id)) break;
            e = o.parentNode;
          }
        } catch (e) {}
        return n;
      },
      c = -1,
      p = function p() {
        return c;
      },
      d = function d(e) {
        addEventListener(
          'pageshow',
          function (t) {
            t.persisted && ((c = t.timeStamp), e(t));
          },
          !0
        );
      },
      u = function u() {
        var e = a();
        return (e && e.activationStart) || 0;
      },
      m = function m(e, t) {
        var n = a(),
          o = 'navigate';
        return (
          p() >= 0
            ? (o = 'back-forward-cache')
            : n &&
              (document.prerendering || u() > 0
                ? (o = 'prerender')
                : document.wasDiscarded
                ? (o = 'restore')
                : n.type && (o = n.type.replace(/_/g, '-'))),
          {
            name: e,
            value: void 0 === t ? -1 : t,
            rating: 'good',
            delta: 0,
            entries: [],
            id: 'v4-'
              .concat(Date.now(), '-')
              .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
            navigationType: o,
          }
        );
      },
      h = function h(e, t, n) {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(e)) {
            var o = new PerformanceObserver(function (e) {
              Promise.resolve().then(function () {
                t(e.getEntries());
              });
            });
            return (
              o.observe(Object.assign({ type: e, buffered: !0 }, n || {})), o
            );
          }
        } catch (e) {}
      },
      f = function f(e, t, n, o) {
        var i, a;
        return function (r) {
          t.value >= 0 &&
            (r || o) &&
            ((a = t.value - (i || 0)) || void 0 === i) &&
            ((i = t.value),
            (t.delta = a),
            (t.rating = (function (e, t) {
              return e > t[1]
                ? 'poor'
                : e > t[0]
                ? 'needs-improvement'
                : 'good';
            })(t.value, n)),
            e(t));
        };
      },
      g = function g(e) {
        requestAnimationFrame(function () {
          return requestAnimationFrame(function () {
            return e();
          });
        });
      },
      v = function v(e) {
        document.addEventListener('visibilitychange', function () {
          'hidden' === document.visibilityState && e();
        });
      },
      _ = function _(e) {
        var t = !1;
        return function () {
          t || (e(), (t = !0));
        };
      },
      y = -1,
      b = function b() {
        return 'hidden' !== document.visibilityState || document.prerendering
          ? 1 / 0
          : 0;
      },
      E = function E(e) {
        'hidden' === document.visibilityState &&
          y > -1 &&
          ((y = 'visibilitychange' === e.type ? e.timeStamp : 0), A());
      },
      w = function w() {
        addEventListener('visibilitychange', E, !0),
          addEventListener('prerenderingchange', E, !0);
      },
      A = function A() {
        removeEventListener('visibilitychange', E, !0),
          removeEventListener('prerenderingchange', E, !0);
      },
      T = function T() {
        return (
          y < 0 &&
            ((y = b()),
            w(),
            d(function () {
              setTimeout(function () {
                (y = b()), w();
              }, 0);
            })),
          {
            get firstHiddenTime() {
              return y;
            },
          }
        );
      },
      S = function S(e) {
        document.prerendering
          ? addEventListener(
              'prerenderingchange',
              function () {
                return e();
              },
              !0
            )
          : e();
      },
      C = [1800, 3e3],
      x = function x(e, t) {
        (t = t || {}),
          S(function () {
            var n,
              o = T(),
              i = m('FCP'),
              a = h('paint', function (e) {
                e.forEach(function (e) {
                  'first-contentful-paint' === e.name &&
                    (a.disconnect(),
                    e.startTime < o.firstHiddenTime &&
                      ((i.value = Math.max(e.startTime - u(), 0)),
                      i.entries.push(e),
                      n(!0)));
                });
              });
            a &&
              ((n = f(e, i, C, t.reportAllChanges)),
              d(function (o) {
                (i = m('FCP')),
                  (n = f(e, i, C, t.reportAllChanges)),
                  g(function () {
                    (i.value = performance.now() - o.timeStamp), n(!0);
                  });
              }));
          });
      },
      L = [0.1, 0.25],
      k = function k(e, t) {
        !(function (e, t) {
          (t = t || {}),
            x(
              _(function () {
                var n,
                  o = m('CLS', 0),
                  i = 0,
                  a = [],
                  r = function r(e) {
                    e.forEach(function (e) {
                      if (!e.hadRecentInput) {
                        var t = a[0],
                          n = a[a.length - 1];
                        i &&
                        e.startTime - n.startTime < 1e3 &&
                        e.startTime - t.startTime < 5e3
                          ? ((i += e.value), a.push(e))
                          : ((i = e.value), (a = [e]));
                      }
                    }),
                      i > o.value && ((o.value = i), (o.entries = a), n());
                  },
                  s = h('layout-shift', r);
                s &&
                  ((n = f(e, o, L, t.reportAllChanges)),
                  v(function () {
                    r(s.takeRecords()), n(!0);
                  }),
                  d(function () {
                    (i = 0),
                      (o = m('CLS', 0)),
                      (n = f(e, o, L, t.reportAllChanges)),
                      g(function () {
                        return n();
                      });
                  }),
                  setTimeout(n, 0));
              })
            );
        })(function (t) {
          var n = (function (e) {
            var t,
              n = {};
            if (e.entries.length) {
              var o = e.entries.reduce(function (e, t) {
                return e && e.value > t.value ? e : t;
              });
              if (o && o.sources && o.sources.length) {
                var i =
                  (t = o.sources).find(function (e) {
                    return e.node && 1 === e.node.nodeType;
                  }) || t[0];
                i &&
                  (n = {
                    largestShiftTarget: l(i.node),
                    largestShiftTime: o.startTime,
                    largestShiftValue: o.value,
                    largestShiftSource: i,
                    largestShiftEntry: o,
                    loadState: r(o.startTime),
                  });
              }
            }
            return Object.assign(e, { attribution: n });
          })(t);
          e(n);
        }, t);
      },
      I = 0,
      O = 1 / 0,
      P = 0,
      M = function M(e) {
        e.forEach(function (e) {
          e.interactionId &&
            ((O = Math.min(O, e.interactionId)),
            (P = Math.max(P, e.interactionId)),
            (I = P ? (P - O) / 7 + 1 : 0));
        });
      },
      N = function N() {
        return o ? I : performance.interactionCount || 0;
      },
      R = function R() {
        'interactionCount' in performance ||
          o ||
          (o = h('event', M, {
            type: 'event',
            buffered: !0,
            durationThreshold: 0,
          }));
      },
      z = [],
      B = new Map(),
      D = 0,
      H = [],
      F = function F(e) {
        if (
          (H.forEach(function (t) {
            return t(e);
          }),
          e.interactionId || 'first-input' === e.entryType)
        ) {
          var t = z[z.length - 1],
            n = B.get(e.interactionId);
          if (n || z.length < 10 || e.duration > t.latency) {
            if (n)
              e.duration > n.latency
                ? ((n.entries = [e]), (n.latency = e.duration))
                : e.duration === n.latency &&
                  e.startTime === n.entries[0].startTime &&
                  n.entries.push(e);
            else {
              var o = {
                id: e.interactionId,
                latency: e.duration,
                entries: [e],
              };
              B.set(o.id, o), z.push(o);
            }
            z.sort(function (e, t) {
              return t.latency - e.latency;
            }),
              z.length > 10 &&
                z.splice(10).forEach(function (e) {
                  return B.delete(e.id);
                });
          }
        }
      },
      q = function q(e) {
        var t = self.requestIdleCallback || self.setTimeout,
          n = -1;
        return (
          (e = _(e)),
          'hidden' === document.visibilityState ? e() : ((n = t(e)), v(e)),
          n
        );
      },
      j = [200, 500],
      U = function U(e, t) {
        'PerformanceEventTiming' in self &&
          'interactionId' in PerformanceEventTiming.prototype &&
          ((t = t || {}),
          S(function () {
            var n;
            R();
            var o,
              i = m('INP'),
              a = function a(e) {
                q(function () {
                  e.forEach(F);
                  var t = (function () {
                    var e = Math.min(z.length - 1, Math.floor((N() - D) / 50));
                    return z[e];
                  })();
                  t &&
                    t.latency !== i.value &&
                    ((i.value = t.latency), (i.entries = t.entries), o());
                });
              },
              r = h('event', a, {
                durationThreshold:
                  null !== (n = t.durationThreshold) && void 0 !== n ? n : 40,
              });
            (o = f(e, i, j, t.reportAllChanges)),
              r &&
                (r.observe({ type: 'first-input', buffered: !0 }),
                v(function () {
                  a(r.takeRecords()), o(!0);
                }),
                d(function () {
                  (D = N()),
                    (z.length = 0),
                    B.clear(),
                    (i = m('INP')),
                    (o = f(e, i, j, t.reportAllChanges));
                }));
          }));
      },
      $ = [],
      G = [],
      V = 0,
      W = new WeakMap(),
      Z = new Map(),
      X = -1,
      Q = function Q(e) {
        ($ = $.concat(e)), Y();
      },
      Y = function Y() {
        X < 0 && (X = q(K));
      },
      K = function K() {
        Z.size > 10 &&
          Z.forEach(function (e, t) {
            B.has(t) || Z.delete(t);
          });
        var e = z.map(function (e) {
            return W.get(e.entries[0]);
          }),
          t = G.length - 50;
        G = G.filter(function (n, o) {
          return o >= t || e.includes(n);
        });
        for (var n = new Set(), o = 0; o < G.length; o++) {
          var i = G[o];
          J(i.startTime, i.processingEnd).forEach(function (e) {
            n.add(e);
          });
        }
        var a = $.length - 1 - 50;
        ($ = $.filter(function (e, t) {
          return (e.startTime > V && t > a) || n.has(e);
        })),
          (X = -1);
      };
    H.push(
      function (e) {
        e.interactionId &&
          e.target &&
          !Z.has(e.interactionId) &&
          Z.set(e.interactionId, e.target);
      },
      function (e) {
        var t,
          n = e.startTime + e.duration;
        V = Math.max(V, e.processingEnd);
        for (var o = G.length - 1; o >= 0; o--) {
          var i = G[o];
          if (Math.abs(n - i.renderTime) <= 8) {
            ((t = i).startTime = Math.min(e.startTime, t.startTime)),
              (t.processingStart = Math.min(
                e.processingStart,
                t.processingStart
              )),
              (t.processingEnd = Math.max(e.processingEnd, t.processingEnd)),
              t.entries.push(e);
            break;
          }
        }
        t ||
          ((t = {
            startTime: e.startTime,
            processingStart: e.processingStart,
            processingEnd: e.processingEnd,
            renderTime: n,
            entries: [e],
          }),
          G.push(t)),
          (e.interactionId || 'first-input' === e.entryType) && W.set(e, t),
          Y();
      }
    );
    var J = function J(e, t) {
        for (var n, o = [], i = 0; (n = $[i]); i++)
          if (!(n.startTime + n.duration < e)) {
            if (n.startTime > t) break;
            o.push(n);
          }
        return o;
      },
      ee = function ee(e, t) {
        i || (i = h('long-animation-frame', Q)),
          U(function (t) {
            var n = (function (e) {
              var t = e.entries[0],
                n = W.get(t),
                o = t.processingStart,
                i = n.processingEnd,
                a = n.entries.sort(function (e, t) {
                  return e.processingStart - t.processingStart;
                }),
                s = J(t.startTime, i),
                c = e.entries.find(function (e) {
                  return e.target;
                }),
                p = (c && c.target) || Z.get(t.interactionId),
                d = [t.startTime + t.duration, i].concat(
                  s.map(function (e) {
                    return e.startTime + e.duration;
                  })
                ),
                u = Math.max.apply(Math, d),
                m = {
                  interactionTarget: l(p),
                  interactionTargetElement: p,
                  interactionType: t.name.startsWith('key')
                    ? 'keyboard'
                    : 'pointer',
                  interactionTime: t.startTime,
                  nextPaintTime: u,
                  processedEventEntries: a,
                  longAnimationFrameEntries: s,
                  inputDelay: o - t.startTime,
                  processingDuration: i - o,
                  presentationDelay: Math.max(u - i, 0),
                  loadState: r(t.startTime),
                };
              return Object.assign(e, { attribution: m });
            })(t);
            e(n);
          }, t);
      },
      te = [2500, 4e3],
      ne = {},
      oe = function oe(e, t) {
        !(function (e, t) {
          (t = t || {}),
            S(function () {
              var n,
                o = T(),
                i = m('LCP'),
                a = function a(e) {
                  t.reportAllChanges || (e = e.slice(-1)),
                    e.forEach(function (e) {
                      e.startTime < o.firstHiddenTime &&
                        ((i.value = Math.max(e.startTime - u(), 0)),
                        (i.entries = [e]),
                        n());
                    });
                },
                r = h('largest-contentful-paint', a);
              if (r) {
                n = f(e, i, te, t.reportAllChanges);
                var s = _(function () {
                  ne[i.id] ||
                    (a(r.takeRecords()),
                    r.disconnect(),
                    (ne[i.id] = !0),
                    n(!0));
                });
                ['keydown', 'click'].forEach(function (e) {
                  addEventListener(
                    e,
                    function () {
                      return q(s);
                    },
                    !0
                  );
                }),
                  v(s),
                  d(function (o) {
                    (i = m('LCP')),
                      (n = f(e, i, te, t.reportAllChanges)),
                      g(function () {
                        (i.value = performance.now() - o.timeStamp),
                          (ne[i.id] = !0),
                          n(!0);
                      });
                  });
              }
            });
        })(function (t) {
          var n = (function (e) {
            var t = {
              timeToFirstByte: 0,
              resourceLoadDelay: 0,
              resourceLoadDuration: 0,
              elementRenderDelay: e.value,
            };
            if (e.entries.length) {
              var n = a();
              if (n) {
                var o = n.activationStart || 0,
                  i = e.entries[e.entries.length - 1],
                  r =
                    i.url &&
                    performance
                      .getEntriesByType('resource')
                      .filter(function (e) {
                        return e.name === i.url;
                      })[0],
                  s = Math.max(0, n.responseStart - o),
                  c = Math.max(s, r ? (r.requestStart || r.startTime) - o : 0),
                  p = Math.max(c, r ? r.responseEnd - o : 0),
                  d = Math.max(p, i.startTime - o);
                (t = {
                  element: l(i.element),
                  timeToFirstByte: s,
                  resourceLoadDelay: c - s,
                  resourceLoadDuration: p - c,
                  elementRenderDelay: d - p,
                  navigationEntry: n,
                  lcpEntry: i,
                }),
                  i.url && (t.url = i.url),
                  r && (t.lcpResourceEntry = r);
              }
            }
            return Object.assign(e, { attribution: t });
          })(t);
          e(n);
        }, t);
      };
    new Date();
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    t.default =
      '<div class="c2sPlayer" id="onn-player__container">\n    <div class="c2sPlayer__wrapper">\n        <button class="c2sPlayer__wrapper__audioBtn" id="c2s_audioBtn"></button>\n        <div class="c2sPlayer__wrapper__volume">\n            <button class="c2sPlayer__wrapper__volume__volumeBtn" id="c2s_volumeBtn"></button>\n            <input value="80" min="0" max="100" class="c2sPlayer__wrapper__volume__slider onn-player__slider" type="range" id="c2s_volumeSlider">\n        </div>\n        <div class="c2sPlayer__wrapper__audioSlider">\n            <input value="0" class="c2sPlayer__wrapper__audioSlider__slider" type="range" id="c2s_audioSlider">\n            <div class="c2sPlayer__wrapper__audioSlider__timestamp">\n                <div class="c2sPlayer__wrapper__audioSlider__ad hidden"></div>\n                <div>\n                    <span id="c2s_currentTime">00:00</span> / \n                    <span id="c2s_endTime">00:00</span>\n                </div>\n            </div>\n        </div>\n        <button class="c2sPlayer__wrapper__closeBtn" id="c2s_closeBtn"></button>\n        <div id="onn-player__player" style="width:1px;height:1px;"></div>\n    </div>\n</div>';
  },
  function (e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'insertAds', function () {
        return p;
      }),
      n.d(t, 'adsReplace', function () {
        return c;
      });
    var o = n(0);
    var i = function i(e) {
        try {
          window.putBanDFPInViewObject(e);
        } catch (t) {
          console.error('adsObserver'),
            console.error('ads PROBLEM'),
            console.error(t),
            console.error(e);
        }
      },
      a = function a(e) {
        var t = e.id.split('-'),
          n = { slot: ''.concat(t[1], '-').concat(t[2]), divId: e.id };
        return gazeta_pl.mobileInfo.isMobileDevice && (n.slot += '-' + t[3]), n;
      },
      r = function r(e) {
        var t = e.querySelector('.article__content'),
          n = _toConsumableArray(t.querySelectorAll('.adviewDFPBanner')),
          r = _toConsumableArray(t.querySelectorAll('[id^="banC"]'));
        n.forEach(function (e) {
          var t = a(e);
          i(t);
        }),
          o.default.serviceWithNoRightColumn.includes(o.default.domain) ||
            r.forEach(function (e) {
              (function (e) {
                var t = document.createElement('script');
                (t.innerHTML = e.innerHTML),
                  e.parentNode.insertBefore(t, e.nextSibling),
                  e.remove();
              })(e.nextElementSibling);
            });
      },
      s = function s(e) {
        var t = e.querySelector('.headerPremium');
        t.insertAdjacentHTML(
          'afterbegin',
          (function (e) {
            var t = '071-WINIETA';
            gazeta_pl.mobileInfo.isMobileDevice && (t = '103-WINIETA-MOBI');
            return '\n    <div class="Ww1k3-premium Ww1k3-premium--autoload">\n        <div id="adUnit-'
              .concat(t, '-')
              .concat(e, '" class="adviewDFPBanner DFP-')
              .concat(
                t,
                '">\n            <span class="banLabel" style="display: none;">REKLAMA</span>\n\t        <div id=\'div-gpt-ad-'
              )
              .concat(t, '-')
              .concat(
                e,
                "'>\n                <script type='text/javascript'>\n                    googletag.cmd.push(function() { googletag.display('div-gpt-ad-"
              )
              .concat(t, '-')
              .concat(
                e,
                "'); });\n                </script>\n            </div>\n        </div>\n    </div>\n    "
              );
          })(o.default.elementsToObserve.iterator)
        );
        var n = t.querySelector('.adviewDFPBanner'),
          r = a(n);
        i(r);
      },
      l = function l(e, t, n) {
        var o,
          i = [e];
        for (; null !== (o = t.exec(e)); )
          o.index === t.lastIndex && t.lastIndex++, (i = o.map(n));
        return i[i.length - 1];
      },
      c = function c(e, t) {
        var n = e;
        return (
          o.default.isC2C ||
            (n = (function (e, t) {
              var n = e;
              return (
                (n = l(
                  n,
                  /id="(banC\d*)[\s\S]*?(divId: 'banC\d*)/gm,
                  function (e, o) {
                    if (1 == o || 2 == o)
                      return (n = n.replace(e, ''.concat(e, '-').concat(t)));
                  }
                )),
                n
              );
            })(n, t)),
          (n = (function (e, t) {
            var n = e;
            return (
              (n = l(n, /id="(adUnit.*?)"/gm, function (e, o) {
                if (1 == o)
                  return (n = n.replaceAll(e, ''.concat(e, '-').concat(t)));
              })),
              n
            );
          })(n, t)),
          (n = (function (e, t) {
            var n = e;
            var o = new Set();
            return (
              l(n, /['"](div-gpt-ad-.*)['"]/gm, function (e, t) {
                1 == t && o.add(e);
              }),
              o.forEach(function (e) {
                n = n.replaceAll(e, ''.concat(e, '-').concat(t));
              }),
              n
            );
          })(n, t)),
          n
        );
      },
      p = function p(e) {
        var t = document.querySelector(
          '.premiumArticle__wrapper[data-xx="'.concat(e, '"]')
        );
        (function (e) {
          if (
            (i({
              slot: '003-RECTANGLE',
              divId: 'adUnit-003-RECTANGLE-' + e,
              kw: "['fif".concat(e, "']"),
            }),
            'DESKTOP' === o.default.device)
          ) {
            i({
              slot: '035-RECTANGLE-BTF',
              divId: 'adUnit-035-RECTANGLE-BTF-' + e,
              kw: "['fif_035_".concat(e, "']"),
            });
            i({
              slot: '000-MAINBOX',
              divId: 'adUnit-000-MAINBOX-' + e,
              kw: "['fif_MB_".concat(e, "']"),
            });
            i({
              slot: '001-TOPBOARD',
              divId: 'adUnit-001-TOPBOARD-' + e,
              kw: "['fif_TB_".concat(e, "']"),
            });
          } else {
            i({
              slot: '101-TOPBOARD-MOBI',
              divId: 'adUnit-101-TOPBOARD-MOBI-' + e,
              kw: "['fif_TB_".concat(e, "']"),
            });
          }
        })(o.default.elementsToObserve.iterator),
          r(t),
          window.isPartnerMaterialCheck &&
            window.isPartnerMaterialCheck.then(function (e) {
              e && s(t);
            });
      };
  },
  function (e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'FETCH_REQUEST_SENT_ADD_COMMENT', function () {
        return o;
      }),
      n.d(t, 'FETCH_REQUEST_SUCCESS_ADD_COMMENT', function () {
        return i;
      }),
      n.d(t, 'FETCH_REQUEST_FAILURE_ADD_COMMENT', function () {
        return a;
      });
    var o = 'FETCH_REQUEST_SENT_ADD_COMMENT',
      i = 'FETCH_REQUEST_SUCCESS_ADD_COMMENT',
      a = 'FETCH_REQUEST_FAILURE_ADD_COMMENT';
  },
  function (e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'FETCH_REQUEST_SENT_VOTING', function () {
        return o;
      }),
      n.d(t, 'FETCH_REQUEST_SUCCESS_VOTING', function () {
        return i;
      }),
      n.d(t, 'FETCH_REQUEST_FAILURE_VOTING', function () {
        return a;
      });
    var o = 'FETCH_REQUEST_SENT_VOTING',
      i = 'FETCH_REQUEST_SUCCESS_VOTING',
      a = 'FETCH_REQUEST_FAILURE_VOTING';
  },
  function (e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'FETCH_REQUEST_SENT_TRASH', function () {
        return o;
      }),
      n.d(t, 'FETCH_REQUEST_SUCCESS_TRASH', function () {
        return i;
      }),
      n.d(t, 'FETCH_REQUEST_FAILURE_TRASH', function () {
        return a;
      });
    var o = 'FETCH_REQUEST_SENT_TRASH',
      i = 'FETCH_REQUEST_SUCCESS_TRASH',
      a = 'FETCH_REQUEST_FAILURE_TRASH';
  },
  function (e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'commentsMainTemplate', function () {
        return c;
      }),
      n.d(t, 'commentsDisabledTemplate', function () {
        return p;
      });
    n(43);
    var o = n(19),
      i = n(6),
      a = n(20),
      r = n(21),
      s = n(22);
    var l = { OXX: '0' },
      c = function c(e, t) {
        return '\n    '
          .concat(Object(o.default)(e, t), '\n    ')
          .concat(
            Object(i.commentsTextfieldTemplate)(
              _objectSpread(_objectSpread({}, l), {}, { logged: e.logged }),
              t
            ),
            '\n    '
          )
          .concat(Object(i.commentsContainerTemplate)(e, t), '\n    ')
          .concat(
            e.add.filter(function (e) {
              return '0' === e.parentId;
            }).length > t.showComments
              ? a.default
              : '',
            '\n    '
          )
          .concat(Object(r.default)(t), '\n');
      },
      p = function p(e, t) {
        return '\n        '.concat(Object(s.default)(e, t), '\n    ');
      };
  },
  function (e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'makeArticle', function () {
        return s;
      }),
      n.d(t, 'makeList', function () {
        return l;
      }),
      n.d(t, 'makeListItem', function () {
        return c;
      });
    var o = n(0),
      i = n(35),
      a = n(38),
      r = n(9);
    var s = function s(e) {
        var t, n, s;
        var l = Object(i.default)(e);
        return (
          o.default.isPremium
            ? ((s = Object(a.default)(e)), (n = l && s))
            : o.default.isAutoloadOn && (n = !!l),
          n &&
            (t = '\n            <div class="premiumArticle__wrapper'
              .concat(
                o.default.isAutoloadOn
                  ? ' premiumArticle__wrapper__normal'
                  : '',
                '">\n                '
              )
              .concat(o.default.isPremium ? s : '', '\n                ')
              .concat(l, '\n                ')
              .concat(
                Object(r.CommentsContainer)(e.xx),
                '\n            </div>\n            <div class="premiumArticle__break"></div>\n        '
              )),
          t
        );
      },
      l = /*#__PURE__*/ (function () {
        var _ref6 = _asyncToGenerator(function* () {
          return '\n        <div class="premiumOtherArticles">\n            <h2 class="premiumOtherArticles-header">Wszystkie artyku\u0142y</h2>\n            <ul class="premiumOtherArticles-items">'.concat(
            (yield Promise.all(
              o.default.articlesList.backup.map(
                /*#__PURE__*/ (function () {
                  var _ref7 = _asyncToGenerator(function* (e) {
                    var t = { articleXX: e };
                    return yield Object(r.getMinimalArticle)(t, c);
                  });
                  return function (_x) {
                    return _ref7.apply(this, arguments);
                  };
                })()
              )
            )).reduce(function (e, t, n) {
              return ''.concat(e).concat(t);
            }, ''),
            '</ul>\n        </div>\n    '
          );
        });
        return function l() {
          return _ref6.apply(this, arguments);
        };
      })(),
      c = function c(e) {
        var t = !1;
        gazeta_pl.mobileInfo.isMobileDevice && (t = !0);
        var _e$data$documentById2 = e.data.documentById,
          n = _e$data$documentById2.authors,
          o = _e$data$documentById2.lead,
          i = _e$data$documentById2.title,
          a = _e$data$documentById2.url,
          r = _e$data$documentById2.photoRelated,
          s = r.length
            ? t
              ? PhotoAPI.photoChangeFormat(r[0].url, 'H')
              : PhotoAPI.photoChangeFormat(r[0].url, 'II')
            : '',
          l = r.length ? r[0].title : i,
          c = n.length
            ? n.reduce(function (e, t) {
                return ''.concat(e, ', ').concat(t);
              })
            : '';
        var p = '';
        return (
          '' != s &&
            (p =
              '\n        <li class="premiumOtherArticles-item">\n            <a class="premiumOtherArticles-itemImageLink" href="'
                .concat(
                  a,
                  '"><img class="premiumOtherArticles-itemImage" src="'
                )
                .concat(s, '" alt="')
                .concat(
                  l,
                  '" /></a>\n            <div class="premiumOtherArticles-itemContent">\n                <a href="'
                )
                .concat(
                  a,
                  '" class="premiumOtherArticles-itemLink">\n                    <h3 class="premiumOtherArticles-itemTitle">'
                )
                .concat(i, '</h3>\n                    ')
                .concat(
                  t
                    ? ''
                    : '<div class="premiumOtherArticles-itemLead">'.concat(
                        o,
                        '</div>'
                      ),
                  '\n                </a>\n                '
                )
                .concat(
                  c
                    ? '<div class="premiumOtherArticles-itemAuthor">'.concat(
                        c,
                        '</div>'
                      )
                    : '',
                  '\n            </div>\n        </li>\n        '
                )),
          p
        );
      };
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    var o = n(2),
      i = (n(8), n(4)),
      a = n(3),
      r = n(6),
      s = n(16);
    t.default = /*#__PURE__*/ (function () {
      function _class(e) {
        _classCallCheck(this, _class);
        this.store = e;
      }
      return _createClass(_class, [
        {
          key: 'init',
          value: function init(e, t, n) {
            if (
              ((this.commentsAppReference = document.getElementById(
                a.default.appId
              )),
              this.commentsAppReference)
            ) {
              (this.commentsUtils = t), (this.sorting = n);
              var _o2 = {
                  showComments: window.location.href.includes('#commentId')
                    ? 5e4
                    : 4,
                  loadEvery: 10,
                  incraseLoadAfter: 3,
                  loadAfterSize: 50,
                  commentsSortingRule: 'najciekawsze',
                  commentsLoggedUsers: 'tak',
                  commentsLoginPage:
                    'https://konto.gazeta.pl/konto/logowanie,.html',
                  commentsRegisterPage:
                    'https://konto.gazeta.pl/konto/rejestracja,.html',
                  commentsVotes: 'nie',
                },
                _i2 = document.getElementById('commentsAppJson'),
                _a2 = this.commentsUtils.removeEmptyValuesFromObject(
                  JSON.parse(_i2.textContent)
                );
              (this.appConfig = _objectSpread(_objectSpread({}, _o2), _a2)),
                e(this),
                this.subscribe(),
                this.insertMainTemplate();
            }
          },
        },
        {
          key: 'subscribe',
          value: function subscribe() {
            var _this = this;
            this.store.subscribe(function () {
              var _this$store$getState = _this.store.getState(),
                e = _this$store$getState.lastAction,
                t = _this$store$getState.fetchComments;
              if (e.type.includes(o.FETCH_REQUEST_SUCCESS_GET_COMMENTS)) {
                var _e4 = _this.sorting.setSorting(t.data.add);
                t.data.add = _this.transformComments(_e4);
                var _n = t.data;
                _n.opinionsDisabled
                  ? _this.commentsAppReference.insertAdjacentHTML(
                      'beforeend',
                      Object(s.commentsDisabledTemplate)(_n, _this.appConfig)
                    )
                  : (_this.updateCounter(_n.count),
                    _this.commentsAppReference.insertAdjacentHTML(
                      'beforeend',
                      Object(s.commentsMainTemplate)(_n, _this.appConfig)
                    ),
                    _this.store.dispatch({
                      type: o.AFTER_COMMENTS_TEMPLATE_INSERTED,
                      payload: { data: t, insertType: 'init' },
                    })),
                  _this.sorting.setSortingLabel();
              }
              if (
                (e.type.includes(i.FETCH_REQUEST_SUCCESS_LOGOUT_USER) &&
                  ((t.data.logged = !1),
                  (t.data.isMod = e.payload.admin ? 1 : 0),
                  _this.commentsAppReference.classList.remove(
                    'commentsApp--logged'
                  ),
                  _this.updateHat()),
                e.type.includes(o.FETCH_REQUEST_FAILURE_GET_COMMENTS) &&
                  console.log('B\u0142\u0105d podczas pobierania komentarzy'),
                e.type.includes(i.FETCH_REQUEST_SUCCESS_GET_USER))
              ) {
                (t.data.isMod = e.payload.admin ? 1 : 0),
                  _this.updateForm(e.payload),
                  _this.updateUserName(),
                  !1 === e.payload.enableSetLoginForm &&
                    _this.updateHat(e.payload.user);
                var _n2 = window.location.href.includes('#commentId'),
                  _o3 = window.location.href.includes('#opinions');
                _n2 && _this.scrollToComment(),
                  _o3 && _this.scrollToCommentsStart();
              }
              e.type.includes(o.SHOW_REPLIES) && _this.updateForm(t.data),
                e.type.includes(o.LOAD_MORE_COMMENTS) &&
                  _this.updateForm(t.data);
            });
          },
        },
        {
          key: 'insertMainTemplate',
          value: function insertMainTemplate() {
            this.store.dispatch({ type: o.BEFORE_COMMENTS_TEMPLATE_INSERTED }),
              (this.commentsAppReference.innerHTML = ''),
              this.getComments();
          },
        },
        {
          key: 'getComments',
          value: function getComments() {
            var _this$appConfig = this.appConfig,
              e = _this$appConfig.root,
              t = _this$appConfig.section,
              n = _this$appConfig.xx,
              i = {
                d_xx: t,
                root: e,
                obxx: n,
                action: 'getOpinions',
                pageSize: 5e4,
                enableTrees: !1,
              };
            (this.data = i),
              this.store.dispatch({
                type: o.FETCH_REQUEST_SENT_GET_COMMENTS,
                payload: {
                  url: a.default.commentsApiUrl,
                  params: { method: 'GET' },
                  data: i,
                },
              });
          },
        },
        {
          key: 'showReplies',
          value: function showReplies(e) {
            var _this2 = this;
            var _this$store$getState2 = this.store.getState(),
              t = _this$store$getState2.fetchComments,
              n = e.closest('.commentsApp__comment');
            n.classList.toggle('commentsApp__comment--expand');
            var i = e
                .closest('.commentsApp__comment')
                .querySelector('.commentsApp__subComments'),
              a = _objectSpread(
                _objectSpread({}, t.data),
                {},
                {
                  add: t.data.add.slice().sort(function (e, t) {
                    return _this2.sorting.sortHelper(e, t, 'timestamp');
                  }),
                }
              ),
              s = n.dataset.entryid,
              l = Object(r.commentsContainerTemplate)(
                a,
                this.appConfig,
                { startPosition: 0, size: 1e4 },
                s
              );
            (i.innerHTML = l),
              this.updateUserName(),
              this.store.dispatch({ type: o.SHOW_REPLIES });
          },
        },
        {
          key: 'loadMore',
          value: function loadMore(e) {
            var _this3 = this;
            var _this$store$getState3 = this.store.getState(),
              t = _this$store$getState3.fetchComments,
              n = parseInt(e.dataset.count, 10) + 1,
              i = this.appConfig,
              a = { size: i.loadEvery };
            1 === n
              ? (a.startPosition = i.showComments)
              : n < i.incraseLoadAfter
              ? (a.startPosition = i.showComments + i.loadEvery * (n - 1))
              : ((a.startPosition =
                  i.showComments +
                  (i.loadEvery * (i.incraseLoadAfter - 1) +
                    i.loadAfterSize * (n - i.incraseLoadAfter))),
                (a.size = i.loadAfterSize)),
              (e.dataset.count = n);
            var s = Object(r.commentsContainerTemplate)(t.data, i, a);
            scheduler
              .postTask(
                function () {
                  _this3.commentsAppReference
                    .querySelector('.commentsApp__commentsContainer')
                    .insertAdjacentHTML('beforeend', s);
                },
                { priority: 'user-visible' }
              )
              .then(function () {
                _this3.updateUserName();
                _this3.commentsAppReference.querySelectorAll(
                  '.commentsApp__commentsContainer > .commentsApp__comment'
                ).length ===
                  t.data.add.filter(function (e) {
                    return '0' === e.parentId;
                  }).length &&
                  scheduler.postTask(
                    function () {
                      e.classList.add('commentsApp__buttonLoadMore--hidden');
                    },
                    { priority: 'user-visible' }
                  ),
                  _this3.store.dispatch({
                    type: o.LOAD_MORE_COMMENTS,
                    payload: {
                      data: _this3.store.getState().fetchComments.data,
                    },
                  });
              }),
              this.sendBigDataEvent();
          },
        },
        {
          key: 'sendBigDataEvent',
          value: function sendBigDataEvent() {
            'undefined' != typeof scheduler
              ? scheduler.postTask(
                  function () {
                    gazeta_pl_bigdata.sendDataOceanEvent(910, {
                      type: 'przycisk',
                      section: 'wczytaj_wiecej_komentarzy',
                    });
                  },
                  { priority: 'background' }
                )
              : gazeta_pl_bigdata.sendDataOceanEvent(910, {
                  type: 'przycisk',
                  section: 'wczytaj_wiecej_komentarzy',
                });
          },
        },
        {
          key: 'updateUserName',
          value: function updateUserName() {
            var e = localStorage.getItem('nickGuest');
            'tak' === this.appConfig.commentsLoggedUsers && (e = !1);
            var _this$store$getState4 = this.store.getState(),
              t = _this$store$getState4.fetchComments;
            if (t.data.logged) {
              this.commentsAppReference.classList.remove('commentsApp--guest'),
                this.commentsAppReference.classList.add('commentsApp--logged');
              var _e5 = t.data.user;
              this.commentsAppReference
                .querySelectorAll('.commentsApp__userName')
                .forEach(function (t) {
                  t.innerText = _e5;
                });
            } else
              e
                ? ((e = 'Go\u015B\u0107: ' + e),
                  this.commentsAppReference.classList.add('commentsApp--guest'),
                  this.commentsAppReference
                    .querySelectorAll('.commentsApp__userName')
                    .forEach(function (t) {
                      t.innerText = e;
                    }))
                : (this.commentsAppReference.classList.remove(
                    'commentsApp--logged'
                  ),
                  this.commentsAppReference.classList.remove(
                    'commentsApp--guest'
                  ));
            this.commentsUtils.moderationLink();
          },
        },
        {
          key: 'setDefaultTextarea',
          value: function setDefaultTextarea(e) {
            e.hasAttribute('readonly') && e.removeAttribute('readonly'),
              e.setAttribute('data-action', 'revealBottom');
          },
        },
        {
          key: 'updateForm',
          value: function updateForm(e) {
            var _this4 = this;
            var t = this.commentsAppReference.querySelectorAll(
                '.commentsApp__addCommentTextarea'
              ),
              n = this.commentsAppReference.querySelectorAll(
                '.commentsApp__button--send.commentsApp__interactiveEl'
              );
            e.logged && !e.enableSetLoginForm
              ? (this.commentsAppReference.classList.remove(
                  'commentsApp--logged-without-nick'
                ),
                t.forEach(function (e) {
                  return _this4.setDefaultTextarea(e);
                }),
                n.forEach(function (e) {
                  (e.innerText = 'Skomentuj'),
                    e.setAttribute('data-action', 'send');
                }))
              : e.logged && e.enableSetLoginForm
              ? (this.commentsAppReference.classList.add(
                  'commentsApp--logged-without-nick'
                ),
                t.forEach(function (e) {
                  return _this4.setDefaultTextarea(e);
                }),
                n.forEach(function (e) {
                  (e.innerText = 'Nadaj nick i skomentuj'),
                    e.setAttribute('data-action', 'toggleNickPopup');
                }))
              : e.logged ||
                (this.commentsAppReference.classList.remove(
                  'commentsApp--logged-without-nick'
                ),
                t.forEach(function (e) {
                  e.setAttribute('readonly', 'true'),
                    e.setAttribute('data-action', 'popup');
                }),
                n.forEach(function (e) {
                  (e.innerText = 'Zaloguj si\u0119 i skomentuj'),
                    e.setAttribute('data-action', 'popup');
                }));
          },
        },
        {
          key: 'updateCounter',
          value: function updateCounter(e) {
            var t = document.querySelector(
                '.socialBar.horizontal .comments .count, .socialBar_b.horizontal .comments .count'
              ),
              n = document.querySelector(
                '.socialBar.vertical .comments .count'
              );
            t && (t.classList.add('active'), (t.innerText = '' + e)),
              n && (n.classList.add('active'), (n.innerText = e));
          },
        },
        {
          key: 'updateHat',
          value: function updateHat(e) {
            var t = new CustomEvent('userName', { detail: { userName: e } });
            window.dispatchEvent(t);
          },
        },
        {
          key: 'transformComments',
          value: function transformComments(e) {
            var t = [],
              n = {};
            var o;
            var _i3 = function i(t, a) {
              var r = a.entryId;
              var s;
              t ? ((s = t), (n[t] = r)) : (s = a.entryId);
              var l = e.filter(function (e) {
                return e.parentId === s;
              });
              l.length > 0 &&
                ((o += l.length),
                l.forEach(function (e) {
                  _i3(e.entryId, a);
                }));
            };
            e.forEach(function (e) {
              (o = 0),
                '0' === e.parentId && _i3(null, e),
                (e.replies = o),
                t.push(e);
            });
            return t
              .map(function (e) {
                return n[e.parentId] && (e.parentId = n[e.parentId]), e;
              })
              .map(function (e) {
                return _objectSpread(
                  _objectSpread({}, e),
                  {},
                  {
                    replies: t.reduce(function (t, n) {
                      return t + Number(n.parentId === e.entryId);
                    }, 0),
                  }
                );
              });
          },
        },
        {
          key: 'scrollToComment',
          value: function scrollToComment() {
            var _this5 = this;
            var e = window.location.href
                .split('#')[1]
                .replace('commentId', '')
                .replace('_', ''),
              t = 'commentId' + e,
              n = this.store
                .getState()
                .fetchComments.data.add.filter(function (t) {
                  return t.entryId === e;
                }),
              o = function o() {
                setTimeout(function () {
                  var e = document.getElementById(t);
                  _this5.commentsAppReference
                    .querySelectorAll('[id*="DFP-011-MIDBOARD"]')
                    .forEach(function (e) {
                      e.style.display = 'none';
                    }),
                    setTimeout(function () {
                      e.scrollIntoView(),
                        e.classList.add('commentsApp__comment--active');
                    }, 500);
                }, 2500);
              };
            document.getElementById(t)
              ? o()
              : setTimeout(function () {
                  var e = document.getElementById('commentId' + n[0].parentId);
                  if (e) {
                    var _t2 = e.querySelector('.commentsApp__showReplies');
                    _t2.classList.add('commentsApp--noFocus'),
                      _t2.click(),
                      _t2.classList.remove('commentsApp--noFocus'),
                      o();
                  }
                }, 500);
          },
        },
        {
          key: 'scrollToCommentsStart',
          value: function scrollToCommentsStart() {
            var _this6 = this;
            var e =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : 2500;
            setTimeout(function () {
              _this6.commentsAppReference.scrollIntoView(), scrollBy(0, -100);
            }, e);
          },
        },
      ]);
    })();
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    n(44);
    var o = document.getElementById('article_title')
      ? document.getElementById('article_title').innerText
      : '';
    var i = '';
    var a = 'od najnowszych',
      r = 'od najstarszych',
      s = 'od najpopularniejszych';
    gazeta_pl.mobileInfo.isMobileDevice || (i = 'Sortuj ');
    t.default = function (e, t) {
      var n = !0;
      return (
        t.commentsVotes && 'nie' === t.commentsVotes && (n = !1),
        '\n        <div class="commentsApp__header">\n            <h3 class="commentsApp__heading">Komentarze <span class="commentsApp__headerCounter" id="commentsApp__headerCounter">('
          .concat(
            e.count,
            ')</span></h3>\n            <div class="commentsApp__sorting">\n                <button type="button" class="commentsApp__BoxTrigger commentsApp__textStyledBtn commentsApp__sortingSelected commentsApp__interactiveEl" data-action="openSortBox">najciekawsze<svg class="commentsApp__sortingTriangle" xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4"><g transform="translate(-162.667 -6.667)"><path class="commentsApp__sortingTrianglePath" d="M7,10l4,4,4-4Z" transform="translate(155.667 -3.333)"/></g></svg></button>\n                <div class="commentsApp__Box commentsApp__Box--sorting">\n                    <button type="button" class="commentsApp__BoxOption commentsApp__textStyledBtn commentsApp__BoxOption--sorting commentsApp__interactiveEl" data-type="newest" data-action="sort" data-text="'
          )
          .concat(a, '">')
          .concat(i)
          .concat(
            a,
            '</button>\n                    <button type="button" class="commentsApp__BoxOption commentsApp__textStyledBtn commentsApp__BoxOption--sorting commentsApp__interactiveEl" data-type="oldest" data-action="sort" data-text="'
          )
          .concat(r, '">')
          .concat(i)
          .concat(r, '</button>\n                    ')
          .concat(
            n
              ? '<button type="button" class="commentsApp__BoxOption commentsApp__textStyledBtn commentsApp__BoxOption--sorting commentsApp__interactiveEl" data-type="popular" data-action="sort" data-text="'
                  .concat(s, '">')
                  .concat(i)
                  .concat(s, '</button>')
              : '',
            '\n                </div>\n            </div>\n        </div>\n        <div class="commentsApp__articleTitle">\n            <p>'
          )
          .concat(o, '</p>\n        </div>\n    ')
      );
    };
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    n(45);
    t.default =
      '\n    <div class="commentsApp__loadMore">\n        <button type="button" class="commentsApp__button commentsApp__buttonLoadMore commentsApp__interactiveEl" data-action="loadMore" data-count="0">Wczytaj wi\u0119cej komentarzy</button>\n    </div>\n';
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    n(46);
    var o = n(3);
    var i = '';
    var a = function a(e) {
      var t = 'nie' === e.commentsLoggedUsers;
      return '\n    <div class="commentsApp__popup commentsApp__popup--login">\n        <form class="commentsApp__popupInner commentsApp__popupForm--login">\n            <button type="button" class="commentsApp__popupClose commentsApp__textStyledBtn commentsApp__interactiveEl" data-action="closePopup">  \n                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" class="commentsApp__interactiveEl" data-action="closePopup">\n                    <path d="M17.308,7,13,11.308,8.692,7,7,8.692,11.308,13,7,17.308,8.692,19,13,14.692,17.308,19,19,17.308,14.692,13,19,8.692Z" transform="translate(-7 -7)" class="commentsApp__popupClosePath commentsApp__interactiveEl" data-action="closePopup" />\n                </svg>\n            </button>\n            <span class="commentsApp__popupHeader">Zaloguj si\u0119 kontem Gazeta.pl</span>\n            <p class="commentsApp__popupInfo">Je\u017Celi nie masz jeszcze konta <a href="'
        .concat(
          (function (e) {
            if ('' === i) {
              var _t3 = new URL(e.commentsRegisterPage);
              _t3.searchParams.delete('back'),
                _t3.searchParams.append('back', window.location.href),
                (i = _t3.toString());
            }
            return i;
          })(e),
          '" class="commentsApp__popupLink" rel="nofollow" title="Zarejestruj si\u0119">zarejestruj si\u0119</a></p>\n            <div class="commentsApp__popupInputErrorTop"></div>\n            <div class="commentsApp__popupInputContainer">\n                <input id="commentsApp__username" class="commentsApp__popupInput commentsApp__popupInput--username" type="text" name="username" placeholder="e-mail lub login">\n                <div id="commentsApp__usernameError" class="commentsApp__popupInputError">Wpisz sw\xF3j e-mail lub login</div>\n            </div>\n            <div class="commentsApp__popupInputContainer">\n                <input id="commentsApp__password" class="commentsApp__popupInput commentsApp__popupInput--password" type="password" name="password" placeholder="has\u0142o">\n                <div id="commentsApp__passwordError" class="commentsApp__popupInputError">Wpisz swoje has\u0142o</div>\n            </div>\n            <div class="commentsApp__popupInputContainer commentsApp__popupInputContainer--memory">\n                <div class="commentsApp__remember">\n                    <label class="commentsApp__label" for="rememberme">\n                        <input class="commentsApp__checkbox commentsApp__interactiveEl" type="checkbox" id="rememberme" name="rememberme" value="1" data-action="rememberme">\n                        <label class="commentsApp__fakeCheckbox" for="rememberme"><div class="commentsApp__fakeCheckbox-span">Zapami\u0119taj mnie</div></label>\n                    </label> \n                </div>\n                <div class="commentsApp__remind">\n                    <a target="_blank" class="commentsApp__popupLink" href="https://konto.gazeta.pl/konto/0,161893,29922639.html" rel="nofollow" title="Nie pami\u0119tasz has\u0142a?">Nie pami\u0119tasz has\u0142a?</a>\n                </div>\n            </div>\n            <div class="commentsApp__submit commentsApp__submit--login'
        )
        .concat(
          t ? ' commentsApp__popupInputContainer' : '',
          '">\n                <button type="submit" class="commentsApp__button commentsApp__button--primary commentsApp__interactiveEl" data-action="login">Zaloguj si\u0119</button>\n            </div>\n\n            '
        )
        .concat(
          t
            ? '\n            <div class="commentsApp__submit commentsApp__submit--guest">\n                <button type="button" class="commentsApp__button commentsApp__button--tertiary commentsApp__button--guest commentsApp__interactiveEl" data-action="popupGuest">Komentuj jako go\u015B\u0107</button>\n            </div>\n            '
            : '',
          '\n\n            <p class="commentsApp__grey">lub</p>\n            <input type="hidden" name="Login" value="1">\n            <input type="hidden" name="back" value="'
        )
        .concat(
          encodeURI(window.location.href),
          '">\n            <input type="hidden" name="root" value="'
        )
        .concat(
          e.root,
          '">\n            <div class="commentsApp__submit commentsApp__submit--fb">\n                <button type="submit" class="commentsApp__button commentsApp__button--tertiary commentsApp__button--login-fb commentsApp__interactiveEl" formaction="'
        )
        .concat(
          o.default.commentsApiLoginFBUrl,
          '" formmethod="POST">\n                    Zaloguj si\u0119 przez Facebook\n                </button>\n            </div>\n            <div class="commentsApp__submit commentsApp__submit--google">\n                <button type="submit" class="commentsApp__button commentsApp__button--tertiary commentsApp__button--login-google commentsApp__interactiveEl" formaction="'
        )
        .concat(
          o.default.commentsApiLoginGoogleUrl,
          '" formmethod="POST">\n                    Zaloguj si\u0119 przez Google\n                </button>\n            </div>\n        </form>\n    </div>\n    '
        )
        .concat(
          t
            ? '\n    <div class="commentsApp__popup commentsApp__popup--guest">\n        <form class="commentsApp__popupInner commentsApp__popupForm--guest">\n            <button type="button" class="commentsApp__popupClose commentsApp__textStyledBtn commentsApp__interactiveEl" data-action="closePopup">  \n                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" class="commentsApp__interactiveEl" data-action="closePopup">\n                    <path d="M17.308,7,13,11.308,8.692,7,7,8.692,11.308,13,7,17.308,8.692,19,13,14.692,17.308,19,19,17.308,14.692,13,19,8.692Z" transform="translate(-7 -7)" class="commentsApp__popupClosePath commentsApp__interactiveEl" data-action="closePopup" />\n                </svg>\n            </button>\n            <span class="commentsApp__popupHeader">Komentujesz jako go\u015B\u0107</span>\n            <div class="commentsApp__popupInputContainer">\n                <input id="commentsApp__nick" class="commentsApp__popupInput commentsApp__popupInput--username" type="text" name="username" placeholder="podpisz si\u0119">\n                <div class="commentsApp__popupInputError">Zapomnia\u0142e\u015B si\u0119 podpisa\u0107</div>\n            </div>\n            <div class="commentsApp__submit commentsApp__submit--asGuest">\n                <button type="submit" class="commentsApp__button commentsApp__button--asGuest commentsApp__interactiveEl" data-action="asGuest">Dalej</button>\n            </div>\n        </form>\n    </div>\n'
            : '',
          '\n'
        );
    };
    t.default = function (e) {
      return '\n        <div class="commentsApp__popupOverlay commentsApp__interactiveEl" data-action="closePopup"></div>\n        '.concat(
        a(e),
        '\n        \n        <div class="commentsApp__popup commentsApp__popup--trash">\n            <form class="commentsApp__popupInner commentsApp__popupForm--trash">\n                <button type="button" class="commentsApp__popupClose commentsApp__textStyledBtn commentsApp__interactiveEl" data-action="closePopup">  \n                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" class="commentsApp__interactiveEl" data-action="closePopup">\n                        <path d="M17.308,7,13,11.308,8.692,7,7,8.692,11.308,13,7,17.308,8.692,19,13,14.692,17.308,19,19,17.308,14.692,13,19,8.692Z" transform="translate(-7 -7)" class="commentsApp__popupClosePath commentsApp__interactiveEl" data-action="closePopup" />\n                    </svg>\n                </button>\n                <span class="commentsApp__popupHeader">Zg\u0142o\u015B komentarz</span>\n                <p class="commentsApp__popupText">Czy masz pewno\u015B\u0107, \u017Ce ten post narusza regulamin?</p>\n                <div class="commentsApp__popupError commentsApp__popupError--trash">Wyst\u0105pi\u0142 b\u0142\u0105d, spr\xF3buj ponownie za chwil\u0119</div>\n                <div class="commentsApp__submit commentsApp__submit--trash">\n                    <button type="button" class="commentsApp__button commentsApp__button--secondary commentsApp__interactiveEl" data-action="closePopup">Anuluj</button>\n                    <button type="button" class="commentsApp__button commentsApp__button--primary commentsApp__button--trash commentsApp__interactiveEl" data-action="trash" data-entryid="0">Zg\u0142o\u015B</button>\n                </div>\n            </form>\n        </div>\n    \n        \n        <div class="commentsApp__popup commentsApp__popup--trash-confirmation">\n            <form class="commentsApp__popupInner commentsApp__popupInner--trash-confirmation commentsApp__popupForm--trash-confirmation">\n                <button type="button" class="commentsApp__popupClose commentsApp__textStyledBtn commentsApp__interactiveEl" data-action="closePopup">  \n                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" class="commentsApp__interactiveEl" data-action="closePopup">\n                        <path d="M17.308,7,13,11.308,8.692,7,7,8.692,11.308,13,7,17.308,8.692,19,13,14.692,17.308,19,19,17.308,14.692,13,19,8.692Z" transform="translate(-7 -7)" class="commentsApp__popupClosePath commentsApp__interactiveEl" data-action="closePopup" />\n                    </svg>\n                </button>\n                <span class="commentsApp__popupHeader commentsApp__popupHeader--trash-confirmation">Dzi\u0119kujemy za zg\u0142oszenie</span>\n                <p class="commentsApp__popupText commentsApp__popupText--trash-confirmation">Komentarz zosta\u0142 zg\u0142oszony do moderacji</p>\n            </form>\n        </div>\n    \n        \n    <div class="commentsApp__popup commentsApp__popup--nick">\n        <form class="commentsApp__popupInner commentsApp__popupInner--nick commentsApp__popupForm--nick">\n            <button type="button" class="commentsApp__popupClose commentsApp__textStyledBtn commentsApp__interactiveEl" data-action="toggleNickPopup">  \n                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" class="commentsApp__interactiveEl" data-action="toggleNickPopup">\n                    <path d="M17.308,7,13,11.308,8.692,7,7,8.692,11.308,13,7,17.308,8.692,19,13,14.692,17.308,19,19,17.308,14.692,13,19,8.692Z" transform="translate(-7 -7)" class="commentsApp__popupClosePath commentsApp__interactiveEl" data-action="toggleNickPopup" />\n                </svg>\n            </button>\n            <span class="commentsApp__popupHeader">Nadaj nick</span>\n            <p class="commentsApp__popupInfo">Nazwa u\u017Cytkownika (nick) jest wymagana do oceniania, komentowania oraz korzystania z forum.</p>\n            <div class="commentsApp__popupInputContainer">\n                <input id="commentsApp__nick" class="commentsApp__popupInput commentsApp__popupInput--nick" type="text" name="nick" placeholder="Nick">\n                <div id="commentsApp__nickError--nick" class="commentsApp__popupInputError">Wpisz sw\xF3j nick</div>\n                <div id="commentsApp__nickError--nick-send" class="commentsApp__popupInputError">Wyst\u0105pi\u0142 b\u0142\u0105d, spr\xF3buj ponownie za chwil\u0119</div>\n            </div>\n            <p class="commentsApp__popupInfo commentsApp__popupInfo--nick">U\u017Cyj od 3 do 30 znak\xF3w. Nie u\u017Cywaj polskich znak\xF3w, wielkich liter i spacji. Mo\u017Cesz u\u017Cy\u0107 znak\xF3w - . _ (minus, kropka, podkre\u015Blenie).</p>\n            <div class="commentsApp__submit commentsApp__submit--nick">\n                <button type="button" class="commentsApp__button commentsApp__button--primary commentsApp__button--nick commentsApp__interactiveEl" data-action="sendNick">Zapisz</button>\n            </div>\n        </form>\n    </div>\n    \n    '
      );
    };
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    n(47);
    t.default = function (e, t) {
      return '<div class="commentsApp__disabled-info">\n        Dodawanie komentarzy zosta\u0142o wy\u0142\u0105czone na czas ciszy wyborczej\n    </div>';
    };
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    var o = n(13),
      i = n(3);
    t.default = /*#__PURE__*/ (function () {
      function _class2(e) {
        _classCallCheck(this, _class2);
        this.store = e;
      }
      return _createClass(_class2, [
        {
          key: 'init',
          value: function init(e, t) {
            (this.loadComments = e),
              (this.commentsUtils = t),
              (this.commentsAppReference = e.commentsAppReference),
              this.subscribe();
          },
        },
        {
          key: 'subscribe',
          value: function subscribe() {
            var _this7 = this;
            this.store.subscribe(function () {
              if (
                _this7.store
                  .getState()
                  .lastAction.type.includes(o.FETCH_REQUEST_SUCCESS_ADD_COMMENT)
              ) {
                var _e6 = _this7.store.getState().lastAction.payload,
                  _t4 = _e6.sentData.oxx,
                  _n3 = _this7.commentsAppReference.querySelector(
                    'textarea[data-oxx="'.concat(_t4, '"]')
                  );
                if ('SEND_OK' === _e6.SEND_CODE) {
                  var _e7 = _n3.closest('.commentsApp__comment');
                  if ((_this7.insertFakePost(_n3.value, _t4), _e7)) {
                    var _t5 = _e7.querySelector(
                      '.commentsApp__commentAuthor'
                    ).innerText;
                    _n3.value = '@'.concat(_t5, '\n');
                    var _o4 = _n3.closest('.commentsApp__textField');
                    _o4 &&
                      _o4.classList.remove('commentsApp__textField--active');
                  } else _n3.value = '';
                  _this7.frontValidation('success', _n3);
                } else
                  _e6.ERROR_CODE && _e6.MSG
                    ? _this7.frontValidation('msg', _n3, _e6.MSG)
                    : _this7.frontValidation('fail', _n3);
              }
              if (
                _this7.store
                  .getState()
                  .lastAction.type.includes(o.FETCH_REQUEST_FAILURE_ADD_COMMENT)
              ) {
                var _e8 = _this7.store.getState().lastAction.payload,
                  _t6 = _e8.sentData.oxx,
                  _n4 = _this7.commentsAppReference.querySelector(
                    'textarea[data-oxx="'.concat(_t6, '"]')
                  );
                _this7.frontValidation('fail', _n4);
              }
            });
          },
        },
        {
          key: 'insertFakePost',
          value: function insertFakePost(e, t) {
            var n = localStorage.getItem('nickGuest'),
              o =
                '\n        <div class="commentsApp__comment" style="order:99999">\n            <div class="commentsApp__commentHead">\n                <div class="commentsApp__commentAuthor">'
                  .concat(
                    n || this.store.getState().fetchComments.data.user,
                    '</div>\n                <div class="commentsApp__commentDate">przed chwil\u0105</div>\n                <div class="commentsApp__options"></div>\n            </div>\n            <div class="commentsApp__commentBody">'
                  )
                  .concat(
                    e.replace(/(\n)+/g, '<br />'),
                    '</div>\n        </div>\n        '
                  );
            if (0 == t) {
              var _e9 = this.commentsAppReference.querySelector(
                '.commentsApp__commentsContainer'
              );
              _e9.classList.add('commentsApp__commentsContainer--notEmpty'),
                _e9.insertAdjacentHTML('beforeend', o);
            } else {
              var _e10 = this.store
                .getState()
                .fetchComments.data.add.filter(function (e) {
                  return e.entryId === t;
                })
                .map(function (e) {
                  return e.parentId;
                })[0];
              var _n5 = this.commentsAppReference.querySelector(
                '.commentsApp__comment[data-entryid="'.concat(_e10, '"]')
              );
              _n5 ||
                (_n5 = this.commentsAppReference.querySelector(
                  '.commentsApp__comment[data-entryid="'.concat(t, '"]')
                ));
              var _i4 = _n5.querySelector('.commentsApp__subComments');
              _i4
                ? (_i4.classList.add('commentsApp__comment--expand'),
                  _i4.insertAdjacentHTML('beforeend', o))
                : (_n5.classList.add('commentsApp__comment--expand'),
                  _n5.insertAdjacentHTML(
                    'beforeend',
                    '<div class="commentsApp__subComments">'.concat(o, '</div>')
                  ));
            }
          },
        },
        {
          key: 'add',
          value: function add(e, t) {
            var n = localStorage.getItem('nickGuest'),
              a = n || this.store.getState().fetchComments.data.user,
              r = ''
                .concat(location.protocol, '//')
                .concat(location.hostname)
                .concat(location.pathname);
            this.store.dispatch({
              type: o.FETCH_REQUEST_SENT_ADD_COMMENT,
              payload: {
                url: i.default.commentsApiUrl,
                params: { method: 'POST' },
                data: _objectSpread(
                  _objectSpread({}, this.loadComments.data),
                  {},
                  {
                    action: 'jsonSend',
                    username: a,
                    tresc: e,
                    oxx: t,
                    charset: 'UTF-8',
                    objURL: r,
                  }
                ),
              },
            });
          },
        },
        {
          key: 'frontValidation',
          value: function frontValidation(e, t, n) {
            var o,
              i = 'error',
              a = '';
            switch (e) {
              case 'voiting':
                (o = n), (a = 'commentsApp__infoMessage--voiting');
                break;
              case 'msg':
                o = n;
                break;
              case 'empty_post':
                o = 'Zapomnia\u0142e\u015B o wpisaniu komentarza :)';
                break;
              case 'fail':
                o = 'Nie uda\u0142o si\u0119 doda\u0107 komentarza';
                break;
              default:
                (o =
                  'Tw\xF3j komentarz zosta\u0142 dodany i za chwil\u0119 b\u0119dzie widoczny'),
                  (i = 'success');
            }
            this.setInfoMesssage(o, t, i, a);
          },
        },
        {
          key: 'setInfoMesssage',
          value: function setInfoMesssage(e, t, n, o) {
            var _this8 = this;
            var i = t.dataset.oxx || t.dataset.message,
              a = this.commentsAppReference.querySelector(
                '[data-message="'.concat(i, '"]')
              );
            a.classList.remove(
              'commentsApp__infoMessage--success',
              'commentsApp__infoMessage--error',
              'commentsApp__infoMessage--voiting'
            ),
              a.classList.add('commentsApp__infoMessage--' + n),
              '' !== o && a.classList.add(o);
            var r = a.querySelector('.commentsApp__infoMessageText');
            (r.innerText = e),
              setTimeout(function () {
                var _this8$commentsUtils$ =
                    _this8.commentsUtils.elementInViewport(r),
                  e = _this8$commentsUtils$.result,
                  t = _this8$commentsUtils$.move;
                e || window.scrollBy({ top: t, behavior: 'smooth' });
              }, 500);
          },
        },
      ]);
    })();
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    var o = n(2);
    t.default = function () {
      var e =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = arguments.length > 1 ? arguments[1] : undefined;
      switch ((e.firedEvents || (e.firedEvents = []), t.type)) {
        case o.BEFORE_COMMENTS_TEMPLATE_INSERTED:
          e.firedEvents = [].concat(_toConsumableArray(e.firedEvents), [
            o.BEFORE_COMMENTS_TEMPLATE_INSERTED,
          ]);
          break;
        case o.AFTER_COMMENTS_TEMPLATE_INSERTED:
          e.firedEvents = [].concat(_toConsumableArray(e.firedEvents), [
            o.AFTER_COMMENTS_TEMPLATE_INSERTED,
          ]);
      }
      return e;
    };
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    var o = n(7);
    t.default = function () {
      var e =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = arguments.length > 1 ? arguments[1] : undefined;
      return (
        (t.type.includes(o.FETCH_REQUEST_SUCCESS) ||
          t.type.includes(o.FETCH_REQUEST_FAILURE)) &&
          (e.data = _objectSpread(_objectSpread({}, e.data), t.payload)),
        e
      );
    };
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    var o = n(7);
    n(3);
    var i = {
      method: 'GET',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
    };
    t.default = function (e) {
      return function (t) {
        return function (n) {
          if (n.type.includes(o.FETCH_REQUEST_SENT)) {
            var _t7 = n.type.replace('FETCH_REQUEST_SENT', '');
            if ('' === _t7)
              console.log(
                'your action.type FETCH_REQUEST_SENT has no suffix, proper action.type should looks like FETCH_REQUEST_SENT_DO_SOMETHING'
              );
            else if (n.payload && n.payload.url) {
              var a = n.payload.data ? n.payload.data : {};
              var r = n.payload.params ? n.payload.params : {};
              (r = Object.assign({}, i, r)),
                (function () {
                  var _ref8 = _asyncToGenerator(function* (e, t, n) {
                    var o = t.method.toUpperCase();
                    if (!!Object.keys(n).length)
                      if ('GET' === o || 'HEAD' === o)
                        e = e + '?' + new URLSearchParams(n).toString();
                      else if (
                        (t.headers && t.headers['Content-Type']
                          ? t.headers &&
                            !t.headers['Content-Type'] &&
                            (t.headers['Content-Type'] =
                              'application/x-www-form-urlencoded')
                          : (t.headers = {
                              'Content-Type':
                                'application/x-www-form-urlencoded',
                            }),
                        !t.body)
                      )
                        if (
                          t.headers['Content-Type'].includes(
                            'multipart/form-data'
                          )
                        ) {
                          var _e11 = new FormData();
                          for (var _t8 in n) _e11.append(_t8, n[_t8]);
                          t.body = _e11;
                        } else
                          t.headers['Content-Type'].includes('application/json')
                            ? (t.body = JSON.stringify(n))
                            : t.headers['Content-Type'].includes(
                                'application/x-www-form-urlencoded'
                              ) && (t.body = new URLSearchParams(n).toString());
                    return (yield fetch(e, t)).arrayBuffer();
                  });
                  return function (_x2, _x3, _x4) {
                    return _ref8.apply(this, arguments);
                  };
                })()(n.payload.url, r, a)
                  .then(function (n) {
                    var i, s;
                    (i =
                      'GET' === r.method || 'HEAD' === r.method
                        ? new TextDecoder('iso-8859-2')
                        : new TextDecoder('utf-8')),
                      (s =
                        a.responseFormat && 'text/plain' === a.responseFormat
                          ? {}
                          : JSON.parse(i.decode(n))),
                      e.dispatch({
                        type: o.FETCH_REQUEST_SUCCESS + _t7,
                        payload: _objectSpread(
                          _objectSpread({}, s),
                          {},
                          { sentData: a }
                        ),
                      });
                  })
                  .catch(function (n) {
                    console.log(n),
                      e.dispatch({
                        type: o.FETCH_REQUEST_FAILURE + _t7,
                        payload: n,
                      });
                  });
            } else console.log(n.type + ' without url');
          }
          t(n);
        };
      };
    };
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    t.default = /*#__PURE__*/ (function () {
      function _class3(e) {
        _classCallCheck(this, _class3);
        (this.store = e), (this.isCalledOnce = !1);
      }
      return _createClass(_class3, [
        {
          key: 'init',
          value: function init(e, t, n, o, i, a, r, s) {
            this.isCalledOnce ||
              ((this.commentsAppReference = e.commentsAppReference),
              (this.loadComments = e),
              (this.addComment = t),
              (this.loginPopup = n),
              (this.voting = o),
              (this.trash = i),
              (this.sorting = a),
              (this.user = r),
              (this.nickPopup = s),
              this.addEventListeners(),
              (this.commentElementForNick = null)),
              (this.isCalledOnce = !0);
          },
        },
        {
          key: 'addEventListeners',
          value: function addEventListeners() {
            var _this9 = this;
            this.commentsAppReference.addEventListener(
              'click',
              function (e) {
                'undefined' != typeof scheduler
                  ? scheduler.postTask(
                      function () {
                        _this9.setListenersClick(e);
                      },
                      { priority: 'user-visible' }
                    )
                  : _this9.setListenersClick(e);
              },
              !1
            ),
              document.body.addEventListener(
                'click',
                function (e) {
                  return _this9.setBodyListenersClick(e);
                },
                !1
              );
          },
        },
        {
          key: 'setBodyListenersClick',
          value: function setBodyListenersClick(e) {
            e.target.classList.contains('commentsApp__interactiveEl') ||
              this.closeActivePopups();
          },
        },
        {
          key: 'setListenersClick',
          value: function setListenersClick(e) {
            var t = e.target;
            if (t.classList.contains('commentsApp__interactiveEl'))
              switch (
                (t.classList.contains('commentsApp--noFocus') || t.focus(),
                t.dataset.action)
              ) {
                case 'send':
                  var _n6 = this.commentsAppReference.querySelector(
                    'textarea[data-oxx="'.concat(t.dataset.oxx, '"]')
                  ).value;
                  if ('' === _n6.trim())
                    return void this.addComment.frontValidation(
                      'empty_post',
                      t
                    );
                  this.addComment.add(_n6, t.dataset.oxx),
                    t.setAttribute('disabled', ''),
                    setTimeout(function () {
                      t.removeAttribute('disabled');
                    }, 1e3);
                  break;
                case 'reply':
                  this.reply(t);
                  break;
                case 'showReplies':
                  this.loadComments.showReplies(t);
                  var o = t
                    .closest('.commentsApp__comment')
                    .classList.contains('commentsApp__comment--expand');
                  t
                    .closest('.commentsApp__commentFooter')
                    .querySelector('.commentsApp__showRepliesText').innerText =
                    o ? 'Ukryj odpowiedzi' : 'Poka\u017C odpowiedzi';
                  break;
                case 'trash':
                  this.trash.send(t);
                  break;
                case 'trashOpenPopup':
                  this.trash.openPopup(t);
                  break;
                case 'revealBottom':
                  t.classList.add(
                    'commentsApp__addCommentTextarea--revealBottom'
                  );
                  break;
                case 'closeMessage':
                  t.closest('.commentsApp__infoMessage').classList.remove(
                    'commentsApp__infoMessage--error',
                    'commentsApp__infoMessage--success'
                  );
                  break;
                case 'loadMore':
                  this.loadComments.loadMore(t);
                  break;
                case 'bottomExpand':
                  t.classList.toggle('commentsApp__bottomFrame--expand');
                  break;
                case 'logout':
                  e.preventDefault(), this.user.logout();
                  break;
                case 'popupChange':
                  e.preventDefault(),
                    localStorage.removeItem('nickGuest'),
                    this.loadComments.updateUserName(),
                    this.loginPopup.togglePopup(),
                    this.user.rememberMe('get'),
                    this.commentsAppReference
                      .querySelector('.commentsApp__popup--login')
                      .setAttribute('data-oxx', t.dataset.oxx);
                  break;
                case 'popup':
                  e.preventDefault(), this.openPopupOrSendPostAsGuest(t);
                  break;
                case 'popupGuest':
                  e.preventDefault(),
                    localStorage.removeItem('nickGuest'),
                    this.loginPopup.toggleGuestPopup();
                  var i = this.commentsAppReference.querySelector(
                    '.commentsApp__popup--login'
                  ).dataset.oxx;
                  this.commentsAppReference
                    .querySelector('.commentsApp__popup--guest')
                    .setAttribute('data-oxx', i);
                  break;
                case 'popupVote':
                  e.preventDefault(),
                    this.loginPopup.togglePopup(),
                    this.commentsAppReference
                      .querySelector('.commentsApp__popup')
                      .setAttribute('data-oxx', t.dataset.oxx),
                    this.voting.info(t);
                  break;
                case 'closePopup':
                  this.loginPopup.closePopup(),
                    this.trash.closePopup(),
                    this.nickPopup.closePopup(),
                    this.closeActivePopups();
                  break;
                case 'closeGuestPopup':
                  this.loginPopup.closePopup(), this.closeActivePopups();
                  break;
                case 'login':
                  this.loginPopup.validate();
                  break;
                case 'asGuest':
                  e.preventDefault(), this.loginPopup.validateGuest();
                  break;
                case 'openSortBox':
                  this.sorting.openSortBox(t);
                  break;
                case 'showChangeButton':
                  t.closest('.commentsApp__bottom')
                    .querySelector('.commentsApp__change')
                    .classList.toggle('commentsApp__change--active');
                  break;
                case 'sort':
                  var a = t.dataset.type;
                  a && this.sorting.sort(t, a);
                  break;
                case 'voteUp':
                case 'voteDown':
                  e.preventDefault(), this.voting.vote(t.dataset.action, t);
                  break;
                case 'votesInfo':
                  e.preventDefault(),
                    this.trash.closeAllOptionsBox(),
                    this.voting.closeAllInfo(),
                    this.voting.info(t);
                  break;
                case 'votesInfoClose':
                  e.preventDefault(), this.voting.info(t);
                  break;
                case 'votesInfoCloseNick':
                  e.preventDefault(), this.voting.info(t, '--nick');
                  break;
                case 'rememberme':
                  var r = t.checked ? 'set' : 'remove';
                  this.user.rememberMe(r);
                  break;
                case 'copyLink':
                  this.copyTextToClipboard(t);
                  break;
                case 'toggleNickPopup':
                  e.preventDefault(),
                    this.nickPopup.togglePopup(),
                    (this.commentElementForNick = t);
                  break;
                case 'sendNick':
                  e.preventDefault(), this.nickPopup.setNick();
                  break;
                case 'optionsBox':
                  e.preventDefault(),
                    this.trash.closeAllOptionsBox(),
                    this.voting.closeAllInfo(),
                    this.trash.toggleOptionsBox(t);
              }
          },
        },
        {
          key: 'reply',
          value: function reply(e) {
            var t = e
                .closest('.commentsApp__comment')
                .querySelector('.commentsApp__commentAuthor').innerText,
              n = e
                .closest('.commentsApp__comment')
                .querySelector(':scope > .commentsApp__textField');
            this.commentsAppReference
              .querySelectorAll('.commentsApp__textField')
              .forEach(function (e) {
                e != n && e.classList.remove('commentsApp__textField--active');
              }),
              n.classList.toggle('commentsApp__textField--active');
            var o = n.querySelector('.commentsApp__addCommentTextarea'),
              i = '@'.concat(t, '\n');
            o.value = i + o.value.replace(i, '');
          },
        },
        {
          key: 'closeActivePopups',
          value: function closeActivePopups() {
            var e = this.commentsAppReference.querySelector(
                '.commentsApp__Box--active'
              ),
              t = document.querySelectorAll('.commentsApp__change--active'),
              n = document.querySelectorAll('.commentsApp__votesInfo--active');
            t.forEach(function (e) {
              e.classList.remove('commentsApp__change--active');
            }),
              n.forEach(function (e) {
                e.classList.remove('commentsApp__votesInfo--active');
              }),
              e && e.classList.remove('commentsApp__Box--active');
            var o = this.commentsAppReference.querySelector(
              '.commentsApp__popupInputErrorTop'
            );
            o && o.classList.remove('commentsApp__popupInputErrorTop--show');
          },
        },
        {
          key: 'openPopupOrSendPostAsGuest',
          value: function openPopupOrSendPostAsGuest(e) {
            var t = localStorage.getItem('nickGuest');
            if (
              ('tak' === this.loadComments.appConfig.commentsLoggedUsers &&
                (t = !1),
              t)
            ) {
              var _t9 = this.commentsAppReference.querySelector(
                'textarea[data-oxx="'.concat(e.dataset.oxx, '"]')
              ).value;
              if ('' === _t9.trim())
                return void this.addComment.frontValidation('empty_post', e);
              this.addComment.add(_t9, e.dataset.oxx);
            } else
              this.loginPopup.togglePopup(),
                this.user.rememberMe('get'),
                this.commentsAppReference
                  .querySelector('.commentsApp__popup--login')
                  .setAttribute('data-oxx', e.dataset.oxx);
          },
        },
        {
          key: 'elementInViewport',
          value: function elementInViewport(e) {
            var t = e.getBoundingClientRect(),
              n = e.offsetHeight,
              o = e.offsetWidth;
            var i = !1,
              a = 0;
            return (
              t.top >= -n &&
              t.left >= -o &&
              t.right <=
                (window.innerWidth || document.documentElement.clientWidth) +
                  o &&
              t.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) +
                  n
                ? (i = !0)
                : (a =
                    t.bottom -
                    (window.innerHeight ||
                      document.documentElement.clientHeight) +
                    10),
              { result: i, move: a }
            );
          },
        },
        {
          key: 'moderationLink',
          value: function moderationLink() {
            var e = this.store.getState().fetchComments.data.isMod,
              t = this.commentsAppReference.querySelector(
                '.commentsApp__moderation'
              );
            if (e && !t) {
              // var _e12 = this.commentsAppReference.querySelector(
              //     '.commentsApp__articleTitle'
              //   ),
              //   _this$loadComments$ap = this.loadComments.appConfig,
              //   _t10 = _this$loadComments$ap.root,
              //   _n7 = _this$loadComments$ap.xx,
              //   o =
              //     '<p class="commentsApp__moderation"><a href="https://forum.gazeta.pl/fix/forum/moderacja/moderacjaOpinii.jsp?objectId='
              //       .concat(_n7, '&root=')
              //       .concat(_t10, '" target="_blank">Moderuj</a></p>');
              // _e12.insertAdjacentHTML('afterbegin', o);
            } else e || (t && t.remove());
          },
        },
        {
          key: 'copyTextToClipboard',
          value: function copyTextToClipboard(e) {
            var t = '#' + e.dataset.id,
              n = location.href.split('#')[0] + t + '_',
              o = document.createElement('textarea');
            (o.className = 'commentsAppTextAreaLinkCopy'),
              (o.value = n),
              document.body.appendChild(o),
              o.focus(),
              o.select();
            try {
              var i = document.execCommand('copy')
                ? 'successful'
                : 'unsuccessful';
              console.log('Copying text command was ' + i);
              var _t11 = e
                .closest('.commentsApp__commentHead')
                .querySelector('.commentsApp__commentLinkInfo');
              _t11.classList.add('commentsApp__commentLinkInfo--active'),
                setTimeout(function () {
                  _t11.classList.remove('commentsApp__commentLinkInfo--active');
                }, 2e3);
            } catch (e) {
              console.log('Oops, unable to copy');
            }
            document.body.removeChild(o);
          },
        },
        {
          key: 'removeEmptyValuesFromObject',
          value: function removeEmptyValuesFromObject(e) {
            return Object.fromEntries(
              Object.entries(e).filter(function (_ref9) {
                var _ref10 = _slicedToArray(_ref9, 2),
                  e = _ref10[0],
                  t = _ref10[1];
                return '' !== t;
              })
            );
          },
        },
      ]);
    })();
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    var o = n(2),
      i = n(4),
      a = n(3);
    t.default = /*#__PURE__*/ (function () {
      function _class4(e) {
        _classCallCheck(this, _class4);
        (this.shallSendBigDataLoginEvent = !1), e && (this.store = e);
      }
      return _createClass(_class4, [
        {
          key: 'init',
          value: function init(e, t, n) {
            this.subscribe(),
              (this.user = t),
              (this.commentsUtils = n),
              (this.loadComments = e),
              (this.commentsAppReference = e.commentsAppReference),
              this.initBigDataConsentCookieWatcher();
          },
        },
        {
          key: 'showErrorOnForm',
          value: function showErrorOnForm(e) {
            var t = this.commentsAppReference.querySelector(
                '.commentsApp__popupInputErrorTop'
              ),
              n = e.msg;
            this.clearPopupForm(),
              n && this.showInfo(t, n),
              this.showInfoBelowInput(
                ['username', 'password'],
                'onlyUnderline'
              );
          },
        },
        {
          key: 'doAfterLoginSuccess',
          value: function doAfterLoginSuccess(e) {
            this.user.rememberMe('set'),
              e.redirectUrl
                ? this.redirect(e.redirectUrl)
                : (this.commentsAppReference.classList.add(
                    'commentsApp--logged'
                  ),
                  this.commentsUtils.closeActivePopups(),
                  this.updateTreeAfterLogin(),
                  location.reload());
          },
        },
        {
          key: 'doAfterLoginFailure',
          value: function doAfterLoginFailure(e) {
            e.redirectUrl
              ? this.redirect(e.redirectUrl)
              : this.showErrorOnForm(e);
          },
        },
        {
          key: 'subscribe',
          value: function subscribe() {
            var _this10 = this;
            this.store.subscribe(function () {
              if (
                (_this10.store
                  .getState()
                  .lastAction.type.includes(
                    o.AFTER_COMMENTS_TEMPLATE_INSERTED
                  ) &&
                  _this10.commentsAppReference
                    .querySelector(
                      '.commentsApp__popupInner.commentsApp__popupForm--login'
                    )
                    .addEventListener('submit', function (e) {
                      _this10.shallSendBigDataLoginEvent &&
                        _this10.sendBigDataLoginEvent(e),
                        _this10.doSubmitEventGateway(e);
                    }),
                _this10.store
                  .getState()
                  .lastAction.type.includes(i.FETCH_REQUEST_SUCCESS_LOGIN_USER))
              ) {
                var _e13 = _this10.store.getState().lastAction.payload;
                'ACCOUNT_BLOCKED' === _e13.status
                  ? _this10.doAfterLoginFailure(_e13)
                  : 'TEMPORARIRLY_BLOCKED' === _e13.status
                  ? _this10.showErrorOnForm(_e13)
                  : 'MFA_ENABLED' === _e13.status
                  ? (_this10.closePopup(),
                    gazeta_pl.MFA_login.showPopup(),
                    gazeta_pl.MFA_login.createPopupPromise()
                      .then(function (t) {
                        t.success && _this10.doAfterLoginSuccess(_e13);
                      })
                      .catch(function (e) {
                        _this10.clearPopupForm();
                      }))
                  : 'LOGIN_OK' === _e13.status
                  ? _this10.doAfterLoginSuccess(_e13)
                  : _this10.doAfterLoginFailure(_e13);
              }
              _this10.store
                .getState()
                .lastAction.type.includes(i.FETCH_REQUEST_FAILURE_LOGIN_USER) &&
                alert(
                  'Wyst\u0105pi\u0142 nieznany b\u0142\u0105d. Logowanie nie powiod\u0142o si\u0119.'
                );
            });
          },
        },
        {
          key: 'redirect',
          value: function redirect(e) {
            var t = e.replace('=', '=');
            t.includes('http') && !t.includes('#')
              ? (window.location.href = t)
              : window.location.reload();
          },
        },
        {
          key: 'doSubmitEventGateway',
          value: function doSubmitEventGateway(e) {
            var t = e.submitter.getAttribute('formaction') || '';
            if (
              [
                a.default.commentsApiLoginFBUrl,
                a.default.commentsApiLoginGoogleUrl,
              ].includes(t)
            )
              return !0;
            e.preventDefault();
          },
        },
        {
          key: 'sendBigDataLoginEvent',
          value: function sendBigDataLoginEvent(e) {
            window.sendDataOceanEvent(841, {
              account_type: this.getAccountType(e),
              application: 'komentarze',
              url: window.location.href,
              uni_hid: (window.uniid && window.uniid.hid) || '',
            });
          },
        },
        {
          key: 'getAccountType',
          value: function getAccountType(e) {
            var t = e.target,
              n = new FormData(t).get('username') || '',
              o = e.submitter.getAttribute('formaction') || '';
            switch (!0) {
              case o === a.default.commentsApiLoginFBUrl:
                return 'facebook';
              case o === a.default.commentsApiLoginGoogleUrl:
                return 'google';
              case n.includes('@'):
                return 'email';
              default:
                return 'portal';
            }
          },
        },
        {
          key: 'updateTreeAfterLogin',
          value: function updateTreeAfterLogin() {
            var e = this.commentsAppReference.querySelector(
                '.commentsApp__popup'
              ).dataset.oxx,
              t = this.commentsAppReference.querySelector(
                'textarea[data-oxx="'.concat(e, '"]')
              ).value;
            this.togglePopup(),
              this.commentsAppReference
                .querySelector('textarea[data-oxx="'.concat(e, '"]'))
                .classList.add('commentsApp__addCommentTextarea--revealBottom'),
              (this.commentsAppReference.querySelector(
                'textarea[data-oxx="'.concat(e, '"]')
              ).value = t),
              this.user.getUser();
          },
        },
        {
          key: 'clearPopupForm',
          value: function clearPopupForm() {
            this.commentsAppReference
              .querySelectorAll('.commentsApp__popup .commentsApp__popupInput')
              .forEach(function (e) {
                e.classList.remove('commentsApp__popupInput--error');
              }),
              this.commentsAppReference
                .querySelectorAll(
                  '.commentsApp__popup .commentsApp__popupInputError'
                )
                .forEach(function (e) {
                  e.classList.remove('commentsApp__popupInputError--show');
                }),
              this.commentsAppReference
                .querySelectorAll(
                  '.commentsApp__popup .commentsApp__popupInputErrorTop'
                )
                .forEach(function (e) {
                  e.classList.remove('commentsApp__popupInputErrorTop--show');
                });
          },
        },
        {
          key: 'closePopup',
          value: function closePopup() {
            this.commentsAppReference
              .querySelector('.commentsApp__popupOverlay')
              .classList.remove('commentsApp__popupOverlay--active'),
              this.commentsAppReference
                .querySelector('.commentsApp__popup--login')
                .classList.remove('commentsApp__popup--active');
            var e = this.commentsAppReference.querySelector(
              '.commentsApp__popup--guest'
            );
            e && e.classList.remove('commentsApp__popup--active'),
              this.clearPopupForm();
          },
        },
        {
          key: 'togglePopup',
          value: function togglePopup() {
            this.commentsAppReference
              .querySelector('.commentsApp__popupOverlay')
              .classList.add('commentsApp__popupOverlay--active'),
              this.commentsAppReference
                .querySelector('.commentsApp__popup--login')
                .classList.add('commentsApp__popup--active');
          },
        },
        {
          key: 'toggleGuestPopup',
          value: function toggleGuestPopup() {
            this.commentsAppReference
              .querySelector('.commentsApp__popup--login')
              .classList.remove('commentsApp__popup--active');
            var e = this.commentsAppReference.querySelector(
              '.commentsApp__popup--guest'
            );
            e && e.classList.toggle('commentsApp__popup--active');
          },
        },
        {
          key: 'showInfo',
          value: function showInfo(e, t) {
            (e.innerHTML = t),
              e.classList.add('commentsApp__popupInputErrorTop--show');
          },
        },
        {
          key: 'showInfoBelowInput',
          value: function showInfoBelowInput(e) {
            var _this11 = this;
            var t =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : '';
            e.forEach(function (e) {
              'onlyUnderline' != t &&
                _this11.commentsAppReference
                  .querySelector('#commentsApp__'.concat(e, 'Error'))
                  .classList.add('commentsApp__popupInputError--show'),
                _this11.commentsAppReference
                  .querySelector('#commentsApp__' + e)
                  .classList.add('commentsApp__popupInput--error');
            });
          },
        },
        {
          key: 'validate',
          value: function validate() {
            var e = this.commentsAppReference
                .querySelector('#commentsApp__username')
                .value.trim(),
              t = this.commentsAppReference
                .querySelector('#commentsApp__password')
                .value.trim();
            this.checkFormDataBeforeLogin(e, t);
          },
        },
        {
          key: 'checkFormDataBeforeLogin',
          value: function checkFormDataBeforeLogin(e, t) {
            this.clearPopupForm(),
              '' === e && '' === t
                ? this.showInfoBelowInput(['username', 'password'])
                : '' === e
                ? this.showInfoBelowInput(['username'])
                : '' === t
                ? this.showInfoBelowInput(['password'])
                : this.user.login(e, t);
          },
        },
        {
          key: 'validateGuest',
          value: function validateGuest() {
            var _this12 = this;
            var e =
              this.commentsAppReference.querySelector(
                '#commentsApp__nick'
              ).value;
            var t = document.createElement('div');
            (t.innerHTML = e), (e = t.innerText);
            var n = this.commentsAppReference.querySelector(
                '.commentsApp__popup--guest .commentsApp__popupInputError'
              ),
              o = this.commentsAppReference.querySelector('#commentsApp__nick');
            if ('' === e.trim())
              n.classList.add('commentsApp__popupInputError--show'),
                o.classList.add('commentsApp__popupInput--error');
            else {
              n.classList.remove('commentsApp__popupInputError--show'),
                o.classList.remove('commentsApp__popupInput--error'),
                this.user.logout();
              var _t12 = this.store.subscribe(function () {
                var _this12$store$getStat = _this12.store.getState(),
                  n = _this12$store$getStat.lastAction;
                if (
                  n.type.includes(i.FETCH_REQUEST_SUCCESS_LOGOUT_USER) ||
                  n.type.includes(i.FETCH_REQUEST_FAILURE_LOGOUT_USER)
                ) {
                  localStorage.setItem('nickGuest', e), _this12.closePopup();
                  var _n8 = _this12.commentsAppReference.querySelector(
                    '.commentsApp__popup'
                  ).dataset.oxx;
                  _this12.commentsAppReference
                    .querySelector('textarea[data-oxx="'.concat(_n8, '"]'))
                    .classList.add(
                      'commentsApp__addCommentTextarea--revealBottom'
                    ),
                    _this12.loadComments.updateUserName(),
                    _t12();
                }
              });
            }
          },
        },
        {
          key: 'initBigDataConsentCookieWatcher',
          value: function initBigDataConsentCookieWatcher() {
            var _this13 = this;
            (window.oneTrustCookieQueue = window.oneTrustCookieQueue || []),
              window.oneTrustCookieQueue.push(function (e, t) {
                (_this13.shallSendBigDataLoginEvent = t.performanceCookies),
                  window.OneTrust.OnConsentChanged(function (e) {
                    var t = e.detail.includes('C0002');
                    _this13.shallSendBigDataLoginEvent = t;
                  });
              }),
              document.addEventListener('onCMconsent', function (e) {
                _this13.shallSendBigDataLoginEvent =
                  e.detail.purposeConsents.c2;
              });
          },
        },
      ]);
    })();
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    var o = n(3),
      i = n(14),
      a = n(2);
    t.default = /*#__PURE__*/ (function () {
      function _class5(e) {
        _classCallCheck(this, _class5);
        (this.store = e), this.subscribe();
      }
      return _createClass(_class5, [
        {
          key: 'init',
          value: function init(e, t, n) {
            (this.addComment = e),
              (this.loadComments = t),
              (this.commentsAppReference = t.commentsAppReference),
              (this.trash = n);
          },
        },
        {
          key: 'subscribe',
          value: function subscribe() {
            var _this14 = this;
            this.store.subscribe(function () {
              var _this14$store$getStat = _this14.store.getState(),
                e = _this14$store$getStat.lastAction;
              if (e.type.includes(i.FETCH_REQUEST_SUCCESS_VOTING)) {
                var _t13 = e.payload;
                _this14.updateRank(_t13);
              }
              e.type.includes(i.FETCH_REQUEST_FAILURE_VOTING) &&
                console.log('Wyst\u0105pi\u0142 b\u0142\u0105d'),
                (e.type.includes(a.AFTER_COMMENTS_TEMPLATE_INSERTED) ||
                  e.type.includes(a.LOAD_MORE_COMMENTS) ||
                  e.type.includes(a.SHOW_REPLIES)) &&
                  _this14.voteStorage('get');
            });
          },
        },
        {
          key: 'vote',
          value: function vote(e, t) {
            var n = 'voteUp' === e ? 1 : -1,
              a = t.closest('.commentsApp__comment').dataset.entryid,
              _this$loadComments$ap2 = this.loadComments.appConfig,
              r = _this$loadComments$ap2.root,
              s = _this$loadComments$ap2.section,
              l = _this$loadComments$ap2.xx,
              c = this.store.getState().fetchComments.data.timeToken,
              p = {
                action: 'vote',
                vote: n,
                id: a,
                articleId: l,
                articleRoot: r,
                dzialXx: s,
                time: c,
                jspXx: '',
                element: t,
              };
            this.store.dispatch({
              type: i.FETCH_REQUEST_SENT_VOTING,
              payload: {
                url: o.default.commentsApiUrl,
                params: { method: 'POST' },
                data: p,
              },
            });
          },
        },
        {
          key: 'info',
          value: function info(e, t) {
            e.closest('.commentsApp__votes')
              .querySelector('.commentsApp__votesInfo' + (t || ''))
              .classList.toggle('commentsApp__votesInfo--active');
          },
        },
        {
          key: 'closeAllInfo',
          value: function closeAllInfo() {
            var e = this.commentsAppReference.querySelectorAll(
              '.commentsApp__votesInfo--active'
            );
            e &&
              e.forEach(function (e) {
                return e.classList.remove('commentsApp__votesInfo--active');
              });
          },
        },
        {
          key: 'updateRank',
          value: function updateRank(e) {
            var _e$sentData = e.sentData,
              t = _e$sentData.id,
              n = _e$sentData.element;
            if (e.votes) {
              var _e$votes$ = e.votes[0],
                _o5 = _e$votes$.count,
                _i5 = _e$votes$.rank,
                _a3 = (_o5 - _i5) / 2,
                r = _o5 - _a3;
              (document.getElementById('plusVoteA_' + t).innerText = r),
                (document.getElementById('minusVoteA_' + t).innerText = _a3),
                (document.getElementById('plusVoteB_' + t).innerText = r),
                (document.getElementById('minusVoteB_' + t).innerText = _a3),
                n
                  .closest('.commentsApp__vote')
                  .classList.add('commentsApp__vote--active'),
                this.voteStorage('set', t, n);
            } else {
              var _o6 = 'Nie masz uprawnie\u0144';
              var _i6 = document.querySelector(
                '.commentsApp__infoMessage[data-message="'.concat(t, '"]')
              );
              if (
                (0 === e.status &&
                  2 === e.reason &&
                  (_o6 = 'Ju\u017C g\u0142osowa\u0142e\u015B'),
                0 === e.status && 6 === e.reason)
              )
                return (
                  this.closeAllInfo(),
                  this.trash.closeAllOptionsBox(),
                  void this.info(n, '--nick')
                );
              this.addComment.frontValidation('voiting', _i6, _o6);
            }
          },
        },
        {
          key: 'voteStorage',
          value: function voteStorage(e, t, n) {
            var o = localStorage.getItem('storagedVotes');
            if (o) {
              if (((o = JSON.parse(o)), 'set' === e)) {
                var _e14 = n.closest('.commentsApp__vote').id.includes('voteUp')
                  ? 'voteUp'
                  : 'voteDown';
                o.push({ id: t, voteType: _e14 }),
                  localStorage.setItem('storagedVotes', JSON.stringify(o));
              } else
                o.forEach(function (e) {
                  var t = e.id,
                    n = e.voteType;
                  document.querySelector(
                    '.commentsApp__comment[data-entryid="'.concat(t, '"]')
                  ) &&
                    (document
                      .getElementById(''.concat(n, 'Logged').concat(t))
                      .classList.add('commentsApp__vote--active'),
                    document
                      .getElementById(''.concat(n, 'LoggedOut').concat(t))
                      .classList.add('commentsApp__vote--active'));
                });
            } else if ('set' === e) {
              var _e15 = n.closest('.commentsApp__vote').id.includes('voteUp')
                ? 'voteUp'
                : 'voteDown';
              localStorage.setItem(
                'storagedVotes',
                JSON.stringify([{ id: t, voteType: _e15 }])
              );
            }
          },
        },
      ]);
    })();
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    var o = n(3),
      i = n(15);
    t.default = /*#__PURE__*/ (function () {
      function _class6(e) {
        _classCallCheck(this, _class6);
        (this.store = e),
          (this._popupOverlay = null),
          (this._popupTrash = null),
          (this._popupTrashButton = null),
          (this._popupTrashError = null),
          (this._popupTrashConfirmation = null),
          (this._popupTrashConfirmationText = null);
      }
      return _createClass(_class6, [
        {
          key: 'getPopupOverlay',
          value: function getPopupOverlay() {
            var e = this.loadComments.commentsAppReference;
            return e.querySelector('.commentsApp__popupOverlay');
          },
        },
        {
          key: 'getPopupTrash',
          value: function getPopupTrash() {
            var e = this.loadComments.commentsAppReference;
            return e.querySelector('.commentsApp__popup--trash');
          },
        },
        {
          key: 'getPopupTrashButton',
          value: function getPopupTrashButton() {
            return this.popupTrash.querySelector('.commentsApp__button--trash');
          },
        },
        {
          key: 'getPopupTrashError',
          value: function getPopupTrashError() {
            return this.popupTrash.querySelector(
              '.commentsApp__popupError--trash'
            );
          },
        },
        {
          key: 'getPopupTrashConfirmation',
          value: function getPopupTrashConfirmation() {
            var e = this.loadComments.commentsAppReference;
            return e.querySelector('.commentsApp__popup--trash-confirmation');
          },
        },
        {
          key: 'getPopupTrashConfirmationText',
          value: function getPopupTrashConfirmationText() {
            var e = this.loadComments.commentsAppReference;
            return e.querySelector(
              '.commentsApp__popupText--trash-confirmation'
            );
          },
        },
        {
          key: 'popupOverlay',
          get: function get() {
            return this._popupOverlay
              ? this._popupOverlay
              : (this._popupOverlay = this.getPopupOverlay());
          },
        },
        {
          key: 'popupTrash',
          get: function get() {
            return this._popupTrash
              ? this._popupTrash
              : (this._popupTrash = this.getPopupTrash());
          },
        },
        {
          key: 'popupTrashButton',
          get: function get() {
            return this._popupTrashButton
              ? this._popupTrashButton
              : (this._popupTrashButton = this.getPopupTrashButton());
          },
        },
        {
          key: 'popupTrashError',
          get: function get() {
            return this._popupTrashError
              ? this._popupTrashError
              : (this._popupTrashError = this.getPopupTrashError());
          },
        },
        {
          key: 'popupTrashConfirmation',
          get: function get() {
            return this._popupTrashConfirmation
              ? this._popupTrashConfirmation
              : (this._popupTrashConfirmation =
                  this.getPopupTrashConfirmation());
          },
        },
        {
          key: 'popupTrashConfirmationText',
          get: function get() {
            return this._popupTrashConfirmationText
              ? this._popupTrashConfirmationText
              : (this._popupTrashConfirmationText =
                  this.getPopupTrashConfirmationText());
          },
        },
        {
          key: 'closePopupOverlay',
          value: function closePopupOverlay() {
            this.popupOverlay &&
              this.popupOverlay.classList.remove(
                'commentsApp__popupOverlay--active'
              );
          },
        },
        {
          key: 'openPopupOverlay',
          value: function openPopupOverlay() {
            this.popupOverlay &&
              this.popupOverlay.classList.add(
                'commentsApp__popupOverlay--active'
              );
          },
        },
        {
          key: 'closePopupTrash',
          value: function closePopupTrash() {
            this.popupTrash &&
              this.popupTrash.classList.remove('commentsApp__popup--active');
          },
        },
        {
          key: 'openPopupTrash',
          value: function openPopupTrash() {
            this.popupTrash &&
              this.popupTrash.classList.add('commentsApp__popup--active');
          },
        },
        {
          key: 'setPopupTrashConfirmationText',
          value: function setPopupTrashConfirmationText(e) {
            this.popupTrashConfirmationText &&
              (this.popupTrashConfirmationText.innerText =
                e || 'Komentarz zosta\u0142 zg\u0142oszony do moderacji');
          },
        },
        {
          key: 'closePopupTrashConfirmation',
          value: function closePopupTrashConfirmation() {
            this.popupTrashConfirmation &&
              this.popupTrashConfirmation.classList.remove(
                'commentsApp__popup--active'
              );
          },
        },
        {
          key: 'openPopupTrashConfirmation',
          value: function openPopupTrashConfirmation(e) {
            this.setPopupTrashConfirmationText(e),
              this.popupTrashConfirmation &&
                this.popupTrashConfirmation.classList.add(
                  'commentsApp__popup--active'
                );
          },
        },
        {
          key: 'setEntryIdToPopupTrashButton',
          value: function setEntryIdToPopupTrashButton(e) {
            this.popupTrashButton &&
              this.popupTrashButton.setAttribute('data-entryid', String(e));
          },
        },
        {
          key: 'clearEntryIdFromPopupTrashButton',
          value: function clearEntryIdFromPopupTrashButton() {
            this.popupTrashButton &&
              this.popupTrashButton.setAttribute('data-entryid', '0');
          },
        },
        {
          key: 'enablePopupTrashButton',
          value: function enablePopupTrashButton() {
            this.popupTrashButton &&
              this.popupTrashButton.removeAttribute('disabled');
          },
        },
        {
          key: 'disabledPopupTrashButton',
          value: function disabledPopupTrashButton() {
            this.popupTrashButton &&
              this.popupTrashButton.setAttribute('disabled', '');
          },
        },
        {
          key: 'hidePopupTrashError',
          value: function hidePopupTrashError() {
            this.popupTrashError &&
              this.popupTrashError.classList.remove(
                'commentsApp__popupError--active'
              );
          },
        },
        {
          key: 'showPopupTrashError',
          value: function showPopupTrashError() {
            this.popupTrashError &&
              this.popupTrashError.classList.add(
                'commentsApp__popupError--active'
              );
          },
        },
        {
          key: 'closePopup',
          value: function closePopup() {
            this.closePopupOverlay(),
              this.closePopupTrash(),
              this.closePopupTrashConfirmation(),
              this.hidePopupTrashError(),
              this.enablePopupTrashButton(),
              this.clearEntryIdFromPopupTrashButton();
          },
        },
        {
          key: 'openPopup',
          value: function openPopup(e) {
            var t = e.getAttribute('data-entryid');
            this.setEntryIdToPopupTrashButton(t),
              this.openPopupOverlay(),
              this.openPopupTrash();
          },
        },
        {
          key: 'toggleOptionsBox',
          value: function toggleOptionsBox(e) {
            e.parentElement
              .querySelector('.commentsApp__Box--options')
              .classList.toggle('commentsApp__Box--active');
          },
        },
        {
          key: 'closeAllOptionsBox',
          value: function closeAllOptionsBox() {
            var e = this.commentsAppReference.querySelectorAll(
              '.commentsApp__Box--active'
            );
            e &&
              e.forEach(function (e) {
                return e.classList.remove('commentsApp__Box--active');
              });
          },
        },
        {
          key: 'send',
          value: function send(e) {
            this.disabledPopupTrashButton(), this.hidePopupTrashError();
            var t = e.getAttribute('data-entryid'),
              n = this.loadComments.appConfig,
              a = { action: 'trashVote', id: t, dzialXx: n.section, jspXx: '' };
            this.store.dispatch({
              type: i.FETCH_REQUEST_SENT_TRASH,
              payload: {
                url: o.default.commentsApiUrl,
                params: { method: 'GET' },
                data: a,
              },
            });
          },
        },
        {
          key: 'subscribe',
          value: function subscribe() {
            var _this15 = this;
            this.store.subscribe(function () {
              var e = _this15.store.getState(),
                t = e.lastAction.type;
              if (t.includes(i.FETCH_REQUEST_SUCCESS_TRASH)) {
                var _t14 = e.lastAction.payload,
                  _n9 = _t14 && _t14.msg;
                _this15.closePopupTrash(),
                  _this15.openPopupTrashConfirmation(_n9);
              }
              t.includes(i.FETCH_REQUEST_FAILURE_TRASH) &&
                (_this15.enablePopupTrashButton(),
                _this15.showPopupTrashError());
            });
          },
        },
        {
          key: 'init',
          value: function init(e) {
            (this.loadComments = e),
              (this.commentsAppReference = e.commentsAppReference),
              this.subscribe();
          },
        },
      ]);
    })();
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    var o = n(6);
    t.default = /*#__PURE__*/ (function () {
      function _class7(e) {
        _classCallCheck(this, _class7);
        (this.store = e), (this._sortingContainer = null);
      }
      return _createClass(_class7, [
        {
          key: 'getSortingContainer',
          value: function getSortingContainer() {
            return this.commentsAppReference.querySelector(
              '.commentsApp__Box--sorting'
            );
          },
        },
        {
          key: 'sortingContainer',
          get: function get() {
            return this._sortingContainer
              ? this._sortingContainer
              : (this._sortingContainer = this.getSortingContainer());
          },
        },
        {
          key: 'init',
          value: function init(e) {
            (this.commentsAppReference = e.commentsAppReference),
              (this.loadComments = e);
          },
        },
        {
          key: 'openSortBox',
          value: function openSortBox(e) {
            e.closest('.commentsApp__sorting')
              .querySelector('.commentsApp__Box')
              .classList.toggle('commentsApp__Box--active');
          },
        },
        {
          key: 'sort',
          value: function sort(e, t, n) {
            var _this16 = this;
            var o = e.closest('.commentsApp__sorting');
            o
              .querySelectorAll('.commentsApp__BoxOption--sorting')
              .forEach(function (e) {
                'undefined' != typeof scheduler
                  ? scheduler.postTask(
                      function () {
                        e.classList.remove('commentsApp__BoxOption--active');
                      },
                      { priority: 'user-visible' }
                    )
                  : e.classList.remove('commentsApp__BoxOption--active');
              }),
              'undefined' != typeof scheduler
                ? scheduler.postTask(
                    function () {
                      e.classList.add('commentsApp__BoxOption--active');
                    },
                    { priority: 'user-visible' }
                  )
                : e.classList.add('commentsApp__BoxOption--active');
            var i = o.querySelector('.commentsApp__sortingSelected');
            (i.innerHTML = i.innerHTML.replace(i.textContent, e.dataset.text)),
              n ||
                ('undefined' != typeof scheduler
                  ? (scheduler.postTask(
                      function () {
                        o.querySelector('.commentsApp__Box').classList.toggle(
                          'commentsApp__Box--active'
                        );
                      },
                      { priority: 'user-visible' }
                    ),
                    scheduler.postTask(
                      function () {
                        _this16.sortType(t);
                      },
                      { priority: 'user-visible' }
                    ))
                  : (o
                      .querySelector('.commentsApp__Box')
                      .classList.toggle('commentsApp__Box--active'),
                    this.sortType(t)));
          },
        },
        {
          key: 'setSorting',
          value: function setSorting(e) {
            var _this17 = this;
            var t,
              _this$loadComments$ap3 = this.loadComments.appConfig,
              n = _this$loadComments$ap3.commentsSortingRule,
              o = _this$loadComments$ap3.commentsVotes,
              i = !1;
            o && 'nie' === o && ((i = !0), (n = 'najnowsze'));
            var a = localStorage.getItem('sortedDataStorage');
            switch (
              (a &&
                (i && 'najciekawsze' === a
                  ? localStorage.setItem('sortedDataStorage', 'najnowsze')
                  : (n = a)),
              n)
            ) {
              case 'najciekawsze':
                (t = e.sort(function (e, t) {
                  return _this17.sortHelper(e, t, 'votesRank');
                })),
                  t.reverse();
                break;
              case 'najstarsze':
                t = e.sort(function (e, t) {
                  return _this17.sortHelper(e, t, 'timestamp');
                });
                break;
              case 'najnowsze':
                (t = e.sort(function (e, t) {
                  return _this17.sortHelper(e, t, 'timestamp');
                })),
                  t.reverse();
            }
            return t.map(function (e, t) {
              return (e.order = t + 1), e;
            });
          },
        },
        {
          key: 'setSortingLabel',
          value: function setSortingLabel() {
            var e,
              _this$loadComments$ap4 = this.loadComments.appConfig,
              t = _this$loadComments$ap4.commentsSortingRule,
              n = _this$loadComments$ap4.commentsVotes,
              o = !1;
            n && 'nie' === n && ((o = !0), (t = 'najnowsze'));
            var i = localStorage.getItem('sortedDataStorage');
            switch (
              (i &&
                (o && 'najciekawsze' === i
                  ? localStorage.setItem('sortedDataStorage', 'najnowsze')
                  : (t = i)),
              t)
            ) {
              case 'najciekawsze':
                e = this.sortingContainer.querySelector(
                  '[data-type="popular"]'
                );
                break;
              case 'najstarsze':
                e = this.sortingContainer.querySelector('[data-type="oldest"]');
                break;
              case 'najnowsze':
                e = this.sortingContainer.querySelector('[data-type="newest"]');
            }
            this.sort(e, t, !0);
          },
        },
        {
          key: 'sortHelper',
          value: function sortHelper(e, t, n) {
            var o = parseInt(e[n]),
              i = parseInt(t[n]);
            var a = 0;
            return o > i ? (a = 1) : o < i && (a = -1), a;
          },
        },
        {
          key: 'sortType',
          value: function sortType(e) {
            var _this18 = this;
            var t, n;
            var i = this.store.getState().fetchComments.data.add;
            switch (e) {
              case 'popular':
                (t = i.sort(function (e, t) {
                  return _this18.sortHelper(e, t, 'votesRank');
                })),
                  t.reverse(),
                  localStorage.setItem('sortedDataStorage', 'najciekawsze');
                break;
              case 'oldest':
                (t = i.sort(function (e, t) {
                  return _this18.sortHelper(e, t, 'timestamp');
                })),
                  localStorage.setItem('sortedDataStorage', 'najstarsze');
                break;
              case 'newest':
              default:
                (t = i.sort(function (e, t) {
                  return _this18.sortHelper(e, t, 'timestamp');
                })),
                  t.reverse(),
                  localStorage.setItem('sortedDataStorage', 'najnowsze');
            }
            (n = t.map(function (e, t) {
              return (e.order = t + 1), e;
            })),
              (this.store.getState().fetchComments.data.add = n);
            var a = this.commentsAppReference.querySelectorAll(
                '.commentsApp__commentsContainer > .commentsApp__comment'
              ).length,
              r = this.loadComments.appConfig,
              s = { startPosition: 0, size: a },
              l = Object(o.commentsContainerTemplate)(
                this.store.getState().fetchComments.data,
                r,
                s
              );
            (this.commentsAppReference.querySelector(
              '.commentsApp__commentsContainer'
            ).innerHTML = l),
              this.loadComments.updateUserName();
          },
        },
      ]);
    })();
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    var o = n(2),
      i = n(4),
      a = n(3);
    t.default = /*#__PURE__*/ (function () {
      function _class8(e) {
        _classCallCheck(this, _class8);
        this.store = e;
      }
      return _createClass(_class8, [
        {
          key: 'init',
          value: function init(e) {
            (this.commentsAppReference = e.commentsAppReference),
              (this.loadComments = e),
              this.subscribe();
          },
        },
        {
          key: 'subscribe',
          value: function subscribe() {
            var _this19 = this;
            this.store.subscribe(function () {
              _this19.store
                .getState()
                .lastAction.type.includes(o.AFTER_COMMENTS_TEMPLATE_INSERTED) &&
                _this19.getUser();
            });
          },
        },
        {
          key: 'getUser',
          value: function getUser() {
            var e = this.loadComments.appConfig.root;
            this.store.dispatch({
              type: i.FETCH_REQUEST_SENT_GET_USER,
              payload: {
                url: a.default.commentsApiUrl,
                params: { method: 'GET' },
                data: { action: 'getUser', root: e },
              },
            });
          },
        },
        {
          key: 'login',
          value: function login(e, t) {
            var n = this.loadComments.appConfig.root,
              _this$commentsAppRefe =
                this.commentsAppReference.querySelector('#rememberme'),
              o = _this$commentsAppRefe.checked,
              r = this.commentsAppReference.querySelector('input[name="back"]'),
              s = r ? r.value : window.location.href;
            this.store.dispatch({
              type: i.FETCH_REQUEST_SENT_LOGIN_USER,
              payload: {
                url: a.default.commentsApiLoginUrl,
                params: { method: 'POST' },
                data: {
                  Login: 1,
                  username: e,
                  password: t,
                  format: 'json',
                  rememberme: o,
                  root: n,
                  back: s,
                },
              },
            });
          },
        },
        {
          key: 'rememberMe',
          value: function rememberMe(e) {
            var t = this.commentsAppReference;
            if ('set' === e && t.querySelector('#rememberme').checked) {
              var _e16 = {
                checked: !0,
                u: window.btoa(t.querySelector('#commentsApp__username').value),
                p: window.btoa(t.querySelector('#commentsApp__password').value),
              };
              localStorage.setItem('rmdata', JSON.stringify(_e16));
            } else if ('get' === e) {
              var _e17 = localStorage.getItem('rmdata');
              if (_e17)
                try {
                  var _JSON$parse = JSON.parse(_e17),
                    _n10 = _JSON$parse.checked,
                    _o7 = _JSON$parse.u,
                    _i7 = _JSON$parse.p;
                  _n10 &&
                    ((t.querySelector('#commentsApp__username').value =
                      window.atob(_o7)),
                    (t.querySelector('#commentsApp__password').value =
                      window.atob(_i7)),
                    (t.querySelector('#rememberme').checked = _n10));
                } catch (e) {
                  console.log(e);
                }
            } else localStorage.removeItem('rmdata');
          },
        },
        {
          key: 'logout',
          value: function logout() {
            localStorage.removeItem('nickGuest'),
              this.store.dispatch({
                type: i.FETCH_REQUEST_SENT_LOGOUT_USER,
                payload: {
                  url: '/logout',
                  params: { method: 'GET', redirect: 'manual' },
                  data: { responseFormat: 'text/plain' },
                },
              });
          },
        },
      ]);
    })();
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    var o = n(3),
      i = n(2);
    var a = '.commentsApp__commentsContainer > .commentsApp__comment';
    var r = '011-MIDBOARD-MOBI',
      s = 2;
    gazeta_pl.mobileInfo.isMobileDevice || ((s = 4), (r = '011-MIDBOARD'));
    t.default = /*#__PURE__*/ (function () {
      function _class9(e) {
        _classCallCheck(this, _class9);
        (this.store = e), (this.indexArray = []);
      }
      return _createClass(_class9, [
        {
          key: 'init',
          value: function init() {
            (this.commentsAppReference = document.getElementById(
              o.default.appId
            )),
              this.commentsAppReference && this.subscribe();
          },
        },
        {
          key: 'subscribe',
          value: function subscribe() {
            var _this20 = this;
            this.store.subscribe(function () {
              var _this20$store$getStat = _this20.store.getState(),
                e = _this20$store$getStat.lastAction;
              if (
                e.type.includes(i.AFTER_COMMENTS_TEMPLATE_INSERTED) ||
                e.type.includes(i.LOAD_MORE_COMMENTS)
              ) {
                var _e18 = _this20.store.getState().lastAction.payload;
                _this20.prepareCommentsArray(_e18);
              }
            });
          },
        },
        {
          key: 'prepareCommentsArray',
          value: function prepareCommentsArray(e) {
            if (!e) return !1;
            var t = [].slice.call(
              this.commentsAppReference.querySelectorAll(a)
            );
            if ('init' === e.insertType) this.insertAdsSlots(t, !0);
            else {
              var _e19 = this.commentsAppReference.querySelectorAll(
                  a + '--adsInserted'
                ),
                _n11 = _e19[_e19.length - 1],
                _o8 = t.indexOf(_n11);
              this.insertAdsSlots(t.splice(_o8 + 1));
            }
          },
        },
        {
          key: 'insertAdsSlots',
          value: function insertAdsSlots(e) {
            var _this21 = this;
            var t =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : !1;
            var n = s;
            gazeta_pl.mobileInfo.isMobileDevice || (t && (n = 2)),
              e.forEach(function (e, t) {
                if (t % n == n - 1 && _this21.thereAreTwoCommentsAfterEl(e)) {
                  _this21.indexArray.push(t);
                  var _n12 = 'DFP-'.concat(r, '_').concat(e.dataset.entryid);
                  _this21.insertAds(e, r, _n12, _this21.indexArray.length);
                }
              });
          },
        },
        {
          key: 'insertAds',
          value: function insertAds(e, t, n, o) {
            e.classList.add('commentsApp__comment--adsInserted'),
              e.insertAdjacentHTML(
                'beforeend',
                '<div id="'.concat(n, '"></div>')
              );
            var i = o + 99;
            window.putBanDFPInViewObject({
              slot: t,
              divId: n,
              kw: ['fif' + i],
            });
          },
        },
        {
          key: 'thereAreTwoCommentsAfterEl',
          value: function thereAreTwoCommentsAfterEl(e) {
            var t = !1;
            return (
              e.nextElementSibling &&
                e.nextElementSibling.nextElementSibling &&
                (t = e.nextElementSibling.nextElementSibling.classList.contains(
                  'commentsApp__comment'
                )),
              t
            );
          },
        },
      ]);
    })();
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    var o = n(8),
      i = n(3);
    t.default = /*#__PURE__*/ (function () {
      function _class10(e) {
        _classCallCheck(this, _class10);
        e &&
          ((this.store = e),
          (this._nickValue = null),
          (this._nickInput = null),
          (this._popupOverlay = null),
          (this._nickPopup = null),
          (this._nickValidateError = null),
          (this._nickSendError = null));
      }
      return _createClass(_class10, [
        {
          key: 'getNickInput',
          value: function getNickInput() {
            return this.commentsAppReference.querySelector(
              '#commentsApp__nick'
            );
          },
        },
        {
          key: 'getNickValue',
          value: function getNickValue() {
            return this.nickInput ? this.nickInput.value.trim() : null;
          },
        },
        {
          key: 'getPopupOverlay',
          value: function getPopupOverlay() {
            return this.commentsAppReference.querySelector(
              '.commentsApp__popupOverlay'
            );
          },
        },
        {
          key: 'getNickPopup',
          value: function getNickPopup() {
            return this.commentsAppReference.querySelector(
              '.commentsApp__popup--nick'
            );
          },
        },
        {
          key: 'getNickValidateError',
          value: function getNickValidateError() {
            return this.commentsAppReference.querySelector(
              '#commentsApp__nickError--nick'
            );
          },
        },
        {
          key: 'getNickSendError',
          value: function getNickSendError() {
            return this.commentsAppReference.querySelector(
              '#commentsApp__nickError--nick-send'
            );
          },
        },
        {
          key: 'nickInput',
          get: function get() {
            return this._nickInput
              ? this._nickInput
              : (this._nickInput = this.getNickInput());
          },
        },
        {
          key: 'nickValue',
          get: function get() {
            return (this._nickValue = this.getNickValue());
          },
        },
        {
          key: 'popupOverlay',
          get: function get() {
            return this._popupOverlay
              ? this._popupOverlay
              : (this._popupOverlay = this.getPopupOverlay());
          },
        },
        {
          key: 'nickPopup',
          get: function get() {
            return this._nickPopup
              ? this._nickPopup
              : (this._nickPopup = this.getNickPopup());
          },
        },
        {
          key: 'nickValidateError',
          get: function get() {
            return this._nickValidateError
              ? this._nickValidateError
              : (this._nickValidateError = this.getNickValidateError());
          },
        },
        {
          key: 'nickSendError',
          get: function get() {
            return this._nickSendError
              ? this._nickSendError
              : (this._nickSendError = this.getNickSendError());
          },
        },
        {
          key: 'togglePopup',
          value: function togglePopup() {
            this.popupOverlay &&
              this.popupOverlay.classList.toggle(
                'commentsApp__popupOverlay--active'
              ),
              this.nickPopup &&
                this.nickPopup.classList.toggle('commentsApp__popup--active'),
              (this.nickInput.value = ''),
              this.hideAllErrors();
          },
        },
        {
          key: 'closePopup',
          value: function closePopup() {
            this.popupOverlay &&
              this.popupOverlay.classList.remove(
                'commentsApp__popupOverlay--active'
              ),
              this.nickPopup &&
                this.nickPopup.classList.remove('commentsApp__popup--active'),
              (this.nickInput.value = ''),
              this.hideAllErrors();
          },
        },
        {
          key: 'validate',
          value: function validate() {
            return (
              '' !== this.nickValue ||
              (this.showError(this.nickValidateError), !1)
            );
          },
        },
        {
          key: 'showError',
          value: function showError(e) {
            e && e.classList.add('commentsApp__popupInputError--show');
          },
        },
        {
          key: 'hideError',
          value: function hideError(e) {
            e && e.classList.remove('commentsApp__popupInputError--show');
          },
        },
        {
          key: 'hideAllErrors',
          value: function hideAllErrors() {
            this.hideError(this.nickSendError),
              this.hideError(this.nickValidateError);
          },
        },
        {
          key: 'setNick',
          value: function setNick() {
            if (this.validate()) {
              var _e20 = { new_nick: this.nickValue };
              this.store.dispatch({
                type: o.FETCH_REQUEST_SENT_NICK,
                payload: {
                  url: i.default.commentsApiSetNickUrl,
                  params: { method: 'POST' },
                  data: _e20,
                },
              });
            }
          },
        },
        {
          key: 'subscribe',
          value: function subscribe() {
            var _this22 = this;
            this.store.subscribe(function () {
              var e = _this22.store.getState(),
                t = e.lastAction.type;
              t.includes(o.FETCH_REQUEST_SENT_NICK) &&
                _this22.hideError(_this22.nickValidateError),
                t.includes(o.FETCH_REQUEST_SUCCESS_NICK) &&
                  (e.lastAction.payload.responseCode
                    ? ((_this22.nickSendError.innerHTML =
                        e.lastAction.payload.message),
                      _this22.showError(_this22.nickSendError))
                    : (_this22.user.getUser(), _this22.closePopup())),
                t.includes(o.FETCH_REQUEST_FAILURE_NICK) &&
                  _this22.showError(_this22.nickSendError);
            });
          },
        },
        {
          key: 'init',
          value: function init(e, t) {
            this.subscribe(),
              (this.user = t),
              (this.loadComments = e),
              (this.commentsAppReference = e.commentsAppReference);
          },
        },
      ]);
    })();
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    var o = n(9),
      i = n(12),
      a = n(36),
      r = n(37),
      s = n(0);
    var l = function l(e, t) {
        var n = {},
          o = new RegExp(t),
          i = e.filter(function (e) {
            return e.key.match(o);
          });
        var _iterator = _createForOfIteratorHelper(i),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var _e21 = _step.value;
            n[_e21.key.replace(t, '')] = _e21.value;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return n;
      },
      c = function c(e, t) {
        var n = function n(e) {
            return ('0' + e).slice(-2);
          },
          o = e.getFullYear(),
          i = n(e.getMonth() + 1),
          a = n(e.getDate()),
          r = n(e.getHours()),
          s = n(e.getMinutes());
        return t
          .replace('YYYY', o)
          .replace('MM', i)
          .replace('DD', a)
          .replace('HH', r)
          .replace('II', s);
      },
      p = function p(e) {
        var t = e;
        return (
          (function (e) {
            var t = new Set(),
              n = /<script.*?src="(.*?)"/gm;
            var o;
            for (; null !== (o = n.exec(e)); )
              o.index === n.lastIndex && n.lastIndex++,
                o.forEach(function (e, n) {
                  1 != n ||
                    e.startsWith('https://video.onnetwork.tv') ||
                    (e.startsWith('//') && (e = 'https:' + e), t.add(e));
                });
            t.forEach(function (e) {
              if (!s.default.scripts.used.has(e)) {
                var _t15 = document.createElement('script');
                (_t15.src = e),
                  document.body.appendChild(_t15),
                  s.default.scripts.used.add(e);
              }
            });
          })(e),
          (t = (function (e) {
            return e.replace(/(z(\d{8,})(X),)/gm, 'z$2IH,');
          })(t)),
          (t = (function (e) {
            return e.replace(/<img data-src/gm, '<img src');
          })(t)),
          (t = Object(i.adsReplace)(t, s.default.elementsToObserve.iterator)),
          t
        );
      },
      d = function d(e) {
        var t = e.title,
          n = e.lead,
          o = e.updateDate,
          i = e.authors,
          r = { name: 'Redakcja', title: 'Redakcja', photo: null };
        var l = Object.assign({}, r);
        var p = function p(e) {
          var t = Object.assign({}, r);
          if (e && 'object' == _typeof(e)) {
            if (e.selectedSignature)
              if (((t.title = e.selectedSignature.name), e.signatures)) {
                var _s$default = s.default,
                  _n13 = _s$default.domain,
                  _o9 = _s$default.pageRoot;
                t.name =
                  '<a\n                        rel="author"\n                        href="https://'
                    .concat(_n13, '/')
                    .concat(_o9, '/autor/')
                    .concat(
                      e.signatures.mainSignatureId,
                      '"\n                    >'
                    )
                    .concat(e.selectedSignature.name, '</a>');
              } else t.name = e.selectedSignature.name;
            e.photoId && (t.photo = PhotoAPI.photoFromXX(e.photoId, 'IA'));
          }
          return t;
        };
        !!i &&
          Array.isArray(i) &&
          i.length &&
          (1 == i.length
            ? (l = p(i[0]))
            : (l.name = i.reduce(function (e, t, n) {
                return ''
                  .concat(e)
                  .concat(n ? ', ' : '')
                  .concat(p(t).name);
              }, '')));
        var d = new Date(o),
          h = c(d, 'YYYY-MM-DD HH:II'),
          f = c(d, 'DD.MM.YYYY HH:II');
        return '\n        '
          .concat(
            s.default.isAutoloadOn
              ? '<h1 class="article__title">'.concat(t, '</h1>')
              : '',
            '\n        '
          )
          .concat(
            s.default.isAutoloadOn
              ? '<div class="left_aside">'.concat(Object(a.Social)(e), '</div>')
              : '',
            '\n        <div class="article__sidebar">\n            '
          )
          .concat(
            s.default.isPremium
              ? '<h1 class="article__title">'.concat(t, '</h1>')
              : '',
            '\n            <div class="article__author_date">\n                <div class="author_and_date" data-bd-viewability-id="author" data-bd-viewability="1">\n                    '
          )
          .concat(
            l.photo
              ? '<img src="'.concat(l.photo, '" alt="').concat(l.title, '">')
              : '',
            '\n                    <span class="article_data">\n                        <span class="article_author" itemprop="author">'
          )
          .concat(
            l.name,
            '</span>\n                        <span class="article_date">\n                            <time datetime="'
          )
          .concat(h, '">')
          .concat(
            f,
            '</time>\n                        </span>\n                    </span>\n                </div>\n            </div>\n            <div class="article__lead">'
          )
          .concat(n, '</div>\n            ')
          .concat(
            s.default.isAutoloadOn ? m(e.photoRelated, t) : '',
            '\n        </div>\n        '
          )
          .concat(
            s.default.isAutoloadOn && !s.default.isC2C
              ? u(
                  s.default.elementsToObserve.iterator,
                  '000-MAINBOX',
                  'ban000_wrapper'
                )
              : '',
            '\n    '
          );
      },
      u = function u(e, t, n, o) {
        return window.dfpParams &&
          !Object.keys(window.dfpParams.slots).includes(t)
          ? ''
          : '\n        '
              .concat(
                o ? '<div class="article__slot article__slot--visible">' : '',
                '\n            '
              )
              .concat(
                n ? '<div class="'.concat(n, '">') : '',
                '\n                <div id="adUnit-'
              )
              .concat(t, '-')
              .concat(e, '" class="adviewDFPBanner DFP-')
              .concat(
                t,
                '">\n                    <span class="banLabel" style="display: none;">REKLAMA</span>\n                    <div id=\'div-gpt-ad-'
              )
              .concat(t, '-')
              .concat(
                e,
                "'>\n                        <script type='text/javascript'>\n                            if(dfpParams.slots['"
              )
              .concat(t, "'] && dfpParams.slots['")
              .concat(
                t,
                "'].autoLoad) {\n                                if (window.adviewDFP && adviewDFP.scrollSlot) adviewDFP.scrollSlot.push('"
              )
              .concat(
                t,
                "');\n                                if (window.AdviewAdsTag) window.AdviewAdsTag.autoLoadSlot.push('"
              )
              .concat(
                t,
                "');\n                            } else {\n                                googletag.cmd.push(function() { googletag.display('div-gpt-ad-"
              )
              .concat(t, '-')
              .concat(
                e,
                "'); });\n                            }\n                        </script>\n                    </div>\n                </div>\n            "
              )
              .concat(n ? '</div>' : '', '\n        ')
              .concat(o ? '</div>' : '', '\n    ');
      },
      m = function m(e, t) {
        var n = e[0].title || t,
          o = e[0].author || 'fot. materia\u0142y prasowe',
          i = e[0] ? e[0].url : null;
        var a;
        gazeta_pl.mobileInfo.isMobileDevice || (a = 'IH'),
          gazeta_pl.mobileInfo.isMobileDevice && (a = 'Q');
        return '\n    <div class="related_images">\n        <div class="related_image_wrap with_gallery">\n            '.concat(
          '<img src="'
            .concat(i ? PhotoAPI.photoChangeFormat(i, a) : null, '" alt="')
            .concat(n, '" title="')
            .concat(n, '">'),
          '\n        </div>\n        ',
          '<p class="desc">'.concat(n, ' (').concat(o, ')</p>'),
          '\n    </div>'
        );
      };
    t.default = function (e) {
      var t = e.title,
        n = e.documentContent,
        i = e.photoRelated,
        a = e.params,
        c = e.xx,
        m = s.default.isAutoloadOn && !s.default.isC2C,
        h = s.default.elementsToObserve.iterator;
      var f;
      if (i.length) {
        var g = l(a, 'premiumArtFooter__'),
          v = l(a, 'premiumArtAdditionalMod__');
        (v.xx = c),
          (f = '\n            '
            .concat(
              s.default.isPremium ? '<div class="articleWrapper">' : '',
              '\n                '
            )
            .concat(
              s.default.isPremium
                ? (function (e, t) {
                    return '\n        <div class="article__image_signature">\n            <span>'
                      .concat(e[0].title || t, ' (')
                      .concat(
                        e[0].author || 'fot. materia\u0142y prasowe',
                        ')</span>\n        </div>\n    '
                      );
                  })(i, t)
                : '',
              '\n                '
            )
            .concat(s.default.isAutoloadOn ? d(e) : '', '\n                ')
            .concat(
              m
                ? u(
                    h,
                    'MOBILE' === s.default.device
                      ? '101-TOPBOARD-MOBI'
                      : '001-TOPBOARD',
                    'ban001_wrapper'
                  )
                : '',
              '\n                <div class="article">\n                    '
            )
            .concat(s.default.isPremium ? d(e) : '', '\n                    ')
            .concat(
              (function (e, t) {
                var n = p(e);
                return '\n        <div class="article__content">\n        '
                  .concat(
                    s.default.isC2C
                      ? ''
                      : '<div class="social__icons"><div class="social__icons--left"></div><div class="social__icons--right"></div></div>',
                    '\n            <div class="article__content--autoLoad">\n                '
                  )
                  .concat(n, '\n            </div>\n            ')
                  .concat(
                    'true' == t.checkbox ? Object(o.ArticleFooter)(t) : '',
                    '\n        </div>\n    '
                  );
              })(n, g),
              '\n                    '
            )
            .concat(
              'DESKTOP' === s.default.device &&
                (s.default.isPremium || s.default.isC2C)
                ? u(h, '003-RECTANGLE', 'ban003_wrapper', !0)
                : '',
              '\n                    '
            )
            .concat(
              'true' == v.checkbox
                ? Object(o.ArticleSidebarExtraModules)(v)
                : '',
              '\n                </div>\n            '
            )
            .concat(s.default.isPremium ? '</div>' : '', '\n            ')
            .concat(
              m &&
                !s.default.serviceWithNoRightColumn.includes(s.default.domain)
                ? Object(r.RightAside)(
                    u(
                      h,
                      'MOBILE' === s.default.device
                        ? '104-RECTANGLE-MOBI'
                        : '003-RECTANGLE',
                      'ban003_wrapper',
                      !0
                    ),
                    u(h, '035-RECTANGLE-BTF')
                  )
                : '',
              '\n        '
            ));
      }
      return f;
    };
  },
  function (e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'Social', function () {
        return o;
      });
    var o = function o(e) {
        var t = e.url,
          n = encodeURIComponent(t);
        return i(n);
      },
      i = function i(e) {
        return '\n    <div class="socialBar vertical" data-bd-viewability-id="socialbarVertical" data-bd-viewability="1">\n        <ul class="sc_items">\n            <li class="sc_item fbShare">\n                <a target="_blank" rel="nofollow" onclick="'.concat(
          a(e),
          '">\n                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21.866" viewBox="0 0 22 21.866"><defs><style>.a_fb{fill:#fff;}</style></defs><path class="a_fb" d="M22,11A11,11,0,1,0,9.281,21.866V14.18H6.488V11H9.281V8.577c0-2.757,1.642-4.28,4.155-4.28a16.915,16.915,0,0,1,2.462.215V7.219H14.511a1.59,1.59,0,0,0-1.793,1.718V11H15.77l-.488,3.18H12.719v7.687A11,11,0,0,0,22,11Z"/></svg>\n                </a>\n                <span class="count">&nbsp;</span>\n            </li>\n        </ul>\n    </div>'
        );
      },
      a = function a(e) {
        return "window.open(\n        'https://www.facebook.com/share.php?u="
          .concat(e, "#e=SbarLink',\n        'Facebook',\n        'left=")
          .concat(window.screen.width / 2 - 310, ',top=')
          .concat(
            window.screen.height / 2 - 225,
            ",toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=350'\n    )"
          );
      };
  },
  function (e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'RightAside', function () {
        return i;
      });
    var o = n(0);
    var i = function i(e, t) {
        return (
          setTimeout(function (e) {
            var t = document.querySelector('.newsBox__autoload:not(.active)');
            t && (gazeta_pl.News.init(t), t.classList.add('active'));
          }, 250),
          '<div class="right_aside">'.concat(e).concat(a()).concat(t, '</div>')
        );
      },
      a = function a() {
        var e = document.querySelector('.bottom_section + .right_aside');
        if ('DESKTOP' === o.default.device && e) {
          var _t16 = e.querySelector('.newsBox');
          return _t16
            ? '<div class="newsBox lazy_load newsBox__autoload">'.concat(
                _t16.innerHTML,
                '</div>'
              )
            : '';
        }
        return '';
      };
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    var o = n(0);
    t.default = function (e) {
      var t = '';
      var n = e.artBg,
        i = !!o.default.cycleData,
        a = !!o.default.sectionTitle,
        r = e.isPartnerMaterial || i || a;
      var s = '';
      return (
        r && (s = e.isPartnerMaterial ? 'partner' : i ? 'cycle' : 'section'),
        n &&
          (t =
            '\n            <div class="header headerPremium headerPremium--autoLoad">\n                <div class="headerPremium__imgContainer">\n                    <img class="headerPremium__img" src="'
              .concat(n, '"/>\n                </div>\n                ')
              .concat(
                r
                  ? (function (e) {
                      var t = '',
                        n = '';
                      switch (e) {
                        case 'partner':
                          n =
                            '<div class="article__type article__type--section">Materia\u0142 Promocyjny</div>';
                          break;
                        case 'cycle':
                          n =
                            '\n                    <div class="article__type article__type--cycle">\n                        <span class="article__type-text">Ten tytu\u0142 jest cz\u0119\u015Bci\u0105 cyklu</span>\n                        <span class="article__type-title">'.concat(
                              o.default.cycleData.title,
                              '</span>\n                    </div>\n                '
                            );
                          break;
                        case 'section':
                          n =
                            '<div class="article__type article__type--section">'.concat(
                              o.default.sectionTitle,
                              '</div>'
                            );
                      }
                      return (
                        n &&
                          (t = '<div class="article__type-wrapper">'.concat(
                            n,
                            '</div>'
                          )),
                        t
                      );
                    })(s)
                  : '',
                '\n            </div>\n        '
              )),
        t
      );
    };
  },
  function (e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'init', function () {
        return l;
      });
    var o = n(10),
      i = n(5);
    var a = { reportAllChanges: !0 },
      r = {
        _data: {},
        _isCached: !1,
        get: function get() {
          return r._data;
        },
        set: function set(e) {
          (r._isCached = !0), (r._data = e);
        },
      },
      s = {
        construct: function construct(e) {
          var t = r._isCached,
            n = t && e.delta > r.get().delta;
          return !t || n
            ? {
                id: e.id,
                element: e.attribution.largestShiftTarget || '<no-element>',
                timeline: ~~(e.attribution.largestShiftTime || 0),
                delta: Math.round(1e4 * e.delta) / 1e4,
                value: Math.round(1e4 * e.value) / 1e4,
              }
            : _objectSpread(
                _objectSpread({}, r.get()),
                {},
                { value: Math.round(1e4 * e.value) / 1e4 }
              );
        },
      },
      l = function l() {
        Object(o.a)(function (e) {
          var t = s.construct(e);
          r.set(t), i.Queue.add({ prefix: 'cls', data: r.get() });
        }, a);
      };
  },
  function (e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'init', function () {
        return r;
      });
    var o = n(10),
      i = n(5);
    var a = { reportAllChanges: !0 },
      r = function r() {
        Object(o.b)(function (e) {
          var t = {
            id: e.id,
            element: e.attribution.interactionTarget || '<no-element>',
            event: e.attribution.interactionType || '<no-event>',
            timeline: ~~(e.attribution.interactionTime || 0),
            value: e.value,
          };
          i.Queue.add({ prefix: 'inp', data: t });
        }, a);
      };
  },
  function (e, t, n) {
    'use strict';
    n.r(t),
      n.d(t, 'init', function () {
        return r;
      });
    var o = n(10),
      i = n(5);
    var a = { reportAllChanges: !0 },
      r = function r() {
        Object(o.c)(function (e) {
          var t = {
            id: e.id,
            element: e.attribution.element || '<no-element>',
            value: ~~e.value,
            components: JSON.stringify([
              ~~e.attribution.timeToFirstByte,
              ~~e.attribution.resourceLoadDelay,
              ~~e.attribution.resourceLoadTime,
              ~~e.attribution.elementRenderDelay,
            ]),
          };
          i.Queue.add({ prefix: 'lcp', data: t });
        }, a);
      };
  },
  function (e, t, n) {
    var o = n(77);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {
    var o = n(79);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {
    var o = n(80);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {
    var o = n(81);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {
    var o = n(82);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {
    var o = n(83);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {
    var o = n(88);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {
    n(50),
      n(181),
      n(51),
      n(52),
      n(53),
      n(54),
      n(55),
      n(56),
      n(57),
      n(58),
      n(59),
      n(60),
      n(61),
      n(62),
      n(63),
      n(64),
      n(65),
      n(66),
      n(67),
      n(68),
      n(69),
      n(70),
      n(71),
      n(72),
      n(73),
      n(74),
      n(75),
      n(76),
      n(3),
      n(13),
      n(7),
      n(2),
      n(8),
      n(15),
      n(4),
      n(14),
      n(23),
      n(33),
      n(27),
      n(18),
      n(28),
      n(34),
      n(31),
      n(84),
      n(30),
      n(32),
      n(29),
      n(26),
      n(25),
      n(24),
      n(16),
      n(20),
      n(21),
      n(6),
      n(22),
      n(19),
      n(11),
      n(85),
      n(86),
      n(87),
      n(182),
      n(0),
      n(12),
      n(35),
      n(38),
      n(9),
      n(37),
      n(36),
      n(17),
      n(89),
      n(90),
      n(91),
      n(92),
      n(93),
      n(94),
      n(39),
      n(40),
      n(41),
      n(5),
      n(95),
      n(96),
      n(97),
      n(98),
      n(99),
      n(101),
      n(103),
      n(105),
      n(107),
      n(109),
      n(111),
      n(113),
      n(115),
      n(117),
      n(119),
      n(121),
      n(123),
      n(125),
      n(127),
      n(129),
      n(131),
      n(133),
      n(135),
      n(137),
      n(139),
      n(141),
      n(143),
      n(145),
      n(147),
      n(149),
      n(151),
      n(43),
      n(45),
      n(46),
      n(42),
      n(47),
      n(44),
      n(153),
      n(155),
      n(48),
      n(157),
      n(159),
      n(161),
      n(163),
      n(165),
      n(167),
      n(169),
      n(171),
      n(173),
      n(175),
      n(177),
      (e.exports = n(179));
  },
  function (e, t) {
    (window.gazeta_pl = window.gazeta_pl || {}),
      (window._gaq = window._gaq || []);
  },
  function (e, t) {
    'undefined' == typeof scheduler &&
      (function () {
        var e = ['user-blocking', 'user-visible', 'background'];
        var t = /*#__PURE__*/ (function () {
          'use strict';
          function t() {
            var _this23 = this;
            _classCallCheck(this, t);
            (this.channel_ = new MessageChannel()),
              (this.sendPort_ = this.channel_.port2),
              (this.messages_ = {}),
              (this.nextMessageHandle_ = 1),
              (this.channel_.port1.onmessage = function (e) {
                return _this23.onMessageReceived_(e);
              });
          }
          return _createClass(t, [
            {
              key: 'queueCallback',
              value: function queueCallback(e) {
                var _t17 = this.nextMessageHandle_++;
                return (
                  (this.messages_[_t17] = e),
                  this.sendPort_.postMessage(_t17),
                  _t17
                );
              },
            },
            {
              key: 'cancelCallback',
              value: function cancelCallback(e) {
                delete this.messages_[e];
              },
            },
            {
              key: 'onMessageReceived_',
              value: function onMessageReceived_(e) {
                var _t18 = e.data;
                if (_t18 in this.messages_) {
                  var n = this.messages_[_t18];
                  delete this.messages_[_t18], n();
                }
              },
            },
          ]);
        })();
        function n() {
          return n.instance_ || (n.instance_ = new t()), n.instance_;
        }
        var o = /*#__PURE__*/ (function () {
          'use strict';
          function o(e, t, n) {
            _classCallCheck(this, o);
            void 0 === n && (n = 0),
              (this.callback_ = e),
              (this.callbackType_ = null),
              (this.handle_ = null),
              (this.canceled_ = !1),
              this.schedule_(t, n);
          }
          return _createClass(o, [
            {
              key: 'isIdleCallback',
              value: function isIdleCallback() {
                return 0 === this.callbackType_;
              },
            },
            {
              key: 'isMessageChannelCallback',
              value: function isMessageChannelCallback() {
                return 2 === this.callbackType_;
              },
            },
            {
              key: 'cancel',
              value: function cancel() {
                if (!this.canceled_)
                  switch (((this.canceled_ = !0), this.callbackType_)) {
                    case 0:
                      cancelIdleCallback(this.handle_);
                      break;
                    case 1:
                      clearTimeout(this.handle_);
                      break;
                    case 2:
                      n().cancelCallback(this.handle_);
                      break;
                    default:
                      throw new TypeError('Unknown CallbackType');
                  }
              },
            },
            {
              key: 'schedule_',
              value: function schedule_(t, _o10) {
                var _this24 = this;
                if (_o10 && _o10 > 0)
                  return (
                    (this.callbackType_ = 1),
                    void (this.handle_ = setTimeout(function () {
                      _this24.runCallback_();
                    }, _o10))
                  );
                if (!e.includes(t))
                  throw new TypeError('Invalid task priority : ' + t);
                return 'background' === t &&
                  'function' == typeof requestIdleCallback
                  ? ((this.callbackType_ = 0),
                    void (this.handle_ = requestIdleCallback(function () {
                      _this24.runCallback_();
                    })))
                  : 'function' == typeof MessageChannel
                  ? ((this.callbackType_ = 2),
                    void (this.handle_ = n().queueCallback(function () {
                      _this24.runCallback_();
                    })))
                  : ((this.callbackType_ = 1),
                    void (this.handle_ = setTimeout(function () {
                      _this24.runCallback_();
                    })));
              },
            },
            {
              key: 'runCallback_',
              value: function runCallback_() {
                this.canceled_ || this.callback_();
              },
            },
          ]);
        })();
        var i = 0;
        var a = /*#__PURE__*/ (function () {
          'use strict';
          function a() {
            _classCallCheck(this, a);
            (this.head_ = null), (this.tail_ = null);
          }
          return _createClass(a, [
            {
              key: 'isEmpty',
              value: function isEmpty() {
                return null == this.head_;
              },
            },
            {
              key: 'push',
              value: function push(e) {
                if ('object' != _typeof(e))
                  throw new TypeError('Task must be an Object');
                (e.tq_sequence_ = i++),
                  this.isEmpty()
                    ? ((e.tq_prev_ = null), (this.head_ = e))
                    : ((e.tq_prev_ = this.tail_), (this.tail_.tq_next_ = e)),
                  (e.tq_next_ = null),
                  (this.tail_ = e);
              },
            },
            {
              key: 'takeNextTask',
              value: function takeNextTask() {
                if (this.isEmpty()) return null;
                var e = this.head_;
                return this.remove_(e), e;
              },
            },
            {
              key: 'merge',
              value: function merge(e, t) {
                if ('function' != typeof t)
                  throw new TypeError('Must provide a selector function.');
                if (null == e) throw new Error('sourceQueue cannot be null');
                for (var n = this.head_, o = null, i = e.head_; i; ) {
                  var _a4 = i;
                  if (((i = i.tq_next_), t(_a4))) {
                    for (
                      e.remove_(_a4);
                      n && n.tq_sequence_ < _a4.tq_sequence_;

                    )
                      (o = n), (n = n.tq_next_);
                    this.insert_(_a4, o), (o = _a4);
                  }
                }
              },
            },
            {
              key: 'toArray',
              value: function toArray() {
                for (var e = this.head_, t = []; null !== e; )
                  t.push(e), (e = e.tq_next_);
                return t;
              },
            },
            {
              key: 'insert_',
              value: function insert_(e, t) {
                if (t != this.tail_) {
                  var n = t ? t.tq_next_ : this.head_;
                  (e.tq_next_ = n),
                    (n.tq_prev_ = e),
                    (e.tq_prev_ = t),
                    null != t ? (t.tq_next_ = e) : (this.head_ = e);
                } else this.push(e);
              },
            },
            {
              key: 'remove_',
              value: function remove_(e) {
                if (null == e) throw new Error('Expected task to be non-null');
                e === this.head_ && (this.head_ = e.tq_next_),
                  e === this.tail_ && (this.tail_ = this.tail_.tq_prev_),
                  e.tq_next_ && (e.tq_next_.tq_prev_ = e.tq_prev_),
                  e.tq_prev_ && (e.tq_prev_.tq_next_ = e.tq_next_);
              },
            },
          ]);
        })();
        var r = /*#__PURE__*/ (function (_Event) {
          'use strict';
          function r(t, n) {
            var _this25;
            _classCallCheck(this, r);
            if (!n || !e.includes(n.previousPriority))
              throw new TypeError(
                "Invalid task priority: '" + n.previousPriority + "'"
              );
            (_this25 = _callSuper(this, r, [t])),
              (_this25.previousPriority = n.previousPriority);
            return _this25;
          }
          _inherits(r, _Event);
          return _createClass(r);
        })(/*#__PURE__*/ _wrapNativeSuper(Event));
        var s = /*#__PURE__*/ (function (_AbortController) {
          'use strict';
          function s(t) {
            var _this26;
            _classCallCheck(this, s);
            if (
              (void 0 === t && (t = {}),
              (_this26 = _callSuper(this, s)),
              null == t && (t = {}),
              'object' != _typeof(t))
            )
              throw new TypeError("'init' is not an object");
            var n,
              o,
              i = void 0 === t.priority ? 'user-visible' : t.priority;
            if (!e.includes(i))
              throw new TypeError("Invalid task priority: '" + i + "'");
            (_this26.priority_ = i),
              (_this26.isPriorityChanging_ = !1),
              (o = (n = _this26).signal),
              Object.defineProperties(o, {
                priority: {
                  get: function get() {
                    return n.priority_;
                  },
                  enumerable: !0,
                },
                onprioritychange: { value: null, writable: !0, enumerable: !0 },
              }),
              o.addEventListener('prioritychange', function (e) {
                o.onprioritychange && o.onprioritychange(e);
              });
            return _this26;
          }
          _inherits(s, _AbortController);
          return _createClass(s, [
            {
              key: 'setPriority',
              value: function setPriority(t) {
                if (!e.includes(t))
                  throw new TypeError('Invalid task priority: ' + t);
                if (this.isPriorityChanging_)
                  throw new DOMException('', 'NotAllowedError');
                if (this.signal.priority !== t) {
                  this.isPriorityChanging_ = !0;
                  var n = this.priority_;
                  this.priority_ = t;
                  var o = new r('prioritychange', { previousPriority: n });
                  this.signal.dispatchEvent(o), (this.isPriorityChanging_ = !1);
                }
              },
            },
          ]);
        })(/*#__PURE__*/ _wrapNativeSuper(AbortController));
        void 0 === self.scheduler
          ? ((self.scheduler = new /*#__PURE__*/ ((function () {
              'use strict';
              function _class11() {
                var _this27 = this;
                _classCallCheck(this, _class11);
                (this.queues_ = {}),
                  e.forEach(function (e) {
                    _this27.queues_[e] = [new a(), new a()];
                  }),
                  (this.pendingHostCallback_ = null),
                  (this.signals_ = new WeakMap());
              }
              return _createClass(_class11, [
                {
                  key: 'yield',
                  value: function _yield(e) {
                    return (
                      (e = Object.assign({}, e)).signal &&
                        'inherit' == e.signal &&
                        delete e.signal,
                      e.priority &&
                        'inherit' == e.priority &&
                        (e.priority = 'user-visible'),
                      this.postTaskOrContinuation_(function () {}, e, !0)
                    );
                  },
                },
                {
                  key: 'postTask',
                  value: function postTask(e, t) {
                    return this.postTaskOrContinuation_(e, t, !1);
                  },
                },
                {
                  key: 'postTaskOrContinuation_',
                  value: function postTaskOrContinuation_(t, n, o) {
                    if (void 0 !== (n = Object.assign({}, n)).signal) {
                      if (
                        null === n.signal ||
                        !('aborted' in n.signal) ||
                        'function' != typeof n.signal.addEventListener
                      )
                        return Promise.reject(
                          new TypeError("'signal' is not a valid 'AbortSignal'")
                        );
                      if (
                        n.signal &&
                        n.signal.priority &&
                        !e.includes(n.signal.priority)
                      )
                        return Promise.reject(
                          new TypeError(
                            "Invalid task priority: '" + n.signal.priority + "'"
                          )
                        );
                    }
                    if (
                      void 0 !== n.priority &&
                      (null === n.priority || !e.includes(n.priority))
                    )
                      return Promise.reject(
                        new TypeError(
                          "Invalid task priority: '" + n.priority + "'"
                        )
                      );
                    if (
                      (void 0 === n.delay && (n.delay = 0),
                      (n.delay = Number(n.delay)),
                      n.delay < 0)
                    )
                      return Promise.reject(
                        new TypeError("'delay' must be a positive number.")
                      );
                    var i = {
                        callback: t,
                        options: n,
                        resolve: null,
                        reject: null,
                        hostCallback: null,
                        abortCallback: null,
                        onTaskCompleted: function onTaskCompleted() {
                          this.options.signal &&
                            this.abortCallback &&
                            (this.options.signal.removeEventListener(
                              'abort',
                              this.abortCallback
                            ),
                            (this.abortCallback = null));
                        },
                        onTaskAborted: function onTaskAborted() {
                          this.hostCallback &&
                            (this.hostCallback.cancel(),
                            (this.hostCallback = null)),
                            this.options.signal.removeEventListener(
                              'abort',
                              this.abortCallback
                            ),
                            (this.abortCallback = null),
                            this.reject(this.options.signal.reason);
                        },
                        isAborted: function isAborted() {
                          return (
                            this.options.signal && this.options.signal.aborted
                          );
                        },
                        isContinuation: o,
                      },
                      a = new Promise(function (e, t) {
                        (i.resolve = e), (i.reject = t);
                      });
                    return this.schedule_(i), a;
                  },
                },
                {
                  key: 'schedule_',
                  value: function schedule_(e) {
                    var _this28 = this;
                    var t = e.options.signal;
                    if (t) {
                      if (t.aborted) return void e.reject(t.reason);
                      (e.abortCallback = function () {
                        e.onTaskAborted();
                      }),
                        t.addEventListener('abort', e.abortCallback);
                    }
                    e.options.delay > 0
                      ? (e.hostCallback = new o(
                          function () {
                            (e.hostCallback = null),
                              _this28.onTaskDelayExpired_(e);
                          },
                          null,
                          e.options.delay
                        ))
                      : (this.pushTask_(e),
                        this.scheduleHostCallbackIfNeeded_());
                  },
                },
                {
                  key: 'onTaskDelayExpired_',
                  value: function onTaskDelayExpired_(e) {
                    this.pushTask_(e),
                      this.pendingHostCallback_ &&
                        (this.pendingHostCallback_.cancel(),
                        (this.pendingHostCallback_ = null)),
                      this.schedulerEntryCallback_();
                  },
                },
                {
                  key: 'onPriorityChange_',
                  value: function onPriorityChange_(e) {
                    var t = this.signals_.get(e);
                    if (void 0 === t)
                      throw new Error(
                        'Attempting to change priority on an unregistered signal'
                      );
                    if (t !== e.priority) {
                      for (var n = 0; n < 2; n++)
                        this.queues_[e.priority][n].merge(
                          this.queues_[t][n],
                          function (t) {
                            return t.options.signal === e;
                          }
                        );
                      this.signals_.set(e, e.priority);
                    }
                  },
                },
                {
                  key: 'schedulerEntryCallback_',
                  value: function schedulerEntryCallback_() {
                    (this.pendingHostCallback_ = null),
                      this.runNextTask_(),
                      this.scheduleHostCallbackIfNeeded_();
                  },
                },
                {
                  key: 'scheduleHostCallbackIfNeeded_',
                  value: function scheduleHostCallbackIfNeeded_() {
                    var _this29 = this;
                    var _this$nextTaskPriorit = this.nextTaskPriority_(),
                      e = _this$nextTaskPriorit.priority;
                    null != e &&
                      ('background' !== e &&
                        this.pendingHostCallback_ &&
                        this.pendingHostCallback_.isIdleCallback() &&
                        (this.pendingHostCallback_.cancel(),
                        (this.pendingHostCallback_ = null)),
                      this.pendingHostCallback_ ||
                        (this.pendingHostCallback_ = new o(
                          function () {
                            _this29.schedulerEntryCallback_();
                          },
                          e,
                          0
                        )));
                  },
                },
                {
                  key: 'pushTask_',
                  value: function pushTask_(t) {
                    var _this30 = this;
                    var n;
                    if (
                      !e.includes(
                        (n = t.options.priority
                          ? t.options.priority
                          : t.options.signal && t.options.signal.priority
                          ? t.options.signal.priority
                          : 'user-visible')
                      )
                    )
                      throw new TypeError('Invalid task priority: ' + n);
                    if (t.options.signal && t.options.signal.priority) {
                      var o = t.options.signal;
                      this.signals_.has(o) ||
                        (o.addEventListener('prioritychange', function () {
                          _this30.onPriorityChange_(o);
                        }),
                        this.signals_.set(o, o.priority));
                    }
                    this.queues_[n][t.isContinuation ? 0 : 1].push(t);
                  },
                },
                {
                  key: 'runNextTask_',
                  value: function runNextTask_() {
                    var e = null;
                    do {
                      var _this$nextTaskPriorit2 = this.nextTaskPriority_(),
                        t = _this$nextTaskPriorit2.priority,
                        n = _this$nextTaskPriorit2.type;
                      if (null == t) return;
                      e = this.queues_[t][n].takeNextTask();
                    } while (e.isAborted());
                    try {
                      var o = e.callback();
                      e.resolve(o);
                    } catch (t) {
                      e.reject(t);
                    } finally {
                      e.onTaskCompleted();
                    }
                  },
                },
                {
                  key: 'nextTaskPriority_',
                  value: function nextTaskPriority_() {
                    for (var t = 0; t < e.length; t++)
                      for (var n = e[t], o = 0; o < 2; o++)
                        if (!this.queues_[n][o].isEmpty())
                          return { priority: n, type: o };
                    return { priority: null, type: 0 };
                  },
                },
              ]);
            })())()),
            (self.TaskController = s),
            (self.TaskPriorityChangeEvent = r))
          : self.scheduler.yield ||
            (self.scheduler.yield = function (e) {
              var t = function t(e) {
                return e && 'user-visible' != e ? e : 'user-blocking';
              };
              if (
                ((e = Object.assign({}, e)).signal &&
                  'inherit' == e.signal &&
                  delete e.signal,
                e.priority && 'inherit' == e.priority && delete e.priority,
                e.signal && e.signal.aborted)
              )
                return Promise.reject(e.signal.reason);
              var n = e.priority;
              !n && e.signal && e.signal.priority && (n = e.signal.priority),
                (n = t(n));
              var o = {
                inputSignal: e.signal,
                controller: new self.TaskController({ priority: n }),
                abortCallback: null,
                priorityCallback: null,
                onTaskAborted: function onTaskAborted() {
                  this.controller.abort(this.inputSignal.reason),
                    (this.abortCallback = null);
                },
                onPriorityChange: function onPriorityChange() {
                  this.controller.setPriority(t(this.inputSignal.priority));
                },
                onTaskCompleted: function onTaskCompleted() {
                  this.abortCallback &&
                    (this.inputSignal.removeEventListener(
                      'abort',
                      this.abortCallback
                    ),
                    (this.abortCallback = null)),
                    this.priorityCallback &&
                      (this.inputSignal.removeEventListener(
                        'prioritychange',
                        this.priorityCallback
                      ),
                      (this.priorityCallback = null));
                },
              };
              e.signal &&
                ((o.abortCallback = function () {
                  o.onTaskAborted();
                }),
                e.signal.addEventListener('abort', o.abortCallback)),
                e.signal &&
                  e.signal.priority &&
                  !e.priority &&
                  ((o.priorityCallback = function () {
                    o.onPriorityChange();
                  }),
                  e.signal.addEventListener(
                    'prioritychange',
                    o.priorityCallback
                  ));
              var i = self.scheduler.postTask(function () {}, {
                signal: o.controller.signal,
              });
              return (
                i
                  .then(function () {
                    o.onTaskCompleted();
                  })
                  .catch(function (e) {
                    throw (o.onTaskCompleted(), e);
                  }),
                i
              );
            });
      })();
  },
  function (e, t) {
    (gazeta_pl.parseURI = function () {
      var e = {};
      return (
        location.href
          .split(/\?/)
          .pop()
          .split(/&/)
          .map(function (t) {
            (t = t.split(/=/)), (e[t.shift()] = t.join('='));
          }),
        e
      );
    }),
      (gazeta_pl.makeURI = function (e, t, n) {
        var o = [],
          i = null,
          a = 0,
          r =
            ((n = n || !1),
            (t = t || !1) ? '' : location.href.split(/\?/).shift() + '?');
        for (i in e)
          for (
            e[i] instanceof Array || (e[i] = [e[i]]), a = 0;
            a < e[i].length;
            a++
          )
            o.push(i + '=' + (n ? e[i][a] : encodeURIComponent(e[i][a])));
        return r + o.join('&');
      }),
      (gazeta_pl.readParam = function (e) {
        return (gazeta_pl.documentParam || {})[e];
      }),
      (gazeta_pl.readPageData = function (e) {
        var t,
          n = {};
        return (
          (t = (e || document.location.href).match(
            /((?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9])\/([a-z0-9-_]{0,30})\/*([-0-9a-zA-Z]+),([0-9]+)(?:,([0-9]+),?([^\.]+)?)?\./i
          )) &&
            ((n.domain = t[1]),
            (n.pageRoot = t[2]),
            (n.pageType = t[3]),
            (n.pageId = t[4]),
            (n.articleId = t[5]),
            (n.text = t[6])),
          n
        );
      }),
      (gazeta_pl.jsonp = function (e, t, n, o) {
        var i = document.createElement('script'),
          a = gazeta_pl.jsonp,
          r = '',
          s = (o = o || {}).name || 'callback';
        'string' == typeof o.timestamp &&
          (t[o.timestamp] = new Date().getTime()),
          'function' == typeof n
            ? (a.count || (a.count = 0),
              a.hash || (a.hash = {}),
              (r = 'c' + a.count++),
              (a.hash[r] = n),
              (t[s] = 'gazeta_pl.jsonp.hash.' + r))
            : (t[s] = n),
          (i.src = e + (e.match(/\?/) ? '&' : '?') + gazeta_pl.makeURI(t, !0)),
          document.head.appendChild(i);
      }),
      (gazeta_pl.getUrlBasedOnReferrer = function () {
        var e;
        // return (
          // (e =
          //   gazeta_pl.mobileInfo && gazeta_pl.mobileInfo.isMobileDevice
          //     ? 'https://m.gazeta.pl/0,0.html'
          //     : 'https://www.gazeta.pl/0,0.html'),
          // e + '#utm_campaign=amtp_pnHP_X'
        // );
      });
  },
  function (e, t) {
    window.PhotoAPI = {
      DECIMAL_SYSTEM_ENDING_XX: 11833973,
      REGEX_PHOTO_DEC:
        /(https:|http:)?\/\/(bis?\.gazeta\.pl|bi\.im-g\.pl)\/im\/[0-9]\/\d+\/z(\d+)([A-Z]+)(?:,.*?)?\.(jpg)/,
      REGEX_PHOTO_HEX:
        /(https:|http:)?\/\/(bis?\.gazeta\.pl|bi\.im-g\.pl)\/im\/[0-9a-fA-F]{2}\/[0-9a-fA-F]{2}\/[0-9a-fA-F]{2}\/z([0-9]{8,})([A-Z]+)(?:,.*?)?\.([A-Za-z]{3,})/,
      REGEX_BINARY:
        /(https:|http:)?\/\/(bis?\.gazeta\.pl|bi\.im-g\.pl)\/im\/\d+\/\d+\/m(\d+)(?:,.*?)?\.(jpg|png|gif)/,
      REGEX_PHOTO_FORMAT: /(z\d+)[A-Z]+/,
      IMAGE_PATH: '//bi.im-g.pl/im/',
      fromURL: function fromURL(e) {
        var t = null,
          n = null;
        return (
          (t = e.match(PhotoAPI.REGEX_PHOTO_DEC)) ||
          (t = e.match(PhotoAPI.REGEX_PHOTO_HEX))
            ? (n = {
                type: t.pop(),
                format: t.pop(),
                xx: t.pop(),
                domain: t.pop(),
              })
            : (t = e.match(PhotoAPI.REGEX_BINARY)) &&
              (n = { type: t.pop(), format: '', xx: t.pop(), domain: t.pop() }),
          n
        );
      },
      photoFromXX: function photoFromXX(e, t, n) {
        var o = '',
          i = 0,
          a = '';
        return (
          (n = n || 'jpg'),
          (e = parseInt(e, 10) || 0) > PhotoAPI.DECIMAL_SYSTEM_ENDING_XX
            ? ((i = (a = e.toString(16)).length),
              (o =
                PhotoAPI.IMAGE_PATH +
                a.substr(i - 2, 2) +
                '/' +
                a.substr(2, 2) +
                '/' +
                a.substr(0, 2) +
                '/z' +
                e +
                t +
                '.' +
                n))
            : e > 0 &&
              e <= PhotoAPI.DECIMAL_SYSTEM_ENDING_XX &&
              ((i = (a = e.toString(10)).length),
              (o =
                PhotoAPI.IMAGE_PATH +
                a.substr(i - 1, 1) +
                '/' +
                a.substr(0, i - 3) +
                '/z' +
                a +
                t +
                '.' +
                n)),
          o
        );
      },
      photoChangeFormat: function photoChangeFormat(e, t) {
        return e.replace(PhotoAPI.REGEX_PHOTO_FORMAT, '$1' + t);
      },
      binaryFromXX: function binaryFromXX(e, t) {
        var n = e.toString(10),
          o = n.length,
          i = '';
        return (
          e &&
            (i =
              PhotoAPI.IMAGE_PATH +
              n.substr(o - 1, 1) +
              '/' +
              n.substr(0, o - 3) +
              '/m' +
              n +
              '.' +
              t),
          i
        );
      },
    };
  },
  function (e, t) {
    (window.DataOcean = window.DataOcean || {}),
      (window.DataOcean.userEventCache = window.DataOcean.userEventCache || []),
      (window.gazeta_pl_bigdata = {
        sendDataOceanEvent: function sendDataOceanEvent(e, t) {
          var n = { e: e, a: t };
          window.DataOcean.userEventCache.push(n);
        },
      });
  },
  function (e, t) {
    gazeta_pl = gazeta_pl || {};
    var n = /*#__PURE__*/ (function () {
      'use strict';
      function n(e) {
        _classCallCheck(this, n);
        (this.element = e),
          (this.window = null),
          this.gatherData(),
          this.addListener();
      }
      return _createClass(n, [
        {
          key: 'gatherData',
          value: function gatherData() {
            (this.screenWidth =
              screen.availWidth || screen.width || window.innerWidth),
              (this.screenHeight =
                screen.availHeight || screen.height || window.innerHeight),
              (this.elementDataWidth =
                (this.element.dataset && this.element.dataset.width) || 350),
              (this.elementDataHeight =
                (this.element.dataset && this.element.dataset.height) || 500),
              (this.link = this.element.href);
          },
        },
        {
          key: 'addListener',
          value: function addListener() {
            this.element.addEventListener('click', this.makePopup.bind(this));
          },
        },
        {
          key: 'makePopup',
          value: function makePopup(e) {
            e.preventDefault(),
              this.window && !this.window.closed && this.window.close();
            var t = ''
              .concat('width=' + this.elementDataWidth, ',')
              .concat('height=' + this.elementDataHeight, ',')
              .concat(
                'left=' + (this.screenWidth - this.elementDataWidth) / 2,
                ','
              )
              .concat(
                'top=' + (this.screenHeight - this.elementDataHeight) / 2,
                ',toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no'
              );
            this.window = open(this.link, 'pop', t);
          },
        },
      ]);
    })();
    gazeta_pl.gazetaPopWindow = function (e) {
      return new n(e);
    };
  },
  function (e, t) {
    gazeta_pl.mobileInfo.isMobileDevice ||
      ((gazeta_pl.Hat2014 = {
        init: function init() {
          var e = gazeta_pl.Hat2014,
            t = $('.mod_hat2014'),
            n = t.find('.logged');
          t.length &&
            (e.PageSearch.init(),
            n.click(function (e) {
              n.find('.user-box').toggleClass('active');
            }));
        },
        PageSearch: {
          hintHelper: [],
          init: function init() {
            var e = gazeta_pl.Hat2014,
              t = $('#pageSearch'),
              n = t.find('.folded'),
              o = $('#pageSearchQ'),
              i = '';
            $('form[data-hint-enabled="1"]').each(function () {
              e.PageSearch.setHint($(this));
            }),
              0 != t.length &&
                (n.click(function () {
                  document.selection && document.selection.empty
                    ? document.selection.empty()
                    : window.getSelection &&
                      window.getSelection().removeAllRanges(),
                    $(this).hasClass('folded')
                      ? ($(this).removeClass('folded'),
                        $(this).addClass('expanded'))
                      : ($(this).removeClass('expanded'),
                        $(this).addClass('folded'));
                }),
                n.find('li').click(function () {
                  t.attr('data-target', $(this).attr('data-target'));
                }),
                t.find('.visible form').submit(function () {
                  return (
                    t.attr('data-target') ||
                      t.attr(
                        'data-target',
                        $('#pageSearch .hidden [data-default=""]').attr(
                          'data-target'
                        )
                      ),
                    (i = '[data-target="' + t.attr('data-target') + '"]'),
                    $('#pageSearch .hidden ' + i + ' [data-query=""]').val(
                      o.val()
                    ),
                    $('#pageSearch .hidden ' + i).submit(),
                    !1
                  );
                }));
          },
          getHelperFn: function getHelperFn(e) {
            for (
              var t = gazeta_pl.Hat2014.PageSearch,
                n = 0,
                o = t.hintHelper.length,
                i = null;
              n < o;
              n++
            )
              if ((i = t.hintHelper[n](e))) return i;
            return t.defaultHelperFn;
          },
          defaultHelperFn: function defaultHelperFn(e, t, n) {
            var o = new RegExp('^(' + t.toLowerCase() + ')(.*)$');
            return (
              '<li data-pos="' +
              n +
              '">' +
              e.phrase.replace(o, '$1<b>$2</b>') +
              '</li>'
            );
          },
          setHint: function setHint(e) {
            var t = e.find('input[data-hint-service]'),
              n = $('<ul>'),
              o = e.find('input[data-hint-param="1"]'),
              i = {},
              a = 0,
              r = 0,
              s = !1,
              l = null,
              c = '1' == e.attr('data-hint-jsonp'),
              p = '1' == e.attr('data-hint-auto'),
              d = e.attr('data-hint-field') || null,
              u = {},
              m = gazeta_pl.Hat2014.PageSearch.getHelperFn(e),
              h = function h(e, t, o) {
                var i = 0,
                  c = '';
                if ((d && e && (e = e[d]), void 0 === e || !e || !e.length))
                  return (s = !1), n.hide(), void (l = null);
                e.map(function (e) {
                  c += m(e, t, i++);
                }),
                  n.html(c),
                  n.css({
                    left: o.offset().left,
                    top: o.offset().top + o.outerHeight(),
                    width: o.width(),
                    display: 'block',
                  }),
                  (l = o),
                  (a = -1),
                  (s = !0),
                  f('show', (r = e));
              },
              f = function f(t, n, o) {
                e.trigger('pageHint:' + t, n, o);
              },
              g = function g(e) {
                var t = e.attr('data-hint-service'),
                  a = parseInt(e.attr('data-hint-length'), 10) || 3,
                  r = $.trim(e.val()),
                  p = function p(t) {
                    (i[r] = t), h(i[r], r, e);
                  };
                if (r.length < a) return n.hide(), (l = !1), void (s = !1);
                i[r]
                  ? h(i[r], r, e)
                  : (o.each(function () {
                      u[$(this).attr('name')] = $(this).val();
                    }),
                    (u.query = r),
                    c
                      ? gazeta_pl.jsonp(t, u, p, {})
                      : $.ajax({ url: t, data: u, success: p }));
              },
              v = function v(e) {
                e < 0 && (e = r.length - 1),
                  e >= r.length && (e = 0),
                  (a = e),
                  n.find('.active').removeClass('active'),
                  n.find('li').eq(a).addClass('active'),
                  f('move', r[a], a);
              },
              _ = function _(t) {
                if (a >= 0 && a < r.length) {
                  if (
                    (l.val(r[a].phrase), n.hide(), (s = !1), r[a].redirectUrl)
                  ) {
                    var o = r[a].redirectUrl;
                    return (
                      void 0 !== e.attr('prefix-for-suggester') &&
                        e.attr('prefix-for-suggester').length &&
                        (o = e.attr('prefix-for-suggester') + o),
                      (document.location.href = o),
                      f('redirect', r[a], a),
                      !1
                    );
                  }
                  return t && p && (f('submit'), e.submit()), !0;
                }
              };
            t.length &&
              ($('ul.searchHint li').live('click', function () {
                v(parseInt($(this).attr('data-pos'), 10)), _(!0);
              }),
              $('ul.searchHint li').live('mouseenter', function () {
                v(parseInt($(this).attr('data-pos'), 10));
              }),
              $('body').append(n),
              n.addClass('searchHint'),
              t.bind('focus', function () {
                g($(this));
              }),
              t.bind('blur', function () {
                setTimeout(function () {
                  n.hide(), (l = null);
                }, 500);
              }),
              t.keyup(function (e) {
                if (38 == e.keyCode || 40 == e.keyCode) return !1;
                13 != e.keyCode && g($(this));
              }),
              t.keydown(function (e) {
                if (s)
                  switch (e.keyCode) {
                    case 38:
                      return v(a - 1), !1;
                    case 40:
                      return v(a + 1), !1;
                    case 13:
                      return _();
                  }
              }));
          },
        },
      }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.Hat2014.init();
      })),
      gazeta_pl.mobileInfo.isMobileDevice;
  },
  function (e, t) {
    gazeta_pl.mobileInfo.isMobileDevice ||
      (function (e, t) {
        var n = e.document,
          o = (function () {
            var t,
              o,
              _i9,
              _a5 = function a(e, t) {
                return new _a5.fn.init(e, t);
              },
              r = e.jQuery,
              s = e.$,
              l = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,
              c = /\S/,
              p = /^\s+/,
              d = /\s+$/,
              u = /\W/,
              m = /\d/,
              h = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
              f = /^[\],:{}\s]*$/,
              g = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
              v =
                /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
              _ = /(?:^|:|,)(?:\s*\[)+/g,
              y = /(webkit)[ \/]([\w.]+)/,
              b = /(opera)(?:.*version)?[ \/]([\w.]+)/,
              E = /(msie) ([\w.]+)/,
              w = /(mozilla)(?:.*? rv:([\w.]+))?/,
              A = navigator.userAgent,
              T = !1,
              S = [],
              C = Object.prototype.toString,
              x = Object.prototype.hasOwnProperty,
              L = Array.prototype.push,
              k = Array.prototype.slice,
              I = String.prototype.trim,
              O = Array.prototype.indexOf,
              P = {};
            function M() {
              if (!_a5.isReady) {
                try {
                  n.documentElement.doScroll('left');
                } catch (e) {
                  return void setTimeout(M, 1);
                }
                _a5.ready();
              }
            }
            return (
              (_a5.fn = _a5.prototype =
                {
                  init: function init(e, o) {
                    var i, r, s, c;
                    if (!e) return this;
                    if (e.nodeType)
                      return (
                        (this.context = this[0] = e), (this.length = 1), this
                      );
                    if ('body' === e && !o && n.body)
                      return (
                        (this.context = n),
                        (this[0] = n.body),
                        (this.selector = 'body'),
                        (this.length = 1),
                        this
                      );
                    if ('string' == typeof e) {
                      if (!(i = l.exec(e)) || (!i[1] && o))
                        return o || u.test(e)
                          ? !o || o.jquery
                            ? (o || t).find(e)
                            : _a5(o).find(e)
                          : ((this.selector = e),
                            (this.context = n),
                            (e = n.getElementsByTagName(e)),
                            _a5.merge(this, e));
                      if (i[1])
                        return (
                          (c = o ? o.ownerDocument || o : n),
                          (s = h.exec(e))
                            ? _a5.isPlainObject(o)
                              ? ((e = [n.createElement(s[1])]),
                                _a5.fn.attr.call(e, o, !0))
                              : (e = [c.createElement(s[1])])
                            : (e = (
                                (s = _a5.buildFragment([i[1]], [c])).cacheable
                                  ? s.fragment.cloneNode(!0)
                                  : s.fragment
                              ).childNodes),
                          _a5.merge(this, e)
                        );
                      if ((r = n.getElementById(i[2])) && r.parentNode) {
                        if (r.id !== i[2]) return t.find(e);
                        (this.length = 1), (this[0] = r);
                      }
                      return (this.context = n), (this.selector = e), this;
                    }
                    return _a5.isFunction(e)
                      ? t.ready(e)
                      : (void 0 !== e.selector &&
                          ((this.selector = e.selector),
                          (this.context = e.context)),
                        _a5.makeArray(e, this));
                  },
                  selector: '',
                  jquery: '1.4.4',
                  length: 0,
                  size: function size() {
                    return this.length;
                  },
                  toArray: function toArray() {
                    return k.call(this, 0);
                  },
                  get: function get(e) {
                    return null == e
                      ? this.toArray()
                      : e < 0
                      ? this.slice(e)[0]
                      : this[e];
                  },
                  pushStack: function pushStack(e, t, n) {
                    var o = _a5();
                    return (
                      _a5.isArray(e) ? L.apply(o, e) : _a5.merge(o, e),
                      (o.prevObject = this),
                      (o.context = this.context),
                      'find' === t
                        ? (o.selector =
                            this.selector + (this.selector ? ' ' : '') + n)
                        : t &&
                          (o.selector =
                            this.selector + '.' + t + '(' + n + ')'),
                      o
                    );
                  },
                  each: function each(e, t) {
                    return _a5.each(this, e, t);
                  },
                  ready: function ready(e) {
                    return (
                      _a5.bindReady(),
                      _a5.isReady ? e.call(n, _a5) : S && S.push(e),
                      this
                    );
                  },
                  eq: function eq(e) {
                    return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
                  },
                  first: function first() {
                    return this.eq(0);
                  },
                  last: function last() {
                    return this.eq(-1);
                  },
                  slice: function slice() {
                    return this.pushStack(
                      k.apply(this, arguments),
                      'slice',
                      k.call(arguments).join(',')
                    );
                  },
                  map: function map(e) {
                    return this.pushStack(
                      _a5.map(this, function (t, n) {
                        return e.call(t, n, t);
                      })
                    );
                  },
                  end: function end() {
                    return this.prevObject || _a5(null);
                  },
                  push: L,
                  sort: [].sort,
                  splice: [].splice,
                }),
              (_a5.fn.init.prototype = _a5.fn),
              (_a5.extend = _a5.fn.extend =
                function () {
                  var e,
                    t,
                    n,
                    o,
                    i,
                    r,
                    s = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    p = !1;
                  for (
                    'boolean' == typeof s &&
                      ((p = s), (s = arguments[1] || {}), (l = 2)),
                      'object' == _typeof(s) || _a5.isFunction(s) || (s = {}),
                      c === l && ((s = this), --l);
                    l < c;
                    l++
                  )
                    if (null != (e = arguments[l]))
                      for (t in e)
                        (n = s[t]),
                          s !== (o = e[t]) &&
                            (p &&
                            o &&
                            (_a5.isPlainObject(o) || (i = _a5.isArray(o)))
                              ? (i
                                  ? ((i = !1),
                                    (r = n && _a5.isArray(n) ? n : []))
                                  : (r = n && _a5.isPlainObject(n) ? n : {}),
                                (s[t] = _a5.extend(p, r, o)))
                              : void 0 !== o && (s[t] = o));
                  return s;
                }),
              _a5.extend({
                noConflict: function noConflict(t) {
                  return (e.$ = s), t && (e.jQuery = r), _a5;
                },
                isReady: !1,
                readyWait: 1,
                ready: function ready(e) {
                  if (
                    (!0 === e && _a5.readyWait--,
                    !_a5.readyWait || (!0 !== e && !_a5.isReady))
                  ) {
                    if (!n.body) return setTimeout(_a5.ready, 1);
                    if (((_a5.isReady = !0), !0 !== e && --_a5.readyWait > 0))
                      return;
                    if (S) {
                      var t,
                        o = 0,
                        i = S;
                      for (S = null; (t = i[o++]); ) t.call(n, _a5);
                      _a5.fn.trigger && _a5(n).trigger('ready').unbind('ready');
                    }
                  }
                },
                bindReady: function bindReady() {
                  if (!T) {
                    if (((T = !0), 'complete' === n.readyState))
                      return setTimeout(_a5.ready, 1);
                    if (n.addEventListener)
                      n.addEventListener('DOMContentLoaded', _i9, !1),
                        e.addEventListener('load', _a5.ready, !1);
                    else if (n.attachEvent) {
                      n.attachEvent('onreadystatechange', _i9),
                        e.attachEvent('onload', _a5.ready);
                      var t = !1;
                      try {
                        t = null == e.frameElement;
                      } catch (e) {}
                      n.documentElement.doScroll && t && M();
                    }
                  }
                },
                isFunction: function isFunction(e) {
                  return 'function' === _a5.type(e);
                },
                isArray:
                  Array.isArray ||
                  function (e) {
                    return 'array' === _a5.type(e);
                  },
                isWindow: function isWindow(e) {
                  return e && 'object' == _typeof(e) && 'setInterval' in e;
                },
                isNaN: (function (_isNaN) {
                  function isNaN(_x5) {
                    return _isNaN.apply(this, arguments);
                  }
                  isNaN.toString = function () {
                    return _isNaN.toString();
                  };
                  return isNaN;
                })(function (e) {
                  return null == e || !m.test(e) || isNaN(e);
                }),
                type: function type(e) {
                  return null == e ? String(e) : P[C.call(e)] || 'object';
                },
                isPlainObject: function isPlainObject(e) {
                  if (
                    !e ||
                    'object' !== _a5.type(e) ||
                    e.nodeType ||
                    _a5.isWindow(e)
                  )
                    return !1;
                  if (
                    e.constructor &&
                    !x.call(e, 'constructor') &&
                    !x.call(e.constructor.prototype, 'isPrototypeOf')
                  )
                    return !1;
                  var t;
                  for (t in e);
                  return void 0 === t || x.call(e, t);
                },
                isEmptyObject: function isEmptyObject(e) {
                  for (var t in e) return !1;
                  return !0;
                },
                error: function error(e) {
                  throw e;
                },
                parseJSON: function parseJSON(t) {
                  return 'string' == typeof t && t
                    ? ((t = _a5.trim(t)),
                      f.test(t.replace(g, '@').replace(v, ']').replace(_, ''))
                        ? e.JSON && e.JSON.parse
                          ? e.JSON.parse(t)
                          : new Function('return ' + t)()
                        : void _a5.error('Invalid JSON: ' + t))
                    : null;
                },
                noop: function noop() {},
                globalEval: function globalEval(e) {
                  if (e && c.test(e)) {
                    var t =
                        n.getElementsByTagName('head')[0] || n.documentElement,
                      o = n.createElement('script');
                    (o.type = 'text/javascript'),
                      _a5.support.scriptEval
                        ? o.appendChild(n.createTextNode(e))
                        : (o.text = e),
                      t.insertBefore(o, t.firstChild),
                      t.removeChild(o);
                  }
                },
                nodeName: function nodeName(e, t) {
                  return (
                    e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
                  );
                },
                each: function each(e, t, n) {
                  var o,
                    i = 0,
                    r = e.length,
                    s = void 0 === r || _a5.isFunction(e);
                  if (n) {
                    if (s) {
                      for (o in e) if (!1 === t.apply(e[o], n)) break;
                    } else for (; i < r && !1 !== t.apply(e[i++], n); );
                  } else if (s) {
                    for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
                  } else
                    for (
                      var l = e[0];
                      i < r && !1 !== t.call(l, i, l);
                      l = e[++i]
                    );
                  return e;
                },
                trim: I
                  ? function (e) {
                      return null == e ? '' : I.call(e);
                    }
                  : function (e) {
                      return null == e
                        ? ''
                        : e.toString().replace(p, '').replace(d, '');
                    },
                makeArray: function makeArray(e, t) {
                  var n = t || [];
                  if (null != e) {
                    var o = _a5.type(e);
                    null == e.length ||
                    'string' === o ||
                    'function' === o ||
                    'regexp' === o ||
                    _a5.isWindow(e)
                      ? L.call(n, e)
                      : _a5.merge(n, e);
                  }
                  return n;
                },
                inArray: function inArray(e, t) {
                  if (t.indexOf) return t.indexOf(e);
                  for (var n = 0, o = t.length; n < o; n++)
                    if (t[n] === e) return n;
                  return -1;
                },
                merge: function merge(e, t) {
                  var n = e.length,
                    o = 0;
                  if ('number' == typeof t.length)
                    for (var i = t.length; o < i; o++) e[n++] = t[o];
                  else for (; void 0 !== t[o]; ) e[n++] = t[o++];
                  return (e.length = n), e;
                },
                grep: function grep(e, t, n) {
                  var o = [];
                  n = !!n;
                  for (var i = 0, a = e.length; i < a; i++)
                    n !== !!t(e[i], i) && o.push(e[i]);
                  return o;
                },
                map: function map(e, t, n) {
                  for (var o, i = [], a = 0, r = e.length; a < r; a++)
                    null != (o = t(e[a], a, n)) && (i[i.length] = o);
                  return i.concat.apply([], i);
                },
                guid: 1,
                proxy: function proxy(e, t, n) {
                  return (
                    2 === arguments.length &&
                      ('string' == typeof t
                        ? ((e = (n = e)[t]), (t = void 0))
                        : t && !_a5.isFunction(t) && ((n = t), (t = void 0))),
                    !t &&
                      e &&
                      (t = function t() {
                        return e.apply(n || this, arguments);
                      }),
                    e && (t.guid = e.guid = e.guid || t.guid || _a5.guid++),
                    t
                  );
                },
                access: function access(e, t, n, o, i, r) {
                  var s = e.length;
                  if ('object' == _typeof(t)) {
                    for (var l in t) _a5.access(e, l, t[l], o, i, n);
                    return e;
                  }
                  if (void 0 !== n) {
                    o = !r && o && _a5.isFunction(n);
                    for (var c = 0; c < s; c++)
                      i(e[c], t, o ? n.call(e[c], c, i(e[c], t)) : n, r);
                    return e;
                  }
                  return s ? i(e[0], t) : void 0;
                },
                now: function now() {
                  return new Date().getTime();
                },
                uaMatch: function uaMatch(e) {
                  e = e.toLowerCase();
                  var t =
                    y.exec(e) ||
                    b.exec(e) ||
                    E.exec(e) ||
                    (e.indexOf('compatible') < 0 && w.exec(e)) ||
                    [];
                  return { browser: t[1] || '', version: t[2] || '0' };
                },
                browser: {},
              }),
              _a5.each(
                'Boolean Number String Function Array Date RegExp Object'.split(
                  ' '
                ),
                function (e, t) {
                  P['[object ' + t + ']'] = t.toLowerCase();
                }
              ),
              (o = _a5.uaMatch(A)).browser &&
                ((_a5.browser[o.browser] = !0),
                (_a5.browser.version = o.version)),
              _a5.browser.webkit && (_a5.browser.safari = !0),
              O &&
                (_a5.inArray = function (e, t) {
                  return O.call(t, e);
                }),
              /\s/.test('\xA0') || ((p = /^[\s\xA0]+/), (d = /[\s\xA0]+$/)),
              (t = _a5(n)),
              n.addEventListener
                ? (_i9 = function i() {
                    n.removeEventListener('DOMContentLoaded', _i9, !1),
                      _a5.ready();
                  })
                : n.attachEvent &&
                  (_i9 = function _i8() {
                    'complete' === n.readyState &&
                      (n.detachEvent('onreadystatechange', _i9), _a5.ready());
                  }),
              (e.jQuery = e.$ = _a5)
            );
          })();
        !(function () {
          o.support = {};
          var t = n.documentElement,
            i = n.createElement('script'),
            a = n.createElement('div'),
            r = 'script' + o.now();
          (a.style.display = 'none'),
            (a.innerHTML =
              "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>");
          var s = a.getElementsByTagName('*'),
            l = a.getElementsByTagName('a')[0],
            c = n.createElement('select'),
            p = c.appendChild(n.createElement('option'));
          if (s && s.length && l) {
            (o.support = {
              leadingWhitespace: 3 === a.firstChild.nodeType,
              tbody: !a.getElementsByTagName('tbody').length,
              htmlSerialize: !!a.getElementsByTagName('link').length,
              style: /red/.test(l.getAttribute('style')),
              hrefNormalized: '/a' === l.getAttribute('href'),
              opacity: /^0.55$/.test(l.style.opacity),
              cssFloat: !!l.style.cssFloat,
              checkOn: 'on' === a.getElementsByTagName('input')[0].value,
              optSelected: p.selected,
              deleteExpando: !0,
              optDisabled: !1,
              checkClone: !1,
              scriptEval: !1,
              noCloneEvent: !0,
              boxModel: null,
              inlineBlockNeedsLayout: !1,
              shrinkWrapBlocks: !1,
              reliableHiddenOffsets: !0,
            }),
              (c.disabled = !0),
              (o.support.optDisabled = !p.disabled),
              (i.type = 'text/javascript');
            try {
              i.appendChild(n.createTextNode('window.' + r + '=1;'));
            } catch (e) {}
            t.insertBefore(i, t.firstChild),
              e[r] && ((o.support.scriptEval = !0), delete e[r]);
            try {
              delete i.test;
            } catch (e) {
              o.support.deleteExpando = !1;
            }
            t.removeChild(i),
              a.attachEvent &&
                a.fireEvent &&
                (a.attachEvent('onclick', function e() {
                  (o.support.noCloneEvent = !1), a.detachEvent('onclick', e);
                }),
                a.cloneNode(!0).fireEvent('onclick')),
              ((a = n.createElement('div')).innerHTML =
                "<input type='radio' name='radiotest' checked='checked'/>");
            var d = n.createDocumentFragment();
            d.appendChild(a.firstChild),
              (o.support.checkClone = d
                .cloneNode(!0)
                .cloneNode(!0).lastChild.checked),
              o(function () {
                var e = n.createElement('div');
                (e.style.width = e.style.paddingLeft = '1px'),
                  n.body.appendChild(e),
                  (o.boxModel = o.support.boxModel = 2 === e.offsetWidth),
                  'zoom' in e.style &&
                    ((e.style.display = 'inline'),
                    (e.style.zoom = 1),
                    (o.support.inlineBlockNeedsLayout = 2 === e.offsetWidth),
                    (e.style.display = ''),
                    (e.innerHTML = "<div style='width:4px;'></div>"),
                    (o.support.shrinkWrapBlocks = 2 !== e.offsetWidth)),
                  (e.innerHTML =
                    "<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>");
                var t = e.getElementsByTagName('td');
                (o.support.reliableHiddenOffsets = 0 === t[0].offsetHeight),
                  (t[0].style.display = ''),
                  (t[1].style.display = 'none'),
                  (o.support.reliableHiddenOffsets =
                    o.support.reliableHiddenOffsets && 0 === t[0].offsetHeight),
                  (e.innerHTML = ''),
                  (n.body.removeChild(e).style.display = 'none'),
                  (e = t = null);
              });
            var u = function u(e) {
              var t = n.createElement('div'),
                o = (e = 'on' + e) in t;
              return (
                o ||
                  (t.setAttribute(e, 'return;'),
                  (o = 'function' == typeof t[e])),
                (t = null),
                o
              );
            };
            (o.support.submitBubbles = u('submit')),
              (o.support.changeBubbles = u('change')),
              (t = i = a = s = l = null);
          }
        })();
        var i = {},
          a = /^(?:\{.*\}|\[.*\])$/;
        function r(e, t, n) {
          if (void 0 === n && 1 === e.nodeType)
            if ('string' == typeof (n = e.getAttribute('data-' + t))) {
              try {
                n =
                  'true' === n ||
                  ('false' !== n &&
                    ('null' === n
                      ? null
                      : o.isNaN(n)
                      ? a.test(n)
                        ? o.parseJSON(n)
                        : n
                      : parseFloat(n)));
              } catch (e) {}
              o.data(e, t, n);
            } else n = void 0;
          return n;
        }
        o.extend({
          cache: {},
          uuid: 0,
          expando: 'jQuery' + o.now(),
          noData: {
            embed: !0,
            object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
            applet: !0,
          },
          data: function data(t, n, a) {
            if (o.acceptData(t)) {
              var r,
                s = (t = t == e ? i : t).nodeType,
                l = s ? t[o.expando] : null,
                c = o.cache;
              if (!s || l || 'string' != typeof n || void 0 !== a)
                return (
                  s ? l || (t[o.expando] = l = ++o.uuid) : (c = t),
                  'object' == _typeof(n)
                    ? s
                      ? (c[l] = o.extend(c[l], n))
                      : o.extend(c, n)
                    : s && !c[l] && (c[l] = {}),
                  (r = s ? c[l] : c),
                  void 0 !== a && (r[n] = a),
                  'string' == typeof n ? r[n] : r
                );
            }
          },
          removeData: function removeData(t, n) {
            if (o.acceptData(t)) {
              var a = (t = t == e ? i : t).nodeType,
                r = a ? t[o.expando] : t,
                s = o.cache,
                l = a ? s[r] : r;
              if (n)
                l && (delete l[n], a && o.isEmptyObject(l) && o.removeData(t));
              else if (a && o.support.deleteExpando) delete t[o.expando];
              else if (t.removeAttribute) t.removeAttribute(o.expando);
              else if (a) delete s[r];
              else for (var c in t) delete t[c];
            }
          },
          acceptData: function acceptData(e) {
            if (e.nodeName) {
              var t = o.noData[e.nodeName.toLowerCase()];
              if (t) return !(!0 === t || e.getAttribute('classid') !== t);
            }
            return !0;
          },
        }),
          o.fn.extend({
            data: function data(e, t) {
              var n = null;
              if (void 0 === e) {
                if (this.length) {
                  var i,
                    a = this[0].attributes;
                  n = o.data(this[0]);
                  for (var s = 0, l = a.length; s < l; s++)
                    0 === (i = a[s].name).indexOf('data-') &&
                      ((i = i.substr(5)), r(this[0], i, n[i]));
                }
                return n;
              }
              if ('object' == _typeof(e))
                return this.each(function () {
                  o.data(this, e);
                });
              var c = e.split('.');
              return (
                (c[1] = c[1] ? '.' + c[1] : ''),
                void 0 === t
                  ? (void 0 ===
                      (n = this.triggerHandler('getData' + c[1] + '!', [
                        c[0],
                      ])) &&
                      this.length &&
                      ((n = o.data(this[0], e)), (n = r(this[0], e, n))),
                    void 0 === n && c[1] ? this.data(c[0]) : n)
                  : this.each(function () {
                      var n = o(this),
                        i = [c[0], t];
                      n.triggerHandler('setData' + c[1] + '!', i),
                        o.data(this, e, t),
                        n.triggerHandler('changeData' + c[1] + '!', i);
                    })
              );
            },
            removeData: function removeData(e) {
              return this.each(function () {
                o.removeData(this, e);
              });
            },
          }),
          o.extend({
            queue: function queue(e, t, n) {
              if (e) {
                t = (t || 'fx') + 'queue';
                var i = o.data(e, t);
                return n
                  ? (!i || o.isArray(n)
                      ? (i = o.data(e, t, o.makeArray(n)))
                      : i.push(n),
                    i)
                  : i || [];
              }
            },
            dequeue: function dequeue(e, t) {
              t = t || 'fx';
              var n = o.queue(e, t),
                i = n.shift();
              'inprogress' === i && (i = n.shift()),
                i &&
                  ('fx' === t && n.unshift('inprogress'),
                  i.call(e, function () {
                    o.dequeue(e, t);
                  }));
            },
          }),
          o.fn.extend({
            queue: function queue(e, t) {
              return (
                'string' != typeof e && ((t = e), (e = 'fx')),
                void 0 === t
                  ? o.queue(this[0], e)
                  : this.each(function (n) {
                      var i = o.queue(this, e, t);
                      'fx' === e && 'inprogress' !== i[0] && o.dequeue(this, e);
                    })
              );
            },
            dequeue: function dequeue(e) {
              return this.each(function () {
                o.dequeue(this, e);
              });
            },
            delay: function delay(e, t) {
              return (
                (e = (o.fx && o.fx.speeds[e]) || e),
                (t = t || 'fx'),
                this.queue(t, function () {
                  var n = this;
                  setTimeout(function () {
                    o.dequeue(n, t);
                  }, e);
                })
              );
            },
            clearQueue: function clearQueue(e) {
              return this.queue(e || 'fx', []);
            },
          });
        var s = /[\n\t]/g,
          l = /\s+/,
          c = /\r/g,
          p = /^(?:href|src|style)$/,
          d = /^(?:button|input)$/i,
          u = /^(?:button|input|object|select|textarea)$/i,
          m = /^a(?:rea)?$/i,
          h = /^(?:radio|checkbox)$/i;
        (o.props = {
          for: 'htmlFor',
          class: 'className',
          readonly: 'readOnly',
          maxlength: 'maxLength',
          cellspacing: 'cellSpacing',
          rowspan: 'rowSpan',
          colspan: 'colSpan',
          tabindex: 'tabIndex',
          usemap: 'useMap',
          frameborder: 'frameBorder',
        }),
          o.fn.extend({
            attr: function attr(e, t) {
              return o.access(this, e, t, !0, o.attr);
            },
            removeAttr: function removeAttr(e, t) {
              return this.each(function () {
                o.attr(this, e, ''),
                  1 === this.nodeType && this.removeAttribute(e);
              });
            },
            addClass: function addClass(e) {
              if (o.isFunction(e))
                return this.each(function (t) {
                  var n = o(this);
                  n.addClass(e.call(this, t, n.attr('class')));
                });
              if (e && 'string' == typeof e)
                for (
                  var t = (e || '').split(l), n = 0, i = this.length;
                  n < i;
                  n++
                ) {
                  var a = this[n];
                  if (1 === a.nodeType)
                    if (a.className) {
                      for (
                        var r = ' ' + a.className + ' ',
                          s = a.className,
                          c = 0,
                          p = t.length;
                        c < p;
                        c++
                      )
                        r.indexOf(' ' + t[c] + ' ') < 0 && (s += ' ' + t[c]);
                      a.className = o.trim(s);
                    } else a.className = e;
                }
              return this;
            },
            removeClass: function removeClass(e) {
              if (o.isFunction(e))
                return this.each(function (t) {
                  var n = o(this);
                  n.removeClass(e.call(this, t, n.attr('class')));
                });
              if ((e && 'string' == typeof e) || void 0 === e)
                for (
                  var t = (e || '').split(l), n = 0, i = this.length;
                  n < i;
                  n++
                ) {
                  var a = this[n];
                  if (1 === a.nodeType && a.className)
                    if (e) {
                      for (
                        var r = (' ' + a.className + ' ').replace(s, ' '),
                          c = 0,
                          p = t.length;
                        c < p;
                        c++
                      )
                        r = r.replace(' ' + t[c] + ' ', ' ');
                      a.className = o.trim(r);
                    } else a.className = '';
                }
              return this;
            },
            toggleClass: function toggleClass(e, t) {
              var n = _typeof(e),
                i = 'boolean' == typeof t;
              return o.isFunction(e)
                ? this.each(function (n) {
                    var i = o(this);
                    i.toggleClass(e.call(this, n, i.attr('class'), t), t);
                  })
                : this.each(function () {
                    if ('string' === n)
                      for (
                        var a, r = 0, s = o(this), c = t, p = e.split(l);
                        (a = p[r++]);

                      )
                        (c = i ? c : !s.hasClass(a)),
                          s[c ? 'addClass' : 'removeClass'](a);
                    else
                      ('undefined' !== n && 'boolean' !== n) ||
                        (this.className &&
                          o.data(this, '__className__', this.className),
                        (this.className =
                          this.className || !1 === e
                            ? ''
                            : o.data(this, '__className__') || ''));
                  });
            },
            hasClass: function hasClass(e) {
              for (var t = ' ' + e + ' ', n = 0, o = this.length; n < o; n++)
                if (
                  (' ' + this[n].className + ' ').replace(s, ' ').indexOf(t) >
                  -1
                )
                  return !0;
              return !1;
            },
            val: function val(e) {
              if (arguments.length) {
                var t = o.isFunction(e);
                return this.each(function (n) {
                  var i = o(this),
                    a = e;
                  if (1 === this.nodeType)
                    if (
                      (t && (a = e.call(this, n, i.val())),
                      null == a
                        ? (a = '')
                        : 'number' == typeof a
                        ? (a += '')
                        : o.isArray(a) &&
                          (a = o.map(a, function (e) {
                            return null == e ? '' : e + '';
                          })),
                      o.isArray(a) && h.test(this.type))
                    )
                      this.checked = o.inArray(i.val(), a) >= 0;
                    else if (o.nodeName(this, 'select')) {
                      var r = o.makeArray(a);
                      o('option', this).each(function () {
                        this.selected = o.inArray(o(this).val(), r) >= 0;
                      }),
                        r.length || (this.selectedIndex = -1);
                    } else this.value = a;
                });
              }
              var n = this[0];
              if (n) {
                if (o.nodeName(n, 'option')) {
                  var i = n.attributes.value;
                  return !i || i.specified ? n.value : n.text;
                }
                if (o.nodeName(n, 'select')) {
                  var a = n.selectedIndex,
                    r = [],
                    s = n.options,
                    l = 'select-one' === n.type;
                  if (a < 0) return null;
                  for (
                    var p = l ? a : 0, d = l ? a + 1 : s.length;
                    p < d;
                    p++
                  ) {
                    var u = s[p];
                    if (
                      u.selected &&
                      (o.support.optDisabled
                        ? !u.disabled
                        : null === u.getAttribute('disabled')) &&
                      (!u.parentNode.disabled ||
                        !o.nodeName(u.parentNode, 'optgroup'))
                    ) {
                      if (((e = o(u).val()), l)) return e;
                      r.push(e);
                    }
                  }
                  return r;
                }
                return h.test(n.type) && !o.support.checkOn
                  ? null === n.getAttribute('value')
                    ? 'on'
                    : n.value
                  : (n.value || '').replace(c, '');
              }
            },
          }),
          o.extend({
            attrFn: {
              val: !0,
              css: !0,
              html: !0,
              text: !0,
              data: !0,
              width: !0,
              height: !0,
              offset: !0,
            },
            attr: function attr(e, t, n, i) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType) {
                if (i && t in o.attrFn) return o(e)[t](n);
                var a = 1 !== e.nodeType || !o.isXMLDoc(e),
                  r = void 0 !== n;
                t = (a && o.props[t]) || t;
                var s = p.test(t);
                if ('selected' === t && !o.support.optSelected) {
                  var l = e.parentNode;
                  l &&
                    (l.selectedIndex,
                    l.parentNode && l.parentNode.selectedIndex);
                }
                if ((t in e || void 0 !== e[t]) && a && !s) {
                  if (
                    (r &&
                      ('type' === t &&
                        d.test(e.nodeName) &&
                        e.parentNode &&
                        o.error("type property can't be changed"),
                      null === n
                        ? 1 === e.nodeType && e.removeAttribute(t)
                        : (e[t] = n)),
                    o.nodeName(e, 'form') && e.getAttributeNode(t))
                  )
                    return e.getAttributeNode(t).nodeValue;
                  if ('tabIndex' === t) {
                    var c = e.getAttributeNode('tabIndex');
                    return c && c.specified
                      ? c.value
                      : u.test(e.nodeName) || (m.test(e.nodeName) && e.href)
                      ? 0
                      : void 0;
                  }
                  return e[t];
                }
                if (!o.support.style && a && 'style' === t)
                  return r && (e.style.cssText = '' + n), e.style.cssText;
                if (
                  (r && e.setAttribute(t, '' + n),
                  e.attributes[t] || !e.hasAttribute || e.hasAttribute(t))
                ) {
                  var h =
                    !o.support.hrefNormalized && a && s
                      ? e.getAttribute(t, 2)
                      : e.getAttribute(t);
                  return null === h ? void 0 : h;
                }
              }
            },
          });
        var f = /\.(.*)$/,
          g = /^(?:textarea|input|select)$/i,
          v = /\./g,
          _ = / /g,
          y = /[^\w\s.|`]/g,
          b = function b(e) {
            return e.replace(y, '\\$&');
          },
          E = { focusin: 0, focusout: 0 };
        function w() {
          return !1;
        }
        function A() {
          return !0;
        }
        (o.event = {
          add: function add(t, n, i, a) {
            if (3 !== t.nodeType && 8 !== t.nodeType) {
              if (
                (o.isWindow(t) && t !== e && !t.frameElement && (t = e),
                !1 === i)
              )
                i = w;
              else if (!i) return;
              var r, s;
              i.handler && (i = (r = i).handler), i.guid || (i.guid = o.guid++);
              var l = o.data(t);
              if (l) {
                var c = t.nodeType ? 'events' : '__events__',
                  p = l[c],
                  _d2 = l.handle;
                'function' == typeof p
                  ? ((_d2 = p.handle), (p = p.events))
                  : p ||
                    (t.nodeType || (l[c] = l = function l() {}),
                    (l.events = p = {})),
                  _d2 ||
                    (l.handle = _d2 =
                      function d() {
                        return void 0 === o || o.event.triggered
                          ? void 0
                          : o.event.handle.apply(_d2.elem, arguments);
                      }),
                  (_d2.elem = t),
                  (n = n.split(' '));
                for (var u, m, h = 0; (u = n[h++]); ) {
                  (s = r ? o.extend({}, r) : { handler: i, data: a }),
                    u.indexOf('.') > -1
                      ? ((m = u.split('.')),
                        (u = m.shift()),
                        (s.namespace = m.slice(0).sort().join('.')))
                      : ((m = []), (s.namespace = '')),
                    (s.type = u),
                    s.guid || (s.guid = i.guid);
                  var f = p[u],
                    g = o.event.special[u] || {};
                  f ||
                    ((f = p[u] = []),
                    (g.setup && !1 !== g.setup.call(t, a, m, _d2)) ||
                      (t.addEventListener
                        ? t.addEventListener(u, _d2, !1)
                        : t.attachEvent && t.attachEvent('on' + u, _d2))),
                    g.add &&
                      (g.add.call(t, s),
                      s.handler.guid || (s.handler.guid = i.guid)),
                    f.push(s),
                    (o.event.global[u] = !0);
                }
                t = null;
              }
            }
          },
          global: {},
          remove: function remove(e, t, n, i) {
            if (3 !== e.nodeType && 8 !== e.nodeType) {
              !1 === n && (n = w);
              var a,
                r,
                s,
                l,
                c,
                p,
                d,
                u,
                m,
                h = 0,
                f = e.nodeType ? 'events' : '__events__',
                g = o.data(e),
                v = g && g[f];
              if (g && v)
                if (
                  ('function' == typeof v && ((g = v), (v = v.events)),
                  t && t.type && ((n = t.handler), (t = t.type)),
                  !t || ('string' == typeof t && '.' === t.charAt(0)))
                )
                  for (a in ((t = t || ''), v)) o.event.remove(e, a + t);
                else {
                  for (t = t.split(' '); (a = t[h++]); )
                    if (
                      ((m = a),
                      (u = null),
                      (l = []),
                      (s = a.indexOf('.') < 0) ||
                        ((l = a.split('.')),
                        (a = l.shift()),
                        (c = new RegExp(
                          '(^|\\.)' +
                            o.map(l.slice(0).sort(), b).join('\\.(?:.*\\.)?') +
                            '(\\.|$)'
                        ))),
                      (d = v[a]))
                    )
                      if (n) {
                        for (
                          p = o.event.special[a] || {}, r = i || 0;
                          r < d.length &&
                          ((u = d[r]),
                          n.guid !== u.guid ||
                            ((s || c.test(u.namespace)) &&
                              (null == i && d.splice(r--, 1),
                              p.remove && p.remove.call(e, u)),
                            null == i));
                          r++
                        );
                        (0 === d.length || (null != i && 1 === d.length)) &&
                          ((p.teardown && !1 !== p.teardown.call(e, l)) ||
                            o.removeEvent(e, a, g.handle),
                          null,
                          delete v[a]);
                      } else
                        for (r = 0; r < d.length; r++)
                          (u = d[r]),
                            (s || c.test(u.namespace)) &&
                              (o.event.remove(e, m, u.handler, r),
                              d.splice(r--, 1));
                  if (o.isEmptyObject(v)) {
                    var _ = g.handle;
                    _ && (_.elem = null),
                      delete g.events,
                      delete g.handle,
                      'function' == typeof g
                        ? o.removeData(e, f)
                        : o.isEmptyObject(g) && o.removeData(e);
                  }
                }
            }
          },
          trigger: function trigger(e, t, n) {
            var i = e.type || e,
              a = arguments[3];
            if (!a) {
              if (
                ((e =
                  'object' == _typeof(e)
                    ? e[o.expando]
                      ? e
                      : o.extend(o.Event(i), e)
                    : o.Event(i)),
                i.indexOf('!') >= 0 &&
                  ((e.type = i = i.slice(0, -1)), (e.exclusive = !0)),
                n ||
                  (e.stopPropagation(),
                  o.event.global[i] &&
                    o.each(o.cache, function () {
                      this.events &&
                        this.events[i] &&
                        o.event.trigger(e, t, this.handle.elem);
                    })),
                !n || 3 === n.nodeType || 8 === n.nodeType)
              )
                return;
              (e.result = void 0),
                (e.target = n),
                (t = o.makeArray(t)).unshift(e);
            }
            e.currentTarget = n;
            var r = n.nodeType
              ? o.data(n, 'handle')
              : (o.data(n, '__events__') || {}).handle;
            r && r.apply(n, t);
            var s = n.parentNode || n.ownerDocument;
            try {
              (n && n.nodeName && o.noData[n.nodeName.toLowerCase()]) ||
                (n['on' + i] &&
                  !1 === n['on' + i].apply(n, t) &&
                  ((e.result = !1), e.preventDefault()));
            } catch (e) {}
            if (!e.isPropagationStopped() && s) o.event.trigger(e, t, s, !0);
            else if (!e.isDefaultPrevented()) {
              var l,
                c = e.target,
                p = i.replace(f, ''),
                d = o.nodeName(c, 'a') && 'click' === p,
                u = o.event.special[p] || {};
              if (
                !(
                  (u._default && !1 !== u._default.call(n, e)) ||
                  d ||
                  (c && c.nodeName && o.noData[c.nodeName.toLowerCase()])
                )
              ) {
                try {
                  c[p] &&
                    ((l = c['on' + p]) && (c['on' + p] = null),
                    (o.event.triggered = !0),
                    c[p]());
                } catch (e) {}
                l && (c['on' + p] = l), (o.event.triggered = !1);
              }
            }
          },
          handle: function handle(t) {
            var n,
              i,
              a,
              r,
              s,
              l = [],
              c = o.makeArray(arguments);
            if (
              (((t = c[0] = o.event.fix(t || e.event)).currentTarget = this),
              (n = t.type.indexOf('.') < 0 && !t.exclusive) ||
                ((a = t.type.split('.')),
                (t.type = a.shift()),
                (l = a.slice(0).sort()),
                (r = new RegExp(
                  '(^|\\.)' + l.join('\\.(?:.*\\.)?') + '(\\.|$)'
                ))),
              (t.namespace = t.namespace || l.join('.')),
              'function' ==
                typeof (s = o.data(
                  this,
                  this.nodeType ? 'events' : '__events__'
                )) && (s = s.events),
              (i = (s || {})[t.type]),
              s && i)
            )
              for (var p = 0, d = (i = i.slice(0)).length; p < d; p++) {
                var u = i[p];
                if (n || r.test(u.namespace)) {
                  (t.handler = u.handler), (t.data = u.data), (t.handleObj = u);
                  var m = u.handler.apply(this, c);
                  if (
                    (void 0 !== m &&
                      ((t.result = m),
                      !1 === m && (t.preventDefault(), t.stopPropagation())),
                    t.isImmediatePropagationStopped())
                  )
                    break;
                }
              }
            return t.result;
          },
          props:
            'altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which'.split(
              ' '
            ),
          fix: function fix(e) {
            if (e[o.expando]) return e;
            var t = e;
            e = o.Event(t);
            for (var i, a = this.props.length; a; )
              e[(i = this.props[--a])] = t[i];
            if (
              (e.target || (e.target = e.srcElement || n),
              3 === e.target.nodeType && (e.target = e.target.parentNode),
              !e.relatedTarget &&
                e.fromElement &&
                (e.relatedTarget =
                  e.fromElement === e.target ? e.toElement : e.fromElement),
              null == e.pageX && null != e.clientX)
            ) {
              var r = n.documentElement,
                s = n.body;
              (e.pageX =
                e.clientX +
                ((r && r.scrollLeft) || (s && s.scrollLeft) || 0) -
                ((r && r.clientLeft) || (s && s.clientLeft) || 0)),
                (e.pageY =
                  e.clientY +
                  ((r && r.scrollTop) || (s && s.scrollTop) || 0) -
                  ((r && r.clientTop) || (s && s.clientTop) || 0));
            }
            return (
              null != e.which ||
                (null == e.charCode && null == e.keyCode) ||
                (e.which = null != e.charCode ? e.charCode : e.keyCode),
              !e.metaKey && e.ctrlKey && (e.metaKey = e.ctrlKey),
              e.which ||
                void 0 === e.button ||
                (e.which =
                  1 & e.button ? 1 : 2 & e.button ? 3 : 4 & e.button ? 2 : 0),
              e
            );
          },
          guid: 1e8,
          proxy: o.proxy,
          special: {
            ready: { setup: o.bindReady, teardown: o.noop },
            live: {
              add: function add(e) {
                o.event.add(
                  this,
                  P(e.origType, e.selector),
                  o.extend({}, e, { handler: O, guid: e.handler.guid })
                );
              },
              remove: function remove(e) {
                o.event.remove(this, P(e.origType, e.selector), e);
              },
            },
            beforeunload: {
              setup: function setup(e, t, n) {
                o.isWindow(this) && (this.onbeforeunload = n);
              },
              teardown: function teardown(e, t) {
                this.onbeforeunload === t && (this.onbeforeunload = null);
              },
            },
          },
        }),
          (o.removeEvent = n.removeEventListener
            ? function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1);
              }
            : function (e, t, n) {
                e.detachEvent && e.detachEvent('on' + t, n);
              }),
          (o.Event = function (e) {
            if (!this.preventDefault) return new o.Event(e);
            e && e.type
              ? ((this.originalEvent = e), (this.type = e.type))
              : (this.type = e),
              (this.timeStamp = o.now()),
              (this[o.expando] = !0);
          }),
          (o.Event.prototype = {
            preventDefault: function preventDefault() {
              this.isDefaultPrevented = A;
              var e = this.originalEvent;
              e &&
                (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
            },
            stopPropagation: function stopPropagation() {
              this.isPropagationStopped = A;
              var e = this.originalEvent;
              e &&
                (e.stopPropagation && e.stopPropagation(),
                (e.cancelBubble = !0));
            },
            stopImmediatePropagation: function stopImmediatePropagation() {
              (this.isImmediatePropagationStopped = A), this.stopPropagation();
            },
            isDefaultPrevented: w,
            isPropagationStopped: w,
            isImmediatePropagationStopped: w,
          });
        var T = function T(e) {
            var t = e.relatedTarget;
            try {
              for (; t && t !== this; ) t = t.parentNode;
              t !== this &&
                ((e.type = e.data), o.event.handle.apply(this, arguments));
            } catch (e) {}
          },
          S = function S(e) {
            (e.type = e.data), o.event.handle.apply(this, arguments);
          };
        if (
          (o.each(
            { mouseenter: 'mouseover', mouseleave: 'mouseout' },
            function (e, t) {
              o.event.special[e] = {
                setup: function setup(n) {
                  o.event.add(this, t, n && n.selector ? S : T, e);
                },
                teardown: function teardown(e) {
                  o.event.remove(this, t, e && e.selector ? S : T);
                },
              };
            }
          ),
          o.support.submitBubbles ||
            (o.event.special.submit = {
              setup: function setup(e, t) {
                if ('form' === this.nodeName.toLowerCase()) return !1;
                o.event.add(this, 'click.specialSubmit', function (e) {
                  var t = e.target,
                    n = t.type;
                  if (
                    ('submit' === n || 'image' === n) &&
                    o(t).closest('form').length
                  )
                    return (e.liveFired = void 0), k('submit', this, arguments);
                }),
                  o.event.add(this, 'keypress.specialSubmit', function (e) {
                    var t = e.target,
                      n = t.type;
                    if (
                      ('text' === n || 'password' === n) &&
                      o(t).closest('form').length &&
                      13 === e.keyCode
                    )
                      return (
                        (e.liveFired = void 0), k('submit', this, arguments)
                      );
                  });
              },
              teardown: function teardown(e) {
                o.event.remove(this, '.specialSubmit');
              },
            }),
          !o.support.changeBubbles)
        ) {
          var C,
            x = function x(e) {
              var t = e.type,
                n = e.value;
              return (
                'radio' === t || 'checkbox' === t
                  ? (n = e.checked)
                  : 'select-multiple' === t
                  ? (n =
                      e.selectedIndex > -1
                        ? o
                            .map(e.options, function (e) {
                              return e.selected;
                            })
                            .join('-')
                        : '')
                  : 'select' === e.nodeName.toLowerCase() &&
                    (n = e.selectedIndex),
                n
              );
            },
            L = function L(e) {
              var t,
                n,
                i = e.target;
              if (
                g.test(i.nodeName) &&
                !i.readOnly &&
                ((t = o.data(i, '_change_data')),
                (n = x(i)),
                ('focusout' === e.type && 'radio' === i.type) ||
                  o.data(i, '_change_data', n),
                void 0 !== t && n !== t)
              )
                return null != t || n
                  ? ((e.type = 'change'),
                    (e.liveFired = void 0),
                    o.event.trigger(e, arguments[1], i))
                  : void 0;
            };
          (o.event.special.change = {
            filters: {
              focusout: L,
              beforedeactivate: L,
              click: function click(e) {
                var t = e.target,
                  n = t.type;
                if (
                  'radio' === n ||
                  'checkbox' === n ||
                  'select' === t.nodeName.toLowerCase()
                )
                  return L.call(this, e);
              },
              keydown: function keydown(e) {
                var t = e.target,
                  n = t.type;
                if (
                  (13 === e.keyCode &&
                    'textarea' !== t.nodeName.toLowerCase()) ||
                  (32 === e.keyCode && ('checkbox' === n || 'radio' === n)) ||
                  'select-multiple' === n
                )
                  return L.call(this, e);
              },
              beforeactivate: function beforeactivate(e) {
                var t = e.target;
                o.data(t, '_change_data', x(t));
              },
            },
            setup: function setup(e, t) {
              if ('file' === this.type) return !1;
              for (var n in C) o.event.add(this, n + '.specialChange', C[n]);
              return g.test(this.nodeName);
            },
            teardown: function teardown(e) {
              return (
                o.event.remove(this, '.specialChange'), g.test(this.nodeName)
              );
            },
          }),
            ((C = o.event.special.change.filters).focus = C.beforeactivate);
        }
        function k(e, t, n) {
          return (n[0].type = e), o.event.handle.apply(t, n);
        }
        n.addEventListener &&
          o.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
            function i(e) {
              return (
                ((e = o.event.fix(e)).type = t),
                o.event.trigger(e, null, e.target)
              );
            }
            o.event.special[t] = {
              setup: function setup() {
                0 == E[t]++ && n.addEventListener(e, i, !0);
              },
              teardown: function teardown() {
                0 == --E[t] && n.removeEventListener(e, i, !0);
              },
            };
          }),
          o.each(['bind', 'one'], function (e, t) {
            o.fn[t] = function (e, n, i) {
              if ('object' == _typeof(e)) {
                for (var a in e) this[t](a, n, e[a], i);
                return this;
              }
              (o.isFunction(n) || !1 === n) && ((i = n), (n = void 0));
              var r =
                'one' === t
                  ? o.proxy(i, function (e) {
                      return o(this).unbind(e, r), i.apply(this, arguments);
                    })
                  : i;
              if ('unload' === e && 'one' !== t) this.one(e, n, i);
              else
                for (var s = 0, l = this.length; s < l; s++)
                  o.event.add(this[s], e, r, n);
              return this;
            };
          }),
          o.fn.extend({
            unbind: function unbind(e, t) {
              if ('object' != _typeof(e) || e.preventDefault)
                for (var n = 0, i = this.length; n < i; n++)
                  o.event.remove(this[n], e, t);
              else for (var a in e) this.unbind(a, e[a]);
              return this;
            },
            delegate: function delegate(e, t, n, o) {
              return this.live(t, n, o, e);
            },
            undelegate: function undelegate(e, t, n) {
              return 0 === arguments.length
                ? this.unbind('live')
                : this.die(t, null, n, e);
            },
            trigger: function trigger(e, t) {
              return this.each(function () {
                o.event.trigger(e, t, this);
              });
            },
            triggerHandler: function triggerHandler(e, t) {
              if (this[0]) {
                var n = o.Event(e);
                return (
                  n.preventDefault(),
                  n.stopPropagation(),
                  o.event.trigger(n, t, this[0]),
                  n.result
                );
              }
            },
            toggle: function toggle(e) {
              for (var t = arguments, n = 1; n < t.length; ) o.proxy(e, t[n++]);
              return this.click(
                o.proxy(e, function (i) {
                  var a = (o.data(this, 'lastToggle' + e.guid) || 0) % n;
                  return (
                    o.data(this, 'lastToggle' + e.guid, a + 1),
                    i.preventDefault(),
                    t[a].apply(this, arguments) || !1
                  );
                })
              );
            },
            hover: function hover(e, t) {
              return this.mouseenter(e).mouseleave(t || e);
            },
          });
        var I = {
          focus: 'focusin',
          blur: 'focusout',
          mouseenter: 'mouseover',
          mouseleave: 'mouseout',
        };
        function O(e) {
          var t,
            n,
            i,
            a,
            r,
            s,
            l,
            c,
            p,
            d,
            u,
            m,
            h = [],
            g = [],
            v = o.data(this, this.nodeType ? 'events' : '__events__');
          if (
            ('function' == typeof v && (v = v.events),
            e.liveFired !== this &&
              v &&
              v.live &&
              (!e.button || 'click' !== e.type))
          ) {
            e.namespace &&
              (u = new RegExp(
                '(^|\\.)' +
                  e.namespace.split('.').join('\\.(?:.*\\.)?') +
                  '(\\.|$)'
              )),
              (e.liveFired = this);
            var _ = v.live.slice(0);
            for (l = 0; l < _.length; l++)
              (r = _[l]).origType.replace(f, '') === e.type
                ? g.push(r.selector)
                : _.splice(l--, 1);
            for (
              c = 0, p = (a = o(e.target).closest(g, e.currentTarget)).length;
              c < p;
              c++
            )
              for (d = a[c], l = 0; l < _.length; l++)
                (r = _[l]),
                  d.selector !== r.selector ||
                    (u && !u.test(r.namespace)) ||
                    ((s = d.elem),
                    (i = null),
                    ('mouseenter' !== r.preType &&
                      'mouseleave' !== r.preType) ||
                      ((e.type = r.preType),
                      (i = o(e.relatedTarget).closest(r.selector)[0])),
                    (i && i === s) ||
                      h.push({ elem: s, handleObj: r, level: d.level }));
            for (
              c = 0, p = h.length;
              c < p &&
              ((a = h[c]), !(n && a.level > n)) &&
              ((e.currentTarget = a.elem),
              (e.data = a.handleObj.data),
              (e.handleObj = a.handleObj),
              (!1 !== (m = a.handleObj.origHandler.apply(a.elem, arguments)) &&
                !e.isPropagationStopped()) ||
                ((n = a.level),
                !1 === m && (t = !1),
                !e.isImmediatePropagationStopped()));
              c++
            );
            return t;
          }
        }
        function P(e, t) {
          return (
            (e && '*' !== e ? e + '.' : '') + t.replace(v, '`').replace(_, '&')
          );
        }
        o.each(['live', 'die'], function (e, t) {
          o.fn[t] = function (e, n, i, a) {
            var r,
              s,
              l,
              c,
              p = 0,
              d = a || this.selector,
              u = a ? this : o(this.context);
            if ('object' == _typeof(e) && !e.preventDefault) {
              for (var m in e) u[t](m, n, e[m], d);
              return this;
            }
            for (
              o.isFunction(n) && ((i = n), (n = void 0)),
                e = (e || '').split(' ');
              null != (r = e[p++]);

            )
              if (
                ((l = ''),
                (s = f.exec(r)) && ((l = s[0]), (r = r.replace(f, ''))),
                'hover' !== r)
              ) {
                if (
                  ((c = r),
                  'focus' === r || 'blur' === r
                    ? (e.push(I[r] + l), (r += l))
                    : (r = (I[r] || r) + l),
                  'live' === t)
                )
                  for (var h = 0, g = u.length; h < g; h++)
                    o.event.add(u[h], 'live.' + P(r, d), {
                      data: n,
                      selector: d,
                      handler: i,
                      origType: r,
                      origHandler: i,
                      preType: c,
                    });
                else u.unbind('live.' + P(r, d), i);
              } else e.push('mouseenter' + l, 'mouseleave' + l);
            return this;
          };
        }),
          o.each(
            'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error'.split(
              ' '
            ),
            function (e, t) {
              (o.fn[t] = function (e, n) {
                return (
                  null == n && ((n = e), (e = null)),
                  arguments.length > 0 ? this.bind(t, e, n) : this.trigger(t)
                );
              }),
                o.attrFn && (o.attrFn[t] = !0);
            }
          ),
          e.attachEvent &&
            !e.addEventListener &&
            o(e).bind('unload', function () {
              for (var e in o.cache)
                if (o.cache[e].handle)
                  try {
                    o.event.remove(o.cache[e].handle.elem);
                  } catch (e) {}
            }),
          (function () {
            var e =
                /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
              t = 0,
              i = Object.prototype.toString,
              a = !1,
              r = !0;
            [0, 0].sort(function () {
              return (r = !1), 0;
            });
            var _s3 = function s(t, o, a, r) {
              a = a || [];
              var p = (o = o || n);
              if (1 !== o.nodeType && 9 !== o.nodeType) return [];
              if (!t || 'string' != typeof t) return a;
              var d,
                u,
                m,
                h,
                g,
                v,
                y,
                b,
                E = !0,
                w = _s3.isXML(o),
                A = [],
                T = t;
              do {
                if (
                  (e.exec(''),
                  (d = e.exec(T)) && ((T = d[3]), A.push(d[1]), d[2]))
                ) {
                  h = d[3];
                  break;
                }
              } while (d);
              if (A.length > 1 && c.exec(t)) {
                if (2 === A.length && l.relative[A[0]]) u = _(A[0] + A[1], o);
                else
                  for (
                    u = l.relative[A[0]] ? [o] : _s3(A.shift(), o);
                    A.length;

                  )
                    (t = A.shift()),
                      l.relative[t] && (t += A.shift()),
                      (u = _(t, u));
              } else if (
                (!r &&
                  A.length > 1 &&
                  9 === o.nodeType &&
                  !w &&
                  l.match.ID.test(A[0]) &&
                  !l.match.ID.test(A[A.length - 1]) &&
                  (o = (g = _s3.find(A.shift(), o, w)).expr
                    ? _s3.filter(g.expr, g.set)[0]
                    : g.set[0]),
                o)
              )
                for (
                  u = (g = r
                    ? { expr: A.pop(), set: f(r) }
                    : _s3.find(
                        A.pop(),
                        1 !== A.length ||
                          ('~' !== A[0] && '+' !== A[0]) ||
                          !o.parentNode
                          ? o
                          : o.parentNode,
                        w
                      )).expr
                    ? _s3.filter(g.expr, g.set)
                    : g.set,
                    A.length > 0 ? (m = f(u)) : (E = !1);
                  A.length;

                )
                  (y = v = A.pop()),
                    l.relative[v] ? (y = A.pop()) : (v = ''),
                    null == y && (y = o),
                    l.relative[v](m, y, w);
              else m = A = [];
              if (
                (m || (m = u),
                m || _s3.error(v || t),
                '[object Array]' === i.call(m))
              ) {
                if (E) {
                  if (o && 1 === o.nodeType)
                    for (b = 0; null != m[b]; b++)
                      m[b] &&
                        (!0 === m[b] ||
                          (1 === m[b].nodeType && _s3.contains(o, m[b]))) &&
                        a.push(u[b]);
                  else
                    for (b = 0; null != m[b]; b++)
                      m[b] && 1 === m[b].nodeType && a.push(u[b]);
                } else a.push.apply(a, m);
              } else f(m, a);
              return h && (_s3(h, p, a, r), _s3.uniqueSort(a)), a;
            };
            (_s3.uniqueSort = function (e) {
              if (u && ((a = r), e.sort(u), a))
                for (var t = 1; t < e.length; t++)
                  e[t] === e[t - 1] && e.splice(t--, 1);
              return e;
            }),
              (_s3.matches = function (e, t) {
                return _s3(e, null, null, t);
              }),
              (_s3.matchesSelector = function (e, t) {
                return _s3(t, null, null, [e]).length > 0;
              }),
              (_s3.find = function (e, t, n) {
                var o;
                if (!e) return [];
                for (var i = 0, a = l.order.length; i < a; i++) {
                  var r,
                    s = l.order[i];
                  if ((r = l.leftMatch[s].exec(e))) {
                    var c = r[1];
                    if (
                      (r.splice(1, 1),
                      '\\' !== c.substr(c.length - 1) &&
                        ((r[1] = (r[1] || '').replace(/\\/g, '')),
                        null != (o = l.find[s](r, t, n))))
                    ) {
                      e = e.replace(l.match[s], '');
                      break;
                    }
                  }
                }
                return (
                  o || (o = t.getElementsByTagName('*')), { set: o, expr: e }
                );
              }),
              (_s3.filter = function (e, t, n, o) {
                for (
                  var i,
                    a,
                    r = e,
                    c = [],
                    p = t,
                    d = t && t[0] && _s3.isXML(t[0]);
                  e && t.length;

                ) {
                  for (var u in l.filter)
                    if (null != (i = l.leftMatch[u].exec(e)) && i[2]) {
                      var m,
                        h,
                        f = l.filter[u],
                        g = i[1];
                      if (
                        ((a = !1),
                        i.splice(1, 1),
                        '\\' === g.substr(g.length - 1))
                      )
                        continue;
                      if ((p === c && (c = []), l.preFilter[u]))
                        if ((i = l.preFilter[u](i, p, n, c, o, d))) {
                          if (!0 === i) continue;
                        } else a = m = !0;
                      if (i)
                        for (var v = 0; null != (h = p[v]); v++)
                          if (h) {
                            var _ = o ^ !!(m = f(h, i, v, p));
                            n && null != m
                              ? _
                                ? (a = !0)
                                : (p[v] = !1)
                              : _ && (c.push(h), (a = !0));
                          }
                      if (void 0 !== m) {
                        if ((n || (p = c), (e = e.replace(l.match[u], '')), !a))
                          return [];
                        break;
                      }
                    }
                  if (e === r) {
                    if (null != a) break;
                    _s3.error(e);
                  }
                  r = e;
                }
                return p;
              }),
              (_s3.error = function (e) {
                throw 'Syntax error, unrecognized expression: ' + e;
              });
            var l = (_s3.selectors = {
                order: ['ID', 'NAME', 'TAG'],
                match: {
                  ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                  CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                  NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                  ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                  TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                  CHILD:
                    /:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
                  POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                  PSEUDO:
                    /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/,
                },
                leftMatch: {},
                attrMap: { class: 'className', for: 'htmlFor' },
                attrHandle: {
                  href: function href(e) {
                    return e.getAttribute('href');
                  },
                },
                relative: {
                  '+': function _(e, t) {
                    var n = 'string' == typeof t,
                      o = n && !/\W/.test(t),
                      i = n && !o;
                    o && (t = t.toLowerCase());
                    for (var a, r = 0, l = e.length; r < l; r++)
                      if ((a = e[r])) {
                        for (; (a = a.previousSibling) && 1 !== a.nodeType; );
                        e[r] =
                          i || (a && a.nodeName.toLowerCase() === t)
                            ? a || !1
                            : a === t;
                      }
                    i && _s3.filter(t, e, !0);
                  },
                  '>': function _(e, t) {
                    var n,
                      o = 'string' == typeof t,
                      i = 0,
                      a = e.length;
                    if (o && !/\W/.test(t)) {
                      for (t = t.toLowerCase(); i < a; i++)
                        if ((n = e[i])) {
                          var r = n.parentNode;
                          e[i] = r.nodeName.toLowerCase() === t && r;
                        }
                    } else {
                      for (; i < a; i++)
                        (n = e[i]) &&
                          (e[i] = o ? n.parentNode : n.parentNode === t);
                      o && _s3.filter(t, e, !0);
                    }
                  },
                  '': function _(e, n, o) {
                    var i,
                      a = t++,
                      r = v;
                    'string' != typeof n ||
                      /\W/.test(n) ||
                      ((i = n = n.toLowerCase()), (r = g)),
                      r('parentNode', n, a, e, i, o);
                  },
                  '~': function _(e, n, o) {
                    var i,
                      a = t++,
                      r = v;
                    'string' != typeof n ||
                      /\W/.test(n) ||
                      ((i = n = n.toLowerCase()), (r = g)),
                      r('previousSibling', n, a, e, i, o);
                  },
                },
                find: {
                  ID: function ID(e, t, n) {
                    if (void 0 !== t.getElementById && !n) {
                      var o = t.getElementById(e[1]);
                      return o && o.parentNode ? [o] : [];
                    }
                  },
                  NAME: function NAME(e, t) {
                    if (void 0 !== t.getElementsByName) {
                      for (
                        var n = [],
                          o = t.getElementsByName(e[1]),
                          i = 0,
                          a = o.length;
                        i < a;
                        i++
                      )
                        o[i].getAttribute('name') === e[1] && n.push(o[i]);
                      return 0 === n.length ? null : n;
                    }
                  },
                  TAG: function TAG(e, t) {
                    return t.getElementsByTagName(e[1]);
                  },
                },
                preFilter: {
                  CLASS: function CLASS(e, t, n, o, i, a) {
                    if (((e = ' ' + e[1].replace(/\\/g, '') + ' '), a))
                      return e;
                    for (var r, s = 0; null != (r = t[s]); s++)
                      r &&
                        (i ^
                        (r.className &&
                          (' ' + r.className + ' ')
                            .replace(/[\t\n]/g, ' ')
                            .indexOf(e) >= 0)
                          ? n || o.push(r)
                          : n && (t[s] = !1));
                    return !1;
                  },
                  ID: function ID(e) {
                    return e[1].replace(/\\/g, '');
                  },
                  TAG: function TAG(e, t) {
                    return e[1].toLowerCase();
                  },
                  CHILD: function CHILD(e) {
                    if ('nth' === e[1]) {
                      var n = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(
                        ('even' === e[2] ? '2n' : 'odd' === e[2] && '2n+1') ||
                          (!/\D/.test(e[2]) && '0n+' + e[2]) ||
                          e[2]
                      );
                      (e[2] = n[1] + (n[2] || 1) - 0), (e[3] = n[3] - 0);
                    }
                    return (e[0] = t++), e;
                  },
                  ATTR: function ATTR(e, t, n, o, i, a) {
                    var r = e[1].replace(/\\/g, '');
                    return (
                      !a && l.attrMap[r] && (e[1] = l.attrMap[r]),
                      '~=' === e[2] && (e[4] = ' ' + e[4] + ' '),
                      e
                    );
                  },
                  PSEUDO: function PSEUDO(t, n, o, i, a) {
                    if ('not' === t[1]) {
                      if (
                        !((e.exec(t[3]) || '').length > 1 || /^\w/.test(t[3]))
                      ) {
                        var r = _s3.filter(t[3], n, o, !0 ^ a);
                        return o || i.push.apply(i, r), !1;
                      }
                      t[3] = _s3(t[3], null, null, n);
                    } else if (
                      l.match.POS.test(t[0]) ||
                      l.match.CHILD.test(t[0])
                    )
                      return !0;
                    return t;
                  },
                  POS: function POS(e) {
                    return e.unshift(!0), e;
                  },
                },
                filters: {
                  enabled: function enabled(e) {
                    return !1 === e.disabled && 'hidden' !== e.type;
                  },
                  disabled: function disabled(e) {
                    return !0 === e.disabled;
                  },
                  checked: function checked(e) {
                    return !0 === e.checked;
                  },
                  selected: function selected(e) {
                    return e.parentNode.selectedIndex, !0 === e.selected;
                  },
                  parent: function parent(e) {
                    return !!e.firstChild;
                  },
                  empty: function empty(e) {
                    return !e.firstChild;
                  },
                  has: function has(e, t, n) {
                    return !!_s3(n[3], e).length;
                  },
                  header: function header(e) {
                    return /h\d/i.test(e.nodeName);
                  },
                  text: function text(e) {
                    return 'text' === e.type;
                  },
                  radio: function radio(e) {
                    return 'radio' === e.type;
                  },
                  checkbox: function checkbox(e) {
                    return 'checkbox' === e.type;
                  },
                  file: function file(e) {
                    return 'file' === e.type;
                  },
                  password: function password(e) {
                    return 'password' === e.type;
                  },
                  submit: function submit(e) {
                    return 'submit' === e.type;
                  },
                  image: function image(e) {
                    return 'image' === e.type;
                  },
                  reset: function reset(e) {
                    return 'reset' === e.type;
                  },
                  button: function button(e) {
                    return (
                      'button' === e.type ||
                      'button' === e.nodeName.toLowerCase()
                    );
                  },
                  input: function input(e) {
                    return /input|select|textarea|button/i.test(e.nodeName);
                  },
                },
                setFilters: {
                  first: function first(e, t) {
                    return 0 === t;
                  },
                  last: function last(e, t, n, o) {
                    return t === o.length - 1;
                  },
                  even: function even(e, t) {
                    return t % 2 == 0;
                  },
                  odd: function odd(e, t) {
                    return t % 2 == 1;
                  },
                  lt: function lt(e, t, n) {
                    return t < n[3] - 0;
                  },
                  gt: function gt(e, t, n) {
                    return t > n[3] - 0;
                  },
                  nth: function nth(e, t, n) {
                    return n[3] - 0 === t;
                  },
                  eq: function eq(e, t, n) {
                    return n[3] - 0 === t;
                  },
                },
                filter: {
                  PSEUDO: function PSEUDO(e, t, n, o) {
                    var i = t[1],
                      a = l.filters[i];
                    if (a) return a(e, n, t, o);
                    if ('contains' === i)
                      return (
                        (
                          e.textContent ||
                          e.innerText ||
                          _s3.getText([e]) ||
                          ''
                        ).indexOf(t[3]) >= 0
                      );
                    if ('not' === i) {
                      for (var r = t[3], c = 0, p = r.length; c < p; c++)
                        if (r[c] === e) return !1;
                      return !0;
                    }
                    _s3.error('Syntax error, unrecognized expression: ' + i);
                  },
                  CHILD: function CHILD(e, t) {
                    var n = t[1],
                      o = e;
                    switch (n) {
                      case 'only':
                      case 'first':
                        for (; (o = o.previousSibling); )
                          if (1 === o.nodeType) return !1;
                        if ('first' === n) return !0;
                        o = e;
                      case 'last':
                        for (; (o = o.nextSibling); )
                          if (1 === o.nodeType) return !1;
                        return !0;
                      case 'nth':
                        var i = t[2],
                          a = t[3];
                        if (1 === i && 0 === a) return !0;
                        var r = t[0],
                          s = e.parentNode;
                        if (s && (s.sizcache !== r || !e.nodeIndex)) {
                          var l = 0;
                          for (o = s.firstChild; o; o = o.nextSibling)
                            1 === o.nodeType && (o.nodeIndex = ++l);
                          s.sizcache = r;
                        }
                        var c = e.nodeIndex - a;
                        return 0 === i ? 0 === c : c % i == 0 && c / i >= 0;
                    }
                  },
                  ID: function ID(e, t) {
                    return 1 === e.nodeType && e.getAttribute('id') === t;
                  },
                  TAG: function TAG(e, t) {
                    return (
                      ('*' === t && 1 === e.nodeType) ||
                      e.nodeName.toLowerCase() === t
                    );
                  },
                  CLASS: function CLASS(e, t) {
                    return (
                      (
                        ' ' +
                        (e.className || e.getAttribute('class')) +
                        ' '
                      ).indexOf(t) > -1
                    );
                  },
                  ATTR: function ATTR(e, t) {
                    var n = t[1],
                      o = l.attrHandle[n]
                        ? l.attrHandle[n](e)
                        : null != e[n]
                        ? e[n]
                        : e.getAttribute(n),
                      i = o + '',
                      a = t[2],
                      r = t[4];
                    return null == o
                      ? '!=' === a
                      : '=' === a
                      ? i === r
                      : '*=' === a
                      ? i.indexOf(r) >= 0
                      : '~=' === a
                      ? (' ' + i + ' ').indexOf(r) >= 0
                      : r
                      ? '!=' === a
                        ? i !== r
                        : '^=' === a
                        ? 0 === i.indexOf(r)
                        : '$=' === a
                        ? i.substr(i.length - r.length) === r
                        : '|=' === a &&
                          (i === r || i.substr(0, r.length + 1) === r + '-')
                      : i && !1 !== o;
                  },
                  POS: function POS(e, t, n, o) {
                    var i = t[2],
                      a = l.setFilters[i];
                    if (a) return a(e, n, t, o);
                  },
                },
              }),
              c = l.match.POS,
              p = function p(e, t) {
                return '\\' + (t - 0 + 1);
              };
            for (var d in l.match)
              (l.match[d] = new RegExp(
                l.match[d].source + /(?![^\[]*\])(?![^\(]*\))/.source
              )),
                (l.leftMatch[d] = new RegExp(
                  /(^(?:.|\r|\n)*?)/.source +
                    l.match[d].source.replace(/\\(\d+)/g, p)
                ));
            var u,
              m,
              h,
              f = function f(e, t) {
                return (
                  (e = Array.prototype.slice.call(e, 0)),
                  t ? (t.push.apply(t, e), t) : e
                );
              };
            try {
              Array.prototype.slice.call(n.documentElement.childNodes, 0)[0]
                .nodeType;
            } catch (e) {
              f = function f(e, t) {
                var n = 0,
                  o = t || [];
                if ('[object Array]' === i.call(e))
                  Array.prototype.push.apply(o, e);
                else if ('number' == typeof e.length)
                  for (var a = e.length; n < a; n++) o.push(e[n]);
                else for (; e[n]; n++) o.push(e[n]);
                return o;
              };
            }
            function g(e, t, n, o, i, a) {
              for (var r = 0, s = o.length; r < s; r++) {
                var l = o[r];
                if (l) {
                  var c = !1;
                  for (l = l[e]; l; ) {
                    if (l.sizcache === n) {
                      c = o[l.sizset];
                      break;
                    }
                    if (
                      (1 !== l.nodeType ||
                        a ||
                        ((l.sizcache = n), (l.sizset = r)),
                      l.nodeName.toLowerCase() === t)
                    ) {
                      c = l;
                      break;
                    }
                    l = l[e];
                  }
                  o[r] = c;
                }
              }
            }
            function v(e, t, n, o, i, a) {
              for (var r = 0, l = o.length; r < l; r++) {
                var c = o[r];
                if (c) {
                  var p = !1;
                  for (c = c[e]; c; ) {
                    if (c.sizcache === n) {
                      p = o[c.sizset];
                      break;
                    }
                    if (1 === c.nodeType)
                      if (
                        (a || ((c.sizcache = n), (c.sizset = r)),
                        'string' != typeof t)
                      ) {
                        if (c === t) {
                          p = !0;
                          break;
                        }
                      } else if (_s3.filter(t, [c]).length > 0) {
                        p = c;
                        break;
                      }
                    c = c[e];
                  }
                  o[r] = p;
                }
              }
            }
            n.documentElement.compareDocumentPosition
              ? (u = function u(e, t) {
                  return e === t
                    ? ((a = !0), 0)
                    : e.compareDocumentPosition && t.compareDocumentPosition
                    ? 4 & e.compareDocumentPosition(t)
                      ? -1
                      : 1
                    : e.compareDocumentPosition
                    ? -1
                    : 1;
                })
              : ((u = function u(e, t) {
                  var n,
                    o,
                    i = [],
                    r = [],
                    s = e.parentNode,
                    l = t.parentNode,
                    c = s;
                  if (e === t) return (a = !0), 0;
                  if (s === l) return m(e, t);
                  if (!s) return -1;
                  if (!l) return 1;
                  for (; c; ) i.unshift(c), (c = c.parentNode);
                  for (c = l; c; ) r.unshift(c), (c = c.parentNode);
                  (n = i.length), (o = r.length);
                  for (var p = 0; p < n && p < o; p++)
                    if (i[p] !== r[p]) return m(i[p], r[p]);
                  return p === n ? m(e, r[p], -1) : m(i[p], t, 1);
                }),
                (m = function m(e, t, n) {
                  if (e === t) return n;
                  for (var o = e.nextSibling; o; ) {
                    if (o === t) return -1;
                    o = o.nextSibling;
                  }
                  return 1;
                })),
              (_s3.getText = function (e) {
                for (var t, n = '', o = 0; e[o]; o++)
                  3 === (t = e[o]).nodeType || 4 === t.nodeType
                    ? (n += t.nodeValue)
                    : 8 !== t.nodeType && (n += _s3.getText(t.childNodes));
                return n;
              }),
              (function () {
                var e = n.createElement('div'),
                  t = 'script' + new Date().getTime(),
                  o = n.documentElement;
                (e.innerHTML = "<a name='" + t + "'/>"),
                  o.insertBefore(e, o.firstChild),
                  n.getElementById(t) &&
                    ((l.find.ID = function (e, t, n) {
                      if (void 0 !== t.getElementById && !n) {
                        var o = t.getElementById(e[1]);
                        return o
                          ? o.id === e[1] ||
                            (void 0 !== o.getAttributeNode &&
                              o.getAttributeNode('id').nodeValue === e[1])
                            ? [o]
                            : void 0
                          : [];
                      }
                    }),
                    (l.filter.ID = function (e, t) {
                      var n =
                        void 0 !== e.getAttributeNode &&
                        e.getAttributeNode('id');
                      return 1 === e.nodeType && n && n.nodeValue === t;
                    })),
                  o.removeChild(e),
                  (o = e = null);
              })(),
              (h = n.createElement('div')).appendChild(n.createComment('')),
              h.getElementsByTagName('*').length > 0 &&
                (l.find.TAG = function (e, t) {
                  var n = t.getElementsByTagName(e[1]);
                  if ('*' === e[1]) {
                    for (var o = [], i = 0; n[i]; i++)
                      1 === n[i].nodeType && o.push(n[i]);
                    n = o;
                  }
                  return n;
                }),
              (h.innerHTML = "<a href='#'></a>"),
              h.firstChild &&
                void 0 !== h.firstChild.getAttribute &&
                '#' !== h.firstChild.getAttribute('href') &&
                (l.attrHandle.href = function (e) {
                  return e.getAttribute('href', 2);
                }),
              (h = null),
              n.querySelectorAll &&
                (function () {
                  var e = _s3,
                    t = n.createElement('div');
                  if (
                    ((t.innerHTML = "<p class='TEST'></p>"),
                    !t.querySelectorAll ||
                      0 !== t.querySelectorAll('.TEST').length)
                  ) {
                    for (var o in ((_s3 = function _s2(t, o, i, a) {
                      if (
                        ((o = o || n),
                        (t = t.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']")),
                        !a && !_s3.isXML(o))
                      )
                        if (9 === o.nodeType)
                          try {
                            return f(o.querySelectorAll(t), i);
                          } catch (e) {}
                        else if (
                          1 === o.nodeType &&
                          'object' !== o.nodeName.toLowerCase()
                        ) {
                          var r = o.getAttribute('id'),
                            l = r || '__sizzle__';
                          r || o.setAttribute('id', l);
                          try {
                            return f(o.querySelectorAll('#' + l + ' ' + t), i);
                          } catch (e) {
                          } finally {
                            r || o.removeAttribute('id');
                          }
                        }
                      return e(t, o, i, a);
                    }),
                    e))
                      _s3[o] = e[o];
                    t = null;
                  }
                })(),
              (function () {
                var e = n.documentElement,
                  t =
                    e.matchesSelector ||
                    e.mozMatchesSelector ||
                    e.webkitMatchesSelector ||
                    e.msMatchesSelector,
                  o = !1;
                try {
                  t.call(n.documentElement, "[test!='']:sizzle");
                } catch (e) {
                  o = !0;
                }
                t &&
                  (_s3.matchesSelector = function (e, n) {
                    if (
                      ((n = n.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']")),
                      !_s3.isXML(e))
                    )
                      try {
                        if (o || (!l.match.PSEUDO.test(n) && !/!=/.test(n)))
                          return t.call(e, n);
                      } catch (e) {}
                    return _s3(n, null, null, [e]).length > 0;
                  });
              })(),
              (function () {
                var e = n.createElement('div');
                (e.innerHTML =
                  "<div class='test e'></div><div class='test'></div>"),
                  e.getElementsByClassName &&
                    0 !== e.getElementsByClassName('e').length &&
                    ((e.lastChild.className = 'e'),
                    1 !== e.getElementsByClassName('e').length &&
                      (l.order.splice(1, 0, 'CLASS'),
                      (l.find.CLASS = function (e, t, n) {
                        if (void 0 !== t.getElementsByClassName && !n)
                          return t.getElementsByClassName(e[1]);
                      }),
                      (e = null)));
              })(),
              n.documentElement.contains
                ? (_s3.contains = function (e, t) {
                    return e !== t && (!e.contains || e.contains(t));
                  })
                : n.documentElement.compareDocumentPosition
                ? (_s3.contains = function (e, t) {
                    return !!(16 & e.compareDocumentPosition(t));
                  })
                : (_s3.contains = function () {
                    return !1;
                  }),
              (_s3.isXML = function (e) {
                var t = (e ? e.ownerDocument || e : 0).documentElement;
                return !!t && 'HTML' !== t.nodeName;
              });
            var _ = function _(e, t) {
              for (
                var n, o = [], i = '', a = t.nodeType ? [t] : t;
                (n = l.match.PSEUDO.exec(e));

              )
                (i += n[0]), (e = e.replace(l.match.PSEUDO, ''));
              e = l.relative[e] ? e + '*' : e;
              for (var r = 0, c = a.length; r < c; r++) _s3(e, a[r], o);
              return _s3.filter(i, o);
            };
            (o.find = _s3),
              (o.expr = _s3.selectors),
              (o.expr[':'] = o.expr.filters),
              (o.unique = _s3.uniqueSort),
              (o.text = _s3.getText),
              (o.isXMLDoc = _s3.isXML),
              (o.contains = _s3.contains);
          })();
        var M = /Until$/,
          N = /^(?:parents|prevUntil|prevAll)/,
          R = /,/,
          z = /^.[^:#\[\.,]*$/,
          B = Array.prototype.slice,
          D = o.expr.match.POS;
        function H(e) {
          return !e || !e.parentNode || 11 === e.parentNode.nodeType;
        }
        function F(e, t, n) {
          if (o.isFunction(t))
            return o.grep(e, function (e, o) {
              return !!t.call(e, o, e) === n;
            });
          if (t.nodeType)
            return o.grep(e, function (e, o) {
              return (e === t) === n;
            });
          if ('string' == typeof t) {
            var i = o.grep(e, function (e) {
              return 1 === e.nodeType;
            });
            if (z.test(t)) return o.filter(t, i, !n);
            t = o.filter(t, i);
          }
          return o.grep(e, function (e, i) {
            return o.inArray(e, t) >= 0 === n;
          });
        }
        o.fn.extend({
          find: function find(e) {
            for (
              var t = this.pushStack('', 'find', e),
                n = 0,
                i = 0,
                a = this.length;
              i < a;
              i++
            )
              if (((n = t.length), o.find(e, this[i], t), i > 0))
                for (var r = n; r < t.length; r++)
                  for (var s = 0; s < n; s++)
                    if (t[s] === t[r]) {
                      t.splice(r--, 1);
                      break;
                    }
            return t;
          },
          has: function has(e) {
            var t = o(e);
            return this.filter(function () {
              for (var e = 0, n = t.length; e < n; e++)
                if (o.contains(this, t[e])) return !0;
            });
          },
          not: function not(e) {
            return this.pushStack(F(this, e, !1), 'not', e);
          },
          filter: function filter(e) {
            return this.pushStack(F(this, e, !0), 'filter', e);
          },
          is: function is(e) {
            return !!e && o.filter(e, this).length > 0;
          },
          closest: function closest(e, t) {
            var n,
              i,
              a = [],
              r = this[0];
            if (o.isArray(e)) {
              var s,
                l,
                c = {},
                p = 1;
              if (r && e.length) {
                for (n = 0, i = e.length; n < i; n++)
                  c[(l = e[n])] ||
                    (c[l] = o.expr.match.POS.test(l)
                      ? o(l, t || this.context)
                      : l);
                for (; r && r.ownerDocument && r !== t; ) {
                  for (l in c)
                    ((s = c[l]).jquery ? s.index(r) > -1 : o(r).is(s)) &&
                      a.push({ selector: l, elem: r, level: p });
                  (r = r.parentNode), p++;
                }
              }
              return a;
            }
            var d = D.test(e) ? o(e, t || this.context) : null;
            for (n = 0, i = this.length; n < i; n++)
              for (r = this[n]; r; ) {
                if (d ? d.index(r) > -1 : o.find.matchesSelector(r, e)) {
                  a.push(r);
                  break;
                }
                if (!(r = r.parentNode) || !r.ownerDocument || r === t) break;
              }
            return (
              (a = a.length > 1 ? o.unique(a) : a),
              this.pushStack(a, 'closest', e)
            );
          },
          index: function index(e) {
            return e && 'string' != typeof e
              ? o.inArray(e.jquery ? e[0] : e, this)
              : o.inArray(this[0], e ? o(e) : this.parent().children());
          },
          add: function add(e, t) {
            var n =
                'string' == typeof e ? o(e, t || this.context) : o.makeArray(e),
              i = o.merge(this.get(), n);
            return this.pushStack(H(n[0]) || H(i[0]) ? i : o.unique(i));
          },
          andSelf: function andSelf() {
            return this.add(this.prevObject);
          },
        }),
          o.each(
            {
              parent: function parent(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function parents(e) {
                return o.dir(e, 'parentNode');
              },
              parentsUntil: function parentsUntil(e, t, n) {
                return o.dir(e, 'parentNode', n);
              },
              next: function next(e) {
                return o.nth(e, 2, 'nextSibling');
              },
              prev: function prev(e) {
                return o.nth(e, 2, 'previousSibling');
              },
              nextAll: function nextAll(e) {
                return o.dir(e, 'nextSibling');
              },
              prevAll: function prevAll(e) {
                return o.dir(e, 'previousSibling');
              },
              nextUntil: function nextUntil(e, t, n) {
                return o.dir(e, 'nextSibling', n);
              },
              prevUntil: function prevUntil(e, t, n) {
                return o.dir(e, 'previousSibling', n);
              },
              siblings: function siblings(e) {
                return o.sibling(e.parentNode.firstChild, e);
              },
              children: function children(e) {
                return o.sibling(e.firstChild);
              },
              contents: function contents(e) {
                return o.nodeName(e, 'iframe')
                  ? e.contentDocument || e.contentWindow.document
                  : o.makeArray(e.childNodes);
              },
            },
            function (e, t) {
              o.fn[e] = function (n, i) {
                var a = o.map(this, t, n);
                return (
                  M.test(e) || (i = n),
                  i && 'string' == typeof i && (a = o.filter(i, a)),
                  (a = this.length > 1 ? o.unique(a) : a),
                  (this.length > 1 || R.test(i)) &&
                    N.test(e) &&
                    (a = a.reverse()),
                  this.pushStack(a, e, B.call(arguments).join(','))
                );
              };
            }
          ),
          o.extend({
            filter: function filter(e, t, n) {
              return (
                n && (e = ':not(' + e + ')'),
                1 === t.length
                  ? o.find.matchesSelector(t[0], e)
                    ? [t[0]]
                    : []
                  : o.find.matches(e, t)
              );
            },
            dir: function dir(e, t, n) {
              for (
                var i = [], a = e[t];
                a &&
                9 !== a.nodeType &&
                (void 0 === n || 1 !== a.nodeType || !o(a).is(n));

              )
                1 === a.nodeType && i.push(a), (a = a[t]);
              return i;
            },
            nth: function nth(e, t, n, o) {
              t = t || 1;
              for (var i = 0; e && (1 !== e.nodeType || ++i !== t); e = e[n]);
              return e;
            },
            sibling: function sibling(e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
          });
        var q = / jQuery\d+="(?:\d+|null)"/g,
          j = /^\s+/,
          U =
            /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
          $ = /<([\w:]+)/,
          G = /<tbody/i,
          V = /<|&#?\w+;/,
          W = /<(?:script|object|embed|option|style)/i,
          Z = /checked\s*(?:[^=]|=\s*.checked.)/i,
          X = /\=([^="'>\s]+\/)>/g,
          Q = {
            option: [1, "<select multiple='multiple'>", '</select>'],
            legend: [1, '<fieldset>', '</fieldset>'],
            thead: [1, '<table>', '</table>'],
            tr: [2, '<table><tbody>', '</tbody></table>'],
            td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
            col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
            area: [1, '<map>', '</map>'],
            _default: [0, '', ''],
          };
        function Y(e, t) {
          return o.nodeName(e, 'table')
            ? e.getElementsByTagName('tbody')[0] ||
                e.appendChild(e.ownerDocument.createElement('tbody'))
            : e;
        }
        function K(e, t) {
          var n = 0;
          t.each(function () {
            if (this.nodeName === (e[n] && e[n].nodeName)) {
              var t = o.data(e[n++]),
                i = o.data(this, t),
                a = t && t.events;
              if (a)
                for (var r in (delete i.handle, (i.events = {}), a))
                  for (var s in a[r])
                    o.event.add(this, r, a[r][s], a[r][s].data);
            }
          });
        }
        function J(e, t) {
          t.src
            ? o.ajax({ url: t.src, async: !1, dataType: 'script' })
            : o.globalEval(t.text || t.textContent || t.innerHTML || ''),
            t.parentNode && t.parentNode.removeChild(t);
        }
        (Q.optgroup = Q.option),
          (Q.tbody = Q.tfoot = Q.colgroup = Q.caption = Q.thead),
          (Q.th = Q.td),
          o.support.htmlSerialize || (Q._default = [1, 'div<div>', '</div>']),
          o.fn.extend({
            text: function text(e) {
              return o.isFunction(e)
                ? this.each(function (t) {
                    var n = o(this);
                    n.text(e.call(this, t, n.text()));
                  })
                : 'object' != _typeof(e) && void 0 !== e
                ? this.empty().append(
                    ((this[0] && this[0].ownerDocument) || n).createTextNode(e)
                  )
                : o.text(this);
            },
            wrapAll: function wrapAll(e) {
              if (o.isFunction(e))
                return this.each(function (t) {
                  o(this).wrapAll(e.call(this, t));
                });
              if (this[0]) {
                var t = o(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                  t
                    .map(function () {
                      for (
                        var e = this;
                        e.firstChild && 1 === e.firstChild.nodeType;

                      )
                        e = e.firstChild;
                      return e;
                    })
                    .append(this);
              }
              return this;
            },
            wrapInner: function wrapInner(e) {
              return o.isFunction(e)
                ? this.each(function (t) {
                    o(this).wrapInner(e.call(this, t));
                  })
                : this.each(function () {
                    var t = o(this),
                      n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e);
                  });
            },
            wrap: function wrap(e) {
              return this.each(function () {
                o(this).wrapAll(e);
              });
            },
            unwrap: function unwrap() {
              return this.parent()
                .each(function () {
                  o.nodeName(this, 'body') ||
                    o(this).replaceWith(this.childNodes);
                })
                .end();
            },
            append: function append() {
              return this.domManip(arguments, !0, function (e) {
                1 === this.nodeType && this.appendChild(e);
              });
            },
            prepend: function prepend() {
              return this.domManip(arguments, !0, function (e) {
                1 === this.nodeType && this.insertBefore(e, this.firstChild);
              });
            },
            before: function before() {
              if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function (e) {
                  this.parentNode.insertBefore(e, this);
                });
              if (arguments.length) {
                var e = o(arguments[0]);
                return (
                  e.push.apply(e, this.toArray()),
                  this.pushStack(e, 'before', arguments)
                );
              }
            },
            after: function after() {
              if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function (e) {
                  this.parentNode.insertBefore(e, this.nextSibling);
                });
              if (arguments.length) {
                var e = this.pushStack(this, 'after', arguments);
                return e.push.apply(e, o(arguments[0]).toArray()), e;
              }
            },
            remove: function remove(e, t) {
              for (var n, i = 0; null != (n = this[i]); i++)
                (e && !o.filter(e, [n]).length) ||
                  (t ||
                    1 !== n.nodeType ||
                    (o.cleanData(n.getElementsByTagName('*')),
                    o.cleanData([n])),
                  n.parentNode && n.parentNode.removeChild(n));
              return this;
            },
            empty: function empty() {
              for (var e, t = 0; null != (e = this[t]); t++)
                for (
                  1 === e.nodeType && o.cleanData(e.getElementsByTagName('*'));
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
              return this;
            },
            clone: function clone(e) {
              var t = this.map(function () {
                if (o.support.noCloneEvent || o.isXMLDoc(this))
                  return this.cloneNode(!0);
                var e = this.outerHTML,
                  t = this.ownerDocument;
                if (!e) {
                  var n = t.createElement('div');
                  n.appendChild(this.cloneNode(!0)), (e = n.innerHTML);
                }
                return o.clean(
                  [e.replace(q, '').replace(X, '="$1">').replace(j, '')],
                  t
                )[0];
              });
              return (
                !0 === e && (K(this, t), K(this.find('*'), t.find('*'))), t
              );
            },
            html: function html(e) {
              if (void 0 === e)
                return this[0] && 1 === this[0].nodeType
                  ? this[0].innerHTML.replace(q, '')
                  : null;
              if (
                'string' != typeof e ||
                W.test(e) ||
                (!o.support.leadingWhitespace && j.test(e)) ||
                Q[($.exec(e) || ['', ''])[1].toLowerCase()]
              )
                o.isFunction(e)
                  ? this.each(function (t) {
                      var n = o(this);
                      n.html(e.call(this, t, n.html()));
                    })
                  : this.empty().append(e);
              else {
                e = e.replace(U, '<$1></$2>');
                try {
                  for (var t = 0, n = this.length; t < n; t++)
                    1 === this[t].nodeType &&
                      (o.cleanData(this[t].getElementsByTagName('*')),
                      (this[t].innerHTML = e));
                } catch (t) {
                  this.empty().append(e);
                }
              }
              return this;
            },
            replaceWith: function replaceWith(e) {
              return this[0] && this[0].parentNode
                ? o.isFunction(e)
                  ? this.each(function (t) {
                      var n = o(this),
                        i = n.html();
                      n.replaceWith(e.call(this, t, i));
                    })
                  : ('string' != typeof e && (e = o(e).detach()),
                    this.each(function () {
                      var t = this.nextSibling,
                        n = this.parentNode;
                      o(this).remove(), t ? o(t).before(e) : o(n).append(e);
                    }))
                : this.pushStack(
                    o(o.isFunction(e) ? e() : e),
                    'replaceWith',
                    e
                  );
            },
            detach: function detach(e) {
              return this.remove(e, !0);
            },
            domManip: function domManip(e, t, n) {
              var i,
                a,
                r,
                s,
                l = e[0],
                c = [];
              if (
                !o.support.checkClone &&
                3 === arguments.length &&
                'string' == typeof l &&
                Z.test(l)
              )
                return this.each(function () {
                  o(this).domManip(e, t, n, !0);
                });
              if (o.isFunction(l))
                return this.each(function (i) {
                  var a = o(this);
                  (e[0] = l.call(this, i, t ? a.html() : void 0)),
                    a.domManip(e, t, n);
                });
              if (this[0]) {
                if (
                  ((s = l && l.parentNode),
                  (a =
                    1 ===
                    (r = (i =
                      o.support.parentNode &&
                      s &&
                      11 === s.nodeType &&
                      s.childNodes.length === this.length
                        ? { fragment: s }
                        : o.buildFragment(e, this, c)).fragment).childNodes
                      .length
                      ? (r = r.firstChild)
                      : r.firstChild))
                ) {
                  t = t && o.nodeName(a, 'tr');
                  for (var p = 0, d = this.length; p < d; p++)
                    n.call(
                      t ? Y(this[p], a) : this[p],
                      p > 0 || i.cacheable || this.length > 1
                        ? r.cloneNode(!0)
                        : r
                    );
                }
                c.length && o.each(c, J);
              }
              return this;
            },
          }),
          (o.buildFragment = function (e, t, i) {
            var a,
              r,
              s,
              l = t && t[0] ? t[0].ownerDocument || t[0] : n;
            return (
              1 === e.length &&
                'string' == typeof e[0] &&
                e[0].length < 512 &&
                l === n &&
                !W.test(e[0]) &&
                (o.support.checkClone || !Z.test(e[0])) &&
                ((r = !0), (s = o.fragments[e[0]]) && 1 !== s && (a = s)),
              a || ((a = l.createDocumentFragment()), o.clean(e, l, a, i)),
              r && (o.fragments[e[0]] = s ? a : 1),
              { fragment: a, cacheable: r }
            );
          }),
          (o.fragments = {}),
          o.each(
            {
              appendTo: 'append',
              prependTo: 'prepend',
              insertBefore: 'before',
              insertAfter: 'after',
              replaceAll: 'replaceWith',
            },
            function (e, t) {
              o.fn[e] = function (n) {
                var i = [],
                  a = o(n),
                  r = 1 === this.length && this[0].parentNode;
                if (
                  r &&
                  11 === r.nodeType &&
                  1 === r.childNodes.length &&
                  1 === a.length
                )
                  return a[t](this[0]), this;
                for (var s = 0, l = a.length; s < l; s++) {
                  var c = (s > 0 ? this.clone(!0) : this).get();
                  o(a[s])[t](c), (i = i.concat(c));
                }
                return this.pushStack(i, e, a.selector);
              };
            }
          ),
          o.extend({
            clean: function clean(e, t, i, a) {
              void 0 === (t = t || n).createElement &&
                (t = t.ownerDocument || (t[0] && t[0].ownerDocument) || n);
              for (var r, s = [], l = 0; null != (r = e[l]); l++)
                if (('number' == typeof r && (r += ''), r)) {
                  if ('string' != typeof r || V.test(r)) {
                    if ('string' == typeof r) {
                      r = r.replace(U, '<$1></$2>');
                      var c = ($.exec(r) || ['', ''])[1].toLowerCase(),
                        p = Q[c] || Q._default,
                        d = p[0],
                        u = t.createElement('div');
                      for (u.innerHTML = p[1] + r + p[2]; d--; )
                        u = u.lastChild;
                      if (!o.support.tbody)
                        for (
                          var m = G.test(r),
                            h =
                              'table' !== c || m
                                ? '<table>' !== p[1] || m
                                  ? []
                                  : u.childNodes
                                : u.firstChild && u.firstChild.childNodes,
                            f = h.length - 1;
                          f >= 0;
                          --f
                        )
                          o.nodeName(h[f], 'tbody') &&
                            !h[f].childNodes.length &&
                            h[f].parentNode.removeChild(h[f]);
                      !o.support.leadingWhitespace &&
                        j.test(r) &&
                        u.insertBefore(
                          t.createTextNode(j.exec(r)[0]),
                          u.firstChild
                        ),
                        (r = u.childNodes);
                    }
                  } else r = t.createTextNode(r);
                  r.nodeType ? s.push(r) : (s = o.merge(s, r));
                }
              if (i)
                for (l = 0; s[l]; l++)
                  !a ||
                  !o.nodeName(s[l], 'script') ||
                  (s[l].type && 'text/javascript' !== s[l].type.toLowerCase())
                    ? (1 === s[l].nodeType &&
                        s.splice.apply(
                          s,
                          [l + 1, 0].concat(
                            o.makeArray(s[l].getElementsByTagName('script'))
                          )
                        ),
                      i.appendChild(s[l]))
                    : a.push(
                        s[l].parentNode
                          ? s[l].parentNode.removeChild(s[l])
                          : s[l]
                      );
              return s;
            },
            cleanData: function cleanData(e) {
              for (
                var t,
                  n,
                  i,
                  a = o.cache,
                  r = o.event.special,
                  s = o.support.deleteExpando,
                  l = 0;
                null != (i = e[l]);
                l++
              )
                if (
                  (!i.nodeName || !o.noData[i.nodeName.toLowerCase()]) &&
                  (n = i[o.expando])
                ) {
                  if ((t = a[n]) && t.events)
                    for (var c in t.events)
                      r[c]
                        ? o.event.remove(i, c)
                        : o.removeEvent(i, c, t.handle);
                  s
                    ? delete i[o.expando]
                    : i.removeAttribute && i.removeAttribute(o.expando),
                    delete a[n];
                }
            },
          });
        var ee,
          te,
          ne,
          oe = /alpha\([^)]*\)/i,
          ie = /opacity=([^)]*)/,
          ae = /-([a-z])/gi,
          re = /([A-Z])/g,
          se = /^-?\d+(?:px)?$/i,
          le = /^-?\d/,
          ce = { position: 'absolute', visibility: 'hidden', display: 'block' },
          pe = ['Left', 'Right'],
          de = ['Top', 'Bottom'],
          ue = function ue(e, t) {
            return t.toUpperCase();
          };
        function me(e, t, n) {
          var i = 'width' === t ? pe : de,
            a = 'width' === t ? e.offsetWidth : e.offsetHeight;
          return (
            'border' === n ||
              o.each(i, function () {
                n || (a -= parseFloat(o.css(e, 'padding' + this)) || 0),
                  'margin' === n
                    ? (a += parseFloat(o.css(e, 'margin' + this)) || 0)
                    : (a -=
                        parseFloat(o.css(e, 'border' + this + 'Width')) || 0);
              }),
            a
          );
        }
        (o.fn.css = function (e, t) {
          return 2 === arguments.length && void 0 === t
            ? this
            : o.access(this, e, t, !0, function (e, t, n) {
                return void 0 !== n ? o.style(e, t, n) : o.css(e, t);
              });
        }),
          o.extend({
            cssHooks: {
              opacity: {
                get: function get(e, t) {
                  if (t) {
                    var n = ee(e, 'opacity', 'opacity');
                    return '' === n ? '1' : n;
                  }
                  return e.style.opacity;
                },
              },
            },
            cssNumber: {
              zIndex: !0,
              fontWeight: !0,
              opacity: !0,
              zoom: !0,
              lineHeight: !0,
            },
            cssProps: { float: o.support.cssFloat ? 'cssFloat' : 'styleFloat' },
            style: function style(e, t, n, i) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var a,
                  r = o.camelCase(t),
                  s = e.style,
                  l = o.cssHooks[r];
                if (((t = o.cssProps[r] || r), void 0 === n))
                  return l && 'get' in l && void 0 !== (a = l.get(e, !1, i))
                    ? a
                    : s[t];
                if (
                  !(
                    ('number' == typeof n && isNaN(n)) ||
                    null == n ||
                    ('number' != typeof n || o.cssNumber[r] || (n += 'px'),
                    l && 'set' in l && void 0 === (n = l.set(e, n)))
                  )
                )
                  try {
                    s[t] = n;
                  } catch (e) {}
              }
            },
            css: function css(e, t, n) {
              var i,
                a = o.camelCase(t),
                r = o.cssHooks[a];
              return (
                (t = o.cssProps[a] || a),
                r && 'get' in r && void 0 !== (i = r.get(e, !0, n))
                  ? i
                  : ee
                  ? ee(e, t, a)
                  : void 0
              );
            },
            swap: function swap(e, t, n) {
              var o = {};
              for (var i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
              for (i in (n.call(e), t)) e.style[i] = o[i];
            },
            camelCase: function camelCase(e) {
              return e.replace(ae, ue);
            },
          }),
          (o.curCSS = o.css),
          o.each(['height', 'width'], function (e, t) {
            o.cssHooks[t] = {
              get: function get(e, n, i) {
                var a;
                if (n)
                  return (
                    0 !== e.offsetWidth
                      ? (a = me(e, t, i))
                      : o.swap(e, ce, function () {
                          a = me(e, t, i);
                        }),
                    a <= 0 &&
                    ('0px' === (a = ee(e, t, t)) && ne && (a = ne(e, t, t)),
                    null != a)
                      ? '' === a || 'auto' === a
                        ? '0px'
                        : a
                      : a < 0 || null == a
                      ? '' === (a = e.style[t]) || 'auto' === a
                        ? '0px'
                        : a
                      : 'string' == typeof a
                      ? a
                      : a + 'px'
                  );
              },
              set: function set(e, t) {
                return se.test(t)
                  ? (t = parseFloat(t)) >= 0
                    ? t + 'px'
                    : void 0
                  : t;
              },
            };
          }),
          o.support.opacity ||
            (o.cssHooks.opacity = {
              get: function get(e, t) {
                return ie.test(
                  (t && e.currentStyle
                    ? e.currentStyle.filter
                    : e.style.filter) || ''
                )
                  ? parseFloat(RegExp.$1) / 100 + ''
                  : t
                  ? '1'
                  : '';
              },
              set: function set(e, t) {
                var n = e.style;
                n.zoom = 1;
                var i = o.isNaN(t) ? '' : 'alpha(opacity=' + 100 * t + ')',
                  a = n.filter || '';
                n.filter = oe.test(a) ? a.replace(oe, i) : n.filter + ' ' + i;
              },
            }),
          n.defaultView &&
            n.defaultView.getComputedStyle &&
            (te = function te(e, t, n) {
              var i, a, r;
              if (
                ((n = n.replace(re, '-$1').toLowerCase()),
                (a = e.ownerDocument.defaultView))
              )
                return (
                  (r = a.getComputedStyle(e, null)) &&
                    ('' !== (i = r.getPropertyValue(n)) ||
                      o.contains(e.ownerDocument.documentElement, e) ||
                      (i = o.style(e, n))),
                  i
                );
            }),
          n.documentElement.currentStyle &&
            (ne = function ne(e, t) {
              var n,
                o,
                i = e.currentStyle && e.currentStyle[t],
                a = e.style;
              return (
                !se.test(i) &&
                  le.test(i) &&
                  ((n = a.left),
                  (o = e.runtimeStyle.left),
                  (e.runtimeStyle.left = e.currentStyle.left),
                  (a.left = 'fontSize' === t ? '1em' : i || 0),
                  (i = a.pixelLeft + 'px'),
                  (a.left = n),
                  (e.runtimeStyle.left = o)),
                '' === i ? 'auto' : i
              );
            }),
          (ee = te || ne),
          o.expr &&
            o.expr.filters &&
            ((o.expr.filters.hidden = function (e) {
              var t = e.offsetWidth,
                n = e.offsetHeight;
              return (
                (0 === t && 0 === n) ||
                (!o.support.reliableHiddenOffsets &&
                  'none' === (e.style.display || o.css(e, 'display')))
              );
            }),
            (o.expr.filters.visible = function (e) {
              return !o.expr.filters.hidden(e);
            }));
        var he = o.now(),
          fe = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
          ge = /^(?:select|textarea)/i,
          ve =
            /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
          _e = /^(?:GET|HEAD)$/,
          ye = /\[\]$/,
          be = /\=\?(&|$)/,
          Ee = /\?/,
          we = /([?&])_=[^&]*/,
          Ae = /^(\w+:)?\/\/([^\/?#]+)/,
          Te = /%20/g,
          Se = /#.*$/,
          Ce = o.fn.load;
        function xe(e, t, n, i) {
          o.isArray(t) && t.length
            ? o.each(t, function (t, a) {
                n || ye.test(e)
                  ? i(e, a)
                  : xe(
                      e +
                        '[' +
                        ('object' == _typeof(a) || o.isArray(a) ? t : '') +
                        ']',
                      a,
                      n,
                      i
                    );
              })
            : n || null == t || 'object' != _typeof(t)
            ? i(e, t)
            : o.isEmptyObject(t)
            ? i(e, '')
            : o.each(t, function (t, o) {
                xe(e + '[' + t + ']', o, n, i);
              });
        }
        o.fn.extend({
          load: function load(e, t, n) {
            if ('string' != typeof e && Ce) return Ce.apply(this, arguments);
            if (!this.length) return this;
            var i = e.indexOf(' ');
            if (i >= 0) {
              var a = e.slice(i, e.length);
              e = e.slice(0, i);
            }
            var r = 'GET';
            t &&
              (o.isFunction(t)
                ? ((n = t), (t = null))
                : 'object' == _typeof(t) &&
                  ((t = o.param(t, o.ajaxSettings.traditional)), (r = 'POST')));
            var s = this;
            return (
              o.ajax({
                url: e,
                type: r,
                dataType: 'html',
                data: t,
                complete: function complete(e, t) {
                  ('success' !== t && 'notmodified' !== t) ||
                    s.html(
                      a
                        ? o('<div>')
                            .append(e.responseText.replace(fe, ''))
                            .find(a)
                        : e.responseText
                    ),
                    n && s.each(n, [e.responseText, t, e]);
                },
              }),
              this
            );
          },
          serialize: function serialize() {
            return o.param(this.serializeArray());
          },
          serializeArray: function serializeArray() {
            return this.map(function () {
              return this.elements ? o.makeArray(this.elements) : this;
            })
              .filter(function () {
                return (
                  this.name &&
                  !this.disabled &&
                  (this.checked || ge.test(this.nodeName) || ve.test(this.type))
                );
              })
              .map(function (e, t) {
                var n = o(this).val();
                return null == n
                  ? null
                  : o.isArray(n)
                  ? o.map(n, function (e, n) {
                      return { name: t.name, value: e };
                    })
                  : { name: t.name, value: n };
              })
              .get();
          },
        }),
          o.each(
            'ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend'.split(
              ' '
            ),
            function (e, t) {
              o.fn[t] = function (e) {
                return this.bind(t, e);
              };
            }
          ),
          o.extend({
            get: function get(e, t, n, i) {
              return (
                o.isFunction(t) && ((i = i || n), (n = t), (t = null)),
                o.ajax({
                  type: 'GET',
                  url: e,
                  data: t,
                  success: n,
                  dataType: i,
                })
              );
            },
            getScript: function getScript(e, t) {
              return o.get(e, null, t, 'script');
            },
            getJSON: function getJSON(e, t, n) {
              return o.get(e, t, n, 'json');
            },
            post: function post(e, t, n, i) {
              return (
                o.isFunction(t) && ((i = i || n), (n = t), (t = {})),
                o.ajax({
                  type: 'POST',
                  url: e,
                  data: t,
                  success: n,
                  dataType: i,
                })
              );
            },
            ajaxSetup: function ajaxSetup(e) {
              o.extend(o.ajaxSettings, e);
            },
            ajaxSettings: {
              url: location.href,
              global: !0,
              type: 'GET',
              contentType: 'application/x-www-form-urlencoded',
              processData: !0,
              async: !0,
              xhr: function xhr() {
                return new e.XMLHttpRequest();
              },
              accepts: {
                xml: 'application/xml, text/xml',
                html: 'text/html',
                script: 'text/javascript, application/javascript',
                json: 'application/json, text/javascript',
                text: 'text/plain',
                _default: '*/*',
              },
            },
            ajax: function ajax(t) {
              var i,
                a,
                r,
                s = o.extend(!0, {}, o.ajaxSettings, t),
                l = s.type.toUpperCase(),
                c = _e.test(l);
              if (
                ((s.url = s.url.replace(Se, '')),
                (s.context = t && null != t.context ? t.context : s),
                s.data &&
                  s.processData &&
                  'string' != typeof s.data &&
                  (s.data = o.param(s.data, s.traditional)),
                'jsonp' === s.dataType &&
                  ('GET' === l
                    ? be.test(s.url) ||
                      (s.url +=
                        (Ee.test(s.url) ? '&' : '?') +
                        (s.jsonp || 'callback') +
                        '=?')
                    : (s.data && be.test(s.data)) ||
                      (s.data =
                        (s.data ? s.data + '&' : '') +
                        (s.jsonp || 'callback') +
                        '=?'),
                  (s.dataType = 'json')),
                'json' === s.dataType &&
                  ((s.data && be.test(s.data)) || be.test(s.url)))
              ) {
                (i = s.jsonpCallback || 'jsonp' + he++),
                  s.data &&
                    (s.data = (s.data + '').replace(be, '=' + i + '$1')),
                  (s.url = s.url.replace(be, '=' + i + '$1')),
                  (s.dataType = 'script');
                var p = e[i];
                e[i] = function (t) {
                  if (o.isFunction(p)) p(t);
                  else {
                    e[i] = void 0;
                    try {
                      delete e[i];
                    } catch (e) {}
                  }
                  (r = t),
                    o.handleSuccess(s, y, a, r),
                    o.handleComplete(s, y, a, r),
                    f && f.removeChild(g);
                };
              }
              if (
                ('script' === s.dataType && null === s.cache && (s.cache = !1),
                !1 === s.cache && c)
              ) {
                var d = o.now(),
                  u = s.url.replace(we, '$1_=' + d);
                s.url =
                  u +
                  (u === s.url ? (Ee.test(s.url) ? '&' : '?') + '_=' + d : '');
              }
              s.data && c && (s.url += (Ee.test(s.url) ? '&' : '?') + s.data),
                s.global && 0 == o.active++ && o.event.trigger('ajaxStart');
              var m = Ae.exec(s.url),
                h =
                  m &&
                  ((m[1] && m[1].toLowerCase() !== location.protocol) ||
                    m[2].toLowerCase() !== location.host);
              if ('script' === s.dataType && 'GET' === l && h) {
                var f = n.getElementsByTagName('head')[0] || n.documentElement,
                  g = n.createElement('script');
                if (
                  (s.scriptCharset && (g.charset = s.scriptCharset),
                  (g.src = s.url),
                  !i)
                ) {
                  var v = !1;
                  g.onload = g.onreadystatechange = function () {
                    v ||
                      (this.readyState &&
                        'loaded' !== this.readyState &&
                        'complete' !== this.readyState) ||
                      ((v = !0),
                      o.handleSuccess(s, y, a, r),
                      o.handleComplete(s, y, a, r),
                      (g.onload = g.onreadystatechange = null),
                      f && g.parentNode && f.removeChild(g));
                  };
                }
                f.insertBefore(g, f.firstChild);
              } else {
                var _ = !1,
                  y = s.xhr();
                if (y) {
                  s.username
                    ? y.open(l, s.url, s.async, s.username, s.password)
                    : y.open(l, s.url, s.async);
                  try {
                    ((null != s.data && !c) || (t && t.contentType)) &&
                      y.setRequestHeader('Content-Type', s.contentType),
                      s.ifModified &&
                        (o.lastModified[s.url] &&
                          y.setRequestHeader(
                            'If-Modified-Since',
                            o.lastModified[s.url]
                          ),
                        o.etag[s.url] &&
                          y.setRequestHeader('If-None-Match', o.etag[s.url])),
                      h ||
                        y.setRequestHeader(
                          'X-Requested-With',
                          'XMLHttpRequest'
                        ),
                      y.setRequestHeader(
                        'Accept',
                        s.dataType && s.accepts[s.dataType]
                          ? s.accepts[s.dataType] + ', */*; q=0.01'
                          : s.accepts._default
                      );
                  } catch (e) {}
                  if (s.beforeSend && !1 === s.beforeSend.call(s.context, y, s))
                    return (
                      s.global &&
                        1 == o.active-- &&
                        o.event.trigger('ajaxStop'),
                      y.abort(),
                      !1
                    );
                  s.global && o.triggerGlobal(s, 'ajaxSend', [y, s]);
                  var b = (y.onreadystatechange = function (e) {
                    if (y && 0 !== y.readyState && 'abort' !== e) {
                      if (!_ && y && (4 === y.readyState || 'timeout' === e)) {
                        var t;
                        if (
                          ((_ = !0),
                          (y.onreadystatechange = o.noop),
                          'success' ===
                            (a =
                              'timeout' === e
                                ? 'timeout'
                                : o.httpSuccess(y)
                                ? s.ifModified && o.httpNotModified(y, s.url)
                                  ? 'notmodified'
                                  : 'success'
                                : 'error'))
                        )
                          try {
                            r = o.httpData(y, s.dataType, s);
                          } catch (e) {
                            (a = 'parsererror'), (t = e);
                          }
                        'success' === a || 'notmodified' === a
                          ? i || o.handleSuccess(s, y, a, r)
                          : o.handleError(s, y, a, t),
                          i || o.handleComplete(s, y, a, r),
                          'timeout' === e && y.abort(),
                          s.async && (y = null);
                      }
                    } else
                      _ || o.handleComplete(s, y, a, r),
                        (_ = !0),
                        y && (y.onreadystatechange = o.noop);
                  });
                  try {
                    var E = y.abort;
                    y.abort = function () {
                      y && Function.prototype.call.call(E, y), b('abort');
                    };
                  } catch (e) {}
                  s.async &&
                    s.timeout > 0 &&
                    setTimeout(function () {
                      y && !_ && b('timeout');
                    }, s.timeout);
                  try {
                    y.send(c || null == s.data ? null : s.data);
                  } catch (e) {
                    o.handleError(s, y, null, e), o.handleComplete(s, y, a, r);
                  }
                  return s.async || b(), y;
                }
              }
            },
            param: function param(e, t) {
              var n = [],
                i = function i(e, t) {
                  (t = o.isFunction(t) ? t() : t),
                    (n[n.length] =
                      encodeURIComponent(e) + '=' + encodeURIComponent(t));
                };
              if (
                (void 0 === t && (t = o.ajaxSettings.traditional),
                o.isArray(e) || e.jquery)
              )
                o.each(e, function () {
                  i(this.name, this.value);
                });
              else for (var a in e) xe(a, e[a], t, i);
              return n.join('&').replace(Te, '+');
            },
          }),
          o.extend({
            active: 0,
            lastModified: {},
            etag: {},
            handleError: function handleError(e, t, n, i) {
              e.error && e.error.call(e.context, t, n, i),
                e.global && o.triggerGlobal(e, 'ajaxError', [t, e, i]);
            },
            handleSuccess: function handleSuccess(e, t, n, i) {
              e.success && e.success.call(e.context, i, n, t),
                e.global && o.triggerGlobal(e, 'ajaxSuccess', [t, e]);
            },
            handleComplete: function handleComplete(e, t, n) {
              e.complete && e.complete.call(e.context, t, n),
                e.global && o.triggerGlobal(e, 'ajaxComplete', [t, e]),
                e.global && 1 == o.active-- && o.event.trigger('ajaxStop');
            },
            triggerGlobal: function triggerGlobal(e, t, n) {
              (e.context && null == e.context.url
                ? o(e.context)
                : o.event
              ).trigger(t, n);
            },
            httpSuccess: function httpSuccess(e) {
              try {
                return (
                  (!e.status && 'file:' === location.protocol) ||
                  (e.status >= 200 && e.status < 300) ||
                  304 === e.status ||
                  1223 === e.status
                );
              } catch (e) {}
              return !1;
            },
            httpNotModified: function httpNotModified(e, t) {
              var n = e.getResponseHeader('Last-Modified'),
                i = e.getResponseHeader('Etag');
              return (
                n && (o.lastModified[t] = n),
                i && (o.etag[t] = i),
                304 === e.status
              );
            },
            httpData: function httpData(e, t, n) {
              var i = e.getResponseHeader('content-type') || '',
                a = 'xml' === t || (!t && i.indexOf('xml') >= 0),
                r = a ? e.responseXML : e.responseText;
              return (
                a &&
                  'parsererror' === r.documentElement.nodeName &&
                  o.error('parsererror'),
                n && n.dataFilter && (r = n.dataFilter(r, t)),
                'string' == typeof r &&
                  ('json' === t || (!t && i.indexOf('json') >= 0)
                    ? (r = o.parseJSON(r))
                    : ('script' === t ||
                        (!t && i.indexOf('javascript') >= 0)) &&
                      o.globalEval(r)),
                r
              );
            },
          }),
          e.ActiveXObject &&
            (o.ajaxSettings.xhr = function () {
              if ('file:' !== e.location.protocol)
                try {
                  return new e.XMLHttpRequest();
                } catch (e) {}
              try {
                return new e.ActiveXObject('Microsoft.XMLHTTP');
              } catch (e) {}
            }),
          (o.support.ajax = !!o.ajaxSettings.xhr());
        var Le,
          ke = {},
          Ie = /^(?:toggle|show|hide)$/,
          Oe = /^([+\-]=)?([\d+.\-]+)(.*)$/,
          Pe = [
            [
              'height',
              'marginTop',
              'marginBottom',
              'paddingTop',
              'paddingBottom',
            ],
            [
              'width',
              'marginLeft',
              'marginRight',
              'paddingLeft',
              'paddingRight',
            ],
            ['opacity'],
          ];
        function Me(e, t) {
          var n = {};
          return (
            o.each(Pe.concat.apply([], Pe.slice(0, t)), function () {
              n[this] = e;
            }),
            n
          );
        }
        function Ne(e) {
          if (!ke[e]) {
            var t = o('<' + e + '>').appendTo('body'),
              n = t.css('display');
            t.remove(),
              ('none' !== n && '' !== n) || (n = 'block'),
              (ke[e] = n);
          }
          return ke[e];
        }
        o.fn.extend({
          show: function show(e, t, n) {
            var i, a;
            if (e || 0 === e) return this.animate(Me('show', 3), e, t, n);
            for (var r = 0, s = this.length; r < s; r++)
              (a = (i = this[r]).style.display),
                o.data(i, 'olddisplay') ||
                  'none' !== a ||
                  (a = i.style.display = ''),
                '' === a &&
                  'none' === o.css(i, 'display') &&
                  o.data(i, 'olddisplay', Ne(i.nodeName));
            for (r = 0; r < s; r++)
              ('' !== (a = (i = this[r]).style.display) && 'none' !== a) ||
                (i.style.display = o.data(i, 'olddisplay') || '');
            return this;
          },
          hide: function hide(e, t, n) {
            if (e || 0 === e) return this.animate(Me('hide', 3), e, t, n);
            for (var i = 0, a = this.length; i < a; i++) {
              var r = o.css(this[i], 'display');
              'none' !== r && o.data(this[i], 'olddisplay', r);
            }
            for (i = 0; i < a; i++) this[i].style.display = 'none';
            return this;
          },
          _toggle: o.fn.toggle,
          toggle: function toggle(e, t, n) {
            var i = 'boolean' == typeof e;
            return (
              o.isFunction(e) && o.isFunction(t)
                ? this._toggle.apply(this, arguments)
                : null == e || i
                ? this.each(function () {
                    var t = i ? e : o(this).is(':hidden');
                    o(this)[t ? 'show' : 'hide']();
                  })
                : this.animate(Me('toggle', 3), e, t, n),
              this
            );
          },
          fadeTo: function fadeTo(e, t, n, o) {
            return this.filter(':hidden')
              .css('opacity', 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, o);
          },
          animate: function animate(e, t, n, i) {
            var a = o.speed(t, n, i);
            return o.isEmptyObject(e)
              ? this.each(a.complete)
              : this[!1 === a.queue ? 'each' : 'queue'](function () {
                  var t,
                    n = o.extend({}, a),
                    i = 1 === this.nodeType,
                    r = i && o(this).is(':hidden'),
                    s = this;
                  for (t in e) {
                    var l = o.camelCase(t);
                    if (
                      (t !== l && ((e[l] = e[t]), delete e[t], (t = l)),
                      ('hide' === e[t] && r) || ('show' === e[t] && !r))
                    )
                      return n.complete.call(this);
                    if (i && ('height' === t || 'width' === t))
                      if (
                        ((n.overflow = [
                          this.style.overflow,
                          this.style.overflowX,
                          this.style.overflowY,
                        ]),
                        'inline' === o.css(this, 'display') &&
                          'none' === o.css(this, 'float'))
                      )
                        if (o.support.inlineBlockNeedsLayout)
                          'inline' === Ne(this.nodeName)
                            ? (this.style.display = 'inline-block')
                            : ((this.style.display = 'inline'),
                              (this.style.zoom = 1));
                        else this.style.display = 'inline-block';
                    o.isArray(e[t]) &&
                      (((n.specialEasing = n.specialEasing || {})[t] = e[t][1]),
                      (e[t] = e[t][0]));
                  }
                  return (
                    null != n.overflow && (this.style.overflow = 'hidden'),
                    (n.curAnim = o.extend({}, e)),
                    o.each(e, function (t, i) {
                      var a = new o.fx(s, n, t);
                      if (Ie.test(i))
                        a['toggle' === i ? (r ? 'show' : 'hide') : i](e);
                      else {
                        var l = Oe.exec(i),
                          c = a.cur() || 0;
                        if (l) {
                          var p = parseFloat(l[2]),
                            d = l[3] || 'px';
                          'px' !== d &&
                            (o.style(s, t, (p || 1) + d),
                            (c = ((p || 1) / a.cur()) * c),
                            o.style(s, t, c + d)),
                            l[1] && (p = ('-=' === l[1] ? -1 : 1) * p + c),
                            a.custom(c, p, d);
                        } else a.custom(c, i, '');
                      }
                    }),
                    !0
                  );
                });
          },
          stop: function stop(e, t) {
            var n = o.timers;
            return (
              e && this.queue([]),
              this.each(function () {
                for (var e = n.length - 1; e >= 0; e--)
                  n[e].elem === this && (t && n[e](!0), n.splice(e, 1));
              }),
              t || this.dequeue(),
              this
            );
          },
        }),
          o.each(
            {
              slideDown: Me('show', 1),
              slideUp: Me('hide', 1),
              slideToggle: Me('toggle', 1),
              fadeIn: { opacity: 'show' },
              fadeOut: { opacity: 'hide' },
              fadeToggle: { opacity: 'toggle' },
            },
            function (e, t) {
              o.fn[e] = function (e, n, o) {
                return this.animate(t, e, n, o);
              };
            }
          ),
          o.extend({
            speed: function speed(e, t, n) {
              var i =
                e && 'object' == _typeof(e)
                  ? o.extend({}, e)
                  : {
                      complete: n || (!n && t) || (o.isFunction(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !o.isFunction(t) && t),
                    };
              return (
                (i.duration = o.fx.off
                  ? 0
                  : 'number' == typeof i.duration
                  ? i.duration
                  : i.duration in o.fx.speeds
                  ? o.fx.speeds[i.duration]
                  : o.fx.speeds._default),
                (i.old = i.complete),
                (i.complete = function () {
                  !1 !== i.queue && o(this).dequeue(),
                    o.isFunction(i.old) && i.old.call(this);
                }),
                i
              );
            },
            easing: {
              linear: function linear(e, t, n, o) {
                return n + o * e;
              },
              swing: function swing(e, t, n, o) {
                return (-Math.cos(e * Math.PI) / 2 + 0.5) * o + n;
              },
            },
            timers: [],
            fx: function fx(e, t, n) {
              (this.options = t),
                (this.elem = e),
                (this.prop = n),
                t.orig || (t.orig = {});
            },
          }),
          (o.fx.prototype = {
            update: function update() {
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
                (o.fx.step[this.prop] || o.fx.step._default)(this);
            },
            cur: function cur() {
              if (
                null != this.elem[this.prop] &&
                (!this.elem.style || null == this.elem.style[this.prop])
              )
                return this.elem[this.prop];
              var e = parseFloat(o.css(this.elem, this.prop));
              return e && e > -1e4 ? e : 0;
            },
            custom: function custom(e, t, n) {
              var i = this,
                a = o.fx;
              function r(e) {
                return i.step(e);
              }
              (this.startTime = o.now()),
                (this.start = e),
                (this.end = t),
                (this.unit = n || this.unit || 'px'),
                (this.now = this.start),
                (this.pos = this.state = 0),
                (r.elem = this.elem),
                r() &&
                  o.timers.push(r) &&
                  !Le &&
                  (Le = setInterval(a.tick, a.interval));
            },
            show: function show() {
              (this.options.orig[this.prop] = o.style(this.elem, this.prop)),
                (this.options.show = !0),
                this.custom(
                  'width' === this.prop || 'height' === this.prop ? 1 : 0,
                  this.cur()
                ),
                o(this.elem).show();
            },
            hide: function hide() {
              (this.options.orig[this.prop] = o.style(this.elem, this.prop)),
                (this.options.hide = !0),
                this.custom(this.cur(), 0);
            },
            step: function step(e) {
              var t = o.now(),
                n = !0;
              if (e || t >= this.options.duration + this.startTime) {
                for (var i in ((this.now = this.end),
                (this.pos = this.state = 1),
                this.update(),
                (this.options.curAnim[this.prop] = !0),
                this.options.curAnim))
                  !0 !== this.options.curAnim[i] && (n = !1);
                if (n) {
                  if (
                    null != this.options.overflow &&
                    !o.support.shrinkWrapBlocks
                  ) {
                    var a = this.elem,
                      r = this.options;
                    o.each(['', 'X', 'Y'], function (e, t) {
                      a.style['overflow' + t] = r.overflow[e];
                    });
                  }
                  if (
                    (this.options.hide && o(this.elem).hide(),
                    this.options.hide || this.options.show)
                  )
                    for (var s in this.options.curAnim)
                      o.style(this.elem, s, this.options.orig[s]);
                  this.options.complete.call(this.elem);
                }
                return !1;
              }
              var l = t - this.startTime;
              this.state = l / this.options.duration;
              var c =
                  this.options.specialEasing &&
                  this.options.specialEasing[this.prop],
                p =
                  this.options.easing || (o.easing.swing ? 'swing' : 'linear');
              return (
                (this.pos = o.easing[c || p](
                  this.state,
                  l,
                  0,
                  1,
                  this.options.duration
                )),
                (this.now = this.start + (this.end - this.start) * this.pos),
                this.update(),
                !0
              );
            },
          }),
          o.extend(o.fx, {
            tick: function tick() {
              for (var e = o.timers, t = 0; t < e.length; t++)
                e[t]() || e.splice(t--, 1);
              e.length || o.fx.stop();
            },
            interval: 13,
            stop: function stop() {
              clearInterval(Le), (Le = null);
            },
            speeds: { slow: 600, fast: 200, _default: 400 },
            step: {
              opacity: function opacity(e) {
                o.style(e.elem, 'opacity', e.now);
              },
              _default: function _default(e) {
                e.elem.style && null != e.elem.style[e.prop]
                  ? (e.elem.style[e.prop] =
                      ('width' === e.prop || 'height' === e.prop
                        ? Math.max(0, e.now)
                        : e.now) + e.unit)
                  : (e.elem[e.prop] = e.now);
              },
            },
          }),
          o.expr &&
            o.expr.filters &&
            (o.expr.filters.animated = function (e) {
              return o.grep(o.timers, function (t) {
                return e === t.elem;
              }).length;
            });
        var Re = /^t(?:able|d|h)$/i,
          ze = /^(?:body|html)$/i;
        function Be(e) {
          return o.isWindow(e)
            ? e
            : 9 === e.nodeType && (e.defaultView || e.parentWindow);
        }
        'getBoundingClientRect' in n.documentElement
          ? (o.fn.offset = function (e) {
              var t,
                n = this[0];
              if (e)
                return this.each(function (t) {
                  o.offset.setOffset(this, e, t);
                });
              if (!n || !n.ownerDocument) return null;
              if (n === n.ownerDocument.body) return o.offset.bodyOffset(n);
              try {
                t = n.getBoundingClientRect();
              } catch (e) {}
              var i = n.ownerDocument,
                a = i.documentElement;
              if (!t || !o.contains(a, n)) return t || { top: 0, left: 0 };
              var r = i.body,
                s = Be(i),
                l = a.clientTop || r.clientTop || 0,
                c = a.clientLeft || r.clientLeft || 0,
                p =
                  s.pageYOffset ||
                  (o.support.boxModel && a.scrollTop) ||
                  r.scrollTop,
                d =
                  s.pageXOffset ||
                  (o.support.boxModel && a.scrollLeft) ||
                  r.scrollLeft;
              return { top: t.top + p - l, left: t.left + d - c };
            })
          : (o.fn.offset = function (e) {
              var t = this[0];
              if (e)
                return this.each(function (t) {
                  o.offset.setOffset(this, e, t);
                });
              if (!t || !t.ownerDocument) return null;
              if (t === t.ownerDocument.body) return o.offset.bodyOffset(t);
              o.offset.initialize();
              for (
                var n,
                  i = t.offsetParent,
                  a = t.ownerDocument,
                  r = a.documentElement,
                  s = a.body,
                  l = a.defaultView,
                  c = l ? l.getComputedStyle(t, null) : t.currentStyle,
                  p = t.offsetTop,
                  d = t.offsetLeft;
                (t = t.parentNode) &&
                t !== s &&
                t !== r &&
                (!o.offset.supportsFixedPosition || 'fixed' !== c.position);

              )
                (n = l ? l.getComputedStyle(t, null) : t.currentStyle),
                  (p -= t.scrollTop),
                  (d -= t.scrollLeft),
                  t === i &&
                    ((p += t.offsetTop),
                    (d += t.offsetLeft),
                    !o.offset.doesNotAddBorder ||
                      (o.offset.doesAddBorderForTableAndCells &&
                        Re.test(t.nodeName)) ||
                      ((p += parseFloat(n.borderTopWidth) || 0),
                      (d += parseFloat(n.borderLeftWidth) || 0)),
                    i,
                    (i = t.offsetParent)),
                  o.offset.subtractsBorderForOverflowNotVisible &&
                    'visible' !== n.overflow &&
                    ((p += parseFloat(n.borderTopWidth) || 0),
                    (d += parseFloat(n.borderLeftWidth) || 0)),
                  (c = n);
              return (
                ('relative' !== c.position && 'static' !== c.position) ||
                  ((p += s.offsetTop), (d += s.offsetLeft)),
                o.offset.supportsFixedPosition &&
                  'fixed' === c.position &&
                  ((p += Math.max(r.scrollTop, s.scrollTop)),
                  (d += Math.max(r.scrollLeft, s.scrollLeft))),
                { top: p, left: d }
              );
            }),
          (o.offset = {
            initialize: function initialize() {
              var e,
                t,
                i,
                a = n.body,
                r = n.createElement('div'),
                s = parseFloat(o.css(a, 'marginTop')) || 0;
              o.extend(r.style, {
                position: 'absolute',
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: '1px',
                height: '1px',
                visibility: 'hidden',
              }),
                (r.innerHTML =
                  "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>"),
                a.insertBefore(r, a.firstChild),
                (t = (e = r.firstChild).firstChild),
                (i = e.nextSibling.firstChild.firstChild),
                (this.doesNotAddBorder = 5 !== t.offsetTop),
                (this.doesAddBorderForTableAndCells = 5 === i.offsetTop),
                (t.style.position = 'fixed'),
                (t.style.top = '20px'),
                (this.supportsFixedPosition =
                  20 === t.offsetTop || 15 === t.offsetTop),
                (t.style.position = t.style.top = ''),
                (e.style.overflow = 'hidden'),
                (e.style.position = 'relative'),
                (this.subtractsBorderForOverflowNotVisible =
                  -5 === t.offsetTop),
                (this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== s),
                a.removeChild(r),
                (a = r = e = t = i = null),
                (o.offset.initialize = o.noop);
            },
            bodyOffset: function bodyOffset(e) {
              var t = e.offsetTop,
                n = e.offsetLeft;
              return (
                o.offset.initialize(),
                o.offset.doesNotIncludeMarginInBodyOffset &&
                  ((t += parseFloat(o.css(e, 'marginTop')) || 0),
                  (n += parseFloat(o.css(e, 'marginLeft')) || 0)),
                { top: t, left: n }
              );
            },
            setOffset: function setOffset(e, t, n) {
              var i = o.css(e, 'position');
              'static' === i && (e.style.position = 'relative');
              var a,
                r,
                s = o(e),
                l = s.offset(),
                c = o.css(e, 'top'),
                p = o.css(e, 'left'),
                d = 'absolute' === i && o.inArray('auto', [c, p]) > -1,
                u = {},
                m = {};
              d && (m = s.position()),
                (a = d ? m.top : parseInt(c, 10) || 0),
                (r = d ? m.left : parseInt(p, 10) || 0),
                o.isFunction(t) && (t = t.call(e, n, l)),
                null != t.top && (u.top = t.top - l.top + a),
                null != t.left && (u.left = t.left - l.left + r),
                'using' in t ? t.using.call(e, u) : s.css(u);
            },
          }),
          o.fn.extend({
            position: function position() {
              if (!this[0]) return null;
              var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                i = ze.test(t[0].nodeName) ? { top: 0, left: 0 } : t.offset();
              return (
                (n.top -= parseFloat(o.css(e, 'marginTop')) || 0),
                (n.left -= parseFloat(o.css(e, 'marginLeft')) || 0),
                (i.top += parseFloat(o.css(t[0], 'borderTopWidth')) || 0),
                (i.left += parseFloat(o.css(t[0], 'borderLeftWidth')) || 0),
                { top: n.top - i.top, left: n.left - i.left }
              );
            },
            offsetParent: function offsetParent() {
              return this.map(function () {
                for (
                  var e = this.offsetParent || n.body;
                  e &&
                  !ze.test(e.nodeName) &&
                  'static' === o.css(e, 'position');

                )
                  e = e.offsetParent;
                return e;
              });
            },
          }),
          o.each(['Left', 'Top'], function (e, t) {
            var n = 'scroll' + t;
            o.fn[n] = function (t) {
              var i,
                a = this[0];
              return a
                ? void 0 !== t
                  ? this.each(function () {
                      (i = Be(this))
                        ? i.scrollTo(
                            e ? o(i).scrollLeft() : t,
                            e ? t : o(i).scrollTop()
                          )
                        : (this[n] = t);
                    })
                  : (i = Be(a))
                  ? 'pageXOffset' in i
                    ? i[e ? 'pageYOffset' : 'pageXOffset']
                    : (o.support.boxModel && i.document.documentElement[n]) ||
                      i.document.body[n]
                  : a[n]
                : null;
            };
          }),
          o.each(['Height', 'Width'], function (e, t) {
            var n = t.toLowerCase();
            (o.fn['inner' + t] = function () {
              return this[0] ? parseFloat(o.css(this[0], n, 'padding')) : null;
            }),
              (o.fn['outer' + t] = function (e) {
                return this[0]
                  ? parseFloat(o.css(this[0], n, e ? 'margin' : 'border'))
                  : null;
              }),
              (o.fn[n] = function (e) {
                var i = this[0];
                if (!i) return null == e ? null : this;
                if (o.isFunction(e))
                  return this.each(function (t) {
                    var i = o(this);
                    i[n](e.call(this, t, i[n]()));
                  });
                if (o.isWindow(i))
                  return (
                    ('CSS1Compat' === i.document.compatMode &&
                      i.document.documentElement['client' + t]) ||
                    i.document.body['client' + t]
                  );
                if (9 === i.nodeType)
                  return Math.max(
                    i.documentElement['client' + t],
                    i.body['scroll' + t],
                    i.documentElement['scroll' + t],
                    i.body['offset' + t],
                    i.documentElement['offset' + t]
                  );
                if (void 0 === e) {
                  var a = o.css(i, n),
                    r = parseFloat(a);
                  return o.isNaN(r) ? a : r;
                }
                return this.css(n, 'string' == typeof e ? e : e + 'px');
              });
          });
      })(window),
      gazeta_pl.mobileInfo.isMobileDevice;
  },
  function (e, t) {
    gazeta_pl.mobileInfo.isMobileDevice ||
      ((gazeta_pl.nav = {
        init: function init() {
          var e = window.document.querySelector('#rwdNav .active .p1');
          if (!e) return;
          var t = e.closest('#rwdNav');
          t && t.classList.add('horizontal_submenu');
        },
      }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.nav.init();
      })),
      gazeta_pl.mobileInfo.isMobileDevice;
  },
  function (e, t) {
    (gazeta_pl.superVideo = {
      BUTTON_TEMPLATE:
        '<div class="related-video__trigger"><span class="related-video__trigger-text">rozwi\u0144 ca\u0142y artyku\u0142</span></div>',
      top_section: '',
      bottom_section: '',
      video_trigger: '',
      init: function init() {
        (this.top_section = document.querySelector('.top_section')),
          (this.bottom_section = document.querySelector('.bottom_section'));
        var e = document.querySelector('.video_wrapper'),
          t = document.querySelector('#article_wrapper');
        e &&
          (t.classList.add('main_wrapper--video'),
          gazeta_pl.mobileInfo.isMobileDevice &&
            (window.addEventListener(
              'scroll',
              this.addFixedPosition.bind(this)
            ),
            this.addButton(),
            this.toggleHideClass()));
      },
      addButton: function addButton() {
        this.top_section.insertAdjacentHTML(
          'beforebegin',
          this.BUTTON_TEMPLATE
        ),
          (this.video_trigger = document.querySelector(
            '.related-video__trigger'
          )),
          this.attachEvent();
      },
      attachEvent: function attachEvent() {
        this.video_trigger.addEventListener(
          'click',
          this.hideElements.bind(this)
        );
      },
      hideElements: function hideElements() {
        this.toggleHideClass(), this.toggleButtonText();
      },
      toggleHideClass: function toggleHideClass() {
        [this.top_section, this.bottom_section, this.video_trigger].forEach(
          function (e) {
            e && e.classList.toggle(e.classList[0] + '--hide');
          }
        );
      },
      toggleButtonText: function toggleButtonText() {
        var e = this.top_section.classList.contains(
            this.top_section.classList[0] + '--hide'
          ),
          t = this.getButtonText(e);
        this.setButtonText(t);
      },
      getButtonText: function getButtonText(e) {
        return (e ? 'rozwi\u0144' : 'zwi\u0144') + ' ca\u0142y artyku\u0142';
      },
      setButtonText: function setButtonText(e) {
        this.video_trigger.querySelector('span').textContent = e;
      },
      addFixedPosition: function addFixedPosition() {
        var e = document.querySelector('.video_wrapper');
        document
          .querySelector('.aside_wrapper.section_wrapper')
          .getBoundingClientRect().y < window.scrollY
          ? e.classList.add('video_wrapper--fixed')
          : e.classList.remove('video_wrapper--fixed');
      },
    }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.superVideo.init();
      });
  },
  function (e, t) {
    (gazeta_pl.SocialBar = {
      socialBarWrapper: null,
      bar: null,
      vBar: null,
      waitForFb: null,
      topBoardAds: null,
      init: function init() {
        if (
          (gazeta_pl.mobileInfo.isMobileDevice ||
            (this.socialBarWrapper = document.querySelector('.left_aside')),
          gazeta_pl.mobileInfo.isMobileDevice &&
            (this.socialBarWrapper = document.querySelector('.bottom_section')),
          this.socialBarWrapper)
        ) {
          (this.bar = this.socialBarWrapper.querySelectorAll('.socialBar')),
            (this.vBar = this.socialBarWrapper.querySelector(
              '.socialBar.vertical'
            )),
            (this.topBoardAds = document.querySelector(
              '.adviewDFPBanner.DFP-001-TOPBOARD'
            ));
          var e = document.querySelector('.super_video .socialBar.vertical');
          this.addListnerToCommentsIcon(),
            e && e.classList.add('visible'),
            this.vBar &&
              (this.vBar.classList.add('visible'),
              this.openFBWindow(),
              this.sendToDataLayer());
        }
      },
      addListnerToCommentsIcon: function addListnerToCommentsIcon() {
        var e = document.querySelector('.sc_item.comments');
        e &&
          ((e.style.opacity = '1'),
          e.addEventListener('click', function () {
            document.querySelector('.commentsApp').scrollIntoView(),
              scrollBy(0, -100),
              gazeta_pl_bigdata.sendDataOceanEvent(910, {
                type: 'przycisk',
                section: 'komentarze',
              });
          }));
      },
      openFBWindow: function openFBWindow() {
        [].slice
          .call(document.querySelectorAll('.socialBar .fbShare a'))
          .forEach(function (e) {
            e.addEventListener('click', function (e) {
              var t = window.innerHeight / 2 - 175,
                n = window.innerHeight - 420,
                o = location.origin + location.pathname;
              return (
                e.preventDefault(),
                window.open(
                  'https://www.facebook.com/share.php?u=' + o,
                  'fbpopup',
                  'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=420,height=350,top=' +
                    t +
                    ',left=' +
                    n
                ),
                !1
              );
            });
          });
      },
      sendToDataLayer: function sendToDataLayer() {
        'undefined' != typeof dataLayer &&
          dataLayer.push({
            category: 'Wyswietlenie Podziel si\u0119',
            action: 'FB',
            label: location.origin + location.pathname,
            value: 0,
            nonInteraction: !0,
            event: 'zdarzenie',
          });
      },
    }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.SocialBar.init();
      });
  },
  // function (e, t) {
  //   (gazeta_pl.Article = {
  //     init: function init() {
  //       var e = new Image(),
  //         t = gazeta_pl.readPageData(),
  //         n = t.articleId || 0,
  //         o = 0 == t.pageType ? 0 : 1,
  //         i = t.pageId,
  //         a = new Date().getTime(),
  //         r = document.body.id;
  //       !r ||
  //         ('pageTypeId_7' != r && 'pageTypeId_1' != r) ||
  //         (o &&
  //           (e.src =
  //             'https://p.gazeta.pl/?b={pType}&x={xx}&d=0&o=1&t={time}&w={dx}'
  //               .replace(/{xx}/, n)
  //               .replace(/{pType}/, o)
  //               .replace(/{dx}/, i)
  //               .replace(/{time}/, a)),
  //         gazeta_pl.Article.openGalleryBtn());
  //     },
  //     openGalleryBtn: function openGalleryBtn() {
  //       (document.querySelector('.related_image_wrap.with_gallery') ||
  //         document.querySelectorAll('.gallery-open-button__link')) &&
  //         [].slice
  //           .call(document.querySelectorAll('.gallery-open-button__link'))
  //           .forEach(function (e, t) {
  //             e.addEventListener('click', function (e) {
  //               e.preventDefault(),
  //                 document
  //                   .querySelector('.related_open_text')
  //                   .classList.contains('hide') ||
  //                   gazeta_pl.RelatedImages.showHideRelated();
  //             });
  //           });
  //     },
  //   }),
  //     document.addEventListener('DOMContentLoaded', function (e) {
  //       gazeta_pl.Article.init();
  //     });
  // },
  function (e, t) {
    (gazeta_pl.RelatedImages = {
      RELATED_IMAGE_WRAP_TEMPLATE:
        '\n        <div class="related_image_wrap related_{{IMAGE_INDEX}}">\n          <img {{IMAGE_SRC}} data-src="{{IMAGE_URL}}" alt="{{IMAGE_TITLE}}" title="{{IMAGE_TITLE}}" style="aspect-ratio: {{IMAGE_WIDTH}} / {{IMAGE_HEIGHT}}" />\n           <span class="current_image_count">\n               {{IMAGE_INDEX}} z {{IMAGES_COUNT}}\n           </span>\n           <div class="container">\n               <span class="desc">{{IMAGE_DESC}}<span class="dots {{IMAGE_HIDE}}">...</span><span class="desc_more {{IMAGE_HIDE}}">{{IMAGE_MORE}}</span></span><span class="more {{IMAGE_HIDE}}"><span class="more_arrow"><span></span></span>&nbsp;rozwi\u0144 </span><span class="author"> - {{IMAGE_AUTHOR}}</span>\n           </div>\n        </div>\n    ',
      CONTENTBOARD_TEMPLATE:
        '\n        <div id="contentboard_{{IMAGE_INDEX}}" class="contentboard_wrap">\n           <div id="DFP-{{BAN_CODE}}_{{IMAGE_INDEX}}" class="adviewDFPBanner DFP-{{BAN_CODE}}"></div>\n        </div>\n    ',
      RELATED_IMAGES_LIST_TEMPLATE:
        '\n        <div class="related_images_list" data-bd-viewability-id="relatedImages" data-bd-viewability="1">\n           {{RELATED_IMAGES_WRAPS}}\n           <div class="related_images_list_end">\n               <div class="end_of_gallery">Koniec galerii zdj\u0119\u0107</div>\n               <div class="current_article">\n                   Czytasz:\n                   <span class="current_article_title">{{ART_TITLE}}</span>\n               </div>\n           </div>\n        </d\n    ',
      rendered: !1,
      hiddenClass: 'related_images__element--hide',
      visibleClass: 'related_images__element--visible',
      adsCount: 200,
      init: function init() {
        var _this31 = this;
        return _asyncToGenerator(function* () {
          if (
            ((_this31.moduleWrapper =
              document.querySelector('.related_images')),
            !_this31.moduleWrapper)
          )
            return !1;
          if (
            ((_this31.collage = _this31.moduleWrapper.querySelector(
              '.related_image_wrap.with_gallery'
            )),
            !_this31.collage)
          )
            return !1;
          if (
            ((_this31.galleryTrigger =
              _this31.moduleWrapper.querySelector('.related_open_text')),
            (_this31.galleryPhotoTrigger = _this31.moduleWrapper.querySelector(
              '.related_images_img'
            )),
            (_this31.desc = _this31.moduleWrapper.querySelector('.desc')),
            (_this31.galleryAPI = gazeta_pl.galleryInArticleData),
            !gazeta_pl.mobileInfo.isMobileDevice)
          ) {
            (_this31.offsetFactor = 100), (_this31.adsCode = '011-MIDBOARD');
            var _e22 = document.querySelector(
              '.left_aside .socialBar.vertical'
            );
            if (_e22) {
              var _t19 = _e22.querySelector('.sc_items');
              _this31.closingButton = _this31.appendButton(
                _t19,
                ['sc_item', 'related_gallery_closing_button'],
                'li'
              );
            }
          }
          if (gazeta_pl.mobileInfo.isMobileDevice) {
            (_this31.offsetFactor = 90),
              (_this31.adsCode = '011-MIDBOARD-MOBI');
            var _e23 =
              document.querySelector('.navBox') || _this31.moduleWrapper;
            _this31.closingButton = _this31.appendButton(
              _e23,
              ['related_gallery_closing_button'],
              'div'
            );
          }
          _this31.scrollOffset =
            _this31.getOffsetTop(_this31.collage) - _this31.offsetFactor;
          _this31.getUrlForMTPromo(_this31.galleryAPI)
            ? _this31.addClassForOpeningBtn(_this31.galleryTrigger)
            : (_this31.mappedHeight =
                yield _this31.asynchronouslyCalculateTextHeight()),
            _this31.closingButton &&
              _this31.closingButton.addEventListener(
                'click',
                _this31.showHideRelated.bind(_this31, !0)
              ),
            _this31.galleryTrigger.addEventListener(
              'click',
              _this31.showGallery.bind(_this31)
            ),
            _this31.galleryPhotoTrigger.addEventListener(
              'click',
              _this31.showGallery.bind(_this31)
            );
        })();
      },
      asynchronouslyCalculateTextHeight:
        function asynchronouslyCalculateTextHeight() {
          var _this32 = this;
          return new Promise(function (e, t) {
            var n = document.createElement('div');
            n.classList.add('temp_desc_temp_container'),
              (n.style.width =
                _this32.getUncomputedWidth(_this32.collage) + 'px'),
              (n.innerHTML = '<span class="temp_desc_temp"></span>'),
              document.body.appendChild(n);
            var o = n.querySelector('.temp_desc_temp'),
              i = _this32.galleryAPI.images.map(function (e) {
                return _this32.calculateDescLength(e.title, n, o);
              });
            n.remove(), e(i);
          });
        },
      appendButton: function appendButton(e, t, n) {
        var o = document.createElement(n);
        return (
          t.forEach(function (e) {
            return o.classList.add(e);
          }),
          (o.innerHTML = '<span>Zamknij galeri\u0119</span>'),
          e.insertAdjacentElement('beforeend', o),
          o
        );
      },
      addClassForOpeningBtn: function addClassForOpeningBtn(e) {
        e.classList.add('gazetaPL');
      },
      showGallery: function showGallery(e) {
        if (void 0 === e) return;
        var t = '';
        (t = 'IMG' === e.srcElement.nodeName ? 'PHOTO' : 'BUTTON'),
          scheduler.postTask(
            function () {
              gazeta_pl_bigdata.sendDataOceanEvent(911, {
                type: t,
                position: 'up',
              });
            },
            { priority: 'background' }
          ),
          this.chooseVariant(this.galleryAPI, 'up');
      },
      hideSuperVideo: function hideSuperVideo() {
        var e = document.querySelector('.video_wrapper');
        e && e.classList.add('video_wrapper--hide');
      },
      chooseVariant: function chooseVariant(e, t) {
        if (e) {
          var n = this.getUrlForMTPromo(e);
          n &&
            ('middle' === t &&
              (n = n.replace('amtp_pnHP_gallery', 'amtp_pnHP_gallery2')),
            'middle2' === t &&
              (n = n.replace('amtp_pnHP_gallery', 'amtp_pnHP_gallery3'))),
            n ? this.redirectToMTPromoGallery(n) : this.showHideRelated();
        }
        gazeta_pl.mobileInfo.isMobileDevice && this.hideSuperVideo();
      },
      getUrlForMTPromo: function getUrlForMTPromo(e) {
        return (
          !!(e && e.mtpromo && e.domain) &&
          ''.concat(e.domain).concat(e.mtpromo)
        );
      },
      redirectToMTPromoGallery: function redirectToMTPromoGallery(e) {
        return (window.location = e), !1;
      },
      getOffsetTop: function getOffsetTop(e) {
        var t = e.getBoundingClientRect();
        return window.scrollY + t.y;
      },
      getUncomputedHeight: function getUncomputedHeight(e) {
        var t = window.getComputedStyle(e);
        return (
          parseFloat(t.height) -
          (parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) -
          (parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth))
        );
      },
      getUncomputedWidth: function getUncomputedWidth(e) {
        var t = window.getComputedStyle(e);
        return (
          parseFloat(t.width) -
          (parseFloat(t.paddingLeft) + parseFloat(t.paddingRight)) -
          (parseFloat(t.borderLeftWidth) + parseFloat(t.borderRightWidth))
        );
      },
      slideDown: function slideDown(e, t) {
        var n = setInterval(function () {
          var o = Number(e.scrollHeight),
            i = Number(o);
          i >= o
            ? (clearInterval(n), (e.style.height = 'auto'), t && t())
            : ((o = Number(e.scrollHeight)),
              (i += 1),
              (e.style.height = i + 'px'));
        }, 25);
      },
      fade: function fade(e, t, n) {
        var o = 1;
        'fadeIn' == t &&
          ((o = 0), (e.style.opacity = 0), (e.style.display = 'block'));
        var i = setInterval(function () {
          'fadeIn' == t
            ? (o >= 1 && (clearInterval(i), (e.style.opacity = 1), n && n()),
              (o += 0.1))
            : (o <= 0.1 &&
                (clearInterval(i),
                (e.style.opacity = 0),
                (e.style.display = 'none'),
                n && n()),
              (o -= 0.1)),
            (e.style.opacity = o);
        }, 50);
      },
      showHideRelated: function showHideRelated(e) {
        var _this33 = this;
        var t = this.scrollOffset.toFixed(),
          n = 15;
        e && ((t = 0), (n = 0));
        var _o11 = function o() {
          var e = window.pageYOffset.toFixed() - t;
          e <= n &&
            e >= -n &&
            (window.removeEventListener('scroll', _o11),
            _this33.showHideRelatedCallback());
        };
        window.addEventListener('scroll', _o11),
          _o11(),
          window.scrollTo({ top: t, behavior: 'smooth' });
      },
      showHideRelatedCallback: function showHideRelatedCallback() {
        var _this34 = this;
        this.rendered ||
          (this.buildRelatedImagesList(),
          (this.desc = this.moduleWrapper.querySelector('.desc')),
          (this.relatedImageWrap = this.relatedList.querySelector(
            '.related_image_wrap'
          ))),
          this.galleryTrigger.classList.toggle('hide'),
          this.collage.classList.toggle('hide'),
          this.desc.classList.toggle('hide'),
          this.relatedList.classList.toggle('visible'),
          this.relatedList.classList.contains('visible')
            ? this.relatedList.classList.contains('visible') &&
              (this.fade(this.relatedList, 'fadeIn'),
              this.slideDown(this.relatedList, function () {
                _this34.rendered ||
                  (_this34.addImagesToObserve(), (_this34.rendered = !0));
              }))
            : ((this.relatedList.height = this.relatedList.scrollHeight + 'px'),
              setTimeout(
                this.fade(this.relatedList, 'fadeOut', function () {
                  setTimeout(function () {
                    window.scrollTo({
                      top: _this34.scrollOffset.toFixed(),
                      behavior: 'smooth',
                    });
                  }, 250);
                }),
                250
              )),
          _toConsumableArray(
            this.relatedImageWrap.querySelectorAll(
              '.dots:not(.'.concat(this.hiddenClass, ')')
            )
          ).forEach(function (e) {
            e.classList.remove(_this34.hiddenClass),
              e.classList.add(_this34.visibleClass);
          }),
          _toConsumableArray(
            this.relatedImageWrap.querySelectorAll(
              '.desc_more:not(.'.concat(this.hiddenClass, ')')
            )
          ).forEach(function (e) {
            e.classList.add(_this34.hiddenClass),
              e.classList.remove(_this34.visibleClass);
          }),
          _toConsumableArray(
            this.relatedImageWrap.querySelectorAll(
              '.more:not(.'.concat(this.hiddenClass, ')')
            )
          ).forEach(function (e) {
            e.classList.remove(_this34.hiddenClass),
              e.classList.add(_this34.visibleClass);
          }),
          window.dataLayer &&
            dataLayer.push({
              category: 'Artykul',
              action: 'rozwiniecie_galerii',
              label: 'klik',
              value: 0,
              nonInteraction: !1,
              event: 'zdarzenie',
            });
      },
      loadImages: function loadImages(e, t) {
        var n = gazeta_pl.RelatedImages;
        e.forEach(function (e) {
          if (e.isIntersecting) {
            var o = e.target,
              i = o.querySelector('img'),
              a = i.dataset.src;
            (i.src = a),
              o.classList.add('visible'),
              t.unobserve(o),
              (i.onload = n.addBannersToObserve(o)),
              (i.onerror = function () {
                i.src = a;
              });
          }
        });
      },
      onOut: function onOut(e, t) {
        var n = gazeta_pl.RelatedImages;
        e.forEach(function (e) {
          e.isIntersecting
            ? (n.closingButton.classList.remove('hidden'),
              n.closingButton.classList.add('visible'))
            : !e.isIntersecting &&
              n.closingButton.classList.contains('visible') &&
              (n.closingButton.classList.remove('visible'),
              n.closingButton.classList.add('hidden'));
        });
      },
      addImagesToObserve: function addImagesToObserve() {
        var e = new IntersectionObserver(
            this.loadImages,
            this.setIntersectionObserverOptions()
          ),
          t = _toConsumableArray(
            this.relatedList.querySelectorAll('.related_image_wrap')
          ),
          n = t.shift();
        this.addBannersToObserve(n),
          t.forEach(function (t) {
            return e.observe(t);
          });
      },
      addBannersToObserve: function addBannersToObserve(e) {
        if (window.putBanDFPInViewObject && dfpParams.slots[this.adsCode]) {
          var _t20 = e.nextElementSibling;
          if (_t20.classList.contains('contentboard_wrap')) {
            var _t20$querySelector = _t20.querySelector('div'),
              _e24 = _t20$querySelector.id;
            putBanDFPInViewObject({
              slot: this.adsCode,
              divId: _e24,
              kw: ['relatedImages', 'fif' + this.adsCount],
            }),
              this.adsCount++;
          }
        }
      },
      imageWrapsHtmlTemplate: function imageWrapsHtmlTemplate(e, t, n) {
        var o = e.dim,
          i = e.index,
          a = e.title,
          r = e.url,
          s = e.adAfter,
          l = e.author;
        var c,
          p = 'IH';
        var _o12 = _slicedToArray(o, 2),
          d = _o12[0],
          u = _o12[1];
        c = this.mappedHeight.length
          ? this.mappedHeight[n]
          : this.calculateDescLength(a, t.tempElement, t.spanElement);
        var m = '',
          h = a,
          f = '',
          g = 'hide';
        if (0 != c) {
          var _e25 = c - 35;
          (h = a.slice(0, _e25)), (f = a.slice(_e25)), (g = '');
        }
        gazeta_pl.mobileInfo.isMobileDevice && (p = 'Q');
        var v = window.PhotoAPI ? window.PhotoAPI.photoChangeFormat(r, p) : r;
        return (
          (m += this.RELATED_IMAGE_WRAP_TEMPLATE.replace(/{{IMAGE_INDEX}}/g, i)
            .replace(/{{IMAGE_SRC}}/g, 1 == i ? 'src="'.concat(v, '"') : '')
            .replace(/{{IMAGE_URL}}/g, v)
            .replace(/{{IMAGE_TITLE}}/g, a)
            .replace(/{{IMAGE_DESC}}/g, h)
            .replace(/{{IMAGE_MORE}}/g, f)
            .replace(/{{IMAGE_HIDE}}/g, g)
            .replace(/{{IMAGES_COUNT}}/g, t.imagesArrayLength)
            .replace(/{{IMAGE_AUTHOR}}/g, l)
            .replace(/{{IMAGE_WIDTH}}/g, d)
            .replace(/{{IMAGE_HEIGHT}}/g, u)),
          s &&
            (m += this.CONTENTBOARD_TEMPLATE.replace(
              /{{IMAGE_INDEX}}/g,
              i
            ).replace(/{{BAN_CODE}}/g, this.adsCode)),
          m
        );
      },
      generateTemplate: function generateTemplate() {
        var _this35 = this;
        var e, t;
        this.mappedHeight.length ||
          ((e = document.createElement('div')),
          e.classList.add('temp_desc_temp_container'),
          (e.style.width = this.getUncomputedWidth(this.collage) + 'px'),
          (e.innerHTML = '<span class="temp_desc_temp"></span>'),
          document.body.appendChild(e),
          (t = e.querySelector('.temp_desc_temp')));
        var n = {
            tempElement: e,
            spanElement: t,
            imagesArrayLength: this.galleryAPI.images.length,
          },
          o = this.galleryAPI.images.reduce(function (e, t, o) {
            return '\n                '
              .concat(e, '\n                ')
              .concat(
                _this35.imageWrapsHtmlTemplate(t, n, o),
                '\n            '
              );
          }, '');
        e && e.remove();
        return this.RELATED_IMAGES_LIST_TEMPLATE.replace(
          /{{RELATED_IMAGES_WRAPS}}/,
          o
        ).replace(/{{ART_TITLE}}/, this.galleryAPI.articleTitle);
      },
      setIntersectionObserverOptions:
        function setIntersectionObserverOptions() {
          var e = window.innerHeight;
          var t, n;
          return (
            navigator &&
              navigator.connection &&
              (t = navigator.connection.effectiveType),
            gazeta_pl.mobileInfo.isMobileDevice || (n = e / 2 + 100),
            gazeta_pl.mobileInfo.isMobileDevice && (n = e + 200),
            t && '4g' != t && (n *= 2),
            { rootMargin: '0px 0px '.concat(n, 'px 0px') }
          );
        },
      buildRelatedImagesList: function buildRelatedImagesList() {
        var _this36 = this;
        (this.desc.outerHTML = this.desc.outerHTML + this.generateTemplate()),
          (this.relatedList = this.moduleWrapper.querySelector(
            '.related_images_list'
          )),
          _toConsumableArray(
            this.relatedList.querySelectorAll('.more')
          ).forEach(function (e) {
            e.addEventListener('click', function (e) {
              var t = e.target,
                n = t.parentNode,
                o = n.querySelector('.dots'),
                i = n.querySelector('.desc_more');
              t.classList.add(_this36.hiddenClass),
                o.classList.add(_this36.hiddenClass),
                (i.style.overflow = 'hidden'),
                (i.style.display = 'inline'),
                setTimeout(function () {
                  i.classList.add('show_animation');
                }, 50);
            });
          });
        new IntersectionObserver(this.onOut, {
          rootMargin: '-350px 0px 0px 0px',
        }).observe(this.relatedList);
      },
      checkHowMuchToCut: function checkHowMuchToCut(e, t, n) {
        var o = n.textContent.slice(0, -1);
        n.textContent = o;
        return this.getUncomputedHeight(e) > t
          ? this.checkHowMuchToCut(e, t, n)
          : n.textContent.length;
      },
      calculateDescLength: function calculateDescLength(e, t, n) {
        n.textContent = e;
        var o = 0;
        return (
          this.getUncomputedHeight(t) > 36 &&
            (o = this.checkHowMuchToCut(t, 36, n)),
          o
        );
      },
    }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.RelatedImages.init();
      });
  },
  function (e, t) {
    (gazeta_pl.QuizRelated = {
      init: function init() {
        var _this37 = this;
        var e = document.querySelector('.related_quiz');
        if (e) {
          var t = e.querySelector("form[name='formData']");
          t
            .querySelector('.question_content')
            .addEventListener('click', function (e) {
              e.target &&
                'answer_btn' == e.target.className &&
                ('dataLayer' in window &&
                  dataLayer.push({
                    value: 0,
                    nonInteraction: !1,
                    event: 'zdarzenie',
                    category: 'Quiz_related_w_art_AWD_2018',
                    action: 'Klik w Nastepne_2018',
                    label: t.getAttribute('action') || '',
                  }),
                t.submit());
            }),
            window.gazeta_pl.mobileInfo.isMobileDevice ||
              this.fireOnceOnClientVisible({
                element: e,
                fn: function fn() {
                  return _this37.handleRelatedQuizOverflownContent({
                    relatedQuiz: e,
                  });
                },
              });
        }
      },
      fireOnceOnClientVisible: function fireOnceOnClientVisible(_ref11) {
        var e = _ref11.element,
          t = _ref11.fn;
        new IntersectionObserver(function (e, n) {
          e.forEach(function (e) {
            e.isIntersecting && (t(), n.disconnect());
          });
        }).observe(e);
      },
      getElementHeight: function getElementHeight(_ref12) {
        var e = _ref12.element;
        return e.offsetHeight;
      },
      getElementChildrenHeight: function getElementChildrenHeight(_ref13) {
        var e = _ref13.element;
        return _toConsumableArray(e.children).reduce(function (e, t) {
          return e + t.offsetHeight;
        }, 0);
      },
      handleRelatedQuizOverflownContent:
        function handleRelatedQuizOverflownContent(_ref14) {
          var e = _ref14.relatedQuiz;
          var t = e.querySelector('.related_quiz_container'),
            n = this.getElementHeight({ element: e }),
            o = this.getElementChildrenHeight({ element: t });
          o > n &&
            (e.addEventListener('mouseover', function () {
              t.style.height = o + 'px';
            }),
            e.addEventListener('mouseout', function () {
              t.style.height = '';
            }));
        },
    }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.QuizRelated.init();
      });
  },
  function (e, t) {
    (gazeta_pl.News = {
      heighOfContentElement: [],
      init: function init(e) {
        if ((e = e || document.querySelector('.newsBox'))) {
          var t = e.offsetWidth,
            n = e.querySelectorAll('.newsBox__tab'),
            o = e.querySelector('.newsBox__header'),
            i = o.querySelector('.newsBox--activeTab'),
            a = e.querySelector('.newsBox__content'),
            r = a.querySelectorAll('.newsBox__contentElement ul');
          var s = e.querySelector('.newsBox__arrows__icon--right'),
            l = e.querySelector('.newsBox__arrows__icon--left');
          (gazeta_pl.News.heighOfContentElement =
            gazeta_pl.News.checkHightOfElement(r)),
            gazeta_pl.News.addEventTab(n, o, t, a),
            gazeta_pl.mobileInfo.isMobileDevice ||
              gazeta_pl.News.changePositionArrows(o, n, s, l),
            i.click(),
            o &&
              o.addEventListener('click', function (e) {
                var t = e.target;
                gazeta_pl_bigdata.sendDataOceanEvent(910, {
                  type: 'tab',
                  section: t.textContent,
                });
              });
        }
      },
      checkHightOfElement: function checkHightOfElement(e) {
        for (var t = [], n = 0; n < e.length; n++) {
          var o = e[n].offsetHeight;
          t.push(o);
        }
        return t;
      },
      addEventTab: function addEventTab(e, t, n, o) {
        for (var i = 0; i < e.length; i++)
          e[i].addEventListener(
            'click',
            gazeta_pl.News.eventClicableTab.bind(this, e, t, i, n, o)
          );
      },
      eventClicableTab: function eventClicableTab(e, t, n, o, i, a) {
        var r = e.length;
        var s = gazeta_pl.News.getNumberOfTab(a.target),
          l = gazeta_pl.News.getDetails(a.target),
          c = gazeta_pl.News.getNewHeightOfContent(
            r,
            s,
            gazeta_pl.News.heighOfContentElement
          ),
          p = gazeta_pl.News.calculateHowFarMoveContent(r, s),
          d = gazeta_pl.News.calculateHeaderOffsetLeft(
            e.length,
            l,
            n,
            t.offsetLeft,
            o
          );
        'undefined' != typeof scheduler
          ? scheduler.postTask(
              function () {
                gazeta_pl.News.removeAllActiveTabs(e),
                  gazeta_pl.News.addActiveClass(a.target),
                  gazeta_pl.News.changeHightOfNewsBoxContent(i, c);
              },
              { priority: 'user-visible' }
            )
          : (gazeta_pl.News.removeAllActiveTabs(e),
            gazeta_pl.News.addActiveClass(a.target),
            gazeta_pl.News.changeHightOfNewsBoxContent(i, c)),
          gazeta_pl.mobileInfo.isMobileDevice || gazeta_pl.News.moveTabs(t, d),
          gazeta_pl.mobileInfo.isMobileDevice ||
            gazeta_pl.News.moveContent(i, p, 'desktop'),
          gazeta_pl.mobileInfo.isMobileDevice &&
            gazeta_pl.News.moveContent(i, p, 'mobile');
      },
      getNumberOfTab: function getNumberOfTab(e) {
        var t = e.dataset.tab;
        return Number(t.replace('tab', ''));
      },
      getDetails: function getDetails(e) {
        return { width: e.offsetWidth, left: e.offsetLeft };
      },
      getNewHeightOfContent: function getNewHeightOfContent(e, t, n) {
        return 3 === e ? (t = 3 === t ? 0 : t) : t--, n[t];
      },
      calculateHowFarMoveContent: function calculateHowFarMoveContent(e, t) {
        return (
          3 === e ? (t = 3 === t ? 0 : t) : t--,
          { desktop: 300 * t * -1 + 'px', mobile: 100 * t * -1 + 'vw' }
        );
      },
      calculateHeaderOffsetLeft: function calculateHeaderOffsetLeft(
        e,
        t,
        n,
        o,
        i
      ) {
        var a = t.width,
          r = t.left;
        return Math.abs(o) > r && 0 === n
          ? 0
          : r + a > i + Math.abs(o) && n === e - 1
          ? -1 * (r + a - i)
          : 0 === n || n === e - 1
          ? o
          : gazeta_pl.News.calculateOffsetLeftForCenteringTab(i, a, r);
      },
      removeAllActiveTabs: function removeAllActiveTabs(e) {
        for (var t = 0; t < e.length; t++)
          e[t].classList.remove('newsBox--activeTab');
      },
      addActiveClass: function addActiveClass(e) {
        var t = document.querySelector('.newsBox__arrows--left'),
          n = document.querySelector('.newsBox__arrows--right'),
          o = e.dataset.tab;
        'tab1' === o && gazeta_pl.News.showArrows(t),
          'tab2' === o && gazeta_pl.News.hideArrows(n),
          'tab3' === o && gazeta_pl.News.hideArrows(t),
          e.classList.add('newsBox--activeTab');
      },
      changeHightOfNewsBoxContent: function changeHightOfNewsBoxContent(e, t) {
        e.style.height = t + 'px';
      },
      calculateOffsetLeftForCenteringTab:
        function calculateOffsetLeftForCenteringTab(e, t, n) {
          return -1 * (n - (e - t) / 2);
        },
      moveTabs: function moveTabs(e, t) {
        var n = document.querySelector('.newsBox__arrows__icon--right'),
          o = document.querySelector('.newsBox__arrows__icon--left'),
          i = e.querySelector('.newsBox--activeTab').dataset.tab;
        o.parentElement.classList.add('newsBox__arrows__hide'),
          'tab3' === i
            ? n.parentElement.classList.remove('newsBox__arrows__hide')
            : 'tab1' === i && e.children.length > 2
            ? ((t = 0),
              (e.style.transform = 'translateX(-149px)'),
              n.parentElement.classList.add('newsBox__arrows__hide'),
              o.parentElement.classList.remove('newsBox__arrows__hide'))
            : e.children.length > 2 &&
              ((t = 0),
              o.parentElement.classList.remove('newsBox__arrows__hide'),
              n.parentElement.classList.add('newsBox__arrows__hide')),
          (e.style.left = t + 'px');
      },
      moveContent: function moveContent(e, t, n) {
        var o = '';
        (o = 'desktop' === n ? t.desktop : t.mobile),
          (e.style.transform = 'translateX(' + o + ')');
      },
      changePositionArrows: function changePositionArrows(e, t, n, o) {
        if (!n || !o || t.length <= 2) return;
        var i = n.parentElement,
          a = o.parentElement;
        gazeta_pl.News.showArrows(i),
          n.addEventListener('click', function () {
            var t = e.querySelector('.newsBox--activeTab').dataset.tab;
            if ('tab3' === t) e.style.transform = 'translateX(-149px)';
            else if ('tab1' === t) {
              var _t21 = -149 + Math.abs(e.style.left.replace(/[^-?\d.]/g, ''));
              e.style.transform = 'translateX(' + _t21 + 'px)';
            } else e.style.transform = 'translateX(-149px)';
            gazeta_pl.News.hideArrows(i), gazeta_pl.News.showArrows(a);
          }),
          o.addEventListener('click', function () {
            (e.style.transform = 'translateX(0px)'),
              (e.style.left = 0),
              gazeta_pl.News.hideArrows(a),
              gazeta_pl.News.showArrows(i);
          });
      },
      showArrows: function showArrows(e) {
        e.classList.remove('newsBox__arrows__hide');
      },
      hideArrows: function hideArrows(e) {
        e.classList.add('newsBox__arrows__hide');
      },
    }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.News.init();
      });
  },
  function (e, t) {
    (gazeta_pl.Recommendations = {
      init: function init() {
        if (
          ((gazeta_pl.Recommendations.re =
            document.querySelector('.recommendations')),
          gazeta_pl.Recommendations.re)
        ) {
          if (
            gazeta_pl.Recommendations.re.classList.contains('related-with-lead')
          )
            return;
          this.relatedAdsListener(),
            gazeta_pl.mobileInfo.isMobileDevice &&
              (gazeta_pl.Recommendations.horizontalMobileScrollContainer(),
              gazeta_pl.Recommendations.clickTabEvent()),
            gazeta_pl.Recommendations.checkTabContentLoaded(),
            gazeta_pl.Recommendations.re.addEventListener(
              'click',
              function (e) {
                var t = e.target;
                'LABEL' === e.target.tagName &&
                  t.classList.contains('tab') &&
                  scheduler.postTask(
                    function () {
                      gazeta_pl_bigdata.sendDataOceanEvent(910, {
                        type: 'tab',
                        section: t.textContent,
                      });
                    },
                    { priority: 'background' }
                  );
              }
            );
        }
      },
      checkTabContentLoaded: function checkTabContentLoaded() {
        var e,
          t,
          n,
          o,
          i,
          a = gazeta_pl.Recommendations.re,
          r = [],
          s = 0,
          l = 0,
          c = a.querySelector('.recommendations_tabs_container');
        for (
          t = a.querySelectorAll('.recommendations_box'), n = 0;
          n < t.length;
          ++n
        )
          (r[(e = n + 1)] = a.querySelector('#recommendations_content' + e)),
            r[e] && '' === r[e].textContent.trim()
              ? a
                  .querySelector('.tab[for="recommendations_tab' + e + '"]')
                  .classList.add('hidden')
              : 0 === l && (l = e),
            a.querySelector('#recommendations_tab' + e).checked &&
              !a
                .querySelector('.tab[for="recommendations_tab' + e + '"]')
                .classList.contains('hidden') &&
              (s = e);
        if (
          ((o = a.querySelector('input[name="recommendations_tab"]')), 0 === s)
        )
          (i = a.querySelector('#recommendations_tab' + l)) && (i.checked = !0),
            gazeta_pl.mobileInfo.isMobileDevice &&
              c.setAttribute('data-checked', l);
        else if (gazeta_pl.mobileInfo.isMobileDevice) {
          for (n = 0; n < o.length; n++) o[n].checked = !1;
          (a.querySelector('#recommendations_tab' + s).checked = !0),
            c.setAttribute('data-checked', s);
        }
      },
      horizontalMobileScrollContainer:
        function horizontalMobileScrollContainer() {
          var e,
            t,
            n = gazeta_pl.Recommendations.re,
            o = n.querySelectorAll(
              'label.tab, input[name="recommendations_tab"]'
            ),
            i = '';
          for (t = 0; t < o.length; ++t)
            (i += o[t].outerHTML), o[t].parentNode.removeChild(o[t]);
          (e = document.createElement('div')).setAttribute(
            'class',
            'recommendations_tabs_container'
          ),
            e.setAttribute('data-checked', '1'),
            (e.innerHTML = i),
            n.insertBefore(e, n.childNodes[0]);
        },
      clickTabEvent: function clickTabEvent() {
        var e,
          t = gazeta_pl.Recommendations.re.querySelectorAll('label.tab');
        for (e = 0; e < t.length; e++)
          t[e].addEventListener('click', function (e) {
            var _this38 = this;
            scheduler.postTask(
              function () {
                _this38.parentNode.setAttribute(
                  'data-checked',
                  _this38.getAttribute('for').substr(-1)
                );
              },
              { priority: 'user-visible' }
            );
          });
      },
      relatedAdsListener: function relatedAdsListener() {
        var e = document.querySelector('[id^="091-RELATED"]');
        if (!e) return;
        var t = e.parentNode,
          _n14 = function n(o) {
            var _o$detail = o.detail,
              i = _o$detail.slot,
              a = _o$detail.active;
            if (-1 != i.indexOf('091-RELATED')) {
              if (a) {
                var _e26 = t.querySelector('.related_article_link');
                _e26 && (_e26.style.display = 'none');
              } else t.removeChild(e);
              window.document.removeEventListener(
                'adviewDfpSlotRenderEnd',
                _n14,
                !1
              );
            }
          };
        window.document.addEventListener('adviewDfpSlotRenderEnd', _n14, !1);
      },
    }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.Recommendations.init();
      });
  },
  function (e, t) {
    (gazeta_pl.Footer = {
      init: function init() {
        var e = document.querySelector('.page_footer');
        e &&
          e.querySelectorAll('[data-width]').forEach(function (e) {
            gazeta_pl.gazetaPopWindow(e);
          });
      },
    }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.Footer.init();
      });
  },
  function (e, t) {
    (gazeta_pl.ContentboardRelocation = {
      init: function init() {
        if (document.getElementById('gazeta_article_body')) {
          var e = document.createElement('div'),
            t = document.createElement('script'),
            n = document.querySelector('#gazeta_article_body p');
          window.putBanDFP &&
            n &&
            (gazeta_pl.mobileInfo.isMobileDevice ||
              ((e.id = 'banP007_DFP'),
              (t.text =
                'putBanDFP({slot: "007-CONTENTBOARD", divId:"' + e.id + '"})')),
            gazeta_pl.mobileInfo.isMobileDevice &&
              ((e.id = 'banP0104_DFP'),
              (t.text =
                'putBanDFP({slot: "104-RECTANGLE-MOBI", divId:"' +
                e.id +
                '"})')),
            e.appendChild(t),
            n.parentNode.insertBefore(e, n.nextSibling));
        }
      },
    }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.ContentboardRelocation.init();
      });
  },
  function (e, t) {
    (gazeta_pl.ban067 = (function () {
      function e() {
        var e = (function () {
          var e = 500;
          navigator.connection &&
            (e = '4g' != navigator.connection.effectiveType ? 2e3 : 500);
          return e;
        })();
        setTimeout(function () {
          !(function () {
            !(function () {
              var e = document.querySelector('.ban067__default_wrapper');
              e && (e.style.height = DEFUALT_SLOT_HEIGHT + 'px');
            })();
            var e = document.querySelector(
              '#bottom_wrapper .right_aside'
            ).offsetHeight;
            !(function (e) {
              var t = document.querySelector('#bottom_wrapper .right_aside');
              var n = 1;
              var _iterator2 = _createForOfIteratorHelper(e),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  var o = _step2.value;
                  t.insertAdjacentHTML(
                    'beforeend',
                    '<div style="position: relative; height: '
                      .concat(
                        o,
                        'px;" ><div style="position: sticky; top: 160px;" id="AdUnit-067-RECTANGLE-BTF-'
                      )
                      .concat(n, '"></div></div>')
                  ),
                    window.putBanDFPInViewObject({
                      slot: '067-RECTANGLE-BTF',
                      divId: 'AdUnit-067-RECTANGLE-BTF-' + n,
                    }),
                    n++;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            })(
              (function (e) {
                var t = [];
                var n = e;
                for (; n >= DEFUALT_SLOT_HEIGHT; )
                  t.push(DEFUALT_SLOT_HEIGHT), (n -= DEFUALT_SLOT_HEIGHT);
                n > 0 && t.length > 0
                  ? (t[t.length - 1] += n)
                  : n > 0 && t.push(n);
                return t.shift(), t;
              })(e)
            );
          })();
        }, e);
      }
      return (
        (DEFUALT_SLOT_HEIGHT = 1600),
        (DEFAULT_SLOT_NUMBER_TAKEN = 1),
        {
          init: function init() {
            document.addEventListener('relatedLoadAds', e);
          },
        }
      );
    })()),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.ban067.init();
      });
  },
  function (e, t) {
    (gazeta_pl.LazyLoad = {
      init: function init() {
        this.createObserver();
        var e = _toConsumableArray(
          document.querySelectorAll('.lazy_load img[data-src]')
        );
        e.length && this.addToObserve(e);
      },
      setIntersectionObserverOptions:
        function setIntersectionObserverOptions() {
          var e, t;
          return (
            navigator &&
              navigator.connection &&
              (e = navigator.connection.effectiveType),
            gazeta_pl.mobileInfo.isMobileDevice || (t = 200),
            gazeta_pl.mobileInfo.isMobileDevice && (t = 300),
            e && '4g' != e && (t *= 2),
            { rootMargin: '0px 0px '.concat(t, 'px 0px') }
          );
        },
      createObserver: function createObserver() {
        var _this39 = this;
        this.observer = new IntersectionObserver(function (e, t) {
          e.forEach(function (e) {
            if (e.isIntersecting) {
              var _t22 = e.target,
                n = _t22.dataset,
                o = n.src;
              if (gazeta_pl.mobileInfo.isMobileDevice) {
                var _e27 = n.srcMobile;
                _e27 && (o = _e27);
              }
              _t22.setAttribute('src', o),
                _t22.addEventListener('load', function () {
                  return _t22.classList.add('loaded');
                }),
                _t22.addEventListener('error', function () {
                  _t22.classList.contains('error') ||
                    (_t22.classList.add('error'),
                    setTimeout(function () {
                      _t22.setAttribute('src', o + '?t=1');
                    }, 2e3));
                }),
                _this39.observer.unobserve(e.target);
            }
          });
        }, this.setIntersectionObserverOptions());
      },
      addToObserve: function addToObserve(e) {
        var _this40 = this;
        e.forEach(function (e) {
          return _this40.observer.observe(e);
        });
      },
    }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.LazyLoad.init();
      });
  },
  function (e, t) {
    (gazeta_pl.YoutubeThumb = {
      init: function init() {
        var e =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : '#gazeta_article_body';
        var t = document.querySelector(e);
        if (!t) return !1;
        var n = t.querySelectorAll('.youtube-player');
        if (!n.length) return !1;
        this.renderYoutubeThumbs(n);
      },
      renderYoutubeThumbs: function renderYoutubeThumbs(e) {
        var _this41 = this;
        e.forEach(function (e) {
          var t = (e.dataset && e.dataset.id) || !1;
          if (!t) return !1;
          e.insertAdjacentHTML('afterbegin', _this41.getYoutubeThumbnail(t));
          var n = e.querySelector('.youtube-video');
          n.addEventListener(
            'click',
            _this41.renderYoutubePlayer.bind(_this41, {
              thumbContainer: n,
              youtubePlayer: e,
              videoId: t,
            })
          );
        });
      },
      getYoutubeThumbnail: function getYoutubeThumbnail(e) {
        return '\n            <div class="youtube-video">\n                <img class="youtube-thumb" src="//i.ytimg.com/vi/'.concat(
          e,
          '/hqdefault.jpg" />\n                <div class="play-button"></div>\n            </div>'
        );
      },
      renderYoutubePlayer: function renderYoutubePlayer(e) {
        e.thumbContainer.remove(),
          e.youtubePlayer.appendChild(this.getYoutubeIframe(e.videoId));
      },
      getYoutubeIframe: function getYoutubeIframe(e) {
        var t = document.createElement('iframe');
        return (
          t.classList.add('youtube-iframe'),
          (t.src = '//www.youtube.com/embed/'.concat(
            e,
            '?allowfullscreen=true&autoplay=0&border=0&wmode=opaque&controls=1&showinfo=0'
          )),
          t
        );
      },
    }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.YoutubeThumb.init();
      });
  },
  function (e, t) {
    gazeta_pl.mobileInfo.isMobileDevice ||
      ((gazeta_pl.addUrlToClipboard = {
        url: window.location.href,
        init: function init() {
          var e = this.checkPattern(this.url),
            t =
              document.querySelector('#content') ||
              document.querySelector('#main_wrapper') ||
              document.querySelector('#gazeta_quiz');
          t && e && t.addEventListener('copy', this.copyToClipboard);
        },
        createText: function createText() {
          return (
            window.getSelection().toString() +
            '\r\nWi\u0119cej: ' +
            this.url.split('?')[0]
          );
        },
        copyToClipboard: function copyToClipboard(e) {
          if ((e.preventDefault(), !e.clipboardData)) return !1;
          var t = this.createText();
          return e.clipboardData.setData('Text', t), !0;
        },
        checkPattern: function checkPattern(e) {
          return /\/1,|\/7,|\/56,|\/13,/.test(e);
        },
      }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.addUrlToClipboard.init();
      })),
      gazeta_pl.mobileInfo.isMobileDevice;
  },
  function (e, t) {
    (gazeta_pl.onn = {
      init: function init() {
        this.createObserver(), this.listenerOnNetwork();
        var e = _toConsumableArray(document.querySelectorAll('.onnOnDemand'));
        e.length && this.addToObserve(e);
      },
      createObserver: function createObserver() {
        var _this42 = this;
        this.observer = new IntersectionObserver(function (e) {
          e.forEach(function (e) {
            if (e.isIntersecting) {
              var _t23 = e.target;
              _this42.prepareVideoToWatch(_t23),
                _this42.observer.unobserve(_t23);
            }
          });
        });
      },
      prepareVideoToWatch: function prepareVideoToWatch(e) {
        var t = e.dataset.src;
        if (
          !document.querySelector('script[src*="'.concat(t, '"]')) &&
          !document.querySelector('script[data-src*="'.concat(t, '"]')) &&
          e.dataset.src
        ) {
          var n = document.createElement('script');
          (n.src = t),
            e.nextSibling
              ? e.parentNode.insertBefore(n, e.nextSibling)
              : e.parentNode.appendChild(n);
        }
      },
      addToObserve: function addToObserve(e) {
        var _this43 = this;
        e.forEach(function (e) {
          return _this43.observer.observe(e);
        });
      },
      listenerOnNetwork: function listenerOnNetwork() {
        var e = new Set();
        window.addEventListener('message', function (t) {
          if (/^onntv:\/\//.test(t.data)) {
            var n = t.data.substring('onntv://'.length),
              o = JSON.parse(n),
              i = o.videoId,
              a = o.comm,
              r = o.adtime,
              s = o.adduration,
              l = o.vcm;
            if (1 === l) {
              if (e.has(i)) return;
              console.log(
                '### sending event 503',
                'wideo_id: '
                  .concat(i, ', vcm: ')
                  .concat(l, ', comm: ')
                  .concat(a)
              ),
                gazeta_pl_bigdata.sendDataOceanEvent(503, {
                  wideo_id: i,
                  vcm: l,
                }),
                e.add(i);
            }
            'pl_minhidden' === a &&
              gazeta_pl_bigdata.sendDataOceanEvent(912, {
                wideo_id: i,
                ad_time: r,
                ad_duration: s,
              });
          }
        });
      },
    }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.onn.init();
      });
  },
  function (e, t) {
    document.addEventListener(
      'abtshieldTracker',
      function (e) {
        var t = e.detail;
        window.addEventListener(
          'load',
          function () {
            if ('function' == typeof abtshieldTracker) {
              abtshieldTracker('send', 'event', 'click', 'comment', 'add', t);
              (xhr = new XMLHttpRequest()),
                (xhr.onreadystatechange = function () {
                  if (
                    4 === xhr.readyState &&
                    xhr.status >= 200 &&
                    xhr.status < 300
                  ) {
                    var e = JSON.parse(xhr.responseText);
                    window.dataLayer &&
                      dataLayer.push({ event: 'allCnet', allcnetId: e.iuid }),
                      (document.cookie = 'iuid=' + e.iuid);
                  }
                }),
                xhr.open('GET', 'https://d1.abtshield.com/rcr?sid=a1.01'),
                xhr.send();
            }
          },
          !1
        );
      },
      !1
    );
  },
  function (e, t) {
    (gazeta_pl.premiumBoard = {
      init: function init() {
        var e = document.body,
          t = function t() {
            e.classList.add('DFP-premiumBoardLoadedAds');
          },
          n = document.querySelector('.navigationWithAdsPass')
            ? function (t) {
                if (!gazeta_pl.mobileInfo.isMobileDevice) {
                  var _n15 = t.detail;
                  var o = 'adviewDFPpremiumBoard--';
                  e.classList.remove(
                    'adviewDFPpremiumBoard--open',
                    'adviewDFPpremiumBoard--close',
                    'adviewDFPpremiumBoard--mini',
                    'adviewDFPpremiumBoard--hidden'
                  ),
                    _n15.inView ? (o += _n15.action) : (o += 'hidden'),
                    e.classList.add(o);
                }
              }
            : function (t) {
                var n = document.querySelector('.mod_hat2014'),
                  o = n ? n.offsetHeight : 0,
                  i = t.detail,
                  a = parseInt('-' + i.height),
                  r = document.querySelector('#DFP_PREMIUMBOARD');
                r &&
                  (gazeta_pl.mobileInfo.isMobileDevice &&
                    'open' == i.action &&
                    (r.style.transform = 'translateY('.concat(a, 'px)')),
                  i.fixed
                    ? ((e.style.paddingTop = i.height + o + 'px'),
                      'open' == i.action &&
                        0 == window.pageYOffset &&
                        (e.style.paddingTop = i.openHeight + a + o + 'px'),
                      'close' == i.action &&
                        (e.style.paddingTop = i.height + o + 'px'),
                      i.inView && (r.style.top = o + 'px'),
                      e.style.setProperty(
                        'padding-top',
                        e.style.paddingTop,
                        'important'
                      ))
                    : (e.style.paddingTop = o + 'px'));
              };
        (e.classList.contains('quiz') &&
          !document.querySelector('.questions_stage.multipage')) ||
          (document.addEventListener('adviewDfpPremiumBoard', n),
          document.addEventListener('adviewDfpPremiumBoard', t, { once: !0 }));
      },
    }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.premiumBoard.init();
      });
  },
  function (e, t) {
    (gazeta_pl.seoFaq = {
      init: function init() {
        var e = document.querySelector('#faq_json');
        if (!e) return;
        var t = e.innerText,
          n = JSON.parse(t),
          o = document.querySelector('#faq_html');
        this.createHtml(n, o);
      },
      createHtml: function createHtml(e, t) {
        var n = '';
        e.mainEntity.forEach(function (e) {
          n += '<div class="seo_faq__question">'
            .concat(
              e.name,
              '</div>\n                    <div class="seo_faq__answer"> '
            )
            .concat(e.acceptedAnswer.text, ' </div>');
        }),
          t.insertAdjacentHTML('beforeend', n);
        var o = t.querySelectorAll('.seo_faq__question');
        this.initQuestionEvent(o);
      },
      initQuestionEvent: function initQuestionEvent(e) {
        var _this44 = this;
        e.forEach(function (t) {
          t.addEventListener('click', function (t) {
            _this44.handleSelectedClass(t, e);
          });
        });
      },
      handleSelectedClass: function handleSelectedClass(e, t) {
        t.forEach(function (e) {
          e.classList.remove('seo_faq__question--selected');
        }),
          e.target.classList.add('seo_faq__question--selected');
      },
    }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.seoFaq.init();
      });
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    var o = n(18),
      i = n(23),
      a = n(24),
      r = n(25),
      s = n(26),
      l = n(27),
      c = n(28),
      p = n(29),
      d = n(30),
      u = n(31),
      m = n(32),
      h = n(33),
      f = n(34);
    window.gazeta_pl.redux.reducers.push({ loadComments: a.default }),
      window.gazeta_pl.redux.reducers.push({ fetchComments: r.default }),
      window.gazeta_pl.redux.middlewares.push(s.default),
      document.addEventListener('DOMContentLoaded', function () {
        setTimeout(function () {
          var e = window.gazeta_pl.redux.store,
            t = new o.default(e),
            n = new c.default(e),
            a = new i.default(e),
            r = new l.default(e),
            s = new p.default(e),
            g = new d.default(e),
            v = new u.default(e),
            _ = new m.default(e),
            y = new h.default(e),
            b = new f.default(e);
          y.init(),
            t.init(
              function () {
                n.init(t, _, r),
                  a.init(t, r),
                  r.init(t, a, n, s, g, v, _, b),
                  s.init(a, t, g),
                  g.init(t),
                  v.init(t),
                  _.init(t),
                  b.init(t, _);
              },
              r,
              v
            );
        }, 0),
          gazeta_pl.MFA_login && gazeta_pl.MFA_login.init();
      });
  },
  function (e, t, n) {},
  function (e, t) {
    e.exports = function (e) {
      var t = 'undefined' != typeof window && window.location;
      if (!t) throw new Error('fixUrls requires window.location');
      if (!e || 'string' != typeof e) return e;
      var n = t.protocol + '//' + t.host,
        o = n + t.pathname.replace(/\/[^\/]*$/, '/');
      return e.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function (e, t) {
          var i,
            a = t
              .trim()
              .replace(/^"(.*)"$/, function (e, t) {
                return t;
              })
              .replace(/^'(.*)'$/, function (e, t) {
                return t;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)
            ? e
            : ((i =
                0 === a.indexOf('//')
                  ? a
                  : 0 === a.indexOf('/')
                  ? n + a
                  : o + a.replace(/^\.\//, '')),
              'url(' + JSON.stringify(i) + ')');
        }
      );
    };
  },
  function (e, t, n) {},
  function (e, t, n) {},
  function (e, t, n) {},
  function (e, t, n) {},
  function (e, t, n) {},
  function (e, t) {},
  function (e, t, n) {
    'use strict';
    n.r(t);
    var o = n(11);
    (gazeta_pl.content2speech = {
      iid: Date.now(),
      isPhone: 'PHONE' === gazeta_pl.device,
      movies: [],
      volume: 0.8,
      playBtnClass: 'c2sPlayer__inArticleControl',
      playBtnElement: void 0,
      mode: 'loaded',
      playerModes: {},
      langPL: {
        loading: 'Pos\u0142uchaj artyku\u0142u (\u0142aduj\u0119...)',
        loaded: 'Pos\u0142uchaj artyku\u0142u',
        playing: 'Zatrzymaj',
        paused: 'Wzn\xF3w',
        wait: 'Wczytywanie',
      },
      langUK: {
        loading:
          '\u041F\u0440\u043E\u0441\u043B\u0443\u0445\u0430\u0442\u0438 \u0441\u0442\u0430\u0442\u0442\u044E (\u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0443\u044E...)',
        loaded:
          '\u041F\u0440\u043E\u0441\u043B\u0443\u0445\u0430\u0442\u0438 \u0441\u0442\u0430\u0442\u0442\u044E',
        playing: '\u0421\u0442\u043E\u043F',
        paused: '\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438',
        wait: '\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F',
      },
      ssid: [],
      adIsPlaying: !1,
      _playerContainerDOM: {},
      oldHat: document.querySelector('.mod_hat2014'),
      isPremiumArticle: !1,
      premiumboard: void 0,
      currentArticleViewed: void 0,
      currentArticleListen: void 0,
      loadedArts: [],
      init: function init() {
        var _this45 = this;
        var _this$_getArticleData = this._getArticleData(),
          e = _this$_getArticleData.articleId,
          t = _this$_getArticleData.pageRoot,
          n = ['ukraina', 'ukrayina'].includes(t);
        (this.playerModes = n ? this.langUK : this.langPL),
          (this.currentArticleViewed = e),
          this.getSID(e),
          this.loadedArts.push(e),
          this.ssid.length &&
            !document.querySelector('#onn-player__container') &&
            (this.isPremiumBoardExists(),
            this._checkIfPremiumArticle(),
            this._setContainerForPlayerBtn(e),
            this.createPlayBtn(),
            this.playBtnElement.classList.add('loading'),
            (this.mode = 'loading'),
            this.setLabelText(),
            this.createPlayer(),
            this.getElements(),
            this.setPlayerPosition(),
            this.loadPlayer(e),
            this.setListeners(),
            window.addEventListener('message', function (e) {
              return _this45.receiveMediaInfo(e);
            }),
            window.addEventListener('dynpageview', function (e) {
              return _this45._newArticleIsInView(e);
            }),
            window.addEventListener('dynpagechange', function (e) {
              return _this45._newArticleIsInView(e);
            }),
            window.addEventListener(
              'movie_set',
              function (e) {
                Object.keys(_this45.movies).length > 1 &&
                  (_this45.sendCommand2Player('playpause'),
                  _this45.playPauseBtnClick(!0));
              },
              !1
            ));
      },
      _setContainerForPlayerBtn: function _setContainerForPlayerBtn(e) {
        if (this.isPremiumArticle)
          this.container = document.querySelector(
            '.social__icons--left:not(.active)'
          );
        else {
          var _e28 = gazeta_pl.mobileInfo.isMobileDevice
            ? '.socialBar:not(.active)'
            : '.author_and_date:not(.active)';
          this.container = document.querySelector(_e28);
        }
        return (
          this.container &&
            ((this.container.dataset.xx = e),
            this.container.classList.add('active')),
          this.container
        );
      },
      _getArticleData: function _getArticleData() {
        return gazeta_pl.readPageData(location.href);
      },
      _checkIfPremiumArticle: function _checkIfPremiumArticle() {
        this.isPremiumArticle = !!document.querySelector(
          '#premiumArticle__mainArticle'
        );
      },
      _newArticleIsInView: function _newArticleIsInView(e) {
        (this.currentArticleViewed = e.target.dataset.xx),
          -1 === this.loadedArts.indexOf(this.currentArticleViewed) &&
            this.loadedArts.push(this.currentArticleViewed);
        var t = e.ssid ? JSON.parse(e.ssid) : void 0;
        if (t) {
          if (
            (this.ssid[this.currentArticleViewed] ||
              (this.ssid[this.currentArticleViewed] = t[location.hostname]),
            'dynpageview' === e.eventName)
          ) {
            var _e29;
            this._setContainerForPlayerBtn(this.currentArticleViewed),
              this.createPlayBtn();
            var _iterator3 = _createForOfIteratorHelper(this.loadedArts),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                var _t24 = _step3.value;
                _t24 !== this.currentArticleViewed &&
                  ((_e29 = this.isPremiumArticle
                    ? document.querySelector(
                        '.social__icons--left:not(.active)'
                      )
                    : document.querySelector(
                        '.author_and_date .c2sPlayer__inArticleControl'
                      )),
                  _e29 && _e29.classList.add('hidden'));
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        } else {
          var _e30 = this._setContainerForPlayerBtn(this.currentArticleViewed);
          _e30 &&
            (_e30.classList.add('active'),
            _e30.parentNode.classList.add('social__icons--no_c2s'));
        }
      },
      isPremiumBoardExists: function isPremiumBoardExists() {
        var _this46 = this;
        document.addEventListener(
          'adviewDfpPremiumBoard',
          function (e) {
            'close' === e.detail.action
              ? (_this46.premiumboard = e.detail.height)
              : 'open' === e.detail.action &&
                (_this46.premiumboard =
                  e.detail.openHeight - e.detail.miniHeight - e.detail.height),
              _this46.setPositionWhenPB(_this46.premiumboard);
          },
          !1
        );
      },
      getSID: function getSID(e) {
        if (gazeta_pl && gazeta_pl.onnSid)
          return (this.ssid[e] = gazeta_pl.onnSid);
      },
      getElements: function getElements() {
        (this.lektorContainer = this._playerContainerDOM.querySelector(
          '#onn-player__player'
        )),
          (this._c2s_audioBtn =
            this._playerContainerDOM.querySelector('#c2s_audioBtn')),
          (this._c2s_volumeBtn =
            this._playerContainerDOM.querySelector('#c2s_volumeBtn')),
          (this._c2s_closeBtn =
            this._playerContainerDOM.querySelector('#c2s_closeBtn')),
          (this._c2s_streamRange =
            this._playerContainerDOM.querySelector('#c2s_audioSlider')),
          (this._c2s_volumeRange =
            this._playerContainerDOM.querySelector('#c2s_volumeSlider')),
          (this._endTime =
            this._playerContainerDOM.querySelector('#c2s_endTime')),
          (this._currentTime =
            this._playerContainerDOM.querySelector('#c2s_currentTime')),
          (this._c2s_timestamp = this._playerContainerDOM.querySelector(
            '.c2sPlayer__wrapper__audioSlider__timestamp'
          )),
          (this._adElement = this._playerContainerDOM.querySelector(
            '.c2sPlayer__wrapper__audioSlider__ad'
          ));
      },
      setPlayerPosition: function setPlayerPosition(e) {
        this.manageElementClass(
          this._playerContainerDOM,
          this.isPhone ? 'playerHiddenBottom' : 'playerHiddenTop',
          e ? 'toggle' : void 0
        ),
          this.setPositionWhenPB();
      },
      setPositionWhenPB: function setPositionWhenPB() {
        this.premiumboard &&
          !this.whenPlayerIsHidden() &&
          this.oldHat &&
          !this.isPhone &&
          (this._playerContainerDOM.style.transform =
            'translateY(' + this.premiumboard + 'px)');
      },
      whenPlayerIsHidden: function whenPlayerIsHidden() {
        return (
          this.manageElementClass(
            this._playerContainerDOM,
            'playerHiddenBottom',
            'contains'
          ) ||
          this.manageElementClass(
            this._playerContainerDOM,
            'playerHiddenTop',
            'contains'
          )
        );
      },
      createPlayer: function createPlayer() {
        this.oldHat ? this.insertPlayerToOldHat() : this.insertPlayerToNewHat();
      },
      insertPlayerToOldHat: function insertPlayerToOldHat() {
        this.premiumboard
          ? this.premiumboard.insertAdjacentHTML('afterEnd', o.default)
          : document.body.insertAdjacentHTML('afterbegin', o.default),
          this.getPlayerElement(),
          this._playerContainerDOM.classList.add('oldHatFix');
      },
      insertPlayerToNewHat: function insertPlayerToNewHat() {
        this.isPhone
          ? document.body.insertAdjacentHTML('afterbegin', o.default)
          : document
              .querySelector('.top_wrapper')
              .insertAdjacentHTML('beforeend', o.default),
          this.getPlayerElement();
      },
      getPlayerElement: function getPlayerElement() {
        this._playerContainerDOM = document.querySelector(
          '#onn-player__container'
        );
      },
      hideHpNotification: function hideHpNotification() {
        var e = document.querySelector(
          '.hp-notification-mobile, .hp-notification-top, .hp-notification-bottom'
        );
        e &&
          (this.manageElementClass(e, 'hp-notification-mobile--show', 'remove'),
          this.manageElementClass(e, 'hp-notification-bottom--show', 'remove'),
          this.manageElementClass(e, 'hp-notification-top--show', 'remove'));
      },
      manageElementClass: function manageElementClass(e, t, n) {
        switch (n) {
          case 'remove':
            e.classList.remove(t);
            break;
          case 'toggle':
            e.classList.toggle(t);
            break;
          case 'contains':
            return e.classList.contains(t);
          default:
            e.classList.add(t);
        }
      },
      startRead: function startRead(e) {
        this.movies[e]
          ? this.playPauseBtnClick()
          : (this.loadPlayer(e), (this.mode = 'wait'), this.setLabelText());
      },
      createPlayBtn: function createPlayBtn() {
        var _this47 = this;
        if (
          !document.querySelector(
            '.'
              .concat(this.playBtnClass, ' button[data-xx="')
              .concat(this.currentArticleViewed, '"]')
          )
        ) {
          var _e31 = document.createElement('div'),
            _t25 = document.createElement('span'),
            _n16 = document.createElement('button');
          (_n16.dataset.xx = this.currentArticleViewed),
            (_t25.dataset.xx = this.currentArticleViewed),
            (_t25.innerText = this.playerModes.loaded),
            _e31.classList.add(this.playBtnClass),
            _e31.appendChild(_t25),
            _e31.appendChild(_n16),
            _n16.addEventListener(
              'click',
              function (e) {
                _this47.startRead(e.target.dataset.xx);
              },
              !1
            ),
            _t25.addEventListener(
              'click',
              function (e) {
                _this47.startRead(e.target.dataset.xx);
              },
              !1
            ),
            this.container.appendChild(_e31),
            (this.playBtnElement = _e31),
            (this._playPauseBtn = _n16),
            (this._playPauseBtnLabel = _t25);
        }
      },
      playPauseBtnClick: function playPauseBtnClick(e) {
        var t = !1;
        'playing' !== this.mode &&
          this.whenPlayerIsHidden() &&
          this.setPlayerPosition(!0),
          e && (t = !0),
          this.playPauseMovie(!1, t, e);
      },
      loadPlayer: function loadPlayer(e) {
        var _this48 = this;
        if (!document.querySelector('script[data-xx="'.concat(e, '"]'))) {
          var _t26 = document.createElement('script');
          (_t26.dataset.xx = e),
            (_t26.className = 'c2s_player'),
            (_t26.src = 'https://video.onnetwork.tv/embed.php?sid='
              .concat(this.ssid[e], '&cId=onn-player__player&iid=')
              .concat(this.iid, '&isCpl=1&ap=0')),
            location.href.includes('?onnTestAudio=1') &&
              (_t26.src +=
                '&vasturl=https%3A%2F%2Fvast.onnetwork.tv%2Faudio.php'),
            (_t26.async = !0),
            _t26.addEventListener(
              'load',
              function () {
                _this48.currentArticleListen = e;
              },
              !1
            ),
            document.body.appendChild(_t26);
        }
      },
      sendCommand2Player: function sendCommand2Player(e, t, n) {
        n || (n = this.iid),
          window.ONTVsendCommand && window.ONTVsendCommand(e, n, t || void 0);
      },
      playPauseMovie: function playPauseMovie(e, t, n) {
        var o;
        e
          ? (o = 'playing')
          : ((o = this.mode),
            t
              ? ((this.mode = 'loaded'), this.sendCommand2Player('pause'))
              : ((this.mode = this.manageElementClass(
                  this.lektorContainer,
                  'playing',
                  'contains'
                )
                  ? 'paused'
                  : 'playing'),
                this.sendCommand2Player('playpause'))),
          n && ((o = this.mode), (this.mode = 'playing')),
          this.manageElementClass(this._c2s_audioBtn, o, 'remove'),
          this.manageElementClass(this._c2s_audioBtn, this.mode),
          (this._playPauseBtn.className = this.mode),
          this.setLabelText();
      },
      setLabelText: function setLabelText() {
        this._playPauseBtnLabel.innerText = this.playerModes[this.mode];
      },
      setListeners: function setListeners() {
        var _this49 = this;
        this._c2s_audioBtn.addEventListener(
          'click',
          function (e) {
            _this49.playPauseMovie();
          },
          !1
        ),
          this._c2s_volumeBtn.addEventListener('click', function (e) {
            _this49.setMute(), _this49.volumeBtnClass();
          }),
          this._c2s_closeBtn.addEventListener('click', function () {
            _this49.playPauseMovie(!1, !0),
              _this49.manageElementClass(
                _this49._playerContainerDOM,
                _this49.isPhone ? 'playerHiddenBottom' : 'playerHiddenTop',
                'add'
              ),
              _this49.premiumboard &&
                _this49.whenPlayerIsHidden() &&
                _this49.oldHat &&
                (_this49._playerContainerDOM.style.transform =
                  'translateY(0px)');
          }),
          this._c2s_streamRange.addEventListener(
            'change',
            function (e) {
              _this49.seekStream(e);
            },
            !1
          ),
          this._c2s_streamRange.addEventListener(
            'input',
            function (e) {
              _this49.seekStream(e);
            },
            !1
          ),
          this._c2s_volumeRange.addEventListener(
            'change',
            function (e) {
              _this49.seekVolume(e);
            },
            !1
          ),
          this._c2s_volumeRange.addEventListener(
            'input',
            function (e) {
              _this49.seekVolume(e);
            },
            !1
          );
      },
      setStreamSliderStyleVariables: function setStreamSliderStyleVariables() {
        this._c2s_streamRange.style.setProperty(
          '--max',
          this._c2s_streamRange.max
        ),
          this._c2s_streamRange.style.setProperty(
            '--value',
            this._c2s_streamRange.value
          );
      },
      setVolumeSliderStyleVariables: function setVolumeSliderStyleVariables() {
        this._c2s_volumeRange.style.setProperty(
          '--value',
          this._c2s_volumeRange.value
        );
      },
      seekStream: function seekStream(e) {
        this.sendCommand2Player('seek', ''.concat(e.target.value));
      },
      seekVolume: function seekVolume(e) {
        (this.volume = Number(e.target.value) / 100),
          this.sendCommand2Player('setvolume', ''.concat(this.volume)),
          0 === this.volume
            ? (this.setMute(), this.volumeBtnClass())
            : this.setMute('remove');
      },
      isAudioPlayer: function isAudioPlayer(e) {
        return 'onn-player__player' === e.containerId;
      },
      volumeSet: function volumeSet(e) {
        this.isAudioPlayer(e) &&
          ((this._c2s_volumeRange.value = ~~(100 * e.subject)),
          this.setVolumeSliderStyleVariables());
      },
      setMute: function setMute(e) {
        this.manageElementClass(this._c2s_volumeBtn, 'mute', e || 'toggle');
      },
      volumeBtnClass: function volumeBtnClass() {
        this.manageElementClass(this._c2s_volumeBtn, 'mute', 'contains')
          ? this.sendCommand2Player('setvolume', '0')
          : this.sendCommand2Player('setvolume', ''.concat(this.volume));
      },
      isAudioPlayerExists: function isAudioPlayerExists(e) {
        return this.isAudioPlayer(e);
      },
      movieSet: function movieSet(e) {
        this.isAudioPlayerExists(e) &&
          !this.movies[this.currentArticleViewed] &&
          (this.playBtnElement.classList.remove('loading'),
          (this.mode = 'loaded'),
          this.setLabelText(),
          (this.movies[this.currentArticleViewed] = e)),
          this.initMovieBeforePlaying();
        var t = new Event('movie_set');
        (t.xx = this.currentArticleViewed), window.dispatchEvent(t);
      },
      initMovieBeforePlaying: function initMovieBeforePlaying() {
        (this._c2s_streamRange.max =
          this.movies[this.currentArticleViewed].videoDuration),
          (this._endTime.textContent = this.timeFormat(
            this.splitTime(this.movies[this.currentArticleViewed].videoDuration)
          )),
          this.sendCommand2Player('setvolume', this.volume),
          this.volumeSet(this.volume);
      },
      adSet: function adSet() {
        this.manageStreamRange(!0);
      },
      manageStreamRange: function manageStreamRange(e) {
        this._c2s_streamRange.disabled = !!e;
      },
      manageAdTimestamp: function manageAdTimestamp(e) {
        var t = 'Reklama';
        if (
          (this.manageElementClass(this._adElement, 'hidden', 'remove'),
          e && 'adprogress' === e.comm && e.target > 0)
        ) {
          t = ''
            .concat(t, ' ')
            .concat(this.splitTime(~~(e.target - e.subject)).seconds, ' s');
        }
        this._adElement.innerText = t;
      },
      movieProgress: function movieProgress(e) {
        this.isAudioPlayer(e) &&
          ((this._c2s_streamRange.value = ~~e.subject),
          (this._currentTime.textContent = this.timeFormat(
            this.splitTime(~~e.subject)
          )),
          this.setStreamSliderStyleVariables());
      },
      adProgress: function adProgress(e, t) {
        t &&
          ((this._c2s_streamRange.max = ~~e.target),
          (this._c2s_streamRange.value = ~~e.subject),
          this.setStreamSliderStyleVariables()),
          (this._currentTime.textContent = this.timeFormat(
            this.splitTime(~~e.subject)
          )),
          this.manageAdTimestamp(e);
      },
      splitTime: function splitTime(e) {
        return {
          hours: ~~(e / 3600),
          minutes: ~~((e % 3600) / 60),
          seconds: ~~e % 60,
        };
      },
      timeFormat: function timeFormat(e) {
        return ''
          .concat(this.leadingZero(e.minutes), ':')
          .concat(this.leadingZero(e.seconds));
      },
      leadingZero: function leadingZero(e) {
        return e < 10 ? '0' + e : e;
      },
      whenPaused: function whenPaused() {
        (this.mode = 'paused'),
          this.setLabelText(),
          this.manageElementClass(this.lektorContainer, 'playing', 'remove'),
          this.manageElementClass(this._playPauseBtn, 'playing', 'remove'),
          this.manageElementClass(this._c2s_audioBtn, 'playing', 'remove'),
          this.manageElementClass(this._playPauseBtn, 'paused'),
          this.manageElementClass(this._c2s_audioBtn, 'paused');
      },
      whenResumed: function whenResumed() {
        this.manageElementClass(this._playPauseBtn, 'paused', 'remove'),
          this.manageElementClass(this._c2s_audioBtn, 'paused', 'remove'),
          this.manageElementClass(this.lektorContainer, 'playing', 'remove');
      },
      receiveMediaInfo: function receiveMediaInfo(e) {
        try {
          if (!e.data.indexOf || 0 !== e.data.indexOf('onntv://')) return;
          var _t27, _n17;
          try {
            _t27 = JSON.parse(e.data.substr(8));
          } catch (e) {
            _t27 = {};
          }
          if (
            '{}' !== JSON.stringify(_t27) &&
            _t27.iid &&
            Number(_t27.iid) !== this.iid
          )
            return !1;
          switch (_t27.comm) {
            case 'ad25':
              (_n17 = 'ad first quartile'),
                this.manageElementClass(this.lektorContainer, 'playing');
              break;
            case 'ad50':
              (_n17 = 'ad mid point'),
                this.manageElementClass(this.lektorContainer, 'playing');
              break;
            case 'ad75':
              (_n17 = 'ad third quartile'),
                this.manageElementClass(this.lektorContainer, 'playing');
              break;
            case 'adblocked':
              _n17 = 'adblock detected. Player will continue to try start ads';
              break;
            case 'adclick':
              _n17 =
                'ad clicked. Player may pause an ad automatically (depends on ad and settings)';
              break;
            case 'adcomplete':
              (_n17 = 'ad completed'),
                this.manageElementClass(
                  this.lektorContainer,
                  'playing',
                  'remove'
                ),
                (this.adIsPlaying = !1),
                (this._c2s_streamRange.max =
                  this.movies[this.currentArticleViewed].videoDuration);
              break;
            case 'aderror':
              _n17 = 'An error occured';
              break;
            case 'adimpression':
              _n17 = 'Ad impression';
              break;
            case 'adloaded':
              this.sendCommand2Player('setvolume', 0.2),
                (_n17 = '<- Ad was loaded and is ready to start'),
                this.adSet();
              break;
            case 'adnotpresent':
              _n17 = '<- ad not found';
              break;
            case 'adpaused':
              (_n17 = 'ad paused'), this.whenPaused(_t27);
              break;
            case 'adresumed':
              (this.adIsPlaying = !0), this.whenResumed();
              break;
            case 'adsearch':
              _n17 = 'player is searching for available ads';
              break;
            case 'adskipped':
              (_n17 = 'ad skipped'),
                (this.adIsPlaying = !1),
                this.whenResumed();
              break;
            case 'adprogress':
              (_n17 = 'ad progress'), this.adProgress(_t27);
              break;
            case 'adstarted':
              (_n17 = 'ad started'),
                this.manageElementClass(this.lektorContainer, 'playing'),
                (this.adIsPlaying = !0),
                this.manageAdTimestamp();
              break;
            case 'adstarttry':
              _n17 = 'player is trying to start loaded ad.';
              break;
            case 'advideoexcluded':
              _n17 = 'video exluded for ads';
              break;
            case 'adviewable':
              _n17 = 'ad viewable - 2 seconds, +50% of area';
              break;
            case 'movie25':
              (_n17 = 'movie first quartile'),
                this.manageElementClass(this.lektorContainer, 'playing');
              break;
            case 'movie50':
              (_n17 = 'movie mid point'),
                this.manageElementClass(this.lektorContainer, 'playing');
              break;
            case 'movie75':
              (_n17 = 'movie third quartile'),
                this.manageElementClass(this.lektorContainer, 'playing');
              break;
            case 'movie95':
              (_n17 = 'movie 5% to complete'),
                this.manageElementClass(this.lektorContainer, 'playing');
              break;
            case 'moviebuffering':
              _n17 = 'movie buffering';
              break;
            case 'moviecleared':
              _n17 = 'movie cleared';
              break;
            case 'moviecompleted':
              (_n17 = 'movie completed'),
                this.sendCommand2Player(
                  'setmovie',
                  this.movies[this.currentArticleListen].subject,
                  this.iid
                ),
                this.manageElementClass(
                  this.lektorContainer,
                  'playing',
                  'remove'
                ),
                (this.mode = 'paused'),
                this.playPauseMovie(!0);
              break;
            case 'moviepaused':
              (_n17 = 'movie paused'), this.whenPaused(_t27);
              break;
            case 'movieresumed':
              this.manageElementClass(this.lektorContainer, 'playing'),
                this.manageElementClass(this._playPauseBtn, 'paused', 'remove'),
                this.manageElementClass(this._c2s_audioBtn, 'paused', 'remove'),
                (_n17 = 'movie resumed');
              break;
            case 'movieseeking':
              _n17 = 'movie seeking';
              break;
            case 'movie_progress':
              (_n17 = 'movie progress'), this.movieProgress(_t27);
              break;
            case 'movieset':
              (_n17 = 'movie set as current'), this.movieSet(_t27);
              break;
            case 'moviesetdelayed':
              _n17 = 'movie set as current - delayed 1 s';
              break;
            case 'moviesetu':
              _n17 = 'movie set as current - unique event';
              break;
            case 'moviestarted':
              (_n17 = 'movie resumed'),
                this.sendCommand2Player('setvolume', 0.8),
                this.manageStreamRange(),
                this.manageElementClass(this._adElement, 'hidden'),
                this.manageElementClass(this.lektorContainer, 'playing');
              break;
            case 'moviestopped':
              (_n17 = 'movie stopped'),
                this.manageElementClass(
                  this.lektorContainer,
                  'playing',
                  'remove'
                );
              break;
            case 'movieviewable':
              _n17 = 'movie viewable';
              break;
            case 'playerLoaded':
              _n17 = 'player was loaded - controls can be shown';
              break;
            case 'plstarttry':
              _n17 =
                'player is trying to start - results depends on settings and availability of ads';
              break;
            case 'pl_minhidden':
              _n17 =
                'miniature player is hidden (switched to main player). com.target==0 - automatic, com.target==1 - user close';
              break;
            case 'volumeset':
              (_n17 = 'players volume:' + _t27.subject), this.volumeSet(_t27);
              break;
            case 'viewablesend':
              _n17 = 'ad viewable signal was send';
              break;
            case 'visibilitychange':
              _n17 = 'player visibility changed';
          }
          return _t27;
        } catch (e) {}
      },
    }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.content2speech.init();
      });
  },
  function (e, t) {
    (gazeta_pl.pushPushGo = {
      init: function init() {
        setTimeout(function () {
          var e = document.querySelector('.footer_middle_links'),
            t = document.querySelector('.ppg__fab-bubble-inner > a');
          e &&
            t &&
            (e.insertAdjacentHTML(
              'beforeend',
              '<a href="#" id="disableNotifications">'.concat(
                t.innerText,
                '</a>'
              )
            ),
            document
              .getElementById('disableNotifications')
              .addEventListener('click', function (e) {
                e.preventDefault();
                var t = document.querySelector('.ppg__fab-bubble-inner > a');
                (e.target.innerText =
                  'w\u0142\u0105cz powiadomienia' === t.innerText.toLowerCase()
                    ? 'Wy\u0142\u0105cz powiadomienia'
                    : 'W\u0142\u0105cz powiadomienia'),
                  t.click();
              }));
        }, 7e3);
      },
    }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.pushPushGo.init();
      });
  },
  function (e, t) {
    (gazeta_pl.embedsOnDemand = {
      init: function init() {
        var _this50 = this;
        setTimeout(function () {
          _this50.gatherScripts();
          var e =
            document.querySelector('#gazeta_article_body') ||
            document.querySelector('#rtc_relation_box');
          if (!e) return !1;
          if (
            (_toConsumableArray(e.querySelectorAll('.embedOnDemand')).forEach(
              function (e) {
                return _this50.prepareEmbed(e);
              }
            ),
            'pageTypeId_14' !== document.body.id)
          )
            _this50.runEmbeds();
          else {
            var _e32 = _toConsumableArray(
              document.querySelectorAll('.twitter-tweet-lazy')
            );
            _e32.length &&
              (_this50.createObserver(), _this50.addToObserve(_e32));
          }
        }, 0);
      },
      gatherScripts: function gatherScripts() {
        var _this51 = this;
        this.scriptsUsed = new Set();
        _toConsumableArray(document.querySelectorAll('script[src]')).forEach(
          function (e) {
            var t = e.src;
            t.startsWith('//') && (t = 'https:' + t),
              _this51.scriptsUsed.add(t);
          }
        );
      },
      prepareEmbed: function prepareEmbed(e) {
        var t = e.dataset;
        if (t) {
          var n = t.script;
          this.scriptsUsed.has(n) ||
            (this.scriptsUsed.add(n), this.addScriptElement(e, n));
        }
      },
      runEmbeds: function runEmbeds() {
        window.instgrm && window.instgrm.Embeds.process(),
          window.twttr && window.twttr.widgets.load();
      },
      addScriptElement: function addScriptElement(e, t) {
        var n = document.createElement('script');
        (n.src = t), e.parentNode.insertBefore(n, e.nextSibling);
      },
      createObserver: function createObserver() {
        var _this52 = this;
        this.observer = new IntersectionObserver(function (e) {
          e.forEach(function (e) {
            if (e.isIntersecting) {
              var _t28 = e.target;
              _t28.classList.add('twitter-tweet'),
                window.twttr && window.twttr.widgets.load(_t28),
                _this52.observer.unobserve(_t28);
            }
          });
        }, this.setIntersectionObserverOptions());
      },
      setIntersectionObserverOptions:
        function setIntersectionObserverOptions() {
          var e = window.innerHeight;
          var t, n;
          return (
            navigator &&
              navigator.connection &&
              (t = navigator.connection.effectiveType),
            gazeta_pl.mobileInfo.isMobileDevice || (n = e),
            gazeta_pl.mobileInfo.isMobileDevice && (n = 2 * e),
            t && '4g' != t && (n *= 2),
            { rootMargin: '0px 0px '.concat(n, 'px 0px') }
          );
        },
      addToObserve: function addToObserve(e) {
        var _this53 = this;
        e.forEach(function (e) {
          return _this53.observer.observe(e);
        });
      },
    }),
      window.addEventListener('load', function () {
        gazeta_pl.embedsOnDemand.init();
      });
  },
  function (e, t, n) {},
  function (e, t) {
    (gazeta_pl.winieta = {
      PARTNER_ADS: ['103-WINIETA-MOBI', '071-WINIETA'],
      init: function init() {
        gazeta_pl.winieta.addEventForPartnerAd();
      },
      addEventForPartnerAd: function addEventForPartnerAd() {
        document.addEventListener(
          'adviewDfpSlotRenderEnd',
          gazeta_pl.winieta.checkActivePartnerAD
        );
      },
      checkActivePartnerAD: function checkActivePartnerAD(e) {
        gazeta_pl.winieta.PARTNER_ADS.includes(e.detail.slot) &&
          e.detail.active &&
          (gazeta_pl.winieta.addClassToPartnerAD(),
          gazeta_pl.mobileInfo.isMobileDevice &&
            gazeta_pl.winieta.changeBodyPadding(),
          document.removeEventListener(
            'adviewDfpSlotRenderEnd',
            gazeta_pl.winieta.checkActivePartnerAD
          ));
      },
      addClassToPartnerAD: function addClassToPartnerAD() {
        document
          .querySelector('.serviceLogo')
          .classList.add('serviceLogo__partner--DFP--active');
      },
      changeBodyPadding: function changeBodyPadding() {
        var e = document.body,
          t = Number(
            window
              .getComputedStyle(e, null)
              .getPropertyValue('padding-top')
              .replace('px', '')
          );
        e.style.paddingTop = t + 60 + 'px';
      },
    }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.winieta.init();
      });
  },
  function (e, t) {
    (gazeta_pl.NewNav = {
      init: function init() {
        var e = document.querySelector('.nav__dropDownButton');
        e &&
          e.addEventListener('click', function () {
            e.classList.toggle('active') &&
              scheduler.postTask(
                function () {
                  gazeta_pl_bigdata.sendDataOceanEvent(910, {
                    type: 'dziobek',
                    section: 'nawigacja lokalna',
                  });
                },
                { priority: 'background' }
              );
          });
        var t = document.querySelectorAll('[class*="menu_social"]');
        if (t) {
          Array.from(t)
            .filter(function (e) {
              return !e.classList.contains('menu_social');
            })
            .forEach(function (e) {
              return e.setAttribute('target', '_blank');
            });
        }
        var n = document.querySelector('.nav__closeProjectX');
        n &&
          ((n.href = gazeta_pl.getUrlBasedOnReferrer()),
          n.addEventListener(
            'click',
            function () {
              gazeta_pl_bigdata.sendDataOceanEvent(910, {
                type: 'click',
                section: 'x button',
              });
            },
            { capture: !0 }
          ));
      },
    }),
      (e.exports = gazeta_pl.NewNav),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.NewNav.init();
      });
  },
  function (e, t) {
    (gazeta_pl.modHat2019 = {
      init: function init() {
        var e = document.querySelector('.main-navigation__close');
        e && (e.href = gazeta_pl.getUrlBasedOnReferrer());
      },
    }),
      (e.exports = gazeta_pl.modHat2019),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.modHat2019.init();
      });
  },
  function (e, t) {
    (gazeta_pl.topWrapper = {
      lastPositionOfScroll: 0,
      lastData: null,
      isIntersectingAds: null,
      adStatus: null,
      clickElemsConfig: {
        menu: {
          clickElement:
            '.js-trigger-main-navigation__show, .navigation-lists__fold',
          boxForToggleClass: '.top_wrapper',
          classToToggle: 'cap--open',
          isOpen: !1,
        },
        subMenu: {
          clickElement: '.navigation-lists__smalltitle',
          closestBoxForNewClass: '.navigation-lists__group',
          classToToggle: 'navigation-lists__group--open',
          removeToggleClassInNextSections: !0,
        },
        searchBox: {
          clickElement: '.js-trigger-search-form__show, .search-form__close',
          boxForToggleClass: '.main-navigation',
          classToToggle: 'search-form--open',
        },
        showCloseNav: {
          clickElement: '.nav__hamburger, .nav__closeNavButton',
          boxForToggleClass: '.top_wrapper',
          classToToggle: 'navbar--open',
          isOpen: !1,
        },
        firstLevelItem: {
          clickElement: '.nav__firstLevelItem .nav__arrow',
          closestBoxForNewClass: '.nav__firstLevelItem',
          classToToggle: 'nav__firstLevelList--open',
          removeToggleClassInNextSections: !0,
          navLevel: 1,
        },
        navSecondLevel: {
          clickElement: '.nav__secondLevelItemLink .nav__arrow',
          closestBoxForNewClass: '.nav__secondLevelItem',
          classToToggle: 'nav__secondLevelList--open',
          removeToggleClassInNextSections: !0,
          navLevel: 2,
        },
      },
      init: function init() {
        var e = this;
        for (var _t29 in e.clickElemsConfig) {
          var _n18 = document.querySelectorAll(
            e.clickElemsConfig[_t29].clickElement
          );
          if (
            _n18.length &&
            (!gazeta_pl.mobileInfo.isMobileDevice ||
              !e.clickElemsConfig[_t29].disableMobile)
          )
            for (var o = 0; o < _n18.length; o++)
              _n18[o].addEventListener(
                'click',
                e.toogleClass.bind({
                  config: e.clickElemsConfig[_t29],
                  watchElement: _n18[o],
                }),
                !1
              );
        }
        if (gazeta_pl.mobileInfo.isMobileDevice) {
          if (document.querySelector('.serviceLogo__partner--DFP')) {
            var _e33 = document.querySelector('.serviceLogo');
            gazeta_pl.topWrapper.showHidePartnerAd(_e33);
          }
        }
        var t = document.querySelector('.top_wrapper');
        t && gazeta_pl.topWrapper.topWrapperEvents(t);
        var n = document.querySelector('.search-form__form');
        n && gazeta_pl.topWrapper.includeHashtagToSearchQuery(n);
      },
      topWrapperEvents: function topWrapperEvents(e) {
        window.addEventListener(
          'scroll',
          gazeta_pl.topWrapper.toogleCapOrNavbar.bind(this, e)
        ),
          gazeta_pl.topWrapper.addEventForNotificationHP(),
          document.addEventListener(
            'adviewDfpPremiumBoard',
            gazeta_pl.topWrapper.changeMarginOfElement,
            { once: !0 }
          );
      },
      toogleClass: function toogleClass() {
        var e = this.config,
          t = this.watchElement;
        var n;
        if (((e.isOpen = !e.isOpen), e.boxForToggleClass))
          n = document.querySelector(e.boxForToggleClass);
        else {
          if (!e.closestBoxForNewClass || e.navLevel != t.dataset.lvl) return;
          n = t.closest(e.closestBoxForNewClass);
        }
        e.removeToggleClassInNextSections &&
          document.querySelector('.' + e.classToToggle) &&
          n != document.querySelector('.' + e.classToToggle) &&
          document
            .querySelector('.' + e.classToToggle)
            .classList.remove(e.classToToggle),
          'undefined' != typeof scheduler
            ? (scheduler.postTask(
                function () {
                  n.classList.toggle(e.classToToggle);
                },
                { priority: 'user-visible' }
              ),
              scheduler.postTask(
                function () {
                  gazeta_pl.topWrapper.sendAnalytics(e);
                },
                { priority: 'background' }
              ))
            : (n.classList.toggle(e.classToToggle),
              gazeta_pl.topWrapper.sendAnalytics(e));
      },
      showHidePartnerAd: function showHidePartnerAd(e) {
        window.addEventListener(
          'scroll',
          gazeta_pl.topWrapper.changeClass.bind(this, e)
        );
      },
      changeClass: function changeClass(e) {
        window.scrollY > 500
          ? e.classList.add('serviceLogo__partner--DFP--hide')
          : e.classList.remove('serviceLogo__partner--DFP--hide');
      },
      isCapOrNavbarOpen: function isCapOrNavbarOpen() {
        var e = document.querySelector('.top_wrapper'),
          t = e.classList.contains('navbar--open'),
          n = e.classList.contains('cap--open');
        return t || n;
      },
      toogleCapOrNavbar: function toogleCapOrNavbar(e) {
        if (gazeta_pl.topWrapper.isCapOrNavbarOpen()) return !1;
        window.scrollY > 500
          ? e.classList.add('top_wrapper--capOrNavbarHidden')
          : e.classList.remove('top_wrapper--capOrNavbarHidden');
      },
      addEventForNotificationHP: function addEventForNotificationHP() {
        document.addEventListener('hpNotificationEvent', function (e) {
          'top' === e.detail.position &&
            document.body.classList.add('notificationHP--ON');
        });
      },
      changeMarginOfElement: function changeMarginOfElement(e) {
        var t;
        if (
          (gazeta_pl.mobileInfo.isMobileDevice || (t = 120),
          gazeta_pl.mobileInfo.isMobileDevice && (t = 100),
          'premiumboard' === e.detail.adsType)
        ) {
          var _e34 = document.querySelector('.top_wrapper'),
            n = getComputedStyle(_e34).marginBottom,
            o = Number(n.replace(/px/, ''));
          _e34.style.marginBottom = o + t + 'px';
        }
      },
      includeHashtagToSearchQuery: function includeHashtagToSearchQuery(e) {
        e.addEventListener('submit', function (t) {
          t.preventDefault();
          var n = document.querySelector('.search-form__input').value,
            o = new URL(e.action + '?query=' + n);
          o.hash = '#s=NavIco';
          var i = o.href;
          window.location.href = i;
        });
      },
      sendAnalytics: function sendAnalytics(e) {
        var t = e.classToToggle;
        switch (t) {
          case 'navbar--open':
            e.isOpen &&
              gazeta_pl_bigdata.sendDataOceanEvent(910, {
                type: 'hamburger',
                section: 'nawigacja lokalna',
              });
            break;
          case 'cap--open':
            e.isOpen &&
              gazeta_pl_bigdata.sendDataOceanEvent(910, {
                type: 'dziobek',
                section: 'nawigacja globalna',
              });
        }
      },
    }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.topWrapper.init();
      });
  },
  function (e, t) {
    gazeta_pl.MFA_login = (function () {
      var _this54 = this;
      var e = 'Zaloguj si\u0119',
        t = 'Nie mam dost\u0119pu do aplikacji',
        n = 'Anuluj',
        o = 'Spr\xF3buj ponownie',
        i =
          'Aby si\u0119 zalogowa\u0107 u\u017Cyj jednego z kod\xF3w awaryjnych otrzymanych podczas w\u0142\u0105czania logowania dwustopniowego',
        a = {},
        r = {
          enterCodeScreen:
            '\n        <div class="accountOptionsModal__content" id="accountOptionsModal__connectAccountScreen">\n            <div class="accountOptionsModal__header">\n                <p class="accountOptionsModal__headerTitle">Wprowad\u017A kod</p>\n            </div>\n            <div class="accountOptionsModal__main">\n            <p class="accountOptionsModal__paragraph accountOptionsModal__paragraph--normal">Twoje konto jest zabezpieczone logowaniem dwustopniowym. Wprowad\u017A kod z aplikacji Google Authenticator.</p>\n                <input class="accountOptionsModal__input" placeholder="podaj kod"/>\n                <p class="accountOptionsModal__error"></p>\n            </div>\n        </div>\n        ',
          errorScreen:
            '\n        <div class="accountOptionsModal__content" id="accountOptionsModal__deactivateScreen">\n            <div class="accountOptionsModal__header">\n                <p class="accountOptionsModal__headerTitle">Przepraszamy, wyst\u0105pi\u0142 b\u0142\u0105d</p>\n            </div>\n            <div class="accountOptionsModal__main">\n                <p class="accountOptionsModal__paragraph accountOptionsModal__paragraph--normal">Logowanie nie powiod\u0142o si\u0119. Spr\xF3buj jeszcze raz.</p>\n            </div>\n        </div>\n        ',
        };
      var s, l;
      var c = {},
        p = function p(e) {
          var t = document.createElement('div');
          t.classList.add('accountOptionsModal', 'accountOptionsModal--mfa');
          var n = document.createElement('form');
          n.classList.add('accountOptionsModal__container'),
            t.appendChild(n),
            (t.style.display = 'none'),
            e ? e.appendChild(t) : document.body.appendChild(t),
            (a.popupEl = t),
            (a.content = n);
        },
        d = function d() {
          var e = document.createElement('div');
          e.classList.add('accountOptionsModal__overlay'),
            (e.style.display = 'none'),
            document.body.appendChild(e),
            (a.overlay = e);
        },
        u = function u() {
          var e = document.createElement('div');
          e.classList.add('accountOptionsModal__footer'),
            a.popupEl.appendChild(e),
            (a.footer = e);
        },
        m = function m() {
          var e = document.createElement('div');
          e.classList.add('accountOptionsModal__cross'),
            (e.innerHTML =
              '\n    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">\n        <path id="zamknij" d="M17.308,7,13,11.308,8.692,7,7,8.692,11.308,13,7,17.308,8.692,19,13,14.692,17.308,19,19,17.308,14.692,13,19,8.692Z" transform="translate(-7 -7)" fill="#444"/>\n    </svg>\n    '),
            a.popupEl.appendChild(e),
            (a.closeCross = e);
        },
        h = function h() {
          a.html = document.documentElement;
        },
        f = function f() {
          var e = g();
          a.footer.appendChild(e);
          var t = v();
          a.footer.appendChild(t),
            (a.primaryButton = e),
            (a.secondaryButton = t);
        },
        g = function g() {
          var e = document.createElement('button');
          return (
            (e.type = 'submit'),
            e.classList.add(
              'accountOptionsModal__actionButton',
              'accountOptionsModal__actionButton--primary'
            ),
            e
          );
        },
        v = function v() {
          var e = document.createElement('button');
          return (
            (e.type = 'button'),
            e.classList.add(
              'accountOptionsModal__actionButton',
              'accountOptionsModal__actionButton--secondary'
            ),
            e
          );
        },
        _ = function _() {
          var e = document.createElement('p');
          e.classList.add('accountOptionsModal__hint'),
            (e.innerText = i),
            a.footer.appendChild(e),
            (a.hint = e);
        },
        y = function y(e) {
          switch (e) {
            case 'enterCodeScreen':
              T();
              break;
            case 'closePopup':
              A(!1);
              break;
            case 'verifyCode':
              P();
              break;
            case 'errorScreen':
              I();
          }
        },
        b = function b(_ref15) {
          var e = _ref15.primaryButtonText,
            t = _ref15.primaryButtonAction,
            n = _ref15.secondaryButtonText,
            o = _ref15.secondaryButtonAction;
          (a.primaryButton.innerText = e),
            (a.primaryButton.dataset.action = t),
            (a.secondaryButton.innerText = n),
            (a.secondaryButton.dataset.action = o);
        },
        E = function E(e) {
          e.preventDefault();
          var t = e.currentTarget.dataset.action;
          y(t);
        },
        w = function w() {
          a.closeCross.addEventListener('click', A.bind(_this54, !1)),
            a.primaryButton.addEventListener('click', E),
            a.secondaryButton.addEventListener('click', E),
            a.content.addEventListener('submit', function (e) {
              e.preventDefault();
              var t = a.primaryButton.dataset.action;
              y(t);
            });
        },
        A = function A(e) {
          (a.popupEl.style.display = 'none'),
            (a.overlay.style.display = 'none'),
            a.html.classList.remove('no-scroll'),
            e || document.dispatchEvent(l),
            a.input &&
              ((a.input.value = ''),
              a.input.classList.remove('accountOptionsModal__input--error')),
            a.error && (a.error.style.display = 'none'),
            a.hint && (a.hint.style.display = 'none');
        },
        T = function T() {
          (a.content.innerHTML = r.enterCodeScreen),
            b({
              primaryButtonText: e,
              primaryButtonAction: 'verifyCode',
              secondaryButtonText: t,
              secondaryButtonAction: null,
            }),
            (a.input = a.content.querySelector('.accountOptionsModal__input')),
            (a.error = a.content.querySelector('.accountOptionsModal__error')),
            (a.error.style.display = 'none'),
            a.footer.classList.add('accountOptionsModal__footer--column'),
            a.primaryButton.classList.add(
              'accountOptionsModal__actionButton--fullWidth'
            ),
            a.secondaryButton.classList.add(
              'accountOptionsModal__actionButton--fullWidth',
              'accountOptionsModal__actionButton--fontUnset'
            ),
            S();
        },
        S = function S() {
          'ontouchstart' in window
            ? (a.secondaryButton.addEventListener('touchstart', k),
              a.overlay.addEventListener('touchstart', L))
            : (a.secondaryButton.addEventListener('mouseenter', x),
              a.secondaryButton.addEventListener('mouseleave', L));
        },
        C = function C() {
          a.secondaryButton.removeEventListener('touchstart', k),
            a.secondaryButton.removeEventListener('mouseenter', x),
            a.secondaryButton.removeEventListener('mouseleave', L),
            a.overlay.removeEventListener('touchstart', L);
        },
        x = function x() {
          return (a.hint.style.display = 'block');
        },
        L = function L() {
          return (a.hint.style.display = 'none');
        },
        k = function k() {
          var e = a.hint.style;
          'block' !== e.display ? (e.display = 'block') : (e.display = 'none');
        },
        I = function I() {
          (a.content.innerHTML = r.errorScreen),
            b({
              primaryButtonText: o,
              primaryButtonAction: 'enterCodeScreen',
              secondaryButtonText: n,
              secondaryButtonAction: 'closePopup',
            }),
            a.footer.classList.remove('accountOptionsModal__footer--column'),
            a.primaryButton.classList.remove(
              'accountOptionsModal__actionButton--fullWidth'
            ),
            a.secondaryButton.classList.remove(
              'accountOptionsModal__actionButton--fullWidth',
              'accountOptionsModal__actionButton--fontUnset'
            );
        },
        O = function O(e) {
          a.input.classList.add('accountOptionsModal__input--error'),
            (a.error.innerHTML = e),
            (a.error.style.display = 'block');
        },
        P = /*#__PURE__*/ (function () {
          var _ref16 = _asyncToGenerator(function* () {
            var e = a.input.value;
            a.input.classList.remove('accountOptionsModal__input--error'),
              (a.error.style.display = 'none'),
              e
                ? fetch('/mfa/loginCode.servlet', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ code: e }),
                  })
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (e) {
                      var t = e.loggedIn,
                        n = e.msg;
                      t
                        ? (C(),
                          A(!0),
                          (c.success = !0),
                          (c.payload = e),
                          document.dispatchEvent(s))
                        : O(n);
                    })
                    .catch(function (e) {
                      C(),
                        y('errorScreen'),
                        (c.success = !1),
                        (c.error = e),
                        document.dispatchEvent(l);
                    })
                : O('Wprowad\u017A kod z aplikacji.');
          });
          return function P() {
            return _ref16.apply(this, arguments);
          };
        })();
      return {
        init: function init(e) {
          p(e), u(), m(), f(), d(), _(), h(), w();
        },
        showPopup: function showPopup() {
          y('enterCodeScreen'),
            (a.popupEl.style.display = 'block'),
            (a.overlay.style.display = 'block'),
            a.html.classList.add('no-scroll');
        },
        createPopupPromise: function createPopupPromise() {
          return (
            (s = new CustomEvent('resolvePopupPromiseEvent', { detail: c })),
            (l = new CustomEvent('rejectPopupPromiseEvent', { detail: c })),
            new Promise(function (e, t) {
              var _n19 = function n(t) {
                  document.removeEventListener(
                    'resolvePopupPromiseEvent',
                    _n19
                  ),
                    e(t.detail);
                },
                _o13 = function o(t) {
                  document.removeEventListener('rejectPopupPromiseEvent', _o13),
                    e(t.detail);
                };
              document.addEventListener('resolvePopupPromiseEvent', _n19),
                document.addEventListener('rejectPopupPromiseEvent', _o13);
            })
          );
        },
      };
    })();
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    var o = n(5),
      i = n(39),
      a = n(40),
      r = n(41);
    (window.gazeta_pl = window.gazeta_pl || {}),
      (window.gazeta_pl.webVitalsMetrics = (function () {
        var e = !1;
        var t = function t() {
          (e = !0), o.Queue.init(), i.init(), a.init(), r.init();
        };
        return {
          loaded: !0,
          init: function init() {
            (window.oneTrustCookieQueue = window.oneTrustCookieQueue || []),
              window.oneTrustCookieQueue.push(function (n, o) {
                !e && o.performanceCookies && t(),
                  window.OneTrust.OnConsentChanged(function (n) {
                    var o = n.detail.includes('C0002');
                    !e && o && t();
                  });
              }),
              document.addEventListener('onCMconsent', function (n) {
                var o = n.detail.purposeConsents.c2;
                !e && o && t();
              });
          },
        };
      })()),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.webVitalsMetrics.init();
      });
  },
  function (e, t) {
    (gazeta_pl.Gallery_Button = {
      init: function init() {
        var e = document.querySelector('.gallery-open-button');
        if (!e || 'object' != _typeof(gazeta_pl.galleryInArticleData)) return;
        var t =
            '\n            <div class="gallery__wrapper">\n                <div class="gallery__container">\n                    {{GALLERY_IMAGE_WRAPS_HTML}}\n                </div>\n                    <button id="galleryBtnOpen" class="gallery__button">Otw\xF3rz galeri\u0119</button>\n            </div>',
          n =
            '\n            <picture class="gallery__picture">\n                <img loading="lazy" src="{{IMAGE_SRC}}"  alt="{{IMAGE_TITLE}}" class="gallery__image" />\n            </picture>';
        var o = gazeta_pl.galleryInArticleData.images.slice(0, 3),
          i = gazeta_pl.galleryInArticleData.imagesCount - o.length,
          a = o.reduce(function (e, t, o) {
            return o >= 3
              ? e
              : (e += n
                  .replace(/{{IMAGE_INDEX}}/g, o)
                  .replace(
                    /{{IMAGE_SRC}}/g,
                    PhotoAPI.photoChangeFormat(t.url, 'IF')
                  )
                  .replace(/{{IMAGE_TITLE}}/g, t.title.replace(/"/g, '')));
          }, ''),
          r = t.replace(/{{GALLERY_IMAGE_WRAPS_HTML}}/g, a);
        if (((e.outerHTML = r), i > 0)) {
          var _e35 = document.querySelectorAll('.gallery__picture'),
            _t30 = _e35[_e35.length - 1];
          _t30.classList.add('gallery__image__overlay'),
            (_t30.dataset.count = '+' + i);
        }
        gazeta_pl.Gallery_Button.openGalleryCLick();
      },
      openGalleryCLick: function openGalleryCLick() {
        document
          .querySelector('.gallery__wrapper')
          .addEventListener(
            'click',
            gazeta_pl.Gallery_Button.openGalleryClickHandler
          );
      },
      openGalleryClickHandler: function openGalleryClickHandler(e) {
        e.preventDefault();
        var t = e.target.nodeName;
        var n = '';
        switch (t) {
          case 'BUTTON':
            n = t;
            break;
          case 'IMG':
          case 'PICTURE':
            n = 'PHOTO';
            break;
          default:
            return;
        }
        scheduler.postTask(
          function () {
            gazeta_pl_bigdata.sendDataOceanEvent(911, {
              type: n,
              position: 'middle',
            });
          },
          { priority: 'background' }
        ),
          document
            .querySelector('.related_open_text')
            .classList.contains('hide') ||
            gazeta_pl.RelatedImages.chooseVariant(
              gazeta_pl.galleryInArticleData,
              'middle'
            );
      },
    }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.Gallery_Button.init();
      });
  },
  function (e, t) {
    (window.gazeta_pl.ArticleBodySocialMediaEmbeds = (function () {
      var e = !1,
        t = !1;
      var n = {
          pl: {
            Screens: {
              Cookie: {
                button: 'Udziel zg\xF3d',
                text: 'Aby wy\u015Bwietli\u0107 post, musisz udzieli\u0107 zgody na u\u017Cywanie plik\xF3w cookie.',
              },
              Expand: { button: 'Rozwi\u0144' },
            },
          },
          uk: {
            Screens: {
              Cookie: {
                button:
                  '\u041F\u043E\u0433\u043E\u0434\u0436\u0443\u044E\u0441\u044C',
                text: '\u0429\u043E\u0431 \u0432\u0438\u0441\u0432\u0456\u0442\u043B\u0438\u0442\u0438 \u043F\u043E\u0441\u0442 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0432\u0438\u0440\u0430\u0437\u0438\u0442\u0438 \u0437\u0433\u043E\u0434\u0443 \u043D\u0430 \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u0444\u0430\u0439\u043B\u0456\u0432 cookies',
              },
              Expand: {
                button: '\u0420\u043E\u0437\u0433\u043E\u0440\u043D\u0438',
              },
            },
          },
        },
        o = document.querySelectorAll(
          '.art_embed:has('.concat(
            [
              '.twitter-tweet',
              '.instagram-media',
              '.tiktok-embed',
              '.telegram-post',
              '.fb-embed',
            ],
            ')'
          )
        ),
        i = {
          parseOneTrustConsentChange: function parseOneTrustConsentChange(e) {
            var t = ['C0002', 'C0003', 'C0004'];
            return (
              t.filter(function (t) {
                return e.detail.includes(t);
              }).length === t.length
            );
          },
          lock: function lock() {
            t && (e = !0);
          },
          getTranslateString: function getTranslateString(_ref17) {
            var _ref17$lang = _ref17.lang,
              e =
                _ref17$lang === void 0
                  ? document.documentElement.lang
                  : _ref17$lang,
              t = _ref17.path;
            var o = n[e] ? ''.concat(e, '.').concat(t) : 'pl.' + t;
            return i.getDeepValue({ obj: n, path: o });
          },
          getDeepValue: function getDeepValue(_ref18) {
            var e = _ref18.obj,
              t = _ref18.path;
            return t.split('.').reduce(function (e, t) {
              return e[t];
            }, e);
          },
        },
        a = {
          Canvas: {
            clearAll: function clearAll() {
              o.forEach(function (e) {
                var t = a.Canvas.get({ artEmbed: e });
                a.Canvas.changeState({ canvas: t, state: '' }),
                  _toConsumableArray(t.children).forEach(function (e) {
                    return e.remove();
                  });
              });
            },
            get: function get(_ref19) {
              var e = _ref19.artEmbed;
              return e.querySelector('.art-embed-social-media-canvas');
            },
            render: function render(_ref20) {
              var e = _ref20.artEmbed;
              var t = document.createElement('div');
              t.classList.add('art-embed-social-media-canvas'),
                e.appendChild(t);
            },
            changeState: function changeState(_ref21) {
              var e = _ref21.artEmbed,
                t = _ref21.canvas,
                n = _ref21.state;
              (t || a.Canvas.get({ artEmbed: e })).setAttribute(
                'data-state',
                n
              );
            },
          },
          Cookie: {
            addEventListeners: function addEventListeners(_ref22) {
              var e = _ref22.button;
              e.addEventListener('click', function () {
                window.OneTrust &&
                  window.OneTrust.ToggleInfoDisplay &&
                  window.OneTrust.ToggleInfoDisplay(),
                  window.__cmp && window.__cmp('showScreenAdvanced');
              });
            },
            createIcon: function createIcon() {
              var e = document.createElement('img');
              return (
                e.classList.add('art-embed-social-media-canvas__icon'),
                e.setAttribute('aria-hidden', 'true'),
                e.setAttribute(
                  'src',
                  'https://static.im-g.pl/i/obrazki/awd/article/social_media_embeds/screen-cookie-icon.svg'
                ),
                e
              );
            },
            createText: function createText() {
              var e = document.createElement('span');
              return (
                e.classList.add('art-embed-social-media-canvas__text'),
                (e.textContent = i.getTranslateString({
                  path: 'Screens.Cookie.text',
                })),
                e
              );
            },
            createButton: function createButton() {
              var e = document.createElement('button');
              return (
                e.classList.add('art-embed-social-media-canvas__button'),
                (e.textContent = i.getTranslateString({
                  path: 'Screens.Cookie.button',
                })),
                e
              );
            },
            render: function render(_ref23) {
              var e = _ref23.artEmbed;
              var t = a.Canvas.get({ artEmbed: e }),
                n = a.Cookie.createIcon(),
                o = a.Cookie.createText(),
                i = a.Cookie.createButton();
              a.Cookie.addEventListeners({ button: i }),
                t.appendChild(n),
                t.appendChild(o),
                t.appendChild(i),
                a.Canvas.changeState({ canvas: t, state: 'screen-cookie' });
            },
          },
          Expand: {
            addEventListeners: function addEventListeners(_ref24) {
              var e = _ref24.artEmbed,
                t = _ref24.button;
              t.addEventListener(
                'click',
                function () {
                  (e.style.height = e.scrollHeight + 'px'),
                    a.Canvas.changeState({ artEmbed: e, state: 'hidden' });
                },
                { once: !0 }
              ),
                e.addEventListener(
                  'transitionend',
                  function () {
                    e.style.height = 'auto';
                  },
                  { once: !0 }
                );
            },
            createButton: function createButton() {
              var e = document.createElement('button');
              return (
                e.classList.add('art-embed-social-media-canvas__button'),
                e.classList.add(
                  'art-embed-social-media-canvas__button--screen-expand'
                ),
                (e.textContent = i.getTranslateString({
                  path: 'Screens.Expand.button',
                })),
                e
              );
            },
            render: function render(_ref25) {
              var e = _ref25.artEmbed;
              var t = a.Canvas.get({ artEmbed: e }),
                n = a.Expand.createButton();
              a.Expand.addEventListeners({ artEmbed: e, button: n }),
                t.appendChild(n),
                a.Canvas.changeState({ canvas: t, state: 'screen-expand' });
            },
          },
        };
      return {
        init: function init() {
          o.forEach(function (e) {
            a.Canvas.render({ artEmbed: e });
          }),
            (window.oneTrustCookieQueue = window.oneTrustCookieQueue || []),
            window.oneTrustCookieQueue.push(function (e) {
              (t = e),
                window.gazeta_pl.ArticleBodySocialMediaEmbeds.start(),
                window.OneTrust.OnConsentChanged(function (e) {
                  (t = i.parseOneTrustConsentChange(e)),
                    window.gazeta_pl.ArticleBodySocialMediaEmbeds.start();
                });
            }),
            document.addEventListener('onCMconsent', function (e) {
              var _e$detail$purposeCons = e.detail.purposeConsents,
                n = _e$detail$purposeCons.c2,
                o = _e$detail$purposeCons.c3,
                i = _e$detail$purposeCons.c4;
              (t = n && o && i),
                window.gazeta_pl.ArticleBodySocialMediaEmbeds.start();
            });
        },
        start: function start() {
          e ||
            (i.lock(),
            a.Canvas.clearAll(),
            t
              ? o.forEach(function (e) {
                  a.Expand.render({ artEmbed: e });
                })
              : o.forEach(function (e) {
                  a.Cookie.render({ artEmbed: e });
                }));
        },
      };
    })()),
      document.addEventListener('DOMContentLoaded', function (e) {
        window.gazeta_pl.ArticleBodySocialMediaEmbeds.init();
      });
  },
  function (e, t) {
    (gazeta_pl.HpRedirector = (function () {
      var _ref26 = gazeta_pl.mobileInfo || {},
        e = _ref26.isMobileDevice;
      var t,
        n,
        o,
        i,
        a,
        r = !0,
        s = !1,
        l = 0;
      var c = document.querySelector('.related_box_wrap');
      function p() {
        var e, t;
        if (
          ((t = c
            ? c.querySelectorAll('.related-with-lead-article')
            : document.querySelectorAll('.section_wrapper')),
          !t.length)
        )
          throw new Error(
            "HP Redirector Script: Couldn't find wrapper for HP opening section."
          );
        return (e = t[t.length - 1]), e;
      }
      function d() {
        var t = document.querySelector(
            'body > .section_wrapper:not(.aside_wrapper):not(#bottom_wrapper)'
          ),
          n = (t ? t.offsetHeight + 400 : 0) + (e ? 450 : 0);
        var o;
        return (
          (o = c
            ? Math.abs(n) / 2 + 'px 0px ' + Math.abs(n) + 'px 0px'
            : '0px 0px ' + Math.abs(n) + 'px 0px'),
          o
        );
      }
      function u(t, n) {
        !(function t(n, r, l) {
          var c = e ? 48 : 76,
            p = -Math.PI / 2;
          var d = 0;
          i.clearRect(0, 0, o.width, o.height), (d = p + n * Math.PI * 2);
          var u = o.width / 2,
            h = o.width / 2,
            f = i.createLinearGradient(0, 0, 0, o.height);
          if (
            (f.addColorStop(0, '#FF7342'),
            f.addColorStop(0.51, '#FF0000'),
            f.addColorStop(1, '#FF4282'),
            (i.strokeStyle = f),
            i.beginPath(),
            i.arc(u, h, c, d, p, !1),
            i.stroke(),
            d >= 1.5 * Math.PI)
          )
            return (
              cancelAnimationFrame(a),
              m(),
              void (
                s ||
                (v(
                  'Przekierowanie_z_hp_redirector',
                  'scroll',
                  'hp_redirector',
                  !0
                ),
                window.history.pushState(
                  { gazeta_pl_hp_redirector: 1 },
                  '',
                  window.location.href
                ),
                (window.location =
                  'https://www.gazeta.pl?utm_campaign=amtp_pnHP1&mp=promo'),
                (s = !0))
              )
            );
          if (n >= r) return void cancelAnimationFrame(a);
          a = requestAnimationFrame(function () {
            t(n + l, r, l);
          });
        })(t, n, (Math.PI / 180) * 1);
      }
      function m() {
        var e = document.querySelector('section.redirect');
        e.querySelector('.show-element').classList.remove('show-element'),
          t.unobserve(e),
          document.removeEventListener('scroll', n, { passive: !0 });
      }
      function h(t, n, o, i) {
        var a = document.documentElement.scrollTop || document.body.scrollTop,
          r =
            document.documentElement.scrollHeight || document.body.scrollHeight,
          s = document.documentElement.clientHeight,
          c = o.indicatorElement.getBoundingClientRect().height / 1.5,
          p = a - t,
          d = e
            ? document.querySelector(
                '.section_wrapper .content_wrap > .box_seo'
              )
            : null,
          m = (d && d.offsetHeight) || 0,
          h = p / (r - t - s - (e ? 200 : n / 2) / 2 - c - m);
        g(o.indicatorElement, h), u(l, h), (l = h);
      }
      function f(t, n, o, i) {
        var a = e ? 1.9 : 0.5,
          r = c.offsetHeight * a,
          s =
            ((document.documentElement.scrollTop || document.body.scrollTop) -
              t -
              r) /
            (((document.documentElement.scrollHeight ||
              document.body.scrollHeight) -
              t -
              document.documentElement.clientHeight) /
              (e ? 10 : 3));
        g(o.indicatorElement, s), u(l, s), (l = s);
      }
      function g(e, t) {
        t <= 0
          ? (e.classList.remove('show-element'), (t = 0))
          : (e.classList.add('show-element'),
            r &&
              (v(
                'Wyswietlenie_hp_redirector',
                'zobaczenie',
                'hp_redirector',
                !0
              ),
              (r = !1)));
      }
      function v(e, t, n, o) {
        window.dataLayer &&
          dataLayer.push({
            category: e,
            action: t,
            label: n,
            value: 0,
            nonInteraction: o,
            event: 'zdarzenie',
          });
      }
      return {
        init: function init() {
          if (gazeta_pl.HpRedirectorTurnOff) return !1;
          var a = gazeta_pl.parseURI(),
            r = document.querySelector('body').classList.contains('tablet'),
            s = /pageTypeId_7|pageTypeId_56/.test(
              document.querySelector('body').getAttribute('id')
            );
          return (
            !(r || !s) &&
            (void 0 === a.hp_redirector || '0' !== a.hp_redirector) &&
            ((null !== window.history.state &&
              void 0 !== window.history.state.gazeta_pl_hp_redirector) ||
              (function (a) {
                var r = (function (e, t) {
                    var n;
                    var o = document.createElement('section');
                    return (
                      o.classList.add('redirect'),
                      (o.innerHTML = e),
                      (n = t()),
                      n.appendChild(o),
                      o
                    );
                  })(a, p),
                  s = (function () {
                    var e = {
                      indicatorElement: document.querySelector(
                        '.hp_redirector-circle-progress'
                      ),
                      indicatorProgressElement: document.querySelector(
                        '#hp_redirector_canvas'
                      ),
                    };
                    if (!e.indicatorElement || !e.indicatorProgressElement)
                      throw new Error(
                        "HP Redirector Script: Couldn't find expected elements hp_redirector-circle-progress."
                      );
                    return e;
                  })();
                (function (a, r, s) {
                  var l = document.querySelector('footer.page_footer'),
                    p = (l && l.offsetHeight) || 0;
                  o = document.getElementById('hp_redirector_canvas');
                  a
                    .querySelector('.hp_redirector-circle-close')
                    .addEventListener(
                      'click',
                      function () {
                        'undefined' != typeof scheduler
                          ? (scheduler.postTask(m, {
                              priority: 'user-visible',
                            }),
                            scheduler.postTask(
                              function () {
                                v(
                                  'Zamkniecie_hp_redirector',
                                  'klik',
                                  'hp_redirector',
                                  !0
                                );
                              },
                              { priority: 'background' }
                            ))
                          : (m(),
                            v(
                              'Zamkniecie_hp_redirector',
                              'klik',
                              'hp_redirector',
                              !0
                            ));
                      },
                      { passive: !0 }
                    ),
                    e && ((o.width = 100), (o.height = 100));
                  (i = o.getContext('2d')), (i.lineWidth = e ? 5 : 9);
                  var d = { threshold: 0, rootMargin: s() };
                  (t = new IntersectionObserver(function (e) {
                    var t =
                      document.documentElement.scrollTop ||
                      document.body.scrollTop;
                    (n = c
                      ? n || f.bind(this, t, p, r)
                      : n || h.bind(this, t, p, r)),
                      e[0].intersectionRatio > 0
                        ? document.addEventListener('scroll', n, {
                            passive: !0,
                          })
                        : (document.removeEventListener('scroll', n, {
                            passive: !0,
                          }),
                          g(r.indicatorElement, 0),
                          (n = null));
                  }, d)),
                    t.observe(a);
                })(r, s, d),
                  s.indicatorElement
                    .querySelector('.hp_redirector-circle-progress__link')
                    .addEventListener(
                      'click',
                      function () {
                        v('Klik_w_hp_redirector', 'klik', 'hp_redirector', !0);
                      },
                      { passive: !0 }
                    );
              })(
                '<section class="hp_redirector hp_redirector--static">\n        <div class="hp_redirector-load_info">\n                <div class="hp_redirector-circle-progress">\n                    <div class="hp_redirector-circle-close"></div>\n                    <a class="hp_redirector-circle-progress__link" href="//www.gazeta.pl/0,0.html#pnHP1">\n                        <canvas width="160" height="160" id="hp_redirector_canvas"></canvas>\n                    </a>\n                </div>\n            </div>\n        </section>'
              ),
            'hpRedirector init done')
          );
        },
      };
    })()),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.HpRedirector.init();
      });
  },
  function (e, t) {
    var n, o;
    (gazeta_pl.hpNotificationsCookiesModule = function (e, t) {
      return {
        getCookie: function getCookie(t) {
          var n, o, i, a;
          if ('' !== e.cookie) {
            n = e.cookie.split(/; */);
            for (var r = 0; r < n.length; r++)
              if (
                ((o = n[r].split('=')),
                (i = decodeURIComponent(o[0])),
                (a = decodeURIComponent(o[1])),
                i === t)
              )
                return a;
          }
          return !1;
        },
        setCookie: function setCookie(n, o, i, a, r, s) {
          n &&
            (e.cookie = (function (e, n, o, i, a, r) {
              var s,
                l = encodeURIComponent(e),
                c = encodeURIComponent(n),
                p = l + '=' + c;
              if (o) {
                if ('number' == typeof o)
                  (s = new t()).setTime(s.getTime() + 864e5 * o);
                else {
                  if (
                    'object' != _typeof(o) ||
                    'function' != typeof o.toUTCString
                  )
                    throw 'Unsupported type for date argument';
                  s = o;
                }
                p += '; expires=' + s.toUTCString();
              }
              i && (p += '; domain=' + i);
              p += a ? '; path=' + a : '; path=/';
              r && (p += '; secure');
              return p;
            })(n, o, i, a, r, s));
        },
        deleteCookie: function deleteCookie(t) {
          var n = encodeURIComponent(t);
          e.cookie = n + '=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        },
      };
    }),
      (gazeta_pl.hpNotificationsCookies =
        gazeta_pl.hpNotificationsCookiesModule(document, Date)),
      (gazeta_pl.hpNotificationsConfig =
        ((n = {
          group1: {
            notificationTargetSelector: 'body',
            notificationWrapperClass: 'hp-notification-mobile',
            notificationShowClass: 'hp-notification-mobile--show',
            notificationTemplate:
              '<div class="hp-notification-mobile__box"><div class="hp-notification-mobile__top"><div class="hp-notification-mobile__title">${headerTitle}</div><div class="hp-notification-mobile__timer start"><div class="pie spinner"></div><div class="pie filler"></div><div class="mask"></div></div></div><div class="hp-notification-mobile__image"><img src="${imgUrl}" alt="${title}"></div><header class="hp-notification-mobile__header"><span>${title}</span></header><div class="hp-notification-mobile__next"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g transform="translate(20 20) rotate(180)"><path d="M9.725,3.575,8.25,2.1,0,10.35,8.25,18.6l1.475-1.475L2.95,10.35Z" transform="translate(0 -0.35)"></path><path style="fill: none;" d="M0,0H20V20H0Z"></path></g></svg></div></div>',
            position: 'bottom',
            goToHpTemplate:
              '<svg xmlns="http://www.w3.org/2000/svg" width="146.661" height="24" viewBox="0 0 146.661 24" style="&#10;"><g transform="translate(-15 -531)"><g transform="translate(-9)"><path style="fill: #fff;" d="M6.4-4.94h4.028v.152A3.525,3.525,0,0,1,6.669-1.216,4.194,4.194,0,0,1,2.375-5.681a4.26,4.26,0,0,1,4.37-4.484,4.9,4.9,0,0,1,3.306,1.2l.931-1.2a5.747,5.747,0,0,0-4.237-1.482A5.725,5.725,0,0,0,.779-5.681,5.674,5.674,0,0,0,6.688.266c3.4,0,5.358-2.28,5.358-5.719v-.874H6.4ZM12.445,0h1.767l.931-1.862h6.251L22.325,0h1.786L18.43-11.4h-.323ZM20.6-3.439l.114.19H15.827l.114-.19,2.223-4.883h.19ZM24.643,0h9.1V-1.425H27.3L33.858-11v-.4H24.871v1.425h6.46L24.643-.4ZM43.529-6.327h-6V-9.975h6.916V-11.4H35.967V0h8.474V-1.425H37.525V-4.94h6Zm1.919-3.648h3.933V0h1.558V-9.975h3.952V-11.4H45.448ZM53.941,0h1.767l.931-1.862H62.89L63.821,0h1.786L59.926-11.4H59.6Zm8.151-3.439.114.19H57.323l.114-.19L59.66-8.322h.19ZM66.044-.855A.99.99,0,0,0,67.051.152.99.99,0,0,0,68.058-.855a1.006,1.006,0,0,0-1.007-1.026A1.006,1.006,0,0,0,66.044-.855ZM70.11,0h1.558V-3.591H74.8c2.812,0,4.674-1.387,4.674-3.971,0-2.489-1.729-3.838-4.579-3.838H70.11Zm7.752-7.524C77.862-5.757,76.684-5,74.841-5H71.668V-9.975h3.173C76.665-9.975,77.862-9.177,77.862-7.524ZM89.661,0V-1.425H83.144V-11.4H81.586V0Z" transform="translate(81 549)" /><g transform="translate(48 531)"><path style="fill: #fff;" d="M8.312,3.81a3.8,3.8,0,1,1,1.113,2.7,3.81,3.81,0,0,1-1.113-2.7ZM20.779,16.277a3.8,3.8,0,1,0-2.7-1.113,3.81,3.81,0,0,0,2.7,1.113ZM3.463,15.931A3.463,3.463,0,1,0,0,12.468a3.463,3.463,0,0,0,3.463,3.463Zm0-9a3.1,3.1,0,1,0-2.208-.909A3.117,3.117,0,0,0,3.463,6.926ZM20.779,24a2.83,2.83,0,1,0-2.011-.829A2.857,2.857,0,0,0,20.779,24Zm0-18.286a1.9,1.9,0,1,0-1.9-1.9A1.9,1.9,0,0,0,20.779,5.714ZM3.463,23.03a1.9,1.9,0,1,0-1.9-1.9,1.9,1.9,0,0,0,1.9,1.9Zm8.658-8.139a2.409,2.409,0,1,0-1.719-.706A2.424,2.424,0,0,0,12.121,14.892Zm0,8.762a2.513,2.513,0,0,0,2.494-2.528,2.483,2.483,0,0,0-2.494-2.493,2.513,2.513,0,0,0-2.528,2.493,2.565,2.565,0,0,0,2.528,2.528Z" transform="translate(0)" /></g></g><g transform="translate(15 533)"><path style="fill: #fff;" d="M9.725,3.575,8.25,2.1,0,10.35,8.25,18.6l1.475-1.475L2.95,10.35Z" transform="translate(0 -0.35)" /><path style="fill: none;" d="M0,0H20V20H0Z" /></g></g></svg>',
            positionForTriggeringForYouSelector:
              '#gazeta_article_body .art_content .art_paragraph:nth-of-type(2)',
            positionForTriggeringGoToHpSelector: '.tags',
          },
          group2: {
            notificationTargetSelector: 'article_wrapper',
            notificationWrapperClass: 'hp-notification-mobile',
            notificationShowClass: 'hp-notification-mobile--show',
            notificationTemplate:
              '<div class="hp-notification-mobile__box"><div class="hp-notification-mobile__top"><div class="hp-notification-mobile__title">${headerTitle}</div><div class="hp-notification-mobile__timer start"><div class="pie spinner"></div><div class="pie filler"></div><div class="mask"></div></div></div><div class="hp-notification-mobile__image"><img src="${imgUrl}" alt="${title}"></div><header class="hp-notification-mobile__header"><span>${title}</span></header><div class="hp-notification-mobile__next"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g transform="translate(20 20) rotate(180)"><path d="M9.725,3.575,8.25,2.1,0,10.35,8.25,18.6l1.475-1.475L2.95,10.35Z" transform="translate(0 -0.35)"></path><path style="fill: none;" d="M0,0H20V20H0Z"></path></g></svg></div></div>',
            position: 'bottom',
            goToHpTemplate:
              '<svg xmlns="http://www.w3.org/2000/svg" width="190" height="24" viewBox="0 0 190 24">\n                                <g id="Group_3197" data-name="Group 3197" transform="translate(-15 -280)">\n                                    <g id="gazeta-logo" transform="translate(103.321 280)">\n                                    <path id="Path_138" data-name="Path 138" d="M8.312,3.81a3.8,3.8,0,1,1,1.113,2.7,3.81,3.81,0,0,1-1.113-2.7ZM20.779,16.277a3.8,3.8,0,1,0-2.7-1.113,3.81,3.81,0,0,0,2.7,1.113ZM3.463,15.931A3.463,3.463,0,1,0,0,12.468a3.463,3.463,0,0,0,3.463,3.463Zm0-9a3.1,3.1,0,1,0-2.208-.909,3.117,3.117,0,0,0,2.208.909ZM20.779,24a2.83,2.83,0,1,0-2.011-.829A2.857,2.857,0,0,0,20.779,24Zm0-18.286a1.9,1.9,0,1,0-1.9-1.9,1.9,1.9,0,0,0,1.9,1.9ZM3.463,23.03a1.9,1.9,0,1,0-1.9-1.9,1.9,1.9,0,0,0,1.9,1.9Zm8.658-8.139a2.409,2.409,0,1,0-1.719-.706,2.424,2.424,0,0,0,1.719.706Zm0,8.762a2.513,2.513,0,0,0,2.493-2.528,2.483,2.483,0,0,0-2.493-2.493,2.513,2.513,0,0,0-2.528,2.493,2.565,2.565,0,0,0,2.528,2.528Z" transform="translate(0)" fill="#fff"/>\n                                    <g id="Group_242" data-name="Group 242" transform="translate(32.208 8.173)">\n                                        <path id="Path_129" data-name="Path 129" d="M100.342,28.345h-3.29v-.727h4.087v.519c0,2.528-1.455,4.156-3.844,4.156A4.136,4.136,0,0,1,93,27.964,4.173,4.173,0,0,1,97.329,23.6a4.036,4.036,0,0,1,3.048,1.108l-.45.589a3.679,3.679,0,0,0-2.6-.97,3.417,3.417,0,0,0-3.532,3.6,3.4,3.4,0,0,0,3.463,3.6,2.881,2.881,0,0,0,3.048-3.082v-.1Z" transform="translate(-93 -23.6)" fill="#fff"/>\n                                        <path id="Path_130" data-name="Path 130" d="M123.652,24h.208l4.052,8.312h-.9l-.8-1.593H121.3l-.8,1.593h-.9Zm.173,1.628h-.1l-1.939,4.225-.069.139h4.156l-.069-.139Z" transform="translate(-110.388 -23.861)" fill="#fff"/>\n                                        <path id="Path_131" data-name="Path 131" d="M147,32.139l5.333-7.377h-5.195V24h6.476v.208l-5.264,7.377h5.126v.727H147Z" transform="translate(-128.299 -23.861)" fill="#fff"/>\n                                        <path id="Path_132" data-name="Path 132" d="M178.1,28.606H173.5v2.978h5.229v.727H172.7V24h6.026v.727H173.5v3.117H178.1Z" transform="translate(-145.098 -23.861)" fill="#fff"/>\n                                        <path id="Path_133" data-name="Path 133" d="M194.4,24h6.719v.727H198.14v7.584h-.762v-7.55H194.4Z" transform="translate(-159.283 -23.861)" fill="#fff"/>\n                                        <path id="Path_134" data-name="Path 134" d="M218.052,24h.208l4.052,8.312h-.9l-.8-1.593H215.7l-.8,1.593H214Zm.173,1.628h-.1l-1.939,4.225-.069.139h4.156l-.069-.139Z" transform="translate(-172.095 -23.861)" fill="#fff"/>\n                                        <path id="Path_135" data-name="Path 135" d="M241.689,45a.584.584,0,1,1-.418.171.589.589,0,0,1,.418-.171Z" transform="translate(-189.81 -37.589)" fill="#fff"/>\n                                        <path id="Path_136" data-name="Path 136" d="M251,24h3.325c2.078,0,3.29.935,3.29,2.736,0,1.87-1.281,2.84-3.325,2.84H251.8v2.736H251Zm3.325.762H251.8v4.121h2.528c1.524,0,2.493-.623,2.493-2.078C256.818,25.385,255.814,24.762,254.325,24.762Z" transform="translate(-196.281 -23.861)" fill="#fff"/>\n                                        <path id="Path_137" data-name="Path 137" d="M277,32.312V24h.8v7.584h4.952v.727Z" transform="translate(-213.277 -23.861)" fill="#fff"/>\n                                    </g>\n                                    </g>\n                                    <g id="arrow_back" data-name="arrow back" transform="translate(10 282)">\n                                    <path id="Path_489" data-name="Path 489" d="M15.416,3.416,14,2,6,10l8,8,1.416-1.416L8.832,10Z" transform="translate(-1)" fill="#fff"/>\n                                    </g>\n                                    <text id="Przejd\u017A_na" data-name="Przejd\u017A na" transform="translate(34 296.6)" fill="#fff" font-size="12" font-family="roboto" font-weight="700"><tspan x="0" y="0">Przejd\u017A na</tspan></text>\n                                </g>\n                            </svg>\n                            ',
            positionForTriggeringForYouSelector:
              '#gazeta_article_body .art_content .art_paragraph:nth-of-type(2)',
            positionForTriggeringGoToHpSelector: '.tags',
          },
        }),
        (o = gazeta_pl.readPageData()),
        {
          mobile: n,
          desktop: {
            group1: {
              notificationTargetSelector: 'body, .notificationBox',
              notificationWrapperClass: 'hp-notification-top',
              notificationShowClass: 'hp-notification-top--show',
              notificationTemplate:
                '<div class="hp-notification-top__news-box"><div class="hp-notification-top__prefix">${headerTitle}</div><div class="hp-notification-top__title">${title}</div><div class="hp-notification-top__read-more">Czytaj teraz</div></div>',
              position: 'top',
              goToHpTemplate: '',
              positionForTriggeringForYouSelector: null,
              positionForTriggeringGoToHpSelector: null,
            },
            group2: {
              notificationTargetSelector: '.bottom_section',
              notificationWrapperClass: 'hp-notification-bottom',
              notificationShowClass: 'hp-notification-bottom--show',
              notificationTemplate:
                '<svg width="185.52" height="30" viewBox="0 0 185.52 30"><defs><linearGradient id="a" x1="0.998" y1="1.037" x2="-0.012" y2="0.002" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#ff4282"></stop><stop offset="0.129" stop-color="#ff3365"></stop><stop offset="0.408" stop-color="#ff0d1a"></stop><stop offset="0.5" stop-color="red"></stop><stop offset="0.708" stop-color="#ff361f"></stop><stop offset="0.902" stop-color="#ff6238"></stop><stop offset="1" stop-color="#ff7342"></stop></linearGradient></defs><g transform="translate(-379 -1076)"><path style="fill: #222;" d="M12.65-5.786A4.6,4.6,0,0,1,7.788-.88a5.368,5.368,0,0,1-5.522-5.7A5.427,5.427,0,0,1,7.854-12.3,5.894,5.894,0,0,1,11.99-10.78l.726-.946a6.522,6.522,0,0,0-4.862-1.76A6.594,6.594,0,0,0,.99-6.578,6.547,6.547,0,0,0,7.788.308C11.594.308,13.9-2.244,13.9-6.27v-.814H7.414v1.166H12.65ZM14.586,0h1.408l1.254-2.508h7.81L26.312,0h1.43L21.3-13.2h-.308Zm9.746-3.938.132.242H17.842l.132-.242,3.08-6.71h.176ZM28.512,0h10.3V-1.166h-8.14l8.36-11.726V-13.2h-10.3v1.166H36.96L28.512-.308Zm21.6-7.084h-7.3v-4.95h8.294V-13.2H41.558V0h9.548V-1.166H42.812V-5.918h7.3Zm2.244-4.95h4.708V0H58.3V-12.034h4.73V-13.2H52.36ZM62.106,0h1.408l1.254-2.508h7.81L73.832,0h1.43L68.816-13.2h-.308Zm9.746-3.938.132.242H65.362l.132-.242,3.08-6.71h.176Zm4,3.19A.934.934,0,0,0,76.8.176a.916.916,0,0,0,.924-.924.921.921,0,0,0-.924-.946A.939.939,0,0,0,75.856-.748ZM80.212,0h1.254V-4.312h3.96c3.256,0,5.28-1.54,5.28-4.532,0-2.86-1.936-4.356-5.214-4.356h-5.28Zm9.24-8.8c0,2.354-1.584,3.322-3.982,3.322h-4v-6.556h4C87.846-12.034,89.452-11.022,89.452-8.8ZM102.52,0V-1.166H94.644V-13.2H93.39V0Z" transform="translate(462 1098)"></path><g transform="translate(421 1076)"><path style="fill: url(#a)" d="M10.39,4.762A4.748,4.748,0,1,1,11.78,8.133,4.762,4.762,0,0,1,10.39,4.762ZM25.974,20.346A4.748,4.748,0,1,0,22.6,18.956a4.762,4.762,0,0,0,3.371,1.391ZM4.329,19.913A4.329,4.329,0,1,0,0,15.584a4.329,4.329,0,0,0,4.329,4.329Zm0-11.255a3.88,3.88,0,1,0-2.76-1.136,3.9,3.9,0,0,0,2.76,1.136ZM25.974,30a3.538,3.538,0,1,0-2.514-1.036A3.571,3.571,0,0,0,25.974,30Zm0-22.857a2.381,2.381,0,1,0-2.381-2.381,2.381,2.381,0,0,0,2.381,2.381ZM4.329,28.788a2.381,2.381,0,1,0-2.381-2.381,2.381,2.381,0,0,0,2.381,2.381ZM15.151,18.615A3.012,3.012,0,1,0,13,17.733,3.03,3.03,0,0,0,15.151,18.615Zm0,10.952a3.141,3.141,0,0,0,3.117-3.16,3.1,3.1,0,0,0-3.117-3.117,3.141,3.141,0,0,0-3.16,3.117,3.206,3.206,0,0,0,3.16,3.16Z" transform="translate(0)"></path></g><g transform="translate(379 1079)"><path d="M11.67,3.87,9.9,2.1,0,12l9.9,9.9,1.77-1.77L3.54,12Z"></path><path style="fill: none" d="M0,0H24V24H0Z"></path></g></g></svg><div class="hp-notification-bottom__article-photo"><img src="${imgUrl}" alt="${title}"></div><div class="hp-notification-bottom__article-content"><div class="hp-notification-bottom__article-title">${headerTitle}</div><div class="hp-notification-bottom__article-lead">${title}</div></div>',
              position: 'bottom',
              goToHpTemplate:
                '<svg width="185.52" height="30" viewBox="0 0 185.52 30"><defs><linearGradient id="a" x1="0.998" y1="1.037" x2="-0.012" y2="0.002" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#ff4282"></stop><stop offset="0.129" stop-color="#ff3365"></stop><stop offset="0.408" stop-color="#ff0d1a"></stop><stop offset="0.5" stop-color="red"></stop><stop offset="0.708" stop-color="#ff361f"></stop><stop offset="0.902" stop-color="#ff6238"></stop><stop offset="1" stop-color="#ff7342"></stop></linearGradient></defs><g transform="translate(-379 -1076)"><path style="fill: #222;" d="M12.65-5.786A4.6,4.6,0,0,1,7.788-.88a5.368,5.368,0,0,1-5.522-5.7A5.427,5.427,0,0,1,7.854-12.3,5.894,5.894,0,0,1,11.99-10.78l.726-.946a6.522,6.522,0,0,0-4.862-1.76A6.594,6.594,0,0,0,.99-6.578,6.547,6.547,0,0,0,7.788.308C11.594.308,13.9-2.244,13.9-6.27v-.814H7.414v1.166H12.65ZM14.586,0h1.408l1.254-2.508h7.81L26.312,0h1.43L21.3-13.2h-.308Zm9.746-3.938.132.242H17.842l.132-.242,3.08-6.71h.176ZM28.512,0h10.3V-1.166h-8.14l8.36-11.726V-13.2h-10.3v1.166H36.96L28.512-.308Zm21.6-7.084h-7.3v-4.95h8.294V-13.2H41.558V0h9.548V-1.166H42.812V-5.918h7.3Zm2.244-4.95h4.708V0H58.3V-12.034h4.73V-13.2H52.36ZM62.106,0h1.408l1.254-2.508h7.81L73.832,0h1.43L68.816-13.2h-.308Zm9.746-3.938.132.242H65.362l.132-.242,3.08-6.71h.176Zm4,3.19A.934.934,0,0,0,76.8.176a.916.916,0,0,0,.924-.924.921.921,0,0,0-.924-.946A.939.939,0,0,0,75.856-.748ZM80.212,0h1.254V-4.312h3.96c3.256,0,5.28-1.54,5.28-4.532,0-2.86-1.936-4.356-5.214-4.356h-5.28Zm9.24-8.8c0,2.354-1.584,3.322-3.982,3.322h-4v-6.556h4C87.846-12.034,89.452-11.022,89.452-8.8ZM102.52,0V-1.166H94.644V-13.2H93.39V0Z" transform="translate(462 1098)"></path><g transform="translate(421 1076)"><path style="fill: url(#a)" d="M10.39,4.762A4.748,4.748,0,1,1,11.78,8.133,4.762,4.762,0,0,1,10.39,4.762ZM25.974,20.346A4.748,4.748,0,1,0,22.6,18.956a4.762,4.762,0,0,0,3.371,1.391ZM4.329,19.913A4.329,4.329,0,1,0,0,15.584a4.329,4.329,0,0,0,4.329,4.329Zm0-11.255a3.88,3.88,0,1,0-2.76-1.136,3.9,3.9,0,0,0,2.76,1.136ZM25.974,30a3.538,3.538,0,1,0-2.514-1.036A3.571,3.571,0,0,0,25.974,30Zm0-22.857a2.381,2.381,0,1,0-2.381-2.381,2.381,2.381,0,0,0,2.381,2.381ZM4.329,28.788a2.381,2.381,0,1,0-2.381-2.381,2.381,2.381,0,0,0,2.381,2.381ZM15.151,18.615A3.012,3.012,0,1,0,13,17.733,3.03,3.03,0,0,0,15.151,18.615Zm0,10.952a3.141,3.141,0,0,0,3.117-3.16,3.1,3.1,0,0,0-3.117-3.117,3.141,3.141,0,0,0-3.16,3.117,3.206,3.206,0,0,0,3.16,3.16Z" transform="translate(0)"></path></g><g transform="translate(379 1079)"><path d="M11.67,3.87,9.9,2.1,0,12l9.9,9.9,1.77-1.77L3.54,12Z"></path><path style="fill: none" d="M0,0H24V24H0Z"></path></g></g></svg>',
              positionForTriggeringForYouSelector:
                '#gazeta_article_body .art_content .art_paragraph:nth-of-type(2)',
              positionForTriggeringGoToHpSelector: '.tags',
            },
          },
          commons: {
            apiRequestTimeout: 5e3,
            apiConnectionMaxAttempts: 5,
            apiPollingIntervalOnActiveTab: 3e4,
            apiPollingIntervalOnInactiveTab: 6e4,
            apiUrl: 'https://hp-api.gazeta.pl/hp/v2/notifications/get/',
            cookieRecommendationCounterName: 'hpRecommendationCounter',
            guid: gazeta_pl.hpNotificationsCookies.getCookie('bwGuidv2'),
            uid: window.uniid ? window.uniid.pubid : '',
            urlParams: { domain: o.domain, articleXX: o.articleId || 0 },
          },
        })),
      (gazeta_pl.hpNotificationsController = (function () {
        var e,
          t,
          n,
          o = 0,
          i = {},
          a = null;
        function r(e, t) {
          clearInterval(n), e > 0 && (s(t), (n = setInterval(s, e)));
        }
        function s(n) {
          var o = (function (e, t) {
              var n = (function (e) {
                (e = void 0 === e ? {} : e).timestamp = Date.now();
                var t = '?';
                for (var n in e) t += n + '=' + e[n] + '&';
                return t.slice(0, -1);
              })(t);
              return e + n;
            })(t.apiUrl, n),
            s = new XMLHttpRequest();
          (s.onreadystatechange = function () {
            4 === s.readyState &&
              (200 === s.status
                ? (function (t) {
                    var n = null;
                    try {
                      n = JSON.parse(t);
                    } catch (e) {
                      l('Response from API has bad format or empty JSON');
                    }
                    null !== n &&
                      (0 === n.status.code
                        ? ((function (e) {
                            e.notification.recommendation
                              ? (a = e.notification.recommendation)
                              : a && (e.notification.recommendation = a);
                          })(n),
                          (function (e, t) {
                            var n, o, a;
                            for (n in t) {
                              for (o in t[n])
                                if (
                                  (a = t[n][o].run(e, i[n])).strategyProcessed
                                ) {
                                  i[n] = t[n][o];
                                  break;
                                }
                              a.strategyProcessed || (i[n] = null);
                            }
                          })(n, e))
                        : 1002 === n.status.code
                        ? r(0)
                        : l(
                            'Error from API: ' +
                              n.status.msg +
                              ' - ' +
                              n.status.code
                          ));
                  })(s.responseText)
                : l('HTTP status ' + s.status));
          }),
            s.open('GET', o, !0),
            (s.timeout = t.apiRequestTimeout),
            s.setRequestHeader('cache-control', 'no-cache'),
            s.setRequestHeader('cache-control', 'max-age=0'),
            s.setRequestHeader('pragma', 'no-cache'),
            s.send(null);
        }
        function l(e) {
          ++o >= t.apiConnectionMaxAttempts && r(0);
        }
        function c(e, t, n, o) {
          r(!document[e] ? t : n);
        }
        return {
          init: function init(n, o) {
            (t = n),
              (e = o),
              (function (e, t) {
                var n, o;
                void 0 !== document.hidden
                  ? ((o = 'hidden'), (n = 'visibilitychange'))
                  : void 0 !== document.mozHidden
                  ? ((o = 'mozHidden'), (n = 'mozvisibilitychange'))
                  : void 0 !== document.msHidden
                  ? ((o = 'msHidden'), (n = 'msvisibilitychange'))
                  : void 0 !== document.webkitHidden &&
                    ((o = 'webkitHidden'), (n = 'webkitvisibilitychange'));
                document.addEventListener(n, c.bind(this, o, e, t), !1);
              })(
                n.apiPollingIntervalOnActiveTab,
                n.apiPollingIntervalOnInactiveTab
              );
            var i = (function (e) {
              return {
                guid: e.guid,
                uid: e.uid,
                domain: e.urlParams.domain,
                aid: e.urlParams.articleXX,
              };
            })(n);
            r(n.apiPollingIntervalOnActiveTab, i);
          },
        };
      })()),
      (gazeta_pl.hpNotificationsStrategies = (function () {
        var e = {};
        function t(e) {
          var t = document.querySelector('.' + e);
          t && (t.outerHTML = '');
        }
        function n(e, t, n, o) {
          var i,
            a,
            r = {};
          (r.imgUrl = e.imgUrl
            ? ((i = e.imgUrl),
              (a = 'H'),
              i.replace(/(\/[a-z]\d{3,})ID/i, '$1' + a))
            : ''),
            (r.headerTitle = t || ''),
            (r.title = e.title || '');
          var s,
            l = document.createElement('a');
          for (var c in (l.classList.add.apply(l.classList, n),
          (l.href = e.url),
          l.setAttribute('rel', 'nofollow'),
          l.setAttribute('referrerpolicy', 'unsafe-url'),
          l.setAttribute('data-google-interstitial', 'false'),
          r))
            (s = new RegExp('(\\${' + c + '})', 'g')),
              (r[c] = r[c].replace(/"/g, '&quot;')),
              (o = o.replace(s, r[c]));
          return (l.innerHTML = o), l;
        }
        function o(e, t, n) {
          return new Promise(function (o) {
            var i = document.querySelector('.' + e);
            if (i) {
              var _a6 = function a() {
                i.removeEventListener('transitionend', _a6), o();
              };
              i.addEventListener('transitionend', _a6),
                'remove' === n && i.classList.contains(t)
                  ? i.classList.remove(t)
                  : 'add' !== n || i.classList.contains(t)
                  ? _a6()
                  : i.classList.add(t);
            } else o();
          });
        }
        function i(n) {
          var i;
          (i = n.notificationPosition),
            e[i] && e[i].disconnect(),
            o(
              n.notificationWrapperClass,
              n.notificationShowClass,
              'remove'
            ).then(function () {
              var e, i;
              t(n.notificationWrapperClass),
                (e = n.target),
                (i = n.notificationDomElement),
                e.insertAdjacentElement('afterbegin', i),
                i.offsetWidth,
                (function (e) {
                  var t = {
                      name: 'notification--turnON',
                      position: e.notificationPosition,
                    },
                    n = new CustomEvent('hpNotificationEvent', { detail: t });
                  document.dispatchEvent(n);
                })(n),
                o(n.notificationWrapperClass, n.notificationShowClass, 'add');
            });
        }
        return {
          notificationStrategy: function notificationStrategy(e) {
            var t = 0;
            return {
              run: function run(o, a) {
                if (
                  !(function (e) {
                    return !!e.notification.message;
                  })(o)
                )
                  return { strategyProcessed: !1 };
                var r = _toConsumableArray(
                  document.querySelectorAll(e.notificationTargetSelector)
                ).pop();
                if (!r) return { strategyProcessed: !0 };
                if (
                  !(o.notification.message.messageType === e.notificationType)
                )
                  return { strategyProcessed: !1 };
                var s = o.notification.message.lastUpdate;
                return t === s && a === this
                  ? { strategyProcessed: !0 }
                  : o.notification.message.timeToLive < 60 && !t
                  ? { strategyProcessed: !1 }
                  : ((t = s),
                    i({
                      target: r,
                      notificationDomElement: n(
                        o.notification.message,
                        e.notificationHeaderTitle,
                        [].concat(
                          e.notificationWrapperClass,
                          e.notificationStrategyClass
                        ),
                        e.notificationTemplate
                      ),
                      notificationWrapperClass: e.notificationWrapperClass,
                      notificationShowClass: e.notificationShowClass,
                      notificationPosition: e.position,
                    }),
                    { strategyProcessed: !0 });
              },
            };
          },
          clearNotificationAreaStrategy: function clearNotificationAreaStrategy(
            e
          ) {
            return {
              run: function run(n, i) {
                return (
                  i === this ||
                    o(
                      e.notificationWrapperClass,
                      e.notificationShowClass,
                      'remove'
                    ).then(function () {
                      t(e.notificationWrapperClass);
                    }),
                  { strategyProcessed: !0 }
                );
              },
            };
          },
          recommendationStrategy: function recommendationStrategy(t) {
            function a(e, t) {
              var n,
                o =
                  ((n = new Date()).setHours(23),
                  n.setMinutes(59),
                  n.setSeconds(59),
                  n),
                i = window.location.hostname.split('.').slice(-2).join('.');
              gazeta_pl.hpNotificationsCookies.setCookie(e, t, o, i);
            }
            function r(e, t) {
              var n = document.querySelector('.' + e);
              n && n.classList.remove(t);
            }
            function s(e, t, n) {
              (!t || t[0].intersectionRatio > 0) &&
                (i(e),
                a(
                  e.cookieRecommendationCounterName,
                  ++e.displayedRecommendationsCounter
                ),
                e.isRecommendationBigVersion &&
                  setTimeout(
                    r.bind(
                      this,
                      e.notificationWrapperClass,
                      e.recommendationBigVersionClass
                    ),
                    5e3
                  ));
            }
            return {
              run: function run(i, a) {
                if (
                  !(function (e) {
                    return !!e.notification.recommendation;
                  })(i)
                )
                  return { strategyProcessed: !1 };
                var r = _toConsumableArray(
                  document.querySelectorAll(t.notificationTargetSelector)
                ).pop();
                if (!r) return { strategyProcessed: !0 };
                if (a === this) return { strategyProcessed: !0 };
                var l =
                  gazeta_pl.hpNotificationsCookies.getCookie(
                    t.cookieRecommendationCounterName
                  ) || 0;
                if (l >= 3) return { strategyProcessed: !1 };
                var c = [].concat(t.notificationStrategyClass);
                t.recommendationBigVersionClass &&
                  0 == l &&
                  c.push(t.recommendationBigVersionClass);
                var p = {
                    target: r,
                    notificationDomElement: n(
                      i.notification.recommendation,
                      t.notificationHeaderTitle,
                      [].concat(t.notificationWrapperClass, c),
                      t.notificationTemplate
                    ),
                    notificationWrapperClass: t.notificationWrapperClass,
                    notificationShowClass: t.notificationShowClass,
                    notificationPosition: t.position,
                    isRecommendationBigVersion: !!~c.indexOf(
                      t.recommendationBigVersionClass
                    ),
                    recommendationBigVersionClass:
                      t.recommendationBigVersionClass,
                    cookieRecommendationCounterName:
                      t.cookieRecommendationCounterName,
                    displayedRecommendationsCounter: l,
                  },
                  d = document.querySelector(
                    t.positionForTriggeringForYouSelector
                  );
                return (
                  d
                    ? o(
                        t.notificationWrapperClass,
                        t.notificationShowClass,
                        'remove'
                      ).then(function () {
                        var n, o;
                        ((n = t.position),
                        (o = s.bind(this, p)),
                        (e[n] =
                          e[n] ||
                          new IntersectionObserver(o, {
                            root: null,
                            rootMargin: '0px',
                            threshold: 0.01,
                          })),
                        e[n]).observe(d);
                      })
                    : s(p),
                  { strategyProcessed: !0 }
                );
              },
            };
          },
          goToHpStrategy: function goToHpStrategy(e) {
            return {
              run: function run(t, o) {
                console.log('run', e.notificationTargetSelector);
                var a = document.getElementById(e.notificationTargetSelector),
                  r = (function () {
                    var e = document.querySelector('meta[name="referrer"]');
                    return (
                      e ||
                        ((e = document.createElement('meta')),
                        (e.name = 'referrer'),
                        document.head.appendChild(e)),
                      (e.content = 'strict-origin-when-cross-origin'),
                      e
                    );
                  })();
                if (!a) return { strategyProcessed: !0 };
                if (o === this) return { strategyProcessed: !0 };
                var s = n(
                  e.notificationMessage,
                  null,
                  [].concat(
                    e.notificationWrapperClass,
                    e.notificationStrategyClass
                  ),
                  e.goToHpTemplate
                );
                s.addEventListener('click', function () {
                  r.content = 'no-referrer-when-downgrade';
                });
                var l = {
                    target: a,
                    notificationDomElement: s,
                    notificationWrapperClass: e.notificationWrapperClass,
                    notificationShowClass: e.notificationShowClass,
                    notificationPosition: e.position,
                  },
                  c = a.clientHeight / 2;
                var p;
                return (
                  window.addEventListener('scroll', function () {
                    var e = document.querySelector('.hp-notification-mobile');
                    if ('requestIdleCallback' in window)
                      p = window.requestIdleCallback(function () {
                        var t = window.scrollY + window.innerHeight / 2;
                        !e && t >= c && i(l), window.cancelIdleCallback(p);
                      });
                    else {
                      var _t31 = window.scrollY + window.innerHeight / 2;
                      !e && _t31 >= c && i(l);
                    }
                  }),
                  window.addEventListener('pagehide', function () {
                    window.cancelIdleCallback(p);
                  }),
                  { strategyProcessed: !0 }
                );
              },
            };
          },
        };
      })()),
      (gazeta_pl.hpNotificationsFactory = (function () {
        function e() {
          var e = Array.prototype.slice.call(arguments);
          var t = e.reduce(function (e, t) {
            return (
              Object.keys(t).forEach(function (n) {
                e[n] = t[n];
              }),
              e
            );
          }, {});
          return t;
        }
        return {
          getNotificator: function getNotificator(t, n, o) {
            var i = {},
              a = {},
              r = 'mobile';
            (gazeta_pl.mobileInfo && gazeta_pl.mobileInfo.isMobileDevice) ||
              (r = 'desktop');
            var s = {
              mobile: {
                notificationStrategyClass: 'hp-notification-mobile',
                recommendationBigVersionClass:
                  'hp-notification-mobile--big-version',
                notificationHeaderTitle: 'Dla Ciebie na Gazeta.pl',
                cookieRecommendationCounterName:
                  t.commons.cookieRecommendationCounterName,
              },
              desktop: {
                notificationStrategyClass: 'hp-notification-bottom',
                notificationHeaderTitle: 'Dla Ciebie na Gazeta.pl',
                cookieRecommendationCounterName:
                  t.commons.cookieRecommendationCounterName,
              },
            };
            return (
              (a.breakingNews = gazeta_pl.breakingNewsNotification
                ? {
                    mobile: {
                      notificationType: 'BREAKING_NEWS',
                      notificationStrategyClass:
                        'hp-notification-mobile--breaking-news',
                      notificationHeaderTitle: null,
                    },
                    desktop: {
                      notificationType: 'BREAKING_NEWS',
                      notificationStrategyClass:
                        'hp-notification-top--breaking-news',
                      notificationHeaderTitle: 'PILNE',
                    },
                  }[r]
                : {}),
              (a.forYou = gazeta_pl.forYouNotification ? s[r] : {}),
              (a.goToHp = gazeta_pl.hp5Notification
                ? {
                    mobile: {
                      notificationStrategyClass:
                        'hp-notification-mobile--return-bar',
                      notificationMessage: {
                        url: 'https://m.gazeta.pl/0,0.html#mpr=pnHP_5',
                      },
                    },
                    desktop: {
                      notificationStrategyClass: 'hp-notification-bottom',
                      notificationMessage: {
                        url: 'https://www.gazeta.pl/0,0.html#mpr=pnHP_5',
                      },
                    },
                  }[r]
                : {}),
              (a.seeOnHp = gazeta_pl.megaOpeningNotification
                ? {
                    mobile: {
                      notificationType: 'NOTIFICATION',
                      notificationStrategyClass:
                        'hp-notification-mobile--see-on-hp',
                      notificationHeaderTitle: 'Zobacz na Gazeta.pl',
                    },
                    desktop: {
                      notificationType: 'NOTIFICATION',
                      notificationStrategyClass: 'hp-notification-top',
                      notificationHeaderTitle: 'Zobacz na Gazeta.pl',
                    },
                  }[r]
                : {}),
              'mobile' === r
                ? ((i.group1 = []),
                  i.group1.push(
                    o.notificationStrategy(e(t.mobile.group1, a.breakingNews))
                  ),
                  i.group1.push(
                    o.recommendationStrategy(e(t.mobile.group1, a.forYou))
                  ),
                  i.group1.push(
                    o.notificationStrategy(e(t.mobile.group1, a.seeOnHp))
                  ),
                  i.group1.push(o.goToHpStrategy(e(t.mobile.group2, a.goToHp))))
                : ((a.clearNotificationArea = {}),
                  (i.group1 = []),
                  i.group1.push(
                    o.notificationStrategy(e(t.desktop.group1, a.breakingNews))
                  ),
                  i.group1.push(
                    o.notificationStrategy(e(t.desktop.group1, a.seeOnHp))
                  ),
                  i.group1.push(
                    o.clearNotificationAreaStrategy(
                      e(t.desktop.group1, a.clearNotificationArea)
                    )
                  )),
              n.init.bind(this, t.commons, i)
            );
          },
        };
      })()),
      (gazeta_pl.hpNotifications = {
        init: function init() {
          var e = gazeta_pl.bottom_nav_test_ab || {},
            t = !(!e || !['A', 'B', 'C', 'D'].includes(e.group)),
            n = document.querySelector('.bottomNav');
          if (t && n) return void n.classList.add('bottomNav--enable');
          [
            window.gazeta_pl.megaOpeningNotification,
            window.gazeta_pl.forYouNotification,
            window.gazeta_pl.hp5Notification,
            window.gazeta_pl.breakingNewsNotification,
          ].every(function (e) {
            return e;
          }) &&
            gazeta_pl.hpNotificationsFactory.getNotificator(
              gazeta_pl.hpNotificationsConfig,
              gazeta_pl.hpNotificationsController,
              gazeta_pl.hpNotificationsStrategies
            )();
        },
      }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.hpNotifications.init();
      });
  },
  function (e, t, n) {
    var o = n(100);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(102);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(104);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(106);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(108);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(110);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(112);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(114);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(116);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(118);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(120);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(122);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(124);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(126);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(128);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(130);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(132);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(134);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(136);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(138);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(140);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(142);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(144);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(146);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(148);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(150);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(152);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(154);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(156);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(158);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(160);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(162);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(164);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(166);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(168);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(170);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(172);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(174);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(176);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(178);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    var o = n(180);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(1)(o, i);
    o.locals && (e.exports = o.locals);
  },
  function (e, t, n) {},
  function (e, t, n) {
    'use strict';
    function o(e) {
      return (o =
        'function' == typeof Symbol && 'symbol' == _typeof(Symbol.iterator)
          ? function (e) {
              return _typeof(e);
            }
          : function (e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : _typeof(e);
            })(e);
    }
    function i(e) {
      var t = (function (e, t) {
        if ('object' != o(e) || !e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var i = n.call(e, t || 'default');
          if ('object' != o(i)) return i;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
      })(e, 'string');
      return 'symbol' == o(t) ? t : t + '';
    }
    function a(e, t, n) {
      return (
        (t = i(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function r(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }
    function s(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? r(Object(n), !0).forEach(function (t) {
              a(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : r(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function l(e) {
      return (
        'Minified Redux error #' +
        e +
        '; visit https://redux.js.org/Errors?code=' +
        e +
        ' for the full message or use the non-minified dev environment for full errors. '
      );
    }
    n.r(t);
    var c =
        ('function' == typeof Symbol && Symbol.observable) || '@@observable',
      p = function p() {
        return Math.random().toString(36).substring(7).split('').join('.');
      },
      d = {
        INIT: '@@redux/INIT' + p(),
        REPLACE: '@@redux/REPLACE' + p(),
        PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
          return '@@redux/PROBE_UNKNOWN_ACTION' + p();
        },
      };
    function u(e) {
      if ('object' != _typeof(e) || null === e) return !1;
      for (var t = e; null !== Object.getPrototypeOf(t); )
        t = Object.getPrototypeOf(t);
      return Object.getPrototypeOf(e) === t;
    }
    function m(e, t, n) {
      var o;
      if (
        ('function' == typeof t && 'function' == typeof n) ||
        ('function' == typeof n && 'function' == typeof arguments[3])
      )
        throw new Error(l(0));
      if (
        ('function' == typeof t && void 0 === n && ((n = t), (t = void 0)),
        void 0 !== n)
      ) {
        if ('function' != typeof n) throw new Error(l(1));
        return n(m)(e, t);
      }
      if ('function' != typeof e) throw new Error(l(2));
      var i = e,
        a = t,
        r = [],
        s = r,
        p = !1;
      function h() {
        s === r && (s = r.slice());
      }
      function f() {
        if (p) throw new Error(l(3));
        return a;
      }
      function g(e) {
        if ('function' != typeof e) throw new Error(l(4));
        if (p) throw new Error(l(5));
        var t = !0;
        return (
          h(),
          s.push(e),
          function () {
            if (t) {
              if (p) throw new Error(l(6));
              (t = !1), h();
              var n = s.indexOf(e);
              s.splice(n, 1), (r = null);
            }
          }
        );
      }
      function v(e) {
        if (!u(e)) throw new Error(l(7));
        if (void 0 === e.type) throw new Error(l(8));
        if (p) throw new Error(l(9));
        try {
          (p = !0), (a = i(a, e));
        } finally {
          p = !1;
        }
        for (var t = (r = s), n = 0; n < t.length; n++) {
          (0, t[n])();
        }
        return e;
      }
      function _(e) {
        if ('function' != typeof e) throw new Error(l(10));
        (i = e), v({ type: d.REPLACE });
      }
      function y() {
        var e,
          t = g;
        return (
          ((e = {
            subscribe: function subscribe(e) {
              if ('object' != _typeof(e) || null === e) throw new Error(l(11));
              function n() {
                e.next && e.next(f());
              }
              return n(), { unsubscribe: t(n) };
            },
          })[c] = function () {
            return this;
          }),
          e
        );
      }
      return (
        v({ type: d.INIT }),
        ((o = { dispatch: v, subscribe: g, getState: f, replaceReducer: _ })[
          c
        ] = y),
        o
      );
    }
    function h(e) {
      for (var t = Object.keys(e), n = {}, o = 0; o < t.length; o++) {
        var i = t[o];
        0, 'function' == typeof e[i] && (n[i] = e[i]);
      }
      var a,
        r = Object.keys(n);
      try {
        !(function (e) {
          Object.keys(e).forEach(function (t) {
            var n = e[t];
            if (void 0 === n(void 0, { type: d.INIT })) throw new Error(l(12));
            if (void 0 === n(void 0, { type: d.PROBE_UNKNOWN_ACTION() }))
              throw new Error(l(13));
          });
        })(n);
      } catch (e) {
        a = e;
      }
      return function (e, t) {
        if ((void 0 === e && (e = {}), a)) throw a;
        for (var o = !1, i = {}, s = 0; s < r.length; s++) {
          var c = r[s],
            p = n[c],
            d = e[c],
            u = p(d, t);
          if (void 0 === u) {
            t && t.type;
            throw new Error(l(14));
          }
          (i[c] = u), (o = o || u !== d);
        }
        return (o = o || r.length !== Object.keys(e).length) ? i : e;
      };
    }
    function f() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return 0 === t.length
        ? function (e) {
            return e;
          }
        : 1 === t.length
        ? t[0]
        : t.reduce(function (e, t) {
            return function () {
              return e(t.apply(void 0, arguments));
            };
          });
    }
    window.gazeta_pl.redux = { middlewares: [], reducers: [], store: null };
    var g = function g(_ref27) {
        var e = _ref27.dispatch,
          t = _ref27.getState;
        return function (e) {
          return function (t) {
            e(t);
          };
        };
      },
      v = function v() {
        var e =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : null;
        var t = arguments.length > 1 ? arguments[1] : undefined;
        return t;
      };
    document.addEventListener('DOMContentLoaded', function () {
      window.gazeta_pl.redux.reducers.push({ lastAction: v }),
        window.gazeta_pl.redux.middlewares.push(g);
      var e = Object.assign.apply(
          Object,
          [{}].concat(_toConsumableArray(window.gazeta_pl.redux.reducers))
        ),
        t = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return function (e) {
            return function () {
              var n = e.apply(void 0, arguments),
                o = function o() {
                  throw new Error(l(15));
                },
                i = {
                  getState: n.getState,
                  dispatch: function dispatch() {
                    return o.apply(void 0, arguments);
                  },
                },
                a = t.map(function (e) {
                  return e(i);
                });
              return (
                (o = f.apply(void 0, a)(n.dispatch)),
                s(s({}, n), {}, { dispatch: o })
              );
            };
          };
        }.apply(void 0, _toConsumableArray(window.gazeta_pl.redux.middlewares)),
        n = h(e);
      window.gazeta_pl.redux.store = m(n, t);
    });
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    n(48);
    var o = n(17),
      i = n(12),
      a = n(0);
    var r = /*#__PURE__*/ (function () {
      function r() {
        var _this55 = this;
        var e =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : '#premiumArticle__mainArticle';
        _classCallCheck(this, r);
        var t = document.querySelector(e);
        t &&
          (this.checkBlockquoteOverlapLead(t),
          setTimeout(function () {
            _this55.checkBlockquoteOverlapLead(t);
          }, 2e3),
          setTimeout(function () {
            (_this55.adObserver = null),
              (_this55.artBlockquote = null),
              _this55.findGalleries(t),
              _this55.slotRenderEnded(t);
          }, 500));
      }
      return _createClass(r, [
        {
          key: 'findGalleries',
          value: function findGalleries(e) {
            var t = e.querySelectorAll('.article__gallery');
            this.fixGalleryIfOverlap(t, e),
              0 == t.length && (t = e.querySelectorAll('.article__lead')),
              this.calculateWrapperPosition(t, e);
          },
        },
        {
          key: 'checkBlockquoteOverlapLead',
          value: function checkBlockquoteOverlapLead(e) {
            var _this56 = this;
            var t = e.querySelectorAll('.art_blockquote'),
              n = e.querySelectorAll('.article__sidebar > *');
            t.forEach(function (e) {
              _this56.checkElementOverlap(e, n) &&
                e.classList.add('art_blockquote--moveToRight');
            });
          },
        },
        {
          key: 'checkElementOverlap',
          value: function checkElementOverlap(e, t) {
            var n = !1;
            return (
              e &&
                t &&
                (t = void 0 === t.length ? [t] : t).forEach(function (t) {
                  var o = t.getBoundingClientRect(),
                    i = e.getBoundingClientRect();
                  !(
                    o.right < i.left ||
                    o.left > i.right ||
                    o.bottom < i.top ||
                    o.top > i.bottom
                  ) && (n = !0);
                }),
              n
            );
          },
        },
        {
          key: 'fixGalleryIfOverlap',
          value: function fixGalleryIfOverlap(e, t) {
            var _this57 = this;
            var n = t.querySelectorAll('.article__sidebar > *');
            e.forEach(function (e) {
              _this57.checkElementOverlap(e, n) &&
                e.parentElement.classList.add('resizeImage');
            });
          },
        },
        {
          key: 'calculateWrapperPosition',
          value: function calculateWrapperPosition(e, t) {
            var n = t.querySelector('.article'),
              o = { top: 0, height: 1200 },
              i = t.querySelector('.article__slot'),
              a = _toConsumableArray(e).filter(function (e) {
                return !e.parentElement.classList.contains('resizeImage');
              });
            if (a.length >= 2) {
              var _e36 = i.offsetHeight + 50;
              i.style.opacity = 0 == _e36 ? 0 : 1;
              var _loop = function _loop() {
                var _r = _i10 + 1;
                var s = a[_i10],
                  l = a[_r],
                  c = s.offsetTop,
                  p = s.offsetHeight;
                if (void 0 === l) {
                  var _i11 = t.querySelector('.art_content');
                  (o.top = c + p),
                    s.parentElement.classList.add('art_embed--lastGallery');
                  var _a7 = 0;
                  t
                    .querySelectorAll('.art_embed--lastGallery ~ *')
                    .forEach(function (e) {
                      _a7 += e.offsetHeight;
                    }),
                    (o.height = _e36);
                  var _r2 = t.querySelector(
                      '.article__sidebar_extraContent > div'
                    ),
                    _l2 = _r2 ? _r2.offsetHeight : 0;
                  if (o.top + _e36 + _l2 > n.offsetHeight) {
                    var _t32 = _l2 + _e36 - _a7 - 20;
                    var _n20;
                    (_n20 = _t32 > 0 ? _t32 : 0),
                      (_i11.style.paddingBottom = _n20 + 'px');
                  }
                } else {
                  var _t33 = l.offsetTop - (c + p);
                  if (_e36 < _t33) {
                    (o.top = c + p), (o.height = _t33 + 25);
                    return 1; // break
                  }
                }
              };
              for (var _i10 = 0; _i10 < a.length; _i10++) {
                if (_loop()) break;
              }
            } else if (1 == a.length) {
              var _e37 = a[0];
              o.top = _e37.offsetTop + _e37.offsetHeight + 15;
            }
            this.setAdWrapper(o, t, i);
          },
        },
        {
          key: 'setAdWrapper',
          value: function setAdWrapper(e, t, n) {
            if (n) {
              (n.style.top = e.top + 'px'),
                n.classList.add('article__slot--visible');
              var _o14 = n.firstElementChild;
              a.default.isPremium && (_o14.style.height = e.height - 57 + 'px'),
                this.adObserver ||
                  ((this.adObserver = !0),
                  this.setObserverForAd(_o14.firstElementChild, t),
                  this.setObserverForBlockquote(t),
                  this.setObserverForGalleries(t));
            }
          },
        },
        {
          key: 'setObserverForGalleries',
          value: function setObserverForGalleries(e) {
            var t = e.querySelectorAll('.article__gallery');
            var n = new IntersectionObserver(function (t) {
              t.forEach(function (t) {
                t.intersectionRatio > 0 && s.findGalleries(e);
              });
            });
            t.forEach(function (e) {
              n.observe(e);
            });
          },
        },
        {
          key: 'setObserverForBlockquote',
          value: function setObserverForBlockquote(e) {
            var _this58 = this;
            var t = e.querySelectorAll('.art_blockquote'),
              n = e.querySelector('.article__slot > div');
            var o = new IntersectionObserver(
              function (t) {
                t.forEach(function (t) {
                  if (t.intersectionRatio > 0) {
                    _this58.checkBlockquoteOverlapLead(e);
                    var _o15 = t.target;
                    _this58.checkElementOverlap(_o15, n) &&
                      (_o15.style.marginLeft = '45px');
                  }
                });
              },
              { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
            );
            t.forEach(function (e) {
              o.observe(e);
            });
          },
        },
        {
          key: 'setObserverForAd',
          value: function setObserverForAd(e, t) {
            var _this59 = this;
            var n = t.querySelectorAll('.art_blockquote'),
              o = t.querySelectorAll('.article__sidebar > *');
            n.length && (this.artBlockquote = n);
            new IntersectionObserver(
              function (e) {
                e.forEach(function (e) {
                  if (
                    (e.intersectionRatio > 0 && _this59.findGalleries(t),
                    e.intersectionRatio > 0.2 && _this59.artBlockquote)
                  ) {
                    var _t34 = e.target;
                    _this59.artBlockquote.forEach(function (e) {
                      (_this59.checkElementOverlap(e, _t34) ||
                        _this59.checkElementOverlap(e, o)) &&
                        (e.style.marginLeft = '45px');
                    });
                  }
                });
              },
              { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
            ).observe(e);
          },
        },
        {
          key: 'slotRenderEnded',
          value: function slotRenderEnded(e) {
            googletag.cmd.push(function () {
              googletag
                .pubads()
                .addEventListener('slotRenderEnded', function (t) {
                  t.isEmpty || s.findGalleries(e);
                });
            });
          },
        },
      ]);
    })();
    var s;
    gazeta_pl.mobileInfo.isMobileDevice || (s = new r());
    var l = r;
    (gazeta_pl.articlesLoader_premium = {
      init: function init() {
        var _this60 = this;
        return _asyncToGenerator(function* () {
          _this60.initialData() &&
            (yield _this60.runPromise(_this60.getArticlesList.bind(_this60)),
            _this60.makeObervers());
        })();
      },
      initialData: function initialData() {
        if (
          gazeta_pl.premiumArtLoaderOff ||
          gazeta_pl.premiumAutoLoaderOffBySection
        )
          return !1;
        var e = document.querySelector('link[rel="canonical"]'),
          t = e ? e.href : window.location.href,
          _gazeta_pl$readPageDa = gazeta_pl.readPageData(t),
          n = _gazeta_pl$readPageDa.articleId,
          o = _gazeta_pl$readPageDa.pageId,
          i = _gazeta_pl$readPageDa.pageRoot,
          r = _gazeta_pl$readPageDa.domain,
          s = window.location.search.match(
            /(\?google_preview=[\w\S&=]*creativeId=\d*)/
          ),
          l = s && Array.isArray(s);
        if (
          ((a.default.articleXX = n),
          (a.default.sectionXX = o),
          (a.default.pageRoot = i),
          (a.default.domain = r),
          (a.default.isPremium = document.body.classList.contains('premium')),
          (a.default.isAutoloadOn = gazeta_pl.awdAutoLoadArts),
          (a.default.isAutoloadOnOnlyC2C = gazeta_pl.awdAutoLoadArtsOnlyC2C),
          (a.default.isC2C = document.body.classList.contains('c2c')),
          (a.default.isPromotionMaterial =
            null !== document.querySelector('.promotion-material-data')),
          (a.default.URLParams = l ? s[0] : ''),
          (!a.default.isPremium && !a.default.isAutoloadOn) ||
            (!a.default.isC2C &&
              !a.default.isPremium &&
              a.default.isAutoloadOnOnlyC2C))
        )
          return !1;
        if (
          (gazeta_pl.mobileInfo.isMobileDevice ||
            (a.default.device = 'DESKTOP'),
          gazeta_pl.mobileInfo.isMobileDevice && (a.default.device = 'MOBILE'),
          (a.default.isPartnersMaterial =
            a.default.partnerSectionXX == a.default.sectionXX),
          a.default.isPartnersMaterial)
        )
          return !1;
        var c =
          document.querySelector(
            '.article__type--cycle .article__type-title'
          ) ||
          window.global__cycleTitle ||
          !1;
        if (c)
          a.default.cycleData = {
            title: 'string' == typeof c ? c : c.textContent,
            description: window.global__cycleDescription || !1,
          };
        else {
          var _e38 =
            document.querySelector('.article__type--section') ||
            window.global__sectionTitle ||
            !1;
          _e38 &&
            (a.default.sectionTitle =
              'string' == typeof _e38 ? _e38 : _e38.textContent);
        }
        return (
          (a.default.articlesList = {}),
          (a.default.elementsToObserve.wrappers = {}),
          (a.default.elementsToObserve.iterator = 0),
          this.processWrapperData(a.default.articleXX, document.title, t),
          (a.default.loadArticlesWrapper = document.getElementById(
            'premiumArticle__autoloaderWrapper'
          )),
          (a.default.scripts = a.default.scripts || {}),
          (a.default.scripts.used = a.default.scripts.used || new Set()),
          _toConsumableArray(
            document.querySelectorAll(
              'script[src]:not([src^="https://video.onnetwork.tv"])'
            )
          ).forEach(function (e) {
            a.default.scripts.used.add(e.src);
          }),
          (this.articleLoadEvent = document.createEvent('Event')),
          this.articleLoadEvent.initEvent('dynpageview', !0, !0),
          (this.articleLoadEvent.eventName = 'dynpageview'),
          (this.articleChangeEvent = document.createEvent('Event')),
          this.articleChangeEvent.initEvent('dynpagechange', !0, !0),
          (this.articleChangeEvent.eventName = 'dynpagechange'),
          document.referrer
            ? ((this.articleLoadEvent.referrer = document.referrer),
              (this.articleChangeEvent.referrer = document.referrer))
            : ((this.articleLoadEvent.referrer = t),
              (this.articleChangeEvent.referrer = t)),
          (this.visitedUrls = new Set()),
          this.visitedUrls.add(t),
          !0
        );
      },
      runPromise: function runPromise(e) {
        return new Promise(function (t) {
          return setTimeout(function () {
            return t(e());
          }, 500);
        });
      },
      getArticlesList: function getArticlesList() {
        var _this61 = this;
        return _asyncToGenerator(function* () {
          for (
            a.default.articlesList.normal = yield _this61.fetchIndexData(
              a.default.sectionXX,
              a.default.artsLimit + 1
            ),
              a.default.articlesList.toProcess = [],
              a.default.articlesList.backup = [],
              a.default.cycleData ||
              window.gazeta_pl.premiumExcludePartnerArt ||
              a.default.isAutoloadOn
                ? (a.default.articlesList.toProcess = _toConsumableArray(
                    a.default.articlesList.normal
                  ))
                : ((a.default.articlesList.partner =
                    yield _this61.fetchIndexData(
                      a.default.partnerSectionXX,
                      1
                    )),
                  (a.default.articlesList.toProcess = [].concat(
                    _toConsumableArray(a.default.articlesList.partner),
                    _toConsumableArray(a.default.articlesList.normal)
                  ))),
              a.default.articlesList.toProcess =
                a.default.articlesList.toProcess.filter(function (e) {
                  return e != a.default.articleXX;
                });
            a.default.articlesList.toProcess.length > a.default.artsLimit;

          )
            a.default.articlesList.toProcess.pop();
          var e = a.default.artsLimit - a.default.articlesList.toProcess.length;
          e &&
            ((a.default.articlesList.backup = yield _this61.fetchIndexData(
              a.default.backup.sectionXX,
              e,
              !0
            )),
            (a.default.backupRendered = !1));
        })();
      },
      processWrapperData: function processWrapperData(e, t, n) {
        a.default.elementsToObserve.wrappers[e] = { title: t, url: n };
      },
      fetchIndexData: function fetchIndexData(e, t) {
        var _arguments2 = arguments,
          _this62 = this;
        return _asyncToGenerator(function* () {
          var n =
            _arguments2.length > 2 && _arguments2[2] !== undefined
              ? _arguments2[2]
              : !1;
          var o = _this62.getIndexApiByTypePage(e, t);
          return yield fetch(o)
            .then(function (e) {
              return e.json();
            })
            .then(function (e) {
              return (
                n ||
                  (e.indexElements = e.indexElements.filter(function (e) {
                    return 7 === e.urlType;
                  })),
                e.indexElements
                  .map(function (e) {
                    return e.xx;
                  })
                  .filter(function (e) {
                    return e !== a.default.articleXX;
                  })
              );
            })
            .catch(function (e) {
              return console.error(e);
            });
        })();
      },
      makeAutoLoadObserver: function makeAutoLoadObserver() {
        var _this63 = this;
        var e = this,
          t = {
            rootMargin: '0px 0px '.concat(
              a.default.elementsToObserve.safetyMargin,
              'px'
            ),
          },
          n = new IntersectionObserver(function (t) {
            if (
              t[t.length - 1].isIntersecting &&
              a.default.elementsToObserve.queueEmpty
            ) {
              var _t35 = a.default.articlesList.toProcess.shift();
              _t35
                ? e.getArticleData(_t35, _this63.renderArticle.bind(_this63))
                : (a.default.backupRendered || _this63.renderBackupArticles(),
                  n.disconnect());
            }
          }, t);
        return n;
      },
      makeChangeLocationObserver: function makeChangeLocationObserver() {
        var _this64 = this;
        return new IntersectionObserver(function (e) {
          e.forEach(function (e) {
            if (e.isIntersecting) {
              var _t36 = e.target.dataset.xx,
                _a$default$elementsTo =
                  a.default.elementsToObserve.wrappers[_t36],
                _n21 = _a$default$elementsTo.title,
                _o16 = _a$default$elementsTo.url;
              if (_o16 !== window.location.origin + window.location.pathname) {
                var _URL = new URL(_o16),
                  _i12 = _URL.pathname,
                  _r3 = _i12 + a.default.URLParams;
                window.history.pushState('articleLoad - ' + _t36, _n21, _r3),
                  (document.title = _n21),
                  _this64.visitedUrls.has(_o16)
                    ? ((_this64.articleChangeEvent.xx = _t36),
                      e.target.dispatchEvent(_this64.articleChangeEvent),
                      _this64.clearC2S_Variables(_this64.articleChangeEvent))
                    : (_this64.visitedUrls.add(_o16),
                      (_this64.articleLoadEvent.xx = _t36),
                      _this64.sendAnalytics(_o16),
                      _this64.clearC2S_Variables(_this64.articleLoadEvent));
              }
            }
          });
        }, {});
      },
      clearC2S_Variables: function clearC2S_Variables(e) {
        setTimeout(function (t) {
          (e.xx = void 0), (e.ssid = void 0);
        }, 10);
      },
      setObservers: function setObservers(e) {
        var t =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : !1;
        this.observeElement(e, 'break', t),
          this.observeElement(e, 'wrapper', t);
      },
      observeElement: function observeElement() {
        var e =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var t = arguments.length > 1 ? arguments[1] : undefined;
        var n =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : !1;
        var o;
        (o =
          a.default.isAutoloadOn && n && 'break' !== t
            ? '.main_' + t
            : '.premiumArticle__'.concat(t, ':not(.active)')),
          (a.default.elementsToObserve[t] = document.querySelector(o)),
          (a.default.elementsToObserve[t].dataset.xx = e),
          a.default.elementsToObserve[t].classList.add('active'),
          'break' === t
            ? this.setAutoLoadObserver(a.default.elementsToObserve[t], n)
            : this.setChangeLocationObserver(a.default.elementsToObserve[t]);
      },
      makeObervers: function makeObervers() {
        (this.observers = {
          autoLoadObserver: this.makeAutoLoadObserver(),
          changeLocationObserver: this.makeChangeLocationObserver(),
        }),
          this.setObservers(a.default.articleXX, !0);
      },
      setChangeLocationObserver: function setChangeLocationObserver(e) {
        this.observers.changeLocationObserver.observe(e);
      },
      setAutoLoadObserver: function setAutoLoadObserver(e) {
        var t =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : !1;
        (a.default.elementsToObserve.break = e),
          t ||
            this.observers.autoLoadObserver.unobserve(
              a.default.elementsToObserve.break__OLD
            ),
          this.observers.autoLoadObserver.observe(e),
          (a.default.elementsToObserve.break__OLD =
            a.default.elementsToObserve.break);
      },
      getArticleData: function getArticleData(e, t) {
        var n = 'query {\n            documentById(id: "'
            .concat(e, '", deviceType: ')
            .concat(a.default.device, ', adsInContent: false, isPremium: ')
            .concat(
              a.default.isPremium,
              ') {\n                title,\n                lead,\n                updateDate,\n                url,\n                documentContent,\n                photoRelated {\n                    url,\n                    title,\n                    author\n                },\n                authors {\n                    selectedSignature {\n                        name,\n                    },\n                    photoId,\n                    signatures {\n                        mainSignatureId\n                    }\n                },\n                params {\n                    key,\n                    value,\n                }\n            }\n       }'
            ),
          o = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: n }),
          };
        fetch(a.default.URLs.graphQL, o)
          .then(function (e) {
            if (!e.ok) throw new Error('graphQL error');
            return e.json();
          })
          .then(function (n) {
            return t(n, e);
          })
          .catch(function (e) {
            return console.error(e);
          });
      },
      renderComments: function renderComments(e, t, n, o) {
        var _gazeta_pl$readPageDa2 = gazeta_pl.readPageData(t),
          i = _gazeta_pl$readPageDa2.pageRoot,
          a = _gazeta_pl$readPageDa2.pageId,
          r = { detail: { appId: o, root: i, section: a, xx: e, title: n } };
        document.dispatchEvent(new CustomEvent('loadComments', r));
      },
      getBackgroundPhoto: function getBackgroundPhoto(e) {
        var t;
        var n = e[0] ? e[0].url : null;
        gazeta_pl.mobileInfo.isMobileDevice || (t = 'IDR'),
          gazeta_pl.mobileInfo.isMobileDevice && (t = 'IBR');
        return n ? PhotoAPI.photoChangeFormat(n, t) : null;
      },
      debounceInteresectionObserver: function debounceInteresectionObserver() {
        a.default.elementsToObserve.queueEmpty = !0;
      },
      renewOnnScripts: function renewOnnScripts(e) {
        _toConsumableArray(
          e.querySelectorAll('script[src^="https://video.onnetwork.tv"]')
        ).forEach(function (e) {
          var t = document.createElement('script');
          (t.src = e.src),
            e.parentNode.insertBefore(t, e.nextSibling),
            e.remove();
        });
      },
      loadEcomFrames: function loadEcomFrames(e) {
        _toConsumableArray(
          e.querySelectorAll(
            'script[src^="https://exyzz.pl/import_frame"], script[src^="https://c2c24.pl/init/frames.js"]'
          )
        ).forEach(function (e) {
          e.parentNode &&
            (e.parentNode.classList.add('loaded_article'),
            e.parentNode.setAttribute('data-url', window.location.href),
            document.dispatchEvent(new CustomEvent('newArticleIsAdded')));
        });
      },
      addPromotionalMaterialBar: function addPromotionalMaterialBar(e) {
        var t = e.querySelector('.article__author_date'),
          n = document.querySelector('.promotion-material-data').dataset.id;
        t.insertAdjacentHTML(
          'afterend',
          '<div id="'.concat(
            n,
            '" class="promotion-material"><p class="promotion-material__txt">MATERIA\u0141 PROMOCYJNY</p></div>'
          )
        );
      },
      initInternallScripts: function initInternallScripts(e, t) {
        gazeta_pl.YoutubeThumb.init(t);
        var n = _toConsumableArray(
          e.querySelectorAll('.article__content--autoLoad img[data-src]')
        );
        n.length && gazeta_pl.LazyLoad.addToObserve(n);
        var o = _toConsumableArray(e.querySelectorAll('.onnOnDemand'));
        o.length && gazeta_pl.onn.addToObserve(o);
      },
      initExternalScripts: function initExternalScripts() {
        window.instgrm && window.instgrm.Embeds.process(),
          window.twttr && window.twttr.widgets.load();
      },
      sendAnalytics: function sendAnalytics(e) {
        if (window.dataLayer) {
          var _t37 = window.location.origin,
            _n22 = e.replace(_t37, '');
          dataLayer.push({
            vpv: '/virtualpageview' + _n22,
            event: 'SendVirtualPageView',
          });
        }
        window.dopv && 'function' == typeof window.dopv && window.dopv(),
          (this.articleLoadEvent.referrer = e);
      },
      afterRender: function afterRender(e) {
        document.dispatchEvent(
          new CustomEvent('ArticlesLoaderPremiumAfterRenderStart')
        );
        var t = e.xx,
          n = e.title,
          o = e.url,
          r = e.commentsContainer,
          s = e.articleWrapper,
          c = e.isPartnerMaterial;
        if (
          (r && !c && this.renderComments(t, o, n, r),
          this.processWrapperData(t, n, o),
          this.setObservers(t),
          Object(i.insertAds)(t),
          !gazeta_pl.mobileInfo.isMobileDevice)
        ) {
          new l(s);
        }
        var p = document.querySelector(s);
        a.default.isPromotionMaterial && this.addPromotionalMaterialBar(p),
          this.renewOnnScripts(p),
          this.loadEcomFrames(p),
          this.initInternallScripts(p, s),
          this.initExternalScripts(),
          setTimeout(
            this.debounceInteresectionObserver,
            a.default.elementsToObserve.debounceTimeout
          ),
          document.dispatchEvent(
            new CustomEvent('ArticlesLoaderPremiumAfterRenderEnd')
          );
      },
      renderBackupArticles: function renderBackupArticles() {
        a.default.articlesList.backup.length &&
          Object(o.makeList)().then(function (e) {
            a.default.loadArticlesWrapper.insertAdjacentHTML('beforeend', e);
          }),
          (a.default.backupRendered = !0);
      },
      renderArticle: function renderArticle(e, t) {
        var n = e.data.documentById,
          i = this.getBackgroundPhoto;
        (a.default.elementsToObserve.queueEmpty = !1),
          a.default.elementsToObserve.iterator++;
        var r = Object.assign({}, n);
        (r.xx = t),
          (r.artBg = i(n.photoRelated)),
          (r.device = a.default.device),
          (r.iterator = a.default.elementsToObserve.iterator);
        var _gazeta_pl$readPageDa3 = gazeta_pl.readPageData(r.url),
          s = _gazeta_pl$readPageDa3.pageId;
        (r.isPartnerMaterial = s == a.default.partnerSectionXX),
          this._getC2S_SSID(r.params);
        var l = Object(o.makeArticle)(r);
        if (l)
          a.default.loadArticlesWrapper.insertAdjacentHTML('beforeend', l),
            (r.commentsContainer = '#premiumArticle__commentsContainer--' + t),
            (r.articleWrapper = '.premiumArticle__wrapper[data-xx="'.concat(
              t,
              '"]'
            )),
            this.afterRender(r);
        else {
          console.error('gazeta_pl.articlesLoader_premium.renderArticle'),
            console.error('rendering article PROBLEM'),
            console.error(e, t);
          var _n23 = a.default.articlesList.toProcess.shift();
          _n23
            ? this.getArticleData(_n23, this.renderArticle.bind(this))
            : a.default.backupRendered || this.renderBackupArticles(),
            (a.default.elementsToObserve.queueEmpty = !0);
        }
      },
      _getC2S_SSID: function _getC2S_SSID(e) {
        var t;
        e &&
          e.length &&
          ((t = e.filter(function (e) {
            return 'onn-sid' === e.key;
          })),
          t.length &&
            ((t = t[0].value),
            (this.articleChangeEvent.ssid = t),
            (this.articleLoadEvent.ssid = t)));
      },
      getIndexApiByTypePage: function getIndexApiByTypePage(e, t) {
        var n = a.default.URLs.indexApi(e, t);
        return a.default.isC2C && (n += '&ind_wyciagaj_typ_biznesowy=c2c'), n;
      },
    }),
      document.addEventListener('DOMContentLoaded', function (e) {
        gazeta_pl.articlesLoader_premium.init();
      });
  },
]);

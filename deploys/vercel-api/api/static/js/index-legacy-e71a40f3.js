!function () {
  function A(A, t) {
    var e = Object.keys(A);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(A);
      t && (r = r.filter((function (t) {
        return Object.getOwnPropertyDescriptor(A, t).enumerable
      }))), e.push.apply(e, r)
    }
    return e
  }

  function t(t) {
    for (var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? A(Object(n), !0).forEach((function (A) {
        e(t, A, n[A])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function (A) {
        Object.defineProperty(t, A, Object.getOwnPropertyDescriptor(n, A))
      }))
    }
    return t
  }

  function e(A, t, e) {
    return t in A ? Object.defineProperty(A, t, {
      value: e,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : A[t] = e, A
  }

  function r() {
    "use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    r = function () {
      return A
    };
    var A = {}, t = Object.prototype, e = t.hasOwnProperty, n = "function" == typeof Symbol ? Symbol : {},
      i = n.iterator || "@@iterator", o = n.asyncIterator || "@@asyncIterator", s = n.toStringTag || "@@toStringTag";

    function a(A, t, e) {
      return Object.defineProperty(A, t, {value: e, enumerable: !0, configurable: !0, writable: !0}), A[t]
    }

    try {
      a({}, "")
    } catch (b) {
      a = function (A, t, e) {
        return A[t] = e
      }
    }

    function c(A, t, e, r) {
      var n = t && t.prototype instanceof g ? t : g, i = Object.create(n.prototype), o = new y(r || []);
      return i._invoke = function (A, t, e) {
        var r = "suspendedStart";
        return function (n, i) {
          if ("executing" === r) throw new Error("Generator is already running");
          if ("completed" === r) {
            if ("throw" === n) throw i;
            return E()
          }
          for (e.method = n, e.arg = i; ;) {
            var o = e.delegate;
            if (o) {
              var s = F(o, e);
              if (s) {
                if (s === u) continue;
                return s
              }
            }
            if ("next" === e.method) e.sent = e._sent = e.arg; else if ("throw" === e.method) {
              if ("suspendedStart" === r) throw r = "completed", e.arg;
              e.dispatchException(e.arg)
            } else "return" === e.method && e.abrupt("return", e.arg);
            r = "executing";
            var a = B(A, t, e);
            if ("normal" === a.type) {
              if (r = e.done ? "completed" : "suspendedYield", a.arg === u) continue;
              return {value: a.arg, done: e.done}
            }
            "throw" === a.type && (r = "completed", e.method = "throw", e.arg = a.arg)
          }
        }
      }(A, e, o), i
    }

    function B(A, t, e) {
      try {
        return {type: "normal", arg: A.call(t, e)}
      } catch (b) {
        return {type: "throw", arg: b}
      }
    }

    A.wrap = c;
    var u = {};

    function g() {
    }

    function h() {
    }

    function w() {
    }

    var f = {};
    a(f, i, (function () {
      return this
    }));
    var d = Object.getPrototypeOf, p = d && d(d(H([])));
    p && p !== t && e.call(p, i) && (f = p);
    var Q = w.prototype = g.prototype = Object.create(f);

    function C(A) {
      ["next", "throw", "return"].forEach((function (t) {
        a(A, t, (function (A) {
          return this._invoke(t, A)
        }))
      }))
    }

    function U(A, t) {
      function r(n, i, o, s) {
        var a = B(A[n], A, i);
        if ("throw" !== a.type) {
          var c = a.arg, u = c.value;
          return u && "object" == l(u) && e.call(u, "__await") ? t.resolve(u.__await).then((function (A) {
            r("next", A, o, s)
          }), (function (A) {
            r("throw", A, o, s)
          })) : t.resolve(u).then((function (A) {
            c.value = A, o(c)
          }), (function (A) {
            return r("throw", A, o, s)
          }))
        }
        s(a.arg)
      }

      var n;
      this._invoke = function (A, e) {
        function i() {
          return new t((function (t, n) {
            r(A, e, t, n)
          }))
        }

        return n = n ? n.then(i, i) : i()
      }
    }

    function F(A, t) {
      var e = A.iterator[t.method];
      if (void 0 === e) {
        if (t.delegate = null, "throw" === t.method) {
          if (A.iterator.return && (t.method = "return", t.arg = void 0, F(A, t), "throw" === t.method)) return u;
          t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
        }
        return u
      }
      var r = B(e, A.iterator, t.arg);
      if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, u;
      var n = r.arg;
      return n ? n.done ? (t[A.resultName] = n.value, t.next = A.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
    }

    function v(A) {
      var t = {tryLoc: A[0]};
      1 in A && (t.catchLoc = A[1]), 2 in A && (t.finallyLoc = A[2], t.afterLoc = A[3]), this.tryEntries.push(t)
    }

    function m(A) {
      var t = A.completion || {};
      t.type = "normal", delete t.arg, A.completion = t
    }

    function y(A) {
      this.tryEntries = [{tryLoc: "root"}], A.forEach(v, this), this.reset(!0)
    }

    function H(A) {
      if (A) {
        var t = A[i];
        if (t) return t.call(A);
        if ("function" == typeof A.next) return A;
        if (!isNaN(A.length)) {
          var r = -1, n = function t() {
            for (; ++r < A.length;) if (e.call(A, r)) return t.value = A[r], t.done = !1, t;
            return t.value = void 0, t.done = !0, t
          };
          return n.next = n
        }
      }
      return {next: E}
    }

    function E() {
      return {value: void 0, done: !0}
    }

    return h.prototype = w, a(Q, "constructor", w), a(w, "constructor", h), h.displayName = a(w, s, "GeneratorFunction"), A.isGeneratorFunction = function (A) {
      var t = "function" == typeof A && A.constructor;
      return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
    }, A.mark = function (A) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(A, w) : (A.__proto__ = w, a(A, s, "GeneratorFunction")), A.prototype = Object.create(Q), A
    }, A.awrap = function (A) {
      return {__await: A}
    }, C(U.prototype), a(U.prototype, o, (function () {
      return this
    })), A.AsyncIterator = U, A.async = function (t, e, r, n, i) {
      void 0 === i && (i = Promise);
      var o = new U(c(t, e, r, n), i);
      return A.isGeneratorFunction(e) ? o : o.next().then((function (A) {
        return A.done ? A.value : o.next()
      }))
    }, C(Q), a(Q, s, "Generator"), a(Q, i, (function () {
      return this
    })), a(Q, "toString", (function () {
      return "[object Generator]"
    })), A.keys = function (A) {
      var t = [];
      for (var e in A) t.push(e);
      return t.reverse(), function e() {
        for (; t.length;) {
          var r = t.pop();
          if (r in A) return e.value = r, e.done = !1, e
        }
        return e.done = !0, e
      }
    }, A.values = H, y.prototype = {
      constructor: y, reset: function (A) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(m), !A) for (var t in this) "t" === t.charAt(0) && e.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
      }, stop: function () {
        this.done = !0;
        var A = this.tryEntries[0].completion;
        if ("throw" === A.type) throw A.arg;
        return this.rval
      }, dispatchException: function (A) {
        if (this.done) throw A;
        var t = this;

        function r(e, r) {
          return o.type = "throw", o.arg = A, t.next = e, r && (t.method = "next", t.arg = void 0), !!r
        }

        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var i = this.tryEntries[n], o = i.completion;
          if ("root" === i.tryLoc) return r("end");
          if (i.tryLoc <= this.prev) {
            var s = e.call(i, "catchLoc"), a = e.call(i, "finallyLoc");
            if (s && a) {
              if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return r(i.finallyLoc)
            } else if (s) {
              if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
            } else {
              if (!a) throw new Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return r(i.finallyLoc)
            }
          }
        }
      }, abrupt: function (A, t) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var n = this.tryEntries[r];
          if (n.tryLoc <= this.prev && e.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
            var i = n;
            break
          }
        }
        i && ("break" === A || "continue" === A) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
        var o = i ? i.completion : {};
        return o.type = A, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, u) : this.complete(o)
      }, complete: function (A, t) {
        if ("throw" === A.type) throw A.arg;
        return "break" === A.type || "continue" === A.type ? this.next = A.arg : "return" === A.type ? (this.rval = this.arg = A.arg, this.method = "return", this.next = "end") : "normal" === A.type && t && (this.next = t), u
      }, finish: function (A) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var e = this.tryEntries[t];
          if (e.finallyLoc === A) return this.complete(e.completion, e.afterLoc), m(e), u
        }
      }, catch: function (A) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var e = this.tryEntries[t];
          if (e.tryLoc === A) {
            var r = e.completion;
            if ("throw" === r.type) {
              var n = r.arg;
              m(e)
            }
            return n
          }
        }
        throw new Error("illegal catch attempt")
      }, delegateYield: function (A, t, e) {
        return this.delegate = {
          iterator: H(A),
          resultName: t,
          nextLoc: e
        }, "next" === this.method && (this.arg = void 0), u
      }
    }, A
  }

  function n(A) {
    return function (A) {
      if (Array.isArray(A)) return g(A)
    }(A) || function (A) {
      if ("undefined" != typeof Symbol && null != A[Symbol.iterator] || null != A["@@iterator"]) return Array.from(A)
    }(A) || u(A) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function i(A, t, e, r, n, i, o) {
    try {
      var s = A[i](o), a = s.value
    } catch (c) {
      return void e(c)
    }
    s.done ? t(a) : Promise.resolve(a).then(r, n)
  }

  function o(A) {
    return function () {
      var t = this, e = arguments;
      return new Promise((function (r, n) {
        var o = A.apply(t, e);

        function s(A) {
          i(o, r, n, s, a, "next", A)
        }

        function a(A) {
          i(o, r, n, s, a, "throw", A)
        }

        s(void 0)
      }))
    }
  }

  function s(A, t) {
    if (!(A instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function a(A, t) {
    for (var e = 0; e < t.length; e++) {
      var r = t[e];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r)
    }
  }

  function c(A, t, e) {
    return t && a(A.prototype, t), e && a(A, e), Object.defineProperty(A, "prototype", {writable: !1}), A
  }

  function l(A) {
    return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (A) {
      return typeof A
    } : function (A) {
      return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
    }, l(A)
  }

  function B(A, t) {
    var e = "undefined" != typeof Symbol && A[Symbol.iterator] || A["@@iterator"];
    if (!e) {
      if (Array.isArray(A) || (e = u(A)) || t && A && "number" == typeof A.length) {
        e && (A = e);
        var r = 0, n = function () {
        };
        return {
          s: n, n: function () {
            return r >= A.length ? {done: !0} : {done: !1, value: A[r++]}
          }, e: function (A) {
            throw A
          }, f: n
        }
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var i, o = !0, s = !1;
    return {
      s: function () {
        e = e.call(A)
      }, n: function () {
        var A = e.next();
        return o = A.done, A
      }, e: function (A) {
        s = !0, i = A
      }, f: function () {
        try {
          o || null == e.return || e.return()
        } finally {
          if (s) throw i
        }
      }
    }
  }

  function u(A, t) {
    if (A) {
      if ("string" == typeof A) return g(A, t);
      var e = Object.prototype.toString.call(A).slice(8, -1);
      return "Object" === e && A.constructor && (e = A.constructor.name), "Map" === e || "Set" === e ? Array.from(A) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? g(A, t) : void 0
    }
  }

  function g(A, t) {
    (null == t || t > A.length) && (t = A.length);
    for (var e = 0, r = new Array(t); e < t; e++) r[e] = A[e];
    return r
  }

  System.register([], (function (A, e) {
    "use strict";
    return {
      execute: function () {
        A({
          b: le, c: Be, d: Ke, m: function (A, t) {
            return Array.isArray(t) ? t.reduce((function (t, e) {
              return t[e] = {
                get: function () {
                  return A(this.$pinia)[e]
                }, set: function (t) {
                  return A(this.$pinia)[e] = t
                }
              }, t
            }), {}) : Object.keys(t).reduce((function (e, r) {
              return e[r] = {
                get: function () {
                  return A(this.$pinia)[t[r]]
                }, set: function (e) {
                  return A(this.$pinia)[t[r]] = e
                }
              }, e
            }), {})
          }, n: he, t: Le
        });
        var i = function (A, t) {
          return i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (A, t) {
            A.__proto__ = t
          } || function (A, t) {
            for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (A[e] = t[e])
          }, i(A, t)
        };
        var a, u = function () {
          return u = Object.assign || function (A) {
            for (var t, e = 1, r = arguments.length; e < r; e++) for (var n in t = arguments[e]) Object.prototype.hasOwnProperty.call(t, n) && (A[n] = t[n]);
            return A
          }, u.apply(this, arguments)
        };

        function g(A) {
          var t = "function" == typeof Symbol && Symbol.iterator, e = t && A[t], r = 0;
          if (e) return e.call(A);
          if (A && "number" == typeof A.length) return {
            next: function () {
              return A && r >= A.length && (A = void 0), {value: A && A[r++], done: !A}
            }
          };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }

        function h(A, t) {
          var e = "function" == typeof Symbol && A[Symbol.iterator];
          if (!e) return A;
          var r, n, i = e.call(A), o = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done;) o.push(r.value)
          } catch (s) {
            n = {error: s}
          } finally {
            try {
              r && !r.done && (e = i.return) && e.call(i)
            } finally {
              if (n) throw n.error
            }
          }
          return o
        }

        function w(A, t, e) {
          if (e || 2 === arguments.length) for (var r, n = 0, i = t.length; n < i; n++) !r && n in t || (r || (r = Array.prototype.slice.call(t, 0, n)), r[n] = t[n]);
          return A.concat(r || Array.prototype.slice.call(t))
        }

        var f = [], d = function () {
          function A(A) {
            this.active = !0, this.effects = [], this.cleanups = [], this.vm = A
          }

          return A.prototype.run = function (A) {
            if (this.active) try {
              return this.on(), A()
            } finally {
              this.off()
            } else z("cannot run an inactive effect scope.", null === (t = K()) || void 0 === t ? void 0 : t.proxy);
            var t
          }, A.prototype.on = function () {
            this.active && (f.push(this), a = this)
          }, A.prototype.off = function () {
            this.active && (f.pop(), a = f[f.length - 1])
          }, A.prototype.stop = function () {
            this.active && (this.vm.$destroy(), this.effects.forEach((function (A) {
              return A.stop()
            })), this.cleanups.forEach((function (A) {
              return A()
            })), this.active = !1)
          }, A
        }(), p = function (A) {
          function t(t) {
            void 0 === t && (t = !1);
            var e, r = void 0;
            return function (A) {
              var t = y;
              y = !1;
              try {
                A()
              } finally {
                y = t
              }
            }((function () {
              r = $(b())
            })), e = A.call(this, r) || this, t || function (A, t) {
              var e;
              if ((t = t || a) && t.active) return void t.effects.push(A);
              var r = null === (e = K()) || void 0 === e ? void 0 : e.proxy;
              r && r.$on("hook:destroyed", (function () {
                return A.stop()
              }))
            }(e), e
          }

          return function (A, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

            function e() {
              this.constructor = A
            }

            i(A, t), A.prototype = null === t ? Object.create(t) : (e.prototype = t.prototype, new e)
          }(t, A), t
        }(d);

        function Q(A) {
          return new p(A)
        }

        function C() {
          var A, t;
          return (null === (A = a) || void 0 === A ? void 0 : A.vm) || (null === (t = K()) || void 0 === t ? void 0 : t.proxy)
        }

        var U = void 0;
        try {
          var F = require("vue");
          F && E(F) ? U = F : F && "default" in F && E(F.default) && (U = F.default)
        } catch (nh) {
        }
        var v = null, m = null, y = !0, H = "__composition_api_installed__";

        function E(A) {
          return A && j(A) && "Vue" === A.name
        }

        function b() {
          return V(v, "must call Vue.use(VueCompositionAPI) before using any function."), v
        }

        function I() {
          var A = v || U;
          return V(A, "No vue dependency found."), A
        }

        function L(A) {
          if (y) {
            var t = m;
            null == t || t.scope.off(), null == (m = A) || m.scope.on()
          }
        }

        function K() {
          return m
        }

        var x = new WeakMap;

        function S(A) {
          if (x.has(A)) return x.get(A);
          var t = {
            proxy: A,
            update: A.$forceUpdate,
            type: A.$options,
            uid: A._uid,
            emit: A.$emit.bind(A),
            parent: null,
            root: null
          };
          !function (A) {
            if (!A.scope) {
              var t = new d(A.proxy);
              A.scope = t, A.proxy.$on("hook:destroyed", (function () {
                return t.stop()
              }))
            }
            A.scope
          }(t);
          return ["data", "props", "attrs", "refs", "vnode", "slots"].forEach((function (e) {
            M(t, e, {
              get: function () {
                return A["$".concat(e)]
              }
            })
          })), M(t, "isMounted", {
            get: function () {
              return A._isMounted
            }
          }), M(t, "isUnmounted", {
            get: function () {
              return A._isDestroyed
            }
          }), M(t, "isDeactivated", {
            get: function () {
              return A._inactive
            }
          }), M(t, "emitted", {
            get: function () {
              return A._events
            }
          }), x.set(A, t), A.$parent && (t.parent = S(A.$parent)), A.$root && (t.root = S(A.$root)), t
        }

        function D(A) {
          return "function" == typeof A && /native code/.test(A.toString())
        }

        var k = "undefined" != typeof Symbol && D(Symbol) && "undefined" != typeof Reflect && D(Reflect.ownKeys),
          _ = function (A) {
            return A
          };

        function M(A, t, e) {
          var r = e.get, n = e.set;
          Object.defineProperty(A, t, {enumerable: !0, configurable: !0, get: r || _, set: n || _})
        }

        function O(A, t, e, r) {
          Object.defineProperty(A, t, {value: e, enumerable: !!r, writable: !0, configurable: !0})
        }

        function T(A, t) {
          return Object.hasOwnProperty.call(A, t)
        }

        function V(A, t) {
          if (!A) throw new Error("[vue-composition-api] ".concat(t))
        }

        function G(A) {
          return "string" == typeof A || "number" == typeof A || "symbol" === l(A) || "boolean" == typeof A
        }

        function R(A) {
          return Array.isArray(A)
        }

        var P, N = Object.prototype.toString, J = function (A) {
          return N.call(A)
        };

        function X(A) {
          var t = parseFloat(String(A));
          return t >= 0 && Math.floor(t) === t && isFinite(A) && t <= 4294967295
        }

        function Y(A) {
          return null !== A && "object" === l(A)
        }

        function W(A) {
          return "[object Object]" === function (A) {
            return Object.prototype.toString.call(A)
          }(A)
        }

        function j(A) {
          return "function" == typeof A
        }

        function Z(A) {
          return null == A
        }

        function z(A, t) {
          var e = I();
          e && e.util && e.util.warn(A, t)
        }

        function $(A, t) {
          void 0 === t && (t = {});
          var e = A.config.silent;
          A.config.silent = !0;
          var r = new A(t);
          return A.config.silent = e, r
        }

        function q(A, t) {
          return function () {
            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return A.$scopedSlots[t] ? A.$scopedSlots[t].apply(A, e) : z("slots.".concat(t, '() got called outside of the "render()" scope'), A)
          }
        }

        function AA(A) {
          return k ? Symbol.for(A) : A
        }

        var tA = AA("composition-api.preFlushQueue"), eA = AA("composition-api.postFlushQueue"),
          rA = "composition-api.refKey", nA = new WeakMap, iA = new WeakMap, oA = new WeakMap;

        function sA(A, t, e) {
          var r = b().util, n = r.warn, i = r.defineReactive;
          (Z(A) || G(A)) && n("Cannot set reactive property on undefined, null, or primitive value: ".concat(A));
          var o = A.__ob__;

          function s() {
            o && Y(e) && !T(e, "__ob__") && CA(e)
          }

          if (R(A)) {
            if (X(t)) return A.length = Math.max(A.length, t), A.splice(t, 1, e), s(), e;
            if ("length" === t && e !== A.length) return A.length = e, null == o || o.dep.notify(), e
          }
          return t in A && !(t in Object.prototype) ? (A[t] = e, s(), e) : A._isVue || o && o.vmCount ? (n("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."), e) : o ? (i(o.value, t, e), pA(A, t, e), s(), o.dep.notify(), e) : (A[t] = e, e)
        }

        var aA = function (A) {
          M(this, "value", {get: A.get, set: A.set})
        };

        function cA(A, t, e) {
          void 0 === t && (t = !1), void 0 === e && (e = !1);
          var r = new aA(A);
          e && (r.effect = !0);
          var n = Object.seal(r);
          return t && oA.set(n, !0), n
        }

        function lA(A) {
          var t;
          if (BA(A)) return A;
          var e = FA(((t = {})[rA] = A, t));
          return cA({
            get: function () {
              return e[rA]
            }, set: function (A) {
              return e[rA] = A
            }
          })
        }

        function BA(A) {
          return A instanceof aA
        }

        function uA(A) {
          if (fA(A) || z("toRefs() expects a reactive object but received a plain one."), !W(A)) return A;
          var t = {};
          for (var e in A) t[e] = gA(A, e);
          return t
        }

        function gA(A, t) {
          t in A || sA(A, t, void 0);
          var e = A[t];
          return BA(e) ? e : cA({
            get: function () {
              return A[t]
            }, set: function (e) {
              return A[t] = e
            }
          })
        }

        function hA(A) {
          var t;
          if (BA(A)) return A;
          var e = function (A) {
            var t, e;
            if (!Y(A)) return z('"shallowReactive()" must be called on an object.'), A;
            if (!W(A) && !R(A) || wA(A) || !Object.isExtensible(A)) return A;
            var r = QA(R(A) ? [] : {}), n = r.__ob__, i = function (t) {
              var e, i, o = A[t], s = Object.getOwnPropertyDescriptor(A, t);
              if (s) {
                if (!1 === s.configurable) return "continue";
                e = s.get, i = s.set
              }
              M(r, t, {
                get: function () {
                  var A;
                  return null === (A = n.dep) || void 0 === A || A.depend(), o
                }, set: function (t) {
                  var r;
                  e && !i || o !== t && (i ? i.call(A, t) : o = t, null === (r = n.dep) || void 0 === r || r.notify())
                }
              })
            };
            try {
              for (var o = g(Object.keys(A)), s = o.next(); !s.done; s = o.next()) {
                i(s.value)
              }
            } catch (a) {
              t = {error: a}
            } finally {
              try {
                s && !s.done && (e = o.return) && e.call(o)
              } finally {
                if (t) throw t.error
              }
            }
            return r
          }(((t = {})[rA] = A, t));
          return cA({
            get: function () {
              return e[rA]
            }, set: function (A) {
              return e[rA] = A
            }
          })
        }

        function wA(A) {
          var t;
          return Boolean(A && T(A, "__ob__") && "object" === l(A.__ob__) && (null === (t = A.__ob__) || void 0 === t ? void 0 : t.__v_skip))
        }

        function fA(A) {
          var t;
          return Boolean(A && T(A, "__ob__") && "object" === l(A.__ob__) && !(null === (t = A.__ob__) || void 0 === t ? void 0 : t.__v_skip))
        }

        function dA(A) {
          if (!(!W(A) || wA(A) || R(A) || BA(A) || function (A) {
            var t = b();
            return t && A instanceof t
          }(A) || nA.has(A))) {
            nA.set(A, !0);
            for (var t = Object.keys(A), e = 0; e < t.length; e++) pA(A, t[e])
          }
        }

        function pA(A, t, e) {
          if ("__ob__" !== t && !wA(A[t])) {
            var r, n, i = Object.getOwnPropertyDescriptor(A, t);
            if (i) {
              if (!1 === i.configurable) return;
              r = i.get, n = i.set, r && !n || 2 !== arguments.length || (e = A[t])
            }
            dA(e), M(A, t, {
              get: function () {
                var n = r ? r.call(A) : e;
                return t !== rA && BA(n) ? n.value : n
              }, set: function (i) {
                r && !n || (t !== rA && BA(e) && !BA(i) ? e.value = i : n ? (n.call(A, i), e = i) : e = i, dA(i))
              }
            })
          }
        }

        function QA(A) {
          var t, e = I();
          e.observable ? t = e.observable(A) : t = $(e, {data: {$$state: A}})._data.$$state;
          return T(t, "__ob__") || CA(t), t
        }

        function CA(A, t) {
          var e, r;
          if (void 0 === t && (t = new Set), !t.has(A) && !T(A, "__ob__") && Object.isExtensible(A)) {
            O(A, "__ob__", function (A) {
              void 0 === A && (A = {});
              return {value: A, dep: {notify: _, depend: _, addSub: _, removeSub: _}}
            }(A)), t.add(A);
            try {
              for (var n = g(Object.keys(A)), i = n.next(); !i.done; i = n.next()) {
                var o = A[i.value];
                (W(o) || R(o)) && !wA(o) && Object.isExtensible(o) && CA(o, t)
              }
            } catch (s) {
              e = {error: s}
            } finally {
              try {
                i && !i.done && (r = n.return) && r.call(n)
              } finally {
                if (e) throw e.error
              }
            }
          }
        }

        function UA() {
          return QA({}).__ob__
        }

        function FA(A) {
          if (!Y(A)) return z('"reactive()" must be called on an object.'), A;
          if (!W(A) && !R(A) || wA(A) || !Object.isExtensible(A)) return A;
          var t = QA(A);
          return dA(t), t
        }

        function vA(A) {
          if (!W(A) && !R(A) || !Object.isExtensible(A)) return A;
          var t = UA();
          return t.__v_skip = !0, O(A, "__ob__", t), iA.set(A, !0), A
        }

        function mA(A) {
          var t;
          return wA(A) || !Object.isExtensible(A) ? A : (null === (t = null == A ? void 0 : A.__ob__) || void 0 === t ? void 0 : t.value) || A
        }

        function yA(A, t) {
          var e = b().util.warn;
          if ((Z(A) || G(A)) && e("Cannot delete reactive property on undefined, null, or primitive value: ".concat(A)), R(A) && X(t)) A.splice(t, 1); else {
            var r = A.__ob__;
            A._isVue || r && r.vmCount ? e("Avoid deleting properties on a Vue instance or its root $data - just set it to null.") : T(A, t) && (delete A[t], r && r.dep.notify())
          }
        }

        function HA(A) {
          return function (t, e) {
            var r, n = function (A, t) {
              return (t = t || K()) || z("".concat(A, " is called when there is no active component instance to be ") + "associated with. Lifecycle injection APIs can only be used during execution of setup()."), t
            }("on".concat((r = A)[0].toUpperCase() + r.slice(1)), e);
            return n && function (A, t, e, r) {
              var n = t.proxy.$options, i = A.config.optionMergeStrategies[e], o = function (A, t) {
                return function () {
                  for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                  var n = K();
                  L(A);
                  try {
                    return t.apply(void 0, w([], h(e), !1))
                  } finally {
                    L(n)
                  }
                }
              }(t, r);
              return n[e] = i(n[e], o), o
            }(b(), n, A, t)
          }
        }

        var EA, bA = HA("mounted"), IA = HA("beforeDestroy"), LA = HA("destroyed");

        function KA() {
          DA(this, tA)
        }

        function xA() {
          DA(this, eA)
        }

        function SA() {
          var A = C();
          return A ? function (A) {
            return void 0 !== A[tA]
          }(A) || function (A) {
            A[tA] = [], A[eA] = [], A.$on("hook:beforeUpdate", KA), A.$on("hook:updated", xA)
          }(A) : (EA || (EA = $(b())), A = EA), A
        }

        function DA(A, t) {
          for (var e = A[t], r = 0; r < e.length; r++) e[r]();
          e.length = 0
        }

        function kA(A, t, e) {
          var r = function () {
            A.$nextTick((function () {
              A[tA].length && DA(A, tA), A[eA].length && DA(A, eA)
            }))
          };
          switch (e) {
            case"pre":
              r(), A[tA].push(t);
              break;
            case"post":
              r(), A[eA].push(t);
              break;
            default:
              V(!1, 'flush must be one of ["post", "pre", "sync"], but got '.concat(e))
          }
        }

        function _A(A, t) {
          var e = A.teardown;
          A.teardown = function () {
            for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
            e.apply(A, r), t()
          }
        }

        function MA(A, t, e, r) {
          var n;
          e || (void 0 !== r.immediate && z('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), void 0 !== r.deep && z('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
          var i, o = r.flush, s = "sync" === o, a = function (t) {
            i = function () {
              try {
                t()
              } catch (e) {
                !function (A, t, e) {
                  if (z("Error in ".concat(e, ': "').concat(A.toString(), '"'), t), "undefined" == typeof window || "undefined" == typeof console) throw A
                }(e, A, "onCleanup()")
              }
            }
          }, c = function () {
            i && (i(), i = null)
          }, l = function (t) {
            return s || A === EA ? t : function () {
              for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
              return kA(A, (function () {
                t.apply(void 0, w([], h(e), !1))
              }), o)
            }
          };
          if (null === e) {
            var B = !1, u = function (A, t, e, r) {
              var n = A._watchers.length;
              return A.$watch(t, e, {
                immediate: r.immediateInvokeCallback,
                deep: r.deep,
                lazy: r.noRun,
                sync: r.sync,
                before: r.before
              }), A._watchers[n]
            }(A, (function () {
              if (!B) try {
                B = !0, t(a)
              } finally {
                B = !1
              }
            }), _, {deep: r.deep || !1, sync: s, before: c});
            _A(u, c), u.lazy = !1;
            var g = u.get.bind(u);
            return u.get = l(g), function () {
              u.teardown()
            }
          }
          var f, d = r.deep, p = !1;
          if (BA(t) ? f = function () {
            return t.value
          } : fA(t) ? (f = function () {
            return t
          }, d = !0) : R(t) ? (p = !0, f = function () {
            return t.map((function (t) {
              return BA(t) ? t.value : fA(t) ? TA(t) : j(t) ? t() : (z("Invalid watch source: ".concat(JSON.stringify(t), ".\n          A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."), A), _)
            }))
          }) : j(t) ? f = t : (f = _, z("Invalid watch source: ".concat(JSON.stringify(t), ".\n      A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."), A)), d) {
            var Q = f;
            f = function () {
              return TA(Q())
            }
          }
          var C = function (A, t) {
            if (d || !p || !A.every((function (A, e) {
              return r = A, n = t[e], r === n ? 0 !== r || 1 / r == 1 / n : r != r && n != n;
              var r, n
            }))) return c(), e(A, t, a)
          }, U = l(C);
          if (r.immediate) {
            var F = U, v = function (A, t) {
              return v = F, C(A, R(A) ? [] : t)
            };
            U = function (A, t) {
              return v(A, t)
            }
          }
          var m = A.$watch(f, U, {immediate: r.immediate, deep: d, sync: s}), y = A._watchers[A._watchers.length - 1];
          return fA(y.value) && (null === (n = y.value.__ob__) || void 0 === n ? void 0 : n.dep) && d && y.value.__ob__.dep.addSub({
            update: function () {
              y.run()
            }
          }), _A(y, c), function () {
            m()
          }
        }

        function OA(A, t, e) {
          var r = null;
          j(t) ? r = t : (z("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), e = t, r = null);
          var n = function (A) {
            return u({immediate: !1, deep: !1, flush: "pre"}, A)
          }(e);
          return MA(SA(), A, r, n)
        }

        function TA(A, t) {
          if (void 0 === t && (t = new Set), !Y(A) || t.has(A) || iA.has(A)) return A;
          if (t.add(A), BA(A)) TA(A.value, t); else if (R(A)) for (var e = 0; e < A.length; e++) TA(A[e], t); else if ("[object Set]" === J(A) || function (A) {
            return "[object Map]" === J(A)
          }(A)) A.forEach((function (A) {
            TA(A, t)
          })); else if (W(A)) for (var r in A) TA(A[r], t);
          return A
        }

        function VA(A) {
          var t, e, r, n, i = C();
          if (j(A) ? t = A : (t = A.get, e = A.set), i && !i.$isServer) {
            var o, s = function () {
              if (!P) {
                var A = $(b(), {
                  computed: {
                    value: function () {
                      return 0
                    }
                  }
                }), t = A._computedWatchers.value.constructor, e = A._data.__ob__.dep.constructor;
                P = {Watcher: t, Dep: e}, A.$destroy()
              }
              return P
            }(), a = s.Watcher, c = s.Dep;
            n = function () {
              return o || (o = new a(i, t, _, {lazy: !0})), o.dirty && o.evaluate(), c.target && o.depend(), o.value
            }, r = function (A) {
              e ? e && e(A) : z("Write operation failed: computed value is readonly.", i)
            }
          } else {
            var l = $(b(), {computed: {$$state: {get: t, set: e}}});
            i && i.$on("hook:destroyed", (function () {
              return l.$destroy()
            })), n = function () {
              return l.$$state
            }, r = function (A) {
              e ? l.$$state = A : z("Write operation failed: computed value is readonly.", i)
            }
          }
          return cA({get: n, set: r}, !e, !0)
        }

        var GA = {};

        function RA(A, t) {
          for (var e = t; e;) {
            if (e._provided && T(e._provided, A)) return e._provided[A];
            e = e.$parent
          }
          return GA
        }

        Object.freeze({});
        var PA, NA = function () {
          for (var A, t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          return null === (A = b()) || void 0 === A ? void 0 : A.nextTick.apply(this, t)
        }, JA = function () {
          for (var A, t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          var r = (null == this ? void 0 : this.proxy) || (null === (A = K()) || void 0 === A ? void 0 : A.proxy);
          return r ? r.$createElement.apply(r, t) : (z("`createElement()` has been called outside of render function."), PA || (PA = $(b()).$createElement), PA.apply(PA, t))
        };
        var XA = {
          set: function (A, t, e) {
            (A.__composition_api_state__ = A.__composition_api_state__ || {})[t] = e
          }, get: function (A, t) {
            return (A.__composition_api_state__ || {})[t]
          }
        };

        function YA(A) {
          var t = XA.get(A, "rawBindings") || {};
          if (t && Object.keys(t).length) {
            for (var e = A.$refs, r = XA.get(A, "refs") || [], n = 0; n < r.length; n++) {
              var i = t[a = r[n]];
              !e[a] && i && BA(i) && (i.value = null)
            }
            var o = Object.keys(e), s = [];
            for (n = 0; n < o.length; n++) {
              var a;
              i = t[a = o[n]];
              e[a] && i && BA(i) && (i.value = e[a], s.push(a))
            }
            XA.set(A, "refs", s)
          }
        }

        function WA(A) {
          for (var t = [A._vnode]; t.length;) {
            var e = t.pop();
            if (e && (e.context && YA(e.context), e.children)) for (var r = 0; r < e.children.length; ++r) t.push(e.children[r])
          }
        }

        function jA(A, t) {
          var e, r;
          if (A) {
            var n = XA.get(A, "attrBindings");
            if (n || t) {
              if (!n) {
                var i = FA({});
                n = {ctx: t, data: i}, XA.set(A, "attrBindings", n), M(t, "attrs", {
                  get: function () {
                    return null == n ? void 0 : n.data
                  }, set: function () {
                    z("Cannot assign to '$attrs' because it is a read-only property", A)
                  }
                })
              }
              var o = A.$attrs, s = function (t) {
                T(n.data, t) || M(n.data, t, {
                  get: function () {
                    return A.$attrs[t]
                  }
                })
              };
              try {
                for (var a = g(Object.keys(o)), c = a.next(); !c.done; c = a.next()) {
                  s(c.value)
                }
              } catch (l) {
                e = {error: l}
              } finally {
                try {
                  c && !c.done && (r = a.return) && r.call(a)
                } finally {
                  if (e) throw e.error
                }
              }
            }
          }
        }

        function ZA(A, t) {
          var e = A.$options._parentVnode;
          if (e) {
            for (var r = XA.get(A, "slots") || [], n = function (A, t) {
              var e;
              if (A) {
                if (A._normalized) return A._normalized;
                for (var r in e = {}, A) A[r] && "$" !== r[0] && (e[r] = !0)
              } else e = {};
              for (var r in t) r in e || (e[r] = !0);
              return e
            }(e.data.scopedSlots, A.$slots), i = 0; i < r.length; i++) {
              n[s = r[i]] || delete t[s]
            }
            var o = Object.keys(n);
            for (i = 0; i < o.length; i++) {
              var s;
              t[s = o[i]] || (t[s] = q(A, s))
            }
            XA.set(A, "slots", o)
          }
        }

        function zA(A, t, e) {
          var r = K();
          L(A);
          try {
            return t(A)
          } catch (n) {
            if (!e) throw n;
            e(n)
          } finally {
            L(r)
          }
        }

        function $A(A) {
          function t(A, e) {
            if (void 0 === e && (e = new Set), !e.has(A) && W(A) && !BA(A) && !fA(A) && !wA(A)) {
              var r = b().util.defineReactive;
              Object.keys(A).forEach((function (n) {
                var i = A[n];
                r(A, n, i), i && (e.add(i), t(i, e))
              }))
            }
          }

          function e(A, t) {
            return void 0 === t && (t = new Map), t.has(A) ? t.get(A) : (t.set(A, !1), R(A) && fA(A) ? (t.set(A, !0), !0) : !(!W(A) || wA(A) || BA(A)) && Object.keys(A).some((function (r) {
              return e(A[r], t)
            })))
          }

          A.mixin({
            beforeCreate: function () {
              var A = this, r = A.$options, n = r.setup, i = r.render;
              i && (r.render = function () {
                for (var t = this, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                return zA(S(A), (function () {
                  return i.apply(t, e)
                }))
              });
              if (!n) return;
              if (!j(n)) return void z('The "setup" option should be a function that returns a object in component definitions.', A);
              var o = r.data;
              r.data = function () {
                return function (A, r) {
                  void 0 === r && (r = {});
                  var n, i = A.$options.setup, o = function (A) {
                    var t = {slots: {}}, e = ["emit"];
                    return ["root", "parent", "refs", "listeners", "isServer", "ssrContext"].forEach((function (e) {
                      var r = "$".concat(e);
                      M(t, e, {
                        get: function () {
                          return A[r]
                        }, set: function () {
                          z("Cannot assign to '".concat(e, "' because it is a read-only property"), A)
                        }
                      })
                    })), jA(A, t), e.forEach((function (e) {
                      var r = "$".concat(e);
                      M(t, e, {
                        get: function () {
                          return function () {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            A[r].apply(A, t)
                          }
                        }
                      })
                    })), t
                  }(A), s = S(A);
                  if (s.setupContext = o, O(r, "__ob__", UA()), ZA(A, o.slots), zA(s, (function () {
                    n = i(r, o)
                  })), !n) return;
                  if (j(n)) {
                    var a = n;
                    return void (A.$options.render = function () {
                      return ZA(A, o.slots), zA(s, (function () {
                        return a()
                      }))
                    })
                  }
                  if (Y(n)) {
                    fA(n) && (n = uA(n)), XA.set(A, "rawBindings", n);
                    var c = n;
                    return void Object.keys(c).forEach((function (r) {
                      var n = c[r];
                      if (!BA(n)) if (fA(n)) R(n) && (n = lA(n)); else if (j(n)) {
                        var i = n;
                        n = n.bind(A), Object.keys(i).forEach((function (A) {
                          n[A] = i[A]
                        }))
                      } else Y(n) ? e(n) && t(n) : n = lA(n);
                      !function (A, t, e) {
                        var r = A.$options.props;
                        t in A || r && T(r, t) ? r && T(r, t) ? z('The setup binding property "'.concat(t, '" is already declared as a prop.'), A) : z('The setup binding property "'.concat(t, '" is already declared.'), A) : (BA(e) ? M(A, t, {
                          get: function () {
                            return e.value
                          }, set: function (A) {
                            e.value = A
                          }
                        }) : M(A, t, {
                          get: function () {
                            return fA(e) && e.__ob__.dep.depend(), e
                          }, set: function (A) {
                            e = A
                          }
                        }), A.$nextTick((function () {
                          -1 === Object.keys(A._data).indexOf(t) && (BA(e) ? M(A._data, t, {
                            get: function () {
                              return e.value
                            }, set: function (A) {
                              e.value = A
                            }
                          }) : M(A._data, t, {
                            get: function () {
                              return e
                            }, set: function (A) {
                              e = A
                            }
                          }))
                        })))
                      }(A, r, n)
                    }))
                  }
                  V(!1, '"setup" must return a "Object" or a "Function", got "'.concat(Object.prototype.toString.call(n).slice(8, -1), '"'))
                }(A, A.$props), j(o) ? o.call(A, A) : o || {}
              }
            }, mounted: function () {
              WA(this)
            }, beforeUpdate: function () {
              jA(this)
            }, updated: function () {
              WA(this)
            }
          })
        }

        function qA(A, t) {
          if (!A) return t;
          if (!t) return A;
          for (var e, r, n, i = k ? Reflect.ownKeys(A) : Object.keys(A), o = 0; o < i.length; o++) "__ob__" !== (e = i[o]) && (r = t[e], n = A[e], T(t, e) ? r !== n && W(r) && !BA(r) && W(n) && !BA(n) && qA(n, r) : t[e] = n);
          return t
        }

        function At(A) {
          !function (A) {
            return v && T(A, H)
          }(A) ? (A.version ? "2" === A.version[0] && "." === A.version[1] || z("[vue-composition-api] only works with Vue 2, v".concat(A.version, " found.")) : z("[vue-composition-api] no Vue version found"), A.config.optionMergeStrategies.setup = function (A, t) {
            return function (e, r) {
              return qA(j(A) ? A(e, r) || {} : void 0, j(t) ? t(e, r) || {} : void 0)
            }
          }, function (A) {
            v && A.__proto__ !== v.__proto__ && z("[vue-composition-api] another instance of Vue installed"), v = A, Object.defineProperty(A, H, {
              configurable: !0,
              writable: !0,
              value: !0
            })
          }(A), $A(A)) : z("[vue-composition-api] already installed. Vue.use(VueCompositionAPI) should be called only once.")
        }

        var tt, et = {
          install: function (A) {
            return At(A)
          }
        };
        "undefined" != typeof window && window.Vue && window.Vue.use(et), (tt = (tt = Vue) || Vue) && !tt.__composition_api_installed__ && Vue.use(et);

        function rt() {
          return "undefined" != typeof navigator && "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}
        }

        Vue, Vue.version, Vue;
        var nt, it, ot = "function" == typeof Proxy;

        function st() {
          return void 0 !== nt || ("undefined" != typeof window && window.performance ? (nt = !0, it = window.performance) : "undefined" != typeof global && (null === (A = global.perf_hooks) || void 0 === A ? void 0 : A.performance) ? (nt = !0, it = global.perf_hooks.performance) : nt = !1), nt ? it.now() : Date.now();
          var A
        }

        var at, ct = function () {
          function A(t, e) {
            var r = this;
            s(this, A), this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = e;
            var n = {};
            if (t.settings) for (var i in t.settings) {
              var o = t.settings[i];
              n[i] = o.defaultValue
            }
            var a = "__vue-devtools-plugin-settings__".concat(t.id), c = Object.assign({}, n);
            try {
              var l = localStorage.getItem(a), B = JSON.parse(l);
              Object.assign(c, B)
            } catch (u) {
            }
            this.fallbacks = {
              getSettings: function () {
                return c
              }, setSettings: function (A) {
                try {
                  localStorage.setItem(a, JSON.stringify(A))
                } catch (u) {
                }
                c = A
              }, now: function () {
                return st()
              }
            }, e && e.on("plugin:settings:set", (function (A, t) {
              A === r.plugin.id && r.fallbacks.setSettings(t)
            })), this.proxiedOn = new Proxy({}, {
              get: function (A, t) {
                return r.target ? r.target.on[t] : function () {
                  for (var A = arguments.length, e = new Array(A), n = 0; n < A; n++) e[n] = arguments[n];
                  r.onQueue.push({method: t, args: e})
                }
              }
            }), this.proxiedTarget = new Proxy({}, {
              get: function (A, t) {
                return r.target ? r.target[t] : "on" === t ? r.proxiedOn : Object.keys(r.fallbacks).includes(t) ? function () {
                  for (var A, e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                  return r.targetQueue.push({
                    method: t, args: n, resolve: function () {
                    }
                  }), (A = r.fallbacks)[t].apply(A, n)
                } : function () {
                  for (var A = arguments.length, e = new Array(A), n = 0; n < A; n++) e[n] = arguments[n];
                  return new Promise((function (A) {
                    r.targetQueue.push({method: t, args: e, resolve: A})
                  }))
                }
              }
            })
          }

          var t;
          return c(A, [{
            key: "setRealTarget", value: (t = o(r().mark((function A(t) {
              var e, i, o, s, a, c, l, u;
              return r().wrap((function (A) {
                for (; ;) switch (A.prev = A.next) {
                  case 0:
                    this.target = t, e = B(this.onQueue);
                    try {
                      for (e.s(); !(i = e.n()).done;) s = i.value, (o = this.target.on)[s.method].apply(o, n(s.args))
                    } catch (r) {
                      e.e(r)
                    } finally {
                      e.f()
                    }
                    a = B(this.targetQueue), A.prev = 4, a.s();
                  case 6:
                    if ((c = a.n()).done) {
                      A.next = 15;
                      break
                    }
                    return u = c.value, A.t0 = u, A.next = 11, (l = this.target)[u.method].apply(l, n(u.args));
                  case 11:
                    A.t1 = A.sent, A.t0.resolve.call(A.t0, A.t1);
                  case 13:
                    A.next = 6;
                    break;
                  case 15:
                    A.next = 20;
                    break;
                  case 17:
                    A.prev = 17, A.t2 = A.catch(4), a.e(A.t2);
                  case 20:
                    return A.prev = 20, a.f(), A.finish(20);
                  case 23:
                  case"end":
                    return A.stop()
                }
              }), A, this, [[4, 17, 20, 23]])
            }))), function (A) {
              return t.apply(this, arguments)
            })
          }]), A
        }();

        function lt(A, t) {
          var e = A, r = rt(), n = rt().__VUE_DEVTOOLS_GLOBAL_HOOK__, i = ot && e.enableEarlyProxy;
          if (!n || !r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ && i) {
            var o = i ? new ct(e, n) : null;
            (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
              pluginDescriptor: e,
              setupFn: t,
              proxy: o
            }), o && t(o.proxiedTarget)
          } else n.emit("devtools-plugin:setup", A, t)
        }

        /*!
              * pinia v2.0.14
              * (c) 2022 Eduardo San Martin Morote
              * @license MIT
              */
        var Bt, ut = function (A) {
          return at = A
        }, gt = Symbol("pinia");

        function ht(A) {
          return A && "object" === l(A) && "[object Object]" === Object.prototype.toString.call(A) && "function" != typeof A.toJSON
        }

        !function (A) {
          A.direct = "direct", A.patchObject = "patch object", A.patchFunction = "patch function"
        }(Bt || (Bt = {}));
        var wt = "undefined" != typeof window, ft = function () {
          return "object" === ("undefined" == typeof window ? "undefined" : l(window)) && window.window === window ? window : "object" === ("undefined" == typeof self ? "undefined" : l(self)) && self.self === self ? self : "object" === ("undefined" == typeof global ? "undefined" : l(global)) && global.global === global ? global : "object" === ("undefined" == typeof globalThis ? "undefined" : l(globalThis)) ? globalThis : {HTMLElement: null}
        }();

        function dt(A) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, e = t.autoBom,
            r = void 0 !== e && e;
          return r && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(A.type) ? new Blob([String.fromCharCode(65279), A], {type: A.type}) : A
        }

        function pt(A, t, e) {
          var r = new XMLHttpRequest;
          r.open("GET", A), r.responseType = "blob", r.onload = function () {
            mt(r.response, t, e)
          }, r.onerror = function () {
          }, r.send()
        }

        function Qt(A) {
          var t = new XMLHttpRequest;
          t.open("HEAD", A, !1);
          try {
            t.send()
          } catch (e) {
          }
          return t.status >= 200 && t.status <= 299
        }

        function Ct(A) {
          try {
            A.dispatchEvent(new MouseEvent("click"))
          } catch (e) {
            var t = document.createEvent("MouseEvents");
            t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), A.dispatchEvent(t)
          }
        }

        var Ut,
          Ft = "object" === ("undefined" == typeof navigator ? "undefined" : l(navigator)) ? navigator : {userAgent: ""},
          vt = function () {
            return /Macintosh/.test(Ft.userAgent) && /AppleWebKit/.test(Ft.userAgent) && !/Safari/.test(Ft.userAgent)
          }(),
          mt = wt ? "undefined" != typeof HTMLAnchorElement && "download" in HTMLAnchorElement.prototype && !vt ? function (A) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "download",
              e = arguments.length > 2 ? arguments[2] : void 0, r = document.createElement("a");
            r.download = t, r.rel = "noopener", "string" == typeof A ? (r.href = A, r.origin !== location.origin ? Qt(r.href) ? pt(A, t, e) : (r.target = "_blank", Ct(r)) : Ct(r)) : (r.href = URL.createObjectURL(A), setTimeout((function () {
              URL.revokeObjectURL(r.href)
            }), 4e4), setTimeout((function () {
              Ct(r)
            }), 0))
          } : "msSaveOrOpenBlob" in Ft ? function (A) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "download",
              e = arguments.length > 2 ? arguments[2] : void 0;
            if ("string" == typeof A) if (Qt(A)) pt(A, t, e); else {
              var r = document.createElement("a");
              r.href = A, r.target = "_blank", setTimeout((function () {
                Ct(r)
              }))
            } else navigator.msSaveOrOpenBlob(dt(A, e), t)
          } : function (A, t, e, r) {
            (r = r || open("", "_blank")) && (r.document.title = r.document.body.innerText = "downloading...");
            if ("string" == typeof A) return pt(A, t, e);
            var n = "application/octet-stream" === A.type,
              i = /constructor/i.test(String(ft.HTMLElement)) || "safari" in ft,
              o = /CriOS\/[\d]+/.test(navigator.userAgent);
            if ((o || n && i || vt) && "undefined" != typeof FileReader) {
              var s = new FileReader;
              s.onloadend = function () {
                var A = s.result;
                if ("string" != typeof A) throw r = null, new Error("Wrong reader.result type");
                A = o ? A : A.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = A : location.assign(A), r = null
              }, s.readAsDataURL(A)
            } else {
              var a = URL.createObjectURL(A);
              r ? r.location.assign(a) : location.href = a, r = null, setTimeout((function () {
                URL.revokeObjectURL(a)
              }), 4e4)
            }
          } : function () {
          };

        function yt(A, t) {
          "function" == typeof __VUE_DEVTOOLS_TOAST__ && __VUE_DEVTOOLS_TOAST__("🍍 " + A, t)
        }

        function Ht(A) {
          return "_a" in A && "install" in A
        }

        function Et() {
          if (!("clipboard" in navigator)) return yt("Your browser doesn't support the Clipboard API", "error"), !0
        }

        function bt(A) {
          return !!(A instanceof Error && A.message.toLowerCase().includes("document is not focused")) && (yt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0)
        }

        function It() {
          return It = o(r().mark((function A(t) {
            return r().wrap((function (A) {
              for (; ;) switch (A.prev = A.next) {
                case 0:
                  if (!Et()) {
                    A.next = 2;
                    break
                  }
                  return A.abrupt("return");
                case 2:
                  return A.prev = 2, A.next = 5, navigator.clipboard.writeText(JSON.stringify(t.state.value));
                case 5:
                  yt("Global state copied to clipboard."), A.next = 14;
                  break;
                case 8:
                  if (A.prev = 8, A.t0 = A.catch(2), !bt(A.t0)) {
                    A.next = 12;
                    break
                  }
                  return A.abrupt("return");
                case 12:
                  yt("Failed to serialize the state. Check the console for more details.", "error");
                case 14:
                case"end":
                  return A.stop()
              }
            }), A, null, [[2, 8]])
          }))), It.apply(this, arguments)
        }

        function Lt(A) {
          return Kt.apply(this, arguments)
        }

        function Kt() {
          return Kt = o(r().mark((function A(t) {
            return r().wrap((function (A) {
              for (; ;) switch (A.prev = A.next) {
                case 0:
                  if (!Et()) {
                    A.next = 2;
                    break
                  }
                  return A.abrupt("return");
                case 2:
                  return A.prev = 2, A.t0 = JSON, A.next = 6, navigator.clipboard.readText();
                case 6:
                  A.t1 = A.sent, t.state.value = A.t0.parse.call(A.t0, A.t1), yt("Global state pasted from clipboard."), A.next = 17;
                  break;
                case 11:
                  if (A.prev = 11, A.t2 = A.catch(2), !bt(A.t2)) {
                    A.next = 15;
                    break
                  }
                  return A.abrupt("return");
                case 15:
                  yt("Failed to deserialize the state from clipboard. Check the console for more details.", "error");
                case 17:
                case"end":
                  return A.stop()
              }
            }), A, null, [[2, 11]])
          }))), Kt.apply(this, arguments)
        }

        function xt() {
          return xt = o(r().mark((function A(t) {
            return r().wrap((function (A) {
              for (; ;) switch (A.prev = A.next) {
                case 0:
                  try {
                    mt(new Blob([JSON.stringify(t.state.value)], {type: "text/plain;charset=utf-8"}), "pinia-state.json")
                  } catch (e) {
                    yt("Failed to export the state as JSON. Check the console for more details.", "error")
                  }
                case 1:
                case"end":
                  return A.stop()
              }
            }), A)
          }))), xt.apply(this, arguments)
        }

        function St() {
          return Ut || ((Ut = document.createElement("input")).type = "file", Ut.accept = ".json"), function () {
            return new Promise((function (A, t) {
              Ut.onchange = o(r().mark((function t() {
                var e, n;
                return r().wrap((function (t) {
                  for (; ;) switch (t.prev = t.next) {
                    case 0:
                      if (e = Ut.files) {
                        t.next = 3;
                        break
                      }
                      return t.abrupt("return", A(null));
                    case 3:
                      if (n = e.item(0)) {
                        t.next = 6;
                        break
                      }
                      return t.abrupt("return", A(null));
                    case 6:
                      return t.t0 = A, t.next = 9, n.text();
                    case 9:
                      return t.t1 = t.sent, t.t2 = n, t.t3 = {
                        text: t.t1,
                        file: t.t2
                      }, t.abrupt("return", (0, t.t0)(t.t3));
                    case 13:
                    case"end":
                      return t.stop()
                  }
                }), t)
              }))), Ut.oncancel = function () {
                return A(null)
              }, Ut.onerror = t, Ut.click()
            }))
          }
        }

        function Dt(A) {
          return kt.apply(this, arguments)
        }

        function kt() {
          return kt = o(r().mark((function A(t) {
            var e, n, i, o;
            return r().wrap((function (A) {
              for (; ;) switch (A.prev = A.next) {
                case 0:
                  return A.prev = 0, A.next = 3, St();
                case 3:
                  return e = A.sent, A.next = 6, e();
                case 6:
                  if (n = A.sent) {
                    A.next = 9;
                    break
                  }
                  return A.abrupt("return");
                case 9:
                  i = n.text, o = n.file, t.state.value = JSON.parse(i), yt('Global state imported from "'.concat(o.name, '".')), A.next = 18;
                  break;
                case 14:
                  A.prev = 14, A.t0 = A.catch(0), yt("Failed to export the state as JSON. Check the console for more details.", "error");
                case 18:
                case"end":
                  return A.stop()
              }
            }), A, null, [[0, 14]])
          }))), kt.apply(this, arguments)
        }

        function _t(A) {
          return {_custom: {display: A}}
        }

        var Mt = "🍍 Pinia (root)", Ot = "_root";

        function Tt(A) {
          return Ht(A) ? {id: Ot, label: Mt} : {id: A.$id, label: A.$id}
        }

        function Vt(A) {
          return A ? Array.isArray(A) ? A.reduce((function (A, t) {
            return A.keys.push(t.key), A.operations.push(t.type), A.oldValue[t.key] = t.oldValue, A.newValue[t.key] = t.newValue, A
          }), {oldValue: {}, keys: [], operations: [], newValue: {}}) : {
            operation: _t(A.type),
            key: _t(A.key),
            oldValue: A.oldValue,
            newValue: A.newValue
          } : {}
        }

        function Gt(A) {
          switch (A) {
            case Bt.direct:
              return "mutation";
            case Bt.patchFunction:
            case Bt.patchObject:
              return "$patch";
            default:
              return "unknown"
          }
        }

        var Rt = !0, Pt = [], Nt = "pinia:mutations", Jt = "pinia", Xt = function (A) {
          return "🍍 " + A
        };

        function Yt(A, t) {
          lt({
            id: "dev.esm.pinia",
            label: "Pinia 🍍",
            logo: "https://pinia.vuejs.org/logo.svg",
            packageName: "pinia",
            homepage: "https://pinia.vuejs.org",
            componentStateTypes: Pt,
            app: A
          }, (function (e) {
            var n, i;
            "function" != typeof e.now && yt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), e.addTimelineLayer({
              id: Nt,
              label: "Pinia 🍍",
              color: 15064968
            }), e.addInspector({
              id: Jt,
              label: "Pinia 🍍",
              icon: "storage",
              treeFilterPlaceholder: "Search stores",
              actions: [{
                icon: "content_copy", action: function () {
                  !function (A) {
                    It.apply(this, arguments)
                  }(t)
                }, tooltip: "Serialize and copy the state"
              }, {
                icon: "content_paste", action: (i = o(r().mark((function A() {
                  return r().wrap((function (A) {
                    for (; ;) switch (A.prev = A.next) {
                      case 0:
                        return A.next = 2, Lt(t);
                      case 2:
                        e.sendInspectorTree(Jt), e.sendInspectorState(Jt);
                      case 4:
                      case"end":
                        return A.stop()
                    }
                  }), A)
                }))), function () {
                  return i.apply(this, arguments)
                }), tooltip: "Replace the state with the content of your clipboard"
              }, {
                icon: "save", action: function () {
                  !function (A) {
                    xt.apply(this, arguments)
                  }(t)
                }, tooltip: "Save the state as a JSON file"
              }, {
                icon: "folder_open", action: (n = o(r().mark((function A() {
                  return r().wrap((function (A) {
                    for (; ;) switch (A.prev = A.next) {
                      case 0:
                        return A.next = 2, Dt(t);
                      case 2:
                        e.sendInspectorTree(Jt), e.sendInspectorState(Jt);
                      case 4:
                      case"end":
                        return A.stop()
                    }
                  }), A)
                }))), function () {
                  return n.apply(this, arguments)
                }), tooltip: "Import the state from a JSON file"
              }]
            }), e.on.inspectComponent((function (A, t) {
              var e = A.componentInstance && A.componentInstance.proxy;
              if (e && e._pStores) {
                var r = A.componentInstance.proxy._pStores;
                Object.values(r).forEach((function (t) {
                  A.instanceData.state.push({
                    type: Xt(t.$id),
                    key: "state",
                    editable: !0,
                    value: t._isOptionsAPI ? {
                      _custom: {
                        value: t.$state,
                        actions: [{
                          icon: "restore", tooltip: "Reset the state of this store", action: function () {
                            return t.$reset()
                          }
                        }]
                      }
                    } : t.$state
                  }), t._getters && t._getters.length && A.instanceData.state.push({
                    type: Xt(t.$id),
                    key: "getters",
                    editable: !1,
                    value: t._getters.reduce((function (A, e) {
                      try {
                        A[e] = t[e]
                      } catch (r) {
                        A[e] = r
                      }
                      return A
                    }), {})
                  })
                }))
              }
            })), e.on.getInspectorTree((function (e) {
              if (e.app === A && e.inspectorId === Jt) {
                var r = [t];
                r = r.concat(Array.from(t._s.values())), e.rootNodes = (e.filter ? r.filter((function (A) {
                  return "$id" in A ? A.$id.toLowerCase().includes(e.filter.toLowerCase()) : Mt.toLowerCase().includes(e.filter.toLowerCase())
                })) : r).map(Tt)
              }
            })), e.on.getInspectorState((function (e) {
              if (e.app === A && e.inspectorId === Jt) {
                var r = e.nodeId === Ot ? t : t._s.get(e.nodeId);
                if (!r) return;
                r && (e.state = function (A) {
                  if (Ht(A)) {
                    var t = Array.from(A._s.keys()), e = A._s, r = {
                      state: t.map((function (t) {
                        return {editable: !0, key: t, value: A.state.value[t]}
                      })), getters: t.filter((function (A) {
                        return e.get(A)._getters
                      })).map((function (A) {
                        var t = e.get(A);
                        return {
                          editable: !1, key: A, value: t._getters.reduce((function (A, e) {
                            return A[e] = t[e], A
                          }), {})
                        }
                      }))
                    };
                    return r
                  }
                  var n = {
                    state: Object.keys(A.$state).map((function (t) {
                      return {editable: !0, key: t, value: A.$state[t]}
                    }))
                  };
                  return A._getters && A._getters.length && (n.getters = A._getters.map((function (t) {
                    return {editable: !1, key: t, value: A[t]}
                  }))), A._customProperties.size && (n.customProperties = Array.from(A._customProperties).map((function (t) {
                    return {editable: !0, key: t, value: A[t]}
                  }))), n
                }(r))
              }
            })), e.on.editInspectorState((function (e, r) {
              if (e.app === A && e.inspectorId === Jt) {
                var n = e.nodeId === Ot ? t : t._s.get(e.nodeId);
                if (!n) return yt('store "'.concat(e.nodeId, '" not found'), "error");
                var i = e.path;
                Ht(n) ? i.unshift("state") : 1 === i.length && n._customProperties.has(i[0]) && !(i[0] in n.$state) || i.unshift("$state"), Rt = !1, e.set(n, i, e.state.value), Rt = !0
              }
            })), e.on.editComponentState((function (A) {
              if (A.type.startsWith("🍍")) {
                var e = A.type.replace(/^🍍\s*/, ""), r = t._s.get(e);
                if (!r) return yt('store "'.concat(e, '" not found'), "error");
                var n = A.path;
                if ("state" !== n[0]) return yt('Invalid path for store "'.concat(e, '":\n').concat(n, "\nOnly state can be modified."));
                n[0] = "$state", Rt = !1, A.set(r, n, A.state.value), Rt = !0
              }
            }))
          }))
        }

        function Wt(A, e) {
          Pt.includes(Xt(e.$id)) || Pt.push(Xt(e.$id)), lt({
            id: "dev.esm.pinia",
            label: "Pinia 🍍",
            logo: "https://pinia.vuejs.org/logo.svg",
            packageName: "pinia",
            homepage: "https://pinia.vuejs.org",
            componentStateTypes: Pt,
            app: A,
            settings: {logStoreChanges: {label: "Notify about new/deleted stores", type: "boolean", defaultValue: !0}}
          }, (function (A) {
            var r = "function" == typeof A.now ? A.now.bind(A) : Date.now;
            e.$onAction((function (t) {
              var n = t.after, i = t.onError, o = t.name, s = t.args, a = Zt++;
              A.addTimelineEvent({
                layerId: Nt,
                event: {
                  time: r(),
                  title: "🛫 " + o,
                  subtitle: "start",
                  data: {store: _t(e.$id), action: _t(o), args: s},
                  groupId: a
                }
              }), n((function (t) {
                jt = void 0, A.addTimelineEvent({
                  layerId: Nt,
                  event: {
                    time: r(),
                    title: "🛬 " + o,
                    subtitle: "end",
                    data: {store: _t(e.$id), action: _t(o), args: s, result: t},
                    groupId: a
                  }
                })
              })), i((function (t) {
                jt = void 0, A.addTimelineEvent({
                  layerId: Nt,
                  event: {
                    time: r(),
                    logType: "error",
                    title: "💥 " + o,
                    subtitle: "end",
                    data: {store: _t(e.$id), action: _t(o), args: s, error: t},
                    groupId: a
                  }
                })
              }))
            }), !0), e._customProperties.forEach((function (t) {
              OA((function () {
                return function (A) {
                  return BA(A) ? A.value : A
                }(e[t])
              }), (function (e, n) {
                A.notifyComponentUpdate(), A.sendInspectorState(Jt), Rt && A.addTimelineEvent({
                  layerId: Nt,
                  event: {time: r(), title: "Change", subtitle: t, data: {newValue: e, oldValue: n}, groupId: jt}
                })
              }), {deep: !0})
            })), e.$subscribe((function (n, i) {
              var o = n.events, s = n.type;
              if (A.notifyComponentUpdate(), A.sendInspectorState(Jt), Rt) {
                var a = {time: r(), title: Gt(s), data: t({store: _t(e.$id)}, Vt(o)), groupId: jt};
                jt = void 0, s === Bt.patchFunction ? a.subtitle = "⤵️" : s === Bt.patchObject ? a.subtitle = "🧩" : o && !Array.isArray(o) && (a.subtitle = o.type), o && (a.data["rawEvent(s)"] = {
                  _custom: {
                    display: "DebuggerEvent",
                    type: "object",
                    tooltip: "raw DebuggerEvent[]",
                    value: o
                  }
                }), A.addTimelineEvent({layerId: Nt, event: a})
              }
            }), {detached: !0, flush: "sync"});
            var n = e._hotUpdate;
            e._hotUpdate = vA((function (t) {
              n(t), A.addTimelineEvent({
                layerId: Nt,
                event: {
                  time: r(),
                  title: "🔥 " + e.$id,
                  subtitle: "HMR update",
                  data: {store: _t(e.$id), info: _t("HMR update")}
                }
              }), A.notifyComponentUpdate(), A.sendInspectorTree(Jt), A.sendInspectorState(Jt)
            }));
            var i = e.$dispose;
            e.$dispose = function () {
              i(), A.notifyComponentUpdate(), A.sendInspectorTree(Jt), A.sendInspectorState(Jt), A.getSettings().logStoreChanges && yt('Disposed "'.concat(e.$id, '" store 🗑'))
            }, A.notifyComponentUpdate(), A.sendInspectorTree(Jt), A.sendInspectorState(Jt), A.getSettings().logStoreChanges && yt('"'.concat(e.$id, '" store installed 🆕'))
          }))
        }

        var jt, Zt = 0;

        function zt(A, t) {
          var e = t.reduce((function (t, e) {
            return t[e] = mA(A)[e], t
          }), {}), r = function (t) {
            A[t] = function () {
              var r = Zt, n = new Proxy(A, {
                get: function () {
                  return jt = r, Reflect.get.apply(Reflect, arguments)
                }, set: function () {
                  return jt = r, Reflect.set.apply(Reflect, arguments)
                }
              });
              return e[t].apply(n, arguments)
            }
          };
          for (var n in e) r(n)
        }

        function $t(A) {
          var t = A.app, e = A.store, r = A.options;
          if (!e.$id.startsWith("__hot:")) {
            if (r.state && (e._isOptionsAPI = !0), "function" == typeof r.state) {
              zt(e, Object.keys(r.actions));
              var n = e._hotUpdate;
              mA(e)._hotUpdate = function (A) {
                n.apply(this, arguments), zt(e, Object.keys(A._hmrPayload.actions))
              }
            }
            Wt(t, e)
          }
        }

        function qt(A, t) {
          for (var e in t) {
            var r = t[e];
            if (e in A) {
              var n = A[e];
              ht(n) && ht(r) && !BA(r) && !fA(r) ? A[e] = qt(n, r) : sA(A, e, r)
            }
          }
          return A
        }

        var Ae = function () {
        };

        function te(A, t, e) {
          var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ae;
          A.push(t);
          var n = function () {
            var e = A.indexOf(t);
            e > -1 && (A.splice(e, 1), r())
          };
          return !e && K() && LA(n), n
        }

        function ee(A) {
          for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) e[r - 1] = arguments[r];
          A.slice().forEach((function (A) {
            A.apply(void 0, e)
          }))
        }

        function re(A, t) {
          for (var e in t) if (t.hasOwnProperty(e)) {
            var r = t[e], n = A[e];
            ht(n) && ht(r) && A.hasOwnProperty(e) && !BA(r) && !fA(r) ? A[e] = re(n, r) : A[e] = r
          }
          return A
        }

        var ne = new WeakMap;

        function ie(A) {
          return !ne.has(A)
        }

        var oe = Object.assign;

        function se(A) {
          return !(!BA(A) || !A.effect)
        }

        function ae(A, t, e, r) {
          var n, i = t.state, o = t.actions, s = t.getters, a = e.state.value[A];
          return (n = ce(A, (function () {
            a || r || sA(e.state.value, A, i ? i() : {});
            var t = uA(r ? lA(i ? i() : {}).value : e.state.value[A]);
            return oe(t, o, Object.keys(s || {}).reduce((function (t, r) {
              return t[r] = vA(VA((function () {
                ut(e);
                var t = e._s.get(A);
                if (t._r) return s[r].call(t, t)
              }))), t
            }), {}))
          }), t, e, r, !0)).$reset = function () {
            var A = i ? i() : {};
            this.$patch((function (t) {
              oe(t, A)
            }))
          }, n
        }

        function ce(A, e) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = arguments.length > 3 ? arguments[3] : void 0, o = arguments.length > 4 ? arguments[4] : void 0,
            s = arguments.length > 5 ? arguments[5] : void 0, a = oe({actions: {}}, n);
          if (!i._e.active) throw new Error("Pinia destroyed");
          var c, B, u, g = {deep: !0}, h = vA([]), w = vA([]), f = i.state.value[A];
          s || f || o || sA(i.state.value, A, {});
          var d, p = lA({});

          function C(t) {
            var e;
            c = B = !1, u = [], "function" == typeof t ? (t(i.state.value[A]), e = {
              type: Bt.patchFunction,
              storeId: A,
              events: u
            }) : (re(i.state.value[A], t), e = {type: Bt.patchObject, payload: t, storeId: A, events: u});
            var r = d = Symbol();
            NA().then((function () {
              d === r && (c = !0)
            })), B = !0, ee(h, e, i.state.value[A])
          }

          var U = function () {
            throw new Error('🍍: Store "'.concat(A, '" is build using the setup syntax and does not implement $reset().'))
          };

          function F() {
            r.stop(), h = [], w = [], i._s.delete(A)
          }

          function v(t, e) {
            return function () {
              ut(i);
              var r, n = Array.from(arguments), o = [], s = [];

              function a(A) {
                o.push(A)
              }

              function c(A) {
                s.push(A)
              }

              ee(w, {args: n, name: t, store: H, after: a, onError: c});
              try {
                r = e.apply(this && this.$id === A ? this : H, n)
              } catch (l) {
                throw ee(s, l), l
              }
              return r instanceof Promise ? r.then((function (A) {
                return ee(o, A), A
              })).catch((function (A) {
                return ee(s, A), Promise.reject(A)
              })) : (ee(o, r), r)
            }
          }

          var m = vA({actions: {}, getters: {}, state: [], hotState: p}), y = {
            _p: i, $id: A, $onAction: te.bind(null, w), $patch: C, $reset: U, $subscribe: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = te(h, t, e.detached, (function () {
                  return o()
                })), o = r.run((function () {
                  return OA((function () {
                    return i.state.value[A]
                  }), (function (r) {
                    ("sync" === e.flush ? B : c) && t({storeId: A, type: Bt.direct, events: u}, r)
                  }), oe({}, g, e))
                }));
              return n
            }, $dispose: F, _r: !1
          }, H = FA(oe(wt ? {_customProperties: vA(new Set), _hmrPayload: m} : {}, y));
          i._s.set(A, H);
          var E = i._e.run((function () {
            return (r = Q()).run((function () {
              return e()
            }))
          }));
          for (var b in E) {
            var I = E[b];
            if (BA(I) && !se(I) || fA(I)) o ? sA(p.value, b, gA(E, b)) : s || (f && ie(I) && (BA(I) ? I.value = f[b] : re(I, f[b])), sA(i.state.value[A], b, I)), m.state.push(b); else if ("function" == typeof I) {
              var L = o ? I : v(b, I);
              sA(E, b, L), m.actions[b] = I, a.actions[b] = I
            } else if (se(I) && (m.getters[b] = s ? n.getters[b] : I, wt)) {
              var K = E._getters || (E._getters = vA([]));
              K.push(b)
            }
          }
          Object.keys(E).forEach((function (A) {
            sA(H, A, E[A])
          })), Object.defineProperty(H, "$state", {
            get: function () {
              return o ? p.value : i.state.value[A]
            }, set: function (A) {
              if (o) throw new Error("cannot set hotState");
              C((function (t) {
                oe(t, A)
              }))
            }
          }), H._hotUpdate = vA((function (t) {
            for (var e in H._hotUpdating = !0, t._hmrPayload.state.forEach((function (A) {
              if (A in H.$state) {
                var e = t.$state[A], r = H.$state[A];
                "object" === l(e) && ht(e) && ht(r) ? qt(e, r) : t.$state[A] = r
              }
              sA(H, A, gA(t.$state, A))
            })), Object.keys(H.$state).forEach((function (A) {
              A in t.$state || yA(H, A)
            })), c = !1, B = !1, i.state.value[A] = gA(t._hmrPayload, "hotState"), B = !0, NA().then((function () {
              c = !0
            })), t._hmrPayload.actions) {
              var r = t[e];
              sA(H, e, v(e, r))
            }
            var n = function (A) {
              var e = t._hmrPayload.getters[A], r = s ? VA((function () {
                return ut(i), e.call(H, H)
              })) : e;
              sA(H, A, r)
            };
            for (var o in t._hmrPayload.getters) n(o);
            Object.keys(H._hmrPayload.getters).forEach((function (A) {
              A in t._hmrPayload.getters || yA(H, A)
            })), Object.keys(H._hmrPayload.actions).forEach((function (A) {
              A in t._hmrPayload.actions || yA(H, A)
            })), H._hmrPayload = t._hmrPayload, H._getters = t._getters, H._hotUpdating = !1
          }));
          var x = {writable: !0, configurable: !0, enumerable: !1};
          return wt && ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((function (A) {
            Object.defineProperty(H, A, t({value: H[A]}, x))
          })), H._r = !0, i._p.forEach((function (A) {
            if (wt) {
              var t = r.run((function () {
                return A({store: H, app: i._a, pinia: i, options: a})
              }));
              Object.keys(t || {}).forEach((function (A) {
                return H._customProperties.add(A)
              })), oe(H, t)
            } else oe(H, r.run((function () {
              return A({store: H, app: i._a, pinia: i, options: a})
            })))
          })), H.$state && "object" === l(H.$state) && "function" == typeof H.$state.constructor && H.$state.constructor.toString().includes("[native code]"), f && s && n.hydrate && n.hydrate(H.$state, f), c = !0, B = !0, H
        }

        function le(A, t) {
          return Array.isArray(t) ? t.reduce((function (t, e) {
            return t[e] = function () {
              return A(this.$pinia)[e]
            }, t
          }), {}) : Object.keys(t).reduce((function (e, r) {
            return e[r] = function () {
              var e = A(this.$pinia), n = t[r];
              return "function" == typeof n ? n.call(this, e) : e[n]
            }, e
          }), {})
        }

        function Be(A, t) {
          return Array.isArray(t) ? t.reduce((function (t, e) {
            return t[e] = function () {
              var t;
              return (t = A(this.$pinia))[e].apply(t, arguments)
            }, t
          }), {}) : Object.keys(t).reduce((function (e, r) {
            return e[r] = function () {
              var e;
              return (e = A(this.$pinia))[t[r]].apply(e, arguments)
            }, e
          }), {})
        }

        var ue = function () {
          var A = this.$createElement, t = this._self._c || A;
          return t("div", {attrs: {id: "app"}}, [t("router-view")], 1)
        }, ge = [];

        function he(A, t, e, r, n, i, o, s) {
          var a, c = "function" == typeof A ? A.options : A;
          if (t && (c.render = t, c.staticRenderFns = e, c._compiled = !0), r && (c.functional = !0), i && (c._scopeId = "data-v-" + i), o ? (a = function (A) {
            (A = A || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (A = __VUE_SSR_CONTEXT__), n && n.call(this, A), A && A._registeredComponents && A._registeredComponents.add(o)
          }, c._ssrRegister = a) : n && (a = s ? function () {
            n.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot)
          } : n), a) if (c.functional) {
            c._injectStyles = a;
            var l = c.render;
            c.render = function (A, t) {
              return a.call(t), l(A, t)
            }
          } else {
            var B = c.beforeCreate;
            c.beforeCreate = B ? [].concat(B, a) : [a]
          }
          return {exports: A, options: c}
        }

        ue._withStripped = !0;
        var we = {}, fe = he({name: "App"}, ue, ge, !1, de, null, null, null);

        function de(A) {
          for (var t in we) this[t] = we[t]
        }

        fe.options.__file = "src/App.vue";
        var pe = function () {
          return fe.exports
        }();
        axios.defaults.baseURL = "/";
        var Qe = function () {
          NProgress.done()
        };
        axios.interceptors.request.use((function (A) {
          return NProgress.start(), A
        })), axios.interceptors.response.use((function (A) {
          return Qe(), A
        }), (function (A) {
          return Qe(), Promise.reject(A)
        }));
        var Ce = axios, Ue = function (A) {
          return Ce.post("/auth", A)
        }, Fe = function (A) {
          return Ce.post("/upload", A, {headers: {"Content-Type": "multipart/form-data"}})
        }, ve = A("p", (function (A) {
          return Ce.get("/list", A)
        })), me = (A("f", (function (A) {
          return Ce.delete("/img", A)
        })), function () {
          var A = o(r().mark((function A(t) {
            var e, n, i, o, s, a, c, l;
            return r().wrap((function (A) {
              for (; ;) switch (A.prev = A.next) {
                case 0:
                  return e = localStorage.getItem("authmsg"), n = {
                    startFileName: "",
                    maxFileCount: 50,
                    prefix: t,
                    delimiter: "/"
                  }, i = Object.assign(n, JSON.parse(e)), A.next = 5, ve({params: i});
                case 5:
                  if (o = A.sent, s = o.data, a = s.files.filter((function (A) {
                    return "/" === A.fileName[A.fileName.length - 1]
                  })), c = "" !== t ? t.split("/").slice(-2, 1)[0] : null, !(a.length > 0)) {
                    A.next = 14;
                    break
                  }
                  return l = a.map((function (A) {
                    var t = A.fileName.split("/");
                    return {value: t[t.length - 2], label: t[t.length - 2], parentId: c, children: []}
                  })), A.abrupt("return", l);
                case 14:
                  return A.abrupt("return", []);
                case 15:
                case"end":
                  return A.stop()
              }
            }), A)
          })));
          return function (t) {
            return A.apply(this, arguments)
          }
        }());

        function ye() {
          return new Promise((function (A, t) {
            var e = localStorage.getItem("authmsg"), r = localStorage.getItem("token_api");
            if (e) {
              var n = new Date, i = JSON.parse(e);
              n.getTime() - i.time > 828e5 ? (localStorage.removeItem("authmsg"), He(r).then((function () {
                A()
              }))) : A()
            } else He(r).then((function () {
              A()
            })).catch((function (A) {
              ELEMENT.Notification({
                title: "提示",
                message: "状态码:".concat(A.status, ",错误信息：").concat(A.message, ",请检查keyid和key是否填写正确"),
                type: "error"
              })
            }))
          }))
        }

        function He(A) {
          return Ee.apply(this, arguments)
        }

        function Ee() {
          return (Ee = o(r().mark((function A(t) {
            var e, n, i, o, s, a;
            return r().wrap((function (A) {
              for (; ;) switch (A.prev = A.next) {
                case 0:
                  return e = JSON.parse(t), A.next = 4, Ue(e);
                case 4:
                  n = A.sent, (i = n.data).bucketId && (o = {
                    api_url: i.api_url,
                    host_url: e.host_url
                  }, s = {
                    uploadUrl: i.uploadUrl,
                    authorizationToken: i.authorizationToken,
                    bucketId: i.bucketId,
                    init_token: i.init_token,
                    time: (new Date).getTime()
                  }, a = Object.assign(s, o), be(o, e.host_url), localStorage.setItem("authmsg", JSON.stringify(a)), Ie().handleIsLogined());
                case 7:
                case"end":
                  return A.stop()
              }
            }), A)
          })))).apply(this, arguments)
        }

        var be = function (A, t) {
          var e = [], r = Ie();
          if ("" === r.prefixImg.defaultUrl) {
            for (var n = 0, i = Object.entries(A); n < i.length; n++) {
              var o = i[n];
              e.push({label: o[0], url: o[1]})
            }
            var s = {support: e, defaultUrl: t};
            r.setprefixImg(s)
          }
        }, Ie = A("u", function (A, t, e) {
          var r, n, i = "function" == typeof t;

          function o(A, e) {
            var s = K();
            if (A = A || s && function (A, t, e) {
              var r;
              void 0 === e && (e = !1);
              var n = null === (r = K()) || void 0 === r ? void 0 : r.proxy;
              if (n) {
                if (!A) return z('injection "'.concat(String(A), '" not found.'), n), t;
                var i = RA(A, n);
                return i !== GA ? i : arguments.length > 1 ? e && j(t) ? t() : t : void z('Injection "'.concat(String(A), '" not found.'), n)
              }
              z("inject() can only be used inside setup() or functional components.")
            }(gt), A && ut(A), !at) throw new Error("[🍍]: getActivePinia was called with no active Pinia. Did you forget to install pinia?\n\tconst pinia = createPinia()\n\tapp.use(pinia)\nThis will fail in production.");
            (A = at)._s.has(r) || (i ? ce(r, t, n, A) : ae(r, n, A), o._pinia = A);
            var a = A._s.get(r);
            if (e) {
              var c = "__hot:" + r, l = i ? ce(c, t, n, A, !0) : ae(c, oe({}, n), A, !0);
              e._hotUpdate(l), delete A.state.value[c], A._s.delete(c)
            }
            if (wt && s && s.proxy && !e) {
              var B = s.proxy;
              ("_pStores" in B ? B._pStores : B._pStores = {})[r] = a
            }
            return a
          }

          return "string" == typeof A ? (r = A, n = i ? e : t) : (n = A, r = A.id), o.$id = r, o
        }("store", {
          persist: {enabled: !0}, state: function () {
            return {
              isLogined: !1,
              noInvalid: !1,
              defaultcopyformat: {
                formatList: {
                  HTML: '<img src="%s" alt="" />',
                  MarkDown: "![](%s)",
                  URL: "%s",
                  Custom: ""
                }, formatStr: "URL"
              },
              isshowSetting: !1,
              prefixImg: {support: [], defaultUrl: ""},
              setdefaultFile: {methods: "1", valPt: "", valAt: [], valTt: ""},
              commpressParams: {iscompress: !1, rank: .8},
              toFile: "",
              openUploadOutMD: !1
            }
          }, getters: {
            siginStatus: function (A) {
              return !A.isLogined
            }, ShowSetting: function (A) {
              return A.isshowSetting
            }, defaultCopy: function (A) {
              return A.defaultcopyformat.formatStr
            }, defaultCopyUrl: function (A) {
              var t = A.defaultcopyformat.formatStr;
              return A.defaultcopyformat.formatList[t]
            }, prefixStatus: function (A) {
              return A.prefixImg.defaultUrl
            }, imgDefaultFile: function (A) {
              switch (A.setdefaultFile.methods) {
                case"1":
                  return A.setdefaultFile.valPt;
                case"2":
                  return A.setdefaultFile.valAt.join("/") + "/";
                case"3":
                  return A.setdefaultFile.valTt;
                default:
                  return ""
              }
            }, defaultFile: function (A) {
              return A.setdefaultFile
            }, CompressData: function (A) {
              return A.commpressParams
            }, DefaultToFile: function (A) {
              return A.toFile
            }, defaultCopyType: function (A) {
              return A.openUploadOutMD
            }
          }, actions: {
            setShowSettingBtn: function (A) {
              this.isshowSetting = A
            }, handleIsLogined: function () {
              var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
              this.isLogined = !!localStorage.getItem("token_api"), this.noInvalid = !!localStorage.getItem("authmsg"), this.prefixStatus !== A && A && (this.prefixImg.support.map((function (t) {
                return "host_url" === t.label && (t.url = A), t
              })), this.prefixImg.defaultUrl = A)
            }, setNewAuthMsg: function () {
              var A = this;
              ye().then((function () {
                A.isLogined = !0
              }))
            }, setprefixImg: function (A) {
              this.prefixImg = A
            }, setDefaultPrefix: function (A) {
              this.prefixImg.defaultUrl = A
            }, setDefaultFile: function (A) {
              this.setdefaultFile.methods = A.methods, this.setdefaultFile.valAt = A.valAt, this.setdefaultFile.valPt = A.valPt, this.setdefaultFile.valTt = A.valTt
            }, setDefaultCompress: function (A) {
              this.commpressParams = A
            }, setDefaultToFile: function (A) {
              this.toFile = A
            }, setDefaultFormat: function (A) {
              this.defaultcopyformat.formatStr = A
            }, setCustomFormat: function (A) {
              this.defaultcopyformat.formatList.Custom = A
            }
          }
        }));

        function Le(A) {
          var t = new Date(A), e = t.getFullYear(),
            r = t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1;

          function n(A) {
            return A < 10 ? "0" + A : A
          }

          var i = n(t.getDate()), o = n(t.getHours()), s = n(t.getMinutes());
          return "".concat(e, "-").concat(r, "-").concat(i, " ").concat(o, ":").concat(s)
        }

        function Ke(A) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
            e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = null, n = !0;
          return function () {
            var i = this, o = arguments;
            r && clearTimeout(r), e ? (n && (A.apply(i, o), n = !1), r = setTimeout((function () {
              n = !0
            }), t)) : r = setTimeout((function () {
              A.apply(i, o)
            }), t)
          }
        }

        A("e", '\n<a href="https://b2.mr90.top/" >\n<img width="100" align="right" alt="blazeB2" src="https://cloud.mr90.top/hexo/4/16533db7-b477-46ec-bbf8-44ae848bc771.png">\n</a>\n\n# Blaze B2图床\n\n[![文档](https://img.shields.io/badge/docs-%E6%96%87%E6%A1%A3-blueviolet)](https://blazeb2.js.org/) [![Author](https://img.shields.io/badge/author-Rr210-violet.svg)](https://github.com/Rr210)  [![Release](https://img.shields.io/github/release/Rr210/blazeB2.svg)](https://github.com/Rr210/blazeB2/releases)  [![License](https://img.shields.io/github/license/Rr210/blazeB2.svg)](https://github.com/Rr210/blazeB2/blob/master/LICENSE)  [![Stars](https://img.shields.io/github/stars/Rr210/blazeB2)](https://github.com/Rr210/blazeB2)   [![Issues](https://img.shields.io/github/issues/Rr210/blazeB2)](https://github.com/Rr210/blazeB2/issues)\n## 📃 仓库介绍 | Warehouse introduction\n\n> 📷基于 backBlazeb2 API  ⚡ cloudflare 开发的具有 CDN 加速功能的图床工具\n\n- 在线使用 [传送](https://blazeb2.mr90.cf)  | 镜像站点 [传送](https://b2.mr90.top) | 功能展示 [传送](https://www.bilibili.com/video/BV1gB4y1v7qs)\n- deploys 文件为项目部署文件 [传送](https://blazeb2.js.org/zh/guide/deploy.html)\n## 🎉 功能特点 | Features\n- [x] 支持 **拖拽**、**复制粘贴**、**选择文件** 等方式进行选择图片\n- [x] 支持 **一键复制** 图片外链支持多种格式(**MarkDown**、**HTML**、**自定义**)\n- [x] 支持 **一键部署**（Vercel,ServerLess,Heroku,Docker）[查看部署方法](https://blazeb2.js.org/zh/guide/deploy.html)\n- [x] 支持 图片名称 **唯一性** 后端生成uuid字符串，暂不支持自定义名称\n- [x] 支持 **显示仓库下所有文件夹名称** 支持自定义默认搜索仓库名\n- [x] 支持 **图片压缩** 可自定义压缩等级 默认关闭，开启默认(**0.8**)\n- [x] 支持 **批量上传图片**、**批量删除图片** 和 **批量复制图片外链**\n- [x] 支持 **图床管理**（对仓库图片的 **增删改查** 放大预览）\n- [x] 支持 **自定义上传文件夹** 可自动生成文件夹\n- [x] 支持 自定义 **检索** 某个指定文件夹或图片\n- [x] 支持 **图片水印** 单张处理上传,**文字 / 图片**\n- [x] 支持 **暗夜模式** (自由切换)\n- [x] 支持 **PWA**\n\n\n## 💻 使用教程 | Using the tutorial\n\n- 点击这里查看 [传送门](https://blazeb2.js.org/zh/guide/)\n\n## 🍥 部署方法 | Deployment method\n\n- 支持 vercel 一键部署 [![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=flat&logo=vercel&logoColor=white)](https://blazeb2.js.org/zh/guide/deploy.html#vercel%E4%B8%80%E9%94%AE%E7%A7%92%E9%83%A8%E7%BD%B2)\n\n- 支持 serverless [![serverless](https://img.shields.io/badge/serverless-%23000000.svg?style=flat&logo=serverless&logoColor=white)](https://cloud.tencent.com/login?s_url=https%3A%2F%2Fconsole.cloud.tencent.com%2Fscf%2Flist-create%3Frid%3D1%26ns%3Ddefault%26createType%3Dempty)\n\n- 支持 heroku 部署 [![heroku](https://img.shields.io/badge/heroku-%23000000.svg?style=flat&logo=heroku&logoColor=white)](https://blazeb2.js.org/zh/guide/deploy.html#heroku-%E9%83%A8%E7%BD%B2)\n\n- 支持 Docker 部署 [![docker](https://img.shields.io/badge/docker-%23000000.svg?style=flat&logo=docker&logoColor=white)](https://blazeb2.js.org/zh/guide/deploy.html#%E5%9F%BA%E4%BA%8Edocker-nginx-%E9%83%A8%E7%BD%B2)\n## 📸 预览 | preview\n\n<details>\n<summary>点击展开</summary>\n\n<table>\n<tr>\n<td>\n<strong>上传图片</strong>\n</td>\n<td>\n<img src="https://cloud.mr90.top/hexo/5/d15c17f1-b06f-4560-a363-dd9adce488b2.gif" />\n</td>\n</tr>\n<tr>\n<td>\n<strong>水印上传</strong>\n</td>\n<td>\n<img src="https://cloud.mr90.top/hexo/5/c8f15ba7-b934-4ef6-afb2-22dd472fb4d2.gif" />\n</td>\n</tr>\n<tr>\n<td>\n<strong>图床管理</strong>\n</td>\n<td>\n<img src="https://cloud.mr90.top/hexo/5/1d146393-3012-4b55-8083-01b8c0e562c8.gif" />\n</td>\n</tr>\n</table>\n</details>\n\n## ⭐ 历史star | Star History\n\n![Star History Chart](https://api.star-history.com/svg?repos=Rr210/blazeB2&type=Date)\n\n\n## ✨ 贡献 | Contribution\n\n欢迎各种形式的贡献，包括但不限于：美化界面、增加功能、改进代码、 修复 Bug 等\n\n<a href="https://github.com/rr210/blazeB2/graphs/contributors">\n  <img src="https://contrib.rocks/image?repo=rr210/blazeB2" />\n</a>\n\n## 🎃 反馈 | Feedback\n\n在使用过程中，如遇问题，请仔细阅读 **[文档](https://blazeb2.js.org)** ，或给作者提 **[Issue](https://github.com/rr210/blazeB2/issues)**\n\n## 💿 许可 | License\n\n**[Apache License 2.0](https://github.com/Rr210/blazeB2/blob/master/LICENSE)** \n\nCopyright © 2022-Present blazeB2\n');
        var xe = function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return e("div", {
            staticClass: "upload-tg",
            style: "background-color:var(--b2-upload-c-".concat(A.isshow, ")")
          }, ["0" === A.isshow ? e("svg", {
            attrs: {
              viewBox: "0 0 1024 1024",
              xmlns: "http://www.w3.org/2000/svg",
              width: "14",
              height: "14"
            }
          }, [e("path", {
            attrs: {
              fill: "var(--b2-pre-bg)",
              d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"
            }
          })]) : "1" === A.isshow ? e("svg", {
            staticClass: "icon-1",
            attrs: {
              t: "1657957196484",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "11339",
              width: "14",
              height: "14"
            }
          }, [e("path", {
            attrs: {
              d: "M512 61.44a40.96 40.96 0 0 1 40.96 40.96v122.88a40.96 40.96 0 1 1-81.92 0V102.4a40.96 40.96 0 0 1 40.96-40.96z",
              fill: "#000000",
              "p-id": "11340"
            }
          }), e("path", {
            attrs: {
              d: "M737.28 121.79456a40.96 40.96 0 0 1 14.99136 55.95136l-61.44 106.43456a40.96 40.96 0 1 1-70.94272-40.96l61.44-106.43456A40.96 40.96 0 0 1 737.28 121.79456z",
              fill: "#191919",
              "p-id": "11341"
            }
          }), e("path", {
            attrs: {
              d: "M902.20544 286.72a40.96 40.96 0 0 1-14.99136 55.95136l-106.43456 61.44a40.96 40.96 0 0 1-40.96-70.94272l106.43456-61.44a40.96 40.96 0 0 1 55.95136 14.99136z",
              fill: "#333333",
              "p-id": "11342"
            }
          }), e("path", {
            attrs: {
              d: "M962.56 512a40.96 40.96 0 0 1-40.96 40.96h-122.88a40.96 40.96 0 1 1 0-81.92h122.88a40.96 40.96 0 0 1 40.96 40.96z",
              fill: "#4C4C4C",
              "p-id": "11343"
            }
          }), e("path", {
            attrs: {
              d: "M902.20544 737.28a40.96 40.96 0 0 1-55.95136 14.99136l-106.43456-61.44a40.96 40.96 0 1 1 40.96-70.94272l106.43456 61.44A40.96 40.96 0 0 1 902.20544 737.28z",
              fill: "#666666",
              "p-id": "11344"
            }
          }), e("path", {
            attrs: {
              d: "M737.28 902.20544a40.96 40.96 0 0 1-55.95136-14.99136l-61.44-106.43456a40.96 40.96 0 0 1 70.94272-40.96l61.44 106.43456A40.96 40.96 0 0 1 737.28 902.20544z",
              fill: "#7F7F7F",
              "p-id": "11345"
            }
          }), e("path", {
            attrs: {
              d: "M512 962.56a40.96 40.96 0 0 1-40.96-40.96v-122.88a40.96 40.96 0 1 1 81.92 0v122.88a40.96 40.96 0 0 1-40.96 40.96z",
              fill: "#999999",
              "p-id": "11346"
            }
          }), e("path", {
            attrs: {
              d: "M286.72 902.20544a40.96 40.96 0 0 1-14.99136-55.95136l61.44-106.43456a40.96 40.96 0 1 1 70.94272 40.96l-61.44 106.43456a40.96 40.96 0 0 1-55.95136 14.99136z",
              fill: "#ACACAC",
              "p-id": "11347"
            }
          }), e("path", {
            attrs: {
              d: "M121.79456 737.28a40.96 40.96 0 0 1 14.99136-55.95136l106.43456-61.44a40.96 40.96 0 0 1 40.96 70.94272l-106.43456 61.44A40.96 40.96 0 0 1 121.79456 737.28z",
              fill: "#BFBFBF",
              "p-id": "11348"
            }
          }), e("path", {
            attrs: {
              d: "M61.44 512a40.96 40.96 0 0 1 40.96-40.96h122.88a40.96 40.96 0 1 1 0 81.92H102.4a40.96 40.96 0 0 1-40.96-40.96z",
              fill: "#CCCCCC",
              "p-id": "11349"
            }
          }), e("path", {
            attrs: {
              d: "M121.79456 286.72a40.96 40.96 0 0 1 55.95136-14.99136l106.43456 61.44a40.96 40.96 0 1 1-40.96 70.94272l-106.43456-61.44A40.96 40.96 0 0 1 121.79456 286.72z",
              fill: "#E5E5E5",
              "p-id": "11350"
            }
          }), e("path", {
            attrs: {
              d: "M286.72 121.79456a40.96 40.96 0 0 1 55.95136 14.99136l61.44 106.43456a40.96 40.96 0 0 1-70.94272 40.96l-61.44-106.43456A40.96 40.96 0 0 1 286.72 121.79456z",
              fill: "#F2F2F2",
              "p-id": "11351"
            }
          })]) : "2" === A.isshow ? e("svg", {
            attrs: {
              viewBox: "0 0 1024 1024",
              xmlns: "http://www.w3.org/2000/svg",
              width: "14",
              height: "14"
            }
          }, [e("path", {
            attrs: {
              fill: "currentColor",
              d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
            }
          })]) : "3" === A.isshow ? e("svg", {
            staticClass: "icon",
            attrs: {
              t: "1657957656098",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "12283",
              width: "14",
              height: "14"
            }
          }, [e("path", {
            attrs: {
              d: "M265.28 310.72a32 32 0 0 1 45.44-45.44l448 448a32 32 0 0 1-45.44 45.44z",
              "p-id": "12284",
              fill: "var(--b2-pre-bg)"
            }
          }), e("path", {
            attrs: {
              d: "M713.28 265.28a32 32 0 0 1 45.44 45.44l-448 448a32 32 0 0 1-45.44-45.44z",
              "p-id": "12285",
              fill: "var(--b2-pre-bg)"
            }
          })]) : A._e()])
        }, Se = [];
        xe._withStripped = !0;
        var De = {}, ke = he({props: {isshow: String}}, xe, Se, !1, _e, "05829ee8", null, null);

        function _e(A) {
          for (var t in De) this[t] = De[t]
        }

        ke.options.__file = "src/views/svg/uploadTaggle.vue";
        var Me = function () {
          return ke.exports
        }();

        /*!
             * Compressor.js v1.1.1
             * https://fengyuanchen.github.io/compressorjs
             *
             * Copyright 2018-present Chen Fengyuan
             * Released under the MIT license
             *
             * Date: 2021-10-05T02:32:40.212Z
             */
        function Oe(A, t) {
          var e = Object.keys(A);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(A);
            t && (r = r.filter((function (t) {
              return Object.getOwnPropertyDescriptor(A, t).enumerable
            }))), e.push.apply(e, r)
          }
          return e
        }

        function Te(A) {
          for (var t = 1; t < arguments.length; t++) {
            var e = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Oe(Object(e), !0).forEach((function (t) {
              Ge(A, t, e[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e)) : Oe(Object(e)).forEach((function (t) {
              Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t))
            }))
          }
          return A
        }

        function Ve(A, t) {
          for (var e = 0; e < t.length; e++) {
            var r = t[e];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r)
          }
        }

        function Ge(A, t, e) {
          return t in A ? Object.defineProperty(A, t, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : A[t] = e, A
        }

        function Re() {
          return Re = Object.assign || function (A) {
            for (var t = 1; t < arguments.length; t++) {
              var e = arguments[t];
              for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (A[r] = e[r])
            }
            return A
          }, Re.apply(this, arguments)
        }

        var Pe = {exports: {}};
        !function (A) {
          "undefined" != typeof window && function (t) {
            var e = t.HTMLCanvasElement && t.HTMLCanvasElement.prototype, r = t.Blob && function () {
                try {
                  return Boolean(new Blob)
                } catch (A) {
                  return !1
                }
              }(), n = r && t.Uint8Array && function () {
                try {
                  return 100 === new Blob([new Uint8Array(100)]).size
                } catch (A) {
                  return !1
                }
              }(), i = t.BlobBuilder || t.WebKitBlobBuilder || t.MozBlobBuilder || t.MSBlobBuilder,
              o = /^data:((.*?)(;charset=.*?)?)(;base64)?,/,
              s = (r || i) && t.atob && t.ArrayBuffer && t.Uint8Array && function (A) {
                var t, e, s, a, c, l, B, u, g;
                if (!(t = A.match(o))) throw new Error("invalid data URI");
                for (e = t[2] ? t[1] : "text/plain" + (t[3] || ";charset=US-ASCII"), s = !!t[4], a = A.slice(t[0].length), c = s ? atob(a) : decodeURIComponent(a), l = new ArrayBuffer(c.length), B = new Uint8Array(l), u = 0; u < c.length; u += 1) B[u] = c.charCodeAt(u);
                return r ? new Blob([n ? B : l], {type: e}) : ((g = new i).append(l), g.getBlob(e))
              };
            t.HTMLCanvasElement && !e.toBlob && (e.mozGetAsFile ? e.toBlob = function (A, t, r) {
              var n = this;
              setTimeout((function () {
                r && e.toDataURL && s ? A(s(n.toDataURL(t, r))) : A(n.mozGetAsFile("blob", t))
              }))
            } : e.toDataURL && s && (e.msToBlob ? e.toBlob = function (A, t, r) {
              var n = this;
              setTimeout((function () {
                (t && "image/png" !== t || r) && e.toDataURL && s ? A(s(n.toDataURL(t, r))) : A(n.msToBlob(t))
              }))
            } : e.toBlob = function (A, t, e) {
              var r = this;
              setTimeout((function () {
                A(s(r.toDataURL(t, e)))
              }))
            })), A.exports ? A.exports = s : t.dataURLtoBlob = s
          }(window)
        }(Pe);
        var Ne = Pe.exports, Je = {
          strict: !0,
          checkOrientation: !0,
          maxWidth: 1 / 0,
          maxHeight: 1 / 0,
          minWidth: 0,
          minHeight: 0,
          width: void 0,
          height: void 0,
          resize: "none",
          quality: .8,
          mimeType: "auto",
          convertTypes: ["image/png"],
          convertSize: 5e6,
          beforeDraw: null,
          drew: null,
          success: null,
          error: null
        }, Xe = "undefined" != typeof window && void 0 !== window.document ? window : {}, Ye = function (A) {
          return A > 0 && A < 1 / 0
        }, We = Array.prototype.slice;
        var je = /^image\/.+$/;

        function Ze(A) {
          return je.test(A)
        }

        var ze = String.fromCharCode;
        var $e = Xe.btoa;

        function qe(A) {
          var t, e = new DataView(A);
          try {
            var r, n, i;
            if (255 === e.getUint8(0) && 216 === e.getUint8(1)) for (var o = e.byteLength, s = 2; s + 1 < o;) {
              if (255 === e.getUint8(s) && 225 === e.getUint8(s + 1)) {
                n = s;
                break
              }
              s += 1
            }
            if (n) {
              var a = n + 10;
              if ("Exif" === function (A, t, e) {
                var r, n = "";
                for (e += t, r = t; r < e; r += 1) n += ze(A.getUint8(r));
                return n
              }(e, n + 4, 4)) {
                var c = e.getUint16(a);
                if (((r = 18761 === c) || 19789 === c) && 42 === e.getUint16(a + 2, r)) {
                  var l = e.getUint32(a + 4, r);
                  l >= 8 && (i = a + l)
                }
              }
            }
            if (i) {
              var B, u, g = e.getUint16(i, r);
              for (u = 0; u < g; u += 1) if (B = i + 12 * u + 2, 274 === e.getUint16(B, r)) {
                B += 8, t = e.getUint16(B, r), e.setUint16(B, 1, r);
                break
              }
            }
          } catch (h) {
            t = 1
          }
          return t
        }

        var Ar = /\.\d*(?:0|9){12}\d*$/;

        function tr(A) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e11;
          return Ar.test(A) ? Math.round(A * t) / t : A
        }

        function er(A) {
          var t = A.aspectRatio, e = A.height, r = A.width,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none", i = Ye(r), o = Ye(e);
          if (i && o) {
            var s = e * t;
            ("contain" === n || "none" === n) && s > r || "cover" === n && s < r ? e = r / t : r = e * t
          } else i ? e = r / t : o && (r = e * t);
          return {width: r, height: e}
        }

        var rr = Xe.ArrayBuffer, nr = Xe.FileReader, ir = Xe.URL || Xe.webkitURL, or = /\.\w+$/, sr = Xe.Compressor,
          ar = function () {
            function A(t, e) {
              !function (A, t) {
                if (!(A instanceof t)) throw new TypeError("Cannot call a class as a function")
              }(this, A), this.file = t, this.image = new Image, this.options = Te(Te({}, Je), e), this.aborted = !1, this.result = null, this.init()
            }

            var t, e, r;
            return t = A, e = [{
              key: "init", value: function () {
                var A = this, t = this.file, e = this.options;
                if (r = t, "undefined" != typeof Blob && (r instanceof Blob || "[object Blob]" === Object.prototype.toString.call(r))) {
                  var r, n = t.type;
                  if (Ze(n)) if (ir && nr) if (rr || (e.checkOrientation = !1), ir && !e.checkOrientation) this.load({url: ir.createObjectURL(t)}); else {
                    var i = new nr, o = e.checkOrientation && "image/jpeg" === n;
                    this.reader = i, i.onload = function (e) {
                      var r = e.target.result, i = {};
                      if (o) {
                        var s = qe(r);
                        s > 1 || !ir ? (i.url = function (A, t) {
                          for (var e, r = [], n = new Uint8Array(A); n.length > 0;) r.push(ze.apply(null, (e = n.subarray(0, 8192), Array.from ? Array.from(e) : We.call(e)))), n = n.subarray(8192);
                          return "data:".concat(t, ";base64,").concat($e(r.join("")))
                        }(r, n), s > 1 && Re(i, function (A) {
                          var t = 0, e = 1, r = 1;
                          switch (A) {
                            case 2:
                              e = -1;
                              break;
                            case 3:
                              t = -180;
                              break;
                            case 4:
                              r = -1;
                              break;
                            case 5:
                              t = 90, r = -1;
                              break;
                            case 6:
                              t = 90;
                              break;
                            case 7:
                              t = 90, e = -1;
                              break;
                            case 8:
                              t = -90
                          }
                          return {rotate: t, scaleX: e, scaleY: r}
                        }(s))) : i.url = ir.createObjectURL(t)
                      } else i.url = r;
                      A.load(i)
                    }, i.onabort = function () {
                      A.fail(new Error("Aborted to read the image with FileReader."))
                    }, i.onerror = function () {
                      A.fail(new Error("Failed to read the image with FileReader."))
                    }, i.onloadend = function () {
                      A.reader = null
                    }, o ? i.readAsArrayBuffer(t) : i.readAsDataURL(t)
                  } else this.fail(new Error("The current browser does not support image compression.")); else this.fail(new Error("The first argument must be an image File or Blob object."))
                } else this.fail(new Error("The first argument must be a File or Blob object."))
              }
            }, {
              key: "load", value: function (A) {
                var t = this, e = this.file, r = this.image;
                r.onload = function () {
                  t.draw(Te(Te({}, A), {}, {naturalWidth: r.naturalWidth, naturalHeight: r.naturalHeight}))
                }, r.onabort = function () {
                  t.fail(new Error("Aborted to load the image."))
                }, r.onerror = function () {
                  t.fail(new Error("Failed to load the image."))
                }, Xe.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Xe.navigator.userAgent) && (r.crossOrigin = "anonymous"), r.alt = e.name, r.src = A.url
              }
            }, {
              key: "draw", value: function (A) {
                var t = this, e = A.naturalWidth, r = A.naturalHeight, n = A.rotate, i = void 0 === n ? 0 : n,
                  o = A.scaleX, s = void 0 === o ? 1 : o, a = A.scaleY, c = void 0 === a ? 1 : a, l = this.file,
                  B = this.image, u = this.options, g = document.createElement("canvas"), h = g.getContext("2d"),
                  w = Math.abs(i) % 180 == 90,
                  f = ("contain" === u.resize || "cover" === u.resize) && Ye(u.width) && Ye(u.height),
                  d = Math.max(u.maxWidth, 0) || 1 / 0, p = Math.max(u.maxHeight, 0) || 1 / 0,
                  Q = Math.max(u.minWidth, 0) || 0, C = Math.max(u.minHeight, 0) || 0, U = e / r, F = u.width,
                  v = u.height;
                if (w) {
                  var m = [p, d];
                  d = m[0], p = m[1];
                  var y = [C, Q];
                  Q = y[0], C = y[1];
                  var H = [v, F];
                  F = H[0], v = H[1]
                }
                f && (U = F / v);
                var E = er({aspectRatio: U, width: d, height: p}, "contain");
                d = E.width, p = E.height;
                var b = er({aspectRatio: U, width: Q, height: C}, "cover");
                if (Q = b.width, C = b.height, f) {
                  var I = er({aspectRatio: U, width: F, height: v}, u.resize);
                  F = I.width, v = I.height
                } else {
                  var L = er({aspectRatio: U, width: F, height: v}), K = L.width;
                  F = void 0 === K ? e : K;
                  var x = L.height;
                  v = void 0 === x ? r : x
                }
                var S = -(F = Math.floor(tr(Math.min(Math.max(F, Q), d)))) / 2,
                  D = -(v = Math.floor(tr(Math.min(Math.max(v, C), p)))) / 2, k = F, _ = v, M = [];
                if (f) {
                  var O, T, V, G,
                    R = er({aspectRatio: U, width: e, height: r}, {contain: "cover", cover: "contain"}[u.resize]);
                  V = R.width, G = R.height, O = (e - V) / 2, T = (r - G) / 2, M.push(O, T, V, G)
                }
                if (M.push(S, D, k, _), w) {
                  var P = [v, F];
                  F = P[0], v = P[1]
                }
                g.width = F, g.height = v, Ze(u.mimeType) || (u.mimeType = l.type);
                var N = "transparent";
                if (l.size > u.convertSize && u.convertTypes.indexOf(u.mimeType) >= 0 && (u.mimeType = "image/jpeg"), "image/jpeg" === u.mimeType && (N = "#fff"), h.fillStyle = N, h.fillRect(0, 0, F, v), u.beforeDraw && u.beforeDraw.call(this, h, g), !this.aborted && (h.save(), h.translate(F / 2, v / 2), h.rotate(i * Math.PI / 180), h.scale(s, c), h.drawImage.apply(h, [B].concat(M)), h.restore(), u.drew && u.drew.call(this, h, g), !this.aborted)) {
                  var J = function (A) {
                    t.aborted || t.done({naturalWidth: e, naturalHeight: r, result: A})
                  };
                  g.toBlob ? g.toBlob(J, u.mimeType, u.quality) : J(Ne(g.toDataURL(u.mimeType, u.quality)))
                }
              }
            }, {
              key: "done", value: function (A) {
                var t, e, r = A.naturalWidth, n = A.naturalHeight, i = A.result, o = this.file, s = this.image,
                  a = this.options;
                if (ir && !a.checkOrientation && ir.revokeObjectURL(s.src), i) if (a.strict && i.size > o.size && a.mimeType === o.type && !(a.width > r || a.height > n || a.minWidth > r || a.minHeight > n || a.maxWidth < r || a.maxHeight < n)) i = o; else {
                  var c = new Date;
                  i.lastModified = c.getTime(), i.lastModifiedDate = c, i.name = o.name, i.name && i.type !== o.type && (i.name = i.name.replace(or, (t = i.type, "jpeg" === (e = Ze(t) ? t.substr(6) : "") && (e = "jpg"), ".".concat(e))))
                } else i = o;
                this.result = i, a.success && a.success.call(this, i)
              }
            }, {
              key: "fail", value: function (A) {
                var t = this.options;
                if (!t.error) throw A;
                t.error.call(this, A)
              }
            }, {
              key: "abort", value: function () {
                this.aborted || (this.aborted = !0, this.reader ? this.reader.abort() : this.image.complete ? this.fail(new Error("The compression process has been aborted.")) : (this.image.onload = null, this.image.onabort()))
              }
            }], r = [{
              key: "noConflict", value: function () {
                return window.Compressor = sr, A
              }
            }, {
              key: "setDefaults", value: function (A) {
                Re(Je, A)
              }
            }], e && Ve(t.prototype, e), r && Ve(t, r), A
          }(), cr = function (A, t, e) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return new Promise((function (n, i) {
              var o = new ar(A, {
                quality: t, success: function (A) {
                  n(o), r && r(A, e)
                }, error: function (A) {
                }
              })
            }))
          }, lr = function () {
            var A = this, t = A.$createElement, e = A._self._c || t;
            return e("div", {staticClass: "mark-w"}, [e("el-tooltip", {
              staticClass: "item",
              attrs: {
                effect: "dark",
                content: A.isMark ? "切换到普通链接模式" : "切换到MarkDown模式",
                placement: "top-start"
              }
            }, [A.isMark ? e("svg", {
              staticClass: "markdown-icon active",
              attrs: {
                t: "1631784688556",
                viewBox: "0 0 1280 1024",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                "p-id": "3242",
                width: "22",
                height: "22"
              },
              on: {click: A.handleMark}
            }, [e("path", {
              attrs: {
                d: "M1187.6 118.2H92.4C41.4 118.2 0 159.6 0 210.4v603c0 51 41.4 92.4 92.4 92.4h1095.4c51 0 92.4-41.4 92.2-92.2V210.4c0-50.8-41.4-92.2-92.4-92.2zM677 721.2H554v-240l-123 153.8-123-153.8v240H184.6V302.8h123l123 153.8 123-153.8h123v418.4z m270.6 6.2L763 512H886V302.8h123V512H1132z",
                "p-id": "3243",
                fill: "#3c3c3c"
              }
            })]) : e("svg", {
              staticClass: "markdown-icon",
              attrs: {
                t: "1631782798077",
                viewBox: "0 0 1024 1024",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                "p-id": "2861",
                width: "22",
                height: "22"
              },
              on: {click: A.handleMark}
            }, [e("path", {
              attrs: {
                d: "M92 192C42.24 192 0 232.128 0 282.016v459.968C0 791.904 42.24 832 92 832h840C981.76 832 1024 791.872 1024 741.984V282.016C1024 232.16 981.76 192 932 192z m0 64h840c16.512 0 28 12.256 28 26.016v459.968c0 13.76-11.52 26.016-28 26.016H92C75.488 768 64 755.744 64 741.984V282.016c0-13.76 11.52-25.984 28-25.984zM160 352v320h96v-212.992l96 127.008 96-127.04V672h96V352h-96l-96 128-96-128z m544 0v160h-96l144 160 144-160h-96v-160z",
                "p-id": "2862",
                fill: "#808080"
              }
            })])]), e("svg", {
              staticClass: "icon",
              attrs: {
                t: "1656940838877",
                viewBox: "0 0 1024 1024",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                "p-id": "11279",
                width: "22",
                height: "22"
              },
              on: {click: A.copyhandle}
            }, [e("path", {
              attrs: {
                d: "M624.5 786.3c92.9 0 168.2-75.3 168.2-168.2V309c0-92.4-75.3-168.2-168.2-168.2H303.6c-92.4 0-168.2 75.3-168.2 168.2v309.1c0 92.4 75.3 168.2 168.2 168.2h320.9zM178.2 618.1V309c0-69.4 56.1-125.5 125.5-125.5h320.9c69.4 0 125.5 56.1 125.5 125.5v309.1c0 69.4-56.1 125.5-125.5 125.5h-321c-69.4 0-125.4-56.1-125.4-125.5z",
                "p-id": "11280"
              }
            }), e("path", {
              attrs: {
                d: "M849.8 295.1v361.5c0 102.7-83.6 186.3-186.3 186.3H279.1v42.7h384.4c126.3 0 229.1-102.8 229.1-229.1V295.1h-42.8zM307.9 361.8h312.3c11.8 0 21.4-9.6 21.4-21.4 0-11.8-9.6-21.4-21.4-21.4H307.9c-11.8 0-21.4 9.6-21.4 21.4 0 11.9 9.6 21.4 21.4 21.4zM307.9 484.6h312.3c11.8 0 21.4-9.6 21.4-21.4 0-11.8-9.6-21.4-21.4-21.4H307.9c-11.8 0-21.4 9.6-21.4 21.4 0 11.9 9.6 21.4 21.4 21.4z",
                "p-id": "11281"
              }
            }), e("path", {
              attrs: {
                d: "M620.2 607.4c11.8 0 21.4-9.6 21.4-21.4 0-11.8-9.6-21.4-21.4-21.4H307.9c-11.8 0-21.4 9.6-21.4 21.4 0 11.8 9.6 21.4 21.4 21.4h312.3z",
                "p-id": "11282"
              }
            })])], 1)
          }, Br = [];
        lr._withStripped = !0;
        var ur = {
          data: function () {
            return {isMark: !1, linktemp: ""}
          },
          props: {link: {type: String, default: ""}},
          watch: {
            defaultCopyType: {
              deep: !0, immediate: !0, handler: function (A, t) {
                this.isMark = A, this.linktemp = this.isMark ? "![](".concat(this.link, ")") : this.link
              }
            }
          },
          computed: t({}, le(Ie, ["defaultCopyType"])),
          methods: {
            handleMark: function () {
              this.isMark = !this.isMark, this.linktemp = this.isMark ? "![](".concat(this.link, ")") : this.link, Ie().$patch({openUploadOutMD: this.isMark})
            }, copyhandle: Ke((function () {
              var A = this, t = this.linktemp;
              this.$copyText(t).then((function () {
                ELEMENT.Message({
                  message: "" !== A.linktemp ? "已复制剪切板：".concat(t) : "复制失败",
                  type: "" !== A.linktemp ? "success" : "error"
                })
              })).catch((function () {
                ELEMENT.Message({message: "复制失败，请手动复制", type: "error"})
              }))
            }), 300, !0)
          }
        }, gr = {}, hr = he(ur, lr, Br, !1, wr, null, null, null);

        function wr(A) {
          for (var t in gr) this[t] = gr[t]
        }

        hr.options.__file = "src/views/svg/MarkDown.vue";
        var fr = A("M", function () {
          return hr.exports
        }()), dr = function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return e("li", {staticClass: "upload-i", style: A.styleCount}, [e("img", {
            attrs: {
              "data-fancybox": "gallery",
              src: A.picBlob(A.file.raw),
              alt: "",
              srcset: ""
            }
          }), e("div", [e("h2", {staticClass: "up_title"}, [A._v(A._s(A.file.name) + " "), e("span", {staticClass: "up-span"}, [e("del", [A._v(A._s((A.file.size / 1024).toFixed(2) + "KB"))])]), A.CompressData.iscompress ? e("span", {
            staticClass: "up-span",
            staticStyle: {color: "var(--b2-theme-c)"}
          }, [A._v(A._s(A.newSize + "KB"))]) : A._e()]), "0" === A.svgType ? e("svg", {
            staticClass: "icon",
            attrs: {
              t: "1657877004609",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "1342",
              width: "22",
              height: "22"
            },
            on: {
              click: function (t) {
                return A.changeHandleFile(A.pid)
              }
            }
          }, [e("path", {
            attrs: {
              d: "M783 312.5v510c0 16.6-13.4 30-30 30H273c-16.6 0-30-13.4-30-30v-510h540m60-60H183v600c0 33.1 26.9 60 60 60h540c33.1 0 60-26.9 60-60v-600z",
              fill: "var(--b2-close)",
              "p-id": "1343"
            }
          }), e("path", {
            attrs: {
              d: "M333 251v-78h360v78H333m-60 60h420c33.1 0 60-26.9 60-60v-78c0-33.1-26.9-60-60-60H333c-33.1 0-60 26.9-60 60v138z",
              fill: "var(--b2-close)",
              "p-id": "1344"
            }
          }), e("path", {
            attrs: {
              d: "M882 252H145c-16.6 0-30 13.4-30 30s13.4 30 30 30h737c16.6 0 30-13.4 30-30s-13.4-30-30-30zM392.8 432.5h60v300h-60zM572.8 432.5h60v300h-60z",
              fill: "var(--b2-close)",
              "p-id": "1345"
            }
          })]) : "2" === A.svgType ? e("MarkDown", {
            staticClass: "home-md",
            attrs: {link: A.linkUrl}
          }) : A._e(), e("UploadTaggle", {attrs: {isshow: A.svgType}}), e("div", {staticClass: "config-warp"}, [e("span", {
            staticClass: "up-span",
            staticStyle: {"margin-right": "auto"}
          }, [A._v(A._s(A.TimeTran(A.file.uid)))]), "0" === A.svgType ? e("span", {
            staticClass: "up-span",
            on: {
              click: function (t) {
                return A.setShowSettingBtn(!0)
              }
            }
          }, [A._v(A._s(A.CompressData.iscompress ? "已开启压缩" : "未开启压缩"))]) : A._e(), e("span", {
            staticClass: "up-span",
            on: {
              click: function (t) {
                return A.setwarterMark(A.pid)
              }
            }
          }, [A._v("水印设置")])])], 1)])
        }, pr = [];
        dr._withStripped = !0;
        var Qr = {
          data: function () {
            return {
              compressMsg: {iscompress: !1, rank: .8},
              oldSize: "",
              newSize: "",
              afterFile: {},
              svgType: "0",
              linkUrl: ""
            }
          },
          emits: ["changefilelist", "watermarkhandle"],
          props: {
            file: {
              type: Object, default: function () {
                return {}
              }
            }, pid: {type: Number, default: 0}, styleCount: {type: String}
          },
          computed: t(t(t(t({}, le(Ie, ["toFile"])), le(Ie, ["prefixStatus"])), le(Ie, ["CompressData"])), {}, {
            picBlob: function () {
              return function (A) {
                return window.URL.createObjectURL(A)
              }
            }, TimeTran: function () {
              return function (A) {
                return Le(A)
              }
            }, fileListTo: function () {
              return this.filelist.map((function (A) {
                return window.URL.createObjectURL(A.raw)
              }))
            }
          }),
          mounted: function () {
            this.compressMsg = this.CompressData, this.UploadFile(this.file.raw)
          },
          components: {UploadTaggle: Me, MarkDown: fr},
          methods: t(t({}, Be(Ie, ["setShowSettingBtn"])), {}, {
            uploadSumit: function () {
              var A = this;
              return new Promise((function (t) {
                if ("0" === A.svgType) {
                  A.svgType = "1";
                  var e = A.afterFile, r = new FormData, n = localStorage.getItem("authmsg"),
                    i = Object.assign(JSON.parse(n), {tofile: A.toFile});
                  for (var o in r.append("file_", e), i) r.append(o, i[o]);
                  Fe(r).then((function (e) {
                    A.svgType = e.data.status ? "3" : "2", A.linkUrl = A.prefixStatus + e.data.fileName, t(e.data)
                  }))
                } else t({msg: "当前图片已上传"})
              }))
            }, changeHandleFile: function (A) {
              this.$emit("changefilelist", A)
            }, setwarterMark: function (A) {
              this.$emit("watermarkhandle", A)
            }, UploadFile: function (A) {
              var t = this;
              return o(r().mark((function e() {
                var n, i;
                return r().wrap((function (e) {
                  for (; ;) switch (e.prev = e.next) {
                    case 0:
                      if (!(n = t).compressMsg.iscompress) {
                        e.next = 8;
                        break
                      }
                      return e.next = 4, cr(A, n.compressMsg.rank);
                    case 4:
                      (i = e.sent).result && (n.newSize = (i.result.size / 1024).toFixed(2), n.afterFile = i.result), e.next = 9;
                      break;
                    case 8:
                      n.afterFile = A;
                    case 9:
                    case"end":
                      return e.stop()
                  }
                }), e)
              })))()
            }
          })
        }, Cr = {}, Ur = he(Qr, dr, pr, !1, Fr, "6fa37f62", null, null);

        function Fr(A) {
          for (var t in Cr) this[t] = Cr[t]
        }

        Ur.options.__file = "src/views/home/components/UploadList.vue";
        var vr = function () {
            return Ur.exports
          }(), mr = Object.defineProperty, yr = Object.getOwnPropertySymbols, Hr = Object.prototype.hasOwnProperty,
          Er = Object.prototype.propertyIsEnumerable, br = function (A, t, e) {
            return t in A ? mr(A, t, {enumerable: !0, configurable: !0, writable: !0, value: e}) : A[t] = e
          }, Ir = function (A, t) {
            for (var e in t || (t = {})) Hr.call(t, e) && br(A, e, t[e]);
            if (yr) {
              var r, n = B(yr(t));
              try {
                for (n.s(); !(r = n.n()).done;) {
                  e = r.value;
                  Er.call(t, e) && br(A, e, t[e])
                }
              } catch (i) {
                n.e(i)
              } finally {
                n.f()
              }
            }
            return A
          }, Lr = function (A, t, e) {
            return br(A, "symbol" !== l(t) ? t + "" : t, e), e
          }, Kr = function (A, t, e) {
            return new Promise((function (r, n) {
              var i = function (A) {
                try {
                  s(e.next(A))
                } catch (t) {
                  n(t)
                }
              }, o = function (A) {
                try {
                  s(e.throw(A))
                } catch (t) {
                  n(t)
                }
              }, s = function (A) {
                return A.done ? r(A.value) : Promise.resolve(A.value).then(i, o)
              };
              s((e = e.apply(A, t)).next())
            }))
          }, xr = {
            gapX: 100,
            gapY: 100,
            offsetLeft: 0,
            offsetTop: 0,
            width: 120,
            height: 64,
            opacity: .15,
            rotate: -22,
            fontSize: 16,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "300",
            fontColor: "#000",
            fontFamily: "sans-serif",
            textAlign: "center",
            textBaseline: "alphabetic",
            monitor: !0,
            zIndex: 9999,
            mode: "interval",
            pack: !0,
            blindFontSize: 16,
            blindOpacity: .005
          }, Sr = "data-watermark-tag", Dr = {childList: !0, subtree: !0, attributeFilter: ["style", "class", Sr]};

        function kr(A) {
          return A.split("-").slice(1).reduce((function (A, t, e) {
            return 0 === e ? t : "".concat(A).concat(t[0].toUpperCase() + t.slice(1))
          }))
        }

        var _r = function (A) {
          var t = "";
          return Object.keys(A).forEach((function (e) {
            var r = e.replace(/([A-Z])/g, "-$1").toLowerCase();
            t += "".concat(r, ":").concat(A[e], ";")
          })), t
        }, Mr = function (A) {
          return window.btoa(decodeURI(encodeURIComponent(A)))
        }, Or = function () {
          var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return "".concat(Mr(A), "-").concat((new Date).getTime(), "-").concat(Math.floor(Math.random() * Math.pow(10, 8)))
        }, Tr = function (A, t) {
          var e, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            n = arguments.length > 3 ? arguments[3] : void 0;
          if ("string" == typeof A) {
            if (!(e = document.getElementById(A))) throw new Error("水印挂载节点未找到，请检查#".concat(A, "是否存在"))
          } else e = null != A ? A : document.body;
          e.setAttribute(Sr, t);
          var i = Ir({position: "relative"}, r);
          return n || delete i.position, e.setAttribute("style", _r(i)), e
        };

        function Vr(A) {
          var t = A.text, e = A.gapX, r = A.gapY, i = A.offsetTop, o = A.offsetLeft, s = A.width, a = A.height,
            c = A.rotate, l = A.opacity, B = A.fontSize, u = A.fontStyle, g = A.fontVariant, h = A.fontWeight,
            w = A.fontFamily, f = A.fontColor, d = A.textAlign, p = A.textBaseline, Q = A.image, C = A.blindText,
            U = A.blindFontSize, F = A.blindOpacity;
          return new Promise((function (A, v) {
            var m = document.createElement("canvas"), y = m.getContext("2d"), H = 1 * (Number(e) + Number(s)),
              E = 1 * (Number(r) + Number(a)), b = Number(o) || Number(e) / 2, I = Number(i) || Number(r) / 2;
            if (m.setAttribute("width", "".concat(H, "px")), m.setAttribute("height", "".concat(E, "px")), y) {
              var L = 1 * s, K = 1 * a;
              if (y.translate(1 * b, 1 * I), y.rotate(Math.PI / 180 * Number(c)), C && (y.globalAlpha = F, y.font = "".concat(U, "px normal"), y.fillText(C, 0, 0)), y.globalAlpha = l, Q) {
                var x = new Image;
                return x.crossOrigin = "anonymous", x.referrerPolicy = "no-referrer", x.src = Q, void (x.onload = function () {
                  y.drawImage(x, 0, 0, L, K), A({url: y.canvas.toDataURL(), width: H, height: E})
                })
              }
              var S = Array.isArray(t) ? t : [t], D = S.map((function (A) {
                return y.measureText(A).width
              })), k = Math.max.apply(Math, n(D)), _ = 1 * Number(B);
              y.textAlign = d, y.textBaseline = p, y.fillStyle = f, y.font = V("".concat(_, "px")), k > s && (y.font = V("".concat(_ / 2, "px")));
              var M = _ + 5, O = (K - (B * S.length + 5 * (S.length - 1))) / 2;
              O = O < 0 ? 0 : O;
              for (var T = 0; T < S.length; T++) y.fillText(S[T] || "", L / 2, O + M * T);
              A({url: y.canvas.toDataURL(), width: H, height: E})
            }

            function V(A) {
              return "".concat(u, " ").concat(g, " ").concat(h, " ").concat(A, " ").concat(w)
            }

            return v()
          }))
        }

        var Gr = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
          Rr = function () {
            function A() {
              var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              s(this, A), Lr(this, "options"), Lr(this, "container"), Lr(this, "watermarkContent"), Lr(this, "watermarkDom"), Lr(this, "style"), Lr(this, "watermarkTag"), Lr(this, "shadowRoot"), Lr(this, "mutationObserver"), Lr(this, "_isAgainRender", (function (A) {
                if ("attributes" === A.type) {
                  if (A.attributeName === Sr) return !0;
                  if (t.watermarkTag === t._getNodeRandomId(A.target)) return !0
                }
                return !(!A.removedNodes.length || t.watermarkTag !== t._getNodeRandomId(A.removedNodes[0]))
              })), Lr(this, "_getNodeRandomId", (function (A) {
                var t;
                return null == (t = null == A ? void 0 : A.dataset) ? void 0 : t[kr(Sr)]
              })), Lr(this, "_destroyMutationObserver", (function () {
                t.mutationObserver && (t.mutationObserver.takeRecords(), t.mutationObserver.disconnect(), t.mutationObserver = null)
              })), Lr(this, "_getWatermarkDom", (function (A) {
                return Kr(t, null, r().mark((function t() {
                  var e, n;
                  return r().wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                      case 0:
                        return this.watermarkDom || (this.watermarkDom = document.createElement("div")), "number" == typeof A && A && (this.style.height = "".concat(A, "px")), t.next = 4, Vr(this.options);
                      case 4:
                        return (null == (e = t.sent) ? void 0 : e.url) && (n = e.url, "repeat" === this.options.mode ? this.style.backgroundImage = "url(".concat(n, ")") : (this.style.backgroundImage = "url(".concat(n, "), url(").concat(n, ")"), this.style.backgroundRepeat = "repeat, repeat", this.style.backgroundPosition = "".concat(e.width / 2, "px ").concat(e.height / 2, "px, 0 0")), this.options.container || (this.style.position = "fixed", this.style.height = void 0), this.watermarkDom.setAttribute("style", _r(this.style))), this.watermarkDom.setAttribute(Sr, this.watermarkTag), t.abrupt("return", this.watermarkDom);
                      case 8:
                      case"end":
                        return t.stop()
                    }
                  }), t, this)
                })))
              })), Lr(this, "_getWatermarkHeight", (function () {
                if (!t.container) return 0;
                var A = 0, e = t.options.container ? t.container.parentNode : t.container, r = e.scrollHeight,
                  n = void 0 === r ? 0 : r, i = e.clientHeight, o = void 0 === i ? 0 : i;
                return n > o && (A = Math.max(n, o)), A
              })), this.options = Object.assign({}, xr, e), this.style = {
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                pointerEvents: "none",
                overflow: "hidden",
                backgroundColor: "transparent",
                backgroundRepeat: "repeat"
              }, this.style.zIndex = this.options.zIndex, this.watermarkTag = Or("watermark"), this.mutationObserver = null, this._render()
            }

            return c(A, [{
              key: "update", value: function () {
                var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.options = Ir(Ir({}, this.options), A), this.style.zIndex = this.options.zIndex, this._render()
              }
            }, {
              key: "show", value: function () {
                this.watermarkDom && (this.style.display = "block", this.watermarkDom.setAttribute("style", _r(this.style)))
              }
            }, {
              key: "hide", value: function () {
                this.watermarkDom && (this.style.display = "none", this.watermarkDom.setAttribute("style", _r(this.style)))
              }
            }, {
              key: "destroy", value: function () {
                this.shadowRoot = void 0, this.watermarkContent && (this.watermarkContent.remove(), this.watermarkContent = void 0), this.watermarkDom && (this.watermarkDom.remove(), this.watermarkDom = void 0), this._destroyMutationObserver()
              }
            }, {
              key: "_render", value: function () {
                return Kr(this, null, r().mark((function A() {
                  var t, e, n, i = this;
                  return r().wrap((function (A) {
                    for (; ;) switch (A.prev = A.next) {
                      case 0:
                        return this._destroyMutationObserver(), this.container = Tr(this.options.container, this.watermarkTag, this.options.containerStyle, this.options.pack), this.watermarkContent || (this.watermarkContent = (r = this.watermarkTag, o = void 0, (o = document.createElement("div")).setAttribute("style", _r({pointerEvents: "none"})), o.setAttribute(Sr, r), o), this.container.append(this.watermarkContent)), t = this._getWatermarkHeight(), A.next = 6, this._getWatermarkDom(t);
                      case 6:
                        if (this.watermarkDom = A.sent, this.watermarkContent) for (e = this.watermarkContent.childNodes || [], n = 0; n < e.length; n++) this.watermarkContent.removeChild(e[n]);
                        "function" == typeof this.watermarkContent.attachShadow ? this.shadowRoot || (this.shadowRoot = this.watermarkContent.attachShadow({mode: "open"})) : this.shadowRoot = this.watermarkContent, this.shadowRoot.append(this.watermarkDom), Gr && this.options.monitor && (this.mutationObserver = new Gr((function (A) {
                          A.forEach((function (A) {
                            if (i._isAgainRender(A)) return i.destroy(), void i._render()
                          }))
                        })), this.mutationObserver.observe(this.container, Dr), this.shadowRoot && this.mutationObserver.observe(this.shadowRoot, Dr));
                      case 11:
                      case"end":
                        return A.stop()
                    }
                    var r, o
                  }), A, this)
                })))
              }
            }]), A
          }(), Pr = {
            name: "Watermark", props: {
              options: {
                type: Object, default: function () {
                  return {}
                }
              }, visible: {type: Boolean, default: !0}, isBody: {type: Boolean, default: !1}
            }, setup: function (A) {
              var t = Object.assign, e = hA(), r = hA();

              function n() {
                r.value ? r.value.update(t({}, A.options, {})) : (r.value = new Rr(t({}, A.options, {container: A.isBody ? void 0 : e.value})), A.visible || r.value.hide())
              }

              return OA(A.options, (function () {
                n()
              })), OA((function () {
                return A.visible
              }), (function (A) {
                var t, e;
                A ? null == (t = r.value) || t.show() : null == (e = r.value) || e.hide()
              })), bA((function () {
                n()
              })), IA((function () {
                var A;
                null == (A = r.value) || A.destroy()
              })), {root: e, watermark: r}
            }, render: function () {
              if (this.$props.isBody) return JA("div");
              var A = "function" == typeof this.$slots.default ? this.$slots.default() : this.$slots.default;
              return JA("div", {ref: "root"}, A)
            }
          }, Nr = function () {
            var A = this, t = A.$createElement, e = A._self._c || t;
            return e("div", {staticClass: "text-set"}, [e("svg", {
              staticClass: "icon",
              attrs: {
                t: "1657790440978",
                viewBox: "0 0 1024 1024",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                "p-id": "1320",
                width: "22",
                height: "22"
              },
              on: {click: A.handleBold}
            }, [e("path", {
              attrs: {
                d: "M582.83 125.77c78.2 0 138.52 17.89 183.23 55.86 42.43 35.75 63.66 83.8 63.66 145.25 0 44.68-11.16 82.66-33.5 113.95-22.34 29.05-52.52 51.39-92.73 65.91 52.5 10.05 92.73 31.27 119.52 63.68 26.82 32.39 40.23 75.95 40.23 129.59 0 80.43-27.93 138.52-82.66 176.5-46.93 31.3-112.84 46.93-197.75 46.93h-364.2V125.77h364.2zM340.4 464.29h210.02c55.86 0 96.09-10.07 120.66-29.05 24.59-20.11 36.86-51.39 36.86-93.84 0-40.23-12.27-69.27-36.86-87.16-24.57-18.98-64.8-27.91-118.41-27.91H340.4v237.96z m0 358.62h225.68c51.39 0 91.59-8.93 120.64-24.57 35.75-21.23 54.75-54.75 54.75-100.57 0-46.91-14.52-81.55-42.45-102.77-27.93-21.23-71.5-31.27-129.59-31.27H340.4v259.18z",
                "p-id": "1321",
                fill: A.svgBC ? "var(--b2-theme-c)" : "var(--b2-text)"
              }
            })]), e("svg", {
              staticClass: "icon",
              attrs: {
                t: "1657794066811",
                viewBox: "0 0 1024 1024",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                "p-id": "2125",
                width: "22",
                height: "22"
              },
              on: {click: A.handleInt}
            }, [e("path", {
              attrs: {
                d: "M656.64 165.184l-186.432 695.296-92.736-24.896 186.432-695.232z",
                fill: A.svgIC ? "var(--b2-theme-c)" : "var(--b2-text)",
                "p-id": "2126"
              }
            }), e("path", {
              attrs: {
                d: "M787.2 224m-48 0l-288 0q-48 0-48-48l0 0q0-48 48-48l288 0q48 0 48 48l0 0q0 48-48 48Z",
                fill: A.svgIC ? "var(--b2-theme-c)" : "var(--b2-text)",
                "p-id": "2127"
              }
            }), e("path", {
              attrs: {
                d: "M620.8 896m-48 0l-288 0q-48 0-48-48l0 0q0-48 48-48l288 0q48 0 48 48l0 0q0 48-48 48Z",
                fill: A.svgIC ? "var(--b2-theme-c)" : "var(--b2-text)",
                "p-id": "2128"
              }
            })]), e("el-color-picker", {
              attrs: {size: "mini"},
              on: {"active-change": A.handleChangeColor},
              model: {
                value: A.color, callback: function (t) {
                  A.color = t
                }, expression: "color"
              }
            }), e("el-select", {
              attrs: {placeholder: "请选择"},
              on: {change: A.handleFontFamily},
              model: {
                value: A.Textvalue, callback: function (t) {
                  A.Textvalue = t
                }, expression: "Textvalue"
              }
            }, A._l(A.options, (function (A) {
              return e("el-option", {key: A.value, attrs: {label: A.label, value: A.value}})
            })), 1)], 1)
          }, Jr = [];
        Nr._withStripped = !0;
        var Xr = {
          data: function () {
            return {
              svgBC: !1,
              svgIC: !1,
              Textvalue: "sans-serif",
              color: "",
              options: [{label: "默认字体", value: "sans-serif"}, {
                label: "微软雅黑",
                value: "Microsoft Yahei"
              }, {label: "宋体", value: "SimSun"}, {label: "仿宋", value: "FangSong"}, {
                label: "幼圆 ",
                value: "YouYuan"
              }, {label: "黑体", value: "SimHei"}]
            }
          }, emits: ["textEvent"], methods: {
            handleText: function (A, t) {
              this.$emit("textEvent", {label: A, value: t})
            }, handleBold: function () {
              this.svgBC = !this.svgBC;
              var A = this.svgBC ? "600" : "400";
              this.handleText("fontWeight", A)
            }, handleInt: function () {
              this.svgIC = !this.svgIC;
              var A = this.svgIC ? "italic" : "normal";
              this.handleText("fontStyle", A)
            }, handleChangeColor: function (A) {
              var t = A;
              this.handleText("fontColor", t)
            }, handleFontFamily: function (A) {
              var t = A;
              this.handleText("fontFamily", t)
            }
          }
        }, Yr = {}, Wr = he(Xr, Nr, Jr, !1, jr, "68280400", null, null);

        function jr(A) {
          for (var t in Yr) this[t] = Yr[t]
        }

        Wr.options.__file = "src/views/svg/TextSet.vue";
        var Zr = function () {
          return Wr.exports
        }(), zr = function (A, t) {
          return zr = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (A, t) {
            A.__proto__ = t
          } || function (A, t) {
            for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (A[e] = t[e])
          }, zr(A, t)
        };
        /*!
             * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
             * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
             * Released under MIT License
             */

        /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
        function $r(A, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

          function e() {
            this.constructor = A
          }

          zr(A, t), A.prototype = null === t ? Object.create(t) : (e.prototype = t.prototype, new e)
        }

        var qr = function () {
          return qr = Object.assign || function (A) {
            for (var t, e = 1, r = arguments.length; e < r; e++) for (var n in t = arguments[e]) Object.prototype.hasOwnProperty.call(t, n) && (A[n] = t[n]);
            return A
          }, qr.apply(this, arguments)
        };

        function An(A, t, e, r) {
          return new (e || (e = Promise))((function (n, i) {
            function o(A) {
              try {
                a(r.next(A))
              } catch (t) {
                i(t)
              }
            }

            function s(A) {
              try {
                a(r.throw(A))
              } catch (t) {
                i(t)
              }
            }

            function a(A) {
              var t;
              A.done ? n(A.value) : (t = A.value, t instanceof e ? t : new e((function (A) {
                A(t)
              }))).then(o, s)
            }

            a((r = r.apply(A, t || [])).next())
          }))
        }

        function tn(A, t) {
          var e, r, n, i, o = {
            label: 0, sent: function () {
              if (1 & n[0]) throw n[1];
              return n[1]
            }, trys: [], ops: []
          };
          return i = {
            next: s(0),
            throw: s(1),
            return: s(2)
          }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this
          }), i;

          function s(i) {
            return function (s) {
              return function (i) {
                if (e) throw new TypeError("Generator is already executing.");
                for (; o;) try {
                  if (e = 1, r && (n = 2 & i[0] ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, i[1])).done) return n;
                  switch (r = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                    case 0:
                    case 1:
                      n = i;
                      break;
                    case 4:
                      return o.label++, {value: i[1], done: !1};
                    case 5:
                      o.label++, r = i[1], i = [0];
                      continue;
                    case 7:
                      i = o.ops.pop(), o.trys.pop();
                      continue;
                    default:
                      if (!(n = o.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                        o = 0;
                        continue
                      }
                      if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                        o.label = i[1];
                        break
                      }
                      if (6 === i[0] && o.label < n[1]) {
                        o.label = n[1], n = i;
                        break
                      }
                      if (n && o.label < n[2]) {
                        o.label = n[2], o.ops.push(i);
                        break
                      }
                      n[2] && o.ops.pop(), o.trys.pop();
                      continue
                  }
                  i = t.call(A, o)
                } catch (s) {
                  i = [6, s], r = 0
                } finally {
                  e = n = 0
                }
                if (5 & i[0]) throw i[1];
                return {value: i[0] ? i[1] : void 0, done: !0}
              }([i, s])
            }
          }
        }

        for (var en = function () {
          function A(A, t, e, r) {
            this.left = A, this.top = t, this.width = e, this.height = r
          }

          return A.prototype.add = function (t, e, r, n) {
            return new A(this.left + t, this.top + e, this.width + r, this.height + n)
          }, A.fromClientRect = function (t, e) {
            return new A(e.left + t.windowBounds.left, e.top + t.windowBounds.top, e.width, e.height)
          }, A.fromDOMRectList = function (t, e) {
            var r = Array.from(e).find((function (A) {
              return 0 !== A.width
            }));
            return r ? new A(r.left + t.windowBounds.left, r.top + t.windowBounds.top, r.width, r.height) : A.EMPTY
          }, A.EMPTY = new A(0, 0, 0, 0), A
        }(), rn = function (A, t) {
          return en.fromClientRect(A, t.getBoundingClientRect())
        }, nn = function (A) {
          for (var t = [], e = 0, r = A.length; e < r;) {
            var n = A.charCodeAt(e++);
            if (n >= 55296 && n <= 56319 && e < r) {
              var i = A.charCodeAt(e++);
              56320 == (64512 & i) ? t.push(((1023 & n) << 10) + (1023 & i) + 65536) : (t.push(n), e--)
            } else t.push(n)
          }
          return t
        }, on = function () {
          for (var A = [], t = 0; t < arguments.length; t++) A[t] = arguments[t];
          if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
          var e = A.length;
          if (!e) return "";
          for (var r = [], n = -1, i = ""; ++n < e;) {
            var o = A[n];
            o <= 65535 ? r.push(o) : (o -= 65536, r.push(55296 + (o >> 10), o % 1024 + 56320)), (n + 1 === e || r.length > 16384) && (i += String.fromCharCode.apply(String, r), r.length = 0)
          }
          return i
        }, sn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", an = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), cn = 0; cn < sn.length; cn++) an[sn.charCodeAt(cn)] = cn;
        for (var ln = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Bn = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), un = 0; un < ln.length; un++) Bn[ln.charCodeAt(un)] = un;
        for (var gn = function (A, t, e) {
          return A.slice ? A.slice(t, e) : new Uint16Array(Array.prototype.slice.call(A, t, e))
        }, hn = function () {
          function A(A, t, e, r, n, i) {
            this.initialValue = A, this.errorValue = t, this.highStart = e, this.highValueIndex = r, this.index = n, this.data = i
          }

          return A.prototype.get = function (A) {
            var t;
            if (A >= 0) {
              if (A < 55296 || A > 56319 && A <= 65535) return t = ((t = this.index[A >> 5]) << 2) + (31 & A), this.data[t];
              if (A <= 65535) return t = ((t = this.index[2048 + (A - 55296 >> 5)]) << 2) + (31 & A), this.data[t];
              if (A < this.highStart) return t = 2080 + (A >> 11), t = this.index[t], t += A >> 5 & 63, t = ((t = this.index[t]) << 2) + (31 & A), this.data[t];
              if (A <= 1114111) return this.data[this.highValueIndex]
            }
            return this.errorValue
          }, A
        }(), wn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", fn = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), dn = 0; dn < wn.length; dn++) fn[wn.charCodeAt(dn)] = dn;
        var pn = 10, Qn = 13, Cn = 15, Un = 17, Fn = 18, vn = 19, mn = 20, yn = 21, Hn = 22, En = 24, bn = 25, In = 26,
          Ln = 27, Kn = 28, xn = 30, Sn = 32, Dn = 33, kn = 34, _n = 35, Mn = 37, On = 38, Tn = 39, Vn = 40, Gn = 42,
          Rn = [9001, 65288], Pn = "×", Nn = "÷", Jn = function (A, t) {
            var e, r, n, i = function (A) {
                var t, e, r, n, i, o = .75 * A.length, s = A.length, a = 0;
                "=" === A[A.length - 1] && (o--, "=" === A[A.length - 2] && o--);
                var c = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(o) : new Array(o),
                  l = Array.isArray(c) ? c : new Uint8Array(c);
                for (t = 0; t < s; t += 4) e = Bn[A.charCodeAt(t)], r = Bn[A.charCodeAt(t + 1)], n = Bn[A.charCodeAt(t + 2)], i = Bn[A.charCodeAt(t + 3)], l[a++] = e << 2 | r >> 4, l[a++] = (15 & r) << 4 | n >> 2, l[a++] = (3 & n) << 6 | 63 & i;
                return c
              }(A), o = Array.isArray(i) ? function (A) {
                for (var t = A.length, e = [], r = 0; r < t; r += 4) e.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
                return e
              }(i) : new Uint32Array(i), s = Array.isArray(i) ? function (A) {
                for (var t = A.length, e = [], r = 0; r < t; r += 2) e.push(A[r + 1] << 8 | A[r]);
                return e
              }(i) : new Uint16Array(i), a = gn(s, 12, o[4] / 2),
              c = 2 === o[5] ? gn(s, (24 + o[4]) / 2) : (e = o, r = Math.ceil((24 + o[4]) / 4), e.slice ? e.slice(r, n) : new Uint32Array(Array.prototype.slice.call(e, r, n)));
            return new hn(o[0], o[1], o[2], o[3], a, c)
          }("KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA=="),
          Xn = [xn, 36], Yn = [1, 2, 3, 5], Wn = [pn, 8], jn = [Ln, In], Zn = Yn.concat(Wn), zn = [On, Tn, Vn, kn, _n],
          $n = [Cn, Qn], qn = function (A, t, e, r) {
            var n = r[e];
            if (Array.isArray(A) ? -1 !== A.indexOf(n) : A === n) for (var i = e; i <= r.length;) {
              if ((a = r[++i]) === t) return !0;
              if (a !== pn) break
            }
            if (n === pn) for (i = e; i > 0;) {
              var o = r[--i];
              if (Array.isArray(A) ? -1 !== A.indexOf(o) : A === o) for (var s = e; s <= r.length;) {
                var a;
                if ((a = r[++s]) === t) return !0;
                if (a !== pn) break
              }
              if (o !== pn) break
            }
            return !1
          }, Ai = function (A, t) {
            for (var e = A; e >= 0;) {
              var r = t[e];
              if (r !== pn) return r;
              e--
            }
            return 0
          }, ti = function (A, t, e, r, n) {
            if (0 === e[r]) return Pn;
            var i = r - 1;
            if (Array.isArray(n) && !0 === n[i]) return Pn;
            var o = i - 1, s = i + 1, a = t[i], c = o >= 0 ? t[o] : 0, l = t[s];
            if (2 === a && 3 === l) return Pn;
            if (-1 !== Yn.indexOf(a)) return "!";
            if (-1 !== Yn.indexOf(l)) return Pn;
            if (-1 !== Wn.indexOf(l)) return Pn;
            if (8 === Ai(i, t)) return Nn;
            if (11 === Jn.get(A[i])) return Pn;
            if ((a === Sn || a === Dn) && 11 === Jn.get(A[s])) return Pn;
            if (7 === a || 7 === l) return Pn;
            if (9 === a) return Pn;
            if (-1 === [pn, Qn, Cn].indexOf(a) && 9 === l) return Pn;
            if (-1 !== [Un, Fn, vn, En, Kn].indexOf(l)) return Pn;
            if (Ai(i, t) === Hn) return Pn;
            if (qn(23, Hn, i, t)) return Pn;
            if (qn([Un, Fn], yn, i, t)) return Pn;
            if (qn(12, 12, i, t)) return Pn;
            if (a === pn) return Nn;
            if (23 === a || 23 === l) return Pn;
            if (16 === l || 16 === a) return Nn;
            if (-1 !== [Qn, Cn, yn].indexOf(l) || 14 === a) return Pn;
            if (36 === c && -1 !== $n.indexOf(a)) return Pn;
            if (a === Kn && 36 === l) return Pn;
            if (l === mn) return Pn;
            if (-1 !== Xn.indexOf(l) && a === bn || -1 !== Xn.indexOf(a) && l === bn) return Pn;
            if (a === Ln && -1 !== [Mn, Sn, Dn].indexOf(l) || -1 !== [Mn, Sn, Dn].indexOf(a) && l === In) return Pn;
            if (-1 !== Xn.indexOf(a) && -1 !== jn.indexOf(l) || -1 !== jn.indexOf(a) && -1 !== Xn.indexOf(l)) return Pn;
            if (-1 !== [Ln, In].indexOf(a) && (l === bn || -1 !== [Hn, Cn].indexOf(l) && t[s + 1] === bn) || -1 !== [Hn, Cn].indexOf(a) && l === bn || a === bn && -1 !== [bn, Kn, En].indexOf(l)) return Pn;
            if (-1 !== [bn, Kn, En, Un, Fn].indexOf(l)) for (var B = i; B >= 0;) {
              if ((u = t[B]) === bn) return Pn;
              if (-1 === [Kn, En].indexOf(u)) break;
              B--
            }
            if (-1 !== [Ln, In].indexOf(l)) for (B = -1 !== [Un, Fn].indexOf(a) ? o : i; B >= 0;) {
              var u;
              if ((u = t[B]) === bn) return Pn;
              if (-1 === [Kn, En].indexOf(u)) break;
              B--
            }
            if (On === a && -1 !== [On, Tn, kn, _n].indexOf(l) || -1 !== [Tn, kn].indexOf(a) && -1 !== [Tn, Vn].indexOf(l) || -1 !== [Vn, _n].indexOf(a) && l === Vn) return Pn;
            if (-1 !== zn.indexOf(a) && -1 !== [mn, In].indexOf(l) || -1 !== zn.indexOf(l) && a === Ln) return Pn;
            if (-1 !== Xn.indexOf(a) && -1 !== Xn.indexOf(l)) return Pn;
            if (a === En && -1 !== Xn.indexOf(l)) return Pn;
            if (-1 !== Xn.concat(bn).indexOf(a) && l === Hn && -1 === Rn.indexOf(A[s]) || -1 !== Xn.concat(bn).indexOf(l) && a === Fn) return Pn;
            if (41 === a && 41 === l) {
              for (var g = e[i], h = 1; g > 0 && 41 === t[--g];) h++;
              if (h % 2 != 0) return Pn
            }
            return a === Sn && l === Dn ? Pn : Nn
          }, ei = function (A, t) {
            t || (t = {lineBreak: "normal", wordBreak: "normal"});
            var e = function (A, t) {
              void 0 === t && (t = "strict");
              var e = [], r = [], n = [];
              return A.forEach((function (A, i) {
                var o = Jn.get(A);
                if (o > 50 ? (n.push(!0), o -= 50) : n.push(!1), -1 !== ["normal", "auto", "loose"].indexOf(t) && -1 !== [8208, 8211, 12316, 12448].indexOf(A)) return r.push(i), e.push(16);
                if (4 === o || 11 === o) {
                  if (0 === i) return r.push(i), e.push(xn);
                  var s = e[i - 1];
                  return -1 === Zn.indexOf(s) ? (r.push(r[i - 1]), e.push(s)) : (r.push(i), e.push(xn))
                }
                return r.push(i), 31 === o ? e.push("strict" === t ? yn : Mn) : o === Gn || 29 === o ? e.push(xn) : 43 === o ? A >= 131072 && A <= 196605 || A >= 196608 && A <= 262141 ? e.push(Mn) : e.push(xn) : void e.push(o)
              })), [r, e, n]
            }(A, t.lineBreak), r = e[0], n = e[1], i = e[2];
            "break-all" !== t.wordBreak && "break-word" !== t.wordBreak || (n = n.map((function (A) {
              return -1 !== [bn, xn, Gn].indexOf(A) ? Mn : A
            })));
            var o = "keep-all" === t.wordBreak ? i.map((function (t, e) {
              return t && A[e] >= 19968 && A[e] <= 40959
            })) : void 0;
            return [r, n, o]
          }, ri = function () {
            function A(A, t, e, r) {
              this.codePoints = A, this.required = "!" === t, this.start = e, this.end = r
            }

            return A.prototype.slice = function () {
              return on.apply(void 0, this.codePoints.slice(this.start, this.end))
            }, A
          }(), ni = 45, ii = 43, oi = -1, si = function (A) {
            return A >= 48 && A <= 57
          }, ai = function (A) {
            return si(A) || A >= 65 && A <= 70 || A >= 97 && A <= 102
          }, ci = function (A) {
            return 10 === A || 9 === A || 32 === A
          }, li = function (A) {
            return function (A) {
              return function (A) {
                return A >= 97 && A <= 122
              }(A) || function (A) {
                return A >= 65 && A <= 90
              }(A)
            }(A) || function (A) {
              return A >= 128
            }(A) || 95 === A
          }, Bi = function (A) {
            return li(A) || si(A) || A === ni
          }, ui = function (A) {
            return A >= 0 && A <= 8 || 11 === A || A >= 14 && A <= 31 || 127 === A
          }, gi = function (A, t) {
            return 92 === A && 10 !== t
          }, hi = function (A, t, e) {
            return A === ni ? li(t) || gi(t, e) : !!li(A) || !(92 !== A || !gi(A, t))
          }, wi = function (A, t, e) {
            return A === ii || A === ni ? !!si(t) || 46 === t && si(e) : si(46 === A ? t : A)
          }, fi = function (A) {
            var t = 0, e = 1;
            A[t] !== ii && A[t] !== ni || (A[t] === ni && (e = -1), t++);
            for (var r = []; si(A[t]);) r.push(A[t++]);
            var n = r.length ? parseInt(on.apply(void 0, r), 10) : 0;
            46 === A[t] && t++;
            for (var i = []; si(A[t]);) i.push(A[t++]);
            var o = i.length, s = o ? parseInt(on.apply(void 0, i), 10) : 0;
            69 !== A[t] && 101 !== A[t] || t++;
            var a = 1;
            A[t] !== ii && A[t] !== ni || (A[t] === ni && (a = -1), t++);
            for (var c = []; si(A[t]);) c.push(A[t++]);
            var l = c.length ? parseInt(on.apply(void 0, c), 10) : 0;
            return e * (n + s * Math.pow(10, -o)) * Math.pow(10, a * l)
          }, di = {type: 2}, pi = {type: 3}, Qi = {type: 4}, Ci = {type: 13}, Ui = {type: 8}, Fi = {type: 21},
          vi = {type: 9}, mi = {type: 10}, yi = {type: 11}, Hi = {type: 12}, Ei = {type: 14}, bi = {type: 23},
          Ii = {type: 1}, Li = {type: 25}, Ki = {type: 24}, xi = {type: 26}, Si = {type: 27}, Di = {type: 28},
          ki = {type: 29}, _i = {type: 31}, Mi = {type: 32}, Oi = function () {
            function A() {
              this._value = []
            }

            return A.prototype.write = function (A) {
              this._value = this._value.concat(nn(A))
            }, A.prototype.read = function () {
              for (var A = [], t = this.consumeToken(); t !== Mi;) A.push(t), t = this.consumeToken();
              return A
            }, A.prototype.consumeToken = function () {
              var A = this.consumeCodePoint();
              switch (A) {
                case 34:
                  return this.consumeStringToken(34);
                case 35:
                  var t = this.peekCodePoint(0), e = this.peekCodePoint(1), r = this.peekCodePoint(2);
                  if (Bi(t) || gi(e, r)) {
                    var n = hi(t, e, r) ? 2 : 1;
                    return {type: 5, value: this.consumeName(), flags: n}
                  }
                  break;
                case 36:
                  if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), Ci;
                  break;
                case 39:
                  return this.consumeStringToken(39);
                case 40:
                  return di;
                case 41:
                  return pi;
                case 42:
                  if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), Ei;
                  break;
                case ii:
                  if (wi(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A), this.consumeNumericToken();
                  break;
                case 44:
                  return Qi;
                case ni:
                  var i = A, o = this.peekCodePoint(0), s = this.peekCodePoint(1);
                  if (wi(i, o, s)) return this.reconsumeCodePoint(A), this.consumeNumericToken();
                  if (hi(i, o, s)) return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
                  if (o === ni && 62 === s) return this.consumeCodePoint(), this.consumeCodePoint(), Ki;
                  break;
                case 46:
                  if (wi(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A), this.consumeNumericToken();
                  break;
                case 47:
                  if (42 === this.peekCodePoint(0)) for (this.consumeCodePoint(); ;) {
                    var a = this.consumeCodePoint();
                    if (42 === a && 47 === (a = this.consumeCodePoint())) return this.consumeToken();
                    if (a === oi) return this.consumeToken()
                  }
                  break;
                case 58:
                  return xi;
                case 59:
                  return Si;
                case 60:
                  if (33 === this.peekCodePoint(0) && this.peekCodePoint(1) === ni && this.peekCodePoint(2) === ni) return this.consumeCodePoint(), this.consumeCodePoint(), Li;
                  break;
                case 64:
                  var c = this.peekCodePoint(0), l = this.peekCodePoint(1), B = this.peekCodePoint(2);
                  if (hi(c, l, B)) return {type: 7, value: this.consumeName()};
                  break;
                case 91:
                  return Di;
                case 92:
                  if (gi(A, this.peekCodePoint(0))) return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
                  break;
                case 93:
                  return ki;
                case 61:
                  if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), Ui;
                  break;
                case 123:
                  return yi;
                case 125:
                  return Hi;
                case 117:
                case 85:
                  var u = this.peekCodePoint(0), g = this.peekCodePoint(1);
                  return u !== ii || !ai(g) && 63 !== g || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
                case 124:
                  if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), vi;
                  if (124 === this.peekCodePoint(0)) return this.consumeCodePoint(), Fi;
                  break;
                case 126:
                  if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), mi;
                  break;
                case oi:
                  return Mi
              }
              return ci(A) ? (this.consumeWhiteSpace(), _i) : si(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : li(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : {
                type: 6,
                value: on(A)
              }
            }, A.prototype.consumeCodePoint = function () {
              var A = this._value.shift();
              return void 0 === A ? -1 : A
            }, A.prototype.reconsumeCodePoint = function (A) {
              this._value.unshift(A)
            }, A.prototype.peekCodePoint = function (A) {
              return A >= this._value.length ? -1 : this._value[A]
            }, A.prototype.consumeUnicodeRangeToken = function () {
              for (var A = [], t = this.consumeCodePoint(); ai(t) && A.length < 6;) A.push(t), t = this.consumeCodePoint();
              for (var e = !1; 63 === t && A.length < 6;) A.push(t), t = this.consumeCodePoint(), e = !0;
              if (e) return {
                type: 30, start: parseInt(on.apply(void 0, A.map((function (A) {
                  return 63 === A ? 48 : A
                }))), 16), end: parseInt(on.apply(void 0, A.map((function (A) {
                  return 63 === A ? 70 : A
                }))), 16)
              };
              var r = parseInt(on.apply(void 0, A), 16);
              if (this.peekCodePoint(0) === ni && ai(this.peekCodePoint(1))) {
                this.consumeCodePoint(), t = this.consumeCodePoint();
                for (var n = []; ai(t) && n.length < 6;) n.push(t), t = this.consumeCodePoint();
                return {type: 30, start: r, end: parseInt(on.apply(void 0, n), 16)}
              }
              return {type: 30, start: r, end: r}
            }, A.prototype.consumeIdentLikeToken = function () {
              var A = this.consumeName();
              return "url" === A.toLowerCase() && 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), this.consumeUrlToken()) : 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), {
                type: 19,
                value: A
              }) : {type: 20, value: A}
            }, A.prototype.consumeUrlToken = function () {
              var A = [];
              if (this.consumeWhiteSpace(), this.peekCodePoint(0) === oi) return {type: 22, value: ""};
              var t = this.peekCodePoint(0);
              if (39 === t || 34 === t) {
                var e = this.consumeStringToken(this.consumeCodePoint());
                return 0 === e.type && (this.consumeWhiteSpace(), this.peekCodePoint(0) === oi || 41 === this.peekCodePoint(0)) ? (this.consumeCodePoint(), {
                  type: 22,
                  value: e.value
                }) : (this.consumeBadUrlRemnants(), bi)
              }
              for (; ;) {
                var r = this.consumeCodePoint();
                if (r === oi || 41 === r) return {type: 22, value: on.apply(void 0, A)};
                if (ci(r)) return this.consumeWhiteSpace(), this.peekCodePoint(0) === oi || 41 === this.peekCodePoint(0) ? (this.consumeCodePoint(), {
                  type: 22,
                  value: on.apply(void 0, A)
                }) : (this.consumeBadUrlRemnants(), bi);
                if (34 === r || 39 === r || 40 === r || ui(r)) return this.consumeBadUrlRemnants(), bi;
                if (92 === r) {
                  if (!gi(r, this.peekCodePoint(0))) return this.consumeBadUrlRemnants(), bi;
                  A.push(this.consumeEscapedCodePoint())
                } else A.push(r)
              }
            }, A.prototype.consumeWhiteSpace = function () {
              for (; ci(this.peekCodePoint(0));) this.consumeCodePoint()
            }, A.prototype.consumeBadUrlRemnants = function () {
              for (; ;) {
                var A = this.consumeCodePoint();
                if (41 === A || A === oi) return;
                gi(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint()
              }
            }, A.prototype.consumeStringSlice = function (A) {
              for (var t = ""; A > 0;) {
                var e = Math.min(5e4, A);
                t += on.apply(void 0, this._value.splice(0, e)), A -= e
              }
              return this._value.shift(), t
            }, A.prototype.consumeStringToken = function (A) {
              for (var t = "", e = 0; ;) {
                var r = this._value[e];
                if (r === oi || void 0 === r || r === A) return {type: 0, value: t += this.consumeStringSlice(e)};
                if (10 === r) return this._value.splice(0, e), Ii;
                if (92 === r) {
                  var n = this._value[e + 1];
                  n !== oi && void 0 !== n && (10 === n ? (t += this.consumeStringSlice(e), e = -1, this._value.shift()) : gi(r, n) && (t += this.consumeStringSlice(e), t += on(this.consumeEscapedCodePoint()), e = -1))
                }
                e++
              }
            }, A.prototype.consumeNumber = function () {
              var A = [], t = 4, e = this.peekCodePoint(0);
              for (e !== ii && e !== ni || A.push(this.consumeCodePoint()); si(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
              e = this.peekCodePoint(0);
              var r = this.peekCodePoint(1);
              if (46 === e && si(r)) for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = 8; si(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
              e = this.peekCodePoint(0), r = this.peekCodePoint(1);
              var n = this.peekCodePoint(2);
              if ((69 === e || 101 === e) && ((r === ii || r === ni) && si(n) || si(r))) for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = 8; si(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
              return [fi(A), t]
            }, A.prototype.consumeNumericToken = function () {
              var A = this.consumeNumber(), t = A[0], e = A[1], r = this.peekCodePoint(0), n = this.peekCodePoint(1),
                i = this.peekCodePoint(2);
              return hi(r, n, i) ? {
                type: 15,
                number: t,
                flags: e,
                unit: this.consumeName()
              } : 37 === r ? (this.consumeCodePoint(), {type: 16, number: t, flags: e}) : {type: 17, number: t, flags: e}
            }, A.prototype.consumeEscapedCodePoint = function () {
              var A = this.consumeCodePoint();
              if (ai(A)) {
                for (var t = on(A); ai(this.peekCodePoint(0)) && t.length < 6;) t += on(this.consumeCodePoint());
                ci(this.peekCodePoint(0)) && this.consumeCodePoint();
                var e = parseInt(t, 16);
                return 0 === e || function (A) {
                  return A >= 55296 && A <= 57343
                }(e) || e > 1114111 ? 65533 : e
              }
              return A === oi ? 65533 : A
            }, A.prototype.consumeName = function () {
              for (var A = ""; ;) {
                var t = this.consumeCodePoint();
                if (Bi(t)) A += on(t); else {
                  if (!gi(t, this.peekCodePoint(0))) return this.reconsumeCodePoint(t), A;
                  A += on(this.consumeEscapedCodePoint())
                }
              }
            }, A
          }(), Ti = function () {
            function A(A) {
              this._tokens = A
            }

            return A.create = function (t) {
              var e = new Oi;
              return e.write(t), new A(e.read())
            }, A.parseValue = function (t) {
              return A.create(t).parseComponentValue()
            }, A.parseValues = function (t) {
              return A.create(t).parseComponentValues()
            }, A.prototype.parseComponentValue = function () {
              for (var A = this.consumeToken(); 31 === A.type;) A = this.consumeToken();
              if (32 === A.type) throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
              this.reconsumeToken(A);
              var t = this.consumeComponentValue();
              do {
                A = this.consumeToken()
              } while (31 === A.type);
              if (32 === A.type) return t;
              throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")
            }, A.prototype.parseComponentValues = function () {
              for (var A = []; ;) {
                var t = this.consumeComponentValue();
                if (32 === t.type) return A;
                A.push(t), A.push()
              }
            }, A.prototype.consumeComponentValue = function () {
              var A = this.consumeToken();
              switch (A.type) {
                case 11:
                case 28:
                case 2:
                  return this.consumeSimpleBlock(A.type);
                case 19:
                  return this.consumeFunction(A)
              }
              return A
            }, A.prototype.consumeSimpleBlock = function (A) {
              for (var t = {type: A, values: []}, e = this.consumeToken(); ;) {
                if (32 === e.type || Wi(e, A)) return t;
                this.reconsumeToken(e), t.values.push(this.consumeComponentValue()), e = this.consumeToken()
              }
            }, A.prototype.consumeFunction = function (A) {
              for (var t = {name: A.value, values: [], type: 18}; ;) {
                var e = this.consumeToken();
                if (32 === e.type || 3 === e.type) return t;
                this.reconsumeToken(e), t.values.push(this.consumeComponentValue())
              }
            }, A.prototype.consumeToken = function () {
              var A = this._tokens.shift();
              return void 0 === A ? Mi : A
            }, A.prototype.reconsumeToken = function (A) {
              this._tokens.unshift(A)
            }, A
          }(), Vi = function (A) {
            return 15 === A.type
          }, Gi = function (A) {
            return 17 === A.type
          }, Ri = function (A) {
            return 20 === A.type
          }, Pi = function (A) {
            return 0 === A.type
          }, Ni = function (A, t) {
            return Ri(A) && A.value === t
          }, Ji = function (A) {
            return 31 !== A.type
          }, Xi = function (A) {
            return 31 !== A.type && 4 !== A.type
          }, Yi = function (A) {
            var t = [], e = [];
            return A.forEach((function (A) {
              if (4 === A.type) {
                if (0 === e.length) throw new Error("Error parsing function args, zero tokens for arg");
                return t.push(e), void (e = [])
              }
              31 !== A.type && e.push(A)
            })), e.length && t.push(e), t
          }, Wi = function (A, t) {
            return 11 === t && 12 === A.type || (28 === t && 29 === A.type || 2 === t && 3 === A.type)
          }, ji = function (A) {
            return 17 === A.type || 15 === A.type
          }, Zi = function (A) {
            return 16 === A.type || ji(A)
          }, zi = function (A) {
            return A.length > 1 ? [A[0], A[1]] : [A[0]]
          }, $i = {type: 17, number: 0, flags: 4}, qi = {type: 16, number: 50, flags: 4},
          Ao = {type: 16, number: 100, flags: 4}, to = function (A, t, e) {
            var r = A[0], n = A[1];
            return [eo(r, t), eo(void 0 !== n ? n : r, e)]
          }, eo = function (A, t) {
            if (16 === A.type) return A.number / 100 * t;
            if (Vi(A)) switch (A.unit) {
              case"rem":
              case"em":
                return 16 * A.number;
              default:
                return A.number
            }
            return A.number
          }, ro = "grad", no = "turn", io = function (A, t) {
            if (15 === t.type) switch (t.unit) {
              case"deg":
                return Math.PI * t.number / 180;
              case ro:
                return Math.PI / 200 * t.number;
              case"rad":
                return t.number;
              case no:
                return 2 * Math.PI * t.number
            }
            throw new Error("Unsupported angle type")
          }, oo = function (A) {
            return 15 === A.type && ("deg" === A.unit || A.unit === ro || "rad" === A.unit || A.unit === no)
          }, so = function (A) {
            switch (A.filter(Ri).map((function (A) {
              return A.value
            })).join(" ")) {
              case"to bottom right":
              case"to right bottom":
              case"left top":
              case"top left":
                return [$i, $i];
              case"to top":
              case"bottom":
                return ao(0);
              case"to bottom left":
              case"to left bottom":
              case"right top":
              case"top right":
                return [$i, Ao];
              case"to right":
              case"left":
                return ao(90);
              case"to top left":
              case"to left top":
              case"right bottom":
              case"bottom right":
                return [Ao, Ao];
              case"to bottom":
              case"top":
                return ao(180);
              case"to top right":
              case"to right top":
              case"left bottom":
              case"bottom left":
                return [Ao, $i];
              case"to left":
              case"right":
                return ao(270)
            }
            return 0
          }, ao = function (A) {
            return Math.PI * A / 180
          }, co = function (A, t) {
            if (18 === t.type) {
              var e = po[t.name];
              if (void 0 === e) throw new Error('Attempting to parse an unsupported color function "' + t.name + '"');
              return e(A, t.values)
            }
            if (5 === t.type) {
              if (3 === t.value.length) {
                var r = t.value.substring(0, 1), n = t.value.substring(1, 2), i = t.value.substring(2, 3);
                return uo(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(i + i, 16), 1)
              }
              if (4 === t.value.length) {
                r = t.value.substring(0, 1), n = t.value.substring(1, 2), i = t.value.substring(2, 3);
                var o = t.value.substring(3, 4);
                return uo(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(i + i, 16), parseInt(o + o, 16) / 255)
              }
              if (6 === t.value.length) {
                r = t.value.substring(0, 2), n = t.value.substring(2, 4), i = t.value.substring(4, 6);
                return uo(parseInt(r, 16), parseInt(n, 16), parseInt(i, 16), 1)
              }
              if (8 === t.value.length) {
                r = t.value.substring(0, 2), n = t.value.substring(2, 4), i = t.value.substring(4, 6), o = t.value.substring(6, 8);
                return uo(parseInt(r, 16), parseInt(n, 16), parseInt(i, 16), parseInt(o, 16) / 255)
              }
            }
            if (20 === t.type) {
              var s = Co[t.value.toUpperCase()];
              if (void 0 !== s) return s
            }
            return Co.TRANSPARENT
          }, lo = function (A) {
            return 0 == (255 & A)
          }, Bo = function (A) {
            var t = 255 & A, e = 255 & A >> 8, r = 255 & A >> 16, n = 255 & A >> 24;
            return t < 255 ? "rgba(" + n + "," + r + "," + e + "," + t / 255 + ")" : "rgb(" + n + "," + r + "," + e + ")"
          }, uo = function (A, t, e, r) {
            return (A << 24 | t << 16 | e << 8 | Math.round(255 * r) << 0) >>> 0
          }, go = function (A, t) {
            if (17 === A.type) return A.number;
            if (16 === A.type) {
              var e = 3 === t ? 1 : 255;
              return 3 === t ? A.number / 100 * e : Math.round(A.number / 100 * e)
            }
            return 0
          }, ho = function (A, t) {
            var e = t.filter(Xi);
            if (3 === e.length) {
              var r = e.map(go), n = r[0], i = r[1], o = r[2];
              return uo(n, i, o, 1)
            }
            if (4 === e.length) {
              var s = e.map(go), a = (n = s[0], i = s[1], o = s[2], s[3]);
              return uo(n, i, o, a)
            }
            return 0
          };

        function wo(A, t, e) {
          return e < 0 && (e += 1), e >= 1 && (e -= 1), e < 1 / 6 ? (t - A) * e * 6 + A : e < .5 ? t : e < 2 / 3 ? 6 * (t - A) * (2 / 3 - e) + A : A
        }

        var fo = function (A, t) {
            var e = t.filter(Xi), r = e[0], n = e[1], i = e[2], o = e[3],
              s = (17 === r.type ? ao(r.number) : io(A, r)) / (2 * Math.PI), a = Zi(n) ? n.number / 100 : 0,
              c = Zi(i) ? i.number / 100 : 0, l = void 0 !== o && Zi(o) ? eo(o, 1) : 1;
            if (0 === a) return uo(255 * c, 255 * c, 255 * c, 1);
            var B = c <= .5 ? c * (a + 1) : c + a - c * a, u = 2 * c - B, g = wo(u, B, s + 1 / 3), h = wo(u, B, s),
              w = wo(u, B, s - 1 / 3);
            return uo(255 * g, 255 * h, 255 * w, l)
          }, po = {hsl: fo, hsla: fo, rgb: ho, rgba: ho}, Qo = function (A, t) {
            return co(A, Ti.create(t).parseComponentValue())
          }, Co = {
            ALICEBLUE: 4042850303,
            ANTIQUEWHITE: 4209760255,
            AQUA: 16777215,
            AQUAMARINE: 2147472639,
            AZURE: 4043309055,
            BEIGE: 4126530815,
            BISQUE: 4293182719,
            BLACK: 255,
            BLANCHEDALMOND: 4293643775,
            BLUE: 65535,
            BLUEVIOLET: 2318131967,
            BROWN: 2771004159,
            BURLYWOOD: 3736635391,
            CADETBLUE: 1604231423,
            CHARTREUSE: 2147418367,
            CHOCOLATE: 3530104575,
            CORAL: 4286533887,
            CORNFLOWERBLUE: 1687547391,
            CORNSILK: 4294499583,
            CRIMSON: 3692313855,
            CYAN: 16777215,
            DARKBLUE: 35839,
            DARKCYAN: 9145343,
            DARKGOLDENROD: 3095837695,
            DARKGRAY: 2846468607,
            DARKGREEN: 6553855,
            DARKGREY: 2846468607,
            DARKKHAKI: 3182914559,
            DARKMAGENTA: 2332068863,
            DARKOLIVEGREEN: 1433087999,
            DARKORANGE: 4287365375,
            DARKORCHID: 2570243327,
            DARKRED: 2332033279,
            DARKSALMON: 3918953215,
            DARKSEAGREEN: 2411499519,
            DARKSLATEBLUE: 1211993087,
            DARKSLATEGRAY: 793726975,
            DARKSLATEGREY: 793726975,
            DARKTURQUOISE: 13554175,
            DARKVIOLET: 2483082239,
            DEEPPINK: 4279538687,
            DEEPSKYBLUE: 12582911,
            DIMGRAY: 1768516095,
            DIMGREY: 1768516095,
            DODGERBLUE: 512819199,
            FIREBRICK: 2988581631,
            FLORALWHITE: 4294635775,
            FORESTGREEN: 579543807,
            FUCHSIA: 4278255615,
            GAINSBORO: 3705462015,
            GHOSTWHITE: 4177068031,
            GOLD: 4292280575,
            GOLDENROD: 3668254975,
            GRAY: 2155905279,
            GREEN: 8388863,
            GREENYELLOW: 2919182335,
            GREY: 2155905279,
            HONEYDEW: 4043305215,
            HOTPINK: 4285117695,
            INDIANRED: 3445382399,
            INDIGO: 1258324735,
            IVORY: 4294963455,
            KHAKI: 4041641215,
            LAVENDER: 3873897215,
            LAVENDERBLUSH: 4293981695,
            LAWNGREEN: 2096890111,
            LEMONCHIFFON: 4294626815,
            LIGHTBLUE: 2916673279,
            LIGHTCORAL: 4034953471,
            LIGHTCYAN: 3774873599,
            LIGHTGOLDENRODYELLOW: 4210742015,
            LIGHTGRAY: 3553874943,
            LIGHTGREEN: 2431553791,
            LIGHTGREY: 3553874943,
            LIGHTPINK: 4290167295,
            LIGHTSALMON: 4288707327,
            LIGHTSEAGREEN: 548580095,
            LIGHTSKYBLUE: 2278488831,
            LIGHTSLATEGRAY: 2005441023,
            LIGHTSLATEGREY: 2005441023,
            LIGHTSTEELBLUE: 2965692159,
            LIGHTYELLOW: 4294959359,
            LIME: 16711935,
            LIMEGREEN: 852308735,
            LINEN: 4210091775,
            MAGENTA: 4278255615,
            MAROON: 2147483903,
            MEDIUMAQUAMARINE: 1724754687,
            MEDIUMBLUE: 52735,
            MEDIUMORCHID: 3126187007,
            MEDIUMPURPLE: 2473647103,
            MEDIUMSEAGREEN: 1018393087,
            MEDIUMSLATEBLUE: 2070474495,
            MEDIUMSPRINGGREEN: 16423679,
            MEDIUMTURQUOISE: 1221709055,
            MEDIUMVIOLETRED: 3340076543,
            MIDNIGHTBLUE: 421097727,
            MINTCREAM: 4127193855,
            MISTYROSE: 4293190143,
            MOCCASIN: 4293178879,
            NAVAJOWHITE: 4292783615,
            NAVY: 33023,
            OLDLACE: 4260751103,
            OLIVE: 2155872511,
            OLIVEDRAB: 1804477439,
            ORANGE: 4289003775,
            ORANGERED: 4282712319,
            ORCHID: 3664828159,
            PALEGOLDENROD: 4008225535,
            PALEGREEN: 2566625535,
            PALETURQUOISE: 2951671551,
            PALEVIOLETRED: 3681588223,
            PAPAYAWHIP: 4293907967,
            PEACHPUFF: 4292524543,
            PERU: 3448061951,
            PINK: 4290825215,
            PLUM: 3718307327,
            POWDERBLUE: 2967529215,
            PURPLE: 2147516671,
            REBECCAPURPLE: 1714657791,
            RED: 4278190335,
            ROSYBROWN: 3163525119,
            ROYALBLUE: 1097458175,
            SADDLEBROWN: 2336560127,
            SALMON: 4202722047,
            SANDYBROWN: 4104413439,
            SEAGREEN: 780883967,
            SEASHELL: 4294307583,
            SIENNA: 2689740287,
            SILVER: 3233857791,
            SKYBLUE: 2278484991,
            SLATEBLUE: 1784335871,
            SLATEGRAY: 1887473919,
            SLATEGREY: 1887473919,
            SNOW: 4294638335,
            SPRINGGREEN: 16744447,
            STEELBLUE: 1182971135,
            TAN: 3535047935,
            TEAL: 8421631,
            THISTLE: 3636451583,
            TOMATO: 4284696575,
            TRANSPARENT: 0,
            TURQUOISE: 1088475391,
            VIOLET: 4001558271,
            WHEAT: 4125012991,
            WHITE: 4294967295,
            WHITESMOKE: 4126537215,
            YELLOW: 4294902015,
            YELLOWGREEN: 2597139199
          }, Uo = {
            name: "background-clip", initialValue: "border-box", prefix: !1, type: 1, parse: function (A, t) {
              return t.map((function (A) {
                if (Ri(A)) switch (A.value) {
                  case"padding-box":
                    return 1;
                  case"content-box":
                    return 2
                }
                return 0
              }))
            }
          }, Fo = {name: "background-color", initialValue: "transparent", prefix: !1, type: 3, format: "color"},
          vo = function (A, t) {
            var e = co(A, t[0]), r = t[1];
            return r && Zi(r) ? {color: e, stop: r} : {color: e, stop: null}
          }, mo = function (A, t) {
            var e = A[0], r = A[A.length - 1];
            null === e.stop && (e.stop = $i), null === r.stop && (r.stop = Ao);
            for (var n = [], i = 0, o = 0; o < A.length; o++) {
              var s = A[o].stop;
              if (null !== s) {
                var a = eo(s, t);
                a > i ? n.push(a) : n.push(i), i = a
              } else n.push(null)
            }
            var c = null;
            for (o = 0; o < n.length; o++) {
              var l = n[o];
              if (null === l) null === c && (c = o); else if (null !== c) {
                for (var B = o - c, u = (l - n[c - 1]) / (B + 1), g = 1; g <= B; g++) n[c + g - 1] = u * g;
                c = null
              }
            }
            return A.map((function (A, e) {
              return {color: A.color, stop: Math.max(Math.min(1, n[e] / t), 0)}
            }))
          }, yo = function (A, t, e) {
            var r = "number" == typeof A ? A : function (A, t, e) {
                var r = t / 2, n = e / 2, i = eo(A[0], t) - r, o = n - eo(A[1], e);
                return (Math.atan2(o, i) + 2 * Math.PI) % (2 * Math.PI)
              }(A, t, e), n = Math.abs(t * Math.sin(r)) + Math.abs(e * Math.cos(r)), i = t / 2, o = e / 2, s = n / 2,
              a = Math.sin(r - Math.PI / 2) * s, c = Math.cos(r - Math.PI / 2) * s;
            return [n, i - c, i + c, o - a, o + a]
          }, Ho = function (A, t) {
            return Math.sqrt(A * A + t * t)
          }, Eo = function (A, t, e, r, n) {
            return [[0, 0], [0, t], [A, 0], [A, t]].reduce((function (A, t) {
              var i = t[0], o = t[1], s = Ho(e - i, r - o);
              return (n ? s < A.optimumDistance : s > A.optimumDistance) ? {optimumCorner: t, optimumDistance: s} : A
            }), {optimumDistance: n ? 1 / 0 : -1 / 0, optimumCorner: null}).optimumCorner
          }, bo = function (A, t) {
            var e = ao(180), r = [];
            return Yi(t).forEach((function (t, n) {
              if (0 === n) {
                var i = t[0];
                if (20 === i.type && -1 !== ["top", "left", "right", "bottom"].indexOf(i.value)) return void (e = so(t));
                if (oo(i)) return void (e = (io(A, i) + ao(270)) % ao(360))
              }
              var o = vo(A, t);
              r.push(o)
            })), {angle: e, stops: r, type: 1}
          }, Io = "closest-side", Lo = "farthest-side", Ko = "closest-corner", xo = "farthest-corner", So = "circle",
          Do = "ellipse", ko = "cover", _o = "contain", Mo = function (A, t) {
            var e = 0, r = 3, n = [], i = [];
            return Yi(t).forEach((function (t, o) {
              var s = !0;
              if (0 === o ? s = t.reduce((function (A, t) {
                if (Ri(t)) switch (t.value) {
                  case"center":
                    return i.push(qi), !1;
                  case"top":
                  case"left":
                    return i.push($i), !1;
                  case"right":
                  case"bottom":
                    return i.push(Ao), !1
                } else if (Zi(t) || ji(t)) return i.push(t), !1;
                return A
              }), s) : 1 === o && (s = t.reduce((function (A, t) {
                if (Ri(t)) switch (t.value) {
                  case So:
                    return e = 0, !1;
                  case Do:
                    return e = 1, !1;
                  case _o:
                  case Io:
                    return r = 0, !1;
                  case Lo:
                    return r = 1, !1;
                  case Ko:
                    return r = 2, !1;
                  case ko:
                  case xo:
                    return r = 3, !1
                } else if (ji(t) || Zi(t)) return Array.isArray(r) || (r = []), r.push(t), !1;
                return A
              }), s)), s) {
                var a = vo(A, t);
                n.push(a)
              }
            })), {size: r, shape: e, stops: n, position: i, type: 2}
          }, Oo = function (A, t) {
            if (22 === t.type) {
              var e = {url: t.value, type: 0};
              return A.cache.addImage(t.value), e
            }
            if (18 === t.type) {
              var r = Vo[t.name];
              if (void 0 === r) throw new Error('Attempting to parse an unsupported image function "' + t.name + '"');
              return r(A, t.values)
            }
            throw new Error("Unsupported image type " + t.type)
          };
        var To, Vo = {
          "linear-gradient": function (A, t) {
            var e = ao(180), r = [];
            return Yi(t).forEach((function (t, n) {
              if (0 === n) {
                var i = t[0];
                if (20 === i.type && "to" === i.value) return void (e = so(t));
                if (oo(i)) return void (e = io(A, i))
              }
              var o = vo(A, t);
              r.push(o)
            })), {angle: e, stops: r, type: 1}
          },
          "-moz-linear-gradient": bo,
          "-ms-linear-gradient": bo,
          "-o-linear-gradient": bo,
          "-webkit-linear-gradient": bo,
          "radial-gradient": function (A, t) {
            var e = 0, r = 3, n = [], i = [];
            return Yi(t).forEach((function (t, o) {
              var s = !0;
              if (0 === o) {
                var a = !1;
                s = t.reduce((function (A, t) {
                  if (a) if (Ri(t)) switch (t.value) {
                    case"center":
                      return i.push(qi), A;
                    case"top":
                    case"left":
                      return i.push($i), A;
                    case"right":
                    case"bottom":
                      return i.push(Ao), A
                  } else (Zi(t) || ji(t)) && i.push(t); else if (Ri(t)) switch (t.value) {
                    case So:
                      return e = 0, !1;
                    case Do:
                      return e = 1, !1;
                    case"at":
                      return a = !0, !1;
                    case Io:
                      return r = 0, !1;
                    case ko:
                    case Lo:
                      return r = 1, !1;
                    case _o:
                    case Ko:
                      return r = 2, !1;
                    case xo:
                      return r = 3, !1
                  } else if (ji(t) || Zi(t)) return Array.isArray(r) || (r = []), r.push(t), !1;
                  return A
                }), s)
              }
              if (s) {
                var c = vo(A, t);
                n.push(c)
              }
            })), {size: r, shape: e, stops: n, position: i, type: 2}
          },
          "-moz-radial-gradient": Mo,
          "-ms-radial-gradient": Mo,
          "-o-radial-gradient": Mo,
          "-webkit-radial-gradient": Mo,
          "-webkit-gradient": function (A, t) {
            var e = ao(180), r = [], n = 1;
            return Yi(t).forEach((function (t, e) {
              var i = t[0];
              if (0 === e) {
                if (Ri(i) && "linear" === i.value) return void (n = 1);
                if (Ri(i) && "radial" === i.value) return void (n = 2)
              }
              if (18 === i.type) if ("from" === i.name) {
                var o = co(A, i.values[0]);
                r.push({stop: $i, color: o})
              } else if ("to" === i.name) {
                o = co(A, i.values[0]);
                r.push({stop: Ao, color: o})
              } else if ("color-stop" === i.name) {
                var s = i.values.filter(Xi);
                if (2 === s.length) {
                  o = co(A, s[1]);
                  var a = s[0];
                  Gi(a) && r.push({stop: {type: 16, number: 100 * a.number, flags: a.flags}, color: o})
                }
              }
            })), 1 === n ? {angle: (e + ao(180)) % ao(360), stops: r, type: n} : {
              size: 3,
              shape: 0,
              stops: r,
              position: [],
              type: n
            }
          }
        }, Go = {
          name: "background-image", initialValue: "none", type: 1, prefix: !1, parse: function (A, t) {
            if (0 === t.length) return [];
            var e = t[0];
            return 20 === e.type && "none" === e.value ? [] : t.filter((function (A) {
              return Xi(A) && function (A) {
                return !(20 === A.type && "none" === A.value || 18 === A.type && !Vo[A.name])
              }(A)
            })).map((function (t) {
              return Oo(A, t)
            }))
          }
        }, Ro = {
          name: "background-origin", initialValue: "border-box", prefix: !1, type: 1, parse: function (A, t) {
            return t.map((function (A) {
              if (Ri(A)) switch (A.value) {
                case"padding-box":
                  return 1;
                case"content-box":
                  return 2
              }
              return 0
            }))
          }
        }, Po = {
          name: "background-position", initialValue: "0% 0%", type: 1, prefix: !1, parse: function (A, t) {
            return Yi(t).map((function (A) {
              return A.filter(Zi)
            })).map(zi)
          }
        }, No = {
          name: "background-repeat", initialValue: "repeat", prefix: !1, type: 1, parse: function (A, t) {
            return Yi(t).map((function (A) {
              return A.filter(Ri).map((function (A) {
                return A.value
              })).join(" ")
            })).map(Jo)
          }
        }, Jo = function (A) {
          switch (A) {
            case"no-repeat":
              return 1;
            case"repeat-x":
            case"repeat no-repeat":
              return 2;
            case"repeat-y":
            case"no-repeat repeat":
              return 3;
            default:
              return 0
          }
        };
        !function (A) {
          A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover"
        }(To || (To = {}));
        var Xo, Yo = {
            name: "background-size", initialValue: "0", prefix: !1, type: 1, parse: function (A, t) {
              return Yi(t).map((function (A) {
                return A.filter(Wo)
              }))
            }
          }, Wo = function (A) {
            return Ri(A) || Zi(A)
          }, jo = function (A) {
            return {name: "border-" + A + "-color", initialValue: "transparent", prefix: !1, type: 3, format: "color"}
          }, Zo = jo("top"), zo = jo("right"), $o = jo("bottom"), qo = jo("left"), As = function (A) {
            return {
              name: "border-radius-" + A, initialValue: "0 0", prefix: !1, type: 1, parse: function (A, t) {
                return zi(t.filter(Zi))
              }
            }
          }, ts = As("top-left"), es = As("top-right"), rs = As("bottom-right"), ns = As("bottom-left"),
          is = function (A) {
            return {
              name: "border-" + A + "-style", initialValue: "solid", prefix: !1, type: 2, parse: function (A, t) {
                switch (t) {
                  case"none":
                    return 0;
                  case"dashed":
                    return 2;
                  case"dotted":
                    return 3;
                  case"double":
                    return 4
                }
                return 1
              }
            }
          }, os = is("top"), ss = is("right"), as = is("bottom"), cs = is("left"), ls = function (A) {
            return {
              name: "border-" + A + "-width", initialValue: "0", type: 0, prefix: !1, parse: function (A, t) {
                return Vi(t) ? t.number : 0
              }
            }
          }, Bs = ls("top"), us = ls("right"), gs = ls("bottom"), hs = ls("left"),
          ws = {name: "color", initialValue: "transparent", prefix: !1, type: 3, format: "color"}, fs = {
            name: "direction", initialValue: "ltr", prefix: !1, type: 2, parse: function (A, t) {
              return "rtl" === t ? 1 : 0
            }
          }, ds = {
            name: "display", initialValue: "inline-block", prefix: !1, type: 1, parse: function (A, t) {
              return t.filter(Ri).reduce((function (A, t) {
                return A | ps(t.value)
              }), 0)
            }
          }, ps = function (A) {
            switch (A) {
              case"block":
              case"-webkit-box":
                return 2;
              case"inline":
                return 4;
              case"run-in":
                return 8;
              case"flow":
                return 16;
              case"flow-root":
                return 32;
              case"table":
                return 64;
              case"flex":
              case"-webkit-flex":
                return 128;
              case"grid":
              case"-ms-grid":
                return 256;
              case"ruby":
                return 512;
              case"subgrid":
                return 1024;
              case"list-item":
                return 2048;
              case"table-row-group":
                return 4096;
              case"table-header-group":
                return 8192;
              case"table-footer-group":
                return 16384;
              case"table-row":
                return 32768;
              case"table-cell":
                return 65536;
              case"table-column-group":
                return 131072;
              case"table-column":
                return 262144;
              case"table-caption":
                return 524288;
              case"ruby-base":
                return 1048576;
              case"ruby-text":
                return 2097152;
              case"ruby-base-container":
                return 4194304;
              case"ruby-text-container":
                return 8388608;
              case"contents":
                return 16777216;
              case"inline-block":
                return 33554432;
              case"inline-list-item":
                return 67108864;
              case"inline-table":
                return 134217728;
              case"inline-flex":
                return 268435456;
              case"inline-grid":
                return 536870912
            }
            return 0
          }, Qs = {
            name: "float", initialValue: "none", prefix: !1, type: 2, parse: function (A, t) {
              switch (t) {
                case"left":
                  return 1;
                case"right":
                  return 2;
                case"inline-start":
                  return 3;
                case"inline-end":
                  return 4
              }
              return 0
            }
          }, Cs = {
            name: "letter-spacing", initialValue: "0", prefix: !1, type: 0, parse: function (A, t) {
              return 20 === t.type && "normal" === t.value ? 0 : 17 === t.type || 15 === t.type ? t.number : 0
            }
          };
        !function (A) {
          A.NORMAL = "normal", A.STRICT = "strict"
        }(Xo || (Xo = {}));
        var Us, Fs = {
          name: "line-break", initialValue: "normal", prefix: !1, type: 2, parse: function (A, t) {
            return "strict" === t ? Xo.STRICT : Xo.NORMAL
          }
        }, vs = {name: "line-height", initialValue: "normal", prefix: !1, type: 4}, ms = function (A, t) {
          return Ri(A) && "normal" === A.value ? 1.2 * t : 17 === A.type ? t * A.number : Zi(A) ? eo(A, t) : t
        }, ys = {
          name: "list-style-image", initialValue: "none", type: 0, prefix: !1, parse: function (A, t) {
            return 20 === t.type && "none" === t.value ? null : Oo(A, t)
          }
        }, Hs = {
          name: "list-style-position", initialValue: "outside", prefix: !1, type: 2, parse: function (A, t) {
            return "inside" === t ? 0 : 1
          }
        }, Es = {
          name: "list-style-type", initialValue: "none", prefix: !1, type: 2, parse: function (A, t) {
            switch (t) {
              case"disc":
                return 0;
              case"circle":
                return 1;
              case"square":
                return 2;
              case"decimal":
                return 3;
              case"cjk-decimal":
                return 4;
              case"decimal-leading-zero":
                return 5;
              case"lower-roman":
                return 6;
              case"upper-roman":
                return 7;
              case"lower-greek":
                return 8;
              case"lower-alpha":
                return 9;
              case"upper-alpha":
                return 10;
              case"arabic-indic":
                return 11;
              case"armenian":
                return 12;
              case"bengali":
                return 13;
              case"cambodian":
                return 14;
              case"cjk-earthly-branch":
                return 15;
              case"cjk-heavenly-stem":
                return 16;
              case"cjk-ideographic":
                return 17;
              case"devanagari":
                return 18;
              case"ethiopic-numeric":
                return 19;
              case"georgian":
                return 20;
              case"gujarati":
                return 21;
              case"gurmukhi":
              case"hebrew":
                return 22;
              case"hiragana":
                return 23;
              case"hiragana-iroha":
                return 24;
              case"japanese-formal":
                return 25;
              case"japanese-informal":
                return 26;
              case"kannada":
                return 27;
              case"katakana":
                return 28;
              case"katakana-iroha":
                return 29;
              case"khmer":
                return 30;
              case"korean-hangul-formal":
                return 31;
              case"korean-hanja-formal":
                return 32;
              case"korean-hanja-informal":
                return 33;
              case"lao":
                return 34;
              case"lower-armenian":
                return 35;
              case"malayalam":
                return 36;
              case"mongolian":
                return 37;
              case"myanmar":
                return 38;
              case"oriya":
                return 39;
              case"persian":
                return 40;
              case"simp-chinese-formal":
                return 41;
              case"simp-chinese-informal":
                return 42;
              case"tamil":
                return 43;
              case"telugu":
                return 44;
              case"thai":
                return 45;
              case"tibetan":
                return 46;
              case"trad-chinese-formal":
                return 47;
              case"trad-chinese-informal":
                return 48;
              case"upper-armenian":
                return 49;
              case"disclosure-open":
                return 50;
              case"disclosure-closed":
                return 51;
              default:
                return -1
            }
          }
        }, bs = function (A) {
          return {name: "margin-" + A, initialValue: "0", prefix: !1, type: 4}
        }, Is = bs("top"), Ls = bs("right"), Ks = bs("bottom"), xs = bs("left"), Ss = {
          name: "overflow", initialValue: "visible", prefix: !1, type: 1, parse: function (A, t) {
            return t.filter(Ri).map((function (A) {
              switch (A.value) {
                case"hidden":
                  return 1;
                case"scroll":
                  return 2;
                case"clip":
                  return 3;
                case"auto":
                  return 4;
                default:
                  return 0
              }
            }))
          }
        }, Ds = {
          name: "overflow-wrap", initialValue: "normal", prefix: !1, type: 2, parse: function (A, t) {
            return "break-word" === t ? "break-word" : "normal"
          }
        }, ks = function (A) {
          return {name: "padding-" + A, initialValue: "0", prefix: !1, type: 3, format: "length-percentage"}
        }, _s = ks("top"), Ms = ks("right"), Os = ks("bottom"), Ts = ks("left"), Vs = {
          name: "text-align", initialValue: "left", prefix: !1, type: 2, parse: function (A, t) {
            switch (t) {
              case"right":
                return 2;
              case"center":
              case"justify":
                return 1;
              default:
                return 0
            }
          }
        }, Gs = {
          name: "position", initialValue: "static", prefix: !1, type: 2, parse: function (A, t) {
            switch (t) {
              case"relative":
                return 1;
              case"absolute":
                return 2;
              case"fixed":
                return 3;
              case"sticky":
                return 4
            }
            return 0
          }
        }, Rs = {
          name: "text-shadow", initialValue: "none", type: 1, prefix: !1, parse: function (A, t) {
            return 1 === t.length && Ni(t[0], "none") ? [] : Yi(t).map((function (t) {
              for (var e = {
                color: Co.TRANSPARENT,
                offsetX: $i,
                offsetY: $i,
                blur: $i
              }, r = 0, n = 0; n < t.length; n++) {
                var i = t[n];
                ji(i) ? (0 === r ? e.offsetX = i : 1 === r ? e.offsetY = i : e.blur = i, r++) : e.color = co(A, i)
              }
              return e
            }))
          }
        }, Ps = {
          name: "text-transform", initialValue: "none", prefix: !1, type: 2, parse: function (A, t) {
            switch (t) {
              case"uppercase":
                return 2;
              case"lowercase":
                return 1;
              case"capitalize":
                return 3
            }
            return 0
          }
        }, Ns = {
          name: "transform", initialValue: "none", prefix: !0, type: 0, parse: function (A, t) {
            if (20 === t.type && "none" === t.value) return null;
            if (18 === t.type) {
              var e = Js[t.name];
              if (void 0 === e) throw new Error('Attempting to parse an unsupported transform function "' + t.name + '"');
              return e(t.values)
            }
            return null
          }
        }, Js = {
          matrix: function (A) {
            var t = A.filter((function (A) {
              return 17 === A.type
            })).map((function (A) {
              return A.number
            }));
            return 6 === t.length ? t : null
          }, matrix3d: function (A) {
            var t = A.filter((function (A) {
              return 17 === A.type
            })).map((function (A) {
              return A.number
            })), e = t[0], r = t[1];
            t[2], t[3];
            var n = t[4], i = t[5];
            t[6], t[7], t[8], t[9], t[10], t[11];
            var o = t[12], s = t[13];
            return t[14], t[15], 16 === t.length ? [e, r, n, i, o, s] : null
          }
        }, Xs = {type: 16, number: 50, flags: 4}, Ys = [Xs, Xs], Ws = {
          name: "transform-origin", initialValue: "50% 50%", prefix: !0, type: 1, parse: function (A, t) {
            var e = t.filter(Zi);
            return 2 !== e.length ? Ys : [e[0], e[1]]
          }
        }, js = {
          name: "visible", initialValue: "none", prefix: !1, type: 2, parse: function (A, t) {
            switch (t) {
              case"hidden":
                return 1;
              case"collapse":
                return 2;
              default:
                return 0
            }
          }
        };
        !function (A) {
          A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all"
        }(Us || (Us = {}));
        for (var Zs = {
          name: "word-break", initialValue: "normal", prefix: !1, type: 2, parse: function (A, t) {
            switch (t) {
              case"break-all":
                return Us.BREAK_ALL;
              case"keep-all":
                return Us.KEEP_ALL;
              default:
                return Us.NORMAL
            }
          }
        }, zs = {
          name: "z-index", initialValue: "auto", prefix: !1, type: 0, parse: function (A, t) {
            if (20 === t.type) return {auto: !0, order: 0};
            if (Gi(t)) return {auto: !1, order: t.number};
            throw new Error("Invalid z-index number parsed")
          }
        }, $s = function (A, t) {
          if (15 === t.type) switch (t.unit.toLowerCase()) {
            case"s":
              return 1e3 * t.number;
            case"ms":
              return t.number
          }
          throw new Error("Unsupported time type")
        }, qs = {
          name: "opacity", initialValue: "1", type: 0, prefix: !1, parse: function (A, t) {
            return Gi(t) ? t.number : 1
          }
        }, Aa = {
          name: "text-decoration-color",
          initialValue: "transparent",
          prefix: !1,
          type: 3,
          format: "color"
        }, ta = {
          name: "text-decoration-line", initialValue: "none", prefix: !1, type: 1, parse: function (A, t) {
            return t.filter(Ri).map((function (A) {
              switch (A.value) {
                case"underline":
                  return 1;
                case"overline":
                  return 2;
                case"line-through":
                  return 3;
                case"none":
                  return 4
              }
              return 0
            })).filter((function (A) {
              return 0 !== A
            }))
          }
        }, ea = {
          name: "font-family", initialValue: "", prefix: !1, type: 1, parse: function (A, t) {
            var e = [], r = [];
            return t.forEach((function (A) {
              switch (A.type) {
                case 20:
                case 0:
                  e.push(A.value);
                  break;
                case 17:
                  e.push(A.number.toString());
                  break;
                case 4:
                  r.push(e.join(" ")), e.length = 0
              }
            })), e.length && r.push(e.join(" ")), r.map((function (A) {
              return -1 === A.indexOf(" ") ? A : "'" + A + "'"
            }))
          }
        }, ra = {
          name: "font-size",
          initialValue: "0",
          prefix: !1,
          type: 3,
          format: "length"
        }, na = {
          name: "font-weight", initialValue: "normal", type: 0, prefix: !1, parse: function (A, t) {
            return Gi(t) ? t.number : Ri(t) && "bold" === t.value ? 700 : 400
          }
        }, ia = {
          name: "font-variant", initialValue: "none", type: 1, prefix: !1, parse: function (A, t) {
            return t.filter(Ri).map((function (A) {
              return A.value
            }))
          }
        }, oa = {
          name: "font-style", initialValue: "normal", prefix: !1, type: 2, parse: function (A, t) {
            switch (t) {
              case"oblique":
                return "oblique";
              case"italic":
                return "italic";
              default:
                return "normal"
            }
          }
        }, sa = function (A, t) {
          return 0 != (A & t)
        }, aa = {
          name: "content", initialValue: "none", type: 1, prefix: !1, parse: function (A, t) {
            if (0 === t.length) return [];
            var e = t[0];
            return 20 === e.type && "none" === e.value ? [] : t
          }
        }, ca = {
          name: "counter-increment", initialValue: "none", prefix: !0, type: 1, parse: function (A, t) {
            if (0 === t.length) return null;
            var e = t[0];
            if (20 === e.type && "none" === e.value) return null;
            for (var r = [], n = t.filter(Ji), i = 0; i < n.length; i++) {
              var o = n[i], s = n[i + 1];
              if (20 === o.type) {
                var a = s && Gi(s) ? s.number : 1;
                r.push({counter: o.value, increment: a})
              }
            }
            return r
          }
        }, la = {
          name: "counter-reset", initialValue: "none", prefix: !0, type: 1, parse: function (A, t) {
            if (0 === t.length) return [];
            for (var e = [], r = t.filter(Ji), n = 0; n < r.length; n++) {
              var i = r[n], o = r[n + 1];
              if (Ri(i) && "none" !== i.value) {
                var s = o && Gi(o) ? o.number : 0;
                e.push({counter: i.value, reset: s})
              }
            }
            return e
          }
        }, Ba = {
          name: "duration", initialValue: "0s", prefix: !1, type: 1, parse: function (A, t) {
            return t.filter(Vi).map((function (t) {
              return $s(A, t)
            }))
          }
        }, ua = {
          name: "quotes", initialValue: "none", prefix: !0, type: 1, parse: function (A, t) {
            if (0 === t.length) return null;
            var e = t[0];
            if (20 === e.type && "none" === e.value) return null;
            var r = [], n = t.filter(Pi);
            if (n.length % 2 != 0) return null;
            for (var i = 0; i < n.length; i += 2) {
              var o = n[i].value, s = n[i + 1].value;
              r.push({open: o, close: s})
            }
            return r
          }
        }, ga = function (A, t, e) {
          if (!A) return "";
          var r = A[Math.min(t, A.length - 1)];
          return r ? e ? r.open : r.close : ""
        }, ha = {
          name: "box-shadow", initialValue: "none", type: 1, prefix: !1, parse: function (A, t) {
            return 1 === t.length && Ni(t[0], "none") ? [] : Yi(t).map((function (t) {
              for (var e = {
                color: 255,
                offsetX: $i,
                offsetY: $i,
                blur: $i,
                spread: $i,
                inset: !1
              }, r = 0, n = 0; n < t.length; n++) {
                var i = t[n];
                Ni(i, "inset") ? e.inset = !0 : ji(i) ? (0 === r ? e.offsetX = i : 1 === r ? e.offsetY = i : 2 === r ? e.blur = i : e.spread = i, r++) : e.color = co(A, i)
              }
              return e
            }))
          }
        }, wa = {
          name: "paint-order", initialValue: "normal", prefix: !1, type: 1, parse: function (A, t) {
            var e = [];
            return t.filter(Ri).forEach((function (A) {
              switch (A.value) {
                case"stroke":
                  e.push(1);
                  break;
                case"fill":
                  e.push(0);
                  break;
                case"markers":
                  e.push(2)
              }
            })), [0, 1, 2].forEach((function (A) {
              -1 === e.indexOf(A) && e.push(A)
            })), e
          }
        }, fa = {
          name: "-webkit-text-stroke-color",
          initialValue: "currentcolor",
          prefix: !1,
          type: 3,
          format: "color"
        }, da = {
          name: "-webkit-text-stroke-width", initialValue: "0", type: 0, prefix: !1, parse: function (A, t) {
            return Vi(t) ? t.number : 0
          }
        }, pa = function () {
          function A(A, t) {
            var e, r;
            this.animationDuration = Ua(A, Ba, t.animationDuration), this.backgroundClip = Ua(A, Uo, t.backgroundClip), this.backgroundColor = Ua(A, Fo, t.backgroundColor), this.backgroundImage = Ua(A, Go, t.backgroundImage), this.backgroundOrigin = Ua(A, Ro, t.backgroundOrigin), this.backgroundPosition = Ua(A, Po, t.backgroundPosition), this.backgroundRepeat = Ua(A, No, t.backgroundRepeat), this.backgroundSize = Ua(A, Yo, t.backgroundSize), this.borderTopColor = Ua(A, Zo, t.borderTopColor), this.borderRightColor = Ua(A, zo, t.borderRightColor), this.borderBottomColor = Ua(A, $o, t.borderBottomColor), this.borderLeftColor = Ua(A, qo, t.borderLeftColor), this.borderTopLeftRadius = Ua(A, ts, t.borderTopLeftRadius), this.borderTopRightRadius = Ua(A, es, t.borderTopRightRadius), this.borderBottomRightRadius = Ua(A, rs, t.borderBottomRightRadius), this.borderBottomLeftRadius = Ua(A, ns, t.borderBottomLeftRadius), this.borderTopStyle = Ua(A, os, t.borderTopStyle), this.borderRightStyle = Ua(A, ss, t.borderRightStyle), this.borderBottomStyle = Ua(A, as, t.borderBottomStyle), this.borderLeftStyle = Ua(A, cs, t.borderLeftStyle), this.borderTopWidth = Ua(A, Bs, t.borderTopWidth), this.borderRightWidth = Ua(A, us, t.borderRightWidth), this.borderBottomWidth = Ua(A, gs, t.borderBottomWidth), this.borderLeftWidth = Ua(A, hs, t.borderLeftWidth), this.boxShadow = Ua(A, ha, t.boxShadow), this.color = Ua(A, ws, t.color), this.direction = Ua(A, fs, t.direction), this.display = Ua(A, ds, t.display), this.float = Ua(A, Qs, t.cssFloat), this.fontFamily = Ua(A, ea, t.fontFamily), this.fontSize = Ua(A, ra, t.fontSize), this.fontStyle = Ua(A, oa, t.fontStyle), this.fontVariant = Ua(A, ia, t.fontVariant), this.fontWeight = Ua(A, na, t.fontWeight), this.letterSpacing = Ua(A, Cs, t.letterSpacing), this.lineBreak = Ua(A, Fs, t.lineBreak), this.lineHeight = Ua(A, vs, t.lineHeight), this.listStyleImage = Ua(A, ys, t.listStyleImage), this.listStylePosition = Ua(A, Hs, t.listStylePosition), this.listStyleType = Ua(A, Es, t.listStyleType), this.marginTop = Ua(A, Is, t.marginTop), this.marginRight = Ua(A, Ls, t.marginRight), this.marginBottom = Ua(A, Ks, t.marginBottom), this.marginLeft = Ua(A, xs, t.marginLeft), this.opacity = Ua(A, qs, t.opacity);
            var n = Ua(A, Ss, t.overflow);
            this.overflowX = n[0], this.overflowY = n[n.length > 1 ? 1 : 0], this.overflowWrap = Ua(A, Ds, t.overflowWrap), this.paddingTop = Ua(A, _s, t.paddingTop), this.paddingRight = Ua(A, Ms, t.paddingRight), this.paddingBottom = Ua(A, Os, t.paddingBottom), this.paddingLeft = Ua(A, Ts, t.paddingLeft), this.paintOrder = Ua(A, wa, t.paintOrder), this.position = Ua(A, Gs, t.position), this.textAlign = Ua(A, Vs, t.textAlign), this.textDecorationColor = Ua(A, Aa, null !== (e = t.textDecorationColor) && void 0 !== e ? e : t.color), this.textDecorationLine = Ua(A, ta, null !== (r = t.textDecorationLine) && void 0 !== r ? r : t.textDecoration), this.textShadow = Ua(A, Rs, t.textShadow), this.textTransform = Ua(A, Ps, t.textTransform), this.transform = Ua(A, Ns, t.transform), this.transformOrigin = Ua(A, Ws, t.transformOrigin), this.visibility = Ua(A, js, t.visibility), this.webkitTextStrokeColor = Ua(A, fa, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = Ua(A, da, t.webkitTextStrokeWidth), this.wordBreak = Ua(A, Zs, t.wordBreak), this.zIndex = Ua(A, zs, t.zIndex)
          }

          return A.prototype.isVisible = function () {
            return this.display > 0 && this.opacity > 0 && 0 === this.visibility
          }, A.prototype.isTransparent = function () {
            return lo(this.backgroundColor)
          }, A.prototype.isTransformed = function () {
            return null !== this.transform
          }, A.prototype.isPositioned = function () {
            return 0 !== this.position
          }, A.prototype.isPositionedWithZIndex = function () {
            return this.isPositioned() && !this.zIndex.auto
          }, A.prototype.isFloating = function () {
            return 0 !== this.float
          }, A.prototype.isInlineLevel = function () {
            return sa(this.display, 4) || sa(this.display, 33554432) || sa(this.display, 268435456) || sa(this.display, 536870912) || sa(this.display, 67108864) || sa(this.display, 134217728)
          }, A
        }(), Qa = function (A, t) {
          this.content = Ua(A, aa, t.content), this.quotes = Ua(A, ua, t.quotes)
        }, Ca = function (A, t) {
          this.counterIncrement = Ua(A, ca, t.counterIncrement), this.counterReset = Ua(A, la, t.counterReset)
        }, Ua = function (A, t, e) {
          var r = new Oi, n = null != e ? e.toString() : t.initialValue;
          r.write(n);
          var i = new Ti(r.read());
          switch (t.type) {
            case 2:
              var o = i.parseComponentValue();
              return t.parse(A, Ri(o) ? o.value : t.initialValue);
            case 0:
              return t.parse(A, i.parseComponentValue());
            case 1:
              return t.parse(A, i.parseComponentValues());
            case 4:
              return i.parseComponentValue();
            case 3:
              switch (t.format) {
                case"angle":
                  return io(A, i.parseComponentValue());
                case"color":
                  return co(A, i.parseComponentValue());
                case"image":
                  return Oo(A, i.parseComponentValue());
                case"length":
                  var s = i.parseComponentValue();
                  return ji(s) ? s : $i;
                case"length-percentage":
                  var a = i.parseComponentValue();
                  return Zi(a) ? a : $i;
                case"time":
                  return $s(A, i.parseComponentValue())
              }
          }
        }, Fa = function (A, t) {
          var e = function (A) {
            switch (A.getAttribute("data-html2canvas-debug")) {
              case"all":
                return 1;
              case"clone":
                return 2;
              case"parse":
                return 3;
              case"render":
                return 4;
              default:
                return 0
            }
          }(A);
          return 1 === e || t === e
        }, va = function (A, t) {
          this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, Fa(t, 3), this.styles = new pa(A, window.getComputedStyle(t, null)), Ec(t) && (this.styles.animationDuration.some((function (A) {
            return A > 0
          })) && (t.style.animationDuration = "0s"), null !== this.styles.transform && (t.style.transform = "none")), this.bounds = rn(this.context, t), Fa(t, 4) && (this.flags |= 16)
        }, ma = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ya = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), Ha = 0; Ha < ma.length; Ha++) ya[ma.charCodeAt(Ha)] = Ha;
        for (var Ea = function (A, t, e) {
          return A.slice ? A.slice(t, e) : new Uint16Array(Array.prototype.slice.call(A, t, e))
        }, ba = function () {
          function A(A, t, e, r, n, i) {
            this.initialValue = A, this.errorValue = t, this.highStart = e, this.highValueIndex = r, this.index = n, this.data = i
          }

          return A.prototype.get = function (A) {
            var t;
            if (A >= 0) {
              if (A < 55296 || A > 56319 && A <= 65535) return t = ((t = this.index[A >> 5]) << 2) + (31 & A), this.data[t];
              if (A <= 65535) return t = ((t = this.index[2048 + (A - 55296 >> 5)]) << 2) + (31 & A), this.data[t];
              if (A < this.highStart) return t = 2080 + (A >> 11), t = this.index[t], t += A >> 5 & 63, t = ((t = this.index[t]) << 2) + (31 & A), this.data[t];
              if (A <= 1114111) return this.data[this.highValueIndex]
            }
            return this.errorValue
          }, A
        }(), Ia = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", La = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), Ka = 0; Ka < Ia.length; Ka++) La[Ia.charCodeAt(Ka)] = Ka;
        var xa, Sa = 8, Da = 9, ka = 11, _a = 12, Ma = function () {
            for (var A = [], t = 0; t < arguments.length; t++) A[t] = arguments[t];
            if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
            var e = A.length;
            if (!e) return "";
            for (var r = [], n = -1, i = ""; ++n < e;) {
              var o = A[n];
              o <= 65535 ? r.push(o) : (o -= 65536, r.push(55296 + (o >> 10), o % 1024 + 56320)), (n + 1 === e || r.length > 16384) && (i += String.fromCharCode.apply(String, r), r.length = 0)
            }
            return i
          }, Oa = function (A, t) {
            var e, r, n, i = function (A) {
                var t, e, r, n, i, o = .75 * A.length, s = A.length, a = 0;
                "=" === A[A.length - 1] && (o--, "=" === A[A.length - 2] && o--);
                var c = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(o) : new Array(o),
                  l = Array.isArray(c) ? c : new Uint8Array(c);
                for (t = 0; t < s; t += 4) e = ya[A.charCodeAt(t)], r = ya[A.charCodeAt(t + 1)], n = ya[A.charCodeAt(t + 2)], i = ya[A.charCodeAt(t + 3)], l[a++] = e << 2 | r >> 4, l[a++] = (15 & r) << 4 | n >> 2, l[a++] = (3 & n) << 6 | 63 & i;
                return c
              }(A), o = Array.isArray(i) ? function (A) {
                for (var t = A.length, e = [], r = 0; r < t; r += 4) e.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
                return e
              }(i) : new Uint32Array(i), s = Array.isArray(i) ? function (A) {
                for (var t = A.length, e = [], r = 0; r < t; r += 2) e.push(A[r + 1] << 8 | A[r]);
                return e
              }(i) : new Uint16Array(i), a = Ea(s, 12, o[4] / 2),
              c = 2 === o[5] ? Ea(s, (24 + o[4]) / 2) : (e = o, r = Math.ceil((24 + o[4]) / 4), e.slice ? e.slice(r, n) : new Uint32Array(Array.prototype.slice.call(e, r, n)));
            return new ba(o[0], o[1], o[2], o[3], a, c)
          }("AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA="),
          Ta = "×", Va = function (A) {
            return Oa.get(A)
          }, Ga = function (A, t, e) {
            var r = e - 2, n = t[r], i = t[e - 1], o = t[e];
            if (2 === i && 3 === o) return Ta;
            if (2 === i || 3 === i || 4 === i) return "÷";
            if (2 === o || 3 === o || 4 === o) return "÷";
            if (i === Sa && -1 !== [Sa, Da, ka, _a].indexOf(o)) return Ta;
            if (!(i !== ka && i !== Da || o !== Da && 10 !== o)) return Ta;
            if ((i === _a || 10 === i) && 10 === o) return Ta;
            if (13 === o || 5 === o) return Ta;
            if (7 === o) return Ta;
            if (1 === i) return Ta;
            if (13 === i && 14 === o) {
              for (; 5 === n;) n = t[--r];
              if (14 === n) return Ta
            }
            if (15 === i && 15 === o) {
              for (var s = 0; 15 === n;) s++, n = t[--r];
              if (s % 2 == 0) return Ta
            }
            return "÷"
          }, Ra = function (A) {
            var t = function (A) {
              for (var t = [], e = 0, r = A.length; e < r;) {
                var n = A.charCodeAt(e++);
                if (n >= 55296 && n <= 56319 && e < r) {
                  var i = A.charCodeAt(e++);
                  56320 == (64512 & i) ? t.push(((1023 & n) << 10) + (1023 & i) + 65536) : (t.push(n), e--)
                } else t.push(n)
              }
              return t
            }(A), e = t.length, r = 0, n = 0, i = t.map(Va);
            return {
              next: function () {
                if (r >= e) return {done: !0, value: null};
                for (var A = Ta; r < e && (A = Ga(0, i, ++r)) === Ta;) ;
                if (A !== Ta || r === e) {
                  var o = Ma.apply(null, t.slice(n, r));
                  return n = r, {value: o, done: !1}
                }
                return {done: !0, value: null}
              }
            }
          }, Pa = function (A) {
            return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3]
          }, Na = function (A, t, e, r, n) {
            var i = "http://www.w3.org/2000/svg", o = document.createElementNS(i, "svg"),
              s = document.createElementNS(i, "foreignObject");
            return o.setAttributeNS(null, "width", A.toString()), o.setAttributeNS(null, "height", t.toString()), s.setAttributeNS(null, "width", "100%"), s.setAttributeNS(null, "height", "100%"), s.setAttributeNS(null, "x", e.toString()), s.setAttributeNS(null, "y", r.toString()), s.setAttributeNS(null, "externalResourcesRequired", "true"), o.appendChild(s), s.appendChild(n), o
          }, Ja = function (A) {
            return new Promise((function (t, e) {
              var r = new Image;
              r.onload = function () {
                return t(r)
              }, r.onerror = e, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(A))
            }))
          }, Xa = {
            get SUPPORT_RANGE_BOUNDS() {
              var A = function (A) {
                if (A.createRange) {
                  var t = A.createRange();
                  if (t.getBoundingClientRect) {
                    var e = A.createElement("boundtest");
                    e.style.height = "123px", e.style.display = "block", A.body.appendChild(e), t.selectNode(e);
                    var r = t.getBoundingClientRect(), n = Math.round(r.height);
                    if (A.body.removeChild(e), 123 === n) return !0
                  }
                }
                return !1
              }(document);
              return Object.defineProperty(Xa, "SUPPORT_RANGE_BOUNDS", {value: A}), A
            }, get SUPPORT_WORD_BREAKING() {
              var A = Xa.SUPPORT_RANGE_BOUNDS && function (A) {
                var t = A.createElement("boundtest");
                t.style.width = "50px", t.style.display = "block", t.style.fontSize = "12px", t.style.letterSpacing = "0px", t.style.wordSpacing = "0px", A.body.appendChild(t);
                var e = A.createRange();
                t.innerHTML = "function" == typeof "".repeat ? "&#128104;".repeat(10) : "";
                var r = t.firstChild, n = nn(r.data).map((function (A) {
                  return on(A)
                })), i = 0, o = {}, s = n.every((function (A, t) {
                  e.setStart(r, i), e.setEnd(r, i + A.length);
                  var n = e.getBoundingClientRect();
                  i += A.length;
                  var s = n.x > o.x || n.y > o.y;
                  return o = n, 0 === t || s
                }));
                return A.body.removeChild(t), s
              }(document);
              return Object.defineProperty(Xa, "SUPPORT_WORD_BREAKING", {value: A}), A
            }, get SUPPORT_SVG_DRAWING() {
              var A = function (A) {
                var t = new Image, e = A.createElement("canvas"), r = e.getContext("2d");
                if (!r) return !1;
                t.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                try {
                  r.drawImage(t, 0, 0), e.toDataURL()
                } catch (n) {
                  return !1
                }
                return !0
              }(document);
              return Object.defineProperty(Xa, "SUPPORT_SVG_DRAWING", {value: A}), A
            }, get SUPPORT_FOREIGNOBJECT_DRAWING() {
              var A = "function" == typeof Array.from && "function" == typeof window.fetch ? function (A) {
                var t = A.createElement("canvas"), e = 100;
                t.width = e, t.height = e;
                var r = t.getContext("2d");
                if (!r) return Promise.reject(!1);
                r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, e, e);
                var n = new Image, i = t.toDataURL();
                n.src = i;
                var o = Na(e, e, 0, 0, n);
                return r.fillStyle = "red", r.fillRect(0, 0, e, e), Ja(o).then((function (t) {
                  r.drawImage(t, 0, 0);
                  var n = r.getImageData(0, 0, e, e).data;
                  r.fillStyle = "red", r.fillRect(0, 0, e, e);
                  var o = A.createElement("div");
                  return o.style.backgroundImage = "url(" + i + ")", o.style.height = "100px", Pa(n) ? Ja(Na(e, e, 0, 0, o)) : Promise.reject(!1)
                })).then((function (A) {
                  return r.drawImage(A, 0, 0), Pa(r.getImageData(0, 0, e, e).data)
                })).catch((function () {
                  return !1
                }))
              }(document) : Promise.resolve(!1);
              return Object.defineProperty(Xa, "SUPPORT_FOREIGNOBJECT_DRAWING", {value: A}), A
            }, get SUPPORT_CORS_IMAGES() {
              var A = void 0 !== (new Image).crossOrigin;
              return Object.defineProperty(Xa, "SUPPORT_CORS_IMAGES", {value: A}), A
            }, get SUPPORT_RESPONSE_TYPE() {
              var A = "string" == typeof (new XMLHttpRequest).responseType;
              return Object.defineProperty(Xa, "SUPPORT_RESPONSE_TYPE", {value: A}), A
            }, get SUPPORT_CORS_XHR() {
              var A = "withCredentials" in new XMLHttpRequest;
              return Object.defineProperty(Xa, "SUPPORT_CORS_XHR", {value: A}), A
            }, get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
              var A = !("undefined" == typeof Intl || !Intl.Segmenter);
              return Object.defineProperty(Xa, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {value: A}), A
            }
          }, Ya = function (A, t) {
            this.text = A, this.bounds = t
          }, Wa = function (A, t) {
            var e = t.ownerDocument;
            if (e) {
              var r = e.createElement("html2canvaswrapper");
              r.appendChild(t.cloneNode(!0));
              var n = t.parentNode;
              if (n) {
                n.replaceChild(r, t);
                var i = rn(A, r);
                return r.firstChild && n.replaceChild(r.firstChild, r), i
              }
            }
            return en.EMPTY
          }, ja = function (A, t, e) {
            var r = A.ownerDocument;
            if (!r) throw new Error("Node has no owner document");
            var n = r.createRange();
            return n.setStart(A, t), n.setEnd(A, t + e), n
          }, Za = function (A) {
            if (Xa.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
              var t = new Intl.Segmenter(void 0, {granularity: "grapheme"});
              return Array.from(t.segment(A)).map((function (A) {
                return A.segment
              }))
            }
            return function (A) {
              for (var t, e = Ra(A), r = []; !(t = e.next()).done;) t.value && r.push(t.value.slice());
              return r
            }(A)
          }, za = function (A, t) {
            return 0 !== t.letterSpacing ? Za(A) : function (A, t) {
              if (Xa.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
                var e = new Intl.Segmenter(void 0, {granularity: "word"});
                return Array.from(e.segment(A)).map((function (A) {
                  return A.segment
                }))
              }
              return qa(A, t)
            }(A, t)
          }, $a = [32, 160, 4961, 65792, 65793, 4153, 4241], qa = function (A, t) {
            for (var e, r = function (A, t) {
              var e = nn(A), r = ei(e, t), n = r[0], i = r[1], o = r[2], s = e.length, a = 0, c = 0;
              return {
                next: function () {
                  if (c >= s) return {done: !0, value: null};
                  for (var A = Pn; c < s && (A = ti(e, i, n, ++c, o)) === Pn;) ;
                  if (A !== Pn || c === s) {
                    var t = new ri(e, A, a, c);
                    return a = c, {value: t, done: !1}
                  }
                  return {done: !0, value: null}
                }
              }
            }(A, {
              lineBreak: t.lineBreak,
              wordBreak: "break-word" === t.overflowWrap ? "break-word" : t.wordBreak
            }), n = [], i = function () {
              if (e.value) {
                var A = e.value.slice(), t = nn(A), r = "";
                t.forEach((function (A) {
                  -1 === $a.indexOf(A) ? r += on(A) : (r.length && n.push(r), n.push(on(A)), r = "")
                })), r.length && n.push(r)
              }
            }; !(e = r.next()).done;) i();
            return n
          }, Ac = function (A, t, e) {
            this.text = tc(t.data, e.textTransform), this.textBounds = function (A, t, e, r) {
              var n = za(t, e), i = [], o = 0;
              return n.forEach((function (t) {
                if (e.textDecorationLine.length || t.trim().length > 0) if (Xa.SUPPORT_RANGE_BOUNDS) {
                  var n = ja(r, o, t.length).getClientRects();
                  if (n.length > 1) {
                    var s = Za(t), a = 0;
                    s.forEach((function (t) {
                      i.push(new Ya(t, en.fromDOMRectList(A, ja(r, a + o, t.length).getClientRects()))), a += t.length
                    }))
                  } else i.push(new Ya(t, en.fromDOMRectList(A, n)))
                } else {
                  var c = r.splitText(t.length);
                  i.push(new Ya(t, Wa(A, r))), r = c
                } else Xa.SUPPORT_RANGE_BOUNDS || (r = r.splitText(t.length));
                o += t.length
              })), i
            }(A, this.text, e, t)
          }, tc = function (A, t) {
            switch (t) {
              case 1:
                return A.toLowerCase();
              case 3:
                return A.replace(ec, rc);
              case 2:
                return A.toUpperCase();
              default:
                return A
            }
          }, ec = /(^|\s|:|-|\(|\))([a-z])/g, rc = function (A, t, e) {
            return A.length > 0 ? t + e.toUpperCase() : A
          }, nc = function (A) {
            function t(t, e) {
              var r = A.call(this, t, e) || this;
              return r.src = e.currentSrc || e.src, r.intrinsicWidth = e.naturalWidth, r.intrinsicHeight = e.naturalHeight, r.context.cache.addImage(r.src), r
            }

            return $r(t, A), t
          }(va), ic = function (A) {
            function t(t, e) {
              var r = A.call(this, t, e) || this;
              return r.canvas = e, r.intrinsicWidth = e.width, r.intrinsicHeight = e.height, r
            }

            return $r(t, A), t
          }(va), oc = function (A) {
            function t(t, e) {
              var r = A.call(this, t, e) || this, n = new XMLSerializer, i = rn(t, e);
              return e.setAttribute("width", i.width + "px"), e.setAttribute("height", i.height + "px"), r.svg = "data:image/svg+xml," + encodeURIComponent(n.serializeToString(e)), r.intrinsicWidth = e.width.baseVal.value, r.intrinsicHeight = e.height.baseVal.value, r.context.cache.addImage(r.svg), r
            }

            return $r(t, A), t
          }(va), sc = function (A) {
            function t(t, e) {
              var r = A.call(this, t, e) || this;
              return r.value = e.value, r
            }

            return $r(t, A), t
          }(va), ac = function (A) {
            function t(t, e) {
              var r = A.call(this, t, e) || this;
              return r.start = e.start, r.reversed = "boolean" == typeof e.reversed && !0 === e.reversed, r
            }

            return $r(t, A), t
          }(va), cc = [{type: 15, flags: 0, unit: "px", number: 3}], lc = [{type: 16, flags: 0, number: 50}],
          Bc = "checkbox", uc = "radio", gc = "password", hc = 707406591, wc = function (A) {
            function t(t, e) {
              var r, n, i, o = A.call(this, t, e) || this;
              switch (o.type = e.type.toLowerCase(), o.checked = e.checked, o.value = 0 === (n = (r = e).type === gc ? new Array(r.value.length + 1).join("•") : r.value).length ? r.placeholder || "" : n, o.type !== Bc && o.type !== uc || (o.styles.backgroundColor = 3739148031, o.styles.borderTopColor = o.styles.borderRightColor = o.styles.borderBottomColor = o.styles.borderLeftColor = 2779096575, o.styles.borderTopWidth = o.styles.borderRightWidth = o.styles.borderBottomWidth = o.styles.borderLeftWidth = 1, o.styles.borderTopStyle = o.styles.borderRightStyle = o.styles.borderBottomStyle = o.styles.borderLeftStyle = 1, o.styles.backgroundClip = [0], o.styles.backgroundOrigin = [0], o.bounds = (i = o.bounds).width > i.height ? new en(i.left + (i.width - i.height) / 2, i.top, i.height, i.height) : i.width < i.height ? new en(i.left, i.top + (i.height - i.width) / 2, i.width, i.width) : i), o.type) {
                case Bc:
                  o.styles.borderTopRightRadius = o.styles.borderTopLeftRadius = o.styles.borderBottomRightRadius = o.styles.borderBottomLeftRadius = cc;
                  break;
                case uc:
                  o.styles.borderTopRightRadius = o.styles.borderTopLeftRadius = o.styles.borderBottomRightRadius = o.styles.borderBottomLeftRadius = lc
              }
              return o
            }

            return $r(t, A), t
          }(va), fc = function (A) {
            function t(t, e) {
              var r = A.call(this, t, e) || this, n = e.options[e.selectedIndex || 0];
              return r.value = n && n.text || "", r
            }

            return $r(t, A), t
          }(va), dc = function (A) {
            function t(t, e) {
              var r = A.call(this, t, e) || this;
              return r.value = e.value, r
            }

            return $r(t, A), t
          }(va), pc = function (A) {
            function t(t, e) {
              var r = A.call(this, t, e) || this;
              r.src = e.src, r.width = parseInt(e.width, 10) || 0, r.height = parseInt(e.height, 10) || 0, r.backgroundColor = r.styles.backgroundColor;
              try {
                if (e.contentWindow && e.contentWindow.document && e.contentWindow.document.documentElement) {
                  r.tree = Fc(t, e.contentWindow.document.documentElement);
                  var n = e.contentWindow.document.documentElement ? Qo(t, getComputedStyle(e.contentWindow.document.documentElement).backgroundColor) : Co.TRANSPARENT,
                    i = e.contentWindow.document.body ? Qo(t, getComputedStyle(e.contentWindow.document.body).backgroundColor) : Co.TRANSPARENT;
                  r.backgroundColor = lo(n) ? lo(i) ? r.styles.backgroundColor : i : n
                }
              } catch (o) {
              }
              return r
            }

            return $r(t, A), t
          }(va), Qc = ["OL", "UL", "MENU"], Cc = function A(t, e, r, n) {
            for (var i = e.firstChild, o = void 0; i; i = o) if (o = i.nextSibling, yc(i) && i.data.trim().length > 0) r.textNodes.push(new Ac(t, i, r.styles)); else if (Hc(i)) if (Gc(i) && i.assignedNodes) i.assignedNodes().forEach((function (e) {
              return A(t, e, r, n)
            })); else {
              var s = Uc(t, i);
              s.styles.isVisible() && (vc(i, s, n) ? s.flags |= 4 : mc(s.styles) && (s.flags |= 2), -1 !== Qc.indexOf(i.tagName) && (s.flags |= 8), r.elements.push(s), i.slot, i.shadowRoot ? A(t, i.shadowRoot, s, n) : Tc(i) || xc(i) || Vc(i) || A(t, i, s, n))
            }
          }, Uc = function (A, t) {
            return _c(t) ? new nc(A, t) : Dc(t) ? new ic(A, t) : xc(t) ? new oc(A, t) : Ic(t) ? new sc(A, t) : Lc(t) ? new ac(A, t) : Kc(t) ? new wc(A, t) : Vc(t) ? new fc(A, t) : Tc(t) ? new dc(A, t) : Mc(t) ? new pc(A, t) : new va(A, t)
          }, Fc = function (A, t) {
            var e = Uc(A, t);
            return e.flags |= 4, Cc(A, t, e, e), e
          }, vc = function (A, t, e) {
            return t.styles.isPositionedWithZIndex() || t.styles.opacity < 1 || t.styles.isTransformed() || Sc(A) && e.styles.isTransparent()
          }, mc = function (A) {
            return A.isPositioned() || A.isFloating()
          }, yc = function (A) {
            return A.nodeType === Node.TEXT_NODE
          }, Hc = function (A) {
            return A.nodeType === Node.ELEMENT_NODE
          }, Ec = function (A) {
            return Hc(A) && void 0 !== A.style && !bc(A)
          }, bc = function (A) {
            return "object" === l(A.className)
          }, Ic = function (A) {
            return "LI" === A.tagName
          }, Lc = function (A) {
            return "OL" === A.tagName
          }, Kc = function (A) {
            return "INPUT" === A.tagName
          }, xc = function (A) {
            return "svg" === A.tagName
          }, Sc = function (A) {
            return "BODY" === A.tagName
          }, Dc = function (A) {
            return "CANVAS" === A.tagName
          }, kc = function (A) {
            return "VIDEO" === A.tagName
          }, _c = function (A) {
            return "IMG" === A.tagName
          }, Mc = function (A) {
            return "IFRAME" === A.tagName
          }, Oc = function (A) {
            return "STYLE" === A.tagName
          }, Tc = function (A) {
            return "TEXTAREA" === A.tagName
          }, Vc = function (A) {
            return "SELECT" === A.tagName
          }, Gc = function (A) {
            return "SLOT" === A.tagName
          }, Rc = function (A) {
            return A.tagName.indexOf("-") > 0
          }, Pc = function () {
            function A() {
              this.counters = {}
            }

            return A.prototype.getCounterValue = function (A) {
              var t = this.counters[A];
              return t && t.length ? t[t.length - 1] : 1
            }, A.prototype.getCounterValues = function (A) {
              var t = this.counters[A];
              return t || []
            }, A.prototype.pop = function (A) {
              var t = this;
              A.forEach((function (A) {
                return t.counters[A].pop()
              }))
            }, A.prototype.parse = function (A) {
              var t = this, e = A.counterIncrement, r = A.counterReset, n = !0;
              null !== e && e.forEach((function (A) {
                var e = t.counters[A.counter];
                e && 0 !== A.increment && (n = !1, e.length || e.push(1), e[Math.max(0, e.length - 1)] += A.increment)
              }));
              var i = [];
              return n && r.forEach((function (A) {
                var e = t.counters[A.counter];
                i.push(A.counter), e || (e = t.counters[A.counter] = []), e.push(A.reset)
              })), i
            }, A
          }(), Nc = {
            integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
            values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
          }, Jc = {
            integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"]
          }, Xc = {
            integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"]
          }, Yc = {
            integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
            values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"]
          }, Wc = function (A, t, e, r, n, i) {
            return A < t || A > e ? rl(A, n, i.length > 0) : r.integers.reduce((function (t, e, n) {
              for (; A >= e;) A -= e, t += r.values[n];
              return t
            }), "") + i
          }, jc = function (A, t, e, r) {
            var n = "";
            do {
              e || A--, n = r(A) + n, A /= t
            } while (A * t >= t);
            return n
          }, Zc = function (A, t, e, r, n) {
            var i = e - t + 1;
            return (A < 0 ? "-" : "") + (jc(Math.abs(A), i, r, (function (A) {
              return on(Math.floor(A % i) + t)
            })) + n)
          }, zc = function (A, t, e) {
            void 0 === e && (e = ". ");
            var r = t.length;
            return jc(Math.abs(A), r, !1, (function (A) {
              return t[Math.floor(A % r)]
            })) + e
          }, $c = function (A, t, e, r, n, i) {
            if (A < -9999 || A > 9999) return rl(A, 4, n.length > 0);
            var o = Math.abs(A), s = n;
            if (0 === o) return t[0] + s;
            for (var a = 0; o > 0 && a <= 4; a++) {
              var c = o % 10;
              0 === c && sa(i, 1) && "" !== s ? s = t[c] + s : c > 1 || 1 === c && 0 === a || 1 === c && 1 === a && sa(i, 2) || 1 === c && 1 === a && sa(i, 4) && A > 100 || 1 === c && a > 1 && sa(i, 8) ? s = t[c] + (a > 0 ? e[a - 1] : "") + s : 1 === c && a > 0 && (s = e[a - 1] + s), o = Math.floor(o / 10)
            }
            return (A < 0 ? r : "") + s
          }, qc = "十百千萬", Al = "拾佰仟萬", tl = "マイナス", el = "마이너스", rl = function (A, t, e) {
            var r = e ? ". " : "", n = e ? "、" : "", i = e ? ", " : "", o = e ? " " : "";
            switch (t) {
              case 0:
                return "•" + o;
              case 1:
                return "◦" + o;
              case 2:
                return "◾" + o;
              case 5:
                var s = Zc(A, 48, 57, !0, r);
                return s.length < 4 ? "0" + s : s;
              case 4:
                return zc(A, "〇一二三四五六七八九", n);
              case 6:
                return Wc(A, 1, 3999, Nc, 3, r).toLowerCase();
              case 7:
                return Wc(A, 1, 3999, Nc, 3, r);
              case 8:
                return Zc(A, 945, 969, !1, r);
              case 9:
                return Zc(A, 97, 122, !1, r);
              case 10:
                return Zc(A, 65, 90, !1, r);
              case 11:
                return Zc(A, 1632, 1641, !0, r);
              case 12:
              case 49:
                return Wc(A, 1, 9999, Jc, 3, r);
              case 35:
                return Wc(A, 1, 9999, Jc, 3, r).toLowerCase();
              case 13:
                return Zc(A, 2534, 2543, !0, r);
              case 14:
              case 30:
                return Zc(A, 6112, 6121, !0, r);
              case 15:
                return zc(A, "子丑寅卯辰巳午未申酉戌亥", n);
              case 16:
                return zc(A, "甲乙丙丁戊己庚辛壬癸", n);
              case 17:
              case 48:
                return $c(A, "零一二三四五六七八九", qc, "負", n, 14);
              case 47:
                return $c(A, "零壹貳參肆伍陸柒捌玖", Al, "負", n, 15);
              case 42:
                return $c(A, "零一二三四五六七八九", qc, "负", n, 14);
              case 41:
                return $c(A, "零壹贰叁肆伍陆柒捌玖", Al, "负", n, 15);
              case 26:
                return $c(A, "〇一二三四五六七八九", "十百千万", tl, n, 0);
              case 25:
                return $c(A, "零壱弐参四伍六七八九", "拾百千万", tl, n, 7);
              case 31:
                return $c(A, "영일이삼사오육칠팔구", "십백천만", el, i, 7);
              case 33:
                return $c(A, "零一二三四五六七八九", "十百千萬", el, i, 0);
              case 32:
                return $c(A, "零壹貳參四五六七八九", "拾百千", el, i, 7);
              case 18:
                return Zc(A, 2406, 2415, !0, r);
              case 20:
                return Wc(A, 1, 19999, Yc, 3, r);
              case 21:
                return Zc(A, 2790, 2799, !0, r);
              case 22:
                return Zc(A, 2662, 2671, !0, r);
              case 22:
                return Wc(A, 1, 10999, Xc, 3, r);
              case 23:
                return zc(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
              case 24:
                return zc(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
              case 27:
                return Zc(A, 3302, 3311, !0, r);
              case 28:
                return zc(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
              case 29:
                return zc(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
              case 34:
                return Zc(A, 3792, 3801, !0, r);
              case 37:
                return Zc(A, 6160, 6169, !0, r);
              case 38:
                return Zc(A, 4160, 4169, !0, r);
              case 39:
                return Zc(A, 2918, 2927, !0, r);
              case 40:
                return Zc(A, 1776, 1785, !0, r);
              case 43:
                return Zc(A, 3046, 3055, !0, r);
              case 44:
                return Zc(A, 3174, 3183, !0, r);
              case 45:
                return Zc(A, 3664, 3673, !0, r);
              case 46:
                return Zc(A, 3872, 3881, !0, r);
              default:
                return Zc(A, 48, 57, !0, r)
            }
          }, nl = "data-html2canvas-ignore", il = function () {
            function A(A, t, e) {
              if (this.context = A, this.options = e, this.scrolledElements = [], this.referenceElement = t, this.counters = new Pc, this.quoteDepth = 0, !t.ownerDocument) throw new Error("Cloned element does not have an owner document");
              this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1)
            }

            return A.prototype.toIFrame = function (A, t) {
              var e = this, r = sl(A, t);
              if (!r.contentWindow) return Promise.reject("Unable to find iframe window");
              var n = A.defaultView.pageXOffset, i = A.defaultView.pageYOffset, o = r.contentWindow, s = o.document,
                a = ll(r).then((function () {
                  return An(e, void 0, void 0, (function () {
                    var A, e;
                    return tn(this, (function (n) {
                      switch (n.label) {
                        case 0:
                          return this.scrolledElements.forEach(wl), o && (o.scrollTo(t.left, t.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || o.scrollY === t.top && o.scrollX === t.left || (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(o.scrollX - t.left, o.scrollY - t.top, 0, 0))), A = this.options.onclone, void 0 === (e = this.clonedReferenceElement) ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : s.fonts && s.fonts.ready ? [4, s.fonts.ready] : [3, 2];
                        case 1:
                          n.sent(), n.label = 2;
                        case 2:
                          return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, cl(s)] : [3, 4];
                        case 3:
                          n.sent(), n.label = 4;
                        case 4:
                          return "function" == typeof A ? [2, Promise.resolve().then((function () {
                            return A(s, e)
                          })).then((function () {
                            return r
                          }))] : [2, r]
                      }
                    }))
                  }))
                }));
              return s.open(), s.write(gl(document.doctype) + "<html></html>"), hl(this.referenceElement.ownerDocument, n, i), s.replaceChild(s.adoptNode(this.documentElement), s.documentElement), s.close(), a
            }, A.prototype.createElementClone = function (A) {
              if (Fa(A, 2), Dc(A)) return this.createCanvasClone(A);
              if (kc(A)) return this.createVideoClone(A);
              if (Oc(A)) return this.createStyleClone(A);
              var t = A.cloneNode(!1);
              return _c(t) && (_c(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), "lazy" === t.loading && (t.loading = "eager")), Rc(t) ? this.createCustomElementClone(t) : t
            }, A.prototype.createCustomElementClone = function (A) {
              var t = document.createElement("html2canvascustomelement");
              return ul(A.style, t), t
            }, A.prototype.createStyleClone = function (A) {
              try {
                var t = A.sheet;
                if (t && t.cssRules) {
                  var e = [].slice.call(t.cssRules, 0).reduce((function (A, t) {
                    return t && "string" == typeof t.cssText ? A + t.cssText : A
                  }), ""), r = A.cloneNode(!1);
                  return r.textContent = e, r
                }
              } catch (n) {
                if (this.context.logger.error("Unable to access cssRules property", n), "SecurityError" !== n.name) throw n
              }
              return A.cloneNode(!1)
            }, A.prototype.createCanvasClone = function (A) {
              var t;
              if (this.options.inlineImages && A.ownerDocument) {
                var e = A.ownerDocument.createElement("img");
                try {
                  return e.src = A.toDataURL(), e
                } catch (a) {
                  this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A)
                }
              }
              var r = A.cloneNode(!1);
              try {
                r.width = A.width, r.height = A.height;
                var n = A.getContext("2d"), i = r.getContext("2d");
                if (i) if (!this.options.allowTaint && n) i.putImageData(n.getImageData(0, 0, A.width, A.height), 0, 0); else {
                  var o = null !== (t = A.getContext("webgl2")) && void 0 !== t ? t : A.getContext("webgl");
                  if (o) {
                    var s = o.getContextAttributes();
                    !1 === (null == s ? void 0 : s.preserveDrawingBuffer) && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A)
                  }
                  i.drawImage(A, 0, 0)
                }
                return r
              } catch (a) {
                this.context.logger.info("Unable to clone canvas as it is tainted", A)
              }
              return r
            }, A.prototype.createVideoClone = function (A) {
              var t = A.ownerDocument.createElement("canvas");
              t.width = A.offsetWidth, t.height = A.offsetHeight;
              var e = t.getContext("2d");
              try {
                return e && (e.drawImage(A, 0, 0, t.width, t.height), this.options.allowTaint || e.getImageData(0, 0, t.width, t.height)), t
              } catch (n) {
                this.context.logger.info("Unable to clone video as it is tainted", A)
              }
              var r = A.ownerDocument.createElement("canvas");
              return r.width = A.offsetWidth, r.height = A.offsetHeight, r
            }, A.prototype.appendChildNode = function (A, t, e) {
              Hc(t) && ("SCRIPT" === t.tagName || t.hasAttribute(nl) || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(t)) || this.options.copyStyles && Hc(t) && Oc(t) || A.appendChild(this.cloneNode(t, e))
            }, A.prototype.cloneChildNodes = function (A, t, e) {
              for (var r = this, n = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; n; n = n.nextSibling) if (Hc(n) && Gc(n) && "function" == typeof n.assignedNodes) {
                var i = n.assignedNodes();
                i.length && i.forEach((function (A) {
                  return r.appendChildNode(t, A, e)
                }))
              } else this.appendChildNode(t, n, e)
            }, A.prototype.cloneNode = function (A, t) {
              if (yc(A)) return document.createTextNode(A.data);
              if (!A.ownerDocument) return A.cloneNode(!1);
              var e = A.ownerDocument.defaultView;
              if (e && Hc(A) && (Ec(A) || bc(A))) {
                var r = this.createElementClone(A);
                r.style.transitionProperty = "none";
                var n = e.getComputedStyle(A), i = e.getComputedStyle(A, ":before"), o = e.getComputedStyle(A, ":after");
                this.referenceElement === A && Ec(r) && (this.clonedReferenceElement = r), Sc(r) && Ql(r);
                var s = this.counters.parse(new Ca(this.context, n)), a = this.resolvePseudoContent(A, r, i, xa.BEFORE);
                Rc(A) && (t = !0), kc(A) || this.cloneChildNodes(A, r, t), a && r.insertBefore(a, r.firstChild);
                var c = this.resolvePseudoContent(A, r, o, xa.AFTER);
                return c && r.appendChild(c), this.counters.pop(s), (n && (this.options.copyStyles || bc(A)) && !Mc(A) || t) && ul(n, r), 0 === A.scrollTop && 0 === A.scrollLeft || this.scrolledElements.push([r, A.scrollLeft, A.scrollTop]), (Tc(A) || Vc(A)) && (Tc(r) || Vc(r)) && (r.value = A.value), r
              }
              return A.cloneNode(!1)
            }, A.prototype.resolvePseudoContent = function (A, t, e, r) {
              var n = this;
              if (e) {
                var i = e.content, o = t.ownerDocument;
                if (o && i && "none" !== i && "-moz-alt-content" !== i && "none" !== e.display) {
                  this.counters.parse(new Ca(this.context, e));
                  var s = new Qa(this.context, e), a = o.createElement("html2canvaspseudoelement");
                  ul(e, a), s.content.forEach((function (t) {
                    if (0 === t.type) a.appendChild(o.createTextNode(t.value)); else if (22 === t.type) {
                      var e = o.createElement("img");
                      e.src = t.value, e.style.opacity = "1", a.appendChild(e)
                    } else if (18 === t.type) {
                      if ("attr" === t.name) {
                        var r = t.values.filter(Ri);
                        r.length && a.appendChild(o.createTextNode(A.getAttribute(r[0].value) || ""))
                      } else if ("counter" === t.name) {
                        var i = t.values.filter(Xi), c = i[0], l = i[1];
                        if (c && Ri(c)) {
                          var B = n.counters.getCounterValue(c.value), u = l && Ri(l) ? Es.parse(n.context, l.value) : 3;
                          a.appendChild(o.createTextNode(rl(B, u, !1)))
                        }
                      } else if ("counters" === t.name) {
                        var g = t.values.filter(Xi), h = (c = g[0], g[1]);
                        l = g[2];
                        if (c && Ri(c)) {
                          var w = n.counters.getCounterValues(c.value), f = l && Ri(l) ? Es.parse(n.context, l.value) : 3,
                            d = h && 0 === h.type ? h.value : "", p = w.map((function (A) {
                              return rl(A, f, !1)
                            })).join(d);
                          a.appendChild(o.createTextNode(p))
                        }
                      }
                    } else if (20 === t.type) switch (t.value) {
                      case"open-quote":
                        a.appendChild(o.createTextNode(ga(s.quotes, n.quoteDepth++, !0)));
                        break;
                      case"close-quote":
                        a.appendChild(o.createTextNode(ga(s.quotes, --n.quoteDepth, !1)));
                        break;
                      default:
                        a.appendChild(o.createTextNode(t.value))
                    }
                  })), a.className = fl + " " + dl;
                  var c = r === xa.BEFORE ? " " + fl : " " + dl;
                  return bc(t) ? t.className.baseValue += c : t.className += c, a
                }
              }
            }, A.destroy = function (A) {
              return !!A.parentNode && (A.parentNode.removeChild(A), !0)
            }, A
          }();
        !function (A) {
          A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER"
        }(xa || (xa = {}));
        var ol, sl = function (A, t) {
            var e = A.createElement("iframe");
            return e.className = "html2canvas-container", e.style.visibility = "hidden", e.style.position = "fixed", e.style.left = "-10000px", e.style.top = "0px", e.style.border = "0", e.width = t.width.toString(), e.height = t.height.toString(), e.scrolling = "no", e.setAttribute(nl, "true"), A.body.appendChild(e), e
          }, al = function (A) {
            return new Promise((function (t) {
              A.complete ? t() : A.src ? (A.onload = t, A.onerror = t) : t()
            }))
          }, cl = function (A) {
            return Promise.all([].slice.call(A.images, 0).map(al))
          }, ll = function (A) {
            return new Promise((function (t, e) {
              var r = A.contentWindow;
              if (!r) return e("No window assigned for iframe");
              var n = r.document;
              r.onload = A.onload = function () {
                r.onload = A.onload = null;
                var e = setInterval((function () {
                  n.body.childNodes.length > 0 && "complete" === n.readyState && (clearInterval(e), t(A))
                }), 50)
              }
            }))
          }, Bl = ["all", "d", "content"], ul = function (A, t) {
            for (var e = A.length - 1; e >= 0; e--) {
              var r = A.item(e);
              -1 === Bl.indexOf(r) && t.style.setProperty(r, A.getPropertyValue(r))
            }
            return t
          }, gl = function (A) {
            var t = "";
            return A && (t += "<!DOCTYPE ", A.name && (t += A.name), A.internalSubset && (t += A.internalSubset), A.publicId && (t += '"' + A.publicId + '"'), A.systemId && (t += '"' + A.systemId + '"'), t += ">"), t
          }, hl = function (A, t, e) {
            A && A.defaultView && (t !== A.defaultView.pageXOffset || e !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(t, e)
          }, wl = function (A) {
            var t = A[0], e = A[1], r = A[2];
            t.scrollLeft = e, t.scrollTop = r
          }, fl = "___html2canvas___pseudoelement_before", dl = "___html2canvas___pseudoelement_after",
          pl = '{\n    content: "" !important;\n    display: none !important;\n}', Ql = function (A) {
            Cl(A, "." + fl + ":before" + pl + "\n         ." + dl + ":after" + pl)
          }, Cl = function (A, t) {
            var e = A.ownerDocument;
            if (e) {
              var r = e.createElement("style");
              r.textContent = t, A.appendChild(r)
            }
          }, Ul = function () {
            function A() {
            }

            return A.getOrigin = function (t) {
              var e = A._link;
              return e ? (e.href = t, e.href = e.href, e.protocol + e.hostname + e.port) : "about:blank"
            }, A.isSameOrigin = function (t) {
              return A.getOrigin(t) === A._origin
            }, A.setContext = function (t) {
              A._link = t.document.createElement("a"), A._origin = A.getOrigin(t.location.href)
            }, A._origin = "about:blank", A
          }(), Fl = function () {
            function A(A, t) {
              this.context = A, this._options = t, this._cache = {}
            }

            return A.prototype.addImage = function (A) {
              var t = Promise.resolve();
              return this.has(A) ? t : Il(A) || Hl(A) ? ((this._cache[A] = this.loadImage(A)).catch((function () {
              })), t) : t
            }, A.prototype.match = function (A) {
              return this._cache[A]
            }, A.prototype.loadImage = function (A) {
              return An(this, void 0, void 0, (function () {
                var t, e, r, n, i = this;
                return tn(this, (function (o) {
                  switch (o.label) {
                    case 0:
                      return t = Ul.isSameOrigin(A), e = !El(A) && !0 === this._options.useCORS && Xa.SUPPORT_CORS_IMAGES && !t, r = !El(A) && !t && !Il(A) && "string" == typeof this._options.proxy && Xa.SUPPORT_CORS_XHR && !e, t || !1 !== this._options.allowTaint || El(A) || Il(A) || r || e ? (n = A, r ? [4, this.proxy(n)] : [3, 2]) : [2];
                    case 1:
                      n = o.sent(), o.label = 2;
                    case 2:
                      return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise((function (A, t) {
                        var r = new Image;
                        r.onload = function () {
                          return A(r)
                        }, r.onerror = t, (bl(n) || e) && (r.crossOrigin = "anonymous"), r.src = n, !0 === r.complete && setTimeout((function () {
                          return A(r)
                        }), 500), i._options.imageTimeout > 0 && setTimeout((function () {
                          return t("Timed out (" + i._options.imageTimeout + "ms) loading image")
                        }), i._options.imageTimeout)
                      }))];
                    case 3:
                      return [2, o.sent()]
                  }
                }))
              }))
            }, A.prototype.has = function (A) {
              return void 0 !== this._cache[A]
            }, A.prototype.keys = function () {
              return Promise.resolve(Object.keys(this._cache))
            }, A.prototype.proxy = function (A) {
              var t = this, e = this._options.proxy;
              if (!e) throw new Error("No proxy defined");
              var r = A.substring(0, 256);
              return new Promise((function (n, i) {
                var o = Xa.SUPPORT_RESPONSE_TYPE ? "blob" : "text", s = new XMLHttpRequest;
                s.onload = function () {
                  if (200 === s.status) if ("text" === o) n(s.response); else {
                    var A = new FileReader;
                    A.addEventListener("load", (function () {
                      return n(A.result)
                    }), !1), A.addEventListener("error", (function (A) {
                      return i(A)
                    }), !1), A.readAsDataURL(s.response)
                  } else i("Failed to proxy resource " + r + " with status code " + s.status)
                }, s.onerror = i;
                var a = e.indexOf("?") > -1 ? "&" : "?";
                if (s.open("GET", "" + e + a + "url=" + encodeURIComponent(A) + "&responseType=" + o), "text" !== o && s instanceof XMLHttpRequest && (s.responseType = o), t._options.imageTimeout) {
                  var c = t._options.imageTimeout;
                  s.timeout = c, s.ontimeout = function () {
                    return i("Timed out (" + c + "ms) proxying " + r)
                  }
                }
                s.send()
              }))
            }, A
          }(), vl = /^data:image\/svg\+xml/i, ml = /^data:image\/.*;base64,/i, yl = /^data:image\/.*/i,
          Hl = function (A) {
            return Xa.SUPPORT_SVG_DRAWING || !Ll(A)
          }, El = function (A) {
            return yl.test(A)
          }, bl = function (A) {
            return ml.test(A)
          }, Il = function (A) {
            return "blob" === A.substr(0, 4)
          }, Ll = function (A) {
            return "svg" === A.substr(-3).toLowerCase() || vl.test(A)
          }, Kl = function () {
            function A(A, t) {
              this.type = 0, this.x = A, this.y = t
            }

            return A.prototype.add = function (t, e) {
              return new A(this.x + t, this.y + e)
            }, A
          }(), xl = function (A, t, e) {
            return new Kl(A.x + (t.x - A.x) * e, A.y + (t.y - A.y) * e)
          }, Sl = function () {
            function A(A, t, e, r) {
              this.type = 1, this.start = A, this.startControl = t, this.endControl = e, this.end = r
            }

            return A.prototype.subdivide = function (t, e) {
              var r = xl(this.start, this.startControl, t), n = xl(this.startControl, this.endControl, t),
                i = xl(this.endControl, this.end, t), o = xl(r, n, t), s = xl(n, i, t), a = xl(o, s, t);
              return e ? new A(this.start, r, o, a) : new A(a, s, i, this.end)
            }, A.prototype.add = function (t, e) {
              return new A(this.start.add(t, e), this.startControl.add(t, e), this.endControl.add(t, e), this.end.add(t, e))
            }, A.prototype.reverse = function () {
              return new A(this.end, this.endControl, this.startControl, this.start)
            }, A
          }(), Dl = function (A) {
            return 1 === A.type
          }, kl = function (A) {
            var t = A.styles, e = A.bounds, r = to(t.borderTopLeftRadius, e.width, e.height), n = r[0], i = r[1],
              o = to(t.borderTopRightRadius, e.width, e.height), s = o[0], a = o[1],
              c = to(t.borderBottomRightRadius, e.width, e.height), l = c[0], B = c[1],
              u = to(t.borderBottomLeftRadius, e.width, e.height), g = u[0], h = u[1], w = [];
            w.push((n + s) / e.width), w.push((g + l) / e.width), w.push((i + h) / e.height), w.push((a + B) / e.height);
            var f = Math.max.apply(Math, w);
            f > 1 && (n /= f, i /= f, s /= f, a /= f, l /= f, B /= f, g /= f, h /= f);
            var d = e.width - s, p = e.height - B, Q = e.width - l, C = e.height - h, U = t.borderTopWidth,
              F = t.borderRightWidth, v = t.borderBottomWidth, m = t.borderLeftWidth,
              y = eo(t.paddingTop, A.bounds.width), H = eo(t.paddingRight, A.bounds.width),
              E = eo(t.paddingBottom, A.bounds.width), b = eo(t.paddingLeft, A.bounds.width);
            this.topLeftBorderDoubleOuterBox = n > 0 || i > 0 ? _l(e.left + m / 3, e.top + U / 3, n - m / 3, i - U / 3, ol.TOP_LEFT) : new Kl(e.left + m / 3, e.top + U / 3), this.topRightBorderDoubleOuterBox = n > 0 || i > 0 ? _l(e.left + d, e.top + U / 3, s - F / 3, a - U / 3, ol.TOP_RIGHT) : new Kl(e.left + e.width - F / 3, e.top + U / 3), this.bottomRightBorderDoubleOuterBox = l > 0 || B > 0 ? _l(e.left + Q, e.top + p, l - F / 3, B - v / 3, ol.BOTTOM_RIGHT) : new Kl(e.left + e.width - F / 3, e.top + e.height - v / 3), this.bottomLeftBorderDoubleOuterBox = g > 0 || h > 0 ? _l(e.left + m / 3, e.top + C, g - m / 3, h - v / 3, ol.BOTTOM_LEFT) : new Kl(e.left + m / 3, e.top + e.height - v / 3), this.topLeftBorderDoubleInnerBox = n > 0 || i > 0 ? _l(e.left + 2 * m / 3, e.top + 2 * U / 3, n - 2 * m / 3, i - 2 * U / 3, ol.TOP_LEFT) : new Kl(e.left + 2 * m / 3, e.top + 2 * U / 3), this.topRightBorderDoubleInnerBox = n > 0 || i > 0 ? _l(e.left + d, e.top + 2 * U / 3, s - 2 * F / 3, a - 2 * U / 3, ol.TOP_RIGHT) : new Kl(e.left + e.width - 2 * F / 3, e.top + 2 * U / 3), this.bottomRightBorderDoubleInnerBox = l > 0 || B > 0 ? _l(e.left + Q, e.top + p, l - 2 * F / 3, B - 2 * v / 3, ol.BOTTOM_RIGHT) : new Kl(e.left + e.width - 2 * F / 3, e.top + e.height - 2 * v / 3), this.bottomLeftBorderDoubleInnerBox = g > 0 || h > 0 ? _l(e.left + 2 * m / 3, e.top + C, g - 2 * m / 3, h - 2 * v / 3, ol.BOTTOM_LEFT) : new Kl(e.left + 2 * m / 3, e.top + e.height - 2 * v / 3), this.topLeftBorderStroke = n > 0 || i > 0 ? _l(e.left + m / 2, e.top + U / 2, n - m / 2, i - U / 2, ol.TOP_LEFT) : new Kl(e.left + m / 2, e.top + U / 2), this.topRightBorderStroke = n > 0 || i > 0 ? _l(e.left + d, e.top + U / 2, s - F / 2, a - U / 2, ol.TOP_RIGHT) : new Kl(e.left + e.width - F / 2, e.top + U / 2), this.bottomRightBorderStroke = l > 0 || B > 0 ? _l(e.left + Q, e.top + p, l - F / 2, B - v / 2, ol.BOTTOM_RIGHT) : new Kl(e.left + e.width - F / 2, e.top + e.height - v / 2), this.bottomLeftBorderStroke = g > 0 || h > 0 ? _l(e.left + m / 2, e.top + C, g - m / 2, h - v / 2, ol.BOTTOM_LEFT) : new Kl(e.left + m / 2, e.top + e.height - v / 2), this.topLeftBorderBox = n > 0 || i > 0 ? _l(e.left, e.top, n, i, ol.TOP_LEFT) : new Kl(e.left, e.top), this.topRightBorderBox = s > 0 || a > 0 ? _l(e.left + d, e.top, s, a, ol.TOP_RIGHT) : new Kl(e.left + e.width, e.top), this.bottomRightBorderBox = l > 0 || B > 0 ? _l(e.left + Q, e.top + p, l, B, ol.BOTTOM_RIGHT) : new Kl(e.left + e.width, e.top + e.height), this.bottomLeftBorderBox = g > 0 || h > 0 ? _l(e.left, e.top + C, g, h, ol.BOTTOM_LEFT) : new Kl(e.left, e.top + e.height), this.topLeftPaddingBox = n > 0 || i > 0 ? _l(e.left + m, e.top + U, Math.max(0, n - m), Math.max(0, i - U), ol.TOP_LEFT) : new Kl(e.left + m, e.top + U), this.topRightPaddingBox = s > 0 || a > 0 ? _l(e.left + Math.min(d, e.width - F), e.top + U, d > e.width + F ? 0 : Math.max(0, s - F), Math.max(0, a - U), ol.TOP_RIGHT) : new Kl(e.left + e.width - F, e.top + U), this.bottomRightPaddingBox = l > 0 || B > 0 ? _l(e.left + Math.min(Q, e.width - m), e.top + Math.min(p, e.height - v), Math.max(0, l - F), Math.max(0, B - v), ol.BOTTOM_RIGHT) : new Kl(e.left + e.width - F, e.top + e.height - v), this.bottomLeftPaddingBox = g > 0 || h > 0 ? _l(e.left + m, e.top + Math.min(C, e.height - v), Math.max(0, g - m), Math.max(0, h - v), ol.BOTTOM_LEFT) : new Kl(e.left + m, e.top + e.height - v), this.topLeftContentBox = n > 0 || i > 0 ? _l(e.left + m + b, e.top + U + y, Math.max(0, n - (m + b)), Math.max(0, i - (U + y)), ol.TOP_LEFT) : new Kl(e.left + m + b, e.top + U + y), this.topRightContentBox = s > 0 || a > 0 ? _l(e.left + Math.min(d, e.width + m + b), e.top + U + y, d > e.width + m + b ? 0 : s - m + b, a - (U + y), ol.TOP_RIGHT) : new Kl(e.left + e.width - (F + H), e.top + U + y), this.bottomRightContentBox = l > 0 || B > 0 ? _l(e.left + Math.min(Q, e.width - (m + b)), e.top + Math.min(p, e.height + U + y), Math.max(0, l - (F + H)), B - (v + E), ol.BOTTOM_RIGHT) : new Kl(e.left + e.width - (F + H), e.top + e.height - (v + E)), this.bottomLeftContentBox = g > 0 || h > 0 ? _l(e.left + m + b, e.top + C, Math.max(0, g - (m + b)), h - (v + E), ol.BOTTOM_LEFT) : new Kl(e.left + m + b, e.top + e.height - (v + E))
          };
        !function (A) {
          A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT"
        }(ol || (ol = {}));
        var _l = function (A, t, e, r, n) {
          var i = (Math.sqrt(2) - 1) / 3 * 4, o = e * i, s = r * i, a = A + e, c = t + r;
          switch (n) {
            case ol.TOP_LEFT:
              return new Sl(new Kl(A, c), new Kl(A, c - s), new Kl(a - o, t), new Kl(a, t));
            case ol.TOP_RIGHT:
              return new Sl(new Kl(A, t), new Kl(A + o, t), new Kl(a, c - s), new Kl(a, c));
            case ol.BOTTOM_RIGHT:
              return new Sl(new Kl(a, t), new Kl(a, t + s), new Kl(A + o, c), new Kl(A, c));
            case ol.BOTTOM_LEFT:
            default:
              return new Sl(new Kl(a, c), new Kl(a - o, c), new Kl(A, t + s), new Kl(A, t))
          }
        }, Ml = function (A) {
          return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox]
        }, Ol = function (A) {
          return [A.topLeftPaddingBox, A.topRightPaddingBox, A.bottomRightPaddingBox, A.bottomLeftPaddingBox]
        }, Tl = function (A, t, e) {
          this.offsetX = A, this.offsetY = t, this.matrix = e, this.type = 0, this.target = 6
        }, Vl = function (A, t) {
          this.path = A, this.target = t, this.type = 1
        }, Gl = function (A) {
          this.opacity = A, this.type = 2, this.target = 6
        }, Rl = function (A) {
          return 1 === A.type
        }, Pl = function (A, t) {
          return A.length === t.length && A.some((function (A, e) {
            return A === t[e]
          }))
        }, Nl = function (A) {
          this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = []
        }, Jl = function () {
          function A(A, t) {
            if (this.container = A, this.parent = t, this.effects = [], this.curves = new kl(this.container), this.container.styles.opacity < 1 && this.effects.push(new Gl(this.container.styles.opacity)), null !== this.container.styles.transform) {
              var e = this.container.bounds.left + this.container.styles.transformOrigin[0].number,
                r = this.container.bounds.top + this.container.styles.transformOrigin[1].number,
                n = this.container.styles.transform;
              this.effects.push(new Tl(e, r, n))
            }
            if (0 !== this.container.styles.overflowX) {
              var i = Ml(this.curves), o = Ol(this.curves);
              Pl(i, o) ? this.effects.push(new Vl(i, 6)) : (this.effects.push(new Vl(i, 2)), this.effects.push(new Vl(o, 4)))
            }
          }

          return A.prototype.getEffects = function (A) {
            for (var t = -1 === [2, 3].indexOf(this.container.styles.position), e = this.parent, r = this.effects.slice(0); e;) {
              var n = e.effects.filter((function (A) {
                return !Rl(A)
              }));
              if (t || 0 !== e.container.styles.position || !e.parent) {
                if (r.unshift.apply(r, n), t = -1 === [2, 3].indexOf(e.container.styles.position), 0 !== e.container.styles.overflowX) {
                  var i = Ml(e.curves), o = Ol(e.curves);
                  Pl(i, o) || r.unshift(new Vl(o, 6))
                }
              } else r.unshift.apply(r, n);
              e = e.parent
            }
            return r.filter((function (t) {
              return sa(t.target, A)
            }))
          }, A
        }(), Xl = function A(t, e, r, n) {
          t.container.elements.forEach((function (i) {
            var o = sa(i.flags, 4), s = sa(i.flags, 2), a = new Jl(i, t);
            sa(i.styles.display, 2048) && n.push(a);
            var c = sa(i.flags, 8) ? [] : n;
            if (o || s) {
              var l = o || i.styles.isPositioned() ? r : e, B = new Nl(a);
              if (i.styles.isPositioned() || i.styles.opacity < 1 || i.styles.isTransformed()) {
                var u = i.styles.zIndex.order;
                if (u < 0) {
                  var g = 0;
                  l.negativeZIndex.some((function (A, t) {
                    return u > A.element.container.styles.zIndex.order ? (g = t, !1) : g > 0
                  })), l.negativeZIndex.splice(g, 0, B)
                } else if (u > 0) {
                  var h = 0;
                  l.positiveZIndex.some((function (A, t) {
                    return u >= A.element.container.styles.zIndex.order ? (h = t + 1, !1) : h > 0
                  })), l.positiveZIndex.splice(h, 0, B)
                } else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(B)
              } else i.styles.isFloating() ? l.nonPositionedFloats.push(B) : l.nonPositionedInlineLevel.push(B);
              A(a, B, o ? B : r, c)
            } else i.styles.isInlineLevel() ? e.inlineLevel.push(a) : e.nonInlineLevel.push(a), A(a, e, r, c);
            sa(i.flags, 8) && Yl(i, c)
          }))
        }, Yl = function (A, t) {
          for (var e = A instanceof ac ? A.start : 1, r = A instanceof ac && A.reversed, n = 0; n < t.length; n++) {
            var i = t[n];
            i.container instanceof sc && "number" == typeof i.container.value && 0 !== i.container.value && (e = i.container.value), i.listValue = rl(e, i.container.styles.listStyleType, !0), e += r ? -1 : 1
          }
        }, Wl = function (A) {
          var t = new Jl(A, null), e = new Nl(t), r = [];
          return Xl(t, e, e, r), Yl(t.container, r), e
        }, jl = function (A, t) {
          switch (t) {
            case 0:
              return zl(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
            case 1:
              return zl(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
            case 2:
              return zl(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
            default:
              return zl(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox)
          }
        }, Zl = function (A, t) {
          var e = [];
          return Dl(A) ? e.push(A.subdivide(.5, !1)) : e.push(A), Dl(t) ? e.push(t.subdivide(.5, !0)) : e.push(t), e
        }, zl = function (A, t, e, r) {
          var n = [];
          return Dl(A) ? n.push(A.subdivide(.5, !1)) : n.push(A), Dl(e) ? n.push(e.subdivide(.5, !0)) : n.push(e), Dl(r) ? n.push(r.subdivide(.5, !0).reverse()) : n.push(r), Dl(t) ? n.push(t.subdivide(.5, !1).reverse()) : n.push(t), n
        }, $l = function (A) {
          var t = A.bounds, e = A.styles;
          return t.add(e.borderLeftWidth, e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth), -(e.borderTopWidth + e.borderBottomWidth))
        }, ql = function (A) {
          var t = A.styles, e = A.bounds, r = eo(t.paddingLeft, e.width), n = eo(t.paddingRight, e.width),
            i = eo(t.paddingTop, e.width), o = eo(t.paddingBottom, e.width);
          return e.add(r + t.borderLeftWidth, i + t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth + r + n), -(t.borderTopWidth + t.borderBottomWidth + i + o))
        }, AB = function (A, t, e) {
          var r = function (A, t) {
              return 0 === A ? t.bounds : 2 === A ? ql(t) : $l(t)
            }(nB(A.styles.backgroundOrigin, t), A), n = function (A, t) {
              return 0 === A ? t.bounds : 2 === A ? ql(t) : $l(t)
            }(nB(A.styles.backgroundClip, t), A), i = rB(nB(A.styles.backgroundSize, t), e, r), o = i[0], s = i[1],
            a = to(nB(A.styles.backgroundPosition, t), r.width - o, r.height - s);
          return [iB(nB(A.styles.backgroundRepeat, t), a, i, r, n), Math.round(r.left + a[0]), Math.round(r.top + a[1]), o, s]
        }, tB = function (A) {
          return Ri(A) && A.value === To.AUTO
        }, eB = function (A) {
          return "number" == typeof A
        }, rB = function (A, t, e) {
          var r = t[0], n = t[1], i = t[2], o = A[0], s = A[1];
          if (!o) return [0, 0];
          if (Zi(o) && s && Zi(s)) return [eo(o, e.width), eo(s, e.height)];
          var a = eB(i);
          if (Ri(o) && (o.value === To.CONTAIN || o.value === To.COVER)) return eB(i) ? e.width / e.height < i != (o.value === To.COVER) ? [e.width, e.width / i] : [e.height * i, e.height] : [e.width, e.height];
          var c = eB(r), l = eB(n), B = c || l;
          if (tB(o) && (!s || tB(s))) return c && l ? [r, n] : a || B ? B && a ? [c ? r : n * i, l ? n : r / i] : [c ? r : e.width, l ? n : e.height] : [e.width, e.height];
          if (a) {
            var u = 0, g = 0;
            return Zi(o) ? u = eo(o, e.width) : Zi(s) && (g = eo(s, e.height)), tB(o) ? u = g * i : s && !tB(s) || (g = u / i), [u, g]
          }
          var h = null, w = null;
          if (Zi(o) ? h = eo(o, e.width) : s && Zi(s) && (w = eo(s, e.height)), null === h || s && !tB(s) || (w = c && l ? h / r * n : e.height), null !== w && tB(o) && (h = c && l ? w / n * r : e.width), null !== h && null !== w) return [h, w];
          throw new Error("Unable to calculate background-size for element")
        }, nB = function (A, t) {
          var e = A[t];
          return void 0 === e ? A[0] : e
        }, iB = function (A, t, e, r, n) {
          var i = t[0], o = t[1], s = e[0], a = e[1];
          switch (A) {
            case 2:
              return [new Kl(Math.round(r.left), Math.round(r.top + o)), new Kl(Math.round(r.left + r.width), Math.round(r.top + o)), new Kl(Math.round(r.left + r.width), Math.round(a + r.top + o)), new Kl(Math.round(r.left), Math.round(a + r.top + o))];
            case 3:
              return [new Kl(Math.round(r.left + i), Math.round(r.top)), new Kl(Math.round(r.left + i + s), Math.round(r.top)), new Kl(Math.round(r.left + i + s), Math.round(r.height + r.top)), new Kl(Math.round(r.left + i), Math.round(r.height + r.top))];
            case 1:
              return [new Kl(Math.round(r.left + i), Math.round(r.top + o)), new Kl(Math.round(r.left + i + s), Math.round(r.top + o)), new Kl(Math.round(r.left + i + s), Math.round(r.top + o + a)), new Kl(Math.round(r.left + i), Math.round(r.top + o + a))];
            default:
              return [new Kl(Math.round(n.left), Math.round(n.top)), new Kl(Math.round(n.left + n.width), Math.round(n.top)), new Kl(Math.round(n.left + n.width), Math.round(n.height + n.top)), new Kl(Math.round(n.left), Math.round(n.height + n.top))]
          }
        }, oB = "Hidden Text", sB = function () {
          function A(A) {
            this._data = {}, this._document = A
          }

          return A.prototype.parseMetrics = function (A, t) {
            var e = this._document.createElement("div"), r = this._document.createElement("img"),
              n = this._document.createElement("span"), i = this._document.body;
            e.style.visibility = "hidden", e.style.fontFamily = A, e.style.fontSize = t, e.style.margin = "0", e.style.padding = "0", e.style.whiteSpace = "nowrap", i.appendChild(e), r.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", r.width = 1, r.height = 1, r.style.margin = "0", r.style.padding = "0", r.style.verticalAlign = "baseline", n.style.fontFamily = A, n.style.fontSize = t, n.style.margin = "0", n.style.padding = "0", n.appendChild(this._document.createTextNode(oB)), e.appendChild(n), e.appendChild(r);
            var o = r.offsetTop - n.offsetTop + 2;
            e.removeChild(n), e.appendChild(this._document.createTextNode(oB)), e.style.lineHeight = "normal", r.style.verticalAlign = "super";
            var s = r.offsetTop - e.offsetTop + 2;
            return i.removeChild(e), {baseline: o, middle: s}
          }, A.prototype.getMetrics = function (A, t) {
            var e = A + " " + t;
            return void 0 === this._data[e] && (this._data[e] = this.parseMetrics(A, t)), this._data[e]
          }, A
        }(), aB = function (A, t) {
          this.context = A, this.options = t
        }, cB = function (A) {
          function t(t, e) {
            var r = A.call(this, t, e) || this;
            return r._activeEffects = [], r.canvas = e.canvas ? e.canvas : document.createElement("canvas"), r.ctx = r.canvas.getContext("2d"), e.canvas || (r.canvas.width = Math.floor(e.width * e.scale), r.canvas.height = Math.floor(e.height * e.scale), r.canvas.style.width = e.width + "px", r.canvas.style.height = e.height + "px"), r.fontMetrics = new sB(document), r.ctx.scale(r.options.scale, r.options.scale), r.ctx.translate(-e.x, -e.y), r.ctx.textBaseline = "bottom", r._activeEffects = [], r.context.logger.debug("Canvas renderer initialized (" + e.width + "x" + e.height + ") with scale " + e.scale), r
          }

          return $r(t, A), t.prototype.applyEffects = function (A) {
            for (var t = this; this._activeEffects.length;) this.popEffect();
            A.forEach((function (A) {
              return t.applyEffect(A)
            }))
          }, t.prototype.applyEffect = function (A) {
            this.ctx.save(), function (A) {
              return 2 === A.type
            }(A) && (this.ctx.globalAlpha = A.opacity), function (A) {
              return 0 === A.type
            }(A) && (this.ctx.translate(A.offsetX, A.offsetY), this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]), this.ctx.translate(-A.offsetX, -A.offsetY)), Rl(A) && (this.path(A.path), this.ctx.clip()), this._activeEffects.push(A)
          }, t.prototype.popEffect = function () {
            this._activeEffects.pop(), this.ctx.restore()
          }, t.prototype.renderStack = function (A) {
            return An(this, void 0, void 0, (function () {
              return tn(this, (function (t) {
                switch (t.label) {
                  case 0:
                    return A.element.container.styles.isVisible() ? [4, this.renderStackContent(A)] : [3, 2];
                  case 1:
                    t.sent(), t.label = 2;
                  case 2:
                    return [2]
                }
              }))
            }))
          }, t.prototype.renderNode = function (A) {
            return An(this, void 0, void 0, (function () {
              return tn(this, (function (t) {
                switch (t.label) {
                  case 0:
                    return sa(A.container.flags, 16), A.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(A)] : [3, 3];
                  case 1:
                    return t.sent(), [4, this.renderNodeContent(A)];
                  case 2:
                    t.sent(), t.label = 3;
                  case 3:
                    return [2]
                }
              }))
            }))
          }, t.prototype.renderTextWithLetterSpacing = function (A, t, e) {
            var r = this;
            0 === t ? this.ctx.fillText(A.text, A.bounds.left, A.bounds.top + e) : Za(A.text).reduce((function (t, n) {
              return r.ctx.fillText(n, t, A.bounds.top + e), t + r.ctx.measureText(n).width
            }), A.bounds.left)
          }, t.prototype.createFontStyle = function (A) {
            var t = A.fontVariant.filter((function (A) {
                return "normal" === A || "small-caps" === A
              })).join(""), e = hB(A.fontFamily).join(", "),
              r = Vi(A.fontSize) ? "" + A.fontSize.number + A.fontSize.unit : A.fontSize.number + "px";
            return [[A.fontStyle, t, A.fontWeight, r, e].join(" "), e, r]
          }, t.prototype.renderTextNode = function (A, t) {
            return An(this, void 0, void 0, (function () {
              var e, r, n, i, o, s, a, c, l = this;
              return tn(this, (function (B) {
                return e = this.createFontStyle(t), r = e[0], n = e[1], i = e[2], this.ctx.font = r, this.ctx.direction = 1 === t.direction ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", o = this.fontMetrics.getMetrics(n, i), s = o.baseline, a = o.middle, c = t.paintOrder, A.textBounds.forEach((function (A) {
                  c.forEach((function (e) {
                    switch (e) {
                      case 0:
                        l.ctx.fillStyle = Bo(t.color), l.renderTextWithLetterSpacing(A, t.letterSpacing, s);
                        var r = t.textShadow;
                        r.length && A.text.trim().length && (r.slice(0).reverse().forEach((function (e) {
                          l.ctx.shadowColor = Bo(e.color), l.ctx.shadowOffsetX = e.offsetX.number * l.options.scale, l.ctx.shadowOffsetY = e.offsetY.number * l.options.scale, l.ctx.shadowBlur = e.blur.number, l.renderTextWithLetterSpacing(A, t.letterSpacing, s)
                        })), l.ctx.shadowColor = "", l.ctx.shadowOffsetX = 0, l.ctx.shadowOffsetY = 0, l.ctx.shadowBlur = 0), t.textDecorationLine.length && (l.ctx.fillStyle = Bo(t.textDecorationColor || t.color), t.textDecorationLine.forEach((function (t) {
                          switch (t) {
                            case 1:
                              l.ctx.fillRect(A.bounds.left, Math.round(A.bounds.top + s), A.bounds.width, 1);
                              break;
                            case 2:
                              l.ctx.fillRect(A.bounds.left, Math.round(A.bounds.top), A.bounds.width, 1);
                              break;
                            case 3:
                              l.ctx.fillRect(A.bounds.left, Math.ceil(A.bounds.top + a), A.bounds.width, 1)
                          }
                        })));
                        break;
                      case 1:
                        t.webkitTextStrokeWidth && A.text.trim().length && (l.ctx.strokeStyle = Bo(t.webkitTextStrokeColor), l.ctx.lineWidth = t.webkitTextStrokeWidth, l.ctx.lineJoin = window.chrome ? "miter" : "round", l.ctx.strokeText(A.text, A.bounds.left, A.bounds.top + s)), l.ctx.strokeStyle = "", l.ctx.lineWidth = 0, l.ctx.lineJoin = "miter"
                    }
                  }))
                })), [2]
              }))
            }))
          }, t.prototype.renderReplacedElement = function (A, t, e) {
            if (e && A.intrinsicWidth > 0 && A.intrinsicHeight > 0) {
              var r = ql(A), n = Ol(t);
              this.path(n), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(e, 0, 0, A.intrinsicWidth, A.intrinsicHeight, r.left, r.top, r.width, r.height), this.ctx.restore()
            }
          }, t.prototype.renderNodeContent = function (A) {
            return An(this, void 0, void 0, (function () {
              var e, r, n, i, o, s, a, c, l, B, u, g, h, w, f, d, p, Q;
              return tn(this, (function (C) {
                switch (C.label) {
                  case 0:
                    this.applyEffects(A.getEffects(4)), e = A.container, r = A.curves, n = e.styles, i = 0, o = e.textNodes, C.label = 1;
                  case 1:
                    return i < o.length ? (s = o[i], [4, this.renderTextNode(s, n)]) : [3, 4];
                  case 2:
                    C.sent(), C.label = 3;
                  case 3:
                    return i++, [3, 1];
                  case 4:
                    if (!(e instanceof nc)) return [3, 8];
                    C.label = 5;
                  case 5:
                    return C.trys.push([5, 7, , 8]), [4, this.context.cache.match(e.src)];
                  case 6:
                    return f = C.sent(), this.renderReplacedElement(e, r, f), [3, 8];
                  case 7:
                    return C.sent(), this.context.logger.error("Error loading image " + e.src), [3, 8];
                  case 8:
                    if (e instanceof ic && this.renderReplacedElement(e, r, e.canvas), !(e instanceof oc)) return [3, 12];
                    C.label = 9;
                  case 9:
                    return C.trys.push([9, 11, , 12]), [4, this.context.cache.match(e.svg)];
                  case 10:
                    return f = C.sent(), this.renderReplacedElement(e, r, f), [3, 12];
                  case 11:
                    return C.sent(), this.context.logger.error("Error loading svg " + e.svg.substring(0, 255)), [3, 12];
                  case 12:
                    return e instanceof pc && e.tree ? [4, new t(this.context, {
                      scale: this.options.scale,
                      backgroundColor: e.backgroundColor,
                      x: 0,
                      y: 0,
                      width: e.width,
                      height: e.height
                    }).render(e.tree)] : [3, 14];
                  case 13:
                    a = C.sent(), e.width && e.height && this.ctx.drawImage(a, 0, 0, e.width, e.height, e.bounds.left, e.bounds.top, e.bounds.width, e.bounds.height), C.label = 14;
                  case 14:
                    if (e instanceof wc && (c = Math.min(e.bounds.width, e.bounds.height), e.type === Bc ? e.checked && (this.ctx.save(), this.path([new Kl(e.bounds.left + .39363 * c, e.bounds.top + .79 * c), new Kl(e.bounds.left + .16 * c, e.bounds.top + .5549 * c), new Kl(e.bounds.left + .27347 * c, e.bounds.top + .44071 * c), new Kl(e.bounds.left + .39694 * c, e.bounds.top + .5649 * c), new Kl(e.bounds.left + .72983 * c, e.bounds.top + .23 * c), new Kl(e.bounds.left + .84 * c, e.bounds.top + .34085 * c), new Kl(e.bounds.left + .39363 * c, e.bounds.top + .79 * c)]), this.ctx.fillStyle = Bo(hc), this.ctx.fill(), this.ctx.restore()) : e.type === uc && e.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(e.bounds.left + c / 2, e.bounds.top + c / 2, c / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = Bo(hc), this.ctx.fill(), this.ctx.restore())), lB(e) && e.value.length) {
                      switch (l = this.createFontStyle(n), p = l[0], B = l[1], u = this.fontMetrics.getMetrics(p, B).baseline, this.ctx.font = p, this.ctx.fillStyle = Bo(n.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = uB(e.styles.textAlign), Q = ql(e), g = 0, e.styles.textAlign) {
                        case 1:
                          g += Q.width / 2;
                          break;
                        case 2:
                          g += Q.width
                      }
                      h = Q.add(g, 0, 0, -Q.height / 2 + 1), this.ctx.save(), this.path([new Kl(Q.left, Q.top), new Kl(Q.left + Q.width, Q.top), new Kl(Q.left + Q.width, Q.top + Q.height), new Kl(Q.left, Q.top + Q.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Ya(e.value, h), n.letterSpacing, u), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left"
                    }
                    if (!sa(e.styles.display, 2048)) return [3, 20];
                    if (null === e.styles.listStyleImage) return [3, 19];
                    if (0 !== (w = e.styles.listStyleImage).type) return [3, 18];
                    f = void 0, d = w.url, C.label = 15;
                  case 15:
                    return C.trys.push([15, 17, , 18]), [4, this.context.cache.match(d)];
                  case 16:
                    return f = C.sent(), this.ctx.drawImage(f, e.bounds.left - (f.width + 10), e.bounds.top), [3, 18];
                  case 17:
                    return C.sent(), this.context.logger.error("Error loading list-style-image " + d), [3, 18];
                  case 18:
                    return [3, 20];
                  case 19:
                    A.listValue && -1 !== e.styles.listStyleType && (p = this.createFontStyle(n)[0], this.ctx.font = p, this.ctx.fillStyle = Bo(n.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", Q = new en(e.bounds.left, e.bounds.top + eo(e.styles.paddingTop, e.bounds.width), e.bounds.width, ms(n.lineHeight, n.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Ya(A.listValue, Q), n.letterSpacing, ms(n.lineHeight, n.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), C.label = 20;
                  case 20:
                    return [2]
                }
              }))
            }))
          }, t.prototype.renderStackContent = function (A) {
            return An(this, void 0, void 0, (function () {
              var t, e, r, n, i, o, s, a, c, l, B, u, g, h, w;
              return tn(this, (function (f) {
                switch (f.label) {
                  case 0:
                    return sa(A.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(A.element)];
                  case 1:
                    f.sent(), t = 0, e = A.negativeZIndex, f.label = 2;
                  case 2:
                    return t < e.length ? (w = e[t], [4, this.renderStack(w)]) : [3, 5];
                  case 3:
                    f.sent(), f.label = 4;
                  case 4:
                    return t++, [3, 2];
                  case 5:
                    return [4, this.renderNodeContent(A.element)];
                  case 6:
                    f.sent(), r = 0, n = A.nonInlineLevel, f.label = 7;
                  case 7:
                    return r < n.length ? (w = n[r], [4, this.renderNode(w)]) : [3, 10];
                  case 8:
                    f.sent(), f.label = 9;
                  case 9:
                    return r++, [3, 7];
                  case 10:
                    i = 0, o = A.nonPositionedFloats, f.label = 11;
                  case 11:
                    return i < o.length ? (w = o[i], [4, this.renderStack(w)]) : [3, 14];
                  case 12:
                    f.sent(), f.label = 13;
                  case 13:
                    return i++, [3, 11];
                  case 14:
                    s = 0, a = A.nonPositionedInlineLevel, f.label = 15;
                  case 15:
                    return s < a.length ? (w = a[s], [4, this.renderStack(w)]) : [3, 18];
                  case 16:
                    f.sent(), f.label = 17;
                  case 17:
                    return s++, [3, 15];
                  case 18:
                    c = 0, l = A.inlineLevel, f.label = 19;
                  case 19:
                    return c < l.length ? (w = l[c], [4, this.renderNode(w)]) : [3, 22];
                  case 20:
                    f.sent(), f.label = 21;
                  case 21:
                    return c++, [3, 19];
                  case 22:
                    B = 0, u = A.zeroOrAutoZIndexOrTransformedOrOpacity, f.label = 23;
                  case 23:
                    return B < u.length ? (w = u[B], [4, this.renderStack(w)]) : [3, 26];
                  case 24:
                    f.sent(), f.label = 25;
                  case 25:
                    return B++, [3, 23];
                  case 26:
                    g = 0, h = A.positiveZIndex, f.label = 27;
                  case 27:
                    return g < h.length ? (w = h[g], [4, this.renderStack(w)]) : [3, 30];
                  case 28:
                    f.sent(), f.label = 29;
                  case 29:
                    return g++, [3, 27];
                  case 30:
                    return [2]
                }
              }))
            }))
          }, t.prototype.mask = function (A) {
            this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(A.slice(0).reverse()), this.ctx.closePath()
          }, t.prototype.path = function (A) {
            this.ctx.beginPath(), this.formatPath(A), this.ctx.closePath()
          }, t.prototype.formatPath = function (A) {
            var t = this;
            A.forEach((function (A, e) {
              var r = Dl(A) ? A.start : A;
              0 === e ? t.ctx.moveTo(r.x, r.y) : t.ctx.lineTo(r.x, r.y), Dl(A) && t.ctx.bezierCurveTo(A.startControl.x, A.startControl.y, A.endControl.x, A.endControl.y, A.end.x, A.end.y)
            }))
          }, t.prototype.renderRepeat = function (A, t, e, r) {
            this.path(A), this.ctx.fillStyle = t, this.ctx.translate(e, r), this.ctx.fill(), this.ctx.translate(-e, -r)
          }, t.prototype.resizeImage = function (A, t, e) {
            var r;
            if (A.width === t && A.height === e) return A;
            var n = (null !== (r = this.canvas.ownerDocument) && void 0 !== r ? r : document).createElement("canvas");
            return n.width = Math.max(1, t), n.height = Math.max(1, e), n.getContext("2d").drawImage(A, 0, 0, A.width, A.height, 0, 0, t, e), n
          }, t.prototype.renderBackgroundImage = function (A) {
            return An(this, void 0, void 0, (function () {
              var t, e, r, n, i, o;
              return tn(this, (function (s) {
                switch (s.label) {
                  case 0:
                    t = A.styles.backgroundImage.length - 1, e = function (e) {
                      var n, i, o, s, a, c, l, B, u, g, h, w, f, d, p, Q, C, U, F, v, m, y, H, E, b, I, L, K, x, S, D;
                      return tn(this, (function (k) {
                        switch (k.label) {
                          case 0:
                            if (0 !== e.type) return [3, 5];
                            n = void 0, i = e.url, k.label = 1;
                          case 1:
                            return k.trys.push([1, 3, , 4]), [4, r.context.cache.match(i)];
                          case 2:
                            return n = k.sent(), [3, 4];
                          case 3:
                            return k.sent(), r.context.logger.error("Error loading background-image " + i), [3, 4];
                          case 4:
                            return n && (o = AB(A, t, [n.width, n.height, n.width / n.height]), Q = o[0], y = o[1], H = o[2], F = o[3], v = o[4], d = r.ctx.createPattern(r.resizeImage(n, F, v), "repeat"), r.renderRepeat(Q, d, y, H)), [3, 6];
                          case 5:
                            1 === e.type ? (s = AB(A, t, [null, null, null]), Q = s[0], y = s[1], H = s[2], F = s[3], v = s[4], a = yo(e.angle, F, v), c = a[0], l = a[1], B = a[2], u = a[3], g = a[4], (h = document.createElement("canvas")).width = F, h.height = v, w = h.getContext("2d"), f = w.createLinearGradient(l, u, B, g), mo(e.stops, c).forEach((function (A) {
                              return f.addColorStop(A.stop, Bo(A.color))
                            })), w.fillStyle = f, w.fillRect(0, 0, F, v), F > 0 && v > 0 && (d = r.ctx.createPattern(h, "repeat"), r.renderRepeat(Q, d, y, H))) : function (A) {
                              return 2 === A.type
                            }(e) && (p = AB(A, t, [null, null, null]), Q = p[0], C = p[1], U = p[2], F = p[3], v = p[4], m = 0 === e.position.length ? [qi] : e.position, y = eo(m[0], F), H = eo(m[m.length - 1], v), E = function (A, t, e, r, n) {
                              var i = 0, o = 0;
                              switch (A.size) {
                                case 0:
                                  0 === A.shape ? i = o = Math.min(Math.abs(t), Math.abs(t - r), Math.abs(e), Math.abs(e - n)) : 1 === A.shape && (i = Math.min(Math.abs(t), Math.abs(t - r)), o = Math.min(Math.abs(e), Math.abs(e - n)));
                                  break;
                                case 2:
                                  if (0 === A.shape) i = o = Math.min(Ho(t, e), Ho(t, e - n), Ho(t - r, e), Ho(t - r, e - n)); else if (1 === A.shape) {
                                    var s = Math.min(Math.abs(e), Math.abs(e - n)) / Math.min(Math.abs(t), Math.abs(t - r)),
                                      a = Eo(r, n, t, e, !0), c = a[0], l = a[1];
                                    o = s * (i = Ho(c - t, (l - e) / s))
                                  }
                                  break;
                                case 1:
                                  0 === A.shape ? i = o = Math.max(Math.abs(t), Math.abs(t - r), Math.abs(e), Math.abs(e - n)) : 1 === A.shape && (i = Math.max(Math.abs(t), Math.abs(t - r)), o = Math.max(Math.abs(e), Math.abs(e - n)));
                                  break;
                                case 3:
                                  if (0 === A.shape) i = o = Math.max(Ho(t, e), Ho(t, e - n), Ho(t - r, e), Ho(t - r, e - n)); else if (1 === A.shape) {
                                    s = Math.max(Math.abs(e), Math.abs(e - n)) / Math.max(Math.abs(t), Math.abs(t - r));
                                    var B = Eo(r, n, t, e, !1);
                                    c = B[0], l = B[1], o = s * (i = Ho(c - t, (l - e) / s))
                                  }
                              }
                              return Array.isArray(A.size) && (i = eo(A.size[0], r), o = 2 === A.size.length ? eo(A.size[1], n) : i), [i, o]
                            }(e, y, H, F, v), b = E[0], I = E[1], b > 0 && I > 0 && (L = r.ctx.createRadialGradient(C + y, U + H, 0, C + y, U + H, b), mo(e.stops, 2 * b).forEach((function (A) {
                              return L.addColorStop(A.stop, Bo(A.color))
                            })), r.path(Q), r.ctx.fillStyle = L, b !== I ? (K = A.bounds.left + .5 * A.bounds.width, x = A.bounds.top + .5 * A.bounds.height, D = 1 / (S = I / b), r.ctx.save(), r.ctx.translate(K, x), r.ctx.transform(1, 0, 0, S, 0, 0), r.ctx.translate(-K, -x), r.ctx.fillRect(C, D * (U - x) + x, F, v * D), r.ctx.restore()) : r.ctx.fill())), k.label = 6;
                          case 6:
                            return t--, [2]
                        }
                      }))
                    }, r = this, n = 0, i = A.styles.backgroundImage.slice(0).reverse(), s.label = 1;
                  case 1:
                    return n < i.length ? (o = i[n], [5, e(o)]) : [3, 4];
                  case 2:
                    s.sent(), s.label = 3;
                  case 3:
                    return n++, [3, 1];
                  case 4:
                    return [2]
                }
              }))
            }))
          }, t.prototype.renderSolidBorder = function (A, t, e) {
            return An(this, void 0, void 0, (function () {
              return tn(this, (function (r) {
                return this.path(jl(e, t)), this.ctx.fillStyle = Bo(A), this.ctx.fill(), [2]
              }))
            }))
          }, t.prototype.renderDoubleBorder = function (A, t, e, r) {
            return An(this, void 0, void 0, (function () {
              var n, i;
              return tn(this, (function (o) {
                switch (o.label) {
                  case 0:
                    return t < 3 ? [4, this.renderSolidBorder(A, e, r)] : [3, 2];
                  case 1:
                    return o.sent(), [2];
                  case 2:
                    return n = function (A, t) {
                      switch (t) {
                        case 0:
                          return zl(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
                        case 1:
                          return zl(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
                        case 2:
                          return zl(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
                        default:
                          return zl(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox)
                      }
                    }(r, e), this.path(n), this.ctx.fillStyle = Bo(A), this.ctx.fill(), i = function (A, t) {
                      switch (t) {
                        case 0:
                          return zl(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
                        case 1:
                          return zl(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
                        case 2:
                          return zl(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
                        default:
                          return zl(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox)
                      }
                    }(r, e), this.path(i), this.ctx.fill(), [2]
                }
              }))
            }))
          }, t.prototype.renderNodeBackgroundAndBorders = function (A) {
            return An(this, void 0, void 0, (function () {
              var t, e, r, n, i, o, s, a, c = this;
              return tn(this, (function (l) {
                switch (l.label) {
                  case 0:
                    return this.applyEffects(A.getEffects(2)), t = A.container.styles, e = !lo(t.backgroundColor) || t.backgroundImage.length, r = [{
                      style: t.borderTopStyle,
                      color: t.borderTopColor,
                      width: t.borderTopWidth
                    }, {
                      style: t.borderRightStyle,
                      color: t.borderRightColor,
                      width: t.borderRightWidth
                    }, {
                      style: t.borderBottomStyle,
                      color: t.borderBottomColor,
                      width: t.borderBottomWidth
                    }, {
                      style: t.borderLeftStyle,
                      color: t.borderLeftColor,
                      width: t.borderLeftWidth
                    }], n = BB(nB(t.backgroundClip, 0), A.curves), e || t.boxShadow.length ? (this.ctx.save(), this.path(n), this.ctx.clip(), lo(t.backgroundColor) || (this.ctx.fillStyle = Bo(t.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(A.container)]) : [3, 2];
                  case 1:
                    l.sent(), this.ctx.restore(), t.boxShadow.slice(0).reverse().forEach((function (t) {
                      c.ctx.save();
                      var e, r, n, i, o, s = Ml(A.curves), a = t.inset ? 0 : 1e4,
                        l = (e = s, r = -a + (t.inset ? 1 : -1) * t.spread.number, n = (t.inset ? 1 : -1) * t.spread.number, i = t.spread.number * (t.inset ? -2 : 2), o = t.spread.number * (t.inset ? -2 : 2), e.map((function (A, t) {
                          switch (t) {
                            case 0:
                              return A.add(r, n);
                            case 1:
                              return A.add(r + i, n);
                            case 2:
                              return A.add(r + i, n + o);
                            case 3:
                              return A.add(r, n + o)
                          }
                          return A
                        })));
                      t.inset ? (c.path(s), c.ctx.clip(), c.mask(l)) : (c.mask(s), c.ctx.clip(), c.path(l)), c.ctx.shadowOffsetX = t.offsetX.number + a, c.ctx.shadowOffsetY = t.offsetY.number, c.ctx.shadowColor = Bo(t.color), c.ctx.shadowBlur = t.blur.number, c.ctx.fillStyle = t.inset ? Bo(t.color) : "rgba(0,0,0,1)", c.ctx.fill(), c.ctx.restore()
                    })), l.label = 2;
                  case 2:
                    i = 0, o = 0, s = r, l.label = 3;
                  case 3:
                    return o < s.length ? 0 !== (a = s[o]).style && !lo(a.color) && a.width > 0 ? 2 !== a.style ? [3, 5] : [4, this.renderDashedDottedBorder(a.color, a.width, i, A.curves, 2)] : [3, 11] : [3, 13];
                  case 4:
                    return l.sent(), [3, 11];
                  case 5:
                    return 3 !== a.style ? [3, 7] : [4, this.renderDashedDottedBorder(a.color, a.width, i, A.curves, 3)];
                  case 6:
                    return l.sent(), [3, 11];
                  case 7:
                    return 4 !== a.style ? [3, 9] : [4, this.renderDoubleBorder(a.color, a.width, i, A.curves)];
                  case 8:
                    return l.sent(), [3, 11];
                  case 9:
                    return [4, this.renderSolidBorder(a.color, i, A.curves)];
                  case 10:
                    l.sent(), l.label = 11;
                  case 11:
                    i++, l.label = 12;
                  case 12:
                    return o++, [3, 3];
                  case 13:
                    return [2]
                }
              }))
            }))
          }, t.prototype.renderDashedDottedBorder = function (A, t, e, r, n) {
            return An(this, void 0, void 0, (function () {
              var i, o, s, a, c, l, B, u, g, h, w, f, d, p, Q, C;
              return tn(this, (function (U) {
                return this.ctx.save(), i = function (A, t) {
                  switch (t) {
                    case 0:
                      return Zl(A.topLeftBorderStroke, A.topRightBorderStroke);
                    case 1:
                      return Zl(A.topRightBorderStroke, A.bottomRightBorderStroke);
                    case 2:
                      return Zl(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
                    default:
                      return Zl(A.bottomLeftBorderStroke, A.topLeftBorderStroke)
                  }
                }(r, e), o = jl(r, e), 2 === n && (this.path(o), this.ctx.clip()), Dl(o[0]) ? (s = o[0].start.x, a = o[0].start.y) : (s = o[0].x, a = o[0].y), Dl(o[1]) ? (c = o[1].end.x, l = o[1].end.y) : (c = o[1].x, l = o[1].y), B = 0 === e || 2 === e ? Math.abs(s - c) : Math.abs(a - l), this.ctx.beginPath(), 3 === n ? this.formatPath(i) : this.formatPath(o.slice(0, 2)), u = t < 3 ? 3 * t : 2 * t, g = t < 3 ? 2 * t : t, 3 === n && (u = t, g = t), h = !0, B <= 2 * u ? h = !1 : B <= 2 * u + g ? (u *= w = B / (2 * u + g), g *= w) : (f = Math.floor((B + g) / (u + g)), d = (B - f * u) / (f - 1), g = (p = (B - (f + 1) * u) / f) <= 0 || Math.abs(g - d) < Math.abs(g - p) ? d : p), h && (3 === n ? this.ctx.setLineDash([0, u + g]) : this.ctx.setLineDash([u, g])), 3 === n ? (this.ctx.lineCap = "round", this.ctx.lineWidth = t) : this.ctx.lineWidth = 2 * t + 1.1, this.ctx.strokeStyle = Bo(A), this.ctx.stroke(), this.ctx.setLineDash([]), 2 === n && (Dl(o[0]) && (Q = o[3], C = o[0], this.ctx.beginPath(), this.formatPath([new Kl(Q.end.x, Q.end.y), new Kl(C.start.x, C.start.y)]), this.ctx.stroke()), Dl(o[1]) && (Q = o[1], C = o[2], this.ctx.beginPath(), this.formatPath([new Kl(Q.end.x, Q.end.y), new Kl(C.start.x, C.start.y)]), this.ctx.stroke())), this.ctx.restore(), [2]
              }))
            }))
          }, t.prototype.render = function (A) {
            return An(this, void 0, void 0, (function () {
              var t;
              return tn(this, (function (e) {
                switch (e.label) {
                  case 0:
                    return this.options.backgroundColor && (this.ctx.fillStyle = Bo(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), t = Wl(A), [4, this.renderStack(t)];
                  case 1:
                    return e.sent(), this.applyEffects([]), [2, this.canvas]
                }
              }))
            }))
          }, t
        }(aB), lB = function (A) {
          return A instanceof dc || (A instanceof fc || A instanceof wc && A.type !== uc && A.type !== Bc)
        }, BB = function (A, t) {
          switch (A) {
            case 0:
              return Ml(t);
            case 2:
              return function (A) {
                return [A.topLeftContentBox, A.topRightContentBox, A.bottomRightContentBox, A.bottomLeftContentBox]
              }(t);
            default:
              return Ol(t)
          }
        }, uB = function (A) {
          switch (A) {
            case 1:
              return "center";
            case 2:
              return "right";
            default:
              return "left"
          }
        }, gB = ["-apple-system", "system-ui"], hB = function (A) {
          return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter((function (A) {
            return -1 === gB.indexOf(A)
          })) : A
        }, wB = function (A) {
          function t(t, e) {
            var r = A.call(this, t, e) || this;
            return r.canvas = e.canvas ? e.canvas : document.createElement("canvas"), r.ctx = r.canvas.getContext("2d"), r.options = e, r.canvas.width = Math.floor(e.width * e.scale), r.canvas.height = Math.floor(e.height * e.scale), r.canvas.style.width = e.width + "px", r.canvas.style.height = e.height + "px", r.ctx.scale(r.options.scale, r.options.scale), r.ctx.translate(-e.x, -e.y), r.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + e.width + "x" + e.height + " at " + e.x + "," + e.y + ") with scale " + e.scale), r
          }

          return $r(t, A), t.prototype.render = function (A) {
            return An(this, void 0, void 0, (function () {
              var t, e;
              return tn(this, (function (r) {
                switch (r.label) {
                  case 0:
                    return t = Na(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, A), [4, fB(t)];
                  case 1:
                    return e = r.sent(), this.options.backgroundColor && (this.ctx.fillStyle = Bo(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(e, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas]
                }
              }))
            }))
          }, t
        }(aB), fB = function (A) {
          return new Promise((function (t, e) {
            var r = new Image;
            r.onload = function () {
              t(r)
            }, r.onerror = e, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(A))
          }))
        }, dB = function () {
          function A(A) {
            var t = A.id, e = A.enabled;
            this.id = t, this.enabled = e, this.start = Date.now()
          }

          return A.prototype.debug = function () {
            for (var A = [], t = 0; t < arguments.length; t++) A[t] = arguments[t];
            this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.debug || this.info.apply(this, A))
          }, A.prototype.getTime = function () {
            return Date.now() - this.start
          }, A.prototype.info = function () {
            for (var A = [], t = 0; t < arguments.length; t++) A[t] = arguments[t];
            this.enabled && "undefined" != typeof window && window.console && console.info
          }, A.prototype.warn = function () {
            for (var A = [], t = 0; t < arguments.length; t++) A[t] = arguments[t];
            this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.warn || this.info.apply(this, A))
          }, A.prototype.error = function () {
            for (var A = [], t = 0; t < arguments.length; t++) A[t] = arguments[t];
            this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.error || this.info.apply(this, A))
          }, A.instances = {}, A
        }(), pB = function () {
          function A(t, e) {
            var r;
            this.windowBounds = e, this.instanceName = "#" + A.instanceCount++, this.logger = new dB({
              id: this.instanceName,
              enabled: t.logging
            }), this.cache = null !== (r = t.cache) && void 0 !== r ? r : new Fl(this, t)
          }

          return A.instanceCount = 1, A
        }();
        "undefined" != typeof window && Ul.setContext(window);
        var QB = function (A, t) {
          return An(void 0, void 0, void 0, (function () {
            var e, r, n, i, o, s, a, c, B, u, g, h, w, f, d, p, Q, C, U, F, v, m, y, H, E, b, I, L, K, x, S, D, k, _, M,
              O, T, V;
            return tn(this, (function (G) {
              switch (G.label) {
                case 0:
                  if (!A || "object" !== l(A)) return [2, Promise.reject("Invalid element provided as first argument")];
                  if (!(e = A.ownerDocument)) throw new Error("Element is not attached to a Document");
                  if (!(r = e.defaultView)) throw new Error("Document is not attached to a Window");
                  return n = {
                    allowTaint: null !== (m = t.allowTaint) && void 0 !== m && m,
                    imageTimeout: null !== (y = t.imageTimeout) && void 0 !== y ? y : 15e3,
                    proxy: t.proxy,
                    useCORS: null !== (H = t.useCORS) && void 0 !== H && H
                  }, i = qr({
                    logging: null === (E = t.logging) || void 0 === E || E,
                    cache: t.cache
                  }, n), o = {
                    windowWidth: null !== (b = t.windowWidth) && void 0 !== b ? b : r.innerWidth,
                    windowHeight: null !== (I = t.windowHeight) && void 0 !== I ? I : r.innerHeight,
                    scrollX: null !== (L = t.scrollX) && void 0 !== L ? L : r.pageXOffset,
                    scrollY: null !== (K = t.scrollY) && void 0 !== K ? K : r.pageYOffset
                  }, s = new en(o.scrollX, o.scrollY, o.windowWidth, o.windowHeight), a = new pB(i, s), c = null !== (x = t.foreignObjectRendering) && void 0 !== x && x, B = {
                    allowTaint: null !== (S = t.allowTaint) && void 0 !== S && S,
                    onclone: t.onclone,
                    ignoreElements: t.ignoreElements,
                    inlineImages: c,
                    copyStyles: c
                  }, a.logger.debug("Starting document clone with size " + s.width + "x" + s.height + " scrolled to " + -s.left + "," + -s.top), u = new il(a, A, B), (g = u.clonedReferenceElement) ? [4, u.toIFrame(e, s)] : [2, Promise.reject("Unable to find element in cloned iframe")];
                case 1:
                  return h = G.sent(), w = Sc(g) || "HTML" === g.tagName ? function (A) {
                    var t = A.body, e = A.documentElement;
                    if (!t || !e) throw new Error("Unable to get document size");
                    var r = Math.max(Math.max(t.scrollWidth, e.scrollWidth), Math.max(t.offsetWidth, e.offsetWidth), Math.max(t.clientWidth, e.clientWidth)),
                      n = Math.max(Math.max(t.scrollHeight, e.scrollHeight), Math.max(t.offsetHeight, e.offsetHeight), Math.max(t.clientHeight, e.clientHeight));
                    return new en(0, 0, r, n)
                  }(g.ownerDocument) : rn(a, g), f = w.width, d = w.height, p = w.left, Q = w.top, C = CB(a, g, t.backgroundColor), U = {
                    canvas: t.canvas,
                    backgroundColor: C,
                    scale: null !== (k = null !== (D = t.scale) && void 0 !== D ? D : r.devicePixelRatio) && void 0 !== k ? k : 1,
                    x: (null !== (_ = t.x) && void 0 !== _ ? _ : 0) + p,
                    y: (null !== (M = t.y) && void 0 !== M ? M : 0) + Q,
                    width: null !== (O = t.width) && void 0 !== O ? O : Math.ceil(f),
                    height: null !== (T = t.height) && void 0 !== T ? T : Math.ceil(d)
                  }, c ? (a.logger.debug("Document cloned, using foreign object rendering"), [4, new wB(a, U).render(g)]) : [3, 3];
                case 2:
                  return F = G.sent(), [3, 5];
                case 3:
                  return a.logger.debug("Document cloned, element located at " + p + "," + Q + " with size " + f + "x" + d + " using computed rendering"), a.logger.debug("Starting DOM parsing"), v = Fc(a, g), C === v.styles.backgroundColor && (v.styles.backgroundColor = Co.TRANSPARENT), a.logger.debug("Starting renderer for element at " + U.x + "," + U.y + " with size " + U.width + "x" + U.height), [4, new cB(a, U).render(v)];
                case 4:
                  F = G.sent(), G.label = 5;
                case 5:
                  return (null === (V = t.removeContainer) || void 0 === V || V) && (il.destroy(h) || a.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), a.logger.debug("Finished rendering"), [2, F]
              }
            }))
          }))
        }, CB = function (A, t, e) {
          var r = t.ownerDocument,
            n = r.documentElement ? Qo(A, getComputedStyle(r.documentElement).backgroundColor) : Co.TRANSPARENT,
            i = r.body ? Qo(A, getComputedStyle(r.body).backgroundColor) : Co.TRANSPARENT,
            o = "string" == typeof e ? Qo(A, e) : null === e ? Co.TRANSPARENT : 4294967295;
          return t === r.documentElement ? lo(n) ? lo(i) ? o : i : n : o
        }, UB = function (A, t) {
          return new Promise((function (e, r) {
            var n, i;
            (n = A, i = {
              dpi: 2 * window.devicePixelRatio,
              scale: 1,
              allowTaint: !0,
              useCORS: !0,
              height: A.offsetHeight - 2,
              width: A.offsetWidth,
              scrollY: 0,
              scrollX: 0
            }, void 0 === i && (i = {}), QB(n, i)).then((function (A) {
              var r = new Image;
              r.src = A.toDataURL("png"), r.setAttribute("crossOrigin", "anonymous"), r.onload = function () {
                var r = A.toDataURL("image/png");
                t.imageUrl = r;
                var n = function (A) {
                  var t = A.split(","), e = t[0].match(/:(.*?);/)[1], r = atob(t[1]), n = r.length,
                    i = new Uint8Array(n);
                  for (; n--;) i[n] = r.charCodeAt(n);
                  return new Blob([i], {type: e})
                }(r);
                e(n)
              }
            }))
          }))
        };
        var FB = function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return e("div", [e("div", {staticClass: "wm-isshow"}, [A._m(0), e("div", {staticClass: "wm-main"}, [e("div", {staticClass: "wm-left"}, [e("div", {staticClass: "wm-i-w"}, [e("h2", {}, [A._v("水印")]), e("div", [e("el-radio", {
            attrs: {label: "1"},
            on: {change: A.handleRadio},
            model: {
              value: A.radio, callback: function (t) {
                A.radio = t
              }, expression: "radio"
            }
          }, [A._v("文本水印")]), e("el-input", {
            attrs: {disabled: "2" === A.radio, placeholder: ""},
            model: {
              value: A.wmConfig.text, callback: function (t) {
                A.$set(A.wmConfig, "text", t)
              }, expression: "wmConfig.text"
            }
          }), e("div", {class: "1" !== A.radio ? "noshow" : ""}, [e("TextSet", {on: {textEvent: A.handleSetText}})], 1), e("div", {staticClass: "wm-t2"}, [e("el-radio", {
            attrs: {label: "2"},
            on: {change: A.handleRadio},
            model: {
              value: A.radio, callback: function (t) {
                A.radio = t
              }, expression: "radio"
            }
          }, [A._v("图片水印")]), e("el-button", {
            attrs: {
              size: "mini",
              disabled: "2" !== A.radio
            }
          }, [A._v("添加图片(不推荐) "), e("input", {
            staticClass: "o-btn1",
            attrs: {disabled: "2" !== A.radio && "disabled", id: "upload", type: "file"},
            on: {change: A.viewer}
          })])], 1)], 1)]), e("div", {staticClass: "wm-i-w"}, [e("h2", {}, [A._v("外观")]), e("div", {
            staticClass: "wm-block",
            class: "2" === A.radio ? "noshow" : ""
          }, [e("span", {staticClass: "demonstration"}, [A._v("大小")]), e("el-slider", {
            attrs: {max: 80},
            model: {
              value: A.wmConfig.fontSize, callback: function (t) {
                A.$set(A.wmConfig, "fontSize", t)
              }, expression: "wmConfig.fontSize"
            }
          })], 1), e("div", {staticClass: "wm-block"}, [e("span", {staticClass: "demonstration"}, [A._v("透明度")]), e("el-slider", {
            attrs: {
              step: .1,
              max: 1
            }, model: {
              value: A.wmConfig.opacity, callback: function (t) {
                A.$set(A.wmConfig, "opacity", t)
              }, expression: "wmConfig.opacity"
            }
          })], 1), e("div", {staticClass: "wm-block"}, [e("span", {staticClass: "demonstration"}, [A._v("旋转")]), e("el-slider", {
            attrs: {
              min: -90,
              max: 90,
              "show-tooltip": !1
            }, model: {
              value: A.wmConfig.rotate, callback: function (t) {
                A.$set(A.wmConfig, "rotate", t)
              }, expression: "wmConfig.rotate"
            }
          })], 1), e("div", {staticClass: "wm-block"}, [e("span", {staticClass: "demonstration"}, [A._v("水平间距")]), e("el-slider", {
            attrs: {max: 400},
            model: {
              value: A.wmConfig.gapX, callback: function (t) {
                A.$set(A.wmConfig, "gapX", t)
              }, expression: "wmConfig.gapX"
            }
          })], 1), e("div", {staticClass: "wm-block"}, [e("span", {staticClass: "demonstration"}, [A._v("垂直间距")]), e("el-slider", {
            attrs: {
              disabled: !1,
              max: 400
            }, model: {
              value: A.wmConfig.gapY, callback: function (t) {
                A.$set(A.wmConfig, "gapY", t)
              }, expression: "wmConfig.gapY"
            }
          })], 1)]), e("div", {staticClass: "wm-i-w"}, [e("h2", {}, [A._v("位置")]), e("el-switch", {
            attrs: {
              "active-text": "重复展示",
              "active-value": "repeat",
              "inactive-value": "interval",
              "inactive-text": "错行展示"
            }, model: {
              value: A.wmConfig.mode, callback: function (t) {
                A.$set(A.wmConfig, "mode", t)
              }, expression: "wmConfig.mode"
            }
          })], 1)]), e("div", {staticClass: "wm-right"}, [e("p", [A._v("预览")]), e("div", {staticClass: "preview"}, [e("div", {ref: "previewImg"}, [e("Watermark", {
            attrs: {
              options: A.wmConfig,
              visible: !0
            }
          }, [e("canvas", {
            ref: "canvasRef",
            attrs: {id: "imageEffectCanvas"}
          })])], 1)]), e("div", {staticClass: "tipsFooter"}, [e("el-button", {
            staticClass: "cancel",
            on: {click: A.resetHandle}
          }, [A._v("取消")]), e("el-button", {
            staticClass: "true_w",
            attrs: {type: "primary", loading: A.isLoad},
            on: {click: A.submitHandle}
          }, [A._v(A._s(A.isLoad ? "正在上传" : "立即上传"))])], 1)])])])])
        }, vB = [function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return e("div", {staticClass: "wm-header"}, [e("span", [A._v("添加水印")])])
        }];
        FB._withStripped = !0;
        var mB = {
          data: function () {
            return {
              dialogImageUrl: "",
              afterFile: {},
              radio: "1",
              isLoad: !1,
              wmConfig: {
                image: "",
                gapX: 100,
                gapY: 100,
                opacity: .2,
                rotate: -22,
                fontSize: 20,
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "400",
                fontColor: "#000",
                fontFamily: "sans-serif",
                textAlign: "center",
                monitor: !0,
                zIndex: 9999,
                mode: "interval",
                text: "Blazeb2水印"
              }
            }
          }, props: {file: {type: Object}}, emits: ["resfile", "uninstall"], computed: t({
            newOption: function () {
              return this.wmConfig
            }
          }, le(Ie, ["toFile"])), mounted: function () {
            this.handlePictureCardPreview(this.file)
          }, methods: {
            submitHandle: function () {
              this.isLoad = !0, this.uploadSumit()
            }, resetHandle: function () {
              this.$emit("uninstall", !1)
            }, handleRadio: function () {
              "1" === this.radio && (this.wmConfig.image = "")
            }, handleSetText: function (A) {
              var t = A.label, e = A.value;
              this.wmConfig[t] = e
            }, viewer: function (A) {
              var t = this.getObjectURL(A.target.files[0]);
              this.wmConfig.image = t
            }, getObjectURL: function (A) {
              var t = null;
              return void 0 !== window.createObjectURL ? t = window.createObjectURL(A) : void 0 !== window.URL ? t = window.URL.createObjectURL(A) : void 0 !== window.webkitURL && (t = window.webkitURL.createObjectURL(A)), t
            }, blobToImg: function (A) {
              return new Promise((function (t, e) {
                var r = new FileReader;
                r.addEventListener("load", (function () {
                  var A = new Image;
                  A.src = r.result, A.addEventListener("load", (function () {
                    return t(A)
                  }))
                })), r.readAsDataURL(A)
              }))
            }, SetImgAutoSize: function (A, t, e) {
              var r = e.height / e.width, n = e.width / e.height;
              return e.width >= A && (e.width = A, e.height = A * r), e.height > t && (e.height = t, e.width = t * n), e.height < t && e.width < A && (e.width > e.height ? (e.height = t, e.width = r * A) : (e.width = A, e.height = n * t)), e
            }, ImageToCanvas: function (A) {
              var t = document.getElementById("imageEffectCanvas"), e = this.SetImgAutoSize(572, 442, A);
              return t.width = e.width, t.height = e.height, t.getContext("2d").drawImage(e, 0, 0, e.width, e.height), t
            }, handlePictureCardPreview: function (A) {
              var t = this;
              return o(r().mark((function e() {
                var n;
                return r().wrap((function (e) {
                  for (; ;) switch (e.prev = e.next) {
                    case 0:
                      return t.dialogImageUrl = A.url, e.next = 3, t.blobToImg(A.raw);
                    case 3:
                      n = e.sent, t.ImageToCanvas(n);
                    case 5:
                    case"end":
                      return e.stop()
                  }
                }), e)
              })))()
            }, uploadSumit: function () {
              var A = this;
              return o(r().mark((function t() {
                var e, n;
                return r().wrap((function (t) {
                  for (; ;) switch (t.prev = t.next) {
                    case 0:
                      return e = A.$refs.previewImg, t.next = 3, UB(e, A);
                    case 3:
                      return n = t.sent, t.abrupt("return", new Promise((function (t) {
                        var e = new FormData, r = localStorage.getItem("authmsg"),
                          i = Object.assign(JSON.parse(r), {tofile: A.toFile});
                        for (var o in e.append("file_", n), i) e.append(o, i[o]);
                        Fe(e).then((function (e) {
                          A.$emit("uninstall"), A.$emit("waterpic", e.data), ELEMENT.Notification({
                            title: "提示",
                            message: "水印图片已上传",
                            type: "success"
                          }), t(e.data)
                        }))
                      })));
                    case 5:
                    case"end":
                      return t.stop()
                  }
                }), t)
              })))()
            }
          }, components: {TextSet: Zr, Watermark: Pr}
        }, yB = {}, HB = he(mB, FB, vB, !1, EB, "112af39a", null, null);

        function EB(A) {
          for (var t in yB) this[t] = yB[t]
        }

        HB.options.__file = "src/views/home/components/wm/wmarkview.vue";
        var bB = function () {
          return HB.exports
        }(), IB = function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return A.isload ? e("div", {staticClass: "isdload animate__animated animate__fadeIn"}, [e("span", [e("img", {
            attrs: {
              src: "/img/loading.gif",
              alt: "",
              srcset: ""
            }
          }), A._v(A._s(A.loadText) + " "), A.totalnum ? e("i", [A._v(" (" + A._s(A.progressnum) + "/" + A._s(A.totalnum) + ") ")]) : A._e()])]) : A._e()
        }, LB = [];
        IB._withStripped = !0;
        var KB = {
          data: function () {
            return {}
          },
          props: {
            isload: {type: Boolean, default: !1},
            totalnum: {type: Number, default: 0},
            progressnum: {type: Number, default: 0},
            loadText: {type: String, default: ""}
          }
        }, xB = {}, SB = he(KB, IB, LB, !1, DB, null, null, null);

        function DB(A) {
          for (var t in xB) this[t] = xB[t]
        }

        SB.options.__file = "src/components/loading/MarkLoad.vue";
        var kB = A("a", function () {
          return SB.exports
        }()), _B = function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return e("div", {staticClass: "home-w"}, [e("div", {
            staticClass: "upload-w",
            staticStyle: {width: "100%"}
          }, [e("div", {attrs: {id: "tar_box", contenteditable: ""}}), e("el-upload", {
            ref: "uploadRef",
            staticClass: "upload-demo",
            attrs: {
              "auto-upload": !1,
              action: "customize",
              "file-list": A.fileList,
              multiple: "",
              "show-file-list": !1,
              limit: A.limit,
              "on-change": A.checkFileType,
              drag: ""
            }
          }, [e("MarkLoad", {
            attrs: {
              loadText: "正在上传",
              isload: A.loadings,
              progressnum: A.uploadProgress,
              totalnum: A.fileList.length
            }
          }), A.CompressData.iscompress ? e("div", {staticClass: "compress-remind"}, [A._v("开启压缩，压缩等级（"), e("span", {staticClass: "red-c"}, [A._v(A._s(A.CompressData.rank))]), A._v("） ")]) : A._e(), e("i", {staticClass: "el-icon-upload"}), e("div", {staticClass: "el-upload__text"}, [A._v(" 支持"), e("em", [A._v("拖动、点击、粘贴")]), A._v("图片"), e("em", [A._v("上传，")]), A._v("每次最多"), e("em", [A._v(A._s(A.limit))]), A._v("张 ")]), e("div", {
            attrs: {slot: "tip"},
            slot: "tip"
          }, [e("div", {staticClass: "el-upload__tip"}, [e("div", [A._v("当前上传路径:"), e("el-tag", {
            attrs: {
              type: A.tofile ? "" : "danger",
              size: "mini"
            }, on: {click: A.handleopenSetting}
          }, [A._v(A._s(A.tofile ? A.tofile : "你还未填写路径，点击这里"))])], 1), A.fdata && A.fdata.bucket_name ? e("div", {on: {click: A.handleopenSetting}}, [A._v(" 当前B2桶名称: "), e("el-tag", {attrs: {size: "mini"}}, [A._v(A._s(A.fdata.bucket_name))])], 1) : A._e()]), A.fileList.length > 0 ? e("span", [e("p", {staticClass: "p-upload-hd"}, [A._v(A._s("上传进度：" + A.uploadProgress + "/" + A.fileList.length))]), e("ul", {staticClass: "upload-wrap"}, A._l(A.fileList, (function (t, r) {
            return e("UploadList", {
              key: t.uid,
              ref: "uploadRef" + r,
              refInFor: !0,
              attrs: {styleCount: A.styC(r) ? "width:97.2%" : "", file: t, pid: r},
              on: {watermarkhandle: A.handleMark, changefilelist: A.handleDelete}
            })
          })), 1), A.isShowWm ? e("div", [e("div", {
            staticClass: "wm-contaniner", on: {
              click: function (t) {
                return t.target !== t.currentTarget ? null : A.handleClose(!1)
              }
            }
          }, [e("Wmarkview", {
            attrs: {file: A.fileList[A.currentfileIndex]},
            on: {waterpic: A.handleWatermarkEnd, uninstall: A.handleClose}
          })], 1)]) : A._e(), e("el-button", {
            staticClass: "btn-upload",
            attrs: {type: "primary", plain: "", loading: A.isLoad},
            on: {click: A.moreUploadPic}
          }, [A._v(A._s(A.isLoad ? "正在上传" : "上传"))]), e("el-button", {
            staticClass: "btn-upload",
            attrs: {type: "info", plain: ""},
            on: {click: A.handleReSet}
          }, [A._v("清空")])], 1) : A._e()])], 1)], 1)])
        }, MB = [];
        _B._withStripped = !0;
        var OB = {
          components: {UploadList: vr, Wmarkview: bB, MarkLoad: kB},
          data: function () {
            return {
              fdata: null,
              isShowWm: !1,
              currentfileIndex: 0,
              copycontent: "",
              loadings: !1,
              fileList: [],
              uploadProgress: 0,
              limit: 10,
              isLoad: !1,
              tofile: ""
            }
          },
          created: function () {
            window.addEventListener("paste", this.pasteHandle)
          },
          computed: t(t(t(t(t({}, le(Ie, ["defaultCopyUrl"])), le(Ie, ["CompressData"])), le(Ie, ["DefaultToFile"])), le(Ie, ["prefixStatus"])), {}, {
            timeE: function () {
              return (new Date).getFullYear()
            }, styC: function () {
              var A = this.fileList.length;
              return function (t) {
                return 1 === A || t === A - 1 && t % 2 == 0
              }
            }
          }),
          watch: {
            DefaultToFile: {
              immediate: !0, handler: function (A, t) {
                this.tofile = A
              }
            }
          },
          mounted: function () {
            window.addEventListener("paste", this.pasteHandle);
            var A = sessionStorage.getItem("templist");
            this.fdata = localStorage.getItem("token_api") && JSON.parse(localStorage.getItem("token_api")), A && (this.leftTempList = JSON.parse(A))
          },
          destroyed: function () {
            window.removeEventListener("paste", this.pasteHandle)
          },
          methods: t(t(t({}, Be(Ie, ["setDefaultFormat"])), Be(Ie, ["setShowSettingBtn"])), {}, {
            handleopenSetting: function () {
              this.setShowSettingBtn(!0)
            }, handleDelete: function (A) {
              this.fileList.splice(A, 1)
            }, handleWatermarkEnd: function (A) {
              this.leftTempList.unshift(A), this.handletempList(this.leftTempList)
            }, handleMark: function (A) {
              this.isShowWm = !0, this.currentfileIndex = A
            }, handleClose: function () {
              this.isShowWm = !1
            }, handleReSet: function () {
              this.$refs.uploadRef.clearFiles(), this.fileList = [], this.uploadProgress = 0
            }, pasteHandle: Ke((function (A) {
              var t = {percentage: 0, status: "ready"};
              t.raw = A.clipboardData.files[0], t.name = t.raw.name, t.size = t.raw.size, t.url = window.URL.createObjectURL(t.raw), t.uid = Date.now(), this.fileList = [].concat(n(this.fileList), [t])
            }), 500, !0), queue: function (A) {
              var t = this, e = [], r = Promise.resolve();
              return A.forEach((function (A) {
                r = r.then(A).then((function (A) {
                  return e.push(A), A.fileName && (t.uploadProgress += 1), e
                }))
              })), r
            }, moreUploadPic: function () {
              var A = this, t = [], e = this;
              e.isLoad = !0, ye().then(o(r().mark((function n() {
                var i;
                return r().wrap((function (r) {
                  for (; ;) switch (r.prev = r.next) {
                    case 0:
                      return e.loadings = !0, e.fileList.forEach((function (A, r) {
                        t.push(e.$refs["uploadRef" + r][0].uploadSumit)
                      })), r.next = 4, A.queue(t);
                    case 4:
                      i = e.fileList.length - e.uploadProgress, document.getElementById("tar_box").innerHTML = "", e.loadings = !1, e.isLoad = !1, ELEMENT.Notification({
                        title: "上传提示",
                        type: i ? "error" : "success",
                        message: "上传成功：".concat(e.uploadProgress, "张,上传失败：").concat(i, "张；").concat(i > 0 ? "失败原因：请求过于频繁，建议单张上传" : "")
                      });
                    case 9:
                    case"end":
                      return r.stop()
                  }
                }), n)
              })))).catch((function () {
                e.loadings = !1, e.isLoad = !1, ELEMENT.Notification({
                  title: "提示",
                  message: "请检查是否登陆,请检查keyid和key是否填写正确",
                  type: "error"
                })
              }))
            }, checkFileType: function (A) {
              var t = A.uid, e = A.name;
              if (/^.png|.jpg|.jpeg|.gif|.webp$/.test(e.substring(e.lastIndexOf(".")).toLowerCase())) {
                if (-1 !== this.fileList.findIndex((function (A) {
                  return A.name === e
                }))) {
                  ELEMENT.Message({message: "不能上传同名的文件", type: "warning"});
                  var r = this.fileList.filter((function (A) {
                    return A.uid !== t
                  }));
                  return this.fileList = r, !1
                }
                this.fileList.push(A)
              } else {
                ELEMENT.Message({message: "文件类型只能是.png|.jpg|.jpeg|.gif|.webp", type: "warning"});
                var n = this.fileList.filter((function (A) {
                  return A.uid !== t
                }));
                this.fileList = n
              }
            }
          })
        }, TB = {}, VB = he(OB, _B, MB, !1, GB, "3dd2e005", null, null);

        function GB(A) {
          for (var t in TB) this[t] = TB[t]
        }

        VB.options.__file = "src/views/home/Home.vue";
        var RB = function () {
          return VB.exports
        }(), PB = function () {
          var A = this.$createElement, t = this._self._c || A;
          return t("svg", {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              "aria-hidden": "true",
              focusable: "false",
              viewBox: "0 0 24 24"
            }
          }, [t("path", {
            attrs: {
              fill: "var(--b2-theme-c)",
              d: "M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"
            }
          })])
        }, NB = [];
        PB._withStripped = !0;
        var JB = {}, XB = he({}, PB, NB, !1, YB, null, null, null);

        function YB(A) {
          for (var t in JB) this[t] = JB[t]
        }

        XB.options.__file = "src/views/svg/VPIconMoon.vue";
        var WB = function () {
          return XB.exports
        }(), jB = function () {
          var A = this.$createElement, t = this._self._c || A;
          return t("svg", {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              "aria-hidden": "true",
              focusable: "false",
              viewBox: "0 0 24 24"
            }
          }, [t("path", {
            attrs: {
              fill: "var(--b2-theme-c)",
              d: "M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"
            }
          }), t("path", {
            attrs: {
              fill: "var(--b2-theme-c)",
              d: "M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"
            }
          }), t("path", {
            attrs: {
              fill: "var(--b2-theme-c)",
              d: "M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"
            }
          }), t("path", {
            attrs: {
              fill: "var(--b2-theme-c)",
              d: "M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"
            }
          }), t("path", {
            attrs: {
              fill: "var(--b2-theme-c)",
              d: "M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"
            }
          }), t("path", {
            attrs: {
              fill: "var(--b2-theme-c)",
              d: "M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"
            }
          }), t("path", {
            attrs: {
              fill: "var(--b2-theme-c)",
              d: "M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            }
          }), t("path", {
            attrs: {
              fill: "var(--b2-theme-c)",
              d: "M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"
            }
          }), t("path", {
            attrs: {
              fill: "var(--b2-theme-c)",
              d: "M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"
            }
          })])
        }, ZB = [];
        jB._withStripped = !0;
        var zB = {}, $B = he({}, jB, ZB, !1, qB, null, null, null);

        function qB(A) {
          for (var t in zB) this[t] = zB[t]
        }

        $B.options.__file = "src/views/svg/VPIconSun.vue";
        var Au = function () {
          return $B.exports
        }(), tu = function () {
          var A = this.$createElement, t = this._self._c || A;
          return t("svg", {
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              "aria-hidden": "true",
              focusable: "false",
              viewBox: "0 0 24 24"
            }
          }, [t("path", {
            attrs: {
              fill: "var(--b2-theme-c)",
              d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            }
          })])
        }, eu = [];
        tu._withStripped = !0;
        var ru = {}, nu = he({}, tu, eu, !1, iu, null, null, null);

        function iu(A) {
          for (var t in ru) this[t] = ru[t]
        }

        nu.options.__file = "src/views/svg/VPIconGitHub.vue";
        var ou = function () {
          return nu.exports
        }(), su = function () {
          var A = this.$createElement, t = this._self._c || A;
          return t("svg", {
            staticClass: "icon",
            attrs: {
              t: "1656846938380",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "3062"
            }
          }, [t("path", {
            attrs: {
              fill: "var(--b2-theme-c)",
              d: "M522.54 480.9m32 0l218.51 0q32 0 32 32l0 0q0 32-32 32l-218.51 0q-32 0-32-32l0 0q0-32 32-32Z",
              "p-id": "3063"
            }
          }), t("path", {
            attrs: {
              d: "M863.93 513.66l-119.3-98.39v196.79l119.3-98.4zM575.94 669.82v96.86a34.39 34.39 0 0 1-34.39 34.39H290a34.4 34.4 0 0 1-34.4-34.39V259.1a34.39 34.39 0 0 1 34.4-34.39h251.55a34.39 34.39 0 0 1 34.39 34.39V354a31.76 31.76 0 0 0 31.76 31.76h2.14a30.1 30.1 0 0 0 30.1-30.1V259.1a98.39 98.39 0 0 0-98.39-98.39H290a98.39 98.39 0 0 0-98.4 98.39v507.58a98.39 98.39 0 0 0 98.4 98.39h251.55a98.39 98.39 0 0 0 98.39-98.39V675.8a35 35 0 0 0-35-35 29 29 0 0 0-29 29.02z",
              fill: "var(--b2-theme-c)",
              "p-id": "3064"
            }
          })])
        }, au = [];
        su._withStripped = !0;
        var cu = {}, lu = he({}, su, au, !1, Bu, "42171c4f", null, null);

        function Bu(A) {
          for (var t in cu) this[t] = cu[t]
        }

        lu.options.__file = "src/views/svg/LayOut.vue";
        var uu = function () {
          return lu.exports
        }(), gu = function () {
          var A = this.$createElement, t = this._self._c || A;
          return t("svg", {
            staticClass: "icon-sign",
            attrs: {
              t: "1648793231546",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "5983"
            }
          }, [t("path", {
            attrs: {
              d: "M505.344 127.914667A181.248 181.248 0 0 0 322.944 307.626667a182.4 182.4 0 0 0 364.8 0 181.248 181.248 0 0 0-182.4-179.712m0-85.333334a266.709333 266.709333 0 0 1 267.733333 265.045334 267.733333 267.733333 0 0 1-535.466666 0A266.709333 266.709333 0 0 1 505.344 42.581333z",
              fill: "#516280",
              "p-id": "5984"
            }
          }), t("path", {
            attrs: {
              d: "M579.754667 589.866667h-135.424a228.309333 228.309333 0 0 0-229.76 226.133333v13.525333c0 66.602667 101.418667 66.602667 229.76 66.602667h135.424c123.306667 0 229.76 0 229.76-66.602667v-13.354666a228.352 228.352 0 0 0-229.76-226.304m0-85.333334a313.728 313.728 0 0 1 315.093333 311.466667v13.525333c0 34.517333-13.44 117.418667-137.429333 141.952a976.768 976.768 0 0 1-177.664 9.984h-135.424a970.069333 970.069333 0 0 1-179.84-9.984c-122.069333-24.533333-135.253333-107.434667-135.253334-141.909333v-13.312a313.728 313.728 0 0 1 315.093334-311.466667z",
              fill: "#516280",
              "p-id": "5985"
            }
          }), t("path", {
            attrs: {
              d: "M512.170667 429.568a112.597333 112.597333 0 0 1-91.264-48.256 41.984 41.984 0 0 1 5.845333-55.466667 33.834667 33.834667 0 0 1 50.432 6.4 41.856 41.856 0 0 0 62.336 7.978667 46.293333 46.293333 0 0 0 7.253333-7.978667 33.834667 33.834667 0 0 1 50.432-6.4 41.984 41.984 0 0 1 5.845334 55.466667 121.770667 121.770667 0 0 1-19.029334 20.864 109.098667 109.098667 0 0 1-71.850666 27.392z",
              fill: "#007BFC",
              "p-id": "5986"
            }
          })])
        }, hu = [];
        gu._withStripped = !0;
        var wu = {}, fu = he({}, gu, hu, !1, du, null, null, null);

        function du(A) {
          for (var t in wu) this[t] = wu[t]
        }

        fu.options.__file = "src/views/svg/SignSvg.vue";
        var pu = function () {
          return fu.exports
        }(), Qu = function () {
          var A = this.$createElement, t = this._self._c || A;
          return t("svg", {
            staticClass: "icon",
            attrs: {
              t: "1659514125461",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "2752"
            }
          }, [t("path", {
            attrs: {
              d: "M512 640c-70.592 0-128-57.408-128-128s57.408-128 128-128 128 57.408 128 128-57.408 128-128 128m0-320a192 192 0 0 0 0 384 192 192 0 0 0 0-384",
              fill: "var(--b2-theme-c)",
              "p-id": "2753"
            }
          }), t("path", {
            attrs: {
              d: "M693.216 735.552a291.744 291.744 0 0 1-40.512 27.52c-1.216 0.64-2.368 1.472-3.616 2.144a286.08 286.08 0 0 1-34.048 15.392l-19.552 72.992-9.28 34.592c-0.576 0.128-1.152 0.32-1.76 0.384l-8.736 1.632c-3.52 0.64-7.104 1.088-10.656 1.6a357.152 357.152 0 0 1-53.056 3.744c-5.216 0-10.464-0.128-15.68-0.32l-8.64-0.48a355.936 355.936 0 0 1-28.736-2.944c-3.52-0.512-7.072-0.96-10.624-1.6a418.496 418.496 0 0 1-8.736-1.6l-1.76-0.416-9.28-34.56-19.584-73.024a286.784 286.784 0 0 1-47.84-23.776 287.488 287.488 0 0 1-30.304-21.28l-72.96 19.552-34.56 9.28-1.184-1.376a237.504 237.504 0 0 1-5.792-6.72c-2.304-2.784-4.512-5.664-6.752-8.512a315.84 315.84 0 0 1-16.928-23.424c-1.6-2.336-3.104-4.768-4.64-7.168a337.92 337.92 0 0 1-15.68-27.168 435.84 435.84 0 0 1-3.936-7.68c-1.536-3.104-3.072-6.208-4.512-9.344a362.912 362.912 0 0 1-7.296-17.024c-1.344-3.328-2.688-6.656-3.968-9.984l-2.976-8.448-0.512-1.696 25.184-25.184 53.568-53.632a292.8 292.8 0 0 1-3.68-41.28c0-1.28-0.192-2.496-0.192-3.744 0-1.28 0.192-2.464 0.192-3.744a292.8 292.8 0 0 1 3.68-41.28l-53.568-53.632-25.184-25.184a438.656 438.656 0 0 1 3.488-10.144c1.28-3.36 2.624-6.688 3.968-10.048a375.68 375.68 0 0 1 31.424-61.184l4.672-7.232a366.112 366.112 0 0 1 16.896-23.36c2.24-2.848 4.448-5.696 6.72-8.48 1.92-2.24 3.84-4.48 5.824-6.72l1.184-1.376 34.56 9.28 72.96 19.52c9.568-7.776 19.744-14.72 30.304-21.28l4.064-2.464a283.68 283.68 0 0 1 43.776-21.28l19.584-73.024 9.28-34.56 1.76-0.416c2.88-0.544 5.76-1.12 8.704-1.6 3.52-0.608 7.168-1.12 10.752-1.6 6.08-0.864 12.16-1.6 18.336-2.208a362.752 362.752 0 0 1 19.008-1.184c5.184-0.224 10.4-0.384 15.616-0.384s10.464 0.16 15.648 0.384a362.752 362.752 0 0 1 19.008 1.184c6.08 0.576 12.224 1.344 18.304 2.24 3.616 0.448 7.2 0.96 10.784 1.536l8.704 1.632 1.76 0.384 9.28 34.592 19.52 72.992c11.712 4.512 23.168 9.472 34.08 15.392 1.248 0.672 2.4 1.504 3.616 2.176 14.304 8.064 27.84 17.216 40.512 27.52l72.96-19.584 34.528-9.248 1.216 1.344c1.92 2.24 3.904 4.48 5.76 6.752 2.304 2.752 4.48 5.632 6.72 8.448 3.84 4.864 7.552 9.792 11.136 14.848 1.984 2.816 3.904 5.696 5.824 8.544l4.672 7.232a357.472 357.472 0 0 1 19.616 34.88 397.184 397.184 0 0 1 11.776 26.336c1.344 3.328 2.72 6.656 4 10.048 1.024 2.784 1.984 5.568 2.944 8.384 0.192 0.576 0.32 1.152 0.544 1.728l-25.184 25.184-53.6 53.6c1.92 12.064 3.104 24.352 3.488 36.896 0.064 2.72 0.384 5.44 0.384 8.16s-0.32 5.44-0.384 8.16a291.136 291.136 0 0 1-3.52 36.864l53.632 53.632 25.184 25.184-0.544 1.696c-0.96 2.816-1.92 5.6-2.944 8.384-1.28 3.392-2.624 6.72-4 10.08a376.32 376.32 0 0 1-11.776 26.336 435.84 435.84 0 0 1-11.456 21.44c-2.624 4.544-5.376 8.992-8.16 13.44-1.536 2.368-3.072 4.8-4.64 7.136a315.84 315.84 0 0 1-16.96 23.456c-2.24 2.88-4.48 5.696-6.72 8.448-1.92 2.304-3.84 4.512-5.792 6.752-0.384 0.48-0.8 0.896-1.216 1.344l-34.56-9.248z m-305.12 139.328c-2.624-0.896-5.28-1.728-7.872-2.688l-3.328-1.216-3.328-1.28c4.896 1.92 9.856 3.584 14.816 5.248z m-119.424-66.368l-2.656-2.24c-2.144-1.824-4.224-3.712-6.336-5.568a334.912 334.912 0 0 0 11.84 10.08l-2.88-2.24z m623.776-245.664l-0.192-0.16-0.096-0.128h-0.032l-29.184-29.216c0.416-7.104 1.056-14.144 1.056-21.344 0-7.232-0.64-14.272-1.056-21.376l29.184-29.184 0.128-0.128 0.192-0.192 54.72-54.72a444.032 444.032 0 0 0-18.4-57.376c-8.128-20.704-17.312-41.184-28.8-61.024s-24.576-38.08-38.432-55.456a449.024 449.024 0 0 0-40.48-44.64l-74.752 20.032-0.064 0.032-0.224 0.064-0.16 0.032h-0.032l-39.424 10.56a348.448 348.448 0 0 0-37.472-21.376l-10.624-39.68-0.032-0.064-0.032-0.16-0.064-0.224v-0.064l-20.032-74.752a447.68 447.68 0 0 0-58.88-12.736A448.128 448.128 0 0 0 512 64c-22.912 0-45.248 2.24-67.232 5.568-20.096 3.04-39.776 7.136-58.88 12.736l-20.032 74.752-0.032 0.064-0.064 0.224-0.032 0.16v0.064l-10.656 39.68c-12.928 6.464-25.504 13.472-37.472 21.44l-39.392-10.56-0.064-0.064h-0.16l-0.224-0.096h-0.064l-74.72-20.064c-14.432 13.76-27.84 28.8-40.48 44.64C148.608 249.92 135.488 268.16 124.032 288s-20.672 40.32-28.8 61.024A450.496 450.496 0 0 0 76.8 406.4l54.72 54.72v0.064l0.224 0.16 0.096 0.128v0.032l29.216 29.184C160.64 497.76 160 504.8 160 512s0.64 14.208 1.088 21.312l-29.184 29.184-0.032 0.032-0.096 0.128-0.192 0.192-0.032 0.032L76.8 617.6c4.704 19.328 11.008 38.464 18.4 57.344 8.128 20.704 17.344 41.216 28.8 61.056s24.576 38.08 38.464 55.424c12.672 15.872 26.048 30.88 40.48 44.64l74.72-20.032h0.064l0.224-0.064 0.16-0.064h0.064l39.36-10.56c12 7.936 24.576 14.912 37.504 21.376l10.656 39.712v0.224l0.096 0.224v0.032l20.064 74.752c19.104 5.6 38.784 9.728 58.88 12.736a447.68 447.68 0 0 0 67.2 5.6c22.976 0 45.28-2.24 67.296-5.6a442.56 442.56 0 0 0 58.88-12.736l20.032-74.752 0.064-0.256 0.064-0.192 10.624-39.68c12.928-6.496 25.504-13.504 37.44-21.44l39.456 10.56v0.032l0.192 0.032 0.224 0.064h0.064l74.752 20.032c14.4-13.76 27.808-28.768 40.48-44.64 13.856-17.376 27.008-35.584 38.464-55.424s20.64-40.32 28.768-61.056c7.424-18.88 13.728-37.984 18.432-57.344l-54.72-54.72z",
              fill: "var(--b2-theme-c)",
              "p-id": "2754"
            }
          })])
        }, Cu = [];
        Qu._withStripped = !0;
        var Uu = {}, Fu = he({}, Qu, Cu, !1, vu, null, null, null);

        function vu(A) {
          for (var t in Uu) this[t] = Uu[t]
        }

        Fu.options.__file = "src/views/svg/SettingSvg.vue";
        var mu = function () {
          return Fu.exports
        }(), yu = function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return e("div", {staticClass: "switch-theme-wrap"}, [e("div", [A.isLogined ? e("button", {on: {click: A.openhandle}}, [e("LayOut")], 1) : e("button", {on: {click: A.tapLoginPage}}, [e("SignSvg")], 1)]), e("div", {on: {click: A.handleSetting}}, [e("button", [e("SettingSvg")], 1)]), e("div", {
            staticStyle: {display: "inline-block"},
            on: {click: A.handleThemeChange}
          }, [A.isLight ? e("button", [e("VPIconSun")], 1) : e("button", [e("VPIconMoon")], 1)]), e("button", {on: {click: A.handleTogGithub}}, [e("VPIconGitHub")], 1)])
        }, Hu = [];
        yu._withStripped = !0;
        var Eu = {
          components: {VPIconMoon: WB, VPIconSun: Au, VPIconGitHub: ou, LayOut: uu, SignSvg: pu, SettingSvg: mu},
          data: function () {
            return {isLight: !0, disappear: !1}
          },
          mounted: function () {
            this.handleIsLogined();
            var A = localStorage.getItem("themeb2");
            this.isLight = !A || "dark" !== JSON.parse(A).theme
          },
          computed: t({}, le(Ie, ["isLogined"])),
          methods: t(t(t({}, Be(Ie, ["handleIsLogined"])), Be(Ie, ["setShowSettingBtn"])), {}, {
            handleSetting: function () {
              this.setShowSettingBtn(!0)
            }, handleSelect: function (A) {
              document.documentElement.className = A, localStorage.setItem("themeb2", JSON.stringify({theme: A}))
            }, handleTogGithub: function () {
              window.open("https://github.com/Rr210/blazeB2")
            }, handleThemeChange: function () {
              this.isLight = !this.isLight;
              var A = this.isLight ? "" : "dark";
              this.handleSelect(A)
            }, openhandle: function () {
              var A = this;
              ELEMENT.MessageBox({
                title: "提示",
                message: "此操作将删除本地缓冲信息, 是否继续?",
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                showCancelButton: !0,
                type: "warning"
              }).then((function () {
                A.handleIsLogined(), localStorage.removeItem("token_api"), localStorage.removeItem("authmsg"), localStorage.removeItem("pinia-store")
              })).then((function () {
                ELEMENT.Message({type: "success", message: "缓冲清除成功,已退出!"})
              }))
            }, tapLoginPage: Ke((function () {
              this.handleSetting()
            }), 300, !0)
          })
        }, bu = {}, Iu = he(Eu, yu, Hu, !1, Lu, "2705ef7b", null, null);

        function Lu(A) {
          for (var t in bu) this[t] = bu[t]
        }

        Iu.options.__file = "src/components/switchtheme/SwitchTheme.vue";
        var Ku = function () {
          return Iu.exports
        }(), xu = function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return e("div", {staticClass: "form-w"}, [e("h2", {staticClass: "setting-hd-h2"}, [A._v("密钥配置")]), e("el-form", {
            ref: "formRef",
            attrs: {model: A.form, rules: A.rules}
          }, [e("el-form-item", {
            attrs: {
              label: "application_key_id",
              prop: "application_key_id"
            }
          }, [e("el-input", {
            attrs: {placeholder: "请填写应用程序密钥id"},
            model: {
              value: A.form.application_key_id, callback: function (t) {
                A.$set(A.form, "application_key_id", t)
              }, expression: "form.application_key_id"
            }
          })], 1), e("el-form-item", {
            attrs: {
              label: "application_key",
              prop: "application_key"
            }
          }, [e("el-input", {
            attrs: {"show-password": "", placeholder: "请填写应用程序密钥"},
            model: {
              value: A.form.application_key, callback: function (t) {
                A.$set(A.form, "application_key", t)
              }, expression: "form.application_key"
            }
          })], 1), e("el-form-item", {
            attrs: {
              label: "host_url(图床自定义域名)",
              prop: "host_url"
            }
          }, [e("el-input", {
            attrs: {placeholder: "请填写地址,eg: https://cloud.mr90.top/file/imagecloud/ 注意:结尾必须加 ‘/’"},
            model: {
              value: A.form.host_url, callback: function (t) {
                A.$set(A.form, "host_url", t)
              }, expression: "form.host_url"
            }
          })], 1), e("el-form-item", {
            attrs: {
              label: " bucket_name",
              prop: "bucket_name"
            }
          }, [e("el-input", {
            attrs: {placeholder: "请填写存储桶名称"},
            model: {
              value: A.form.bucket_name, callback: function (t) {
                A.$set(A.form, "bucket_name", t)
              }, expression: "form.bucket_name"
            }
          })], 1), e("el-form-item", [e("div", {staticClass: "btn-wrap-form"}, [e("el-button", {
            attrs: {
              type: "primary",
              plain: ""
            }, on: {
              click: function (t) {
                return A.submitForm("formRef")
              }
            }
          }, [A._v("保存本地")]), e("el-button", {
            on: {
              click: function (t) {
                return A.resetForm("formRef")
              }
            }
          }, [A._v("重置")])], 1)])], 1)], 1)
        }, Su = [];
        xu._withStripped = !0;
        var Du = {
          data: function () {
            return {
              form: {application_key_id: "", application_key: "", bucket_name: "", host_url: ""},
              rules: {
                application_key_id: [{
                  required: !0,
                  message: "请输入application_key_id",
                  trigger: "blur"
                }, {min: 5, max: 50, message: "长度在 5 到 50 个字符", trigger: "blur"}],
                application_key: [{required: !0, message: "请输入application_key", trigger: "blur"}, {
                  min: 5,
                  max: 50,
                  message: "长度在 5 到 50 个字符",
                  trigger: "blur"
                }],
                bucket_name: [{required: !0, message: "请输入bucket_name", trigger: "blur"}, {
                  min: 5,
                  max: 20,
                  message: "长度在 5 到 20 个字符",
                  trigger: "blur"
                }],
                host_url: [{required: !0, validator: this.validateURL, trigger: "blur"}]
              }
            }
          }, computed: t({}, le(Ie, ["isLogined"])), mounted: function () {
            var A = localStorage.getItem("token_api");
            A && (this.form = JSON.parse(A))
          }, methods: t(t({}, Be(Ie, ["handleIsLogined"])), {}, {
            validateURL: function (A, t, e) {
              "/" === t.charAt(t.length - 1) && 0 !== t.length ? e() : e(new Error("请输入图片地址前缀，输入的连接结尾必须加 /"))
            }, submitForm: Ke((function (A) {
              var t = this;
              this.$refs[A].validate((function (A) {
                if (!A) return !1;
                localStorage.setItem("token_api", JSON.stringify(t.form)), localStorage.removeItem("authmsg"), ELEMENT.Notification({
                  title: "提示",
                  message: "已将数据缓冲到本地，数据信息仅本人可知",
                  type: "success"
                }), t.handleIsLogined(t.form.host_url)
              }))
            }), 400, !0), resetForm: function (A) {
              this.$refs[A].resetFields()
            }
          })
        }, ku = {}, _u = he(Du, xu, Su, !1, Mu, "4c16d965", null, null);

        function Mu(A) {
          for (var t in ku) this[t] = ku[t]
        }

        _u.options.__file = "src/views/formview/FormView.vue";
        var Ou = function () {
          return _u.exports
        }(), Tu = function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return e("div", {staticClass: "set-prefix"}, [e("div", {staticClass: "setting-hd-h2"}, [A._v("图片前缀(默认选择 host_url 在密钥配置中可修改)")]), e("div", {staticClass: "flex-btw-center"}, [e("el-input", {
            attrs: {
              placeholder: "请选择图床管理页面图片地址前缀",
              disabled: !0
            }, model: {
              value: A.value, callback: function (t) {
                A.value = t
              }, expression: "value"
            }
          }), e("el-select", {
            attrs: {placeholder: "请选择"},
            on: {change: A.handleSelect},
            model: {
              value: A.value, callback: function (t) {
                A.value = t
              }, expression: "value"
            }
          }, A._l(A.prefixImg.support, (function (A) {
            return e("el-option", {key: A.url, attrs: {label: A.label, value: A.url}})
          })), 1)], 1)])
        }, Vu = [];
        Tu._withStripped = !0;
        var Gu = {
          data: function () {
            return {value: ""}
          },
          computed: t(t(t({}, le(Ie, ["prefixImg"])), le(Ie, ["noInvalid"])), le(Ie, ["prefixStatus"])),
          watch: {
            noInvalid: {
              deep: !0, handler: function (A) {
                A && (this.value = this.prefixStatus)
              }
            }, prefixStatus: {
              deep: !0, handler: function (A) {
                A && (this.value = this.prefixStatus)
              }
            }
          },
          mounted: function () {
            this.noInvalid && (this.value = this.prefixStatus)
          },
          methods: t(t({}, Be(Ie, ["setDefaultPrefix"])), {}, {
            handleSelect: function (A) {
              this.setDefaultPrefix(A)
            }
          })
        }, Ru = {}, Pu = he(Gu, Tu, Vu, !1, Nu, "6ff34b10", null, null);

        function Nu(A) {
          for (var t in Ru) this[t] = Ru[t]
        }

        Pu.options.__file = "src/views/Setting/setprefix/SetPrefix.vue";
        var Ju = function () {
          return Pu.exports
        }(), Xu = function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return e("div", {staticClass: "set-defalut"}, [A._m(0), e("div", {staticStyle: {"margin-top": "20px"}}, [e("el-radio-group", {
            attrs: {size: "small"},
            model: {
              value: A.radio, callback: function (t) {
                A.radio = t
              }, expression: "radio"
            }
          }, [e("el-radio", {
            attrs: {
              label: "1",
              border: ""
            }
          }, [A._v("手动输入目录")]), e("el-radio", {
            attrs: {
              label: "2",
              border: ""
            }
          }, [A._v("自动填写目录")]), e("el-radio", {
            attrs: {
              label: "3",
              border: ""
            }
          }, [A._v("自动时间格式")])], 1)], 1), "1" === A.radio ? e("el-input", {
            attrs: {placeholder: "图片文件夹(格式：hexo/4/)"},
            model: {
              value: A.valuePrint, callback: function (t) {
                A.valuePrint = t
              }, expression: "valuePrint"
            }
          }) : "2" === A.radio ? e("el-cascader", {
            attrs: {props: A.options, clearable: ""},
            model: {
              value: A.valueAuto, callback: function (t) {
                A.valueAuto = t
              }, expression: "valueAuto"
            }
          }) : A._e(), "3" === A.radio ? e("el-input", {
            attrs: {
              placeholder: "自动今日时间格式(eg:2022/07/08/)",
              disabled: ""
            }, model: {
              value: A.valueTime, callback: function (t) {
                A.valueTime = t
              }, expression: "valueTime"
            }
          }) : A._e(), e("el-button", {on: {click: A.saveDefault}}, [A._v("保存")])], 1)
        }, Yu = [function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return e("h2", {staticClass: "setting-hd-h2"}, [A._v("默认检索的图片文件夹("), e("span", {staticClass: "red-c"}, [A._v("图床管理")]), A._v(")")])
        }];
        Xu._withStripped = !0;
        var Wu = {
          data: function () {
            return {
              valueAuto: [],
              radio: "1",
              valuePrint: "",
              valueTime: "",
              options: {
                lazy: !0, checkStrictly: !0, lazyLoad: function (A, t) {
                  var e = "", r = A.level, n = A.pathLabels, i = n && n.reduce((function (A, t) {
                    if (r <= n.length) return "".concat(A).concat(t, "/")
                  }), "");
                  me(e = n ? i : e).then((function (A) {
                    var e = A.length > 0 ? A : [];
                    t(e)
                  }))
                }
              }
            }
          },
          computed: t(t({}, le(Ie, ["defaultFile"])), {}, {
            timeAuto: function () {
              return Le(Date.now()).split(" ")[0].replace(/-/g, "/") + "/"
            }
          }),
          mounted: function () {
            this.radio = this.defaultFile.methods, this.initData(this.radio), this.valueTime = this.timeAuto
          },
          methods: t(t(t({}, Be(Ie, ["setDefaultFile"])), Be(Ie, ["setShowSettingBtn"])), {}, {
            initData: function (A) {
              var t = this, e = function (A) {
                var e = A.vala, r = A.valt, n = A.valp;
                t.valueAuto = e || [], t.valueTime = r || "", t.valuePrint = n || ""
              };
              switch (A) {
                case"1":
                  e({valp: t.defaultFile.valPt});
                  break;
                case"2":
                  e({vala: t.defaultFile.valAt});
                  break;
                case"3":
                  e({valt: t.defaultFile.valTt});
                  break;
                default:
                  e()
              }
            }, saveDefault: function () {
              var A = {methods: this.radio, valAt: this.valueAuto, valPt: this.valuePrint, valTt: this.valueTime};
              this.setDefaultFile(A), ELEMENT.Notification({
                message: "保存成功",
                type: "success"
              }), this.setShowSettingBtn(!1)
            }
          })
        }, ju = {}, Zu = he(Wu, Xu, Yu, !1, zu, "04bbfc34", null, null);

        function zu(A) {
          for (var t in ju) this[t] = ju[t]
        }

        Zu.options.__file = "src/views/Setting/setDefault/SetDefault.vue";
        var $u = function () {
          return Zu.exports
        }(), qu = function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return e("div", {staticClass: "set-commpress"}, [e("div", {staticClass: "set-commpress-hd"}, [A._m(0), e("el-switch", {
            attrs: {
              "active-text": "开启",
              "inactive-text": "关闭",
              "active-value": !0,
              "inactive-value": !1
            }, on: {change: A.handleComp}, model: {
              value: A.value, callback: function (t) {
                A.value = t
              }, expression: "value"
            }
          })], 1), e("div", {
            directives: [{name: "show", rawName: "v-show", value: A.value, expression: "value"}],
            staticClass: "block-compress"
          }, [e("span", {staticClass: "demonstration"}, [A._v("压缩等级(" + A._s(A.value1) + ")")]), e("div", {staticClass: "slide-w"}, [e("el-slider", {
            attrs: {
              step: .1,
              max: 1,
              "show-stops": ""
            }, on: {change: A.handleComp}, model: {
              value: A.value1, callback: function (t) {
                A.value1 = t
              }, expression: "value1"
            }
          })], 1)])])
        }, Ag = [function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return e("h2", {staticClass: "setting-hd-h2"}, [A._v(" 是否开启压缩("), e("span", {staticClass: "red-c"}, [A._v("首页")]), A._v(") ")])
        }];
        qu._withStripped = !0;
        var tg = {}, eg = he({
          data: function () {
            return {value: !1, value1: .8}
          }, mounted: function () {
            var A = this, t = Ie();
            this.$nextTick((function () {
              A.value = t.CompressData.iscompress, A.value1 = t.CompressData.rank
            }))
          }, methods: {
            handleComp: function (A) {
              var t = Ie(), e = {iscompress: this.value, rank: this.value1};
              t.setDefaultCompress(e), ELEMENT.Notification({
                title: "压缩功能提示",
                message: "上传压缩功能".concat(this.value ? "已开启" : "已关闭", ",").concat(this.value ? "压缩等级为:" + this.value1 : ""),
                type: "success"
              })
            }
          }
        }, qu, Ag, !1, rg, "8fe18032", null, null);

        function rg(A) {
          for (var t in tg) this[t] = tg[t]
        }

        eg.options.__file = "src/views/Setting/setMain/SetCompress.vue";
        var ng = function () {
          return eg.exports
        }(), ig = function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return e("div", {staticClass: "set-upload"}, [A._m(0), e("el-input", {
            attrs: {placeholder: "eg:hexo/2/"},
            model: {
              value: A.tofile, callback: function (t) {
                A.tofile = t
              }, expression: "tofile"
            }
          }), e("el-button", {on: {click: A.saveToFile}}, [A._v("保存")])], 1)
        }, og = [function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return e("h2", {
            staticClass: "setting-hd-h2",
            staticStyle: {"padding-bottom": "10px"}
          }, [A._v("B2桶图片上传路径（文件夹路径/名称） "), e("span", {staticClass: "red-c"}, [A._v("必填")]), A._v("（默认根目录下） ")])
        }];
        ig._withStripped = !0;
        var sg = {
          data: function () {
            return {tofile: ""}
          },
          computed: t({}, le(Ie, ["DefaultToFile"])),
          mounted: function () {
            this.tofile = this.DefaultToFile
          },
          methods: t(t(t({}, Be(Ie, ["setDefaultToFile"])), Be(Ie, ["setShowSettingBtn"])), {}, {
            saveToFile: function () {
              var A = "/" === this.tofile.slice(-1) || "" === this.tofile;
              ELEMENT.Notification({
                title: "提示",
                message: A ? "上传路径修改为：".concat(this.tofile) : "路径要以“/”结尾",
                type: A ? "success" : "error"
              }), A && (this.setDefaultToFile(this.tofile), this.setShowSettingBtn(!1))
            }
          })
        }, ag = {}, cg = he(sg, ig, og, !1, lg, "ef07802c", null, null);

        function lg(A) {
          for (var t in ag) this[t] = ag[t]
        }

        cg.options.__file = "src/views/Setting/setUploadFile/SetUpload.vue";
        var Bg = function () {
          return cg.exports
        }(), ug = function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return e("div", [A._m(0), e("el-radio-group", {
            attrs: {size: "small"},
            on: {change: A.handleFormat},
            model: {
              value: A.radiov, callback: function (t) {
                A.radiov = t
              }, expression: "radiov"
            }
          }, A._l(A.defaultcopyformat.formatList, (function (t, r) {
            return e("el-tooltip", {
              key: r,
              staticClass: "item",
              attrs: {effect: "dark", content: t || "您还未定义", placement: "top-start"}
            }, [e("el-radio", {attrs: {label: r, border: ""}}, [A._v(" " + A._s(r) + " ")])], 1)
          })), 1), "Custom" === A.radiov ? e("div", [e("el-input", {
            staticStyle: {
              width: "217px",
              "margin-top": "10px",
              "margin-right": "10px"
            }, attrs: {type: "text", placeholder: "自定义外链格式"}, model: {
              value: A.custom, callback: function (t) {
                A.custom = t
              }, expression: "custom"
            }
          }), e("el-button", {on: {click: A.validCustom}}, [A._v("保存")])], 1) : A._e()], 1)
        }, gg = [function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return e("h2", {
            staticClass: "setting-hd-h2",
            staticStyle: {"margin-bottom": "10px"}
          }, [A._v("图片外链默认复制格式 "), e("span", {staticClass: "red-c"}, [A._v("%s")]), A._v("为外链地址")])
        }];
        ug._withStripped = !0;
        var hg = {
          data: function () {
            return {radiov: "", custom: ""}
          },
          computed: t(t({}, le(Ie, ["defaultcopyformat"])), le(Ie, ["defaultCopy"])),
          mounted: function () {
            this.radiov = this.defaultCopy, "Custom" === this.defaultCopy && (this.custom = this.defaultcopyformat.formatList.Custom)
          },
          methods: t(t(t({}, Be(Ie, ["setDefaultFormat"])), Be(Ie, ["setCustomFormat"])), {}, {
            handleFormat: function (A) {
              "Custom" !== A ? (this.setDefaultFormat(A), ELEMENT.Notification({
                title: "自定义格式",
                message: "已将格式设置为：" + A,
                type: "success"
              })) : ELEMENT.Notification({
                title: "自定义格式",
                message: "请在输入框中填写，格式 %s ，eg: ![](%s)",
                type: "warning"
              })
            }, validCustom: Ke((function () {
              var A = /%s/g.test(this.custom);
              ELEMENT.Notification({
                title: "提示",
                message: A ? "您当前的默认外链已设置为：".concat(this.custom) : "自定义格式有误，请将%s按照格式填写，例如：![](%s)",
                type: A ? "success" : "error"
              }), A && (this.setDefaultFormat("Custom"), this.setCustomFormat(this.custom))
            }), 300, !0)
          })
        }, wg = {}, fg = he(hg, ug, gg, !1, dg, null, null, null);

        function dg(A) {
          for (var t in wg) this[t] = wg[t]
        }

        fg.options.__file = "src/views/Setting/setcopy/SetCopy.vue";
        var pg = function () {
          return fg.exports
        }(), Qg = function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return e("div", {staticClass: "set-default-copy"}, [A._m(0), e("el-switch", {
            attrs: {
              "active-text": "开启",
              "inactive-text": "关闭",
              "active-value": !0,
              "inactive-value": !1
            }, on: {change: A.handleComp}, model: {
              value: A.value, callback: function (t) {
                A.value = t
              }, expression: "value"
            }
          })], 1)
        }, Cg = [function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return e("h2", {staticClass: "setting-hd-h2"}, [A._v("是否开启默认Markdown模式("), e("span", {staticClass: "red-c"}, [A._v("全局")]), A._v(")")])
        }];
        Qg._withStripped = !0;
        var Ug = {
          data: function () {
            return {value: !1}
          }, computed: t({}, le(Ie, ["openUploadOutMD"])), mounted: function () {
            this.value = !!this.openUploadOutMD
          }, methods: {
            handleComp: function (A) {
              Ie().$patch({openUploadOutMD: A})
            }
          }
        }, Fg = {}, vg = he(Ug, Qg, Cg, !1, mg, "bcc0dbb4", null, null);

        function mg(A) {
          for (var t in Fg) this[t] = Fg[t]
        }

        vg.options.__file = "src/views/Setting/setdefaultCopy/SetDefaultCopy.vue";
        var yg = function () {
          return vg.exports
        }(), Hg = function () {
          var A = this.$createElement, t = this._self._c || A;
          return t("svg", {
            staticClass: "icon",
            attrs: {
              t: "1659513637204",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "1963",
              width: "22",
              height: "22"
            }
          }, [t("path", {
            attrs: {
              d: "M507.168 473.232L716.48 263.936a16 16 0 0 1 22.624 0l11.312 11.312a16 16 0 0 1 0 22.624L541.12 507.168 750.4 716.48a16 16 0 0 1 0 22.624l-11.312 11.312a16 16 0 0 1-22.624 0L507.168 541.12 297.872 750.4a16 16 0 0 1-22.624 0l-11.312-11.312a16 16 0 0 1 0-22.624l209.296-209.312-209.296-209.296a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l209.296 209.296z",
              "p-id": "1964"
            }
          })])
        }, Eg = [];
        Hg._withStripped = !0;
        var bg = {}, Ig = he({}, Hg, Eg, !1, Lg, null, null, null);

        function Lg(A) {
          for (var t in bg) this[t] = bg[t]
        }

        Ig.options.__file = "src/views/svg/CloseSvg.vue";
        var Kg = function () {
          return Ig.exports
        }(), xg = function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return A.ShowSetting ? e("div", {
            staticClass: "setting-view-wrap", on: {
              click: function (t) {
                return t.target !== t.currentTarget ? null : A.toclose.apply(null, arguments)
              }
            }
          }, [e("div", {
            staticClass: "setting-item-wrap animate__animated",
            class: A.ishow ? "animate__fadeInDown" : "animate__fadeOutDown"
          }, [e("div", {staticClass: "setting-hd"}, [A._v("全局配置 | Global configuration "), e("span", {
            staticClass: "close-setting",
            on: {click: A.toclose}
          }, [e("CloseSvg")], 1)]), e("div", {staticClass: "setting-content"}, [e("FormView", {staticClass: "separate-line"}), e("set-default-copy", {staticClass: "separate-line"}), e("set-upload", {staticClass: "separate-line"}), e("set-compress", {staticClass: "separate-line"}), e("set-prefix", {staticClass: "separate-line"}), e("set-copy", {staticClass: "separate-line"}), e("set-default", {staticClass: "separate-line"})], 1), A._m(0)])]) : A._e()
        }, Sg = [function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return e("p", [e("span", {staticClass: "red-c"}, [A._v("*")]), A._v("按照文档进行配置 "), e("a", {
            attrs: {
              href: "https://blazeb2.js.org/guide/prepare.html",
              target: "_blank",
              rel: "noopener noreferrer"
            }
          }, [A._v("点击这里传送")])])
        }];
        xg._withStripped = !0;
        var Dg = {
          components: {
            FormView: Ou,
            SetPrefix: Ju,
            SetDefault: $u,
            SetCompress: ng,
            SetUpload: Bg,
            SetCopy: pg,
            SetDefaultCopy: yg,
            CloseSvg: Kg
          }, computed: t({}, le(Ie, ["ShowSetting"])), data: function () {
            return {ishow: !0}
          }, methods: t(t({}, Be(Ie, ["setShowSettingBtn"])), {}, {
            toclose: function () {
              var A = this;
              this.ishow = !1, setTimeout((function () {
                A.setShowSettingBtn(!1), A.ishow = !0
              }), 500)
            }
          })
        }, kg = {}, _g = he(Dg, xg, Sg, !1, Mg, "4f263a54", null, null);

        function Mg(A) {
          for (var t in kg) this[t] = kg[t]
        }

        _g.options.__file = "src/components/setting/SettingView.vue";
        var Og = function () {
          return _g.exports
        }(), Tg = function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return e("div", {staticClass: "hd-w"}, [e("div", {staticClass: "lay-out"}, [e("SwitchTheme")], 1), e("nav", {
            staticClass: "nav-container",
            on: {
              click: function (t) {
                return A.handleNav(t)
              }
            }
          }, [e("span", {
            class: "home" === A.currentMenu ? "is-nav-selected" : "",
            attrs: {"data-index": "home"}
          }, [A._v("首页")]), A.isLogined ? e("span", {
            class: "imanage" === A.currentMenu ? "is-nav-selected" : "",
            attrs: {"data-index": "imanage"}
          }, [A._v("图床管理")]) : A._e(), A._m(0), e("span", {
            class: "setting" === A.currentMenu ? "is-nav-selected" : "",
            attrs: {"data-index": "setting"}
          }, [A._v("使用文档")]), e("span", {
            class: "about" === A.currentMenu ? "is-nav-selected" : "",
            attrs: {"data-index": "about"}
          }, )]), e("router-view"), e("SettingView"), e("footer",)], 1)
        }, Vg = [function () {
          var A = this.$createElement, t = this._self._c || A;
          return t("div", {staticClass: "logo-wrap"}, [t("img", {
            attrs: {
              src: "/img/icons/logo.svg",
              "data-index": "home",
              title: ""
            }
          })])
        }];
        Tg._withStripped = !0;
        var Gg = {
          data: function () {
            return {currentMenu: "home", disappear: !1}
          },
          watch: {
            routerName: {
              handler: function (A, t) {
                A !== this.currentMenu && (this.currentMenu = A)
              }
            }
          },
          components: {SwitchTheme: Ku, SettingView: Og},
          mounted: function () {
            var A = localStorage.getItem("themeb2");
            if (A) {
              var t = document.documentElement, e = JSON.parse(A).theme;
              t.className !== e && (document.documentElement.className = e)
            }
            this.handleReload()
          },
          computed: t(t({
            timeE: function () {
              return (new Date).getFullYear()
            }
          }, le(Ie, ["isLogined"])), le(Ie, ["routerName"])),
          methods: t(t({}, Be(Ie, ["setroutername"])), {}, {
            handleReload: function () {
              this.currentMenu = this.$route.name
            }, handleNav: function (A) {
              var t = A.target.dataset.index, e = this.$route.name;
              t && e !== t && "setting" !== t && (this.$router.push({name: t}), this.currentMenu = t), "setting" === t && window.open("https://blazeb2.js.org")
            }
          })
        }, Rg = {}, Pg = he(Gg, Tg, Vg, !1, Ng, "545e3bf6", null, null);

        function Ng(A) {
          for (var t in Rg) this[t] = Rg[t]
        }

        Pg.options.__file = "src/views/TabNav/TabNav.vue";
        var Jg = function () {
          return Pg.exports
        }(), Xg = function () {
          var A = this, t = A.$createElement, e = A._self._c || t;
          return e("div", {staticClass: "common-container"}, [e("div", {staticStyle: {"text-align": "center"}}, [e("img", {
            attrs: {
              src: "/img/icons/logo.svg",
              alt: "",
              srcset: ""
            }
          }), e("h1", {staticClass: "main-title"}, [A._v("BlazeB2 图床")]), e("p", {staticClass: "p-simple"}, [A._v("📷基于 backBlazeb2 API & ⚡ cloudflare 开发的具有 CDN 加速功能的图床工具")]), e("p", {staticClass: "p-statement"}, [A._v("郑重声明：请勿通过本站上传违反你当地法律的图片，所造成的一切后果与本站无关。")]), e("p", {staticClass: "p-shield"}, A._l(A.shieldsList, (function (A) {
            return e("a", {
              key: A.alt,
              attrs: {href: A.link, target: "_blank", rel: "noopener noreferrer"}
            }, [e("img", {attrs: {src: A.svgpic, alt: A.alt}})])
          })), 0)])])
        }, Yg = [];
        Xg._withStripped = !0;
        var Wg = {}, jg = he({
          data: function () {
            return {
              shieldsList: [{
                link: "https://github.com/Rr210",
                alt: "Author",
                svgpic: "https://img.shields.io/badge/author-Rr210-violet.svg"
              }, {
                link: "https://blazeb2.js.org/",
                alt: "docs",
                svgpic: "https://img.shields.io/badge/docs-%E6%96%87%E6%A1%A3-blueviolet"
              }, {
                link: "https://github.com/Rr210/blazeB2/releases",
                alt: "Release",
                svgpic: "https://img.shields.io/github/release/Rr210/blazeB2.svg"
              }, {
                link: "https://github.com/Rr210/blazeB2/blob/master/LICENSE",
                alt: "License",
                svgpic: "https://img.shields.io/github/license/Rr210/blazeB2.svg"
              }, {
                link: "https://github.com/Rr210/blazeB2",
                alt: "Stars",
                svgpic: "https://img.shields.io/github/stars/Rr210/blazeB2"
              }, {
                link: "https://github.com/Rr210/blazeB2/issues",
                alt: "Issues",
                svgpic: "https://img.shields.io/github/issues/Rr210/blazeB2"
              }]
            }
          }
        }, Xg, Yg, !1, Zg, "0d172ebe", null, null);

        function Zg(A) {
          for (var t in Wg) this[t] = Wg[t]
        }

        jg.options.__file = "src/views/About/About.vue";
        var zg = function () {
          return jg.exports
        }();
        Vue.use(VueRouter);
        var $g = new VueRouter({
          routes: [{
            path: "/",
            component: Jg,
            redirect: "home",
            children: [{
              path: "/home",
              name: "home",
              component: RB,
              meta: {title: "首页 | BlazeB2 图床"}
            }, {
              path: "/imanage", name: "imanage", component: function () {
                return function () {
                  return e.import("./ImgManage-legacy-cabd9ca7.js")
                }()
              }, meta: {title: "图床管理 | BlazeB2 图床"}
            }, {path: "/about", name: "about", component: zg, meta: {title: "关于页面 | BlazeB2 图床"}}]
          }]
        });
        $g.beforeEach((function (A, t, e) {
          A.meta.title && (document.title = A.meta.title), e()
        })), setTimeout((function () {
          $g.afterEach((function (A, t) {
            var e = Ie();
            "/home" !== A.path && "/imanage" !== A.path && "/setting" !== A.path || (e.handleIsLogined(), e.setShowSettingBtn(!1), e.isLogined && e.setNewAuthMsg())
          }))
        }));
        var qg, Ah, th, eh, rh = function () {
          var A = Q(!0), t = A.run((function () {
            return lA({})
          })), e = [], r = vA({
            install: function (A) {
              ut(r)
            }, use: function (A) {
              return this._a, e.push(A), this
            }, _p: e, _a: null, _e: A, _s: new Map, state: t
          });
          return wt && r.use($t), r
        }();
        rh.use((Ah = (null == qg ? void 0 : qg.storage) || window && window.localStorage, th = (null == qg ? void 0 : qg.key) || "pinia", eh = (null == qg ? void 0 : qg.logger) || !1, function (A) {
          var t = A.store, e = function (A, t) {
            var e = t.getItem ? t.getItem(A) : t.get(A);
            try {
              return "string" == typeof e ? JSON.parse(e) : "object" === l(e) ? e : void 0
            } catch (r) {
            }
          }("".concat(th, "-").concat(t.$id), Ah);
          e && t.$patch(e), t.$subscribe((function (A, t) {
            eh && function (A, t, e) {
              var r = console.groupCollapsed || console.group;
              try {
                r(A, (new Date).toLocaleString())
              } catch (n) {
              }
            }(A.storeId), function (A, t, e) {
              e.setItem ? e.setItem(A, JSON.stringify(t)) : e.set(A, JSON.stringify(t))
            }("".concat(th, "-").concat(A.storeId), t, Ah)
          }))
        })), VueClipboard.config.autoSetContainer = !0, Vue.config.productionTip = !1, Vue.config.devtools = !1, Vue.use(ELEMENT), Vue.use(VueClipboard), Vue.use((function (A) {
          A.mixin({
            beforeCreate: function () {
              var A = this.$options;
              if (A.pinia) {
                var t = A.pinia;
                if (!this._provided) {
                  var e = {};
                  Object.defineProperty(this, "_provided", {
                    get: function () {
                      return e
                    }, set: function (A) {
                      return Object.assign(e, A)
                    }
                  })
                }
                this._provided[gt] = t, this.$pinia || (this.$pinia = t), t._a = this, wt && (ut(t), Yt(t._a, t))
              } else !this.$pinia && A.parent && A.parent.$pinia && (this.$pinia = A.parent.$pinia)
            }, destroyed: function () {
              delete this._pStores
            }
          })
        })), new Vue({
          pinia: rh, router: $g, render: function (A) {
            return A(pe)
          }
        }).$mount("#app")
      }
    }
  }))
}();

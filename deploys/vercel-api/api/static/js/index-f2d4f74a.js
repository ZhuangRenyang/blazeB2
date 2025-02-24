function A() {
  import("data:text/javascript,")
}

!function () {
  const A = document.createElement("link").relList;
  if (!(A && A.supports && A.supports("modulepreload"))) {
    for (const A of document.querySelectorAll('link[rel="modulepreload"]')) e(A);
    new MutationObserver((A => {
      for (const t of A) if ("childList" === t.type) for (const A of t.addedNodes) "LINK" === A.tagName && "modulepreload" === A.rel && e(A)
    })).observe(document, {childList: !0, subtree: !0})
  }

  function e(A) {
    if (A.ep) return;
    A.ep = !0;
    const e = function (A) {
      const e = {};
      return A.integrity && (e.integrity = A.integrity), A.referrerpolicy && (e.referrerPolicy = A.referrerpolicy), "use-credentials" === A.crossorigin ? e.credentials = "include" : "anonymous" === A.crossorigin ? e.credentials = "omit" : e.credentials = "same-origin", e
    }(A);
    fetch(A.href, e)
  }
}();
var e = function (A, t) {
  return (e = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (A, e) {
    A.__proto__ = e
  } || function (A, e) {
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (A[t] = e[t])
  })(A, t)
};
var t, r = function () {
  return r = Object.assign || function (A) {
    for (var e, t = 1, r = arguments.length; t < r; t++) for (var n in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
    return A
  }, r.apply(this, arguments)
};

function n(A) {
  var e = "function" == typeof Symbol && Symbol.iterator, t = e && A[e], r = 0;
  if (t) return t.call(A);
  if (A && "number" == typeof A.length) return {
    next: function () {
      return A && r >= A.length && (A = void 0), {value: A && A[r++], done: !A}
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function s(A, e) {
  var t = "function" == typeof Symbol && A[Symbol.iterator];
  if (!t) return A;
  var r, n, s = t.call(A), o = [];
  try {
    for (; (void 0 === e || e-- > 0) && !(r = s.next()).done;) o.push(r.value)
  } catch (i) {
    n = {error: i}
  } finally {
    try {
      r && !r.done && (t = s.return) && t.call(s)
    } finally {
      if (n) throw n.error
    }
  }
  return o
}

function o(A, e, t) {
  if (t || 2 === arguments.length) for (var r, n = 0, s = e.length; n < s; n++) !r && n in e || (r || (r = Array.prototype.slice.call(e, 0, n)), r[n] = e[n]);
  return A.concat(r || Array.prototype.slice.call(e))
}

var i = [], a = function () {
  function A(A) {
    this.active = !0, this.effects = [], this.cleanups = [], this.vm = A
  }

  return A.prototype.run = function (A) {
    if (this.active) try {
      return this.on(), A()
    } finally {
      this.off()
    } else G("cannot run an inactive effect scope.", null === (e = U()) || void 0 === e ? void 0 : e.proxy);
    var e
  }, A.prototype.on = function () {
    this.active && (i.push(this), t = this)
  }, A.prototype.off = function () {
    this.active && (i.pop(), t = i[i.length - 1])
  }, A.prototype.stop = function () {
    this.active && (this.vm.$destroy(), this.effects.forEach((function (A) {
      return A.stop()
    })), this.cleanups.forEach((function (A) {
      return A()
    })), this.active = !1)
  }, A
}(), c = function (A) {
  function r(e) {
    void 0 === e && (e = !1);
    var r, n = void 0;
    return function (A) {
      var e = d;
      d = !1;
      try {
        A()
      } finally {
        d = e
      }
    }((function () {
      n = R(f())
    })), r = A.call(this, n) || this, e || function (A, e) {
      var r;
      if ((e = e || t) && e.active) return void e.effects.push(A);
      var n = null === (r = U()) || void 0 === r ? void 0 : r.proxy;
      n && n.$on("hook:destroyed", (function () {
        return A.stop()
      }))
    }(r), r
  }

  return function (A, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

    function r() {
      this.constructor = A
    }

    e(A, t), A.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
  }(r, A), r
}(a);

function B(A) {
  return new c(A)
}

function l() {
  var A, e;
  return (null === (A = t) || void 0 === A ? void 0 : A.vm) || (null === (e = U()) || void 0 === e ? void 0 : e.proxy)
}

var u = void 0;
try {
  var g = require("vue");
  g && Q(g) ? u = g : g && "default" in g && Q(g.default) && (u = g.default)
} catch (Cg) {
}
var w = null, h = null, d = !0;

function Q(A) {
  return A && O(A) && "Vue" === A.name
}

function f() {
  return L(w, "must call Vue.use(VueCompositionAPI) before using any function."), w
}

function p() {
  var A = w || u;
  return L(A, "No vue dependency found."), A
}

function C(A) {
  if (d) {
    var e = h;
    null == e || e.scope.off(), null == (h = A) || h.scope.on()
  }
}

function U() {
  return h
}

var F = new WeakMap;

function m(A) {
  if (F.has(A)) return F.get(A);
  var e = {
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
      var e = new a(A.proxy);
      A.scope = e, A.proxy.$on("hook:destroyed", (function () {
        return e.stop()
      }))
    }
    A.scope
  }(e);
  return ["data", "props", "attrs", "refs", "vnode", "slots"].forEach((function (t) {
    E(e, t, {
      get: function () {
        return A["$".concat(t)]
      }
    })
  })), E(e, "isMounted", {
    get: function () {
      return A._isMounted
    }
  }), E(e, "isUnmounted", {
    get: function () {
      return A._isDestroyed
    }
  }), E(e, "isDeactivated", {
    get: function () {
      return A._inactive
    }
  }), E(e, "emitted", {
    get: function () {
      return A._events
    }
  }), F.set(A, e), A.$parent && (e.parent = m(A.$parent)), A.$root && (e.root = m(A.$root)), e
}

function v(A) {
  return "function" == typeof A && /native code/.test(A.toString())
}

var y = "undefined" != typeof Symbol && v(Symbol) && "undefined" != typeof Reflect && v(Reflect.ownKeys),
  H = function (A) {
    return A
  };

function E(A, e, t) {
  var r = t.get, n = t.set;
  Object.defineProperty(A, e, {enumerable: !0, configurable: !0, get: r || H, set: n || H})
}

function b(A, e, t, r) {
  Object.defineProperty(A, e, {value: t, enumerable: !!r, writable: !0, configurable: !0})
}

function I(A, e) {
  return Object.hasOwnProperty.call(A, e)
}

function L(A, e) {
  if (!A) throw new Error("[vue-composition-api] ".concat(e))
}

function K(A) {
  return "string" == typeof A || "number" == typeof A || "symbol" == typeof A || "boolean" == typeof A
}

function x(A) {
  return Array.isArray(A)
}

var S, D = Object.prototype.toString, _ = function (A) {
  return D.call(A)
};

function M(A) {
  var e = parseFloat(String(A));
  return e >= 0 && Math.floor(e) === e && isFinite(A) && e <= 4294967295
}

function k(A) {
  return null !== A && "object" == typeof A
}

function T(A) {
  return "[object Object]" === function (A) {
    return Object.prototype.toString.call(A)
  }(A)
}

function O(A) {
  return "function" == typeof A
}

function V(A) {
  return null == A
}

function G(A, e) {
  var t = p();
  t && t.util && t.util.warn(A, e)
}

function R(A, e) {
  void 0 === e && (e = {});
  var t = A.config.silent;
  A.config.silent = !0;
  var r = new A(e);
  return A.config.silent = t, r
}

function P(A, e) {
  return function () {
    for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
    return A.$scopedSlots[e] ? A.$scopedSlots[e].apply(A, t) : G("slots.".concat(e, '() got called outside of the "render()" scope'), A)
  }
}

function N(A) {
  return y ? Symbol.for(A) : A
}

var J = N("composition-api.preFlushQueue"), X = N("composition-api.postFlushQueue"), W = "composition-api.refKey",
  Y = new WeakMap, j = new WeakMap, $ = new WeakMap;

function Z(A, e, t) {
  var r = f().util, n = r.warn, s = r.defineReactive;
  (V(A) || K(A)) && n("Cannot set reactive property on undefined, null, or primitive value: ".concat(A));
  var o = A.__ob__;

  function i() {
    o && k(t) && !I(t, "__ob__") && BA(t)
  }

  if (x(A)) {
    if (M(e)) return A.length = Math.max(A.length, e), A.splice(e, 1, t), i(), t;
    if ("length" === e && t !== A.length) return A.length = t, null == o || o.dep.notify(), t
  }
  return e in A && !(e in Object.prototype) ? (A[e] = t, i(), t) : A._isVue || o && o.vmCount ? (n("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."), t) : o ? (s(o.value, e, t), aA(A, e, t), i(), o.dep.notify(), t) : (A[e] = t, t)
}

var z = function (A) {
  E(this, "value", {get: A.get, set: A.set})
};

function q(A, e, t) {
  void 0 === e && (e = !1), void 0 === t && (t = !1);
  var r = new z(A);
  t && (r.effect = !0);
  var n = Object.seal(r);
  return e && $.set(n, !0), n
}

function AA(A) {
  var e;
  if (eA(A)) return A;
  var t = uA(((e = {})[W] = A, e));
  return q({
    get: function () {
      return t[W]
    }, set: function (A) {
      return t[W] = A
    }
  })
}

function eA(A) {
  return A instanceof z
}

function tA(A) {
  if (oA(A) || G("toRefs() expects a reactive object but received a plain one."), !T(A)) return A;
  var e = {};
  for (var t in A) e[t] = rA(A, t);
  return e
}

function rA(A, e) {
  e in A || Z(A, e, void 0);
  var t = A[e];
  return eA(t) ? t : q({
    get: function () {
      return A[e]
    }, set: function (t) {
      return A[e] = t
    }
  })
}

function nA(A) {
  var e;
  if (eA(A)) return A;
  var t = function (A) {
    var e, t;
    if (!k(A)) return G('"shallowReactive()" must be called on an object.'), A;
    if (!T(A) && !x(A) || sA(A) || !Object.isExtensible(A)) return A;
    var r = cA(x(A) ? [] : {}), s = r.__ob__, o = function (e) {
      var t, n, o = A[e], i = Object.getOwnPropertyDescriptor(A, e);
      if (i) {
        if (!1 === i.configurable) return "continue";
        t = i.get, n = i.set
      }
      E(r, e, {
        get: function () {
          var A;
          return null === (A = s.dep) || void 0 === A || A.depend(), o
        }, set: function (e) {
          var r;
          t && !n || o !== e && (n ? n.call(A, e) : o = e, null === (r = s.dep) || void 0 === r || r.notify())
        }
      })
    };
    try {
      for (var i = n(Object.keys(A)), a = i.next(); !a.done; a = i.next()) {
        o(a.value)
      }
    } catch (c) {
      e = {error: c}
    } finally {
      try {
        a && !a.done && (t = i.return) && t.call(i)
      } finally {
        if (e) throw e.error
      }
    }
    return r
  }(((e = {})[W] = A, e));
  return q({
    get: function () {
      return t[W]
    }, set: function (A) {
      return t[W] = A
    }
  })
}

function sA(A) {
  var e;
  return Boolean(A && I(A, "__ob__") && "object" == typeof A.__ob__ && (null === (e = A.__ob__) || void 0 === e ? void 0 : e.__v_skip))
}

function oA(A) {
  var e;
  return Boolean(A && I(A, "__ob__") && "object" == typeof A.__ob__ && !(null === (e = A.__ob__) || void 0 === e ? void 0 : e.__v_skip))
}

function iA(A) {
  if (!(!T(A) || sA(A) || x(A) || eA(A) || (e = A, t = f(), t && e instanceof t) || Y.has(A))) {
    var e, t;
    Y.set(A, !0);
    for (var r = Object.keys(A), n = 0; n < r.length; n++) aA(A, r[n])
  }
}

function aA(A, e, t) {
  if ("__ob__" !== e && !sA(A[e])) {
    var r, n, s = Object.getOwnPropertyDescriptor(A, e);
    if (s) {
      if (!1 === s.configurable) return;
      r = s.get, n = s.set, r && !n || 2 !== arguments.length || (t = A[e])
    }
    iA(t), E(A, e, {
      get: function () {
        var n = r ? r.call(A) : t;
        return e !== W && eA(n) ? n.value : n
      }, set: function (s) {
        r && !n || (e !== W && eA(t) && !eA(s) ? t.value = s : n ? (n.call(A, s), t = s) : t = s, iA(s))
      }
    })
  }
}

function cA(A) {
  var e, t = p();
  t.observable ? e = t.observable(A) : e = R(t, {data: {$$state: A}})._data.$$state;
  return I(e, "__ob__") || BA(e), e
}

function BA(A, e) {
  var t, r;
  if (void 0 === e && (e = new Set), !e.has(A) && !I(A, "__ob__") && Object.isExtensible(A)) {
    b(A, "__ob__", function (A) {
      void 0 === A && (A = {});
      return {value: A, dep: {notify: H, depend: H, addSub: H, removeSub: H}}
    }(A)), e.add(A);
    try {
      for (var s = n(Object.keys(A)), o = s.next(); !o.done; o = s.next()) {
        var i = A[o.value];
        (T(i) || x(i)) && !sA(i) && Object.isExtensible(i) && BA(i, e)
      }
    } catch (a) {
      t = {error: a}
    } finally {
      try {
        o && !o.done && (r = s.return) && r.call(s)
      } finally {
        if (t) throw t.error
      }
    }
  }
}

function lA() {
  return cA({}).__ob__
}

function uA(A) {
  if (!k(A)) return G('"reactive()" must be called on an object.'), A;
  if (!T(A) && !x(A) || sA(A) || !Object.isExtensible(A)) return A;
  var e = cA(A);
  return iA(e), e
}

function gA(A) {
  if (!T(A) && !x(A) || !Object.isExtensible(A)) return A;
  var e = lA();
  return e.__v_skip = !0, b(A, "__ob__", e), j.set(A, !0), A
}

function wA(A) {
  var e;
  return sA(A) || !Object.isExtensible(A) ? A : (null === (e = null == A ? void 0 : A.__ob__) || void 0 === e ? void 0 : e.value) || A
}

function hA(A, e) {
  var t = f().util.warn;
  if ((V(A) || K(A)) && t("Cannot delete reactive property on undefined, null, or primitive value: ".concat(A)), x(A) && M(e)) A.splice(e, 1); else {
    var r = A.__ob__;
    A._isVue || r && r.vmCount ? t("Avoid deleting properties on a Vue instance or its root $data - just set it to null.") : I(A, e) && (delete A[e], r && r.dep.notify())
  }
}

function dA(A) {
  return function (e, t) {
    var r, n = function (A, e) {
      return (e = e || U()) || G("".concat(A, " is called when there is no active component instance to be ") + "associated with. Lifecycle injection APIs can only be used during execution of setup()."), e
    }("on".concat((r = A)[0].toUpperCase() + r.slice(1)), t);
    return n && function (A, e, t, r) {
      var n = e.proxy.$options, i = A.config.optionMergeStrategies[t], a = function (A, e) {
        return function () {
          for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
          var n = U();
          C(A);
          try {
            return e.apply(void 0, o([], s(t), !1))
          } finally {
            C(n)
          }
        }
      }(e, r);
      return n[t] = i(n[t], a), a
    }(f(), n, A, e)
  }
}

var QA, fA = dA("mounted"), pA = dA("beforeDestroy"), CA = dA("destroyed");

function UA() {
  vA(this, J)
}

function FA() {
  vA(this, X)
}

function mA() {
  var A = l();
  return A ? function (A) {
    return void 0 !== A[J]
  }(A) || function (A) {
    A[J] = [], A[X] = [], A.$on("hook:beforeUpdate", UA), A.$on("hook:updated", FA)
  }(A) : (QA || (QA = R(f())), A = QA), A
}

function vA(A, e) {
  for (var t = A[e], r = 0; r < t.length; r++) t[r]();
  t.length = 0
}

function yA(A, e, t) {
  var r = function () {
    A.$nextTick((function () {
      A[J].length && vA(A, J), A[X].length && vA(A, X)
    }))
  };
  switch (t) {
    case"pre":
      r(), A[J].push(e);
      break;
    case"post":
      r(), A[X].push(e);
      break;
    default:
      L(!1, 'flush must be one of ["post", "pre", "sync"], but got '.concat(t))
  }
}

function HA(A, e) {
  var t = A.teardown;
  A.teardown = function () {
    for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
    t.apply(A, r), e()
  }
}

function EA(A, e, t, r) {
  var n;
  t || (void 0 !== r.immediate && G('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), void 0 !== r.deep && G('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  var i, a = r.flush, c = "sync" === a, B = function (e) {
    i = function () {
      try {
        e()
      } catch (t) {
        !function (A, e, t) {
          if (G("Error in ".concat(t, ': "').concat(A.toString(), '"'), e), "undefined" == typeof window || "undefined" == typeof console) throw A
        }(t, A, "onCleanup()")
      }
    }
  }, l = function () {
    i && (i(), i = null)
  }, u = function (e) {
    return c || A === QA ? e : function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return yA(A, (function () {
        e.apply(void 0, o([], s(t), !1))
      }), a)
    }
  };
  if (null === t) {
    var g = !1, w = function (A, e, t, r) {
      var n = A._watchers.length;
      return A.$watch(e, t, {
        immediate: r.immediateInvokeCallback,
        deep: r.deep,
        lazy: r.noRun,
        sync: r.sync,
        before: r.before
      }), A._watchers[n]
    }(A, (function () {
      if (!g) try {
        g = !0, e(B)
      } finally {
        g = !1
      }
    }), H, {deep: r.deep || !1, sync: c, before: l});
    HA(w, l), w.lazy = !1;
    var h = w.get.bind(w);
    return w.get = u(h), function () {
      w.teardown()
    }
  }
  var d, Q = r.deep, f = !1;
  if (eA(e) ? d = function () {
    return e.value
  } : oA(e) ? (d = function () {
    return e
  }, Q = !0) : x(e) ? (f = !0, d = function () {
    return e.map((function (e) {
      return eA(e) ? e.value : oA(e) ? IA(e) : O(e) ? e() : (G("Invalid watch source: ".concat(JSON.stringify(e), ".\n          A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."), A), H)
    }))
  }) : O(e) ? d = e : (d = H, G("Invalid watch source: ".concat(JSON.stringify(e), ".\n      A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."), A)), Q) {
    var p = d;
    d = function () {
      return IA(p())
    }
  }
  var C = function (A, e) {
    if (Q || !f || !A.every((function (A, t) {
      return r = A, n = e[t], r === n ? 0 !== r || 1 / r == 1 / n : r != r && n != n;
      var r, n
    }))) return l(), t(A, e, B)
  }, U = u(C);
  if (r.immediate) {
    var F = U, m = function (A, e) {
      return m = F, C(A, x(A) ? [] : e)
    };
    U = function (A, e) {
      return m(A, e)
    }
  }
  var v = A.$watch(d, U, {immediate: r.immediate, deep: Q, sync: c}), y = A._watchers[A._watchers.length - 1];
  return oA(y.value) && (null === (n = y.value.__ob__) || void 0 === n ? void 0 : n.dep) && Q && y.value.__ob__.dep.addSub({
    update: function () {
      y.run()
    }
  }), HA(y, l), function () {
    v()
  }
}

function bA(A, e, t) {
  var n = null;
  O(e) ? n = e : (G("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), t = e, n = null);
  var s = function (A) {
    return r({immediate: !1, deep: !1, flush: "pre"}, A)
  }(t);
  return EA(mA(), A, n, s)
}

function IA(A, e) {
  if (void 0 === e && (e = new Set), !k(A) || e.has(A) || j.has(A)) return A;
  if (e.add(A), eA(A)) IA(A.value, e); else if (x(A)) for (var t = 0; t < A.length; t++) IA(A[t], e); else if ("[object Set]" === _(A) || function (A) {
    return "[object Map]" === _(A)
  }(A)) A.forEach((function (A) {
    IA(A, e)
  })); else if (T(A)) for (var r in A) IA(A[r], e);
  return A
}

function LA(A) {
  var e, t, r, n, s = l();
  if (O(A) ? e = A : (e = A.get, t = A.set), s && !s.$isServer) {
    var o, i = function () {
      if (!S) {
        var A = R(f(), {
          computed: {
            value: function () {
              return 0
            }
          }
        }), e = A._computedWatchers.value.constructor, t = A._data.__ob__.dep.constructor;
        S = {Watcher: e, Dep: t}, A.$destroy()
      }
      return S
    }(), a = i.Watcher, c = i.Dep;
    n = function () {
      return o || (o = new a(s, e, H, {lazy: !0})), o.dirty && o.evaluate(), c.target && o.depend(), o.value
    }, r = function (A) {
      t ? t && t(A) : G("Write operation failed: computed value is readonly.", s)
    }
  } else {
    var B = R(f(), {computed: {$$state: {get: e, set: t}}});
    s && s.$on("hook:destroyed", (function () {
      return B.$destroy()
    })), n = function () {
      return B.$$state
    }, r = function (A) {
      t ? B.$$state = A : G("Write operation failed: computed value is readonly.", s)
    }
  }
  return q({get: n, set: r}, !t, !0)
}

var KA = {};

function xA(A, e) {
  for (var t = e; t;) {
    if (t._provided && I(t._provided, A)) return t._provided[A];
    t = t.$parent
  }
  return KA
}

Object.freeze({});
var SA, DA = function () {
  for (var A, e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return null === (A = f()) || void 0 === A ? void 0 : A.nextTick.apply(this, e)
}, _A = function () {
  for (var A, e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var r = (null == this ? void 0 : this.proxy) || (null === (A = U()) || void 0 === A ? void 0 : A.proxy);
  return r ? r.$createElement.apply(r, e) : (G("`createElement()` has been called outside of render function."), SA || (SA = R(f()).$createElement), SA.apply(SA, e))
};
var MA = {
  set: function (A, e, t) {
    (A.__composition_api_state__ = A.__composition_api_state__ || {})[e] = t
  }, get: function (A, e) {
    return (A.__composition_api_state__ || {})[e]
  }
};

function kA(A) {
  var e = MA.get(A, "rawBindings") || {};
  if (e && Object.keys(e).length) {
    for (var t = A.$refs, r = MA.get(A, "refs") || [], n = 0; n < r.length; n++) {
      var s = e[a = r[n]];
      !t[a] && s && eA(s) && (s.value = null)
    }
    var o = Object.keys(t), i = [];
    for (n = 0; n < o.length; n++) {
      var a;
      s = e[a = o[n]];
      t[a] && s && eA(s) && (s.value = t[a], i.push(a))
    }
    MA.set(A, "refs", i)
  }
}

function TA(A) {
  for (var e = [A._vnode]; e.length;) {
    var t = e.pop();
    if (t && (t.context && kA(t.context), t.children)) for (var r = 0; r < t.children.length; ++r) e.push(t.children[r])
  }
}

function OA(A, e) {
  var t, r;
  if (A) {
    var s = MA.get(A, "attrBindings");
    if (s || e) {
      if (!s) {
        var o = uA({});
        s = {ctx: e, data: o}, MA.set(A, "attrBindings", s), E(e, "attrs", {
          get: function () {
            return null == s ? void 0 : s.data
          }, set: function () {
            G("Cannot assign to '$attrs' because it is a read-only property", A)
          }
        })
      }
      var i = A.$attrs, a = function (e) {
        I(s.data, e) || E(s.data, e, {
          get: function () {
            return A.$attrs[e]
          }
        })
      };
      try {
        for (var c = n(Object.keys(i)), B = c.next(); !B.done; B = c.next()) {
          a(B.value)
        }
      } catch (l) {
        t = {error: l}
      } finally {
        try {
          B && !B.done && (r = c.return) && r.call(c)
        } finally {
          if (t) throw t.error
        }
      }
    }
  }
}

function VA(A, e) {
  var t = A.$options._parentVnode;
  if (t) {
    for (var r = MA.get(A, "slots") || [], n = function (A, e) {
      var t;
      if (A) {
        if (A._normalized) return A._normalized;
        for (var r in t = {}, A) A[r] && "$" !== r[0] && (t[r] = !0)
      } else t = {};
      for (var r in e) r in t || (t[r] = !0);
      return t
    }(t.data.scopedSlots, A.$slots), s = 0; s < r.length; s++) {
      n[i = r[s]] || delete e[i]
    }
    var o = Object.keys(n);
    for (s = 0; s < o.length; s++) {
      var i;
      e[i = o[s]] || (e[i] = P(A, i))
    }
    MA.set(A, "slots", o)
  }
}

function GA(A, e, t) {
  var r = U();
  C(A);
  try {
    return e(A)
  } catch (n) {
    if (!t) throw n;
    t(n)
  } finally {
    C(r)
  }
}

function RA(A) {
  function e(A, t) {
    if (void 0 === t && (t = new Set), !t.has(A) && T(A) && !eA(A) && !oA(A) && !sA(A)) {
      var r = f().util.defineReactive;
      Object.keys(A).forEach((function (n) {
        var s = A[n];
        r(A, n, s), s && (t.add(s), e(s, t))
      }))
    }
  }

  function t(A, e) {
    return void 0 === e && (e = new Map), e.has(A) ? e.get(A) : (e.set(A, !1), x(A) && oA(A) ? (e.set(A, !0), !0) : !(!T(A) || sA(A) || eA(A)) && Object.keys(A).some((function (r) {
      return t(A[r], e)
    })))
  }

  A.mixin({
    beforeCreate: function () {
      var A = this, r = A.$options, n = r.setup, s = r.render;
      s && (r.render = function () {
        for (var e = this, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return GA(m(A), (function () {
          return s.apply(e, t)
        }))
      });
      if (!n) return;
      if (!O(n)) return void G('The "setup" option should be a function that returns a object in component definitions.', A);
      var o = r.data;
      r.data = function () {
        return function (A, r) {
          void 0 === r && (r = {});
          var n, s = A.$options.setup, o = function (A) {
            var e = {slots: {}}, t = ["emit"];
            return ["root", "parent", "refs", "listeners", "isServer", "ssrContext"].forEach((function (t) {
              var r = "$".concat(t);
              E(e, t, {
                get: function () {
                  return A[r]
                }, set: function () {
                  G("Cannot assign to '".concat(t, "' because it is a read-only property"), A)
                }
              })
            })), OA(A, e), t.forEach((function (t) {
              var r = "$".concat(t);
              E(e, t, {
                get: function () {
                  return function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    A[r].apply(A, e)
                  }
                }
              })
            })), e
          }(A), i = m(A);
          if (i.setupContext = o, b(r, "__ob__", lA()), VA(A, o.slots), GA(i, (function () {
            n = s(r, o)
          })), !n) return;
          if (O(n)) {
            var a = n;
            return void (A.$options.render = function () {
              return VA(A, o.slots), GA(i, (function () {
                return a()
              }))
            })
          }
          if (k(n)) {
            oA(n) && (n = tA(n)), MA.set(A, "rawBindings", n);
            var c = n;
            return void Object.keys(c).forEach((function (r) {
              var n = c[r];
              if (!eA(n)) if (oA(n)) x(n) && (n = AA(n)); else if (O(n)) {
                var s = n;
                n = n.bind(A), Object.keys(s).forEach((function (A) {
                  n[A] = s[A]
                }))
              } else k(n) ? t(n) && e(n) : n = AA(n);
              !function (A, e, t) {
                var r = A.$options.props;
                e in A || r && I(r, e) ? r && I(r, e) ? G('The setup binding property "'.concat(e, '" is already declared as a prop.'), A) : G('The setup binding property "'.concat(e, '" is already declared.'), A) : (eA(t) ? E(A, e, {
                  get: function () {
                    return t.value
                  }, set: function (A) {
                    t.value = A
                  }
                }) : E(A, e, {
                  get: function () {
                    return oA(t) && t.__ob__.dep.depend(), t
                  }, set: function (A) {
                    t = A
                  }
                }), A.$nextTick((function () {
                  -1 === Object.keys(A._data).indexOf(e) && (eA(t) ? E(A._data, e, {
                    get: function () {
                      return t.value
                    }, set: function (A) {
                      t.value = A
                    }
                  }) : E(A._data, e, {
                    get: function () {
                      return t
                    }, set: function (A) {
                      t = A
                    }
                  }))
                })))
              }(A, r, n)
            }))
          }
          L(!1, '"setup" must return a "Object" or a "Function", got "'.concat(Object.prototype.toString.call(n).slice(8, -1), '"'))
        }(A, A.$props), O(o) ? o.call(A, A) : o || {}
      }
    }, mounted: function () {
      TA(this)
    }, beforeUpdate: function () {
      OA(this)
    }, updated: function () {
      TA(this)
    }
  })
}

function PA(A, e) {
  if (!A) return e;
  if (!e) return A;
  for (var t, r, n, s = y ? Reflect.ownKeys(A) : Object.keys(A), o = 0; o < s.length; o++) "__ob__" !== (t = s[o]) && (r = e[t], n = A[t], I(e, t) ? r !== n && T(r) && !eA(r) && T(n) && !eA(n) && PA(n, r) : e[t] = n);
  return e
}

function NA(A) {
  !function (A) {
    return w && I(A, "__composition_api_installed__")
  }(A) ? (A.version ? "2" === A.version[0] && "." === A.version[1] || G("[vue-composition-api] only works with Vue 2, v".concat(A.version, " found.")) : G("[vue-composition-api] no Vue version found"), A.config.optionMergeStrategies.setup = function (A, e) {
    return function (t, r) {
      return PA(O(A) ? A(t, r) || {} : void 0, O(e) ? e(t, r) || {} : void 0)
    }
  }, function (A) {
    w && A.__proto__ !== w.__proto__ && G("[vue-composition-api] another instance of Vue installed"), w = A, Object.defineProperty(A, "__composition_api_installed__", {
      configurable: !0,
      writable: !0,
      value: !0
    })
  }(A), RA(A)) : G("[vue-composition-api] already installed. Vue.use(VueCompositionAPI) should be called only once.")
}

var JA, XA = {
  install: function (A) {
    return NA(A)
  }
};
"undefined" != typeof window && window.Vue && window.Vue.use(XA), (JA = (JA = Vue) || Vue) && !JA.__composition_api_installed__ && Vue.use(XA);

function WA() {
  return "undefined" != typeof navigator && "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}
}

Vue, Vue.version, Vue;
const YA = "function" == typeof Proxy;
let jA, $A, ZA;

function zA() {
  return void 0 !== jA || ("undefined" != typeof window && window.performance ? (jA = !0, $A = window.performance) : "undefined" != typeof global && (null === (A = global.perf_hooks) || void 0 === A ? void 0 : A.performance) ? (jA = !0, $A = global.perf_hooks.performance) : jA = !1), jA ? $A.now() : Date.now();
  var A
}

class qA {
  constructor(A, e) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = A, this.hook = e;
    const t = {};
    if (A.settings) for (const o in A.settings) {
      const e = A.settings[o];
      t[o] = e.defaultValue
    }
    const r = `__vue-devtools-plugin-settings__${A.id}`;
    let n = Object.assign({}, t);
    try {
      const A = localStorage.getItem(r), e = JSON.parse(A);
      Object.assign(n, e)
    } catch (s) {
    }
    this.fallbacks = {
      getSettings: () => n, setSettings(A) {
        try {
          localStorage.setItem(r, JSON.stringify(A))
        } catch (s) {
        }
        n = A
      }, now: () => zA()
    }, e && e.on("plugin:settings:set", ((A, e) => {
      A === this.plugin.id && this.fallbacks.setSettings(e)
    })), this.proxiedOn = new Proxy({}, {
      get: (A, e) => this.target ? this.target.on[e] : (...A) => {
        this.onQueue.push({method: e, args: A})
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (A, e) => this.target ? this.target[e] : "on" === e ? this.proxiedOn : Object.keys(this.fallbacks).includes(e) ? (...A) => (this.targetQueue.push({
        method: e,
        args: A,
        resolve: () => {
        }
      }), this.fallbacks[e](...A)) : (...A) => new Promise((t => {
        this.targetQueue.push({method: e, args: A, resolve: t})
      }))
    })
  }

  async setRealTarget(A) {
    this.target = A;
    for (const e of this.onQueue) this.target.on[e.method](...e.args);
    for (const e of this.targetQueue) e.resolve(await this.target[e.method](...e.args))
  }
}

function Ae(A, e) {
  const t = A, r = WA(), n = WA().__VUE_DEVTOOLS_GLOBAL_HOOK__, s = YA && t.enableEarlyProxy;
  if (!n || !r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ && s) {
    const A = s ? new qA(t, n) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: t,
      setupFn: e,
      proxy: A
    }), A && e(A.proxiedTarget)
  } else n.emit("devtools-plugin:setup", A, e)
}

/*!
  * pinia v2.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const ee = A => ZA = A, te = Symbol("pinia");

function re(A) {
  return A && "object" == typeof A && "[object Object]" === Object.prototype.toString.call(A) && "function" != typeof A.toJSON
}

var ne, se;
(se = ne || (ne = {})).direct = "direct", se.patchObject = "patch object", se.patchFunction = "patch function";
const oe = "undefined" != typeof window,
  ie = (() => "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : "object" == typeof globalThis ? globalThis : {HTMLElement: null})();

function ae(A, e, t) {
  const r = new XMLHttpRequest;
  r.open("GET", A), r.responseType = "blob", r.onload = function () {
    ge(r.response, e, t)
  }, r.onerror = function () {
  }, r.send()
}

function ce(A) {
  const e = new XMLHttpRequest;
  e.open("HEAD", A, !1);
  try {
    e.send()
  } catch (t) {
  }
  return e.status >= 200 && e.status <= 299
}

function Be(A) {
  try {
    A.dispatchEvent(new MouseEvent("click"))
  } catch (e) {
    const t = document.createEvent("MouseEvents");
    t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), A.dispatchEvent(t)
  }
}

const le = "object" == typeof navigator ? navigator : {userAgent: ""},
  ue = (() => /Macintosh/.test(le.userAgent) && /AppleWebKit/.test(le.userAgent) && !/Safari/.test(le.userAgent))(),
  ge = oe ? "undefined" != typeof HTMLAnchorElement && "download" in HTMLAnchorElement.prototype && !ue ? function (A, e = "download", t) {
    const r = document.createElement("a");
    r.download = e, r.rel = "noopener", "string" == typeof A ? (r.href = A, r.origin !== location.origin ? ce(r.href) ? ae(A, e, t) : (r.target = "_blank", Be(r)) : Be(r)) : (r.href = URL.createObjectURL(A), setTimeout((function () {
      URL.revokeObjectURL(r.href)
    }), 4e4), setTimeout((function () {
      Be(r)
    }), 0))
  } : "msSaveOrOpenBlob" in le ? function (A, e = "download", t) {
    if ("string" == typeof A) if (ce(A)) ae(A, e, t); else {
      const e = document.createElement("a");
      e.href = A, e.target = "_blank", setTimeout((function () {
        Be(e)
      }))
    } else navigator.msSaveOrOpenBlob(function (A, {autoBom: e = !1} = {}) {
      return e && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(A.type) ? new Blob([String.fromCharCode(65279), A], {type: A.type}) : A
    }(A, t), e)
  } : function (A, e, t, r) {
    (r = r || open("", "_blank")) && (r.document.title = r.document.body.innerText = "downloading...");
    if ("string" == typeof A) return ae(A, e, t);
    const n = "application/octet-stream" === A.type, s = /constructor/i.test(String(ie.HTMLElement)) || "safari" in ie,
      o = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((o || n && s || ue) && "undefined" != typeof FileReader) {
      const e = new FileReader;
      e.onloadend = function () {
        let A = e.result;
        if ("string" != typeof A) throw r = null, new Error("Wrong reader.result type");
        A = o ? A : A.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = A : location.assign(A), r = null
      }, e.readAsDataURL(A)
    } else {
      const e = URL.createObjectURL(A);
      r ? r.location.assign(e) : location.href = e, r = null, setTimeout((function () {
        URL.revokeObjectURL(e)
      }), 4e4)
    }
  } : () => {
  };

function we(A, e) {
  "function" == typeof __VUE_DEVTOOLS_TOAST__ && __VUE_DEVTOOLS_TOAST__("🍍 " + A, e)
}

function he(A) {
  return "_a" in A && "install" in A
}

function de() {
  if (!("clipboard" in navigator)) return we("Your browser doesn't support the Clipboard API", "error"), !0
}

function Qe(A) {
  return !!(A instanceof Error && A.message.toLowerCase().includes("document is not focused")) && (we('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0)
}

let fe;

async function pe(A) {
  try {
    const e = await (fe || (fe = document.createElement("input"), fe.type = "file", fe.accept = ".json"), function () {
      return new Promise(((A, e) => {
        fe.onchange = async () => {
          const e = fe.files;
          if (!e) return A(null);
          const t = e.item(0);
          return A(t ? {text: await t.text(), file: t} : null)
        }, fe.oncancel = () => A(null), fe.onerror = e, fe.click()
      }))
    }), t = await e();
    if (!t) return;
    const {text: r, file: n} = t;
    A.state.value = JSON.parse(r), we(`Global state imported from "${n.name}".`)
  } catch (e) {
    we("Failed to export the state as JSON. Check the console for more details.", "error")
  }
}

function Ce(A) {
  return {_custom: {display: A}}
}

function Ue(A) {
  return he(A) ? {id: "_root", label: "🍍 Pinia (root)"} : {id: A.$id, label: A.$id}
}

function Fe(A) {
  return A ? Array.isArray(A) ? A.reduce(((A, e) => (A.keys.push(e.key), A.operations.push(e.type), A.oldValue[e.key] = e.oldValue, A.newValue[e.key] = e.newValue, A)), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {operation: Ce(A.type), key: Ce(A.key), oldValue: A.oldValue, newValue: A.newValue} : {}
}

function me(A) {
  switch (A) {
    case ne.direct:
      return "mutation";
    case ne.patchFunction:
    case ne.patchObject:
      return "$patch";
    default:
      return "unknown"
  }
}

let ve = !0;
const ye = [], He = A => "🍍 " + A;

function Ee(A, e) {
  Ae({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: ye,
    app: A
  }, (t => {
    "function" != typeof t.now && we("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), t.addTimelineLayer({
      id: "pinia:mutations",
      label: "Pinia 🍍",
      color: 15064968
    }), t.addInspector({
      id: "pinia",
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [{
        icon: "content_copy", action: () => {
          !async function (A) {
            if (!de()) try {
              await navigator.clipboard.writeText(JSON.stringify(A.state.value)), we("Global state copied to clipboard.")
            } catch (e) {
              if (Qe(e)) return;
              we("Failed to serialize the state. Check the console for more details.", "error")
            }
          }(e)
        }, tooltip: "Serialize and copy the state"
      }, {
        icon: "content_paste", action: async () => {
          await async function (A) {
            if (!de()) try {
              A.state.value = JSON.parse(await navigator.clipboard.readText()), we("Global state pasted from clipboard.")
            } catch (e) {
              if (Qe(e)) return;
              we("Failed to deserialize the state from clipboard. Check the console for more details.", "error")
            }
          }(e), t.sendInspectorTree("pinia"), t.sendInspectorState("pinia")
        }, tooltip: "Replace the state with the content of your clipboard"
      }, {
        icon: "save", action: () => {
          !async function (A) {
            try {
              ge(new Blob([JSON.stringify(A.state.value)], {type: "text/plain;charset=utf-8"}), "pinia-state.json")
            } catch (e) {
              we("Failed to export the state as JSON. Check the console for more details.", "error")
            }
          }(e)
        }, tooltip: "Save the state as a JSON file"
      }, {
        icon: "folder_open", action: async () => {
          await pe(e), t.sendInspectorTree("pinia"), t.sendInspectorState("pinia")
        }, tooltip: "Import the state from a JSON file"
      }]
    }), t.on.inspectComponent(((A, e) => {
      const t = A.componentInstance && A.componentInstance.proxy;
      if (t && t._pStores) {
        const e = A.componentInstance.proxy._pStores;
        Object.values(e).forEach((e => {
          A.instanceData.state.push({
            type: He(e.$id),
            key: "state",
            editable: !0,
            value: e._isOptionsAPI ? {
              _custom: {
                value: e.$state,
                actions: [{icon: "restore", tooltip: "Reset the state of this store", action: () => e.$reset()}]
              }
            } : e.$state
          }), e._getters && e._getters.length && A.instanceData.state.push({
            type: He(e.$id),
            key: "getters",
            editable: !1,
            value: e._getters.reduce(((A, t) => {
              try {
                A[t] = e[t]
              } catch (r) {
                A[t] = r
              }
              return A
            }), {})
          })
        }))
      }
    })), t.on.getInspectorTree((t => {
      if (t.app === A && "pinia" === t.inspectorId) {
        let A = [e];
        A = A.concat(Array.from(e._s.values())), t.rootNodes = (t.filter ? A.filter((A => "$id" in A ? A.$id.toLowerCase().includes(t.filter.toLowerCase()) : "🍍 Pinia (root)".toLowerCase().includes(t.filter.toLowerCase()))) : A).map(Ue)
      }
    })), t.on.getInspectorState((t => {
      if (t.app === A && "pinia" === t.inspectorId) {
        const A = "_root" === t.nodeId ? e : e._s.get(t.nodeId);
        if (!A) return;
        A && (t.state = function (A) {
          if (he(A)) {
            const e = Array.from(A._s.keys()), t = A._s;
            return {
              state: e.map((e => ({editable: !0, key: e, value: A.state.value[e]}))),
              getters: e.filter((A => t.get(A)._getters)).map((A => {
                const e = t.get(A);
                return {editable: !1, key: A, value: e._getters.reduce(((A, t) => (A[t] = e[t], A)), {})}
              }))
            }
          }
          const e = {state: Object.keys(A.$state).map((e => ({editable: !0, key: e, value: A.$state[e]})))};
          return A._getters && A._getters.length && (e.getters = A._getters.map((e => ({
            editable: !1,
            key: e,
            value: A[e]
          })))), A._customProperties.size && (e.customProperties = Array.from(A._customProperties).map((e => ({
            editable: !0,
            key: e,
            value: A[e]
          })))), e
        }(A))
      }
    })), t.on.editInspectorState(((t, r) => {
      if (t.app === A && "pinia" === t.inspectorId) {
        const A = "_root" === t.nodeId ? e : e._s.get(t.nodeId);
        if (!A) return we(`store "${t.nodeId}" not found`, "error");
        const {path: r} = t;
        he(A) ? r.unshift("state") : 1 === r.length && A._customProperties.has(r[0]) && !(r[0] in A.$state) || r.unshift("$state"), ve = !1, t.set(A, r, t.state.value), ve = !0
      }
    })), t.on.editComponentState((A => {
      if (A.type.startsWith("🍍")) {
        const t = A.type.replace(/^🍍\s*/, ""), r = e._s.get(t);
        if (!r) return we(`store "${t}" not found`, "error");
        const {path: n} = A;
        if ("state" !== n[0]) return we(`Invalid path for store "${t}":\n${n}\nOnly state can be modified.`);
        n[0] = "$state", ve = !1, A.set(r, n, A.state.value), ve = !0
      }
    }))
  }))
}

function be(A, e) {
  ye.includes(He(e.$id)) || ye.push(He(e.$id)), Ae({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: ye,
    app: A,
    settings: {logStoreChanges: {label: "Notify about new/deleted stores", type: "boolean", defaultValue: !0}}
  }, (A => {
    const t = "function" == typeof A.now ? A.now.bind(A) : Date.now;
    e.$onAction((({after: r, onError: n, name: s, args: o}) => {
      const i = Le++;
      A.addTimelineEvent({
        layerId: "pinia:mutations",
        event: {
          time: t(),
          title: "🛫 " + s,
          subtitle: "start",
          data: {store: Ce(e.$id), action: Ce(s), args: o},
          groupId: i
        }
      }), r((r => {
        Ie = void 0, A.addTimelineEvent({
          layerId: "pinia:mutations",
          event: {
            time: t(),
            title: "🛬 " + s,
            subtitle: "end",
            data: {store: Ce(e.$id), action: Ce(s), args: o, result: r},
            groupId: i
          }
        })
      })), n((r => {
        Ie = void 0, A.addTimelineEvent({
          layerId: "pinia:mutations",
          event: {
            time: t(),
            logType: "error",
            title: "💥 " + s,
            subtitle: "end",
            data: {store: Ce(e.$id), action: Ce(s), args: o, error: r},
            groupId: i
          }
        })
      }))
    }), !0), e._customProperties.forEach((r => {
      bA((() => {
        return eA(A = e[r]) ? A.value : A;
        var A
      }), ((e, n) => {
        A.notifyComponentUpdate(), A.sendInspectorState("pinia"), ve && A.addTimelineEvent({
          layerId: "pinia:mutations",
          event: {time: t(), title: "Change", subtitle: r, data: {newValue: e, oldValue: n}, groupId: Ie}
        })
      }), {deep: !0})
    })), e.$subscribe((({events: r, type: n}, s) => {
      if (A.notifyComponentUpdate(), A.sendInspectorState("pinia"), !ve) return;
      const o = {time: t(), title: me(n), data: {store: Ce(e.$id), ...Fe(r)}, groupId: Ie};
      Ie = void 0, n === ne.patchFunction ? o.subtitle = "⤵️" : n === ne.patchObject ? o.subtitle = "🧩" : r && !Array.isArray(r) && (o.subtitle = r.type), r && (o.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: r
        }
      }), A.addTimelineEvent({layerId: "pinia:mutations", event: o})
    }), {detached: !0, flush: "sync"});
    const r = e._hotUpdate;
    e._hotUpdate = gA((n => {
      r(n), A.addTimelineEvent({
        layerId: "pinia:mutations",
        event: {
          time: t(),
          title: "🔥 " + e.$id,
          subtitle: "HMR update",
          data: {store: Ce(e.$id), info: Ce("HMR update")}
        }
      }), A.notifyComponentUpdate(), A.sendInspectorTree("pinia"), A.sendInspectorState("pinia")
    }));
    const {$dispose: n} = e;
    e.$dispose = () => {
      n(), A.notifyComponentUpdate(), A.sendInspectorTree("pinia"), A.sendInspectorState("pinia"), A.getSettings().logStoreChanges && we(`Disposed "${e.$id}" store 🗑`)
    }, A.notifyComponentUpdate(), A.sendInspectorTree("pinia"), A.sendInspectorState("pinia"), A.getSettings().logStoreChanges && we(`"${e.$id}" store installed 🆕`)
  }))
}

let Ie, Le = 0;

function Ke(A, e) {
  const t = e.reduce(((e, t) => (e[t] = wA(A)[t], e)), {});
  for (const r in t) A[r] = function () {
    const e = Le,
      n = new Proxy(A, {get: (...A) => (Ie = e, Reflect.get(...A)), set: (...A) => (Ie = e, Reflect.set(...A))});
    return t[r].apply(n, arguments)
  }
}

function xe({app: A, store: e, options: t}) {
  if (!e.$id.startsWith("__hot:")) {
    if (t.state && (e._isOptionsAPI = !0), "function" == typeof t.state) {
      Ke(e, Object.keys(t.actions));
      const A = e._hotUpdate;
      wA(e)._hotUpdate = function (t) {
        A.apply(this, arguments), Ke(e, Object.keys(t._hmrPayload.actions))
      }
    }
    be(A, e)
  }
}

function Se(A, e) {
  for (const t in e) {
    const r = e[t];
    if (!(t in A)) continue;
    const n = A[t];
    re(n) && re(r) && !eA(r) && !oA(r) ? A[t] = Se(n, r) : Z(A, t, r)
  }
  return A
}

const De = () => {
};

function _e(A, e, t, r = De) {
  A.push(e);
  const n = () => {
    const t = A.indexOf(e);
    t > -1 && (A.splice(t, 1), r())
  };
  return !t && U() && CA(n), n
}

function Me(A, ...e) {
  A.slice().forEach((A => {
    A(...e)
  }))
}

function ke(A, e) {
  for (const t in e) {
    if (!e.hasOwnProperty(t)) continue;
    const r = e[t], n = A[t];
    re(n) && re(r) && A.hasOwnProperty(t) && !eA(r) && !oA(r) ? A[t] = ke(n, r) : A[t] = r
  }
  return A
}

const Te = new WeakMap;
const {assign: Oe} = Object;

function Ve(A) {
  return !(!eA(A) || !A.effect)
}

function Ge(A, e, t, r) {
  const {state: n, actions: s, getters: o} = e, i = t.state.value[A];
  let a;
  return a = Re(A, (function () {
    i || r || Z(t.state.value, A, n ? n() : {});
    const e = tA(r ? AA(n ? n() : {}).value : t.state.value[A]);
    return Oe(e, s, Object.keys(o || {}).reduce(((e, r) => (e[r] = gA(LA((() => {
      ee(t);
      const e = t._s.get(A);
      if (e._r) return o[r].call(e, e)
    }))), e)), {}))
  }), e, t, r, !0), a.$reset = function () {
    const A = n ? n() : {};
    this.$patch((e => {
      Oe(e, A)
    }))
  }, a
}

function Re(A, e, t = {}, r, n, s) {
  let o;
  const i = Oe({actions: {}}, t);
  if (!r._e.active) throw new Error("Pinia destroyed");
  const a = {deep: !0};
  let c, l, u, g = gA([]), w = gA([]);
  const h = r.state.value[A];
  s || h || n || Z(r.state.value, A, {});
  const d = AA({});
  let Q;

  function f(e) {
    let t;
    c = l = !1, u = [], "function" == typeof e ? (e(r.state.value[A]), t = {
      type: ne.patchFunction,
      storeId: A,
      events: u
    }) : (ke(r.state.value[A], e), t = {type: ne.patchObject, payload: e, storeId: A, events: u});
    const n = Q = Symbol();
    DA().then((() => {
      Q === n && (c = !0)
    })), l = !0, Me(g, t, r.state.value[A])
  }

  function p(e, t) {
    return function () {
      ee(r);
      const n = Array.from(arguments), s = [], o = [];

      function i(A) {
        s.push(A)
      }

      function a(A) {
        o.push(A)
      }

      let c;
      Me(w, {args: n, name: e, store: F, after: i, onError: a});
      try {
        c = t.apply(this && this.$id === A ? this : F, n)
      } catch (B) {
        throw Me(o, B), B
      }
      return c instanceof Promise ? c.then((A => (Me(s, A), A))).catch((A => (Me(o, A), Promise.reject(A)))) : (Me(s, c), c)
    }
  }

  const C = gA({actions: {}, getters: {}, state: [], hotState: d}), U = {
    _p: r, $id: A, $onAction: _e.bind(null, w), $patch: f, $reset: () => {
      throw new Error(`🍍: Store "${A}" is build using the setup syntax and does not implement $reset().`)
    }, $subscribe(e, t = {}) {
      const n = _e(g, e, t.detached, (() => s())), s = o.run((() => bA((() => r.state.value[A]), (r => {
        ("sync" === t.flush ? l : c) && e({storeId: A, type: ne.direct, events: u}, r)
      }), Oe({}, a, t))));
      return n
    }, $dispose: function () {
      o.stop(), g = [], w = [], r._s.delete(A)
    }, _r: !1
  }, F = uA(Oe(oe ? {_customProperties: gA(new Set), _hmrPayload: C} : {}, U));
  r._s.set(A, F);
  const m = r._e.run((() => (o = B(), o.run((() => e())))));
  for (const B in m) {
    const e = m[B];
    if (eA(e) && !Ve(e) || oA(e)) n ? Z(d.value, B, rA(m, B)) : s || (h && (v = e, !Te.has(v)) && (eA(e) ? e.value = h[B] : ke(e, h[B])), Z(r.state.value[A], B, e)), C.state.push(B); else if ("function" == typeof e) {
      const A = n ? e : p(B, e);
      Z(m, B, A), C.actions[B] = e, i.actions[B] = e
    } else if (Ve(e) && (C.getters[B] = s ? t.getters[B] : e, oe)) {
      (m._getters || (m._getters = gA([]))).push(B)
    }
  }
  var v;
  Object.keys(m).forEach((A => {
    Z(F, A, m[A])
  })), Object.defineProperty(F, "$state", {
    get: () => n ? d.value : r.state.value[A], set: A => {
      if (n) throw new Error("cannot set hotState");
      f((e => {
        Oe(e, A)
      }))
    }
  });
  {
    F._hotUpdate = gA((e => {
      F._hotUpdating = !0, e._hmrPayload.state.forEach((A => {
        if (A in F.$state) {
          const t = e.$state[A], r = F.$state[A];
          "object" == typeof t && re(t) && re(r) ? Se(t, r) : e.$state[A] = r
        }
        Z(F, A, rA(e.$state, A))
      })), Object.keys(F.$state).forEach((A => {
        A in e.$state || hA(F, A)
      })), c = !1, l = !1, r.state.value[A] = rA(e._hmrPayload, "hotState"), l = !0, DA().then((() => {
        c = !0
      }));
      for (const A in e._hmrPayload.actions) {
        const t = e[A];
        Z(F, A, p(A, t))
      }
      for (const A in e._hmrPayload.getters) {
        const t = e._hmrPayload.getters[A], n = s ? LA((() => (ee(r), t.call(F, F)))) : t;
        Z(F, A, n)
      }
      Object.keys(F._hmrPayload.getters).forEach((A => {
        A in e._hmrPayload.getters || hA(F, A)
      })), Object.keys(F._hmrPayload.actions).forEach((A => {
        A in e._hmrPayload.actions || hA(F, A)
      })), F._hmrPayload = e._hmrPayload, F._getters = e._getters, F._hotUpdating = !1
    }));
    const e = {writable: !0, configurable: !0, enumerable: !1};
    oe && ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((A => {
      Object.defineProperty(F, A, {value: F[A], ...e})
    }))
  }
  return F._r = !0, r._p.forEach((A => {
    if (oe) {
      const e = o.run((() => A({store: F, app: r._a, pinia: r, options: i})));
      Object.keys(e || {}).forEach((A => F._customProperties.add(A))), Oe(F, e)
    } else Oe(F, o.run((() => A({store: F, app: r._a, pinia: r, options: i}))))
  })), F.$state && "object" == typeof F.$state && "function" == typeof F.$state.constructor && F.$state.constructor.toString().includes("[native code]"), h && s && t.hydrate && t.hydrate(F.$state, h), c = !0, l = !0, F
}

function Pe(A, e) {
  return Array.isArray(e) ? e.reduce(((e, t) => (e[t] = function () {
    return A(this.$pinia)[t]
  }, e)), {}) : Object.keys(e).reduce(((t, r) => (t[r] = function () {
    const t = A(this.$pinia), n = e[r];
    return "function" == typeof n ? n.call(this, t) : t[n]
  }, t)), {})
}

function Ne(A, e) {
  return Array.isArray(e) ? e.reduce(((e, t) => (e[t] = function (...e) {
    return A(this.$pinia)[t](...e)
  }, e)), {}) : Object.keys(e).reduce(((t, r) => (t[r] = function (...t) {
    return A(this.$pinia)[e[r]](...t)
  }, t)), {})
}

function Je(A, e) {
  return Array.isArray(e) ? e.reduce(((e, t) => (e[t] = {
    get() {
      return A(this.$pinia)[t]
    }, set(e) {
      return A(this.$pinia)[t] = e
    }
  }, e)), {}) : Object.keys(e).reduce(((t, r) => (t[r] = {
    get() {
      return A(this.$pinia)[e[r]]
    }, set(t) {
      return A(this.$pinia)[e[r]] = t
    }
  }, t)), {})
}

var Xe = function () {
  var A = this.$createElement, e = this._self._c || A;
  return e("div", {attrs: {id: "app"}}, [e("router-view")], 1)
}, We = [];

function Ye(A, e, t, r, n, s, o, i) {
  var a, c = "function" == typeof A ? A.options : A;
  if (e && (c.render = e, c.staticRenderFns = t, c._compiled = !0), r && (c.functional = !0), s && (c._scopeId = "data-v-" + s), o ? (a = function (A) {
    (A = A || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (A = __VUE_SSR_CONTEXT__), n && n.call(this, A), A && A._registeredComponents && A._registeredComponents.add(o)
  }, c._ssrRegister = a) : n && (a = i ? function () {
    n.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot)
  } : n), a) if (c.functional) {
    c._injectStyles = a;
    var B = c.render;
    c.render = function (A, e) {
      return a.call(e), B(A, e)
    }
  } else {
    var l = c.beforeCreate;
    c.beforeCreate = l ? [].concat(l, a) : [a]
  }
  return {exports: A, options: c}
}

Xe._withStripped = !0;
const je = {};
var $e = Ye({name: "App"}, Xe, We, !1, Ze, null, null, null);

function Ze(A) {
  for (let e in je) this[e] = je[e]
}

$e.options.__file = "src/App.vue";
const ze = function () {
  return $e.exports
}(), qe = {};
axios.defaults.baseURL = "/";
const At = () => {
  NProgress.done()
};
axios.interceptors.request.use((A => (NProgress.start(), A))), axios.interceptors.response.use((A => (At(), A)), (A => (At(), Promise.reject(A))));
const et = axios, tt = function (A) {
  return et.post("/upload", A, {headers: {"Content-Type": "multipart/form-data"}})
}, rt = function (A) {
  return et.get("/list", A)
}, nt = function (A) {
  return et.delete("/img", A)
};

function st(A = null) {
  return new Promise(((A, e) => {
    const t = localStorage.getItem("authmsg"), r = localStorage.getItem("token_api");
    if (t) {
      const e = new Date, n = JSON.parse(t);
      e.getTime() - n.time > 828e5 ? (localStorage.removeItem("authmsg"), ot(r).then((() => {
        A()
      }))) : A()
    } else ot(r).then((() => {
      A()
    })).catch((A => {
      ELEMENT.Notification({
        title: "提示",
        message: `状态码:${A.status},错误信息：${A.message},请检查keyid和key是否填写正确`,
        type: "error"
      })
    }))
  }))
}

async function ot(A) {
  const e = JSON.parse(A), {data: t} = await (r = e, et.post("/auth", r));
  var r;
  if (t.bucketId) {
    const A = {api_url: t.api_url, host_url: e.host_url}, r = {
      uploadUrl: t.uploadUrl,
      authorizationToken: t.authorizationToken,
      bucketId: t.bucketId,
      init_token: t.init_token,
      time: (new Date).getTime()
    }, n = Object.assign(r, A);
    it(A, e.host_url), localStorage.setItem("authmsg", JSON.stringify(n)), at().handleIsLogined()
  }
}

const it = function (A, e) {
  const t = [], r = at();
  if ("" === r.prefixImg.defaultUrl) {
    for (const e of Object.entries(A)) t.push({label: e[0], url: e[1]});
    const n = {support: t, defaultUrl: e};
    r.setprefixImg(n)
  }
}, at = function (A, e, t) {
  let r, n;
  const s = "function" == typeof e;

  function o(A, t) {
    const i = U();
    if (A = A || i && function (A, e, t) {
      var r;
      void 0 === t && (t = !1);
      var n = null === (r = U()) || void 0 === r ? void 0 : r.proxy;
      if (n) {
        if (!A) return G('injection "'.concat(String(A), '" not found.'), n), e;
        var s = xA(A, n);
        return s !== KA ? s : arguments.length > 1 ? t && O(e) ? e() : e : void G('Injection "'.concat(String(A), '" not found.'), n)
      }
      G("inject() can only be used inside setup() or functional components.")
    }(te), A && ee(A), !ZA) throw new Error("[🍍]: getActivePinia was called with no active Pinia. Did you forget to install pinia?\n\tconst pinia = createPinia()\n\tapp.use(pinia)\nThis will fail in production.");
    (A = ZA)._s.has(r) || (s ? Re(r, e, n, A) : Ge(r, n, A), o._pinia = A);
    const a = A._s.get(r);
    if (t) {
      const o = "__hot:" + r, i = s ? Re(o, e, n, A, !0) : Ge(o, Oe({}, n), A, !0);
      t._hotUpdate(i), delete A.state.value[o], A._s.delete(o)
    }
    if (oe && i && i.proxy && !t) {
      const A = i.proxy;
      ("_pStores" in A ? A._pStores : A._pStores = {})[r] = a
    }
    return a
  }

  return "string" == typeof A ? (r = A, n = s ? t : e) : (n = A, r = A.id), o.$id = r, o
}("store", {
  persist: {enabled: !0},
  state: () => ({
    isLogined: !1,
    noInvalid: !1,
    defaultcopyformat: {
      formatList: {HTML: '<img src="%s" alt="" />', MarkDown: "![](%s)", URL: "%s", Custom: ""},
      formatStr: "URL"
    },
    isshowSetting: !1,
    prefixImg: {support: [], defaultUrl: ""},
    setdefaultFile: {methods: "1", valPt: "", valAt: [], valTt: ""},
    commpressParams: {iscompress: !1, rank: .8},
    toFile: "",
    openUploadOutMD: !1
  }),
  getters: {
    siginStatus: A => !A.isLogined,
    ShowSetting: A => A.isshowSetting,
    defaultCopy: A => A.defaultcopyformat.formatStr,
    defaultCopyUrl(A) {
      const e = A.defaultcopyformat.formatStr;
      return A.defaultcopyformat.formatList[e]
    },
    prefixStatus: A => A.prefixImg.defaultUrl,
    imgDefaultFile(A) {
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
    },
    defaultFile: A => A.setdefaultFile,
    CompressData: A => A.commpressParams,
    DefaultToFile: A => A.toFile,
    defaultCopyType: A => A.openUploadOutMD
  },
  actions: {
    setShowSettingBtn(A) {
      this.isshowSetting = A
    }, handleIsLogined(A = null) {
      this.isLogined = !!localStorage.getItem("token_api"), this.noInvalid = !!localStorage.getItem("authmsg"), this.prefixStatus !== A && A && (this.prefixImg.support.map((e => ("host_url" === e.label && (e.url = A), e))), this.prefixImg.defaultUrl = A)
    }, setNewAuthMsg() {
      st().then((() => {
        this.isLogined = !0
      }))
    }, setprefixImg(A) {
      this.prefixImg = A
    }, setDefaultPrefix(A) {
      this.prefixImg.defaultUrl = A
    }, setDefaultFile(A) {
      this.setdefaultFile.methods = A.methods, this.setdefaultFile.valAt = A.valAt, this.setdefaultFile.valPt = A.valPt, this.setdefaultFile.valTt = A.valTt
    }, setDefaultCompress(A) {
      this.commpressParams = A
    }, setDefaultToFile(A) {
      this.toFile = A
    }, setDefaultFormat(A) {
      this.defaultcopyformat.formatStr = A
    }, setCustomFormat(A) {
      this.defaultcopyformat.formatList.Custom = A
    }
  }
});

function ct(A) {
  const e = new Date(A);

  function t(A) {
    return A < 10 ? "0" + A : A
  }

  return `${e.getFullYear()}-${e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1}-${t(e.getDate())} ${t(e.getHours())}:${t(e.getMinutes())}`
}

function Bt(A, e = 500, t = !1) {
  let r = null, n = !0;
  return function () {
    const s = this, o = arguments;
    r && clearTimeout(r), t ? (n && (A.apply(s, o), n = !1), r = setTimeout((function () {
      n = !0
    }), e)) : r = setTimeout((function () {
      A.apply(s, o)
    }), e)
  }
}

const lt = '\n<a href="https://b2.mr90.top/" >\n<img width="100" align="right" alt="blazeB2" src="https://cloud.mr90.top/hexo/4/16533db7-b477-46ec-bbf8-44ae848bc771.png">\n</a>\n\n# Blaze B2图床\n\n[![文档](https://img.shields.io/badge/docs-%E6%96%87%E6%A1%A3-blueviolet)](https://blazeb2.js.org/) [![Author](https://img.shields.io/badge/author-Rr210-violet.svg)](https://github.com/Rr210)  [![Release](https://img.shields.io/github/release/Rr210/blazeB2.svg)](https://github.com/Rr210/blazeB2/releases)  [![License](https://img.shields.io/github/license/Rr210/blazeB2.svg)](https://github.com/Rr210/blazeB2/blob/master/LICENSE)  [![Stars](https://img.shields.io/github/stars/Rr210/blazeB2)](https://github.com/Rr210/blazeB2)   [![Issues](https://img.shields.io/github/issues/Rr210/blazeB2)](https://github.com/Rr210/blazeB2/issues)\n## 📃 仓库介绍 | Warehouse introduction\n\n> 📷基于 backBlazeb2 API  ⚡ cloudflare 开发的具有 CDN 加速功能的图床工具\n\n- 在线使用 [传送](https://blazeb2.mr90.cf)  | 镜像站点 [传送](https://b2.mr90.top) | 功能展示 [传送](https://www.bilibili.com/video/BV1gB4y1v7qs)\n- deploys 文件为项目部署文件 [传送](https://blazeb2.js.org/zh/guide/deploy.html)\n## 🎉 功能特点 | Features\n- [x] 支持 **拖拽**、**复制粘贴**、**选择文件** 等方式进行选择图片\n- [x] 支持 **一键复制** 图片外链支持多种格式(**MarkDown**、**HTML**、**自定义**)\n- [x] 支持 **一键部署**（Vercel,ServerLess,Heroku,Docker）[查看部署方法](https://blazeb2.js.org/zh/guide/deploy.html)\n- [x] 支持 图片名称 **唯一性** 后端生成uuid字符串，暂不支持自定义名称\n- [x] 支持 **显示仓库下所有文件夹名称** 支持自定义默认搜索仓库名\n- [x] 支持 **图片压缩** 可自定义压缩等级 默认关闭，开启默认(**0.8**)\n- [x] 支持 **批量上传图片**、**批量删除图片** 和 **批量复制图片外链**\n- [x] 支持 **图床管理**（对仓库图片的 **增删改查** 放大预览）\n- [x] 支持 **自定义上传文件夹** 可自动生成文件夹\n- [x] 支持 自定义 **检索** 某个指定文件夹或图片\n- [x] 支持 **图片水印** 单张处理上传,**文字 / 图片**\n- [x] 支持 **暗夜模式** (自由切换)\n- [x] 支持 **PWA**\n\n\n## 💻 使用教程 | Using the tutorial\n\n- 点击这里查看 [传送门](https://blazeb2.js.org/zh/guide/)\n\n## 🍥 部署方法 | Deployment method\n\n- 支持 vercel 一键部署 [![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=flat&logo=vercel&logoColor=white)](https://blazeb2.js.org/zh/guide/deploy.html#vercel%E4%B8%80%E9%94%AE%E7%A7%92%E9%83%A8%E7%BD%B2)\n\n- 支持 serverless [![serverless](https://img.shields.io/badge/serverless-%23000000.svg?style=flat&logo=serverless&logoColor=white)](https://cloud.tencent.com/login?s_url=https%3A%2F%2Fconsole.cloud.tencent.com%2Fscf%2Flist-create%3Frid%3D1%26ns%3Ddefault%26createType%3Dempty)\n\n- 支持 heroku 部署 [![heroku](https://img.shields.io/badge/heroku-%23000000.svg?style=flat&logo=heroku&logoColor=white)](https://blazeb2.js.org/zh/guide/deploy.html#heroku-%E9%83%A8%E7%BD%B2)\n\n- 支持 Docker 部署 [![docker](https://img.shields.io/badge/docker-%23000000.svg?style=flat&logo=docker&logoColor=white)](https://blazeb2.js.org/zh/guide/deploy.html#%E5%9F%BA%E4%BA%8Edocker-nginx-%E9%83%A8%E7%BD%B2)\n## 📸 预览 | preview\n\n<details>\n<summary>点击展开</summary>\n\n<table>\n<tr>\n<td>\n<strong>上传图片</strong>\n</td>\n<td>\n<img src="https://cloud.mr90.top/hexo/5/d15c17f1-b06f-4560-a363-dd9adce488b2.gif" />\n</td>\n</tr>\n<tr>\n<td>\n<strong>水印上传</strong>\n</td>\n<td>\n<img src="https://cloud.mr90.top/hexo/5/c8f15ba7-b934-4ef6-afb2-22dd472fb4d2.gif" />\n</td>\n</tr>\n<tr>\n<td>\n<strong>图床管理</strong>\n</td>\n<td>\n<img src="https://cloud.mr90.top/hexo/5/1d146393-3012-4b55-8083-01b8c0e562c8.gif" />\n</td>\n</tr>\n</table>\n</details>\n\n## ⭐ 历史star | Star History\n\n![Star History Chart](https://api.star-history.com/svg?repos=Rr210/blazeB2&type=Date)\n\n\n## ✨ 贡献 | Contribution\n\n欢迎各种形式的贡献，包括但不限于：美化界面、增加功能、改进代码、 修复 Bug 等\n\n<a href="https://github.com/rr210/blazeB2/graphs/contributors">\n  <img src="https://contrib.rocks/image?repo=rr210/blazeB2" />\n</a>\n\n## 🎃 反馈 | Feedback\n\n在使用过程中，如遇问题，请仔细阅读 **[文档](https://blazeb2.js.org)** ，或给作者提 **[Issue](https://github.com/rr210/blazeB2/issues)**\n\n## 💿 许可 | License\n\n**[Apache License 2.0](https://github.com/Rr210/blazeB2/blob/master/LICENSE)** \n\nCopyright © 2022-Present blazeB2\n';
var ut = function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("div", {
    staticClass: "upload-tg",
    style: `background-color:var(--b2-upload-c-${A.isshow})`
  }, ["0" === A.isshow ? t("svg", {
    attrs: {
      viewBox: "0 0 1024 1024",
      xmlns: "http://www.w3.org/2000/svg",
      width: "14",
      height: "14"
    }
  }, [t("path", {
    attrs: {
      fill: "var(--b2-pre-bg)",
      d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"
    }
  })]) : "1" === A.isshow ? t("svg", {
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
  }, [t("path", {
    attrs: {
      d: "M512 61.44a40.96 40.96 0 0 1 40.96 40.96v122.88a40.96 40.96 0 1 1-81.92 0V102.4a40.96 40.96 0 0 1 40.96-40.96z",
      fill: "#000000",
      "p-id": "11340"
    }
  }), t("path", {
    attrs: {
      d: "M737.28 121.79456a40.96 40.96 0 0 1 14.99136 55.95136l-61.44 106.43456a40.96 40.96 0 1 1-70.94272-40.96l61.44-106.43456A40.96 40.96 0 0 1 737.28 121.79456z",
      fill: "#191919",
      "p-id": "11341"
    }
  }), t("path", {
    attrs: {
      d: "M902.20544 286.72a40.96 40.96 0 0 1-14.99136 55.95136l-106.43456 61.44a40.96 40.96 0 0 1-40.96-70.94272l106.43456-61.44a40.96 40.96 0 0 1 55.95136 14.99136z",
      fill: "#333333",
      "p-id": "11342"
    }
  }), t("path", {
    attrs: {
      d: "M962.56 512a40.96 40.96 0 0 1-40.96 40.96h-122.88a40.96 40.96 0 1 1 0-81.92h122.88a40.96 40.96 0 0 1 40.96 40.96z",
      fill: "#4C4C4C",
      "p-id": "11343"
    }
  }), t("path", {
    attrs: {
      d: "M902.20544 737.28a40.96 40.96 0 0 1-55.95136 14.99136l-106.43456-61.44a40.96 40.96 0 1 1 40.96-70.94272l106.43456 61.44A40.96 40.96 0 0 1 902.20544 737.28z",
      fill: "#666666",
      "p-id": "11344"
    }
  }), t("path", {
    attrs: {
      d: "M737.28 902.20544a40.96 40.96 0 0 1-55.95136-14.99136l-61.44-106.43456a40.96 40.96 0 0 1 70.94272-40.96l61.44 106.43456A40.96 40.96 0 0 1 737.28 902.20544z",
      fill: "#7F7F7F",
      "p-id": "11345"
    }
  }), t("path", {
    attrs: {
      d: "M512 962.56a40.96 40.96 0 0 1-40.96-40.96v-122.88a40.96 40.96 0 1 1 81.92 0v122.88a40.96 40.96 0 0 1-40.96 40.96z",
      fill: "#999999",
      "p-id": "11346"
    }
  }), t("path", {
    attrs: {
      d: "M286.72 902.20544a40.96 40.96 0 0 1-14.99136-55.95136l61.44-106.43456a40.96 40.96 0 1 1 70.94272 40.96l-61.44 106.43456a40.96 40.96 0 0 1-55.95136 14.99136z",
      fill: "#ACACAC",
      "p-id": "11347"
    }
  }), t("path", {
    attrs: {
      d: "M121.79456 737.28a40.96 40.96 0 0 1 14.99136-55.95136l106.43456-61.44a40.96 40.96 0 0 1 40.96 70.94272l-106.43456 61.44A40.96 40.96 0 0 1 121.79456 737.28z",
      fill: "#BFBFBF",
      "p-id": "11348"
    }
  }), t("path", {
    attrs: {
      d: "M61.44 512a40.96 40.96 0 0 1 40.96-40.96h122.88a40.96 40.96 0 1 1 0 81.92H102.4a40.96 40.96 0 0 1-40.96-40.96z",
      fill: "#CCCCCC",
      "p-id": "11349"
    }
  }), t("path", {
    attrs: {
      d: "M121.79456 286.72a40.96 40.96 0 0 1 55.95136-14.99136l106.43456 61.44a40.96 40.96 0 1 1-40.96 70.94272l-106.43456-61.44A40.96 40.96 0 0 1 121.79456 286.72z",
      fill: "#E5E5E5",
      "p-id": "11350"
    }
  }), t("path", {
    attrs: {
      d: "M286.72 121.79456a40.96 40.96 0 0 1 55.95136 14.99136l61.44 106.43456a40.96 40.96 0 0 1-70.94272 40.96l-61.44-106.43456A40.96 40.96 0 0 1 286.72 121.79456z",
      fill: "#F2F2F2",
      "p-id": "11351"
    }
  })]) : "2" === A.isshow ? t("svg", {
    attrs: {
      viewBox: "0 0 1024 1024",
      xmlns: "http://www.w3.org/2000/svg",
      width: "14",
      height: "14"
    }
  }, [t("path", {
    attrs: {
      fill: "currentColor",
      d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
    }
  })]) : "3" === A.isshow ? t("svg", {
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
  }, [t("path", {
    attrs: {
      d: "M265.28 310.72a32 32 0 0 1 45.44-45.44l448 448a32 32 0 0 1-45.44 45.44z",
      "p-id": "12284",
      fill: "var(--b2-pre-bg)"
    }
  }), t("path", {
    attrs: {
      d: "M713.28 265.28a32 32 0 0 1 45.44 45.44l-448 448a32 32 0 0 1-45.44-45.44z",
      "p-id": "12285",
      fill: "var(--b2-pre-bg)"
    }
  })]) : A._e()])
}, gt = [];
ut._withStripped = !0;
const wt = {};
var ht = Ye({props: {isshow: String}}, ut, gt, !1, dt, "05829ee8", null, null);

function dt(A) {
  for (let e in wt) this[e] = wt[e]
}

ht.options.__file = "src/views/svg/uploadTaggle.vue";
const Qt = function () {
  return ht.exports
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
function ft(A, e) {
  var t = Object.keys(A);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(A);
    e && (r = r.filter((function (e) {
      return Object.getOwnPropertyDescriptor(A, e).enumerable
    }))), t.push.apply(t, r)
  }
  return t
}

function pt(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {};
    e % 2 ? ft(Object(t), !0).forEach((function (e) {
      Ut(A, e, t[e])
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t)) : ft(Object(t)).forEach((function (e) {
      Object.defineProperty(A, e, Object.getOwnPropertyDescriptor(t, e))
    }))
  }
  return A
}

function Ct(A, e) {
  for (var t = 0; t < e.length; t++) {
    var r = e[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(A, r.key, r)
  }
}

function Ut(A, e, t) {
  return e in A ? Object.defineProperty(A, e, {value: t, enumerable: !0, configurable: !0, writable: !0}) : A[e] = t, A
}

function Ft() {
  return Ft = Object.assign || function (A) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (A[r] = t[r])
    }
    return A
  }, Ft.apply(this, arguments)
}

var mt, vt, yt, Ht, Et, bt, It, Lt, Kt = {exports: {}};
mt = Kt, "undefined" != typeof window && (vt = window, yt = vt.HTMLCanvasElement && vt.HTMLCanvasElement.prototype, Ht = vt.Blob && function () {
  try {
    return Boolean(new Blob)
  } catch (A) {
    return !1
  }
}(), Et = Ht && vt.Uint8Array && function () {
  try {
    return 100 === new Blob([new Uint8Array(100)]).size
  } catch (A) {
    return !1
  }
}(), bt = vt.BlobBuilder || vt.WebKitBlobBuilder || vt.MozBlobBuilder || vt.MSBlobBuilder, It = /^data:((.*?)(;charset=.*?)?)(;base64)?,/, Lt = (Ht || bt) && vt.atob && vt.ArrayBuffer && vt.Uint8Array && function (A) {
  var e, t, r, n, s, o, i, a, c;
  if (!(e = A.match(It))) throw new Error("invalid data URI");
  for (t = e[2] ? e[1] : "text/plain" + (e[3] || ";charset=US-ASCII"), r = !!e[4], n = A.slice(e[0].length), s = r ? atob(n) : decodeURIComponent(n), o = new ArrayBuffer(s.length), i = new Uint8Array(o), a = 0; a < s.length; a += 1) i[a] = s.charCodeAt(a);
  return Ht ? new Blob([Et ? i : o], {type: t}) : ((c = new bt).append(o), c.getBlob(t))
}, vt.HTMLCanvasElement && !yt.toBlob && (yt.mozGetAsFile ? yt.toBlob = function (A, e, t) {
  var r = this;
  setTimeout((function () {
    t && yt.toDataURL && Lt ? A(Lt(r.toDataURL(e, t))) : A(r.mozGetAsFile("blob", e))
  }))
} : yt.toDataURL && Lt && (yt.msToBlob ? yt.toBlob = function (A, e, t) {
  var r = this;
  setTimeout((function () {
    (e && "image/png" !== e || t) && yt.toDataURL && Lt ? A(Lt(r.toDataURL(e, t))) : A(r.msToBlob(e))
  }))
} : yt.toBlob = function (A, e, t) {
  var r = this;
  setTimeout((function () {
    A(Lt(r.toDataURL(e, t)))
  }))
})), mt.exports ? mt.exports = Lt : vt.dataURLtoBlob = Lt);
var xt = Kt.exports, St = {
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
}, Dt = "undefined" != typeof window && void 0 !== window.document ? window : {}, _t = function (A) {
  return A > 0 && A < 1 / 0
}, Mt = Array.prototype.slice;
var kt = /^image\/.+$/;

function Tt(A) {
  return kt.test(A)
}

var Ot = String.fromCharCode;
var Vt = Dt.btoa;

function Gt(A) {
  var e, t = new DataView(A);
  try {
    var r, n, s;
    if (255 === t.getUint8(0) && 216 === t.getUint8(1)) for (var o = t.byteLength, i = 2; i + 1 < o;) {
      if (255 === t.getUint8(i) && 225 === t.getUint8(i + 1)) {
        n = i;
        break
      }
      i += 1
    }
    if (n) {
      var a = n + 10;
      if ("Exif" === function (A, e, t) {
        var r, n = "";
        for (t += e, r = e; r < t; r += 1) n += Ot(A.getUint8(r));
        return n
      }(t, n + 4, 4)) {
        var c = t.getUint16(a);
        if (((r = 18761 === c) || 19789 === c) && 42 === t.getUint16(a + 2, r)) {
          var B = t.getUint32(a + 4, r);
          B >= 8 && (s = a + B)
        }
      }
    }
    if (s) {
      var l, u, g = t.getUint16(s, r);
      for (u = 0; u < g; u += 1) if (l = s + 12 * u + 2, 274 === t.getUint16(l, r)) {
        l += 8, e = t.getUint16(l, r), t.setUint16(l, 1, r);
        break
      }
    }
  } catch (w) {
    e = 1
  }
  return e
}

var Rt = /\.\d*(?:0|9){12}\d*$/;

function Pt(A) {
  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e11;
  return Rt.test(A) ? Math.round(A * e) / e : A
}

function Nt(A) {
  var e = A.aspectRatio, t = A.height, r = A.width,
    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none", s = _t(r), o = _t(t);
  if (s && o) {
    var i = t * e;
    ("contain" === n || "none" === n) && i > r || "cover" === n && i < r ? t = r / e : r = t * e
  } else s ? t = r / e : o && (r = t * e);
  return {width: r, height: t}
}

var Jt = Dt.ArrayBuffer, Xt = Dt.FileReader, Wt = Dt.URL || Dt.webkitURL, Yt = /\.\w+$/, jt = Dt.Compressor,
  $t = function () {
    function A(e, t) {
      !function (A, e) {
        if (!(A instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, A), this.file = e, this.image = new Image, this.options = pt(pt({}, St), t), this.aborted = !1, this.result = null, this.init()
    }

    var e, t, r;
    return e = A, r = [{
      key: "noConflict", value: function () {
        return window.Compressor = jt, A
      }
    }, {
      key: "setDefaults", value: function (A) {
        Ft(St, A)
      }
    }], (t = [{
      key: "init", value: function () {
        var A = this, e = this.file, t = this.options;
        if (r = e, "undefined" != typeof Blob && (r instanceof Blob || "[object Blob]" === Object.prototype.toString.call(r))) {
          var r, n = e.type;
          if (Tt(n)) if (Wt && Xt) if (Jt || (t.checkOrientation = !1), Wt && !t.checkOrientation) this.load({url: Wt.createObjectURL(e)}); else {
            var s = new Xt, o = t.checkOrientation && "image/jpeg" === n;
            this.reader = s, s.onload = function (t) {
              var r = t.target.result, s = {};
              if (o) {
                var i = Gt(r);
                i > 1 || !Wt ? (s.url = function (A, e) {
                  for (var t, r = [], n = new Uint8Array(A); n.length > 0;) r.push(Ot.apply(null, (t = n.subarray(0, 8192), Array.from ? Array.from(t) : Mt.call(t)))), n = n.subarray(8192);
                  return "data:".concat(e, ";base64,").concat(Vt(r.join("")))
                }(r, n), i > 1 && Ft(s, function (A) {
                  var e = 0, t = 1, r = 1;
                  switch (A) {
                    case 2:
                      t = -1;
                      break;
                    case 3:
                      e = -180;
                      break;
                    case 4:
                      r = -1;
                      break;
                    case 5:
                      e = 90, r = -1;
                      break;
                    case 6:
                      e = 90;
                      break;
                    case 7:
                      e = 90, t = -1;
                      break;
                    case 8:
                      e = -90
                  }
                  return {rotate: e, scaleX: t, scaleY: r}
                }(i))) : s.url = Wt.createObjectURL(e)
              } else s.url = r;
              A.load(s)
            }, s.onabort = function () {
              A.fail(new Error("Aborted to read the image with FileReader."))
            }, s.onerror = function () {
              A.fail(new Error("Failed to read the image with FileReader."))
            }, s.onloadend = function () {
              A.reader = null
            }, o ? s.readAsArrayBuffer(e) : s.readAsDataURL(e)
          } else this.fail(new Error("The current browser does not support image compression.")); else this.fail(new Error("The first argument must be an image File or Blob object."))
        } else this.fail(new Error("The first argument must be a File or Blob object."))
      }
    }, {
      key: "load", value: function (A) {
        var e = this, t = this.file, r = this.image;
        r.onload = function () {
          e.draw(pt(pt({}, A), {}, {naturalWidth: r.naturalWidth, naturalHeight: r.naturalHeight}))
        }, r.onabort = function () {
          e.fail(new Error("Aborted to load the image."))
        }, r.onerror = function () {
          e.fail(new Error("Failed to load the image."))
        }, Dt.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Dt.navigator.userAgent) && (r.crossOrigin = "anonymous"), r.alt = t.name, r.src = A.url
      }
    }, {
      key: "draw", value: function (A) {
        var e = this, t = A.naturalWidth, r = A.naturalHeight, n = A.rotate, s = void 0 === n ? 0 : n, o = A.scaleX,
          i = void 0 === o ? 1 : o, a = A.scaleY, c = void 0 === a ? 1 : a, B = this.file, l = this.image,
          u = this.options, g = document.createElement("canvas"), w = g.getContext("2d"), h = Math.abs(s) % 180 == 90,
          d = ("contain" === u.resize || "cover" === u.resize) && _t(u.width) && _t(u.height),
          Q = Math.max(u.maxWidth, 0) || 1 / 0, f = Math.max(u.maxHeight, 0) || 1 / 0, p = Math.max(u.minWidth, 0) || 0,
          C = Math.max(u.minHeight, 0) || 0, U = t / r, F = u.width, m = u.height;
        if (h) {
          var v = [f, Q];
          Q = v[0], f = v[1];
          var y = [C, p];
          p = y[0], C = y[1];
          var H = [m, F];
          F = H[0], m = H[1]
        }
        d && (U = F / m);
        var E = Nt({aspectRatio: U, width: Q, height: f}, "contain");
        Q = E.width, f = E.height;
        var b = Nt({aspectRatio: U, width: p, height: C}, "cover");
        if (p = b.width, C = b.height, d) {
          var I = Nt({aspectRatio: U, width: F, height: m}, u.resize);
          F = I.width, m = I.height
        } else {
          var L = Nt({aspectRatio: U, width: F, height: m}), K = L.width;
          F = void 0 === K ? t : K;
          var x = L.height;
          m = void 0 === x ? r : x
        }
        var S = -(F = Math.floor(Pt(Math.min(Math.max(F, p), Q)))) / 2,
          D = -(m = Math.floor(Pt(Math.min(Math.max(m, C), f)))) / 2, _ = F, M = m, k = [];
        if (d) {
          var T, O, V, G, R = Nt({aspectRatio: U, width: t, height: r}, {contain: "cover", cover: "contain"}[u.resize]);
          V = R.width, G = R.height, T = (t - V) / 2, O = (r - G) / 2, k.push(T, O, V, G)
        }
        if (k.push(S, D, _, M), h) {
          var P = [m, F];
          F = P[0], m = P[1]
        }
        g.width = F, g.height = m, Tt(u.mimeType) || (u.mimeType = B.type);
        var N = "transparent";
        if (B.size > u.convertSize && u.convertTypes.indexOf(u.mimeType) >= 0 && (u.mimeType = "image/jpeg"), "image/jpeg" === u.mimeType && (N = "#fff"), w.fillStyle = N, w.fillRect(0, 0, F, m), u.beforeDraw && u.beforeDraw.call(this, w, g), !this.aborted && (w.save(), w.translate(F / 2, m / 2), w.rotate(s * Math.PI / 180), w.scale(i, c), w.drawImage.apply(w, [l].concat(k)), w.restore(), u.drew && u.drew.call(this, w, g), !this.aborted)) {
          var J = function (A) {
            e.aborted || e.done({naturalWidth: t, naturalHeight: r, result: A})
          };
          g.toBlob ? g.toBlob(J, u.mimeType, u.quality) : J(xt(g.toDataURL(u.mimeType, u.quality)))
        }
      }
    }, {
      key: "done", value: function (A) {
        var e, t, r = A.naturalWidth, n = A.naturalHeight, s = A.result, o = this.file, i = this.image,
          a = this.options;
        if (Wt && !a.checkOrientation && Wt.revokeObjectURL(i.src), s) if (a.strict && s.size > o.size && a.mimeType === o.type && !(a.width > r || a.height > n || a.minWidth > r || a.minHeight > n || a.maxWidth < r || a.maxHeight < n)) s = o; else {
          var c = new Date;
          s.lastModified = c.getTime(), s.lastModifiedDate = c, s.name = o.name, s.name && s.type !== o.type && (s.name = s.name.replace(Yt, (e = s.type, "jpeg" === (t = Tt(e) ? e.substr(6) : "") && (t = "jpg"), ".".concat(t))))
        } else s = o;
        this.result = s, a.success && a.success.call(this, s)
      }
    }, {
      key: "fail", value: function (A) {
        var e = this.options;
        if (!e.error) throw A;
        e.error.call(this, A)
      }
    }, {
      key: "abort", value: function () {
        this.aborted || (this.aborted = !0, this.reader ? this.reader.abort() : this.image.complete ? this.fail(new Error("The compression process has been aborted.")) : (this.image.onload = null, this.image.onabort()))
      }
    }]) && Ct(e.prototype, t), r && Ct(e, r), A
  }();
var Zt = function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("div", {staticClass: "mark-w"}, [t("el-tooltip", {
    staticClass: "item",
    attrs: {effect: "dark", content: A.isMark ? "切换到普通链接模式" : "切换到MarkDown模式", placement: "top-start"}
  }, [A.isMark ? t("svg", {
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
  }, [t("path", {
    attrs: {
      d: "M1187.6 118.2H92.4C41.4 118.2 0 159.6 0 210.4v603c0 51 41.4 92.4 92.4 92.4h1095.4c51 0 92.4-41.4 92.2-92.2V210.4c0-50.8-41.4-92.2-92.4-92.2zM677 721.2H554v-240l-123 153.8-123-153.8v240H184.6V302.8h123l123 153.8 123-153.8h123v418.4z m270.6 6.2L763 512H886V302.8h123V512H1132z",
      "p-id": "3243",
      fill: "#3c3c3c"
    }
  })]) : t("svg", {
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
  }, [t("path", {
    attrs: {
      d: "M92 192C42.24 192 0 232.128 0 282.016v459.968C0 791.904 42.24 832 92 832h840C981.76 832 1024 791.872 1024 741.984V282.016C1024 232.16 981.76 192 932 192z m0 64h840c16.512 0 28 12.256 28 26.016v459.968c0 13.76-11.52 26.016-28 26.016H92C75.488 768 64 755.744 64 741.984V282.016c0-13.76 11.52-25.984 28-25.984zM160 352v320h96v-212.992l96 127.008 96-127.04V672h96V352h-96l-96 128-96-128z m544 0v160h-96l144 160 144-160h-96v-160z",
      "p-id": "2862",
      fill: "#808080"
    }
  })])]), t("svg", {
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
  }, [t("path", {
    attrs: {
      d: "M624.5 786.3c92.9 0 168.2-75.3 168.2-168.2V309c0-92.4-75.3-168.2-168.2-168.2H303.6c-92.4 0-168.2 75.3-168.2 168.2v309.1c0 92.4 75.3 168.2 168.2 168.2h320.9zM178.2 618.1V309c0-69.4 56.1-125.5 125.5-125.5h320.9c69.4 0 125.5 56.1 125.5 125.5v309.1c0 69.4-56.1 125.5-125.5 125.5h-321c-69.4 0-125.4-56.1-125.4-125.5z",
      "p-id": "11280"
    }
  }), t("path", {
    attrs: {
      d: "M849.8 295.1v361.5c0 102.7-83.6 186.3-186.3 186.3H279.1v42.7h384.4c126.3 0 229.1-102.8 229.1-229.1V295.1h-42.8zM307.9 361.8h312.3c11.8 0 21.4-9.6 21.4-21.4 0-11.8-9.6-21.4-21.4-21.4H307.9c-11.8 0-21.4 9.6-21.4 21.4 0 11.9 9.6 21.4 21.4 21.4zM307.9 484.6h312.3c11.8 0 21.4-9.6 21.4-21.4 0-11.8-9.6-21.4-21.4-21.4H307.9c-11.8 0-21.4 9.6-21.4 21.4 0 11.9 9.6 21.4 21.4 21.4z",
      "p-id": "11281"
    }
  }), t("path", {
    attrs: {
      d: "M620.2 607.4c11.8 0 21.4-9.6 21.4-21.4 0-11.8-9.6-21.4-21.4-21.4H307.9c-11.8 0-21.4 9.6-21.4 21.4 0 11.8 9.6 21.4 21.4 21.4h312.3z",
      "p-id": "11282"
    }
  })])], 1)
}, zt = [];
Zt._withStripped = !0;
const qt = {
  data: () => ({isMark: !1, linktemp: ""}),
  props: {link: {type: String, default: ""}},
  watch: {
    defaultCopyType: {
      deep: !0, immediate: !0, handler(A, e) {
        this.isMark = A, this.linktemp = this.isMark ? `![](${this.link})` : this.link
      }
    }
  },
  computed: {...Pe(at, ["defaultCopyType"])},
  methods: {
    handleMark() {
      this.isMark = !this.isMark, this.linktemp = this.isMark ? `![](${this.link})` : this.link;
      at().$patch({openUploadOutMD: this.isMark})
    }, copyhandle: Bt((function () {
      const A = this.linktemp;
      this.$copyText(A).then((() => {
        ELEMENT.Message({
          message: "" !== this.linktemp ? `已复制剪切板：${A}` : "复制失败",
          type: "" !== this.linktemp ? "success" : "error"
        })
      })).catch((() => {
        ELEMENT.Message({message: "复制失败，请手动复制", type: "error"})
      }))
    }), 300, !0)
  }
}, Ar = {};
var er = Ye(qt, Zt, zt, !1, tr, null, null, null);

function tr(A) {
  for (let e in Ar) this[e] = Ar[e]
}

er.options.__file = "src/views/svg/MarkDown.vue";
const rr = function () {
  return er.exports
}();
var nr = function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("li", {staticClass: "upload-i", style: A.styleCount}, [t("img", {
    attrs: {
      "data-fancybox": "gallery",
      src: A.picBlob(A.file.raw),
      alt: "",
      srcset: ""
    }
  }), t("div", [t("h2", {staticClass: "up_title"}, [A._v(A._s(A.file.name) + " "), t("span", {staticClass: "up-span"}, [t("del", [A._v(A._s((A.file.size / 1024).toFixed(2) + "KB"))])]), A.CompressData.iscompress ? t("span", {
    staticClass: "up-span",
    staticStyle: {color: "var(--b2-theme-c)"}
  }, [A._v(A._s(A.newSize + "KB"))]) : A._e()]), "0" === A.svgType ? t("svg", {
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
      click: function (e) {
        return A.changeHandleFile(A.pid)
      }
    }
  }, [t("path", {
    attrs: {
      d: "M783 312.5v510c0 16.6-13.4 30-30 30H273c-16.6 0-30-13.4-30-30v-510h540m60-60H183v600c0 33.1 26.9 60 60 60h540c33.1 0 60-26.9 60-60v-600z",
      fill: "var(--b2-close)",
      "p-id": "1343"
    }
  }), t("path", {
    attrs: {
      d: "M333 251v-78h360v78H333m-60 60h420c33.1 0 60-26.9 60-60v-78c0-33.1-26.9-60-60-60H333c-33.1 0-60 26.9-60 60v138z",
      fill: "var(--b2-close)",
      "p-id": "1344"
    }
  }), t("path", {
    attrs: {
      d: "M882 252H145c-16.6 0-30 13.4-30 30s13.4 30 30 30h737c16.6 0 30-13.4 30-30s-13.4-30-30-30zM392.8 432.5h60v300h-60zM572.8 432.5h60v300h-60z",
      fill: "var(--b2-close)",
      "p-id": "1345"
    }
  })]) : "2" === A.svgType ? t("MarkDown", {
    staticClass: "home-md",
    attrs: {link: A.linkUrl}
  }) : A._e(), t("UploadTaggle", {attrs: {isshow: A.svgType}}), t("div", {staticClass: "config-warp"}, [t("span", {
    staticClass: "up-span",
    staticStyle: {"margin-right": "auto"}
  }, [A._v(A._s(A.TimeTran(A.file.uid)))]), "0" === A.svgType ? t("span", {
    staticClass: "up-span",
    on: {
      click: function (e) {
        return A.setShowSettingBtn(!0)
      }
    }
  }, [A._v(A._s(A.CompressData.iscompress ? "已开启压缩" : "未开启压缩"))]) : A._e(), t("span", {
    staticClass: "up-span",
    on: {
      click: function (e) {
        return A.setwarterMark(A.pid)
      }
    }
  }, [A._v("水印设置")])])], 1)])
}, sr = [];
nr._withStripped = !0;
const or = {
  data: () => ({
    compressMsg: {iscompress: !1, rank: .8},
    oldSize: "",
    newSize: "",
    afterFile: {},
    svgType: "0",
    linkUrl: ""
  }),
  emits: ["changefilelist", "watermarkhandle"],
  props: {file: {type: Object, default: () => ({})}, pid: {type: Number, default: 0}, styleCount: {type: String}},
  computed: {
    ...Pe(at, ["toFile"]), ...Pe(at, ["prefixStatus"]), ...Pe(at, ["CompressData"]),
    picBlob: () => function (A) {
      return window.URL.createObjectURL(A)
    },
    TimeTran: () => function (A) {
      return ct(A)
    },
    fileListTo() {
      return this.filelist.map((A => window.URL.createObjectURL(A.raw)))
    }
  },
  mounted() {
    this.compressMsg = this.CompressData, this.UploadFile(this.file.raw)
  },
  components: {UploadTaggle: Qt, MarkDown: rr},
  methods: {
    ...Ne(at, ["setShowSettingBtn"]), uploadSumit() {
      return new Promise((A => {
        if ("0" === this.svgType) {
          this.svgType = "1";
          const e = this.afterFile, t = new FormData, r = localStorage.getItem("authmsg"),
            n = Object.assign(JSON.parse(r), {tofile: this.toFile});
          t.append("file_", e);
          for (const A in n) t.append(A, n[A]);
          tt(t).then((e => {
            this.svgType = e.data.status ? "3" : "2", this.linkUrl = this.prefixStatus + e.data.fileName, A(e.data)
          }))
        } else A({msg: "当前图片已上传"})
      }))
    }, changeHandleFile(A) {
      this.$emit("changefilelist", A)
    }, setwarterMark(A) {
      this.$emit("watermarkhandle", A)
    }, async UploadFile(A) {
      const e = this;
      if (e.compressMsg.iscompress) {
        const t = await function (A, e, t, r = null) {
          return new Promise(((n, s) => {
            const o = new $t(A, {
              quality: e, success(A) {
                n(o), r && r(A, t)
              }, error(A) {
              }
            })
          }))
        }(A, e.compressMsg.rank);
        t.result && (e.newSize = (t.result.size / 1024).toFixed(2), e.afterFile = t.result)
      } else e.afterFile = A
    }
  }
}, ir = {};
var ar = Ye(or, nr, sr, !1, cr, "6fa37f62", null, null);

function cr(A) {
  for (let e in ir) this[e] = ir[e]
}

ar.options.__file = "src/views/home/components/UploadList.vue";
const Br = function () {
  return ar.exports
}();
var lr = Object.defineProperty, ur = Object.getOwnPropertySymbols, gr = Object.prototype.hasOwnProperty,
  wr = Object.prototype.propertyIsEnumerable,
  hr = (A, e, t) => e in A ? lr(A, e, {enumerable: !0, configurable: !0, writable: !0, value: t}) : A[e] = t,
  dr = (A, e) => {
    for (var t in e || (e = {})) gr.call(e, t) && hr(A, t, e[t]);
    if (ur) for (var t of ur(e)) wr.call(e, t) && hr(A, t, e[t]);
    return A
  }, Qr = (A, e, t) => (hr(A, "symbol" != typeof e ? e + "" : e, t), t), fr = (A, e, t) => new Promise(((r, n) => {
    var s = A => {
      try {
        i(t.next(A))
      } catch (e) {
        n(e)
      }
    }, o = A => {
      try {
        i(t.throw(A))
      } catch (e) {
        n(e)
      }
    }, i = A => A.done ? r(A.value) : Promise.resolve(A.value).then(s, o);
    i((t = t.apply(A, e)).next())
  })), pr = {
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
  }, Cr = {childList: !0, subtree: !0, attributeFilter: ["style", "class", "data-watermark-tag"]};
var Ur = A => {
  let e = "";
  return Object.keys(A).forEach((t => {
    const r = t.replace(/([A-Z])/g, "-$1").toLowerCase();
    e += `${r}:${A[t]};`
  })), e
}, Fr = (A = "") => {
  return `${e = A, window.btoa(decodeURI(encodeURIComponent(e)))}-${(new Date).getTime()}-${Math.floor(Math.random() * Math.pow(10, 8))}`;
  var e
};
var mr = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, vr = {
  name: "Watermark",
  props: {
    options: {type: Object, default: () => ({})},
    visible: {type: Boolean, default: !0},
    isBody: {type: Boolean, default: !1}
  },
  setup(A) {
    const e = Object.assign, t = nA(), r = nA();

    function n() {
      r.value ? r.value.update(e({}, A.options, {})) : (r.value = new class {
        constructor(A = {}) {
          Qr(this, "options"), Qr(this, "container"), Qr(this, "watermarkContent"), Qr(this, "watermarkDom"), Qr(this, "style"), Qr(this, "watermarkTag"), Qr(this, "shadowRoot"), Qr(this, "mutationObserver"), Qr(this, "_isAgainRender", (A => {
            if ("attributes" === A.type) {
              if ("data-watermark-tag" === A.attributeName) return !0;
              if (this.watermarkTag === this._getNodeRandomId(A.target)) return !0
            }
            return !(!A.removedNodes.length || this.watermarkTag !== this._getNodeRandomId(A.removedNodes[0]))
          })), Qr(this, "_getNodeRandomId", (A => {
            var e, t;
            return null == (e = null == A ? void 0 : A.dataset) ? void 0 : e[(t = "data-watermark-tag", t.split("-").slice(1).reduce(((A, e, t) => 0 === t ? e : `${A}${e[0].toUpperCase() + e.slice(1)}`)))]
          })), Qr(this, "_destroyMutationObserver", (() => {
            this.mutationObserver && (this.mutationObserver.takeRecords(), this.mutationObserver.disconnect(), this.mutationObserver = null)
          })), Qr(this, "_getWatermarkDom", (A => fr(this, null, (function* () {
            this.watermarkDom || (this.watermarkDom = document.createElement("div")), "number" == typeof A && A && (this.style.height = `${A}px`);
            const e = yield function (A) {
              const {
                text: e,
                gapX: t,
                gapY: r,
                offsetTop: n,
                offsetLeft: s,
                width: o,
                height: i,
                rotate: a,
                opacity: c,
                fontSize: B,
                fontStyle: l,
                fontVariant: u,
                fontWeight: g,
                fontFamily: w,
                fontColor: h,
                textAlign: d,
                textBaseline: Q,
                image: f,
                blindText: p,
                blindFontSize: C,
                blindOpacity: U
              } = A;
              return new Promise(((A, F) => {
                const m = document.createElement("canvas"), v = m.getContext("2d"), y = 1 * (Number(t) + Number(o)),
                  H = 1 * (Number(r) + Number(i)), E = Number(s) || Number(t) / 2, b = Number(n) || Number(r) / 2;
                if (m.setAttribute("width", `${y}px`), m.setAttribute("height", `${H}px`), v) {
                  const t = 1 * o, r = 1 * i;
                  if (v.translate(1 * E, 1 * b), v.rotate(Math.PI / 180 * Number(a)), p && (v.globalAlpha = U, v.font = `${C}px normal`, v.fillText(p, 0, 0)), v.globalAlpha = c, f) {
                    const e = new Image;
                    return e.crossOrigin = "anonymous", e.referrerPolicy = "no-referrer", e.src = f, void (e.onload = () => {
                      v.drawImage(e, 0, 0, t, r), A({url: v.canvas.toDataURL(), width: y, height: H})
                    })
                  }
                  const n = Array.isArray(e) ? e : [e], s = n.map((A => v.measureText(A).width)), l = Math.max(...s),
                    u = 1 * Number(B);
                  v.textAlign = d, v.textBaseline = Q, v.fillStyle = h, v.font = I(`${u}px`), l > o && (v.font = I(u / 2 + "px"));
                  const g = u + 5;
                  let w = (r - (B * n.length + 5 * (n.length - 1))) / 2;
                  w = w < 0 ? 0 : w;
                  for (let A = 0; A < n.length; A++) v.fillText(n[A] || "", t / 2, w + g * A);
                  A({url: v.canvas.toDataURL(), width: y, height: H})
                }

                function I(A) {
                  return `${l} ${u} ${g} ${A} ${w}`
                }

                return F()
              }))
            }(this.options);
            if (null == e ? void 0 : e.url) {
              const A = e.url;
              "repeat" === this.options.mode ? this.style.backgroundImage = `url(${A})` : (this.style.backgroundImage = `url(${A}), url(${A})`, this.style.backgroundRepeat = "repeat, repeat", this.style.backgroundPosition = `${e.width / 2}px ${e.height / 2}px, 0 0`), this.options.container || (this.style.position = "fixed", this.style.height = void 0), this.watermarkDom.setAttribute("style", Ur(this.style))
            }
            return this.watermarkDom.setAttribute("data-watermark-tag", this.watermarkTag), this.watermarkDom
          })))), Qr(this, "_getWatermarkHeight", (() => {
            if (!this.container) return 0;
            let A = 0;
            const {
              scrollHeight: e = 0,
              clientHeight: t = 0
            } = this.options.container ? this.container.parentNode : this.container;
            return e > t && (A = Math.max(e, t)), A
          })), this.options = Object.assign({}, pr, A), this.style = {
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            pointerEvents: "none",
            overflow: "hidden",
            backgroundColor: "transparent",
            backgroundRepeat: "repeat"
          }, this.style.zIndex = this.options.zIndex, this.watermarkTag = Fr("watermark"), this.mutationObserver = null, this._render()
        }

        update(A = {}) {
          this.options = dr(dr({}, this.options), A), this.style.zIndex = this.options.zIndex, this._render()
        }

        show() {
          this.watermarkDom && (this.style.display = "block", this.watermarkDom.setAttribute("style", Ur(this.style)))
        }

        hide() {
          this.watermarkDom && (this.style.display = "none", this.watermarkDom.setAttribute("style", Ur(this.style)))
        }

        destroy() {
          this.shadowRoot = void 0, this.watermarkContent && (this.watermarkContent.remove(), this.watermarkContent = void 0), this.watermarkDom && (this.watermarkDom.remove(), this.watermarkDom = void 0), this._destroyMutationObserver()
        }

        _render() {
          return fr(this, null, (function* () {
            this._destroyMutationObserver(), this.container = ((A, e, t = {}, r) => {
              let n;
              if ("string" == typeof A) {
                if (n = document.getElementById(A), !n) throw new Error(`水印挂载节点未找到，请检查#${A}是否存在`)
              } else n = null != A ? A : document.body;
              n.setAttribute("data-watermark-tag", e);
              const s = dr({position: "relative"}, t);
              return r || delete s.position, n.setAttribute("style", Ur(s)), n
            })(this.options.container, this.watermarkTag, this.options.containerStyle, this.options.pack), this.watermarkContent || (this.watermarkContent = (A => {
              const e = document.createElement("div");
              return e.setAttribute("style", Ur({pointerEvents: "none"})), e.setAttribute("data-watermark-tag", A), e
            })(this.watermarkTag), this.container.append(this.watermarkContent));
            const A = this._getWatermarkHeight();
            if (this.watermarkDom = yield this._getWatermarkDom(A), this.watermarkContent) {
              const A = this.watermarkContent.childNodes || [];
              for (let e = 0; e < A.length; e++) this.watermarkContent.removeChild(A[e])
            }
            "function" == typeof this.watermarkContent.attachShadow ? this.shadowRoot || (this.shadowRoot = this.watermarkContent.attachShadow({mode: "open"})) : this.shadowRoot = this.watermarkContent, this.shadowRoot.append(this.watermarkDom), mr && this.options.monitor && (this.mutationObserver = new mr((A => {
              A.forEach((A => {
                if (this._isAgainRender(A)) return this.destroy(), void this._render()
              }))
            })), this.mutationObserver.observe(this.container, Cr), this.shadowRoot && this.mutationObserver.observe(this.shadowRoot, Cr))
          }))
        }
      }(e({}, A.options, {container: A.isBody ? void 0 : t.value})), A.visible || r.value.hide())
    }

    return bA(A.options, (() => {
      n()
    })), bA((() => A.visible), (A => {
      var e, t;
      A ? null == (e = r.value) || e.show() : null == (t = r.value) || t.hide()
    })), fA((() => {
      n()
    })), pA((() => {
      var A;
      null == (A = r.value) || A.destroy()
    })), {root: t, watermark: r}
  },
  render() {
    if (this.$props.isBody) return _A("div");
    const A = "function" == typeof this.$slots.default ? this.$slots.default() : this.$slots.default;
    return _A("div", {ref: "root"}, A)
  }
}, yr = function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("div", {staticClass: "text-set"}, [t("svg", {
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
  }, [t("path", {
    attrs: {
      d: "M582.83 125.77c78.2 0 138.52 17.89 183.23 55.86 42.43 35.75 63.66 83.8 63.66 145.25 0 44.68-11.16 82.66-33.5 113.95-22.34 29.05-52.52 51.39-92.73 65.91 52.5 10.05 92.73 31.27 119.52 63.68 26.82 32.39 40.23 75.95 40.23 129.59 0 80.43-27.93 138.52-82.66 176.5-46.93 31.3-112.84 46.93-197.75 46.93h-364.2V125.77h364.2zM340.4 464.29h210.02c55.86 0 96.09-10.07 120.66-29.05 24.59-20.11 36.86-51.39 36.86-93.84 0-40.23-12.27-69.27-36.86-87.16-24.57-18.98-64.8-27.91-118.41-27.91H340.4v237.96z m0 358.62h225.68c51.39 0 91.59-8.93 120.64-24.57 35.75-21.23 54.75-54.75 54.75-100.57 0-46.91-14.52-81.55-42.45-102.77-27.93-21.23-71.5-31.27-129.59-31.27H340.4v259.18z",
      "p-id": "1321",
      fill: A.svgBC ? "var(--b2-theme-c)" : "var(--b2-text)"
    }
  })]), t("svg", {
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
  }, [t("path", {
    attrs: {
      d: "M656.64 165.184l-186.432 695.296-92.736-24.896 186.432-695.232z",
      fill: A.svgIC ? "var(--b2-theme-c)" : "var(--b2-text)",
      "p-id": "2126"
    }
  }), t("path", {
    attrs: {
      d: "M787.2 224m-48 0l-288 0q-48 0-48-48l0 0q0-48 48-48l288 0q48 0 48 48l0 0q0 48-48 48Z",
      fill: A.svgIC ? "var(--b2-theme-c)" : "var(--b2-text)",
      "p-id": "2127"
    }
  }), t("path", {
    attrs: {
      d: "M620.8 896m-48 0l-288 0q-48 0-48-48l0 0q0-48 48-48l288 0q48 0 48 48l0 0q0 48-48 48Z",
      fill: A.svgIC ? "var(--b2-theme-c)" : "var(--b2-text)",
      "p-id": "2128"
    }
  })]), t("el-color-picker", {
    attrs: {size: "mini"},
    on: {"active-change": A.handleChangeColor},
    model: {
      value: A.color, callback: function (e) {
        A.color = e
      }, expression: "color"
    }
  }), t("el-select", {
    attrs: {placeholder: "请选择"},
    on: {change: A.handleFontFamily},
    model: {
      value: A.Textvalue, callback: function (e) {
        A.Textvalue = e
      }, expression: "Textvalue"
    }
  }, A._l(A.options, (function (A) {
    return t("el-option", {key: A.value, attrs: {label: A.label, value: A.value}})
  })), 1)], 1)
}, Hr = [];
yr._withStripped = !0;
const Er = {};
var br = Ye({
  data: () => ({
    svgBC: !1,
    svgIC: !1,
    Textvalue: "sans-serif",
    color: "",
    options: [{label: "默认字体", value: "sans-serif"}, {label: "微软雅黑", value: "Microsoft Yahei"}, {
      label: "宋体",
      value: "SimSun"
    }, {label: "仿宋", value: "FangSong"}, {label: "幼圆 ", value: "YouYuan"}, {label: "黑体", value: "SimHei"}]
  }), emits: ["textEvent"], methods: {
    handleText(A, e) {
      this.$emit("textEvent", {label: A, value: e})
    }, handleBold() {
      this.svgBC = !this.svgBC;
      const A = this.svgBC ? "600" : "400";
      this.handleText("fontWeight", A)
    }, handleInt() {
      this.svgIC = !this.svgIC;
      const A = this.svgIC ? "italic" : "normal";
      this.handleText("fontStyle", A)
    }, handleChangeColor(A) {
      const e = A;
      this.handleText("fontColor", e)
    }, handleFontFamily(A) {
      const e = A;
      this.handleText("fontFamily", e)
    }
  }
}, yr, Hr, !1, Ir, "68280400", null, null);

function Ir(A) {
  for (let e in Er) this[e] = Er[e]
}

br.options.__file = "src/views/svg/TextSet.vue";
const Lr = function () {
  return br.exports
}();
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
var Kr = function (A, e) {
  return (Kr = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (A, e) {
    A.__proto__ = e
  } || function (A, e) {
    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (A[t] = e[t])
  })(A, e)
};

function xr(A, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

  function t() {
    this.constructor = A
  }

  Kr(A, e), A.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype, new t)
}

var Sr = function () {
  return Sr = Object.assign || function (A) {
    for (var e, t = 1, r = arguments.length; t < r; t++) for (var n in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
    return A
  }, Sr.apply(this, arguments)
};

function Dr(A, e, t, r) {
  return new (t || (t = Promise))((function (n, s) {
    function o(A) {
      try {
        a(r.next(A))
      } catch (e) {
        s(e)
      }
    }

    function i(A) {
      try {
        a(r.throw(A))
      } catch (e) {
        s(e)
      }
    }

    function a(A) {
      var e;
      A.done ? n(A.value) : (e = A.value, e instanceof t ? e : new t((function (A) {
        A(e)
      }))).then(o, i)
    }

    a((r = r.apply(A, e || [])).next())
  }))
}

function _r(A, e) {
  var t, r, n, s, o = {
    label: 0, sent: function () {
      if (1 & n[0]) throw n[1];
      return n[1]
    }, trys: [], ops: []
  };
  return s = {next: i(0), throw: i(1), return: i(2)}, "function" == typeof Symbol && (s[Symbol.iterator] = function () {
    return this
  }), s;

  function i(s) {
    return function (i) {
      return function (s) {
        if (t) throw new TypeError("Generator is already executing.");
        for (; o;) try {
          if (t = 1, r && (n = 2 & s[0] ? r.return : s[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, s[1])).done) return n;
          switch (r = 0, n && (s = [2 & s[0], n.value]), s[0]) {
            case 0:
            case 1:
              n = s;
              break;
            case 4:
              return o.label++, {value: s[1], done: !1};
            case 5:
              o.label++, r = s[1], s = [0];
              continue;
            case 7:
              s = o.ops.pop(), o.trys.pop();
              continue;
            default:
              if (!(n = o.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                o = 0;
                continue
              }
              if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                o.label = s[1];
                break
              }
              if (6 === s[0] && o.label < n[1]) {
                o.label = n[1], n = s;
                break
              }
              if (n && o.label < n[2]) {
                o.label = n[2], o.ops.push(s);
                break
              }
              n[2] && o.ops.pop(), o.trys.pop();
              continue
          }
          s = e.call(A, o)
        } catch (i) {
          s = [6, i], r = 0
        } finally {
          t = n = 0
        }
        if (5 & s[0]) throw s[1];
        return {value: s[0] ? s[1] : void 0, done: !0}
      }([s, i])
    }
  }
}

for (var Mr = function () {
  function A(A, e, t, r) {
    this.left = A, this.top = e, this.width = t, this.height = r
  }

  return A.prototype.add = function (e, t, r, n) {
    return new A(this.left + e, this.top + t, this.width + r, this.height + n)
  }, A.fromClientRect = function (e, t) {
    return new A(t.left + e.windowBounds.left, t.top + e.windowBounds.top, t.width, t.height)
  }, A.fromDOMRectList = function (e, t) {
    var r = Array.from(t).find((function (A) {
      return 0 !== A.width
    }));
    return r ? new A(r.left + e.windowBounds.left, r.top + e.windowBounds.top, r.width, r.height) : A.EMPTY
  }, A.EMPTY = new A(0, 0, 0, 0), A
}(), kr = function (A, e) {
  return Mr.fromClientRect(A, e.getBoundingClientRect())
}, Tr = function (A) {
  for (var e = [], t = 0, r = A.length; t < r;) {
    var n = A.charCodeAt(t++);
    if (n >= 55296 && n <= 56319 && t < r) {
      var s = A.charCodeAt(t++);
      56320 == (64512 & s) ? e.push(((1023 & n) << 10) + (1023 & s) + 65536) : (e.push(n), t--)
    } else e.push(n)
  }
  return e
}, Or = function () {
  for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
  if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
  var t = A.length;
  if (!t) return "";
  for (var r = [], n = -1, s = ""; ++n < t;) {
    var o = A[n];
    o <= 65535 ? r.push(o) : (o -= 65536, r.push(55296 + (o >> 10), o % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (s += String.fromCharCode.apply(String, r), r.length = 0)
  }
  return s
}, Vr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Gr = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), Rr = 0; Rr < Vr.length; Rr++) Gr[Vr.charCodeAt(Rr)] = Rr;
for (var Pr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Nr = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), Jr = 0; Jr < Pr.length; Jr++) Nr[Pr.charCodeAt(Jr)] = Jr;
for (var Xr = function (A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t))
}, Wr = function () {
  function A(A, e, t, r, n, s) {
    this.initialValue = A, this.errorValue = e, this.highStart = t, this.highValueIndex = r, this.index = n, this.data = s
  }

  return A.prototype.get = function (A) {
    var e;
    if (A >= 0) {
      if (A < 55296 || A > 56319 && A <= 65535) return e = ((e = this.index[A >> 5]) << 2) + (31 & A), this.data[e];
      if (A <= 65535) return e = ((e = this.index[2048 + (A - 55296 >> 5)]) << 2) + (31 & A), this.data[e];
      if (A < this.highStart) return e = 2080 + (A >> 11), e = this.index[e], e += A >> 5 & 63, e = ((e = this.index[e]) << 2) + (31 & A), this.data[e];
      if (A <= 1114111) return this.data[this.highValueIndex]
    }
    return this.errorValue
  }, A
}(), Yr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", jr = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), $r = 0; $r < Yr.length; $r++) jr[Yr.charCodeAt($r)] = $r;
var Zr, zr, qr, An, en, tn, rn, nn, sn = 10, on = 13, an = 15, cn = 17, Bn = 18, ln = 19, un = 20, gn = 21, wn = 22,
  hn = 24, dn = 25, Qn = 26, fn = 27, pn = 28, Cn = 30, Un = 32, Fn = 33, mn = 34, vn = 35, yn = 37, Hn = 38, En = 39,
  bn = 40, In = 42, Ln = [9001, 65288], Kn = (An = function (A) {
    var e, t, r, n, s, o = .75 * A.length, i = A.length, a = 0;
    "=" === A[A.length - 1] && (o--, "=" === A[A.length - 2] && o--);
    var c = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(o) : new Array(o),
      B = Array.isArray(c) ? c : new Uint8Array(c);
    for (e = 0; e < i; e += 4) t = Nr[A.charCodeAt(e)], r = Nr[A.charCodeAt(e + 1)], n = Nr[A.charCodeAt(e + 2)], s = Nr[A.charCodeAt(e + 3)], B[a++] = t << 2 | r >> 4, B[a++] = (15 & r) << 4 | n >> 2, B[a++] = (3 & n) << 6 | 63 & s;
    return c
  }("KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA=="), en = Array.isArray(An) ? function (A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t
  }(An) : new Uint32Array(An), tn = Array.isArray(An) ? function (A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t
  }(An) : new Uint16Array(An), rn = Xr(tn, 12, en[4] / 2), nn = 2 === en[5] ? Xr(tn, (24 + en[4]) / 2) : (Zr = en, zr = Math.ceil((24 + en[4]) / 4), Zr.slice ? Zr.slice(zr, qr) : new Uint32Array(Array.prototype.slice.call(Zr, zr, qr))), new Wr(en[0], en[1], en[2], en[3], rn, nn)),
  xn = [Cn, 36], Sn = [1, 2, 3, 5], Dn = [sn, 8], _n = [fn, Qn], Mn = Sn.concat(Dn), kn = [Hn, En, bn, mn, vn],
  Tn = [an, on], On = function (A, e, t, r) {
    var n = r[t];
    if (Array.isArray(A) ? -1 !== A.indexOf(n) : A === n) for (var s = t; s <= r.length;) {
      if ((a = r[++s]) === e) return !0;
      if (a !== sn) break
    }
    if (n === sn) for (s = t; s > 0;) {
      var o = r[--s];
      if (Array.isArray(A) ? -1 !== A.indexOf(o) : A === o) for (var i = t; i <= r.length;) {
        var a;
        if ((a = r[++i]) === e) return !0;
        if (a !== sn) break
      }
      if (o !== sn) break
    }
    return !1
  }, Vn = function (A, e) {
    for (var t = A; t >= 0;) {
      var r = e[t];
      if (r !== sn) return r;
      t--
    }
    return 0
  }, Gn = function (A, e, t, r, n) {
    if (0 === t[r]) return "×";
    var s = r - 1;
    if (Array.isArray(n) && !0 === n[s]) return "×";
    var o = s - 1, i = s + 1, a = e[s], c = o >= 0 ? e[o] : 0, B = e[i];
    if (2 === a && 3 === B) return "×";
    if (-1 !== Sn.indexOf(a)) return "!";
    if (-1 !== Sn.indexOf(B)) return "×";
    if (-1 !== Dn.indexOf(B)) return "×";
    if (8 === Vn(s, e)) return "÷";
    if (11 === Kn.get(A[s])) return "×";
    if ((a === Un || a === Fn) && 11 === Kn.get(A[i])) return "×";
    if (7 === a || 7 === B) return "×";
    if (9 === a) return "×";
    if (-1 === [sn, on, an].indexOf(a) && 9 === B) return "×";
    if (-1 !== [cn, Bn, ln, hn, pn].indexOf(B)) return "×";
    if (Vn(s, e) === wn) return "×";
    if (On(23, wn, s, e)) return "×";
    if (On([cn, Bn], gn, s, e)) return "×";
    if (On(12, 12, s, e)) return "×";
    if (a === sn) return "÷";
    if (23 === a || 23 === B) return "×";
    if (16 === B || 16 === a) return "÷";
    if (-1 !== [on, an, gn].indexOf(B) || 14 === a) return "×";
    if (36 === c && -1 !== Tn.indexOf(a)) return "×";
    if (a === pn && 36 === B) return "×";
    if (B === un) return "×";
    if (-1 !== xn.indexOf(B) && a === dn || -1 !== xn.indexOf(a) && B === dn) return "×";
    if (a === fn && -1 !== [yn, Un, Fn].indexOf(B) || -1 !== [yn, Un, Fn].indexOf(a) && B === Qn) return "×";
    if (-1 !== xn.indexOf(a) && -1 !== _n.indexOf(B) || -1 !== _n.indexOf(a) && -1 !== xn.indexOf(B)) return "×";
    if (-1 !== [fn, Qn].indexOf(a) && (B === dn || -1 !== [wn, an].indexOf(B) && e[i + 1] === dn) || -1 !== [wn, an].indexOf(a) && B === dn || a === dn && -1 !== [dn, pn, hn].indexOf(B)) return "×";
    if (-1 !== [dn, pn, hn, cn, Bn].indexOf(B)) for (var l = s; l >= 0;) {
      if ((u = e[l]) === dn) return "×";
      if (-1 === [pn, hn].indexOf(u)) break;
      l--
    }
    if (-1 !== [fn, Qn].indexOf(B)) for (l = -1 !== [cn, Bn].indexOf(a) ? o : s; l >= 0;) {
      var u;
      if ((u = e[l]) === dn) return "×";
      if (-1 === [pn, hn].indexOf(u)) break;
      l--
    }
    if (Hn === a && -1 !== [Hn, En, mn, vn].indexOf(B) || -1 !== [En, mn].indexOf(a) && -1 !== [En, bn].indexOf(B) || -1 !== [bn, vn].indexOf(a) && B === bn) return "×";
    if (-1 !== kn.indexOf(a) && -1 !== [un, Qn].indexOf(B) || -1 !== kn.indexOf(B) && a === fn) return "×";
    if (-1 !== xn.indexOf(a) && -1 !== xn.indexOf(B)) return "×";
    if (a === hn && -1 !== xn.indexOf(B)) return "×";
    if (-1 !== xn.concat(dn).indexOf(a) && B === wn && -1 === Ln.indexOf(A[i]) || -1 !== xn.concat(dn).indexOf(B) && a === Bn) return "×";
    if (41 === a && 41 === B) {
      for (var g = t[s], w = 1; g > 0 && 41 === e[--g];) w++;
      if (w % 2 != 0) return "×"
    }
    return a === Un && B === Fn ? "×" : "÷"
  }, Rn = function (A, e) {
    e || (e = {lineBreak: "normal", wordBreak: "normal"});
    var t = function (A, e) {
      void 0 === e && (e = "strict");
      var t = [], r = [], n = [];
      return A.forEach((function (A, s) {
        var o = Kn.get(A);
        if (o > 50 ? (n.push(!0), o -= 50) : n.push(!1), -1 !== ["normal", "auto", "loose"].indexOf(e) && -1 !== [8208, 8211, 12316, 12448].indexOf(A)) return r.push(s), t.push(16);
        if (4 === o || 11 === o) {
          if (0 === s) return r.push(s), t.push(Cn);
          var i = t[s - 1];
          return -1 === Mn.indexOf(i) ? (r.push(r[s - 1]), t.push(i)) : (r.push(s), t.push(Cn))
        }
        return r.push(s), 31 === o ? t.push("strict" === e ? gn : yn) : o === In || 29 === o ? t.push(Cn) : 43 === o ? A >= 131072 && A <= 196605 || A >= 196608 && A <= 262141 ? t.push(yn) : t.push(Cn) : void t.push(o)
      })), [r, t, n]
    }(A, e.lineBreak), r = t[0], n = t[1], s = t[2];
    "break-all" !== e.wordBreak && "break-word" !== e.wordBreak || (n = n.map((function (A) {
      return -1 !== [dn, Cn, In].indexOf(A) ? yn : A
    })));
    var o = "keep-all" === e.wordBreak ? s.map((function (e, t) {
      return e && A[t] >= 19968 && A[t] <= 40959
    })) : void 0;
    return [r, n, o]
  }, Pn = function () {
    function A(A, e, t, r) {
      this.codePoints = A, this.required = "!" === e, this.start = t, this.end = r
    }

    return A.prototype.slice = function () {
      return Or.apply(void 0, this.codePoints.slice(this.start, this.end))
    }, A
  }(), Nn = function (A) {
    return A >= 48 && A <= 57
  }, Jn = function (A) {
    return Nn(A) || A >= 65 && A <= 70 || A >= 97 && A <= 102
  }, Xn = function (A) {
    return 10 === A || 9 === A || 32 === A
  }, Wn = function (A) {
    return function (A) {
      return function (A) {
        return A >= 97 && A <= 122
      }(A) || function (A) {
        return A >= 65 && A <= 90
      }(A)
    }(A) || function (A) {
      return A >= 128
    }(A) || 95 === A
  }, Yn = function (A) {
    return Wn(A) || Nn(A) || 45 === A
  }, jn = function (A) {
    return A >= 0 && A <= 8 || 11 === A || A >= 14 && A <= 31 || 127 === A
  }, $n = function (A, e) {
    return 92 === A && 10 !== e
  }, Zn = function (A, e, t) {
    return 45 === A ? Wn(e) || $n(e, t) : !!Wn(A) || !(92 !== A || !$n(A, e))
  }, zn = function (A, e, t) {
    return 43 === A || 45 === A ? !!Nn(e) || 46 === e && Nn(t) : Nn(46 === A ? e : A)
  }, qn = function (A) {
    var e = 0, t = 1;
    43 !== A[e] && 45 !== A[e] || (45 === A[e] && (t = -1), e++);
    for (var r = []; Nn(A[e]);) r.push(A[e++]);
    var n = r.length ? parseInt(Or.apply(void 0, r), 10) : 0;
    46 === A[e] && e++;
    for (var s = []; Nn(A[e]);) s.push(A[e++]);
    var o = s.length, i = o ? parseInt(Or.apply(void 0, s), 10) : 0;
    69 !== A[e] && 101 !== A[e] || e++;
    var a = 1;
    43 !== A[e] && 45 !== A[e] || (45 === A[e] && (a = -1), e++);
    for (var c = []; Nn(A[e]);) c.push(A[e++]);
    var B = c.length ? parseInt(Or.apply(void 0, c), 10) : 0;
    return t * (n + i * Math.pow(10, -o)) * Math.pow(10, a * B)
  }, As = {type: 2}, es = {type: 3}, ts = {type: 4}, rs = {type: 13}, ns = {type: 8}, ss = {type: 21}, os = {type: 9},
  is = {type: 10}, as = {type: 11}, cs = {type: 12}, Bs = {type: 14}, ls = {type: 23}, us = {type: 1}, gs = {type: 25},
  ws = {type: 24}, hs = {type: 26}, ds = {type: 27}, Qs = {type: 28}, fs = {type: 29}, ps = {type: 31}, Cs = {type: 32},
  Us = function () {
    function A() {
      this._value = []
    }

    return A.prototype.write = function (A) {
      this._value = this._value.concat(Tr(A))
    }, A.prototype.read = function () {
      for (var A = [], e = this.consumeToken(); e !== Cs;) A.push(e), e = this.consumeToken();
      return A
    }, A.prototype.consumeToken = function () {
      var A = this.consumeCodePoint();
      switch (A) {
        case 34:
          return this.consumeStringToken(34);
        case 35:
          var e = this.peekCodePoint(0), t = this.peekCodePoint(1), r = this.peekCodePoint(2);
          if (Yn(e) || $n(t, r)) {
            var n = Zn(e, t, r) ? 2 : 1;
            return {type: 5, value: this.consumeName(), flags: n}
          }
          break;
        case 36:
          if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), rs;
          break;
        case 39:
          return this.consumeStringToken(39);
        case 40:
          return As;
        case 41:
          return es;
        case 42:
          if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), Bs;
          break;
        case 43:
          if (zn(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case 44:
          return ts;
        case 45:
          var s = A, o = this.peekCodePoint(0), i = this.peekCodePoint(1);
          if (zn(s, o, i)) return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if (Zn(s, o, i)) return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (45 === o && 62 === i) return this.consumeCodePoint(), this.consumeCodePoint(), ws;
          break;
        case 46:
          if (zn(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case 47:
          if (42 === this.peekCodePoint(0)) for (this.consumeCodePoint(); ;) {
            var a = this.consumeCodePoint();
            if (42 === a && 47 === (a = this.consumeCodePoint())) return this.consumeToken();
            if (-1 === a) return this.consumeToken()
          }
          break;
        case 58:
          return hs;
        case 59:
          return ds;
        case 60:
          if (33 === this.peekCodePoint(0) && 45 === this.peekCodePoint(1) && 45 === this.peekCodePoint(2)) return this.consumeCodePoint(), this.consumeCodePoint(), gs;
          break;
        case 64:
          var c = this.peekCodePoint(0), B = this.peekCodePoint(1), l = this.peekCodePoint(2);
          if (Zn(c, B, l)) return {type: 7, value: this.consumeName()};
          break;
        case 91:
          return Qs;
        case 92:
          if ($n(A, this.peekCodePoint(0))) return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case 93:
          return fs;
        case 61:
          if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), ns;
          break;
        case 123:
          return as;
        case 125:
          return cs;
        case 117:
        case 85:
          var u = this.peekCodePoint(0), g = this.peekCodePoint(1);
          return 43 !== u || !Jn(g) && 63 !== g || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case 124:
          if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), os;
          if (124 === this.peekCodePoint(0)) return this.consumeCodePoint(), ss;
          break;
        case 126:
          if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), is;
          break;
        case-1:
          return Cs
      }
      return Xn(A) ? (this.consumeWhiteSpace(), ps) : Nn(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : Wn(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : {
        type: 6,
        value: Or(A)
      }
    }, A.prototype.consumeCodePoint = function () {
      var A = this._value.shift();
      return void 0 === A ? -1 : A
    }, A.prototype.reconsumeCodePoint = function (A) {
      this._value.unshift(A)
    }, A.prototype.peekCodePoint = function (A) {
      return A >= this._value.length ? -1 : this._value[A]
    }, A.prototype.consumeUnicodeRangeToken = function () {
      for (var A = [], e = this.consumeCodePoint(); Jn(e) && A.length < 6;) A.push(e), e = this.consumeCodePoint();
      for (var t = !1; 63 === e && A.length < 6;) A.push(e), e = this.consumeCodePoint(), t = !0;
      if (t) return {
        type: 30, start: parseInt(Or.apply(void 0, A.map((function (A) {
          return 63 === A ? 48 : A
        }))), 16), end: parseInt(Or.apply(void 0, A.map((function (A) {
          return 63 === A ? 70 : A
        }))), 16)
      };
      var r = parseInt(Or.apply(void 0, A), 16);
      if (45 === this.peekCodePoint(0) && Jn(this.peekCodePoint(1))) {
        this.consumeCodePoint(), e = this.consumeCodePoint();
        for (var n = []; Jn(e) && n.length < 6;) n.push(e), e = this.consumeCodePoint();
        return {type: 30, start: r, end: parseInt(Or.apply(void 0, n), 16)}
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
      if (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0)) return {type: 22, value: ""};
      var e = this.peekCodePoint(0);
      if (39 === e || 34 === e) {
        var t = this.consumeStringToken(this.consumeCodePoint());
        return 0 === t.type && (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0)) ? (this.consumeCodePoint(), {
          type: 22,
          value: t.value
        }) : (this.consumeBadUrlRemnants(), ls)
      }
      for (; ;) {
        var r = this.consumeCodePoint();
        if (-1 === r || 41 === r) return {type: 22, value: Or.apply(void 0, A)};
        if (Xn(r)) return this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0) ? (this.consumeCodePoint(), {
          type: 22,
          value: Or.apply(void 0, A)
        }) : (this.consumeBadUrlRemnants(), ls);
        if (34 === r || 39 === r || 40 === r || jn(r)) return this.consumeBadUrlRemnants(), ls;
        if (92 === r) {
          if (!$n(r, this.peekCodePoint(0))) return this.consumeBadUrlRemnants(), ls;
          A.push(this.consumeEscapedCodePoint())
        } else A.push(r)
      }
    }, A.prototype.consumeWhiteSpace = function () {
      for (; Xn(this.peekCodePoint(0));) this.consumeCodePoint()
    }, A.prototype.consumeBadUrlRemnants = function () {
      for (; ;) {
        var A = this.consumeCodePoint();
        if (41 === A || -1 === A) return;
        $n(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint()
      }
    }, A.prototype.consumeStringSlice = function (A) {
      for (var e = ""; A > 0;) {
        var t = Math.min(5e4, A);
        e += Or.apply(void 0, this._value.splice(0, t)), A -= t
      }
      return this._value.shift(), e
    }, A.prototype.consumeStringToken = function (A) {
      for (var e = "", t = 0; ;) {
        var r = this._value[t];
        if (-1 === r || void 0 === r || r === A) return {type: 0, value: e += this.consumeStringSlice(t)};
        if (10 === r) return this._value.splice(0, t), us;
        if (92 === r) {
          var n = this._value[t + 1];
          -1 !== n && void 0 !== n && (10 === n ? (e += this.consumeStringSlice(t), t = -1, this._value.shift()) : $n(r, n) && (e += this.consumeStringSlice(t), e += Or(this.consumeEscapedCodePoint()), t = -1))
        }
        t++
      }
    }, A.prototype.consumeNumber = function () {
      var A = [], e = 4, t = this.peekCodePoint(0);
      for (43 !== t && 45 !== t || A.push(this.consumeCodePoint()); Nn(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
      t = this.peekCodePoint(0);
      var r = this.peekCodePoint(1);
      if (46 === t && Nn(r)) for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = 8; Nn(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
      t = this.peekCodePoint(0), r = this.peekCodePoint(1);
      var n = this.peekCodePoint(2);
      if ((69 === t || 101 === t) && ((43 === r || 45 === r) && Nn(n) || Nn(r))) for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = 8; Nn(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
      return [qn(A), e]
    }, A.prototype.consumeNumericToken = function () {
      var A = this.consumeNumber(), e = A[0], t = A[1], r = this.peekCodePoint(0), n = this.peekCodePoint(1),
        s = this.peekCodePoint(2);
      return Zn(r, n, s) ? {
        type: 15,
        number: e,
        flags: t,
        unit: this.consumeName()
      } : 37 === r ? (this.consumeCodePoint(), {type: 16, number: e, flags: t}) : {type: 17, number: e, flags: t}
    }, A.prototype.consumeEscapedCodePoint = function () {
      var A = this.consumeCodePoint();
      if (Jn(A)) {
        for (var e = Or(A); Jn(this.peekCodePoint(0)) && e.length < 6;) e += Or(this.consumeCodePoint());
        Xn(this.peekCodePoint(0)) && this.consumeCodePoint();
        var t = parseInt(e, 16);
        return 0 === t || function (A) {
          return A >= 55296 && A <= 57343
        }(t) || t > 1114111 ? 65533 : t
      }
      return -1 === A ? 65533 : A
    }, A.prototype.consumeName = function () {
      for (var A = ""; ;) {
        var e = this.consumeCodePoint();
        if (Yn(e)) A += Or(e); else {
          if (!$n(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), A;
          A += Or(this.consumeEscapedCodePoint())
        }
      }
    }, A
  }(), Fs = function () {
    function A(A) {
      this._tokens = A
    }

    return A.create = function (e) {
      var t = new Us;
      return t.write(e), new A(t.read())
    }, A.parseValue = function (e) {
      return A.create(e).parseComponentValue()
    }, A.parseValues = function (e) {
      return A.create(e).parseComponentValues()
    }, A.prototype.parseComponentValue = function () {
      for (var A = this.consumeToken(); 31 === A.type;) A = this.consumeToken();
      if (32 === A.type) throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      this.reconsumeToken(A);
      var e = this.consumeComponentValue();
      do {
        A = this.consumeToken()
      } while (31 === A.type);
      if (32 === A.type) return e;
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")
    }, A.prototype.parseComponentValues = function () {
      for (var A = []; ;) {
        var e = this.consumeComponentValue();
        if (32 === e.type) return A;
        A.push(e), A.push()
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
      for (var e = {type: A, values: []}, t = this.consumeToken(); ;) {
        if (32 === t.type || Ks(t, A)) return e;
        this.reconsumeToken(t), e.values.push(this.consumeComponentValue()), t = this.consumeToken()
      }
    }, A.prototype.consumeFunction = function (A) {
      for (var e = {name: A.value, values: [], type: 18}; ;) {
        var t = this.consumeToken();
        if (32 === t.type || 3 === t.type) return e;
        this.reconsumeToken(t), e.values.push(this.consumeComponentValue())
      }
    }, A.prototype.consumeToken = function () {
      var A = this._tokens.shift();
      return void 0 === A ? Cs : A
    }, A.prototype.reconsumeToken = function (A) {
      this._tokens.unshift(A)
    }, A
  }(), ms = function (A) {
    return 15 === A.type
  }, vs = function (A) {
    return 17 === A.type
  }, ys = function (A) {
    return 20 === A.type
  }, Hs = function (A) {
    return 0 === A.type
  }, Es = function (A, e) {
    return ys(A) && A.value === e
  }, bs = function (A) {
    return 31 !== A.type
  }, Is = function (A) {
    return 31 !== A.type && 4 !== A.type
  }, Ls = function (A) {
    var e = [], t = [];
    return A.forEach((function (A) {
      if (4 === A.type) {
        if (0 === t.length) throw new Error("Error parsing function args, zero tokens for arg");
        return e.push(t), void (t = [])
      }
      31 !== A.type && t.push(A)
    })), t.length && e.push(t), e
  }, Ks = function (A, e) {
    return 11 === e && 12 === A.type || (28 === e && 29 === A.type || 2 === e && 3 === A.type)
  }, xs = function (A) {
    return 17 === A.type || 15 === A.type
  }, Ss = function (A) {
    return 16 === A.type || xs(A)
  }, Ds = function (A) {
    return A.length > 1 ? [A[0], A[1]] : [A[0]]
  }, _s = {type: 17, number: 0, flags: 4}, Ms = {type: 16, number: 50, flags: 4}, ks = {type: 16, number: 100, flags: 4},
  Ts = function (A, e, t) {
    var r = A[0], n = A[1];
    return [Os(r, e), Os(void 0 !== n ? n : r, t)]
  }, Os = function (A, e) {
    if (16 === A.type) return A.number / 100 * e;
    if (ms(A)) switch (A.unit) {
      case"rem":
      case"em":
        return 16 * A.number;
      default:
        return A.number
    }
    return A.number
  }, Vs = function (A, e) {
    if (15 === e.type) switch (e.unit) {
      case"deg":
        return Math.PI * e.number / 180;
      case"grad":
        return Math.PI / 200 * e.number;
      case"rad":
        return e.number;
      case"turn":
        return 2 * Math.PI * e.number
    }
    throw new Error("Unsupported angle type")
  }, Gs = function (A) {
    return 15 === A.type && ("deg" === A.unit || "grad" === A.unit || "rad" === A.unit || "turn" === A.unit)
  }, Rs = function (A) {
    switch (A.filter(ys).map((function (A) {
      return A.value
    })).join(" ")) {
      case"to bottom right":
      case"to right bottom":
      case"left top":
      case"top left":
        return [_s, _s];
      case"to top":
      case"bottom":
        return Ps(0);
      case"to bottom left":
      case"to left bottom":
      case"right top":
      case"top right":
        return [_s, ks];
      case"to right":
      case"left":
        return Ps(90);
      case"to top left":
      case"to left top":
      case"right bottom":
      case"bottom right":
        return [ks, ks];
      case"to bottom":
      case"top":
        return Ps(180);
      case"to top right":
      case"to right top":
      case"left bottom":
      case"bottom left":
        return [ks, _s];
      case"to left":
      case"right":
        return Ps(270)
    }
    return 0
  }, Ps = function (A) {
    return Math.PI * A / 180
  }, Ns = function (A, e) {
    if (18 === e.type) {
      var t = zs[e.name];
      if (void 0 === t) throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
      return t(A, e.values)
    }
    if (5 === e.type) {
      if (3 === e.value.length) {
        var r = e.value.substring(0, 1), n = e.value.substring(1, 2), s = e.value.substring(2, 3);
        return Ws(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), 1)
      }
      if (4 === e.value.length) {
        r = e.value.substring(0, 1), n = e.value.substring(1, 2), s = e.value.substring(2, 3);
        var o = e.value.substring(3, 4);
        return Ws(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(s + s, 16), parseInt(o + o, 16) / 255)
      }
      if (6 === e.value.length) {
        r = e.value.substring(0, 2), n = e.value.substring(2, 4), s = e.value.substring(4, 6);
        return Ws(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), 1)
      }
      if (8 === e.value.length) {
        r = e.value.substring(0, 2), n = e.value.substring(2, 4), s = e.value.substring(4, 6), o = e.value.substring(6, 8);
        return Ws(parseInt(r, 16), parseInt(n, 16), parseInt(s, 16), parseInt(o, 16) / 255)
      }
    }
    if (20 === e.type) {
      var i = Ao[e.value.toUpperCase()];
      if (void 0 !== i) return i
    }
    return Ao.TRANSPARENT
  }, Js = function (A) {
    return 0 == (255 & A)
  }, Xs = function (A) {
    var e = 255 & A, t = 255 & A >> 8, r = 255 & A >> 16, n = 255 & A >> 24;
    return e < 255 ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")"
  }, Ws = function (A, e, t, r) {
    return (A << 24 | e << 16 | t << 8 | Math.round(255 * r) << 0) >>> 0
  }, Ys = function (A, e) {
    if (17 === A.type) return A.number;
    if (16 === A.type) {
      var t = 3 === e ? 1 : 255;
      return 3 === e ? A.number / 100 * t : Math.round(A.number / 100 * t)
    }
    return 0
  }, js = function (A, e) {
    var t = e.filter(Is);
    if (3 === t.length) {
      var r = t.map(Ys), n = r[0], s = r[1], o = r[2];
      return Ws(n, s, o, 1)
    }
    if (4 === t.length) {
      var i = t.map(Ys), a = (n = i[0], s = i[1], o = i[2], i[3]);
      return Ws(n, s, o, a)
    }
    return 0
  };

function $s(A, e, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < .5 ? e : t < 2 / 3 ? 6 * (e - A) * (2 / 3 - t) + A : A
}

var Zs = function (A, e) {
    var t = e.filter(Is), r = t[0], n = t[1], s = t[2], o = t[3],
      i = (17 === r.type ? Ps(r.number) : Vs(A, r)) / (2 * Math.PI), a = Ss(n) ? n.number / 100 : 0,
      c = Ss(s) ? s.number / 100 : 0, B = void 0 !== o && Ss(o) ? Os(o, 1) : 1;
    if (0 === a) return Ws(255 * c, 255 * c, 255 * c, 1);
    var l = c <= .5 ? c * (a + 1) : c + a - c * a, u = 2 * c - l, g = $s(u, l, i + 1 / 3), w = $s(u, l, i),
      h = $s(u, l, i - 1 / 3);
    return Ws(255 * g, 255 * w, 255 * h, B)
  }, zs = {hsl: Zs, hsla: Zs, rgb: js, rgba: js}, qs = function (A, e) {
    return Ns(A, Fs.create(e).parseComponentValue())
  }, Ao = {
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
  }, eo = {
    name: "background-clip", initialValue: "border-box", prefix: !1, type: 1, parse: function (A, e) {
      return e.map((function (A) {
        if (ys(A)) switch (A.value) {
          case"padding-box":
            return 1;
          case"content-box":
            return 2
        }
        return 0
      }))
    }
  }, to = {name: "background-color", initialValue: "transparent", prefix: !1, type: 3, format: "color"},
  ro = function (A, e) {
    var t = Ns(A, e[0]), r = e[1];
    return r && Ss(r) ? {color: t, stop: r} : {color: t, stop: null}
  }, no = function (A, e) {
    var t = A[0], r = A[A.length - 1];
    null === t.stop && (t.stop = _s), null === r.stop && (r.stop = ks);
    for (var n = [], s = 0, o = 0; o < A.length; o++) {
      var i = A[o].stop;
      if (null !== i) {
        var a = Os(i, e);
        a > s ? n.push(a) : n.push(s), s = a
      } else n.push(null)
    }
    var c = null;
    for (o = 0; o < n.length; o++) {
      var B = n[o];
      if (null === B) null === c && (c = o); else if (null !== c) {
        for (var l = o - c, u = (B - n[c - 1]) / (l + 1), g = 1; g <= l; g++) n[c + g - 1] = u * g;
        c = null
      }
    }
    return A.map((function (A, t) {
      return {color: A.color, stop: Math.max(Math.min(1, n[t] / e), 0)}
    }))
  }, so = function (A, e, t) {
    var r = "number" == typeof A ? A : function (A, e, t) {
        var r = e / 2, n = t / 2, s = Os(A[0], e) - r, o = n - Os(A[1], t);
        return (Math.atan2(o, s) + 2 * Math.PI) % (2 * Math.PI)
      }(A, e, t), n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), s = e / 2, o = t / 2, i = n / 2,
      a = Math.sin(r - Math.PI / 2) * i, c = Math.cos(r - Math.PI / 2) * i;
    return [n, s - c, s + c, o - a, o + a]
  }, oo = function (A, e) {
    return Math.sqrt(A * A + e * e)
  }, io = function (A, e, t, r, n) {
    return [[0, 0], [0, e], [A, 0], [A, e]].reduce((function (A, e) {
      var s = e[0], o = e[1], i = oo(t - s, r - o);
      return (n ? i < A.optimumDistance : i > A.optimumDistance) ? {optimumCorner: e, optimumDistance: i} : A
    }), {optimumDistance: n ? 1 / 0 : -1 / 0, optimumCorner: null}).optimumCorner
  }, ao = function (A, e) {
    var t = Ps(180), r = [];
    return Ls(e).forEach((function (e, n) {
      if (0 === n) {
        var s = e[0];
        if (20 === s.type && -1 !== ["top", "left", "right", "bottom"].indexOf(s.value)) return void (t = Rs(e));
        if (Gs(s)) return void (t = (Vs(A, s) + Ps(270)) % Ps(360))
      }
      var o = ro(A, e);
      r.push(o)
    })), {angle: t, stops: r, type: 1}
  }, co = function (A, e) {
    var t = 0, r = 3, n = [], s = [];
    return Ls(e).forEach((function (e, o) {
      var i = !0;
      if (0 === o ? i = e.reduce((function (A, e) {
        if (ys(e)) switch (e.value) {
          case"center":
            return s.push(Ms), !1;
          case"top":
          case"left":
            return s.push(_s), !1;
          case"right":
          case"bottom":
            return s.push(ks), !1
        } else if (Ss(e) || xs(e)) return s.push(e), !1;
        return A
      }), i) : 1 === o && (i = e.reduce((function (A, e) {
        if (ys(e)) switch (e.value) {
          case"circle":
            return t = 0, !1;
          case"ellipse":
            return t = 1, !1;
          case"contain":
          case"closest-side":
            return r = 0, !1;
          case"farthest-side":
            return r = 1, !1;
          case"closest-corner":
            return r = 2, !1;
          case"cover":
          case"farthest-corner":
            return r = 3, !1
        } else if (xs(e) || Ss(e)) return Array.isArray(r) || (r = []), r.push(e), !1;
        return A
      }), i)), i) {
        var a = ro(A, e);
        n.push(a)
      }
    })), {size: r, shape: t, stops: n, position: s, type: 2}
  }, Bo = function (A, e) {
    if (22 === e.type) {
      var t = {url: e.value, type: 0};
      return A.cache.addImage(e.value), t
    }
    if (18 === e.type) {
      var r = go[e.name];
      if (void 0 === r) throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
      return r(A, e.values)
    }
    throw new Error("Unsupported image type " + e.type)
  };
var lo, uo, go = {
  "linear-gradient": function (A, e) {
    var t = Ps(180), r = [];
    return Ls(e).forEach((function (e, n) {
      if (0 === n) {
        var s = e[0];
        if (20 === s.type && "to" === s.value) return void (t = Rs(e));
        if (Gs(s)) return void (t = Vs(A, s))
      }
      var o = ro(A, e);
      r.push(o)
    })), {angle: t, stops: r, type: 1}
  },
  "-moz-linear-gradient": ao,
  "-ms-linear-gradient": ao,
  "-o-linear-gradient": ao,
  "-webkit-linear-gradient": ao,
  "radial-gradient": function (A, e) {
    var t = 0, r = 3, n = [], s = [];
    return Ls(e).forEach((function (e, o) {
      var i = !0;
      if (0 === o) {
        var a = !1;
        i = e.reduce((function (A, e) {
          if (a) if (ys(e)) switch (e.value) {
            case"center":
              return s.push(Ms), A;
            case"top":
            case"left":
              return s.push(_s), A;
            case"right":
            case"bottom":
              return s.push(ks), A
          } else (Ss(e) || xs(e)) && s.push(e); else if (ys(e)) switch (e.value) {
            case"circle":
              return t = 0, !1;
            case"ellipse":
              return t = 1, !1;
            case"at":
              return a = !0, !1;
            case"closest-side":
              return r = 0, !1;
            case"cover":
            case"farthest-side":
              return r = 1, !1;
            case"contain":
            case"closest-corner":
              return r = 2, !1;
            case"farthest-corner":
              return r = 3, !1
          } else if (xs(e) || Ss(e)) return Array.isArray(r) || (r = []), r.push(e), !1;
          return A
        }), i)
      }
      if (i) {
        var c = ro(A, e);
        n.push(c)
      }
    })), {size: r, shape: t, stops: n, position: s, type: 2}
  },
  "-moz-radial-gradient": co,
  "-ms-radial-gradient": co,
  "-o-radial-gradient": co,
  "-webkit-radial-gradient": co,
  "-webkit-gradient": function (A, e) {
    var t = Ps(180), r = [], n = 1;
    return Ls(e).forEach((function (e, t) {
      var s = e[0];
      if (0 === t) {
        if (ys(s) && "linear" === s.value) return void (n = 1);
        if (ys(s) && "radial" === s.value) return void (n = 2)
      }
      if (18 === s.type) if ("from" === s.name) {
        var o = Ns(A, s.values[0]);
        r.push({stop: _s, color: o})
      } else if ("to" === s.name) {
        o = Ns(A, s.values[0]);
        r.push({stop: ks, color: o})
      } else if ("color-stop" === s.name) {
        var i = s.values.filter(Is);
        if (2 === i.length) {
          o = Ns(A, i[1]);
          var a = i[0];
          vs(a) && r.push({stop: {type: 16, number: 100 * a.number, flags: a.flags}, color: o})
        }
      }
    })), 1 === n ? {angle: (t + Ps(180)) % Ps(360), stops: r, type: n} : {
      size: 3,
      shape: 0,
      stops: r,
      position: [],
      type: n
    }
  }
}, wo = {
  name: "background-image", initialValue: "none", type: 1, prefix: !1, parse: function (A, e) {
    if (0 === e.length) return [];
    var t = e[0];
    return 20 === t.type && "none" === t.value ? [] : e.filter((function (A) {
      return Is(A) && function (A) {
        return !(20 === A.type && "none" === A.value || 18 === A.type && !go[A.name])
      }(A)
    })).map((function (e) {
      return Bo(A, e)
    }))
  }
}, ho = {
  name: "background-origin", initialValue: "border-box", prefix: !1, type: 1, parse: function (A, e) {
    return e.map((function (A) {
      if (ys(A)) switch (A.value) {
        case"padding-box":
          return 1;
        case"content-box":
          return 2
      }
      return 0
    }))
  }
}, Qo = {
  name: "background-position", initialValue: "0% 0%", type: 1, prefix: !1, parse: function (A, e) {
    return Ls(e).map((function (A) {
      return A.filter(Ss)
    })).map(Ds)
  }
}, fo = {
  name: "background-repeat", initialValue: "repeat", prefix: !1, type: 1, parse: function (A, e) {
    return Ls(e).map((function (A) {
      return A.filter(ys).map((function (A) {
        return A.value
      })).join(" ")
    })).map(po)
  }
}, po = function (A) {
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
(uo = lo || (lo = {})).AUTO = "auto", uo.CONTAIN = "contain", uo.COVER = "cover";
var Co, Uo, Fo = {
    name: "background-size", initialValue: "0", prefix: !1, type: 1, parse: function (A, e) {
      return Ls(e).map((function (A) {
        return A.filter(mo)
      }))
    }
  }, mo = function (A) {
    return ys(A) || Ss(A)
  }, vo = function (A) {
    return {name: "border-" + A + "-color", initialValue: "transparent", prefix: !1, type: 3, format: "color"}
  }, yo = vo("top"), Ho = vo("right"), Eo = vo("bottom"), bo = vo("left"), Io = function (A) {
    return {
      name: "border-radius-" + A, initialValue: "0 0", prefix: !1, type: 1, parse: function (A, e) {
        return Ds(e.filter(Ss))
      }
    }
  }, Lo = Io("top-left"), Ko = Io("top-right"), xo = Io("bottom-right"), So = Io("bottom-left"), Do = function (A) {
    return {
      name: "border-" + A + "-style", initialValue: "solid", prefix: !1, type: 2, parse: function (A, e) {
        switch (e) {
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
  }, _o = Do("top"), Mo = Do("right"), ko = Do("bottom"), To = Do("left"), Oo = function (A) {
    return {
      name: "border-" + A + "-width", initialValue: "0", type: 0, prefix: !1, parse: function (A, e) {
        return ms(e) ? e.number : 0
      }
    }
  }, Vo = Oo("top"), Go = Oo("right"), Ro = Oo("bottom"), Po = Oo("left"),
  No = {name: "color", initialValue: "transparent", prefix: !1, type: 3, format: "color"}, Jo = {
    name: "direction", initialValue: "ltr", prefix: !1, type: 2, parse: function (A, e) {
      return "rtl" === e ? 1 : 0
    }
  }, Xo = {
    name: "display", initialValue: "inline-block", prefix: !1, type: 1, parse: function (A, e) {
      return e.filter(ys).reduce((function (A, e) {
        return A | Wo(e.value)
      }), 0)
    }
  }, Wo = function (A) {
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
  }, Yo = {
    name: "float", initialValue: "none", prefix: !1, type: 2, parse: function (A, e) {
      switch (e) {
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
  }, jo = {
    name: "letter-spacing", initialValue: "0", prefix: !1, type: 0, parse: function (A, e) {
      return 20 === e.type && "normal" === e.value ? 0 : 17 === e.type || 15 === e.type ? e.number : 0
    }
  };
(Uo = Co || (Co = {})).NORMAL = "normal", Uo.STRICT = "strict";
var $o, Zo, zo = {
  name: "line-break", initialValue: "normal", prefix: !1, type: 2, parse: function (A, e) {
    return "strict" === e ? Co.STRICT : Co.NORMAL
  }
}, qo = {name: "line-height", initialValue: "normal", prefix: !1, type: 4}, Ai = function (A, e) {
  return ys(A) && "normal" === A.value ? 1.2 * e : 17 === A.type ? e * A.number : Ss(A) ? Os(A, e) : e
}, ei = {
  name: "list-style-image", initialValue: "none", type: 0, prefix: !1, parse: function (A, e) {
    return 20 === e.type && "none" === e.value ? null : Bo(A, e)
  }
}, ti = {
  name: "list-style-position", initialValue: "outside", prefix: !1, type: 2, parse: function (A, e) {
    return "inside" === e ? 0 : 1
  }
}, ri = {
  name: "list-style-type", initialValue: "none", prefix: !1, type: 2, parse: function (A, e) {
    switch (e) {
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
}, ni = function (A) {
  return {name: "margin-" + A, initialValue: "0", prefix: !1, type: 4}
}, si = ni("top"), oi = ni("right"), ii = ni("bottom"), ai = ni("left"), ci = {
  name: "overflow", initialValue: "visible", prefix: !1, type: 1, parse: function (A, e) {
    return e.filter(ys).map((function (A) {
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
}, Bi = {
  name: "overflow-wrap", initialValue: "normal", prefix: !1, type: 2, parse: function (A, e) {
    return "break-word" === e ? "break-word" : "normal"
  }
}, li = function (A) {
  return {name: "padding-" + A, initialValue: "0", prefix: !1, type: 3, format: "length-percentage"}
}, ui = li("top"), gi = li("right"), wi = li("bottom"), hi = li("left"), di = {
  name: "text-align", initialValue: "left", prefix: !1, type: 2, parse: function (A, e) {
    switch (e) {
      case"right":
        return 2;
      case"center":
      case"justify":
        return 1;
      default:
        return 0
    }
  }
}, Qi = {
  name: "position", initialValue: "static", prefix: !1, type: 2, parse: function (A, e) {
    switch (e) {
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
}, fi = {
  name: "text-shadow", initialValue: "none", type: 1, prefix: !1, parse: function (A, e) {
    return 1 === e.length && Es(e[0], "none") ? [] : Ls(e).map((function (e) {
      for (var t = {color: Ao.TRANSPARENT, offsetX: _s, offsetY: _s, blur: _s}, r = 0, n = 0; n < e.length; n++) {
        var s = e[n];
        xs(s) ? (0 === r ? t.offsetX = s : 1 === r ? t.offsetY = s : t.blur = s, r++) : t.color = Ns(A, s)
      }
      return t
    }))
  }
}, pi = {
  name: "text-transform", initialValue: "none", prefix: !1, type: 2, parse: function (A, e) {
    switch (e) {
      case"uppercase":
        return 2;
      case"lowercase":
        return 1;
      case"capitalize":
        return 3
    }
    return 0
  }
}, Ci = {
  name: "transform", initialValue: "none", prefix: !0, type: 0, parse: function (A, e) {
    if (20 === e.type && "none" === e.value) return null;
    if (18 === e.type) {
      var t = Ui[e.name];
      if (void 0 === t) throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
      return t(e.values)
    }
    return null
  }
}, Ui = {
  matrix: function (A) {
    var e = A.filter((function (A) {
      return 17 === A.type
    })).map((function (A) {
      return A.number
    }));
    return 6 === e.length ? e : null
  }, matrix3d: function (A) {
    var e = A.filter((function (A) {
      return 17 === A.type
    })).map((function (A) {
      return A.number
    })), t = e[0], r = e[1];
    e[2], e[3];
    var n = e[4], s = e[5];
    e[6], e[7], e[8], e[9], e[10], e[11];
    var o = e[12], i = e[13];
    return e[14], e[15], 16 === e.length ? [t, r, n, s, o, i] : null
  }
}, Fi = {type: 16, number: 50, flags: 4}, mi = [Fi, Fi], vi = {
  name: "transform-origin", initialValue: "50% 50%", prefix: !0, type: 1, parse: function (A, e) {
    var t = e.filter(Ss);
    return 2 !== t.length ? mi : [t[0], t[1]]
  }
}, yi = {
  name: "visible", initialValue: "none", prefix: !1, type: 2, parse: function (A, e) {
    switch (e) {
      case"hidden":
        return 1;
      case"collapse":
        return 2;
      default:
        return 0
    }
  }
};
(Zo = $o || ($o = {})).NORMAL = "normal", Zo.BREAK_ALL = "break-all", Zo.KEEP_ALL = "keep-all";
for (var Hi = {
  name: "word-break", initialValue: "normal", prefix: !1, type: 2, parse: function (A, e) {
    switch (e) {
      case"break-all":
        return $o.BREAK_ALL;
      case"keep-all":
        return $o.KEEP_ALL;
      default:
        return $o.NORMAL
    }
  }
}, Ei = {
  name: "z-index", initialValue: "auto", prefix: !1, type: 0, parse: function (A, e) {
    if (20 === e.type) return {auto: !0, order: 0};
    if (vs(e)) return {auto: !1, order: e.number};
    throw new Error("Invalid z-index number parsed")
  }
}, bi = function (A, e) {
  if (15 === e.type) switch (e.unit.toLowerCase()) {
    case"s":
      return 1e3 * e.number;
    case"ms":
      return e.number
  }
  throw new Error("Unsupported time type")
}, Ii = {
  name: "opacity", initialValue: "1", type: 0, prefix: !1, parse: function (A, e) {
    return vs(e) ? e.number : 1
  }
}, Li = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Ki = {
  name: "text-decoration-line", initialValue: "none", prefix: !1, type: 1, parse: function (A, e) {
    return e.filter(ys).map((function (A) {
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
}, xi = {
  name: "font-family", initialValue: "", prefix: !1, type: 1, parse: function (A, e) {
    var t = [], r = [];
    return e.forEach((function (A) {
      switch (A.type) {
        case 20:
        case 0:
          t.push(A.value);
          break;
        case 17:
          t.push(A.number.toString());
          break;
        case 4:
          r.push(t.join(" ")), t.length = 0
      }
    })), t.length && r.push(t.join(" ")), r.map((function (A) {
      return -1 === A.indexOf(" ") ? A : "'" + A + "'"
    }))
  }
}, Si = {name: "font-size", initialValue: "0", prefix: !1, type: 3, format: "length"}, Di = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function (A, e) {
    return vs(e) ? e.number : ys(e) && "bold" === e.value ? 700 : 400
  }
}, _i = {
  name: "font-variant", initialValue: "none", type: 1, prefix: !1, parse: function (A, e) {
    return e.filter(ys).map((function (A) {
      return A.value
    }))
  }
}, Mi = {
  name: "font-style", initialValue: "normal", prefix: !1, type: 2, parse: function (A, e) {
    switch (e) {
      case"oblique":
        return "oblique";
      case"italic":
        return "italic";
      default:
        return "normal"
    }
  }
}, ki = function (A, e) {
  return 0 != (A & e)
}, Ti = {
  name: "content", initialValue: "none", type: 1, prefix: !1, parse: function (A, e) {
    if (0 === e.length) return [];
    var t = e[0];
    return 20 === t.type && "none" === t.value ? [] : e
  }
}, Oi = {
  name: "counter-increment", initialValue: "none", prefix: !0, type: 1, parse: function (A, e) {
    if (0 === e.length) return null;
    var t = e[0];
    if (20 === t.type && "none" === t.value) return null;
    for (var r = [], n = e.filter(bs), s = 0; s < n.length; s++) {
      var o = n[s], i = n[s + 1];
      if (20 === o.type) {
        var a = i && vs(i) ? i.number : 1;
        r.push({counter: o.value, increment: a})
      }
    }
    return r
  }
}, Vi = {
  name: "counter-reset", initialValue: "none", prefix: !0, type: 1, parse: function (A, e) {
    if (0 === e.length) return [];
    for (var t = [], r = e.filter(bs), n = 0; n < r.length; n++) {
      var s = r[n], o = r[n + 1];
      if (ys(s) && "none" !== s.value) {
        var i = o && vs(o) ? o.number : 0;
        t.push({counter: s.value, reset: i})
      }
    }
    return t
  }
}, Gi = {
  name: "duration", initialValue: "0s", prefix: !1, type: 1, parse: function (A, e) {
    return e.filter(ms).map((function (e) {
      return bi(A, e)
    }))
  }
}, Ri = {
  name: "quotes", initialValue: "none", prefix: !0, type: 1, parse: function (A, e) {
    if (0 === e.length) return null;
    var t = e[0];
    if (20 === t.type && "none" === t.value) return null;
    var r = [], n = e.filter(Hs);
    if (n.length % 2 != 0) return null;
    for (var s = 0; s < n.length; s += 2) {
      var o = n[s].value, i = n[s + 1].value;
      r.push({open: o, close: i})
    }
    return r
  }
}, Pi = function (A, e, t) {
  if (!A) return "";
  var r = A[Math.min(e, A.length - 1)];
  return r ? t ? r.open : r.close : ""
}, Ni = {
  name: "box-shadow", initialValue: "none", type: 1, prefix: !1, parse: function (A, e) {
    return 1 === e.length && Es(e[0], "none") ? [] : Ls(e).map((function (e) {
      for (var t = {
        color: 255,
        offsetX: _s,
        offsetY: _s,
        blur: _s,
        spread: _s,
        inset: !1
      }, r = 0, n = 0; n < e.length; n++) {
        var s = e[n];
        Es(s, "inset") ? t.inset = !0 : xs(s) ? (0 === r ? t.offsetX = s : 1 === r ? t.offsetY = s : 2 === r ? t.blur = s : t.spread = s, r++) : t.color = Ns(A, s)
      }
      return t
    }))
  }
}, Ji = {
  name: "paint-order", initialValue: "normal", prefix: !1, type: 1, parse: function (A, e) {
    var t = [];
    return e.filter(ys).forEach((function (A) {
      switch (A.value) {
        case"stroke":
          t.push(1);
          break;
        case"fill":
          t.push(0);
          break;
        case"markers":
          t.push(2)
      }
    })), [0, 1, 2].forEach((function (A) {
      -1 === t.indexOf(A) && t.push(A)
    })), t
  }
}, Xi = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, Wi = {
  name: "-webkit-text-stroke-width", initialValue: "0", type: 0, prefix: !1, parse: function (A, e) {
    return ms(e) ? e.number : 0
  }
}, Yi = function () {
  function A(A, e) {
    var t, r;
    this.animationDuration = Zi(A, Gi, e.animationDuration), this.backgroundClip = Zi(A, eo, e.backgroundClip), this.backgroundColor = Zi(A, to, e.backgroundColor), this.backgroundImage = Zi(A, wo, e.backgroundImage), this.backgroundOrigin = Zi(A, ho, e.backgroundOrigin), this.backgroundPosition = Zi(A, Qo, e.backgroundPosition), this.backgroundRepeat = Zi(A, fo, e.backgroundRepeat), this.backgroundSize = Zi(A, Fo, e.backgroundSize), this.borderTopColor = Zi(A, yo, e.borderTopColor), this.borderRightColor = Zi(A, Ho, e.borderRightColor), this.borderBottomColor = Zi(A, Eo, e.borderBottomColor), this.borderLeftColor = Zi(A, bo, e.borderLeftColor), this.borderTopLeftRadius = Zi(A, Lo, e.borderTopLeftRadius), this.borderTopRightRadius = Zi(A, Ko, e.borderTopRightRadius), this.borderBottomRightRadius = Zi(A, xo, e.borderBottomRightRadius), this.borderBottomLeftRadius = Zi(A, So, e.borderBottomLeftRadius), this.borderTopStyle = Zi(A, _o, e.borderTopStyle), this.borderRightStyle = Zi(A, Mo, e.borderRightStyle), this.borderBottomStyle = Zi(A, ko, e.borderBottomStyle), this.borderLeftStyle = Zi(A, To, e.borderLeftStyle), this.borderTopWidth = Zi(A, Vo, e.borderTopWidth), this.borderRightWidth = Zi(A, Go, e.borderRightWidth), this.borderBottomWidth = Zi(A, Ro, e.borderBottomWidth), this.borderLeftWidth = Zi(A, Po, e.borderLeftWidth), this.boxShadow = Zi(A, Ni, e.boxShadow), this.color = Zi(A, No, e.color), this.direction = Zi(A, Jo, e.direction), this.display = Zi(A, Xo, e.display), this.float = Zi(A, Yo, e.cssFloat), this.fontFamily = Zi(A, xi, e.fontFamily), this.fontSize = Zi(A, Si, e.fontSize), this.fontStyle = Zi(A, Mi, e.fontStyle), this.fontVariant = Zi(A, _i, e.fontVariant), this.fontWeight = Zi(A, Di, e.fontWeight), this.letterSpacing = Zi(A, jo, e.letterSpacing), this.lineBreak = Zi(A, zo, e.lineBreak), this.lineHeight = Zi(A, qo, e.lineHeight), this.listStyleImage = Zi(A, ei, e.listStyleImage), this.listStylePosition = Zi(A, ti, e.listStylePosition), this.listStyleType = Zi(A, ri, e.listStyleType), this.marginTop = Zi(A, si, e.marginTop), this.marginRight = Zi(A, oi, e.marginRight), this.marginBottom = Zi(A, ii, e.marginBottom), this.marginLeft = Zi(A, ai, e.marginLeft), this.opacity = Zi(A, Ii, e.opacity);
    var n = Zi(A, ci, e.overflow);
    this.overflowX = n[0], this.overflowY = n[n.length > 1 ? 1 : 0], this.overflowWrap = Zi(A, Bi, e.overflowWrap), this.paddingTop = Zi(A, ui, e.paddingTop), this.paddingRight = Zi(A, gi, e.paddingRight), this.paddingBottom = Zi(A, wi, e.paddingBottom), this.paddingLeft = Zi(A, hi, e.paddingLeft), this.paintOrder = Zi(A, Ji, e.paintOrder), this.position = Zi(A, Qi, e.position), this.textAlign = Zi(A, di, e.textAlign), this.textDecorationColor = Zi(A, Li, null !== (t = e.textDecorationColor) && void 0 !== t ? t : e.color), this.textDecorationLine = Zi(A, Ki, null !== (r = e.textDecorationLine) && void 0 !== r ? r : e.textDecoration), this.textShadow = Zi(A, fi, e.textShadow), this.textTransform = Zi(A, pi, e.textTransform), this.transform = Zi(A, Ci, e.transform), this.transformOrigin = Zi(A, vi, e.transformOrigin), this.visibility = Zi(A, yi, e.visibility), this.webkitTextStrokeColor = Zi(A, Xi, e.webkitTextStrokeColor), this.webkitTextStrokeWidth = Zi(A, Wi, e.webkitTextStrokeWidth), this.wordBreak = Zi(A, Hi, e.wordBreak), this.zIndex = Zi(A, Ei, e.zIndex)
  }

  return A.prototype.isVisible = function () {
    return this.display > 0 && this.opacity > 0 && 0 === this.visibility
  }, A.prototype.isTransparent = function () {
    return Js(this.backgroundColor)
  }, A.prototype.isTransformed = function () {
    return null !== this.transform
  }, A.prototype.isPositioned = function () {
    return 0 !== this.position
  }, A.prototype.isPositionedWithZIndex = function () {
    return this.isPositioned() && !this.zIndex.auto
  }, A.prototype.isFloating = function () {
    return 0 !== this.float
  }, A.prototype.isInlineLevel = function () {
    return ki(this.display, 4) || ki(this.display, 33554432) || ki(this.display, 268435456) || ki(this.display, 536870912) || ki(this.display, 67108864) || ki(this.display, 134217728)
  }, A
}(), ji = function (A, e) {
  this.content = Zi(A, Ti, e.content), this.quotes = Zi(A, Ri, e.quotes)
}, $i = function (A, e) {
  this.counterIncrement = Zi(A, Oi, e.counterIncrement), this.counterReset = Zi(A, Vi, e.counterReset)
}, Zi = function (A, e, t) {
  var r = new Us, n = null != t ? t.toString() : e.initialValue;
  r.write(n);
  var s = new Fs(r.read());
  switch (e.type) {
    case 2:
      var o = s.parseComponentValue();
      return e.parse(A, ys(o) ? o.value : e.initialValue);
    case 0:
      return e.parse(A, s.parseComponentValue());
    case 1:
      return e.parse(A, s.parseComponentValues());
    case 4:
      return s.parseComponentValue();
    case 3:
      switch (e.format) {
        case"angle":
          return Vs(A, s.parseComponentValue());
        case"color":
          return Ns(A, s.parseComponentValue());
        case"image":
          return Bo(A, s.parseComponentValue());
        case"length":
          var i = s.parseComponentValue();
          return xs(i) ? i : _s;
        case"length-percentage":
          var a = s.parseComponentValue();
          return Ss(a) ? a : _s;
        case"time":
          return bi(A, s.parseComponentValue())
      }
  }
}, zi = function (A, e) {
  var t = function (A) {
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
  return 1 === t || e === t
}, qi = function (A, e) {
  this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, zi(e, 3), this.styles = new Yi(A, window.getComputedStyle(e, null)), Ac(e) && (this.styles.animationDuration.some((function (A) {
    return A > 0
  })) && (e.style.animationDuration = "0s"), null !== this.styles.transform && (e.style.transform = "none")), this.bounds = kr(this.context, e), zi(e, 4) && (this.flags |= 16)
}, Aa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ea = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), ta = 0; ta < Aa.length; ta++) ea[Aa.charCodeAt(ta)] = ta;
for (var ra = function (A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t))
}, na = function () {
  function A(A, e, t, r, n, s) {
    this.initialValue = A, this.errorValue = e, this.highStart = t, this.highValueIndex = r, this.index = n, this.data = s
  }

  return A.prototype.get = function (A) {
    var e;
    if (A >= 0) {
      if (A < 55296 || A > 56319 && A <= 65535) return e = ((e = this.index[A >> 5]) << 2) + (31 & A), this.data[e];
      if (A <= 65535) return e = ((e = this.index[2048 + (A - 55296 >> 5)]) << 2) + (31 & A), this.data[e];
      if (A < this.highStart) return e = 2080 + (A >> 11), e = this.index[e], e += A >> 5 & 63, e = ((e = this.index[e]) << 2) + (31 & A), this.data[e];
      if (A <= 1114111) return this.data[this.highValueIndex]
    }
    return this.errorValue
  }, A
}(), sa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", oa = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), ia = 0; ia < sa.length; ia++) oa[sa.charCodeAt(ia)] = ia;
var aa, ca, Ba = 8, la = 9, ua = 11, ga = 12, wa = function () {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, s = ""; ++n < t;) {
      var o = A[n];
      o <= 65535 ? r.push(o) : (o -= 65536, r.push(55296 + (o >> 10), o % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (s += String.fromCharCode.apply(String, r), r.length = 0)
    }
    return s
  }, ha = function (A, e) {
    var t = function (A) {
      var e, t, r, n, s, o = .75 * A.length, i = A.length, a = 0;
      "=" === A[A.length - 1] && (o--, "=" === A[A.length - 2] && o--);
      var c = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(o) : new Array(o),
        B = Array.isArray(c) ? c : new Uint8Array(c);
      for (e = 0; e < i; e += 4) t = ea[A.charCodeAt(e)], r = ea[A.charCodeAt(e + 1)], n = ea[A.charCodeAt(e + 2)], s = ea[A.charCodeAt(e + 3)], B[a++] = t << 2 | r >> 4, B[a++] = (15 & r) << 4 | n >> 2, B[a++] = (3 & n) << 6 | 63 & s;
      return c
    }(A), r = Array.isArray(t) ? function (A) {
      for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
      return t
    }(t) : new Uint32Array(t), n = Array.isArray(t) ? function (A) {
      for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
      return t
    }(t) : new Uint16Array(t), s = ra(n, 12, r[4] / 2), o = 2 === r[5] ? ra(n, (24 + r[4]) / 2) : function (A, e, t) {
      return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t))
    }(r, Math.ceil((24 + r[4]) / 4));
    return new na(r[0], r[1], r[2], r[3], s, o)
  }("AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA="),
  da = function (A) {
    return ha.get(A)
  }, Qa = function (A, e, t) {
    var r = t - 2, n = e[r], s = e[t - 1], o = e[t];
    if (2 === s && 3 === o) return "×";
    if (2 === s || 3 === s || 4 === s) return "÷";
    if (2 === o || 3 === o || 4 === o) return "÷";
    if (s === Ba && -1 !== [Ba, la, ua, ga].indexOf(o)) return "×";
    if (!(s !== ua && s !== la || o !== la && 10 !== o)) return "×";
    if ((s === ga || 10 === s) && 10 === o) return "×";
    if (13 === o || 5 === o) return "×";
    if (7 === o) return "×";
    if (1 === s) return "×";
    if (13 === s && 14 === o) {
      for (; 5 === n;) n = e[--r];
      if (14 === n) return "×"
    }
    if (15 === s && 15 === o) {
      for (var i = 0; 15 === n;) i++, n = e[--r];
      if (i % 2 == 0) return "×"
    }
    return "÷"
  }, fa = function (A) {
    var e = function (A) {
      for (var e = [], t = 0, r = A.length; t < r;) {
        var n = A.charCodeAt(t++);
        if (n >= 55296 && n <= 56319 && t < r) {
          var s = A.charCodeAt(t++);
          56320 == (64512 & s) ? e.push(((1023 & n) << 10) + (1023 & s) + 65536) : (e.push(n), t--)
        } else e.push(n)
      }
      return e
    }(A), t = e.length, r = 0, n = 0, s = e.map(da);
    return {
      next: function () {
        if (r >= t) return {done: !0, value: null};
        for (var A = "×"; r < t && "×" === (A = Qa(0, s, ++r));) ;
        if ("×" !== A || r === t) {
          var o = wa.apply(null, e.slice(n, r));
          return n = r, {value: o, done: !1}
        }
        return {done: !0, value: null}
      }
    }
  }, pa = function (A) {
    return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3]
  }, Ca = function (A, e, t, r, n) {
    var s = "http://www.w3.org/2000/svg", o = document.createElementNS(s, "svg"),
      i = document.createElementNS(s, "foreignObject");
    return o.setAttributeNS(null, "width", A.toString()), o.setAttributeNS(null, "height", e.toString()), i.setAttributeNS(null, "width", "100%"), i.setAttributeNS(null, "height", "100%"), i.setAttributeNS(null, "x", t.toString()), i.setAttributeNS(null, "y", r.toString()), i.setAttributeNS(null, "externalResourcesRequired", "true"), o.appendChild(i), i.appendChild(n), o
  }, Ua = function (A) {
    return new Promise((function (e, t) {
      var r = new Image;
      r.onload = function () {
        return e(r)
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(A))
    }))
  }, Fa = {
    get SUPPORT_RANGE_BOUNDS() {
      var A = function (A) {
        if (A.createRange) {
          var e = A.createRange();
          if (e.getBoundingClientRect) {
            var t = A.createElement("boundtest");
            t.style.height = "123px", t.style.display = "block", A.body.appendChild(t), e.selectNode(t);
            var r = e.getBoundingClientRect(), n = Math.round(r.height);
            if (A.body.removeChild(t), 123 === n) return !0
          }
        }
        return !1
      }(document);
      return Object.defineProperty(Fa, "SUPPORT_RANGE_BOUNDS", {value: A}), A
    }, get SUPPORT_WORD_BREAKING() {
      var A = Fa.SUPPORT_RANGE_BOUNDS && function (A) {
        var e = A.createElement("boundtest");
        e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
        var t = A.createRange();
        e.innerHTML = "function" == typeof "".repeat ? "&#128104;".repeat(10) : "";
        var r = e.firstChild, n = Tr(r.data).map((function (A) {
          return Or(A)
        })), s = 0, o = {}, i = n.every((function (A, e) {
          t.setStart(r, s), t.setEnd(r, s + A.length);
          var n = t.getBoundingClientRect();
          s += A.length;
          var i = n.x > o.x || n.y > o.y;
          return o = n, 0 === e || i
        }));
        return A.body.removeChild(e), i
      }(document);
      return Object.defineProperty(Fa, "SUPPORT_WORD_BREAKING", {value: A}), A
    }, get SUPPORT_SVG_DRAWING() {
      var A = function (A) {
        var e = new Image, t = A.createElement("canvas"), r = t.getContext("2d");
        if (!r) return !1;
        e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
        try {
          r.drawImage(e, 0, 0), t.toDataURL()
        } catch (n) {
          return !1
        }
        return !0
      }(document);
      return Object.defineProperty(Fa, "SUPPORT_SVG_DRAWING", {value: A}), A
    }, get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var A = "function" == typeof Array.from && "function" == typeof window.fetch ? function (A) {
        var e = A.createElement("canvas"), t = 100;
        e.width = t, e.height = t;
        var r = e.getContext("2d");
        if (!r) return Promise.reject(!1);
        r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
        var n = new Image, s = e.toDataURL();
        n.src = s;
        var o = Ca(t, t, 0, 0, n);
        return r.fillStyle = "red", r.fillRect(0, 0, t, t), Ua(o).then((function (e) {
          r.drawImage(e, 0, 0);
          var n = r.getImageData(0, 0, t, t).data;
          r.fillStyle = "red", r.fillRect(0, 0, t, t);
          var o = A.createElement("div");
          return o.style.backgroundImage = "url(" + s + ")", o.style.height = "100px", pa(n) ? Ua(Ca(t, t, 0, 0, o)) : Promise.reject(!1)
        })).then((function (A) {
          return r.drawImage(A, 0, 0), pa(r.getImageData(0, 0, t, t).data)
        })).catch((function () {
          return !1
        }))
      }(document) : Promise.resolve(!1);
      return Object.defineProperty(Fa, "SUPPORT_FOREIGNOBJECT_DRAWING", {value: A}), A
    }, get SUPPORT_CORS_IMAGES() {
      var A = void 0 !== (new Image).crossOrigin;
      return Object.defineProperty(Fa, "SUPPORT_CORS_IMAGES", {value: A}), A
    }, get SUPPORT_RESPONSE_TYPE() {
      var A = "string" == typeof (new XMLHttpRequest).responseType;
      return Object.defineProperty(Fa, "SUPPORT_RESPONSE_TYPE", {value: A}), A
    }, get SUPPORT_CORS_XHR() {
      var A = "withCredentials" in new XMLHttpRequest;
      return Object.defineProperty(Fa, "SUPPORT_CORS_XHR", {value: A}), A
    }, get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
      var A = !("undefined" == typeof Intl || !Intl.Segmenter);
      return Object.defineProperty(Fa, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {value: A}), A
    }
  }, ma = function (A, e) {
    this.text = A, this.bounds = e
  }, va = function (A, e) {
    var t = e.ownerDocument;
    if (t) {
      var r = t.createElement("html2canvaswrapper");
      r.appendChild(e.cloneNode(!0));
      var n = e.parentNode;
      if (n) {
        n.replaceChild(r, e);
        var s = kr(A, r);
        return r.firstChild && n.replaceChild(r.firstChild, r), s
      }
    }
    return Mr.EMPTY
  }, ya = function (A, e, t) {
    var r = A.ownerDocument;
    if (!r) throw new Error("Node has no owner document");
    var n = r.createRange();
    return n.setStart(A, e), n.setEnd(A, e + t), n
  }, Ha = function (A) {
    if (Fa.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var e = new Intl.Segmenter(void 0, {granularity: "grapheme"});
      return Array.from(e.segment(A)).map((function (A) {
        return A.segment
      }))
    }
    return function (A) {
      for (var e, t = fa(A), r = []; !(e = t.next()).done;) e.value && r.push(e.value.slice());
      return r
    }(A)
  }, Ea = function (A, e) {
    return 0 !== e.letterSpacing ? Ha(A) : function (A, e) {
      if (Fa.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
        var t = new Intl.Segmenter(void 0, {granularity: "word"});
        return Array.from(t.segment(A)).map((function (A) {
          return A.segment
        }))
      }
      return Ia(A, e)
    }(A, e)
  }, ba = [32, 160, 4961, 65792, 65793, 4153, 4241], Ia = function (A, e) {
    for (var t, r = function (A, e) {
      var t = Tr(A), r = Rn(t, e), n = r[0], s = r[1], o = r[2], i = t.length, a = 0, c = 0;
      return {
        next: function () {
          if (c >= i) return {done: !0, value: null};
          for (var A = "×"; c < i && "×" === (A = Gn(t, s, n, ++c, o));) ;
          if ("×" !== A || c === i) {
            var e = new Pn(t, A, a, c);
            return a = c, {value: e, done: !1}
          }
          return {done: !0, value: null}
        }
      }
    }(A, {
      lineBreak: e.lineBreak,
      wordBreak: "break-word" === e.overflowWrap ? "break-word" : e.wordBreak
    }), n = [], s = function () {
      if (t.value) {
        var A = t.value.slice(), e = Tr(A), r = "";
        e.forEach((function (A) {
          -1 === ba.indexOf(A) ? r += Or(A) : (r.length && n.push(r), n.push(Or(A)), r = "")
        })), r.length && n.push(r)
      }
    }; !(t = r.next()).done;) s();
    return n
  }, La = function (A, e, t) {
    this.text = Ka(e.data, t.textTransform), this.textBounds = function (A, e, t, r) {
      var n = Ea(e, t), s = [], o = 0;
      return n.forEach((function (e) {
        if (t.textDecorationLine.length || e.trim().length > 0) if (Fa.SUPPORT_RANGE_BOUNDS) {
          var n = ya(r, o, e.length).getClientRects();
          if (n.length > 1) {
            var i = Ha(e), a = 0;
            i.forEach((function (e) {
              s.push(new ma(e, Mr.fromDOMRectList(A, ya(r, a + o, e.length).getClientRects()))), a += e.length
            }))
          } else s.push(new ma(e, Mr.fromDOMRectList(A, n)))
        } else {
          var c = r.splitText(e.length);
          s.push(new ma(e, va(A, r))), r = c
        } else Fa.SUPPORT_RANGE_BOUNDS || (r = r.splitText(e.length));
        o += e.length
      })), s
    }(A, this.text, t, e)
  }, Ka = function (A, e) {
    switch (e) {
      case 1:
        return A.toLowerCase();
      case 3:
        return A.replace(xa, Sa);
      case 2:
        return A.toUpperCase();
      default:
        return A
    }
  }, xa = /(^|\s|:|-|\(|\))([a-z])/g, Sa = function (A, e, t) {
    return A.length > 0 ? e + t.toUpperCase() : A
  }, Da = function (A) {
    function e(e, t) {
      var r = A.call(this, e, t) || this;
      return r.src = t.currentSrc || t.src, r.intrinsicWidth = t.naturalWidth, r.intrinsicHeight = t.naturalHeight, r.context.cache.addImage(r.src), r
    }

    return xr(e, A), e
  }(qi), _a = function (A) {
    function e(e, t) {
      var r = A.call(this, e, t) || this;
      return r.canvas = t, r.intrinsicWidth = t.width, r.intrinsicHeight = t.height, r
    }

    return xr(e, A), e
  }(qi), Ma = function (A) {
    function e(e, t) {
      var r = A.call(this, e, t) || this, n = new XMLSerializer, s = kr(e, t);
      return t.setAttribute("width", s.width + "px"), t.setAttribute("height", s.height + "px"), r.svg = "data:image/svg+xml," + encodeURIComponent(n.serializeToString(t)), r.intrinsicWidth = t.width.baseVal.value, r.intrinsicHeight = t.height.baseVal.value, r.context.cache.addImage(r.svg), r
    }

    return xr(e, A), e
  }(qi), ka = function (A) {
    function e(e, t) {
      var r = A.call(this, e, t) || this;
      return r.value = t.value, r
    }

    return xr(e, A), e
  }(qi), Ta = function (A) {
    function e(e, t) {
      var r = A.call(this, e, t) || this;
      return r.start = t.start, r.reversed = "boolean" == typeof t.reversed && !0 === t.reversed, r
    }

    return xr(e, A), e
  }(qi), Oa = [{type: 15, flags: 0, unit: "px", number: 3}], Va = [{type: 16, flags: 0, number: 50}], Ga = "password",
  Ra = function (A) {
    function e(e, t) {
      var r, n, s, o = A.call(this, e, t) || this;
      switch (o.type = t.type.toLowerCase(), o.checked = t.checked, o.value = 0 === (n = (r = t).type === Ga ? new Array(r.value.length + 1).join("•") : r.value).length ? r.placeholder || "" : n, "checkbox" !== o.type && "radio" !== o.type || (o.styles.backgroundColor = 3739148031, o.styles.borderTopColor = o.styles.borderRightColor = o.styles.borderBottomColor = o.styles.borderLeftColor = 2779096575, o.styles.borderTopWidth = o.styles.borderRightWidth = o.styles.borderBottomWidth = o.styles.borderLeftWidth = 1, o.styles.borderTopStyle = o.styles.borderRightStyle = o.styles.borderBottomStyle = o.styles.borderLeftStyle = 1, o.styles.backgroundClip = [0], o.styles.backgroundOrigin = [0], o.bounds = (s = o.bounds).width > s.height ? new Mr(s.left + (s.width - s.height) / 2, s.top, s.height, s.height) : s.width < s.height ? new Mr(s.left, s.top + (s.height - s.width) / 2, s.width, s.width) : s), o.type) {
        case"checkbox":
          o.styles.borderTopRightRadius = o.styles.borderTopLeftRadius = o.styles.borderBottomRightRadius = o.styles.borderBottomLeftRadius = Oa;
          break;
        case"radio":
          o.styles.borderTopRightRadius = o.styles.borderTopLeftRadius = o.styles.borderBottomRightRadius = o.styles.borderBottomLeftRadius = Va
      }
      return o
    }

    return xr(e, A), e
  }(qi), Pa = function (A) {
    function e(e, t) {
      var r = A.call(this, e, t) || this, n = t.options[t.selectedIndex || 0];
      return r.value = n && n.text || "", r
    }

    return xr(e, A), e
  }(qi), Na = function (A) {
    function e(e, t) {
      var r = A.call(this, e, t) || this;
      return r.value = t.value, r
    }

    return xr(e, A), e
  }(qi), Ja = function (A) {
    function e(e, t) {
      var r = A.call(this, e, t) || this;
      r.src = t.src, r.width = parseInt(t.width, 10) || 0, r.height = parseInt(t.height, 10) || 0, r.backgroundColor = r.styles.backgroundColor;
      try {
        if (t.contentWindow && t.contentWindow.document && t.contentWindow.document.documentElement) {
          r.tree = ja(e, t.contentWindow.document.documentElement);
          var n = t.contentWindow.document.documentElement ? qs(e, getComputedStyle(t.contentWindow.document.documentElement).backgroundColor) : Ao.TRANSPARENT,
            s = t.contentWindow.document.body ? qs(e, getComputedStyle(t.contentWindow.document.body).backgroundColor) : Ao.TRANSPARENT;
          r.backgroundColor = Js(n) ? Js(s) ? r.styles.backgroundColor : s : n
        }
      } catch (o) {
      }
      return r
    }

    return xr(e, A), e
  }(qi), Xa = ["OL", "UL", "MENU"], Wa = function (A, e, t, r) {
    for (var n = e.firstChild, s = void 0; n; n = s) if (s = n.nextSibling, za(n) && n.data.trim().length > 0) t.textNodes.push(new La(A, n, t.styles)); else if (qa(n)) if (wc(n) && n.assignedNodes) n.assignedNodes().forEach((function (e) {
      return Wa(A, e, t, r)
    })); else {
      var o = Ya(A, n);
      o.styles.isVisible() && ($a(n, o, r) ? o.flags |= 4 : Za(o.styles) && (o.flags |= 2), -1 !== Xa.indexOf(n.tagName) && (o.flags |= 8), t.elements.push(o), n.slot, n.shadowRoot ? Wa(A, n.shadowRoot, o, r) : uc(n) || sc(n) || gc(n) || Wa(A, n, o, r))
    }
  }, Ya = function (A, e) {
    return cc(e) ? new Da(A, e) : ic(e) ? new _a(A, e) : sc(e) ? new Ma(A, e) : tc(e) ? new ka(A, e) : rc(e) ? new Ta(A, e) : nc(e) ? new Ra(A, e) : gc(e) ? new Pa(A, e) : uc(e) ? new Na(A, e) : Bc(e) ? new Ja(A, e) : new qi(A, e)
  }, ja = function (A, e) {
    var t = Ya(A, e);
    return t.flags |= 4, Wa(A, e, t, t), t
  }, $a = function (A, e, t) {
    return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || oc(A) && t.styles.isTransparent()
  }, Za = function (A) {
    return A.isPositioned() || A.isFloating()
  }, za = function (A) {
    return A.nodeType === Node.TEXT_NODE
  }, qa = function (A) {
    return A.nodeType === Node.ELEMENT_NODE
  }, Ac = function (A) {
    return qa(A) && void 0 !== A.style && !ec(A)
  }, ec = function (A) {
    return "object" == typeof A.className
  }, tc = function (A) {
    return "LI" === A.tagName
  }, rc = function (A) {
    return "OL" === A.tagName
  }, nc = function (A) {
    return "INPUT" === A.tagName
  }, sc = function (A) {
    return "svg" === A.tagName
  }, oc = function (A) {
    return "BODY" === A.tagName
  }, ic = function (A) {
    return "CANVAS" === A.tagName
  }, ac = function (A) {
    return "VIDEO" === A.tagName
  }, cc = function (A) {
    return "IMG" === A.tagName
  }, Bc = function (A) {
    return "IFRAME" === A.tagName
  }, lc = function (A) {
    return "STYLE" === A.tagName
  }, uc = function (A) {
    return "TEXTAREA" === A.tagName
  }, gc = function (A) {
    return "SELECT" === A.tagName
  }, wc = function (A) {
    return "SLOT" === A.tagName
  }, hc = function (A) {
    return A.tagName.indexOf("-") > 0
  }, dc = function () {
    function A() {
      this.counters = {}
    }

    return A.prototype.getCounterValue = function (A) {
      var e = this.counters[A];
      return e && e.length ? e[e.length - 1] : 1
    }, A.prototype.getCounterValues = function (A) {
      var e = this.counters[A];
      return e || []
    }, A.prototype.pop = function (A) {
      var e = this;
      A.forEach((function (A) {
        return e.counters[A].pop()
      }))
    }, A.prototype.parse = function (A) {
      var e = this, t = A.counterIncrement, r = A.counterReset, n = !0;
      null !== t && t.forEach((function (A) {
        var t = e.counters[A.counter];
        t && 0 !== A.increment && (n = !1, t.length || t.push(1), t[Math.max(0, t.length - 1)] += A.increment)
      }));
      var s = [];
      return n && r.forEach((function (A) {
        var t = e.counters[A.counter];
        s.push(A.counter), t || (t = e.counters[A.counter] = []), t.push(A.reset)
      })), s
    }, A
  }(), Qc = {
    integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  }, fc = {
    integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"]
  }, pc = {
    integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"]
  }, Cc = {
    integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"]
  }, Uc = function (A, e, t, r, n, s) {
    return A < e || A > t ? Hc(A, n, s.length > 0) : r.integers.reduce((function (e, t, n) {
      for (; A >= t;) A -= t, e += r.values[n];
      return e
    }), "") + s
  }, Fc = function (A, e, t, r) {
    var n = "";
    do {
      t || A--, n = r(A) + n, A /= e
    } while (A * e >= e);
    return n
  }, mc = function (A, e, t, r, n) {
    var s = t - e + 1;
    return (A < 0 ? "-" : "") + (Fc(Math.abs(A), s, r, (function (A) {
      return Or(Math.floor(A % s) + e)
    })) + n)
  }, vc = function (A, e, t) {
    void 0 === t && (t = ". ");
    var r = e.length;
    return Fc(Math.abs(A), r, !1, (function (A) {
      return e[Math.floor(A % r)]
    })) + t
  }, yc = function (A, e, t, r, n, s) {
    if (A < -9999 || A > 9999) return Hc(A, 4, n.length > 0);
    var o = Math.abs(A), i = n;
    if (0 === o) return e[0] + i;
    for (var a = 0; o > 0 && a <= 4; a++) {
      var c = o % 10;
      0 === c && ki(s, 1) && "" !== i ? i = e[c] + i : c > 1 || 1 === c && 0 === a || 1 === c && 1 === a && ki(s, 2) || 1 === c && 1 === a && ki(s, 4) && A > 100 || 1 === c && a > 1 && ki(s, 8) ? i = e[c] + (a > 0 ? t[a - 1] : "") + i : 1 === c && a > 0 && (i = t[a - 1] + i), o = Math.floor(o / 10)
    }
    return (A < 0 ? r : "") + i
  }, Hc = function (A, e, t) {
    var r = t ? ". " : "", n = t ? "、" : "", s = t ? ", " : "", o = t ? " " : "";
    switch (e) {
      case 0:
        return "•" + o;
      case 1:
        return "◦" + o;
      case 2:
        return "◾" + o;
      case 5:
        var i = mc(A, 48, 57, !0, r);
        return i.length < 4 ? "0" + i : i;
      case 4:
        return vc(A, "〇一二三四五六七八九", n);
      case 6:
        return Uc(A, 1, 3999, Qc, 3, r).toLowerCase();
      case 7:
        return Uc(A, 1, 3999, Qc, 3, r);
      case 8:
        return mc(A, 945, 969, !1, r);
      case 9:
        return mc(A, 97, 122, !1, r);
      case 10:
        return mc(A, 65, 90, !1, r);
      case 11:
        return mc(A, 1632, 1641, !0, r);
      case 12:
      case 49:
        return Uc(A, 1, 9999, fc, 3, r);
      case 35:
        return Uc(A, 1, 9999, fc, 3, r).toLowerCase();
      case 13:
        return mc(A, 2534, 2543, !0, r);
      case 14:
      case 30:
        return mc(A, 6112, 6121, !0, r);
      case 15:
        return vc(A, "子丑寅卯辰巳午未申酉戌亥", n);
      case 16:
        return vc(A, "甲乙丙丁戊己庚辛壬癸", n);
      case 17:
      case 48:
        return yc(A, "零一二三四五六七八九", "十百千萬", "負", n, 14);
      case 47:
        return yc(A, "零壹貳參肆伍陸柒捌玖", "拾佰仟萬", "負", n, 15);
      case 42:
        return yc(A, "零一二三四五六七八九", "十百千萬", "负", n, 14);
      case 41:
        return yc(A, "零壹贰叁肆伍陆柒捌玖", "拾佰仟萬", "负", n, 15);
      case 26:
        return yc(A, "〇一二三四五六七八九", "十百千万", "マイナス", n, 0);
      case 25:
        return yc(A, "零壱弐参四伍六七八九", "拾百千万", "マイナス", n, 7);
      case 31:
        return yc(A, "영일이삼사오육칠팔구", "십백천만", "마이너스", s, 7);
      case 33:
        return yc(A, "零一二三四五六七八九", "十百千萬", "마이너스", s, 0);
      case 32:
        return yc(A, "零壹貳參四五六七八九", "拾百千", "마이너스", s, 7);
      case 18:
        return mc(A, 2406, 2415, !0, r);
      case 20:
        return Uc(A, 1, 19999, Cc, 3, r);
      case 21:
        return mc(A, 2790, 2799, !0, r);
      case 22:
        return mc(A, 2662, 2671, !0, r);
      case 22:
        return Uc(A, 1, 10999, pc, 3, r);
      case 23:
        return vc(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
      case 24:
        return vc(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
      case 27:
        return mc(A, 3302, 3311, !0, r);
      case 28:
        return vc(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", n);
      case 29:
        return vc(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", n);
      case 34:
        return mc(A, 3792, 3801, !0, r);
      case 37:
        return mc(A, 6160, 6169, !0, r);
      case 38:
        return mc(A, 4160, 4169, !0, r);
      case 39:
        return mc(A, 2918, 2927, !0, r);
      case 40:
        return mc(A, 1776, 1785, !0, r);
      case 43:
        return mc(A, 3046, 3055, !0, r);
      case 44:
        return mc(A, 3174, 3183, !0, r);
      case 45:
        return mc(A, 3664, 3673, !0, r);
      case 46:
        return mc(A, 3872, 3881, !0, r);
      default:
        return mc(A, 48, 57, !0, r)
    }
  }, Ec = function () {
    function A(A, e, t) {
      if (this.context = A, this.options = t, this.scrolledElements = [], this.referenceElement = e, this.counters = new dc, this.quoteDepth = 0, !e.ownerDocument) throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(e.ownerDocument.documentElement, !1)
    }

    return A.prototype.toIFrame = function (A, e) {
      var t = this, r = Lc(A, e);
      if (!r.contentWindow) return Promise.reject("Unable to find iframe window");
      var n = A.defaultView.pageXOffset, s = A.defaultView.pageYOffset, o = r.contentWindow, i = o.document,
        a = Sc(r).then((function () {
          return Dr(t, void 0, void 0, (function () {
            var A, t;
            return _r(this, (function (n) {
              switch (n.label) {
                case 0:
                  return this.scrolledElements.forEach(Tc), o && (o.scrollTo(e.left, e.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || o.scrollY === e.top && o.scrollX === e.left || (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(o.scrollX - e.left, o.scrollY - e.top, 0, 0))), A = this.options.onclone, void 0 === (t = this.clonedReferenceElement) ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : i.fonts && i.fonts.ready ? [4, i.fonts.ready] : [3, 2];
                case 1:
                  n.sent(), n.label = 2;
                case 2:
                  return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, xc(i)] : [3, 4];
                case 3:
                  n.sent(), n.label = 4;
                case 4:
                  return "function" == typeof A ? [2, Promise.resolve().then((function () {
                    return A(i, t)
                  })).then((function () {
                    return r
                  }))] : [2, r]
              }
            }))
          }))
        }));
      return i.open(), i.write(Mc(document.doctype) + "<html></html>"), kc(this.referenceElement.ownerDocument, n, s), i.replaceChild(i.adoptNode(this.documentElement), i.documentElement), i.close(), a
    }, A.prototype.createElementClone = function (A) {
      if (zi(A, 2), ic(A)) return this.createCanvasClone(A);
      if (ac(A)) return this.createVideoClone(A);
      if (lc(A)) return this.createStyleClone(A);
      var e = A.cloneNode(!1);
      return cc(e) && (cc(A) && A.currentSrc && A.currentSrc !== A.src && (e.src = A.currentSrc, e.srcset = ""), "lazy" === e.loading && (e.loading = "eager")), hc(e) ? this.createCustomElementClone(e) : e
    }, A.prototype.createCustomElementClone = function (A) {
      var e = document.createElement("html2canvascustomelement");
      return _c(A.style, e), e
    }, A.prototype.createStyleClone = function (A) {
      try {
        var e = A.sheet;
        if (e && e.cssRules) {
          var t = [].slice.call(e.cssRules, 0).reduce((function (A, e) {
            return e && "string" == typeof e.cssText ? A + e.cssText : A
          }), ""), r = A.cloneNode(!1);
          return r.textContent = t, r
        }
      } catch (n) {
        if (this.context.logger.error("Unable to access cssRules property", n), "SecurityError" !== n.name) throw n
      }
      return A.cloneNode(!1)
    }, A.prototype.createCanvasClone = function (A) {
      var e;
      if (this.options.inlineImages && A.ownerDocument) {
        var t = A.ownerDocument.createElement("img");
        try {
          return t.src = A.toDataURL(), t
        } catch (a) {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A)
        }
      }
      var r = A.cloneNode(!1);
      try {
        r.width = A.width, r.height = A.height;
        var n = A.getContext("2d"), s = r.getContext("2d");
        if (s) if (!this.options.allowTaint && n) s.putImageData(n.getImageData(0, 0, A.width, A.height), 0, 0); else {
          var o = null !== (e = A.getContext("webgl2")) && void 0 !== e ? e : A.getContext("webgl");
          if (o) {
            var i = o.getContextAttributes();
            !1 === (null == i ? void 0 : i.preserveDrawingBuffer) && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A)
          }
          s.drawImage(A, 0, 0)
        }
        return r
      } catch (a) {
        this.context.logger.info("Unable to clone canvas as it is tainted", A)
      }
      return r
    }, A.prototype.createVideoClone = function (A) {
      var e = A.ownerDocument.createElement("canvas");
      e.width = A.offsetWidth, e.height = A.offsetHeight;
      var t = e.getContext("2d");
      try {
        return t && (t.drawImage(A, 0, 0, e.width, e.height), this.options.allowTaint || t.getImageData(0, 0, e.width, e.height)), e
      } catch (n) {
        this.context.logger.info("Unable to clone video as it is tainted", A)
      }
      var r = A.ownerDocument.createElement("canvas");
      return r.width = A.offsetWidth, r.height = A.offsetHeight, r
    }, A.prototype.appendChildNode = function (A, e, t) {
      qa(e) && ("SCRIPT" === e.tagName || e.hasAttribute("data-html2canvas-ignore") || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(e)) || this.options.copyStyles && qa(e) && lc(e) || A.appendChild(this.cloneNode(e, t))
    }, A.prototype.cloneChildNodes = function (A, e, t) {
      for (var r = this, n = A.shadowRoot ? A.shadowRoot.firstChild : A.firstChild; n; n = n.nextSibling) if (qa(n) && wc(n) && "function" == typeof n.assignedNodes) {
        var s = n.assignedNodes();
        s.length && s.forEach((function (A) {
          return r.appendChildNode(e, A, t)
        }))
      } else this.appendChildNode(e, n, t)
    }, A.prototype.cloneNode = function (A, e) {
      if (za(A)) return document.createTextNode(A.data);
      if (!A.ownerDocument) return A.cloneNode(!1);
      var t = A.ownerDocument.defaultView;
      if (t && qa(A) && (Ac(A) || ec(A))) {
        var r = this.createElementClone(A);
        r.style.transitionProperty = "none";
        var n = t.getComputedStyle(A), s = t.getComputedStyle(A, ":before"), o = t.getComputedStyle(A, ":after");
        this.referenceElement === A && Ac(r) && (this.clonedReferenceElement = r), oc(r) && Gc(r);
        var i = this.counters.parse(new $i(this.context, n)), a = this.resolvePseudoContent(A, r, s, aa.BEFORE);
        hc(A) && (e = !0), ac(A) || this.cloneChildNodes(A, r, e), a && r.insertBefore(a, r.firstChild);
        var c = this.resolvePseudoContent(A, r, o, aa.AFTER);
        return c && r.appendChild(c), this.counters.pop(i), (n && (this.options.copyStyles || ec(A)) && !Bc(A) || e) && _c(n, r), 0 === A.scrollTop && 0 === A.scrollLeft || this.scrolledElements.push([r, A.scrollLeft, A.scrollTop]), (uc(A) || gc(A)) && (uc(r) || gc(r)) && (r.value = A.value), r
      }
      return A.cloneNode(!1)
    }, A.prototype.resolvePseudoContent = function (A, e, t, r) {
      var n = this;
      if (t) {
        var s = t.content, o = e.ownerDocument;
        if (o && s && "none" !== s && "-moz-alt-content" !== s && "none" !== t.display) {
          this.counters.parse(new $i(this.context, t));
          var i = new ji(this.context, t), a = o.createElement("html2canvaspseudoelement");
          _c(t, a), i.content.forEach((function (e) {
            if (0 === e.type) a.appendChild(o.createTextNode(e.value)); else if (22 === e.type) {
              var t = o.createElement("img");
              t.src = e.value, t.style.opacity = "1", a.appendChild(t)
            } else if (18 === e.type) {
              if ("attr" === e.name) {
                var r = e.values.filter(ys);
                r.length && a.appendChild(o.createTextNode(A.getAttribute(r[0].value) || ""))
              } else if ("counter" === e.name) {
                var s = e.values.filter(Is), c = s[0], B = s[1];
                if (c && ys(c)) {
                  var l = n.counters.getCounterValue(c.value), u = B && ys(B) ? ri.parse(n.context, B.value) : 3;
                  a.appendChild(o.createTextNode(Hc(l, u, !1)))
                }
              } else if ("counters" === e.name) {
                var g = e.values.filter(Is), w = (c = g[0], g[1]);
                B = g[2];
                if (c && ys(c)) {
                  var h = n.counters.getCounterValues(c.value), d = B && ys(B) ? ri.parse(n.context, B.value) : 3,
                    Q = w && 0 === w.type ? w.value : "", f = h.map((function (A) {
                      return Hc(A, d, !1)
                    })).join(Q);
                  a.appendChild(o.createTextNode(f))
                }
              }
            } else if (20 === e.type) switch (e.value) {
              case"open-quote":
                a.appendChild(o.createTextNode(Pi(i.quotes, n.quoteDepth++, !0)));
                break;
              case"close-quote":
                a.appendChild(o.createTextNode(Pi(i.quotes, --n.quoteDepth, !1)));
                break;
              default:
                a.appendChild(o.createTextNode(e.value))
            }
          })), a.className = Oc + " " + Vc;
          var c = r === aa.BEFORE ? " " + Oc : " " + Vc;
          return ec(e) ? e.className.baseValue += c : e.className += c, a
        }
      }
    }, A.destroy = function (A) {
      return !!A.parentNode && (A.parentNode.removeChild(A), !0)
    }, A
  }();
(ca = aa || (aa = {}))[ca.BEFORE = 0] = "BEFORE", ca[ca.AFTER = 1] = "AFTER";
var bc, Ic, Lc = function (A, e) {
  var t = A.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute("data-html2canvas-ignore", "true"), A.body.appendChild(t), t
}, Kc = function (A) {
  return new Promise((function (e) {
    A.complete ? e() : A.src ? (A.onload = e, A.onerror = e) : e()
  }))
}, xc = function (A) {
  return Promise.all([].slice.call(A.images, 0).map(Kc))
}, Sc = function (A) {
  return new Promise((function (e, t) {
    var r = A.contentWindow;
    if (!r) return t("No window assigned for iframe");
    var n = r.document;
    r.onload = A.onload = function () {
      r.onload = A.onload = null;
      var t = setInterval((function () {
        n.body.childNodes.length > 0 && "complete" === n.readyState && (clearInterval(t), e(A))
      }), 50)
    }
  }))
}, Dc = ["all", "d", "content"], _c = function (A, e) {
  for (var t = A.length - 1; t >= 0; t--) {
    var r = A.item(t);
    -1 === Dc.indexOf(r) && e.style.setProperty(r, A.getPropertyValue(r))
  }
  return e
}, Mc = function (A) {
  var e = "";
  return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e
}, kc = function (A, e, t) {
  A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t)
}, Tc = function (A) {
  var e = A[0], t = A[1], r = A[2];
  e.scrollLeft = t, e.scrollTop = r
}, Oc = "___html2canvas___pseudoelement_before", Vc = "___html2canvas___pseudoelement_after", Gc = function (A) {
  Rc(A, "." + Oc + ':before{\n    content: "" !important;\n    display: none !important;\n}\n         .' + Vc + ':after{\n    content: "" !important;\n    display: none !important;\n}')
}, Rc = function (A, e) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = e, A.appendChild(r)
  }
}, Pc = function () {
  function A() {
  }

  return A.getOrigin = function (e) {
    var t = A._link;
    return t ? (t.href = e, t.href = t.href, t.protocol + t.hostname + t.port) : "about:blank"
  }, A.isSameOrigin = function (e) {
    return A.getOrigin(e) === A._origin
  }, A.setContext = function (e) {
    A._link = e.document.createElement("a"), A._origin = A.getOrigin(e.location.href)
  }, A._origin = "about:blank", A
}(), Nc = function () {
  function A(A, e) {
    this.context = A, this._options = e, this._cache = {}
  }

  return A.prototype.addImage = function (A) {
    var e = Promise.resolve();
    return this.has(A) ? e : Zc(A) || Yc(A) ? ((this._cache[A] = this.loadImage(A)).catch((function () {
    })), e) : e
  }, A.prototype.match = function (A) {
    return this._cache[A]
  }, A.prototype.loadImage = function (A) {
    return Dr(this, void 0, void 0, (function () {
      var e, t, r, n, s = this;
      return _r(this, (function (o) {
        switch (o.label) {
          case 0:
            return e = Pc.isSameOrigin(A), t = !jc(A) && !0 === this._options.useCORS && Fa.SUPPORT_CORS_IMAGES && !e, r = !jc(A) && !e && !Zc(A) && "string" == typeof this._options.proxy && Fa.SUPPORT_CORS_XHR && !t, e || !1 !== this._options.allowTaint || jc(A) || Zc(A) || r || t ? (n = A, r ? [4, this.proxy(n)] : [3, 2]) : [2];
          case 1:
            n = o.sent(), o.label = 2;
          case 2:
            return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise((function (A, e) {
              var r = new Image;
              r.onload = function () {
                return A(r)
              }, r.onerror = e, ($c(n) || t) && (r.crossOrigin = "anonymous"), r.src = n, !0 === r.complete && setTimeout((function () {
                return A(r)
              }), 500), s._options.imageTimeout > 0 && setTimeout((function () {
                return e("Timed out (" + s._options.imageTimeout + "ms) loading image")
              }), s._options.imageTimeout)
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
    var e = this, t = this._options.proxy;
    if (!t) throw new Error("No proxy defined");
    var r = A.substring(0, 256);
    return new Promise((function (n, s) {
      var o = Fa.SUPPORT_RESPONSE_TYPE ? "blob" : "text", i = new XMLHttpRequest;
      i.onload = function () {
        if (200 === i.status) if ("text" === o) n(i.response); else {
          var A = new FileReader;
          A.addEventListener("load", (function () {
            return n(A.result)
          }), !1), A.addEventListener("error", (function (A) {
            return s(A)
          }), !1), A.readAsDataURL(i.response)
        } else s("Failed to proxy resource " + r + " with status code " + i.status)
      }, i.onerror = s;
      var a = t.indexOf("?") > -1 ? "&" : "?";
      if (i.open("GET", "" + t + a + "url=" + encodeURIComponent(A) + "&responseType=" + o), "text" !== o && i instanceof XMLHttpRequest && (i.responseType = o), e._options.imageTimeout) {
        var c = e._options.imageTimeout;
        i.timeout = c, i.ontimeout = function () {
          return s("Timed out (" + c + "ms) proxying " + r)
        }
      }
      i.send()
    }))
  }, A
}(), Jc = /^data:image\/svg\+xml/i, Xc = /^data:image\/.*;base64,/i, Wc = /^data:image\/.*/i, Yc = function (A) {
  return Fa.SUPPORT_SVG_DRAWING || !zc(A)
}, jc = function (A) {
  return Wc.test(A)
}, $c = function (A) {
  return Xc.test(A)
}, Zc = function (A) {
  return "blob" === A.substr(0, 4)
}, zc = function (A) {
  return "svg" === A.substr(-3).toLowerCase() || Jc.test(A)
}, qc = function () {
  function A(A, e) {
    this.type = 0, this.x = A, this.y = e
  }

  return A.prototype.add = function (e, t) {
    return new A(this.x + e, this.y + t)
  }, A
}(), AB = function (A, e, t) {
  return new qc(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t)
}, eB = function () {
  function A(A, e, t, r) {
    this.type = 1, this.start = A, this.startControl = e, this.endControl = t, this.end = r
  }

  return A.prototype.subdivide = function (e, t) {
    var r = AB(this.start, this.startControl, e), n = AB(this.startControl, this.endControl, e),
      s = AB(this.endControl, this.end, e), o = AB(r, n, e), i = AB(n, s, e), a = AB(o, i, e);
    return t ? new A(this.start, r, o, a) : new A(a, i, s, this.end)
  }, A.prototype.add = function (e, t) {
    return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t))
  }, A.prototype.reverse = function () {
    return new A(this.end, this.endControl, this.startControl, this.start)
  }, A
}(), tB = function (A) {
  return 1 === A.type
}, rB = function (A) {
  var e = A.styles, t = A.bounds, r = Ts(e.borderTopLeftRadius, t.width, t.height), n = r[0], s = r[1],
    o = Ts(e.borderTopRightRadius, t.width, t.height), i = o[0], a = o[1],
    c = Ts(e.borderBottomRightRadius, t.width, t.height), B = c[0], l = c[1],
    u = Ts(e.borderBottomLeftRadius, t.width, t.height), g = u[0], w = u[1], h = [];
  h.push((n + i) / t.width), h.push((g + B) / t.width), h.push((s + w) / t.height), h.push((a + l) / t.height);
  var d = Math.max.apply(Math, h);
  d > 1 && (n /= d, s /= d, i /= d, a /= d, B /= d, l /= d, g /= d, w /= d);
  var Q = t.width - i, f = t.height - l, p = t.width - B, C = t.height - w, U = e.borderTopWidth,
    F = e.borderRightWidth, m = e.borderBottomWidth, v = e.borderLeftWidth, y = Os(e.paddingTop, A.bounds.width),
    H = Os(e.paddingRight, A.bounds.width), E = Os(e.paddingBottom, A.bounds.width),
    b = Os(e.paddingLeft, A.bounds.width);
  this.topLeftBorderDoubleOuterBox = n > 0 || s > 0 ? nB(t.left + v / 3, t.top + U / 3, n - v / 3, s - U / 3, bc.TOP_LEFT) : new qc(t.left + v / 3, t.top + U / 3), this.topRightBorderDoubleOuterBox = n > 0 || s > 0 ? nB(t.left + Q, t.top + U / 3, i - F / 3, a - U / 3, bc.TOP_RIGHT) : new qc(t.left + t.width - F / 3, t.top + U / 3), this.bottomRightBorderDoubleOuterBox = B > 0 || l > 0 ? nB(t.left + p, t.top + f, B - F / 3, l - m / 3, bc.BOTTOM_RIGHT) : new qc(t.left + t.width - F / 3, t.top + t.height - m / 3), this.bottomLeftBorderDoubleOuterBox = g > 0 || w > 0 ? nB(t.left + v / 3, t.top + C, g - v / 3, w - m / 3, bc.BOTTOM_LEFT) : new qc(t.left + v / 3, t.top + t.height - m / 3), this.topLeftBorderDoubleInnerBox = n > 0 || s > 0 ? nB(t.left + 2 * v / 3, t.top + 2 * U / 3, n - 2 * v / 3, s - 2 * U / 3, bc.TOP_LEFT) : new qc(t.left + 2 * v / 3, t.top + 2 * U / 3), this.topRightBorderDoubleInnerBox = n > 0 || s > 0 ? nB(t.left + Q, t.top + 2 * U / 3, i - 2 * F / 3, a - 2 * U / 3, bc.TOP_RIGHT) : new qc(t.left + t.width - 2 * F / 3, t.top + 2 * U / 3), this.bottomRightBorderDoubleInnerBox = B > 0 || l > 0 ? nB(t.left + p, t.top + f, B - 2 * F / 3, l - 2 * m / 3, bc.BOTTOM_RIGHT) : new qc(t.left + t.width - 2 * F / 3, t.top + t.height - 2 * m / 3), this.bottomLeftBorderDoubleInnerBox = g > 0 || w > 0 ? nB(t.left + 2 * v / 3, t.top + C, g - 2 * v / 3, w - 2 * m / 3, bc.BOTTOM_LEFT) : new qc(t.left + 2 * v / 3, t.top + t.height - 2 * m / 3), this.topLeftBorderStroke = n > 0 || s > 0 ? nB(t.left + v / 2, t.top + U / 2, n - v / 2, s - U / 2, bc.TOP_LEFT) : new qc(t.left + v / 2, t.top + U / 2), this.topRightBorderStroke = n > 0 || s > 0 ? nB(t.left + Q, t.top + U / 2, i - F / 2, a - U / 2, bc.TOP_RIGHT) : new qc(t.left + t.width - F / 2, t.top + U / 2), this.bottomRightBorderStroke = B > 0 || l > 0 ? nB(t.left + p, t.top + f, B - F / 2, l - m / 2, bc.BOTTOM_RIGHT) : new qc(t.left + t.width - F / 2, t.top + t.height - m / 2), this.bottomLeftBorderStroke = g > 0 || w > 0 ? nB(t.left + v / 2, t.top + C, g - v / 2, w - m / 2, bc.BOTTOM_LEFT) : new qc(t.left + v / 2, t.top + t.height - m / 2), this.topLeftBorderBox = n > 0 || s > 0 ? nB(t.left, t.top, n, s, bc.TOP_LEFT) : new qc(t.left, t.top), this.topRightBorderBox = i > 0 || a > 0 ? nB(t.left + Q, t.top, i, a, bc.TOP_RIGHT) : new qc(t.left + t.width, t.top), this.bottomRightBorderBox = B > 0 || l > 0 ? nB(t.left + p, t.top + f, B, l, bc.BOTTOM_RIGHT) : new qc(t.left + t.width, t.top + t.height), this.bottomLeftBorderBox = g > 0 || w > 0 ? nB(t.left, t.top + C, g, w, bc.BOTTOM_LEFT) : new qc(t.left, t.top + t.height), this.topLeftPaddingBox = n > 0 || s > 0 ? nB(t.left + v, t.top + U, Math.max(0, n - v), Math.max(0, s - U), bc.TOP_LEFT) : new qc(t.left + v, t.top + U), this.topRightPaddingBox = i > 0 || a > 0 ? nB(t.left + Math.min(Q, t.width - F), t.top + U, Q > t.width + F ? 0 : Math.max(0, i - F), Math.max(0, a - U), bc.TOP_RIGHT) : new qc(t.left + t.width - F, t.top + U), this.bottomRightPaddingBox = B > 0 || l > 0 ? nB(t.left + Math.min(p, t.width - v), t.top + Math.min(f, t.height - m), Math.max(0, B - F), Math.max(0, l - m), bc.BOTTOM_RIGHT) : new qc(t.left + t.width - F, t.top + t.height - m), this.bottomLeftPaddingBox = g > 0 || w > 0 ? nB(t.left + v, t.top + Math.min(C, t.height - m), Math.max(0, g - v), Math.max(0, w - m), bc.BOTTOM_LEFT) : new qc(t.left + v, t.top + t.height - m), this.topLeftContentBox = n > 0 || s > 0 ? nB(t.left + v + b, t.top + U + y, Math.max(0, n - (v + b)), Math.max(0, s - (U + y)), bc.TOP_LEFT) : new qc(t.left + v + b, t.top + U + y), this.topRightContentBox = i > 0 || a > 0 ? nB(t.left + Math.min(Q, t.width + v + b), t.top + U + y, Q > t.width + v + b ? 0 : i - v + b, a - (U + y), bc.TOP_RIGHT) : new qc(t.left + t.width - (F + H), t.top + U + y), this.bottomRightContentBox = B > 0 || l > 0 ? nB(t.left + Math.min(p, t.width - (v + b)), t.top + Math.min(f, t.height + U + y), Math.max(0, B - (F + H)), l - (m + E), bc.BOTTOM_RIGHT) : new qc(t.left + t.width - (F + H), t.top + t.height - (m + E)), this.bottomLeftContentBox = g > 0 || w > 0 ? nB(t.left + v + b, t.top + C, Math.max(0, g - (v + b)), w - (m + E), bc.BOTTOM_LEFT) : new qc(t.left + v + b, t.top + t.height - (m + E))
};
(Ic = bc || (bc = {}))[Ic.TOP_LEFT = 0] = "TOP_LEFT", Ic[Ic.TOP_RIGHT = 1] = "TOP_RIGHT", Ic[Ic.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", Ic[Ic.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
var nB = function (A, e, t, r, n) {
  var s = (Math.sqrt(2) - 1) / 3 * 4, o = t * s, i = r * s, a = A + t, c = e + r;
  switch (n) {
    case bc.TOP_LEFT:
      return new eB(new qc(A, c), new qc(A, c - i), new qc(a - o, e), new qc(a, e));
    case bc.TOP_RIGHT:
      return new eB(new qc(A, e), new qc(A + o, e), new qc(a, c - i), new qc(a, c));
    case bc.BOTTOM_RIGHT:
      return new eB(new qc(a, e), new qc(a, e + i), new qc(A + o, c), new qc(A, c));
    case bc.BOTTOM_LEFT:
    default:
      return new eB(new qc(a, c), new qc(a - o, c), new qc(A, e + i), new qc(A, e))
  }
}, sB = function (A) {
  return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox]
}, oB = function (A) {
  return [A.topLeftPaddingBox, A.topRightPaddingBox, A.bottomRightPaddingBox, A.bottomLeftPaddingBox]
}, iB = function (A, e, t) {
  this.offsetX = A, this.offsetY = e, this.matrix = t, this.type = 0, this.target = 6
}, aB = function (A, e) {
  this.path = A, this.target = e, this.type = 1
}, cB = function (A) {
  this.opacity = A, this.type = 2, this.target = 6
}, BB = function (A) {
  return 1 === A.type
}, lB = function (A, e) {
  return A.length === e.length && A.some((function (A, t) {
    return A === e[t]
  }))
}, uB = function (A) {
  this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = []
}, gB = function () {
  function A(A, e) {
    if (this.container = A, this.parent = e, this.effects = [], this.curves = new rB(this.container), this.container.styles.opacity < 1 && this.effects.push(new cB(this.container.styles.opacity)), null !== this.container.styles.transform) {
      var t = this.container.bounds.left + this.container.styles.transformOrigin[0].number,
        r = this.container.bounds.top + this.container.styles.transformOrigin[1].number,
        n = this.container.styles.transform;
      this.effects.push(new iB(t, r, n))
    }
    if (0 !== this.container.styles.overflowX) {
      var s = sB(this.curves), o = oB(this.curves);
      lB(s, o) ? this.effects.push(new aB(s, 6)) : (this.effects.push(new aB(s, 2)), this.effects.push(new aB(o, 4)))
    }
  }

  return A.prototype.getEffects = function (A) {
    for (var e = -1 === [2, 3].indexOf(this.container.styles.position), t = this.parent, r = this.effects.slice(0); t;) {
      var n = t.effects.filter((function (A) {
        return !BB(A)
      }));
      if (e || 0 !== t.container.styles.position || !t.parent) {
        if (r.unshift.apply(r, n), e = -1 === [2, 3].indexOf(t.container.styles.position), 0 !== t.container.styles.overflowX) {
          var s = sB(t.curves), o = oB(t.curves);
          lB(s, o) || r.unshift(new aB(o, 6))
        }
      } else r.unshift.apply(r, n);
      t = t.parent
    }
    return r.filter((function (e) {
      return ki(e.target, A)
    }))
  }, A
}(), wB = function (A, e, t, r) {
  A.container.elements.forEach((function (n) {
    var s = ki(n.flags, 4), o = ki(n.flags, 2), i = new gB(n, A);
    ki(n.styles.display, 2048) && r.push(i);
    var a = ki(n.flags, 8) ? [] : r;
    if (s || o) {
      var c = s || n.styles.isPositioned() ? t : e, B = new uB(i);
      if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
        var l = n.styles.zIndex.order;
        if (l < 0) {
          var u = 0;
          c.negativeZIndex.some((function (A, e) {
            return l > A.element.container.styles.zIndex.order ? (u = e, !1) : u > 0
          })), c.negativeZIndex.splice(u, 0, B)
        } else if (l > 0) {
          var g = 0;
          c.positiveZIndex.some((function (A, e) {
            return l >= A.element.container.styles.zIndex.order ? (g = e + 1, !1) : g > 0
          })), c.positiveZIndex.splice(g, 0, B)
        } else c.zeroOrAutoZIndexOrTransformedOrOpacity.push(B)
      } else n.styles.isFloating() ? c.nonPositionedFloats.push(B) : c.nonPositionedInlineLevel.push(B);
      wB(i, B, s ? B : t, a)
    } else n.styles.isInlineLevel() ? e.inlineLevel.push(i) : e.nonInlineLevel.push(i), wB(i, e, t, a);
    ki(n.flags, 8) && hB(n, a)
  }))
}, hB = function (A, e) {
  for (var t = A instanceof Ta ? A.start : 1, r = A instanceof Ta && A.reversed, n = 0; n < e.length; n++) {
    var s = e[n];
    s.container instanceof ka && "number" == typeof s.container.value && 0 !== s.container.value && (t = s.container.value), s.listValue = Hc(t, s.container.styles.listStyleType, !0), t += r ? -1 : 1
  }
}, dB = function (A, e) {
  switch (e) {
    case 0:
      return fB(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
    case 1:
      return fB(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
    case 2:
      return fB(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
    default:
      return fB(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox)
  }
}, QB = function (A, e) {
  var t = [];
  return tB(A) ? t.push(A.subdivide(.5, !1)) : t.push(A), tB(e) ? t.push(e.subdivide(.5, !0)) : t.push(e), t
}, fB = function (A, e, t, r) {
  var n = [];
  return tB(A) ? n.push(A.subdivide(.5, !1)) : n.push(A), tB(t) ? n.push(t.subdivide(.5, !0)) : n.push(t), tB(r) ? n.push(r.subdivide(.5, !0).reverse()) : n.push(r), tB(e) ? n.push(e.subdivide(.5, !1).reverse()) : n.push(e), n
}, pB = function (A) {
  var e = A.bounds, t = A.styles;
  return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth))
}, CB = function (A) {
  var e = A.styles, t = A.bounds, r = Os(e.paddingLeft, t.width), n = Os(e.paddingRight, t.width),
    s = Os(e.paddingTop, t.width), o = Os(e.paddingBottom, t.width);
  return t.add(r + e.borderLeftWidth, s + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + s + o))
}, UB = function (A, e, t) {
  var r, n, s = (r = yB(A.styles.backgroundOrigin, e), n = A, 0 === r ? n.bounds : 2 === r ? CB(n) : pB(n)),
    o = function (A, e) {
      return 0 === A ? e.bounds : 2 === A ? CB(e) : pB(e)
    }(yB(A.styles.backgroundClip, e), A), i = vB(yB(A.styles.backgroundSize, e), t, s), a = i[0], c = i[1],
    B = Ts(yB(A.styles.backgroundPosition, e), s.width - a, s.height - c);
  return [HB(yB(A.styles.backgroundRepeat, e), B, i, s, o), Math.round(s.left + B[0]), Math.round(s.top + B[1]), a, c]
}, FB = function (A) {
  return ys(A) && A.value === lo.AUTO
}, mB = function (A) {
  return "number" == typeof A
}, vB = function (A, e, t) {
  var r = e[0], n = e[1], s = e[2], o = A[0], i = A[1];
  if (!o) return [0, 0];
  if (Ss(o) && i && Ss(i)) return [Os(o, t.width), Os(i, t.height)];
  var a = mB(s);
  if (ys(o) && (o.value === lo.CONTAIN || o.value === lo.COVER)) return mB(s) ? t.width / t.height < s != (o.value === lo.COVER) ? [t.width, t.width / s] : [t.height * s, t.height] : [t.width, t.height];
  var c = mB(r), B = mB(n), l = c || B;
  if (FB(o) && (!i || FB(i))) return c && B ? [r, n] : a || l ? l && a ? [c ? r : n * s, B ? n : r / s] : [c ? r : t.width, B ? n : t.height] : [t.width, t.height];
  if (a) {
    var u = 0, g = 0;
    return Ss(o) ? u = Os(o, t.width) : Ss(i) && (g = Os(i, t.height)), FB(o) ? u = g * s : i && !FB(i) || (g = u / s), [u, g]
  }
  var w = null, h = null;
  if (Ss(o) ? w = Os(o, t.width) : i && Ss(i) && (h = Os(i, t.height)), null === w || i && !FB(i) || (h = c && B ? w / r * n : t.height), null !== h && FB(o) && (w = c && B ? h / n * r : t.width), null !== w && null !== h) return [w, h];
  throw new Error("Unable to calculate background-size for element")
}, yB = function (A, e) {
  var t = A[e];
  return void 0 === t ? A[0] : t
}, HB = function (A, e, t, r, n) {
  var s = e[0], o = e[1], i = t[0], a = t[1];
  switch (A) {
    case 2:
      return [new qc(Math.round(r.left), Math.round(r.top + o)), new qc(Math.round(r.left + r.width), Math.round(r.top + o)), new qc(Math.round(r.left + r.width), Math.round(a + r.top + o)), new qc(Math.round(r.left), Math.round(a + r.top + o))];
    case 3:
      return [new qc(Math.round(r.left + s), Math.round(r.top)), new qc(Math.round(r.left + s + i), Math.round(r.top)), new qc(Math.round(r.left + s + i), Math.round(r.height + r.top)), new qc(Math.round(r.left + s), Math.round(r.height + r.top))];
    case 1:
      return [new qc(Math.round(r.left + s), Math.round(r.top + o)), new qc(Math.round(r.left + s + i), Math.round(r.top + o)), new qc(Math.round(r.left + s + i), Math.round(r.top + o + a)), new qc(Math.round(r.left + s), Math.round(r.top + o + a))];
    default:
      return [new qc(Math.round(n.left), Math.round(n.top)), new qc(Math.round(n.left + n.width), Math.round(n.top)), new qc(Math.round(n.left + n.width), Math.round(n.height + n.top)), new qc(Math.round(n.left), Math.round(n.height + n.top))]
  }
}, EB = function () {
  function A(A) {
    this._data = {}, this._document = A
  }

  return A.prototype.parseMetrics = function (A, e) {
    var t = this._document.createElement("div"), r = this._document.createElement("img"),
      n = this._document.createElement("span"), s = this._document.body;
    t.style.visibility = "hidden", t.style.fontFamily = A, t.style.fontSize = e, t.style.margin = "0", t.style.padding = "0", t.style.whiteSpace = "nowrap", s.appendChild(t), r.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", r.width = 1, r.height = 1, r.style.margin = "0", r.style.padding = "0", r.style.verticalAlign = "baseline", n.style.fontFamily = A, n.style.fontSize = e, n.style.margin = "0", n.style.padding = "0", n.appendChild(this._document.createTextNode("Hidden Text")), t.appendChild(n), t.appendChild(r);
    var o = r.offsetTop - n.offsetTop + 2;
    t.removeChild(n), t.appendChild(this._document.createTextNode("Hidden Text")), t.style.lineHeight = "normal", r.style.verticalAlign = "super";
    var i = r.offsetTop - t.offsetTop + 2;
    return s.removeChild(t), {baseline: o, middle: i}
  }, A.prototype.getMetrics = function (A, e) {
    var t = A + " " + e;
    return void 0 === this._data[t] && (this._data[t] = this.parseMetrics(A, e)), this._data[t]
  }, A
}(), bB = function (A, e) {
  this.context = A, this.options = e
}, IB = function (A) {
  function e(e, t) {
    var r = A.call(this, e, t) || this;
    return r._activeEffects = [], r.canvas = t.canvas ? t.canvas : document.createElement("canvas"), r.ctx = r.canvas.getContext("2d"), t.canvas || (r.canvas.width = Math.floor(t.width * t.scale), r.canvas.height = Math.floor(t.height * t.scale), r.canvas.style.width = t.width + "px", r.canvas.style.height = t.height + "px"), r.fontMetrics = new EB(document), r.ctx.scale(r.options.scale, r.options.scale), r.ctx.translate(-t.x, -t.y), r.ctx.textBaseline = "bottom", r._activeEffects = [], r.context.logger.debug("Canvas renderer initialized (" + t.width + "x" + t.height + ") with scale " + t.scale), r
  }

  return xr(e, A), e.prototype.applyEffects = function (A) {
    for (var e = this; this._activeEffects.length;) this.popEffect();
    A.forEach((function (A) {
      return e.applyEffect(A)
    }))
  }, e.prototype.applyEffect = function (A) {
    this.ctx.save(), function (A) {
      return 2 === A.type
    }(A) && (this.ctx.globalAlpha = A.opacity), function (A) {
      return 0 === A.type
    }(A) && (this.ctx.translate(A.offsetX, A.offsetY), this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]), this.ctx.translate(-A.offsetX, -A.offsetY)), BB(A) && (this.path(A.path), this.ctx.clip()), this._activeEffects.push(A)
  }, e.prototype.popEffect = function () {
    this._activeEffects.pop(), this.ctx.restore()
  }, e.prototype.renderStack = function (A) {
    return Dr(this, void 0, void 0, (function () {
      return _r(this, (function (e) {
        switch (e.label) {
          case 0:
            return A.element.container.styles.isVisible() ? [4, this.renderStackContent(A)] : [3, 2];
          case 1:
            e.sent(), e.label = 2;
          case 2:
            return [2]
        }
      }))
    }))
  }, e.prototype.renderNode = function (A) {
    return Dr(this, void 0, void 0, (function () {
      return _r(this, (function (e) {
        switch (e.label) {
          case 0:
            return ki(A.container.flags, 16), A.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(A)] : [3, 3];
          case 1:
            return e.sent(), [4, this.renderNodeContent(A)];
          case 2:
            e.sent(), e.label = 3;
          case 3:
            return [2]
        }
      }))
    }))
  }, e.prototype.renderTextWithLetterSpacing = function (A, e, t) {
    var r = this;
    0 === e ? this.ctx.fillText(A.text, A.bounds.left, A.bounds.top + t) : Ha(A.text).reduce((function (e, n) {
      return r.ctx.fillText(n, e, A.bounds.top + t), e + r.ctx.measureText(n).width
    }), A.bounds.left)
  }, e.prototype.createFontStyle = function (A) {
    var e = A.fontVariant.filter((function (A) {
        return "normal" === A || "small-caps" === A
      })).join(""), t = DB(A.fontFamily).join(", "),
      r = ms(A.fontSize) ? "" + A.fontSize.number + A.fontSize.unit : A.fontSize.number + "px";
    return [[A.fontStyle, e, A.fontWeight, r, t].join(" "), t, r]
  }, e.prototype.renderTextNode = function (A, e) {
    return Dr(this, void 0, void 0, (function () {
      var t, r, n, s, o, i, a, c, B = this;
      return _r(this, (function (l) {
        return t = this.createFontStyle(e), r = t[0], n = t[1], s = t[2], this.ctx.font = r, this.ctx.direction = 1 === e.direction ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", o = this.fontMetrics.getMetrics(n, s), i = o.baseline, a = o.middle, c = e.paintOrder, A.textBounds.forEach((function (A) {
          c.forEach((function (t) {
            switch (t) {
              case 0:
                B.ctx.fillStyle = Xs(e.color), B.renderTextWithLetterSpacing(A, e.letterSpacing, i);
                var r = e.textShadow;
                r.length && A.text.trim().length && (r.slice(0).reverse().forEach((function (t) {
                  B.ctx.shadowColor = Xs(t.color), B.ctx.shadowOffsetX = t.offsetX.number * B.options.scale, B.ctx.shadowOffsetY = t.offsetY.number * B.options.scale, B.ctx.shadowBlur = t.blur.number, B.renderTextWithLetterSpacing(A, e.letterSpacing, i)
                })), B.ctx.shadowColor = "", B.ctx.shadowOffsetX = 0, B.ctx.shadowOffsetY = 0, B.ctx.shadowBlur = 0), e.textDecorationLine.length && (B.ctx.fillStyle = Xs(e.textDecorationColor || e.color), e.textDecorationLine.forEach((function (e) {
                  switch (e) {
                    case 1:
                      B.ctx.fillRect(A.bounds.left, Math.round(A.bounds.top + i), A.bounds.width, 1);
                      break;
                    case 2:
                      B.ctx.fillRect(A.bounds.left, Math.round(A.bounds.top), A.bounds.width, 1);
                      break;
                    case 3:
                      B.ctx.fillRect(A.bounds.left, Math.ceil(A.bounds.top + a), A.bounds.width, 1)
                  }
                })));
                break;
              case 1:
                e.webkitTextStrokeWidth && A.text.trim().length && (B.ctx.strokeStyle = Xs(e.webkitTextStrokeColor), B.ctx.lineWidth = e.webkitTextStrokeWidth, B.ctx.lineJoin = window.chrome ? "miter" : "round", B.ctx.strokeText(A.text, A.bounds.left, A.bounds.top + i)), B.ctx.strokeStyle = "", B.ctx.lineWidth = 0, B.ctx.lineJoin = "miter"
            }
          }))
        })), [2]
      }))
    }))
  }, e.prototype.renderReplacedElement = function (A, e, t) {
    if (t && A.intrinsicWidth > 0 && A.intrinsicHeight > 0) {
      var r = CB(A), n = oB(e);
      this.path(n), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(t, 0, 0, A.intrinsicWidth, A.intrinsicHeight, r.left, r.top, r.width, r.height), this.ctx.restore()
    }
  }, e.prototype.renderNodeContent = function (A) {
    return Dr(this, void 0, void 0, (function () {
      var t, r, n, s, o, i, a, c, B, l, u, g, w, h, d, Q, f, p;
      return _r(this, (function (C) {
        switch (C.label) {
          case 0:
            this.applyEffects(A.getEffects(4)), t = A.container, r = A.curves, n = t.styles, s = 0, o = t.textNodes, C.label = 1;
          case 1:
            return s < o.length ? (i = o[s], [4, this.renderTextNode(i, n)]) : [3, 4];
          case 2:
            C.sent(), C.label = 3;
          case 3:
            return s++, [3, 1];
          case 4:
            if (!(t instanceof Da)) return [3, 8];
            C.label = 5;
          case 5:
            return C.trys.push([5, 7, , 8]), [4, this.context.cache.match(t.src)];
          case 6:
            return d = C.sent(), this.renderReplacedElement(t, r, d), [3, 8];
          case 7:
            return C.sent(), this.context.logger.error("Error loading image " + t.src), [3, 8];
          case 8:
            if (t instanceof _a && this.renderReplacedElement(t, r, t.canvas), !(t instanceof Ma)) return [3, 12];
            C.label = 9;
          case 9:
            return C.trys.push([9, 11, , 12]), [4, this.context.cache.match(t.svg)];
          case 10:
            return d = C.sent(), this.renderReplacedElement(t, r, d), [3, 12];
          case 11:
            return C.sent(), this.context.logger.error("Error loading svg " + t.svg.substring(0, 255)), [3, 12];
          case 12:
            return t instanceof Ja && t.tree ? [4, new e(this.context, {
              scale: this.options.scale,
              backgroundColor: t.backgroundColor,
              x: 0,
              y: 0,
              width: t.width,
              height: t.height
            }).render(t.tree)] : [3, 14];
          case 13:
            a = C.sent(), t.width && t.height && this.ctx.drawImage(a, 0, 0, t.width, t.height, t.bounds.left, t.bounds.top, t.bounds.width, t.bounds.height), C.label = 14;
          case 14:
            if (t instanceof Ra && (c = Math.min(t.bounds.width, t.bounds.height), "checkbox" === t.type ? t.checked && (this.ctx.save(), this.path([new qc(t.bounds.left + .39363 * c, t.bounds.top + .79 * c), new qc(t.bounds.left + .16 * c, t.bounds.top + .5549 * c), new qc(t.bounds.left + .27347 * c, t.bounds.top + .44071 * c), new qc(t.bounds.left + .39694 * c, t.bounds.top + .5649 * c), new qc(t.bounds.left + .72983 * c, t.bounds.top + .23 * c), new qc(t.bounds.left + .84 * c, t.bounds.top + .34085 * c), new qc(t.bounds.left + .39363 * c, t.bounds.top + .79 * c)]), this.ctx.fillStyle = Xs(707406591), this.ctx.fill(), this.ctx.restore()) : "radio" === t.type && t.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(t.bounds.left + c / 2, t.bounds.top + c / 2, c / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = Xs(707406591), this.ctx.fill(), this.ctx.restore())), LB(t) && t.value.length) {
              switch (B = this.createFontStyle(n), f = B[0], l = B[1], u = this.fontMetrics.getMetrics(f, l).baseline, this.ctx.font = f, this.ctx.fillStyle = Xs(n.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = xB(t.styles.textAlign), p = CB(t), g = 0, t.styles.textAlign) {
                case 1:
                  g += p.width / 2;
                  break;
                case 2:
                  g += p.width
              }
              w = p.add(g, 0, 0, -p.height / 2 + 1), this.ctx.save(), this.path([new qc(p.left, p.top), new qc(p.left + p.width, p.top), new qc(p.left + p.width, p.top + p.height), new qc(p.left, p.top + p.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new ma(t.value, w), n.letterSpacing, u), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left"
            }
            if (!ki(t.styles.display, 2048)) return [3, 20];
            if (null === t.styles.listStyleImage) return [3, 19];
            if (0 !== (h = t.styles.listStyleImage).type) return [3, 18];
            d = void 0, Q = h.url, C.label = 15;
          case 15:
            return C.trys.push([15, 17, , 18]), [4, this.context.cache.match(Q)];
          case 16:
            return d = C.sent(), this.ctx.drawImage(d, t.bounds.left - (d.width + 10), t.bounds.top), [3, 18];
          case 17:
            return C.sent(), this.context.logger.error("Error loading list-style-image " + Q), [3, 18];
          case 18:
            return [3, 20];
          case 19:
            A.listValue && -1 !== t.styles.listStyleType && (f = this.createFontStyle(n)[0], this.ctx.font = f, this.ctx.fillStyle = Xs(n.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", p = new Mr(t.bounds.left, t.bounds.top + Os(t.styles.paddingTop, t.bounds.width), t.bounds.width, Ai(n.lineHeight, n.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new ma(A.listValue, p), n.letterSpacing, Ai(n.lineHeight, n.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), C.label = 20;
          case 20:
            return [2]
        }
      }))
    }))
  }, e.prototype.renderStackContent = function (A) {
    return Dr(this, void 0, void 0, (function () {
      var e, t, r, n, s, o, i, a, c, B, l, u, g, w, h;
      return _r(this, (function (d) {
        switch (d.label) {
          case 0:
            return ki(A.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(A.element)];
          case 1:
            d.sent(), e = 0, t = A.negativeZIndex, d.label = 2;
          case 2:
            return e < t.length ? (h = t[e], [4, this.renderStack(h)]) : [3, 5];
          case 3:
            d.sent(), d.label = 4;
          case 4:
            return e++, [3, 2];
          case 5:
            return [4, this.renderNodeContent(A.element)];
          case 6:
            d.sent(), r = 0, n = A.nonInlineLevel, d.label = 7;
          case 7:
            return r < n.length ? (h = n[r], [4, this.renderNode(h)]) : [3, 10];
          case 8:
            d.sent(), d.label = 9;
          case 9:
            return r++, [3, 7];
          case 10:
            s = 0, o = A.nonPositionedFloats, d.label = 11;
          case 11:
            return s < o.length ? (h = o[s], [4, this.renderStack(h)]) : [3, 14];
          case 12:
            d.sent(), d.label = 13;
          case 13:
            return s++, [3, 11];
          case 14:
            i = 0, a = A.nonPositionedInlineLevel, d.label = 15;
          case 15:
            return i < a.length ? (h = a[i], [4, this.renderStack(h)]) : [3, 18];
          case 16:
            d.sent(), d.label = 17;
          case 17:
            return i++, [3, 15];
          case 18:
            c = 0, B = A.inlineLevel, d.label = 19;
          case 19:
            return c < B.length ? (h = B[c], [4, this.renderNode(h)]) : [3, 22];
          case 20:
            d.sent(), d.label = 21;
          case 21:
            return c++, [3, 19];
          case 22:
            l = 0, u = A.zeroOrAutoZIndexOrTransformedOrOpacity, d.label = 23;
          case 23:
            return l < u.length ? (h = u[l], [4, this.renderStack(h)]) : [3, 26];
          case 24:
            d.sent(), d.label = 25;
          case 25:
            return l++, [3, 23];
          case 26:
            g = 0, w = A.positiveZIndex, d.label = 27;
          case 27:
            return g < w.length ? (h = w[g], [4, this.renderStack(h)]) : [3, 30];
          case 28:
            d.sent(), d.label = 29;
          case 29:
            return g++, [3, 27];
          case 30:
            return [2]
        }
      }))
    }))
  }, e.prototype.mask = function (A) {
    this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(A.slice(0).reverse()), this.ctx.closePath()
  }, e.prototype.path = function (A) {
    this.ctx.beginPath(), this.formatPath(A), this.ctx.closePath()
  }, e.prototype.formatPath = function (A) {
    var e = this;
    A.forEach((function (A, t) {
      var r = tB(A) ? A.start : A;
      0 === t ? e.ctx.moveTo(r.x, r.y) : e.ctx.lineTo(r.x, r.y), tB(A) && e.ctx.bezierCurveTo(A.startControl.x, A.startControl.y, A.endControl.x, A.endControl.y, A.end.x, A.end.y)
    }))
  }, e.prototype.renderRepeat = function (A, e, t, r) {
    this.path(A), this.ctx.fillStyle = e, this.ctx.translate(t, r), this.ctx.fill(), this.ctx.translate(-t, -r)
  }, e.prototype.resizeImage = function (A, e, t) {
    var r;
    if (A.width === e && A.height === t) return A;
    var n = (null !== (r = this.canvas.ownerDocument) && void 0 !== r ? r : document).createElement("canvas");
    return n.width = Math.max(1, e), n.height = Math.max(1, t), n.getContext("2d").drawImage(A, 0, 0, A.width, A.height, 0, 0, e, t), n
  }, e.prototype.renderBackgroundImage = function (A) {
    return Dr(this, void 0, void 0, (function () {
      var e, t, r, n, s, o;
      return _r(this, (function (i) {
        switch (i.label) {
          case 0:
            e = A.styles.backgroundImage.length - 1, t = function (t) {
              var n, s, o, i, a, c, B, l, u, g, w, h, d, Q, f, p, C, U, F, m, v, y, H, E, b, I, L, K, x, S, D;
              return _r(this, (function (_) {
                switch (_.label) {
                  case 0:
                    if (0 !== t.type) return [3, 5];
                    n = void 0, s = t.url, _.label = 1;
                  case 1:
                    return _.trys.push([1, 3, , 4]), [4, r.context.cache.match(s)];
                  case 2:
                    return n = _.sent(), [3, 4];
                  case 3:
                    return _.sent(), r.context.logger.error("Error loading background-image " + s), [3, 4];
                  case 4:
                    return n && (o = UB(A, e, [n.width, n.height, n.width / n.height]), p = o[0], y = o[1], H = o[2], F = o[3], m = o[4], Q = r.ctx.createPattern(r.resizeImage(n, F, m), "repeat"), r.renderRepeat(p, Q, y, H)), [3, 6];
                  case 5:
                    1 === t.type ? (i = UB(A, e, [null, null, null]), p = i[0], y = i[1], H = i[2], F = i[3], m = i[4], a = so(t.angle, F, m), c = a[0], B = a[1], l = a[2], u = a[3], g = a[4], (w = document.createElement("canvas")).width = F, w.height = m, h = w.getContext("2d"), d = h.createLinearGradient(B, u, l, g), no(t.stops, c).forEach((function (A) {
                      return d.addColorStop(A.stop, Xs(A.color))
                    })), h.fillStyle = d, h.fillRect(0, 0, F, m), F > 0 && m > 0 && (Q = r.ctx.createPattern(w, "repeat"), r.renderRepeat(p, Q, y, H))) : function (A) {
                      return 2 === A.type
                    }(t) && (f = UB(A, e, [null, null, null]), p = f[0], C = f[1], U = f[2], F = f[3], m = f[4], v = 0 === t.position.length ? [Ms] : t.position, y = Os(v[0], F), H = Os(v[v.length - 1], m), E = function (A, e, t, r, n) {
                      var s = 0, o = 0;
                      switch (A.size) {
                        case 0:
                          0 === A.shape ? s = o = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : 1 === A.shape && (s = Math.min(Math.abs(e), Math.abs(e - r)), o = Math.min(Math.abs(t), Math.abs(t - n)));
                          break;
                        case 2:
                          if (0 === A.shape) s = o = Math.min(oo(e, t), oo(e, t - n), oo(e - r, t), oo(e - r, t - n)); else if (1 === A.shape) {
                            var i = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r)),
                              a = io(r, n, e, t, !0), c = a[0], B = a[1];
                            o = i * (s = oo(c - e, (B - t) / i))
                          }
                          break;
                        case 1:
                          0 === A.shape ? s = o = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : 1 === A.shape && (s = Math.max(Math.abs(e), Math.abs(e - r)), o = Math.max(Math.abs(t), Math.abs(t - n)));
                          break;
                        case 3:
                          if (0 === A.shape) s = o = Math.max(oo(e, t), oo(e, t - n), oo(e - r, t), oo(e - r, t - n)); else if (1 === A.shape) {
                            i = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r));
                            var l = io(r, n, e, t, !1);
                            c = l[0], B = l[1], o = i * (s = oo(c - e, (B - t) / i))
                          }
                      }
                      return Array.isArray(A.size) && (s = Os(A.size[0], r), o = 2 === A.size.length ? Os(A.size[1], n) : s), [s, o]
                    }(t, y, H, F, m), b = E[0], I = E[1], b > 0 && I > 0 && (L = r.ctx.createRadialGradient(C + y, U + H, 0, C + y, U + H, b), no(t.stops, 2 * b).forEach((function (A) {
                      return L.addColorStop(A.stop, Xs(A.color))
                    })), r.path(p), r.ctx.fillStyle = L, b !== I ? (K = A.bounds.left + .5 * A.bounds.width, x = A.bounds.top + .5 * A.bounds.height, D = 1 / (S = I / b), r.ctx.save(), r.ctx.translate(K, x), r.ctx.transform(1, 0, 0, S, 0, 0), r.ctx.translate(-K, -x), r.ctx.fillRect(C, D * (U - x) + x, F, m * D), r.ctx.restore()) : r.ctx.fill())), _.label = 6;
                  case 6:
                    return e--, [2]
                }
              }))
            }, r = this, n = 0, s = A.styles.backgroundImage.slice(0).reverse(), i.label = 1;
          case 1:
            return n < s.length ? (o = s[n], [5, t(o)]) : [3, 4];
          case 2:
            i.sent(), i.label = 3;
          case 3:
            return n++, [3, 1];
          case 4:
            return [2]
        }
      }))
    }))
  }, e.prototype.renderSolidBorder = function (A, e, t) {
    return Dr(this, void 0, void 0, (function () {
      return _r(this, (function (r) {
        return this.path(dB(t, e)), this.ctx.fillStyle = Xs(A), this.ctx.fill(), [2]
      }))
    }))
  }, e.prototype.renderDoubleBorder = function (A, e, t, r) {
    return Dr(this, void 0, void 0, (function () {
      var n, s;
      return _r(this, (function (o) {
        switch (o.label) {
          case 0:
            return e < 3 ? [4, this.renderSolidBorder(A, t, r)] : [3, 2];
          case 1:
            return o.sent(), [2];
          case 2:
            return n = function (A, e) {
              switch (e) {
                case 0:
                  return fB(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
                case 1:
                  return fB(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
                case 2:
                  return fB(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
                default:
                  return fB(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox)
              }
            }(r, t), this.path(n), this.ctx.fillStyle = Xs(A), this.ctx.fill(), s = function (A, e) {
              switch (e) {
                case 0:
                  return fB(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
                case 1:
                  return fB(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
                case 2:
                  return fB(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
                default:
                  return fB(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox)
              }
            }(r, t), this.path(s), this.ctx.fill(), [2]
        }
      }))
    }))
  }, e.prototype.renderNodeBackgroundAndBorders = function (A) {
    return Dr(this, void 0, void 0, (function () {
      var e, t, r, n, s, o, i, a, c = this;
      return _r(this, (function (B) {
        switch (B.label) {
          case 0:
            return this.applyEffects(A.getEffects(2)), e = A.container.styles, t = !Js(e.backgroundColor) || e.backgroundImage.length, r = [{
              style: e.borderTopStyle,
              color: e.borderTopColor,
              width: e.borderTopWidth
            }, {
              style: e.borderRightStyle,
              color: e.borderRightColor,
              width: e.borderRightWidth
            }, {
              style: e.borderBottomStyle,
              color: e.borderBottomColor,
              width: e.borderBottomWidth
            }, {
              style: e.borderLeftStyle,
              color: e.borderLeftColor,
              width: e.borderLeftWidth
            }], n = KB(yB(e.backgroundClip, 0), A.curves), t || e.boxShadow.length ? (this.ctx.save(), this.path(n), this.ctx.clip(), Js(e.backgroundColor) || (this.ctx.fillStyle = Xs(e.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(A.container)]) : [3, 2];
          case 1:
            B.sent(), this.ctx.restore(), e.boxShadow.slice(0).reverse().forEach((function (e) {
              c.ctx.save();
              var t, r, n, s, o, i = sB(A.curves), a = e.inset ? 0 : 1e4,
                B = (t = i, r = -a + (e.inset ? 1 : -1) * e.spread.number, n = (e.inset ? 1 : -1) * e.spread.number, s = e.spread.number * (e.inset ? -2 : 2), o = e.spread.number * (e.inset ? -2 : 2), t.map((function (A, e) {
                  switch (e) {
                    case 0:
                      return A.add(r, n);
                    case 1:
                      return A.add(r + s, n);
                    case 2:
                      return A.add(r + s, n + o);
                    case 3:
                      return A.add(r, n + o)
                  }
                  return A
                })));
              e.inset ? (c.path(i), c.ctx.clip(), c.mask(B)) : (c.mask(i), c.ctx.clip(), c.path(B)), c.ctx.shadowOffsetX = e.offsetX.number + a, c.ctx.shadowOffsetY = e.offsetY.number, c.ctx.shadowColor = Xs(e.color), c.ctx.shadowBlur = e.blur.number, c.ctx.fillStyle = e.inset ? Xs(e.color) : "rgba(0,0,0,1)", c.ctx.fill(), c.ctx.restore()
            })), B.label = 2;
          case 2:
            s = 0, o = 0, i = r, B.label = 3;
          case 3:
            return o < i.length ? 0 !== (a = i[o]).style && !Js(a.color) && a.width > 0 ? 2 !== a.style ? [3, 5] : [4, this.renderDashedDottedBorder(a.color, a.width, s, A.curves, 2)] : [3, 11] : [3, 13];
          case 4:
            return B.sent(), [3, 11];
          case 5:
            return 3 !== a.style ? [3, 7] : [4, this.renderDashedDottedBorder(a.color, a.width, s, A.curves, 3)];
          case 6:
            return B.sent(), [3, 11];
          case 7:
            return 4 !== a.style ? [3, 9] : [4, this.renderDoubleBorder(a.color, a.width, s, A.curves)];
          case 8:
            return B.sent(), [3, 11];
          case 9:
            return [4, this.renderSolidBorder(a.color, s, A.curves)];
          case 10:
            B.sent(), B.label = 11;
          case 11:
            s++, B.label = 12;
          case 12:
            return o++, [3, 3];
          case 13:
            return [2]
        }
      }))
    }))
  }, e.prototype.renderDashedDottedBorder = function (A, e, t, r, n) {
    return Dr(this, void 0, void 0, (function () {
      var s, o, i, a, c, B, l, u, g, w, h, d, Q, f, p, C;
      return _r(this, (function (U) {
        return this.ctx.save(), s = function (A, e) {
          switch (e) {
            case 0:
              return QB(A.topLeftBorderStroke, A.topRightBorderStroke);
            case 1:
              return QB(A.topRightBorderStroke, A.bottomRightBorderStroke);
            case 2:
              return QB(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
            default:
              return QB(A.bottomLeftBorderStroke, A.topLeftBorderStroke)
          }
        }(r, t), o = dB(r, t), 2 === n && (this.path(o), this.ctx.clip()), tB(o[0]) ? (i = o[0].start.x, a = o[0].start.y) : (i = o[0].x, a = o[0].y), tB(o[1]) ? (c = o[1].end.x, B = o[1].end.y) : (c = o[1].x, B = o[1].y), l = 0 === t || 2 === t ? Math.abs(i - c) : Math.abs(a - B), this.ctx.beginPath(), 3 === n ? this.formatPath(s) : this.formatPath(o.slice(0, 2)), u = e < 3 ? 3 * e : 2 * e, g = e < 3 ? 2 * e : e, 3 === n && (u = e, g = e), w = !0, l <= 2 * u ? w = !1 : l <= 2 * u + g ? (u *= h = l / (2 * u + g), g *= h) : (d = Math.floor((l + g) / (u + g)), Q = (l - d * u) / (d - 1), g = (f = (l - (d + 1) * u) / d) <= 0 || Math.abs(g - Q) < Math.abs(g - f) ? Q : f), w && (3 === n ? this.ctx.setLineDash([0, u + g]) : this.ctx.setLineDash([u, g])), 3 === n ? (this.ctx.lineCap = "round", this.ctx.lineWidth = e) : this.ctx.lineWidth = 2 * e + 1.1, this.ctx.strokeStyle = Xs(A), this.ctx.stroke(), this.ctx.setLineDash([]), 2 === n && (tB(o[0]) && (p = o[3], C = o[0], this.ctx.beginPath(), this.formatPath([new qc(p.end.x, p.end.y), new qc(C.start.x, C.start.y)]), this.ctx.stroke()), tB(o[1]) && (p = o[1], C = o[2], this.ctx.beginPath(), this.formatPath([new qc(p.end.x, p.end.y), new qc(C.start.x, C.start.y)]), this.ctx.stroke())), this.ctx.restore(), [2]
      }))
    }))
  }, e.prototype.render = function (A) {
    return Dr(this, void 0, void 0, (function () {
      var e;
      return _r(this, (function (t) {
        switch (t.label) {
          case 0:
            return this.options.backgroundColor && (this.ctx.fillStyle = Xs(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = new gB(A, null), n = new uB(r), wB(r, n, n, s = []), hB(r.container, s), e = n, [4, this.renderStack(e)];
          case 1:
            return t.sent(), this.applyEffects([]), [2, this.canvas]
        }
        var r, n, s
      }))
    }))
  }, e
}(bB), LB = function (A) {
  return A instanceof Na || (A instanceof Pa || A instanceof Ra && "radio" !== A.type && "checkbox" !== A.type)
}, KB = function (A, e) {
  switch (A) {
    case 0:
      return sB(e);
    case 2:
      return function (A) {
        return [A.topLeftContentBox, A.topRightContentBox, A.bottomRightContentBox, A.bottomLeftContentBox]
      }(e);
    default:
      return oB(e)
  }
}, xB = function (A) {
  switch (A) {
    case 1:
      return "center";
    case 2:
      return "right";
    default:
      return "left"
  }
}, SB = ["-apple-system", "system-ui"], DB = function (A) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter((function (A) {
    return -1 === SB.indexOf(A)
  })) : A
}, _B = function (A) {
  function e(e, t) {
    var r = A.call(this, e, t) || this;
    return r.canvas = t.canvas ? t.canvas : document.createElement("canvas"), r.ctx = r.canvas.getContext("2d"), r.options = t, r.canvas.width = Math.floor(t.width * t.scale), r.canvas.height = Math.floor(t.height * t.scale), r.canvas.style.width = t.width + "px", r.canvas.style.height = t.height + "px", r.ctx.scale(r.options.scale, r.options.scale), r.ctx.translate(-t.x, -t.y), r.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + t.width + "x" + t.height + " at " + t.x + "," + t.y + ") with scale " + t.scale), r
  }

  return xr(e, A), e.prototype.render = function (A) {
    return Dr(this, void 0, void 0, (function () {
      var e, t;
      return _r(this, (function (r) {
        switch (r.label) {
          case 0:
            return e = Ca(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, A), [4, MB(e)];
          case 1:
            return t = r.sent(), this.options.backgroundColor && (this.ctx.fillStyle = Xs(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(t, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas]
        }
      }))
    }))
  }, e
}(bB), MB = function (A) {
  return new Promise((function (e, t) {
    var r = new Image;
    r.onload = function () {
      e(r)
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(A))
  }))
}, kB = function () {
  function A(A) {
    var e = A.id, t = A.enabled;
    this.id = e, this.enabled = t, this.start = Date.now()
  }

  return A.prototype.debug = function () {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.debug || this.info.apply(this, A))
  }, A.prototype.getTime = function () {
    return Date.now() - this.start
  }, A.prototype.info = function () {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    this.enabled && "undefined" != typeof window && window.console && console.info
  }, A.prototype.warn = function () {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.warn || this.info.apply(this, A))
  }, A.prototype.error = function () {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.error || this.info.apply(this, A))
  }, A.instances = {}, A
}(), TB = function () {
  function A(e, t) {
    var r;
    this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new kB({
      id: this.instanceName,
      enabled: e.logging
    }), this.cache = null !== (r = e.cache) && void 0 !== r ? r : new Nc(this, e)
  }

  return A.instanceCount = 1, A
}();
"undefined" != typeof window && Pc.setContext(window);
var OB = function (A, e) {
  return Dr(void 0, void 0, void 0, (function () {
    var t, r, n, s, o, i, a, c, B, l, u, g, w, h, d, Q, f, p, C, U, F, m, v, y, H, E, b, I, L, K, x, S, D, _, M, k, T,
      O;
    return _r(this, (function (V) {
      switch (V.label) {
        case 0:
          if (!A || "object" != typeof A) return [2, Promise.reject("Invalid element provided as first argument")];
          if (!(t = A.ownerDocument)) throw new Error("Element is not attached to a Document");
          if (!(r = t.defaultView)) throw new Error("Document is not attached to a Window");
          return n = {
            allowTaint: null !== (m = e.allowTaint) && void 0 !== m && m,
            imageTimeout: null !== (v = e.imageTimeout) && void 0 !== v ? v : 15e3,
            proxy: e.proxy,
            useCORS: null !== (y = e.useCORS) && void 0 !== y && y
          }, s = Sr({
            logging: null === (H = e.logging) || void 0 === H || H,
            cache: e.cache
          }, n), o = {
            windowWidth: null !== (E = e.windowWidth) && void 0 !== E ? E : r.innerWidth,
            windowHeight: null !== (b = e.windowHeight) && void 0 !== b ? b : r.innerHeight,
            scrollX: null !== (I = e.scrollX) && void 0 !== I ? I : r.pageXOffset,
            scrollY: null !== (L = e.scrollY) && void 0 !== L ? L : r.pageYOffset
          }, i = new Mr(o.scrollX, o.scrollY, o.windowWidth, o.windowHeight), a = new TB(s, i), c = null !== (K = e.foreignObjectRendering) && void 0 !== K && K, B = {
            allowTaint: null !== (x = e.allowTaint) && void 0 !== x && x,
            onclone: e.onclone,
            ignoreElements: e.ignoreElements,
            inlineImages: c,
            copyStyles: c
          }, a.logger.debug("Starting document clone with size " + i.width + "x" + i.height + " scrolled to " + -i.left + "," + -i.top), l = new Ec(a, A, B), (u = l.clonedReferenceElement) ? [4, l.toIFrame(t, i)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return g = V.sent(), w = oc(u) || "HTML" === u.tagName ? function (A) {
            var e = A.body, t = A.documentElement;
            if (!e || !t) throw new Error("Unable to get document size");
            var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)),
              n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
            return new Mr(0, 0, r, n)
          }(u.ownerDocument) : kr(a, u), h = w.width, d = w.height, Q = w.left, f = w.top, p = VB(a, u, e.backgroundColor), C = {
            canvas: e.canvas,
            backgroundColor: p,
            scale: null !== (D = null !== (S = e.scale) && void 0 !== S ? S : r.devicePixelRatio) && void 0 !== D ? D : 1,
            x: (null !== (_ = e.x) && void 0 !== _ ? _ : 0) + Q,
            y: (null !== (M = e.y) && void 0 !== M ? M : 0) + f,
            width: null !== (k = e.width) && void 0 !== k ? k : Math.ceil(h),
            height: null !== (T = e.height) && void 0 !== T ? T : Math.ceil(d)
          }, c ? (a.logger.debug("Document cloned, using foreign object rendering"), [4, new _B(a, C).render(u)]) : [3, 3];
        case 2:
          return U = V.sent(), [3, 5];
        case 3:
          return a.logger.debug("Document cloned, element located at " + Q + "," + f + " with size " + h + "x" + d + " using computed rendering"), a.logger.debug("Starting DOM parsing"), F = ja(a, u), p === F.styles.backgroundColor && (F.styles.backgroundColor = Ao.TRANSPARENT), a.logger.debug("Starting renderer for element at " + C.x + "," + C.y + " with size " + C.width + "x" + C.height), [4, new IB(a, C).render(F)];
        case 4:
          U = V.sent(), V.label = 5;
        case 5:
          return (null === (O = e.removeContainer) || void 0 === O || O) && (Ec.destroy(g) || a.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), a.logger.debug("Finished rendering"), [2, U]
      }
    }))
  }))
}, VB = function (A, e, t) {
  var r = e.ownerDocument,
    n = r.documentElement ? qs(A, getComputedStyle(r.documentElement).backgroundColor) : Ao.TRANSPARENT,
    s = r.body ? qs(A, getComputedStyle(r.body).backgroundColor) : Ao.TRANSPARENT,
    o = "string" == typeof t ? qs(A, t) : null === t ? Ao.TRANSPARENT : 4294967295;
  return e === r.documentElement ? Js(n) ? Js(s) ? o : s : n : o
};
const GB = function (A, e) {
  return new Promise(((t, r) => {
    var n, s;
    (n = A, s = {
      dpi: 2 * window.devicePixelRatio,
      scale: 1,
      allowTaint: !0,
      useCORS: !0,
      height: A.offsetHeight - 2,
      width: A.offsetWidth,
      scrollY: 0,
      scrollX: 0
    }, void 0 === s && (s = {}), OB(n, s)).then((A => {
      const r = new Image;
      r.src = A.toDataURL("png"), r.setAttribute("crossOrigin", "anonymous"), r.onload = function () {
        const r = A.toDataURL("image/png");
        e.imageUrl = r;
        const n = function (A) {
          const e = A.split(","), t = e[0].match(/:(.*?);/)[1], r = atob(e[1]);
          let n = r.length;
          const s = new Uint8Array(n);
          for (; n--;) s[n] = r.charCodeAt(n);
          return new Blob([s], {type: t})
        }(r);
        t(n)
      }
    }))
  }))
};
var RB = function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("div", [t("div", {staticClass: "wm-isshow"}, [A._m(0), t("div", {staticClass: "wm-main"}, [t("div", {staticClass: "wm-left"}, [t("div", {staticClass: "wm-i-w"}, [t("h2", {}, [A._v("水印")]), t("div", [t("el-radio", {
    attrs: {label: "1"},
    on: {change: A.handleRadio},
    model: {
      value: A.radio, callback: function (e) {
        A.radio = e
      }, expression: "radio"
    }
  }, [A._v("文本水印")]), t("el-input", {
    attrs: {disabled: "2" === A.radio, placeholder: ""},
    model: {
      value: A.wmConfig.text, callback: function (e) {
        A.$set(A.wmConfig, "text", e)
      }, expression: "wmConfig.text"
    }
  }), t("div", {class: "1" !== A.radio ? "noshow" : ""}, [t("TextSet", {on: {textEvent: A.handleSetText}})], 1), t("div", {staticClass: "wm-t2"}, [t("el-radio", {
    attrs: {label: "2"},
    on: {change: A.handleRadio},
    model: {
      value: A.radio, callback: function (e) {
        A.radio = e
      }, expression: "radio"
    }
  }, [A._v("图片水印")]), t("el-button", {
    attrs: {
      size: "mini",
      disabled: "2" !== A.radio
    }
  }, [A._v("添加图片(不推荐) "), t("input", {
    staticClass: "o-btn1",
    attrs: {disabled: "2" !== A.radio && "disabled", id: "upload", type: "file"},
    on: {change: A.viewer}
  })])], 1)], 1)]), t("div", {staticClass: "wm-i-w"}, [t("h2", {}, [A._v("外观")]), t("div", {
    staticClass: "wm-block",
    class: "2" === A.radio ? "noshow" : ""
  }, [t("span", {staticClass: "demonstration"}, [A._v("大小")]), t("el-slider", {
    attrs: {max: 80},
    model: {
      value: A.wmConfig.fontSize, callback: function (e) {
        A.$set(A.wmConfig, "fontSize", e)
      }, expression: "wmConfig.fontSize"
    }
  })], 1), t("div", {staticClass: "wm-block"}, [t("span", {staticClass: "demonstration"}, [A._v("透明度")]), t("el-slider", {
    attrs: {
      step: .1,
      max: 1
    }, model: {
      value: A.wmConfig.opacity, callback: function (e) {
        A.$set(A.wmConfig, "opacity", e)
      }, expression: "wmConfig.opacity"
    }
  })], 1), t("div", {staticClass: "wm-block"}, [t("span", {staticClass: "demonstration"}, [A._v("旋转")]), t("el-slider", {
    attrs: {
      min: -90,
      max: 90,
      "show-tooltip": !1
    }, model: {
      value: A.wmConfig.rotate, callback: function (e) {
        A.$set(A.wmConfig, "rotate", e)
      }, expression: "wmConfig.rotate"
    }
  })], 1), t("div", {staticClass: "wm-block"}, [t("span", {staticClass: "demonstration"}, [A._v("水平间距")]), t("el-slider", {
    attrs: {max: 400},
    model: {
      value: A.wmConfig.gapX, callback: function (e) {
        A.$set(A.wmConfig, "gapX", e)
      }, expression: "wmConfig.gapX"
    }
  })], 1), t("div", {staticClass: "wm-block"}, [t("span", {staticClass: "demonstration"}, [A._v("垂直间距")]), t("el-slider", {
    attrs: {
      disabled: !1,
      max: 400
    }, model: {
      value: A.wmConfig.gapY, callback: function (e) {
        A.$set(A.wmConfig, "gapY", e)
      }, expression: "wmConfig.gapY"
    }
  })], 1)]), t("div", {staticClass: "wm-i-w"}, [t("h2", {}, [A._v("位置")]), t("el-switch", {
    attrs: {
      "active-text": "重复展示",
      "active-value": "repeat",
      "inactive-value": "interval",
      "inactive-text": "错行展示"
    }, model: {
      value: A.wmConfig.mode, callback: function (e) {
        A.$set(A.wmConfig, "mode", e)
      }, expression: "wmConfig.mode"
    }
  })], 1)]), t("div", {staticClass: "wm-right"}, [t("p", [A._v("预览")]), t("div", {staticClass: "preview"}, [t("div", {ref: "previewImg"}, [t("Watermark", {
    attrs: {
      options: A.wmConfig,
      visible: !0
    }
  }, [t("canvas", {
    ref: "canvasRef",
    attrs: {id: "imageEffectCanvas"}
  })])], 1)]), t("div", {staticClass: "tipsFooter"}, [t("el-button", {
    staticClass: "cancel",
    on: {click: A.resetHandle}
  }, [A._v("取消")]), t("el-button", {
    staticClass: "true_w",
    attrs: {type: "primary", loading: A.isLoad},
    on: {click: A.submitHandle}
  }, [A._v(A._s(A.isLoad ? "正在上传" : "立即上传"))])], 1)])])])])
}, PB = [function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("div", {staticClass: "wm-header"}, [t("span", [A._v("添加水印")])])
}];
RB._withStripped = !0;
const NB = {
  data: () => ({
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
  }), props: {file: {type: Object}}, emits: ["resfile", "uninstall"], computed: {
    newOption() {
      return this.wmConfig
    }, ...Pe(at, ["toFile"])
  }, mounted() {
    this.handlePictureCardPreview(this.file)
  }, methods: {
    submitHandle() {
      this.isLoad = !0, this.uploadSumit()
    }, resetHandle() {
      this.$emit("uninstall", !1)
    }, handleRadio() {
      "1" === this.radio && (this.wmConfig.image = "")
    }, handleSetText(A) {
      const {label: e, value: t} = A;
      this.wmConfig[e] = t
    }, viewer(A) {
      const e = this.getObjectURL(A.target.files[0]);
      this.wmConfig.image = e
    }, getObjectURL(A) {
      let e = null;
      return void 0 !== window.createObjectURL ? e = window.createObjectURL(A) : void 0 !== window.URL ? e = window.URL.createObjectURL(A) : void 0 !== window.webkitURL && (e = window.webkitURL.createObjectURL(A)), e
    }, blobToImg: A => new Promise(((e, t) => {
      const r = new FileReader;
      r.addEventListener("load", (() => {
        const A = new Image;
        A.src = r.result, A.addEventListener("load", (() => e(A)))
      })), r.readAsDataURL(A)
    })), SetImgAutoSize(A, e, t) {
      const r = t.height / t.width, n = t.width / t.height;
      return t.width >= A && (t.width = A, t.height = A * r), t.height > e && (t.height = e, t.width = e * n), t.height < e && t.width < A && (t.width > t.height ? (t.height = e, t.width = r * A) : (t.width = A, t.height = n * e)), t
    }, ImageToCanvas(A) {
      const e = document.getElementById("imageEffectCanvas"), t = this.SetImgAutoSize(572, 442, A);
      return e.width = t.width, e.height = t.height, e.getContext("2d").drawImage(t, 0, 0, t.width, t.height), e
    }, async handlePictureCardPreview(A) {
      this.dialogImageUrl = A.url;
      const e = await this.blobToImg(A.raw);
      this.ImageToCanvas(e)
    }, async uploadSumit() {
      const A = this.$refs.previewImg, e = await GB(A, this);
      return new Promise((A => {
        const t = new FormData, r = localStorage.getItem("authmsg"),
          n = Object.assign(JSON.parse(r), {tofile: this.toFile});
        t.append("file_", e);
        for (const e in n) t.append(e, n[e]);
        tt(t).then((e => {
          this.$emit("uninstall"), this.$emit("waterpic", e.data), ELEMENT.Notification({
            title: "提示",
            message: "水印图片已上传",
            type: "success"
          }), A(e.data)
        }))
      }))
    }
  }, components: {TextSet: Lr, Watermark: vr}
}, JB = {};
var XB = Ye(NB, RB, PB, !1, WB, "112af39a", null, null);

function WB(A) {
  for (let e in JB) this[e] = JB[e]
}

XB.options.__file = "src/views/home/components/wm/wmarkview.vue";
const YB = function () {
  return XB.exports
}();
var jB = function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return A.isload ? t("div", {staticClass: "isdload animate__animated animate__fadeIn"}, [t("span", [t("img", {
    attrs: {
      src: "/img/loading.gif",
      alt: "",
      srcset: ""
    }
  }), A._v(A._s(A.loadText) + " "), A.totalnum ? t("i", [A._v(" (" + A._s(A.progressnum) + "/" + A._s(A.totalnum) + ") ")]) : A._e()])]) : A._e()
}, $B = [];
jB._withStripped = !0;
const ZB = {
  data: () => ({}),
  props: {
    isload: {type: Boolean, default: !1},
    totalnum: {type: Number, default: 0},
    progressnum: {type: Number, default: 0},
    loadText: {type: String, default: ""}
  }
}, zB = {};
var qB = Ye(ZB, jB, $B, !1, Al, null, null, null);

function Al(A) {
  for (let e in zB) this[e] = zB[e]
}

qB.options.__file = "src/components/loading/MarkLoad.vue";
const el = function () {
  return qB.exports
}();
var tl = function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("div", {staticClass: "home-w"}, [t("div", {
    staticClass: "upload-w",
    staticStyle: {width: "100%"}
  }, [t("div", {attrs: {id: "tar_box", contenteditable: ""}}), t("el-upload", {
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
  }, [t("MarkLoad", {
    attrs: {
      loadText: "正在上传",
      isload: A.loadings,
      progressnum: A.uploadProgress,
      totalnum: A.fileList.length
    }
  }), A.CompressData.iscompress ? t("div", {staticClass: "compress-remind"}, [A._v("开启压缩，压缩等级（"), t("span", {staticClass: "red-c"}, [A._v(A._s(A.CompressData.rank))]), A._v("） ")]) : A._e(), t("i", {staticClass: "el-icon-upload"}), t("div", {staticClass: "el-upload__text"}, [A._v(" 支持"), t("em", [A._v("拖动、点击、粘贴")]), A._v("图片"), t("em", [A._v("上传，")]), A._v("每次最多"), t("em", [A._v(A._s(A.limit))]), A._v("张 ")]), t("div", {
    attrs: {slot: "tip"},
    slot: "tip"
  }, [t("div", {staticClass: "el-upload__tip"}, [t("div", [A._v("当前上传路径:"), t("el-tag", {
    attrs: {
      type: A.tofile ? "" : "danger",
      size: "mini"
    }, on: {click: A.handleopenSetting}
  }, [A._v(A._s(A.tofile ? A.tofile : "你还未填写路径，点击这里"))])], 1), A.fdata && A.fdata.bucket_name ? t("div", {on: {click: A.handleopenSetting}}, [A._v(" 当前B2桶名称: "), t("el-tag", {attrs: {size: "mini"}}, [A._v(A._s(A.fdata.bucket_name))])], 1) : A._e()]), A.fileList.length > 0 ? t("span", [t("p", {staticClass: "p-upload-hd"}, [A._v(A._s("上传进度：" + A.uploadProgress + "/" + A.fileList.length))]), t("ul", {staticClass: "upload-wrap"}, A._l(A.fileList, (function (e, r) {
    return t("UploadList", {
      key: e.uid,
      ref: "uploadRef" + r,
      refInFor: !0,
      attrs: {styleCount: A.styC(r) ? "width:97.2%" : "", file: e, pid: r},
      on: {watermarkhandle: A.handleMark, changefilelist: A.handleDelete}
    })
  })), 1), A.isShowWm ? t("div", [t("div", {
    staticClass: "wm-contaniner", on: {
      click: function (e) {
        return e.target !== e.currentTarget ? null : A.handleClose(!1)
      }
    }
  }, [t("Wmarkview", {
    attrs: {file: A.fileList[A.currentfileIndex]},
    on: {waterpic: A.handleWatermarkEnd, uninstall: A.handleClose}
  })], 1)]) : A._e(), t("el-button", {
    staticClass: "btn-upload",
    attrs: {type: "primary", plain: "", loading: A.isLoad},
    on: {click: A.moreUploadPic}
  }, [A._v(A._s(A.isLoad ? "正在上传" : "上传"))]), t("el-button", {
    staticClass: "btn-upload",
    attrs: {type: "info", plain: ""},
    on: {click: A.handleReSet}
  }, [A._v("清空")])], 1) : A._e()])], 1)], 1)])
}, rl = [];
tl._withStripped = !0;
const nl = {
  components: {UploadList: Br, Wmarkview: YB, MarkLoad: el},
  data: () => ({
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
  }),
  created() {
    window.addEventListener("paste", this.pasteHandle)
  },
  computed: {
    ...Pe(at, ["defaultCopyUrl"]), ...Pe(at, ["CompressData"]), ...Pe(at, ["DefaultToFile"]), ...Pe(at, ["prefixStatus"]),
    timeE: () => (new Date).getFullYear(),
    styC() {
      const A = this.fileList.length;
      return function (e) {
        return 1 === A || e === A - 1 && e % 2 == 0
      }
    }
  },
  watch: {
    DefaultToFile: {
      immediate: !0, handler(A, e) {
        this.tofile = A
      }
    }
  },
  mounted() {
    window.addEventListener("paste", this.pasteHandle);
    const A = sessionStorage.getItem("templist");
    this.fdata = localStorage.getItem("token_api") && JSON.parse(localStorage.getItem("token_api")), A && (this.leftTempList = JSON.parse(A))
  },
  destroyed() {
    window.removeEventListener("paste", this.pasteHandle)
  },
  methods: {
    ...Ne(at, ["setDefaultFormat"]), ...Ne(at, ["setShowSettingBtn"]), handleopenSetting() {
      this.setShowSettingBtn(!0)
    }, handleDelete(A) {
      this.fileList.splice(A, 1)
    }, handleWatermarkEnd(A) {
      this.leftTempList.unshift(A), this.handletempList(this.leftTempList)
    }, handleMark(A) {
      this.isShowWm = !0, this.currentfileIndex = A
    }, handleClose() {
      this.isShowWm = !1
    }, handleReSet() {
      this.$refs.uploadRef.clearFiles(), this.fileList = [], this.uploadProgress = 0
    }, pasteHandle: Bt((function (A) {
      const e = {percentage: 0, status: "ready"};
      e.raw = A.clipboardData.files[0], e.name = e.raw.name, e.size = e.raw.size, e.url = window.URL.createObjectURL(e.raw), e.uid = Date.now(), this.fileList = [...this.fileList, e]
    }), 500, !0), queue(A) {
      const e = this, t = [];
      let r = Promise.resolve();
      return A.forEach((function (A) {
        r = r.then(A).then((A => (t.push(A), A.fileName && (e.uploadProgress += 1), t)))
      })), r
    }, moreUploadPic() {
      const A = [], e = this;
      e.isLoad = !0, st().then((async () => {
        e.loadings = !0, e.fileList.forEach(((t, r) => {
          A.push(e.$refs["uploadRef" + r][0].uploadSumit)
        })), await this.queue(A);
        const t = e.fileList.length - e.uploadProgress;
        document.getElementById("tar_box").innerHTML = "", e.loadings = !1, e.isLoad = !1, ELEMENT.Notification({
          title: "上传提示",
          type: t ? "error" : "success",
          message: `上传成功：${e.uploadProgress}张,上传失败：${t}张；${t > 0 ? "失败原因：请求过于频繁，建议单张上传" : ""}`
        })
      })).catch((() => {
        e.loadings = !1, e.isLoad = !1, ELEMENT.Notification({
          title: "提示",
          message: "请检查是否登陆,请检查keyid和key是否填写正确",
          type: "error"
        })
      }))
    }, checkFileType(A) {
      const {uid: e, name: t} = A;
      if (!/^.png|.jpg|.jpeg|.gif|.webp$/.test(t.substring(t.lastIndexOf(".")).toLowerCase())) {
        ELEMENT.Message({message: "文件类型只能是.png|.jpg|.jpeg|.gif|.webp", type: "warning"});
        const A = this.fileList.filter((A => A.uid !== e));
        return void (this.fileList = A)
      }
      if (-1 !== this.fileList.findIndex((A => A.name === t))) {
        ELEMENT.Message({message: "不能上传同名的文件", type: "warning"});
        const A = this.fileList.filter((A => A.uid !== e));
        return this.fileList = A, !1
      }
      this.fileList.push(A)
    }
  }
}, sl = {};
var ol = Ye(nl, tl, rl, !1, il, "3dd2e005", null, null);

function il(A) {
  for (let e in sl) this[e] = sl[e]
}

ol.options.__file = "src/views/home/Home.vue";
const al = function () {
  return ol.exports
}();
var cl = function () {
  var A = this.$createElement, e = this._self._c || A;
  return e("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      focusable: "false",
      viewBox: "0 0 24 24"
    }
  }, [e("path", {
    attrs: {
      fill: "var(--b2-theme-c)",
      d: "M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"
    }
  })])
}, Bl = [];
cl._withStripped = !0;
const ll = {};
var ul = Ye({}, cl, Bl, !1, gl, null, null, null);

function gl(A) {
  for (let e in ll) this[e] = ll[e]
}

ul.options.__file = "src/views/svg/VPIconMoon.vue";
const wl = function () {
  return ul.exports
}();
var hl = function () {
  var A = this.$createElement, e = this._self._c || A;
  return e("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      focusable: "false",
      viewBox: "0 0 24 24"
    }
  }, [e("path", {
    attrs: {
      fill: "var(--b2-theme-c)",
      d: "M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"
    }
  }), e("path", {
    attrs: {
      fill: "var(--b2-theme-c)",
      d: "M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"
    }
  }), e("path", {
    attrs: {
      fill: "var(--b2-theme-c)",
      d: "M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"
    }
  }), e("path", {
    attrs: {
      fill: "var(--b2-theme-c)",
      d: "M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"
    }
  }), e("path", {
    attrs: {
      fill: "var(--b2-theme-c)",
      d: "M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"
    }
  }), e("path", {
    attrs: {
      fill: "var(--b2-theme-c)",
      d: "M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"
    }
  }), e("path", {
    attrs: {
      fill: "var(--b2-theme-c)",
      d: "M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"
    }
  }), e("path", {
    attrs: {
      fill: "var(--b2-theme-c)",
      d: "M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"
    }
  }), e("path", {
    attrs: {
      fill: "var(--b2-theme-c)",
      d: "M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"
    }
  })])
}, dl = [];
hl._withStripped = !0;
const Ql = {};
var fl = Ye({}, hl, dl, !1, pl, null, null, null);

function pl(A) {
  for (let e in Ql) this[e] = Ql[e]
}

fl.options.__file = "src/views/svg/VPIconSun.vue";
const Cl = function () {
  return fl.exports
}();
var Ul = function () {
  var A = this.$createElement, e = this._self._c || A;
  return e("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      focusable: "false",
      viewBox: "0 0 24 24"
    }
  }, [e("path", {
    attrs: {
      fill: "var(--b2-theme-c)",
      d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
    }
  })])
}, Fl = [];
Ul._withStripped = !0;
const ml = {};
var vl = Ye({}, Ul, Fl, !1, yl, null, null, null);

function yl(A) {
  for (let e in ml) this[e] = ml[e]
}

vl.options.__file = "src/views/svg/VPIconGitHub.vue";
const Hl = function () {
  return vl.exports
}();
var El = function () {
  var A = this.$createElement, e = this._self._c || A;
  return e("svg", {
    staticClass: "icon",
    attrs: {
      t: "1656846938380",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "3062"
    }
  }, [e("path", {
    attrs: {
      fill: "var(--b2-theme-c)",
      d: "M522.54 480.9m32 0l218.51 0q32 0 32 32l0 0q0 32-32 32l-218.51 0q-32 0-32-32l0 0q0-32 32-32Z",
      "p-id": "3063"
    }
  }), e("path", {
    attrs: {
      d: "M863.93 513.66l-119.3-98.39v196.79l119.3-98.4zM575.94 669.82v96.86a34.39 34.39 0 0 1-34.39 34.39H290a34.4 34.4 0 0 1-34.4-34.39V259.1a34.39 34.39 0 0 1 34.4-34.39h251.55a34.39 34.39 0 0 1 34.39 34.39V354a31.76 31.76 0 0 0 31.76 31.76h2.14a30.1 30.1 0 0 0 30.1-30.1V259.1a98.39 98.39 0 0 0-98.39-98.39H290a98.39 98.39 0 0 0-98.4 98.39v507.58a98.39 98.39 0 0 0 98.4 98.39h251.55a98.39 98.39 0 0 0 98.39-98.39V675.8a35 35 0 0 0-35-35 29 29 0 0 0-29 29.02z",
      fill: "var(--b2-theme-c)",
      "p-id": "3064"
    }
  })])
}, bl = [];
El._withStripped = !0;
const Il = {};
var Ll = Ye({}, El, bl, !1, Kl, "42171c4f", null, null);

function Kl(A) {
  for (let e in Il) this[e] = Il[e]
}

Ll.options.__file = "src/views/svg/LayOut.vue";
const xl = function () {
  return Ll.exports
}();
var Sl = function () {
  var A = this.$createElement, e = this._self._c || A;
  return e("svg", {
    staticClass: "icon-sign",
    attrs: {
      t: "1648793231546",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "5983"
    }
  }, [e("path", {
    attrs: {
      d: "M505.344 127.914667A181.248 181.248 0 0 0 322.944 307.626667a182.4 182.4 0 0 0 364.8 0 181.248 181.248 0 0 0-182.4-179.712m0-85.333334a266.709333 266.709333 0 0 1 267.733333 265.045334 267.733333 267.733333 0 0 1-535.466666 0A266.709333 266.709333 0 0 1 505.344 42.581333z",
      fill: "#516280",
      "p-id": "5984"
    }
  }), e("path", {
    attrs: {
      d: "M579.754667 589.866667h-135.424a228.309333 228.309333 0 0 0-229.76 226.133333v13.525333c0 66.602667 101.418667 66.602667 229.76 66.602667h135.424c123.306667 0 229.76 0 229.76-66.602667v-13.354666a228.352 228.352 0 0 0-229.76-226.304m0-85.333334a313.728 313.728 0 0 1 315.093333 311.466667v13.525333c0 34.517333-13.44 117.418667-137.429333 141.952a976.768 976.768 0 0 1-177.664 9.984h-135.424a970.069333 970.069333 0 0 1-179.84-9.984c-122.069333-24.533333-135.253333-107.434667-135.253334-141.909333v-13.312a313.728 313.728 0 0 1 315.093334-311.466667z",
      fill: "#516280",
      "p-id": "5985"
    }
  }), e("path", {
    attrs: {
      d: "M512.170667 429.568a112.597333 112.597333 0 0 1-91.264-48.256 41.984 41.984 0 0 1 5.845333-55.466667 33.834667 33.834667 0 0 1 50.432 6.4 41.856 41.856 0 0 0 62.336 7.978667 46.293333 46.293333 0 0 0 7.253333-7.978667 33.834667 33.834667 0 0 1 50.432-6.4 41.984 41.984 0 0 1 5.845334 55.466667 121.770667 121.770667 0 0 1-19.029334 20.864 109.098667 109.098667 0 0 1-71.850666 27.392z",
      fill: "#007BFC",
      "p-id": "5986"
    }
  })])
}, Dl = [];
Sl._withStripped = !0;
const _l = {};
var Ml = Ye({}, Sl, Dl, !1, kl, null, null, null);

function kl(A) {
  for (let e in _l) this[e] = _l[e]
}

Ml.options.__file = "src/views/svg/SignSvg.vue";
const Tl = function () {
  return Ml.exports
}();
var Ol = function () {
  var A = this.$createElement, e = this._self._c || A;
  return e("svg", {
    staticClass: "icon",
    attrs: {
      t: "1659514125461",
      viewBox: "0 0 1024 1024",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "p-id": "2752"
    }
  }, [e("path", {
    attrs: {
      d: "M512 640c-70.592 0-128-57.408-128-128s57.408-128 128-128 128 57.408 128 128-57.408 128-128 128m0-320a192 192 0 0 0 0 384 192 192 0 0 0 0-384",
      fill: "var(--b2-theme-c)",
      "p-id": "2753"
    }
  }), e("path", {
    attrs: {
      d: "M693.216 735.552a291.744 291.744 0 0 1-40.512 27.52c-1.216 0.64-2.368 1.472-3.616 2.144a286.08 286.08 0 0 1-34.048 15.392l-19.552 72.992-9.28 34.592c-0.576 0.128-1.152 0.32-1.76 0.384l-8.736 1.632c-3.52 0.64-7.104 1.088-10.656 1.6a357.152 357.152 0 0 1-53.056 3.744c-5.216 0-10.464-0.128-15.68-0.32l-8.64-0.48a355.936 355.936 0 0 1-28.736-2.944c-3.52-0.512-7.072-0.96-10.624-1.6a418.496 418.496 0 0 1-8.736-1.6l-1.76-0.416-9.28-34.56-19.584-73.024a286.784 286.784 0 0 1-47.84-23.776 287.488 287.488 0 0 1-30.304-21.28l-72.96 19.552-34.56 9.28-1.184-1.376a237.504 237.504 0 0 1-5.792-6.72c-2.304-2.784-4.512-5.664-6.752-8.512a315.84 315.84 0 0 1-16.928-23.424c-1.6-2.336-3.104-4.768-4.64-7.168a337.92 337.92 0 0 1-15.68-27.168 435.84 435.84 0 0 1-3.936-7.68c-1.536-3.104-3.072-6.208-4.512-9.344a362.912 362.912 0 0 1-7.296-17.024c-1.344-3.328-2.688-6.656-3.968-9.984l-2.976-8.448-0.512-1.696 25.184-25.184 53.568-53.632a292.8 292.8 0 0 1-3.68-41.28c0-1.28-0.192-2.496-0.192-3.744 0-1.28 0.192-2.464 0.192-3.744a292.8 292.8 0 0 1 3.68-41.28l-53.568-53.632-25.184-25.184a438.656 438.656 0 0 1 3.488-10.144c1.28-3.36 2.624-6.688 3.968-10.048a375.68 375.68 0 0 1 31.424-61.184l4.672-7.232a366.112 366.112 0 0 1 16.896-23.36c2.24-2.848 4.448-5.696 6.72-8.48 1.92-2.24 3.84-4.48 5.824-6.72l1.184-1.376 34.56 9.28 72.96 19.52c9.568-7.776 19.744-14.72 30.304-21.28l4.064-2.464a283.68 283.68 0 0 1 43.776-21.28l19.584-73.024 9.28-34.56 1.76-0.416c2.88-0.544 5.76-1.12 8.704-1.6 3.52-0.608 7.168-1.12 10.752-1.6 6.08-0.864 12.16-1.6 18.336-2.208a362.752 362.752 0 0 1 19.008-1.184c5.184-0.224 10.4-0.384 15.616-0.384s10.464 0.16 15.648 0.384a362.752 362.752 0 0 1 19.008 1.184c6.08 0.576 12.224 1.344 18.304 2.24 3.616 0.448 7.2 0.96 10.784 1.536l8.704 1.632 1.76 0.384 9.28 34.592 19.52 72.992c11.712 4.512 23.168 9.472 34.08 15.392 1.248 0.672 2.4 1.504 3.616 2.176 14.304 8.064 27.84 17.216 40.512 27.52l72.96-19.584 34.528-9.248 1.216 1.344c1.92 2.24 3.904 4.48 5.76 6.752 2.304 2.752 4.48 5.632 6.72 8.448 3.84 4.864 7.552 9.792 11.136 14.848 1.984 2.816 3.904 5.696 5.824 8.544l4.672 7.232a357.472 357.472 0 0 1 19.616 34.88 397.184 397.184 0 0 1 11.776 26.336c1.344 3.328 2.72 6.656 4 10.048 1.024 2.784 1.984 5.568 2.944 8.384 0.192 0.576 0.32 1.152 0.544 1.728l-25.184 25.184-53.6 53.6c1.92 12.064 3.104 24.352 3.488 36.896 0.064 2.72 0.384 5.44 0.384 8.16s-0.32 5.44-0.384 8.16a291.136 291.136 0 0 1-3.52 36.864l53.632 53.632 25.184 25.184-0.544 1.696c-0.96 2.816-1.92 5.6-2.944 8.384-1.28 3.392-2.624 6.72-4 10.08a376.32 376.32 0 0 1-11.776 26.336 435.84 435.84 0 0 1-11.456 21.44c-2.624 4.544-5.376 8.992-8.16 13.44-1.536 2.368-3.072 4.8-4.64 7.136a315.84 315.84 0 0 1-16.96 23.456c-2.24 2.88-4.48 5.696-6.72 8.448-1.92 2.304-3.84 4.512-5.792 6.752-0.384 0.48-0.8 0.896-1.216 1.344l-34.56-9.248z m-305.12 139.328c-2.624-0.896-5.28-1.728-7.872-2.688l-3.328-1.216-3.328-1.28c4.896 1.92 9.856 3.584 14.816 5.248z m-119.424-66.368l-2.656-2.24c-2.144-1.824-4.224-3.712-6.336-5.568a334.912 334.912 0 0 0 11.84 10.08l-2.88-2.24z m623.776-245.664l-0.192-0.16-0.096-0.128h-0.032l-29.184-29.216c0.416-7.104 1.056-14.144 1.056-21.344 0-7.232-0.64-14.272-1.056-21.376l29.184-29.184 0.128-0.128 0.192-0.192 54.72-54.72a444.032 444.032 0 0 0-18.4-57.376c-8.128-20.704-17.312-41.184-28.8-61.024s-24.576-38.08-38.432-55.456a449.024 449.024 0 0 0-40.48-44.64l-74.752 20.032-0.064 0.032-0.224 0.064-0.16 0.032h-0.032l-39.424 10.56a348.448 348.448 0 0 0-37.472-21.376l-10.624-39.68-0.032-0.064-0.032-0.16-0.064-0.224v-0.064l-20.032-74.752a447.68 447.68 0 0 0-58.88-12.736A448.128 448.128 0 0 0 512 64c-22.912 0-45.248 2.24-67.232 5.568-20.096 3.04-39.776 7.136-58.88 12.736l-20.032 74.752-0.032 0.064-0.064 0.224-0.032 0.16v0.064l-10.656 39.68c-12.928 6.464-25.504 13.472-37.472 21.44l-39.392-10.56-0.064-0.064h-0.16l-0.224-0.096h-0.064l-74.72-20.064c-14.432 13.76-27.84 28.8-40.48 44.64C148.608 249.92 135.488 268.16 124.032 288s-20.672 40.32-28.8 61.024A450.496 450.496 0 0 0 76.8 406.4l54.72 54.72v0.064l0.224 0.16 0.096 0.128v0.032l29.216 29.184C160.64 497.76 160 504.8 160 512s0.64 14.208 1.088 21.312l-29.184 29.184-0.032 0.032-0.096 0.128-0.192 0.192-0.032 0.032L76.8 617.6c4.704 19.328 11.008 38.464 18.4 57.344 8.128 20.704 17.344 41.216 28.8 61.056s24.576 38.08 38.464 55.424c12.672 15.872 26.048 30.88 40.48 44.64l74.72-20.032h0.064l0.224-0.064 0.16-0.064h0.064l39.36-10.56c12 7.936 24.576 14.912 37.504 21.376l10.656 39.712v0.224l0.096 0.224v0.032l20.064 74.752c19.104 5.6 38.784 9.728 58.88 12.736a447.68 447.68 0 0 0 67.2 5.6c22.976 0 45.28-2.24 67.296-5.6a442.56 442.56 0 0 0 58.88-12.736l20.032-74.752 0.064-0.256 0.064-0.192 10.624-39.68c12.928-6.496 25.504-13.504 37.44-21.44l39.456 10.56v0.032l0.192 0.032 0.224 0.064h0.064l74.752 20.032c14.4-13.76 27.808-28.768 40.48-44.64 13.856-17.376 27.008-35.584 38.464-55.424s20.64-40.32 28.768-61.056c7.424-18.88 13.728-37.984 18.432-57.344l-54.72-54.72z",
      fill: "var(--b2-theme-c)",
      "p-id": "2754"
    }
  })])
}, Vl = [];
Ol._withStripped = !0;
const Gl = {};
var Rl = Ye({}, Ol, Vl, !1, Pl, null, null, null);

function Pl(A) {
  for (let e in Gl) this[e] = Gl[e]
}

Rl.options.__file = "src/views/svg/SettingSvg.vue";
const Nl = function () {
  return Rl.exports
}();
var Jl = function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("div", {staticClass: "switch-theme-wrap"}, [t("div", [A.isLogined ? t("button", {on: {click: A.openhandle}}, [t("LayOut")], 1) : t("button", {on: {click: A.tapLoginPage}}, [t("SignSvg")], 1)]), t("div", {on: {click: A.handleSetting}}, [t("button", [t("SettingSvg")], 1)]), t("div", {
    staticStyle: {display: "inline-block"},
    on: {click: A.handleThemeChange}
  }, [A.isLight ? t("button", [t("VPIconSun")], 1) : t("button", [t("VPIconMoon")], 1)])])
}, Xl = [];
Jl._withStripped = !0;
const Wl = {
  components: {VPIconMoon: wl, VPIconSun: Cl, VPIconGitHub: Hl, LayOut: xl, SignSvg: Tl, SettingSvg: Nl},
  data: () => ({isLight: !0, disappear: !1}),
  mounted() {
    this.handleIsLogined();
    const A = localStorage.getItem("themeb2");
    this.isLight = !A || "dark" !== JSON.parse(A).theme
  },
  computed: {...Pe(at, ["isLogined"])},
  methods: {
    ...Ne(at, ["handleIsLogined"]), ...Ne(at, ["setShowSettingBtn"]), handleSetting() {
      this.setShowSettingBtn(!0)
    }, handleSelect(A) {
      document.documentElement.className = A, localStorage.setItem("themeb2", JSON.stringify({theme: A}))
    }, handleTogGithub() {
      window.open("https://github.com/Rr210/blazeB2")
    }, handleThemeChange() {
      this.isLight = !this.isLight;
      const A = this.isLight ? "" : "dark";
      this.handleSelect(A)
    }, openhandle() {
      ELEMENT.MessageBox({
        title: "提示",
        message: "此操作将删除本地缓冲信息, 是否继续?",
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        showCancelButton: !0,
        type: "warning"
      }).then((() => {
        this.handleIsLogined(), localStorage.removeItem("token_api"), localStorage.removeItem("authmsg"), localStorage.removeItem("pinia-store")
      })).then((() => {
        ELEMENT.Message({type: "success", message: "缓冲清除成功,已退出!"})
      }))
    }, tapLoginPage: Bt((function () {
      this.handleSetting()
    }), 300, !0)
  }
}, Yl = {};
var jl = Ye(Wl, Jl, Xl, !1, $l, "2705ef7b", null, null);

function $l(A) {
  for (let e in Yl) this[e] = Yl[e]
}

jl.options.__file = "src/components/switchtheme/SwitchTheme.vue";
const Zl = function () {
  return jl.exports
}();
var zl = function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("div", {staticClass: "form-w"}, [t("h2", {staticClass: "setting-hd-h2"}, [A._v("密钥配置")]), t("el-form", {
    ref: "formRef",
    attrs: {model: A.form, rules: A.rules}
  }, [t("el-form-item", {
    attrs: {
      label: "application_key_id",
      prop: "application_key_id"
    }
  }, [t("el-input", {
    attrs: {placeholder: "请填写应用程序密钥id"},
    model: {
      value: A.form.application_key_id, callback: function (e) {
        A.$set(A.form, "application_key_id", e)
      }, expression: "form.application_key_id"
    }
  })], 1), t("el-form-item", {
    attrs: {
      label: "application_key",
      prop: "application_key"
    }
  }, [t("el-input", {
    attrs: {"show-password": "", placeholder: "请填写应用程序密钥"},
    model: {
      value: A.form.application_key, callback: function (e) {
        A.$set(A.form, "application_key", e)
      }, expression: "form.application_key"
    }
  })], 1), t("el-form-item", {
    attrs: {
      label: "host_url(图床自定义域名)",
      prop: "host_url"
    }
  }, [t("el-input", {
    attrs: {placeholder: "请填写地址,eg: https://cloud.mr90.top/file/imagecloud/ 注意:结尾必须加 ‘/’"},
    model: {
      value: A.form.host_url, callback: function (e) {
        A.$set(A.form, "host_url", e)
      }, expression: "form.host_url"
    }
  })], 1), t("el-form-item", {
    attrs: {
      label: " bucket_name",
      prop: "bucket_name"
    }
  }, [t("el-input", {
    attrs: {placeholder: "请填写存储桶名称"},
    model: {
      value: A.form.bucket_name, callback: function (e) {
        A.$set(A.form, "bucket_name", e)
      }, expression: "form.bucket_name"
    }
  })], 1), t("el-form-item", [t("div", {staticClass: "btn-wrap-form"}, [t("el-button", {
    attrs: {
      type: "primary",
      plain: ""
    }, on: {
      click: function (e) {
        return A.submitForm("formRef")
      }
    }
  }, [A._v("保存本地")]), t("el-button", {
    on: {
      click: function (e) {
        return A.resetForm("formRef")
      }
    }
  }, [A._v("重置")])], 1)])], 1)], 1)
}, ql = [];
zl._withStripped = !0;
const Au = {
  data() {
    return {
      form: {application_key_id: "005638bfc67ea4a0000000002", application_key: "K005L2g8QJqL8KbzHOUbHu/rnaIypw", bucket_name: "illlli", host_url: "https://f005.backblazeb2.com/file/illlli/"},
      rules: {
        application_key_id: [{required: !0, message: "请输入application_key_id", trigger: "blur"}, {
          min: 5,
          max: 50,
          message: "长度在 5 到 50 个字符",
          trigger: "blur"
        }],
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
  }, computed: {...Pe(at, ["isLogined"])}, mounted() {
    const A = localStorage.getItem("token_api");
    A && (this.form = JSON.parse(A))
  }, methods: {
    ...Ne(at, ["handleIsLogined"]), validateURL: (A, e, t) => {
      "/" === e.charAt(e.length - 1) && 0 !== e.length ? t() : t(new Error("请输入图片地址前缀，输入的连接结尾必须加 /"))
    }, submitForm: Bt((function (A) {
      this.$refs[A].validate((A => {
        if (!A) return !1;
        localStorage.setItem("token_api", JSON.stringify(this.form)), localStorage.removeItem("authmsg"), ELEMENT.Notification({
          title: "提示",
          message: "已将数据缓冲到本地，数据信息仅本人可知",
          type: "success"
        }), this.handleIsLogined(this.form.host_url)
      }))
    }), 400, !0), resetForm(A) {
      this.$refs[A].resetFields()
    }
  }
}, eu = {};
var tu = Ye(Au, zl, ql, !1, ru, "4c16d965", null, null);

function ru(A) {
  for (let e in eu) this[e] = eu[e]
}

tu.options.__file = "src/views/formview/FormView.vue";
const nu = function () {
  return tu.exports
}();
var su = function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("div", {staticClass: "set-prefix"}, [t("div", {staticClass: "setting-hd-h2"}, [A._v("图片前缀(默认选择 host_url 在密钥配置中可修改)")]), t("div", {staticClass: "flex-btw-center"}, [t("el-input", {
    attrs: {
      placeholder: "请选择图床管理页面图片地址前缀",
      disabled: !0
    }, model: {
      value: A.value, callback: function (e) {
        A.value = e
      }, expression: "value"
    }
  }), t("el-select", {
    attrs: {placeholder: "请选择"},
    on: {change: A.handleSelect},
    model: {
      value: A.value, callback: function (e) {
        A.value = e
      }, expression: "value"
    }
  }, A._l(A.prefixImg.support, (function (A) {
    return t("el-option", {key: A.url, attrs: {label: A.label, value: A.url}})
  })), 1)], 1)])
}, ou = [];
su._withStripped = !0;
const iu = {
  data: () => ({value: ""}),
  computed: {...Pe(at, ["prefixImg"]), ...Pe(at, ["noInvalid"]), ...Pe(at, ["prefixStatus"])},
  watch: {
    noInvalid: {
      deep: !0, handler(A) {
        A && (this.value = this.prefixStatus)
      }
    }, prefixStatus: {
      deep: !0, handler(A) {
        A && (this.value = this.prefixStatus)
      }
    }
  },
  mounted() {
    this.noInvalid && (this.value = this.prefixStatus)
  },
  methods: {
    ...Ne(at, ["setDefaultPrefix"]), handleSelect(A) {
      this.setDefaultPrefix(A)
    }
  }
}, au = {};
var cu = Ye(iu, su, ou, !1, Bu, "6ff34b10", null, null);

function Bu(A) {
  for (let e in au) this[e] = au[e]
}

cu.options.__file = "src/views/Setting/setprefix/SetPrefix.vue";
const lu = function () {
  return cu.exports
}();
var uu = function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("div", {staticClass: "set-defalut"}, [A._m(0), t("div", {staticStyle: {"margin-top": "20px"}}, [t("el-radio-group", {
    attrs: {size: "small"},
    model: {
      value: A.radio, callback: function (e) {
        A.radio = e
      }, expression: "radio"
    }
  }, [t("el-radio", {attrs: {label: "1", border: ""}}, [A._v("手动输入目录")]), t("el-radio", {
    attrs: {
      label: "2",
      border: ""
    }
  }, [A._v("自动填写目录")]), t("el-radio", {
    attrs: {
      label: "3",
      border: ""
    }
  }, [A._v("自动时间格式")])], 1)], 1), "1" === A.radio ? t("el-input", {
    attrs: {placeholder: "图片文件夹(格式：hexo/4/)"},
    model: {
      value: A.valuePrint, callback: function (e) {
        A.valuePrint = e
      }, expression: "valuePrint"
    }
  }) : "2" === A.radio ? t("el-cascader", {
    attrs: {props: A.options, clearable: ""},
    model: {
      value: A.valueAuto, callback: function (e) {
        A.valueAuto = e
      }, expression: "valueAuto"
    }
  }) : A._e(), "3" === A.radio ? t("el-input", {
    attrs: {placeholder: "自动今日时间格式(eg:2022/07/08/)", disabled: ""},
    model: {
      value: A.valueTime, callback: function (e) {
        A.valueTime = e
      }, expression: "valueTime"
    }
  }) : A._e(), t("el-button", {on: {click: A.saveDefault}}, [A._v("保存")])], 1)
}, gu = [function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("h2", {staticClass: "setting-hd-h2"}, [A._v("默认检索的图片文件夹("), t("span", {staticClass: "red-c"}, [A._v("图床管理")]), A._v(")")])
}];
uu._withStripped = !0;
const wu = {
  data: () => ({
    valueAuto: [],
    radio: "1",
    valuePrint: "",
    valueTime: "",
    options: {
      lazy: !0, checkStrictly: !0, lazyLoad(A, e) {
        let t = "";
        const {level: r, pathLabels: n} = A, s = n && n.reduce(((A, e) => {
          if (r <= n.length) return `${A}${e}/`
        }), "");
        t = n ? s : t, async function (A) {
          const e = localStorage.getItem("authmsg"),
            t = {startFileName: "", maxFileCount: 50, prefix: A, delimiter: "/"},
            r = Object.assign(t, JSON.parse(e)), {data: n} = await rt({params: r}),
            s = n.files.filter((A => "/" === A.fileName[A.fileName.length - 1])),
            o = "" !== A ? A.split("/").slice(-2, 1)[0] : null;
          if (s.length > 0) return s.map((A => {
            const e = A.fileName.split("/");
            return {value: e[e.length - 2], label: e[e.length - 2], parentId: o, children: []}
          }));
          return []
        }(t).then((A => {
          const t = A.length > 0 ? A : [];
          e(t)
        }))
      }
    }
  }),
  computed: {...Pe(at, ["defaultFile"]), timeAuto: () => ct(Date.now()).split(" ")[0].replace(/-/g, "/") + "/"},
  mounted() {
    this.radio = this.defaultFile.methods, this.initData(this.radio), this.valueTime = this.timeAuto
  },
  methods: {
    ...Ne(at, ["setDefaultFile"]), ...Ne(at, ["setShowSettingBtn"]), initData(A) {
      const e = this, t = function (A) {
        const {vala: t, valt: r, valp: n} = A;
        e.valueAuto = t || [], e.valueTime = r || "", e.valuePrint = n || ""
      };
      switch (A) {
        case"1":
          t({valp: e.defaultFile.valPt});
          break;
        case"2":
          t({vala: e.defaultFile.valAt});
          break;
        case"3":
          t({valt: e.defaultFile.valTt});
          break;
        default:
          t()
      }
    }, saveDefault() {
      const A = {methods: this.radio, valAt: this.valueAuto, valPt: this.valuePrint, valTt: this.valueTime};
      this.setDefaultFile(A), ELEMENT.Notification({message: "保存成功", type: "success"}), this.setShowSettingBtn(!1)
    }
  }
}, hu = {};
var du = Ye(wu, uu, gu, !1, Qu, "04bbfc34", null, null);

function Qu(A) {
  for (let e in hu) this[e] = hu[e]
}

du.options.__file = "src/views/Setting/setDefault/SetDefault.vue";
const fu = function () {
  return du.exports
}();
var pu = function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("div", {staticClass: "set-commpress"}, [t("div", {staticClass: "set-commpress-hd"}, [A._m(0), t("el-switch", {
    attrs: {
      "active-text": "开启",
      "inactive-text": "关闭",
      "active-value": !0,
      "inactive-value": !1
    }, on: {change: A.handleComp}, model: {
      value: A.value, callback: function (e) {
        A.value = e
      }, expression: "value"
    }
  })], 1), t("div", {
    directives: [{name: "show", rawName: "v-show", value: A.value, expression: "value"}],
    staticClass: "block-compress"
  }, [t("span", {staticClass: "demonstration"}, [A._v("压缩等级(" + A._s(A.value1) + ")")]), t("div", {staticClass: "slide-w"}, [t("el-slider", {
    attrs: {
      step: .1,
      max: 1,
      "show-stops": ""
    }, on: {change: A.handleComp}, model: {
      value: A.value1, callback: function (e) {
        A.value1 = e
      }, expression: "value1"
    }
  })], 1)])])
}, Cu = [function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("h2", {staticClass: "setting-hd-h2"}, [A._v(" 是否开启压缩("), t("span", {staticClass: "red-c"}, [A._v("首页")]), A._v(") ")])
}];
pu._withStripped = !0;
const Uu = {};
var Fu = Ye({
  data: () => ({value: !1, value1: .8}), mounted() {
    const A = at();
    this.$nextTick((() => {
      this.value = A.CompressData.iscompress, this.value1 = A.CompressData.rank
    }))
  }, methods: {
    handleComp: function (A) {
      const e = at(), t = {iscompress: this.value, rank: this.value1};
      e.setDefaultCompress(t), ELEMENT.Notification({
        title: "压缩功能提示",
        message: `上传压缩功能${this.value ? "已开启" : "已关闭"},${this.value ? "压缩等级为:" + this.value1 : ""}`,
        type: "success"
      })
    }
  }
}, pu, Cu, !1, mu, "8fe18032", null, null);

function mu(A) {
  for (let e in Uu) this[e] = Uu[e]
}

Fu.options.__file = "src/views/Setting/setMain/SetCompress.vue";
const vu = function () {
  return Fu.exports
}();
var yu = function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("div", {staticClass: "set-upload"}, [A._m(0), t("el-input", {
    attrs: {placeholder: "eg:hexo/2/"},
    model: {
      value: A.tofile, callback: function (e) {
        A.tofile = e
      }, expression: "tofile"
    }
  }), t("el-button", {on: {click: A.saveToFile}}, [A._v("保存")])], 1)
}, Hu = [function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("h2", {
    staticClass: "setting-hd-h2",
    staticStyle: {"padding-bottom": "10px"}
  }, [A._v("B2桶图片上传路径（文件夹路径/名称） "), t("span", {staticClass: "red-c"}, [A._v("必填")]), A._v("（默认根目录下） ")])
}];
yu._withStripped = !0;
const Eu = {
  data: () => ({tofile: ""}), computed: {...Pe(at, ["DefaultToFile"])}, mounted() {
    this.tofile = this.DefaultToFile
  }, methods: {
    ...Ne(at, ["setDefaultToFile"]), ...Ne(at, ["setShowSettingBtn"]), saveToFile() {
      const A = "/" === this.tofile.slice(-1) || "" === this.tofile;
      ELEMENT.Notification({
        title: "提示",
        message: A ? `上传路径修改为：${this.tofile}` : "路径要以“/”结尾",
        type: A ? "success" : "error"
      }), A && (this.setDefaultToFile(this.tofile), this.setShowSettingBtn(!1))
    }
  }
}, bu = {};
var Iu = Ye(Eu, yu, Hu, !1, Lu, "ef07802c", null, null);

function Lu(A) {
  for (let e in bu) this[e] = bu[e]
}

Iu.options.__file = "src/views/Setting/setUploadFile/SetUpload.vue";
const Ku = function () {
  return Iu.exports
}();
var xu = function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("div", [A._m(0), t("el-radio-group", {
    attrs: {size: "small"},
    on: {change: A.handleFormat},
    model: {
      value: A.radiov, callback: function (e) {
        A.radiov = e
      }, expression: "radiov"
    }
  }, A._l(A.defaultcopyformat.formatList, (function (e, r) {
    return t("el-tooltip", {
      key: r,
      staticClass: "item",
      attrs: {effect: "dark", content: e || "您还未定义", placement: "top-start"}
    }, [t("el-radio", {attrs: {label: r, border: ""}}, [A._v(" " + A._s(r) + " ")])], 1)
  })), 1), "Custom" === A.radiov ? t("div", [t("el-input", {
    staticStyle: {
      width: "217px",
      "margin-top": "10px",
      "margin-right": "10px"
    }, attrs: {type: "text", placeholder: "自定义外链格式"}, model: {
      value: A.custom, callback: function (e) {
        A.custom = e
      }, expression: "custom"
    }
  }), t("el-button", {on: {click: A.validCustom}}, [A._v("保存")])], 1) : A._e()], 1)
}, Su = [function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("h2", {
    staticClass: "setting-hd-h2",
    staticStyle: {"margin-bottom": "10px"}
  }, [A._v("图片外链默认复制格式 "), t("span", {staticClass: "red-c"}, [A._v("%s")]), A._v("为外链地址")])
}];
xu._withStripped = !0;
const Du = {
  data: () => ({radiov: "", custom: ""}),
  computed: {...Pe(at, ["defaultcopyformat"]), ...Pe(at, ["defaultCopy"])},
  mounted() {
    this.radiov = this.defaultCopy, "Custom" === this.defaultCopy && (this.custom = this.defaultcopyformat.formatList.Custom)
  },
  methods: {
    ...Ne(at, ["setDefaultFormat"]), ...Ne(at, ["setCustomFormat"]), handleFormat(A) {
      "Custom" !== A ? (this.setDefaultFormat(A), ELEMENT.Notification({
        title: "自定义格式",
        message: "已将格式设置为：" + A,
        type: "success"
      })) : ELEMENT.Notification({
        title: "自定义格式",
        message: "请在输入框中填写，格式 %s ，eg: ![](%s)",
        type: "warning"
      })
    }, validCustom: Bt((function () {
      const A = /%s/g.test(this.custom);
      ELEMENT.Notification({
        title: "提示",
        message: A ? `您当前的默认外链已设置为：${this.custom}` : "自定义格式有误，请将%s按照格式填写，例如：![](%s)",
        type: A ? "success" : "error"
      }), A && (this.setDefaultFormat("Custom"), this.setCustomFormat(this.custom))
    }), 300, !0)
  }
}, _u = {};
var Mu = Ye(Du, xu, Su, !1, ku, null, null, null);

function ku(A) {
  for (let e in _u) this[e] = _u[e]
}

Mu.options.__file = "src/views/Setting/setcopy/SetCopy.vue";
const Tu = function () {
  return Mu.exports
}();
var Ou = function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("div", {staticClass: "set-default-copy"}, [A._m(0), t("el-switch", {
    attrs: {
      "active-text": "开启",
      "inactive-text": "关闭",
      "active-value": !0,
      "inactive-value": !1
    }, on: {change: A.handleComp}, model: {
      value: A.value, callback: function (e) {
        A.value = e
      }, expression: "value"
    }
  })], 1)
}, Vu = [function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("h2", {staticClass: "setting-hd-h2"}, [A._v("是否开启默认Markdown模式("), t("span", {staticClass: "red-c"}, [A._v("全局")]), A._v(")")])
}];
Ou._withStripped = !0;
const Gu = {
  data: () => ({value: !1}), computed: {...Pe(at, ["openUploadOutMD"])}, mounted() {
    this.value = !!this.openUploadOutMD
  }, methods: {
    handleComp(A) {
      at().$patch({openUploadOutMD: A})
    }
  }
}, Ru = {};
var Pu = Ye(Gu, Ou, Vu, !1, Nu, "bcc0dbb4", null, null);

function Nu(A) {
  for (let e in Ru) this[e] = Ru[e]
}

Pu.options.__file = "src/views/Setting/setdefaultCopy/SetDefaultCopy.vue";
const Ju = function () {
  return Pu.exports
}();
var Xu = function () {
  var A = this.$createElement, e = this._self._c || A;
  return e("svg", {
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
  }, [e("path", {
    attrs: {
      d: "M507.168 473.232L716.48 263.936a16 16 0 0 1 22.624 0l11.312 11.312a16 16 0 0 1 0 22.624L541.12 507.168 750.4 716.48a16 16 0 0 1 0 22.624l-11.312 11.312a16 16 0 0 1-22.624 0L507.168 541.12 297.872 750.4a16 16 0 0 1-22.624 0l-11.312-11.312a16 16 0 0 1 0-22.624l209.296-209.312-209.296-209.296a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l209.296 209.296z",
      "p-id": "1964"
    }
  })])
}, Wu = [];
Xu._withStripped = !0;
const Yu = {};
var ju = Ye({}, Xu, Wu, !1, $u, null, null, null);

function $u(A) {
  for (let e in Yu) this[e] = Yu[e]
}

ju.options.__file = "src/views/svg/CloseSvg.vue";
const Zu = function () {
  return ju.exports
}();
var zu = function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return A.ShowSetting ? t("div", {
    staticClass: "setting-view-wrap", on: {
      click: function (e) {
        return e.target !== e.currentTarget ? null : A.toclose.apply(null, arguments)
      }
    }
  }, [t("div", {
    staticClass: "setting-item-wrap animate__animated",
    class: A.ishow ? "animate__fadeInDown" : "animate__fadeOutDown"
  }, [t("div", {staticClass: "setting-hd"}, [A._v("全局配置 | Global configuration "), t("span", {
    staticClass: "close-setting",
    on: {click: A.toclose}
  }, [t("CloseSvg")], 1)]), t("div", {staticClass: "setting-content"}, [t("FormView", {staticClass: "separate-line"}), t("set-default-copy", {staticClass: "separate-line"}), t("set-upload", {staticClass: "separate-line"}), t("set-compress", {staticClass: "separate-line"}), t("set-prefix", {staticClass: "separate-line"}), t("set-copy", {staticClass: "separate-line"}), t("set-default", {staticClass: "separate-line"})], 1), A._m(0)])]) : A._e()
}, qu = [function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("p", [t("span", {staticClass: "red-c"}), A._v(""), t("a", {
    attrs: {
      href: "javascript:void(0);",
      rel: "noopener noreferrer"
    }
  }, [A._v("")])])
}];
zu._withStripped = !0;
const Ag = {
  components: {
    FormView: nu,
    SetPrefix: lu,
    SetDefault: fu,
    SetCompress: vu,
    SetUpload: Ku,
    SetCopy: Tu,
    SetDefaultCopy: Ju,
    CloseSvg: Zu
  },
  computed: {...Pe(at, ["ShowSetting"])},
  data: () => ({ishow: !0}),
  methods: {
    ...Ne(at, ["setShowSettingBtn"]), toclose() {
      this.ishow = !1, setTimeout((() => {
        this.setShowSettingBtn(!1), this.ishow = !0
      }), 500)
    }
  }
}, eg = {};
var tg = Ye(Ag, zu, qu, !1, rg, "4f263a54", null, null);

function rg(A) {
  for (let e in eg) this[e] = eg[e]
}

tg.options.__file = "src/components/setting/SettingView.vue";
const ng = function () {
  return tg.exports
}();
var sg = function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("div", {staticClass: "hd-w"}, [t("div", {staticClass: "lay-out"}, [t("SwitchTheme")], 1), t("nav", {
    staticClass: "nav-container",
    on: {
      click: function (e) {
        return A.handleNav(e)
      }
    }
  }, [t("span", {
    class: "home" === A.currentMenu ? "is-nav-selected" : "",
    attrs: {"data-index": "home"}
  }, [A._v("首页")]), A.isLogined ? t("span", {
    class: "imanage" === A.currentMenu ? "is-nav-selected" : "",
    attrs: {"data-index": "imanage"}
  }, [A._v("图床管理")]) : A._e(), A._m(0),]), t("router-view"), t("SettingView"), t("footer", )], 1)
}, og = [function () {
  var A = this.$createElement, e = this._self._c || A;
  return e("div", {staticClass: "logo-wrap"}, [e("img", {
    attrs: {
      src: "/img/icons/logo.svg",
      "data-index": "home",
      title: ""
    }
  })])
}];
sg._withStripped = !0;
const ig = {
  data: () => ({currentMenu: "home", disappear: !1}),
  watch: {
    routerName: {
      handler(A, e) {
        A !== this.currentMenu && (this.currentMenu = A)
      }
    }
  },
  components: {SwitchTheme: Zl, SettingView: ng},
  mounted() {
    const A = localStorage.getItem("themeb2");
    if (A) {
      const e = document.documentElement, t = JSON.parse(A).theme;
      e.className !== t && (document.documentElement.className = t)
    }
    this.handleReload()
  },
  computed: {timeE: () => (new Date).getFullYear(), ...Pe(at, ["isLogined"]), ...Pe(at, ["routerName"])},
  methods: {
    ...Ne(at, ["setroutername"]), handleReload() {
      this.currentMenu = this.$route.name
    }, handleNav(A) {
      const e = A.target.dataset.index, t = this.$route.name;
      e && t !== e && "setting" !== e && (this.$router.push({name: e}), this.currentMenu = e), "setting" === e && window.open("https://blazeb2.js.org")
    }
  }
}, ag = {};
var cg = Ye(ig, sg, og, !1, Bg, "545e3bf6", null, null);

function Bg(A) {
  for (let e in ag) this[e] = ag[e]
}

cg.options.__file = "src/views/TabNav/TabNav.vue";
const lg = function () {
  return cg.exports
}();
var ug = function () {
  var A = this, e = A.$createElement, t = A._self._c || e;
  return t("div", {staticClass: "common-container"}, [t("div", {staticStyle: {"text-align": "center"}}, [t("img", {
    attrs: {
      src: "/img/icons/logo.svg",
      alt: "",
      srcset: ""
    }
  }), t("h1", {staticClass: "main-title"}, [A._v("BlazeB2 图床")]), t("p", {staticClass: "p-simple"}, [A._v("📷基于 backBlazeb2 API & ⚡ cloudflare 开发的具有 CDN 加速功能的图床工具")]), t("p", {staticClass: "p-statement"}, [A._v("郑重声明：请勿通过本站上传违反你当地法律的图片，所造成的一切后果与本站无关。")]), t("p", {staticClass: "p-shield"}, A._l(A.shieldsList, (function (A) {
    return t("a", {
      key: A.alt,
      attrs: {href: A.link, target: "_blank", rel: "noopener noreferrer"}
    }, [t("img", {attrs: {src: A.svgpic, alt: A.alt}})])
  })), 0)])])
}, gg = [];
ug._withStripped = !0;
const wg = {};
var hg = Ye({
  data: () => ({
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
  })
}, ug, gg, !1, dg, "0d172ebe", null, null);

function dg(A) {
  for (let e in wg) this[e] = wg[e]
}

hg.options.__file = "src/views/About/About.vue";
const Qg = function () {
  return hg.exports
}();
Vue.use(VueRouter);
const fg = new VueRouter({
  routes: [{
    path: "/",
    component: lg,
    redirect: "home",
    children: [{path: "/home", name: "home", component: al, meta: {title: "首页 | BlazeB2 图床"}}, {
      path: "/imanage",
      name: "imanage",
      component: () => {
        return A = () => import("./ImgManage-af0395c2.js"), (e = ["js/ImgManage-af0395c2.js", "css/ImgManage-479834e7.css"]) && 0 !== e.length ? Promise.all(e.map((A => {
          if ((A = function (A) {
            return "/" + A
          }(A)) in qe) return;
          qe[A] = !0;
          const e = A.endsWith(".css"), t = e ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${A}"]${t}`)) return;
          const r = document.createElement("link");
          return r.rel = e ? "stylesheet" : "modulepreload", e || (r.as = "script", r.crossOrigin = ""), r.href = A, document.head.appendChild(r), e ? new Promise(((e, t) => {
            r.addEventListener("load", e), r.addEventListener("error", (() => t(new Error(`Unable to preload CSS for ${A}`))))
          })) : void 0
        }))).then((() => A())) : A();
        var A, e
      },
      meta: {title: "图床管理 | BlazeB2 图床"}
    }, {path: "/about", name: "about", component: Qg, meta: {title: "关于页面 | BlazeB2 图床"}}]
  }]
});
fg.beforeEach(((A, e, t) => {
  A.meta.title && (document.title = A.meta.title), t()
})), setTimeout((() => {
  fg.afterEach(((A, e) => {
    const t = at();
    "/home" !== A.path && "/imanage" !== A.path && "/setting" !== A.path || (t.handleIsLogined(), t.setShowSettingBtn(!1), t.isLogined && t.setNewAuthMsg())
  }))
}));
const pg = function () {
  const A = B(!0), e = A.run((() => AA({})));
  let t = [];
  const r = gA({
    install(A) {
      ee(r)
    }, use(A) {
      return this._a, t.push(A), this
    }, _p: t, _a: null, _e: A, _s: new Map, state: e
  });
  return oe && r.use(xe), r
}();
pg.use(function (A) {
  const e = (null == A ? void 0 : A.storage) || window && window.localStorage,
    t = (null == A ? void 0 : A.key) || "pinia", r = (null == A ? void 0 : A.logger) || !1;
  return A => {
    const n = A.store, s = ((A, e) => {
      const t = e.getItem ? e.getItem(A) : e.get(A);
      try {
        return "string" == typeof t ? JSON.parse(t) : "object" == typeof t ? t : void 0
      } catch (r) {
      }
    })(`${t}-${n.$id}`, e);
    s && n.$patch(s), n.$subscribe(((A, n) => {
      r && function (A, e, t) {
        const r = console.groupCollapsed || console.group;
        try {
          r(A, (new Date).toLocaleString())
        } catch (n) {
        }
      }(A.storeId);
      ((A, e, t) => {
        t.setItem ? t.setItem(A, JSON.stringify(e)) : t.set(A, JSON.stringify(e))
      })(`${t}-${A.storeId}`, n, e)
    }))
  }
}()), VueClipboard.config.autoSetContainer = !0, Vue.config.productionTip = !1, Vue.config.devtools = !1, Vue.use(ELEMENT), Vue.use(VueClipboard), Vue.use((function (A) {
  A.mixin({
    beforeCreate() {
      const A = this.$options;
      if (A.pinia) {
        const e = A.pinia;
        if (!this._provided) {
          const A = {};
          Object.defineProperty(this, "_provided", {get: () => A, set: e => Object.assign(A, e)})
        }
        this._provided[te] = e, this.$pinia || (this.$pinia = e), e._a = this, oe && (ee(e), Ee(e._a, e))
      } else !this.$pinia && A.parent && A.parent.$pinia && (this.$pinia = A.parent.$pinia)
    }, destroyed() {
      delete this._pStores
    }
  })
})), new Vue({pinia: pg, router: fg, render: A => A(ze)}).$mount("#app");
export {
  rr as M,
  A as __vite_legacy_guard,
  el as a,
  Pe as b,
  Ne as c,
  Bt as d,
  lt as e,
  nt as f,
  Je as m,
  Ye as n,
  rt as p,
  ct as t,
  at as u
};

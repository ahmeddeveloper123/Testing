const __vite__fileDeps = ["assets/index-CwIIUiE7.js", "assets/index-ho7BfW79.css"]
  , __vite__mapDeps = i => i.map(i => __vite__fileDeps[i]);
var x0 = Object.defineProperty;
var w0 = (t, e, n) => e in t ? x0(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var ur = (t, e, n) => (w0(t, typeof e != "symbol" ? e + "" : e, n),
n);
function S0(t, e) {
    for (var n = 0; n < e.length; n++) {
        const r = e[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in t)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(t, i, o.get ? o : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
var BS = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function k0(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var _m = {
    exports: {}
}
  , vu = {}
  , xm = {
    exports: {}
}
  , ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cl = Symbol.for("react.element")
  , T0 = Symbol.for("react.portal")
  , C0 = Symbol.for("react.fragment")
  , j0 = Symbol.for("react.strict_mode")
  , b0 = Symbol.for("react.profiler")
  , E0 = Symbol.for("react.provider")
  , N0 = Symbol.for("react.context")
  , P0 = Symbol.for("react.forward_ref")
  , O0 = Symbol.for("react.suspense")
  , R0 = Symbol.for("react.memo")
  , D0 = Symbol.for("react.lazy")
  , _h = Symbol.iterator;
function M0(t) {
    return t === null || typeof t != "object" ? null : (t = _h && t[_h] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var wm = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Sm = Object.assign
  , km = {};
function Jo(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = km,
    this.updater = n || wm
}
Jo.prototype.isReactComponent = {};
Jo.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
}
;
Jo.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
}
;
function Tm() {}
Tm.prototype = Jo.prototype;
function qd(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = km,
    this.updater = n || wm
}
var Kd = qd.prototype = new Tm;
Kd.constructor = qd;
Sm(Kd, Jo.prototype);
Kd.isPureReactComponent = !0;
var xh = Array.isArray
  , Cm = Object.prototype.hasOwnProperty
  , Zd = {
    current: null
}
  , jm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function bm(t, e, n) {
    var r, i = {}, o = null, s = null;
    if (e != null)
        for (r in e.ref !== void 0 && (s = e.ref),
        e.key !== void 0 && (o = "" + e.key),
        e)
            Cm.call(e, r) && !jm.hasOwnProperty(r) && (i[r] = e[r]);
    var l = arguments.length - 2;
    if (l === 1)
        i.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        i.children = a
    }
    if (t && t.defaultProps)
        for (r in l = t.defaultProps,
        l)
            i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: Cl,
        type: t,
        key: o,
        ref: s,
        props: i,
        _owner: Zd.current
    }
}
function z0(t, e) {
    return {
        $$typeof: Cl,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner
    }
}
function Jd(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Cl
}
function L0(t) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(n) {
        return e[n]
    })
}
var wh = /\/+/g;
function Wu(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? L0("" + t.key) : e.toString(36)
}
function ha(t, e, n, r, i) {
    var o = typeof t;
    (o === "undefined" || o === "boolean") && (t = null);
    var s = !1;
    if (t === null)
        s = !0;
    else
        switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (t.$$typeof) {
            case Cl:
            case T0:
                s = !0
            }
        }
    if (s)
        return s = t,
        i = i(s),
        t = r === "" ? "." + Wu(s, 0) : r,
        xh(i) ? (n = "",
        t != null && (n = t.replace(wh, "$&/") + "/"),
        ha(i, e, n, "", function(u) {
            return u
        })) : i != null && (Jd(i) && (i = z0(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(wh, "$&/") + "/") + t)),
        e.push(i)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    xh(t))
        for (var l = 0; l < t.length; l++) {
            o = t[l];
            var a = r + Wu(o, l);
            s += ha(o, e, n, a, i)
        }
    else if (a = M0(t),
    typeof a == "function")
        for (t = a.call(t),
        l = 0; !(o = t.next()).done; )
            o = o.value,
            a = r + Wu(o, l++),
            s += ha(o, e, n, a, i);
    else if (o === "object")
        throw e = String(t),
        Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function Ll(t, e, n) {
    if (t == null)
        return t;
    var r = []
      , i = 0;
    return ha(t, r, "", "", function(o) {
        return e.call(n, o, i++)
    }),
    r
}
function A0(t) {
    if (t._status === -1) {
        var e = t._result;
        e = e(),
        e.then(function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 1,
            t._result = n)
        }, function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 2,
            t._result = n)
        }),
        t._status === -1 && (t._status = 0,
        t._result = e)
    }
    if (t._status === 1)
        return t._result.default;
    throw t._result
}
var At = {
    current: null
}
  , pa = {
    transition: null
}
  , I0 = {
    ReactCurrentDispatcher: At,
    ReactCurrentBatchConfig: pa,
    ReactCurrentOwner: Zd
};
function Em() {
    throw Error("act(...) is not supported in production builds of React.")
}
ee.Children = {
    map: Ll,
    forEach: function(t, e, n) {
        Ll(t, function() {
            e.apply(this, arguments)
        }, n)
    },
    count: function(t) {
        var e = 0;
        return Ll(t, function() {
            e++
        }),
        e
    },
    toArray: function(t) {
        return Ll(t, function(e) {
            return e
        }) || []
    },
    only: function(t) {
        if (!Jd(t))
            throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
};
ee.Component = Jo;
ee.Fragment = C0;
ee.Profiler = b0;
ee.PureComponent = qd;
ee.StrictMode = j0;
ee.Suspense = O0;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I0;
ee.act = Em;
ee.cloneElement = function(t, e, n) {
    if (t == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var r = Sm({}, t.props)
      , i = t.key
      , o = t.ref
      , s = t._owner;
    if (e != null) {
        if (e.ref !== void 0 && (o = e.ref,
        s = Zd.current),
        e.key !== void 0 && (i = "" + e.key),
        t.type && t.type.defaultProps)
            var l = t.type.defaultProps;
        for (a in e)
            Cm.call(e, a) && !jm.hasOwnProperty(a) && (r[a] = e[a] === void 0 && l !== void 0 ? l[a] : e[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: Cl,
        type: t.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
}
;
ee.createContext = function(t) {
    return t = {
        $$typeof: N0,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    t.Provider = {
        $$typeof: E0,
        _context: t
    },
    t.Consumer = t
}
;
ee.createElement = bm;
ee.createFactory = function(t) {
    var e = bm.bind(null, t);
    return e.type = t,
    e
}
;
ee.createRef = function() {
    return {
        current: null
    }
}
;
ee.forwardRef = function(t) {
    return {
        $$typeof: P0,
        render: t
    }
}
;
ee.isValidElement = Jd;
ee.lazy = function(t) {
    return {
        $$typeof: D0,
        _payload: {
            _status: -1,
            _result: t
        },
        _init: A0
    }
}
;
ee.memo = function(t, e) {
    return {
        $$typeof: R0,
        type: t,
        compare: e === void 0 ? null : e
    }
}
;
ee.startTransition = function(t) {
    var e = pa.transition;
    pa.transition = {};
    try {
        t()
    } finally {
        pa.transition = e
    }
}
;
ee.unstable_act = Em;
ee.useCallback = function(t, e) {
    return At.current.useCallback(t, e)
}
;
ee.useContext = function(t) {
    return At.current.useContext(t)
}
;
ee.useDebugValue = function() {}
;
ee.useDeferredValue = function(t) {
    return At.current.useDeferredValue(t)
}
;
ee.useEffect = function(t, e) {
    return At.current.useEffect(t, e)
}
;
ee.useId = function() {
    return At.current.useId()
}
;
ee.useImperativeHandle = function(t, e, n) {
    return At.current.useImperativeHandle(t, e, n)
}
;
ee.useInsertionEffect = function(t, e) {
    return At.current.useInsertionEffect(t, e)
}
;
ee.useLayoutEffect = function(t, e) {
    return At.current.useLayoutEffect(t, e)
}
;
ee.useMemo = function(t, e) {
    return At.current.useMemo(t, e)
}
;
ee.useReducer = function(t, e, n) {
    return At.current.useReducer(t, e, n)
}
;
ee.useRef = function(t) {
    return At.current.useRef(t)
}
;
ee.useState = function(t) {
    return At.current.useState(t)
}
;
ee.useSyncExternalStore = function(t, e, n) {
    return At.current.useSyncExternalStore(t, e, n)
}
;
ee.useTransition = function() {
    return At.current.useTransition()
}
;
ee.version = "18.3.1";
xm.exports = ee;
var D = xm.exports;
const Nm = k0(D)
  , F0 = S0({
    __proto__: null,
    default: Nm
}, [D]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W0 = D
  , U0 = Symbol.for("react.element")
  , B0 = Symbol.for("react.fragment")
  , $0 = Object.prototype.hasOwnProperty
  , V0 = W0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Y0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Pm(t, e, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n),
    e.key !== void 0 && (o = "" + e.key),
    e.ref !== void 0 && (s = e.ref);
    for (r in e)
        $0.call(e, r) && !Y0.hasOwnProperty(r) && (i[r] = e[r]);
    if (t && t.defaultProps)
        for (r in e = t.defaultProps,
        e)
            i[r] === void 0 && (i[r] = e[r]);
    return {
        $$typeof: U0,
        type: t,
        key: o,
        ref: s,
        props: i,
        _owner: V0.current
    }
}
vu.Fragment = B0;
vu.jsx = Pm;
vu.jsxs = Pm;
_m.exports = vu;
var c = _m.exports
  , Nc = {}
  , Om = {
    exports: {}
}
  , hn = {}
  , Rm = {
    exports: {}
}
  , Dm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
    function e(P, z) {
        var S = P.length;
        P.push(z);
        e: for (; 0 < S; ) {
            var W = S - 1 >>> 1
              , ie = P[W];
            if (0 < i(ie, z))
                P[W] = z,
                P[S] = ie,
                S = W;
            else
                break e
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0]
    }
    function r(P) {
        if (P.length === 0)
            return null;
        var z = P[0]
          , S = P.pop();
        if (S !== z) {
            P[0] = S;
            e: for (var W = 0, ie = P.length, ct = ie >>> 1; W < ct; ) {
                var ae = 2 * (W + 1) - 1
                  , Re = P[ae]
                  , we = ae + 1
                  , pe = P[we];
                if (0 > i(Re, S))
                    we < ie && 0 > i(pe, Re) ? (P[W] = pe,
                    P[we] = S,
                    W = we) : (P[W] = Re,
                    P[ae] = S,
                    W = ae);
                else if (we < ie && 0 > i(pe, S))
                    P[W] = pe,
                    P[we] = S,
                    W = we;
                else
                    break e
            }
        }
        return z
    }
    function i(P, z) {
        var S = P.sortIndex - z.sortIndex;
        return S !== 0 ? S : P.id - z.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        t.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date
          , l = s.now();
        t.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = []
      , u = []
      , d = 1
      , f = null
      , h = 3
      , p = !1
      , _ = !1
      , g = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , y = typeof clearTimeout == "function" ? clearTimeout : null
      , m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(P) {
        for (var z = n(u); z !== null; ) {
            if (z.callback === null)
                r(u);
            else if (z.startTime <= P)
                r(u),
                z.sortIndex = z.expirationTime,
                e(a, z);
            else
                break;
            z = n(u)
        }
    }
    function x(P) {
        if (g = !1,
        v(P),
        !_)
            if (n(a) !== null)
                _ = !0,
                B(k);
            else {
                var z = n(u);
                z !== null && F(x, z.startTime - P)
            }
    }
    function k(P, z) {
        _ = !1,
        g && (g = !1,
        y(j),
        j = -1),
        p = !0;
        var S = h;
        try {
            for (v(z),
            f = n(a); f !== null && (!(f.expirationTime > z) || P && !I()); ) {
                var W = f.callback;
                if (typeof W == "function") {
                    f.callback = null,
                    h = f.priorityLevel;
                    var ie = W(f.expirationTime <= z);
                    z = t.unstable_now(),
                    typeof ie == "function" ? f.callback = ie : f === n(a) && r(a),
                    v(z)
                } else
                    r(a);
                f = n(a)
            }
            if (f !== null)
                var ct = !0;
            else {
                var ae = n(u);
                ae !== null && F(x, ae.startTime - z),
                ct = !1
            }
            return ct
        } finally {
            f = null,
            h = S,
            p = !1
        }
    }
    var C = !1
      , T = null
      , j = -1
      , N = 5
      , E = -1;
    function I() {
        return !(t.unstable_now() - E < N)
    }
    function R() {
        if (T !== null) {
            var P = t.unstable_now();
            E = P;
            var z = !0;
            try {
                z = T(!0, P)
            } finally {
                z ? V() : (C = !1,
                T = null)
            }
        } else
            C = !1
    }
    var V;
    if (typeof m == "function")
        V = function() {
            m(R)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var H = new MessageChannel
          , q = H.port2;
        H.port1.onmessage = R,
        V = function() {
            q.postMessage(null)
        }
    } else
        V = function() {
            w(R, 0)
        }
        ;
    function B(P) {
        T = P,
        C || (C = !0,
        V())
    }
    function F(P, z) {
        j = w(function() {
            P(t.unstable_now())
        }, z)
    }
    t.unstable_IdlePriority = 5,
    t.unstable_ImmediatePriority = 1,
    t.unstable_LowPriority = 4,
    t.unstable_NormalPriority = 3,
    t.unstable_Profiling = null,
    t.unstable_UserBlockingPriority = 2,
    t.unstable_cancelCallback = function(P) {
        P.callback = null
    }
    ,
    t.unstable_continueExecution = function() {
        _ || p || (_ = !0,
        B(k))
    }
    ,
    t.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < P ? Math.floor(1e3 / P) : 5
    }
    ,
    t.unstable_getCurrentPriorityLevel = function() {
        return h
    }
    ,
    t.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    t.unstable_next = function(P) {
        switch (h) {
        case 1:
        case 2:
        case 3:
            var z = 3;
            break;
        default:
            z = h
        }
        var S = h;
        h = z;
        try {
            return P()
        } finally {
            h = S
        }
    }
    ,
    t.unstable_pauseExecution = function() {}
    ,
    t.unstable_requestPaint = function() {}
    ,
    t.unstable_runWithPriority = function(P, z) {
        switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            P = 3
        }
        var S = h;
        h = P;
        try {
            return z()
        } finally {
            h = S
        }
    }
    ,
    t.unstable_scheduleCallback = function(P, z, S) {
        var W = t.unstable_now();
        switch (typeof S == "object" && S !== null ? (S = S.delay,
        S = typeof S == "number" && 0 < S ? W + S : W) : S = W,
        P) {
        case 1:
            var ie = -1;
            break;
        case 2:
            ie = 250;
            break;
        case 5:
            ie = 1073741823;
            break;
        case 4:
            ie = 1e4;
            break;
        default:
            ie = 5e3
        }
        return ie = S + ie,
        P = {
            id: d++,
            callback: z,
            priorityLevel: P,
            startTime: S,
            expirationTime: ie,
            sortIndex: -1
        },
        S > W ? (P.sortIndex = S,
        e(u, P),
        n(a) === null && P === n(u) && (g ? (y(j),
        j = -1) : g = !0,
        F(x, S - W))) : (P.sortIndex = ie,
        e(a, P),
        _ || p || (_ = !0,
        B(k))),
        P
    }
    ,
    t.unstable_shouldYield = I,
    t.unstable_wrapCallback = function(P) {
        var z = h;
        return function() {
            var S = h;
            h = z;
            try {
                return P.apply(this, arguments)
            } finally {
                h = S
            }
        }
    }
}
)(Dm);
Rm.exports = Dm;
var H0 = Rm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X0 = D
  , dn = H0;
function O(t) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Mm = new Set
  , Ks = {};
function qi(t, e) {
    Wo(t, e),
    Wo(t + "Capture", e)
}
function Wo(t, e) {
    for (Ks[t] = e,
    t = 0; t < e.length; t++)
        Mm.add(e[t])
}
var xr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Pc = Object.prototype.hasOwnProperty
  , G0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Sh = {}
  , kh = {};
function Q0(t) {
    return Pc.call(kh, t) ? !0 : Pc.call(Sh, t) ? !1 : G0.test(t) ? kh[t] = !0 : (Sh[t] = !0,
    !1)
}
function q0(t, e, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof e) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (t = t.toLowerCase().slice(0, 5),
        t !== "data-" && t !== "aria-");
    default:
        return !1
    }
}
function K0(t, e, n, r) {
    if (e === null || typeof e > "u" || q0(t, e, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !e;
        case 4:
            return e === !1;
        case 5:
            return isNaN(e);
        case 6:
            return isNaN(e) || 1 > e
        }
    return !1
}
function It(t, e, n, r, i, o, s) {
    this.acceptsBooleans = e === 2 || e === 3 || e === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = t,
    this.type = e,
    this.sanitizeURL = o,
    this.removeEmptyString = s
}
var ut = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    ut[t] = new It(t,0,!1,t,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var e = t[0];
    ut[e] = new It(e,1,!1,t[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    ut[t] = new It(t,2,!1,t.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    ut[t] = new It(t,2,!1,t,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    ut[t] = new It(t,3,!1,t.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
    ut[t] = new It(t,3,!0,t,null,!1,!1)
});
["capture", "download"].forEach(function(t) {
    ut[t] = new It(t,4,!1,t,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(t) {
    ut[t] = new It(t,6,!1,t,null,!1,!1)
});
["rowSpan", "start"].forEach(function(t) {
    ut[t] = new It(t,5,!1,t.toLowerCase(),null,!1,!1)
});
var ef = /[\-:]([a-z])/g;
function tf(t) {
    return t[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var e = t.replace(ef, tf);
    ut[e] = new It(e,1,!1,t,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var e = t.replace(ef, tf);
    ut[e] = new It(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var e = t.replace(ef, tf);
    ut[e] = new It(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(t) {
    ut[t] = new It(t,1,!1,t.toLowerCase(),null,!1,!1)
});
ut.xlinkHref = new It("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(t) {
    ut[t] = new It(t,1,!1,t.toLowerCase(),null,!0,!0)
});
function nf(t, e, n, r) {
    var i = ut.hasOwnProperty(e) ? ut[e] : null;
    (i !== null ? i.type !== 0 : r || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (K0(e, n, i, r) && (n = null),
    r || i === null ? Q0(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : i.mustUseProperty ? t[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (e = i.attributeName,
    r = i.attributeNamespace,
    n === null ? t.removeAttribute(e) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
}
var jr = X0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Al = Symbol.for("react.element")
  , fo = Symbol.for("react.portal")
  , ho = Symbol.for("react.fragment")
  , rf = Symbol.for("react.strict_mode")
  , Oc = Symbol.for("react.profiler")
  , zm = Symbol.for("react.provider")
  , Lm = Symbol.for("react.context")
  , of = Symbol.for("react.forward_ref")
  , Rc = Symbol.for("react.suspense")
  , Dc = Symbol.for("react.suspense_list")
  , sf = Symbol.for("react.memo")
  , zr = Symbol.for("react.lazy")
  , Am = Symbol.for("react.offscreen")
  , Th = Symbol.iterator;
function as(t) {
    return t === null || typeof t != "object" ? null : (t = Th && t[Th] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var Ee = Object.assign, Uu;
function _s(t) {
    if (Uu === void 0)
        try {
            throw Error()
        } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/);
            Uu = e && e[1] || ""
        }
    return `
` + Uu + t
}
var Bu = !1;
function $u(t, e) {
    if (!t || Bu)
        return "";
    Bu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (e = function() {
                throw Error()
            }
            ,
            Object.defineProperty(e.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(e, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(t, [], e)
            } else {
                try {
                    e.call()
                } catch (u) {
                    r = u
                }
                t.call(e.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            t()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, l = o.length - 1; 1 <= s && 0 <= l && i[s] !== o[l]; )
                l--;
            for (; 1 <= s && 0 <= l; s--,
            l--)
                if (i[s] !== o[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--,
                            l--,
                            0 > l || i[s] !== o[l]) {
                                var a = `
` + i[s].replace(" at new ", " at ");
                                return t.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", t.displayName)),
                                a
                            }
                        while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        Bu = !1,
        Error.prepareStackTrace = n
    }
    return (t = t ? t.displayName || t.name : "") ? _s(t) : ""
}
function Z0(t) {
    switch (t.tag) {
    case 5:
        return _s(t.type);
    case 16:
        return _s("Lazy");
    case 13:
        return _s("Suspense");
    case 19:
        return _s("SuspenseList");
    case 0:
    case 2:
    case 15:
        return t = $u(t.type, !1),
        t;
    case 11:
        return t = $u(t.type.render, !1),
        t;
    case 1:
        return t = $u(t.type, !0),
        t;
    default:
        return ""
    }
}
function Mc(t) {
    if (t == null)
        return null;
    if (typeof t == "function")
        return t.displayName || t.name || null;
    if (typeof t == "string")
        return t;
    switch (t) {
    case ho:
        return "Fragment";
    case fo:
        return "Portal";
    case Oc:
        return "Profiler";
    case rf:
        return "StrictMode";
    case Rc:
        return "Suspense";
    case Dc:
        return "SuspenseList"
    }
    if (typeof t == "object")
        switch (t.$$typeof) {
        case Lm:
            return (t.displayName || "Context") + ".Consumer";
        case zm:
            return (t._context.displayName || "Context") + ".Provider";
        case of:
            var e = t.render;
            return t = t.displayName,
            t || (t = e.displayName || e.name || "",
            t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
            t;
        case sf:
            return e = t.displayName || null,
            e !== null ? e : Mc(t.type) || "Memo";
        case zr:
            e = t._payload,
            t = t._init;
            try {
                return Mc(t(e))
            } catch {}
        }
    return null
}
function J0(t) {
    var e = t.type;
    switch (t.tag) {
    case 24:
        return "Cache";
    case 9:
        return (e.displayName || "Context") + ".Consumer";
    case 10:
        return (e._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return t = e.render,
        t = t.displayName || t.name || "",
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return e;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Mc(e);
    case 8:
        return e === rf ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e
    }
    return null
}
function oi(t) {
    switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return t;
    case "object":
        return t;
    default:
        return ""
    }
}
function Im(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}
function e_(t) {
    var e = Im(t) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e)
      , r = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(t, e, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s,
                o.call(this, s)
            }
        }),
        Object.defineProperty(t, e, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                t._valueTracker = null,
                delete t[e]
            }
        }
    }
}
function Il(t) {
    t._valueTracker || (t._valueTracker = e_(t))
}
function Fm(t) {
    if (!t)
        return !1;
    var e = t._valueTracker;
    if (!e)
        return !0;
    var n = e.getValue()
      , r = "";
    return t && (r = Im(t) ? t.checked ? "true" : "false" : t.value),
    t = r,
    t !== n ? (e.setValue(t),
    !0) : !1
}
function Ma(t) {
    if (t = t || (typeof document < "u" ? document : void 0),
    typeof t > "u")
        return null;
    try {
        return t.activeElement || t.body
    } catch {
        return t.body
    }
}
function zc(t, e) {
    var n = e.checked;
    return Ee({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? t._wrapperState.initialChecked
    })
}
function Ch(t, e) {
    var n = e.defaultValue == null ? "" : e.defaultValue
      , r = e.checked != null ? e.checked : e.defaultChecked;
    n = oi(e.value != null ? e.value : n),
    t._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
    }
}
function Wm(t, e) {
    e = e.checked,
    e != null && nf(t, "checked", e, !1)
}
function Lc(t, e) {
    Wm(t, e);
    var n = oi(e.value)
      , r = e.type;
    if (n != null)
        r === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
    else if (r === "submit" || r === "reset") {
        t.removeAttribute("value");
        return
    }
    e.hasOwnProperty("value") ? Ac(t, e.type, n) : e.hasOwnProperty("defaultValue") && Ac(t, e.type, oi(e.defaultValue)),
    e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked)
}
function jh(t, e, n) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var r = e.type;
        if (!(r !== "submit" && r !== "reset" || e.value !== void 0 && e.value !== null))
            return;
        e = "" + t._wrapperState.initialValue,
        n || e === t.value || (t.value = e),
        t.defaultValue = e
    }
    n = t.name,
    n !== "" && (t.name = ""),
    t.defaultChecked = !!t._wrapperState.initialChecked,
    n !== "" && (t.name = n)
}
function Ac(t, e, n) {
    (e !== "number" || Ma(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
}
var xs = Array.isArray;
function bo(t, e, n, r) {
    if (t = t.options,
    e) {
        e = {};
        for (var i = 0; i < n.length; i++)
            e["$" + n[i]] = !0;
        for (n = 0; n < t.length; n++)
            i = e.hasOwnProperty("$" + t[n].value),
            t[n].selected !== i && (t[n].selected = i),
            i && r && (t[n].defaultSelected = !0)
    } else {
        for (n = "" + oi(n),
        e = null,
        i = 0; i < t.length; i++) {
            if (t[i].value === n) {
                t[i].selected = !0,
                r && (t[i].defaultSelected = !0);
                return
            }
            e !== null || t[i].disabled || (e = t[i])
        }
        e !== null && (e.selected = !0)
    }
}
function Ic(t, e) {
    if (e.dangerouslySetInnerHTML != null)
        throw Error(O(91));
    return Ee({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
    })
}
function bh(t, e) {
    var n = e.value;
    if (n == null) {
        if (n = e.children,
        e = e.defaultValue,
        n != null) {
            if (e != null)
                throw Error(O(92));
            if (xs(n)) {
                if (1 < n.length)
                    throw Error(O(93));
                n = n[0]
            }
            e = n
        }
        e == null && (e = ""),
        n = e
    }
    t._wrapperState = {
        initialValue: oi(n)
    }
}
function Um(t, e) {
    var n = oi(e.value)
      , r = oi(e.defaultValue);
    n != null && (n = "" + n,
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r)
}
function Eh(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e)
}
function Bm(t) {
    switch (t) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Fc(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? Bm(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
}
var Fl, $m = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return t(e, n, r, i)
        })
    }
    : t
}(function(t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in t)
        t.innerHTML = e;
    else {
        for (Fl = Fl || document.createElement("div"),
        Fl.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
        e = Fl.firstChild; t.firstChild; )
            t.removeChild(t.firstChild);
        for (; e.firstChild; )
            t.appendChild(e.firstChild)
    }
});
function Zs(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return
        }
    }
    t.textContent = e
}
var Ps = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , t_ = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ps).forEach(function(t) {
    t_.forEach(function(e) {
        e = e + t.charAt(0).toUpperCase() + t.substring(1),
        Ps[e] = Ps[t]
    })
});
function Vm(t, e, n) {
    return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || Ps.hasOwnProperty(t) && Ps[t] ? ("" + e).trim() : e + "px"
}
function Ym(t, e) {
    t = t.style;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = Vm(n, e[n], r);
            n === "float" && (n = "cssFloat"),
            r ? t.setProperty(n, i) : t[n] = i
        }
}
var n_ = Ee({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Wc(t, e) {
    if (e) {
        if (n_[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
            throw Error(O(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null)
                throw Error(O(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html"in e.dangerouslySetInnerHTML))
                throw Error(O(61))
        }
        if (e.style != null && typeof e.style != "object")
            throw Error(O(62))
    }
}
function Uc(t, e) {
    if (t.indexOf("-") === -1)
        return typeof e.is == "string";
    switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Bc = null;
function lf(t) {
    return t = t.target || t.srcElement || window,
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
}
var $c = null
  , Eo = null
  , No = null;
function Nh(t) {
    if (t = El(t)) {
        if (typeof $c != "function")
            throw Error(O(280));
        var e = t.stateNode;
        e && (e = ku(e),
        $c(t.stateNode, t.type, e))
    }
}
function Hm(t) {
    Eo ? No ? No.push(t) : No = [t] : Eo = t
}
function Xm() {
    if (Eo) {
        var t = Eo
          , e = No;
        if (No = Eo = null,
        Nh(t),
        e)
            for (t = 0; t < e.length; t++)
                Nh(e[t])
    }
}
function Gm(t, e) {
    return t(e)
}
function Qm() {}
var Vu = !1;
function qm(t, e, n) {
    if (Vu)
        return t(e, n);
    Vu = !0;
    try {
        return Gm(t, e, n)
    } finally {
        Vu = !1,
        (Eo !== null || No !== null) && (Qm(),
        Xm())
    }
}
function Js(t, e) {
    var n = t.stateNode;
    if (n === null)
        return null;
    var r = ku(n);
    if (r === null)
        return null;
    n = r[e];
    e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (t = t.type,
        r = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
        t = !r;
        break e;
    default:
        t = !1
    }
    if (t)
        return null;
    if (n && typeof n != "function")
        throw Error(O(231, e, typeof n));
    return n
}
var Vc = !1;
if (xr)
    try {
        var us = {};
        Object.defineProperty(us, "passive", {
            get: function() {
                Vc = !0
            }
        }),
        window.addEventListener("test", us, us),
        window.removeEventListener("test", us, us)
    } catch {
        Vc = !1
    }
function r_(t, e, n, r, i, o, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var Os = !1
  , za = null
  , La = !1
  , Yc = null
  , i_ = {
    onError: function(t) {
        Os = !0,
        za = t
    }
};
function o_(t, e, n, r, i, o, s, l, a) {
    Os = !1,
    za = null,
    r_.apply(i_, arguments)
}
function s_(t, e, n, r, i, o, s, l, a) {
    if (o_.apply(this, arguments),
    Os) {
        if (Os) {
            var u = za;
            Os = !1,
            za = null
        } else
            throw Error(O(198));
        La || (La = !0,
        Yc = u)
    }
}
function Ki(t) {
    var e = t
      , n = t;
    if (t.alternate)
        for (; e.return; )
            e = e.return;
    else {
        t = e;
        do
            e = t,
            e.flags & 4098 && (n = e.return),
            t = e.return;
        while (t)
    }
    return e.tag === 3 ? n : null
}
function Km(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate,
        t !== null && (e = t.memoizedState)),
        e !== null)
            return e.dehydrated
    }
    return null
}
function Ph(t) {
    if (Ki(t) !== t)
        throw Error(O(188))
}
function l_(t) {
    var e = t.alternate;
    if (!e) {
        if (e = Ki(t),
        e === null)
            throw Error(O(188));
        return e !== t ? null : t
    }
    for (var n = t, r = e; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return Ph(i),
                    t;
                if (o === r)
                    return Ph(i),
                    e;
                o = o.sibling
            }
            throw Error(O(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var s = !1, l = i.child; l; ) {
                if (l === n) {
                    s = !0,
                    n = i,
                    r = o;
                    break
                }
                if (l === r) {
                    s = !0,
                    r = i,
                    n = o;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = o.child; l; ) {
                    if (l === n) {
                        s = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (l === r) {
                        s = !0,
                        r = o,
                        n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!s)
                    throw Error(O(189))
            }
        }
        if (n.alternate !== r)
            throw Error(O(190))
    }
    if (n.tag !== 3)
        throw Error(O(188));
    return n.stateNode.current === n ? t : e
}
function Zm(t) {
    return t = l_(t),
    t !== null ? Jm(t) : null
}
function Jm(t) {
    if (t.tag === 5 || t.tag === 6)
        return t;
    for (t = t.child; t !== null; ) {
        var e = Jm(t);
        if (e !== null)
            return e;
        t = t.sibling
    }
    return null
}
var eg = dn.unstable_scheduleCallback
  , Oh = dn.unstable_cancelCallback
  , a_ = dn.unstable_shouldYield
  , u_ = dn.unstable_requestPaint
  , Ae = dn.unstable_now
  , c_ = dn.unstable_getCurrentPriorityLevel
  , af = dn.unstable_ImmediatePriority
  , tg = dn.unstable_UserBlockingPriority
  , Aa = dn.unstable_NormalPriority
  , d_ = dn.unstable_LowPriority
  , ng = dn.unstable_IdlePriority
  , _u = null
  , tr = null;
function f_(t) {
    if (tr && typeof tr.onCommitFiberRoot == "function")
        try {
            tr.onCommitFiberRoot(_u, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
}
var Un = Math.clz32 ? Math.clz32 : m_
  , h_ = Math.log
  , p_ = Math.LN2;
function m_(t) {
    return t >>>= 0,
    t === 0 ? 32 : 31 - (h_(t) / p_ | 0) | 0
}
var Wl = 64
  , Ul = 4194304;
function ws(t) {
    switch (t & -t) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return t & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return t
    }
}
function Ia(t, e) {
    var n = t.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = t.suspendedLanes
      , o = t.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var l = s & ~i;
        l !== 0 ? r = ws(l) : (o &= s,
        o !== 0 && (r = ws(o)))
    } else
        s = n & ~i,
        s !== 0 ? r = ws(s) : o !== 0 && (r = ws(o));
    if (r === 0)
        return 0;
    if (e !== 0 && e !== r && !(e & i) && (i = r & -r,
    o = e & -e,
    i >= o || i === 16 && (o & 4194240) !== 0))
        return e;
    if (r & 4 && (r |= n & 16),
    e = t.entangledLanes,
    e !== 0)
        for (t = t.entanglements,
        e &= r; 0 < e; )
            n = 31 - Un(e),
            i = 1 << n,
            r |= t[n],
            e &= ~i;
    return r
}
function g_(t, e) {
    switch (t) {
    case 1:
    case 2:
    case 4:
        return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function y_(t, e) {
    for (var n = t.suspendedLanes, r = t.pingedLanes, i = t.expirationTimes, o = t.pendingLanes; 0 < o; ) {
        var s = 31 - Un(o)
          , l = 1 << s
          , a = i[s];
        a === -1 ? (!(l & n) || l & r) && (i[s] = g_(l, e)) : a <= e && (t.expiredLanes |= l),
        o &= ~l
    }
}
function Hc(t) {
    return t = t.pendingLanes & -1073741825,
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
}
function rg() {
    var t = Wl;
    return Wl <<= 1,
    !(Wl & 4194240) && (Wl = 64),
    t
}
function Yu(t) {
    for (var e = [], n = 0; 31 > n; n++)
        e.push(t);
    return e
}
function jl(t, e, n) {
    t.pendingLanes |= e,
    e !== 536870912 && (t.suspendedLanes = 0,
    t.pingedLanes = 0),
    t = t.eventTimes,
    e = 31 - Un(e),
    t[e] = n
}
function v_(t, e) {
    var n = t.pendingLanes & ~e;
    t.pendingLanes = e,
    t.suspendedLanes = 0,
    t.pingedLanes = 0,
    t.expiredLanes &= e,
    t.mutableReadLanes &= e,
    t.entangledLanes &= e,
    e = t.entanglements;
    var r = t.eventTimes;
    for (t = t.expirationTimes; 0 < n; ) {
        var i = 31 - Un(n)
          , o = 1 << i;
        e[i] = 0,
        r[i] = -1,
        t[i] = -1,
        n &= ~o
    }
}
function uf(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
        var r = 31 - Un(n)
          , i = 1 << r;
        i & e | t[r] & e && (t[r] |= e),
        n &= ~i
    }
}
var ue = 0;
function ig(t) {
    return t &= -t,
    1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
}
var og, cf, sg, lg, ag, Xc = !1, Bl = [], Xr = null, Gr = null, Qr = null, el = new Map, tl = new Map, Ar = [], __ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Rh(t, e) {
    switch (t) {
    case "focusin":
    case "focusout":
        Xr = null;
        break;
    case "dragenter":
    case "dragleave":
        Gr = null;
        break;
    case "mouseover":
    case "mouseout":
        Qr = null;
        break;
    case "pointerover":
    case "pointerout":
        el.delete(e.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        tl.delete(e.pointerId)
    }
}
function cs(t, e, n, r, i, o) {
    return t === null || t.nativeEvent !== o ? (t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    e !== null && (e = El(e),
    e !== null && cf(e)),
    t) : (t.eventSystemFlags |= r,
    e = t.targetContainers,
    i !== null && e.indexOf(i) === -1 && e.push(i),
    t)
}
function x_(t, e, n, r, i) {
    switch (e) {
    case "focusin":
        return Xr = cs(Xr, t, e, n, r, i),
        !0;
    case "dragenter":
        return Gr = cs(Gr, t, e, n, r, i),
        !0;
    case "mouseover":
        return Qr = cs(Qr, t, e, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return el.set(o, cs(el.get(o) || null, t, e, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        tl.set(o, cs(tl.get(o) || null, t, e, n, r, i)),
        !0
    }
    return !1
}
function ug(t) {
    var e = ji(t.target);
    if (e !== null) {
        var n = Ki(e);
        if (n !== null) {
            if (e = n.tag,
            e === 13) {
                if (e = Km(n),
                e !== null) {
                    t.blockedOn = e,
                    ag(t.priority, function() {
                        sg(n)
                    });
                    return
                }
            } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    t.blockedOn = null
}
function ma(t) {
    if (t.blockedOn !== null)
        return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
        var n = Gc(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var r = new n.constructor(n.type,n);
            Bc = r,
            n.target.dispatchEvent(r),
            Bc = null
        } else
            return e = El(n),
            e !== null && cf(e),
            t.blockedOn = n,
            !1;
        e.shift()
    }
    return !0
}
function Dh(t, e, n) {
    ma(t) && n.delete(e)
}
function w_() {
    Xc = !1,
    Xr !== null && ma(Xr) && (Xr = null),
    Gr !== null && ma(Gr) && (Gr = null),
    Qr !== null && ma(Qr) && (Qr = null),
    el.forEach(Dh),
    tl.forEach(Dh)
}
function ds(t, e) {
    t.blockedOn === e && (t.blockedOn = null,
    Xc || (Xc = !0,
    dn.unstable_scheduleCallback(dn.unstable_NormalPriority, w_)))
}
function nl(t) {
    function e(i) {
        return ds(i, t)
    }
    if (0 < Bl.length) {
        ds(Bl[0], t);
        for (var n = 1; n < Bl.length; n++) {
            var r = Bl[n];
            r.blockedOn === t && (r.blockedOn = null)
        }
    }
    for (Xr !== null && ds(Xr, t),
    Gr !== null && ds(Gr, t),
    Qr !== null && ds(Qr, t),
    el.forEach(e),
    tl.forEach(e),
    n = 0; n < Ar.length; n++)
        r = Ar[n],
        r.blockedOn === t && (r.blockedOn = null);
    for (; 0 < Ar.length && (n = Ar[0],
    n.blockedOn === null); )
        ug(n),
        n.blockedOn === null && Ar.shift()
}
var Po = jr.ReactCurrentBatchConfig
  , Fa = !0;
function S_(t, e, n, r) {
    var i = ue
      , o = Po.transition;
    Po.transition = null;
    try {
        ue = 1,
        df(t, e, n, r)
    } finally {
        ue = i,
        Po.transition = o
    }
}
function k_(t, e, n, r) {
    var i = ue
      , o = Po.transition;
    Po.transition = null;
    try {
        ue = 4,
        df(t, e, n, r)
    } finally {
        ue = i,
        Po.transition = o
    }
}
function df(t, e, n, r) {
    if (Fa) {
        var i = Gc(t, e, n, r);
        if (i === null)
            tc(t, e, r, Wa, n),
            Rh(t, r);
        else if (x_(i, t, e, n, r))
            r.stopPropagation();
        else if (Rh(t, r),
        e & 4 && -1 < __.indexOf(t)) {
            for (; i !== null; ) {
                var o = El(i);
                if (o !== null && og(o),
                o = Gc(t, e, n, r),
                o === null && tc(t, e, r, Wa, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            tc(t, e, r, null, n)
    }
}
var Wa = null;
function Gc(t, e, n, r) {
    if (Wa = null,
    t = lf(r),
    t = ji(t),
    t !== null)
        if (e = Ki(t),
        e === null)
            t = null;
        else if (n = e.tag,
        n === 13) {
            if (t = Km(e),
            t !== null)
                return t;
            t = null
        } else if (n === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
                return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null
        } else
            e !== t && (t = null);
    return Wa = t,
    null
}
function cg(t) {
    switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (c_()) {
        case af:
            return 1;
        case tg:
            return 4;
        case Aa:
        case d_:
            return 16;
        case ng:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Fr = null
  , ff = null
  , ga = null;
function dg() {
    if (ga)
        return ga;
    var t, e = ff, n = e.length, r, i = "value"in Fr ? Fr.value : Fr.textContent, o = i.length;
    for (t = 0; t < n && e[t] === i[t]; t++)
        ;
    var s = n - t;
    for (r = 1; r <= s && e[n - r] === i[o - r]; r++)
        ;
    return ga = i.slice(t, 1 < r ? 1 - r : void 0)
}
function ya(t) {
    var e = t.keyCode;
    return "charCode"in t ? (t = t.charCode,
    t === 0 && e === 13 && (t = 13)) : t = e,
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
}
function $l() {
    return !0
}
function Mh() {
    return !1
}
function pn(t) {
    function e(n, r, i, o, s) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = s,
        this.currentTarget = null;
        for (var l in t)
            t.hasOwnProperty(l) && (n = t[l],
            this[l] = n ? n(o) : o[l]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? $l : Mh,
        this.isPropagationStopped = Mh,
        this
    }
    return Ee(e.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = $l)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = $l)
        },
        persist: function() {},
        isPersistent: $l
    }),
    e
}
var es = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
        return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, hf = pn(es), bl = Ee({}, es, {
    view: 0,
    detail: 0
}), T_ = pn(bl), Hu, Xu, fs, xu = Ee({}, bl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: pf,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
    },
    movementX: function(t) {
        return "movementX"in t ? t.movementX : (t !== fs && (fs && t.type === "mousemove" ? (Hu = t.screenX - fs.screenX,
        Xu = t.screenY - fs.screenY) : Xu = Hu = 0,
        fs = t),
        Hu)
    },
    movementY: function(t) {
        return "movementY"in t ? t.movementY : Xu
    }
}), zh = pn(xu), C_ = Ee({}, xu, {
    dataTransfer: 0
}), j_ = pn(C_), b_ = Ee({}, bl, {
    relatedTarget: 0
}), Gu = pn(b_), E_ = Ee({}, es, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), N_ = pn(E_), P_ = Ee({}, es, {
    clipboardData: function(t) {
        return "clipboardData"in t ? t.clipboardData : window.clipboardData
    }
}), O_ = pn(P_), R_ = Ee({}, es, {
    data: 0
}), Lh = pn(R_), D_ = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, M_ = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, z_ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function L_(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = z_[t]) ? !!e[t] : !1
}
function pf() {
    return L_
}
var A_ = Ee({}, bl, {
    key: function(t) {
        if (t.key) {
            var e = D_[t.key] || t.key;
            if (e !== "Unidentified")
                return e
        }
        return t.type === "keypress" ? (t = ya(t),
        t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? M_[t.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: pf,
    charCode: function(t) {
        return t.type === "keypress" ? ya(t) : 0
    },
    keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    },
    which: function(t) {
        return t.type === "keypress" ? ya(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    }
})
  , I_ = pn(A_)
  , F_ = Ee({}, xu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Ah = pn(F_)
  , W_ = Ee({}, bl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: pf
})
  , U_ = pn(W_)
  , B_ = Ee({}, es, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , $_ = pn(B_)
  , V_ = Ee({}, xu, {
    deltaX: function(t) {
        return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
    },
    deltaY: function(t) {
        return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Y_ = pn(V_)
  , H_ = [9, 13, 27, 32]
  , mf = xr && "CompositionEvent"in window
  , Rs = null;
xr && "documentMode"in document && (Rs = document.documentMode);
var X_ = xr && "TextEvent"in window && !Rs
  , fg = xr && (!mf || Rs && 8 < Rs && 11 >= Rs)
  , Ih = " "
  , Fh = !1;
function hg(t, e) {
    switch (t) {
    case "keyup":
        return H_.indexOf(e.keyCode) !== -1;
    case "keydown":
        return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function pg(t) {
    return t = t.detail,
    typeof t == "object" && "data"in t ? t.data : null
}
var po = !1;
function G_(t, e) {
    switch (t) {
    case "compositionend":
        return pg(e);
    case "keypress":
        return e.which !== 32 ? null : (Fh = !0,
        Ih);
    case "textInput":
        return t = e.data,
        t === Ih && Fh ? null : t;
    default:
        return null
    }
}
function Q_(t, e) {
    if (po)
        return t === "compositionend" || !mf && hg(t, e) ? (t = dg(),
        ga = ff = Fr = null,
        po = !1,
        t) : null;
    switch (t) {
    case "paste":
        return null;
    case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length)
                return e.char;
            if (e.which)
                return String.fromCharCode(e.which)
        }
        return null;
    case "compositionend":
        return fg && e.locale !== "ko" ? null : e.data;
    default:
        return null
    }
}
var q_ = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Wh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!q_[t.type] : e === "textarea"
}
function mg(t, e, n, r) {
    Hm(r),
    e = Ua(e, "onChange"),
    0 < e.length && (n = new hf("onChange","change",null,n,r),
    t.push({
        event: n,
        listeners: e
    }))
}
var Ds = null
  , rl = null;
function K_(t) {
    jg(t, 0)
}
function wu(t) {
    var e = yo(t);
    if (Fm(e))
        return t
}
function Z_(t, e) {
    if (t === "change")
        return e
}
var gg = !1;
if (xr) {
    var Qu;
    if (xr) {
        var qu = "oninput"in document;
        if (!qu) {
            var Uh = document.createElement("div");
            Uh.setAttribute("oninput", "return;"),
            qu = typeof Uh.oninput == "function"
        }
        Qu = qu
    } else
        Qu = !1;
    gg = Qu && (!document.documentMode || 9 < document.documentMode)
}
function Bh() {
    Ds && (Ds.detachEvent("onpropertychange", yg),
    rl = Ds = null)
}
function yg(t) {
    if (t.propertyName === "value" && wu(rl)) {
        var e = [];
        mg(e, rl, t, lf(t)),
        qm(K_, e)
    }
}
function J_(t, e, n) {
    t === "focusin" ? (Bh(),
    Ds = e,
    rl = n,
    Ds.attachEvent("onpropertychange", yg)) : t === "focusout" && Bh()
}
function e1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return wu(rl)
}
function t1(t, e) {
    if (t === "click")
        return wu(e)
}
function n1(t, e) {
    if (t === "input" || t === "change")
        return wu(e)
}
function r1(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var $n = typeof Object.is == "function" ? Object.is : r1;
function il(t, e) {
    if ($n(t, e))
        return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
    var n = Object.keys(t)
      , r = Object.keys(e);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Pc.call(e, i) || !$n(t[i], e[i]))
            return !1
    }
    return !0
}
function $h(t) {
    for (; t && t.firstChild; )
        t = t.firstChild;
    return t
}
function Vh(t, e) {
    var n = $h(t);
    t = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = t + n.textContent.length,
            t <= e && r >= e)
                return {
                    node: n,
                    offset: e - t
                };
            t = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = $h(n)
    }
}
function vg(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? vg(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}
function _g() {
    for (var t = window, e = Ma(); e instanceof t.HTMLIFrameElement; ) {
        try {
            var n = typeof e.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            t = e.contentWindow;
        else
            break;
        e = Ma(t.document)
    }
    return e
}
function gf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}
function i1(t) {
    var e = _g()
      , n = t.focusedElem
      , r = t.selectionRange;
    if (e !== n && n && n.ownerDocument && vg(n.ownerDocument.documentElement, n)) {
        if (r !== null && gf(n)) {
            if (e = r.start,
            t = r.end,
            t === void 0 && (t = e),
            "selectionStart"in n)
                n.selectionStart = e,
                n.selectionEnd = Math.min(t, n.value.length);
            else if (t = (e = n.ownerDocument || document) && e.defaultView || window,
            t.getSelection) {
                t = t.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !t.extend && o > r && (i = r,
                r = o,
                o = i),
                i = Vh(n, o);
                var s = Vh(n, r);
                i && s && (t.rangeCount !== 1 || t.anchorNode !== i.node || t.anchorOffset !== i.offset || t.focusNode !== s.node || t.focusOffset !== s.offset) && (e = e.createRange(),
                e.setStart(i.node, i.offset),
                t.removeAllRanges(),
                o > r ? (t.addRange(e),
                t.extend(s.node, s.offset)) : (e.setEnd(s.node, s.offset),
                t.addRange(e)))
            }
        }
        for (e = [],
        t = n; t = t.parentNode; )
            t.nodeType === 1 && e.push({
                element: t,
                left: t.scrollLeft,
                top: t.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < e.length; n++)
            t = e[n],
            t.element.scrollLeft = t.left,
            t.element.scrollTop = t.top
    }
}
var o1 = xr && "documentMode"in document && 11 >= document.documentMode
  , mo = null
  , Qc = null
  , Ms = null
  , qc = !1;
function Yh(t, e, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    qc || mo == null || mo !== Ma(r) || (r = mo,
    "selectionStart"in r && gf(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Ms && il(Ms, r) || (Ms = r,
    r = Ua(Qc, "onSelect"),
    0 < r.length && (e = new hf("onSelect","select",null,e,n),
    t.push({
        event: e,
        listeners: r
    }),
    e.target = mo)))
}
function Vl(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(),
    n["Webkit" + t] = "webkit" + e,
    n["Moz" + t] = "moz" + e,
    n
}
var go = {
    animationend: Vl("Animation", "AnimationEnd"),
    animationiteration: Vl("Animation", "AnimationIteration"),
    animationstart: Vl("Animation", "AnimationStart"),
    transitionend: Vl("Transition", "TransitionEnd")
}
  , Ku = {}
  , xg = {};
xr && (xg = document.createElement("div").style,
"AnimationEvent"in window || (delete go.animationend.animation,
delete go.animationiteration.animation,
delete go.animationstart.animation),
"TransitionEvent"in window || delete go.transitionend.transition);
function Su(t) {
    if (Ku[t])
        return Ku[t];
    if (!go[t])
        return t;
    var e = go[t], n;
    for (n in e)
        if (e.hasOwnProperty(n) && n in xg)
            return Ku[t] = e[n];
    return t
}
var wg = Su("animationend")
  , Sg = Su("animationiteration")
  , kg = Su("animationstart")
  , Tg = Su("transitionend")
  , Cg = new Map
  , Hh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ci(t, e) {
    Cg.set(t, e),
    qi(e, [t])
}
for (var Zu = 0; Zu < Hh.length; Zu++) {
    var Ju = Hh[Zu]
      , s1 = Ju.toLowerCase()
      , l1 = Ju[0].toUpperCase() + Ju.slice(1);
    ci(s1, "on" + l1)
}
ci(wg, "onAnimationEnd");
ci(Sg, "onAnimationIteration");
ci(kg, "onAnimationStart");
ci("dblclick", "onDoubleClick");
ci("focusin", "onFocus");
ci("focusout", "onBlur");
ci(Tg, "onTransitionEnd");
Wo("onMouseEnter", ["mouseout", "mouseover"]);
Wo("onMouseLeave", ["mouseout", "mouseover"]);
Wo("onPointerEnter", ["pointerout", "pointerover"]);
Wo("onPointerLeave", ["pointerout", "pointerover"]);
qi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
qi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
qi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
qi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
qi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ss = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , a1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ss));
function Xh(t, e, n) {
    var r = t.type || "unknown-event";
    t.currentTarget = n,
    s_(r, e, void 0, t),
    t.currentTarget = null
}
function jg(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
        var r = t[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (e)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== o && i.isPropagationStopped())
                        break e;
                    Xh(i, l, u),
                    o = a
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (l = r[s],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== o && i.isPropagationStopped())
                        break e;
                    Xh(i, l, u),
                    o = a
                }
        }
    }
    if (La)
        throw t = Yc,
        La = !1,
        Yc = null,
        t
}
function me(t, e) {
    var n = e[td];
    n === void 0 && (n = e[td] = new Set);
    var r = t + "__bubble";
    n.has(r) || (bg(e, t, 2, !1),
    n.add(r))
}
function ec(t, e, n) {
    var r = 0;
    e && (r |= 4),
    bg(n, t, r, e)
}
var Yl = "_reactListening" + Math.random().toString(36).slice(2);
function ol(t) {
    if (!t[Yl]) {
        t[Yl] = !0,
        Mm.forEach(function(n) {
            n !== "selectionchange" && (a1.has(n) || ec(n, !1, t),
            ec(n, !0, t))
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[Yl] || (e[Yl] = !0,
        ec("selectionchange", !1, e))
    }
}
function bg(t, e, n, r) {
    switch (cg(e)) {
    case 1:
        var i = S_;
        break;
    case 4:
        i = k_;
        break;
    default:
        i = df
    }
    n = i.bind(null, e, n, t),
    i = void 0,
    !Vc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = !0),
    r ? i !== void 0 ? t.addEventListener(e, n, {
        capture: !0,
        passive: i
    }) : t.addEventListener(e, n, !0) : i !== void 0 ? t.addEventListener(e, n, {
        passive: i
    }) : t.addEventListener(e, n, !1)
}
function tc(t, e, n, r, i) {
    var o = r;
    if (!(e & 1) && !(e & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var l = r.stateNode.containerInfo;
                if (l === i || l.nodeType === 8 && l.parentNode === i)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var a = s.tag;
                        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo,
                        a === i || a.nodeType === 8 && a.parentNode === i))
                            return;
                        s = s.return
                    }
                for (; l !== null; ) {
                    if (s = ji(l),
                    s === null)
                        return;
                    if (a = s.tag,
                    a === 5 || a === 6) {
                        r = o = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    qm(function() {
        var u = o
          , d = lf(n)
          , f = [];
        e: {
            var h = Cg.get(t);
            if (h !== void 0) {
                var p = hf
                  , _ = t;
                switch (t) {
                case "keypress":
                    if (ya(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    p = I_;
                    break;
                case "focusin":
                    _ = "focus",
                    p = Gu;
                    break;
                case "focusout":
                    _ = "blur",
                    p = Gu;
                    break;
                case "beforeblur":
                case "afterblur":
                    p = Gu;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    p = zh;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    p = j_;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    p = U_;
                    break;
                case wg:
                case Sg:
                case kg:
                    p = N_;
                    break;
                case Tg:
                    p = $_;
                    break;
                case "scroll":
                    p = T_;
                    break;
                case "wheel":
                    p = Y_;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    p = O_;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    p = Ah
                }
                var g = (e & 4) !== 0
                  , w = !g && t === "scroll"
                  , y = g ? h !== null ? h + "Capture" : null : h;
                g = [];
                for (var m = u, v; m !== null; ) {
                    v = m;
                    var x = v.stateNode;
                    if (v.tag === 5 && x !== null && (v = x,
                    y !== null && (x = Js(m, y),
                    x != null && g.push(sl(m, x, v)))),
                    w)
                        break;
                    m = m.return
                }
                0 < g.length && (h = new p(h,_,null,n,d),
                f.push({
                    event: h,
                    listeners: g
                }))
            }
        }
        if (!(e & 7)) {
            e: {
                if (h = t === "mouseover" || t === "pointerover",
                p = t === "mouseout" || t === "pointerout",
                h && n !== Bc && (_ = n.relatedTarget || n.fromElement) && (ji(_) || _[wr]))
                    break e;
                if ((p || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window,
                p ? (_ = n.relatedTarget || n.toElement,
                p = u,
                _ = _ ? ji(_) : null,
                _ !== null && (w = Ki(_),
                _ !== w || _.tag !== 5 && _.tag !== 6) && (_ = null)) : (p = null,
                _ = u),
                p !== _)) {
                    if (g = zh,
                    x = "onMouseLeave",
                    y = "onMouseEnter",
                    m = "mouse",
                    (t === "pointerout" || t === "pointerover") && (g = Ah,
                    x = "onPointerLeave",
                    y = "onPointerEnter",
                    m = "pointer"),
                    w = p == null ? h : yo(p),
                    v = _ == null ? h : yo(_),
                    h = new g(x,m + "leave",p,n,d),
                    h.target = w,
                    h.relatedTarget = v,
                    x = null,
                    ji(d) === u && (g = new g(y,m + "enter",_,n,d),
                    g.target = v,
                    g.relatedTarget = w,
                    x = g),
                    w = x,
                    p && _)
                        t: {
                            for (g = p,
                            y = _,
                            m = 0,
                            v = g; v; v = oo(v))
                                m++;
                            for (v = 0,
                            x = y; x; x = oo(x))
                                v++;
                            for (; 0 < m - v; )
                                g = oo(g),
                                m--;
                            for (; 0 < v - m; )
                                y = oo(y),
                                v--;
                            for (; m--; ) {
                                if (g === y || y !== null && g === y.alternate)
                                    break t;
                                g = oo(g),
                                y = oo(y)
                            }
                            g = null
                        }
                    else
                        g = null;
                    p !== null && Gh(f, h, p, g, !1),
                    _ !== null && w !== null && Gh(f, w, _, g, !0)
                }
            }
            e: {
                if (h = u ? yo(u) : window,
                p = h.nodeName && h.nodeName.toLowerCase(),
                p === "select" || p === "input" && h.type === "file")
                    var k = Z_;
                else if (Wh(h))
                    if (gg)
                        k = n1;
                    else {
                        k = e1;
                        var C = J_
                    }
                else
                    (p = h.nodeName) && p.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (k = t1);
                if (k && (k = k(t, u))) {
                    mg(f, k, n, d);
                    break e
                }
                C && C(t, h, u),
                t === "focusout" && (C = h._wrapperState) && C.controlled && h.type === "number" && Ac(h, "number", h.value)
            }
            switch (C = u ? yo(u) : window,
            t) {
            case "focusin":
                (Wh(C) || C.contentEditable === "true") && (mo = C,
                Qc = u,
                Ms = null);
                break;
            case "focusout":
                Ms = Qc = mo = null;
                break;
            case "mousedown":
                qc = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                qc = !1,
                Yh(f, n, d);
                break;
            case "selectionchange":
                if (o1)
                    break;
            case "keydown":
            case "keyup":
                Yh(f, n, d)
            }
            var T;
            if (mf)
                e: {
                    switch (t) {
                    case "compositionstart":
                        var j = "onCompositionStart";
                        break e;
                    case "compositionend":
                        j = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        j = "onCompositionUpdate";
                        break e
                    }
                    j = void 0
                }
            else
                po ? hg(t, n) && (j = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
            j && (fg && n.locale !== "ko" && (po || j !== "onCompositionStart" ? j === "onCompositionEnd" && po && (T = dg()) : (Fr = d,
            ff = "value"in Fr ? Fr.value : Fr.textContent,
            po = !0)),
            C = Ua(u, j),
            0 < C.length && (j = new Lh(j,t,null,n,d),
            f.push({
                event: j,
                listeners: C
            }),
            T ? j.data = T : (T = pg(n),
            T !== null && (j.data = T)))),
            (T = X_ ? G_(t, n) : Q_(t, n)) && (u = Ua(u, "onBeforeInput"),
            0 < u.length && (d = new Lh("onBeforeInput","beforeinput",null,n,d),
            f.push({
                event: d,
                listeners: u
            }),
            d.data = T))
        }
        jg(f, e)
    })
}
function sl(t, e, n) {
    return {
        instance: t,
        listener: e,
        currentTarget: n
    }
}
function Ua(t, e) {
    for (var n = e + "Capture", r = []; t !== null; ) {
        var i = t
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = Js(t, n),
        o != null && r.unshift(sl(t, o, i)),
        o = Js(t, e),
        o != null && r.push(sl(t, o, i))),
        t = t.return
    }
    return r
}
function oo(t) {
    if (t === null)
        return null;
    do
        t = t.return;
    while (t && t.tag !== 5);
    return t || null
}
function Gh(t, e, n, r, i) {
    for (var o = e._reactName, s = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        i ? (a = Js(n, o),
        a != null && s.unshift(sl(n, a, l))) : i || (a = Js(n, o),
        a != null && s.push(sl(n, a, l)))),
        n = n.return
    }
    s.length !== 0 && t.push({
        event: e,
        listeners: s
    })
}
var u1 = /\r\n?/g
  , c1 = /\u0000|\uFFFD/g;
function Qh(t) {
    return (typeof t == "string" ? t : "" + t).replace(u1, `
`).replace(c1, "")
}
function Hl(t, e, n) {
    if (e = Qh(e),
    Qh(t) !== e && n)
        throw Error(O(425))
}
function Ba() {}
var Kc = null
  , Zc = null;
function Jc(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var ed = typeof setTimeout == "function" ? setTimeout : void 0
  , d1 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , qh = typeof Promise == "function" ? Promise : void 0
  , f1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof qh < "u" ? function(t) {
    return qh.resolve(null).then(t).catch(h1)
}
: ed;
function h1(t) {
    setTimeout(function() {
        throw t
    })
}
function nc(t, e) {
    var n = e
      , r = 0;
    do {
        var i = n.nextSibling;
        if (t.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    t.removeChild(i),
                    nl(e);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    nl(e)
}
function qr(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3)
            break;
        if (e === 8) {
            if (e = t.data,
            e === "$" || e === "$!" || e === "$?")
                break;
            if (e === "/$")
                return null
        }
    }
    return t
}
function Kh(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (e === 0)
                    return t;
                e--
            } else
                n === "/$" && e++
        }
        t = t.previousSibling
    }
    return null
}
var ts = Math.random().toString(36).slice(2)
  , Kn = "__reactFiber$" + ts
  , ll = "__reactProps$" + ts
  , wr = "__reactContainer$" + ts
  , td = "__reactEvents$" + ts
  , p1 = "__reactListeners$" + ts
  , m1 = "__reactHandles$" + ts;
function ji(t) {
    var e = t[Kn];
    if (e)
        return e;
    for (var n = t.parentNode; n; ) {
        if (e = n[wr] || n[Kn]) {
            if (n = e.alternate,
            e.child !== null || n !== null && n.child !== null)
                for (t = Kh(t); t !== null; ) {
                    if (n = t[Kn])
                        return n;
                    t = Kh(t)
                }
            return e
        }
        t = n,
        n = t.parentNode
    }
    return null
}
function El(t) {
    return t = t[Kn] || t[wr],
    !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
}
function yo(t) {
    if (t.tag === 5 || t.tag === 6)
        return t.stateNode;
    throw Error(O(33))
}
function ku(t) {
    return t[ll] || null
}
var nd = []
  , vo = -1;
function di(t) {
    return {
        current: t
    }
}
function ye(t) {
    0 > vo || (t.current = nd[vo],
    nd[vo] = null,
    vo--)
}
function he(t, e) {
    vo++,
    nd[vo] = t.current,
    t.current = e
}
var si = {}
  , Tt = di(si)
  , $t = di(!1)
  , Wi = si;
function Uo(t, e) {
    var n = t.type.contextTypes;
    if (!n)
        return si;
    var r = t.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = e[o];
    return r && (t = t.stateNode,
    t.__reactInternalMemoizedUnmaskedChildContext = e,
    t.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Vt(t) {
    return t = t.childContextTypes,
    t != null
}
function $a() {
    ye($t),
    ye(Tt)
}
function Zh(t, e, n) {
    if (Tt.current !== si)
        throw Error(O(168));
    he(Tt, e),
    he($t, n)
}
function Eg(t, e, n) {
    var r = t.stateNode;
    if (e = e.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in e))
            throw Error(O(108, J0(t) || "Unknown", i));
    return Ee({}, n, r)
}
function Va(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || si,
    Wi = Tt.current,
    he(Tt, t),
    he($t, $t.current),
    !0
}
function Jh(t, e, n) {
    var r = t.stateNode;
    if (!r)
        throw Error(O(169));
    n ? (t = Eg(t, e, Wi),
    r.__reactInternalMemoizedMergedChildContext = t,
    ye($t),
    ye(Tt),
    he(Tt, t)) : ye($t),
    he($t, n)
}
var fr = null
  , Tu = !1
  , rc = !1;
function Ng(t) {
    fr === null ? fr = [t] : fr.push(t)
}
function g1(t) {
    Tu = !0,
    Ng(t)
}
function fi() {
    if (!rc && fr !== null) {
        rc = !0;
        var t = 0
          , e = ue;
        try {
            var n = fr;
            for (ue = 1; t < n.length; t++) {
                var r = n[t];
                do
                    r = r(!0);
                while (r !== null)
            }
            fr = null,
            Tu = !1
        } catch (i) {
            throw fr !== null && (fr = fr.slice(t + 1)),
            eg(af, fi),
            i
        } finally {
            ue = e,
            rc = !1
        }
    }
    return null
}
var _o = []
  , xo = 0
  , Ya = null
  , Ha = 0
  , yn = []
  , vn = 0
  , Ui = null
  , mr = 1
  , gr = "";
function wi(t, e) {
    _o[xo++] = Ha,
    _o[xo++] = Ya,
    Ya = t,
    Ha = e
}
function Pg(t, e, n) {
    yn[vn++] = mr,
    yn[vn++] = gr,
    yn[vn++] = Ui,
    Ui = t;
    var r = mr;
    t = gr;
    var i = 32 - Un(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - Un(e) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32),
        r >>= s,
        i -= s,
        mr = 1 << 32 - Un(e) + i | n << i | r,
        gr = o + t
    } else
        mr = 1 << o | n << i | r,
        gr = t
}
function yf(t) {
    t.return !== null && (wi(t, 1),
    Pg(t, 1, 0))
}
function vf(t) {
    for (; t === Ya; )
        Ya = _o[--xo],
        _o[xo] = null,
        Ha = _o[--xo],
        _o[xo] = null;
    for (; t === Ui; )
        Ui = yn[--vn],
        yn[vn] = null,
        gr = yn[--vn],
        yn[vn] = null,
        mr = yn[--vn],
        yn[vn] = null
}
var un = null
  , ln = null
  , _e = !1
  , Fn = null;
function Og(t, e) {
    var n = wn(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = e,
    n.return = t,
    e = t.deletions,
    e === null ? (t.deletions = [n],
    t.flags |= 16) : e.push(n)
}
function ep(t, e) {
    switch (t.tag) {
    case 5:
        var n = t.type;
        return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e,
        e !== null ? (t.stateNode = e,
        un = t,
        ln = qr(e.firstChild),
        !0) : !1;
    case 6:
        return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e,
        e !== null ? (t.stateNode = e,
        un = t,
        ln = null,
        !0) : !1;
    case 13:
        return e = e.nodeType !== 8 ? null : e,
        e !== null ? (n = Ui !== null ? {
            id: mr,
            overflow: gr
        } : null,
        t.memoizedState = {
            dehydrated: e,
            treeContext: n,
            retryLane: 1073741824
        },
        n = wn(18, null, null, 0),
        n.stateNode = e,
        n.return = t,
        t.child = n,
        un = t,
        ln = null,
        !0) : !1;
    default:
        return !1
    }
}
function rd(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}
function id(t) {
    if (_e) {
        var e = ln;
        if (e) {
            var n = e;
            if (!ep(t, e)) {
                if (rd(t))
                    throw Error(O(418));
                e = qr(n.nextSibling);
                var r = un;
                e && ep(t, e) ? Og(r, n) : (t.flags = t.flags & -4097 | 2,
                _e = !1,
                un = t)
            }
        } else {
            if (rd(t))
                throw Error(O(418));
            t.flags = t.flags & -4097 | 2,
            _e = !1,
            un = t
        }
    }
}
function tp(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
        t = t.return;
    un = t
}
function Xl(t) {
    if (t !== un)
        return !1;
    if (!_e)
        return tp(t),
        _e = !0,
        !1;
    var e;
    if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type,
    e = e !== "head" && e !== "body" && !Jc(t.type, t.memoizedProps)),
    e && (e = ln)) {
        if (rd(t))
            throw Rg(),
            Error(O(418));
        for (; e; )
            Og(t, e),
            e = qr(e.nextSibling)
    }
    if (tp(t),
    t.tag === 13) {
        if (t = t.memoizedState,
        t = t !== null ? t.dehydrated : null,
        !t)
            throw Error(O(317));
        e: {
            for (t = t.nextSibling,
            e = 0; t; ) {
                if (t.nodeType === 8) {
                    var n = t.data;
                    if (n === "/$") {
                        if (e === 0) {
                            ln = qr(t.nextSibling);
                            break e
                        }
                        e--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || e++
                }
                t = t.nextSibling
            }
            ln = null
        }
    } else
        ln = un ? qr(t.stateNode.nextSibling) : null;
    return !0
}
function Rg() {
    for (var t = ln; t; )
        t = qr(t.nextSibling)
}
function Bo() {
    ln = un = null,
    _e = !1
}
function _f(t) {
    Fn === null ? Fn = [t] : Fn.push(t)
}
var y1 = jr.ReactCurrentBatchConfig;
function hs(t, e, n) {
    if (t = n.ref,
    t !== null && typeof t != "function" && typeof t != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(O(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(O(147, t));
            var i = r
              , o = "" + t;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === o ? e.ref : (e = function(s) {
                var l = i.refs;
                s === null ? delete l[o] : l[o] = s
            }
            ,
            e._stringRef = o,
            e)
        }
        if (typeof t != "string")
            throw Error(O(284));
        if (!n._owner)
            throw Error(O(290, t))
    }
    return t
}
function Gl(t, e) {
    throw t = Object.prototype.toString.call(e),
    Error(O(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
}
function np(t) {
    var e = t._init;
    return e(t._payload)
}
function Dg(t) {
    function e(y, m) {
        if (t) {
            var v = y.deletions;
            v === null ? (y.deletions = [m],
            y.flags |= 16) : v.push(m)
        }
    }
    function n(y, m) {
        if (!t)
            return null;
        for (; m !== null; )
            e(y, m),
            m = m.sibling;
        return null
    }
    function r(y, m) {
        for (y = new Map; m !== null; )
            m.key !== null ? y.set(m.key, m) : y.set(m.index, m),
            m = m.sibling;
        return y
    }
    function i(y, m) {
        return y = ei(y, m),
        y.index = 0,
        y.sibling = null,
        y
    }
    function o(y, m, v) {
        return y.index = v,
        t ? (v = y.alternate,
        v !== null ? (v = v.index,
        v < m ? (y.flags |= 2,
        m) : v) : (y.flags |= 2,
        m)) : (y.flags |= 1048576,
        m)
    }
    function s(y) {
        return t && y.alternate === null && (y.flags |= 2),
        y
    }
    function l(y, m, v, x) {
        return m === null || m.tag !== 6 ? (m = cc(v, y.mode, x),
        m.return = y,
        m) : (m = i(m, v),
        m.return = y,
        m)
    }
    function a(y, m, v, x) {
        var k = v.type;
        return k === ho ? d(y, m, v.props.children, x, v.key) : m !== null && (m.elementType === k || typeof k == "object" && k !== null && k.$$typeof === zr && np(k) === m.type) ? (x = i(m, v.props),
        x.ref = hs(y, m, v),
        x.return = y,
        x) : (x = Ta(v.type, v.key, v.props, null, y.mode, x),
        x.ref = hs(y, m, v),
        x.return = y,
        x)
    }
    function u(y, m, v, x) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== v.containerInfo || m.stateNode.implementation !== v.implementation ? (m = dc(v, y.mode, x),
        m.return = y,
        m) : (m = i(m, v.children || []),
        m.return = y,
        m)
    }
    function d(y, m, v, x, k) {
        return m === null || m.tag !== 7 ? (m = Ri(v, y.mode, x, k),
        m.return = y,
        m) : (m = i(m, v),
        m.return = y,
        m)
    }
    function f(y, m, v) {
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return m = cc("" + m, y.mode, v),
            m.return = y,
            m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case Al:
                return v = Ta(m.type, m.key, m.props, null, y.mode, v),
                v.ref = hs(y, null, m),
                v.return = y,
                v;
            case fo:
                return m = dc(m, y.mode, v),
                m.return = y,
                m;
            case zr:
                var x = m._init;
                return f(y, x(m._payload), v)
            }
            if (xs(m) || as(m))
                return m = Ri(m, y.mode, v, null),
                m.return = y,
                m;
            Gl(y, m)
        }
        return null
    }
    function h(y, m, v, x) {
        var k = m !== null ? m.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return k !== null ? null : l(y, m, "" + v, x);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Al:
                return v.key === k ? a(y, m, v, x) : null;
            case fo:
                return v.key === k ? u(y, m, v, x) : null;
            case zr:
                return k = v._init,
                h(y, m, k(v._payload), x)
            }
            if (xs(v) || as(v))
                return k !== null ? null : d(y, m, v, x, null);
            Gl(y, v)
        }
        return null
    }
    function p(y, m, v, x, k) {
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return y = y.get(v) || null,
            l(m, y, "" + x, k);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case Al:
                return y = y.get(x.key === null ? v : x.key) || null,
                a(m, y, x, k);
            case fo:
                return y = y.get(x.key === null ? v : x.key) || null,
                u(m, y, x, k);
            case zr:
                var C = x._init;
                return p(y, m, v, C(x._payload), k)
            }
            if (xs(x) || as(x))
                return y = y.get(v) || null,
                d(m, y, x, k, null);
            Gl(m, x)
        }
        return null
    }
    function _(y, m, v, x) {
        for (var k = null, C = null, T = m, j = m = 0, N = null; T !== null && j < v.length; j++) {
            T.index > j ? (N = T,
            T = null) : N = T.sibling;
            var E = h(y, T, v[j], x);
            if (E === null) {
                T === null && (T = N);
                break
            }
            t && T && E.alternate === null && e(y, T),
            m = o(E, m, j),
            C === null ? k = E : C.sibling = E,
            C = E,
            T = N
        }
        if (j === v.length)
            return n(y, T),
            _e && wi(y, j),
            k;
        if (T === null) {
            for (; j < v.length; j++)
                T = f(y, v[j], x),
                T !== null && (m = o(T, m, j),
                C === null ? k = T : C.sibling = T,
                C = T);
            return _e && wi(y, j),
            k
        }
        for (T = r(y, T); j < v.length; j++)
            N = p(T, y, j, v[j], x),
            N !== null && (t && N.alternate !== null && T.delete(N.key === null ? j : N.key),
            m = o(N, m, j),
            C === null ? k = N : C.sibling = N,
            C = N);
        return t && T.forEach(function(I) {
            return e(y, I)
        }),
        _e && wi(y, j),
        k
    }
    function g(y, m, v, x) {
        var k = as(v);
        if (typeof k != "function")
            throw Error(O(150));
        if (v = k.call(v),
        v == null)
            throw Error(O(151));
        for (var C = k = null, T = m, j = m = 0, N = null, E = v.next(); T !== null && !E.done; j++,
        E = v.next()) {
            T.index > j ? (N = T,
            T = null) : N = T.sibling;
            var I = h(y, T, E.value, x);
            if (I === null) {
                T === null && (T = N);
                break
            }
            t && T && I.alternate === null && e(y, T),
            m = o(I, m, j),
            C === null ? k = I : C.sibling = I,
            C = I,
            T = N
        }
        if (E.done)
            return n(y, T),
            _e && wi(y, j),
            k;
        if (T === null) {
            for (; !E.done; j++,
            E = v.next())
                E = f(y, E.value, x),
                E !== null && (m = o(E, m, j),
                C === null ? k = E : C.sibling = E,
                C = E);
            return _e && wi(y, j),
            k
        }
        for (T = r(y, T); !E.done; j++,
        E = v.next())
            E = p(T, y, j, E.value, x),
            E !== null && (t && E.alternate !== null && T.delete(E.key === null ? j : E.key),
            m = o(E, m, j),
            C === null ? k = E : C.sibling = E,
            C = E);
        return t && T.forEach(function(R) {
            return e(y, R)
        }),
        _e && wi(y, j),
        k
    }
    function w(y, m, v, x) {
        if (typeof v == "object" && v !== null && v.type === ho && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Al:
                e: {
                    for (var k = v.key, C = m; C !== null; ) {
                        if (C.key === k) {
                            if (k = v.type,
                            k === ho) {
                                if (C.tag === 7) {
                                    n(y, C.sibling),
                                    m = i(C, v.props.children),
                                    m.return = y,
                                    y = m;
                                    break e
                                }
                            } else if (C.elementType === k || typeof k == "object" && k !== null && k.$$typeof === zr && np(k) === C.type) {
                                n(y, C.sibling),
                                m = i(C, v.props),
                                m.ref = hs(y, C, v),
                                m.return = y,
                                y = m;
                                break e
                            }
                            n(y, C);
                            break
                        } else
                            e(y, C);
                        C = C.sibling
                    }
                    v.type === ho ? (m = Ri(v.props.children, y.mode, x, v.key),
                    m.return = y,
                    y = m) : (x = Ta(v.type, v.key, v.props, null, y.mode, x),
                    x.ref = hs(y, m, v),
                    x.return = y,
                    y = x)
                }
                return s(y);
            case fo:
                e: {
                    for (C = v.key; m !== null; ) {
                        if (m.key === C)
                            if (m.tag === 4 && m.stateNode.containerInfo === v.containerInfo && m.stateNode.implementation === v.implementation) {
                                n(y, m.sibling),
                                m = i(m, v.children || []),
                                m.return = y,
                                y = m;
                                break e
                            } else {
                                n(y, m);
                                break
                            }
                        else
                            e(y, m);
                        m = m.sibling
                    }
                    m = dc(v, y.mode, x),
                    m.return = y,
                    y = m
                }
                return s(y);
            case zr:
                return C = v._init,
                w(y, m, C(v._payload), x)
            }
            if (xs(v))
                return _(y, m, v, x);
            if (as(v))
                return g(y, m, v, x);
            Gl(y, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        m !== null && m.tag === 6 ? (n(y, m.sibling),
        m = i(m, v),
        m.return = y,
        y = m) : (n(y, m),
        m = cc(v, y.mode, x),
        m.return = y,
        y = m),
        s(y)) : n(y, m)
    }
    return w
}
var $o = Dg(!0)
  , Mg = Dg(!1)
  , Xa = di(null)
  , Ga = null
  , wo = null
  , xf = null;
function wf() {
    xf = wo = Ga = null
}
function Sf(t) {
    var e = Xa.current;
    ye(Xa),
    t._currentValue = e
}
function od(t, e, n) {
    for (; t !== null; ) {
        var r = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e,
        r !== null && (r.childLanes |= e)) : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
        t === n)
            break;
        t = t.return
    }
}
function Oo(t, e) {
    Ga = t,
    xf = wo = null,
    t = t.dependencies,
    t !== null && t.firstContext !== null && (t.lanes & e && (Bt = !0),
    t.firstContext = null)
}
function jn(t) {
    var e = t._currentValue;
    if (xf !== t)
        if (t = {
            context: t,
            memoizedValue: e,
            next: null
        },
        wo === null) {
            if (Ga === null)
                throw Error(O(308));
            wo = t,
            Ga.dependencies = {
                lanes: 0,
                firstContext: t
            }
        } else
            wo = wo.next = t;
    return e
}
var bi = null;
function kf(t) {
    bi === null ? bi = [t] : bi.push(t)
}
function zg(t, e, n, r) {
    var i = e.interleaved;
    return i === null ? (n.next = n,
    kf(e)) : (n.next = i.next,
    i.next = n),
    e.interleaved = n,
    Sr(t, r)
}
function Sr(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e),
    n = t,
    t = t.return; t !== null; )
        t.childLanes |= e,
        n = t.alternate,
        n !== null && (n.childLanes |= e),
        n = t,
        t = t.return;
    return n.tag === 3 ? n.stateNode : null
}
var Lr = !1;
function Tf(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Lg(t, e) {
    t = t.updateQueue,
    e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
    })
}
function vr(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Kr(t, e, n) {
    var r = t.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    oe & 2) {
        var i = r.pending;
        return i === null ? e.next = e : (e.next = i.next,
        i.next = e),
        r.pending = e,
        Sr(t, n)
    }
    return i = r.interleaved,
    i === null ? (e.next = e,
    kf(r)) : (e.next = i.next,
    i.next = e),
    r.interleaved = e,
    Sr(t, n)
}
function va(t, e, n) {
    if (e = e.updateQueue,
    e !== null && (e = e.shared,
    (n & 4194240) !== 0)) {
        var r = e.lanes;
        r &= t.pendingLanes,
        n |= r,
        e.lanes = n,
        uf(t, n)
    }
}
function rp(t, e) {
    var n = t.updateQueue
      , r = t.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s,
                n = n.next
            } while (n !== null);
            o === null ? i = o = e : o = o.next = e
        } else
            i = o = e;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        t.updateQueue = n;
        return
    }
    t = n.lastBaseUpdate,
    t === null ? n.firstBaseUpdate = e : t.next = e,
    n.lastBaseUpdate = e
}
function Qa(t, e, n, r) {
    var i = t.updateQueue;
    Lr = !1;
    var o = i.firstBaseUpdate
      , s = i.lastBaseUpdate
      , l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        s === null ? o = u : s.next = u,
        s = a;
        var d = t.alternate;
        d !== null && (d = d.updateQueue,
        l = d.lastBaseUpdate,
        l !== s && (l === null ? d.firstBaseUpdate = u : l.next = u,
        d.lastBaseUpdate = a))
    }
    if (o !== null) {
        var f = i.baseState;
        s = 0,
        d = u = a = null,
        l = o;
        do {
            var h = l.lane
              , p = l.eventTime;
            if ((r & h) === h) {
                d !== null && (d = d.next = {
                    eventTime: p,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var _ = t
                      , g = l;
                    switch (h = e,
                    p = n,
                    g.tag) {
                    case 1:
                        if (_ = g.payload,
                        typeof _ == "function") {
                            f = _.call(p, f, h);
                            break e
                        }
                        f = _;
                        break e;
                    case 3:
                        _.flags = _.flags & -65537 | 128;
                    case 0:
                        if (_ = g.payload,
                        h = typeof _ == "function" ? _.call(p, f, h) : _,
                        h == null)
                            break e;
                        f = Ee({}, f, h);
                        break e;
                    case 2:
                        Lr = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (t.flags |= 64,
                h = i.effects,
                h === null ? i.effects = [l] : h.push(l))
            } else
                p = {
                    eventTime: p,
                    lane: h,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                d === null ? (u = d = p,
                a = f) : d = d.next = p,
                s |= h;
            if (l = l.next,
            l === null) {
                if (l = i.shared.pending,
                l === null)
                    break;
                h = l,
                l = h.next,
                h.next = null,
                i.lastBaseUpdate = h,
                i.shared.pending = null
            }
        } while (!0);
        if (d === null && (a = f),
        i.baseState = a,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = d,
        e = i.shared.interleaved,
        e !== null) {
            i = e;
            do
                s |= i.lane,
                i = i.next;
            while (i !== e)
        } else
            o === null && (i.shared.lanes = 0);
        $i |= s,
        t.lanes = s,
        t.memoizedState = f
    }
}
function ip(t, e, n) {
    if (t = e.effects,
    e.effects = null,
    t !== null)
        for (e = 0; e < t.length; e++) {
            var r = t[e]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(O(191, i));
                i.call(r)
            }
        }
}
var Nl = {}
  , nr = di(Nl)
  , al = di(Nl)
  , ul = di(Nl);
function Ei(t) {
    if (t === Nl)
        throw Error(O(174));
    return t
}
function Cf(t, e) {
    switch (he(ul, e),
    he(al, t),
    he(nr, Nl),
    t = e.nodeType,
    t) {
    case 9:
    case 11:
        e = (e = e.documentElement) ? e.namespaceURI : Fc(null, "");
        break;
    default:
        t = t === 8 ? e.parentNode : e,
        e = t.namespaceURI || null,
        t = t.tagName,
        e = Fc(e, t)
    }
    ye(nr),
    he(nr, e)
}
function Vo() {
    ye(nr),
    ye(al),
    ye(ul)
}
function Ag(t) {
    Ei(ul.current);
    var e = Ei(nr.current)
      , n = Fc(e, t.type);
    e !== n && (he(al, t),
    he(nr, n))
}
function jf(t) {
    al.current === t && (ye(nr),
    ye(al))
}
var Te = di(0);
function qa(t) {
    for (var e = t; e !== null; ) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return e
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128)
                return e
        } else if (e.child !== null) {
            e.child.return = e,
            e = e.child;
            continue
        }
        if (e === t)
            break;
        for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
                return null;
            e = e.return
        }
        e.sibling.return = e.return,
        e = e.sibling
    }
    return null
}
var ic = [];
function bf() {
    for (var t = 0; t < ic.length; t++)
        ic[t]._workInProgressVersionPrimary = null;
    ic.length = 0
}
var _a = jr.ReactCurrentDispatcher
  , oc = jr.ReactCurrentBatchConfig
  , Bi = 0
  , be = null
  , Xe = null
  , et = null
  , Ka = !1
  , zs = !1
  , cl = 0
  , v1 = 0;
function mt() {
    throw Error(O(321))
}
function Ef(t, e) {
    if (e === null)
        return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
        if (!$n(t[n], e[n]))
            return !1;
    return !0
}
function Nf(t, e, n, r, i, o) {
    if (Bi = o,
    be = e,
    e.memoizedState = null,
    e.updateQueue = null,
    e.lanes = 0,
    _a.current = t === null || t.memoizedState === null ? S1 : k1,
    t = n(r, i),
    zs) {
        o = 0;
        do {
            if (zs = !1,
            cl = 0,
            25 <= o)
                throw Error(O(301));
            o += 1,
            et = Xe = null,
            e.updateQueue = null,
            _a.current = T1,
            t = n(r, i)
        } while (zs)
    }
    if (_a.current = Za,
    e = Xe !== null && Xe.next !== null,
    Bi = 0,
    et = Xe = be = null,
    Ka = !1,
    e)
        throw Error(O(300));
    return t
}
function Pf() {
    var t = cl !== 0;
    return cl = 0,
    t
}
function Gn() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return et === null ? be.memoizedState = et = t : et = et.next = t,
    et
}
function bn() {
    if (Xe === null) {
        var t = be.alternate;
        t = t !== null ? t.memoizedState : null
    } else
        t = Xe.next;
    var e = et === null ? be.memoizedState : et.next;
    if (e !== null)
        et = e,
        Xe = t;
    else {
        if (t === null)
            throw Error(O(310));
        Xe = t,
        t = {
            memoizedState: Xe.memoizedState,
            baseState: Xe.baseState,
            baseQueue: Xe.baseQueue,
            queue: Xe.queue,
            next: null
        },
        et === null ? be.memoizedState = et = t : et = et.next = t
    }
    return et
}
function dl(t, e) {
    return typeof e == "function" ? e(t) : e
}
function sc(t) {
    var e = bn()
      , n = e.queue;
    if (n === null)
        throw Error(O(311));
    n.lastRenderedReducer = t;
    var r = Xe
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next,
            o.next = s
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var l = s = null
          , a = null
          , u = o;
        do {
            var d = u.lane;
            if ((Bi & d) === d)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : t(r, u.action);
            else {
                var f = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = f,
                s = r) : a = a.next = f,
                be.lanes |= d,
                $i |= d
            }
            u = u.next
        } while (u !== null && u !== o);
        a === null ? s = r : a.next = l,
        $n(r, e.memoizedState) || (Bt = !0),
        e.memoizedState = r,
        e.baseState = s,
        e.baseQueue = a,
        n.lastRenderedState = r
    }
    if (t = n.interleaved,
    t !== null) {
        i = t;
        do
            o = i.lane,
            be.lanes |= o,
            $i |= o,
            i = i.next;
        while (i !== t)
    } else
        i === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch]
}
function lc(t) {
    var e = bn()
      , n = e.queue;
    if (n === null)
        throw Error(O(311));
    n.lastRenderedReducer = t;
    var r = n.dispatch
      , i = n.pending
      , o = e.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do
            o = t(o, s.action),
            s = s.next;
        while (s !== i);
        $n(o, e.memoizedState) || (Bt = !0),
        e.memoizedState = o,
        e.baseQueue === null && (e.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function Ig() {}
function Fg(t, e) {
    var n = be
      , r = bn()
      , i = e()
      , o = !$n(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    Bt = !0),
    r = r.queue,
    Of(Bg.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || o || et !== null && et.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        fl(9, Ug.bind(null, n, r, i, e), void 0, null),
        nt === null)
            throw Error(O(349));
        Bi & 30 || Wg(n, e, i)
    }
    return i
}
function Wg(t, e, n) {
    t.flags |= 16384,
    t = {
        getSnapshot: e,
        value: n
    },
    e = be.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    be.updateQueue = e,
    e.stores = [t]) : (n = e.stores,
    n === null ? e.stores = [t] : n.push(t))
}
function Ug(t, e, n, r) {
    e.value = n,
    e.getSnapshot = r,
    $g(e) && Vg(t)
}
function Bg(t, e, n) {
    return n(function() {
        $g(e) && Vg(t)
    })
}
function $g(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !$n(t, n)
    } catch {
        return !0
    }
}
function Vg(t) {
    var e = Sr(t, 1);
    e !== null && Bn(e, t, 1, -1)
}
function op(t) {
    var e = Gn();
    return typeof t == "function" && (t = t()),
    e.memoizedState = e.baseState = t,
    t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dl,
        lastRenderedState: t
    },
    e.queue = t,
    t = t.dispatch = w1.bind(null, be, t),
    [e.memoizedState, t]
}
function fl(t, e, n, r) {
    return t = {
        tag: t,
        create: e,
        destroy: n,
        deps: r,
        next: null
    },
    e = be.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    be.updateQueue = e,
    e.lastEffect = t.next = t) : (n = e.lastEffect,
    n === null ? e.lastEffect = t.next = t : (r = n.next,
    n.next = t,
    t.next = r,
    e.lastEffect = t)),
    t
}
function Yg() {
    return bn().memoizedState
}
function xa(t, e, n, r) {
    var i = Gn();
    be.flags |= t,
    i.memoizedState = fl(1 | e, n, void 0, r === void 0 ? null : r)
}
function Cu(t, e, n, r) {
    var i = bn();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Xe !== null) {
        var s = Xe.memoizedState;
        if (o = s.destroy,
        r !== null && Ef(r, s.deps)) {
            i.memoizedState = fl(e, n, o, r);
            return
        }
    }
    be.flags |= t,
    i.memoizedState = fl(1 | e, n, o, r)
}
function sp(t, e) {
    return xa(8390656, 8, t, e)
}
function Of(t, e) {
    return Cu(2048, 8, t, e)
}
function Hg(t, e) {
    return Cu(4, 2, t, e)
}
function Xg(t, e) {
    return Cu(4, 4, t, e)
}
function Gg(t, e) {
    if (typeof e == "function")
        return t = t(),
        e(t),
        function() {
            e(null)
        }
        ;
    if (e != null)
        return t = t(),
        e.current = t,
        function() {
            e.current = null
        }
}
function Qg(t, e, n) {
    return n = n != null ? n.concat([t]) : null,
    Cu(4, 4, Gg.bind(null, e, t), n)
}
function Rf() {}
function qg(t, e) {
    var n = bn();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && Ef(e, r[1]) ? r[0] : (n.memoizedState = [t, e],
    t)
}
function Kg(t, e) {
    var n = bn();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && Ef(e, r[1]) ? r[0] : (t = t(),
    n.memoizedState = [t, e],
    t)
}
function Zg(t, e, n) {
    return Bi & 21 ? ($n(n, e) || (n = rg(),
    be.lanes |= n,
    $i |= n,
    t.baseState = !0),
    e) : (t.baseState && (t.baseState = !1,
    Bt = !0),
    t.memoizedState = n)
}
function _1(t, e) {
    var n = ue;
    ue = n !== 0 && 4 > n ? n : 4,
    t(!0);
    var r = oc.transition;
    oc.transition = {};
    try {
        t(!1),
        e()
    } finally {
        ue = n,
        oc.transition = r
    }
}
function Jg() {
    return bn().memoizedState
}
function x1(t, e, n) {
    var r = Jr(t);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    ey(t))
        ty(e, n);
    else if (n = zg(t, e, n, r),
    n !== null) {
        var i = Lt();
        Bn(n, t, r, i),
        ny(n, e, r)
    }
}
function w1(t, e, n) {
    var r = Jr(t)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (ey(t))
        ty(e, i);
    else {
        var o = t.alternate;
        if (t.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer,
        o !== null))
            try {
                var s = e.lastRenderedState
                  , l = o(s, n);
                if (i.hasEagerState = !0,
                i.eagerState = l,
                $n(l, s)) {
                    var a = e.interleaved;
                    a === null ? (i.next = i,
                    kf(e)) : (i.next = a.next,
                    a.next = i),
                    e.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = zg(t, e, i, r),
        n !== null && (i = Lt(),
        Bn(n, t, r, i),
        ny(n, e, r))
    }
}
function ey(t) {
    var e = t.alternate;
    return t === be || e !== null && e === be
}
function ty(t, e) {
    zs = Ka = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next,
    n.next = e),
    t.pending = e
}
function ny(t, e, n) {
    if (n & 4194240) {
        var r = e.lanes;
        r &= t.pendingLanes,
        n |= r,
        e.lanes = n,
        uf(t, n)
    }
}
var Za = {
    readContext: jn,
    useCallback: mt,
    useContext: mt,
    useEffect: mt,
    useImperativeHandle: mt,
    useInsertionEffect: mt,
    useLayoutEffect: mt,
    useMemo: mt,
    useReducer: mt,
    useRef: mt,
    useState: mt,
    useDebugValue: mt,
    useDeferredValue: mt,
    useTransition: mt,
    useMutableSource: mt,
    useSyncExternalStore: mt,
    useId: mt,
    unstable_isNewReconciler: !1
}
  , S1 = {
    readContext: jn,
    useCallback: function(t, e) {
        return Gn().memoizedState = [t, e === void 0 ? null : e],
        t
    },
    useContext: jn,
    useEffect: sp,
    useImperativeHandle: function(t, e, n) {
        return n = n != null ? n.concat([t]) : null,
        xa(4194308, 4, Gg.bind(null, e, t), n)
    },
    useLayoutEffect: function(t, e) {
        return xa(4194308, 4, t, e)
    },
    useInsertionEffect: function(t, e) {
        return xa(4, 2, t, e)
    },
    useMemo: function(t, e) {
        var n = Gn();
        return e = e === void 0 ? null : e,
        t = t(),
        n.memoizedState = [t, e],
        t
    },
    useReducer: function(t, e, n) {
        var r = Gn();
        return e = n !== void 0 ? n(e) : e,
        r.memoizedState = r.baseState = e,
        t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: e
        },
        r.queue = t,
        t = t.dispatch = x1.bind(null, be, t),
        [r.memoizedState, t]
    },
    useRef: function(t) {
        var e = Gn();
        return t = {
            current: t
        },
        e.memoizedState = t
    },
    useState: op,
    useDebugValue: Rf,
    useDeferredValue: function(t) {
        return Gn().memoizedState = t
    },
    useTransition: function() {
        var t = op(!1)
          , e = t[0];
        return t = _1.bind(null, t[1]),
        Gn().memoizedState = t,
        [e, t]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(t, e, n) {
        var r = be
          , i = Gn();
        if (_e) {
            if (n === void 0)
                throw Error(O(407));
            n = n()
        } else {
            if (n = e(),
            nt === null)
                throw Error(O(349));
            Bi & 30 || Wg(r, e, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: e
        };
        return i.queue = o,
        sp(Bg.bind(null, r, o, t), [t]),
        r.flags |= 2048,
        fl(9, Ug.bind(null, r, o, n, e), void 0, null),
        n
    },
    useId: function() {
        var t = Gn()
          , e = nt.identifierPrefix;
        if (_e) {
            var n = gr
              , r = mr;
            n = (r & ~(1 << 32 - Un(r) - 1)).toString(32) + n,
            e = ":" + e + "R" + n,
            n = cl++,
            0 < n && (e += "H" + n.toString(32)),
            e += ":"
        } else
            n = v1++,
            e = ":" + e + "r" + n.toString(32) + ":";
        return t.memoizedState = e
    },
    unstable_isNewReconciler: !1
}
  , k1 = {
    readContext: jn,
    useCallback: qg,
    useContext: jn,
    useEffect: Of,
    useImperativeHandle: Qg,
    useInsertionEffect: Hg,
    useLayoutEffect: Xg,
    useMemo: Kg,
    useReducer: sc,
    useRef: Yg,
    useState: function() {
        return sc(dl)
    },
    useDebugValue: Rf,
    useDeferredValue: function(t) {
        var e = bn();
        return Zg(e, Xe.memoizedState, t)
    },
    useTransition: function() {
        var t = sc(dl)[0]
          , e = bn().memoizedState;
        return [t, e]
    },
    useMutableSource: Ig,
    useSyncExternalStore: Fg,
    useId: Jg,
    unstable_isNewReconciler: !1
}
  , T1 = {
    readContext: jn,
    useCallback: qg,
    useContext: jn,
    useEffect: Of,
    useImperativeHandle: Qg,
    useInsertionEffect: Hg,
    useLayoutEffect: Xg,
    useMemo: Kg,
    useReducer: lc,
    useRef: Yg,
    useState: function() {
        return lc(dl)
    },
    useDebugValue: Rf,
    useDeferredValue: function(t) {
        var e = bn();
        return Xe === null ? e.memoizedState = t : Zg(e, Xe.memoizedState, t)
    },
    useTransition: function() {
        var t = lc(dl)[0]
          , e = bn().memoizedState;
        return [t, e]
    },
    useMutableSource: Ig,
    useSyncExternalStore: Fg,
    useId: Jg,
    unstable_isNewReconciler: !1
};
function An(t, e) {
    if (t && t.defaultProps) {
        e = Ee({}, e),
        t = t.defaultProps;
        for (var n in t)
            e[n] === void 0 && (e[n] = t[n]);
        return e
    }
    return e
}
function sd(t, e, n, r) {
    e = t.memoizedState,
    n = n(r, e),
    n = n == null ? e : Ee({}, e, n),
    t.memoizedState = n,
    t.lanes === 0 && (t.updateQueue.baseState = n)
}
var ju = {
    isMounted: function(t) {
        return (t = t._reactInternals) ? Ki(t) === t : !1
    },
    enqueueSetState: function(t, e, n) {
        t = t._reactInternals;
        var r = Lt()
          , i = Jr(t)
          , o = vr(r, i);
        o.payload = e,
        n != null && (o.callback = n),
        e = Kr(t, o, i),
        e !== null && (Bn(e, t, i, r),
        va(e, t, i))
    },
    enqueueReplaceState: function(t, e, n) {
        t = t._reactInternals;
        var r = Lt()
          , i = Jr(t)
          , o = vr(r, i);
        o.tag = 1,
        o.payload = e,
        n != null && (o.callback = n),
        e = Kr(t, o, i),
        e !== null && (Bn(e, t, i, r),
        va(e, t, i))
    },
    enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var n = Lt()
          , r = Jr(t)
          , i = vr(n, r);
        i.tag = 2,
        e != null && (i.callback = e),
        e = Kr(t, i, r),
        e !== null && (Bn(e, t, r, n),
        va(e, t, r))
    }
};
function lp(t, e, n, r, i, o, s) {
    return t = t.stateNode,
    typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(r, o, s) : e.prototype && e.prototype.isPureReactComponent ? !il(n, r) || !il(i, o) : !0
}
function ry(t, e, n) {
    var r = !1
      , i = si
      , o = e.contextType;
    return typeof o == "object" && o !== null ? o = jn(o) : (i = Vt(e) ? Wi : Tt.current,
    r = e.contextTypes,
    o = (r = r != null) ? Uo(t, i) : si),
    e = new e(n,o),
    t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null,
    e.updater = ju,
    t.stateNode = e,
    e._reactInternals = t,
    r && (t = t.stateNode,
    t.__reactInternalMemoizedUnmaskedChildContext = i,
    t.__reactInternalMemoizedMaskedChildContext = o),
    e
}
function ap(t, e, n, r) {
    t = e.state,
    typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && ju.enqueueReplaceState(e, e.state, null)
}
function ld(t, e, n, r) {
    var i = t.stateNode;
    i.props = n,
    i.state = t.memoizedState,
    i.refs = {},
    Tf(t);
    var o = e.contextType;
    typeof o == "object" && o !== null ? i.context = jn(o) : (o = Vt(e) ? Wi : Tt.current,
    i.context = Uo(t, o)),
    i.state = t.memoizedState,
    o = e.getDerivedStateFromProps,
    typeof o == "function" && (sd(t, e, o, n),
    i.state = t.memoizedState),
    typeof e.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (e = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    e !== i.state && ju.enqueueReplaceState(i, i.state, null),
    Qa(t, n, i, r),
    i.state = t.memoizedState),
    typeof i.componentDidMount == "function" && (t.flags |= 4194308)
}
function Yo(t, e) {
    try {
        var n = ""
          , r = e;
        do
            n += Z0(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: t,
        source: e,
        stack: i,
        digest: null
    }
}
function ac(t, e, n) {
    return {
        value: t,
        source: null,
        stack: n ?? null,
        digest: e ?? null
    }
}
function ad(t, e) {
    try {
        console.error(e.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var C1 = typeof WeakMap == "function" ? WeakMap : Map;
function iy(t, e, n) {
    n = vr(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = e.value;
    return n.callback = function() {
        eu || (eu = !0,
        vd = r),
        ad(t, e)
    }
    ,
    n
}
function oy(t, e, n) {
    n = vr(-1, n),
    n.tag = 3;
    var r = t.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = e.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            ad(t, e)
        }
    }
    var o = t.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        ad(t, e),
        typeof r != "function" && (Zr === null ? Zr = new Set([this]) : Zr.add(this));
        var s = e.stack;
        this.componentDidCatch(e.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function up(t, e, n) {
    var r = t.pingCache;
    if (r === null) {
        r = t.pingCache = new C1;
        var i = new Set;
        r.set(e, i)
    } else
        i = r.get(e),
        i === void 0 && (i = new Set,
        r.set(e, i));
    i.has(n) || (i.add(n),
    t = F1.bind(null, t, e, n),
    e.then(t, t))
}
function cp(t) {
    do {
        var e;
        if ((e = t.tag === 13) && (e = t.memoizedState,
        e = e !== null ? e.dehydrated !== null : !0),
        e)
            return t;
        t = t.return
    } while (t !== null);
    return null
}
function dp(t, e, n, r, i) {
    return t.mode & 1 ? (t.flags |= 65536,
    t.lanes = i,
    t) : (t === e ? t.flags |= 65536 : (t.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = vr(-1, 1),
    e.tag = 2,
    Kr(n, e, 1))),
    n.lanes |= 1),
    t)
}
var j1 = jr.ReactCurrentOwner
  , Bt = !1;
function Pt(t, e, n, r) {
    e.child = t === null ? Mg(e, null, n, r) : $o(e, t.child, n, r)
}
function fp(t, e, n, r, i) {
    n = n.render;
    var o = e.ref;
    return Oo(e, i),
    r = Nf(t, e, n, r, o, i),
    n = Pf(),
    t !== null && !Bt ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~i,
    kr(t, e, i)) : (_e && n && yf(e),
    e.flags |= 1,
    Pt(t, e, r, i),
    e.child)
}
function hp(t, e, n, r, i) {
    if (t === null) {
        var o = n.type;
        return typeof o == "function" && !Wf(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15,
        e.type = o,
        sy(t, e, o, r, i)) : (t = Ta(n.type, null, r, e, e.mode, i),
        t.ref = e.ref,
        t.return = e,
        e.child = t)
    }
    if (o = t.child,
    !(t.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : il,
        n(s, r) && t.ref === e.ref)
            return kr(t, e, i)
    }
    return e.flags |= 1,
    t = ei(o, r),
    t.ref = e.ref,
    t.return = e,
    e.child = t
}
function sy(t, e, n, r, i) {
    if (t !== null) {
        var o = t.memoizedProps;
        if (il(o, r) && t.ref === e.ref)
            if (Bt = !1,
            e.pendingProps = r = o,
            (t.lanes & i) !== 0)
                t.flags & 131072 && (Bt = !0);
            else
                return e.lanes = t.lanes,
                kr(t, e, i)
    }
    return ud(t, e, n, r, i)
}
function ly(t, e, n) {
    var r = e.pendingProps
      , i = r.children
      , o = t !== null ? t.memoizedState : null;
    if (r.mode === "hidden")
        if (!(e.mode & 1))
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            he(ko, tn),
            tn |= n;
        else {
            if (!(n & 1073741824))
                return t = o !== null ? o.baseLanes | n : n,
                e.lanes = e.childLanes = 1073741824,
                e.memoizedState = {
                    baseLanes: t,
                    cachePool: null,
                    transitions: null
                },
                e.updateQueue = null,
                he(ko, tn),
                tn |= t,
                null;
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            he(ko, tn),
            tn |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        e.memoizedState = null) : r = n,
        he(ko, tn),
        tn |= r;
    return Pt(t, e, i, n),
    e.child
}
function ay(t, e) {
    var n = e.ref;
    (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512,
    e.flags |= 2097152)
}
function ud(t, e, n, r, i) {
    var o = Vt(n) ? Wi : Tt.current;
    return o = Uo(e, o),
    Oo(e, i),
    n = Nf(t, e, n, r, o, i),
    r = Pf(),
    t !== null && !Bt ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~i,
    kr(t, e, i)) : (_e && r && yf(e),
    e.flags |= 1,
    Pt(t, e, n, i),
    e.child)
}
function pp(t, e, n, r, i) {
    if (Vt(n)) {
        var o = !0;
        Va(e)
    } else
        o = !1;
    if (Oo(e, i),
    e.stateNode === null)
        wa(t, e),
        ry(e, n, r),
        ld(e, n, r, i),
        r = !0;
    else if (t === null) {
        var s = e.stateNode
          , l = e.memoizedProps;
        s.props = l;
        var a = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = jn(u) : (u = Vt(n) ? Wi : Tt.current,
        u = Uo(e, u));
        var d = n.getDerivedStateFromProps
          , f = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && ap(e, s, r, u),
        Lr = !1;
        var h = e.memoizedState;
        s.state = h,
        Qa(e, r, s, i),
        a = e.memoizedState,
        l !== r || h !== a || $t.current || Lr ? (typeof d == "function" && (sd(e, n, d, r),
        a = e.memoizedState),
        (l = Lr || lp(e, n, l, r, h, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
        e.memoizedProps = r,
        e.memoizedState = a),
        s.props = r,
        s.state = a,
        s.context = u,
        r = l) : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
        r = !1)
    } else {
        s = e.stateNode,
        Lg(t, e),
        l = e.memoizedProps,
        u = e.type === e.elementType ? l : An(e.type, l),
        s.props = u,
        f = e.pendingProps,
        h = s.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = jn(a) : (a = Vt(n) ? Wi : Tt.current,
        a = Uo(e, a));
        var p = n.getDerivedStateFromProps;
        (d = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || h !== a) && ap(e, s, r, a),
        Lr = !1,
        h = e.memoizedState,
        s.state = h,
        Qa(e, r, s, i);
        var _ = e.memoizedState;
        l !== f || h !== _ || $t.current || Lr ? (typeof p == "function" && (sd(e, n, p, r),
        _ = e.memoizedState),
        (u = Lr || lp(e, n, u, r, h, _, a) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, _, a),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, _, a)),
        typeof s.componentDidUpdate == "function" && (e.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === t.memoizedProps && h === t.memoizedState || (e.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024),
        e.memoizedProps = r,
        e.memoizedState = _),
        s.props = r,
        s.state = _,
        s.context = a,
        r = u) : (typeof s.componentDidUpdate != "function" || l === t.memoizedProps && h === t.memoizedState || (e.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || l === t.memoizedProps && h === t.memoizedState || (e.flags |= 1024),
        r = !1)
    }
    return cd(t, e, n, r, o, i)
}
function cd(t, e, n, r, i, o) {
    ay(t, e);
    var s = (e.flags & 128) !== 0;
    if (!r && !s)
        return i && Jh(e, n, !1),
        kr(t, e, o);
    r = e.stateNode,
    j1.current = e;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return e.flags |= 1,
    t !== null && s ? (e.child = $o(e, t.child, null, o),
    e.child = $o(e, null, l, o)) : Pt(t, e, l, o),
    e.memoizedState = r.state,
    i && Jh(e, n, !0),
    e.child
}
function uy(t) {
    var e = t.stateNode;
    e.pendingContext ? Zh(t, e.pendingContext, e.pendingContext !== e.context) : e.context && Zh(t, e.context, !1),
    Cf(t, e.containerInfo)
}
function mp(t, e, n, r, i) {
    return Bo(),
    _f(i),
    e.flags |= 256,
    Pt(t, e, n, r),
    e.child
}
var dd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function fd(t) {
    return {
        baseLanes: t,
        cachePool: null,
        transitions: null
    }
}
function cy(t, e, n) {
    var r = e.pendingProps, i = Te.current, o = !1, s = (e.flags & 128) !== 0, l;
    if ((l = s) || (l = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? (o = !0,
    e.flags &= -129) : (t === null || t.memoizedState !== null) && (i |= 1),
    he(Te, i & 1),
    t === null)
        return id(e),
        t = e.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1,
        null) : (s = r.children,
        t = r.fallback,
        o ? (r = e.mode,
        o = e.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = s) : o = Nu(s, r, 0, null),
        t = Ri(t, r, n, null),
        o.return = e,
        t.return = e,
        o.sibling = t,
        e.child = o,
        e.child.memoizedState = fd(n),
        e.memoizedState = dd,
        t) : Df(e, s));
    if (i = t.memoizedState,
    i !== null && (l = i.dehydrated,
    l !== null))
        return b1(t, e, s, r, l, i, n);
    if (o) {
        o = r.fallback,
        s = e.mode,
        i = t.child,
        l = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && e.child !== i ? (r = e.child,
        r.childLanes = 0,
        r.pendingProps = a,
        e.deletions = null) : (r = ei(i, a),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        l !== null ? o = ei(l, o) : (o = Ri(o, s, n, null),
        o.flags |= 2),
        o.return = e,
        r.return = e,
        r.sibling = o,
        e.child = r,
        r = o,
        o = e.child,
        s = t.child.memoizedState,
        s = s === null ? fd(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        o.memoizedState = s,
        o.childLanes = t.childLanes & ~n,
        e.memoizedState = dd,
        r
    }
    return o = t.child,
    t = o.sibling,
    r = ei(o, {
        mode: "visible",
        children: r.children
    }),
    !(e.mode & 1) && (r.lanes = n),
    r.return = e,
    r.sibling = null,
    t !== null && (n = e.deletions,
    n === null ? (e.deletions = [t],
    e.flags |= 16) : n.push(t)),
    e.child = r,
    e.memoizedState = null,
    r
}
function Df(t, e) {
    return e = Nu({
        mode: "visible",
        children: e
    }, t.mode, 0, null),
    e.return = t,
    t.child = e
}
function Ql(t, e, n, r) {
    return r !== null && _f(r),
    $o(e, t.child, null, n),
    t = Df(e, e.pendingProps.children),
    t.flags |= 2,
    e.memoizedState = null,
    t
}
function b1(t, e, n, r, i, o, s) {
    if (n)
        return e.flags & 256 ? (e.flags &= -257,
        r = ac(Error(O(422))),
        Ql(t, e, s, r)) : e.memoizedState !== null ? (e.child = t.child,
        e.flags |= 128,
        null) : (o = r.fallback,
        i = e.mode,
        r = Nu({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = Ri(o, i, s, null),
        o.flags |= 2,
        r.return = e,
        o.return = e,
        r.sibling = o,
        e.child = r,
        e.mode & 1 && $o(e, t.child, null, s),
        e.child.memoizedState = fd(s),
        e.memoizedState = dd,
        o);
    if (!(e.mode & 1))
        return Ql(t, e, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        o = Error(O(419)),
        r = ac(o, r, void 0),
        Ql(t, e, s, r)
    }
    if (l = (s & t.childLanes) !== 0,
    Bt || l) {
        if (r = nt,
        r !== null) {
            switch (s & -s) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            Sr(t, i),
            Bn(r, t, i, -1))
        }
        return Ff(),
        r = ac(Error(O(421))),
        Ql(t, e, s, r)
    }
    return i.data === "$?" ? (e.flags |= 128,
    e.child = t.child,
    e = W1.bind(null, t),
    i._reactRetry = e,
    null) : (t = o.treeContext,
    ln = qr(i.nextSibling),
    un = e,
    _e = !0,
    Fn = null,
    t !== null && (yn[vn++] = mr,
    yn[vn++] = gr,
    yn[vn++] = Ui,
    mr = t.id,
    gr = t.overflow,
    Ui = e),
    e = Df(e, r.children),
    e.flags |= 4096,
    e)
}
function gp(t, e, n) {
    t.lanes |= e;
    var r = t.alternate;
    r !== null && (r.lanes |= e),
    od(t.return, e, n)
}
function uc(t, e, n, r, i) {
    var o = t.memoizedState;
    o === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = e,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function dy(t, e, n) {
    var r = e.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (Pt(t, e, r.children, n),
    r = Te.current,
    r & 2)
        r = r & 1 | 2,
        e.flags |= 128;
    else {
        if (t !== null && t.flags & 128)
            e: for (t = e.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && gp(t, n, e);
                else if (t.tag === 19)
                    gp(t, n, e);
                else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break e;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        break e;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        r &= 1
    }
    if (he(Te, r),
    !(e.mode & 1))
        e.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = e.child,
            i = null; n !== null; )
                t = n.alternate,
                t !== null && qa(t) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = e.child,
            e.child = null) : (i = n.sibling,
            n.sibling = null),
            uc(e, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = e.child,
            e.child = null; i !== null; ) {
                if (t = i.alternate,
                t !== null && qa(t) === null) {
                    e.child = i;
                    break
                }
                t = i.sibling,
                i.sibling = n,
                n = i,
                i = t
            }
            uc(e, !0, n, null, o);
            break;
        case "together":
            uc(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
        }
    return e.child
}
function wa(t, e) {
    !(e.mode & 1) && t !== null && (t.alternate = null,
    e.alternate = null,
    e.flags |= 2)
}
function kr(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies),
    $i |= e.lanes,
    !(n & e.childLanes))
        return null;
    if (t !== null && e.child !== t.child)
        throw Error(O(153));
    if (e.child !== null) {
        for (t = e.child,
        n = ei(t, t.pendingProps),
        e.child = n,
        n.return = e; t.sibling !== null; )
            t = t.sibling,
            n = n.sibling = ei(t, t.pendingProps),
            n.return = e;
        n.sibling = null
    }
    return e.child
}
function E1(t, e, n) {
    switch (e.tag) {
    case 3:
        uy(e),
        Bo();
        break;
    case 5:
        Ag(e);
        break;
    case 1:
        Vt(e.type) && Va(e);
        break;
    case 4:
        Cf(e, e.stateNode.containerInfo);
        break;
    case 10:
        var r = e.type._context
          , i = e.memoizedProps.value;
        he(Xa, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = e.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (he(Te, Te.current & 1),
            e.flags |= 128,
            null) : n & e.child.childLanes ? cy(t, e, n) : (he(Te, Te.current & 1),
            t = kr(t, e, n),
            t !== null ? t.sibling : null);
        he(Te, Te.current & 1);
        break;
    case 19:
        if (r = (n & e.childLanes) !== 0,
        t.flags & 128) {
            if (r)
                return dy(t, e, n);
            e.flags |= 128
        }
        if (i = e.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        he(Te, Te.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return e.lanes = 0,
        ly(t, e, n)
    }
    return kr(t, e, n)
}
var fy, hd, hy, py;
fy = function(t, e) {
    for (var n = e.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            t.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === e)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === e)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
hd = function() {}
;
hy = function(t, e, n, r) {
    var i = t.memoizedProps;
    if (i !== r) {
        t = e.stateNode,
        Ei(nr.current);
        var o = null;
        switch (n) {
        case "input":
            i = zc(t, i),
            r = zc(t, r),
            o = [];
            break;
        case "select":
            i = Ee({}, i, {
                value: void 0
            }),
            r = Ee({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = Ic(t, i),
            r = Ic(t, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (t.onclick = Ba)
        }
        Wc(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var l = i[u];
                    for (s in l)
                        l.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ks.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l)
                            !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in a)
                            a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}),
                            n[s] = a[s])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ks.hasOwnProperty(u) ? (a != null && u === "onScroll" && me("scroll", t),
                    o || l === a || (o = [])) : (o = o || []).push(u, a))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (e.updateQueue = u) && (e.flags |= 4)
    }
}
;
py = function(t, e, n, r) {
    n !== r && (e.flags |= 4)
}
;
function ps(t, e) {
    if (!_e)
        switch (t.tailMode) {
        case "hidden":
            e = t.tail;
            for (var n = null; e !== null; )
                e.alternate !== null && (n = e),
                e = e.sibling;
            n === null ? t.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = t.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : r.sibling = null
        }
}
function gt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child
      , n = 0
      , r = 0;
    if (e)
        for (var i = t.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = t,
            i = i.sibling;
    else
        for (i = t.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = t,
            i = i.sibling;
    return t.subtreeFlags |= r,
    t.childLanes = n,
    e
}
function N1(t, e, n) {
    var r = e.pendingProps;
    switch (vf(e),
    e.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return gt(e),
        null;
    case 1:
        return Vt(e.type) && $a(),
        gt(e),
        null;
    case 3:
        return r = e.stateNode,
        Vo(),
        ye($t),
        ye(Tt),
        bf(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (t === null || t.child === null) && (Xl(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024,
        Fn !== null && (wd(Fn),
        Fn = null))),
        hd(t, e),
        gt(e),
        null;
    case 5:
        jf(e);
        var i = Ei(ul.current);
        if (n = e.type,
        t !== null && e.stateNode != null)
            hy(t, e, n, r, i),
            t.ref !== e.ref && (e.flags |= 512,
            e.flags |= 2097152);
        else {
            if (!r) {
                if (e.stateNode === null)
                    throw Error(O(166));
                return gt(e),
                null
            }
            if (t = Ei(nr.current),
            Xl(e)) {
                r = e.stateNode,
                n = e.type;
                var o = e.memoizedProps;
                switch (r[Kn] = e,
                r[ll] = o,
                t = (e.mode & 1) !== 0,
                n) {
                case "dialog":
                    me("cancel", r),
                    me("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    me("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < Ss.length; i++)
                        me(Ss[i], r);
                    break;
                case "source":
                    me("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    me("error", r),
                    me("load", r);
                    break;
                case "details":
                    me("toggle", r);
                    break;
                case "input":
                    Ch(r, o),
                    me("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    me("invalid", r);
                    break;
                case "textarea":
                    bh(r, o),
                    me("invalid", r)
                }
                Wc(n, o),
                i = null;
                for (var s in o)
                    if (o.hasOwnProperty(s)) {
                        var l = o[s];
                        s === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && Hl(r.textContent, l, t),
                        i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && Hl(r.textContent, l, t),
                        i = ["children", "" + l]) : Ks.hasOwnProperty(s) && l != null && s === "onScroll" && me("scroll", r)
                    }
                switch (n) {
                case "input":
                    Il(r),
                    jh(r, o, !0);
                    break;
                case "textarea":
                    Il(r),
                    Eh(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = Ba)
                }
                r = i,
                e.updateQueue = r,
                r !== null && (e.flags |= 4)
            } else {
                s = i.nodeType === 9 ? i : i.ownerDocument,
                t === "http://www.w3.org/1999/xhtml" && (t = Bm(n)),
                t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = s.createElement("div"),
                t.innerHTML = "<script><\/script>",
                t = t.removeChild(t.firstChild)) : typeof r.is == "string" ? t = s.createElement(n, {
                    is: r.is
                }) : (t = s.createElement(n),
                n === "select" && (s = t,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : t = s.createElementNS(t, n),
                t[Kn] = e,
                t[ll] = r,
                fy(t, e, !1, !1),
                e.stateNode = t;
                e: {
                    switch (s = Uc(n, r),
                    n) {
                    case "dialog":
                        me("cancel", t),
                        me("close", t),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        me("load", t),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < Ss.length; i++)
                            me(Ss[i], t);
                        i = r;
                        break;
                    case "source":
                        me("error", t),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        me("error", t),
                        me("load", t),
                        i = r;
                        break;
                    case "details":
                        me("toggle", t),
                        i = r;
                        break;
                    case "input":
                        Ch(t, r),
                        i = zc(t, r),
                        me("invalid", t);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        t._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = Ee({}, r, {
                            value: void 0
                        }),
                        me("invalid", t);
                        break;
                    case "textarea":
                        bh(t, r),
                        i = Ic(t, r),
                        me("invalid", t);
                        break;
                    default:
                        i = r
                    }
                    Wc(n, i),
                    l = i;
                    for (o in l)
                        if (l.hasOwnProperty(o)) {
                            var a = l[o];
                            o === "style" ? Ym(t, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && $m(t, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Zs(t, a) : typeof a == "number" && Zs(t, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ks.hasOwnProperty(o) ? a != null && o === "onScroll" && me("scroll", t) : a != null && nf(t, o, a, s))
                        }
                    switch (n) {
                    case "input":
                        Il(t),
                        jh(t, r, !1);
                        break;
                    case "textarea":
                        Il(t),
                        Eh(t);
                        break;
                    case "option":
                        r.value != null && t.setAttribute("value", "" + oi(r.value));
                        break;
                    case "select":
                        t.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? bo(t, !!r.multiple, o, !1) : r.defaultValue != null && bo(t, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (t.onclick = Ba)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (e.flags |= 4)
            }
            e.ref !== null && (e.flags |= 512,
            e.flags |= 2097152)
        }
        return gt(e),
        null;
    case 6:
        if (t && e.stateNode != null)
            py(t, e, t.memoizedProps, r);
        else {
            if (typeof r != "string" && e.stateNode === null)
                throw Error(O(166));
            if (n = Ei(ul.current),
            Ei(nr.current),
            Xl(e)) {
                if (r = e.stateNode,
                n = e.memoizedProps,
                r[Kn] = e,
                (o = r.nodeValue !== n) && (t = un,
                t !== null))
                    switch (t.tag) {
                    case 3:
                        Hl(r.nodeValue, n, (t.mode & 1) !== 0);
                        break;
                    case 5:
                        t.memoizedProps.suppressHydrationWarning !== !0 && Hl(r.nodeValue, n, (t.mode & 1) !== 0)
                    }
                o && (e.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Kn] = e,
                e.stateNode = r
        }
        return gt(e),
        null;
    case 13:
        if (ye(Te),
        r = e.memoizedState,
        t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (_e && ln !== null && e.mode & 1 && !(e.flags & 128))
                Rg(),
                Bo(),
                e.flags |= 98560,
                o = !1;
            else if (o = Xl(e),
            r !== null && r.dehydrated !== null) {
                if (t === null) {
                    if (!o)
                        throw Error(O(318));
                    if (o = e.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(O(317));
                    o[Kn] = e
                } else
                    Bo(),
                    !(e.flags & 128) && (e.memoizedState = null),
                    e.flags |= 4;
                gt(e),
                o = !1
            } else
                Fn !== null && (wd(Fn),
                Fn = null),
                o = !0;
            if (!o)
                return e.flags & 65536 ? e : null
        }
        return e.flags & 128 ? (e.lanes = n,
        e) : (r = r !== null,
        r !== (t !== null && t.memoizedState !== null) && r && (e.child.flags |= 8192,
        e.mode & 1 && (t === null || Te.current & 1 ? Qe === 0 && (Qe = 3) : Ff())),
        e.updateQueue !== null && (e.flags |= 4),
        gt(e),
        null);
    case 4:
        return Vo(),
        hd(t, e),
        t === null && ol(e.stateNode.containerInfo),
        gt(e),
        null;
    case 10:
        return Sf(e.type._context),
        gt(e),
        null;
    case 17:
        return Vt(e.type) && $a(),
        gt(e),
        null;
    case 19:
        if (ye(Te),
        o = e.memoizedState,
        o === null)
            return gt(e),
            null;
        if (r = (e.flags & 128) !== 0,
        s = o.rendering,
        s === null)
            if (r)
                ps(o, !1);
            else {
                if (Qe !== 0 || t !== null && t.flags & 128)
                    for (t = e.child; t !== null; ) {
                        if (s = qa(t),
                        s !== null) {
                            for (e.flags |= 128,
                            ps(o, !1),
                            r = s.updateQueue,
                            r !== null && (e.updateQueue = r,
                            e.flags |= 4),
                            e.subtreeFlags = 0,
                            r = n,
                            n = e.child; n !== null; )
                                o = n,
                                t = r,
                                o.flags &= 14680066,
                                s = o.alternate,
                                s === null ? (o.childLanes = 0,
                                o.lanes = t,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = s.childLanes,
                                o.lanes = s.lanes,
                                o.child = s.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = s.memoizedProps,
                                o.memoizedState = s.memoizedState,
                                o.updateQueue = s.updateQueue,
                                o.type = s.type,
                                t = s.dependencies,
                                o.dependencies = t === null ? null : {
                                    lanes: t.lanes,
                                    firstContext: t.firstContext
                                }),
                                n = n.sibling;
                            return he(Te, Te.current & 1 | 2),
                            e.child
                        }
                        t = t.sibling
                    }
                o.tail !== null && Ae() > Ho && (e.flags |= 128,
                r = !0,
                ps(o, !1),
                e.lanes = 4194304)
            }
        else {
            if (!r)
                if (t = qa(s),
                t !== null) {
                    if (e.flags |= 128,
                    r = !0,
                    n = t.updateQueue,
                    n !== null && (e.updateQueue = n,
                    e.flags |= 4),
                    ps(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !s.alternate && !_e)
                        return gt(e),
                        null
                } else
                    2 * Ae() - o.renderingStartTime > Ho && n !== 1073741824 && (e.flags |= 128,
                    r = !0,
                    ps(o, !1),
                    e.lanes = 4194304);
            o.isBackwards ? (s.sibling = e.child,
            e.child = s) : (n = o.last,
            n !== null ? n.sibling = s : e.child = s,
            o.last = s)
        }
        return o.tail !== null ? (e = o.tail,
        o.rendering = e,
        o.tail = e.sibling,
        o.renderingStartTime = Ae(),
        e.sibling = null,
        n = Te.current,
        he(Te, r ? n & 1 | 2 : n & 1),
        e) : (gt(e),
        null);
    case 22:
    case 23:
        return If(),
        r = e.memoizedState !== null,
        t !== null && t.memoizedState !== null !== r && (e.flags |= 8192),
        r && e.mode & 1 ? tn & 1073741824 && (gt(e),
        e.subtreeFlags & 6 && (e.flags |= 8192)) : gt(e),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(O(156, e.tag))
}
function P1(t, e) {
    switch (vf(e),
    e.tag) {
    case 1:
        return Vt(e.type) && $a(),
        t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 3:
        return Vo(),
        ye($t),
        ye(Tt),
        bf(),
        t = e.flags,
        t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128,
        e) : null;
    case 5:
        return jf(e),
        null;
    case 13:
        if (ye(Te),
        t = e.memoizedState,
        t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
                throw Error(O(340));
            Bo()
        }
        return t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 19:
        return ye(Te),
        null;
    case 4:
        return Vo(),
        null;
    case 10:
        return Sf(e.type._context),
        null;
    case 22:
    case 23:
        return If(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ql = !1
  , xt = !1
  , O1 = typeof WeakSet == "function" ? WeakSet : Set
  , L = null;
function So(t, e) {
    var n = t.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Pe(t, e, r)
            }
        else
            n.current = null
}
function pd(t, e, n) {
    try {
        n()
    } catch (r) {
        Pe(t, e, r)
    }
}
var yp = !1;
function R1(t, e) {
    if (Kc = Fa,
    t = _g(),
    gf(t)) {
        if ("selectionStart"in t)
            var n = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
        else
            e: {
                n = (n = t.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , d = 0
                      , f = t
                      , h = null;
                    t: for (; ; ) {
                        for (var p; f !== n || i !== 0 && f.nodeType !== 3 || (l = s + i),
                        f !== o || r !== 0 && f.nodeType !== 3 || (a = s + r),
                        f.nodeType === 3 && (s += f.nodeValue.length),
                        (p = f.firstChild) !== null; )
                            h = f,
                            f = p;
                        for (; ; ) {
                            if (f === t)
                                break t;
                            if (h === n && ++u === i && (l = s),
                            h === o && ++d === r && (a = s),
                            (p = f.nextSibling) !== null)
                                break;
                            f = h,
                            h = f.parentNode
                        }
                        f = p
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Zc = {
        focusedElem: t,
        selectionRange: n
    },
    Fa = !1,
    L = e; L !== null; )
        if (e = L,
        t = e.child,
        (e.subtreeFlags & 1028) !== 0 && t !== null)
            t.return = e,
            L = t;
        else
            for (; L !== null; ) {
                e = L;
                try {
                    var _ = e.alternate;
                    if (e.flags & 1024)
                        switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (_ !== null) {
                                var g = _.memoizedProps
                                  , w = _.memoizedState
                                  , y = e.stateNode
                                  , m = y.getSnapshotBeforeUpdate(e.elementType === e.type ? g : An(e.type, g), w);
                                y.__reactInternalSnapshotBeforeUpdate = m
                            }
                            break;
                        case 3:
                            var v = e.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(O(163))
                        }
                } catch (x) {
                    Pe(e, e.return, x)
                }
                if (t = e.sibling,
                t !== null) {
                    t.return = e.return,
                    L = t;
                    break
                }
                L = e.return
            }
    return _ = yp,
    yp = !1,
    _
}
function Ls(t, e, n) {
    var r = e.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & t) === t) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && pd(e, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function bu(t, e) {
    if (e = e.updateQueue,
    e = e !== null ? e.lastEffect : null,
    e !== null) {
        var n = e = e.next;
        do {
            if ((n.tag & t) === t) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== e)
    }
}
function md(t) {
    var e = t.ref;
    if (e !== null) {
        var n = t.stateNode;
        switch (t.tag) {
        case 5:
            t = n;
            break;
        default:
            t = n
        }
        typeof e == "function" ? e(t) : e.current = t
    }
}
function my(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null,
    my(e)),
    t.child = null,
    t.deletions = null,
    t.sibling = null,
    t.tag === 5 && (e = t.stateNode,
    e !== null && (delete e[Kn],
    delete e[ll],
    delete e[td],
    delete e[p1],
    delete e[m1])),
    t.stateNode = null,
    t.return = null,
    t.dependencies = null,
    t.memoizedProps = null,
    t.memoizedState = null,
    t.pendingProps = null,
    t.stateNode = null,
    t.updateQueue = null
}
function gy(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4
}
function vp(t) {
    e: for (; ; ) {
        for (; t.sibling === null; ) {
            if (t.return === null || gy(t.return))
                return null;
            t = t.return
        }
        for (t.sibling.return = t.return,
        t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
            if (t.flags & 2 || t.child === null || t.tag === 4)
                continue e;
            t.child.return = t,
            t = t.child
        }
        if (!(t.flags & 2))
            return t.stateNode
    }
}
function gd(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
        t = t.stateNode,
        e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode,
        e.insertBefore(t, n)) : (e = n,
        e.appendChild(t)),
        n = n._reactRootContainer,
        n != null || e.onclick !== null || (e.onclick = Ba));
    else if (r !== 4 && (t = t.child,
    t !== null))
        for (gd(t, e, n),
        t = t.sibling; t !== null; )
            gd(t, e, n),
            t = t.sibling
}
function yd(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
        t = t.stateNode,
        e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (r !== 4 && (t = t.child,
    t !== null))
        for (yd(t, e, n),
        t = t.sibling; t !== null; )
            yd(t, e, n),
            t = t.sibling
}
var st = null
  , In = !1;
function Dr(t, e, n) {
    for (n = n.child; n !== null; )
        yy(t, e, n),
        n = n.sibling
}
function yy(t, e, n) {
    if (tr && typeof tr.onCommitFiberUnmount == "function")
        try {
            tr.onCommitFiberUnmount(_u, n)
        } catch {}
    switch (n.tag) {
    case 5:
        xt || So(n, e);
    case 6:
        var r = st
          , i = In;
        st = null,
        Dr(t, e, n),
        st = r,
        In = i,
        st !== null && (In ? (t = st,
        n = n.stateNode,
        t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : st.removeChild(n.stateNode));
        break;
    case 18:
        st !== null && (In ? (t = st,
        n = n.stateNode,
        t.nodeType === 8 ? nc(t.parentNode, n) : t.nodeType === 1 && nc(t, n),
        nl(t)) : nc(st, n.stateNode));
        break;
    case 4:
        r = st,
        i = In,
        st = n.stateNode.containerInfo,
        In = !0,
        Dr(t, e, n),
        st = r,
        In = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!xt && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , s = o.destroy;
                o = o.tag,
                s !== void 0 && (o & 2 || o & 4) && pd(n, e, s),
                i = i.next
            } while (i !== r)
        }
        Dr(t, e, n);
        break;
    case 1:
        if (!xt && (So(n, e),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                Pe(n, e, l)
            }
        Dr(t, e, n);
        break;
    case 21:
        Dr(t, e, n);
        break;
    case 22:
        n.mode & 1 ? (xt = (r = xt) || n.memoizedState !== null,
        Dr(t, e, n),
        xt = r) : Dr(t, e, n);
        break;
    default:
        Dr(t, e, n)
    }
}
function _p(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var n = t.stateNode;
        n === null && (n = t.stateNode = new O1),
        e.forEach(function(r) {
            var i = U1.bind(null, t, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function zn(t, e) {
    var n = e.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = t
                  , s = e
                  , l = s;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        st = l.stateNode,
                        In = !1;
                        break e;
                    case 3:
                        st = l.stateNode.containerInfo,
                        In = !0;
                        break e;
                    case 4:
                        st = l.stateNode.containerInfo,
                        In = !0;
                        break e
                    }
                    l = l.return
                }
                if (st === null)
                    throw Error(O(160));
                yy(o, s, i),
                st = null,
                In = !1;
                var a = i.alternate;
                a !== null && (a.return = null),
                i.return = null
            } catch (u) {
                Pe(i, e, u)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null; )
            vy(e, t),
            e = e.sibling
}
function vy(t, e) {
    var n = t.alternate
      , r = t.flags;
    switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (zn(e, t),
        Xn(t),
        r & 4) {
            try {
                Ls(3, t, t.return),
                bu(3, t)
            } catch (g) {
                Pe(t, t.return, g)
            }
            try {
                Ls(5, t, t.return)
            } catch (g) {
                Pe(t, t.return, g)
            }
        }
        break;
    case 1:
        zn(e, t),
        Xn(t),
        r & 512 && n !== null && So(n, n.return);
        break;
    case 5:
        if (zn(e, t),
        Xn(t),
        r & 512 && n !== null && So(n, n.return),
        t.flags & 32) {
            var i = t.stateNode;
            try {
                Zs(i, "")
            } catch (g) {
                Pe(t, t.return, g)
            }
        }
        if (r & 4 && (i = t.stateNode,
        i != null)) {
            var o = t.memoizedProps
              , s = n !== null ? n.memoizedProps : o
              , l = t.type
              , a = t.updateQueue;
            if (t.updateQueue = null,
            a !== null)
                try {
                    l === "input" && o.type === "radio" && o.name != null && Wm(i, o),
                    Uc(l, s);
                    var u = Uc(l, o);
                    for (s = 0; s < a.length; s += 2) {
                        var d = a[s]
                          , f = a[s + 1];
                        d === "style" ? Ym(i, f) : d === "dangerouslySetInnerHTML" ? $m(i, f) : d === "children" ? Zs(i, f) : nf(i, d, f, u)
                    }
                    switch (l) {
                    case "input":
                        Lc(i, o);
                        break;
                    case "textarea":
                        Um(i, o);
                        break;
                    case "select":
                        var h = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var p = o.value;
                        p != null ? bo(i, !!o.multiple, p, !1) : h !== !!o.multiple && (o.defaultValue != null ? bo(i, !!o.multiple, o.defaultValue, !0) : bo(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[ll] = o
                } catch (g) {
                    Pe(t, t.return, g)
                }
        }
        break;
    case 6:
        if (zn(e, t),
        Xn(t),
        r & 4) {
            if (t.stateNode === null)
                throw Error(O(162));
            i = t.stateNode,
            o = t.memoizedProps;
            try {
                i.nodeValue = o
            } catch (g) {
                Pe(t, t.return, g)
            }
        }
        break;
    case 3:
        if (zn(e, t),
        Xn(t),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                nl(e.containerInfo)
            } catch (g) {
                Pe(t, t.return, g)
            }
        break;
    case 4:
        zn(e, t),
        Xn(t);
        break;
    case 13:
        zn(e, t),
        Xn(t),
        i = t.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || (Lf = Ae())),
        r & 4 && _p(t);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null,
        t.mode & 1 ? (xt = (u = xt) || d,
        zn(e, t),
        xt = u) : zn(e, t),
        Xn(t),
        r & 8192) {
            if (u = t.memoizedState !== null,
            (t.stateNode.isHidden = u) && !d && t.mode & 1)
                for (L = t,
                d = t.child; d !== null; ) {
                    for (f = L = d; L !== null; ) {
                        switch (h = L,
                        p = h.child,
                        h.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Ls(4, h, h.return);
                            break;
                        case 1:
                            So(h, h.return);
                            var _ = h.stateNode;
                            if (typeof _.componentWillUnmount == "function") {
                                r = h,
                                n = h.return;
                                try {
                                    e = r,
                                    _.props = e.memoizedProps,
                                    _.state = e.memoizedState,
                                    _.componentWillUnmount()
                                } catch (g) {
                                    Pe(r, n, g)
                                }
                            }
                            break;
                        case 5:
                            So(h, h.return);
                            break;
                        case 22:
                            if (h.memoizedState !== null) {
                                wp(f);
                                continue
                            }
                        }
                        p !== null ? (p.return = h,
                        L = p) : wp(f)
                    }
                    d = d.sibling
                }
            e: for (d = null,
            f = t; ; ) {
                if (f.tag === 5) {
                    if (d === null) {
                        d = f;
                        try {
                            i = f.stateNode,
                            u ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = f.stateNode,
                            a = f.memoizedProps.style,
                            s = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = Vm("display", s))
                        } catch (g) {
                            Pe(t, t.return, g)
                        }
                    }
                } else if (f.tag === 6) {
                    if (d === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (g) {
                            Pe(t, t.return, g)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === t) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === t)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === t)
                        break e;
                    d === f && (d = null),
                    f = f.return
                }
                d === f && (d = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        zn(e, t),
        Xn(t),
        r & 4 && _p(t);
        break;
    case 21:
        break;
    default:
        zn(e, t),
        Xn(t)
    }
}
function Xn(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null; ) {
                    if (gy(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(O(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Zs(i, ""),
                r.flags &= -33);
                var o = vp(t);
                yd(t, o, i);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , l = vp(t);
                gd(t, l, s);
                break;
            default:
                throw Error(O(161))
            }
        } catch (a) {
            Pe(t, t.return, a)
        }
        t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
}
function D1(t, e, n) {
    L = t,
    _y(t)
}
function _y(t, e, n) {
    for (var r = (t.mode & 1) !== 0; L !== null; ) {
        var i = L
          , o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || ql;
            if (!s) {
                var l = i.alternate
                  , a = l !== null && l.memoizedState !== null || xt;
                l = ql;
                var u = xt;
                if (ql = s,
                (xt = a) && !u)
                    for (L = i; L !== null; )
                        s = L,
                        a = s.child,
                        s.tag === 22 && s.memoizedState !== null ? Sp(i) : a !== null ? (a.return = s,
                        L = a) : Sp(i);
                for (; o !== null; )
                    L = o,
                    _y(o),
                    o = o.sibling;
                L = i,
                ql = l,
                xt = u
            }
            xp(t)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
            L = o) : xp(t)
    }
}
function xp(t) {
    for (; L !== null; ) {
        var e = L;
        if (e.flags & 8772) {
            var n = e.alternate;
            try {
                if (e.flags & 8772)
                    switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        xt || bu(5, e);
                        break;
                    case 1:
                        var r = e.stateNode;
                        if (e.flags & 4 && !xt)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = e.elementType === e.type ? n.memoizedProps : An(e.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = e.updateQueue;
                        o !== null && ip(e, o, r);
                        break;
                    case 3:
                        var s = e.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            e.child !== null)
                                switch (e.child.tag) {
                                case 5:
                                    n = e.child.stateNode;
                                    break;
                                case 1:
                                    n = e.child.stateNode
                                }
                            ip(e, s, n)
                        }
                        break;
                    case 5:
                        var l = e.stateNode;
                        if (n === null && e.flags & 4) {
                            n = l;
                            var a = e.memoizedProps;
                            switch (e.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (e.memoizedState === null) {
                            var u = e.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && nl(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(O(163))
                    }
                xt || e.flags & 512 && md(e)
            } catch (h) {
                Pe(e, e.return, h)
            }
        }
        if (e === t) {
            L = null;
            break
        }
        if (n = e.sibling,
        n !== null) {
            n.return = e.return,
            L = n;
            break
        }
        L = e.return
    }
}
function wp(t) {
    for (; L !== null; ) {
        var e = L;
        if (e === t) {
            L = null;
            break
        }
        var n = e.sibling;
        if (n !== null) {
            n.return = e.return,
            L = n;
            break
        }
        L = e.return
    }
}
function Sp(t) {
    for (; L !== null; ) {
        var e = L;
        try {
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                var n = e.return;
                try {
                    bu(4, e)
                } catch (a) {
                    Pe(e, n, a)
                }
                break;
            case 1:
                var r = e.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = e.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        Pe(e, i, a)
                    }
                }
                var o = e.return;
                try {
                    md(e)
                } catch (a) {
                    Pe(e, o, a)
                }
                break;
            case 5:
                var s = e.return;
                try {
                    md(e)
                } catch (a) {
                    Pe(e, s, a)
                }
            }
        } catch (a) {
            Pe(e, e.return, a)
        }
        if (e === t) {
            L = null;
            break
        }
        var l = e.sibling;
        if (l !== null) {
            l.return = e.return,
            L = l;
            break
        }
        L = e.return
    }
}
var M1 = Math.ceil
  , Ja = jr.ReactCurrentDispatcher
  , Mf = jr.ReactCurrentOwner
  , Tn = jr.ReactCurrentBatchConfig
  , oe = 0
  , nt = null
  , $e = null
  , at = 0
  , tn = 0
  , ko = di(0)
  , Qe = 0
  , hl = null
  , $i = 0
  , Eu = 0
  , zf = 0
  , As = null
  , Ut = null
  , Lf = 0
  , Ho = 1 / 0
  , cr = null
  , eu = !1
  , vd = null
  , Zr = null
  , Kl = !1
  , Wr = null
  , tu = 0
  , Is = 0
  , _d = null
  , Sa = -1
  , ka = 0;
function Lt() {
    return oe & 6 ? Ae() : Sa !== -1 ? Sa : Sa = Ae()
}
function Jr(t) {
    return t.mode & 1 ? oe & 2 && at !== 0 ? at & -at : y1.transition !== null ? (ka === 0 && (ka = rg()),
    ka) : (t = ue,
    t !== 0 || (t = window.event,
    t = t === void 0 ? 16 : cg(t.type)),
    t) : 1
}
function Bn(t, e, n, r) {
    if (50 < Is)
        throw Is = 0,
        _d = null,
        Error(O(185));
    jl(t, n, r),
    (!(oe & 2) || t !== nt) && (t === nt && (!(oe & 2) && (Eu |= n),
    Qe === 4 && Ir(t, at)),
    Yt(t, r),
    n === 1 && oe === 0 && !(e.mode & 1) && (Ho = Ae() + 500,
    Tu && fi()))
}
function Yt(t, e) {
    var n = t.callbackNode;
    y_(t, e);
    var r = Ia(t, t === nt ? at : 0);
    if (r === 0)
        n !== null && Oh(n),
        t.callbackNode = null,
        t.callbackPriority = 0;
    else if (e = r & -r,
    t.callbackPriority !== e) {
        if (n != null && Oh(n),
        e === 1)
            t.tag === 0 ? g1(kp.bind(null, t)) : Ng(kp.bind(null, t)),
            f1(function() {
                !(oe & 6) && fi()
            }),
            n = null;
        else {
            switch (ig(r)) {
            case 1:
                n = af;
                break;
            case 4:
                n = tg;
                break;
            case 16:
                n = Aa;
                break;
            case 536870912:
                n = ng;
                break;
            default:
                n = Aa
            }
            n = by(n, xy.bind(null, t))
        }
        t.callbackPriority = e,
        t.callbackNode = n
    }
}
function xy(t, e) {
    if (Sa = -1,
    ka = 0,
    oe & 6)
        throw Error(O(327));
    var n = t.callbackNode;
    if (Ro() && t.callbackNode !== n)
        return null;
    var r = Ia(t, t === nt ? at : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & t.expiredLanes || e)
        e = nu(t, r);
    else {
        e = r;
        var i = oe;
        oe |= 2;
        var o = Sy();
        (nt !== t || at !== e) && (cr = null,
        Ho = Ae() + 500,
        Oi(t, e));
        do
            try {
                A1();
                break
            } catch (l) {
                wy(t, l)
            }
        while (!0);
        wf(),
        Ja.current = o,
        oe = i,
        $e !== null ? e = 0 : (nt = null,
        at = 0,
        e = Qe)
    }
    if (e !== 0) {
        if (e === 2 && (i = Hc(t),
        i !== 0 && (r = i,
        e = xd(t, i))),
        e === 1)
            throw n = hl,
            Oi(t, 0),
            Ir(t, r),
            Yt(t, Ae()),
            n;
        if (e === 6)
            Ir(t, r);
        else {
            if (i = t.current.alternate,
            !(r & 30) && !z1(i) && (e = nu(t, r),
            e === 2 && (o = Hc(t),
            o !== 0 && (r = o,
            e = xd(t, o))),
            e === 1))
                throw n = hl,
                Oi(t, 0),
                Ir(t, r),
                Yt(t, Ae()),
                n;
            switch (t.finishedWork = i,
            t.finishedLanes = r,
            e) {
            case 0:
            case 1:
                throw Error(O(345));
            case 2:
                Si(t, Ut, cr);
                break;
            case 3:
                if (Ir(t, r),
                (r & 130023424) === r && (e = Lf + 500 - Ae(),
                10 < e)) {
                    if (Ia(t, 0) !== 0)
                        break;
                    if (i = t.suspendedLanes,
                    (i & r) !== r) {
                        Lt(),
                        t.pingedLanes |= t.suspendedLanes & i;
                        break
                    }
                    t.timeoutHandle = ed(Si.bind(null, t, Ut, cr), e);
                    break
                }
                Si(t, Ut, cr);
                break;
            case 4:
                if (Ir(t, r),
                (r & 4194240) === r)
                    break;
                for (e = t.eventTimes,
                i = -1; 0 < r; ) {
                    var s = 31 - Un(r);
                    o = 1 << s,
                    s = e[s],
                    s > i && (i = s),
                    r &= ~o
                }
                if (r = i,
                r = Ae() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * M1(r / 1960)) - r,
                10 < r) {
                    t.timeoutHandle = ed(Si.bind(null, t, Ut, cr), r);
                    break
                }
                Si(t, Ut, cr);
                break;
            case 5:
                Si(t, Ut, cr);
                break;
            default:
                throw Error(O(329))
            }
        }
    }
    return Yt(t, Ae()),
    t.callbackNode === n ? xy.bind(null, t) : null
}
function xd(t, e) {
    var n = As;
    return t.current.memoizedState.isDehydrated && (Oi(t, e).flags |= 256),
    t = nu(t, e),
    t !== 2 && (e = Ut,
    Ut = n,
    e !== null && wd(e)),
    t
}
function wd(t) {
    Ut === null ? Ut = t : Ut.push.apply(Ut, t)
}
function z1(t) {
    for (var e = t; ; ) {
        if (e.flags & 16384) {
            var n = e.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!$n(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = e.child,
        e.subtreeFlags & 16384 && n !== null)
            n.return = e,
            e = n;
        else {
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return !0;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
    }
    return !0
}
function Ir(t, e) {
    for (e &= ~zf,
    e &= ~Eu,
    t.suspendedLanes |= e,
    t.pingedLanes &= ~e,
    t = t.expirationTimes; 0 < e; ) {
        var n = 31 - Un(e)
          , r = 1 << n;
        t[n] = -1,
        e &= ~r
    }
}
function kp(t) {
    if (oe & 6)
        throw Error(O(327));
    Ro();
    var e = Ia(t, 0);
    if (!(e & 1))
        return Yt(t, Ae()),
        null;
    var n = nu(t, e);
    if (t.tag !== 0 && n === 2) {
        var r = Hc(t);
        r !== 0 && (e = r,
        n = xd(t, r))
    }
    if (n === 1)
        throw n = hl,
        Oi(t, 0),
        Ir(t, e),
        Yt(t, Ae()),
        n;
    if (n === 6)
        throw Error(O(345));
    return t.finishedWork = t.current.alternate,
    t.finishedLanes = e,
    Si(t, Ut, cr),
    Yt(t, Ae()),
    null
}
function Af(t, e) {
    var n = oe;
    oe |= 1;
    try {
        return t(e)
    } finally {
        oe = n,
        oe === 0 && (Ho = Ae() + 500,
        Tu && fi())
    }
}
function Vi(t) {
    Wr !== null && Wr.tag === 0 && !(oe & 6) && Ro();
    var e = oe;
    oe |= 1;
    var n = Tn.transition
      , r = ue;
    try {
        if (Tn.transition = null,
        ue = 1,
        t)
            return t()
    } finally {
        ue = r,
        Tn.transition = n,
        oe = e,
        !(oe & 6) && fi()
    }
}
function If() {
    tn = ko.current,
    ye(ko)
}
function Oi(t, e) {
    t.finishedWork = null,
    t.finishedLanes = 0;
    var n = t.timeoutHandle;
    if (n !== -1 && (t.timeoutHandle = -1,
    d1(n)),
    $e !== null)
        for (n = $e.return; n !== null; ) {
            var r = n;
            switch (vf(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && $a();
                break;
            case 3:
                Vo(),
                ye($t),
                ye(Tt),
                bf();
                break;
            case 5:
                jf(r);
                break;
            case 4:
                Vo();
                break;
            case 13:
                ye(Te);
                break;
            case 19:
                ye(Te);
                break;
            case 10:
                Sf(r.type._context);
                break;
            case 22:
            case 23:
                If()
            }
            n = n.return
        }
    if (nt = t,
    $e = t = ei(t.current, null),
    at = tn = e,
    Qe = 0,
    hl = null,
    zf = Eu = $i = 0,
    Ut = As = null,
    bi !== null) {
        for (e = 0; e < bi.length; e++)
            if (n = bi[e],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i,
                    r.next = s
                }
                n.pending = r
            }
        bi = null
    }
    return t
}
function wy(t, e) {
    do {
        var n = $e;
        try {
            if (wf(),
            _a.current = Za,
            Ka) {
                for (var r = be.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                Ka = !1
            }
            if (Bi = 0,
            et = Xe = be = null,
            zs = !1,
            cl = 0,
            Mf.current = null,
            n === null || n.return === null) {
                Qe = 1,
                hl = e,
                $e = null;
                break
            }
            e: {
                var o = t
                  , s = n.return
                  , l = n
                  , a = e;
                if (e = at,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , d = l
                      , f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var h = d.alternate;
                        h ? (d.updateQueue = h.updateQueue,
                        d.memoizedState = h.memoizedState,
                        d.lanes = h.lanes) : (d.updateQueue = null,
                        d.memoizedState = null)
                    }
                    var p = cp(s);
                    if (p !== null) {
                        p.flags &= -257,
                        dp(p, s, l, o, e),
                        p.mode & 1 && up(o, u, e),
                        e = p,
                        a = u;
                        var _ = e.updateQueue;
                        if (_ === null) {
                            var g = new Set;
                            g.add(a),
                            e.updateQueue = g
                        } else
                            _.add(a);
                        break e
                    } else {
                        if (!(e & 1)) {
                            up(o, u, e),
                            Ff();
                            break e
                        }
                        a = Error(O(426))
                    }
                } else if (_e && l.mode & 1) {
                    var w = cp(s);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        dp(w, s, l, o, e),
                        _f(Yo(a, l));
                        break e
                    }
                }
                o = a = Yo(a, l),
                Qe !== 4 && (Qe = 2),
                As === null ? As = [o] : As.push(o),
                o = s;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        e &= -e,
                        o.lanes |= e;
                        var y = iy(o, a, e);
                        rp(o, y);
                        break e;
                    case 1:
                        l = a;
                        var m = o.type
                          , v = o.stateNode;
                        if (!(o.flags & 128) && (typeof m.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Zr === null || !Zr.has(v)))) {
                            o.flags |= 65536,
                            e &= -e,
                            o.lanes |= e;
                            var x = oy(o, l, e);
                            rp(o, x);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            Ty(n)
        } catch (k) {
            e = k,
            $e === n && n !== null && ($e = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Sy() {
    var t = Ja.current;
    return Ja.current = Za,
    t === null ? Za : t
}
function Ff() {
    (Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4),
    nt === null || !($i & 268435455) && !(Eu & 268435455) || Ir(nt, at)
}
function nu(t, e) {
    var n = oe;
    oe |= 2;
    var r = Sy();
    (nt !== t || at !== e) && (cr = null,
    Oi(t, e));
    do
        try {
            L1();
            break
        } catch (i) {
            wy(t, i)
        }
    while (!0);
    if (wf(),
    oe = n,
    Ja.current = r,
    $e !== null)
        throw Error(O(261));
    return nt = null,
    at = 0,
    Qe
}
function L1() {
    for (; $e !== null; )
        ky($e)
}
function A1() {
    for (; $e !== null && !a_(); )
        ky($e)
}
function ky(t) {
    var e = jy(t.alternate, t, tn);
    t.memoizedProps = t.pendingProps,
    e === null ? Ty(t) : $e = e,
    Mf.current = null
}
function Ty(t) {
    var e = t;
    do {
        var n = e.alternate;
        if (t = e.return,
        e.flags & 32768) {
            if (n = P1(n, e),
            n !== null) {
                n.flags &= 32767,
                $e = n;
                return
            }
            if (t !== null)
                t.flags |= 32768,
                t.subtreeFlags = 0,
                t.deletions = null;
            else {
                Qe = 6,
                $e = null;
                return
            }
        } else if (n = N1(n, e, tn),
        n !== null) {
            $e = n;
            return
        }
        if (e = e.sibling,
        e !== null) {
            $e = e;
            return
        }
        $e = e = t
    } while (e !== null);
    Qe === 0 && (Qe = 5)
}
function Si(t, e, n) {
    var r = ue
      , i = Tn.transition;
    try {
        Tn.transition = null,
        ue = 1,
        I1(t, e, n, r)
    } finally {
        Tn.transition = i,
        ue = r
    }
    return null
}
function I1(t, e, n, r) {
    do
        Ro();
    while (Wr !== null);
    if (oe & 6)
        throw Error(O(327));
    n = t.finishedWork;
    var i = t.finishedLanes;
    if (n === null)
        return null;
    if (t.finishedWork = null,
    t.finishedLanes = 0,
    n === t.current)
        throw Error(O(177));
    t.callbackNode = null,
    t.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (v_(t, o),
    t === nt && ($e = nt = null,
    at = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Kl || (Kl = !0,
    by(Aa, function() {
        return Ro(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = Tn.transition,
        Tn.transition = null;
        var s = ue;
        ue = 1;
        var l = oe;
        oe |= 4,
        Mf.current = null,
        R1(t, n),
        vy(n, t),
        i1(Zc),
        Fa = !!Kc,
        Zc = Kc = null,
        t.current = n,
        D1(n),
        u_(),
        oe = l,
        ue = s,
        Tn.transition = o
    } else
        t.current = n;
    if (Kl && (Kl = !1,
    Wr = t,
    tu = i),
    o = t.pendingLanes,
    o === 0 && (Zr = null),
    f_(n.stateNode),
    Yt(t, Ae()),
    e !== null)
        for (r = t.onRecoverableError,
        n = 0; n < e.length; n++)
            i = e[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (eu)
        throw eu = !1,
        t = vd,
        vd = null,
        t;
    return tu & 1 && t.tag !== 0 && Ro(),
    o = t.pendingLanes,
    o & 1 ? t === _d ? Is++ : (Is = 0,
    _d = t) : Is = 0,
    fi(),
    null
}
function Ro() {
    if (Wr !== null) {
        var t = ig(tu)
          , e = Tn.transition
          , n = ue;
        try {
            if (Tn.transition = null,
            ue = 16 > t ? 16 : t,
            Wr === null)
                var r = !1;
            else {
                if (t = Wr,
                Wr = null,
                tu = 0,
                oe & 6)
                    throw Error(O(331));
                var i = oe;
                for (oe |= 4,
                L = t.current; L !== null; ) {
                    var o = L
                      , s = o.child;
                    if (L.flags & 16) {
                        var l = o.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (L = u; L !== null; ) {
                                    var d = L;
                                    switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ls(8, d, o)
                                    }
                                    var f = d.child;
                                    if (f !== null)
                                        f.return = d,
                                        L = f;
                                    else
                                        for (; L !== null; ) {
                                            d = L;
                                            var h = d.sibling
                                              , p = d.return;
                                            if (my(d),
                                            d === u) {
                                                L = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = p,
                                                L = h;
                                                break
                                            }
                                            L = p
                                        }
                                }
                            }
                            var _ = o.alternate;
                            if (_ !== null) {
                                var g = _.child;
                                if (g !== null) {
                                    _.child = null;
                                    do {
                                        var w = g.sibling;
                                        g.sibling = null,
                                        g = w
                                    } while (g !== null)
                                }
                            }
                            L = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        s.return = o,
                        L = s;
                    else
                        e: for (; L !== null; ) {
                            if (o = L,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ls(9, o, o.return)
                                }
                            var y = o.sibling;
                            if (y !== null) {
                                y.return = o.return,
                                L = y;
                                break e
                            }
                            L = o.return
                        }
                }
                var m = t.current;
                for (L = m; L !== null; ) {
                    s = L;
                    var v = s.child;
                    if (s.subtreeFlags & 2064 && v !== null)
                        v.return = s,
                        L = v;
                    else
                        e: for (s = m; L !== null; ) {
                            if (l = L,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        bu(9, l)
                                    }
                                } catch (k) {
                                    Pe(l, l.return, k)
                                }
                            if (l === s) {
                                L = null;
                                break e
                            }
                            var x = l.sibling;
                            if (x !== null) {
                                x.return = l.return,
                                L = x;
                                break e
                            }
                            L = l.return
                        }
                }
                if (oe = i,
                fi(),
                tr && typeof tr.onPostCommitFiberRoot == "function")
                    try {
                        tr.onPostCommitFiberRoot(_u, t)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ue = n,
            Tn.transition = e
        }
    }
    return !1
}
function Tp(t, e, n) {
    e = Yo(n, e),
    e = iy(t, e, 1),
    t = Kr(t, e, 1),
    e = Lt(),
    t !== null && (jl(t, 1, e),
    Yt(t, e))
}
function Pe(t, e, n) {
    if (t.tag === 3)
        Tp(t, t, n);
    else
        for (; e !== null; ) {
            if (e.tag === 3) {
                Tp(e, t, n);
                break
            } else if (e.tag === 1) {
                var r = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Zr === null || !Zr.has(r))) {
                    t = Yo(n, t),
                    t = oy(e, t, 1),
                    e = Kr(e, t, 1),
                    t = Lt(),
                    e !== null && (jl(e, 1, t),
                    Yt(e, t));
                    break
                }
            }
            e = e.return
        }
}
function F1(t, e, n) {
    var r = t.pingCache;
    r !== null && r.delete(e),
    e = Lt(),
    t.pingedLanes |= t.suspendedLanes & n,
    nt === t && (at & n) === n && (Qe === 4 || Qe === 3 && (at & 130023424) === at && 500 > Ae() - Lf ? Oi(t, 0) : zf |= n),
    Yt(t, e)
}
function Cy(t, e) {
    e === 0 && (t.mode & 1 ? (e = Ul,
    Ul <<= 1,
    !(Ul & 130023424) && (Ul = 4194304)) : e = 1);
    var n = Lt();
    t = Sr(t, e),
    t !== null && (jl(t, e, n),
    Yt(t, n))
}
function W1(t) {
    var e = t.memoizedState
      , n = 0;
    e !== null && (n = e.retryLane),
    Cy(t, n)
}
function U1(t, e) {
    var n = 0;
    switch (t.tag) {
    case 13:
        var r = t.stateNode
          , i = t.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = t.stateNode;
        break;
    default:
        throw Error(O(314))
    }
    r !== null && r.delete(e),
    Cy(t, n)
}
var jy;
jy = function(t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || $t.current)
            Bt = !0;
        else {
            if (!(t.lanes & n) && !(e.flags & 128))
                return Bt = !1,
                E1(t, e, n);
            Bt = !!(t.flags & 131072)
        }
    else
        Bt = !1,
        _e && e.flags & 1048576 && Pg(e, Ha, e.index);
    switch (e.lanes = 0,
    e.tag) {
    case 2:
        var r = e.type;
        wa(t, e),
        t = e.pendingProps;
        var i = Uo(e, Tt.current);
        Oo(e, n),
        i = Nf(null, e, r, t, i, n);
        var o = Pf();
        return e.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (e.tag = 1,
        e.memoizedState = null,
        e.updateQueue = null,
        Vt(r) ? (o = !0,
        Va(e)) : o = !1,
        e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        Tf(e),
        i.updater = ju,
        e.stateNode = i,
        i._reactInternals = e,
        ld(e, r, t, n),
        e = cd(null, e, r, !0, o, n)) : (e.tag = 0,
        _e && o && yf(e),
        Pt(null, e, i, n),
        e = e.child),
        e;
    case 16:
        r = e.elementType;
        e: {
            switch (wa(t, e),
            t = e.pendingProps,
            i = r._init,
            r = i(r._payload),
            e.type = r,
            i = e.tag = $1(r),
            t = An(r, t),
            i) {
            case 0:
                e = ud(null, e, r, t, n);
                break e;
            case 1:
                e = pp(null, e, r, t, n);
                break e;
            case 11:
                e = fp(null, e, r, t, n);
                break e;
            case 14:
                e = hp(null, e, r, An(r.type, t), n);
                break e
            }
            throw Error(O(306, r, ""))
        }
        return e;
    case 0:
        return r = e.type,
        i = e.pendingProps,
        i = e.elementType === r ? i : An(r, i),
        ud(t, e, r, i, n);
    case 1:
        return r = e.type,
        i = e.pendingProps,
        i = e.elementType === r ? i : An(r, i),
        pp(t, e, r, i, n);
    case 3:
        e: {
            if (uy(e),
            t === null)
                throw Error(O(387));
            r = e.pendingProps,
            o = e.memoizedState,
            i = o.element,
            Lg(t, e),
            Qa(e, r, null, n);
            var s = e.memoizedState;
            if (r = s.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                e.updateQueue.baseState = o,
                e.memoizedState = o,
                e.flags & 256) {
                    i = Yo(Error(O(423)), e),
                    e = mp(t, e, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Yo(Error(O(424)), e),
                    e = mp(t, e, r, n, i);
                    break e
                } else
                    for (ln = qr(e.stateNode.containerInfo.firstChild),
                    un = e,
                    _e = !0,
                    Fn = null,
                    n = Mg(e, null, r, n),
                    e.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Bo(),
                r === i) {
                    e = kr(t, e, n);
                    break e
                }
                Pt(t, e, r, n)
            }
            e = e.child
        }
        return e;
    case 5:
        return Ag(e),
        t === null && id(e),
        r = e.type,
        i = e.pendingProps,
        o = t !== null ? t.memoizedProps : null,
        s = i.children,
        Jc(r, i) ? s = null : o !== null && Jc(r, o) && (e.flags |= 32),
        ay(t, e),
        Pt(t, e, s, n),
        e.child;
    case 6:
        return t === null && id(e),
        null;
    case 13:
        return cy(t, e, n);
    case 4:
        return Cf(e, e.stateNode.containerInfo),
        r = e.pendingProps,
        t === null ? e.child = $o(e, null, r, n) : Pt(t, e, r, n),
        e.child;
    case 11:
        return r = e.type,
        i = e.pendingProps,
        i = e.elementType === r ? i : An(r, i),
        fp(t, e, r, i, n);
    case 7:
        return Pt(t, e, e.pendingProps, n),
        e.child;
    case 8:
        return Pt(t, e, e.pendingProps.children, n),
        e.child;
    case 12:
        return Pt(t, e, e.pendingProps.children, n),
        e.child;
    case 10:
        e: {
            if (r = e.type._context,
            i = e.pendingProps,
            o = e.memoizedProps,
            s = i.value,
            he(Xa, r._currentValue),
            r._currentValue = s,
            o !== null)
                if ($n(o.value, s)) {
                    if (o.children === i.children && !$t.current) {
                        e = kr(t, e, n);
                        break e
                    }
                } else
                    for (o = e.child,
                    o !== null && (o.return = e); o !== null; ) {
                        var l = o.dependencies;
                        if (l !== null) {
                            s = o.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (o.tag === 1) {
                                        a = vr(-1, n & -n),
                                        a.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? a.next = a : (a.next = d.next,
                                            d.next = a),
                                            u.pending = a
                                        }
                                    }
                                    o.lanes |= n,
                                    a = o.alternate,
                                    a !== null && (a.lanes |= n),
                                    od(o.return, n, e),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (o.tag === 10)
                            s = o.type === e.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (s = o.return,
                            s === null)
                                throw Error(O(341));
                            s.lanes |= n,
                            l = s.alternate,
                            l !== null && (l.lanes |= n),
                            od(s, n, e),
                            s = o.sibling
                        } else
                            s = o.child;
                        if (s !== null)
                            s.return = o;
                        else
                            for (s = o; s !== null; ) {
                                if (s === e) {
                                    s = null;
                                    break
                                }
                                if (o = s.sibling,
                                o !== null) {
                                    o.return = s.return,
                                    s = o;
                                    break
                                }
                                s = s.return
                            }
                        o = s
                    }
            Pt(t, e, i.children, n),
            e = e.child
        }
        return e;
    case 9:
        return i = e.type,
        r = e.pendingProps.children,
        Oo(e, n),
        i = jn(i),
        r = r(i),
        e.flags |= 1,
        Pt(t, e, r, n),
        e.child;
    case 14:
        return r = e.type,
        i = An(r, e.pendingProps),
        i = An(r.type, i),
        hp(t, e, r, i, n);
    case 15:
        return sy(t, e, e.type, e.pendingProps, n);
    case 17:
        return r = e.type,
        i = e.pendingProps,
        i = e.elementType === r ? i : An(r, i),
        wa(t, e),
        e.tag = 1,
        Vt(r) ? (t = !0,
        Va(e)) : t = !1,
        Oo(e, n),
        ry(e, r, i),
        ld(e, r, i, n),
        cd(null, e, r, !0, t, n);
    case 19:
        return dy(t, e, n);
    case 22:
        return ly(t, e, n)
    }
    throw Error(O(156, e.tag))
}
;
function by(t, e) {
    return eg(t, e)
}
function B1(t, e, n, r) {
    this.tag = t,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = e,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function wn(t, e, n, r) {
    return new B1(t,e,n,r)
}
function Wf(t) {
    return t = t.prototype,
    !(!t || !t.isReactComponent)
}
function $1(t) {
    if (typeof t == "function")
        return Wf(t) ? 1 : 0;
    if (t != null) {
        if (t = t.$$typeof,
        t === of)
            return 11;
        if (t === sf)
            return 14
    }
    return 2
}
function ei(t, e) {
    var n = t.alternate;
    return n === null ? (n = wn(t.tag, e, t.key, t.mode),
    n.elementType = t.elementType,
    n.type = t.type,
    n.stateNode = t.stateNode,
    n.alternate = t,
    t.alternate = n) : (n.pendingProps = e,
    n.type = t.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = t.flags & 14680064,
    n.childLanes = t.childLanes,
    n.lanes = t.lanes,
    n.child = t.child,
    n.memoizedProps = t.memoizedProps,
    n.memoizedState = t.memoizedState,
    n.updateQueue = t.updateQueue,
    e = t.dependencies,
    n.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
    },
    n.sibling = t.sibling,
    n.index = t.index,
    n.ref = t.ref,
    n
}
function Ta(t, e, n, r, i, o) {
    var s = 2;
    if (r = t,
    typeof t == "function")
        Wf(t) && (s = 1);
    else if (typeof t == "string")
        s = 5;
    else
        e: switch (t) {
        case ho:
            return Ri(n.children, i, o, e);
        case rf:
            s = 8,
            i |= 8;
            break;
        case Oc:
            return t = wn(12, n, e, i | 2),
            t.elementType = Oc,
            t.lanes = o,
            t;
        case Rc:
            return t = wn(13, n, e, i),
            t.elementType = Rc,
            t.lanes = o,
            t;
        case Dc:
            return t = wn(19, n, e, i),
            t.elementType = Dc,
            t.lanes = o,
            t;
        case Am:
            return Nu(n, i, o, e);
        default:
            if (typeof t == "object" && t !== null)
                switch (t.$$typeof) {
                case zm:
                    s = 10;
                    break e;
                case Lm:
                    s = 9;
                    break e;
                case of:
                    s = 11;
                    break e;
                case sf:
                    s = 14;
                    break e;
                case zr:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(O(130, t == null ? t : typeof t, ""))
        }
    return e = wn(s, n, e, i),
    e.elementType = t,
    e.type = r,
    e.lanes = o,
    e
}
function Ri(t, e, n, r) {
    return t = wn(7, t, r, e),
    t.lanes = n,
    t
}
function Nu(t, e, n, r) {
    return t = wn(22, t, r, e),
    t.elementType = Am,
    t.lanes = n,
    t.stateNode = {
        isHidden: !1
    },
    t
}
function cc(t, e, n) {
    return t = wn(6, t, null, e),
    t.lanes = n,
    t
}
function dc(t, e, n) {
    return e = wn(4, t.children !== null ? t.children : [], t.key, e),
    e.lanes = n,
    e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
    },
    e
}
function V1(t, e, n, r, i) {
    this.tag = e,
    this.containerInfo = t,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Yu(0),
    this.expirationTimes = Yu(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Yu(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function Uf(t, e, n, r, i, o, s, l, a) {
    return t = new V1(t,e,n,l,a),
    e === 1 ? (e = 1,
    o === !0 && (e |= 8)) : e = 0,
    o = wn(3, null, null, e),
    t.current = o,
    o.stateNode = t,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Tf(o),
    t
}
function Y1(t, e, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: fo,
        key: r == null ? null : "" + r,
        children: t,
        containerInfo: e,
        implementation: n
    }
}
function Ey(t) {
    if (!t)
        return si;
    t = t._reactInternals;
    e: {
        if (Ki(t) !== t || t.tag !== 1)
            throw Error(O(170));
        var e = t;
        do {
            switch (e.tag) {
            case 3:
                e = e.stateNode.context;
                break e;
            case 1:
                if (Vt(e.type)) {
                    e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            e = e.return
        } while (e !== null);
        throw Error(O(171))
    }
    if (t.tag === 1) {
        var n = t.type;
        if (Vt(n))
            return Eg(t, n, e)
    }
    return e
}
function Ny(t, e, n, r, i, o, s, l, a) {
    return t = Uf(n, r, !0, t, i, o, s, l, a),
    t.context = Ey(null),
    n = t.current,
    r = Lt(),
    i = Jr(n),
    o = vr(r, i),
    o.callback = e ?? null,
    Kr(n, o, i),
    t.current.lanes = i,
    jl(t, i, r),
    Yt(t, r),
    t
}
function Pu(t, e, n, r) {
    var i = e.current
      , o = Lt()
      , s = Jr(i);
    return n = Ey(n),
    e.context === null ? e.context = n : e.pendingContext = n,
    e = vr(o, s),
    e.payload = {
        element: t
    },
    r = r === void 0 ? null : r,
    r !== null && (e.callback = r),
    t = Kr(i, e, s),
    t !== null && (Bn(t, i, s, o),
    va(t, i, s)),
    s
}
function ru(t) {
    if (t = t.current,
    !t.child)
        return null;
    switch (t.child.tag) {
    case 5:
        return t.child.stateNode;
    default:
        return t.child.stateNode
    }
}
function Cp(t, e) {
    if (t = t.memoizedState,
    t !== null && t.dehydrated !== null) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e
    }
}
function Bf(t, e) {
    Cp(t, e),
    (t = t.alternate) && Cp(t, e)
}
function H1() {
    return null
}
var Py = typeof reportError == "function" ? reportError : function(t) {
    console.error(t)
}
;
function $f(t) {
    this._internalRoot = t
}
Ou.prototype.render = $f.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null)
        throw Error(O(409));
    Pu(t, e, null, null)
}
;
Ou.prototype.unmount = $f.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Vi(function() {
            Pu(null, t, null, null)
        }),
        e[wr] = null
    }
}
;
function Ou(t) {
    this._internalRoot = t
}
Ou.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
        var e = lg();
        t = {
            blockedOn: null,
            target: t,
            priority: e
        };
        for (var n = 0; n < Ar.length && e !== 0 && e < Ar[n].priority; n++)
            ;
        Ar.splice(n, 0, t),
        n === 0 && ug(t)
    }
}
;
function Vf(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
}
function Ru(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
}
function jp() {}
function X1(t, e, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = ru(s);
                o.call(u)
            }
        }
        var s = Ny(e, r, t, 0, null, !1, !1, "", jp);
        return t._reactRootContainer = s,
        t[wr] = s.current,
        ol(t.nodeType === 8 ? t.parentNode : t),
        Vi(),
        s
    }
    for (; i = t.lastChild; )
        t.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = ru(a);
            l.call(u)
        }
    }
    var a = Uf(t, 0, !1, null, null, !1, !1, "", jp);
    return t._reactRootContainer = a,
    t[wr] = a.current,
    ol(t.nodeType === 8 ? t.parentNode : t),
    Vi(function() {
        Pu(e, a, n, r)
    }),
    a
}
function Du(t, e, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var a = ru(s);
                l.call(a)
            }
        }
        Pu(e, s, t, i)
    } else
        s = X1(n, e, t, i, r);
    return ru(s)
}
og = function(t) {
    switch (t.tag) {
    case 3:
        var e = t.stateNode;
        if (e.current.memoizedState.isDehydrated) {
            var n = ws(e.pendingLanes);
            n !== 0 && (uf(e, n | 1),
            Yt(e, Ae()),
            !(oe & 6) && (Ho = Ae() + 500,
            fi()))
        }
        break;
    case 13:
        Vi(function() {
            var r = Sr(t, 1);
            if (r !== null) {
                var i = Lt();
                Bn(r, t, 1, i)
            }
        }),
        Bf(t, 1)
    }
}
;
cf = function(t) {
    if (t.tag === 13) {
        var e = Sr(t, 134217728);
        if (e !== null) {
            var n = Lt();
            Bn(e, t, 134217728, n)
        }
        Bf(t, 134217728)
    }
}
;
sg = function(t) {
    if (t.tag === 13) {
        var e = Jr(t)
          , n = Sr(t, e);
        if (n !== null) {
            var r = Lt();
            Bn(n, t, e, r)
        }
        Bf(t, e)
    }
}
;
lg = function() {
    return ue
}
;
ag = function(t, e) {
    var n = ue;
    try {
        return ue = t,
        e()
    } finally {
        ue = n
    }
}
;
$c = function(t, e, n) {
    switch (e) {
    case "input":
        if (Lc(t, n),
        e = n.name,
        n.type === "radio" && e != null) {
            for (n = t; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'),
            e = 0; e < n.length; e++) {
                var r = n[e];
                if (r !== t && r.form === t.form) {
                    var i = ku(r);
                    if (!i)
                        throw Error(O(90));
                    Fm(r),
                    Lc(r, i)
                }
            }
        }
        break;
    case "textarea":
        Um(t, n);
        break;
    case "select":
        e = n.value,
        e != null && bo(t, !!n.multiple, e, !1)
    }
}
;
Gm = Af;
Qm = Vi;
var G1 = {
    usingClientEntryPoint: !1,
    Events: [El, yo, ku, Hm, Xm, Af]
}
  , ms = {
    findFiberByHostInstance: ji,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Q1 = {
    bundleType: ms.bundleType,
    version: ms.version,
    rendererPackageName: ms.rendererPackageName,
    rendererConfig: ms.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: jr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(t) {
        return t = Zm(t),
        t === null ? null : t.stateNode
    },
    findFiberByHostInstance: ms.findFiberByHostInstance || H1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zl.isDisabled && Zl.supportsFiber)
        try {
            _u = Zl.inject(Q1),
            tr = Zl
        } catch {}
}
hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G1;
hn.createPortal = function(t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Vf(e))
        throw Error(O(200));
    return Y1(t, e, null, n)
}
;
hn.createRoot = function(t, e) {
    if (!Vf(t))
        throw Error(O(299));
    var n = !1
      , r = ""
      , i = Py;
    return e != null && (e.unstable_strictMode === !0 && (n = !0),
    e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
    e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    e = Uf(t, 1, !1, null, null, n, !1, r, i),
    t[wr] = e.current,
    ol(t.nodeType === 8 ? t.parentNode : t),
    new $f(e)
}
;
hn.findDOMNode = function(t) {
    if (t == null)
        return null;
    if (t.nodeType === 1)
        return t;
    var e = t._reactInternals;
    if (e === void 0)
        throw typeof t.render == "function" ? Error(O(188)) : (t = Object.keys(t).join(","),
        Error(O(268, t)));
    return t = Zm(e),
    t = t === null ? null : t.stateNode,
    t
}
;
hn.flushSync = function(t) {
    return Vi(t)
}
;
hn.hydrate = function(t, e, n) {
    if (!Ru(e))
        throw Error(O(200));
    return Du(null, t, e, !0, n)
}
;
hn.hydrateRoot = function(t, e, n) {
    if (!Vf(t))
        throw Error(O(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , s = Py;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    e = Ny(e, null, t, 1, n ?? null, i, !1, o, s),
    t[wr] = e.current,
    ol(t),
    r)
        for (t = 0; t < r.length; t++)
            n = r[t],
            i = n._getVersion,
            i = i(n._source),
            e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, i] : e.mutableSourceEagerHydrationData.push(n, i);
    return new Ou(e)
}
;
hn.render = function(t, e, n) {
    if (!Ru(e))
        throw Error(O(200));
    return Du(null, t, e, !1, n)
}
;
hn.unmountComponentAtNode = function(t) {
    if (!Ru(t))
        throw Error(O(40));
    return t._reactRootContainer ? (Vi(function() {
        Du(null, null, t, !1, function() {
            t._reactRootContainer = null,
            t[wr] = null
        })
    }),
    !0) : !1
}
;
hn.unstable_batchedUpdates = Af;
hn.unstable_renderSubtreeIntoContainer = function(t, e, n, r) {
    if (!Ru(n))
        throw Error(O(200));
    if (t == null || t._reactInternals === void 0)
        throw Error(O(38));
    return Du(t, e, n, !1, r)
}
;
hn.version = "18.3.1-next-f1338f8080-20240426";
function Oy() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oy)
        } catch (t) {
            console.error(t)
        }
}
Oy(),
Om.exports = hn;
var q1 = Om.exports
  , bp = q1;
Nc.createRoot = bp.createRoot,
Nc.hydrateRoot = bp.hydrateRoot;
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function pl() {
    return pl = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    }
    ,
    pl.apply(this, arguments)
}
var Ur;
(function(t) {
    t.Pop = "POP",
    t.Push = "PUSH",
    t.Replace = "REPLACE"
}
)(Ur || (Ur = {}));
const Ep = "popstate";
function K1(t) {
    t === void 0 && (t = {});
    function e(r, i) {
        let {pathname: o, search: s, hash: l} = r.location;
        return Sd("", {
            pathname: o,
            search: s,
            hash: l
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(r, i) {
        return typeof i == "string" ? i : iu(i)
    }
    return J1(e, n, null, t)
}
function Ve(t, e) {
    if (t === !1 || t === null || typeof t > "u")
        throw new Error(e)
}
function Ry(t, e) {
    if (!t) {
        typeof console < "u" && console.warn(e);
        try {
            throw new Error(e)
        } catch {}
    }
}
function Z1() {
    return Math.random().toString(36).substr(2, 8)
}
function Np(t, e) {
    return {
        usr: t.state,
        key: t.key,
        idx: e
    }
}
function Sd(t, e, n, r) {
    return n === void 0 && (n = null),
    pl({
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: ""
    }, typeof e == "string" ? ns(e) : e, {
        state: n,
        key: e && e.key || r || Z1()
    })
}
function iu(t) {
    let {pathname: e="/", search: n="", hash: r=""} = t;
    return n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
}
function ns(t) {
    let e = {};
    if (t) {
        let n = t.indexOf("#");
        n >= 0 && (e.hash = t.substr(n),
        t = t.substr(0, n));
        let r = t.indexOf("?");
        r >= 0 && (e.search = t.substr(r),
        t = t.substr(0, r)),
        t && (e.pathname = t)
    }
    return e
}
function J1(t, e, n, r) {
    r === void 0 && (r = {});
    let {window: i=document.defaultView, v5Compat: o=!1} = r
      , s = i.history
      , l = Ur.Pop
      , a = null
      , u = d();
    u == null && (u = 0,
    s.replaceState(pl({}, s.state, {
        idx: u
    }), ""));
    function d() {
        return (s.state || {
            idx: null
        }).idx
    }
    function f() {
        l = Ur.Pop;
        let w = d()
          , y = w == null ? null : w - u;
        u = w,
        a && a({
            action: l,
            location: g.location,
            delta: y
        })
    }
    function h(w, y) {
        l = Ur.Push;
        let m = Sd(g.location, w, y);
        u = d() + 1;
        let v = Np(m, u)
          , x = g.createHref(m);
        try {
            s.pushState(v, "", x)
        } catch (k) {
            if (k instanceof DOMException && k.name === "DataCloneError")
                throw k;
            i.location.assign(x)
        }
        o && a && a({
            action: l,
            location: g.location,
            delta: 1
        })
    }
    function p(w, y) {
        l = Ur.Replace;
        let m = Sd(g.location, w, y);
        u = d();
        let v = Np(m, u)
          , x = g.createHref(m);
        s.replaceState(v, "", x),
        o && a && a({
            action: l,
            location: g.location,
            delta: 0
        })
    }
    function _(w) {
        let y = i.location.origin !== "null" ? i.location.origin : i.location.href
          , m = typeof w == "string" ? w : iu(w);
        return m = m.replace(/ $/, "%20"),
        Ve(y, "No window.location.(origin|href) available to create URL for href: " + m),
        new URL(m,y)
    }
    let g = {
        get action() {
            return l
        },
        get location() {
            return t(i, s)
        },
        listen(w) {
            if (a)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(Ep, f),
            a = w,
            () => {
                i.removeEventListener(Ep, f),
                a = null
            }
        },
        createHref(w) {
            return e(i, w)
        },
        createURL: _,
        encodeLocation(w) {
            let y = _(w);
            return {
                pathname: y.pathname,
                search: y.search,
                hash: y.hash
            }
        },
        push: h,
        replace: p,
        go(w) {
            return s.go(w)
        }
    };
    return g
}
var Pp;
(function(t) {
    t.data = "data",
    t.deferred = "deferred",
    t.redirect = "redirect",
    t.error = "error"
}
)(Pp || (Pp = {}));
function ex(t, e, n) {
    n === void 0 && (n = "/");
    let r = typeof e == "string" ? ns(e) : e
      , i = Yf(r.pathname || "/", n);
    if (i == null)
        return null;
    let o = Dy(t);
    tx(o);
    let s = null;
    for (let l = 0; s == null && l < o.length; ++l) {
        let a = hx(i);
        s = cx(o[l], a)
    }
    return s
}
function Dy(t, e, n, r) {
    e === void 0 && (e = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let i = (o, s, l) => {
        let a = {
            relativePath: l === void 0 ? o.path || "" : l,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: s,
            route: o
        };
        a.relativePath.startsWith("/") && (Ve(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        a.relativePath = a.relativePath.slice(r.length));
        let u = ti([r, a.relativePath])
          , d = n.concat(a);
        o.children && o.children.length > 0 && (Ve(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Dy(o.children, e, d, u)),
        !(o.path == null && !o.index) && e.push({
            path: u,
            score: ax(u, o.index),
            routesMeta: d
        })
    }
    ;
    return t.forEach( (o, s) => {
        var l;
        if (o.path === "" || !((l = o.path) != null && l.includes("?")))
            i(o, s);
        else
            for (let a of My(o.path))
                i(o, s, a)
    }
    ),
    e
}
function My(t) {
    let e = t.split("/");
    if (e.length === 0)
        return [];
    let[n,...r] = e
      , i = n.endsWith("?")
      , o = n.replace(/\?$/, "");
    if (r.length === 0)
        return i ? [o, ""] : [o];
    let s = My(r.join("/"))
      , l = [];
    return l.push(...s.map(a => a === "" ? o : [o, a].join("/"))),
    i && l.push(...s),
    l.map(a => t.startsWith("/") && a === "" ? "/" : a)
}
function tx(t) {
    t.sort( (e, n) => e.score !== n.score ? n.score - e.score : ux(e.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const nx = /^:[\w-]+$/
  , rx = 3
  , ix = 2
  , ox = 1
  , sx = 10
  , lx = -2
  , Op = t => t === "*";
function ax(t, e) {
    let n = t.split("/")
      , r = n.length;
    return n.some(Op) && (r += lx),
    e && (r += ix),
    n.filter(i => !Op(i)).reduce( (i, o) => i + (nx.test(o) ? rx : o === "" ? ox : sx), r)
}
function ux(t, e) {
    return t.length === e.length && t.slice(0, -1).every( (r, i) => r === e[i]) ? t[t.length - 1] - e[e.length - 1] : 0
}
function cx(t, e) {
    let {routesMeta: n} = t
      , r = {}
      , i = "/"
      , o = [];
    for (let s = 0; s < n.length; ++s) {
        let l = n[s]
          , a = s === n.length - 1
          , u = i === "/" ? e : e.slice(i.length) || "/"
          , d = dx({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: a
        }, u);
        if (!d)
            return null;
        Object.assign(r, d.params);
        let f = l.route;
        o.push({
            params: r,
            pathname: ti([i, d.pathname]),
            pathnameBase: yx(ti([i, d.pathnameBase])),
            route: f
        }),
        d.pathnameBase !== "/" && (i = ti([i, d.pathnameBase]))
    }
    return o
}
function dx(t, e) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = fx(t.path, t.caseSensitive, t.end)
      , i = e.match(n);
    if (!i)
        return null;
    let o = i[0]
      , s = o.replace(/(.)\/+$/, "$1")
      , l = i.slice(1);
    return {
        params: r.reduce( (u, d, f) => {
            let {paramName: h, isOptional: p} = d;
            if (h === "*") {
                let g = l[f] || "";
                s = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const _ = l[f];
            return p && !_ ? u[h] = void 0 : u[h] = (_ || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: o,
        pathnameBase: s,
        pattern: t
    }
}
function fx(t, e, n) {
    e === void 0 && (e = !1),
    n === void 0 && (n = !0),
    Ry(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
    let r = []
      , i = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, l, a) => (r.push({
        paramName: l,
        isOptional: a != null
    }),
    a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return t.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i,e ? void 0 : "i"), r]
}
function hx(t) {
    try {
        return t.split("/").map(e => decodeURIComponent(e).replace(/\//g, "%2F")).join("/")
    } catch (e) {
        return Ry(!1, 'The URL path "' + t + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + e + ").")),
        t
    }
}
function Yf(t, e) {
    if (e === "/")
        return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase()))
        return null;
    let n = e.endsWith("/") ? e.length - 1 : e.length
      , r = t.charAt(n);
    return r && r !== "/" ? null : t.slice(n) || "/"
}
function px(t, e) {
    e === void 0 && (e = "/");
    let {pathname: n, search: r="", hash: i=""} = typeof t == "string" ? ns(t) : t;
    return {
        pathname: n ? n.startsWith("/") ? n : mx(n, e) : e,
        search: vx(r),
        hash: _x(i)
    }
}
function mx(t, e) {
    let n = e.replace(/\/+$/, "").split("/");
    return t.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function fc(t, e, n, r) {
    return "Cannot include a '" + t + "' character in a manually specified " + ("`to." + e + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function gx(t) {
    return t.filter( (e, n) => n === 0 || e.route.path && e.route.path.length > 0)
}
function zy(t, e) {
    let n = gx(t);
    return e ? n.map( (r, i) => i === t.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function Ly(t, e, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof t == "string" ? i = ns(t) : (i = pl({}, t),
    Ve(!i.pathname || !i.pathname.includes("?"), fc("?", "pathname", "search", i)),
    Ve(!i.pathname || !i.pathname.includes("#"), fc("#", "pathname", "hash", i)),
    Ve(!i.search || !i.search.includes("#"), fc("#", "search", "hash", i)));
    let o = t === "" || i.pathname === "", s = o ? "/" : i.pathname, l;
    if (s == null)
        l = n;
    else {
        let f = e.length - 1;
        if (!r && s.startsWith("..")) {
            let h = s.split("/");
            for (; h[0] === ".."; )
                h.shift(),
                f -= 1;
            i.pathname = h.join("/")
        }
        l = f >= 0 ? e[f] : "/"
    }
    let a = px(i, l)
      , u = s && s !== "/" && s.endsWith("/")
      , d = (o || s === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (u || d) && (a.pathname += "/"),
    a
}
const ti = t => t.join("/").replace(/\/\/+/g, "/")
  , yx = t => t.replace(/\/+$/, "").replace(/^\/*/, "/")
  , vx = t => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t
  , _x = t => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t;
function xx(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data"in t
}
const Ay = ["post", "put", "patch", "delete"];
new Set(Ay);
const wx = ["get", ...Ay];
new Set(wx);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ml() {
    return ml = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    }
    ,
    ml.apply(this, arguments)
}
const Hf = D.createContext(null)
  , Sx = D.createContext(null)
  , Zi = D.createContext(null)
  , Mu = D.createContext(null)
  , Ji = D.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , Iy = D.createContext(null);
function kx(t, e) {
    let {relative: n} = e === void 0 ? {} : e;
    Pl() || Ve(!1);
    let {basename: r, navigator: i} = D.useContext(Zi)
      , {hash: o, pathname: s, search: l} = Wy(t, {
        relative: n
    })
      , a = s;
    return r !== "/" && (a = s === "/" ? r : ti([r, s])),
    i.createHref({
        pathname: a,
        search: l,
        hash: o
    })
}
function Pl() {
    return D.useContext(Mu) != null
}
function Ol() {
    return Pl() || Ve(!1),
    D.useContext(Mu).location
}
function Fy(t) {
    D.useContext(Zi).static || D.useLayoutEffect(t)
}
function Tx() {
    let {isDataRoute: t} = D.useContext(Ji);
    return t ? Ax() : Cx()
}
function Cx() {
    Pl() || Ve(!1);
    let t = D.useContext(Hf)
      , {basename: e, future: n, navigator: r} = D.useContext(Zi)
      , {matches: i} = D.useContext(Ji)
      , {pathname: o} = Ol()
      , s = JSON.stringify(zy(i, n.v7_relativeSplatPath))
      , l = D.useRef(!1);
    return Fy( () => {
        l.current = !0
    }
    ),
    D.useCallback(function(u, d) {
        if (d === void 0 && (d = {}),
        !l.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let f = Ly(u, JSON.parse(s), o, d.relative === "path");
        t == null && e !== "/" && (f.pathname = f.pathname === "/" ? e : ti([e, f.pathname])),
        (d.replace ? r.replace : r.push)(f, d.state, d)
    }, [e, r, s, o, t])
}
function Wy(t, e) {
    let {relative: n} = e === void 0 ? {} : e
      , {future: r} = D.useContext(Zi)
      , {matches: i} = D.useContext(Ji)
      , {pathname: o} = Ol()
      , s = JSON.stringify(zy(i, r.v7_relativeSplatPath));
    return D.useMemo( () => Ly(t, JSON.parse(s), o, n === "path"), [t, s, o, n])
}
function jx(t, e) {
    return bx(t, e)
}
function bx(t, e, n, r) {
    Pl() || Ve(!1);
    let {navigator: i} = D.useContext(Zi)
      , {matches: o} = D.useContext(Ji)
      , s = o[o.length - 1]
      , l = s ? s.params : {};
    s && s.pathname;
    let a = s ? s.pathnameBase : "/";
    s && s.route;
    let u = Ol(), d;
    if (e) {
        var f;
        let w = typeof e == "string" ? ns(e) : e;
        a === "/" || (f = w.pathname) != null && f.startsWith(a) || Ve(!1),
        d = w
    } else
        d = u;
    let h = d.pathname || "/"
      , p = h;
    if (a !== "/") {
        let w = a.replace(/^\//, "").split("/");
        p = "/" + h.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let _ = ex(t, {
        pathname: p
    })
      , g = Rx(_ && _.map(w => Object.assign({}, w, {
        params: Object.assign({}, l, w.params),
        pathname: ti([a, i.encodeLocation ? i.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? a : ti([a, i.encodeLocation ? i.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), o, n, r);
    return e && g ? D.createElement(Mu.Provider, {
        value: {
            location: ml({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, d),
            navigationType: Ur.Pop
        }
    }, g) : g
}
function Ex() {
    let t = Lx()
      , e = xx(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t)
      , n = t instanceof Error ? t.stack : null
      , i = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return D.createElement(D.Fragment, null, D.createElement("h2", null, "Unexpected Application Error!"), D.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, e), n ? D.createElement("pre", {
        style: i
    }, n) : null, null)
}
const Nx = D.createElement(Ex, null);
class Px extends D.Component {
    constructor(e) {
        super(e),
        this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, n) {
        return n.location !== e.location || n.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error !== void 0 ? e.error : n.error,
            location: n.location,
            revalidation: e.revalidation || n.revalidation
        }
    }
    componentDidCatch(e, n) {
        console.error("React Router caught the following error during render", e, n)
    }
    render() {
        return this.state.error !== void 0 ? D.createElement(Ji.Provider, {
            value: this.props.routeContext
        }, D.createElement(Iy.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Ox(t) {
    let {routeContext: e, match: n, children: r} = t
      , i = D.useContext(Hf);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    D.createElement(Ji.Provider, {
        value: e
    }, r)
}
function Rx(t, e, n, r) {
    var i;
    if (e === void 0 && (e = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    t == null) {
        var o;
        if ((o = n) != null && o.errors)
            t = n.matches;
        else
            return null
    }
    let s = t
      , l = (i = n) == null ? void 0 : i.errors;
    if (l != null) {
        let d = s.findIndex(f => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0);
        d >= 0 || Ve(!1),
        s = s.slice(0, Math.min(s.length, d + 1))
    }
    let a = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < s.length; d++) {
            let f = s[d];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d),
            f.route.id) {
                let {loaderData: h, errors: p} = n
                  , _ = f.route.loader && h[f.route.id] === void 0 && (!p || p[f.route.id] === void 0);
                if (f.route.lazy || _) {
                    a = !0,
                    u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight( (d, f, h) => {
        let p, _ = !1, g = null, w = null;
        n && (p = l && f.route.id ? l[f.route.id] : void 0,
        g = f.route.errorElement || Nx,
        a && (u < 0 && h === 0 ? (_ = !0,
        w = null) : u === h && (_ = !0,
        w = f.route.hydrateFallbackElement || null)));
        let y = e.concat(s.slice(0, h + 1))
          , m = () => {
            let v;
            return p ? v = g : _ ? v = w : f.route.Component ? v = D.createElement(f.route.Component, null) : f.route.element ? v = f.route.element : v = d,
            D.createElement(Ox, {
                match: f,
                routeContext: {
                    outlet: d,
                    matches: y,
                    isDataRoute: n != null
                },
                children: v
            })
        }
        ;
        return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0) ? D.createElement(Px, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: p,
            children: m(),
            routeContext: {
                outlet: null,
                matches: y,
                isDataRoute: !0
            }
        }) : m()
    }
    , null)
}
var Uy = function(t) {
    return t.UseBlocker = "useBlocker",
    t.UseRevalidator = "useRevalidator",
    t.UseNavigateStable = "useNavigate",
    t
}(Uy || {})
  , ou = function(t) {
    return t.UseBlocker = "useBlocker",
    t.UseLoaderData = "useLoaderData",
    t.UseActionData = "useActionData",
    t.UseRouteError = "useRouteError",
    t.UseNavigation = "useNavigation",
    t.UseRouteLoaderData = "useRouteLoaderData",
    t.UseMatches = "useMatches",
    t.UseRevalidator = "useRevalidator",
    t.UseNavigateStable = "useNavigate",
    t.UseRouteId = "useRouteId",
    t
}(ou || {});
function Dx(t) {
    let e = D.useContext(Hf);
    return e || Ve(!1),
    e
}
function Mx(t) {
    let e = D.useContext(Sx);
    return e || Ve(!1),
    e
}
function zx(t) {
    let e = D.useContext(Ji);
    return e || Ve(!1),
    e
}
function By(t) {
    let e = zx()
      , n = e.matches[e.matches.length - 1];
    return n.route.id || Ve(!1),
    n.route.id
}
function Lx() {
    var t;
    let e = D.useContext(Iy)
      , n = Mx(ou.UseRouteError)
      , r = By(ou.UseRouteError);
    return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[r]
}
function Ax() {
    let {router: t} = Dx(Uy.UseNavigateStable)
      , e = By(ou.UseNavigateStable)
      , n = D.useRef(!1);
    return Fy( () => {
        n.current = !0
    }
    ),
    D.useCallback(function(i, o) {
        o === void 0 && (o = {}),
        n.current && (typeof i == "number" ? t.navigate(i) : t.navigate(i, ml({
            fromRouteId: e
        }, o)))
    }, [t, e])
}
function $y(t) {
    Ve(!1)
}
function Ix(t) {
    let {basename: e="/", children: n=null, location: r, navigationType: i=Ur.Pop, navigator: o, static: s=!1, future: l} = t;
    Pl() && Ve(!1);
    let a = e.replace(/^\/*/, "/")
      , u = D.useMemo( () => ({
        basename: a,
        navigator: o,
        static: s,
        future: ml({
            v7_relativeSplatPath: !1
        }, l)
    }), [a, l, o, s]);
    typeof r == "string" && (r = ns(r));
    let {pathname: d="/", search: f="", hash: h="", state: p=null, key: _="default"} = r
      , g = D.useMemo( () => {
        let w = Yf(d, a);
        return w == null ? null : {
            location: {
                pathname: w,
                search: f,
                hash: h,
                state: p,
                key: _
            },
            navigationType: i
        }
    }
    , [a, d, f, h, p, _, i]);
    return g == null ? null : D.createElement(Zi.Provider, {
        value: u
    }, D.createElement(Mu.Provider, {
        children: n,
        value: g
    }))
}
function Fx(t) {
    let {children: e, location: n} = t;
    return jx(kd(e), n)
}
new Promise( () => {}
);
function kd(t, e) {
    e === void 0 && (e = []);
    let n = [];
    return D.Children.forEach(t, (r, i) => {
        if (!D.isValidElement(r))
            return;
        let o = [...e, i];
        if (r.type === D.Fragment) {
            n.push.apply(n, kd(r.props.children, o));
            return
        }
        r.type !== $y && Ve(!1),
        !r.props.index || !r.props.children || Ve(!1);
        let s = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = kd(r.props.children, o)),
        n.push(s)
    }
    ),
    n
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Td() {
    return Td = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    }
    ,
    Td.apply(this, arguments)
}
function Wx(t, e) {
    if (t == null)
        return {};
    var n = {}, r = Object.keys(t), i, o;
    for (o = 0; o < r.length; o++)
        i = r[o],
        !(e.indexOf(i) >= 0) && (n[i] = t[i]);
    return n
}
function Ux(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
}
function Bx(t, e) {
    return t.button === 0 && (!e || e === "_self") && !Ux(t)
}
const $x = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"]
  , Vx = "6";
try {
    window.__reactRouterVersion = Vx
} catch {}
const Yx = "startTransition"
  , Rp = F0[Yx];
function Hx(t) {
    let {basename: e, children: n, future: r, window: i} = t
      , o = D.useRef();
    o.current == null && (o.current = K1({
        window: i,
        v5Compat: !0
    }));
    let s = o.current
      , [l,a] = D.useState({
        action: s.action,
        location: s.location
    })
      , {v7_startTransition: u} = r || {}
      , d = D.useCallback(f => {
        u && Rp ? Rp( () => a(f)) : a(f)
    }
    , [a, u]);
    return D.useLayoutEffect( () => s.listen(d), [s, d]),
    D.createElement(Ix, {
        basename: e,
        children: n,
        location: l.location,
        navigationType: l.action,
        navigator: s,
        future: r
    })
}
const Xx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , Gx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Do = D.forwardRef(function(e, n) {
    let {onClick: r, relative: i, reloadDocument: o, replace: s, state: l, target: a, to: u, preventScrollReset: d, unstable_viewTransition: f} = e, h = Wx(e, $x), {basename: p} = D.useContext(Zi), _, g = !1;
    if (typeof u == "string" && Gx.test(u) && (_ = u,
    Xx))
        try {
            let v = new URL(window.location.href)
              , x = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u)
              , k = Yf(x.pathname, p);
            x.origin === v.origin && k != null ? u = k + x.search + x.hash : g = !0
        } catch {}
    let w = kx(u, {
        relative: i
    })
      , y = Qx(u, {
        replace: s,
        state: l,
        target: a,
        preventScrollReset: d,
        relative: i,
        unstable_viewTransition: f
    });
    function m(v) {
        r && r(v),
        v.defaultPrevented || y(v)
    }
    return D.createElement("a", Td({}, h, {
        href: _ || w,
        onClick: g || o ? r : m,
        ref: n,
        target: a
    }))
});
var Dp;
(function(t) {
    t.UseScrollRestoration = "useScrollRestoration",
    t.UseSubmit = "useSubmit",
    t.UseSubmitFetcher = "useSubmitFetcher",
    t.UseFetcher = "useFetcher",
    t.useViewTransitionState = "useViewTransitionState"
}
)(Dp || (Dp = {}));
var Mp;
(function(t) {
    t.UseFetcher = "useFetcher",
    t.UseFetchers = "useFetchers",
    t.UseScrollRestoration = "useScrollRestoration"
}
)(Mp || (Mp = {}));
function Qx(t, e) {
    let {target: n, replace: r, state: i, preventScrollReset: o, relative: s, unstable_viewTransition: l} = e === void 0 ? {} : e
      , a = Tx()
      , u = Ol()
      , d = Wy(t, {
        relative: s
    });
    return D.useCallback(f => {
        if (Bx(f, n)) {
            f.preventDefault();
            let h = r !== void 0 ? r : iu(u) === iu(d);
            a(t, {
                replace: h,
                state: i,
                preventScrollReset: o,
                relative: s,
                unstable_viewTransition: l
            })
        }
    }
    , [u, a, d, r, i, n, t, o, s, l])
}
const qx = "modulepreload"
  , Kx = function(t) {
    return "/" + t
}
  , zp = {}
  , Zx = function(e, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
        document.getElementsByTagName("link");
        const o = document.querySelector("meta[property=csp-nonce]")
          , s = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
        i = Promise.all(n.map(l => {
            if (l = Kx(l),
            l in zp)
                return;
            zp[l] = !0;
            const a = l.endsWith(".css")
              , u = a ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${l}"]${u}`))
                return;
            const d = document.createElement("link");
            if (d.rel = a ? "stylesheet" : qx,
            a || (d.as = "script",
            d.crossOrigin = ""),
            d.href = l,
            s && d.setAttribute("nonce", s),
            document.head.appendChild(d),
            a)
                return new Promise( (f, h) => {
                    d.addEventListener("load", f),
                    d.addEventListener("error", () => h(new Error(`Unable to preload CSS for ${l}`)))
                }
                )
        }
        ))
    }
    return i.then( () => e()).catch(o => {
        const s = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (s.payload = o,
        window.dispatchEvent(s),
        !s.defaultPrevented)
            throw o
    }
    )
};
function dr(t) {
    if (t === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}
function Vy(t, e) {
    t.prototype = Object.create(e.prototype),
    t.prototype.constructor = t,
    t.__proto__ = e
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var cn = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, Xo = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, Xf, St, xe, Sn = 1e8, fe = 1 / Sn, Cd = Math.PI * 2, Jx = Cd / 4, ew = 0, Yy = Math.sqrt, tw = Math.cos, nw = Math.sin, rt = function(e) {
    return typeof e == "string"
}, Oe = function(e) {
    return typeof e == "function"
}, Tr = function(e) {
    return typeof e == "number"
}, Gf = function(e) {
    return typeof e > "u"
}, or = function(e) {
    return typeof e == "object"
}, Ht = function(e) {
    return e !== !1
}, Qf = function() {
    return typeof window < "u"
}, Jl = function(e) {
    return Oe(e) || rt(e)
}, Hy = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, kt = Array.isArray, jd = /(?:-?\.?\d|\.)+/gi, Xy = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, To = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, hc = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Gy = /[+-]=-?[.\d]+/, Qy = /[^,'"\[\]\s]+/gi, rw = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Ce, Qn, bd, qf, fn = {}, su = {}, qy, Ky = function(e) {
    return (su = Yi(e, fn)) && qt
}, Kf = function(e, n) {
    return console.warn("Invalid property", e, "set to", n, "Missing plugin? gsap.registerPlugin()")
}, gl = function(e, n) {
    return !n && console.warn(e)
}, Zy = function(e, n) {
    return e && (fn[e] = n) && su && (su[e] = n) || fn
}, yl = function() {
    return 0
}, iw = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, Ca = {
    suppressEvents: !0,
    kill: !1
}, ow = {
    suppressEvents: !0
}, Zf = {}, ni = [], Ed = {}, Jy, rn = {}, pc = {}, Lp = 30, ja = [], Jf = "", eh = function(e) {
    var n = e[0], r, i;
    if (or(n) || Oe(n) || (e = [e]),
    !(r = (n._gsap || {}).harness)) {
        for (i = ja.length; i-- && !ja[i].targetTest(n); )
            ;
        r = ja[i]
    }
    for (i = e.length; i--; )
        e[i] && (e[i]._gsap || (e[i]._gsap = new kv(e[i],r))) || e.splice(i, 1);
    return e
}, Di = function(e) {
    return e._gsap || eh(kn(e))[0]._gsap
}, ev = function(e, n, r) {
    return (r = e[n]) && Oe(r) ? e[n]() : Gf(r) && e.getAttribute && e.getAttribute(n) || r
}, Xt = function(e, n) {
    return (e = e.split(",")).forEach(n) || e
}, Le = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, tt = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
}, Mo = function(e, n) {
    var r = n.charAt(0)
      , i = parseFloat(n.substr(2));
    return e = parseFloat(e),
    r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
}, sw = function(e, n) {
    for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; )
        ;
    return i < r
}, lu = function() {
    var e = ni.length, n = ni.slice(0), r, i;
    for (Ed = {},
    ni.length = 0,
    r = 0; r < e; r++)
        i = n[r],
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
}, tv = function(e, n, r, i) {
    ni.length && !St && lu(),
    e.render(n, r, St && n < 0 && (e._initted || e._startAt)),
    ni.length && !St && lu()
}, nv = function(e) {
    var n = parseFloat(e);
    return (n || n === 0) && (e + "").match(Qy).length < 2 ? n : rt(e) ? e.trim() : e
}, rv = function(e) {
    return e
}, En = function(e, n) {
    for (var r in n)
        r in e || (e[r] = n[r]);
    return e
}, lw = function(e) {
    return function(n, r) {
        for (var i in r)
            i in n || i === "duration" && e || i === "ease" || (n[i] = r[i])
    }
}, Yi = function(e, n) {
    for (var r in n)
        e[r] = n[r];
    return e
}, Ap = function t(e, n) {
    for (var r in n)
        r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = or(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
    return e
}, au = function(e, n) {
    var r = {}, i;
    for (i in e)
        i in n || (r[i] = e[i]);
    return r
}, Fs = function(e) {
    var n = e.parent || Ce
      , r = e.keyframes ? lw(kt(e.keyframes)) : En;
    if (Ht(e.inherit))
        for (; n; )
            r(e, n.vars.defaults),
            n = n.parent || n._dp;
    return e
}, aw = function(e, n) {
    for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; )
        ;
    return r < 0
}, iv = function(e, n, r, i, o) {
    var s = e[i], l;
    if (o)
        for (l = n[o]; s && s[o] > l; )
            s = s._prev;
    return s ? (n._next = s._next,
    s._next = n) : (n._next = e[r],
    e[r] = n),
    n._next ? n._next._prev = n : e[i] = n,
    n._prev = s,
    n.parent = n._dp = e,
    n
}, zu = function(e, n, r, i) {
    r === void 0 && (r = "_first"),
    i === void 0 && (i = "_last");
    var o = n._prev
      , s = n._next;
    o ? o._next = s : e[r] === n && (e[r] = s),
    s ? s._prev = o : e[i] === n && (e[i] = o),
    n._next = n._prev = n.parent = null
}, li = function(e, n) {
    e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
    e._act = 0
}, Mi = function(e, n) {
    if (e && (!n || n._end > e._dur || n._start < 0))
        for (var r = e; r; )
            r._dirty = 1,
            r = r.parent;
    return e
}, uw = function(e) {
    for (var n = e.parent; n && n.parent; )
        n._dirty = 1,
        n.totalDuration(),
        n = n.parent;
    return e
}, Nd = function(e, n, r, i) {
    return e._startAt && (St ? e._startAt.revert(Ca) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(n, !0, i))
}, cw = function t(e) {
    return !e || e._ts && t(e.parent)
}, Ip = function(e) {
    return e._repeat ? Go(e._tTime, e = e.duration() + e._rDelay) * e : 0
}, Go = function(e, n) {
    var r = Math.floor(e /= n);
    return e && r === e ? r - 1 : r
}, uu = function(e, n) {
    return (e - n._start) * n._ts + (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
}, Lu = function(e) {
    return e._end = tt(e._start + (e._tDur / Math.abs(e._ts || e._rts || fe) || 0))
}, Au = function(e, n) {
    var r = e._dp;
    return r && r.smoothChildTiming && e._ts && (e._start = tt(r._time - (e._ts > 0 ? n / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)),
    Lu(e),
    r._dirty || Mi(r, e)),
    e
}, ov = function(e, n) {
    var r;
    if ((n._time || !n._dur && n._initted || n._start < e._time && (n._dur || !n.add)) && (r = uu(e.rawTime(), n),
    (!n._dur || Rl(0, n.totalDuration(), r) - n._tTime > fe) && n.render(r, !0)),
    Mi(e, n)._dp && e._initted && e._time >= e._dur && e._ts) {
        if (e._dur < e.duration())
            for (r = e; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime),
                r = r._dp;
        e._zTime = -fe
    }
}, Zn = function(e, n, r, i) {
    return n.parent && li(n),
    n._start = tt((Tr(r) ? r : r || e !== Ce ? gn(e, r, n) : e._time) + n._delay),
    n._end = tt(n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)),
    iv(e, n, "_first", "_last", e._sort ? "_start" : 0),
    Pd(n) || (e._recent = n),
    i || ov(e, n),
    e._ts < 0 && Au(e, e._tTime),
    e
}, sv = function(e, n) {
    return (fn.ScrollTrigger || Kf("scrollTrigger", n)) && fn.ScrollTrigger.create(n, e)
}, lv = function(e, n, r, i, o) {
    if (nh(e, n, o),
    !e._initted)
        return 1;
    if (!r && e._pt && !St && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Jy !== on.frame)
        return ni.push(e),
        e._lazy = [o, i],
        1
}, dw = function t(e) {
    var n = e.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
}, Pd = function(e) {
    var n = e.data;
    return n === "isFromStart" || n === "isStart"
}, fw = function(e, n, r, i) {
    var o = e.ratio, s = n < 0 || !n && (!e._start && dw(e) && !(!e._initted && Pd(e)) || (e._ts < 0 || e._dp._ts < 0) && !Pd(e)) ? 0 : 1, l = e._rDelay, a = 0, u, d, f;
    if (l && e._repeat && (a = Rl(0, e._tDur, n),
    d = Go(a, l),
    e._yoyo && d & 1 && (s = 1 - s),
    d !== Go(e._tTime, l) && (o = 1 - s,
    e.vars.repeatRefresh && e._initted && e.invalidate())),
    s !== o || St || i || e._zTime === fe || !n && e._zTime) {
        if (!e._initted && lv(e, n, i, r, a))
            return;
        for (f = e._zTime,
        e._zTime = n || (r ? fe : 0),
        r || (r = n && !f),
        e.ratio = s,
        e._from && (s = 1 - s),
        e._time = 0,
        e._tTime = a,
        u = e._pt; u; )
            u.r(s, u.d),
            u = u._next;
        n < 0 && Nd(e, n, r, !0),
        e._onUpdate && !r && an(e, "onUpdate"),
        a && e._repeat && !r && e.parent && an(e, "onRepeat"),
        (n >= e._tDur || n < 0) && e.ratio === s && (s && li(e, 1),
        !r && !St && (an(e, s ? "onComplete" : "onReverseComplete", !0),
        e._prom && e._prom()))
    } else
        e._zTime || (e._zTime = n)
}, hw = function(e, n, r) {
    var i;
    if (r > n)
        for (i = e._first; i && i._start <= r; ) {
            if (i.data === "isPause" && i._start > n)
                return i;
            i = i._next
        }
    else
        for (i = e._last; i && i._start >= r; ) {
            if (i.data === "isPause" && i._start < n)
                return i;
            i = i._prev
        }
}, Qo = function(e, n, r, i) {
    var o = e._repeat
      , s = tt(n) || 0
      , l = e._tTime / e._tDur;
    return l && !i && (e._time *= s / e._dur),
    e._dur = s,
    e._tDur = o ? o < 0 ? 1e10 : tt(s * (o + 1) + e._rDelay * o) : s,
    l > 0 && !i && Au(e, e._tTime = e._tDur * l),
    e.parent && Lu(e),
    r || Mi(e.parent, e),
    e
}, Fp = function(e) {
    return e instanceof Dt ? Mi(e) : Qo(e, e._dur)
}, pw = {
    _start: 0,
    endTime: yl,
    totalDuration: yl
}, gn = function t(e, n, r) {
    var i = e.labels, o = e._recent || pw, s = e.duration() >= Sn ? o.endTime(!1) : e._dur, l, a, u;
    return rt(n) && (isNaN(n) || n in i) ? (a = n.charAt(0),
    u = n.substr(-1) === "%",
    l = n.indexOf("="),
    a === "<" || a === ">" ? (l >= 0 && (n = n.replace(/=/, "")),
    (a === "<" ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (u ? (l < 0 ? o : r).totalDuration() / 100 : 1)) : l < 0 ? (n in i || (i[n] = s),
    i[n]) : (a = parseFloat(n.charAt(l - 1) + n.substr(l + 1)),
    u && r && (a = a / 100 * (kt(r) ? r[0] : r).totalDuration()),
    l > 1 ? t(e, n.substr(0, l - 1), r) + a : s + a)) : n == null ? s : +n
}, Ws = function(e, n, r) {
    var i = Tr(n[1]), o = (i ? 2 : 1) + (e < 2 ? 0 : 1), s = n[o], l, a;
    if (i && (s.duration = n[1]),
    s.parent = r,
    e) {
        for (l = s,
        a = r; a && !("immediateRender"in l); )
            l = a.vars.defaults || {},
            a = Ht(a.vars.inherit) && a.parent;
        s.immediateRender = Ht(l.immediateRender),
        e < 2 ? s.runBackwards = 1 : s.startAt = n[o - 1]
    }
    return new Be(n[0],s,n[o + 1])
}, hi = function(e, n) {
    return e || e === 0 ? n(e) : n
}, Rl = function(e, n, r) {
    return r < e ? e : r > n ? n : r
}, wt = function(e, n) {
    return !rt(e) || !(n = rw.exec(e)) ? "" : n[1]
}, mw = function(e, n, r) {
    return hi(r, function(i) {
        return Rl(e, n, i)
    })
}, Od = [].slice, av = function(e, n) {
    return e && or(e) && "length"in e && (!n && !e.length || e.length - 1 in e && or(e[0])) && !e.nodeType && e !== Qn
}, gw = function(e, n, r) {
    return r === void 0 && (r = []),
    e.forEach(function(i) {
        var o;
        return rt(i) && !n || av(i, 1) ? (o = r).push.apply(o, kn(i)) : r.push(i)
    }) || r
}, kn = function(e, n, r) {
    return xe && !n && xe.selector ? xe.selector(e) : rt(e) && !r && (bd || !qo()) ? Od.call((n || qf).querySelectorAll(e), 0) : kt(e) ? gw(e, r) : av(e) ? Od.call(e, 0) : e ? [e] : []
}, Rd = function(e) {
    return e = kn(e)[0] || gl("Invalid scope") || {},
    function(n) {
        var r = e.current || e.nativeElement || e;
        return kn(n, r.querySelectorAll ? r : r === e ? gl("Invalid scope") || qf.createElement("div") : e)
    }
}, uv = function(e) {
    return e.sort(function() {
        return .5 - Math.random()
    })
}, cv = function(e) {
    if (Oe(e))
        return e;
    var n = or(e) ? e : {
        each: e
    }
      , r = zi(n.ease)
      , i = n.from || 0
      , o = parseFloat(n.base) || 0
      , s = {}
      , l = i > 0 && i < 1
      , a = isNaN(i) || l
      , u = n.axis
      , d = i
      , f = i;
    return rt(i) ? d = f = {
        center: .5,
        edges: .5,
        end: 1
    }[i] || 0 : !l && a && (d = i[0],
    f = i[1]),
    function(h, p, _) {
        var g = (_ || n).length, w = s[g], y, m, v, x, k, C, T, j, N;
        if (!w) {
            if (N = n.grid === "auto" ? 0 : (n.grid || [1, Sn])[1],
            !N) {
                for (T = -Sn; T < (T = _[N++].getBoundingClientRect().left) && N < g; )
                    ;
                N < g && N--
            }
            for (w = s[g] = [],
            y = a ? Math.min(N, g) * d - .5 : i % N,
            m = N === Sn ? 0 : a ? g * f / N - .5 : i / N | 0,
            T = 0,
            j = Sn,
            C = 0; C < g; C++)
                v = C % N - y,
                x = m - (C / N | 0),
                w[C] = k = u ? Math.abs(u === "y" ? x : v) : Yy(v * v + x * x),
                k > T && (T = k),
                k < j && (j = k);
            i === "random" && uv(w),
            w.max = T - j,
            w.min = j,
            w.v = g = (parseFloat(n.amount) || parseFloat(n.each) * (N > g ? g - 1 : u ? u === "y" ? g / N : N : Math.max(N, g / N)) || 0) * (i === "edges" ? -1 : 1),
            w.b = g < 0 ? o - g : o,
            w.u = wt(n.amount || n.each) || 0,
            r = r && g < 0 ? xv(r) : r
        }
        return g = (w[h] - w.min) / w.max || 0,
        tt(w.b + (r ? r(g) : g) * w.v) + w.u
    }
}, Dd = function(e) {
    var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(r) {
        var i = tt(Math.round(parseFloat(r) / e) * e * n);
        return (i - i % 1) / n + (Tr(r) ? 0 : wt(r))
    }
}, dv = function(e, n) {
    var r = kt(e), i, o;
    return !r && or(e) && (i = r = e.radius || Sn,
    e.values ? (e = kn(e.values),
    (o = !Tr(e[0])) && (i *= i)) : e = Dd(e.increment)),
    hi(n, r ? Oe(e) ? function(s) {
        return o = e(s),
        Math.abs(o - s) <= i ? o : s
    }
    : function(s) {
        for (var l = parseFloat(o ? s.x : s), a = parseFloat(o ? s.y : 0), u = Sn, d = 0, f = e.length, h, p; f--; )
            o ? (h = e[f].x - l,
            p = e[f].y - a,
            h = h * h + p * p) : h = Math.abs(e[f] - l),
            h < u && (u = h,
            d = f);
        return d = !i || u <= i ? e[d] : s,
        o || d === s || Tr(s) ? d : d + wt(s)
    }
    : Dd(e))
}, fv = function(e, n, r, i) {
    return hi(kt(e) ? !n : r === !0 ? !!(r = 0) : !i, function() {
        return kt(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (n - e + r * .99)) / r) * r * i) / i
    })
}, yw = function() {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
    return function(i) {
        return n.reduce(function(o, s) {
            return s(o)
        }, i)
    }
}, vw = function(e, n) {
    return function(r) {
        return e(parseFloat(r)) + (n || wt(r))
    }
}, _w = function(e, n, r) {
    return pv(e, n, 0, 1, r)
}, hv = function(e, n, r) {
    return hi(r, function(i) {
        return e[~~n(i)]
    })
}, xw = function t(e, n, r) {
    var i = n - e;
    return kt(e) ? hv(e, t(0, e.length), n) : hi(r, function(o) {
        return (i + (o - e) % i) % i + e
    })
}, ww = function t(e, n, r) {
    var i = n - e
      , o = i * 2;
    return kt(e) ? hv(e, t(0, e.length - 1), n) : hi(r, function(s) {
        return s = (o + (s - e) % o) % o || 0,
        e + (s > i ? o - s : s)
    })
}, vl = function(e) {
    for (var n = 0, r = "", i, o, s, l; ~(i = e.indexOf("random(", n)); )
        s = e.indexOf(")", i),
        l = e.charAt(i + 7) === "[",
        o = e.substr(i + 7, s - i - 7).match(l ? Qy : jd),
        r += e.substr(n, i - n) + fv(l ? o : +o[0], l ? 0 : +o[1], +o[2] || 1e-5),
        n = s + 1;
    return r + e.substr(n, e.length - n)
}, pv = function(e, n, r, i, o) {
    var s = n - e
      , l = i - r;
    return hi(o, function(a) {
        return r + ((a - e) / s * l || 0)
    })
}, Sw = function t(e, n, r, i) {
    var o = isNaN(e + n) ? 0 : function(p) {
        return (1 - p) * e + p * n
    }
    ;
    if (!o) {
        var s = rt(e), l = {}, a, u, d, f, h;
        if (r === !0 && (i = 1) && (r = null),
        s)
            e = {
                p: e
            },
            n = {
                p: n
            };
        else if (kt(e) && !kt(n)) {
            for (d = [],
            f = e.length,
            h = f - 2,
            u = 1; u < f; u++)
                d.push(t(e[u - 1], e[u]));
            f--,
            o = function(_) {
                _ *= f;
                var g = Math.min(h, ~~_);
                return d[g](_ - g)
            }
            ,
            r = n
        } else
            i || (e = Yi(kt(e) ? [] : {}, e));
        if (!d) {
            for (a in n)
                th.call(l, e, a, "get", n[a]);
            o = function(_) {
                return oh(_, l) || (s ? e.p : e)
            }
        }
    }
    return hi(r, o)
}, Wp = function(e, n, r) {
    var i = e.labels, o = Sn, s, l, a;
    for (s in i)
        l = i[s] - n,
        l < 0 == !!r && l && o > (l = Math.abs(l)) && (a = s,
        o = l);
    return a
}, an = function(e, n, r) {
    var i = e.vars, o = i[n], s = xe, l = e._ctx, a, u, d;
    if (o)
        return a = i[n + "Params"],
        u = i.callbackScope || e,
        r && ni.length && lu(),
        l && (xe = l),
        d = a ? o.apply(u, a) : o.call(u),
        xe = s,
        d
}, ks = function(e) {
    return li(e),
    e.scrollTrigger && e.scrollTrigger.kill(!!St),
    e.progress() < 1 && an(e, "onInterrupt"),
    e
}, Co, mv = [], gv = function(e) {
    if (e)
        if (e = !e.name && e.default || e,
        Qf() || e.headless) {
            var n = e.name
              , r = Oe(e)
              , i = n && !r && e.init ? function() {
                this._props = []
            }
            : e
              , o = {
                init: yl,
                render: oh,
                add: th,
                kill: Iw,
                modifier: Aw,
                rawVars: 0
            }
              , s = {
                targetTest: 0,
                get: 0,
                getSetter: ih,
                aliases: {},
                register: 0
            };
            if (qo(),
            e !== i) {
                if (rn[n])
                    return;
                En(i, En(au(e, o), s)),
                Yi(i.prototype, Yi(o, au(e, s))),
                rn[i.prop = n] = i,
                e.targetTest && (ja.push(i),
                Zf[n] = 1),
                n = (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) + "Plugin"
            }
            Zy(n, i),
            e.register && e.register(qt, i, Gt)
        } else
            mv.push(e)
}, de = 255, Ts = {
    aqua: [0, de, de],
    lime: [0, de, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, de],
    navy: [0, 0, 128],
    white: [de, de, de],
    olive: [128, 128, 0],
    yellow: [de, de, 0],
    orange: [de, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [de, 0, 0],
    pink: [de, 192, 203],
    cyan: [0, de, de],
    transparent: [de, de, de, 0]
}, mc = function(e, n, r) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0,
    (e * 6 < 1 ? n + (r - n) * e * 6 : e < .5 ? r : e * 3 < 2 ? n + (r - n) * (2 / 3 - e) * 6 : n) * de + .5 | 0
}, yv = function(e, n, r) {
    var i = e ? Tr(e) ? [e >> 16, e >> 8 & de, e & de] : 0 : Ts.black, o, s, l, a, u, d, f, h, p, _;
    if (!i) {
        if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
        Ts[e])
            i = Ts[e];
        else if (e.charAt(0) === "#") {
            if (e.length < 6 && (o = e.charAt(1),
            s = e.charAt(2),
            l = e.charAt(3),
            e = "#" + o + o + s + s + l + l + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
            e.length === 9)
                return i = parseInt(e.substr(1, 6), 16),
                [i >> 16, i >> 8 & de, i & de, parseInt(e.substr(7), 16) / 255];
            e = parseInt(e.substr(1), 16),
            i = [e >> 16, e >> 8 & de, e & de]
        } else if (e.substr(0, 3) === "hsl") {
            if (i = _ = e.match(jd),
            !n)
                a = +i[0] % 360 / 360,
                u = +i[1] / 100,
                d = +i[2] / 100,
                s = d <= .5 ? d * (u + 1) : d + u - d * u,
                o = d * 2 - s,
                i.length > 3 && (i[3] *= 1),
                i[0] = mc(a + 1 / 3, o, s),
                i[1] = mc(a, o, s),
                i[2] = mc(a - 1 / 3, o, s);
            else if (~e.indexOf("="))
                return i = e.match(Xy),
                r && i.length < 4 && (i[3] = 1),
                i
        } else
            i = e.match(jd) || Ts.transparent;
        i = i.map(Number)
    }
    return n && !_ && (o = i[0] / de,
    s = i[1] / de,
    l = i[2] / de,
    f = Math.max(o, s, l),
    h = Math.min(o, s, l),
    d = (f + h) / 2,
    f === h ? a = u = 0 : (p = f - h,
    u = d > .5 ? p / (2 - f - h) : p / (f + h),
    a = f === o ? (s - l) / p + (s < l ? 6 : 0) : f === s ? (l - o) / p + 2 : (o - s) / p + 4,
    a *= 60),
    i[0] = ~~(a + .5),
    i[1] = ~~(u * 100 + .5),
    i[2] = ~~(d * 100 + .5)),
    r && i.length < 4 && (i[3] = 1),
    i
}, vv = function(e) {
    var n = []
      , r = []
      , i = -1;
    return e.split(ri).forEach(function(o) {
        var s = o.match(To) || [];
        n.push.apply(n, s),
        r.push(i += s.length + 1)
    }),
    n.c = r,
    n
}, Up = function(e, n, r) {
    var i = "", o = (e + i).match(ri), s = n ? "hsla(" : "rgba(", l = 0, a, u, d, f;
    if (!o)
        return e;
    if (o = o.map(function(h) {
        return (h = yv(h, n, 1)) && s + (n ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")"
    }),
    r && (d = vv(e),
    a = r.c,
    a.join(i) !== d.c.join(i)))
        for (u = e.replace(ri, "1").split(To),
        f = u.length - 1; l < f; l++)
            i += u[l] + (~a.indexOf(l) ? o.shift() || s + "0,0,0,0)" : (d.length ? d : o.length ? o : r).shift());
    if (!u)
        for (u = e.split(ri),
        f = u.length - 1; l < f; l++)
            i += u[l] + o[l];
    return i + u[f]
}, ri = function() {
    var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
    for (e in Ts)
        t += "|" + e + "\\b";
    return new RegExp(t + ")","gi")
}(), kw = /hsl[a]?\(/, _v = function(e) {
    var n = e.join(" "), r;
    if (ri.lastIndex = 0,
    ri.test(n))
        return r = kw.test(n),
        e[1] = Up(e[1], r),
        e[0] = Up(e[0], r, vv(e[1])),
        !0
}, _l, on = function() {
    var t = Date.now, e = 500, n = 33, r = t(), i = r, o = 1e3 / 240, s = o, l = [], a, u, d, f, h, p, _ = function g(w) {
        var y = t() - i, m = w === !0, v, x, k, C;
        if ((y > e || y < 0) && (r += y - n),
        i += y,
        k = i - r,
        v = k - s,
        (v > 0 || m) && (C = ++f.frame,
        h = k - f.time * 1e3,
        f.time = k = k / 1e3,
        s += v + (v >= o ? 4 : o - v),
        x = 1),
        m || (a = u(g)),
        x)
            for (p = 0; p < l.length; p++)
                l[p](k, h, C, w)
    };
    return f = {
        time: 0,
        frame: 0,
        tick: function() {
            _(!0)
        },
        deltaRatio: function(w) {
            return h / (1e3 / (w || 60))
        },
        wake: function() {
            qy && (!bd && Qf() && (Qn = bd = window,
            qf = Qn.document || {},
            fn.gsap = qt,
            (Qn.gsapVersions || (Qn.gsapVersions = [])).push(qt.version),
            Ky(su || Qn.GreenSockGlobals || !Qn.gsap && Qn || {}),
            mv.forEach(gv)),
            d = typeof requestAnimationFrame < "u" && requestAnimationFrame,
            a && f.sleep(),
            u = d || function(w) {
                return setTimeout(w, s - f.time * 1e3 + 1 | 0)
            }
            ,
            _l = 1,
            _(2))
        },
        sleep: function() {
            (d ? cancelAnimationFrame : clearTimeout)(a),
            _l = 0,
            u = yl
        },
        lagSmoothing: function(w, y) {
            e = w || 1 / 0,
            n = Math.min(y || 33, e)
        },
        fps: function(w) {
            o = 1e3 / (w || 240),
            s = f.time * 1e3 + o
        },
        add: function(w, y, m) {
            var v = y ? function(x, k, C, T) {
                w(x, k, C, T),
                f.remove(v)
            }
            : w;
            return f.remove(w),
            l[m ? "unshift" : "push"](v),
            qo(),
            v
        },
        remove: function(w, y) {
            ~(y = l.indexOf(w)) && l.splice(y, 1) && p >= y && p--
        },
        _listeners: l
    },
    f
}(), qo = function() {
    return !_l && on.wake()
}, re = {}, Tw = /^[\d.\-M][\d.\-,\s]/, Cw = /["']/g, jw = function(e) {
    for (var n = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], o = 1, s = r.length, l, a, u; o < s; o++)
        a = r[o],
        l = o !== s - 1 ? a.lastIndexOf(",") : a.length,
        u = a.substr(0, l),
        n[i] = isNaN(u) ? u.replace(Cw, "").trim() : +u,
        i = a.substr(l + 1).trim();
    return n
}, bw = function(e) {
    var n = e.indexOf("(") + 1
      , r = e.indexOf(")")
      , i = e.indexOf("(", n);
    return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)
}, Ew = function(e) {
    var n = (e + "").split("(")
      , r = re[n[0]];
    return r && n.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [jw(n[1])] : bw(e).split(",").map(nv)) : re._CE && Tw.test(e) ? re._CE("", e) : r
}, xv = function(e) {
    return function(n) {
        return 1 - e(1 - n)
    }
}, wv = function t(e, n) {
    for (var r = e._first, i; r; )
        r instanceof Dt ? t(r, n) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== n && (r.timeline ? t(r.timeline, n) : (i = r._ease,
        r._ease = r._yEase,
        r._yEase = i,
        r._yoyo = n)),
        r = r._next
}, zi = function(e, n) {
    return e && (Oe(e) ? e : re[e] || Ew(e)) || n
}, eo = function(e, n, r, i) {
    r === void 0 && (r = function(a) {
        return 1 - n(1 - a)
    }
    ),
    i === void 0 && (i = function(a) {
        return a < .5 ? n(a * 2) / 2 : 1 - n((1 - a) * 2) / 2
    }
    );
    var o = {
        easeIn: n,
        easeOut: r,
        easeInOut: i
    }, s;
    return Xt(e, function(l) {
        re[l] = fn[l] = o,
        re[s = l.toLowerCase()] = r;
        for (var a in o)
            re[s + (a === "easeIn" ? ".in" : a === "easeOut" ? ".out" : ".inOut")] = re[l + "." + a] = o[a]
    }),
    o
}, Sv = function(e) {
    return function(n) {
        return n < .5 ? (1 - e(1 - n * 2)) / 2 : .5 + e((n - .5) * 2) / 2
    }
}, gc = function t(e, n, r) {
    var i = n >= 1 ? n : 1
      , o = (r || (e ? .3 : .45)) / (n < 1 ? n : 1)
      , s = o / Cd * (Math.asin(1 / i) || 0)
      , l = function(d) {
        return d === 1 ? 1 : i * Math.pow(2, -10 * d) * nw((d - s) * o) + 1
    }
      , a = e === "out" ? l : e === "in" ? function(u) {
        return 1 - l(1 - u)
    }
    : Sv(l);
    return o = Cd / o,
    a.config = function(u, d) {
        return t(e, u, d)
    }
    ,
    a
}, yc = function t(e, n) {
    n === void 0 && (n = 1.70158);
    var r = function(s) {
        return s ? --s * s * ((n + 1) * s + n) + 1 : 0
    }
      , i = e === "out" ? r : e === "in" ? function(o) {
        return 1 - r(1 - o)
    }
    : Sv(r);
    return i.config = function(o) {
        return t(e, o)
    }
    ,
    i
};
Xt("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
    var n = e < 5 ? e + 1 : e;
    eo(t + ",Power" + (n - 1), e ? function(r) {
        return Math.pow(r, n)
    }
    : function(r) {
        return r
    }
    , function(r) {
        return 1 - Math.pow(1 - r, n)
    }, function(r) {
        return r < .5 ? Math.pow(r * 2, n) / 2 : 1 - Math.pow((1 - r) * 2, n) / 2
    })
});
re.Linear.easeNone = re.none = re.Linear.easeIn;
eo("Elastic", gc("in"), gc("out"), gc());
(function(t, e) {
    var n = 1 / e
      , r = 2 * n
      , i = 2.5 * n
      , o = function(l) {
        return l < n ? t * l * l : l < r ? t * Math.pow(l - 1.5 / e, 2) + .75 : l < i ? t * (l -= 2.25 / e) * l + .9375 : t * Math.pow(l - 2.625 / e, 2) + .984375
    };
    eo("Bounce", function(s) {
        return 1 - o(1 - s)
    }, o)
}
)(7.5625, 2.75);
eo("Expo", function(t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0
});
eo("Circ", function(t) {
    return -(Yy(1 - t * t) - 1)
});
eo("Sine", function(t) {
    return t === 1 ? 1 : -tw(t * Jx) + 1
});
eo("Back", yc("in"), yc("out"), yc());
re.SteppedEase = re.steps = fn.SteppedEase = {
    config: function(e, n) {
        e === void 0 && (e = 1);
        var r = 1 / e
          , i = e + (n ? 0 : 1)
          , o = n ? 1 : 0
          , s = 1 - fe;
        return function(l) {
            return ((i * Rl(0, s, l) | 0) + o) * r
        }
    }
};
Xo.ease = re["quad.out"];
Xt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
    return Jf += t + "," + t + "Params,"
});
var kv = function(e, n) {
    this.id = ew++,
    e._gsap = this,
    this.target = e,
    this.harness = n,
    this.get = n ? n.get : ev,
    this.set = n ? n.getSetter : ih
}
  , xl = function() {
    function t(n) {
        this.vars = n,
        this._delay = +n.delay || 0,
        (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) && (this._rDelay = n.repeatDelay || 0,
        this._yoyo = !!n.yoyo || !!n.yoyoEase),
        this._ts = 1,
        Qo(this, +n.duration, 1, 1),
        this.data = n.data,
        xe && (this._ctx = xe,
        xe.data.push(this)),
        _l || on.wake()
    }
    var e = t.prototype;
    return e.delay = function(r) {
        return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay),
        this._delay = r,
        this) : this._delay
    }
    ,
    e.duration = function(r) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
    }
    ,
    e.totalDuration = function(r) {
        return arguments.length ? (this._dirty = 0,
        Qo(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    e.totalTime = function(r, i) {
        if (qo(),
        !arguments.length)
            return this._tTime;
        var o = this._dp;
        if (o && o.smoothChildTiming && this._ts) {
            for (Au(this, r),
            !o._dp || o.parent || ov(o, this); o && o.parent; )
                o.parent._time !== o._start + (o._ts >= 0 ? o._tTime / o._ts : (o.totalDuration() - o._tTime) / -o._ts) && o.totalTime(o._tTime, !0),
                o = o.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Zn(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === fe || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r),
        tv(this, r, i)),
        this
    }
    ,
    e.time = function(r, i) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + Ip(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time
    }
    ,
    e.totalProgress = function(r, i) {
        return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    e.progress = function(r, i) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Ip(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    e.iteration = function(r, i) {
        var o = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (r - 1) * o, i) : this._repeat ? Go(this._tTime, o) + 1 : 1
    }
    ,
    e.timeScale = function(r, i) {
        if (!arguments.length)
            return this._rts === -fe ? 0 : this._rts;
        if (this._rts === r)
            return this;
        var o = this.parent && this._ts ? uu(this.parent._time, this) : this._tTime;
        return this._rts = +r || 0,
        this._ts = this._ps || r === -fe ? 0 : this._rts,
        this.totalTime(Rl(-Math.abs(this._delay), this._tDur, o), i !== !1),
        Lu(this),
        uw(this)
    }
    ,
    e.paused = function(r) {
        return arguments.length ? (this._ps !== r && (this._ps = r,
        r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (qo(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== fe && (this._tTime -= fe)))),
        this) : this._ps
    }
    ,
    e.startTime = function(r) {
        if (arguments.length) {
            this._start = r;
            var i = this.parent || this._dp;
            return i && (i._sort || !this.parent) && Zn(i, this, r - this._delay),
            this
        }
        return this._start
    }
    ,
    e.endTime = function(r) {
        return this._start + (Ht(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    e.rawTime = function(r) {
        var i = this.parent || this._dp;
        return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? uu(i.rawTime(r), this) : this._tTime : this._tTime
    }
    ,
    e.revert = function(r) {
        r === void 0 && (r = ow);
        var i = St;
        return St = r,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r),
        this.totalTime(-.01, r.suppressEvents)),
        this.data !== "nested" && r.kill !== !1 && this.kill(),
        St = i,
        this
    }
    ,
    e.globalTime = function(r) {
        for (var i = this, o = arguments.length ? r : i.rawTime(); i; )
            o = i._start + o / (Math.abs(i._ts) || 1),
            i = i._dp;
        return !this.parent && this._sat ? this._sat.globalTime(r) : o
    }
    ,
    e.repeat = function(r) {
        return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r,
        Fp(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    e.repeatDelay = function(r) {
        if (arguments.length) {
            var i = this._time;
            return this._rDelay = r,
            Fp(this),
            i ? this.time(i) : this
        }
        return this._rDelay
    }
    ,
    e.yoyo = function(r) {
        return arguments.length ? (this._yoyo = r,
        this) : this._yoyo
    }
    ,
    e.seek = function(r, i) {
        return this.totalTime(gn(this, r), Ht(i))
    }
    ,
    e.restart = function(r, i) {
        return this.play().totalTime(r ? -this._delay : 0, Ht(i))
    }
    ,
    e.play = function(r, i) {
        return r != null && this.seek(r, i),
        this.reversed(!1).paused(!1)
    }
    ,
    e.reverse = function(r, i) {
        return r != null && this.seek(r || this.totalDuration(), i),
        this.reversed(!0).paused(!1)
    }
    ,
    e.pause = function(r, i) {
        return r != null && this.seek(r, i),
        this.paused(!0)
    }
    ,
    e.resume = function() {
        return this.paused(!1)
    }
    ,
    e.reversed = function(r) {
        return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -fe : 0)),
        this) : this._rts < 0
    }
    ,
    e.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -fe,
        this
    }
    ,
    e.isActive = function() {
        var r = this.parent || this._dp, i = this._start, o;
        return !!(!r || this._ts && this._initted && r.isActive() && (o = r.rawTime(!0)) >= i && o < this.endTime(!0) - fe)
    }
    ,
    e.eventCallback = function(r, i, o) {
        var s = this.vars;
        return arguments.length > 1 ? (i ? (s[r] = i,
        o && (s[r + "Params"] = o),
        r === "onUpdate" && (this._onUpdate = i)) : delete s[r],
        this) : s[r]
    }
    ,
    e.then = function(r) {
        var i = this;
        return new Promise(function(o) {
            var s = Oe(r) ? r : rv
              , l = function() {
                var u = i.then;
                i.then = null,
                Oe(s) && (s = s(i)) && (s.then || s === i) && (i.then = u),
                o(s),
                i.then = u
            };
            i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? l() : i._prom = l
        }
        )
    }
    ,
    e.kill = function() {
        ks(this)
    }
    ,
    t
}();
En(xl.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -fe,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Dt = function(t) {
    Vy(e, t);
    function e(r, i) {
        var o;
        return r === void 0 && (r = {}),
        o = t.call(this, r) || this,
        o.labels = {},
        o.smoothChildTiming = !!r.smoothChildTiming,
        o.autoRemoveChildren = !!r.autoRemoveChildren,
        o._sort = Ht(r.sortChildren),
        Ce && Zn(r.parent || Ce, dr(o), i),
        r.reversed && o.reverse(),
        r.paused && o.paused(!0),
        r.scrollTrigger && sv(dr(o), r.scrollTrigger),
        o
    }
    var n = e.prototype;
    return n.to = function(i, o, s) {
        return Ws(0, arguments, this),
        this
    }
    ,
    n.from = function(i, o, s) {
        return Ws(1, arguments, this),
        this
    }
    ,
    n.fromTo = function(i, o, s, l) {
        return Ws(2, arguments, this),
        this
    }
    ,
    n.set = function(i, o, s) {
        return o.duration = 0,
        o.parent = this,
        Fs(o).repeatDelay || (o.repeat = 0),
        o.immediateRender = !!o.immediateRender,
        new Be(i,o,gn(this, s),1),
        this
    }
    ,
    n.call = function(i, o, s) {
        return Zn(this, Be.delayedCall(0, i, o), s)
    }
    ,
    n.staggerTo = function(i, o, s, l, a, u, d) {
        return s.duration = o,
        s.stagger = s.stagger || l,
        s.onComplete = u,
        s.onCompleteParams = d,
        s.parent = this,
        new Be(i,s,gn(this, a)),
        this
    }
    ,
    n.staggerFrom = function(i, o, s, l, a, u, d) {
        return s.runBackwards = 1,
        Fs(s).immediateRender = Ht(s.immediateRender),
        this.staggerTo(i, o, s, l, a, u, d)
    }
    ,
    n.staggerFromTo = function(i, o, s, l, a, u, d, f) {
        return l.startAt = s,
        Fs(l).immediateRender = Ht(l.immediateRender),
        this.staggerTo(i, o, l, a, u, d, f)
    }
    ,
    n.render = function(i, o, s) {
        var l = this._time, a = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, d = i <= 0 ? 0 : tt(i), f = this._zTime < 0 != i < 0 && (this._initted || !u), h, p, _, g, w, y, m, v, x, k, C, T;
        if (this !== Ce && d > a && i >= 0 && (d = a),
        d !== this._tTime || s || f) {
            if (l !== this._time && u && (d += this._time - l,
            i += this._time - l),
            h = d,
            x = this._start,
            v = this._ts,
            y = !v,
            f && (u || (l = this._zTime),
            (i || !o) && (this._zTime = i)),
            this._repeat) {
                if (C = this._yoyo,
                w = u + this._rDelay,
                this._repeat < -1 && i < 0)
                    return this.totalTime(w * 100 + i, o, s);
                if (h = tt(d % w),
                d === a ? (g = this._repeat,
                h = u) : (g = ~~(d / w),
                g && g === d / w && (h = u,
                g--),
                h > u && (h = u)),
                k = Go(this._tTime, w),
                !l && this._tTime && k !== g && this._tTime - k * w - this._dur <= 0 && (k = g),
                C && g & 1 && (h = u - h,
                T = 1),
                g !== k && !this._lock) {
                    var j = C && k & 1
                      , N = j === (C && g & 1);
                    if (g < k && (j = !j),
                    l = j ? 0 : d % u ? u : d,
                    this._lock = 1,
                    this.render(l || (T ? 0 : tt(g * w)), o, !u)._lock = 0,
                    this._tTime = d,
                    !o && this.parent && an(this, "onRepeat"),
                    this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1),
                    l && l !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (u = this._dur,
                    a = this._tDur,
                    N && (this._lock = 2,
                    l = j ? u : -1e-4,
                    this.render(l, !0),
                    this.vars.repeatRefresh && !T && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !y)
                        return this;
                    wv(this, T)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (m = hw(this, tt(l), tt(h)),
            m && (d -= h - (h = m._start))),
            this._tTime = d,
            this._time = h,
            this._act = !v,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = i,
            l = 0),
            !l && h && !o && !g && (an(this, "onStart"),
            this._tTime !== d))
                return this;
            if (h >= l && i >= 0)
                for (p = this._first; p; ) {
                    if (_ = p._next,
                    (p._act || h >= p._start) && p._ts && m !== p) {
                        if (p.parent !== this)
                            return this.render(i, o, s);
                        if (p.render(p._ts > 0 ? (h - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (h - p._start) * p._ts, o, s),
                        h !== this._time || !this._ts && !y) {
                            m = 0,
                            _ && (d += this._zTime = -fe);
                            break
                        }
                    }
                    p = _
                }
            else {
                p = this._last;
                for (var E = i < 0 ? i : h; p; ) {
                    if (_ = p._prev,
                    (p._act || E <= p._end) && p._ts && m !== p) {
                        if (p.parent !== this)
                            return this.render(i, o, s);
                        if (p.render(p._ts > 0 ? (E - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (E - p._start) * p._ts, o, s || St && (p._initted || p._startAt)),
                        h !== this._time || !this._ts && !y) {
                            m = 0,
                            _ && (d += this._zTime = E ? -fe : fe);
                            break
                        }
                    }
                    p = _
                }
            }
            if (m && !o && (this.pause(),
            m.render(h >= l ? 0 : -fe)._zTime = h >= l ? 1 : -1,
            this._ts))
                return this._start = x,
                Lu(this),
                this.render(i, o, s);
            this._onUpdate && !o && an(this, "onUpdate", !0),
            (d === a && this._tTime >= this.totalDuration() || !d && l) && (x === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (d === a && this._ts > 0 || !d && this._ts < 0) && li(this, 1),
            !o && !(i < 0 && !l) && (d || l || !a) && (an(this, d === a && i >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(d < a && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    n.add = function(i, o) {
        var s = this;
        if (Tr(o) || (o = gn(this, o, i)),
        !(i instanceof xl)) {
            if (kt(i))
                return i.forEach(function(l) {
                    return s.add(l, o)
                }),
                this;
            if (rt(i))
                return this.addLabel(i, o);
            if (Oe(i))
                i = Be.delayedCall(0, i);
            else
                return this
        }
        return this !== i ? Zn(this, i, o) : this
    }
    ,
    n.getChildren = function(i, o, s, l) {
        i === void 0 && (i = !0),
        o === void 0 && (o = !0),
        s === void 0 && (s = !0),
        l === void 0 && (l = -Sn);
        for (var a = [], u = this._first; u; )
            u._start >= l && (u instanceof Be ? o && a.push(u) : (s && a.push(u),
            i && a.push.apply(a, u.getChildren(!0, o, s)))),
            u = u._next;
        return a
    }
    ,
    n.getById = function(i) {
        for (var o = this.getChildren(1, 1, 1), s = o.length; s--; )
            if (o[s].vars.id === i)
                return o[s]
    }
    ,
    n.remove = function(i) {
        return rt(i) ? this.removeLabel(i) : Oe(i) ? this.killTweensOf(i) : (zu(this, i),
        i === this._recent && (this._recent = this._last),
        Mi(this))
    }
    ,
    n.totalTime = function(i, o) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = tt(on.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))),
        t.prototype.totalTime.call(this, i, o),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    n.addLabel = function(i, o) {
        return this.labels[i] = gn(this, o),
        this
    }
    ,
    n.removeLabel = function(i) {
        return delete this.labels[i],
        this
    }
    ,
    n.addPause = function(i, o, s) {
        var l = Be.delayedCall(0, o || yl, s);
        return l.data = "isPause",
        this._hasPause = 1,
        Zn(this, l, gn(this, i))
    }
    ,
    n.removePause = function(i) {
        var o = this._first;
        for (i = gn(this, i); o; )
            o._start === i && o.data === "isPause" && li(o),
            o = o._next
    }
    ,
    n.killTweensOf = function(i, o, s) {
        for (var l = this.getTweensOf(i, s), a = l.length; a--; )
            Br !== l[a] && l[a].kill(i, o);
        return this
    }
    ,
    n.getTweensOf = function(i, o) {
        for (var s = [], l = kn(i), a = this._first, u = Tr(o), d; a; )
            a instanceof Be ? sw(a._targets, l) && (u ? (!Br || a._initted && a._ts) && a.globalTime(0) <= o && a.globalTime(a.totalDuration()) > o : !o || a.isActive()) && s.push(a) : (d = a.getTweensOf(l, o)).length && s.push.apply(s, d),
            a = a._next;
        return s
    }
    ,
    n.tweenTo = function(i, o) {
        o = o || {};
        var s = this, l = gn(s, i), a = o, u = a.startAt, d = a.onStart, f = a.onStartParams, h = a.immediateRender, p, _ = Be.to(s, En({
            ease: o.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: l,
            overwrite: "auto",
            duration: o.duration || Math.abs((l - (u && "time"in u ? u.time : s._time)) / s.timeScale()) || fe,
            onStart: function() {
                if (s.pause(),
                !p) {
                    var w = o.duration || Math.abs((l - (u && "time"in u ? u.time : s._time)) / s.timeScale());
                    _._dur !== w && Qo(_, w, 0, 1).render(_._time, !0, !0),
                    p = 1
                }
                d && d.apply(_, f || [])
            }
        }, o));
        return h ? _.render(0) : _
    }
    ,
    n.tweenFromTo = function(i, o, s) {
        return this.tweenTo(o, En({
            startAt: {
                time: gn(this, i)
            }
        }, s))
    }
    ,
    n.recent = function() {
        return this._recent
    }
    ,
    n.nextLabel = function(i) {
        return i === void 0 && (i = this._time),
        Wp(this, gn(this, i))
    }
    ,
    n.previousLabel = function(i) {
        return i === void 0 && (i = this._time),
        Wp(this, gn(this, i), 1)
    }
    ,
    n.currentLabel = function(i) {
        return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + fe)
    }
    ,
    n.shiftChildren = function(i, o, s) {
        s === void 0 && (s = 0);
        for (var l = this._first, a = this.labels, u; l; )
            l._start >= s && (l._start += i,
            l._end += i),
            l = l._next;
        if (o)
            for (u in a)
                a[u] >= s && (a[u] += i);
        return Mi(this)
    }
    ,
    n.invalidate = function(i) {
        var o = this._first;
        for (this._lock = 0; o; )
            o.invalidate(i),
            o = o._next;
        return t.prototype.invalidate.call(this, i)
    }
    ,
    n.clear = function(i) {
        i === void 0 && (i = !0);
        for (var o = this._first, s; o; )
            s = o._next,
            this.remove(o),
            o = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        Mi(this)
    }
    ,
    n.totalDuration = function(i) {
        var o = 0, s = this, l = s._last, a = Sn, u, d, f;
        if (arguments.length)
            return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
        if (s._dirty) {
            for (f = s.parent; l; )
                u = l._prev,
                l._dirty && l.totalDuration(),
                d = l._start,
                d > a && s._sort && l._ts && !s._lock ? (s._lock = 1,
                Zn(s, l, d - l._delay, 1)._lock = 0) : a = d,
                d < 0 && l._ts && (o -= d,
                (!f && !s._dp || f && f.smoothChildTiming) && (s._start += d / s._ts,
                s._time -= d,
                s._tTime -= d),
                s.shiftChildren(-d, !1, -1 / 0),
                a = 0),
                l._end > o && l._ts && (o = l._end),
                l = u;
            Qo(s, s === Ce && s._time > o ? s._time : o, 1, 1),
            s._dirty = 0
        }
        return s._tDur
    }
    ,
    e.updateRoot = function(i) {
        if (Ce._ts && (tv(Ce, uu(i, Ce)),
        Jy = on.frame),
        on.frame >= Lp) {
            Lp += cn.autoSleep || 120;
            var o = Ce._first;
            if ((!o || !o._ts) && cn.autoSleep && on._listeners.length < 2) {
                for (; o && !o._ts; )
                    o = o._next;
                o || on.sleep()
            }
        }
    }
    ,
    e
}(xl);
En(Dt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Nw = function(e, n, r, i, o, s, l) {
    var a = new Gt(this._pt,e,n,0,1,Nv,null,o), u = 0, d = 0, f, h, p, _, g, w, y, m;
    for (a.b = r,
    a.e = i,
    r += "",
    i += "",
    (y = ~i.indexOf("random(")) && (i = vl(i)),
    s && (m = [r, i],
    s(m, e, n),
    r = m[0],
    i = m[1]),
    h = r.match(hc) || []; f = hc.exec(i); )
        _ = f[0],
        g = i.substring(u, f.index),
        p ? p = (p + 1) % 5 : g.substr(-5) === "rgba(" && (p = 1),
        _ !== h[d++] && (w = parseFloat(h[d - 1]) || 0,
        a._pt = {
            _next: a._pt,
            p: g || d === 1 ? g : ",",
            s: w,
            c: _.charAt(1) === "=" ? Mo(w, _) - w : parseFloat(_) - w,
            m: p && p < 4 ? Math.round : 0
        },
        u = hc.lastIndex);
    return a.c = u < i.length ? i.substring(u, i.length) : "",
    a.fp = l,
    (Gy.test(i) || y) && (a.e = 0),
    this._pt = a,
    a
}, th = function(e, n, r, i, o, s, l, a, u, d) {
    Oe(i) && (i = i(o || 0, e, s));
    var f = e[n], h = r !== "get" ? r : Oe(f) ? u ? e[n.indexOf("set") || !Oe(e["get" + n.substr(3)]) ? n : "get" + n.substr(3)](u) : e[n]() : f, p = Oe(f) ? u ? Mw : bv : rh, _;
    if (rt(i) && (~i.indexOf("random(") && (i = vl(i)),
    i.charAt(1) === "=" && (_ = Mo(h, i) + (wt(h) || 0),
    (_ || _ === 0) && (i = _))),
    !d || h !== i || Md)
        return !isNaN(h * i) && i !== "" ? (_ = new Gt(this._pt,e,n,+h || 0,i - (h || 0),typeof f == "boolean" ? Lw : Ev,0,p),
        u && (_.fp = u),
        l && _.modifier(l, this, e),
        this._pt = _) : (!f && !(n in e) && Kf(n, i),
        Nw.call(this, e, n, h, i, p, a || cn.stringFilter, u))
}, Pw = function(e, n, r, i, o) {
    if (Oe(e) && (e = Us(e, o, n, r, i)),
    !or(e) || e.style && e.nodeType || kt(e) || Hy(e))
        return rt(e) ? Us(e, o, n, r, i) : e;
    var s = {}, l;
    for (l in e)
        s[l] = Us(e[l], o, n, r, i);
    return s
}, Tv = function(e, n, r, i, o, s) {
    var l, a, u, d;
    if (rn[e] && (l = new rn[e]).init(o, l.rawVars ? n[e] : Pw(n[e], i, o, s, r), r, i, s) !== !1 && (r._pt = a = new Gt(r._pt,o,e,0,1,l.render,l,0,l.priority),
    r !== Co))
        for (u = r._ptLookup[r._targets.indexOf(o)],
        d = l._props.length; d--; )
            u[l._props[d]] = a;
    return l
}, Br, Md, nh = function t(e, n, r) {
    var i = e.vars, o = i.ease, s = i.startAt, l = i.immediateRender, a = i.lazy, u = i.onUpdate, d = i.runBackwards, f = i.yoyoEase, h = i.keyframes, p = i.autoRevert, _ = e._dur, g = e._startAt, w = e._targets, y = e.parent, m = y && y.data === "nested" ? y.vars.targets : w, v = e._overwrite === "auto" && !Xf, x = e.timeline, k, C, T, j, N, E, I, R, V, H, q, B, F;
    if (x && (!h || !o) && (o = "none"),
    e._ease = zi(o, Xo.ease),
    e._yEase = f ? xv(zi(f === !0 ? o : f, Xo.ease)) : 0,
    f && e._yoyo && !e._repeat && (f = e._yEase,
    e._yEase = e._ease,
    e._ease = f),
    e._from = !x && !!i.runBackwards,
    !x || h && !i.stagger) {
        if (R = w[0] ? Di(w[0]).harness : 0,
        B = R && i[R.prop],
        k = au(i, Zf),
        g && (g._zTime < 0 && g.progress(1),
        n < 0 && d && l && !p ? g.render(-1, !0) : g.revert(d && _ ? Ca : iw),
        g._lazy = 0),
        s) {
            if (li(e._startAt = Be.set(w, En({
                data: "isStart",
                overwrite: !1,
                parent: y,
                immediateRender: !0,
                lazy: !g && Ht(a),
                startAt: null,
                delay: 0,
                onUpdate: u && function() {
                    return an(e, "onUpdate")
                }
                ,
                stagger: 0
            }, s))),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            n < 0 && (St || !l && !p) && e._startAt.revert(Ca),
            l && _ && n <= 0 && r <= 0) {
                n && (e._zTime = n);
                return
            }
        } else if (d && _ && !g) {
            if (n && (l = !1),
            T = En({
                overwrite: !1,
                data: "isFromStart",
                lazy: l && !g && Ht(a),
                immediateRender: l,
                stagger: 0,
                parent: y
            }, k),
            B && (T[R.prop] = B),
            li(e._startAt = Be.set(w, T)),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            n < 0 && (St ? e._startAt.revert(Ca) : e._startAt.render(-1, !0)),
            e._zTime = n,
            !l)
                t(e._startAt, fe, fe);
            else if (!n)
                return
        }
        for (e._pt = e._ptCache = 0,
        a = _ && Ht(a) || a && !_,
        C = 0; C < w.length; C++) {
            if (N = w[C],
            I = N._gsap || eh(w)[C]._gsap,
            e._ptLookup[C] = H = {},
            Ed[I.id] && ni.length && lu(),
            q = m === w ? C : m.indexOf(N),
            R && (V = new R).init(N, B || k, e, q, m) !== !1 && (e._pt = j = new Gt(e._pt,N,V.name,0,1,V.render,V,0,V.priority),
            V._props.forEach(function(P) {
                H[P] = j
            }),
            V.priority && (E = 1)),
            !R || B)
                for (T in k)
                    rn[T] && (V = Tv(T, k, e, q, N, m)) ? V.priority && (E = 1) : H[T] = j = th.call(e, N, T, "get", k[T], q, m, 0, i.stringFilter);
            e._op && e._op[C] && e.kill(N, e._op[C]),
            v && e._pt && (Br = e,
            Ce.killTweensOf(N, H, e.globalTime(n)),
            F = !e.parent,
            Br = 0),
            e._pt && a && (Ed[I.id] = 1)
        }
        E && Pv(e),
        e._onInit && e._onInit(e)
    }
    e._onUpdate = u,
    e._initted = (!e._op || e._pt) && !F,
    h && n <= 0 && x.render(Sn, !0, !0)
}, Ow = function(e, n, r, i, o, s, l, a) {
    var u = (e._pt && e._ptCache || (e._ptCache = {}))[n], d, f, h, p;
    if (!u)
        for (u = e._ptCache[n] = [],
        h = e._ptLookup,
        p = e._targets.length; p--; ) {
            if (d = h[p][n],
            d && d.d && d.d._pt)
                for (d = d.d._pt; d && d.p !== n && d.fp !== n; )
                    d = d._next;
            if (!d)
                return Md = 1,
                e.vars[n] = "+=0",
                nh(e, l),
                Md = 0,
                a ? gl(n + " not eligible for reset") : 1;
            u.push(d)
        }
    for (p = u.length; p--; )
        f = u[p],
        d = f._pt || f,
        d.s = (i || i === 0) && !o ? i : d.s + (i || 0) + s * d.c,
        d.c = r - d.s,
        f.e && (f.e = Le(r) + wt(f.e)),
        f.b && (f.b = d.s + wt(f.b))
}, Rw = function(e, n) {
    var r = e[0] ? Di(e[0]).harness : 0, i = r && r.aliases, o, s, l, a;
    if (!i)
        return n;
    o = Yi({}, n);
    for (s in i)
        if (s in o)
            for (a = i[s].split(","),
            l = a.length; l--; )
                o[a[l]] = o[s];
    return o
}, Dw = function(e, n, r, i) {
    var o = n.ease || i || "power1.inOut", s, l;
    if (kt(n))
        l = r[e] || (r[e] = []),
        n.forEach(function(a, u) {
            return l.push({
                t: u / (n.length - 1) * 100,
                v: a,
                e: o
            })
        });
    else
        for (s in n)
            l = r[s] || (r[s] = []),
            s === "ease" || l.push({
                t: parseFloat(e),
                v: n[s],
                e: o
            })
}, Us = function(e, n, r, i, o) {
    return Oe(e) ? e.call(n, r, i, o) : rt(e) && ~e.indexOf("random(") ? vl(e) : e
}, Cv = Jf + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", jv = {};
Xt(Cv + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
    return jv[t] = 1
});
var Be = function(t) {
    Vy(e, t);
    function e(r, i, o, s) {
        var l;
        typeof i == "number" && (o.duration = i,
        i = o,
        o = null),
        l = t.call(this, s ? i : Fs(i)) || this;
        var a = l.vars, u = a.duration, d = a.delay, f = a.immediateRender, h = a.stagger, p = a.overwrite, _ = a.keyframes, g = a.defaults, w = a.scrollTrigger, y = a.yoyoEase, m = i.parent || Ce, v = (kt(r) || Hy(r) ? Tr(r[0]) : "length"in i) ? [r] : kn(r), x, k, C, T, j, N, E, I;
        if (l._targets = v.length ? eh(v) : gl("GSAP target " + r + " not found. https://gsap.com", !cn.nullTargetWarn) || [],
        l._ptLookup = [],
        l._overwrite = p,
        _ || h || Jl(u) || Jl(d)) {
            if (i = l.vars,
            x = l.timeline = new Dt({
                data: "nested",
                defaults: g || {},
                targets: m && m.data === "nested" ? m.vars.targets : v
            }),
            x.kill(),
            x.parent = x._dp = dr(l),
            x._start = 0,
            h || Jl(u) || Jl(d)) {
                if (T = v.length,
                E = h && cv(h),
                or(h))
                    for (j in h)
                        ~Cv.indexOf(j) && (I || (I = {}),
                        I[j] = h[j]);
                for (k = 0; k < T; k++)
                    C = au(i, jv),
                    C.stagger = 0,
                    y && (C.yoyoEase = y),
                    I && Yi(C, I),
                    N = v[k],
                    C.duration = +Us(u, dr(l), k, N, v),
                    C.delay = (+Us(d, dr(l), k, N, v) || 0) - l._delay,
                    !h && T === 1 && C.delay && (l._delay = d = C.delay,
                    l._start += d,
                    C.delay = 0),
                    x.to(N, C, E ? E(k, N, v) : 0),
                    x._ease = re.none;
                x.duration() ? u = d = 0 : l.timeline = 0
            } else if (_) {
                Fs(En(x.vars.defaults, {
                    ease: "none"
                })),
                x._ease = zi(_.ease || i.ease || "none");
                var R = 0, V, H, q;
                if (kt(_))
                    _.forEach(function(B) {
                        return x.to(v, B, ">")
                    }),
                    x.duration();
                else {
                    C = {};
                    for (j in _)
                        j === "ease" || j === "easeEach" || Dw(j, _[j], C, _.easeEach);
                    for (j in C)
                        for (V = C[j].sort(function(B, F) {
                            return B.t - F.t
                        }),
                        R = 0,
                        k = 0; k < V.length; k++)
                            H = V[k],
                            q = {
                                ease: H.e,
                                duration: (H.t - (k ? V[k - 1].t : 0)) / 100 * u
                            },
                            q[j] = H.v,
                            x.to(v, q, R),
                            R += q.duration;
                    x.duration() < u && x.to({}, {
                        duration: u - x.duration()
                    })
                }
            }
            u || l.duration(u = x.duration())
        } else
            l.timeline = 0;
        return p === !0 && !Xf && (Br = dr(l),
        Ce.killTweensOf(v),
        Br = 0),
        Zn(m, dr(l), o),
        i.reversed && l.reverse(),
        i.paused && l.paused(!0),
        (f || !u && !_ && l._start === tt(m._time) && Ht(f) && cw(dr(l)) && m.data !== "nested") && (l._tTime = -fe,
        l.render(Math.max(0, -d) || 0)),
        w && sv(dr(l), w),
        l
    }
    var n = e.prototype;
    return n.render = function(i, o, s) {
        var l = this._time, a = this._tDur, u = this._dur, d = i < 0, f = i > a - fe && !d ? a : i < fe ? 0 : i, h, p, _, g, w, y, m, v, x;
        if (!u)
            fw(this, i, o, s);
        else if (f !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== d) {
            if (h = f,
            v = this.timeline,
            this._repeat) {
                if (g = u + this._rDelay,
                this._repeat < -1 && d)
                    return this.totalTime(g * 100 + i, o, s);
                if (h = tt(f % g),
                f === a ? (_ = this._repeat,
                h = u) : (_ = ~~(f / g),
                _ && _ === tt(f / g) && (h = u,
                _--),
                h > u && (h = u)),
                y = this._yoyo && _ & 1,
                y && (x = this._yEase,
                h = u - h),
                w = Go(this._tTime, g),
                h === l && !s && this._initted && _ === w)
                    return this._tTime = f,
                    this;
                _ !== w && (v && this._yEase && wv(v, y),
                this.vars.repeatRefresh && !y && !this._lock && this._time !== g && this._initted && (this._lock = s = 1,
                this.render(tt(g * _), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (lv(this, d ? i : h, s, o, f))
                    return this._tTime = 0,
                    this;
                if (l !== this._time && !(s && this.vars.repeatRefresh && _ !== w))
                    return this;
                if (u !== this._dur)
                    return this.render(i, o, s)
            }
            if (this._tTime = f,
            this._time = h,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = m = (x || this._ease)(h / u),
            this._from && (this.ratio = m = 1 - m),
            h && !l && !o && !_ && (an(this, "onStart"),
            this._tTime !== f))
                return this;
            for (p = this._pt; p; )
                p.r(m, p.d),
                p = p._next;
            v && v.render(i < 0 ? i : v._dur * v._ease(h / this._dur), o, s) || this._startAt && (this._zTime = i),
            this._onUpdate && !o && (d && Nd(this, i, o, s),
            an(this, "onUpdate")),
            this._repeat && _ !== w && this.vars.onRepeat && !o && this.parent && an(this, "onRepeat"),
            (f === this._tDur || !f) && this._tTime === f && (d && !this._onUpdate && Nd(this, i, !0, !0),
            (i || !u) && (f === this._tDur && this._ts > 0 || !f && this._ts < 0) && li(this, 1),
            !o && !(d && !l) && (f || l || y) && (an(this, f === a ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(f < a && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    n.targets = function() {
        return this._targets
    }
    ,
    n.invalidate = function(i) {
        return (!i || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(i),
        t.prototype.invalidate.call(this, i)
    }
    ,
    n.resetTo = function(i, o, s, l, a) {
        _l || on.wake(),
        this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), d;
        return this._initted || nh(this, u),
        d = this._ease(u / this._dur),
        Ow(this, i, o, s, l, d, u, a) ? this.resetTo(i, o, s, l, 1) : (Au(this, 0),
        this.parent || iv(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    n.kill = function(i, o) {
        if (o === void 0 && (o = "all"),
        !i && (!o || o === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? ks(this) : this;
        if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(i, o, Br && Br.vars.overwrite !== !0)._first || ks(this),
            this.parent && s !== this.timeline.totalDuration() && Qo(this, this._dur * this.timeline._tDur / s, 0, 1),
            this
        }
        var l = this._targets, a = i ? kn(i) : l, u = this._ptLookup, d = this._pt, f, h, p, _, g, w, y;
        if ((!o || o === "all") && aw(l, a))
            return o === "all" && (this._pt = 0),
            ks(this);
        for (f = this._op = this._op || [],
        o !== "all" && (rt(o) && (g = {},
        Xt(o, function(m) {
            return g[m] = 1
        }),
        o = g),
        o = Rw(l, o)),
        y = l.length; y--; )
            if (~a.indexOf(l[y])) {
                h = u[y],
                o === "all" ? (f[y] = o,
                _ = h,
                p = {}) : (p = f[y] = f[y] || {},
                _ = o);
                for (g in _)
                    w = h && h[g],
                    w && ((!("kill"in w.d) || w.d.kill(g) === !0) && zu(this, w, "_pt"),
                    delete h[g]),
                    p !== "all" && (p[g] = 1)
            }
        return this._initted && !this._pt && d && ks(this),
        this
    }
    ,
    e.to = function(i, o) {
        return new e(i,o,arguments[2])
    }
    ,
    e.from = function(i, o) {
        return Ws(1, arguments)
    }
    ,
    e.delayedCall = function(i, o, s, l) {
        return new e(o,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: i,
            onComplete: o,
            onReverseComplete: o,
            onCompleteParams: s,
            onReverseCompleteParams: s,
            callbackScope: l
        })
    }
    ,
    e.fromTo = function(i, o, s) {
        return Ws(2, arguments)
    }
    ,
    e.set = function(i, o) {
        return o.duration = 0,
        o.repeatDelay || (o.repeat = 0),
        new e(i,o)
    }
    ,
    e.killTweensOf = function(i, o, s) {
        return Ce.killTweensOf(i, o, s)
    }
    ,
    e
}(xl);
En(Be.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
Xt("staggerTo,staggerFrom,staggerFromTo", function(t) {
    Be[t] = function() {
        var e = new Dt
          , n = Od.call(arguments, 0);
        return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0),
        e[t].apply(e, n)
    }
});
var rh = function(e, n, r) {
    return e[n] = r
}
  , bv = function(e, n, r) {
    return e[n](r)
}
  , Mw = function(e, n, r, i) {
    return e[n](i.fp, r)
}
  , zw = function(e, n, r) {
    return e.setAttribute(n, r)
}
  , ih = function(e, n) {
    return Oe(e[n]) ? bv : Gf(e[n]) && e.setAttribute ? zw : rh
}
  , Ev = function(e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n)
}
  , Lw = function(e, n) {
    return n.set(n.t, n.p, !!(n.s + n.c * e), n)
}
  , Nv = function(e, n) {
    var r = n._pt
      , i = "";
    if (!e && n.b)
        i = n.b;
    else if (e === 1 && n.e)
        i = n.e;
    else {
        for (; r; )
            i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + i,
            r = r._next;
        i += n.c
    }
    n.set(n.t, n.p, i, n)
}
  , oh = function(e, n) {
    for (var r = n._pt; r; )
        r.r(e, r.d),
        r = r._next
}
  , Aw = function(e, n, r, i) {
    for (var o = this._pt, s; o; )
        s = o._next,
        o.p === i && o.modifier(e, n, r),
        o = s
}
  , Iw = function(e) {
    for (var n = this._pt, r, i; n; )
        i = n._next,
        n.p === e && !n.op || n.op === e ? zu(this, n, "_pt") : n.dep || (r = 1),
        n = i;
    return !r
}
  , Fw = function(e, n, r, i) {
    i.mSet(e, n, i.m.call(i.tween, r, i.mt), i)
}
  , Pv = function(e) {
    for (var n = e._pt, r, i, o, s; n; ) {
        for (r = n._next,
        i = o; i && i.pr > n.pr; )
            i = i._next;
        (n._prev = i ? i._prev : s) ? n._prev._next = n : o = n,
        (n._next = i) ? i._prev = n : s = n,
        n = r
    }
    e._pt = o
}
  , Gt = function() {
    function t(n, r, i, o, s, l, a, u, d) {
        this.t = r,
        this.s = o,
        this.c = s,
        this.p = i,
        this.r = l || Ev,
        this.d = a || this,
        this.set = u || rh,
        this.pr = d || 0,
        this._next = n,
        n && (n._prev = this)
    }
    var e = t.prototype;
    return e.modifier = function(r, i, o) {
        this.mSet = this.mSet || this.set,
        this.set = Fw,
        this.m = r,
        this.mt = o,
        this.tween = i
    }
    ,
    t
}();
Xt(Jf + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
    return Zf[t] = 1
});
fn.TweenMax = fn.TweenLite = Be;
fn.TimelineLite = fn.TimelineMax = Dt;
Ce = new Dt({
    sortChildren: !1,
    defaults: Xo,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
cn.stringFilter = _v;
var Li = []
  , ba = {}
  , Ww = []
  , Bp = 0
  , Uw = 0
  , vc = function(e) {
    return (ba[e] || Ww).map(function(n) {
        return n()
    })
}
  , zd = function() {
    var e = Date.now()
      , n = [];
    e - Bp > 2 && (vc("matchMediaInit"),
    Li.forEach(function(r) {
        var i = r.queries, o = r.conditions, s, l, a, u;
        for (l in i)
            s = Qn.matchMedia(i[l]).matches,
            s && (a = 1),
            s !== o[l] && (o[l] = s,
            u = 1);
        u && (r.revert(),
        a && n.push(r))
    }),
    vc("matchMediaRevert"),
    n.forEach(function(r) {
        return r.onMatch(r, function(i) {
            return r.add(null, i)
        })
    }),
    Bp = e,
    vc("matchMedia"))
}
  , Ov = function() {
    function t(n, r) {
        this.selector = r && Rd(r),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = Uw++,
        n && this.add(n)
    }
    var e = t.prototype;
    return e.add = function(r, i, o) {
        Oe(r) && (o = i,
        i = r,
        r = Oe);
        var s = this
          , l = function() {
            var u = xe, d = s.selector, f;
            return u && u !== s && u.data.push(s),
            o && (s.selector = Rd(o)),
            xe = s,
            f = i.apply(s, arguments),
            Oe(f) && s._r.push(f),
            xe = u,
            s.selector = d,
            s.isReverted = !1,
            f
        };
        return s.last = l,
        r === Oe ? l(s, function(a) {
            return s.add(null, a)
        }) : r ? s[r] = l : l
    }
    ,
    e.ignore = function(r) {
        var i = xe;
        xe = null,
        r(this),
        xe = i
    }
    ,
    e.getTweens = function() {
        var r = [];
        return this.data.forEach(function(i) {
            return i instanceof t ? r.push.apply(r, i.getTweens()) : i instanceof Be && !(i.parent && i.parent.data === "nested") && r.push(i)
        }),
        r
    }
    ,
    e.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    e.kill = function(r, i) {
        var o = this;
        if (r ? function() {
            for (var l = o.getTweens(), a = o.data.length, u; a--; )
                u = o.data[a],
                u.data === "isFlip" && (u.revert(),
                u.getChildren(!0, !0, !1).forEach(function(d) {
                    return l.splice(l.indexOf(d), 1)
                }));
            for (l.map(function(d) {
                return {
                    g: d._dur || d._delay || d._sat && !d._sat.vars.immediateRender ? d.globalTime(0) : -1 / 0,
                    t: d
                }
            }).sort(function(d, f) {
                return f.g - d.g || -1 / 0
            }).forEach(function(d) {
                return d.t.revert(r)
            }),
            a = o.data.length; a--; )
                u = o.data[a],
                u instanceof Dt ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(),
                u.kill()) : !(u instanceof Be) && u.revert && u.revert(r);
            o._r.forEach(function(d) {
                return d(r, o)
            }),
            o.isReverted = !0
        }() : this.data.forEach(function(l) {
            return l.kill && l.kill()
        }),
        this.clear(),
        i)
            for (var s = Li.length; s--; )
                Li[s].id === this.id && Li.splice(s, 1)
    }
    ,
    e.revert = function(r) {
        this.kill(r || {})
    }
    ,
    t
}()
  , Bw = function() {
    function t(n) {
        this.contexts = [],
        this.scope = n,
        xe && xe.data.push(this)
    }
    var e = t.prototype;
    return e.add = function(r, i, o) {
        or(r) || (r = {
            matches: r
        });
        var s = new Ov(0,o || this.scope), l = s.conditions = {}, a, u, d;
        xe && !s.selector && (s.selector = xe.selector),
        this.contexts.push(s),
        i = s.add("onMatch", i),
        s.queries = r;
        for (u in r)
            u === "all" ? d = 1 : (a = Qn.matchMedia(r[u]),
            a && (Li.indexOf(s) < 0 && Li.push(s),
            (l[u] = a.matches) && (d = 1),
            a.addListener ? a.addListener(zd) : a.addEventListener("change", zd)));
        return d && i(s, function(f) {
            return s.add(null, f)
        }),
        this
    }
    ,
    e.revert = function(r) {
        this.kill(r || {})
    }
    ,
    e.kill = function(r) {
        this.contexts.forEach(function(i) {
            return i.kill(r, !0)
        })
    }
    ,
    t
}()
  , cu = {
    registerPlugin: function() {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
        n.forEach(function(i) {
            return gv(i)
        })
    },
    timeline: function(e) {
        return new Dt(e)
    },
    getTweensOf: function(e, n) {
        return Ce.getTweensOf(e, n)
    },
    getProperty: function(e, n, r, i) {
        rt(e) && (e = kn(e)[0]);
        var o = Di(e || {}).get
          , s = r ? rv : nv;
        return r === "native" && (r = ""),
        e && (n ? s((rn[n] && rn[n].get || o)(e, n, r, i)) : function(l, a, u) {
            return s((rn[l] && rn[l].get || o)(e, l, a, u))
        }
        )
    },
    quickSetter: function(e, n, r) {
        if (e = kn(e),
        e.length > 1) {
            var i = e.map(function(d) {
                return qt.quickSetter(d, n, r)
            })
              , o = i.length;
            return function(d) {
                for (var f = o; f--; )
                    i[f](d)
            }
        }
        e = e[0] || {};
        var s = rn[n]
          , l = Di(e)
          , a = l.harness && (l.harness.aliases || {})[n] || n
          , u = s ? function(d) {
            var f = new s;
            Co._pt = 0,
            f.init(e, r ? d + r : d, Co, 0, [e]),
            f.render(1, f),
            Co._pt && oh(1, Co)
        }
        : l.set(e, a);
        return s ? u : function(d) {
            return u(e, a, r ? d + r : d, l, 1)
        }
    },
    quickTo: function(e, n, r) {
        var i, o = qt.to(e, Yi((i = {},
        i[n] = "+=0.1",
        i.paused = !0,
        i), r || {})), s = function(a, u, d) {
            return o.resetTo(n, a, u, d)
        };
        return s.tween = o,
        s
    },
    isTweening: function(e) {
        return Ce.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
        return e && e.ease && (e.ease = zi(e.ease, Xo.ease)),
        Ap(Xo, e || {})
    },
    config: function(e) {
        return Ap(cn, e || {})
    },
    registerEffect: function(e) {
        var n = e.name
          , r = e.effect
          , i = e.plugins
          , o = e.defaults
          , s = e.extendTimeline;
        (i || "").split(",").forEach(function(l) {
            return l && !rn[l] && !fn[l] && gl(n + " effect requires " + l + " plugin.")
        }),
        pc[n] = function(l, a, u) {
            return r(kn(l), En(a || {}, o), u)
        }
        ,
        s && (Dt.prototype[n] = function(l, a, u) {
            return this.add(pc[n](l, or(a) ? a : (u = a) && {}, this), u)
        }
        )
    },
    registerEase: function(e, n) {
        re[e] = zi(n)
    },
    parseEase: function(e, n) {
        return arguments.length ? zi(e, n) : re
    },
    getById: function(e) {
        return Ce.getById(e)
    },
    exportRoot: function(e, n) {
        e === void 0 && (e = {});
        var r = new Dt(e), i, o;
        for (r.smoothChildTiming = Ht(e.smoothChildTiming),
        Ce.remove(r),
        r._dp = 0,
        r._time = r._tTime = Ce._time,
        i = Ce._first; i; )
            o = i._next,
            (n || !(!i._dur && i instanceof Be && i.vars.onComplete === i._targets[0])) && Zn(r, i, i._start - i._delay),
            i = o;
        return Zn(Ce, r, 0),
        r
    },
    context: function(e, n) {
        return e ? new Ov(e,n) : xe
    },
    matchMedia: function(e) {
        return new Bw(e)
    },
    matchMediaRefresh: function() {
        return Li.forEach(function(e) {
            var n = e.conditions, r, i;
            for (i in n)
                n[i] && (n[i] = !1,
                r = 1);
            r && e.revert()
        }) || zd()
    },
    addEventListener: function(e, n) {
        var r = ba[e] || (ba[e] = []);
        ~r.indexOf(n) || r.push(n)
    },
    removeEventListener: function(e, n) {
        var r = ba[e]
          , i = r && r.indexOf(n);
        i >= 0 && r.splice(i, 1)
    },
    utils: {
        wrap: xw,
        wrapYoyo: ww,
        distribute: cv,
        random: fv,
        snap: dv,
        normalize: _w,
        getUnit: wt,
        clamp: mw,
        splitColor: yv,
        toArray: kn,
        selector: Rd,
        mapRange: pv,
        pipe: yw,
        unitize: vw,
        interpolate: Sw,
        shuffle: uv
    },
    install: Ky,
    effects: pc,
    ticker: on,
    updateRoot: Dt.updateRoot,
    plugins: rn,
    globalTimeline: Ce,
    core: {
        PropTween: Gt,
        globals: Zy,
        Tween: Be,
        Timeline: Dt,
        Animation: xl,
        getCache: Di,
        _removeLinkedListItem: zu,
        reverting: function() {
            return St
        },
        context: function(e) {
            return e && xe && (xe.data.push(e),
            e._ctx = xe),
            xe
        },
        suppressOverwrites: function(e) {
            return Xf = e
        }
    }
};
Xt("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
    return cu[t] = Be[t]
});
on.add(Dt.updateRoot);
Co = cu.to({}, {
    duration: 0
});
var $w = function(e, n) {
    for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
        r = r._next;
    return r
}
  , Vw = function(e, n) {
    var r = e._targets, i, o, s;
    for (i in n)
        for (o = r.length; o--; )
            s = e._ptLookup[o][i],
            s && (s = s.d) && (s._pt && (s = $w(s, i)),
            s && s.modifier && s.modifier(n[i], e, r[o], i))
}
  , _c = function(e, n) {
    return {
        name: e,
        rawVars: 1,
        init: function(i, o, s) {
            s._onInit = function(l) {
                var a, u;
                if (rt(o) && (a = {},
                Xt(o, function(d) {
                    return a[d] = 1
                }),
                o = a),
                n) {
                    a = {};
                    for (u in o)
                        a[u] = n(o[u]);
                    o = a
                }
                Vw(l, o)
            }
        }
    }
}
  , qt = cu.registerPlugin({
    name: "attr",
    init: function(e, n, r, i, o) {
        var s, l, a;
        this.tween = r;
        for (s in n)
            a = e.getAttribute(s) || "",
            l = this.add(e, "setAttribute", (a || 0) + "", n[s], i, o, 0, 0, s),
            l.op = s,
            l.b = a,
            this._props.push(s)
    },
    render: function(e, n) {
        for (var r = n._pt; r; )
            St ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d),
            r = r._next
    }
}, {
    name: "endArray",
    init: function(e, n) {
        for (var r = n.length; r--; )
            this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1)
    }
}, _c("roundProps", Dd), _c("modifiers"), _c("snap", dv)) || cu;
Be.version = Dt.version = qt.version = "3.12.5";
qy = 1;
Qf() && qo();
re.Power0;
re.Power1;
re.Power2;
re.Power3;
re.Power4;
re.Linear;
re.Quad;
re.Cubic;
re.Quart;
re.Quint;
re.Strong;
re.Elastic;
re.Back;
re.SteppedEase;
re.Bounce;
re.Sine;
re.Expo;
re.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var $p, $r, zo, sh, Ni, Vp, lh, Yw = function() {
    return typeof window < "u"
}, Cr = {}, ki = 180 / Math.PI, Lo = Math.PI / 180, so = Math.atan2, Yp = 1e8, ah = /([A-Z])/g, Hw = /(left|right|width|margin|padding|x)/i, Xw = /[\s,\(]\S/, Jn = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, Ld = function(e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
}, Gw = function(e, n) {
    return n.set(n.t, n.p, e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n)
}, Qw = function(e, n) {
    return n.set(n.t, n.p, e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b, n)
}, qw = function(e, n) {
    var r = n.s + n.c * e;
    n.set(n.t, n.p, ~~(r + (r < 0 ? -.5 : .5)) + n.u, n)
}, Rv = function(e, n) {
    return n.set(n.t, n.p, e ? n.e : n.b, n)
}, Dv = function(e, n) {
    return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n)
}, Kw = function(e, n, r) {
    return e.style[n] = r
}, Zw = function(e, n, r) {
    return e.style.setProperty(n, r)
}, Jw = function(e, n, r) {
    return e._gsap[n] = r
}, eS = function(e, n, r) {
    return e._gsap.scaleX = e._gsap.scaleY = r
}, tS = function(e, n, r, i, o) {
    var s = e._gsap;
    s.scaleX = s.scaleY = r,
    s.renderTransform(o, s)
}, nS = function(e, n, r, i, o) {
    var s = e._gsap;
    s[n] = r,
    s.renderTransform(o, s)
}, je = "transform", Qt = je + "Origin", rS = function t(e, n) {
    var r = this
      , i = this.target
      , o = i.style
      , s = i._gsap;
    if (e in Cr && o) {
        if (this.tfm = this.tfm || {},
        e !== "transform")
            e = Jn[e] || e,
            ~e.indexOf(",") ? e.split(",").forEach(function(l) {
                return r.tfm[l] = hr(i, l)
            }) : this.tfm[e] = s.x ? s[e] : hr(i, e),
            e === Qt && (this.tfm.zOrigin = s.zOrigin);
        else
            return Jn.transform.split(",").forEach(function(l) {
                return t.call(r, l, n)
            });
        if (this.props.indexOf(je) >= 0)
            return;
        s.svg && (this.svgo = i.getAttribute("data-svg-origin"),
        this.props.push(Qt, n, "")),
        e = je
    }
    (o || n) && this.props.push(e, n, o[e])
}, Mv = function(e) {
    e.translate && (e.removeProperty("translate"),
    e.removeProperty("scale"),
    e.removeProperty("rotate"))
}, iS = function() {
    var e = this.props, n = this.target, r = n.style, i = n._gsap, o, s;
    for (o = 0; o < e.length; o += 3)
        e[o + 1] ? n[e[o]] = e[o + 2] : e[o + 2] ? r[e[o]] = e[o + 2] : r.removeProperty(e[o].substr(0, 2) === "--" ? e[o] : e[o].replace(ah, "-$1").toLowerCase());
    if (this.tfm) {
        for (s in this.tfm)
            i[s] = this.tfm[s];
        i.svg && (i.renderTransform(),
        n.setAttribute("data-svg-origin", this.svgo || "")),
        o = lh(),
        (!o || !o.isStart) && !r[je] && (Mv(r),
        i.zOrigin && r[Qt] && (r[Qt] += " " + i.zOrigin + "px",
        i.zOrigin = 0,
        i.renderTransform()),
        i.uncache = 1)
    }
}, zv = function(e, n) {
    var r = {
        target: e,
        props: [],
        revert: iS,
        save: rS
    };
    return e._gsap || qt.core.getCache(e),
    n && n.split(",").forEach(function(i) {
        return r.save(i)
    }),
    r
}, Lv, Ad = function(e, n) {
    var r = $r.createElementNS ? $r.createElementNS((n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : $r.createElement(e);
    return r && r.style ? r : $r.createElement(e)
}, rr = function t(e, n, r) {
    var i = getComputedStyle(e);
    return i[n] || i.getPropertyValue(n.replace(ah, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, Ko(n) || n, 1) || ""
}, Hp = "O,Moz,ms,Ms,Webkit".split(","), Ko = function(e, n, r) {
    var i = n || Ni
      , o = i.style
      , s = 5;
    if (e in o && !r)
        return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(Hp[s] + e in o); )
        ;
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Hp[s] : "") + e
}, Id = function() {
    Yw() && window.document && ($p = window,
    $r = $p.document,
    zo = $r.documentElement,
    Ni = Ad("div") || {
        style: {}
    },
    Ad("div"),
    je = Ko(je),
    Qt = je + "Origin",
    Ni.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    Lv = !!Ko("perspective"),
    lh = qt.core.reverting,
    sh = 1)
}, xc = function t(e) {
    var n = Ad("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, o = this.style.cssText, s;
    if (zo.appendChild(n),
    n.appendChild(this),
    this.style.display = "block",
    e)
        try {
            s = this.getBBox(),
            this._gsapBBox = this.getBBox,
            this.getBBox = t
        } catch {}
    else
        this._gsapBBox && (s = this._gsapBBox());
    return r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
    zo.removeChild(n),
    this.style.cssText = o,
    s
}, Xp = function(e, n) {
    for (var r = n.length; r--; )
        if (e.hasAttribute(n[r]))
            return e.getAttribute(n[r])
}, Av = function(e) {
    var n;
    try {
        n = e.getBBox()
    } catch {
        n = xc.call(e, !0)
    }
    return n && (n.width || n.height) || e.getBBox === xc || (n = xc.call(e, !0)),
    n && !n.width && !n.x && !n.y ? {
        x: +Xp(e, ["x", "cx", "x1"]) || 0,
        y: +Xp(e, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : n
}, Iv = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Av(e))
}, Hi = function(e, n) {
    if (n) {
        var r = e.style, i;
        n in Cr && n !== Qt && (n = je),
        r.removeProperty ? (i = n.substr(0, 2),
        (i === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n),
        r.removeProperty(i === "--" ? n : n.replace(ah, "-$1").toLowerCase())) : r.removeAttribute(n)
    }
}, Vr = function(e, n, r, i, o, s) {
    var l = new Gt(e._pt,n,r,0,1,s ? Dv : Rv);
    return e._pt = l,
    l.b = i,
    l.e = o,
    e._props.push(r),
    l
}, Gp = {
    deg: 1,
    rad: 1,
    turn: 1
}, oS = {
    grid: 1,
    flex: 1
}, ai = function t(e, n, r, i) {
    var o = parseFloat(r) || 0, s = (r + "").trim().substr((o + "").length) || "px", l = Ni.style, a = Hw.test(n), u = e.tagName.toLowerCase() === "svg", d = (u ? "client" : "offset") + (a ? "Width" : "Height"), f = 100, h = i === "px", p = i === "%", _, g, w, y;
    if (i === s || !o || Gp[i] || Gp[s])
        return o;
    if (s !== "px" && !h && (o = t(e, n, r, "px")),
    y = e.getCTM && Iv(e),
    (p || s === "%") && (Cr[n] || ~n.indexOf("adius")))
        return _ = y ? e.getBBox()[a ? "width" : "height"] : e[d],
        Le(p ? o / _ * f : o / 100 * _);
    if (l[a ? "width" : "height"] = f + (h ? s : i),
    g = ~n.indexOf("adius") || i === "em" && e.appendChild && !u ? e : e.parentNode,
    y && (g = (e.ownerSVGElement || {}).parentNode),
    (!g || g === $r || !g.appendChild) && (g = $r.body),
    w = g._gsap,
    w && p && w.width && a && w.time === on.time && !w.uncache)
        return Le(o / w.width * f);
    if (p && (n === "height" || n === "width")) {
        var m = e.style[n];
        e.style[n] = f + i,
        _ = e[d],
        m ? e.style[n] = m : Hi(e, n)
    } else
        (p || s === "%") && !oS[rr(g, "display")] && (l.position = rr(e, "position")),
        g === e && (l.position = "static"),
        g.appendChild(Ni),
        _ = Ni[d],
        g.removeChild(Ni),
        l.position = "absolute";
    return a && p && (w = Di(g),
    w.time = on.time,
    w.width = g[d]),
    Le(h ? _ * o / f : _ && o ? f / _ * o : 0)
}, hr = function(e, n, r, i) {
    var o;
    return sh || Id(),
    n in Jn && n !== "transform" && (n = Jn[n],
    ~n.indexOf(",") && (n = n.split(",")[0])),
    Cr[n] && n !== "transform" ? (o = Sl(e, i),
    o = n !== "transformOrigin" ? o[n] : o.svg ? o.origin : fu(rr(e, Qt)) + " " + o.zOrigin + "px") : (o = e.style[n],
    (!o || o === "auto" || i || ~(o + "").indexOf("calc(")) && (o = du[n] && du[n](e, n, r) || rr(e, n) || ev(e, n) || (n === "opacity" ? 1 : 0))),
    r && !~(o + "").trim().indexOf(" ") ? ai(e, n, o, r) + r : o
}, sS = function(e, n, r, i) {
    if (!r || r === "none") {
        var o = Ko(n, e, 1)
          , s = o && rr(e, o, 1);
        s && s !== r ? (n = o,
        r = s) : n === "borderColor" && (r = rr(e, "borderTopColor"))
    }
    var l = new Gt(this._pt,e.style,n,0,1,Nv), a = 0, u = 0, d, f, h, p, _, g, w, y, m, v, x, k;
    if (l.b = r,
    l.e = i,
    r += "",
    i += "",
    i === "auto" && (g = e.style[n],
    e.style[n] = i,
    i = rr(e, n) || i,
    g ? e.style[n] = g : Hi(e, n)),
    d = [r, i],
    _v(d),
    r = d[0],
    i = d[1],
    h = r.match(To) || [],
    k = i.match(To) || [],
    k.length) {
        for (; f = To.exec(i); )
            w = f[0],
            m = i.substring(a, f.index),
            _ ? _ = (_ + 1) % 5 : (m.substr(-5) === "rgba(" || m.substr(-5) === "hsla(") && (_ = 1),
            w !== (g = h[u++] || "") && (p = parseFloat(g) || 0,
            x = g.substr((p + "").length),
            w.charAt(1) === "=" && (w = Mo(p, w) + x),
            y = parseFloat(w),
            v = w.substr((y + "").length),
            a = To.lastIndex - v.length,
            v || (v = v || cn.units[n] || x,
            a === i.length && (i += v,
            l.e += v)),
            x !== v && (p = ai(e, n, g, v) || 0),
            l._pt = {
                _next: l._pt,
                p: m || u === 1 ? m : ",",
                s: p,
                c: y - p,
                m: _ && _ < 4 || n === "zIndex" ? Math.round : 0
            });
        l.c = a < i.length ? i.substring(a, i.length) : ""
    } else
        l.r = n === "display" && i === "none" ? Dv : Rv;
    return Gy.test(i) && (l.e = 0),
    this._pt = l,
    l
}, Qp = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, lS = function(e) {
    var n = e.split(" ")
      , r = n[0]
      , i = n[1] || "50%";
    return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r,
    r = i,
    i = e),
    n[0] = Qp[r] || r,
    n[1] = Qp[i] || i,
    n.join(" ")
}, aS = function(e, n) {
    if (n.tween && n.tween._time === n.tween._dur) {
        var r = n.t, i = r.style, o = n.u, s = r._gsap, l, a, u;
        if (o === "all" || o === !0)
            i.cssText = "",
            a = 1;
        else
            for (o = o.split(","),
            u = o.length; --u > -1; )
                l = o[u],
                Cr[l] && (a = 1,
                l = l === "transformOrigin" ? Qt : je),
                Hi(r, l);
        a && (Hi(r, je),
        s && (s.svg && r.removeAttribute("transform"),
        Sl(r, 1),
        s.uncache = 1,
        Mv(i)))
    }
}, du = {
    clearProps: function(e, n, r, i, o) {
        if (o.data !== "isFromStart") {
            var s = e._pt = new Gt(e._pt,n,r,0,0,aS);
            return s.u = i,
            s.pr = -10,
            s.tween = o,
            e._props.push(r),
            1
        }
    }
}, wl = [1, 0, 0, 1, 0, 0], Fv = {}, Wv = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
}, qp = function(e) {
    var n = rr(e, je);
    return Wv(n) ? wl : n.substr(7).match(Xy).map(Le)
}, uh = function(e, n) {
    var r = e._gsap || Di(e), i = e.style, o = qp(e), s, l, a, u;
    return r.svg && e.getAttribute("transform") ? (a = e.transform.baseVal.consolidate().matrix,
    o = [a.a, a.b, a.c, a.d, a.e, a.f],
    o.join(",") === "1,0,0,1,0,0" ? wl : o) : (o === wl && !e.offsetParent && e !== zo && !r.svg && (a = i.display,
    i.display = "block",
    s = e.parentNode,
    (!s || !e.offsetParent) && (u = 1,
    l = e.nextElementSibling,
    zo.appendChild(e)),
    o = qp(e),
    a ? i.display = a : Hi(e, "display"),
    u && (l ? s.insertBefore(e, l) : s ? s.appendChild(e) : zo.removeChild(e))),
    n && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o)
}, Fd = function(e, n, r, i, o, s) {
    var l = e._gsap, a = o || uh(e, !0), u = l.xOrigin || 0, d = l.yOrigin || 0, f = l.xOffset || 0, h = l.yOffset || 0, p = a[0], _ = a[1], g = a[2], w = a[3], y = a[4], m = a[5], v = n.split(" "), x = parseFloat(v[0]) || 0, k = parseFloat(v[1]) || 0, C, T, j, N;
    r ? a !== wl && (T = p * w - _ * g) && (j = x * (w / T) + k * (-g / T) + (g * m - w * y) / T,
    N = x * (-_ / T) + k * (p / T) - (p * m - _ * y) / T,
    x = j,
    k = N) : (C = Av(e),
    x = C.x + (~v[0].indexOf("%") ? x / 100 * C.width : x),
    k = C.y + (~(v[1] || v[0]).indexOf("%") ? k / 100 * C.height : k)),
    i || i !== !1 && l.smooth ? (y = x - u,
    m = k - d,
    l.xOffset = f + (y * p + m * g) - y,
    l.yOffset = h + (y * _ + m * w) - m) : l.xOffset = l.yOffset = 0,
    l.xOrigin = x,
    l.yOrigin = k,
    l.smooth = !!i,
    l.origin = n,
    l.originIsAbsolute = !!r,
    e.style[Qt] = "0px 0px",
    s && (Vr(s, l, "xOrigin", u, x),
    Vr(s, l, "yOrigin", d, k),
    Vr(s, l, "xOffset", f, l.xOffset),
    Vr(s, l, "yOffset", h, l.yOffset)),
    e.setAttribute("data-svg-origin", x + " " + k)
}, Sl = function(e, n) {
    var r = e._gsap || new kv(e);
    if ("x"in r && !n && !r.uncache)
        return r;
    var i = e.style, o = r.scaleX < 0, s = "px", l = "deg", a = getComputedStyle(e), u = rr(e, Qt) || "0", d, f, h, p, _, g, w, y, m, v, x, k, C, T, j, N, E, I, R, V, H, q, B, F, P, z, S, W, ie, ct, ae, Re;
    return d = f = h = g = w = y = m = v = x = 0,
    p = _ = 1,
    r.svg = !!(e.getCTM && Iv(e)),
    a.translate && ((a.translate !== "none" || a.scale !== "none" || a.rotate !== "none") && (i[je] = (a.translate !== "none" ? "translate3d(" + (a.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (a.rotate !== "none" ? "rotate(" + a.rotate + ") " : "") + (a.scale !== "none" ? "scale(" + a.scale.split(" ").join(",") + ") " : "") + (a[je] !== "none" ? a[je] : "")),
    i.scale = i.rotate = i.translate = "none"),
    T = uh(e, r.svg),
    r.svg && (r.uncache ? (P = e.getBBox(),
    u = r.xOrigin - P.x + "px " + (r.yOrigin - P.y) + "px",
    F = "") : F = !n && e.getAttribute("data-svg-origin"),
    Fd(e, F || u, !!F || r.originIsAbsolute, r.smooth !== !1, T)),
    k = r.xOrigin || 0,
    C = r.yOrigin || 0,
    T !== wl && (I = T[0],
    R = T[1],
    V = T[2],
    H = T[3],
    d = q = T[4],
    f = B = T[5],
    T.length === 6 ? (p = Math.sqrt(I * I + R * R),
    _ = Math.sqrt(H * H + V * V),
    g = I || R ? so(R, I) * ki : 0,
    m = V || H ? so(V, H) * ki + g : 0,
    m && (_ *= Math.abs(Math.cos(m * Lo))),
    r.svg && (d -= k - (k * I + C * V),
    f -= C - (k * R + C * H))) : (Re = T[6],
    ct = T[7],
    S = T[8],
    W = T[9],
    ie = T[10],
    ae = T[11],
    d = T[12],
    f = T[13],
    h = T[14],
    j = so(Re, ie),
    w = j * ki,
    j && (N = Math.cos(-j),
    E = Math.sin(-j),
    F = q * N + S * E,
    P = B * N + W * E,
    z = Re * N + ie * E,
    S = q * -E + S * N,
    W = B * -E + W * N,
    ie = Re * -E + ie * N,
    ae = ct * -E + ae * N,
    q = F,
    B = P,
    Re = z),
    j = so(-V, ie),
    y = j * ki,
    j && (N = Math.cos(-j),
    E = Math.sin(-j),
    F = I * N - S * E,
    P = R * N - W * E,
    z = V * N - ie * E,
    ae = H * E + ae * N,
    I = F,
    R = P,
    V = z),
    j = so(R, I),
    g = j * ki,
    j && (N = Math.cos(j),
    E = Math.sin(j),
    F = I * N + R * E,
    P = q * N + B * E,
    R = R * N - I * E,
    B = B * N - q * E,
    I = F,
    q = P),
    w && Math.abs(w) + Math.abs(g) > 359.9 && (w = g = 0,
    y = 180 - y),
    p = Le(Math.sqrt(I * I + R * R + V * V)),
    _ = Le(Math.sqrt(B * B + Re * Re)),
    j = so(q, B),
    m = Math.abs(j) > 2e-4 ? j * ki : 0,
    x = ae ? 1 / (ae < 0 ? -ae : ae) : 0),
    r.svg && (F = e.getAttribute("transform"),
    r.forceCSS = e.setAttribute("transform", "") || !Wv(rr(e, je)),
    F && e.setAttribute("transform", F))),
    Math.abs(m) > 90 && Math.abs(m) < 270 && (o ? (p *= -1,
    m += g <= 0 ? 180 : -180,
    g += g <= 0 ? 180 : -180) : (_ *= -1,
    m += m <= 0 ? 180 : -180)),
    n = n || r.uncache,
    r.x = d - ((r.xPercent = d && (!n && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-d) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + s,
    r.y = f - ((r.yPercent = f && (!n && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + s,
    r.z = h + s,
    r.scaleX = Le(p),
    r.scaleY = Le(_),
    r.rotation = Le(g) + l,
    r.rotationX = Le(w) + l,
    r.rotationY = Le(y) + l,
    r.skewX = m + l,
    r.skewY = v + l,
    r.transformPerspective = x + s,
    (r.zOrigin = parseFloat(u.split(" ")[2]) || !n && r.zOrigin || 0) && (i[Qt] = fu(u)),
    r.xOffset = r.yOffset = 0,
    r.force3D = cn.force3D,
    r.renderTransform = r.svg ? cS : Lv ? Uv : uS,
    r.uncache = 0,
    r
}, fu = function(e) {
    return (e = e.split(" "))[0] + " " + e[1]
}, wc = function(e, n, r) {
    var i = wt(n);
    return Le(parseFloat(n) + parseFloat(ai(e, "x", r + "px", i))) + i
}, uS = function(e, n) {
    n.z = "0px",
    n.rotationY = n.rotationX = "0deg",
    n.force3D = 0,
    Uv(e, n)
}, _i = "0deg", gs = "0px", xi = ") ", Uv = function(e, n) {
    var r = n || this
      , i = r.xPercent
      , o = r.yPercent
      , s = r.x
      , l = r.y
      , a = r.z
      , u = r.rotation
      , d = r.rotationY
      , f = r.rotationX
      , h = r.skewX
      , p = r.skewY
      , _ = r.scaleX
      , g = r.scaleY
      , w = r.transformPerspective
      , y = r.force3D
      , m = r.target
      , v = r.zOrigin
      , x = ""
      , k = y === "auto" && e && e !== 1 || y === !0;
    if (v && (f !== _i || d !== _i)) {
        var C = parseFloat(d) * Lo, T = Math.sin(C), j = Math.cos(C), N;
        C = parseFloat(f) * Lo,
        N = Math.cos(C),
        s = wc(m, s, T * N * -v),
        l = wc(m, l, -Math.sin(C) * -v),
        a = wc(m, a, j * N * -v + v)
    }
    w !== gs && (x += "perspective(" + w + xi),
    (i || o) && (x += "translate(" + i + "%, " + o + "%) "),
    (k || s !== gs || l !== gs || a !== gs) && (x += a !== gs || k ? "translate3d(" + s + ", " + l + ", " + a + ") " : "translate(" + s + ", " + l + xi),
    u !== _i && (x += "rotate(" + u + xi),
    d !== _i && (x += "rotateY(" + d + xi),
    f !== _i && (x += "rotateX(" + f + xi),
    (h !== _i || p !== _i) && (x += "skew(" + h + ", " + p + xi),
    (_ !== 1 || g !== 1) && (x += "scale(" + _ + ", " + g + xi),
    m.style[je] = x || "translate(0, 0)"
}, cS = function(e, n) {
    var r = n || this, i = r.xPercent, o = r.yPercent, s = r.x, l = r.y, a = r.rotation, u = r.skewX, d = r.skewY, f = r.scaleX, h = r.scaleY, p = r.target, _ = r.xOrigin, g = r.yOrigin, w = r.xOffset, y = r.yOffset, m = r.forceCSS, v = parseFloat(s), x = parseFloat(l), k, C, T, j, N;
    a = parseFloat(a),
    u = parseFloat(u),
    d = parseFloat(d),
    d && (d = parseFloat(d),
    u += d,
    a += d),
    a || u ? (a *= Lo,
    u *= Lo,
    k = Math.cos(a) * f,
    C = Math.sin(a) * f,
    T = Math.sin(a - u) * -h,
    j = Math.cos(a - u) * h,
    u && (d *= Lo,
    N = Math.tan(u - d),
    N = Math.sqrt(1 + N * N),
    T *= N,
    j *= N,
    d && (N = Math.tan(d),
    N = Math.sqrt(1 + N * N),
    k *= N,
    C *= N)),
    k = Le(k),
    C = Le(C),
    T = Le(T),
    j = Le(j)) : (k = f,
    j = h,
    C = T = 0),
    (v && !~(s + "").indexOf("px") || x && !~(l + "").indexOf("px")) && (v = ai(p, "x", s, "px"),
    x = ai(p, "y", l, "px")),
    (_ || g || w || y) && (v = Le(v + _ - (_ * k + g * T) + w),
    x = Le(x + g - (_ * C + g * j) + y)),
    (i || o) && (N = p.getBBox(),
    v = Le(v + i / 100 * N.width),
    x = Le(x + o / 100 * N.height)),
    N = "matrix(" + k + "," + C + "," + T + "," + j + "," + v + "," + x + ")",
    p.setAttribute("transform", N),
    m && (p.style[je] = N)
}, dS = function(e, n, r, i, o) {
    var s = 360, l = rt(o), a = parseFloat(o) * (l && ~o.indexOf("rad") ? ki : 1), u = a - i, d = i + u + "deg", f, h;
    return l && (f = o.split("_")[1],
    f === "short" && (u %= s,
    u !== u % (s / 2) && (u += u < 0 ? s : -s)),
    f === "cw" && u < 0 ? u = (u + s * Yp) % s - ~~(u / s) * s : f === "ccw" && u > 0 && (u = (u - s * Yp) % s - ~~(u / s) * s)),
    e._pt = h = new Gt(e._pt,n,r,i,u,Gw),
    h.e = d,
    h.u = "deg",
    e._props.push(r),
    h
}, Kp = function(e, n) {
    for (var r in n)
        e[r] = n[r];
    return e
}, fS = function(e, n, r) {
    var i = Kp({}, r._gsap), o = "perspective,force3D,transformOrigin,svgOrigin", s = r.style, l, a, u, d, f, h, p, _;
    i.svg ? (u = r.getAttribute("transform"),
    r.setAttribute("transform", ""),
    s[je] = n,
    l = Sl(r, 1),
    Hi(r, je),
    r.setAttribute("transform", u)) : (u = getComputedStyle(r)[je],
    s[je] = n,
    l = Sl(r, 1),
    s[je] = u);
    for (a in Cr)
        u = i[a],
        d = l[a],
        u !== d && o.indexOf(a) < 0 && (p = wt(u),
        _ = wt(d),
        f = p !== _ ? ai(r, a, u, _) : parseFloat(u),
        h = parseFloat(d),
        e._pt = new Gt(e._pt,l,a,f,h - f,Ld),
        e._pt.u = _ || 0,
        e._props.push(a));
    Kp(l, i)
};
Xt("padding,margin,Width,Radius", function(t, e) {
    var n = "Top"
      , r = "Right"
      , i = "Bottom"
      , o = "Left"
      , s = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(function(l) {
        return e < 2 ? t + l : "border" + l + t
    });
    du[e > 1 ? "border" + t : t] = function(l, a, u, d, f) {
        var h, p;
        if (arguments.length < 4)
            return h = s.map(function(_) {
                return hr(l, _, u)
            }),
            p = h.join(" "),
            p.split(h[0]).length === 5 ? h[0] : p;
        h = (d + "").split(" "),
        p = {},
        s.forEach(function(_, g) {
            return p[_] = h[g] = h[g] || h[(g - 1) / 2 | 0]
        }),
        l.init(a, p, f)
    }
});
var Bv = {
    name: "css",
    register: Id,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, n, r, i, o) {
        var s = this._props, l = e.style, a = r.vars.startAt, u, d, f, h, p, _, g, w, y, m, v, x, k, C, T, j;
        sh || Id(),
        this.styles = this.styles || zv(e),
        j = this.styles.props,
        this.tween = r;
        for (g in n)
            if (g !== "autoRound" && (d = n[g],
            !(rn[g] && Tv(g, n, r, i, e, o)))) {
                if (p = typeof d,
                _ = du[g],
                p === "function" && (d = d.call(r, i, e, o),
                p = typeof d),
                p === "string" && ~d.indexOf("random(") && (d = vl(d)),
                _)
                    _(this, e, g, d, r) && (T = 1);
                else if (g.substr(0, 2) === "--")
                    u = (getComputedStyle(e).getPropertyValue(g) + "").trim(),
                    d += "",
                    ri.lastIndex = 0,
                    ri.test(u) || (w = wt(u),
                    y = wt(d)),
                    y ? w !== y && (u = ai(e, g, u, y) + y) : w && (d += w),
                    this.add(l, "setProperty", u, d, i, o, 0, 0, g),
                    s.push(g),
                    j.push(g, 0, l[g]);
                else if (p !== "undefined") {
                    if (a && g in a ? (u = typeof a[g] == "function" ? a[g].call(r, i, e, o) : a[g],
                    rt(u) && ~u.indexOf("random(") && (u = vl(u)),
                    wt(u + "") || u === "auto" || (u += cn.units[g] || wt(hr(e, g)) || ""),
                    (u + "").charAt(1) === "=" && (u = hr(e, g))) : u = hr(e, g),
                    h = parseFloat(u),
                    m = p === "string" && d.charAt(1) === "=" && d.substr(0, 2),
                    m && (d = d.substr(2)),
                    f = parseFloat(d),
                    g in Jn && (g === "autoAlpha" && (h === 1 && hr(e, "visibility") === "hidden" && f && (h = 0),
                    j.push("visibility", 0, l.visibility),
                    Vr(this, l, "visibility", h ? "inherit" : "hidden", f ? "inherit" : "hidden", !f)),
                    g !== "scale" && g !== "transform" && (g = Jn[g],
                    ~g.indexOf(",") && (g = g.split(",")[0]))),
                    v = g in Cr,
                    v) {
                        if (this.styles.save(g),
                        x || (k = e._gsap,
                        k.renderTransform && !n.parseTransform || Sl(e, n.parseTransform),
                        C = n.smoothOrigin !== !1 && k.smooth,
                        x = this._pt = new Gt(this._pt,l,je,0,1,k.renderTransform,k,0,-1),
                        x.dep = 1),
                        g === "scale")
                            this._pt = new Gt(this._pt,k,"scaleY",k.scaleY,(m ? Mo(k.scaleY, m + f) : f) - k.scaleY || 0,Ld),
                            this._pt.u = 0,
                            s.push("scaleY", g),
                            g += "X";
                        else if (g === "transformOrigin") {
                            j.push(Qt, 0, l[Qt]),
                            d = lS(d),
                            k.svg ? Fd(e, d, 0, C, 0, this) : (y = parseFloat(d.split(" ")[2]) || 0,
                            y !== k.zOrigin && Vr(this, k, "zOrigin", k.zOrigin, y),
                            Vr(this, l, g, fu(u), fu(d)));
                            continue
                        } else if (g === "svgOrigin") {
                            Fd(e, d, 1, C, 0, this);
                            continue
                        } else if (g in Fv) {
                            dS(this, k, g, h, m ? Mo(h, m + d) : d);
                            continue
                        } else if (g === "smoothOrigin") {
                            Vr(this, k, "smooth", k.smooth, d);
                            continue
                        } else if (g === "force3D") {
                            k[g] = d;
                            continue
                        } else if (g === "transform") {
                            fS(this, d, e);
                            continue
                        }
                    } else
                        g in l || (g = Ko(g) || g);
                    if (v || (f || f === 0) && (h || h === 0) && !Xw.test(d) && g in l)
                        w = (u + "").substr((h + "").length),
                        f || (f = 0),
                        y = wt(d) || (g in cn.units ? cn.units[g] : w),
                        w !== y && (h = ai(e, g, u, y)),
                        this._pt = new Gt(this._pt,v ? k : l,g,h,(m ? Mo(h, m + f) : f) - h,!v && (y === "px" || g === "zIndex") && n.autoRound !== !1 ? qw : Ld),
                        this._pt.u = y || 0,
                        w !== y && y !== "%" && (this._pt.b = u,
                        this._pt.r = Qw);
                    else if (g in l)
                        sS.call(this, e, g, u, m ? m + d : d);
                    else if (g in e)
                        this.add(e, g, u || e[g], m ? m + d : d, i, o);
                    else if (g !== "parseTransform") {
                        Kf(g, d);
                        continue
                    }
                    v || (g in l ? j.push(g, 0, l[g]) : j.push(g, 1, u || e[g])),
                    s.push(g)
                }
            }
        T && Pv(this)
    },
    render: function(e, n) {
        if (n.tween._time || !lh())
            for (var r = n._pt; r; )
                r.r(e, r.d),
                r = r._next;
        else
            n.styles.revert()
    },
    get: hr,
    aliases: Jn,
    getSetter: function(e, n, r) {
        var i = Jn[n];
        return i && i.indexOf(",") < 0 && (n = i),
        n in Cr && n !== Qt && (e._gsap.x || hr(e, "x")) ? r && Vp === r ? n === "scale" ? eS : Jw : (Vp = r || {}) && (n === "scale" ? tS : nS) : e.style && !Gf(e.style[n]) ? Kw : ~n.indexOf("-") ? Zw : ih(e, n)
    },
    core: {
        _removeProperty: Hi,
        _getMatrix: uh
    }
};
qt.utils.checkPrefix = Ko;
qt.core.getStyleSaver = zv;
(function(t, e, n, r) {
    var i = Xt(t + "," + e + "," + n, function(o) {
        Cr[o] = 1
    });
    Xt(e, function(o) {
        cn.units[o] = "deg",
        Fv[o] = 1
    }),
    Jn[i[13]] = t + "," + e,
    Xt(r, function(o) {
        var s = o.split(":");
        Jn[s[1]] = i[s[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Xt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
    cn.units[t] = "px"
});
qt.registerPlugin(Bv);
var vt = qt.registerPlugin(Bv) || qt;
vt.core.Tween;
function hS(t, e) {
    for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r)
    }
}
function pS(t, e, n) {
    return e && hS(t.prototype, e),
    t
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var lt, Ea, sn, Yr, Hr, Ao, $v, Ti, Bs, Vv, yr, Ln, Yv, Hv = function() {
    return lt || typeof window < "u" && (lt = window.gsap) && lt.registerPlugin && lt
}, Xv = 1, jo = [], J = [], ir = [], $s = Date.now, Wd = function(e, n) {
    return n
}, mS = function() {
    var e = Bs.core
      , n = e.bridge || {}
      , r = e._scrollers
      , i = e._proxies;
    r.push.apply(r, J),
    i.push.apply(i, ir),
    J = r,
    ir = i,
    Wd = function(s, l) {
        return n[s](l)
    }
}, ii = function(e, n) {
    return ~ir.indexOf(e) && ir[ir.indexOf(e) + 1][n]
}, Vs = function(e) {
    return !!~Vv.indexOf(e)
}, Et = function(e, n, r, i, o) {
    return e.addEventListener(n, r, {
        passive: i !== !1,
        capture: !!o
    })
}, bt = function(e, n, r, i) {
    return e.removeEventListener(n, r, !!i)
}, ea = "scrollLeft", ta = "scrollTop", Ud = function() {
    return yr && yr.isPressed || J.cache++
}, hu = function(e, n) {
    var r = function i(o) {
        if (o || o === 0) {
            Xv && (sn.history.scrollRestoration = "manual");
            var s = yr && yr.isPressed;
            o = i.v = Math.round(o) || (yr && yr.iOS ? 1 : 0),
            e(o),
            i.cacheID = J.cache,
            s && Wd("ss", o)
        } else
            (n || J.cache !== i.cacheID || Wd("ref")) && (i.cacheID = J.cache,
            i.v = e());
        return i.v + i.offset
    };
    return r.offset = 0,
    e && r
}, Mt = {
    s: ea,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: hu(function(t) {
        return arguments.length ? sn.scrollTo(t, Ge.sc()) : sn.pageXOffset || Yr[ea] || Hr[ea] || Ao[ea] || 0
    })
}, Ge = {
    s: ta,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Mt,
    sc: hu(function(t) {
        return arguments.length ? sn.scrollTo(Mt.sc(), t) : sn.pageYOffset || Yr[ta] || Hr[ta] || Ao[ta] || 0
    })
}, Wt = function(e, n) {
    return (n && n._ctx && n._ctx.selector || lt.utils.toArray)(e)[0] || (typeof e == "string" && lt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
}, ui = function(e, n) {
    var r = n.s
      , i = n.sc;
    Vs(e) && (e = Yr.scrollingElement || Hr);
    var o = J.indexOf(e)
      , s = i === Ge.sc ? 1 : 2;
    !~o && (o = J.push(e) - 1),
    J[o + s] || Et(e, "scroll", Ud);
    var l = J[o + s]
      , a = l || (J[o + s] = hu(ii(e, r), !0) || (Vs(e) ? i : hu(function(u) {
        return arguments.length ? e[r] = u : e[r]
    })));
    return a.target = e,
    l || (a.smooth = lt.getProperty(e, "scrollBehavior") === "smooth"),
    a
}, Bd = function(e, n, r) {
    var i = e
      , o = e
      , s = $s()
      , l = s
      , a = n || 50
      , u = Math.max(500, a * 3)
      , d = function(_, g) {
        var w = $s();
        g || w - s > a ? (o = i,
        i = _,
        l = s,
        s = w) : r ? i += _ : i = o + (_ - o) / (w - l) * (s - l)
    }
      , f = function() {
        o = i = r ? 0 : i,
        l = s = 0
    }
      , h = function(_) {
        var g = l
          , w = o
          , y = $s();
        return (_ || _ === 0) && _ !== i && d(_),
        s === l || y - l > u ? 0 : (i + (r ? w : -w)) / ((r ? y : s) - g) * 1e3
    };
    return {
        update: d,
        reset: f,
        getVelocity: h
    }
}, ys = function(e, n) {
    return n && !e._gsapAllow && e.preventDefault(),
    e.changedTouches ? e.changedTouches[0] : e
}, Zp = function(e) {
    var n = Math.max.apply(Math, e)
      , r = Math.min.apply(Math, e);
    return Math.abs(n) >= Math.abs(r) ? n : r
}, Gv = function() {
    Bs = lt.core.globals().ScrollTrigger,
    Bs && Bs.core && mS()
}, Qv = function(e) {
    return lt = e || Hv(),
    !Ea && lt && typeof document < "u" && document.body && (sn = window,
    Yr = document,
    Hr = Yr.documentElement,
    Ao = Yr.body,
    Vv = [sn, Yr, Hr, Ao],
    lt.utils.clamp,
    Yv = lt.core.context || function() {}
    ,
    Ti = "onpointerenter"in Ao ? "pointer" : "mouse",
    $v = Ie.isTouch = sn.matchMedia && sn.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in sn || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
    Ln = Ie.eventTypes = ("ontouchstart"in Hr ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in Hr ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
    setTimeout(function() {
        return Xv = 0
    }, 500),
    Gv(),
    Ea = 1),
    Ea
};
Mt.op = Ge;
J.cache = 0;
var Ie = function() {
    function t(n) {
        this.init(n)
    }
    var e = t.prototype;
    return e.init = function(r) {
        Ea || Qv(lt) || console.warn("Please gsap.registerPlugin(Observer)"),
        Bs || Gv();
        var i = r.tolerance
          , o = r.dragMinimum
          , s = r.type
          , l = r.target
          , a = r.lineHeight
          , u = r.debounce
          , d = r.preventDefault
          , f = r.onStop
          , h = r.onStopDelay
          , p = r.ignore
          , _ = r.wheelSpeed
          , g = r.event
          , w = r.onDragStart
          , y = r.onDragEnd
          , m = r.onDrag
          , v = r.onPress
          , x = r.onRelease
          , k = r.onRight
          , C = r.onLeft
          , T = r.onUp
          , j = r.onDown
          , N = r.onChangeX
          , E = r.onChangeY
          , I = r.onChange
          , R = r.onToggleX
          , V = r.onToggleY
          , H = r.onHover
          , q = r.onHoverEnd
          , B = r.onMove
          , F = r.ignoreCheck
          , P = r.isNormalizer
          , z = r.onGestureStart
          , S = r.onGestureEnd
          , W = r.onWheel
          , ie = r.onEnable
          , ct = r.onDisable
          , ae = r.onClick
          , Re = r.scrollSpeed
          , we = r.capture
          , pe = r.allowClicks
          , Ct = r.lockAxis
          , dt = r.onLockAxis;
        this.target = l = Wt(l) || Hr,
        this.vars = r,
        p && (p = lt.utils.toArray(p)),
        i = i || 1e-9,
        o = o || 0,
        _ = _ || 1,
        Re = Re || 1,
        s = s || "wheel,touch,pointer",
        u = u !== !1,
        a || (a = parseFloat(sn.getComputedStyle(Ao).lineHeight) || 22);
        var br, jt, Nn, se, De, Ft, Kt, b = this, Zt = 0, sr = 0, Er = r.passive || !d, Fe = ui(l, Mt), Nr = ui(l, Ge), pi = Fe(), to = Nr(), qe = ~s.indexOf("touch") && !~s.indexOf("pointer") && Ln[0] === "pointerdown", Pr = Vs(l), Me = l.ownerDocument || Yr, Pn = [0, 0, 0], mn = [0, 0, 0], lr = 0, rs = function() {
            return lr = $s()
        }, We = function($, le) {
            return (b.event = $) && p && ~p.indexOf($.target) || le && qe && $.pointerType !== "touch" || F && F($, le)
        }, Dl = function() {
            b._vx.reset(),
            b._vy.reset(),
            jt.pause(),
            f && f(b)
        }, Or = function() {
            var $ = b.deltaX = Zp(Pn)
              , le = b.deltaY = Zp(mn)
              , M = Math.abs($) >= i
              , G = Math.abs(le) >= i;
            I && (M || G) && I(b, $, le, Pn, mn),
            M && (k && b.deltaX > 0 && k(b),
            C && b.deltaX < 0 && C(b),
            N && N(b),
            R && b.deltaX < 0 != Zt < 0 && R(b),
            Zt = b.deltaX,
            Pn[0] = Pn[1] = Pn[2] = 0),
            G && (j && b.deltaY > 0 && j(b),
            T && b.deltaY < 0 && T(b),
            E && E(b),
            V && b.deltaY < 0 != sr < 0 && V(b),
            sr = b.deltaY,
            mn[0] = mn[1] = mn[2] = 0),
            (se || Nn) && (B && B(b),
            Nn && (m(b),
            Nn = !1),
            se = !1),
            Ft && !(Ft = !1) && dt && dt(b),
            De && (W(b),
            De = !1),
            br = 0
        }, no = function($, le, M) {
            Pn[M] += $,
            mn[M] += le,
            b._vx.update($),
            b._vy.update(le),
            u ? br || (br = requestAnimationFrame(Or)) : Or()
        }, ro = function($, le) {
            Ct && !Kt && (b.axis = Kt = Math.abs($) > Math.abs(le) ? "x" : "y",
            Ft = !0),
            Kt !== "y" && (Pn[2] += $,
            b._vx.update($, !0)),
            Kt !== "x" && (mn[2] += le,
            b._vy.update(le, !0)),
            u ? br || (br = requestAnimationFrame(Or)) : Or()
        }, Rr = function($) {
            if (!We($, 1)) {
                $ = ys($, d);
                var le = $.clientX
                  , M = $.clientY
                  , G = le - b.x
                  , U = M - b.y
                  , Y = b.isDragging;
                b.x = le,
                b.y = M,
                (Y || Math.abs(b.startX - le) >= o || Math.abs(b.startY - M) >= o) && (m && (Nn = !0),
                Y || (b.isDragging = !0),
                ro(G, U),
                Y || w && w(b))
            }
        }, mi = b.onPress = function(X) {
            We(X, 1) || X && X.button || (b.axis = Kt = null,
            jt.pause(),
            b.isPressed = !0,
            X = ys(X),
            Zt = sr = 0,
            b.startX = b.x = X.clientX,
            b.startY = b.y = X.clientY,
            b._vx.reset(),
            b._vy.reset(),
            Et(P ? l : Me, Ln[1], Rr, Er, !0),
            b.deltaX = b.deltaY = 0,
            v && v(b))
        }
        , Z = b.onRelease = function(X) {
            if (!We(X, 1)) {
                bt(P ? l : Me, Ln[1], Rr, !0);
                var $ = !isNaN(b.y - b.startY)
                  , le = b.isDragging
                  , M = le && (Math.abs(b.x - b.startX) > 3 || Math.abs(b.y - b.startY) > 3)
                  , G = ys(X);
                !M && $ && (b._vx.reset(),
                b._vy.reset(),
                d && pe && lt.delayedCall(.08, function() {
                    if ($s() - lr > 300 && !X.defaultPrevented) {
                        if (X.target.click)
                            X.target.click();
                        else if (Me.createEvent) {
                            var U = Me.createEvent("MouseEvents");
                            U.initMouseEvent("click", !0, !0, sn, 1, G.screenX, G.screenY, G.clientX, G.clientY, !1, !1, !1, !1, 0, null),
                            X.target.dispatchEvent(U)
                        }
                    }
                })),
                b.isDragging = b.isGesturing = b.isPressed = !1,
                f && le && !P && jt.restart(!0),
                y && le && y(b),
                x && x(b, M)
            }
        }
        , gi = function($) {
            return $.touches && $.touches.length > 1 && (b.isGesturing = !0) && z($, b.isDragging)
        }, On = function() {
            return (b.isGesturing = !1) || S(b)
        }, Rn = function($) {
            if (!We($)) {
                var le = Fe()
                  , M = Nr();
                no((le - pi) * Re, (M - to) * Re, 1),
                pi = le,
                to = M,
                f && jt.restart(!0)
            }
        }, Dn = function($) {
            if (!We($)) {
                $ = ys($, d),
                W && (De = !0);
                var le = ($.deltaMode === 1 ? a : $.deltaMode === 2 ? sn.innerHeight : 1) * _;
                no($.deltaX * le, $.deltaY * le, 0),
                f && !P && jt.restart(!0)
            }
        }, yi = function($) {
            if (!We($)) {
                var le = $.clientX
                  , M = $.clientY
                  , G = le - b.x
                  , U = M - b.y;
                b.x = le,
                b.y = M,
                se = !0,
                f && jt.restart(!0),
                (G || U) && ro(G, U)
            }
        }, io = function($) {
            b.event = $,
            H(b)
        }, ar = function($) {
            b.event = $,
            q(b)
        }, is = function($) {
            return We($) || ys($, d) && ae(b)
        };
        jt = b._dc = lt.delayedCall(h || .25, Dl).pause(),
        b.deltaX = b.deltaY = 0,
        b._vx = Bd(0, 50, !0),
        b._vy = Bd(0, 50, !0),
        b.scrollX = Fe,
        b.scrollY = Nr,
        b.isDragging = b.isGesturing = b.isPressed = !1,
        Yv(this),
        b.enable = function(X) {
            return b.isEnabled || (Et(Pr ? Me : l, "scroll", Ud),
            s.indexOf("scroll") >= 0 && Et(Pr ? Me : l, "scroll", Rn, Er, we),
            s.indexOf("wheel") >= 0 && Et(l, "wheel", Dn, Er, we),
            (s.indexOf("touch") >= 0 && $v || s.indexOf("pointer") >= 0) && (Et(l, Ln[0], mi, Er, we),
            Et(Me, Ln[2], Z),
            Et(Me, Ln[3], Z),
            pe && Et(l, "click", rs, !0, !0),
            ae && Et(l, "click", is),
            z && Et(Me, "gesturestart", gi),
            S && Et(Me, "gestureend", On),
            H && Et(l, Ti + "enter", io),
            q && Et(l, Ti + "leave", ar),
            B && Et(l, Ti + "move", yi)),
            b.isEnabled = !0,
            X && X.type && mi(X),
            ie && ie(b)),
            b
        }
        ,
        b.disable = function() {
            b.isEnabled && (jo.filter(function(X) {
                return X !== b && Vs(X.target)
            }).length || bt(Pr ? Me : l, "scroll", Ud),
            b.isPressed && (b._vx.reset(),
            b._vy.reset(),
            bt(P ? l : Me, Ln[1], Rr, !0)),
            bt(Pr ? Me : l, "scroll", Rn, we),
            bt(l, "wheel", Dn, we),
            bt(l, Ln[0], mi, we),
            bt(Me, Ln[2], Z),
            bt(Me, Ln[3], Z),
            bt(l, "click", rs, !0),
            bt(l, "click", is),
            bt(Me, "gesturestart", gi),
            bt(Me, "gestureend", On),
            bt(l, Ti + "enter", io),
            bt(l, Ti + "leave", ar),
            bt(l, Ti + "move", yi),
            b.isEnabled = b.isPressed = b.isDragging = !1,
            ct && ct(b))
        }
        ,
        b.kill = b.revert = function() {
            b.disable();
            var X = jo.indexOf(b);
            X >= 0 && jo.splice(X, 1),
            yr === b && (yr = 0)
        }
        ,
        jo.push(b),
        P && Vs(l) && (yr = b),
        b.enable(g)
    }
    ,
    pS(t, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]),
    t
}();
Ie.version = "3.12.5";
Ie.create = function(t) {
    return new Ie(t)
}
;
Ie.register = Qv;
Ie.getAll = function() {
    return jo.slice()
}
;
Ie.getById = function(t) {
    return jo.filter(function(e) {
        return e.vars.id === t
    })[0]
}
;
Hv() && lt.registerPlugin(Ie);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var A, uo, ne, ke, Wn, ge, qv, pu, kl, Ys, Cs, na, yt, Iu, $d, Ot, Jp, em, co, Kv, Sc, Zv, Nt, Vd, Jv, e0, Mr, Yd, ch, Io, dh, mu, Hd, kc, ra = 1, _t = Date.now, Tc = _t(), Cn = 0, js = 0, tm = function(e, n, r) {
    var i = nn(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return r["_" + n + "Clamp"] = i,
    i ? e.substr(6, e.length - 7) : e
}, nm = function(e, n) {
    return n && (!nn(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e
}, gS = function t() {
    return js && requestAnimationFrame(t)
}, rm = function() {
    return Iu = 1
}, im = function() {
    return Iu = 0
}, qn = function(e) {
    return e
}, bs = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, t0 = function() {
    return typeof window < "u"
}, n0 = function() {
    return A || t0() && (A = window.gsap) && A.registerPlugin && A
}, Xi = function(e) {
    return !!~qv.indexOf(e)
}, r0 = function(e) {
    return (e === "Height" ? dh : ne["inner" + e]) || Wn["client" + e] || ge["client" + e]
}, i0 = function(e) {
    return ii(e, "getBoundingClientRect") || (Xi(e) ? function() {
        return Da.width = ne.innerWidth,
        Da.height = dh,
        Da
    }
    : function() {
        return pr(e)
    }
    )
}, yS = function(e, n, r) {
    var i = r.d
      , o = r.d2
      , s = r.a;
    return (s = ii(e, "getBoundingClientRect")) ? function() {
        return s()[i]
    }
    : function() {
        return (n ? r0(o) : e["client" + o]) || 0
    }
}, vS = function(e, n) {
    return !n || ~ir.indexOf(e) ? i0(e) : function() {
        return Da
    }
}, er = function(e, n) {
    var r = n.s
      , i = n.d2
      , o = n.d
      , s = n.a;
    return Math.max(0, (r = "scroll" + i) && (s = ii(e, r)) ? s() - i0(e)()[o] : Xi(e) ? (Wn[r] || ge[r]) - r0(i) : e[r] - e["offset" + i])
}, ia = function(e, n) {
    for (var r = 0; r < co.length; r += 3)
        (!n || ~n.indexOf(co[r + 1])) && e(co[r], co[r + 1], co[r + 2])
}, nn = function(e) {
    return typeof e == "string"
}, zt = function(e) {
    return typeof e == "function"
}, Es = function(e) {
    return typeof e == "number"
}, Ci = function(e) {
    return typeof e == "object"
}, vs = function(e, n, r) {
    return e && e.progress(n ? 0 : 1) && r && e.pause()
}, Cc = function(e, n) {
    if (e.enabled) {
        var r = e._ctx ? e._ctx.add(function() {
            return n(e)
        }) : n(e);
        r && r.totalTime && (e.callbackAnimation = r)
    }
}, lo = Math.abs, o0 = "left", s0 = "top", fh = "right", hh = "bottom", Ai = "width", Ii = "height", Hs = "Right", Xs = "Left", Gs = "Top", Qs = "Bottom", Ue = "padding", _n = "margin", Zo = "Width", ph = "Height", He = "px", xn = function(e) {
    return ne.getComputedStyle(e)
}, _S = function(e) {
    var n = xn(e).position;
    e.style.position = n === "absolute" || n === "fixed" ? n : "relative"
}, om = function(e, n) {
    for (var r in n)
        r in e || (e[r] = n[r]);
    return e
}, pr = function(e, n) {
    var r = n && xn(e)[$d] !== "matrix(1, 0, 0, 1, 0, 0)" && A.to(e, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
      , i = e.getBoundingClientRect();
    return r && r.progress(0).kill(),
    i
}, gu = function(e, n) {
    var r = n.d2;
    return e["offset" + r] || e["client" + r] || 0
}, l0 = function(e) {
    var n = [], r = e.labels, i = e.duration(), o;
    for (o in r)
        n.push(r[o] / i);
    return n
}, xS = function(e) {
    return function(n) {
        return A.utils.snap(l0(e), n)
    }
}, mh = function(e) {
    var n = A.utils.snap(e)
      , r = Array.isArray(e) && e.slice(0).sort(function(i, o) {
        return i - o
    });
    return r ? function(i, o, s) {
        s === void 0 && (s = .001);
        var l;
        if (!o)
            return n(i);
        if (o > 0) {
            for (i -= s,
            l = 0; l < r.length; l++)
                if (r[l] >= i)
                    return r[l];
            return r[l - 1]
        } else
            for (l = r.length,
            i += s; l--; )
                if (r[l] <= i)
                    return r[l];
        return r[0]
    }
    : function(i, o, s) {
        s === void 0 && (s = .001);
        var l = n(i);
        return !o || Math.abs(l - i) < s || l - i < 0 == o < 0 ? l : n(o < 0 ? i - e : i + e)
    }
}, wS = function(e) {
    return function(n, r) {
        return mh(l0(e))(n, r.direction)
    }
}, oa = function(e, n, r, i) {
    return r.split(",").forEach(function(o) {
        return e(n, o, i)
    })
}, Je = function(e, n, r, i, o) {
    return e.addEventListener(n, r, {
        passive: !i,
        capture: !!o
    })
}, Ze = function(e, n, r, i) {
    return e.removeEventListener(n, r, !!i)
}, sa = function(e, n, r) {
    r = r && r.wheelHandler,
    r && (e(n, "wheel", r),
    e(n, "touchmove", r))
}, sm = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, la = {
    toggleActions: "play",
    anticipatePin: 0
}, yu = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, Na = function(e, n) {
    if (nn(e)) {
        var r = e.indexOf("=")
          , i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
        ~r && (e.indexOf("%") > r && (i *= n / 100),
        e = e.substr(0, r - 1)),
        e = i + (e in yu ? yu[e] * n : ~e.indexOf("%") ? parseFloat(e) * n / 100 : parseFloat(e) || 0)
    }
    return e
}, aa = function(e, n, r, i, o, s, l, a) {
    var u = o.startColor
      , d = o.endColor
      , f = o.fontSize
      , h = o.indent
      , p = o.fontWeight
      , _ = ke.createElement("div")
      , g = Xi(r) || ii(r, "pinType") === "fixed"
      , w = e.indexOf("scroller") !== -1
      , y = g ? ge : r
      , m = e.indexOf("start") !== -1
      , v = m ? u : d
      , x = "border-color:" + v + ";font-size:" + f + ";color:" + v + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return x += "position:" + ((w || a) && g ? "fixed;" : "absolute;"),
    (w || a || !g) && (x += (i === Ge ? fh : hh) + ":" + (s + parseFloat(h)) + "px;"),
    l && (x += "box-sizing:border-box;text-align:left;width:" + l.offsetWidth + "px;"),
    _._isStart = m,
    _.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")),
    _.style.cssText = x,
    _.innerText = n || n === 0 ? e + "-" + n : e,
    y.children[0] ? y.insertBefore(_, y.children[0]) : y.appendChild(_),
    _._offset = _["offset" + i.op.d2],
    Pa(_, 0, i, m),
    _
}, Pa = function(e, n, r, i) {
    var o = {
        display: "block"
    }
      , s = r[i ? "os2" : "p2"]
      , l = r[i ? "p2" : "os2"];
    e._isFlipped = i,
    o[r.a + "Percent"] = i ? -100 : 0,
    o[r.a] = i ? "1px" : 0,
    o["border" + s + Zo] = 1,
    o["border" + l + Zo] = 0,
    o[r.p] = n + "px",
    A.set(e, o)
}, K = [], Xd = {}, Tl, lm = function() {
    return _t() - Cn > 34 && (Tl || (Tl = requestAnimationFrame(_r)))
}, ao = function() {
    (!Nt || !Nt.isPressed || Nt.startX > ge.clientWidth) && (J.cache++,
    Nt ? Tl || (Tl = requestAnimationFrame(_r)) : _r(),
    Cn || Qi("scrollStart"),
    Cn = _t())
}, jc = function() {
    e0 = ne.innerWidth,
    Jv = ne.innerHeight
}, Ns = function() {
    J.cache++,
    !yt && !Zv && !ke.fullscreenElement && !ke.webkitFullscreenElement && (!Vd || e0 !== ne.innerWidth || Math.abs(ne.innerHeight - Jv) > ne.innerHeight * .25) && pu.restart(!0)
}, Gi = {}, SS = [], a0 = function t() {
    return Ze(Q, "scrollEnd", t) || Pi(!0)
}, Qi = function(e) {
    return Gi[e] && Gi[e].map(function(n) {
        return n()
    }) || SS
}, en = [], u0 = function(e) {
    for (var n = 0; n < en.length; n += 5)
        (!e || en[n + 4] && en[n + 4].query === e) && (en[n].style.cssText = en[n + 1],
        en[n].getBBox && en[n].setAttribute("transform", en[n + 2] || ""),
        en[n + 3].uncache = 1)
}, gh = function(e, n) {
    var r;
    for (Ot = 0; Ot < K.length; Ot++)
        r = K[Ot],
        r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
    mu = !0,
    n && u0(n),
    n || Qi("revert")
}, c0 = function(e, n) {
    J.cache++,
    (n || !Rt) && J.forEach(function(r) {
        return zt(r) && r.cacheID++ && (r.rec = 0)
    }),
    nn(e) && (ne.history.scrollRestoration = ch = e)
}, Rt, Fi = 0, am, kS = function() {
    if (am !== Fi) {
        var e = am = Fi;
        requestAnimationFrame(function() {
            return e === Fi && Pi(!0)
        })
    }
}, d0 = function() {
    ge.appendChild(Io),
    dh = !Nt && Io.offsetHeight || ne.innerHeight,
    ge.removeChild(Io)
}, um = function(e) {
    return kl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n) {
        return n.style.display = e ? "none" : "block"
    })
}, Pi = function(e, n) {
    if (Cn && !e && !mu) {
        Je(Q, "scrollEnd", a0);
        return
    }
    d0(),
    Rt = Q.isRefreshing = !0,
    J.forEach(function(i) {
        return zt(i) && ++i.cacheID && (i.rec = i())
    });
    var r = Qi("refreshInit");
    Kv && Q.sort(),
    n || gh(),
    J.forEach(function(i) {
        zt(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"),
        i(0))
    }),
    K.slice(0).forEach(function(i) {
        return i.refresh()
    }),
    mu = !1,
    K.forEach(function(i) {
        if (i._subPinOffset && i.pin) {
            var o = i.vars.horizontal ? "offsetWidth" : "offsetHeight"
              , s = i.pin[o];
            i.revert(!0, 1),
            i.adjustPinSpacing(i.pin[o] - s),
            i.refresh()
        }
    }),
    Hd = 1,
    um(!0),
    K.forEach(function(i) {
        var o = er(i.scroller, i._dir)
          , s = i.vars.end === "max" || i._endClamp && i.end > o
          , l = i._startClamp && i.start >= o;
        (s || l) && i.setPositions(l ? o - 1 : i.start, s ? Math.max(l ? o : i.start + 1, o) : i.end, !0)
    }),
    um(!1),
    Hd = 0,
    r.forEach(function(i) {
        return i && i.render && i.render(-1)
    }),
    J.forEach(function(i) {
        zt(i) && (i.smooth && requestAnimationFrame(function() {
            return i.target.style.scrollBehavior = "smooth"
        }),
        i.rec && i(i.rec))
    }),
    c0(ch, 1),
    pu.pause(),
    Fi++,
    Rt = 2,
    _r(2),
    K.forEach(function(i) {
        return zt(i.vars.onRefresh) && i.vars.onRefresh(i)
    }),
    Rt = Q.isRefreshing = !1,
    Qi("refresh")
}, Gd = 0, Oa = 1, qs, _r = function(e) {
    if (e === 2 || !Rt && !mu) {
        Q.isUpdating = !0,
        qs && qs.update(0);
        var n = K.length
          , r = _t()
          , i = r - Tc >= 50
          , o = n && K[0].scroll();
        if (Oa = Gd > o ? -1 : 1,
        Rt || (Gd = o),
        i && (Cn && !Iu && r - Cn > 200 && (Cn = 0,
        Qi("scrollEnd")),
        Cs = Tc,
        Tc = r),
        Oa < 0) {
            for (Ot = n; Ot-- > 0; )
                K[Ot] && K[Ot].update(0, i);
            Oa = 1
        } else
            for (Ot = 0; Ot < n; Ot++)
                K[Ot] && K[Ot].update(0, i);
        Q.isUpdating = !1
    }
    Tl = 0
}, Qd = [o0, s0, hh, fh, _n + Qs, _n + Hs, _n + Gs, _n + Xs, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Ra = Qd.concat([Ai, Ii, "boxSizing", "max" + Zo, "max" + ph, "position", _n, Ue, Ue + Gs, Ue + Hs, Ue + Qs, Ue + Xs]), TS = function(e, n, r) {
    Fo(r);
    var i = e._gsap;
    if (i.spacerIsNative)
        Fo(i.spacerState);
    else if (e._gsap.swappedIn) {
        var o = n.parentNode;
        o && (o.insertBefore(e, n),
        o.removeChild(n))
    }
    e._gsap.swappedIn = !1
}, bc = function(e, n, r, i) {
    if (!e._gsap.swappedIn) {
        for (var o = Qd.length, s = n.style, l = e.style, a; o--; )
            a = Qd[o],
            s[a] = r[a];
        s.position = r.position === "absolute" ? "absolute" : "relative",
        r.display === "inline" && (s.display = "inline-block"),
        l[hh] = l[fh] = "auto",
        s.flexBasis = r.flexBasis || "auto",
        s.overflow = "visible",
        s.boxSizing = "border-box",
        s[Ai] = gu(e, Mt) + He,
        s[Ii] = gu(e, Ge) + He,
        s[Ue] = l[_n] = l[s0] = l[o0] = "0",
        Fo(i),
        l[Ai] = l["max" + Zo] = r[Ai],
        l[Ii] = l["max" + ph] = r[Ii],
        l[Ue] = r[Ue],
        e.parentNode !== n && (e.parentNode.insertBefore(n, e),
        n.appendChild(e)),
        e._gsap.swappedIn = !0
    }
}, CS = /([A-Z])/g, Fo = function(e) {
    if (e) {
        var n = e.t.style, r = e.length, i = 0, o, s;
        for ((e.t._gsap || A.core.getCache(e.t)).uncache = 1; i < r; i += 2)
            s = e[i + 1],
            o = e[i],
            s ? n[o] = s : n[o] && n.removeProperty(o.replace(CS, "-$1").toLowerCase())
    }
}, ua = function(e) {
    for (var n = Ra.length, r = e.style, i = [], o = 0; o < n; o++)
        i.push(Ra[o], r[Ra[o]]);
    return i.t = e,
    i
}, jS = function(e, n, r) {
    for (var i = [], o = e.length, s = r ? 8 : 0, l; s < o; s += 2)
        l = e[s],
        i.push(l, l in n ? n[l] : e[s + 1]);
    return i.t = e.t,
    i
}, Da = {
    left: 0,
    top: 0
}, cm = function(e, n, r, i, o, s, l, a, u, d, f, h, p, _) {
    zt(e) && (e = e(a)),
    nn(e) && e.substr(0, 3) === "max" && (e = h + (e.charAt(4) === "=" ? Na("0" + e.substr(3), r) : 0));
    var g = p ? p.time() : 0, w, y, m;
    if (p && p.seek(0),
    isNaN(e) || (e = +e),
    Es(e))
        p && (e = A.utils.mapRange(p.scrollTrigger.start, p.scrollTrigger.end, 0, h, e)),
        l && Pa(l, r, i, !0);
    else {
        zt(n) && (n = n(a));
        var v = (e || "0").split(" "), x, k, C, T;
        m = Wt(n, a) || ge,
        x = pr(m) || {},
        (!x || !x.left && !x.top) && xn(m).display === "none" && (T = m.style.display,
        m.style.display = "block",
        x = pr(m),
        T ? m.style.display = T : m.style.removeProperty("display")),
        k = Na(v[0], x[i.d]),
        C = Na(v[1] || "0", r),
        e = x[i.p] - u[i.p] - d + k + o - C,
        l && Pa(l, C, i, r - C < 20 || l._isStart && C > 20),
        r -= r - C
    }
    if (_ && (a[_] = e || -.001,
    e < 0 && (e = 0)),
    s) {
        var j = e + r
          , N = s._isStart;
        w = "scroll" + i.d2,
        Pa(s, j, i, N && j > 20 || !N && (f ? Math.max(ge[w], Wn[w]) : s.parentNode[w]) <= j + 1),
        f && (u = pr(l),
        f && (s.style[i.op.p] = u[i.op.p] - i.op.m - s._offset + He))
    }
    return p && m && (w = pr(m),
    p.seek(h),
    y = pr(m),
    p._caScrollDist = w[i.p] - y[i.p],
    e = e / p._caScrollDist * h),
    p && p.seek(g),
    p ? e : Math.round(e)
}, bS = /(webkit|moz|length|cssText|inset)/i, dm = function(e, n, r, i) {
    if (e.parentNode !== n) {
        var o = e.style, s, l;
        if (n === ge) {
            e._stOrig = o.cssText,
            l = xn(e);
            for (s in l)
                !+s && !bS.test(s) && l[s] && typeof o[s] == "string" && s !== "0" && (o[s] = l[s]);
            o.top = r,
            o.left = i
        } else
            o.cssText = e._stOrig;
        A.core.getCache(e).uncache = 1,
        n.appendChild(e)
    }
}, f0 = function(e, n, r) {
    var i = n
      , o = i;
    return function(s) {
        var l = Math.round(e());
        return l !== i && l !== o && Math.abs(l - i) > 3 && Math.abs(l - o) > 3 && (s = l,
        r && r()),
        o = i,
        i = s,
        s
    }
}, ca = function(e, n, r) {
    var i = {};
    i[n.p] = "+=" + r,
    A.set(e, i)
}, fm = function(e, n) {
    var r = ui(e, n)
      , i = "_scroll" + n.p2
      , o = function s(l, a, u, d, f) {
        var h = s.tween
          , p = a.onComplete
          , _ = {};
        u = u || r();
        var g = f0(r, u, function() {
            h.kill(),
            s.tween = 0
        });
        return f = d && f || 0,
        d = d || l - u,
        h && h.kill(),
        a[i] = l,
        a.inherit = !1,
        a.modifiers = _,
        _[i] = function() {
            return g(u + d * h.ratio + f * h.ratio * h.ratio)
        }
        ,
        a.onUpdate = function() {
            J.cache++,
            s.tween && _r()
        }
        ,
        a.onComplete = function() {
            s.tween = 0,
            p && p.call(h)
        }
        ,
        h = s.tween = A.to(e, a),
        h
    };
    return e[i] = r,
    r.wheelHandler = function() {
        return o.tween && o.tween.kill() && (o.tween = 0)
    }
    ,
    Je(e, "wheel", r.wheelHandler),
    Q.isTouch && Je(e, "touchmove", r.wheelHandler),
    o
}, Q = function() {
    function t(n, r) {
        uo || t.register(A) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        Yd(this),
        this.init(n, r)
    }
    var e = t.prototype;
    return e.init = function(r, i) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        !js) {
            this.update = this.refresh = this.kill = qn;
            return
        }
        r = om(nn(r) || Es(r) || r.nodeType ? {
            trigger: r
        } : r, la);
        var o = r, s = o.onUpdate, l = o.toggleClass, a = o.id, u = o.onToggle, d = o.onRefresh, f = o.scrub, h = o.trigger, p = o.pin, _ = o.pinSpacing, g = o.invalidateOnRefresh, w = o.anticipatePin, y = o.onScrubComplete, m = o.onSnapComplete, v = o.once, x = o.snap, k = o.pinReparent, C = o.pinSpacer, T = o.containerAnimation, j = o.fastScrollEnd, N = o.preventOverlaps, E = r.horizontal || r.containerAnimation && r.horizontal !== !1 ? Mt : Ge, I = !f && f !== 0, R = Wt(r.scroller || ne), V = A.core.getCache(R), H = Xi(R), q = ("pinType"in r ? r.pinType : ii(R, "pinType") || H && "fixed") === "fixed", B = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack], F = I && r.toggleActions.split(" "), P = "markers"in r ? r.markers : la.markers, z = H ? 0 : parseFloat(xn(R)["border" + E.p2 + Zo]) || 0, S = this, W = r.onRefreshInit && function() {
            return r.onRefreshInit(S)
        }
        , ie = yS(R, H, E), ct = vS(R, H), ae = 0, Re = 0, we = 0, pe = ui(R, E), Ct, dt, br, jt, Nn, se, De, Ft, Kt, b, Zt, sr, Er, Fe, Nr, pi, to, qe, Pr, Me, Pn, mn, lr, rs, We, Dl, Or, no, ro, Rr, mi, Z, gi, On, Rn, Dn, yi, io, ar;
        if (S._startClamp = S._endClamp = !1,
        S._dir = E,
        w *= 45,
        S.scroller = R,
        S.scroll = T ? T.time.bind(T) : pe,
        jt = pe(),
        S.vars = r,
        i = i || r.animation,
        "refreshPriority"in r && (Kv = 1,
        r.refreshPriority === -9999 && (qs = S)),
        V.tweenScroll = V.tweenScroll || {
            top: fm(R, Ge),
            left: fm(R, Mt)
        },
        S.tweenTo = Ct = V.tweenScroll[E.p],
        S.scrubDuration = function(M) {
            gi = Es(M) && M,
            gi ? Z ? Z.duration(M) : Z = A.to(i, {
                ease: "expo",
                totalProgress: "+=0",
                inherit: !1,
                duration: gi,
                paused: !0,
                onComplete: function() {
                    return y && y(S)
                }
            }) : (Z && Z.progress(1).kill(),
            Z = 0)
        }
        ,
        i && (i.vars.lazy = !1,
        i._initted && !S.isReverted || i.vars.immediateRender !== !1 && r.immediateRender !== !1 && i.duration() && i.render(0, !0, !0),
        S.animation = i.pause(),
        i.scrollTrigger = S,
        S.scrubDuration(f),
        Rr = 0,
        a || (a = i.vars.id)),
        x && ((!Ci(x) || x.push) && (x = {
            snapTo: x
        }),
        "scrollBehavior"in ge.style && A.set(H ? [ge, Wn] : R, {
            scrollBehavior: "auto"
        }),
        J.forEach(function(M) {
            return zt(M) && M.target === (H ? ke.scrollingElement || Wn : R) && (M.smooth = !1)
        }),
        br = zt(x.snapTo) ? x.snapTo : x.snapTo === "labels" ? xS(i) : x.snapTo === "labelsDirectional" ? wS(i) : x.directional !== !1 ? function(M, G) {
            return mh(x.snapTo)(M, _t() - Re < 500 ? 0 : G.direction)
        }
        : A.utils.snap(x.snapTo),
        On = x.duration || {
            min: .1,
            max: 2
        },
        On = Ci(On) ? Ys(On.min, On.max) : Ys(On, On),
        Rn = A.delayedCall(x.delay || gi / 2 || .1, function() {
            var M = pe()
              , G = _t() - Re < 500
              , U = Ct.tween;
            if ((G || Math.abs(S.getVelocity()) < 10) && !U && !Iu && ae !== M) {
                var Y = (M - se) / Fe, Ke = i && !I ? i.totalProgress() : Y, te = G ? 0 : (Ke - mi) / (_t() - Cs) * 1e3 || 0, ze = A.utils.clamp(-Y, 1 - Y, lo(te / 2) * te / .185), ft = Y + (x.inertia === !1 ? 0 : ze), Ne, ve, ce = x, Mn = ce.onStart, Se = ce.onInterrupt, Jt = ce.onComplete;
                if (Ne = br(ft, S),
                Es(Ne) || (Ne = ft),
                ve = Math.round(se + Ne * Fe),
                M <= De && M >= se && ve !== M) {
                    if (U && !U._initted && U.data <= lo(ve - M))
                        return;
                    x.inertia === !1 && (ze = Ne - Y),
                    Ct(ve, {
                        duration: On(lo(Math.max(lo(ft - Ke), lo(Ne - Ke)) * .185 / te / .05 || 0)),
                        ease: x.ease || "power3",
                        data: lo(ve - M),
                        onInterrupt: function() {
                            return Rn.restart(!0) && Se && Se(S)
                        },
                        onComplete: function() {
                            S.update(),
                            ae = pe(),
                            i && (Z ? Z.resetTo("totalProgress", Ne, i._tTime / i._tDur) : i.progress(Ne)),
                            Rr = mi = i && !I ? i.totalProgress() : S.progress,
                            m && m(S),
                            Jt && Jt(S)
                        }
                    }, M, ze * Fe, ve - M - ze * Fe),
                    Mn && Mn(S, Ct.tween)
                }
            } else
                S.isActive && ae !== M && Rn.restart(!0)
        }).pause()),
        a && (Xd[a] = S),
        h = S.trigger = Wt(h || p !== !0 && p),
        ar = h && h._gsap && h._gsap.stRevert,
        ar && (ar = ar(S)),
        p = p === !0 ? h : Wt(p),
        nn(l) && (l = {
            targets: h,
            className: l
        }),
        p && (_ === !1 || _ === _n || (_ = !_ && p.parentNode && p.parentNode.style && xn(p.parentNode).display === "flex" ? !1 : Ue),
        S.pin = p,
        dt = A.core.getCache(p),
        dt.spacer ? Nr = dt.pinState : (C && (C = Wt(C),
        C && !C.nodeType && (C = C.current || C.nativeElement),
        dt.spacerIsNative = !!C,
        C && (dt.spacerState = ua(C))),
        dt.spacer = qe = C || ke.createElement("div"),
        qe.classList.add("pin-spacer"),
        a && qe.classList.add("pin-spacer-" + a),
        dt.pinState = Nr = ua(p)),
        r.force3D !== !1 && A.set(p, {
            force3D: !0
        }),
        S.spacer = qe = dt.spacer,
        ro = xn(p),
        rs = ro[_ + E.os2],
        Me = A.getProperty(p),
        Pn = A.quickSetter(p, E.a, He),
        bc(p, qe, ro),
        to = ua(p)),
        P) {
            sr = Ci(P) ? om(P, sm) : sm,
            b = aa("scroller-start", a, R, E, sr, 0),
            Zt = aa("scroller-end", a, R, E, sr, 0, b),
            Pr = b["offset" + E.op.d2];
            var is = Wt(ii(R, "content") || R);
            Ft = this.markerStart = aa("start", a, is, E, sr, Pr, 0, T),
            Kt = this.markerEnd = aa("end", a, is, E, sr, Pr, 0, T),
            T && (io = A.quickSetter([Ft, Kt], E.a, He)),
            !q && !(ir.length && ii(R, "fixedMarkers") === !0) && (_S(H ? ge : R),
            A.set([b, Zt], {
                force3D: !0
            }),
            Dl = A.quickSetter(b, E.a, He),
            no = A.quickSetter(Zt, E.a, He))
        }
        if (T) {
            var X = T.vars.onUpdate
              , $ = T.vars.onUpdateParams;
            T.eventCallback("onUpdate", function() {
                S.update(0, 0, 1),
                X && X.apply(T, $ || [])
            })
        }
        if (S.previous = function() {
            return K[K.indexOf(S) - 1]
        }
        ,
        S.next = function() {
            return K[K.indexOf(S) + 1]
        }
        ,
        S.revert = function(M, G) {
            if (!G)
                return S.kill(!0);
            var U = M !== !1 || !S.enabled
              , Y = yt;
            U !== S.isReverted && (U && (Dn = Math.max(pe(), S.scroll.rec || 0),
            we = S.progress,
            yi = i && i.progress()),
            Ft && [Ft, Kt, b, Zt].forEach(function(Ke) {
                return Ke.style.display = U ? "none" : "block"
            }),
            U && (yt = S,
            S.update(U)),
            p && (!k || !S.isActive) && (U ? TS(p, qe, Nr) : bc(p, qe, xn(p), We)),
            U || S.update(U),
            yt = Y,
            S.isReverted = U)
        }
        ,
        S.refresh = function(M, G, U, Y) {
            if (!((yt || !S.enabled) && !G)) {
                if (p && M && Cn) {
                    Je(t, "scrollEnd", a0);
                    return
                }
                !Rt && W && W(S),
                yt = S,
                Ct.tween && !U && (Ct.tween.kill(),
                Ct.tween = 0),
                Z && Z.pause(),
                g && i && i.revert({
                    kill: !1
                }).invalidate(),
                S.isReverted || S.revert(!0, !0),
                S._subPinOffset = !1;
                var Ke = ie(), te = ct(), ze = T ? T.duration() : er(R, E), ft = Fe <= .01, Ne = 0, ve = Y || 0, ce = Ci(U) ? U.end : r.end, Mn = r.endTrigger || h, Se = Ci(U) ? U.start : r.start || (r.start === 0 || !h ? 0 : p ? "0 0" : "0 100%"), Jt = S.pinnedContainer = r.pinnedContainer && Wt(r.pinnedContainer, S), Vn = h && Math.max(0, K.indexOf(S)) || 0, it = Vn, ot, ht, vi, Ml, pt, Ye, Yn, Fu, vh, os, Hn, ss, zl;
                for (P && Ci(U) && (ss = A.getProperty(b, E.p),
                zl = A.getProperty(Zt, E.p)); it--; )
                    Ye = K[it],
                    Ye.end || Ye.refresh(0, 1) || (yt = S),
                    Yn = Ye.pin,
                    Yn && (Yn === h || Yn === p || Yn === Jt) && !Ye.isReverted && (os || (os = []),
                    os.unshift(Ye),
                    Ye.revert(!0, !0)),
                    Ye !== K[it] && (Vn--,
                    it--);
                for (zt(Se) && (Se = Se(S)),
                Se = tm(Se, "start", S),
                se = cm(Se, h, Ke, E, pe(), Ft, b, S, te, z, q, ze, T, S._startClamp && "_startClamp") || (p ? -.001 : 0),
                zt(ce) && (ce = ce(S)),
                nn(ce) && !ce.indexOf("+=") && (~ce.indexOf(" ") ? ce = (nn(Se) ? Se.split(" ")[0] : "") + ce : (Ne = Na(ce.substr(2), Ke),
                ce = nn(Se) ? Se : (T ? A.utils.mapRange(0, T.duration(), T.scrollTrigger.start, T.scrollTrigger.end, se) : se) + Ne,
                Mn = h)),
                ce = tm(ce, "end", S),
                De = Math.max(se, cm(ce || (Mn ? "100% 0" : ze), Mn, Ke, E, pe() + Ne, Kt, Zt, S, te, z, q, ze, T, S._endClamp && "_endClamp")) || -.001,
                Ne = 0,
                it = Vn; it--; )
                    Ye = K[it],
                    Yn = Ye.pin,
                    Yn && Ye.start - Ye._pinPush <= se && !T && Ye.end > 0 && (ot = Ye.end - (S._startClamp ? Math.max(0, Ye.start) : Ye.start),
                    (Yn === h && Ye.start - Ye._pinPush < se || Yn === Jt) && isNaN(Se) && (Ne += ot * (1 - Ye.progress)),
                    Yn === p && (ve += ot));
                if (se += Ne,
                De += Ne,
                S._startClamp && (S._startClamp += Ne),
                S._endClamp && !Rt && (S._endClamp = De || -.001,
                De = Math.min(De, er(R, E))),
                Fe = De - se || (se -= .01) && .001,
                ft && (we = A.utils.clamp(0, 1, A.utils.normalize(se, De, Dn))),
                S._pinPush = ve,
                Ft && Ne && (ot = {},
                ot[E.a] = "+=" + Ne,
                Jt && (ot[E.p] = "-=" + pe()),
                A.set([Ft, Kt], ot)),
                p && !(Hd && S.end >= er(R, E)))
                    ot = xn(p),
                    Ml = E === Ge,
                    vi = pe(),
                    mn = parseFloat(Me(E.a)) + ve,
                    !ze && De > 1 && (Hn = (H ? ke.scrollingElement || Wn : R).style,
                    Hn = {
                        style: Hn,
                        value: Hn["overflow" + E.a.toUpperCase()]
                    },
                    H && xn(ge)["overflow" + E.a.toUpperCase()] !== "scroll" && (Hn.style["overflow" + E.a.toUpperCase()] = "scroll")),
                    bc(p, qe, ot),
                    to = ua(p),
                    ht = pr(p, !0),
                    Fu = q && ui(R, Ml ? Mt : Ge)(),
                    _ ? (We = [_ + E.os2, Fe + ve + He],
                    We.t = qe,
                    it = _ === Ue ? gu(p, E) + Fe + ve : 0,
                    it && (We.push(E.d, it + He),
                    qe.style.flexBasis !== "auto" && (qe.style.flexBasis = it + He)),
                    Fo(We),
                    Jt && K.forEach(function(ls) {
                        ls.pin === Jt && ls.vars.pinSpacing !== !1 && (ls._subPinOffset = !0)
                    }),
                    q && pe(Dn)) : (it = gu(p, E),
                    it && qe.style.flexBasis !== "auto" && (qe.style.flexBasis = it + He)),
                    q && (pt = {
                        top: ht.top + (Ml ? vi - se : Fu) + He,
                        left: ht.left + (Ml ? Fu : vi - se) + He,
                        boxSizing: "border-box",
                        position: "fixed"
                    },
                    pt[Ai] = pt["max" + Zo] = Math.ceil(ht.width) + He,
                    pt[Ii] = pt["max" + ph] = Math.ceil(ht.height) + He,
                    pt[_n] = pt[_n + Gs] = pt[_n + Hs] = pt[_n + Qs] = pt[_n + Xs] = "0",
                    pt[Ue] = ot[Ue],
                    pt[Ue + Gs] = ot[Ue + Gs],
                    pt[Ue + Hs] = ot[Ue + Hs],
                    pt[Ue + Qs] = ot[Ue + Qs],
                    pt[Ue + Xs] = ot[Ue + Xs],
                    pi = jS(Nr, pt, k),
                    Rt && pe(0)),
                    i ? (vh = i._initted,
                    Sc(1),
                    i.render(i.duration(), !0, !0),
                    lr = Me(E.a) - mn + Fe + ve,
                    Or = Math.abs(Fe - lr) > 1,
                    q && Or && pi.splice(pi.length - 2, 2),
                    i.render(0, !0, !0),
                    vh || i.invalidate(!0),
                    i.parent || i.totalTime(i.totalTime()),
                    Sc(0)) : lr = Fe,
                    Hn && (Hn.value ? Hn.style["overflow" + E.a.toUpperCase()] = Hn.value : Hn.style.removeProperty("overflow-" + E.a));
                else if (h && pe() && !T)
                    for (ht = h.parentNode; ht && ht !== ge; )
                        ht._pinOffset && (se -= ht._pinOffset,
                        De -= ht._pinOffset),
                        ht = ht.parentNode;
                os && os.forEach(function(ls) {
                    return ls.revert(!1, !0)
                }),
                S.start = se,
                S.end = De,
                jt = Nn = Rt ? Dn : pe(),
                !T && !Rt && (jt < Dn && pe(Dn),
                S.scroll.rec = 0),
                S.revert(!1, !0),
                Re = _t(),
                Rn && (ae = -1,
                Rn.restart(!0)),
                yt = 0,
                i && I && (i._initted || yi) && i.progress() !== yi && i.progress(yi || 0, !0).render(i.time(), !0, !0),
                (ft || we !== S.progress || T || g) && (i && !I && i.totalProgress(T && se < -.001 && !we ? A.utils.normalize(se, De, 0) : we, !0),
                S.progress = ft || (jt - se) / Fe === we ? 0 : we),
                p && _ && (qe._pinOffset = Math.round(S.progress * lr)),
                Z && Z.invalidate(),
                isNaN(ss) || (ss -= A.getProperty(b, E.p),
                zl -= A.getProperty(Zt, E.p),
                ca(b, E, ss),
                ca(Ft, E, ss - (Y || 0)),
                ca(Zt, E, zl),
                ca(Kt, E, zl - (Y || 0))),
                ft && !Rt && S.update(),
                d && !Rt && !Er && (Er = !0,
                d(S),
                Er = !1)
            }
        }
        ,
        S.getVelocity = function() {
            return (pe() - Nn) / (_t() - Cs) * 1e3 || 0
        }
        ,
        S.endAnimation = function() {
            vs(S.callbackAnimation),
            i && (Z ? Z.progress(1) : i.paused() ? I || vs(i, S.direction < 0, 1) : vs(i, i.reversed()))
        }
        ,
        S.labelToScroll = function(M) {
            return i && i.labels && (se || S.refresh() || se) + i.labels[M] / i.duration() * Fe || 0
        }
        ,
        S.getTrailing = function(M) {
            var G = K.indexOf(S)
              , U = S.direction > 0 ? K.slice(0, G).reverse() : K.slice(G + 1);
            return (nn(M) ? U.filter(function(Y) {
                return Y.vars.preventOverlaps === M
            }) : U).filter(function(Y) {
                return S.direction > 0 ? Y.end <= se : Y.start >= De
            })
        }
        ,
        S.update = function(M, G, U) {
            if (!(T && !U && !M)) {
                var Y = Rt === !0 ? Dn : S.scroll(), Ke = M ? 0 : (Y - se) / Fe, te = Ke < 0 ? 0 : Ke > 1 ? 1 : Ke || 0, ze = S.progress, ft, Ne, ve, ce, Mn, Se, Jt, Vn;
                if (G && (Nn = jt,
                jt = T ? pe() : Y,
                x && (mi = Rr,
                Rr = i && !I ? i.totalProgress() : te)),
                w && p && !yt && !ra && Cn && (!te && se < Y + (Y - Nn) / (_t() - Cs) * w ? te = 1e-4 : te === 1 && De > Y + (Y - Nn) / (_t() - Cs) * w && (te = .9999)),
                te !== ze && S.enabled) {
                    if (ft = S.isActive = !!te && te < 1,
                    Ne = !!ze && ze < 1,
                    Se = ft !== Ne,
                    Mn = Se || !!te != !!ze,
                    S.direction = te > ze ? 1 : -1,
                    S.progress = te,
                    Mn && !yt && (ve = te && !ze ? 0 : te === 1 ? 1 : ze === 1 ? 2 : 3,
                    I && (ce = !Se && F[ve + 1] !== "none" && F[ve + 1] || F[ve],
                    Vn = i && (ce === "complete" || ce === "reset" || ce in i))),
                    N && (Se || Vn) && (Vn || f || !i) && (zt(N) ? N(S) : S.getTrailing(N).forEach(function(vi) {
                        return vi.endAnimation()
                    })),
                    I || (Z && !yt && !ra ? (Z._dp._time - Z._start !== Z._time && Z.render(Z._dp._time - Z._start),
                    Z.resetTo ? Z.resetTo("totalProgress", te, i._tTime / i._tDur) : (Z.vars.totalProgress = te,
                    Z.invalidate().restart())) : i && i.totalProgress(te, !!(yt && (Re || M)))),
                    p) {
                        if (M && _ && (qe.style[_ + E.os2] = rs),
                        !q)
                            Pn(bs(mn + lr * te));
                        else if (Mn) {
                            if (Jt = !M && te > ze && De + 1 > Y && Y + 1 >= er(R, E),
                            k)
                                if (!M && (ft || Jt)) {
                                    var it = pr(p, !0)
                                      , ot = Y - se;
                                    dm(p, ge, it.top + (E === Ge ? ot : 0) + He, it.left + (E === Ge ? 0 : ot) + He)
                                } else
                                    dm(p, qe);
                            Fo(ft || Jt ? pi : to),
                            Or && te < 1 && ft || Pn(mn + (te === 1 && !Jt ? lr : 0))
                        }
                    }
                    x && !Ct.tween && !yt && !ra && Rn.restart(!0),
                    l && (Se || v && te && (te < 1 || !kc)) && kl(l.targets).forEach(function(vi) {
                        return vi.classList[ft || v ? "add" : "remove"](l.className)
                    }),
                    s && !I && !M && s(S),
                    Mn && !yt ? (I && (Vn && (ce === "complete" ? i.pause().totalProgress(1) : ce === "reset" ? i.restart(!0).pause() : ce === "restart" ? i.restart(!0) : i[ce]()),
                    s && s(S)),
                    (Se || !kc) && (u && Se && Cc(S, u),
                    B[ve] && Cc(S, B[ve]),
                    v && (te === 1 ? S.kill(!1, 1) : B[ve] = 0),
                    Se || (ve = te === 1 ? 1 : 3,
                    B[ve] && Cc(S, B[ve]))),
                    j && !ft && Math.abs(S.getVelocity()) > (Es(j) ? j : 2500) && (vs(S.callbackAnimation),
                    Z ? Z.progress(1) : vs(i, ce === "reverse" ? 1 : !te, 1))) : I && s && !yt && s(S)
                }
                if (no) {
                    var ht = T ? Y / T.duration() * (T._caScrollDist || 0) : Y;
                    Dl(ht + (b._isFlipped ? 1 : 0)),
                    no(ht)
                }
                io && io(-Y / T.duration() * (T._caScrollDist || 0))
            }
        }
        ,
        S.enable = function(M, G) {
            S.enabled || (S.enabled = !0,
            Je(R, "resize", Ns),
            H || Je(R, "scroll", ao),
            W && Je(t, "refreshInit", W),
            M !== !1 && (S.progress = we = 0,
            jt = Nn = ae = pe()),
            G !== !1 && S.refresh())
        }
        ,
        S.getTween = function(M) {
            return M && Ct ? Ct.tween : Z
        }
        ,
        S.setPositions = function(M, G, U, Y) {
            if (T) {
                var Ke = T.scrollTrigger
                  , te = T.duration()
                  , ze = Ke.end - Ke.start;
                M = Ke.start + ze * M / te,
                G = Ke.start + ze * G / te
            }
            S.refresh(!1, !1, {
                start: nm(M, U && !!S._startClamp),
                end: nm(G, U && !!S._endClamp)
            }, Y),
            S.update()
        }
        ,
        S.adjustPinSpacing = function(M) {
            if (We && M) {
                var G = We.indexOf(E.d) + 1;
                We[G] = parseFloat(We[G]) + M + He,
                We[1] = parseFloat(We[1]) + M + He,
                Fo(We)
            }
        }
        ,
        S.disable = function(M, G) {
            if (S.enabled && (M !== !1 && S.revert(!0, !0),
            S.enabled = S.isActive = !1,
            G || Z && Z.pause(),
            Dn = 0,
            dt && (dt.uncache = 1),
            W && Ze(t, "refreshInit", W),
            Rn && (Rn.pause(),
            Ct.tween && Ct.tween.kill() && (Ct.tween = 0)),
            !H)) {
                for (var U = K.length; U--; )
                    if (K[U].scroller === R && K[U] !== S)
                        return;
                Ze(R, "resize", Ns),
                H || Ze(R, "scroll", ao)
            }
        }
        ,
        S.kill = function(M, G) {
            S.disable(M, G),
            Z && !G && Z.kill(),
            a && delete Xd[a];
            var U = K.indexOf(S);
            U >= 0 && K.splice(U, 1),
            U === Ot && Oa > 0 && Ot--,
            U = 0,
            K.forEach(function(Y) {
                return Y.scroller === S.scroller && (U = 1)
            }),
            U || Rt || (S.scroll.rec = 0),
            i && (i.scrollTrigger = null,
            M && i.revert({
                kill: !1
            }),
            G || i.kill()),
            Ft && [Ft, Kt, b, Zt].forEach(function(Y) {
                return Y.parentNode && Y.parentNode.removeChild(Y)
            }),
            qs === S && (qs = 0),
            p && (dt && (dt.uncache = 1),
            U = 0,
            K.forEach(function(Y) {
                return Y.pin === p && U++
            }),
            U || (dt.spacer = 0)),
            r.onKill && r.onKill(S)
        }
        ,
        K.push(S),
        S.enable(!1, !1),
        ar && ar(S),
        i && i.add && !Fe) {
            var le = S.update;
            S.update = function() {
                S.update = le,
                se || De || S.refresh()
            }
            ,
            A.delayedCall(.01, S.update),
            Fe = .01,
            se = De = 0
        } else
            S.refresh();
        p && kS()
    }
    ,
    t.register = function(r) {
        return uo || (A = r || n0(),
        t0() && window.document && t.enable(),
        uo = js),
        uo
    }
    ,
    t.defaults = function(r) {
        if (r)
            for (var i in r)
                la[i] = r[i];
        return la
    }
    ,
    t.disable = function(r, i) {
        js = 0,
        K.forEach(function(s) {
            return s[i ? "kill" : "disable"](r)
        }),
        Ze(ne, "wheel", ao),
        Ze(ke, "scroll", ao),
        clearInterval(na),
        Ze(ke, "touchcancel", qn),
        Ze(ge, "touchstart", qn),
        oa(Ze, ke, "pointerdown,touchstart,mousedown", rm),
        oa(Ze, ke, "pointerup,touchend,mouseup", im),
        pu.kill(),
        ia(Ze);
        for (var o = 0; o < J.length; o += 3)
            sa(Ze, J[o], J[o + 1]),
            sa(Ze, J[o], J[o + 2])
    }
    ,
    t.enable = function() {
        if (ne = window,
        ke = document,
        Wn = ke.documentElement,
        ge = ke.body,
        A && (kl = A.utils.toArray,
        Ys = A.utils.clamp,
        Yd = A.core.context || qn,
        Sc = A.core.suppressOverwrites || qn,
        ch = ne.history.scrollRestoration || "auto",
        Gd = ne.pageYOffset,
        A.core.globals("ScrollTrigger", t),
        ge)) {
            js = 1,
            Io = document.createElement("div"),
            Io.style.height = "100vh",
            Io.style.position = "absolute",
            d0(),
            gS(),
            Ie.register(A),
            t.isTouch = Ie.isTouch,
            Mr = Ie.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            Vd = Ie.isTouch === 1,
            Je(ne, "wheel", ao),
            qv = [ne, ke, Wn, ge],
            A.matchMedia ? (t.matchMedia = function(a) {
                var u = A.matchMedia(), d;
                for (d in a)
                    u.add(d, a[d]);
                return u
            }
            ,
            A.addEventListener("matchMediaInit", function() {
                return gh()
            }),
            A.addEventListener("matchMediaRevert", function() {
                return u0()
            }),
            A.addEventListener("matchMedia", function() {
                Pi(0, 1),
                Qi("matchMedia")
            }),
            A.matchMedia("(orientation: portrait)", function() {
                return jc(),
                jc
            })) : console.warn("Requires GSAP 3.11.0 or later"),
            jc(),
            Je(ke, "scroll", ao);
            var r = ge.style, i = r.borderTopStyle, o = A.core.Animation.prototype, s, l;
            for (o.revert || Object.defineProperty(o, "revert", {
                value: function() {
                    return this.time(-.01, !0)
                }
            }),
            r.borderTopStyle = "solid",
            s = pr(ge),
            Ge.m = Math.round(s.top + Ge.sc()) || 0,
            Mt.m = Math.round(s.left + Mt.sc()) || 0,
            i ? r.borderTopStyle = i : r.removeProperty("border-top-style"),
            na = setInterval(lm, 250),
            A.delayedCall(.5, function() {
                return ra = 0
            }),
            Je(ke, "touchcancel", qn),
            Je(ge, "touchstart", qn),
            oa(Je, ke, "pointerdown,touchstart,mousedown", rm),
            oa(Je, ke, "pointerup,touchend,mouseup", im),
            $d = A.utils.checkPrefix("transform"),
            Ra.push($d),
            uo = _t(),
            pu = A.delayedCall(.2, Pi).pause(),
            co = [ke, "visibilitychange", function() {
                var a = ne.innerWidth
                  , u = ne.innerHeight;
                ke.hidden ? (Jp = a,
                em = u) : (Jp !== a || em !== u) && Ns()
            }
            , ke, "DOMContentLoaded", Pi, ne, "load", Pi, ne, "resize", Ns],
            ia(Je),
            K.forEach(function(a) {
                return a.enable(0, 1)
            }),
            l = 0; l < J.length; l += 3)
                sa(Ze, J[l], J[l + 1]),
                sa(Ze, J[l], J[l + 2])
        }
    }
    ,
    t.config = function(r) {
        "limitCallbacks"in r && (kc = !!r.limitCallbacks);
        var i = r.syncInterval;
        i && clearInterval(na) || (na = i) && setInterval(lm, i),
        "ignoreMobileResize"in r && (Vd = t.isTouch === 1 && r.ignoreMobileResize),
        "autoRefreshEvents"in r && (ia(Ze) || ia(Je, r.autoRefreshEvents || "none"),
        Zv = (r.autoRefreshEvents + "").indexOf("resize") === -1)
    }
    ,
    t.scrollerProxy = function(r, i) {
        var o = Wt(r)
          , s = J.indexOf(o)
          , l = Xi(o);
        ~s && J.splice(s, l ? 6 : 2),
        i && (l ? ir.unshift(ne, i, ge, i, Wn, i) : ir.unshift(o, i))
    }
    ,
    t.clearMatchMedia = function(r) {
        K.forEach(function(i) {
            return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0)
        })
    }
    ,
    t.isInViewport = function(r, i, o) {
        var s = (nn(r) ? Wt(r) : r).getBoundingClientRect()
          , l = s[o ? Ai : Ii] * i || 0;
        return o ? s.right - l > 0 && s.left + l < ne.innerWidth : s.bottom - l > 0 && s.top + l < ne.innerHeight
    }
    ,
    t.positionInViewport = function(r, i, o) {
        nn(r) && (r = Wt(r));
        var s = r.getBoundingClientRect()
          , l = s[o ? Ai : Ii]
          , a = i == null ? l / 2 : i in yu ? yu[i] * l : ~i.indexOf("%") ? parseFloat(i) * l / 100 : parseFloat(i) || 0;
        return o ? (s.left + a) / ne.innerWidth : (s.top + a) / ne.innerHeight
    }
    ,
    t.killAll = function(r) {
        if (K.slice(0).forEach(function(o) {
            return o.vars.id !== "ScrollSmoother" && o.kill()
        }),
        r !== !0) {
            var i = Gi.killAll || [];
            Gi = {},
            i.forEach(function(o) {
                return o()
            })
        }
    }
    ,
    t
}();
Q.version = "3.12.5";
Q.saveStyles = function(t) {
    return t ? kl(t).forEach(function(e) {
        if (e && e.style) {
            var n = en.indexOf(e);
            n >= 0 && en.splice(n, 5),
            en.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), A.core.getCache(e), Yd())
        }
    }) : en
}
;
Q.revert = function(t, e) {
    return gh(!t, e)
}
;
Q.create = function(t, e) {
    return new Q(t,e)
}
;
Q.refresh = function(t) {
    return t ? Ns() : (uo || Q.register()) && Pi(!0)
}
;
Q.update = function(t) {
    return ++J.cache && _r(t === !0 ? 2 : 0)
}
;
Q.clearScrollMemory = c0;
Q.maxScroll = function(t, e) {
    return er(t, e ? Mt : Ge)
}
;
Q.getScrollFunc = function(t, e) {
    return ui(Wt(t), e ? Mt : Ge)
}
;
Q.getById = function(t) {
    return Xd[t]
}
;
Q.getAll = function() {
    return K.filter(function(t) {
        return t.vars.id !== "ScrollSmoother"
    })
}
;
Q.isScrolling = function() {
    return !!Cn
}
;
Q.snapDirectional = mh;
Q.addEventListener = function(t, e) {
    var n = Gi[t] || (Gi[t] = []);
    ~n.indexOf(e) || n.push(e)
}
;
Q.removeEventListener = function(t, e) {
    var n = Gi[t]
      , r = n && n.indexOf(e);
    r >= 0 && n.splice(r, 1)
}
;
Q.batch = function(t, e) {
    var n = [], r = {}, i = e.interval || .016, o = e.batchMax || 1e9, s = function(u, d) {
        var f = []
          , h = []
          , p = A.delayedCall(i, function() {
            d(f, h),
            f = [],
            h = []
        }).pause();
        return function(_) {
            f.length || p.restart(!0),
            f.push(_.trigger),
            h.push(_),
            o <= f.length && p.progress(1)
        }
    }, l;
    for (l in e)
        r[l] = l.substr(0, 2) === "on" && zt(e[l]) && l !== "onRefreshInit" ? s(l, e[l]) : e[l];
    return zt(o) && (o = o(),
    Je(Q, "refresh", function() {
        return o = e.batchMax()
    })),
    kl(t).forEach(function(a) {
        var u = {};
        for (l in r)
            u[l] = r[l];
        u.trigger = a,
        n.push(Q.create(u))
    }),
    n
}
;
var hm = function(e, n, r, i) {
    return n > i ? e(i) : n < 0 && e(0),
    r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
}, Ec = function t(e, n) {
    n === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = n === !0 ? "auto" : n ? "pan-" + n + (Ie.isTouch ? " pinch-zoom" : "") : "none",
    e === Wn && t(ge, n)
}, da = {
    auto: 1,
    scroll: 1
}, ES = function(e) {
    var n = e.event, r = e.target, i = e.axis, o = (n.changedTouches ? n.changedTouches[0] : n).target, s = o._gsap || A.core.getCache(o), l = _t(), a;
    if (!s._isScrollT || l - s._isScrollT > 2e3) {
        for (; o && o !== ge && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !(da[(a = xn(o)).overflowY] || da[a.overflowX])); )
            o = o.parentNode;
        s._isScroll = o && o !== r && !Xi(o) && (da[(a = xn(o)).overflowY] || da[a.overflowX]),
        s._isScrollT = l
    }
    (s._isScroll || i === "x") && (n.stopPropagation(),
    n._gsapAllow = !0)
}, h0 = function(e, n, r, i) {
    return Ie.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: n,
        onWheel: i = i && ES,
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: function() {
            return r && Je(ke, Ie.eventTypes[0], mm, !1, !0)
        },
        onDisable: function() {
            return Ze(ke, Ie.eventTypes[0], mm, !0)
        }
    })
}, NS = /(input|label|select|textarea)/i, pm, mm = function(e) {
    var n = NS.test(e.target.tagName);
    (n || pm) && (e._gsapAllow = !0,
    pm = n)
}, PS = function(e) {
    Ci(e) || (e = {}),
    e.preventDefault = e.isNormalizer = e.allowClicks = !0,
    e.type || (e.type = "wheel,touch"),
    e.debounce = !!e.debounce,
    e.id = e.id || "normalizer";
    var n = e, r = n.normalizeScrollX, i = n.momentum, o = n.allowNestedScroll, s = n.onRelease, l, a, u = Wt(e.target) || Wn, d = A.core.globals().ScrollSmoother, f = d && d.get(), h = Mr && (e.content && Wt(e.content) || f && e.content !== !1 && !f.smooth() && f.content()), p = ui(u, Ge), _ = ui(u, Mt), g = 1, w = (Ie.isTouch && ne.visualViewport ? ne.visualViewport.scale * ne.visualViewport.width : ne.outerWidth) / ne.innerWidth, y = 0, m = zt(i) ? function() {
        return i(l)
    }
    : function() {
        return i || 2.8
    }
    , v, x, k = h0(u, e.type, !0, o), C = function() {
        return x = !1
    }, T = qn, j = qn, N = function() {
        a = er(u, Ge),
        j = Ys(Mr ? 1 : 0, a),
        r && (T = Ys(0, er(u, Mt))),
        v = Fi
    }, E = function() {
        h._gsap.y = bs(parseFloat(h._gsap.y) + p.offset) + "px",
        h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)",
        p.offset = p.cacheID = 0
    }, I = function() {
        if (x) {
            requestAnimationFrame(C);
            var P = bs(l.deltaY / 2)
              , z = j(p.v - P);
            if (h && z !== p.v + p.offset) {
                p.offset = z - p.v;
                var S = bs((parseFloat(h && h._gsap.y) || 0) - p.offset);
                h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + S + ", 0, 1)",
                h._gsap.y = S + "px",
                p.cacheID = J.cache,
                _r()
            }
            return !0
        }
        p.offset && E(),
        x = !0
    }, R, V, H, q, B = function() {
        N(),
        R.isActive() && R.vars.scrollY > a && (p() > a ? R.progress(1) && p(a) : R.resetTo("scrollY", a))
    };
    return h && A.set(h, {
        y: "+=0"
    }),
    e.ignoreCheck = function(F) {
        return Mr && F.type === "touchmove" && I() || g > 1.05 && F.type !== "touchstart" || l.isGesturing || F.touches && F.touches.length > 1
    }
    ,
    e.onPress = function() {
        x = !1;
        var F = g;
        g = bs((ne.visualViewport && ne.visualViewport.scale || 1) / w),
        R.pause(),
        F !== g && Ec(u, g > 1.01 ? !0 : r ? !1 : "x"),
        V = _(),
        H = p(),
        N(),
        v = Fi
    }
    ,
    e.onRelease = e.onGestureStart = function(F, P) {
        if (p.offset && E(),
        !P)
            q.restart(!0);
        else {
            J.cache++;
            var z = m(), S, W;
            r && (S = _(),
            W = S + z * .05 * -F.velocityX / .227,
            z *= hm(_, S, W, er(u, Mt)),
            R.vars.scrollX = T(W)),
            S = p(),
            W = S + z * .05 * -F.velocityY / .227,
            z *= hm(p, S, W, er(u, Ge)),
            R.vars.scrollY = j(W),
            R.invalidate().duration(z).play(.01),
            (Mr && R.vars.scrollY >= a || S >= a - 1) && A.to({}, {
                onUpdate: B,
                duration: z
            })
        }
        s && s(F)
    }
    ,
    e.onWheel = function() {
        R._ts && R.pause(),
        _t() - y > 1e3 && (v = 0,
        y = _t())
    }
    ,
    e.onChange = function(F, P, z, S, W) {
        if (Fi !== v && N(),
        P && r && _(T(S[2] === P ? V + (F.startX - F.x) : _() + P - S[1])),
        z) {
            p.offset && E();
            var ie = W[2] === z
              , ct = ie ? H + F.startY - F.y : p() + z - W[1]
              , ae = j(ct);
            ie && ct !== ae && (H += ae - ct),
            p(ae)
        }
        (z || P) && _r()
    }
    ,
    e.onEnable = function() {
        Ec(u, r ? !1 : "x"),
        Q.addEventListener("refresh", B),
        Je(ne, "resize", B),
        p.smooth && (p.target.style.scrollBehavior = "auto",
        p.smooth = _.smooth = !1),
        k.enable()
    }
    ,
    e.onDisable = function() {
        Ec(u, !0),
        Ze(ne, "resize", B),
        Q.removeEventListener("refresh", B),
        k.kill()
    }
    ,
    e.lockAxis = e.lockAxis !== !1,
    l = new Ie(e),
    l.iOS = Mr,
    Mr && !p() && p(1),
    Mr && A.ticker.add(qn),
    q = l._dc,
    R = A.to(l, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: r ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
            scrollY: f0(p, p(), function() {
                return R.pause()
            })
        },
        onUpdate: _r,
        onComplete: q.vars.onComplete
    }),
    l
};
Q.sort = function(t) {
    return K.sort(t || function(e, n) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (n.start + (n.vars.refreshPriority || 0) * -1e6)
    }
    )
}
;
Q.observe = function(t) {
    return new Ie(t)
}
;
Q.normalizeScroll = function(t) {
    if (typeof t > "u")
        return Nt;
    if (t === !0 && Nt)
        return Nt.enable();
    if (t === !1) {
        Nt && Nt.kill(),
        Nt = t;
        return
    }
    var e = t instanceof Ie ? t : PS(t);
    return Nt && Nt.target === e.target && Nt.kill(),
    Xi(e.target) && (Nt = e),
    e
}
;
Q.core = {
    _getVelocityProp: Bd,
    _inputObserver: h0,
    _scrollers: J,
    _proxies: ir,
    bridge: {
        ss: function() {
            Cn || Qi("scrollStart"),
            Cn = _t()
        },
        ref: function() {
            return yt
        }
    }
};
n0() && A.registerPlugin(Q);
function p0(t, e, n) {
    return Math.max(t, Math.min(e, n))
}
class OS {
    advance(e) {
        var r;
        if (!this.isRunning)
            return;
        let n = !1;
        if (this.lerp)
            this.value = function(o, s, l, a) {
                return function(d, f, h) {
                    return (1 - h) * d + h * f
                }(o, s, 1 - Math.exp(-l * a))
            }(this.value, this.to, 60 * this.lerp, e),
            Math.round(this.value) === this.to && (this.value = this.to,
            n = !0);
        else {
            this.currentTime += e;
            const i = p0(0, this.currentTime / this.duration, 1);
            n = i >= 1;
            const o = n ? 1 : this.easing(i);
            this.value = this.from + (this.to - this.from) * o
        }
        n && this.stop(),
        (r = this.onUpdate) == null || r.call(this, this.value, n)
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(e, n, {lerp: r=.1, duration: i=1, easing: o=a => a, onStart: s, onUpdate: l}) {
        this.from = this.value = e,
        this.to = n,
        this.lerp = r,
        this.duration = i,
        this.easing = o,
        this.currentTime = 0,
        this.isRunning = !0,
        s == null || s(),
        this.onUpdate = l
    }
}
class RS {
    constructor({wrapper: e, content: n, autoResize: r=!0, debounce: i=250}={}) {
        ur(this, "resize", () => {
            this.onWrapperResize(),
            this.onContentResize()
        }
        );
        ur(this, "onWrapperResize", () => {
            this.wrapper === window ? (this.width = window.innerWidth,
            this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth,
            this.height = this.wrapper.clientHeight)
        }
        );
        ur(this, "onContentResize", () => {
            this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight,
            this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight,
            this.scrollWidth = this.wrapper.scrollWidth)
        }
        );
        this.wrapper = e,
        this.content = n,
        r && (this.debouncedResize = function(s, l) {
            let a;
            return function() {
                let u = arguments
                  , d = this;
                clearTimeout(a),
                a = setTimeout(function() {
                    s.apply(d, u)
                }, l)
            }
        }(this.resize, i),
        this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize),
        this.wrapperResizeObserver.observe(this.wrapper)),
        this.contentResizeObserver = new ResizeObserver(this.debouncedResize),
        this.contentResizeObserver.observe(this.content)),
        this.resize()
    }
    destroy() {
        var e, n;
        (e = this.wrapperResizeObserver) == null || e.disconnect(),
        (n = this.contentResizeObserver) == null || n.disconnect(),
        window.removeEventListener("resize", this.debouncedResize, !1)
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        }
    }
}
class m0 {
    constructor() {
        this.events = {}
    }
    emit(e, ...n) {
        let r = this.events[e] || [];
        for (let i = 0, o = r.length; i < o; i++)
            r[i](...n)
    }
    on(e, n) {
        var r;
        return (r = this.events[e]) != null && r.push(n) || (this.events[e] = [n]),
        () => {
            var i;
            this.events[e] = (i = this.events[e]) == null ? void 0 : i.filter(o => n !== o)
        }
    }
    off(e, n) {
        var r;
        this.events[e] = (r = this.events[e]) == null ? void 0 : r.filter(i => n !== i)
    }
    destroy() {
        this.events = {}
    }
}
const gm = 100 / 6;
class DS {
    constructor(e, {wheelMultiplier: n=1, touchMultiplier: r=1}) {
        ur(this, "onTouchStart", e => {
            const {clientX: n, clientY: r} = e.targetTouches ? e.targetTouches[0] : e;
            this.touchStart.x = n,
            this.touchStart.y = r,
            this.lastDelta = {
                x: 0,
                y: 0
            },
            this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: e
            })
        }
        );
        ur(this, "onTouchMove", e => {
            const {clientX: n, clientY: r} = e.targetTouches ? e.targetTouches[0] : e
              , i = -(n - this.touchStart.x) * this.touchMultiplier
              , o = -(r - this.touchStart.y) * this.touchMultiplier;
            this.touchStart.x = n,
            this.touchStart.y = r,
            this.lastDelta = {
                x: i,
                y: o
            },
            this.emitter.emit("scroll", {
                deltaX: i,
                deltaY: o,
                event: e
            })
        }
        );
        ur(this, "onTouchEnd", e => {
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: e
            })
        }
        );
        ur(this, "onWheel", e => {
            let {deltaX: n, deltaY: r, deltaMode: i} = e;
            n *= i === 1 ? gm : i === 2 ? this.windowWidth : 1,
            r *= i === 1 ? gm : i === 2 ? this.windowHeight : 1,
            n *= this.wheelMultiplier,
            r *= this.wheelMultiplier,
            this.emitter.emit("scroll", {
                deltaX: n,
                deltaY: r,
                event: e
            })
        }
        );
        ur(this, "onWindowResize", () => {
            this.windowWidth = window.innerWidth,
            this.windowHeight = window.innerHeight
        }
        );
        this.element = e,
        this.wheelMultiplier = n,
        this.touchMultiplier = r,
        this.touchStart = {
            x: null,
            y: null
        },
        this.emitter = new m0,
        window.addEventListener("resize", this.onWindowResize, !1),
        this.onWindowResize(),
        this.element.addEventListener("wheel", this.onWheel, {
            passive: !1
        }),
        this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }),
        this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }),
        this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
    on(e, n) {
        return this.emitter.on(e, n)
    }
    destroy() {
        this.emitter.destroy(),
        window.removeEventListener("resize", this.onWindowResize, !1),
        this.element.removeEventListener("wheel", this.onWheel, {
            passive: !1
        }),
        this.element.removeEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }),
        this.element.removeEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }),
        this.element.removeEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
}
class MS {
    constructor({wrapper: e=window, content: n=document.documentElement, wheelEventsTarget: r=e, eventsTarget: i=r, smoothWheel: o=!0, syncTouch: s=!1, syncTouchLerp: l=.075, touchInertiaMultiplier: a=35, duration: u, easing: d=x => Math.min(1, 1.001 - Math.pow(2, -10 * x)), lerp: f=!u && .1, infinite: h=!1, orientation: p="vertical", gestureOrientation: _="vertical", touchMultiplier: g=1, wheelMultiplier: w=1, autoResize: y=!0, prevent: m=!1, __experimental__naiveDimensions: v=!1}={}) {
        this.__isScrolling = !1,
        this.__isStopped = !1,
        this.__isLocked = !1,
        this.onVirtualScroll = ({deltaX: x, deltaY: k, event: C}) => {
            if (C.ctrlKey)
                return;
            const T = C.type.includes("touch")
              , j = C.type.includes("wheel");
            if (this.isTouching = C.type === "touchstart" || C.type === "touchmove",
            this.options.syncTouch && T && C.type === "touchstart" && !this.isStopped && !this.isLocked)
                return void this.reset();
            const N = x === 0 && k === 0
              , E = this.options.gestureOrientation === "vertical" && k === 0 || this.options.gestureOrientation === "horizontal" && x === 0;
            if (N || E)
                return;
            let I = C.composedPath();
            I = I.slice(0, I.indexOf(this.rootElement));
            const R = this.options.prevent;
            if (I.find(B => {
                var F, P, z, S, W;
                return (typeof R == "function" ? R == null ? void 0 : R(B) : R) || ((F = B.hasAttribute) === null || F === void 0 ? void 0 : F.call(B, "data-lenis-prevent")) || T && ((P = B.hasAttribute) === null || P === void 0 ? void 0 : P.call(B, "data-lenis-prevent-touch")) || j && ((z = B.hasAttribute) === null || z === void 0 ? void 0 : z.call(B, "data-lenis-prevent-wheel")) || ((S = B.classList) === null || S === void 0 ? void 0 : S.contains("lenis")) && !(!((W = B.classList) === null || W === void 0) && W.contains("lenis-stopped"))
            }
            ))
                return;
            if (this.isStopped || this.isLocked)
                return void C.preventDefault();
            if (!(this.options.syncTouch && T || this.options.smoothWheel && j))
                return this.isScrolling = "native",
                void this.animate.stop();
            C.preventDefault();
            let V = k;
            this.options.gestureOrientation === "both" ? V = Math.abs(k) > Math.abs(x) ? k : x : this.options.gestureOrientation === "horizontal" && (V = x);
            const H = T && this.options.syncTouch
              , q = T && C.type === "touchend" && Math.abs(V) > 5;
            q && (V = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(this.targetScroll + V, Object.assign({
                programmatic: !1
            }, H ? {
                lerp: q ? this.options.syncTouchLerp : 1
            } : {
                lerp: this.options.lerp,
                duration: this.options.duration,
                easing: this.options.easing
            }))
        }
        ,
        this.onNativeScroll = () => {
            if (clearTimeout(this.__resetVelocityTimeout),
            delete this.__resetVelocityTimeout,
            this.__preventNextNativeScrollEvent)
                delete this.__preventNextNativeScrollEvent;
            else if (this.isScrolling === !1 || this.isScrolling === "native") {
                const x = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll,
                this.lastVelocity = this.velocity,
                this.velocity = this.animatedScroll - x,
                this.direction = Math.sign(this.animatedScroll - x),
                this.isScrolling = !!this.hasScrolled && "native",
                this.emit(),
                this.velocity !== 0 && (this.__resetVelocityTimeout = setTimeout( () => {
                    this.lastVelocity = this.velocity,
                    this.velocity = 0,
                    this.isScrolling = !1,
                    this.emit()
                }
                , 400))
            }
        }
        ,
        window.lenisVersion = "1.1.1",
        e !== document.documentElement && e !== document.body || (e = window),
        this.options = {
            wrapper: e,
            content: n,
            wheelEventsTarget: r,
            eventsTarget: i,
            smoothWheel: o,
            syncTouch: s,
            syncTouchLerp: l,
            touchInertiaMultiplier: a,
            duration: u,
            easing: d,
            lerp: f,
            infinite: h,
            gestureOrientation: _,
            orientation: p,
            touchMultiplier: g,
            wheelMultiplier: w,
            autoResize: y,
            prevent: m,
            __experimental__naiveDimensions: v
        },
        this.animate = new OS,
        this.emitter = new m0,
        this.dimensions = new RS({
            wrapper: e,
            content: n,
            autoResize: y
        }),
        this.updateClassName(),
        this.userData = {},
        this.time = 0,
        this.velocity = this.lastVelocity = 0,
        this.isLocked = !1,
        this.isStopped = !1,
        this.isScrolling = !1,
        this.targetScroll = this.animatedScroll = this.actualScroll,
        this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
        this.virtualScroll = new DS(i,{
            touchMultiplier: g,
            wheelMultiplier: w
        }),
        this.virtualScroll.on("scroll", this.onVirtualScroll)
    }
    destroy() {
        this.emitter.destroy(),
        this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1),
        this.virtualScroll.destroy(),
        this.dimensions.destroy(),
        this.cleanUpClassName()
    }
    on(e, n) {
        return this.emitter.on(e, n)
    }
    off(e, n) {
        return this.emitter.off(e, n)
    }
    setScroll(e) {
        this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e
    }
    resize() {
        this.dimensions.resize()
    }
    emit({userData: e={}}={}) {
        this.userData = e,
        this.emitter.emit("scroll", this),
        this.userData = {}
    }
    reset() {
        this.isLocked = !1,
        this.isScrolling = !1,
        this.animatedScroll = this.targetScroll = this.actualScroll,
        this.lastVelocity = this.velocity = 0,
        this.animate.stop()
    }
    start() {
        this.isStopped && (this.isStopped = !1,
        this.reset())
    }
    stop() {
        this.isStopped || (this.isStopped = !0,
        this.animate.stop(),
        this.reset())
    }
    raf(e) {
        const n = e - (this.time || e);
        this.time = e,
        this.animate.advance(.001 * n)
    }
    scrollTo(e, {offset: n=0, immediate: r=!1, lock: i=!1, duration: o=this.options.duration, easing: s=this.options.easing, lerp: l=!o && this.options.lerp, onStart: a, onComplete: u, force: d=!1, programmatic: f=!0, userData: h={}}={}) {
        if (!this.isStopped && !this.isLocked || d) {
            if (["top", "left", "start"].includes(e))
                e = 0;
            else if (["bottom", "right", "end"].includes(e))
                e = this.limit;
            else {
                let p;
                if (typeof e == "string" ? p = document.querySelector(e) : e != null && e.nodeType && (p = e),
                p) {
                    if (this.options.wrapper !== window) {
                        const g = this.options.wrapper.getBoundingClientRect();
                        n -= this.isHorizontal ? g.left : g.top
                    }
                    const _ = p.getBoundingClientRect();
                    e = (this.isHorizontal ? _.left : _.top) + this.animatedScroll
                }
            }
            if (typeof e == "number") {
                if (e += n,
                e = Math.round(e),
                this.options.infinite ? f && (this.targetScroll = this.animatedScroll = this.scroll) : e = p0(0, e, this.limit),
                r)
                    return this.animatedScroll = this.targetScroll = e,
                    this.setScroll(this.scroll),
                    this.reset(),
                    void (u == null || u(this));
                e !== this.targetScroll && (f || (this.targetScroll = e),
                this.animate.fromTo(this.animatedScroll, e, {
                    duration: o,
                    easing: s,
                    lerp: l,
                    onStart: () => {
                        i && (this.isLocked = !0),
                        this.isScrolling = "smooth",
                        a == null || a(this)
                    }
                    ,
                    onUpdate: (p, _) => {
                        this.isScrolling = "smooth",
                        this.lastVelocity = this.velocity,
                        this.velocity = p - this.animatedScroll,
                        this.direction = Math.sign(this.velocity),
                        this.animatedScroll = p,
                        this.setScroll(this.scroll),
                        f && (this.targetScroll = p),
                        _ || this.emit({
                            userData: h
                        }),
                        _ && (this.reset(),
                        this.emit({
                            userData: h
                        }),
                        u == null || u(this),
                        this.__preventNextNativeScrollEvent = !0)
                    }
                }))
            }
        }
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper
    }
    get limit() {
        return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
    }
    get isHorizontal() {
        return this.options.orientation === "horizontal"
    }
    get actualScroll() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
    }
    get scroll() {
        return this.options.infinite ? function(n, r) {
            return (n % r + r) % r
        }(this.animatedScroll, this.limit) : this.animatedScroll
    }
    get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit
    }
    get isScrolling() {
        return this.__isScrolling
    }
    set isScrolling(e) {
        this.__isScrolling !== e && (this.__isScrolling = e,
        this.updateClassName())
    }
    get isStopped() {
        return this.__isStopped
    }
    set isStopped(e) {
        this.__isStopped !== e && (this.__isStopped = e,
        this.updateClassName())
    }
    get isLocked() {
        return this.__isLocked
    }
    set isLocked(e) {
        this.__isLocked !== e && (this.__isLocked = e,
        this.updateClassName())
    }
    get isSmooth() {
        return this.isScrolling === "smooth"
    }
    get className() {
        let e = "lenis";
        return this.isStopped && (e += " lenis-stopped"),
        this.isLocked && (e += " lenis-locked"),
        this.isScrolling && (e += " lenis-scrolling"),
        this.isScrolling === "smooth" && (e += " lenis-smooth"),
        e
    }
    updateClassName() {
        this.cleanUpClassName(),
        this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
    }
    cleanUpClassName() {
        this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim()
    }
}
const g0 = () => c.jsxs("footer", {
    className: "flex max-lg:flex-col justify-between max-w-[1400px] mx-auto px-5 w-full py-6 z-[2] relative",
    children: [c.jsxs("div", {
        className: "flex flex-1 gap-5 max-lg:flex-col",
        children: [c.jsx(Do, {
            className: "text-black hover:text-primary duration-300",
            to: "mailto:support@ovecare.com",
            children: "support@ovecare.com"
        }), c.jsx(Do, {
            className: "text-black hover:text-primary duration-300",
            to: "/terms-and-conditions",
            children: "Terms and Conditions"
        }), c.jsx(Do, {
            className: "text-black hover:text-primary duration-300",
            to: "/data-and-privacy-policy",
            children: "Data and Privacy Policy"
        })]
    }), c.jsx("div", {
        className: "max-lg:mt-5 max-lg:pt-5 max-lg:border-t flex-[0.8] lg:text-right",
        children: "© 2024, Rights reserved by ove"
    })]
})
  , y0 = () => {
    const [t,e] = D.useState(!1)
      , n = () => {
        window.scrollY >= 200 ? e(!0) : e(!1)
    }
    ;
    return D.useEffect( () => (window.addEventListener("scroll", n),
    () => {
        window.removeEventListener("scroll", n)
    }
    ), []),
    c.jsx("header", {
        className: `w-full fixed top-0  ${t ? "bg-[rgba(255,255,255,0.5)]" : ""} backdrop-blur-sm z-10`,
        children: c.jsxs("div", {
            className: "max-w-[1400px] mx-auto px-5 flex justify-between items-center py-[18px] ",
            children: [c.jsx("div", {
                className: "logo",
                children: c.jsx(Do, {
                    to: "/",
                    children: c.jsx("img", {
                        src: "/images/ove.svg",
                        width: "86",
                        height: "30",
                        alt: "Ove App"
                    })
                })
            }), c.jsxs("div", {
                className: "flex items-center",
                children: [c.jsx("span", {
                    className: "mr-5 max-sm:text-xs",
                    children: "Get App"
                }), c.jsx(Do, {
                    to: "https://apps.apple.com/us/app/ove-period-puberty-info/id6502988001",
                    target: "_blank",
                    className: "mr-2.5 border rounded-full border-black w-[38px] h-[38px] flex items-center justify-center bg-white hover:invert",
                    children: c.jsx("img", {
                        src: "/images/icons/apple.svg",
                        alt: "Ove App - App Store",
                        height: "20",
                        width: "20",
                        className: " "
                    })
                }), c.jsx(Do, {
                    to: "https://play.google.com/store/apps/details?id=com.ove",
                    target: "_blank",
                    className: "border rounded-full border-black w-[38px] h-[38px] flex items-center justify-center bg-white hover:invert",
                    children: c.jsx("img", {
                        src: "/images/icons/playstore.svg",
                        alt: "Ove App - Play Store",
                        height: "20",
                        width: "20",
                        className: ""
                    })
                })]
            })]
        })
    })
}
;
/*!
 * @gsap/react 2.1.1
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
let ym = typeof window < "u" ? D.useLayoutEffect : D.useEffect
  , vm = t => t && !Array.isArray(t) && typeof t == "object"
  , fa = []
  , zS = {}
  , v0 = vt;
const yh = (t, e=fa) => {
    let n = zS;
    vm(t) ? (n = t,
    t = null,
    e = "dependencies"in n ? n.dependencies : fa) : vm(e) && (n = e,
    e = "dependencies"in n ? n.dependencies : fa),
    t && typeof t != "function" && console.warn("First parameter must be a function or config object");
    const {scope: r, revertOnUpdate: i} = n
      , o = D.useRef(!1)
      , s = D.useRef(v0.context( () => {}
    , r))
      , l = D.useRef(u => s.current.add(null, u))
      , a = e && e.length && !i;
    return ym( () => {
        if (t && s.current.add(t, r),
        !a || !o.current)
            return () => s.current.revert()
    }
    , e),
    a && ym( () => (o.current = !0,
    () => s.current.revert()), fa),
    {
        context: s.current,
        contextSafe: l.current
    }
}
;
yh.register = t => {
    v0 = t
}
;
yh.headless = !0;
vt.registerPlugin(Q);
function _0() {
    return yh( () => {
        vt.to(".box-1", {
            repeat: -1,
            duration: 60,
            ease: "none",
            delay: 0,
            rotation: -360
        }),
        vt.utils.toArray(".rightfade").forEach(o => {
            vt.from(o, {
                opacity: 0,
                x: 150,
                duration: 1,
                scrollTrigger: {
                    trigger: o,
                    start: "top 90%",
                    end: "100% 100%",
                    toggleActions: "play none none reset"
                }
            })
        }
        ),
        vt.utils.toArray(".leftfade").forEach(o => {
            vt.from(o, {
                opacity: 0,
                x: -150,
                duration: 1,
                scrollTrigger: {
                    trigger: o,
                    start: "top 90%",
                    end: "100% 100%",
                    toggleActions: "play none none reset"
                }
            })
        }
        ),
        vt.utils.toArray(".bottomfadescroll").forEach(o => {
            vt.from(o, {
                opacity: 0,
                y: 150,
                duration: 1,
                scrollTrigger: {
                    trigger: o,
                    start: "top 90%",
                    end: "100% 100%",
                    toggleActions: "play none none reset"
                }
            })
        }
        ),
        vt.utils.toArray(".bottomfade").forEach(o => {
            vt.from(o, {
                opacity: 0,
                y: 150,
                duration: 1
            })
        }
        );
        const i = document.querySelector(".background-grad");
        i && vt.to(i, {
            rotation: "-360",
            repeat: -1,
            duration: 15,
            ease: "none"
        })
    }
    ),
    c.jsx("div", {
        className: "box-main fixed top-0",
        children: c.jsxs("div", {
            className: "box-1 rounded-full",
            children: [c.jsx("div", {
                className: "child-1 will-change-transform"
            }), c.jsx("div", {
                className: "child-2 will-change-transform"
            })]
        })
    })
}
vt.registerPlugin(Q);
const LS = () => (D.useEffect( () => {
    const t = new MS;
    t.on("scroll", Q.update),
    vt.ticker.add(e => {
        t.raf(e * 1e3)
    }
    ),
    vt.ticker.lagSmoothing(0)
}
),
Q.normalizeScroll(!0),
D.useEffect( () => {
    Q.refresh()
}
, []),
c.jsxs(c.Fragment, {
    children: [c.jsx(_0, {}), c.jsx(y0, {}), c.jsxs("div", {
        className: "max-w-[1400px] relative mx-auto px-5 pt-[80px] lg:pt-[120px]",
        children: [c.jsx("h1", {
            className: "text-[34px] md:text-[40px] lg:text-[50px]",
            children: "OVE CARE LIMITED – DATA & PRIVACY POLICY"
        }), c.jsxs("section", {
            className: "mt-5 [&_b]:text-black",
            children: ["Ove Care Limited, a company registered in England and Wales, with company number, 15007682 (Ove, we, us or our), understands that protecting your personal data is important.", c.jsx("div", {
                className: "h-6"
            }), "At Ove, we believe that technology and data present a groundbreaking opportunity to empower people to take control of their health. The Ove app gives people the ability to understand what is going on inside of their bodies and minds based on individual tracked health data, providing self-insight and self-advocacy that’s powered by data processing.", c.jsx("div", {
                className: "h-6"
            }), "We also fully acknowledge the responsibility that comes with being the safe keepers of intimate personal data which is tracked by people using Ove. Which is why we are always striving to achieve the highest standards of privacy and security. Keeping your data safe is at the core of everything we do.", c.jsx("div", {
                className: "h-6"
            }), "We see it as our job to be clear and transparent so that you can truly understand what we do with your data, even though the digital ecosystem of an app is complex. To provide our service as a health education app, we rely on a number of other providers as summarised below to help us.", c.jsx("div", {
                className: "h-6"
            }), "This Data & Privacy Policy sets out our commitment to protecting the privacy of personal data provided to us, or otherwise collected by us when providing our Ove app and website for you to use (Services) or when otherwise interacting with you.", c.jsx("div", {
                className: "h-6"
            }), "It is important that you read this Data & Privacy Policy together with any other detailed privacy notices we may provide when we are collecting or processing personal data about you so that you understand our privacy practices in relation to your data.", c.jsx("div", {
                className: "h-6"
            }), "If you have any questions, reach out to us at ovecare.com", c.jsxs("div", {
                className: "mt-10",
                children: [c.jsx("h3", {
                    className: "text-primary pb-5",
                    children: "The information we collect"
                }), c.jsx("b", {
                    children: "Personal data:"
                }), " is information that relates to an identified or identifiable individual.", c.jsx("div", {
                    className: "h-3"
                }), "We may collect, use, store and disclose different kinds of personal data about you which we have listed below:"]
            }), c.jsx("div", {
                className: "h-3"
            }), c.jsxs("ul", {
                className: "list-disc pl-5 flex flex-col gap-2",
                children: [c.jsxs("li", {
                    children: [c.jsx("b", {
                        children: "Identity Data"
                    }), " including first name, middle name, last name, title, date of birth, gender."]
                }), c.jsxs("li", {
                    children: [c.jsx("b", {
                        children: "Contact Data"
                    }), " including billing address, email address and telephone numbers."]
                }), c.jsxs("li", {
                    children: [c.jsx("b", {
                        children: "Transaction Data"
                    }), " including details about payments to you from us and from you to us and other details of products and services you have purchased from us or we have purchased from you."]
                }), c.jsxs("li", {
                    children: [c.jsx("b", {
                        children: "Technical and Usage Data"
                    }), " including internet protocol (IP) address, your login data, your browser session and approximate location data (but not your precise location), device and network information, statistics on page views and sessions, acquisition sources, search queries and/or browsing behaviour, information about your access and use of our website, including through the use of Internet cookies, your communications with our website, the type of browser you are using, the type of operating system you are using and the domain name of your Internet service provider."]
                }), c.jsxs("li", {
                    children: [c.jsx("b", {
                        children: "Profile Data"
                    }), " including your name, email and password for the Ove app, purchases or orders you have made with us, support requests you have made, content you post, send, receive and share through the Ove app, information you have shared with our social media platforms, your interests, preferences, feedback and survey responses."]
                }), c.jsxs("li", {
                    children: [c.jsx("b", {
                        children: "Interaction Data"
                    }), " including information you provide to us when you participate in any interactive features of our Services, including surveys, contests, promotions, activities or events."]
                }), c.jsxs("li", {
                    children: [c.jsx("b", {
                        children: "Marketing and Communications Data"
                    }), " including your preferences in receiving marketing from us and our third parties and your communication preferences."]
                }), c.jsxs("li", {
                    children: [c.jsx("b", {
                        children: "Special Categories of Personal Data"
                    }), " is a special category of personal data that includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health and genetic and biometric data.", c.jsx("div", {
                        className: "h-3"
                    }), "In order to provide our service as a health education app, the types of special categories of data we may collect are those which you choose to track in the Ove app (if allowed through the Ove app), including your menstrual cycle information (e.g. period length, pain, or spotting), and depending on the data you provide, it may also contain other sensitive data about your experiences (e.g. weight, body temperature and hair quality). We only process the health data you choose to share with the Ove app via tracking. You may use different methods provided by the app to track your health data in the Ove app. This can include manually entering your data into the Ove app, or importing your data from other integrations or devices supported by Ove (such as Apple Health or fitness trackers)."]
                })]
            }), c.jsxs("div", {
                children: [c.jsx("h3", {
                    className: "text-primary mb-5 mt-10",
                    children: "How we collect personal data"
                }), "We collect personal data in a variety of ways, including:", c.jsx("div", {
                    className: "h-3"
                }), c.jsxs("ul", {
                    className: "list-disc pl-5 flex flex-col gap-2",
                    children: [c.jsxs("li", {
                        children: [c.jsx("b", {
                            children: "Directly:"
                        }), " We collect personal data which you directly provide to us, including when you register for an account (via the Ove app or on our website), through the ‘contact us’ form on our website or when you request our assistance via email, social media or over the telephone."]
                    }), c.jsxs("li", {
                        children: [c.jsx("b", {
                            children: "Indirectly:"
                        }), " We may collect personal data which you indirectly provide to us while interacting with us, such as when you use our website, in emails, over the telephone and in your online enquiries."]
                    }), c.jsxs("li", {
                        children: [c.jsx("b", {
                            children: "From third parties:"
                        }), " We collect personal data from third parties, such as details of your use of our website from our analytics and cookie providers and marketing providers. See the “Cookies” section below for more detail on the use of cookies."]
                    }), c.jsxs("li", {
                        children: [c.jsx("b", {
                            children: "From publicly available sources:"
                        }), " We collect personal data from publicly available resources."]
                    })]
                })]
            }), c.jsxs("div", {
                className: "mt-10",
                children: [c.jsx("h3", {
                    className: "text-primary mb-5",
                    children: "Purposes and legal bases for processing"
                }), "We collect and process personal data about you only where we have legal bases for doing so under applicable laws. We have set out below, in a table format, a description of all the ways we plan to use your personal data, and which of the legal bases we rely on to do so. We have also identified what our legitimate interests are where appropriate. Note that we may process your personal data for more than one lawful ground depending on the specific purpose for which we are using your data. Please reach out to us if you need further details about the specific legal ground we are relying on to process your personal data where more than one ground has been set out in the table below."]
            }), c.jsx("div", {
                className: "table-wrap  overflow-hidden",
                children: c.jsx("div", {
                    className: "overflow-x-auto ",
                    children: c.jsxs("table", {
                        className: "min-w-[500px] table-fixed [&_td]:border [&_td]:border-[rgba(173,90,220,0.3)] [&_th]:border-[rgba(173,90,220,0.3)] [&_th]:border mx-auto my-5 px-5 [&_td]:p-2 [&_th]:p-2",
                        children: [c.jsx("thead", {
                            children: c.jsxs("tr", {
                                children: [c.jsx("th", {
                                    children: "Purpose of use / disclosure"
                                }), c.jsx("th", {
                                    children: "Type of Data"
                                }), c.jsx("th", {
                                    children: "Legal Basis for processing"
                                })]
                            })
                        }), c.jsxs("tbody", {
                            children: [c.jsxs("tr", {
                                children: [c.jsx("td", {
                                    children: "To enable you to access and use the Ove app, including to provide you with a login."
                                }), c.jsx("td", {
                                    children: c.jsxs("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: [c.jsx("li", {
                                            children: "Identity Data"
                                        }), c.jsx("li", {
                                            children: "Contact Data"
                                        })]
                                    })
                                }), c.jsx("td", {
                                    children: c.jsx("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: c.jsx("li", {
                                            children: "Performance of a contract with you"
                                        })
                                    })
                                })]
                            }), c.jsxs("tr", {
                                children: [c.jsx("td", {
                                    children: "To provide our Services to you."
                                }), c.jsx("td", {
                                    children: c.jsxs("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: [c.jsx("li", {
                                            children: "Identity Data"
                                        }), c.jsx("li", {
                                            children: "Contact Data"
                                        })]
                                    })
                                }), c.jsx("td", {
                                    children: c.jsx("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: c.jsx("li", {
                                            children: "Performance of a contract with you"
                                        })
                                    })
                                })]
                            }), c.jsxs("tr", {
                                children: [c.jsx("td", {
                                    children: "To contact and communicate with you about our Services including in response to any support requests you lodge with us or other enquiries you make with us and via our AI chat bot in the Ove app."
                                }), c.jsx("td", {
                                    children: c.jsxs("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: [c.jsx("li", {
                                            children: "Identity Data"
                                        }), c.jsx("li", {
                                            children: "Contact Data"
                                        }), c.jsx("li", {
                                            children: "Profile Data"
                                        })]
                                    })
                                }), c.jsx("td", {
                                    children: c.jsx("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: c.jsx("li", {
                                            children: "Performance of a contract with you"
                                        })
                                    })
                                })]
                            }), c.jsxs("tr", {
                                children: [c.jsx("td", {
                                    children: "To contact and communicate with you about any enquiries you make with us via our website."
                                }), c.jsx("td", {
                                    children: c.jsxs("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: [c.jsx("li", {
                                            children: "Identity Data"
                                        }), c.jsx("li", {
                                            children: "Contact Data"
                                        })]
                                    })
                                }), c.jsx("td", {
                                    children: c.jsx("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: c.jsx("li", {
                                            children: "Legitimate interests: to ensure we provide the best client experience we can offer by answering all of your questions."
                                        })
                                    })
                                })]
                            }), c.jsxs("tr", {
                                children: [c.jsx("td", {
                                    children: "For internal record keeping, administrative, invoicing and billing purposes."
                                }), c.jsx("td", {
                                    children: c.jsxs("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: [c.jsx("li", {
                                            children: "Identity Data"
                                        }), c.jsx("li", {
                                            children: "Contact Data"
                                        }), c.jsx("li", {
                                            children: "Financial Data"
                                        }), c.jsx("li", {
                                            children: "Transaction Data"
                                        })]
                                    })
                                }), c.jsx("td", {
                                    children: c.jsxs("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: [c.jsx("li", {
                                            children: "Performance of a contract with you"
                                        }), c.jsx("li", {
                                            children: "To comply with a legal obligation"
                                        }), c.jsx("li", {
                                            children: "Legitimate interests: to recover debts due to us and ensure we can notify you about changes to our [terms of business] and any other administrative points."
                                        })]
                                    })
                                })]
                            }), c.jsxs("tr", {
                                children: [c.jsx("td", {
                                    children: "For analytics including profiling on the Ove app, scientific research and business development, including to operate and improve our Services, associated applications and associated social media platforms."
                                }), c.jsx("td", {
                                    children: c.jsxs("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: [c.jsx("li", {
                                            children: "Profile Data"
                                        }), c.jsx("li", {
                                            children: "Technical and usage Data"
                                        })]
                                    })
                                }), c.jsx("td", {
                                    children: c.jsx("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: c.jsx("li", {
                                            children: "Legitimate interests: to keep our website updated and relevant, to develop our business, improve our Services and to inform our marketing strategy"
                                        })
                                    })
                                })]
                            }), c.jsxs("tr", {
                                children: [c.jsx("td", {
                                    children: "For advertising and marketing, including to send you promotional information about our events and experiences and information that we consider may be of interest to you."
                                }), c.jsx("td", {
                                    children: c.jsxs("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: [c.jsx("li", {
                                            children: "Identity Data"
                                        }), c.jsx("li", {
                                            children: "Contact Data"
                                        }), c.jsx("li", {
                                            children: "Technical and usage Data"
                                        }), c.jsx("li", {
                                            children: "Profile Data"
                                        }), c.jsx("li", {
                                            children: "Marketing and communications Data"
                                        })]
                                    })
                                }), c.jsx("td", {
                                    children: c.jsx("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: c.jsx("li", {
                                            children: "Legitimate interests: to develop our Services and grow our business"
                                        })
                                    })
                                })]
                            }), c.jsxs("tr", {
                                children: [c.jsx("td", {
                                    children: "To run promotions, competitions and/or offer additional benefits to you."
                                }), c.jsx("td", {
                                    children: c.jsxs("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: [c.jsx("li", {
                                            children: "Identity Data"
                                        }), c.jsx("li", {
                                            children: "Contact Data"
                                        }), c.jsx("li", {
                                            children: "Profile Data"
                                        }), c.jsx("li", {
                                            children: "Interaction Data"
                                        }), c.jsx("li", {
                                            children: "Marketing and communications Data"
                                        })]
                                    })
                                }), c.jsx("td", {
                                    children: c.jsx("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: c.jsx("li", {
                                            children: "Legitimate interests: to facilitate engagement with our business and grow our business"
                                        })
                                    })
                                })]
                            }), c.jsxs("tr", {
                                children: [c.jsx("td", {
                                    children: "To help you track your health in the Ove app, either manually or through import integrations, in order to provide our core service as a health education and tracking app."
                                }), c.jsx("td", {
                                    children: c.jsx("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: c.jsx("li", {
                                            children: "Special categories of personal data"
                                        })
                                    })
                                }), c.jsx("td", {
                                    children: c.jsx("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: c.jsx("li", {
                                            children: "Consent"
                                        })
                                    })
                                })]
                            }), c.jsxs("tr", {
                                children: [c.jsx("td", {
                                    children: "To provide you with recommendations based on the health information you decide to track."
                                }), c.jsx("td", {
                                    children: c.jsx("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: c.jsx("li", {
                                            children: "Special categories of personal data"
                                        })
                                    })
                                }), c.jsx("td", {
                                    children: c.jsx("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: c.jsx("li", {
                                            children: "Consent"
                                        })
                                    })
                                })]
                            }), c.jsxs("tr", {
                                children: [c.jsx("td", {
                                    children: "To provide you with customer service, including through the AI chat bot in the Ove app."
                                }), c.jsx("td", {
                                    children: c.jsx("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: c.jsx("li", {
                                            children: "Special categories of personal data"
                                        })
                                    })
                                }), c.jsx("td", {
                                    children: c.jsx("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: c.jsx("li", {
                                            children: "Consent"
                                        })
                                    })
                                })]
                            }), c.jsxs("tr", {
                                children: [c.jsx("td", {
                                    children: "For analytics, to help us build more valuable features in Ove, so that we can better understand how our community uses the Ove app and further tailor the experience to fit their needs."
                                }), c.jsx("td", {
                                    children: c.jsx("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: c.jsx("li", {
                                            children: "Special categories of personal data"
                                        })
                                    })
                                }), c.jsx("td", {
                                    children: c.jsx("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: c.jsx("li", {
                                            children: "Consent"
                                        })
                                    })
                                })]
                            }), c.jsxs("tr", {
                                children: [c.jsx("td", {
                                    children: "To allow recommendations and deliver you more personalised insights from the Ove app based on how you interact with the Ove app, via in-app messages, emails, and push notifications (if you’ve enabled permissions on your device)."
                                }), c.jsx("td", {
                                    children: c.jsxs("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: [c.jsx("li", {
                                            children: "Account data"
                                        }), c.jsx("li", {
                                            children: "Special categories of personal data"
                                        })]
                                    })
                                }), c.jsx("td", {
                                    children: c.jsx("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: c.jsx("li", {
                                            children: "Consent"
                                        })
                                    })
                                })]
                            }), c.jsxs("tr", {
                                children: [c.jsx("td", {
                                    children: "To allow our scientific and research partners to carry out scientific research and studies. See section below."
                                }), c.jsx("td", {
                                    children: "Special categories of personal data"
                                }), c.jsx("td", {
                                    children: c.jsx("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: c.jsx("li", {
                                            children: "Consent"
                                        })
                                    })
                                })]
                            }), c.jsxs("tr", {
                                children: [c.jsx("td", {
                                    children: "To comply with our legal obligations or if otherwise required or authorised by law."
                                }), c.jsx("td", {
                                    children: "All relevant Personal Data"
                                }), c.jsx("td", {
                                    children: c.jsx("ul", {
                                        className: "list-disc pl-5 flex flex-col gap-2",
                                        children: c.jsx("li", {
                                            children: "To comply with a legal obligation"
                                        })
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }), c.jsx("div", {
                className: "mt-5",
                children: "If you have consented to our use of data about you for a specific purpose, you have the right to change your mind at any time, but this will not affect any processing that has already taken place. Where we are using your data because we or a third party have a legitimate interest to do so, you have the right to object to that use though, in some cases, this may mean no longer using our services. Further information about your rights is available below."
            }), c.jsxs("div", {
                className: "mt-10",
                children: [c.jsx("h4", {
                    className: "text-primary mb-5",
                    children: "We may use your health data to help advance scientific research"
                }), "To help advance menstrual and reproductive health studies, we share relevant de-identified health data you’ve tracked in the Ove app with carefully selected research partners to be used in their scientific studies.", c.jsx("div", {
                    className: "h-3"
                }), "When you track in Ove, your data becomes something powerful. It can help answer questions to better understand menstrual and reproductive health. Women and people with cycles are still widely underrepresented in health research. We believe that the data tracked in Ove can change this. By teaming up with our trusted research partners we can advance research, break harmful taboos and lay the groundwork for better healthcare.", c.jsx("div", {
                    className: "h-3"
                }), "We only share data that is directly relevant to the research question and follow strict protocols to ensure your data always remains anonymous to the researchers. We use a de-identification technique which means all personal identifiers like your name and email address are erased. Your dataset is then assigned a random ID, making sure you can’t be identified by the researchers.", c.jsx("div", {
                    className: "h-3"
                }), 'If you are a participant in a scientific study that is run by a research facility using Ove as a tool to collect information for that study, then Ove will share your personal information with the research facility only under the terms of your consent as given to that research facility. When you use Ove as part of a scientific study, we will otherwise treat your personal data with the same care as we do all user data. The research facility will be solely responsible for the usage of your personal data, including health data, in the context of their scientific study. We consider that Ove and our partnered research facilities have joint responsibility ("joint controllership" under GDPR) in this case.']
            }), c.jsxs("div", {
                className: "mt-10",
                children: [c.jsx("h4", {
                    className: "text-primary mb-5",
                    children: "Our disclosures of personal data to third parties"
                }), "We may disclose personal data to:", c.jsx("div", {
                    className: "h-3"
                }), c.jsxs("ul", {
                    className: "pl-5 list-disc flex flex-col gap-2",
                    children: [c.jsx("li", {
                        children: "our employees, contractors and/or related entities;"
                    }), c.jsx("li", {
                        children: "IT service providers, data storage, web-hosting and server providers such as Amazon Web Services EMEA SARL, Google Firebase, Sparkpost (for transactional emails (such as “I lost my password” or “Verify your Ove account” emails), Twilio for our messaging gateway via the Ove app;"
                    }), c.jsx("li", {
                        children: "our partners, such as Amazon Affiliate;"
                    }), c.jsx("li", {
                        children: "marketing or advertising providers;"
                    }), c.jsx("li", {
                        children: "professional advisors, bankers, auditors, our insurers and insurance brokers;"
                    }), c.jsx("li", {
                        children: "payment systems operators;"
                    }), c.jsx("li", {
                        children: "our existing or potential agents or business partners;"
                    }), c.jsx("li", {
                        children: "sponsors or promoters of any promotions or competition we run;"
                    }), c.jsx("li", {
                        children: "anyone to whom our business or assets (or any part of them) are, or may (in good faith) be, transferred;"
                    }), c.jsx("li", {
                        children: "courts, tribunals and regulatory authorities, in the event you fail to pay for goods or services we have provided to you;"
                    }), c.jsx("li", {
                        children: "courts, tribunals, regulatory authorities and law enforcement officers, as required or authorised by law, in connection with any actual or prospective legal proceedings, or in order to establish, exercise or defend our legal rights;"
                    }), c.jsx("li", {
                        children: "third parties to collect and process data, such as Google Analytics (To find out how Google uses data when you use third party websites or applications, please see www.google.com/policies/privacy/partners/ or any other URL Google may use from time to time); and"
                    }), c.jsx("li", {
                        children: "any other third parties as required or permitted by law, such as where we receive a summons."
                    })]
                })]
            }), c.jsxs("div", {
                className: "mb-5 mt-10",
                children: [c.jsx("b", {
                    children: "Google Analytics:"
                }), " We have enabled Google Analytics Advertising. We and third-party vendors use first-party cookies (such as the Google Analytics cookie) or other first-party identifiers, and third-party cookies (such as Google advertising cookies) or other third-party identifiers together."]
            }), "You can opt-out of Google Analytics Advertising Features including using a Google Analytics Opt-out Browser add-on found", " ", c.jsx("a", {
                href: "https://tools.google.com/dlpage/gaoptout/",
                className: "underline text-blue-500",
                children: "here"
            }), ". To opt-out of personalised ad delivery on the Google content network, please visit Google’s Ads Preferences Manager", " ", c.jsx("a", {
                href: "http://www.google.com/ads/preferences",
                className: "underline text-blue-500",
                children: "here"
            }), " ", "or if you wish to opt-out permanently even when all cookies are deleted from your browser you can install their plugin", " ", c.jsx("a", {
                href: "https://support.google.com/ads/answer/7395996",
                className: "underline text-blue-500",
                children: "here"
            }), ". To opt out of interest-based ads on mobile devices, please follow these instructions for your mobile device: On android open the Google Settings app on your device and select “ads” to control the settings. On iOS devices with iOS 6 and above use Apple’s advertising identifier. To learn more about limiting ad tracking using this identifier, visit the settings menu on your device.", c.jsxs("div", {
                className: "mt-10",
                children: [c.jsx("h4", {
                    className: "text-primary mb-5",
                    children: "Overseas transfers"
                }), "Where we disclose personal data to the third parties listed above, these third parties may store, transfer or access personal data outside of the United Kingdom, including United States (twilio). The level of data protection in countries outside of the United Kingdom may be less comprehensive than what is offered in the United Kingdom. Where we transfer your personal data outside of the United Kingdom, we will perform those transfers using appropriate safeguards in accordance with the requirements of applicable data protection laws and we will protect the transferred personal data in accordance with this Data & Privacy Policy. This includes:", c.jsxs("ul", {
                    className: "pl-5 list-disc mt-2",
                    children: [c.jsxs("li", {
                        children: ["only transferring your personal data to countries that have been deemed by applicable data protection laws to provide an adequate level of protection for personal data; or", " "]
                    }), c.jsxs("li", {
                        children: [" ", "including standard contractual clauses in our agreements with third parties that are overseas."]
                    })]
                })]
            }), c.jsxs("div", {
                className: "mt-10",
                children: [c.jsx("h4", {
                    className: "text-primary mb-5",
                    children: "Data retention"
                }), "We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.", c.jsx("div", {
                    className: "h-3"
                }), "To determine the appropriate retention period for personal data, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements."]
            }), c.jsxs("div", {
                className: "mt-10",
                children: [c.jsx("h4", {
                    className: "text-primary mb-5",
                    children: "Your rights and controlling your personal data"
                }), c.jsx("b", {
                    children: "Your choice:"
                }), " Please read this Data & Privacy Policy carefully. If you provide personal data to us, you understand we will collect, hold, use and disclose your personal data in accordance with this Data & Privacy Policy. You do not have to provide personal data to us, however, if you do not, it may affect our ability to provide our Services to you and your use of our Services.", c.jsx("div", {
                    className: "h-3"
                }), c.jsx("b", {
                    children: "Information from third parties:"
                }), " If we receive personal data about you from a third party, we will protect it as set out in this Data & Privacy Policy. If you are a third party providing personal data about somebody else, you represent and warrant that you have such person’s consent to provide the personal data to us.", c.jsx("div", {
                    className: "h-3"
                }), c.jsx("b", {
                    children: "Access, correction, processing and portability:"
                }), " You may request details of the personal data that we hold about you and how we process it (commonly known as a “data subject request”). You may also have a right in accordance with applicable data protection law to have your personal data rectified or deleted, to restrict our processing of that information, to object to decisions being made based on automated processing where the decision will produce a legal effect or a similarly significant effect on you, to stop unauthorised transfers of your personal data to a third party and, in some circumstances, to have personal data relating to you transferred to you or another organisation.", c.jsx("div", {
                    className: "h-3"
                }), c.jsx("b", {
                    children: "Unsubscribe:"
                }), " To unsubscribe from our e-mail database or opt-out of communications (including marketing communications), please contact us using the details below or opt-out using the opt-out facilities provided in the communication.", c.jsx("div", {
                    className: "h-3"
                }), c.jsx("b", {
                    children: "Withdraw consent:"
                }), " Where we are relying on consent to process your personal data, you have the right to withdraw your consent at any time. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent.", c.jsx("div", {
                    className: "h-3"
                }), c.jsx("b", {
                    children: "Complaints:"
                }), " If you wish to make a complaint, please contact us using the details below and provide us with full details of the complaint. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You have the right to make a complaint at any time to the Information Commissioner's Office (ICO), the UK regulator for data protection issues (www.ico.org.uk). We would, however, appreciate the chance to deal with your concerns before you approach the ICO so please contact us in the first instance."]
            }), c.jsxs("div", {
                className: "mt-10",
                children: [c.jsx("h4", {
                    className: "text-primary mb-5",
                    children: "Storage and security"
                }), "We are committed to ensuring that the personal data we collect is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures, to safeguard and secure personal data and protect it from misuse, interference, loss and unauthorised access, modification and disclosure.", c.jsx("div", {
                    className: "h-3"
                }), "While we are committed to security, we cannot guarantee the security of any information that is transmitted to or by us over the Internet. The transmission and exchange of information is carried out at your own risk."]
            }), c.jsxs("div", {
                className: "mt-10",
                children: [c.jsx("h4", {
                    className: "text-primary mb-5",
                    children: "Cookies"
                }), "We may use cookies on our website in the future. Cookies are text files placed in your computer's browser to store your preferences."]
            }), c.jsxs("div", {
                className: "mt-10",
                children: [c.jsx("h4", {
                    className: "text-primary mb-5",
                    children: "Links to other websites"
                }), "Our website may contain links to other party’s websites. We do not have any control over those websites and we are not responsible for the protection and privacy of any personal data which you provide whilst visiting those websites. Those websites are not governed by this Data & Privacy Policy."]
            }), c.jsxs("div", {
                className: "mt-10",
                children: [c.jsx("h4", {
                    className: "text-primary mb-5",
                    children: "Personal data from social network accounts"
                }), "If you connect your account with us to a social network account, such as Facebook / Google, we will collect your personal data from the social network. We will do this in accordance with the privacy settings you have chosen on that social network", c.jsx("div", {
                    className: "h-3"
                }), "The personal data that we may receive includes your name, ID, user name, handle, profile picture, gender, age, language, list of friends or follows and any other personal data you choose to share.", c.jsx("div", {
                    className: "h-3"
                }), "We use the personal data we receive from the social network to create a profile for you on the Ove app.", c.jsx("div", {
                    className: "h-3"
                }), "If you agree, we may also use your personal data to give you updates on the social network which might interest you. We will not post to your social network without your permission.", c.jsx("div", {
                    className: "h-3"
                }), "Where we have accessed your personal data through your Facebook account, you have the right to request the deletion of personal data that we have been provided by Facebook. To submit a request for the deletion of personal data we acquired from Facebook, please send us an email at the address at the end of this Data & Privacy Policy and specify in your request which personal data you would like deleted. If we deny your request for the deletion of personal data, we will explain why."]
            }), c.jsxs("div", {
                className: "mt-10",
                children: [c.jsx("h4", {
                    className: "text-primary mb-5",
                    children: "Use of geo-localisation data"
                }), "We collect your approximate location via our mobile application for the following purposes:", c.jsx("div", {
                    className: "h-3"
                }), c.jsxs("ul", {
                    className: "pl-5 list-disc flex flex-col gap-2",
                    children: [c.jsx("li", {
                        children: "for statistical and analytics purposes; "
                    }), c.jsx("li", {
                        children: " for regulatory compliance in different countries; and "
                    }), c.jsx("li", {
                        children: " as permitted by law."
                    })]
                })]
            }), c.jsx("div", {
                className: "mt-10",
                children: "We collect this information when our mobile application is open (whether on-screen or not). If you do not want us to use your location for the purposes above, you should turn off the location services in your account settings in the mobile application or in your mobile phone settings. If you do not provide location information to us, we may not be able to provide our Services to you."
            }), c.jsxs("div", {
                className: "mt-10",
                children: [c.jsx("h4", {
                    className: "text-primary mb-5",
                    children: "Amendments"
                }), "We may change this Data & Privacy Policy from time to time. We will notify you if we make a significant change to this Data & Privacy Policy, by contacting you through the contact details you have provided to us and by publishing an updated version on our website.", " ", c.jsx("b", {
                    children: "For any questions or notices, please contact our data protection officer (DPO) or our EU Representative if you are based in the European Union at:"
                })]
            }), c.jsxs("div", {
                className: "mt-10",
                children: ["Ove Care Limited, a company registered in England and Wales, with company number, 15007682.", c.jsx("br", {}), "Privacy manager: libbytg@ovecare.com"]
            }), c.jsxs("div", {
                className: "mt-5 mb-10",
                children: [c.jsx("b", {
                    children: "Last update:"
                }), " 16 July 2024 ", c.jsx("br", {}), " ©", " ", c.jsx("a", {
                    href: "https://legalvision.co.uk/",
                    className: "underline text-blue-500",
                    children: "LegalVision"
                }), " ", "Law UK Ltd"]
            })]
        })]
    }), c.jsx(g0, {})]
}))
  , AS = () => c.jsxs(c.Fragment, {
    children: [c.jsx(_0, {}), c.jsx(y0, {}), c.jsxs("div", {
        className: "max-w-[1400px] relative mx-auto px-5 pt-[80px] lg:pt-[120px] [&_b]:text-black",
        children: [c.jsx("h1", {
            className: "text-[34px] md:text-[40px] lg:text-[50px]",
            children: "Ove Terms and Conditions"
        }), c.jsx("p", {
            children: "Last updated 16 July 2024"
        }), c.jsxs("div", {
            className: "mt-10",
            children: [c.jsxs("h4", {
                className: "flex text-primary",
                children: [c.jsx("span", {
                    className: "pr-2 inline-block",
                    children: "1."
                }), " General Information"]
            }), c.jsxs("ul", {
                className: "pl-9 relative flex flex-col gap-4 mt-5",
                children: [c.jsxs("li", {
                    className: "",
                    children: [c.jsx("span", {
                        className: "absolute font-bold left-0",
                        children: "1.1"
                    }), ' These Terms of Service (referred to as "Terms") apply to the "Ove" mobile application (referred to as "Ove" or the "Ove App"), including all services oﬀered through the Ove App and the Ove Care website ovecare.com (referred to as "Ove Services"). The Ove Services are operated by Ove Care Limited, located at The Old Rectory, Weybridge, Surrey, England, KT13 8DE (referred to as "Ove Care", "we", “us” or “our”).']
                }), c.jsxs("li", {
                    className: "",
                    children: [c.jsx("span", {
                        className: "absolute font-bold left-0",
                        children: "1.2"
                    }), " ", "Additionally, alongside these Terms, our Data & Privacy Policy, accessible at www.ovecare.com, outlines your and our rights and responsibilities regarding relevant data protection laws, especially concerning the handling of your sensitive health data. Instructions on how to exercise your right of to cancel these Terms under the consumer law can be found at the conclusion of these Terms in section 16."]
                }), c.jsxs("li", {
                    className: "",
                    children: [c.jsx("span", {
                        className: "absolute font-bold left-0",
                        children: "1.3"
                    }), " The Ove Services oﬀer individuals insights into menstrual and reproductive health, spanning from menstruation to menopause. Designed as a mobile application, Ove allows users to track changes in their cycle, identify patterns, enhance overall well-being, and recognise deviations from their norm. We may introduce new features tailored to various life stages to help users gain a deeper understanding of their bodies. General information about the Ove App, as well as diverse topics related to menstrual, sexual, and reproductive health and well-being, can be found on the Ove website. Details outlining the scope of services provided through the Ove App are outlined in section 5 of these Terms."]
                })]
            })]
        }), c.jsxs("div", {
            className: "mt-10 mb-10",
            children: [c.jsxs("h4", {
                className: "flex text-primary",
                children: [c.jsx("span", {
                    className: "pr-2 inline-block",
                    children: "2."
                }), " Scope of Application and Amendments to These Terms"]
            }), c.jsxs("ul", {
                className: "pl-9 relative flex flex-col gap-4 mt-5",
                children: [c.jsxs("li", {
                    className: "",
                    children: [c.jsx("span", {
                        className: "absolute font-bold left-0",
                        children: "2.1"
                    }), " Your use of the Ove Services, or by clicking I accept or similar, indicates your acceptance of these Terms (by you or by your parent or legal guardian)."]
                }), c.jsxs("li", {
                    className: "",
                    children: [c.jsx("span", {
                        className: "absolute font-bold left-0",
                        children: "2.2"
                    }), " We may, from time to time, make significant alterations to these Terms or the Services, by giving you 7 days’ notice in writing. These significant changes may encompass modifications to the nature and extent of the contractually agreed Paid Services, or adjustments to the subscription duration and termination clauses. If you have access to the Paid Services, these alterations aﬀect the Paid Services, and you do not agree with the alterations, you may terminate your paid subscription by contacting us by email within the notice period. If you do not notify us during the notice period you will be taken to have accepted the alteration."]
                }), c.jsxs("li", {
                    className: "",
                    children: [c.jsx("span", {
                        className: "absolute font-bold left-0",
                        children: "2.3"
                    }), " We reserve the right to enact non-material revisions to these Terms at our discretion. Such changes may be implemented without prior notice or detailed explanations. These Terms constitute the entire agreement between the parties, and no oral or written side agreements shall modify their provisions."]
                })]
            }), c.jsxs("div", {
                className: "mt-10",
                children: [c.jsxs("h4", {
                    className: "flex text-primary",
                    children: [c.jsx("span", {
                        className: "pr-2 inline-block",
                        children: "3."
                    }), " Disclaimer"]
                }), c.jsxs("ul", {
                    className: "pl-9 relative flex flex-col gap-4 mt-5",
                    children: [c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "3.1"
                        }), " The Ove Services are not medical advice and are not intended to replace any medical advice. Always consult a qualified healthcare professional for personalised medical advice that addresses your specific needs. By using Ove Services, you agree to use them only for their intended purposes as outlined in these Terms."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "3.2"
                        }), " Ove does not substitute for professional medical consultation, and its use is at your own risk. Only a qualified healthcare professional can accurately diagnose and treat specific medical conditions. If using Ove Services causes any physical or mental distress, discontinue use and seek medical assistance. While we cannot provide medical advice, you can share feedback or concerns by accessing the Support option in the More menu to contact our Ove Support team."]
                    })]
                })]
            }), c.jsxs("div", {
                className: "mt-10",
                children: [c.jsxs("h4", {
                    className: "flex text-primary",
                    children: [c.jsx("span", {
                        className: "pr-2 inline-block",
                        children: "4."
                    }), " Who can use Ove"]
                }), c.jsxs("ul", {
                    className: "pl-9 relative flex flex-col gap-4 mt-5",
                    children: [c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "4.1"
                        }), " To access Ove's Paid Services, users must be at least 18 years old (minimum age), or you must have the consent of your parent or legal guardian."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "4.2"
                        }), " You must be at least 13 years of age to use the App, unless you are under the age of 13 in which case you must have the support, guidance and permission of a parent or legal guardian."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "4.3"
                        }), " We do not knowingly collect personal information from children under 13 without the express permission of a parent or legal guardian and in these cases our privacy and data policy will apply."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "4.4"
                        }), " Some of the App functions are limited for users that are younger than 18."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "4.5"
                        }), " If you are aware of anyone that does not comply with these limitations, or we become aware of such instances we will take the necessary steps to delete or terminate their account. You can contact us at", " ", c.jsx("a", {
                            href: "mailto:support@ovecare.com",
                            className: "text-blue-500",
                            children: "support@ovecare.com"
                        }), "."]
                    })]
                })]
            }), c.jsxs("div", {
                className: "mt-10",
                children: [c.jsxs("h4", {
                    className: "flex text-primary",
                    children: [c.jsx("span", {
                        className: "pr-2 inline-block",
                        children: "5."
                    }), " General Scope of Services of Ove, Ove Plus, Ove Equals, Ove Time, and Other Ove Premium Features"]
                }), c.jsxs("ul", {
                    className: "pl-9 relative flex flex-col gap-4 mt-5",
                    children: [c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "5.1"
                        }), " Ove is designed to oﬀer general information on menstrual and reproductive health and related subjects. The app collects data you input, such as menstrual cycles, physical activities, health status, medications, pregnancy, and other bodily data. This data enables statistical and algorithmic processing to identify patterns in your menstrual cycle, pregnancy, and more."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "5.2"
                        }), " Ove is a self-management app, meaning its services rely on the data you provide. Therefore, the information and analyses available within the app are contingent on the quantity and accuracy of the data you choose to record."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "5.3"
                        }), " Ove is intended for use on iOS and Android mobile devices in the following app versions:", c.jsxs("ul", {
                            className: "pl-9 my-2 flex flex-col gap-2",
                            children: [c.jsxs("li", {
                                children: [c.jsx("span", {
                                    className: "font-bold",
                                    children: "a)"
                                }), " With an account (requires registration): In this scenario, data is stored both locally on your mobile phone and on our servers, allowing the service to be accessed on multiple logged-in devices (Ove as an online service). Further details on the registration process can be found in section 6 of these Terms."]
                            }), c.jsxs("li", {
                                children: [c.jsx("span", {
                                    className: "font-bold",
                                    children: "b)"
                                }), " Without creating an account (no registration required): In this case, data is only stored locally on your mobile phone's memory (Ove as a local service)."]
                            })]
                        })]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "5.4"
                        }), ` Ove oﬀers some features and content for free ("Ove" or the "basic" Ove App), while access to more extensive features and content requires payment (the "Paid Services", see section 7 below). The basic Ove app can be downloaded for free from the relevant app store (the Apple App Store for iPhone users and the Google Play Store for Android users). Additionally, you can purchase the Paid Services and Ove's Premium Features from within the basic Ove App.`]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "5.5"
                        }), " To support the continued provision of the Ove Services, we may display advertisements on our website or in our app. We may also provide the option to donate to our crowdfunding campaign via the website, allowing you to contribute to our services and mission."]
                    })]
                })]
            }), c.jsxs("div", {
                className: "mt-10",
                children: [c.jsxs("h4", {
                    className: "flex text-primary",
                    children: [c.jsx("span", {
                        className: "pr-2 inline-block",
                        children: "6."
                    }), " Creating an Ove Account"]
                }), c.jsxs("ul", {
                    className: "pl-9 relative flex flex-col gap-4 mt-5",
                    children: [c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "6.1"
                        }), " To use Ove, you must create an account, as it currently exists only as an online service. This requires you to accept these Terms, and you may be asked to consent to certain data processing as outlined in our Data & Privacy Policy. You'll need to provide a name, email, and a personalised password. Additionally, you'll provide other information during onboarding to personalise your Ove experience. Account creation is finalised when you enter the verification code sent to your email."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "6.2"
                        }), " ", "Alternatively, you may be permitted to create an account using your Apple, Google, or Facebook login details, which will automatically transfer relevant personal information (“Single Sign-On Account”). If you sign in to your Account using a Single Sign-On Account, you authorise us to access information from your Single Sign-On Account including your name and contact information."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "6.3"
                        }), " By creating an account, you confirm that all information provided is accurate and complete. We recommend securing your data as permitted by your device, such as using a PIN, Face ID, or Touch ID, as detailed in the Data & Privacy Policy."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "6.4"
                        }), " We reserve the right to refuse account creation at our discretion if it may interfere with the Ove Services. We may accept your registration by activating the relevant service without making a specific written declaration."]
                    })]
                }), c.jsxs("ul", {
                    className: "pl-9 relative flex flex-col gap-4 mt-5",
                    children: [c.jsxs("li", {
                        className: "",
                        children: [c.jsx("u", {
                            children: " Notice Regarding Apple"
                        }), c.jsx("div", {
                            className: "h-2"
                        }), c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "6.5"
                        }), " To the extent that you are using or accessing Ove on an iOS device, you further acknowledge and agree to the terms of this clause. You acknowledge that these Terms is between you and us only, not with Apple Inc. (“Apple”), and Apple is not responsible for Ove and any content available on Ove."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "6.6"
                        }), " Apple has no obligation to furnish you with any maintenance and support services with respect to Ove."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "6.7"
                        }), " If Ove fails to conform to any applicable warranty, you may notify Apple and Apple will refund the purchase price of the mobile application to you. To the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the mobile application and any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any warranty will be our responsibility."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "6.8"
                        }), " Apple is not responsible for addressing any claims by you or any third party relating to our mobile application or your use of our mobile application, including but not limited to: (1) product liability claims; (2) any claim that our mobile application fails to conform to any applicable legal or regulatory requirement; and (3) claims arising under consumer protection or similar legislation."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "6.9"
                        }), " Apple is not responsible for the investigation, defence, settlement and discharge of any third-party claim that our mobile application infringes that third party’s intellectual property rights."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "6.10"
                        }), " You agree to comply with any applicable third-party terms when using our mobile application."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "6.11"
                        }), " Apple and Apple subsidiaries are third-party beneficiaries of these Terms, and upon your acceptance of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third-party beneficiary of these Terms."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "6.12"
                        }), ' You hereby represent and warrant that: (1) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a "terrorist supporting" country; and (2) you are not listed on any U.S. Government list of prohibited or restricted parties.']
                    })]
                })]
            }), c.jsxs("div", {
                className: "mt-10",
                children: [c.jsxs("h4", {
                    className: "flex text-primary",
                    children: [c.jsx("span", {
                        className: "pr-2 inline-block",
                        children: "7."
                    }), ' Ove Plus and Other Ove Premium Features (referred to as the "Paid Services")']
                }), c.jsxs("ul", {
                    className: "pl-9 relative flex flex-col gap-4 mt-5",
                    children: [c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "7.1"
                        }), " The Ove App may oﬀer certain features and enhanced functionality as Paid Services, also known as Ove's Premium Features. These services typically require a subscription, involving regular purchase over a fixed period for a specific fee."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "7.2"
                        }), " An overview of the benefits included in Ove's Premium Features/subscriptions can be found on our website or via Ove. Please note that elements may change periodically as we introduce new features, develop our existing oﬀerings, and occasionally retire features. The features and content may vary by country and language. The applicable price oﬀer is displayed in the relevant app store (Apple App Store or Google Play Store) and on the in-app purchase screen before completing the transaction."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "7.3"
                        }), " When you make purchases within the Ove app, including Ove Premium Service and items from the shop, you may enter into separate agreements with third-party platform operators such as the Apple App Store, Google Play Store, and Amazon. This means you must adhere to the terms and conditions set by these third-party service providers. Depending on their policies, you may need to manage cancellations and refunds through their platforms. For details on contract duration and termination, please refer to section 14."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "7.4"
                        }), " You can also purchase Paid Services via the Ove Web Payment on the Ove website ovecare.com. To use web payments, you must have an existing Ove account. Web payments are handled by our third party payment provider, so you must register your payment details with them during the web payment process. You can change your payment details in the payment details section of your Ove account.", c.jsx("div", {
                            className: "h-3"
                        }), "All requests related to web payments, such as revocations, disputes, or refund requests, will be handled exclusively by our third party payment provider.", c.jsx("div", {
                            className: "h-3"
                        }), "Once you subscribe to Ove’s Paid Services on ovecare.com, it will automatically be reflected in the app connected with your Ove account. If you sign up for Ove Paid Services on ovecare.com while already having an active Paid Service subscription, your active one will not be terminated. This means you might end up with two active subscriptions at the same time (one via ovecare.com and one via the app). Therefore, it is necessary to wait until your Apple App Store or Google Play Store subscription has expired, and then re-subscribe to Ove’s Paid Services via the website."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "7.5"
                        }), " The Paid Services are generally available on a subscription basis. Therefore, you will be charged once in the duration period of your subscription (for instance per month or per year). Your subscription will automatically be renewed for an indefinite time at the end of your initial subscription period unless we or you have cancelled your subscription or disabled auto-renewal or you have concluded a new contract with a new initial subscription period with us. In case of an indefinite subscription period after the end of your applicable initial subscription period, you may cancel your subscription with a notice period of at least 24 hours to the end of each subscription month."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "7.6"
                        }), " If payment cannot be collected, we reserve the right to block access to the relevant Paid Services."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "7.7"
                        }), " You agree to provide current, complete, and accurate purchase and account information for all purchases made for Paid Services. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed. You will be responsible for any applicable sales, use, duty, customs, or other governmental taxes, levies, or fees due with respect to your purchase of the Ove Services. By agreeing to these Terms, you acknowledge and agree that you have the financial responsibility for all the Paid Services purchased with your account."]
                    }), c.jsxs("li", {
                        className: "",
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "7.8"
                        }), " Links To Other Web Sites: Our Service may contain links to third-party websites or services that are not owned or controlled by Ove Care Limited. In particular, we have a shop which is connected to Amazon Aﬃliate. The Ove app may show you products and allow you to create a basket using the Amazon Aﬃliate API link to redirect from App to Amazon, once a user looks to checkout you will be taken to Amazon to buy the products. If you have any issues with these products (including if would like a return or refund), you will need to contact Amazon. Ove Care Limited has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We do not warrant the oﬀerings of any of these entities/individuals or their websites.", c.jsx("div", {
                            className: "mt-2"
                        }), "You acknowledge and agree that to the maximum extent permitted by law Ove Care Limited shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party websites or services. We strongly advise you to read the Terms of Service and Privacy Policies of any third-party websites or services that you visit."]
                    })]
                })]
            }), c.jsxs("div", {
                className: "mt-10 relative",
                children: [c.jsxs("h4", {
                    className: "flex text-primary",
                    children: [c.jsx("span", {
                        className: "pr-2 inline-block",
                        children: "8."
                    }), " Chat and AI"]
                }), c.jsxs("ul", {
                    className: "relative pl-10 mt-4 flex flex-col gap-2",
                    children: [c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "8.1"
                        }), " The Ove app incorporates a chat bot feature designed to enhance user experience. The chat bot utilises artificial intelligence (AI) technology to understand user queries and provide relevant responses. The AI through Ove is private, however, you should consider what personal data or sensitive data you are comfortable inputting in the chat bot."]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "8.2"
                        }), " The chat bot is intended to offer guidance and support on various aspects of reproductive health. While the chat bot strives to provide accurate and helpful information, it is important to note that it may not always fully address complex or specific inquiries. The Output of the AI chat bot is meant for guidance only, and we cannot guarantee the accuracy or reliability of the information provided. Users should exercise caution and consult qualified healthcare professionals for personalized medical advice or concerns. To the maximum extent permitted by law Ove Care Limited accepts no liability for any inaccuracies, errors, or consequences resulting from the use of the chat bot or AI-generated content within the app."]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "8.3"
                        }), " ", "Additionally, AI technology is employed within the Ove app for content creation and editing purposes. This includes analysing user-generated data to generate insights, patterns, and recommendations related to menstrual and reproductive health."]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "8.4"
                        }), " Users should be aware that AI-driven content creation and editing are aimed at enhancing the overall user experience and providing personalised insights. However, users should exercise caution and consult qualified healthcare professionals for personalised medical advice or concerns."]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "8.5"
                        }), " By using the Ove app, you acknowledge and agree to the utilisation of chat bot and AI technologies as described in these Terms. To the maximum extent permitted by law, Ove Care Limited bears no liability for any inaccuracies, errors, or consequences resulting from the use of the chat bot or AI-generated content within the app."]
                    })]
                })]
            }), c.jsxs("div", {
                className: "mt-10 relative",
                children: [c.jsxs("h4", {
                    className: "flex text-primary",
                    children: [c.jsx("span", {
                        className: "pr-2 inline-block",
                        children: "9."
                    }), " Your Rights and Responsibilities as a User"]
                }), c.jsxs("ul", {
                    className: "relative pl-10 mt-4 flex flex-col gap-2",
                    children: [c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "9.1"
                        }), " You are not allowed to transfer your user account to third parties. Ove may only be used for personal use or for other purposes explicitly pre-agreed upon in writing by us (e.g., academic research collaborations)."]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "9.2"
                        }), " ", "Additionally, you are prohibited from:", c.jsxs("ul", {
                            className: "pl-8 my-2 list-disc flex flex-col gap-2",
                            children: [c.jsx("li", {
                                children: "Sharing or disclosing your access credentials for authentication and identification with third parties."
                            }), c.jsx("li", {
                                children: "Circumventing access control systems of paid services or employing unauthorised methods to use services."
                            }), c.jsx("li", {
                                children: "Removing or obscuring copyright notices, trademarks, or other intellectual property notices of Ove, its affiliates, or third parties."
                            }), c.jsx("li", {
                                children: "Transferring or assigning rights or obligations under these Terms to third parties."
                            })]
                        })]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "9.3"
                        }), " When using the Ove App and its services, you must comply with your contractual obligations with third parties, including your internet service provider and the relevant app store operator."]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "9.4"
                        }), " To ensure the optimal performance of Ove Services, it's important to regularly update your device's operating systems and the Ove App itself. Certain activations may also be necessary for full service utilisation. The Ove App may occasionally download and install updates and upgrades automatically without explicit notification. These updates aim to improve and enhance the software and service. By using Ove Services, you consent to the implementation of such updates."]
                    })]
                })]
            }), c.jsxs("div", {
                className: "mt-10 relative",
                children: [c.jsxs("h4", {
                    className: "flex text-primary",
                    children: [c.jsx("span", {
                        className: "pr-2 inline-block",
                        children: "10."
                    }), " Copyright"]
                }), c.jsxs("ul", {
                    className: "relative pl-12 mt-4 flex flex-col gap-2",
                    children: [c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "10.1"
                        }), " All content provided within the Ove App or on our website is owned by us and is protected by international copyright law unless otherwise specified. Reproducing, processing, distributing, or commercially exploiting the content, services, and software requires our written consent."]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "10.2"
                        }), " The use of our services (and/or the submission of input information) does not grant you any legal rights, titles, or interests in our services or software. Our service and software are protected by copyright law, trademark law, intellectual property rights, and other applicable laws."]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "10.3"
                        }), " The Ove app is a copyrighted software program. As a user, you are granted a simple, non-exclusive, non-transferable, and revocable right for personal use. Decompiling, altering, or editing the App beyond the extent permissible by law is prohibited. Leasing, renting, or otherwise transferring the app and/or its contents is not permitted."]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "10.4"
                        }), " ", "Commercial use or retransmission of the Ove Services is strictly prohibited. Specifically, you may not copy or publish any part of the Ove App or website."]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "10.5"
                        }), " We utilise anonymous data derived from your usage of the Ove Services to enhance and refine our offerings continually, as well as for scientific research purposes. Personal information is also processed for these objectives, as outlined comprehensively in our Data & Privacy Policy, which you consent to upon creating an Ove account and utilising the Ove App. Furthermore, by creating an account and utilising Ove, you expressly permit us to leverage your anonymous data to enhance the Ove Services for the benefit of all users and contribute to scientific research endeavours."]
                    })]
                })]
            }), c.jsxs("div", {
                className: "mt-10 relative",
                children: [c.jsxs("h4", {
                    className: "flex text-primary",
                    children: [c.jsx("span", {
                        className: "pr-2 inline-block",
                        children: "11."
                    }), " Liability"]
                }), c.jsxs("ul", {
                    className: "relative pl-12 mt-4 flex flex-col gap-2",
                    children: [c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "11.1"
                        }), ' While we endeavour to provide accurate and up-to-date content within the Ove Services, we cannot guarantee its absolute accuracy, completeness, or currency. Additionally, we bear no responsibility for the content you input or track within the Ove App ("user content"). It is your sole responsibility to ensure the security of your personal user content. We do not accept liability for the deletion, damage, or failure to store user content transmitted through the use of the Ove Services, except as required by law.']
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "11.2"
                        }), ` The Services are provided by Ove Care Limited on an "as is" basis and your use of the Ove Services is undertaken at your own risk. Subject to your consumer law rights, we provide no warranties regarding the functionality or performance of our services, whether they be the basic free Ove app or Ove's Premium Services. We do not guarantee that our services will achieve any specific outcomes, such as accurately predicting events in your menstrual cycle, or that Ove’s outputs are exhaustive and precise.`]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "11.3"
                        }), " We emphasise that any health-related suggestions provided through the Ove Services are general in nature and intended for users who are generally healthy and physically and mentally fit. Where possible, we provide references to published research and other sources so that you can further explore and evaluate the information. Should you choose to follow these general recommendations, you do so at your own risk. If you have any uncertainties about their appropriateness for you, we strongly advise consulting with your qualified healthcare provider, especially if you are pregnant or breastfeeding."]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "11.4"
                        }), " The restrictions on liability in this clause 14 apply to every liability arising under or in connection with these Terms including liability in statute, contract, equity, tort (including negligence), misrepresentation, restitution, indemnity or otherwise."]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "11.5"
                        }), " Nothing in these Terms limits any Liability which cannot legally be limited, including Liability for: (a) death or personal injury caused by negligence; or (b) fraud or fraudulent misrepresentation."]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "11.6"
                        }), " If Ove is defective and it damages a device or digital content belonging to you and this is caused by our failure to use reasonable care and skill, we will either repair the damage or pay you compensation."]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "11.7"
                        }), " Subject to clauses 11.6 and 11.5, but despite anything to the contrary, to the maximum extent permitted by law:", c.jsxs("ul", {
                            className: "pl-8 my-2 flex flex-col gap-2",
                            children: [c.jsxs("li", {
                                children: [c.jsx("span", {
                                    className: "font-bold pr-1",
                                    children: "a)"
                                }), " We only supply Ove to consumers for domestic and private use. If you use Ove for any commercial, business or re-sale purpose we will have no liability to you for liability involving any loss of profit, loss of business, business interruption, or loss of business opportunity; and"]
                            }), c.jsxs("li", {
                                children: [c.jsx("span", {
                                    className: "font-bold pr-1",
                                    children: "b)"
                                }), " Neither us nor you will be responsible for any losses that the other party suffers as a result, except for those losses which are a foreseeable consequence of the failure to comply with these Terms;"]
                            }), c.jsxs("li", {
                                children: [c.jsx("span", {
                                    className: "font-bold pr-1",
                                    children: "c)"
                                }), " A party’s liability for any liability under these Terms will be reduced proportionately to the extent the relevant liability was caused or contributed to by the acts or omissions of the other party, including any failure by that other party to mitigate its loss;and"]
                            })]
                        })]
                    })]
                })]
            }), c.jsxs("div", {
                className: "mt-10 relative",
                children: [c.jsxs("h4", {
                    className: "flex text-primary",
                    children: [c.jsx("span", {
                        className: "pr-2 inline-block",
                        children: "12."
                    }), " Contract Duration, Termination, Refunds"]
                }), c.jsxs("ul", {
                    className: "relative pl-12 mt-4 flex flex-col gap-2",
                    children: [c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "12.1"
                        }), " You can terminate the contractual relationship with us for the free Ove service at any time by deleting your account following the instructions in the app. If you're using Ove without an account, you can terminate by deleting the Ove App from your mobile phone (make sure to export your data first if you wish to keep it). We reserve the right to terminate the contract at our discretion and without further notice, subject to the following provisions."]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "12.2"
                        }), " Paid Services run for the agreed-upon initial term. After this term, the contract is automatically extended indefinitely, unless terminated by you or us before the end of the initial term, or if you enter into a new contract with us. If the contract becomes indefinite after the initial term, you may cancel your Paid Services with a notice period of at least 24 hours before the end of each subscription month."]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "12.3"
                        }), " You can cancel your web subscription at any time by contacting our third party payment provider. If you cancel your subscription, you'll still have access to all Paid Services features until your subscription expires. For instance, if you cancel a yearly subscription three months after subscribing, you can continue using Ove's Premium Services for the remaining nine months."]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "12.4"
                        }), " Due to technical and legal constraints, contractual relationships pertaining to Paid Services initiated through the Apple App Store or Google Play Store may require termination via the respective app stores or within the app itself (e.g., utilising features provided by the app store). In such instances, the app store provider may function as a reseller of the Paid Services."]
                    })]
                })]
            }), c.jsxs("div", {
                className: "mt-10 relative",
                children: [c.jsxs("h4", {
                    className: "flex text-primary",
                    children: [c.jsx("span", {
                        className: "pr-2 inline-block",
                        children: "13."
                    }), " Other Provisions"]
                }), c.jsxs("ul", {
                    className: "relative pl-12 mt-4 flex flex-col gap-2",
                    children: [c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "13.1"
                        }), " We have the right to transfer the rights and obligations arising under a contract to a third party. If we intend to transfer the rights and obligations under these Terms, we will notify you in writing of the transfer, and you will have the right to terminate the contract. Any notice of termination must be in writing and received by us within 14 days of your receipt of the notification of transfer."]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "13.2"
                        }), " ", "Governing Law: English and Welsh law governs these Terms, excluding the UN Convention on Contracts for the International Sale of Goods (CISG)."]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "13.3"
                        }), " ", "Alternative dispute resolution is a process where an independent body considers the facts of a dispute and seeks to resolve it, without you having to go to court. If you are not happy with how we have handled any complaint, you may want to contact the alternative dispute resolution provider we use. You can submit a complaint to The Centre for Effective Dispute Resolution via their website at", " ", c.jsx("a", {
                            href: "https://www.cedr.com/",
                            className: "underline text-blue-500",
                            children: "https://www.cedr.com/"
                        }), ". The Centre for Effective Dispute Resolution will not charge you for making a complaint and if you are not satisfied with the outcome you can still bring legal proceedings. Where you are a consumer, if you are not happy with how we have handled any complaint, you may wish to resolve the situation through alternative dispute resolution. This is a process where an independent body considers the facts of a dispute and seeks to resolve it, without you having to go to court. You may contact the alternative dispute resolution provider we use. You can submit a complaint to The Centre for Effective Dispute Resolution via their website at", " ", c.jsx("a", {
                            href: "https://www.cedr.com/",
                            className: "underline text-blue-500",
                            children: "https://www.cedr.com/"
                        }), ". The Centre for Effective Dispute Resolution will not charge you for making a complaint and if you are not satisfied with the outcome you can still bring legal proceedings. Where you are not a consumer, neither party may commence court proceedings relating to any dispute arising from, or in connection with, these Terms without first meeting with the other party to seek (in good faith) to resolve that dispute (unless that party is seeking urgent interlocutory relief or the dispute relates to compliance with this clause)."]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "13.4"
                        }), " If any provision within these Terms is deemed invalid or unenforceable, the validity of the remaining provisions shall remain unaffected. Any invalid or unenforceable provision shall be replaced by a valid and enforceable provision that achieves the economic objective intended by the parties as closely as possible. This provision also applies if the provisions are found to be incomplete."]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "13.5"
                        }), " Ove is accessible to individuals with menstrual cycles worldwide, who may access the app in various languages. We employ professional translators and proofreaders to translate all our communications, including these Terms, as accurately as possible into these languages. However, please understand that we cannot guarantee 100% accuracy for all translations, especially concerning legal content. Therefore, the English version of these Terms is the original version and prevails over all other versions in the event of discrepancies. The most current version of these terms is always available in English on our website."]
                    })]
                })]
            }), c.jsxs("div", {
                className: "mt-10 relative",
                children: [c.jsxs("h4", {
                    className: "flex text-primary",
                    children: [c.jsx("span", {
                        className: "pr-2 inline-block",
                        children: "14."
                    }), " How to Exercise Your Right of Revocation"]
                }), c.jsxs("ul", {
                    className: "relative pl-12 mt-4 flex flex-col gap-2",
                    children: [c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "14.1"
                        }), " As a company headquartered in England, the consumer protection laws of England apply to you as our customer regardless of your location. Since the Ove services are exclusively aimed at users who are consumers, English law grants you the right to cancel this contract without penalty within 14 days of its conclusion."]
                    }), c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "14.2"
                        }), " If you have purchased our service via an app store (such as Google Play Store or Apple App Store), please follow the procedures provided by the respective app store for the revocation and reimbursement of your purchase. If you have purchased our service via our web subscription, please utilise the procedures provided by our payment provider, for the revocation and reimbursement of your purchase by contacting them directly via email. The following language reflects standard language prescribed by English law."]
                    })]
                })]
            }), c.jsxs("div", {
                className: "mt-10 relative",
                children: [c.jsxs("h4", {
                    className: "flex text-primary",
                    children: [c.jsx("span", {
                        className: "pr-2 inline-block",
                        children: "15."
                    }), " Revocation Policy"]
                }), c.jsxs("ul", {
                    className: "relative pl-12 mt-4 flex flex-col gap-3",
                    children: [c.jsxs("li", {
                        children: [c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "15.1"
                        }), " If you download Ove or purchase Paid Services via the Ove Web Payment on the Ove website as a consumer, and you expressly request that we start providing you the Services within your 14-day cancellation period, and acknowledge that you will lose your right to cancel within the first 14 days under consumer laws."]
                    }), c.jsxs("li", {
                        children: [c.jsx("u", {
                            className: "mt-2 block",
                            children: "Right to change your mind"
                        }), c.jsx("div", {
                            className: "h-2"
                        }), c.jsx("span", {
                            className: " absolute font-bold left-0",
                            children: "15.2"
                        }), "You have the right to cancel this contract within fourteen days without providing any reasons. The revocation period (cancellation period) is fourteen days from the date when you entered into the contract. To exercise your right of revocation, you must inform us (Ove Care Limited, address: [", c.jsx("a", {
                            href: "mailto:support@ovecare.com",
                            className: "text-blue-500"
                        }), "support@ovecare.com], or contact Support from within the Ove App) of your decision to revoke this contract. You may use the attached form for this purpose, but this is not mandatory. In order to comply with the revocation period, it is sufficient that you send us notification regarding your revocation of the contract before the end of the revocation period."]
                    }), c.jsxs("li", {
                        children: [c.jsx("u", {
                            className: "mt-2 block",
                            children: "Consequences"
                        }), c.jsx("div", {
                            className: "h-2"
                        }), c.jsx("span", {
                            className: "absolute font-bold left-0",
                            children: "15.3"
                        }), " If you revoke this contract, we shall reimburse all payments we have received from you immediately and no later than fourteen days from the date on which we receive notice of your revocation of this contract. For this refund, we will use the same means of payment that you used for the original transaction, unless expressly agreed otherwise with you; in no event will you be charged for this refund. If you have requested that the services be commenced during the cancellation period (which you are taken to do by downloading and using Ove), you shall pay us a reasonable amount corresponding to the proportion of the services already provided by the time you inform us of the exercise of the right of cancellation in respect of this contract compared to the total scope of the services provided for in the contract."]
                    })]
                })]
            })]
        }), c.jsxs("div", {
            children: [c.jsx("span", {
                className: "underline",
                children: "Model Cancellation Form"
            }), c.jsx("div", {
                className: "h-2"
            }), "(If you want to revoke the contract, please fill out this form and send it back)", c.jsx("br", {}), "To: [Insert Name and Address of the Entrepreneur]", c.jsx("br", {}), "I/we hereby revoke the contract which I/we entered into for the purchase of the following goods/the provision of the following service:", c.jsx("br", {}), "Ordered on/received on:", c.jsx("br", {}), "Name of the consumer(s):", c.jsx("br", {}), "Address of the consumer(s):", c.jsx("br", {}), "[Signature of the consumer(s) - only required if the notification is submitted in paper form]", c.jsx("br", {}), "Date:"]
        })]
    }), c.jsx(g0, {})]
})
  , IS = D.lazy( () => Zx( () => import("./index-CwIIUiE7.js"), __vite__mapDeps([0, 1])))
  , FS = [{
    path: "/",
    component: c.jsx(IS, {}),
    exact: !0
}, {
    path: "/data-and-privacy-policy",
    component: c.jsx(LS, {}),
    exact: !0
}, {
    path: "/terms-and-conditions",
    component: c.jsx(AS, {}),
    exact: !0
}];
function WS() {
    function t() {
        const {pathname: e} = Ol();
        return D.useEffect( () => {
            window.scrollTo(0, 0)
        }
        , [e]),
        null
    }
    return c.jsx(D.Suspense, {
        children: c.jsxs(Hx, {
            basename: "/",
            children: [c.jsx(t, {}), c.jsx(Fx, {
                children: FS.map( (e, n) => c.jsx($y, {
                    path: e.path,
                    element: e.component
                }, n))
            })]
        })
    })
}
Nc.createRoot(document.getElementById("root")).render(c.jsx(Nm.StrictMode, {
    children: c.jsx(WS, {})
}));
export {g0 as F, _0 as G, y0 as H, Do as L, Nm as R, Q as S, k0 as a, q1 as b, BS as c, MS as d, vt as g, c as j, D as r, yh as u};

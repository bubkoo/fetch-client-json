!function (e, t) {"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["fetch-client-json"] = t() : e["fetch-client-json"] = t()}(this, function () {
  return function (e) {
    function t(o) {
      if (n[o]) {
        return n[o].exports;
      }
      var r = n[o] = {
        exports: {},
        id: o,
        loaded: !1
      };
      return e[o].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
  }([function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = function () {
      var e = function (e) {return e.headers.set("Accept", "application/json"), e.headers.set("Content-Type", "application/json; charset=utf-8"), e}, t = function (e) {
        return e.json()["catch"](function (t) {
          if (204 === e.status) {
            return null;
          }
          throw t
        })
      };
      return {
        request: e,
        response: t
      }
    }
  }])
});
//# sourceMappingURL=index.js.map
if (!self.define) {
  let e, s = {};
  const i = (i, f) => (i = new URL(i + ".js", f).href, s[i] || new Promise((s => {
    if ("document" in self) {
      const e = document.createElement("script");
      e.src = i, e.onload = s, document.head.appendChild(e)
    } else e = i, importScripts(i), s()
  })).then((() => {
    let e = s[i];
    if (!e) throw new Error(`Module ${i} didn’t register its module`);
    return e
  })));
  self.define = (f, r) => {
    const c = e || ("document" in self ? document.currentScript.src : "") || location.href;
    if (s[c]) return;
    let a = {};
    const n = e => i(e, c), d = {module: {uri: c}, exports: a, require: n};
    s[c] = Promise.all(f.map((e => d[e] || n(e)))).then((e => (r(...e), a)))
  }
}
define(["./workbox-d910ce54"], (function (e) {
  "use strict";
  e.setCacheNameDetails({prefix: "1688304438086"}), self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{
    url: "css/ImgManage-479834e7.css",
    revision: "a7696fef6785d5bedde6aa71f38c7c52"
  }, {url: "css/index-1ba6f533.css", revision: "b58e4bc39c746d7aaaac023629c60e02"}, {
    url: "index.html",
    revision: "60d51fdefb1af8e18a8cd76295eaa479"
  }, {
    url: "js/ImgManage-af0395c2.js",
    revision: "5d30f14f1efbf5814aa09bd787fa3de2"
  }, {
    url: "js/ImgManage-legacy-cabd9ca7.js",
    revision: "507bce3f749bb0106e37f1092b4df7ab"
  }, {url: "js/index-f2d4f74a.js", revision: "0057154a2317c50f233715622990a1e3"}, {
    url: "js/index-legacy-e71a40f3.js",
    revision: "c9fe9929d190d3d62b054e3ff3755c87"
  }, {
    url: "js/polyfills-legacy-cf8c27f6.js",
    revision: "588ee6378a23aa318856f6f966760385"
  }], {ignoreURLParametersMatching: [/^utm_/, /^fbclid$/]}), e.cleanupOutdatedCaches()
}));

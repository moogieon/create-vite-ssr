"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var issues_page_route = "/repo/:owner/:name/issues";
var __vite_glob_next_2_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": issues_page_route
}, Symbol.toStringTag, { value: "Module" }));
const exportNames = ["clientRouting", "render"];
var __vite_glob_next_7_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames
}, Symbol.toStringTag, { value: "Module" }));
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const neverLoaded = {};
const isGeneratedFile = true;
const pageFilesLazyIsomorph1 = {
  "/pages/index.page.tsx": () => Promise.resolve().then(function() {
    return require("./assets/index.page.e15732d7.js");
  }),
  "/pages/issues.page.tsx": () => Promise.resolve().then(function() {
    return require("./assets/issues.page.cbb9a595.js");
  }),
  "/renderer/_default.page.tsx": () => Promise.resolve().then(function() {
    return require("./assets/_default.page.21e3e842.js");
  })
};
const pageFilesLazyIsomorph2 = {
  "/node_modules/vilay/renderer/_default.page.tsx": () => Promise.resolve().then(function() {
    return require("./assets/chunk-66097e5b.js");
  }),
  "/node_modules/vilay/renderer/_error.page.tsx": () => Promise.resolve().then(function() {
    return require("./assets/chunk-d9a57f34.js");
  })
};
const pageFilesLazyIsomorph = __spreadValues(__spreadValues({}, pageFilesLazyIsomorph1), pageFilesLazyIsomorph2);
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesEagerRoute1 = {
  "/pages/issues.page.route.tsx": __vite_glob_next_2_0
};
const pageFilesEagerRoute2 = {};
const pageFilesEagerRoute = __spreadValues(__spreadValues({}, pageFilesEagerRoute1), pageFilesEagerRoute2);
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesLazyServer1 = {};
const pageFilesLazyServer2 = {
  "/node_modules/vilay/renderer/_default.page.server.tsx": () => Promise.resolve().then(function() {
    return require("./assets/chunk-31eb61a6.js");
  })
};
const pageFilesLazyServer = __spreadValues(__spreadValues({}, pageFilesLazyServer1), pageFilesLazyServer2);
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerClient1 = {};
const pageFilesExportNamesEagerClient2 = {
  "/node_modules/vilay/renderer/_default.page.client.tsx": __vite_glob_next_7_0
};
const pageFilesExportNamesEagerClient = __spreadValues(__spreadValues({}, pageFilesExportNamesEagerClient1), pageFilesExportNamesEagerClient2);
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
exports.isGeneratedFile = isGeneratedFile;
exports.neverLoaded = neverLoaded;
exports.pageFilesEager = pageFilesEager;
exports.pageFilesExportNamesEager = pageFilesExportNamesEager;
exports.pageFilesExportNamesLazy = pageFilesExportNamesLazy;
exports.pageFilesLazy = pageFilesLazy;

"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var jsxRuntime = require("react/jsx-runtime");
const Page = ({
  is404
}) => {
  if (is404) {
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/* @__PURE__ */ jsxRuntime.jsx("h1", {
        className: "text-xl",
        children: "404 Page Not Found"
      }), /* @__PURE__ */ jsxRuntime.jsx("p", {
        children: "This page could not be found."
      })]
    });
  } else {
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/* @__PURE__ */ jsxRuntime.jsx("h1", {
        className: "text-xl",
        children: "500 Internal Server Error"
      }), /* @__PURE__ */ jsxRuntime.jsx("p", {
        children: "Something went wrong."
      })]
    });
  }
};
exports.Page = Page;

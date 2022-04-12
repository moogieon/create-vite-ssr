"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var reactRelay = require("react-relay");
var _default_page = require("./_default.page.21e3e842.js");
var jsxRuntime = require("react/jsx-runtime");
require("react");
require("react-error-boundary");
require("relay-runtime");
require("ohmyfetch");
const node = function() {
  var v0 = [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "name",
          "value": "create-vite-ssr"
        },
        {
          "kind": "Literal",
          "name": "owner",
          "value": "moogieon"
        }
      ],
      "concreteType": "Repository",
      "kind": "LinkedField",
      "name": "repository",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "storageKey": 'repository(name:"create-vite-ssr",owner:"moogieon")'
    }
  ];
  return {
    "fragment": {
      "argumentDefinitions": [],
      "kind": "Fragment",
      "metadata": null,
      "name": "issuesPageQuery",
      "selections": v0,
      "type": "Query",
      "abstractKey": null
    },
    "kind": "Request",
    "operation": {
      "argumentDefinitions": [],
      "kind": "Operation",
      "name": "issuesPageQuery",
      "selections": v0
    },
    "params": {
      "cacheID": "9bf44d7462baa24a2169bc4a316571d3",
      "id": null,
      "metadata": {},
      "name": "issuesPageQuery",
      "operationKind": "query",
      "text": 'query issuesPageQuery {\n  repository(name: "create-vite-ssr", owner: "moogieon") {\n    id\n  }\n}\n'
    }
  };
}();
node.hash = "d5161bff0601e5f6309f32a56988fe8d";
const head = __spreadProps(__spreadValues({}, _default_page.head), {
  title: "Issues: Vite SSR app"
});
const getQueryVariables = (routeParams) => __spreadProps(__spreadValues({}, routeParams), {
  first: 10,
  filter: {}
});
const query = node;
const Page = ({
  queryRef
}) => {
  var _a;
  const data = reactRelay.usePreloadedQuery(query, queryRef);
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ jsxRuntime.jsx("h2", {
      children: /* @__PURE__ */ jsxRuntime.jsx("p", {
        children: (_a = data.repository) == null ? void 0 : _a.id
      })
    })
  });
};
exports.Page = Page;
exports.getQueryVariables = getQueryVariables;
exports.head = head;
exports.query = query;

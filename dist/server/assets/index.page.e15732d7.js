"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var reactRelay = require("react-relay");
var jsxRuntime = require("react/jsx-runtime");
const node = function() {
  var v0 = [
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
  ], v1 = {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }, v2 = {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "stargazerCount",
    "storageKey": null
  }, v3 = {
    "kind": "Literal",
    "name": "first",
    "value": 0
  }, v4 = [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    }
  ], v5 = {
    "alias": null,
    "args": [
      v3
    ],
    "concreteType": "IssueConnection",
    "kind": "LinkedField",
    "name": "issues",
    "plural": false,
    "selections": v4,
    "storageKey": "issues(first:0)"
  }, v6 = {
    "alias": "openedIssues",
    "args": [
      {
        "kind": "Literal",
        "name": "filterBy",
        "value": {
          "states": "OPEN"
        }
      },
      v3
    ],
    "concreteType": "IssueConnection",
    "kind": "LinkedField",
    "name": "issues",
    "plural": false,
    "selections": v4,
    "storageKey": 'issues(filterBy:{"states":"OPEN"},first:0)'
  };
  return {
    "fragment": {
      "argumentDefinitions": [],
      "kind": "Fragment",
      "metadata": null,
      "name": "pagesPageQuery",
      "selections": [
        {
          "alias": null,
          "args": v0,
          "concreteType": "Repository",
          "kind": "LinkedField",
          "name": "repository",
          "plural": false,
          "selections": [
            v1,
            v2,
            v5,
            v6
          ],
          "storageKey": 'repository(name:"create-vite-ssr",owner:"moogieon")'
        }
      ],
      "type": "Query",
      "abstractKey": null
    },
    "kind": "Request",
    "operation": {
      "argumentDefinitions": [],
      "kind": "Operation",
      "name": "pagesPageQuery",
      "selections": [
        {
          "alias": null,
          "args": v0,
          "concreteType": "Repository",
          "kind": "LinkedField",
          "name": "repository",
          "plural": false,
          "selections": [
            v1,
            v2,
            v5,
            v6,
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
      ]
    },
    "params": {
      "cacheID": "20400eeb2093da6d71c066b40a63f3f1",
      "id": null,
      "metadata": {},
      "name": "pagesPageQuery",
      "operationKind": "query",
      "text": 'query pagesPageQuery {\n  repository(owner: "moogieon", name: "create-vite-ssr") {\n    name\n    stargazerCount\n    issues(first: 0) {\n      totalCount\n    }\n    openedIssues: issues(first: 0, filterBy: {states: OPEN}) {\n      totalCount\n    }\n    id\n  }\n}\n'
    }
  };
}();
node.hash = "d2eb4b4d8bc6a53add1f4030629c97e7";
const query = node;
const Page = ({
  queryRef
}) => {
  var _a, _b, _c, _d;
  const data = reactRelay.usePreloadedQuery(query, queryRef);
  const listItems = [/* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: ["Name: ", (_a = data.repository) == null ? void 0 : _a.name]
  }), /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: ["Stars: ", (_b = data.repository) == null ? void 0 : _b.stargazerCount]
  }), /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: ["Issues: ", (_c = data.repository) == null ? void 0 : _c.issues.totalCount, " (", (_d = data.repository) == null ? void 0 : _d.openedIssues.totalCount, " open)"]
  })];
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
      className: "text-2xl mb-4",
      children: "Welcome!"
    }), /* @__PURE__ */ jsxRuntime.jsx("p", {
      children: "This is the main page for the template, rendered with some of the actual information about the template repository:"
    }), /* @__PURE__ */ jsxRuntime.jsx("ul", {
      className: "pl-4",
      children: listItems.map((item, i) => /* @__PURE__ */ jsxRuntime.jsx("li", {
        className: "my-2 w-fit list-disc border-b border-black border-dashed hover:bg-blue-50 transition-colors duration-400",
        children: item
      }, i))
    })]
  });
};
exports.Page = Page;
exports.query = query;

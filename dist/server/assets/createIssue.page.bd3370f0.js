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
var jsxRuntime = require("react/jsx-runtime");
const node$1 = function() {
  var v0 = [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "input"
    }
  ], v1 = [
    {
      "kind": "Variable",
      "name": "input",
      "variableName": "input"
    }
  ], v2 = {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "number",
    "storageKey": null
  };
  return {
    "fragment": {
      "argumentDefinitions": v0,
      "kind": "Fragment",
      "metadata": null,
      "name": "createIssueMutation",
      "selections": [
        {
          "alias": null,
          "args": v1,
          "concreteType": "CreateIssuePayload",
          "kind": "LinkedField",
          "name": "createIssue",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Issue",
              "kind": "LinkedField",
              "name": "issue",
              "plural": false,
              "selections": [
                v2
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "type": "Mutation",
      "abstractKey": null
    },
    "kind": "Request",
    "operation": {
      "argumentDefinitions": v0,
      "kind": "Operation",
      "name": "createIssueMutation",
      "selections": [
        {
          "alias": null,
          "args": v1,
          "concreteType": "CreateIssuePayload",
          "kind": "LinkedField",
          "name": "createIssue",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Issue",
              "kind": "LinkedField",
              "name": "issue",
              "plural": false,
              "selections": [
                v2,
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ]
    },
    "params": {
      "cacheID": "466caad8466309dbd46bfd6390049a0f",
      "id": null,
      "metadata": {},
      "name": "createIssueMutation",
      "operationKind": "mutation",
      "text": "mutation createIssueMutation(\n  $input: CreateIssueInput!\n) {\n  createIssue(input: $input) {\n    issue {\n      number\n      id\n    }\n  }\n}\n"
    }
  };
}();
node$1.hash = "fe1d9cbd9fccc5807db4d3b25bf7ae3c";
const node = function() {
  var v0 = {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  }, v1 = {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "owner"
  }, v2 = [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "name",
          "variableName": "name"
        },
        {
          "kind": "Variable",
          "name": "owner",
          "variableName": "owner"
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
      "storageKey": null
    }
  ];
  return {
    "fragment": {
      "argumentDefinitions": [
        v0,
        v1
      ],
      "kind": "Fragment",
      "metadata": null,
      "name": "createIssueQuery",
      "selections": v2,
      "type": "Query",
      "abstractKey": null
    },
    "kind": "Request",
    "operation": {
      "argumentDefinitions": [
        v1,
        v0
      ],
      "kind": "Operation",
      "name": "createIssueQuery",
      "selections": v2
    },
    "params": {
      "cacheID": "40550df3da8b4ed0d9414ccf5d5a26b5",
      "id": null,
      "metadata": {},
      "name": "createIssueQuery",
      "operationKind": "query",
      "text": "query createIssueQuery(\n  $owner: String!\n  $name: String!\n) {\n  repository(name: $name, owner: $owner) {\n    id\n  }\n}\n"
    }
  };
}();
node.hash = "c35fb2631f094c2cac370997a0afad9e";
const Button = (props) => /* @__PURE__ */ jsxRuntime.jsx("button", __spreadProps(__spreadValues({}, props), {
  className: `border border-gray-500 rounded-lg px-2 py-1 transition-colors hover:bg-gray-100 ${props.className}`
}));
const query = node;
const [commit, isInFlight] = reactRelay.useMutation(node$1);
const Page = ({
  queryRef
}) => {
  reactRelay.usePreloadedQuery(query, queryRef);
  return /* @__PURE__ */ jsxRuntime.jsxs("form", {
    onSubmit: onFormSubmit,
    children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "my-2",
      children: [/* @__PURE__ */ jsxRuntime.jsx("label", {
        htmlFor: "title-input",
        children: "Title"
      }), /* @__PURE__ */ jsxRuntime.jsx("input", {
        id: "title-input",
        type: "text",
        name: "title",
        required: true,
        className: "mx-2 border-b border-gray-500"
      })]
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "my-2",
      children: [/* @__PURE__ */ jsxRuntime.jsx("label", {
        htmlFor: "body-input",
        children: "Body"
      }), /* @__PURE__ */ jsxRuntime.jsx("br", {}), /* @__PURE__ */ jsxRuntime.jsx("textarea", {
        id: "body-input",
        name: "body",
        className: "my-1 border border-gray-500 rounded-xl p-3 resize-none",
        placeholder: "Write something..."
      })]
    }), /* @__PURE__ */ jsxRuntime.jsx(Button, {
      type: "submit",
      disabled: isInFlight,
      children: isInFlight ? "Creating..." : "Create"
    })]
  });
};
exports.Page = Page;
exports.commit = commit;
exports.isInFlight = isInFlight;
exports.query = query;

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
var React = require("react");
var reactRelay = require("react-relay");
var _default_page = require("./_default.page.dc6bc351.js");
var jsxRuntime = require("react/jsx-runtime");
require("react-error-boundary");
require("relay-runtime");
require("ohmyfetch");
const node$3 = function() {
  var v0 = {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  }, v1 = {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  }, v2 = {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  }, v3 = {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "owner"
  }, v4 = [
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
  ], v5 = [
    {
      "kind": "Variable",
      "name": "after",
      "variableName": "cursor"
    },
    {
      "kind": "Variable",
      "name": "first",
      "variableName": "first"
    },
    {
      "kind": "Literal",
      "name": "orderBy",
      "value": {
        "direction": "DESC",
        "field": "CREATED_AT"
      }
    }
  ], v6 = {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "__typename",
    "storageKey": null
  }, v7 = {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  };
  return {
    "fragment": {
      "argumentDefinitions": [
        v0,
        v1,
        v2,
        v3
      ],
      "kind": "Fragment",
      "metadata": null,
      "name": "issuesPageQuery",
      "selections": [
        {
          "alias": null,
          "args": v4,
          "concreteType": "Repository",
          "kind": "LinkedField",
          "name": "repository",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "IssueList_repository"
            }
          ],
          "storageKey": null
        }
      ],
      "type": "Query",
      "abstractKey": null
    },
    "kind": "Request",
    "operation": {
      "argumentDefinitions": [
        v3,
        v2,
        v0,
        v1
      ],
      "kind": "Operation",
      "name": "issuesPageQuery",
      "selections": [
        {
          "alias": null,
          "args": v4,
          "concreteType": "Repository",
          "kind": "LinkedField",
          "name": "repository",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": v5,
              "concreteType": "IssueConnection",
              "kind": "LinkedField",
              "name": "issues",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "IssueEdge",
                  "kind": "LinkedField",
                  "name": "edges",
                  "plural": true,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "Issue",
                      "kind": "LinkedField",
                      "name": "node",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "title",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "createdAt",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": null,
                          "kind": "LinkedField",
                          "name": "author",
                          "plural": false,
                          "selections": [
                            v6,
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "login",
                              "storageKey": null
                            },
                            {
                              "kind": "InlineFragment",
                              "selections": [
                                v7
                              ],
                              "type": "Node",
                              "abstractKey": "__isNode"
                            }
                          ],
                          "storageKey": null
                        },
                        v7,
                        v6
                      ],
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "cursor",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "PageInfo",
                  "kind": "LinkedField",
                  "name": "pageInfo",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "endCursor",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "hasNextPage",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": v5,
              "filters": [
                "orderBy"
              ],
              "handle": "connection",
              "key": "issuesPageQuery_issues",
              "kind": "LinkedHandle",
              "name": "issues"
            },
            v7
          ],
          "storageKey": null
        }
      ]
    },
    "params": {
      "cacheID": "070da33bf8260d74742bf6ad22775aeb",
      "id": null,
      "metadata": {},
      "name": "issuesPageQuery",
      "operationKind": "query",
      "text": "query issuesPageQuery(\n  $owner: String!\n  $name: String!\n  $cursor: String\n  $first: Int!\n) {\n  repository(name: $name, owner: $owner) {\n    ...IssueList_repository\n    id\n  }\n}\n\nfragment IssueList_repository on Repository {\n  issues(after: $cursor, first: $first, orderBy: {field: CREATED_AT, direction: DESC}) {\n    edges {\n      node {\n        ...Issue_issue\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment Issue_issue on Issue {\n  title\n  createdAt\n  author {\n    __typename\n    login\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
    }
  };
}();
node$3.hash = "1347c6160072a454b1165d3a72ff8a25";
const node$2 = function() {
  var v0 = [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "first"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "id"
    }
  ], v1 = [
    {
      "kind": "Variable",
      "name": "id",
      "variableName": "id"
    }
  ], v2 = {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "__typename",
    "storageKey": null
  }, v3 = {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  }, v4 = [
    {
      "kind": "Variable",
      "name": "after",
      "variableName": "cursor"
    },
    {
      "kind": "Variable",
      "name": "first",
      "variableName": "first"
    },
    {
      "kind": "Literal",
      "name": "orderBy",
      "value": {
        "direction": "DESC",
        "field": "CREATED_AT"
      }
    }
  ];
  return {
    "fragment": {
      "argumentDefinitions": v0,
      "kind": "Fragment",
      "metadata": null,
      "name": "IssueListPaginationQuery",
      "selections": [
        {
          "alias": null,
          "args": v1,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "IssueList_repository"
            }
          ],
          "storageKey": null
        }
      ],
      "type": "Query",
      "abstractKey": null
    },
    "kind": "Request",
    "operation": {
      "argumentDefinitions": v0,
      "kind": "Operation",
      "name": "IssueListPaginationQuery",
      "selections": [
        {
          "alias": null,
          "args": v1,
          "concreteType": null,
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
            v2,
            v3,
            {
              "kind": "InlineFragment",
              "selections": [
                {
                  "alias": null,
                  "args": v4,
                  "concreteType": "IssueConnection",
                  "kind": "LinkedField",
                  "name": "issues",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "IssueEdge",
                      "kind": "LinkedField",
                      "name": "edges",
                      "plural": true,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "Issue",
                          "kind": "LinkedField",
                          "name": "node",
                          "plural": false,
                          "selections": [
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "title",
                              "storageKey": null
                            },
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "createdAt",
                              "storageKey": null
                            },
                            {
                              "alias": null,
                              "args": null,
                              "concreteType": null,
                              "kind": "LinkedField",
                              "name": "author",
                              "plural": false,
                              "selections": [
                                v2,
                                {
                                  "alias": null,
                                  "args": null,
                                  "kind": "ScalarField",
                                  "name": "login",
                                  "storageKey": null
                                },
                                {
                                  "kind": "InlineFragment",
                                  "selections": [
                                    v3
                                  ],
                                  "type": "Node",
                                  "abstractKey": "__isNode"
                                }
                              ],
                              "storageKey": null
                            },
                            v3,
                            v2
                          ],
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "cursor",
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "PageInfo",
                      "kind": "LinkedField",
                      "name": "pageInfo",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "endCursor",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "hasNextPage",
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": v4,
                  "filters": [
                    "orderBy"
                  ],
                  "handle": "connection",
                  "key": "issuesPageQuery_issues",
                  "kind": "LinkedHandle",
                  "name": "issues"
                }
              ],
              "type": "Repository",
              "abstractKey": null
            }
          ],
          "storageKey": null
        }
      ]
    },
    "params": {
      "cacheID": "a8730faacc630e0fe2eab6938155e420",
      "id": null,
      "metadata": {},
      "name": "IssueListPaginationQuery",
      "operationKind": "query",
      "text": "query IssueListPaginationQuery(\n  $cursor: String\n  $first: Int\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...IssueList_repository\n    id\n  }\n}\n\nfragment IssueList_repository on Repository {\n  issues(after: $cursor, first: $first, orderBy: {field: CREATED_AT, direction: DESC}) {\n    edges {\n      node {\n        ...Issue_issue\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment Issue_issue on Issue {\n  title\n  createdAt\n  author {\n    __typename\n    login\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n  }\n}\n"
    }
  };
}();
node$2.hash = "db4f35b8bca0640fdd82b4590dfe8634";
const node$1 = function() {
  var v0 = [
    "issues"
  ];
  return {
    "argumentDefinitions": [
      {
        "kind": "RootArgument",
        "name": "cursor"
      },
      {
        "kind": "RootArgument",
        "name": "first"
      }
    ],
    "kind": "Fragment",
    "metadata": {
      "connection": [
        {
          "count": "first",
          "cursor": "cursor",
          "direction": "forward",
          "path": v0
        }
      ],
      "refetch": {
        "connection": {
          "forward": {
            "count": "first",
            "cursor": "cursor"
          },
          "backward": null,
          "path": v0
        },
        "fragmentPathInResult": [
          "node"
        ],
        "operation": node$2,
        "identifierField": "id"
      }
    },
    "name": "IssueList_repository",
    "selections": [
      {
        "alias": "issues",
        "args": [
          {
            "kind": "Literal",
            "name": "orderBy",
            "value": {
              "direction": "DESC",
              "field": "CREATED_AT"
            }
          }
        ],
        "concreteType": "IssueConnection",
        "kind": "LinkedField",
        "name": "__issuesPageQuery_issues_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "IssueEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Issue",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "Issue_issue"
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": '__issuesPageQuery_issues_connection(orderBy:{"direction":"DESC","field":"CREATED_AT"})'
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "type": "Repository",
    "abstractKey": null
  };
}();
node$1.hash = "db4f35b8bca0640fdd82b4590dfe8634";
const node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Issue_issue",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "author",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "login",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Issue",
  "abstractKey": null
};
node.hash = "ca40c873e6480517783ae0f773b1dec2";
const IssueComponent = ({
  issue
}) => {
  var _a;
  const data = reactRelay.useFragment(node, issue);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    children: [/* @__PURE__ */ jsxRuntime.jsx("a", {
      href: data.url,
      className: "text-lg underline transition-colors hover:text-gray-500",
      children: /* @__PURE__ */ jsxRuntime.jsx("h3", {
        children: data.title
      })
    }), /* @__PURE__ */ jsxRuntime.jsx("p", {
      children: (_a = data.author) == null ? void 0 : _a.login
    }), /* @__PURE__ */ jsxRuntime.jsx("p", {
      children: new Date(data.createdAt).toLocaleString()
    })]
  });
};
const IssueListComponent = ({
  repository
}) => {
  var _a;
  const {
    data
  } = reactRelay.usePaginationFragment(node$1, repository);
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    children: /* @__PURE__ */ jsxRuntime.jsx("ul", {
      className: "list-disc",
      children: ((_a = data.issues.edges) != null ? _a : []).map((edge, i) => /* @__PURE__ */ jsxRuntime.jsx("li", {
        className: "ml-4 my-2",
        children: /* @__PURE__ */ jsxRuntime.jsx(React.Suspense, {
          fallback: "Issue loading",
          children: /* @__PURE__ */ jsxRuntime.jsx(IssueComponent, {
            issue: edge == null ? void 0 : edge.node
          })
        })
      }, i)).filter(Boolean)
    })
  });
};
const head = __spreadProps(__spreadValues({}, _default_page.head), {
  title: "Issues: Vite SSR app"
});
const getQueryVariables = (routeParams) => __spreadProps(__spreadValues({}, routeParams), {
  first: 10,
  filter: {}
});
const query = node$3;
const Page = ({
  queryRef
}) => {
  const data = reactRelay.usePreloadedQuery(query, queryRef);
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ jsxRuntime.jsxs("h2", {
      className: "text-2xl",
      children: [/* @__PURE__ */ jsxRuntime.jsx("p", {
        children: "This page is for demonstrating paginated queries."
      }), data.repository && /* @__PURE__ */ jsxRuntime.jsx(React.Suspense, {
        fallback: "Loading...",
        children: /* @__PURE__ */ jsxRuntime.jsx(IssueListComponent, {
          repository: data.repository
        })
      })]
    })
  });
};
exports.Page = Page;
exports.getQueryVariables = getQueryVariables;
exports.head = head;
exports.query = query;

/**
 * @generated SignedSource<<451c5e6f7c32d8497c8fd9ee2cc4b213>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type pagesPageQuery$variables = {};
export type pagesPageQuery$data = {
  readonly repository: {
    readonly name: string;
    readonly stargazerCount: number;
    readonly issues: {
      readonly totalCount: number;
    };
    readonly openedIssues: {
      readonly totalCount: number;
    };
  } | null;
};
export type pagesPageQuery = {
  variables: pagesPageQuery$variables;
  response: pagesPageQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "creacte-vite-ssr"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "moogieon"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "stargazerCount",
  "storageKey": null
},
v3 = {
  "kind": "Literal",
  "name": "first",
  "value": 0
},
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
],
v5 = {
  "alias": null,
  "args": [
    (v3/*: any*/)
  ],
  "concreteType": "IssueConnection",
  "kind": "LinkedField",
  "name": "issues",
  "plural": false,
  "selections": (v4/*: any*/),
  "storageKey": "issues(first:0)"
},
v6 = {
  "alias": "openedIssues",
  "args": [
    {
      "kind": "Literal",
      "name": "filterBy",
      "value": {
        "states": "OPEN"
      }
    },
    (v3/*: any*/)
  ],
  "concreteType": "IssueConnection",
  "kind": "LinkedField",
  "name": "issues",
  "plural": false,
  "selections": (v4/*: any*/),
  "storageKey": "issues(filterBy:{\"states\":\"OPEN\"},first:0)"
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
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": "repository(name:\"creacte-vite-ssr\",owner:\"moogieon\")"
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
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "repository(name:\"creacte-vite-ssr\",owner:\"moogieon\")"
      }
    ]
  },
  "params": {
    "cacheID": "69619831d178fbc7d47ee088a3d2c66e",
    "id": null,
    "metadata": {},
    "name": "pagesPageQuery",
    "operationKind": "query",
    "text": "query pagesPageQuery {\n  repository(owner: \"moogieon\", name: \"creacte-vite-ssr\") {\n    name\n    stargazerCount\n    issues(first: 0) {\n      totalCount\n    }\n    openedIssues: issues(first: 0, filterBy: {states: OPEN}) {\n      totalCount\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "2f67cacd682ae7a6b2a3c28471899df0";

export default node;

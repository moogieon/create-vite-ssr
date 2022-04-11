/**
 * @generated SignedSource<<37466145ac4b2db02707a0eb5b0fa0fa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type issuesPageQuery$variables = {};
export type issuesPageQuery$data = {
  readonly repository: {
    readonly id: string;
  } | null;
};
export type issuesPageQuery = {
  variables: issuesPageQuery$variables;
  response: issuesPageQuery$data;
};

const node: ConcreteRequest = (function(){
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
    "storageKey": "repository(name:\"create-vite-ssr\",owner:\"moogieon\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "issuesPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "issuesPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "9bf44d7462baa24a2169bc4a316571d3",
    "id": null,
    "metadata": {},
    "name": "issuesPageQuery",
    "operationKind": "query",
    "text": "query issuesPageQuery {\n  repository(name: \"create-vite-ssr\", owner: \"moogieon\") {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d5161bff0601e5f6309f32a56988fe8d";

export default node;

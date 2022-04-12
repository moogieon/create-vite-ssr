/**
 * @generated SignedSource<<36ee9e0194fe744d2fc8ea9d799c5402>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type createIssueQuery$variables = {
  owner: string;
  name: string;
};
export type createIssueQuery$data = {
  readonly repository: {
    readonly id: string;
  } | null;
};
export type createIssueQuery = {
  variables: createIssueQuery$variables;
  response: createIssueQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "owner"
},
v2 = [
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
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "createIssueQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "createIssueQuery",
    "selections": (v2/*: any*/)
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
})();

(node as any).hash = "c35fb2631f094c2cac370997a0afad9e";

export default node;

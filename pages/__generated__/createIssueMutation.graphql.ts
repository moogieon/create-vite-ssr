/**
 * @generated SignedSource<<3823863bc0fc356488313d339509adb3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateIssueInput = {
  assigneeIds?: ReadonlyArray<string> | null;
  body?: string | null;
  clientMutationId?: string | null;
  issueTemplate?: string | null;
  labelIds?: ReadonlyArray<string> | null;
  milestoneId?: string | null;
  projectIds?: ReadonlyArray<string> | null;
  repositoryId: string;
  title: string;
};
export type createIssueMutation$variables = {
  input: CreateIssueInput;
};
export type createIssueMutation$data = {
  readonly createIssue: {
    readonly issue: {
      readonly number: number;
    } | null;
  } | null;
};
export type createIssueMutation = {
  variables: createIssueMutation$variables;
  response: createIssueMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "number",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "createIssueMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
              (v2/*: any*/)
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createIssueMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
              (v2/*: any*/),
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
})();

(node as any).hash = "fe1d9cbd9fccc5807db4d3b25bf7ae3c";

export default node;

/**
 * @generated SignedSource<<62e75d4300f97cfab4909c5470b626d9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssueDetail_issue$data = {
  readonly title: string;
  readonly createdAt: any;
  readonly author: {
    readonly login: string;
  } | null;
  readonly " $fragmentType": "IssueDetail_issue";
};
export type IssueDetail_issue$key = {
  readonly " $data"?: IssueDetail_issue$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueDetail_issue">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueDetail_issue",
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

(node as any).hash = "c1020f6ad1905a99d0781c5be6ec9b55";

export default node;

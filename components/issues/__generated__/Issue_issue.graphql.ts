/**
 * @generated SignedSource<<0ac0b40cfe9f33f37ed4c837e6220b91>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Issue_issue$data = {
  readonly title: string;
  readonly createdAt: any;
  readonly author: {
    readonly login: string;
  } | null;
  readonly " $fragmentType": "Issue_issue";
};
export type Issue_issue$key = {
  readonly " $data"?: Issue_issue$data;
  readonly " $fragmentSpreads": FragmentRefs<"Issue_issue">;
};

const node: ReaderFragment = {
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

(node as any).hash = "ca40c873e6480517783ae0f773b1dec2";

export default node;

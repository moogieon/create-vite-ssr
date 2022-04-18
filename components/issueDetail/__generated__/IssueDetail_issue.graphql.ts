/**
 * @generated SignedSource<<097b6f605e0cc8abce49430e46b7cb36>>
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
    }
  ],
  "type": "Issue",
  "abstractKey": null
};

(node as any).hash = "4cfb208f2f3137b64353005004b6c296";

export default node;

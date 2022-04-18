import React from "react";
import { useFragment, graphql } from "react-relay";

interface Props {
  issue: any;
}

const IssueDetailComponent: React.FC<Props> = ({ issue }) => {
  const data = useFragment(
    graphql`
      fragment IssueDetail_issue on Issue {
        title
      }
    `,
    issue
  );
  return (
    <>
      <div></div>
    </>
  );
};

export default IssueDetailComponent;

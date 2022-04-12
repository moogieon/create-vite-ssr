import React, { Suspense } from "react";
import { graphql, usePaginationFragment } from "react-relay";
import IssueComponent from "./Issue";
import { IssueList_repository$key } from "./__generated__/IssueList_repository.graphql";
interface Props {
  repository: IssueList_repository$key;
}

const IssueListComponent: React.FC<Props> = ({ repository }) => {
  const { data } = usePaginationFragment(
    graphql`
      fragment IssueList_repository on Repository
      @refetchable(queryName: "IssueListPaginationQuery") {
        issues(
          after: $cursor
          first: $first
          orderBy: { field: CREATED_AT, direction: DESC }
        ) @connection(key: "issuesPageQuery_issues") {
          edges {
            node {
              ...Issue_issue
            }
          }
        }
      }
    `,
    repository
  );

  return (
    <div>
      <ul className="list-disc">
        {(data.issues.edges ?? [])
          .map((edge, i) => (
            <li key={i} className="ml-4 my-2">
              <Suspense fallback={"Issue loading"}>
                <IssueComponent issue={edge?.node} />
              </Suspense>
            </li>
          ))
          .filter(Boolean)}
      </ul>
    </div>
  );
};

export default IssueListComponent;

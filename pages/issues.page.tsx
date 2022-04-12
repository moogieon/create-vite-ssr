import React, { Suspense } from "react";
import { graphql, usePreloadedQuery, type PreloadedQuery } from "react-relay";
import { head as defaultHead } from "../renderer/_default.page";
import { GetQueryVariables } from "vilay";
import {
  issuesPageQuery,
  issuesPageQuery$variables,
} from "./__generated__/issuesPageQuery.graphql";
import IssueListComponent from "../components/issues/IssueList";

interface Props {
  queryRef: PreloadedQuery<issuesPageQuery>;
}

interface RouteParams {
  owner: string;
  name: string;
}
export const head = { ...defaultHead, title: "Issues: Vite SSR app" };

export const getQueryVariables: GetQueryVariables<
  RouteParams,
  issuesPageQuery$variables
> = (routeParams) => ({
  ...routeParams,
  first: 10,
  filter: {},
});

export const query = graphql`
  query issuesPageQuery(
    $owner: String!
    $name: String!
    $cursor: String
    $first: Int!
  ) {
    repository(name: $name, owner: $owner) {
      ...IssueList_repository
    }
  }
`;
export const Page: React.FC<Props> = ({ queryRef }) => {
  const data = usePreloadedQuery<issuesPageQuery>(query, queryRef);
  return (
    <>
      <h2 className="text-2xl">
        <p>This page is for demonstrating paginated queries.</p>
          {data.repository && (
            <Suspense fallback={"Loading..."}>
              <IssueListComponent repository={data.repository} />
            </Suspense>
          )}
   
      </h2>
    </>
  );
};

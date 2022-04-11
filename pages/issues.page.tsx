import React from "react";
import { graphql, usePreloadedQuery, type PreloadedQuery } from "react-relay";
import { head as defaultHead } from "../renderer/_default.page";
import { GetQueryVariables } from "vilay";
import {
  issuesPageQuery,
  issuesPageQuery$variables,
} from "./__generated__/issuesPageQuery.graphql";

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
    $filter: IssueFilters
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
      <h2>
        <p>{data.repository?.id}</p>
      </h2>
    </>
  );
};

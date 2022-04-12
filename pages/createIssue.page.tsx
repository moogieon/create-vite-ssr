import React from "react";
import { graphql, useMutation } from "react-relay";
import { createIssueMutation } from "./__generated__/createIssueMutation.graphql";
export const query = graphql`
  query createIssueQuery($owner: String!, $name: String!) {
    repository(name: $name, owner: $owner) {
      id
    }
  }
`;
export const [commit, isInFlight] = useMutation<createIssueMutation>(graphql`
  mutation createIssueMutation($input: CreateIssueInput!) {
    createIssue(input: $input) {
      issue {
        number
      }
    }
  }
`);

export const Page: React.FC = () => {
  return (
    <>
      <form>
        <div></div>
      </form>
    </>
  );
};

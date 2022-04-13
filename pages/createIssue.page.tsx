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
    <form onSubmit={onFormSubmit}>
    <div className="my-2">
      <label htmlFor="title-input">Title</label>
      <input
        id="title-input"
        type="text"
        name="title"
        required
        className="mx-2 border-b border-gray-500"
      />
    </div>
    <div className="my-2">
      <label htmlFor="body-input">Body</label>
      <br />
      <textarea
        id="body-input"
        name="body"
        className="my-1 border border-gray-500 rounded-xl p-3 resize-none"
        placeholder="Write something..."
      />
    </div>
    {/* <Button type="submit" disabled={isInFlight}>
      {isInFlight ? 'Creating...' : 'Create'}
    </Button> */}
  </form>
  );
};

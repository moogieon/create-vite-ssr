import React from "react";
import {
  graphql,
  useMutation,
  usePreloadedQuery,
  type PreloadedQuery,
} from "react-relay";
import Button from "../components/Button";
import { createIssueMutation } from "./__generated__/createIssueMutation.graphql";
import { createIssueQuery } from "./__generated__/createIssueQuery.graphql";

interface Props {
  queryRef: PreloadedQuery<createIssueQuery>;
}
export const query = graphql`
  query createIssueQuery($owner: String!, $name: String!) {
    repository(name: $name, owner: $owner) {
      id
    }
  }
`;

export const Page: React.FC<Props> = ({ queryRef }) => {
  const data = usePreloadedQuery<createIssueQuery>(query, queryRef);
  const [commit, isInFlight] = useMutation<createIssueMutation>(graphql`
    mutation createIssueMutation($input: CreateIssueInput!) {
      createIssue(input: $input) {
        issue {
          number
        }
      }
    }
  `);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title");
    const body = formData.get("body");

    if (data.repository?.id && title) {
      commit({
        variables: {
          input: {
            repositoryId: data.repository.id,
            title: title as string,
            body: body as string | null,
          },
        },
        onCompleted(res) {
          const number = res.createIssue?.issue?.number;
          if (number) {
            alert(`Issue created with number #${number}`);
          } else {
            alert("Something went wrong!");
          }
        },
        onError(err) {
          alert(`Something went wrong: ${err.message}`);
        },
      });
    } else {
      alert("Please fill out the form.");
    }
  };

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
      <Button type="submit" disabled={isInFlight}>
        {isInFlight ? "Creating..." : "Create"}
      </Button>
    </form>
  );
};

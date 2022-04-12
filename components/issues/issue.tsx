import React from "react";
import { graphql, useFragment } from "react-relay";

interface Props {
  issue: any;
}

const IssueComponent: React.FC<Props> = ({ issue }) => {
  const data = useFragment(
    graphql`
      fragment Issue_issue on Issue {
        title
        createdAt
        author {
          login
        }
      }
    `,
    issue
  );
  return (
    <div>
      <a
        href={data.url}
        className="text-lg underline transition-colors hover:text-gray-500"
      >
        <h3>{data.title}</h3>
      </a>
      <p>{data.author?.login}</p>
      <p>{new Date(data.createdAt).toLocaleString()}</p>
    </div>
  );
};

export default IssueComponent;

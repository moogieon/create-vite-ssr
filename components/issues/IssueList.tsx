import React from "react";

const IssueListComponent: React.FC<Props> = () => {
  return (
    <>
      <div className="py-4">
        <Button onClick={() => setOnlyOpened(!onlyOpened)}>
          Toggle opened filter: {onlyOpened ? "ON" : "OFF"}
        </Button>
        <ul className="list-disc">
          {(data.issues.edges ?? [])
            .map(
              (edge, i) =>
                edge?.node && (
                  <li key={i} className="ml-4 my-2">
                    <Suspense fallback={"Issue loading..."}>
                      <IssueComponent issue={edge.node} />
                    </Suspense>
                  </li>
                )
            )
            .filter(Boolean)}
        </ul>
        {isLoadingNext
          ? "Loading more..."
          : data.issues.pageInfo.hasNextPage && (
              <Button onClick={() => loadNext(10)}>Load more</Button>
            )}
      </div>
    </>
  );
};
export default IssueListComponent;

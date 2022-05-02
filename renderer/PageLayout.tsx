import React from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import type { PageLayoutProps } from "vilay";
import "@unocss/reset/tailwind.css";
import "uno.css";
import { fetch } from "ohmyfetch";
export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  // true while the route is transitioning with `startTransition()`
  routeTransitioning,
}) => {
  const links = {
    "/": "Home",
    "/repo/moogieon/create-vite-ssr/issues": "Issues",
    "/repo/moogieon/create-vite-ssr/issues/create": "Create Issue",
  };

  return (
    <>
      <LoadingIndicator transitioning={routeTransitioning} />
      <div className="flex max-w-900px m-auto">
        <div className="p-5 flex-shrink-0 flex flex-col items-end leading-7">
          <h1 className="my-4 text-2xl">Vite SSR Relay</h1>
          {Object.entries(links).map(([href, text]) => (
            <a
              href={href}
              key={href}
              className="text-base hover:text-1.05rem transition-all duration-300"
            >
              {text}
            </a>
          ))}
        </div>
        <div className="p-5 pb-12 border-l-2 border-#eee min-h-screen">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
          <React.Suspense fallback={"Loading..."}>{children}</React.Suspense>
          </ErrorBoundary>
          <LoginPage>
            <React.Suspense fallback={"Loading..."}>{children}</React.Suspense>
          </LoginPage>
        </div>
      </div>
    </>
  );
};

const LoadingIndicator: React.FC<{ transitioning: boolean }> = ({
  transitioning,
}) => {
  return (
    <div
      className="absolute left-0 right-0 top-0 h-2 bg-green-200 transition-opacity duration-300"
      style={{ opacity: transitioning ? 100 : 0 }}
    />
  );
};

const LoginPage: React.FC = () => {
  const clinetID = import.meta.env.GITHUB_CLIENT_ID;
  const clientPW = import.meta.env.GITHUB_CLIENT_TOKEN;

  const getAccessToken = async () => {
    const response = await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${aaa}`,
      },
      body: JSON.stringify({ query, variables }),
    });

  };


  return (
    <>
      <a href="https://github.com/login/oauth/authorize?client_id=50d124eeeb59ce45a48a&scope=read:user user:email">
        <div className="flex items-center border pl-2 pr-10 cursor-pointer">
          <svg
            className="mt-2"
            aria-hidden="true"
            role="img"
            viewBox="0 0 16 16"
            width="32"
            height="32"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
          <p>GitHub 아이디로 로그인</p>
        </div>
      </a>
    </>
  );
};
const ErrorFallback: React.FC<FallbackProps> = ({ error }) => {
  return <>Error: {error.message}</>
}

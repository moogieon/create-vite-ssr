"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var React = require("react");
var reactErrorBoundary = require("react-error-boundary");
var jsxRuntime = require("react/jsx-runtime");
var relayRuntime = require("relay-runtime");
var ohmyfetch = require("ohmyfetch");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
var tailwind = "";
var __uno = "";
const PageLayout = ({
  children,
  routeTransitioning
}) => {
  const links = {
    "/": "Home",
    "/repo/xiniha/vilay/issues": "Issues",
    "/repo/xiniha/vilay/issues/create": "Create Issue"
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx(LoadingIndicator, {
      transitioning: routeTransitioning
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "flex max-w-900px m-auto",
      children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: "p-5 flex-shrink-0 flex flex-col items-end leading-7",
        children: [/* @__PURE__ */ jsxRuntime.jsx("h1", {
          className: "my-4 text-2xl",
          children: "Vite SSR Relay"
        }), Object.entries(links).map(([href, text]) => /* @__PURE__ */ jsxRuntime.jsx("a", {
          href,
          className: "text-base hover:text-1.05rem transition-all duration-300",
          children: text
        }, href))]
      }), /* @__PURE__ */ jsxRuntime.jsx("div", {
        className: "p-5 pb-12 border-l-2 border-#eee min-h-screen",
        children: /* @__PURE__ */ jsxRuntime.jsx(reactErrorBoundary.ErrorBoundary, {
          FallbackComponent: ErrorFallback,
          children: /* @__PURE__ */ jsxRuntime.jsx(React__default["default"].Suspense, {
            fallback: "Loading...",
            children
          })
        })
      })]
    })]
  });
};
const LoadingIndicator = ({
  transitioning
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    className: "absolute left-0 right-0 top-0 h-2 bg-green-200 transition-opacity duration-300",
    style: {
      opacity: transitioning ? 100 : 0
    }
  });
};
const ErrorFallback = ({
  error
}) => {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: ["Error: ", error.message]
  });
};
const initRelayEnvironment = (isServer, records) => {
  const network = relayRuntime.Network.create(async ({ text: query }, variables) => {
    const response = await ohmyfetch.fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${"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"}`
      },
      body: JSON.stringify({ query, variables })
    });
    if (response.status !== 200) {
      console.error(await response.text());
      throw new Error("Relay Network Error: Invalid response from server");
    }
    return await response.json();
  });
  const source = new relayRuntime.RecordSource(records);
  const store = new relayRuntime.Store(source, { gcReleaseBufferSize: 10 });
  return new relayRuntime.Environment({
    configName: isServer ? "server" : "client",
    network,
    store
  });
};
const head = {
  title: "Vite SSR app",
  meta: {
    description: "App using Vite + vite-plugin-ssr"
  }
};
exports.PageLayout = PageLayout;
exports.head = head;
exports.initRelayEnvironment = initRelayEnvironment;

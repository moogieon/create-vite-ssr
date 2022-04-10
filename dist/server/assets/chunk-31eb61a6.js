"use strict";
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _currentPage, _queryRef, _listeners;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var vitePluginSsr = require("vite-plugin-ssr");
var server = require("react-dom/server");
var reactRelay = require("react-relay");
var React = require("react");
var jsxRuntime = require("react/jsx-runtime");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    Object.keys(e).forEach(function(k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
var React__namespace = /* @__PURE__ */ _interopNamespace(React);
var React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
var config = { "ssr": { "initialSendTimeout": 0, "abortTimeout": 5e3 } };
var preloadQuery = (pageContext, relayEnvironment) => {
  var _a2, _b, _c, _d;
  const query = (_a2 = pageContext.exports) == null ? void 0 : _a2.query;
  const getQueryVariables = (_b = pageContext.exports) == null ? void 0 : _b.getQueryVariables;
  const routeParams = (_c = pageContext.routeParams) != null ? _c : {};
  return query && reactRelay.loadQuery(relayEnvironment, query, (_d = getQueryVariables == null ? void 0 : getQueryVariables(routeParams)) != null ? _d : routeParams);
};
class RouteManager {
  constructor(params) {
    __privateAdd(this, _currentPage, null);
    __privateAdd(this, _queryRef, null);
    __privateAdd(this, _listeners, /* @__PURE__ */ new Set());
    if (params) {
      __privateSet(this, _currentPage, params.initialPage);
      __privateSet(this, _queryRef, params.queryRef);
    }
  }
  get currentPage() {
    return __privateGet(this, _currentPage);
  }
  get queryRef() {
    return __privateGet(this, _queryRef);
  }
  setPage(page, queryRef) {
    __privateSet(this, _currentPage, page);
    __privateSet(this, _queryRef, queryRef);
    for (const listener of __privateGet(this, _listeners)) {
      listener();
    }
  }
  addListener(listener) {
    __privateGet(this, _listeners).add(listener);
  }
  deleteListener(listener) {
    __privateGet(this, _listeners).delete(listener);
  }
}
_currentPage = new WeakMap();
_queryRef = new WeakMap();
_listeners = new WeakMap();
const useRouteManager = (routeManager) => {
  const [transitioning, setTransitioning] = React__namespace.useState(false);
  const [{ currentPage, queryRef }, setRouterState] = React__namespace.useState({
    currentPage: routeManager.currentPage,
    queryRef: routeManager.queryRef
  });
  const [, startTransition] = React__namespace.useTransition();
  React__namespace.useEffect(() => {
    const listener = () => {
      setTransitioning(true);
      startTransition(() => {
        setRouterState({
          currentPage: routeManager.currentPage,
          queryRef: routeManager.queryRef
        });
        setTransitioning(false);
      });
    };
    routeManager.addListener(listener);
    return () => routeManager.deleteListener(listener);
  }, [routeManager, setRouterState, setTransitioning, startTransition]);
  return [currentPage, queryRef, transitioning];
};
const Context = React__default["default"].createContext(void 0);
const PageContextProvider = ({
  pageContext,
  children
}) => {
  return /* @__PURE__ */ jsxRuntime.jsx(Context.Provider, {
    value: pageContext,
    children
  });
};
const PageShell = ({
  pageContext,
  relayEnvironment,
  routeManager
}) => {
  var _a2, _b;
  const PageLayout = (_b = (_a2 = pageContext.exports) == null ? void 0 : _a2.PageLayout) != null ? _b : Passthrough;
  const [CurrentPage, queryRef, routeTransitioning] = useRouteManager(routeManager);
  return /* @__PURE__ */ jsxRuntime.jsx(React__default["default"].StrictMode, {
    children: /* @__PURE__ */ jsxRuntime.jsx(reactRelay.RelayEnvironmentProvider, {
      environment: relayEnvironment,
      children: /* @__PURE__ */ jsxRuntime.jsx(PageContextProvider, {
        pageContext,
        children: /* @__PURE__ */ jsxRuntime.jsx(PageLayout, {
          routeTransitioning,
          children: CurrentPage && /* @__PURE__ */ jsxRuntime.jsx(CurrentPage, {
            queryRef
          })
        })
      })
    })
  });
};
const Passthrough = ({
  children
}) => /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {
  children
});
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const passToClient = ["routeParams", "relayInitialData"];
async function render(pageContext) {
  const {
    initialCompletion,
    totalCompletion,
    pipe,
    getStoreSource
  } = renderReact(pageContext);
  const {
    exports: exports2
  } = pageContext;
  const headTags = [];
  if (exports2.head) {
    for (const [tag, value] of Object.entries(exports2.head)) {
      if (tag === "meta") {
        for (const [name, content] of Object.entries(value)) {
          headTags.push(`<meta name="${name}" content="${content}">`);
        }
      } else {
        headTags.push(`<${tag}>${value}</${tag}>`);
      }
    }
  }
  await initialCompletion;
  const documentHtml = vitePluginSsr.escapeInject(_a || (_a = __template(['<!DOCTYPE html>\n    <html lang="en">\n      <head>\n        <meta charset="UTF-8" />\n        <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n        <!-- vilay-head-start -->\n        ', '\n        <!-- vilay-head-end -->\n      </head>\n      <body>\n        <div id="page-view">', "</div>\n        <script>let global = globalThis;<\/script>\n      </body>\n    </html>"])), vitePluginSsr.dangerouslySkipEscape(headTags.join("\n")), vitePluginSsr.pipeNodeStream(pipe));
  return {
    documentHtml,
    pageContext: totalCompletion.then(() => ({
      relayInitialData: getStoreSource().toJSON()
    })).catch(() => ({}))
  };
}
const renderReact = (pageContext) => {
  const {
    Page,
    exports: {
      initRelayEnvironment
    }
  } = pageContext;
  const relayEnvironment = initRelayEnvironment(true);
  const relayQueryRef = preloadQuery(pageContext, relayEnvironment);
  let resolveInitial;
  let rejectInitial;
  let resolveTotal;
  let rejectTotal;
  let initialResolved = false;
  let totalResolved = false;
  const initialCompletion = new Promise((res, rej) => {
    resolveInitial = () => {
      initialResolved = true;
      res(true);
    };
    rejectInitial = rej;
  });
  const totalCompletion = new Promise((res, rej) => {
    resolveTotal = () => {
      totalResolved = true;
      res(true);
    };
    rejectTotal = rej;
  });
  const {
    pipe,
    abort: _abort
  } = server.renderToPipeableStream(/* @__PURE__ */ jsxRuntime.jsx(PageShell, {
    pageContext,
    relayEnvironment,
    routeManager: new RouteManager({
      initialPage: Page,
      queryRef: relayQueryRef
    })
  }), {
    onAllReady: () => {
      if (!initialResolved)
        resolveInitial();
      if (!totalResolved)
        resolveTotal();
    },
    onError: (err) => {
      console.error("React SSR Error", err);
      if (!initialResolved)
        rejectInitial(err);
      if (!totalResolved)
        rejectTotal(err);
    }
  });
  const abortRender = () => {
    _abort();
    if (!initialResolved)
      rejectInitial(new Error("React SSR Error: Aborted"));
    if (!totalResolved)
      rejectTotal(new Error("React SSR Error: Aborted"));
  };
  setTimeout(() => initialResolved || resolveInitial(), config.ssr.initialSendTimeout);
  setTimeout(() => totalResolved || abortRender(), config.ssr.abortTimeout);
  const getStoreSource = () => relayEnvironment.getStore().getSource();
  return {
    initialCompletion,
    totalCompletion,
    pipe,
    getStoreSource
  };
};
exports.passToClient = passToClient;
exports.render = render;

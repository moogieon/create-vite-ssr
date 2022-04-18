var pe=Object.defineProperty;var Y=Object.getOwnPropertySymbols;var ge=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var K=(e,t,r)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))ge.call(t,r)&&K(e,r,t[r]);if(Y)for(var r of Y(t))he.call(t,r)&&K(e,r,t[r]);return e};const p={};function me(e,t){e.stack=_e(e.stack,t)}function _e(e,t){if(!e)return e;const r=ve(e);let n=0;return r.filter(o=>o.includes(" (internal/")||o.includes(" (node:internal")?!1:n<t&&ye(o)?(n++,!1):!0).join(`
`)}function ye(e){return e.startsWith("    at ")}function ve(e){return e.split(/\r?\n/)}function G(e,t){let r;{var n=Error.stackTraceLimit;Error.stackTraceLimit=1/0,r=new Error(e),Error.stackTraceLimit=n}return me(r,t),r}const xe="0.3.61",y={projectName:"vite-plugin-ssr",projectVersion:xe,npmPackageName:"vite-plugin-ssr",githubRepository:"https://github.com/brillout/vite-plugin-ssr",discordInviteToolChannel:"https://discord.com/invite/qTq92FQzKb"},T=`[${y.npmPackageName}@${y.projectVersion}]`,be=`${T}[Bug]`,Ee=`${T}[Wrong Usage]`,Se=`${T}[Warning]`,V=2;function i(e,t){if(e)return;const r=(()=>{if(!t)return"";const s=typeof t=="string"?t:"`"+JSON.stringify(t)+"`";return`Debug info (this is for the ${y.projectName} maintainers; you can ignore this): ${s}.`})();throw G([`${be} You stumbled upon a bug in ${y.projectName}'s source code.`,`Reach out at ${y.githubRepository}/issues/new or ${y.discordInviteToolChannel} and include this error stack (the error stack is usually enough to fix the problem).`,"A maintainer will fix the bug (usually under 24 hours).",`Do not hesitate to reach out as it makes ${y.projectName} more robust.`,r].join(" "),V)}function W(e,t){if(e)return;const r=t.startsWith("[")?"":" ";throw G(`${Ee}${r}${t}`,V)}function Fe(e){return G(`${T} ${e}`,V)}let Q=new Set;function ne(e,t,{onlyOnce:r}){if(e)return;const n=`${Se} ${t}`;if(r){const s=r===!0?n:r;if(Q.has(s))return;Q.add(s)}console.warn(n)}function R(e,t,r){return typeof e=="string"?X(e.split(""),t,r).join(""):X(e,t,r)}function X(e,t,r){const n=[];let s=t>=0?t:e.length+t;i(s>=0&&s<=e.length);let o=r>=0?r:e.length+r;for(i(o>=0&&o<=e.length);!(s===o||(s===e.length&&(s=0),s===o));){const a=e[s];i(a!==void 0),n.push(a),s++}return n}function We(e){e=ie(e);const{origin:t,searchString:r,hashString:n,pathnameWithoutBaseUrl:s}=se(e,"/"),o=`${s}${r||""}${n||""}`,a=`${t||""}${o}`,c=decodeURI(e);return i(c===a,{url:e,urlRecreated:a,urlDecoded:c}),o}function Pe(e){return e=ie(e),se(e,"/").pathnameWithoutBaseUrl}function we(e){return e=decodeURI(e),e.startsWith("//")?!1:!!(e.startsWith("/")||e.startsWith("http")||e.startsWith(".")||e.startsWith("?")||e.startsWith("#")||e==="")}function se(e,t){i(we(e),{url:e}),e=decodeURI(e),i(t.startsWith("/"),{url:e,baseUrl:t});const[r,...n]=e.split("#");i(r!==void 0);const s=["",...n].join("#")||null;i(s===null||s.startsWith("#"));const o=s===null?"":decodeURIComponent(s.slice(1)),[a,...c]=r.split("?");i(a!==void 0,{url:e,urlWithoutSearch:a});const l=["",...c].join("?")||null;i(l===null||l.startsWith("?"),{url:e,searchString:l});const h=Object.fromEntries(Array.from(new URLSearchParams(l||""))),{origin:g,pathname:u}=je(a);i(u.startsWith("/"),{url:e,pathnameWithBaseUrl:u}),i(g===null||e.startsWith(g),{url:e,origin:g}),e.startsWith("/")&&i(u===a.slice((g||"").length),{url:e,pathnameWithBaseUrl:u,urlWithoutSearch:a,origin:g});const{pathnameWithoutBaseUrl:v,hasBaseUrl:P}=ze(u,t);if(e.startsWith("/")||e.startsWith("http")){const E=`${g||""}${u}${l||""}${s||""}`;i(e===E,{url:e,urlRecreated:E})}return i(u.startsWith("/"),{url:e,pathnameWithBaseUrl:u}),i(v.startsWith("/"),{url:e,pathnameWithoutBaseUrl:v}),{origin:g,pathnameWithoutBaseUrl:v,pathnameWithBaseUrl:u,hasBaseUrl:P,search:h,searchString:l,hash:o,hashString:s}}function Ct(e){const r=We(e).split("#")[0];return i(r),r}function ie(e){return e||(e=window.location.href),e}function je(e){var t;let r,n;try{const s=new URL(e);r=s.origin,n=s.pathname}catch{r=null;const o=typeof window!="undefined"&&((t=window==null?void 0:window.document)===null||t===void 0?void 0:t.baseURI);i(o||!e.startsWith(".")),i(o||e.startsWith("/")||e.startsWith("?"));const a=o||"http://fake-origin.example.org";n=new URL(e,a).pathname}return r&&(r=decodeURI(r)),n=decodeURI(n),i(n.startsWith("/"),{url:e,pathname:n}),i(n===n.split("?")[0].split("#")[0],{pathname:n}),{origin:r,pathname:n}}function Ne(e){i(e.startsWith("/"))}function Re(e){i(e.startsWith("/")),i(!e.includes("?")),i(!e.includes("#"))}function ze(e,t){Re(e),Ne(t);let r=e;if(i(r.startsWith("/")),i(t.startsWith("/")),t==="/")return{pathnameWithoutBaseUrl:e,hasBaseUrl:!0};let n=t,s=Pe(r);return t.endsWith("/")&&s===R(t,0,-1)&&(n=R(t,0,-1),i(s===n)),r.startsWith(n)?(i(r.startsWith("/")||r.startsWith("http")),i(r.startsWith(n)),r=r.slice(n.length),r.startsWith("/")||(r="/"+r),i(r.startsWith("/")),{pathnameWithoutBaseUrl:r,hasBaseUrl:!0}):{pathnameWithoutBaseUrl:e,hasBaseUrl:!1}}function oe(e,t){Object.assign(e,t)}function q(e){return e instanceof Function||typeof e=="function"}function z(e){return typeof e=="object"&&e!==null}function Te(e){return Array.from(new Set(e))}function Le(){return typeof window!="undefined"&&typeof window.scrollY=="number"}function d(e,t,r="unknown"){if(!(typeof e=="object"&&e!==null&&t in e))return!1;if(r==="unknown")return!0;const s=e[t];return r==="array"?Array.isArray(s):r==="string[]"?Array.isArray(s)&&s.every(o=>typeof o=="string"):r==="function"?q(s):Array.isArray(r)?typeof s=="string"&&r.includes(s):r==="null"?s===null:r==="undefined"?s===void 0:typeof s===r}function $e(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const Oe="\\";function F(e){i(!e.includes(Oe),`Wrongly formatted path: ${e}`)}function Ie(e){return i(!e.includes("\\")),e.includes("/_error")}function ae(e){const t=".page.",r=R(e.split(t),0,-1).join(t);return i(!r.includes("\\")),r}Ce();const ke=[".page",".page.server",".page.route",".page.client"];let O;function Ue(e){O=Be(e)}function Ht(){i(O);const e=O,t=Je(e);return{pageFilesAll:e,allPageIds:t}}function Be(e){i(d(e,"isGeneratedFile"),"Missing `isGeneratedFile`."),i(e.isGeneratedFile!==!1,"vite-plugin-ssr was re-installed(/re-built). Restart your app."),i(e.isGeneratedFile===!0,`\`isGeneratedFile === ${e.isGeneratedFile}\``),i(d(e,"pageFilesLazy","object")),i(d(e,"pageFilesEager","object")),i(d(e,"pageFilesExportNamesLazy","object")),i(d(e,"pageFilesExportNamesEager","object")),i(d(e.pageFilesLazy,".page")),i(d(e.pageFilesLazy,".page.route")||d(e.pageFilesEager,".page.route")),i(d(e.pageFilesLazy,".page.client")||d(e.pageFilesLazy,".page.server"));const t={};j(e.pageFilesLazy,t,(n,s)=>{const o=s;Z(o),n.loadFile=async()=>{"fileExports"in n||(n.fileExports=await o())}}),j(e.pageFilesExportNamesLazy,t,(n,s)=>{const o=s;Z(o),n.loadExportNames=async()=>{if(!("exportNames"in n)){const a=await o();i(d(a,"exportNames","string[]"),n.filePath),n.exportNames=a.exportNames}}}),j(e.pageFilesEager,t,(n,s)=>{const o=s;i(z(o)),n.fileExports=o}),j(e.pageFilesExportNamesEager,t,(n,s)=>{const o=s;i(z(o)),i(d(o,"exportNames","string[]"),n.filePath),n.exportNames=o.exportNames});const r=Object.values(t);return r.forEach(({filePath:n})=>{i(!n.includes("\\"))}),r}function Z(e){i(q(e))}function j(e,t,r){Object.entries(e).forEach(([n,s])=>{i(ke.includes(n)),i(z(s)),Object.entries(s).forEach(([o,a])=>{var c;const l=g=>h.pageId===g||h.isDefaultPageFile&&(h.isRendererPageFile||Ye(g,h.filePath)),h=t[o]=(c=t[o])!==null&&c!==void 0?c:{filePath:o,fileType:n,isRelevant:l,isDefaultPageFile:le(o),isRendererPageFile:Me(o),isErrorPageFile:Ie(o),pageId:ae(o)};r(h,a)})})}function le(e){return F(e),i(e.startsWith("/")),e.includes("/_default")}function Me(e){return F(e),i(e.startsWith("/")),e.includes("/renderer/")}async function Gt(e,t,r){const n=Ae(e,t,r);await Promise.all(n.map(l=>{var h;return(h=l.loadFile)===null||h===void 0?void 0:h.call(l)}));const s=He(),o={},a={};n.forEach(({filePath:l,fileType:h,fileExports:g})=>{Object.entries(g!=null?g:{}).forEach(([u,v])=>{var P,E;o[u]=(P=o[u])!==null&&P!==void 0?P:v,h===".page"&&(u in s||(s[u]=v)),a[u]=(E=a[u])!==null&&E!==void 0?E:[],a[u].push({filePath:l,exportValue:v})})});{const l=qe(a,"customExports");Ve(n,l)}return{exports:o,pageExports:s,exportsAll:a}}function Ae(e,t,r){const n=r?".page.client":".page.server",s=[...e.filter(a=>a.isDefaultPageFile&&a.isRelevant(t)&&a.fileType===n),...e.filter(a=>a.isDefaultPageFile&&a.isRelevant(t)&&a.fileType===".page")];return s.sort(De(n,t)),[...e.filter(a=>a.pageId===t&&a.fileType===n),...e.filter(a=>a.pageId===t&&a.fileType===".page"),...s]}function De(e,t){return(o,a)=>{i(o.isDefaultPageFile&&a.isDefaultPageFile);{const c=o.isRendererPageFile,l=a.isRendererPageFile;if(!c&&l)return-1;if(!l&&c)return 1;i(c===l)}{const c=ee(t,o.filePath),l=ee(t,a.filePath);if(c<l)return-1;if(l<c)return 1;i(c===l)}{if(o.fileType===e&&a.fileType!==e)return-1;if(a.fileType===e&&o.fileType!==e)return 1}return 0}}function Ce(){const e=Symbol(),t=Le()?window:global;i(!t[e]),t[e]=!0}function He(){return new Proxy({},{get(...e){return ne(!1,"`pageContext.pageExports` is deprecated. Use `pageContext.exports` instead, see https://vite-plugin-ssr.com/exports",{onlyOnce:!0}),Reflect.get(...e)}})}const x=e=>e.fileType===".page.route",S=e=>e.fileType===".page.client",w=e=>e.fileType===".page.server",m=e=>e.isDefaultPageFile,_=(e,t)=>r=>e(r)&&t(r),Ge=(e,t)=>r=>e(r)||t(r),b=e=>t=>!e(t),$={default:b(_(x,m)),render:Ge(S,w),onBeforeRender:b(x),customExports:_(m,b(x)),iKnowThePerformanceRisksOfAsyncRouteFunctions:_(x,b(m)),filesystemRoutingRoot:_(x,m),onBeforeRoute:_(x,m),Page:_(b(m),b(x)),prerender:w,passToClient:w,doNotPrerender:_(w,b(m)),onBeforePrerender:_(w,m),clientRouting:S,onHydrationEnd:S,onPageTransitionStart:S,onPageTransitionEnd:S,prefetchLinks:S};function Ve(e,t){t.forEach(r=>{W(!Object.keys($).includes(r),`\`export { customExports }\` contains \`${r}\` which is forbidden because it is an 'export\` already used by vite-plugin-ssr.`)}),e.forEach(r=>{var n;Object.keys((n=r.fileExports)!==null&&n!==void 0?n:{}).forEach(s=>{var o;!((o=$[s])===null||o===void 0)&&o.call($,r)||ne(t.includes(s),`Unknown \`export { ${s} }\` at ${r.filePath}. See https://vite-plugin-ssr/customExports if you want to define a custom export.`,{onlyOnce:`unkown-export-${s}`})})})}function qe(e,t){var r,n;return(n=(r=e[t])===null||r===void 0?void 0:r.map(s=>(W(d(s,"exportValue","string[]"),`\`export { ${t} }\` of ${s.filePath} should be an array of strings.`),s.exportValue)).flat())!==null&&n!==void 0?n:[]}function Je(e){const t=e.filter(({isDefaultPageFile:n})=>!n).map(({filePath:n})=>n).map(ae);return Te(t)}function ee(e,t){F(e),F(t),i(e.startsWith("/")),i(t.startsWith("/"));let r=0;for(;r<e.length&&r<t.length&&e[r]===t[r];r++);const n=e.slice(r),s=t.slice(r),o=n.split("/").length,a=s.split("/").length;return o+a}function Ye(e,t){F(e),F(t),i(e.startsWith("/")),i(t.startsWith("/")),i(!e.endsWith("/")),i(!t.endsWith("/")),i(le(t));const r=R(t.split("/"),0,-1).join("/");return e.startsWith(r)}var Ke="/repo/:owner/:name/issues/create",Qe=Object.freeze(Object.defineProperty({__proto__:null,default:Ke},Symbol.toStringTag,{value:"Module"})),Xe="/repo/:owner/:name/issues",Ze=Object.freeze(Object.defineProperty({__proto__:null,default:Xe},Symbol.toStringTag,{value:"Module"}));const I=["clientRouting","render"];p.hot&&p.hot.accept(e=>{I.length=0,I.push(...e.exportNames)});var et=Object.freeze(Object.defineProperty({__proto__:null,exportNames:I},Symbol.toStringTag,{value:"Module"}));const k=["passToClient","render"];p.hot&&p.hot.accept(e=>{k.length=0,k.push(...e.exportNames)});var tt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:k},Symbol.toStringTag,{value:"Module"}));const U=["query","Page"];p.hot&&p.hot.accept(e=>{U.length=0,U.push(...e.exportNames)});var rt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:U},Symbol.toStringTag,{value:"Module"}));const B=["query","Page"];p.hot&&p.hot.accept(e=>{B.length=0,B.push(...e.exportNames)});var nt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:B},Symbol.toStringTag,{value:"Module"}));const M=["head","getQueryVariables","query","Page"];p.hot&&p.hot.accept(e=>{M.length=0,M.push(...e.exportNames)});var st=Object.freeze(Object.defineProperty({__proto__:null,exportNames:M},Symbol.toStringTag,{value:"Module"}));const A=["PageLayout","initRelayEnvironment","head"];p.hot&&p.hot.accept(e=>{A.length=0,A.push(...e.exportNames)});var it=Object.freeze(Object.defineProperty({__proto__:null,exportNames:A},Symbol.toStringTag,{value:"Module"}));const D=["customExports"];p.hot&&p.hot.accept(e=>{D.length=0,D.push(...e.exportNames)});var ot=Object.freeze(Object.defineProperty({__proto__:null,exportNames:D},Symbol.toStringTag,{value:"Module"}));const C=["Page"];p.hot&&p.hot.accept(e=>{C.length=0,C.push(...e.exportNames)});var at=Object.freeze(Object.defineProperty({__proto__:null,exportNames:C},Symbol.toStringTag,{value:"Module"}));const J={},ce={},lt={},L={},ue={},ct=!0,ut={"/pages/createIssue.page.tsx":()=>import("./createIssue.page.aafd743d.js"),"/pages/index.page.tsx":()=>import("./index.page.513e7f97.js"),"/pages/issues.page.tsx":()=>import("./issues.page.37533332.js"),"/renderer/_default.page.tsx":()=>import("./_default.page.00fa48d8.js")},ft={"/node_modules/vilay/renderer/_default.page.tsx":()=>import("./chunk-e7bff1ce.js"),"/node_modules/vilay/renderer/_error.page.tsx":()=>import("./chunk-bd1f24fe.js")},dt=f(f({},ut),ft);J[".page"]=dt;const pt={"/pages/createIssue.page.route.tsx":Qe,"/pages/issues.page.route.tsx":Ze},gt={},ht=f(f({},pt),gt);ce[".page.route"]=ht;const mt={},_t={"/node_modules/vilay/renderer/_default.page.client.tsx":()=>import("./chunk-362bff2e.js")},yt=f(f({},mt),_t);J[".page.client"]=yt;const vt={},xt={"/node_modules/vilay/renderer/_default.page.client.tsx":et},bt=f(f({},vt),xt);L[".page.client"]=bt;const Et={},St={"/node_modules/vilay/renderer/_default.page.server.tsx":tt},Ft=f(f({},Et),St);L[".page.server"]=Ft;const Wt={"/pages/createIssue.page.tsx":rt,"/pages/index.page.tsx":nt,"/pages/issues.page.tsx":st,"/renderer/_default.page.tsx":it},Pt={"/node_modules/vilay/renderer/_default.page.tsx":ot,"/node_modules/vilay/renderer/_error.page.tsx":at},wt=f(f({},Wt),Pt);L[".page"]=wt;const jt={},Nt={"/node_modules/vilay/renderer/_default.page.server.tsx":()=>import("./chunk-87797ab9.js")},Rt=f(f({},jt),Nt);ue[".page.server"]=Rt;var zt=Object.freeze(Object.defineProperty({__proto__:null,pageFilesLazy:J,pageFilesEager:ce,pageFilesExportNamesLazy:lt,pageFilesExportNamesEager:L,neverLoaded:ue,isGeneratedFile:ct},Symbol.toStringTag,{value:"Module"}));Ue(zt);const{projectVersion:H}=y,te="__vite_plugin_ssr_version",re=globalThis[te]=globalThis[te]=H;W(re===H,`Multiple versions \`vite-pluging-ssr@${re}\` and \`vite-pluging-ssr@${H}\` loaded. Make sure to load the same version.`);const Tt=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt=="undefined")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),r=t[1],n=t[2];return new RegExp(r,n)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function fe(e){const t=JSON.parse(e);return de(t)}function de(e){return typeof e=="string"?Lt(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,r])=>{e[t]=de(r)}),e)}function Lt(e){for(const{match:t,deserialize:r}of Tt)if(t(e))return r(e,fe);return e}function Vt(){var e;const t=(e=document.getElementById("vite-plugin-ssr_pageContext"))===null||e===void 0?void 0:e.textContent;i(t);const r=fe(t);i(d(r,"pageContext","object"));const{pageContext:n}=r;if(i(d(n,"_pageId","string")),"_serverSideErrorWhileStreaming"in n)throw Fe("An error occurred on the server while rendering/streaming to HTML. Check your server logs.");return oe(n,{_pageContextRetrievedFromServer:f({},n),_comesDirectlyFromServer:!0}),n}function $t(e,t){if(!(t in e.exports))return null;const r=e.exports[t],n=e.exportsAll[t][0];i(n.exportValue===r);const{filePath:s}=n;return i(s),i(!t.endsWith(")")),W(q(r),`\`export { ${t} }\` of ${s} should be a function`),{hook:r,filePath:s}}function Ot(e,t){$t(e,t)}function It(e){const t=Object.entries(e);for(const r in e)delete e[r];t.sort(([r],[n])=>$e(r,n)).forEach(([r,n])=>{e[r]=n})}function qt(e){var t;i("exports"in e),i("pageExports"in e),i(z(e.pageExports)),i([!0,!1].includes(e.isHydration));const r=(t=e.exports.Page)!==null&&t!==void 0?t:e.exports.default;return oe(e,{Page:r}),At(e),It(e),i([!0,!1].includes(e._comesDirectlyFromServer)),e._comesDirectlyFromServer?Bt(e):e}const kt=["then","toJSON"],Ut=["_pageId","_serverSideErrorWhileStreaming"];let N=!1;function Bt(e){return new Proxy(e,{get:r});function t(n){return!(n in e||kt.includes(n)||typeof n=="symbol"||typeof n!="string"||n.startsWith("__v_"))}function r(n,s){return N!==!1&&N!==s&&Mt(e._pageContextRetrievedFromServer,s,t(s)),N=s,window.setTimeout(()=>{N=!1},0),e[s]}}function Mt(e,t,r){if(!r||e===null)return;const n=Object.keys(e).filter(s=>!Ut.includes(s));W(!1,[`\`pageContext.${t}\` is not available in the browser.`,`Make sure that \`passToClient.includes('${t}')\`.`,`(Currently \`passToClient\` is \`[${n.map(s=>`'${s}'`).join(", ")}]\`.)`,"More infos at https://vite-plugin-ssr.com/passToClient"].join(" "))}function At(e){Object.entries(e).forEach(([t,r])=>{delete e[t],e[t]=r})}function Jt(e){var t;if(!d(e.exports,"render")){const r=e._pageFilesAll.filter(s=>s.fileType===".page.client"&&s.isRelevant(e._pageId));let n;if(r.length===0){const s=(t=e.url)!==null&&t!==void 0?t:window.location.href;n="No file `*.page.client.*` found for URL "+s}else n="One of the following files should export a `render()` hook: "+r.map(s=>s.filePath).join(" ");W(!1,n)}Ot(e,"render")}export{i as a,ne as b,W as c,z as d,Ie as e,Vt as f,We as g,d as h,q as i,$t as j,fe as k,Gt as l,Fe as m,Ne as n,oe as o,se as p,Ht as q,qt as r,R as s,we as t,Pe as u,Ct as v,Jt as w,Ot as x};
var y=Object.defineProperty,p=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var i=(e,a,n)=>a in e?y(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,s=(e,a)=>{for(var n in a||(a={}))b.call(a,n)&&i(e,n,a[n]);if(r)for(var n of r(a))f.call(a,n)&&i(e,n,a[n]);return e},u=(e,a)=>p(e,g(a));import{r as d}from"./chunk-626fbb3e.js";import{j as t,a as l}from"./chunk-cd4da2a8.js";import"./chunk-eb00f8b0.js";const c=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"input"}],a=[{kind:"Variable",name:"input",variableName:"input"}],n={alias:null,args:null,kind:"ScalarField",name:"number",storageKey:null};return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"createIssueMutation",selections:[{alias:null,args:a,concreteType:"CreateIssuePayload",kind:"LinkedField",name:"createIssue",plural:!1,selections:[{alias:null,args:null,concreteType:"Issue",kind:"LinkedField",name:"issue",plural:!1,selections:[n],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"createIssueMutation",selections:[{alias:null,args:a,concreteType:"CreateIssuePayload",kind:"LinkedField",name:"createIssue",plural:!1,selections:[{alias:null,args:null,concreteType:"Issue",kind:"LinkedField",name:"issue",plural:!1,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}]},params:{cacheID:"466caad8466309dbd46bfd6390049a0f",id:null,metadata:{},name:"createIssueMutation",operationKind:"mutation",text:`mutation createIssueMutation(
  $input: CreateIssueInput!
) {
  createIssue(input: $input) {
    issue {
      number
      id
    }
  }
}
`}}}();c.hash="fe1d9cbd9fccc5807db4d3b25bf7ae3c";const m=function(){var e={defaultValue:null,kind:"LocalArgument",name:"name"},a={defaultValue:null,kind:"LocalArgument",name:"owner"},n=[{alias:null,args:[{kind:"Variable",name:"name",variableName:"name"},{kind:"Variable",name:"owner",variableName:"owner"}],concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:[e,a],kind:"Fragment",metadata:null,name:"createIssueQuery",selections:n,type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,e],kind:"Operation",name:"createIssueQuery",selections:n},params:{cacheID:"40550df3da8b4ed0d9414ccf5d5a26b5",id:null,metadata:{},name:"createIssueQuery",operationKind:"query",text:`query createIssueQuery(
  $owner: String!
  $name: String!
) {
  repository(name: $name, owner: $owner) {
    id
  }
}
`}}}();m.hash="c35fb2631f094c2cac370997a0afad9e";const k=e=>t("button",u(s({},e),{className:`border border-gray-500 rounded-lg px-2 py-1 transition-colors hover:bg-gray-100 ${e.className}`})),I=m,[x,o]=d.useMutation(c),N=({queryRef:e})=>(d.usePreloadedQuery(I,e),l("form",{onSubmit:onFormSubmit,children:[l("div",{className:"my-2",children:[t("label",{htmlFor:"title-input",children:"Title"}),t("input",{id:"title-input",type:"text",name:"title",required:!0,className:"mx-2 border-b border-gray-500"})]}),l("div",{className:"my-2",children:[t("label",{htmlFor:"body-input",children:"Body"}),t("br",{}),t("textarea",{id:"body-input",name:"body",className:"my-1 border border-gray-500 rounded-xl p-3 resize-none",placeholder:"Write something..."})]}),t(k,{type:"submit",disabled:o,children:o?"Creating...":"Create"})]}));export{N as Page,x as commit,o as isInFlight,I as query};

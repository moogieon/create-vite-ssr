import{r as p}from"./chunk-626fbb3e.js";import{a as l,F as o,j as u}from"./chunk-cd4da2a8.js";import"./chunk-eb00f8b0.js";const d=function(){var t=[{kind:"Literal",name:"name",value:"create-vite-ssr"},{kind:"Literal",name:"owner",value:"moogieon"}],e={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"stargazerCount",storageKey:null},a={kind:"Literal",name:"first",value:0},s=[{alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null}],n={alias:null,args:[a],concreteType:"IssueConnection",kind:"LinkedField",name:"issues",plural:!1,selections:s,storageKey:"issues(first:0)"},r={alias:"openedIssues",args:[{kind:"Literal",name:"filterBy",value:{states:"OPEN"}},a],concreteType:"IssueConnection",kind:"LinkedField",name:"issues",plural:!1,selections:s,storageKey:'issues(filterBy:{"states":"OPEN"},first:0)'};return{fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"pagesPageQuery",selections:[{alias:null,args:t,concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[e,i,n,r],storageKey:'repository(name:"create-vite-ssr",owner:"moogieon")'}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"pagesPageQuery",selections:[{alias:null,args:t,concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[e,i,n,r,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:'repository(name:"create-vite-ssr",owner:"moogieon")'}]},params:{cacheID:"20400eeb2093da6d71c066b40a63f3f1",id:null,metadata:{},name:"pagesPageQuery",operationKind:"query",text:`query pagesPageQuery {
  repository(owner: "moogieon", name: "create-vite-ssr") {
    name
    stargazerCount
    issues(first: 0) {
      totalCount
    }
    openedIssues: issues(first: 0, filterBy: {states: OPEN}) {
      totalCount
    }
    id
  }
}
`}}}();d.hash="d2eb4b4d8bc6a53add1f4030629c97e7";const y=d,k=({queryRef:t})=>{var a,s,n,r;const e=p.usePreloadedQuery(y,t),i=[l(o,{children:["Name: ",(a=e.repository)==null?void 0:a.name]}),l(o,{children:["Stars: ",(s=e.repository)==null?void 0:s.stargazerCount]}),l(o,{children:["Issues: ",(n=e.repository)==null?void 0:n.issues.totalCount," (",(r=e.repository)==null?void 0:r.openedIssues.totalCount," open)"]})];return l(o,{children:[u("h2",{className:"text-2xl mb-4",children:"Welcome!"}),u("p",{children:"This is the main page for the template, rendered with some of the actual information about the template repository:"}),u("ul",{className:"pl-4",children:i.map((c,m)=>u("li",{className:"my-2 w-fit list-disc border-b border-black border-dashed hover:bg-blue-50 transition-colors duration-400",children:c},m))})]})};export{k as Page,y as query};

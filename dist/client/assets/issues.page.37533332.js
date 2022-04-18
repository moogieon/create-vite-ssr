var K=Object.defineProperty,I=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var m=(n,e,a)=>e in n?K(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a,t=(n,e)=>{for(var a in e||(e={}))L.call(e,a)&&m(n,a,e[a]);if(g)for(var a of g(e))S.call(e,a)&&m(n,a,e[a]);return n},u=(n,e)=>I(n,h(e));import{a as y,j as l,r as p,F as b}from"./chunk-cd4da2a8.js";import{r as o}from"./chunk-626fbb3e.js";import{head as T}from"./_default.page.00fa48d8.js";import"./chunk-eb00f8b0.js";const k=function(){var n={defaultValue:null,kind:"LocalArgument",name:"cursor"},e={defaultValue:null,kind:"LocalArgument",name:"first"},a={defaultValue:null,kind:"LocalArgument",name:"name"},s={defaultValue:null,kind:"LocalArgument",name:"owner"},i=[{kind:"Variable",name:"name",variableName:"name"},{kind:"Variable",name:"owner",variableName:"owner"}],d=[{kind:"Variable",name:"after",variableName:"cursor"},{kind:"Variable",name:"first",variableName:"first"},{kind:"Literal",name:"orderBy",value:{direction:"DESC",field:"CREATED_AT"}}],c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:[n,e,a,s],kind:"Fragment",metadata:null,name:"issuesPageQuery",selections:[{alias:null,args:i,concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"IssueList_repository"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[s,a,n,e],kind:"Operation",name:"issuesPageQuery",selections:[{alias:null,args:i,concreteType:"Repository",kind:"LinkedField",name:"repository",plural:!1,selections:[{alias:null,args:d,concreteType:"IssueConnection",kind:"LinkedField",name:"issues",plural:!1,selections:[{alias:null,args:null,concreteType:"IssueEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Issue",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},{kind:"InlineFragment",selections:[r],type:"Node",abstractKey:"__isNode"}],storageKey:null},r,c],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:d,filters:["orderBy"],handle:"connection",key:"issuesPageQuery_issues",kind:"LinkedHandle",name:"issues"},r],storageKey:null}]},params:{cacheID:"070da33bf8260d74742bf6ad22775aeb",id:null,metadata:{},name:"issuesPageQuery",operationKind:"query",text:`query issuesPageQuery(
  $owner: String!
  $name: String!
  $cursor: String
  $first: Int!
) {
  repository(name: $name, owner: $owner) {
    ...IssueList_repository
    id
  }
}

fragment IssueList_repository on Repository {
  issues(after: $cursor, first: $first, orderBy: {field: CREATED_AT, direction: DESC}) {
    edges {
      node {
        ...Issue_issue
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
}

fragment Issue_issue on Issue {
  title
  createdAt
  author {
    __typename
    login
    ... on Node {
      __isNode: __typename
      id
    }
  }
}
`}}}();k.hash="1347c6160072a454b1165d3a72ff8a25";const f=function(){var n=[{defaultValue:null,kind:"LocalArgument",name:"cursor"},{defaultValue:null,kind:"LocalArgument",name:"first"},{defaultValue:null,kind:"LocalArgument",name:"id"}],e=[{kind:"Variable",name:"id",variableName:"id"}],a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},i=[{kind:"Variable",name:"after",variableName:"cursor"},{kind:"Variable",name:"first",variableName:"first"},{kind:"Literal",name:"orderBy",value:{direction:"DESC",field:"CREATED_AT"}}];return{fragment:{argumentDefinitions:n,kind:"Fragment",metadata:null,name:"IssueListPaginationQuery",selections:[{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"IssueList_repository"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"IssueListPaginationQuery",selections:[{alias:null,args:e,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[a,s,{kind:"InlineFragment",selections:[{alias:null,args:i,concreteType:"IssueConnection",kind:"LinkedField",name:"issues",plural:!1,selections:[{alias:null,args:null,concreteType:"IssueEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Issue",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null},{kind:"InlineFragment",selections:[s],type:"Node",abstractKey:"__isNode"}],storageKey:null},s,a],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:i,filters:["orderBy"],handle:"connection",key:"issuesPageQuery_issues",kind:"LinkedHandle",name:"issues"}],type:"Repository",abstractKey:null}],storageKey:null}]},params:{cacheID:"a8730faacc630e0fe2eab6938155e420",id:null,metadata:{},name:"IssueListPaginationQuery",operationKind:"query",text:`query IssueListPaginationQuery(
  $cursor: String
  $first: Int
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...IssueList_repository
    id
  }
}

fragment IssueList_repository on Repository {
  issues(after: $cursor, first: $first, orderBy: {field: CREATED_AT, direction: DESC}) {
    edges {
      node {
        ...Issue_issue
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
}

fragment Issue_issue on Issue {
  title
  createdAt
  author {
    __typename
    login
    ... on Node {
      __isNode: __typename
      id
    }
  }
}
`}}}();f.hash="db4f35b8bca0640fdd82b4590dfe8634";const F=function(){var n=["issues"];return{argumentDefinitions:[{kind:"RootArgument",name:"cursor"},{kind:"RootArgument",name:"first"}],kind:"Fragment",metadata:{connection:[{count:"first",cursor:"cursor",direction:"forward",path:n}],refetch:{connection:{forward:{count:"first",cursor:"cursor"},backward:null,path:n},fragmentPathInResult:["node"],operation:f,identifierField:"id"}},name:"IssueList_repository",selections:[{alias:"issues",args:[{kind:"Literal",name:"orderBy",value:{direction:"DESC",field:"CREATED_AT"}}],concreteType:"IssueConnection",kind:"LinkedField",name:"__issuesPageQuery_issues_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"IssueEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Issue",kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"Issue_issue"},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null}],storageKey:null}],storageKey:'__issuesPageQuery_issues_connection(orderBy:{"direction":"DESC","field":"CREATED_AT"})'},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"Repository",abstractKey:null}}();F.hash="db4f35b8bca0640fdd82b4590dfe8634";const _={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"Issue_issue",selections:[{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"author",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"login",storageKey:null}],storageKey:null}],type:"Issue",abstractKey:null};_.hash="ca40c873e6480517783ae0f773b1dec2";const v=({issue:n})=>{var a;const e=o.useFragment(_,n);return y("div",{children:[l("a",{href:e.url,className:"text-lg underline transition-colors hover:text-gray-500",children:l("h3",{children:e.title})}),l("p",{children:(a=e.author)==null?void 0:a.login}),l("p",{children:new Date(e.createdAt).toLocaleString()})]})},A=({repository:n})=>{var a;const{data:e}=o.usePaginationFragment(F,n);return l("div",{children:l("ul",{className:"list-disc",children:((a=e.issues.edges)!=null?a:[]).map((s,i)=>l("li",{className:"ml-4 my-2",children:l(p.exports.Suspense,{fallback:"Issue loading",children:l(v,{issue:s==null?void 0:s.node})})},i)).filter(Boolean)})})},$=u(t({},T),{title:"Issues: Vite SSR app"}),x=n=>u(t({},n),{first:10,filter:{}}),N=k,Q=({queryRef:n})=>{const e=o.usePreloadedQuery(N,n);return l(b,{children:y("h2",{className:"text-2xl",children:[l("p",{children:"This page is for demonstrating paginated queries."}),e.repository&&l(p.exports.Suspense,{fallback:"Loading...",children:l(A,{repository:e.repository})})]})})};export{Q as Page,x as getQueryVariables,$ as head,N as query};

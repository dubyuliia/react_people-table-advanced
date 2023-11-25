(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(26),s=(c(36),c(37),c(6)),n=c(3),r=(c(38),c(10)),l=c.n(r),i=c(1),o=function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},j=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(s.c,{to:"/",className:o,children:"Home"}),Object(i.jsx)(s.c,{to:"/people",className:o,children:"People"})]})})})},d=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(j,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(n.b,{})})})]})},b=c(9),h=c(5),u=c(15),m=c(0),O=c(4),x=c(8),f="https://mate-academy.github.io/react_people-table/api/people.json";function p(e){return new Promise((function(t){return setTimeout(t,e)}))}function v(){return(v=Object(x.a)(Object(O.a)().mark((function e(){return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p(500).then((function(){return fetch(f)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(40);var N=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})};function g(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(h.a)(e,2),a=t[0],s=t[1];null===s?c.delete(a):Array.isArray(s)?(c.delete(a),s.forEach((function(e){c.append(a,e)}))):c.set(a,s)})),c.toString()}var y=function(e){return e.female="f",e.male="m",e}(y||{}),w=function(){var e=Object(s.d)(),t=Object(h.a)(e,2),c=t[0],a=t[1],n=c.get("query")||"",r=c.getAll("centuries")||[],o=c.get("sex")||null;var j="16,17,18,19,20".split(",");function d(e){return r.includes(e)?r.filter((function(t){return e!==t})):[].concat(Object(b.a)(r),[e])}return Object(i.jsxs)("nav",{className:"panel",children:[Object(i.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(i.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(i.jsx)(s.b,{to:{search:g(c,{sex:null})},className:l()({"is-active":!o}),children:"All"}),Object(i.jsx)(s.b,{to:{search:g(c,{sex:y.male})},className:l()({"is-active":o===y.male}),children:"Male"}),Object(i.jsx)(s.b,{to:{search:g(c,{sex:y.female})},className:l()({"is-active":o===y.female}),children:"Female"})]}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("p",{className:"control has-icons-left",children:[Object(i.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:n,onChange:function(e){a(g(c,{query:e.target.value||null}))}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(i.jsx)("div",{className:"level-left",children:j.map((function(e){return Object(i.jsx)(s.b,{to:{search:g(c,{centuries:d(e)})},className:l()("button mr-1",{"is-info":r.includes(e)}),children:e},e)}))}),Object(i.jsx)("div",{className:"level-right ml-4",children:Object(i.jsx)(s.b,{"data-cy":"centuryALL",className:l()("button","is-success",{"is-outlined":r.length>0}),to:{search:g(c,{centuries:null})},children:"All"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsx)(s.b,{className:"button is-link is-outlined is-fullwidth",to:{search:g(c,{sex:null,query:null,centuries:null})},children:"Reset all filters"})})]})},L=c(27),k=["children","params"],S=function(e){var t=e.children,c=e.params,a=Object(L.a)(e,k),n=Object(s.d)(),r=Object(h.a)(n,1)[0];return Object(i.jsx)(s.b,Object(u.a)(Object(u.a)({to:{search:g(r,c)}},a),{},{children:t}))},C=function(e){return e.name="name",e.sex="sex",e.born="born",e.died="died",e}({}),A=function(e){var t=e.people,c=Object(n.r)().slug,a=Object(s.d)(),r=Object(h.a)(a,1)[0],o=r.get("sort")||"",j="desc"===r.get("order"),d=function(e){return e!==o||j?e===o&&j?{sort:null,order:null}:{sort:e,order:null}:{sort:e,order:"desc"}};return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:" table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsxs)("th",{children:["Name",Object(i.jsx)(S,{params:d(C.name),children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-sort"})})})]}),Object(i.jsxs)("th",{children:["Sex",Object(i.jsx)(S,{params:d(C.sex),children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-sort"})})})]}),Object(i.jsxs)("th",{children:["Born",Object(i.jsx)(S,{params:d(C.born),children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-sort"})})})]}),Object(i.jsxs)("th",{children:["Died",Object(i.jsx)(S,{params:d(C.died),children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-sort"})})})]}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var t,a;return Object(i.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":e.slug===c}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(s.b,{className:l()({"has-text-danger":"f"===e.sex}),to:"../".concat(e.slug),children:e.name})}),Object(i.jsx)("td",{children:e.sex}),Object(i.jsx)("td",{children:e.born}),Object(i.jsx)("td",{children:e.died}),Object(i.jsx)("td",{children:e.mother?Object(i.jsx)(s.b,{className:"has-text-danger",to:"../".concat(null===(t=e.mother)||void 0===t?void 0:t.slug),children:e.motherName}):e.motherName||"-"}),Object(i.jsx)("td",{children:e.father?Object(i.jsx)(s.b,{to:"../".concat(null===(a=e.father)||void 0===a?void 0:a.slug),children:e.fatherName}):e.fatherName||"-"})]},e.slug)}))})]})},P=function(){var e=Object(m.useState)(!1),t=Object(h.a)(e,2),c=t[0],a=t[1],n=Object(m.useState)(!1),r=Object(h.a)(n,2),l=r[0],o=r[1],j=Object(m.useState)([]),d=Object(h.a)(j,2),O=d[0],x=d[1],f=Object(s.d)(),p=Object(h.a)(f,1)[0],g=p.get("sex"),y=p.get("query"),L=p.getAll("centuries"),k=p.get("sort"),S="desc"===p.get("order");Object(m.useEffect)((function(){a(!0),function(){return v.apply(this,arguments)}().then((function(e){x(function(e){return e.map((function(t){var c=e.find((function(e){return e.name===t.motherName})),a=e.find((function(e){return e.name===t.fatherName}));return Object(u.a)(Object(u.a)({},t),{},{mother:c,father:a})}))}(e))})).catch((function(){return o(!0)})).finally((function(){return a(!1)}))}),[]);var P=Object(b.a)(O);return g&&(P=P.filter((function(e){return e.sex===g}))),L.length&&(P=P.filter((function(e){return L.includes(Math.ceil(e.born/100).toString())}))),y&&(P=P.filter((function(e){var t,c;return e.name.toLocaleLowerCase().includes(y.toLocaleLowerCase().trim())||(null===(t=e.motherName)||void 0===t?void 0:t.toLocaleLowerCase().includes(y.toLocaleLowerCase().trim()))||(null===(c=e.fatherName)||void 0===c?void 0:c.toLocaleLowerCase().includes(y.toLocaleLowerCase().trim()))}))),k&&(P.sort((function(e,t){switch(k){case C.name:case C.sex:return e[k].localeCompare(t[k]);case C.born:case C.died:return e[k]-t[k];default:return 0}})),S&&P.reverse()),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"columns is-flex-direction-row-reverse",children:[!c&&Object(i.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(i.jsx)(w,{})}),Object(i.jsx)("div",{className:"column",children:Object(i.jsxs)("div",{className:"box table-container",children:[c&&Object(i.jsx)(N,{}),l&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!c&&!O.length&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!!O.length&&Object(i.jsx)(A,{people:P})]})})]})})]})},F=function(){return Object(i.jsx)(s.a,{children:Object(i.jsx)(n.e,{children:Object(i.jsxs)(n.c,{path:"/",element:Object(i.jsx)(d,{}),children:[Object(i.jsx)(n.c,{index:!0,element:Object(i.jsx)("h1",{className:"title",children:"Home Page"})}),Object(i.jsx)(n.c,{path:"home",element:Object(i.jsx)(n.a,{to:"/",replace:!0})}),Object(i.jsx)(n.c,{path:"people",children:Object(i.jsx)(n.c,{path:":slug?",element:Object(i.jsx)(P,{})})}),Object(i.jsx)(n.c,{path:"*",element:Object(i.jsx)("h1",{className:"title",children:"Page not found"})})]})})})};Object(a.createRoot)(document.getElementById("root")).render(Object(i.jsx)(F,{}))}},[[41,1,2]]]);
//# sourceMappingURL=main.766525c0.chunk.js.map
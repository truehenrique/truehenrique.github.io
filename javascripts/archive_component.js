function Archive(e){function t(){return 0==E.length||0==R.length?null:React.createElement("div",{className:"grid-container fluid"},React.createElement("div",{className:"grid-x little-wrapper"},React.createElement("div",{className:"small-12 cell"},React.createElement("h4",{className:"gray-border-bottom subtitle"},React.createElement("i",{className:"fi-social-medium"})," Medium"))))}function a(e){return React.createElement("div",null,React.createElement("div",{className:"grid-container fluid"},React.createElement("div",{className:"grid-x wrapper"},React.createElement("div",{className:"large-12 cell"},React.createElement("ul",null,e.content.map(function(e){return React.createElement("li",{key:e.id},"(",React.createElement("span",{className:"date"},e.date),") ",React.createElement("a",{href:e.url,target:"_blank"},e.title))}))))))}var r=React.useState(e.localPosts),l=_slicedToArray(r,2),n=l[0],c=(l[1],React.useState(e.mediumPosts)),i=_slicedToArray(c,2),s=i[0],u=(i[1],React.useState("")),o=_slicedToArray(u,2),m=o[0],d=o[1],f={filterPosts:function(e){return""==m?e:e.filter(function(e){return e.title.toLowerCase().match(m.toLowerCase())||e.date.match(m)})}},R=f.filterPosts(n),E=f.filterPosts(s);return React.createElement("div",null,React.createElement("div",{className:"grid-container fluid"},React.createElement("div",{className:"grid-x little-wrapper"},React.createElement("div",{className:"small-12 cell"},React.createElement("input",{type:"text",placeholder:"\ud83d\udd0d Buscar...",value:m,onChange:function(e){return d(e.target.value)}})))),0!=R.length&&React.createElement(a,{content:R}),t(),React.createElement(a,{content:E}))}var _slicedToArray=function(){function e(e,t){var a=[],r=!0,l=!1,n=undefined;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);r=!0);}catch(e){l=!0,n=e}finally{try{!r&&i["return"]&&i["return"]()}finally{if(l)throw n}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();
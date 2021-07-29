(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{110:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return u})),r.d(n,"default",(function(){return s}));var t=r(3),a=r(8),o=(r(0),r(154)),i={title:"waitForAny(dependencies)",sidebar_label:"waitForAny()"},c={unversionedId:"api-reference/utils/waitForAny",id:"api-reference/utils/waitForAny",isDocsHomePage:!1,title:"waitForAny(dependencies)",description:"Un assistant de concurrence qui renvoie un ensemble de Loadables pour l'\xe9tat actuel des d\xe9pendances demand\xe9es. Il attend qu'au moins une des d\xe9pendances soit disponible.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/utils/waitForAny.md",slug:"/api-reference/utils/waitForAny",permalink:"/fr/docs/api-reference/utils/waitForAny",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/api-reference/utils/waitForAny.md",version:"current",sidebar_label:"waitForAny()",sidebar:"docs",previous:{title:"waitForNone(dependencies)",permalink:"/fr/docs/api-reference/utils/waitForNone"},next:{title:"useRecoilTransaction_UNSTABLE(callback, deps)",permalink:"/fr/docs/api-reference/core/useRecoilTransaction"}},u=[],l={toc:u};function s(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Un assistant de concurrence qui renvoie un ensemble de ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/core/Loadable"},Object(o.b)("inlineCode",{parentName:"a"},"Loadable"),"s")," pour l'\xe9tat actuel des d\xe9pendances demand\xe9es. Il attend qu'au moins une des d\xe9pendances soit disponible."),Object(o.b)("p",null,"Les d\xe9pendances peuvent \xeatre fournies sous forme de tableau de tuples ou de d\xe9pendances nomm\xe9es dans un objet."),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"function waitForAny(dependencies: Array<RecoilValue<>>):\n  RecoilValueReadOnly<UnwrappedArrayOfLoadables>\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"function waitForAny(dependencies: {[string]: RecoilValue<>}):\n  RecoilValueReadOnly<UnwrappedObjectOfLoadables>\n")),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"waitForAny()")," est similaire \xe0 ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/utils/waitForNone"},Object(o.b)("inlineCode",{parentName:"a"},"waitForNone()")),", sauf qu'il attend qu'au moins une d\xe9pendance ait une valeur (ou une erreur) disponible au lieu de retourner imm\xe9diatement. "))}s.isMDXComponent=!0},154:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return f}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),b=t,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(f,c(c({ref:n},l),{},{components:r})):a.a.createElement(f,c({ref:n},l))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
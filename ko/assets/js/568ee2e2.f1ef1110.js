"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[5596],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(t),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||c;return t?n.createElement(d,a(a({ref:r},s),{},{components:t})):n.createElement(d,a({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3496:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var n=t(7462),o=t(3366),c=(t(7294),t(3905)),a=["components"],i={title:"errorSelector(message)",sidebar_label:"errorSelector()"},l=void 0,u={unversionedId:"api-reference/utils/errorSelector",id:"api-reference/utils/errorSelector",title:"errorSelector(message)",description:"\ud56d\uc0c1 \uc81c\uacf5\ub41c \uc5d0\ub7ec\ub97c \ubc1c\uc0dd\uc2dc\ud0a4\ub294 selector\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/utils/errorSelector.md",sourceDirName:"api-reference/utils",slug:"/api-reference/utils/errorSelector",permalink:"/ko/docs/api-reference/utils/errorSelector",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/utils/errorSelector.md",tags:[],version:"current",frontMatter:{title:"errorSelector(message)",sidebar_label:"errorSelector()"},sidebar:"docs",previous:{title:"constSelector()",permalink:"/ko/docs/api-reference/utils/constSelector"},next:{title:"noWait()",permalink:"/ko/docs/api-reference/utils/noWait"}},s=[{value:"Example",id:"example",children:[],level:3}],p={toc:s};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\ud56d\uc0c1 \uc81c\uacf5\ub41c \uc5d0\ub7ec\ub97c \ubc1c\uc0dd\uc2dc\ud0a4\ub294 ",(0,c.kt)("a",{parentName:"p",href:"/docs/api-reference/core/selector"},"selector"),"\uc785\ub2c8\ub2e4."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"function errorSelector(message: string): RecoilValueReadOnly\n")),(0,c.kt)("h3",{id:"example"},"Example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"const myAtom = atom({\n  key: 'My Atom',\n  default: errorSelector('Attempt to use Atom before initialization'),\n});\n")))}f.isMDXComponent=!0}}]);
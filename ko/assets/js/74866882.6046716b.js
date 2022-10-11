"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[9956],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=o(n),k=a,h=d["".concat(s,".").concat(k)]||d[k]||p[k]||l;return n?r.createElement(h,c(c({ref:t},u),{},{components:n})):r.createElement(h,c({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var o=2;o<l;o++)c[o]=n[o];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6888:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),c=["components"],i={title:"Refine Collection Checkers",sidebar_label:"Collection Checkers"},s=void 0,o={unversionedId:"refine/api/Collection_Checkers",id:"refine/api/Collection_Checkers",title:"Refine Collection Checkers",description:"Collection checkers can be combined with primitive checkers to refine more complex values.",source:"@site/docs/refine/api/Collection_Checkers.md",sourceDirName:"refine/api",slug:"/refine/api/Collection_Checkers",permalink:"/ko/docs/refine/api/Collection_Checkers",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/refine/api/Collection_Checkers.md",tags:[],version:"current",frontMatter:{title:"Refine Collection Checkers",sidebar_label:"Collection Checkers"},sidebar:"refine",previous:{title:"Primitive Checkers",permalink:"/ko/docs/refine/api/Primitive_Checkers"},next:{title:"Advanced Checkers",permalink:"/ko/docs/refine/api/Advanced_Checkers"}},u=[{value:"<code>array()</code>",id:"array",children:[],level:2},{value:"<code>tuple()</code>",id:"tuple",children:[],level:2},{value:"<code>dict()</code>",id:"dict",children:[],level:2},{value:"<code>object()</code>",id:"object",children:[],level:2},{value:"<code>set()</code>",id:"set",children:[],level:2},{value:"<code>map()</code>",id:"map",children:[],level:2},{value:"<code>writableArray()</code>",id:"writablearray",children:[],level:2},{value:"<code>writableObject()</code>",id:"writableobject",children:[],level:2},{value:"<code>writableDict()</code>",id:"writabledict",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Collection ",(0,l.kt)("a",{parentName:"p",href:"/docs/refine/api/Checkers"},"checkers")," can be combined with ",(0,l.kt)("a",{parentName:"p",href:"/docs/refine/api/Primitive_Checkers"},"primitive checkers")," to refine more complex values."),(0,l.kt)("h2",{id:"array"},(0,l.kt)("inlineCode",{parentName:"h2"},"array()")),(0,l.kt)("p",null,"Validates a value as a ",(0,l.kt)("inlineCode",{parentName:"p"},"$ReadOnlyArray<T>"),", given a value checker of type ",(0,l.kt)("inlineCode",{parentName:"p"},"Checker<T>"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// define checker\nconst check = array(number());\n\n// test a value\nconst result = check([1,2,3]);\nassert(result.type === 'success');\n\n// result should typecheck\nconst value: $ReadOnlyArray<number> = result.value;\n\n// test an invalid value\nassert(check('test').type === 'failure');\nassert(check(['test', 'other']).type === 'failure');\n")),(0,l.kt)("h2",{id:"tuple"},(0,l.kt)("inlineCode",{parentName:"h2"},"tuple()")),(0,l.kt)("p",null,"Validates a value as a strictly typed tuple."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// define checker\nconst check = tuple(number(), string(), bool());\n\n// test a value\nconst result = check([1,'2', false]);\nassert(result.type === 'success');\n\n// result should typecheck\nconst value: $ReadOnly<[number, string, boolean]> = result.value;\n\n// test an invalid value\nassert(check('test').type === 'failure');\nassert(check(['test', 'other']).type === 'failure');\n")),(0,l.kt)("h2",{id:"dict"},(0,l.kt)("inlineCode",{parentName:"h2"},"dict()")),(0,l.kt)("p",null,"Validates a value as a ",(0,l.kt)("inlineCode",{parentName:"p"},"$ReadOnly<{[key: string]: T}>"),", given a value checker of type ",(0,l.kt)("inlineCode",{parentName:"p"},"Checker<T>"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// define checker\nconst check = dict(number());\n\n// test a value\nconst result = check({a: 1, b: 2, c: 3});\nassert(result.type === 'success');\n\n// result should typecheck\nconst value: $ReadOnly<{[key: string]: number}> = result.value;\n\n// test an invalid value\nassert(check('test').type === 'failure');\nassert(check({a: 'test', b: 'other', c: 3}).type === 'failure');\n")),(0,l.kt)("h2",{id:"object"},(0,l.kt)("inlineCode",{parentName:"h2"},"object()")),(0,l.kt)("p",null,"Validates a value as a ",(0,l.kt)("inlineCode",{parentName:"p"},"$ReadOnly<{[key: K]: T}>"),", given an object of checkers of type ",(0,l.kt)("inlineCode",{parentName:"p"},"{[key: K]: Checker<T>}"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// define checker\nconst check = object({\n  a: number(),\n  b: string(),\n  c: optional(string()) // use `optional` for optional properties\n});\n\n// test a value\nconst result = check({a: 1, b: 'test'});\nassert(result.type === 'success');\n\n// result should typecheck\nconst value: $ReadOnly<{a: number, b: string}> = result.value;\n\n// test an invalid value\nassert(check('test').type === 'failure');\nassert(check({a: 'test', b: 1}).type === 'failure');\nassert(check({a: 1, c: 'test'}).type === 'failure');\n")),(0,l.kt)("h2",{id:"set"},(0,l.kt)("inlineCode",{parentName:"h2"},"set()")),(0,l.kt)("p",null,"Checker to assert if a mixed value is a ",(0,l.kt)("inlineCode",{parentName:"p"},"Set")," type with valid values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// define checker\nconst check = set(number());\n\n// test a value\nconst result = check(new Set([1, 2]));\nassert(result.type === 'success');\n\n// result should typecheck\nconst value: $ReadOnlySet<number> = result.value;\n\n// test an invalid value\nassert(check('test').type === 'failure');\nassert(check({a: 'test', b: 'other', c: 3}).type === 'failure');\n")),(0,l.kt)("h2",{id:"map"},(0,l.kt)("inlineCode",{parentName:"h2"},"map()")),(0,l.kt)("p",null,"Checker to assert if a mixed value is a ",(0,l.kt)("inlineCode",{parentName:"p"},"Map")," type with valid keys and values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// define checker\nconst check = map(date(), number());\n\n// test a value\nconst result = check(new Map([[new Date(), 1], [new Date(2), 2]]));\nassert(result.type === 'success');\n\n// result should typecheck\nconst value: $ReadOnlyMap<Date, number> = result.value;\n\n// test an invalid value\nassert(check('test').type === 'failure');\nassert(check({a: 'test', b: 'other', c: 3}).type === 'failure');\n")),(0,l.kt)("h2",{id:"writablearray"},(0,l.kt)("inlineCode",{parentName:"h2"},"writableArray()")),(0,l.kt)("p",null,"Identical to ",(0,l.kt)("inlineCode",{parentName:"p"},"array()"),", but the returned type is a ",(0,l.kt)("inlineCode",{parentName:"p"},"Array<>")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"$ReadOnlyArray<>")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const coerce = writableArray(number());\nconst result = coerce([1, 2, 3]);\n\nassert(result.type === 'success', 'should succeed');\nresult.value[0] = 3;\n")),(0,l.kt)("h2",{id:"writableobject"},(0,l.kt)("inlineCode",{parentName:"h2"},"writableObject()")),(0,l.kt)("p",null,"Identical to ",(0,l.kt)("inlineCode",{parentName:"p"},"object"),", but the returned type is a writable object instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"$ReadOnly<>")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const coerce = writableObject({\n  name: string(),\n  job: object({\n    years: number(),\n    title: string(),\n  }),\n});\n\nconst result = coerce({name: 'Elsa', job: {title: 'Engineer', years: 3}});\nassert(result.type === 'success', 'should succeed');\n\n// should Flow check as writable\nresult.value.name = 'MechaElsa';\n")),(0,l.kt)("h2",{id:"writabledict"},(0,l.kt)("inlineCode",{parentName:"h2"},"writableDict()")),(0,l.kt)("p",null,"Identical to ",(0,l.kt)("inlineCode",{parentName:"p"},"dict()"),", but the returned type is a writable object instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"$ReadOnly<>")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const coerce = writableDict(number());\nconst result = coerce({a: 1, b: 2});\nassert(result.type === 'success', 'should succeed');\n\n// should Flow check as writable\nresult.value.a = 3;\n")))}d.isMDXComponent=!0}}]);
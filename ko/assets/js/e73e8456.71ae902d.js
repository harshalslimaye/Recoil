(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(8),o=(n(0),n(154)),r={title:"Recoil 0.4"},c={permalink:"/ko/blog/2021/07/30/0.4.0-release",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2021-07-30-0.4.0-release.md",source:"@site/blog/2021-07-30-0.4.0-release.md",description:"We are pleased to announce the release of Recoil 0.4 with configurable selector caches, improved API for transactions with multiple atoms, and other optimizations and fixes.",date:"2021-07-30T00:00:00.000Z",formattedDate:"2021\ub144 7\uc6d4 29\uc77c",tags:[],title:"Recoil 0.4",readingTime:3.96,truncated:!1,nextItem:{title:"Recoil 0.3",permalink:"/ko/blog/2021/05/14/0.3.0-released"}},l=[{value:"Configurable selector caches",id:"configurable-selector-caches",children:[]},{value:"Transactions with multiple atoms",id:"transactions-with-multiple-atoms",children:[{value:"Example",id:"example",children:[]},{value:"Reducer Example",id:"reducer-example",children:[]}]},{value:"Fixes and Optimizations",id:"fixes-and-optimizations",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We are pleased to announce the release of Recoil 0.4 with configurable selector caches, improved API for transactions with multiple atoms, and other optimizations and fixes."),Object(o.b)("h2",{id:"configurable-selector-caches"},"Configurable selector caches"),Object(o.b)("p",null,"The new ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/core/selector#cache-policy-configuration"},Object(o.b)("inlineCode",{parentName:"a"},"cachePolicy_UNSTABLE"))," property in ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/core/selector"},"selectors")," and ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/utils/selectorFamily"},"selector families")," allows you to configure the caching behavior of a selector's internal cache.  This property can be useful for reducing memory in applications that have a large number of selectors or selectors that have a large number of changing dependencies."),Object(o.b)("p",null,"Below is an example of how you might use this new property:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const clockState = selector({\n  key: 'clockState',\n  get: ({get}) => {\n    const hour = get(hourState);\n    const minute = get(minuteState);\n    const second = get(secondState); // will re-run every second\n\n    return `${hour}:${minute}:${second}`;\n  },\n  cachePolicy_UNSTABLE: {\n    // Only store the most recent set of dependencies and their values\n    eviction: 'most-recent',\n  },\n});\n")),Object(o.b)("p",null,"In the example above, ",Object(o.b)("inlineCode",{parentName:"p"},"clockState")," recalculates every second, adding a new set of dependency values to the internal cache, which may lead to a memory issue over time as the internal cache grows indefinitely. Using the ",Object(o.b)("inlineCode",{parentName:"p"},"most-recent")," eviction policy, the internal selector cache will only retain the most recent set of dependencies and their values, along with the actual selector value based on those dependencies, thus solving the memory issue."),Object(o.b)("p",null,"Current eviction options are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"lru")," - evicts the least-recently-used value from the cache when the size exceeds ",Object(o.b)("inlineCode",{parentName:"li"},"maxSize"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"most-recent")," - retains only the most recent value."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"keep-all")," (default) - keeps all entries in the cache and does not evict.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"NOTE:"))," ",Object(o.b)("em",{parentName:"p"},"The default eviction policy (currently ",Object(o.b)("inlineCode",{parentName:"em"},"keep-all"),") may change in the future."))),Object(o.b)("h2",{id:"transactions-with-multiple-atoms"},"Transactions with multiple atoms"),Object(o.b)("p",null,"Introducing an improved API for updating multiple atoms together as a single transaction.  The new ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilTransaction"},Object(o.b)("inlineCode",{parentName:"a"},"useRecoilTransaction_UNSTABLE()"))," hook is easier, more efficient, and safer than before.  This new hook should eventually replace most uses of ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilCallback"},Object(o.b)("inlineCode",{parentName:"a"},"useRecoilCallback()")),", however this release is only an initial implementation with ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilTransaction#current-limitations-and-future-vision"},"certain limitations")," that will be addressed in future releases."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"Suppose we have two atoms, ",Object(o.b)("inlineCode",{parentName:"p"},"positionState")," and ",Object(o.b)("inlineCode",{parentName:"p"},"headingState"),", and we'd like to update them together as part of a single action, where the new value of ",Object(o.b)("inlineCode",{parentName:"p"},"positionState")," is a function of ",Object(o.b)("em",{parentName:"p"},"both")," the current value of ",Object(o.b)("inlineCode",{parentName:"p"},"positionState")," and ",Object(o.b)("inlineCode",{parentName:"p"},"headingState"),".  You can accomplish this with a transaction, which must be a pure function without side-effects:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const goForward = useRecoilTransaction_UNSTABLE(({get, set}) => (distance) => {\n  const heading = get(headingState);\n  const position = get(positionState);\n  set(positionAtom, {\n    x: position.x + cos(heading) * distance,\n    y: position.y + sin(heading) * distance,\n  });\n});\n")),Object(o.b)("p",null,"Then you can execute the transaction by just calling ",Object(o.b)("inlineCode",{parentName:"p"},"goForward(distance)")," in an event handler.  This will update state based on the ",Object(o.b)("em",{parentName:"p"},"current")," values, not the state when the components rendered.  You can also read the values of previous writes during a transaction.  Because no other updates will be committed while the updater is executing, you will see a consistent store of state."),Object(o.b)("p",null,"the previous approach using ",Object(o.b)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilCallback"},Object(o.b)("inlineCode",{parentName:"a"},"useRecoilCallback()"))," might have looked like the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const goForward = useRecoilCallback(({snapshot, gotoSnapshot}) => (distance) => {\n  const mutatedSnapshot = snapshot.map(({get, set}) => {\n    const heading = get(headingState);\n    const position = get(positionState);\n    set(positionState, {\n      x: position.x + cos(heading) * distance,\n      y: position.y + sin(heading) * distance,\n    });\n  });\n  gotoSnapshot(mutatedSnapshot);\n});\n")),Object(o.b)("p",null,"This has the following drawbacks:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"There is performance overhead for managing the full generality of snapshots."),Object(o.b)("li",{parentName:"ul"},"There is more opportunity for bugs:  The snapshot might be retained and used in the future.  Since a snapshot contains the complete set of Recoil state, not just a changeset, that could accidentally rewind changes that occurred between creating and committing the snapshot.")),Object(o.b)("h3",{id:"reducer-example"},"Reducer Example"),Object(o.b)("p",null,"You can also use this hook to create a reducer pattern of executing actions over multiple atoms:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const reducer = useRecoilTransaction_UNSTABLE(({get, set}) => action => {\n  switch(action.type) {\n    case 'goForward':\n      const heading = get(headingState);\n      set(positionState, position => {\n        x: position.x + cos(heading) * action.distance,\n        y: position.y + sin(heading) * action.distance,\n      });\n      break;\n\n    case 'turn':\n      set(headingState, action.heading);\n      break;\n  }\n});\n")),Object(o.b)("h2",{id:"fixes-and-optimizations"},"Fixes and Optimizations"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fix TypeScript typing for ",Object(o.b)("inlineCode",{parentName:"li"},"selectorFamily()"),", ",Object(o.b)("inlineCode",{parentName:"li"},"getCallback()"),", ",Object(o.b)("inlineCode",{parentName:"li"},"useGetRecoilValueInfo()"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"Snapshot#getNodes()")," (",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1060"},"#1060"),", ",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1116"},"#1116"),", ",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1123"},"#1123"),")"),Object(o.b)("li",{parentName:"ul"},"Allow mutable values in selectors (enabled via the ",Object(o.b)("inlineCode",{parentName:"li"},"dangerouslyAllowMutability")," selector option) to be used with ",Object(o.b)("inlineCode",{parentName:"li"},"waitFor*()")," helpers such as ",Object(o.b)("a",{parentName:"li",href:"/docs/api-reference/utils/waitForAll"},Object(o.b)("inlineCode",{parentName:"a"},"waitForAll()"))," (",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1074"},"#1074"),", ",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1096"},"#1096"),")"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/guides/atom-effects"},"Atom Effects")," fixes:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Fix ",Object(o.b)("inlineCode",{parentName:"li"},"onSet()")," handler to get the proper new value when an atom is reset or has an async default Promise that resolves (",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1059"},"#1059"),", ",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1050"},"#1050"),", ",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/738"},"#738"),") (This is a slightly breaking change because the actual new value will be provided to the handler instead of a ",Object(o.b)("inlineCode",{parentName:"li"},"DefaultValue")," placeholder)"),Object(o.b)("li",{parentName:"ul"},"Fix support for multiple Atom Effects cleanup handlers (",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1125"},"#1125"),")"),Object(o.b)("li",{parentName:"ul"},"Fix selector subscriptions when atoms with effects are initialized via a ",Object(o.b)("inlineCode",{parentName:"li"},"Snapshot")," (",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1135"},"#1135"),", ",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1107"},"#1107"),")"))),Object(o.b)("li",{parentName:"ul"},"Optimization for async selectors when dependencies resolve to cached values (",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1037"},"#1037"),")"),Object(o.b)("li",{parentName:"ul"},"Remove unnecessary warning message (",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1034"},"#1034"),", ",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/1062"},"#1062"),")")))}p.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),h=a,m=b["".concat(r,".").concat(h)]||b[h]||u[h]||o;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),i=(n(0),n(154)),o={title:"useRecoilTransaction_UNSTABLE(callback, deps)",sidebar_label:"useRecoilTransaction()"},c={unversionedId:"api-reference/core/useRecoilTransaction",id:"api-reference/core/useRecoilTransaction",isDocsHomePage:!1,title:"useRecoilTransaction_UNSTABLE(callback, deps)",description:'Create a transaction callback which can be used to atomically update multiple atoms in a safe, easy, and efficient way.  Provide a callback for the transaction as a pure function which can get() or set() multiple atoms.  A transaction is similar to the "updater" form of setting Recoil state, but can operate over multiple atoms.  Writes are visible to subsequent reads from within the same transaction.',source:"@site/docs/api-reference/core/useRecoilTransaction.md",slug:"/api-reference/core/useRecoilTransaction",permalink:"/docs/api-reference/core/useRecoilTransaction",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/useRecoilTransaction.md",version:"current",sidebar_label:"useRecoilTransaction()",sidebar:"docs",previous:{title:"waitForAny(dependencies)",permalink:"/docs/api-reference/utils/waitForAny"},next:{title:"useRecoilCallback(callback, deps)",permalink:"/docs/api-reference/core/useRecoilCallback"}},s=[{value:"Transaction Example",id:"transaction-example",children:[]},{value:"Reducer Example",id:"reducer-example",children:[]},{value:"Current Limitations and Future Vision",id:"current-limitations-and-future-vision",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Create a transaction callback which can be used to atomically update multiple atoms in a safe, easy, and efficient way.  Provide a callback for the transaction as a pure function which can ",Object(i.b)("inlineCode",{parentName:"p"},"get()")," or ",Object(i.b)("inlineCode",{parentName:"p"},"set()"),' multiple atoms.  A transaction is similar to the "updater" form of setting Recoil state, but can operate over multiple atoms.  Writes are visible to subsequent reads from within the same transaction.'),Object(i.b)("p",null,"In addition to transactions, this hook is also useful to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Implement reducer patterns to perform actions on multiple atoms."),Object(i.b)("li",{parentName:"ul"},"Dynamically updating an atom where we may not know at render-time which atom or selector we will want to update, so we can't use ",Object(i.b)("a",{parentName:"li",href:"/docs/api-reference/core/useSetRecoilState"},Object(i.b)("inlineCode",{parentName:"a"},"useSetRecoilState()")),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/guides/asynchronous-data-queries#pre-fetching"},"Pre-fetching")," data before rendering.")),Object(i.b)("hr",null),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"interface TransactionInterface {\n  get: <T>(RecoilValue<T>) => T;\n  set: <T>(RecoilState<T>,  (T => T) | T) => void;\n  reset: <T>(RecoilState<T>) => void;\n}\n\nfunction useRecoilTransaction_UNSTABLE<Args>(\n  callback: TransactionInterface => (...Args) => void,\n  deps?: $ReadOnlyArray<mixed>,\n): (...Args) => void\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"callback"))," - User callback function with a wrapper function that provides the transaction interface.  ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("em",{parentName:"strong"},"This function must be pure without any side-effects."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"deps"))," - An optional set of dependencies for memoizing the callback.  Like ",Object(i.b)("inlineCode",{parentName:"li"},"useCallback()"),", the produced transaction callback will not be memoized by default and will produce a new function with each render.  You can pass an empty array to always return the same function instance.  If you pass values in the ",Object(i.b)("inlineCode",{parentName:"li"},"deps")," array, a new function will be used if the reference equality of any dep changes.  Those values can then be used from within the body of your callback without getting stale.  (See ",Object(i.b)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html#usecallback"},Object(i.b)("inlineCode",{parentName:"a"},"useCallback")),")  You can ",Object(i.b)("a",{parentName:"li",href:"/docs/introduction/installation#eslint"},"update eslint")," to help ensure this is used correctly.")),Object(i.b)("p",null,"Transaction Interface:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"get"))," - Get the current value for the requested Recoil state, reflecting any writes performed earlier in the transaction.  This currently only supports synchronous atoms."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"set"))," - Set the value of an atom.  You may either provide the new value directly or an updater function that returns the new value and takes the current value as a parameter.  The current value represents all other pending state changes to date in the current transaction."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"reset"))," - Reset the value of an atom to its default.")),Object(i.b)("h3",{id:"transaction-example"},"Transaction Example"),Object(i.b)("p",null,"Suppose we have two atoms, ",Object(i.b)("inlineCode",{parentName:"p"},"positionState")," and ",Object(i.b)("inlineCode",{parentName:"p"},"headingState"),", and we'd like to update them together as part of a single action, where the new value of ",Object(i.b)("inlineCode",{parentName:"p"},"positionState")," is a function of ",Object(i.b)("em",{parentName:"p"},"both")," the current value of ",Object(i.b)("inlineCode",{parentName:"p"},"positionState")," and ",Object(i.b)("inlineCode",{parentName:"p"},"headingState"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const goForward = useRecoilTransaction_UNSTABLE(({get, set}) => (distance) => {\n  const heading = get(headingState);\n  const position = get(positionState);\n  set(positionAtom, {\n    x: position.x + cos(heading) * distance,\n    y: position.y + sin(heading) * distance,\n  });\n});\n")),Object(i.b)("p",null,"Then you can execute the transaction by just calling ",Object(i.b)("inlineCode",{parentName:"p"},"goForward(distance)")," in an event handler.  This will update state based on the ",Object(i.b)("em",{parentName:"p"},"current")," values, not the state when the components rendered."),Object(i.b)("p",null,"You can also read the values of previous writes during a transaction.  Because no other updates will be committed while the updater is executing, you will see a consistent store of state."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const moveInAnL = useRecoilTransaction_UNSTABLE(({get, set}) => () => {\n  // Move Forward 1\n  const heading = get(headingState);\n  const position = get(positionState);\n  set(positionState, {\n    x: position.x + cos(heading),\n    y: position.y + sin(heading),\n  });\n\n  // Turn Right\n  set(headingState, heading => heading + 90);\n\n  // Move Forward 1\n  const newHeading = get(headingState);\n  const newPosition = get(positionState);\n  set(positionState, {\n    x: newPosition.x + cos(newHeading),\n    y: newPosition.y + sin(newHeading),\n  });\n});\n")),Object(i.b)("h3",{id:"reducer-example"},"Reducer Example"),Object(i.b)("p",null,"This hook is also useful for implementing reducer patterns to execute actions over multiple atoms:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const reducer = useRecoilTransaction_UNSTABLE(({get, set}) => action => {\n  switch(action.type) {\n    case 'goForward':\n      const heading = get(headingState);\n      set(positionState, position => {\n        x: position.x + cos(heading) * action.distance,\n        y: position.y + sin(heading) * action.distance,\n      });\n      break;\n\n    case 'turn':\n      set(headingState, action.heading);\n      break;\n  }\n});\n")),Object(i.b)("h3",{id:"current-limitations-and-future-vision"},"Current Limitations and Future Vision"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Transactions currently only support atoms, not yet selectors.  This support can be added in the future."),Object(i.b)("li",{parentName:"ul"},"Atoms that are read must have a synchronous value.  If it is in an error state or an asynchronous pending state, then the transaction will throw an error.  It would be possible to support pending dependencies by aborting the transaction if a dependency is pending and then re-starting the transaction when it is available.  This is consistent with how the selector ",Object(i.b)("inlineCode",{parentName:"li"},"get()")," is implemented."),Object(i.b)("li",{parentName:"ul"},"Transactions do not have a return value.  If we want to have some notification a transaction completes, or use transactions to request slow data, or to request data from event handlers, then we could have a transaction return a ",Object(i.b)("inlineCode",{parentName:"li"},"Promise")," to a return value."),Object(i.b)("li",{parentName:"ul"},"Transactions must be synchronous.  There is a proposal to allow asynchronous transactions.  The user could provide an ",Object(i.b)("inlineCode",{parentName:"li"},"async")," transaction callback function which could use ",Object(i.b)("inlineCode",{parentName:"li"},"await"),".  The atomic update of all sets would not be applied, however, until the ",Object(i.b)("inlineCode",{parentName:"li"},"Promise")," returned by the transaction is fully resolved."),Object(i.b)("li",{parentName:"ul"},"Transactions must not have any side-effects.  If you require side-effects, then use ",Object(i.b)("a",{parentName:"li",href:"/docs/api-reference/core/useRecoilCallback"},Object(i.b)("inlineCode",{parentName:"a"},"useRecoilCallback()"))," instead.")))}u.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
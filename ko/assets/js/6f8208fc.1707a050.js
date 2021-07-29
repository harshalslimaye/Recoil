(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(8),s=(n(0),n(154)),r={title:"Recoil 0.0.10"},i={permalink:"/ko/blog/2020/06/18/0.0.10-released",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2020-06-18-0.0.10-released.md",source:"@site/blog/2020-06-18-0.0.10-released.md",description:"Recoil 0.0.9 and 0.0.10 is being released with some bug fixes, TypeScript support, and a new API for Recoil Snapshots to observe, inspect, and manage global Recoil atom state.  Thanks again to everyone who helped make this possible and stay tuned for more exciting developments coming soon!",date:"2020-06-18T00:00:00.000Z",formattedDate:"2020\ub144 6\uc6d4 17\uc77c",tags:[],title:"Recoil 0.0.10",readingTime:7.44,truncated:!0,prevItem:{title:"Recoil 0.0.11",permalink:"/ko/blog/2020/09/15/0.0.11-released"},nextItem:{title:"Recoil 0.0.8",permalink:"/ko/blog/2020/05/30/0.0.8-released"}},l=[{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Improvements",id:"improvements",children:[]},{value:"TypeScript support",id:"typescript-support",children:[]},{value:"API",id:"api",children:[{value:"Reading Snapshots",id:"reading-snapshots",children:[]},{value:"Transforming Snapshots",id:"transforming-snapshots",children:[]}]},{value:"Hooks",id:"hooks",children:[{value:"useRecoilSnapshot()",id:"userecoilsnapshot",children:[]},{value:"useRecoilCallback()",id:"userecoilcallback",children:[]},{value:"useRecoilTransactionObserver()",id:"userecoiltransactionobserver",children:[]},{value:"useGotoRecoilState()",id:"usegotorecoilstate",children:[]}]},{value:"State Initialization",id:"state-initialization",children:[]},{value:"What\u2019s Next?",id:"whats-next",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Recoil 0.0.9 and 0.0.10 is being released with some bug fixes, ",Object(s.b)("a",{parentName:"p",href:"#typescript-support"},"TypeScript support"),", and a new API for ",Object(s.b)("a",{parentName:"p",href:"#recoil-snapshots"},"Recoil Snapshots")," to observe, inspect, and manage global Recoil atom state.  Thanks again to everyone who helped make this possible and stay tuned for more exciting developments coming soon!"),Object(s.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Fixes for Server Side Rendering, though we do not officially support it yet. (#233, #220, #284) - Thanks @fyber-LJX, @Chrischuck, and @aulneau"),Object(s.b)("li",{parentName:"ul"},"Fix selectors recording dependency subscriptions in some cases (#296) - Thanks @drarmstr"),Object(s.b)("li",{parentName:"ul"},"Fix updaters in ",Object(s.b)("inlineCode",{parentName:"li"},"useRecoilCallback()")," getting current state (#260) - Thanks @drarmstr"),Object(s.b)("li",{parentName:"ul"},"Fix error messages when throwing certain errors in the open-source build. (#199) - Thanks @jonthomp"),Object(s.b)("li",{parentName:"ul"},"Reduce Flow errors for open-source builds (#308) - Thanks @Komalov")),Object(s.b)("h2",{id:"improvements"},"Improvements"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Throw error with meaningful message if user doesn't use an atom or selector with most Recoil hooks (#205) - Thanks @alexandrzavalii"),Object(s.b)("li",{parentName:"ul"},"Improve testing (#321, #318, #294, #262, #295) - Thanks @aaronabramov, @Komalov, @mondaychen, @drarmstr, and @tyler-mitchell"),Object(s.b)("li",{parentName:"ul"},"Improve open-source build (#249, #203, #33) - Thanks to @tony-go, @acutmore, and @jaredpalmer")),Object(s.b)("h2",{id:"typescript-support"},"TypeScript support"),Object(s.b)("p",null,"TypeScript support is being rolled into the Recoil GitHub repository instead of ",Object(s.b)("inlineCode",{parentName:"p"},"DefinitelyTyped")," to help better keep it in sync with the API. (#292 & #339) - Thanks @csantos42"),Object(s.b)("h1",{id:"recoil-snapshots"},"Recoil Snapshots"),Object(s.b)("p",null,"#312, #311, #310, #309, #260, #259, #258, #257, #256 - Thanks @drarmstr and the rest of the team"),Object(s.b)("p",null,"We are introducing the concept of a ",Object(s.b)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot"},Object(s.b)("inlineCode",{parentName:"a"},"Snapshot"))," to Recoil.  A ",Object(s.b)("inlineCode",{parentName:"p"},"Snapshot")," is an immutable snapshot of the state of Recoil atoms.  This is intended to standardize the API for observing, inspecting, and managing global Recoil state and derived state.  It\u2019s useful for dev tools, global state synchronization, history, and navigation."),Object(s.b)("h2",{id:"api"},"API"),Object(s.b)("h3",{id:"reading-snapshots"},"Reading Snapshots"),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"Snapshot")," class exposes the following methods for getting the values of individual Recoil atoms and selectors:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"class Snapshot {\n  getLoadable: <T>(RecoilValue<T>) => Loadable<T>;\n  getPromise: <T>(RecoilValue<T>) => Promise<T>;\n  ...\n}\n")),Object(s.b)("p",null,"Snapshots are read-only with respect to atom state.  They can be used to read atom state and evaluate selector derived state.  For asynchronous selectors, the ",Object(s.b)("inlineCode",{parentName:"p"},"getPromise()")," method can be used to wait for the evaluated value so you can see what the selector value would be based on the static atom state."),Object(s.b)("h3",{id:"transforming-snapshots"},"Transforming Snapshots"),Object(s.b)("p",null,"There are cases where you may wish to mutate a snapshot.  While snapshots are immutable, they have methods to map themselves with a set of transformations to a new immutable snapshot.  The map methods take a callback that is passed a ",Object(s.b)("inlineCode",{parentName:"p"},"MutableSnapshot"),", which is mutated throughout the callback and will ultimately become the new snapshot returned by the mapping operation."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"class Snapshot {\n  ...\n  map: (MutableSnapshot => void) => Snapshot;\n  asyncMap: (MutableSnapshot => Promise<void>) => Promise<Snapshot>;\n}\n\nclass MutableSnapshot {\n  set: <T>(RecoilState<T>, T | DefaultValue | (T => T | DefaultValue)) => void;\n  reset: <T>(RecoilState<T>) => void;\n}\n")),Object(s.b)("p",null,"Notice that ",Object(s.b)("inlineCode",{parentName:"p"},"set()")," and ",Object(s.b)("inlineCode",{parentName:"p"},"reset()")," have the same signature as the callbacks provided to a writeable selector\u2019s ",Object(s.b)("inlineCode",{parentName:"p"},"set()")," function."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"  const newSnapshot = snapshot.map(({set}) => set(myAtom, 42));\n")),Object(s.b)("h2",{id:"hooks"},"Hooks"),Object(s.b)("p",null,"Recoil has the following hooks for working with snapshots:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/docs/api-reference/core/useRecoilSnapshot"},Object(s.b)("strong",{parentName:"a"},Object(s.b)("inlineCode",{parentName:"strong"},"useRecoilSnapshot()")))," - Synchronous access to snapshot"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/docs/api-reference/core/useRecoilCallback"},Object(s.b)("strong",{parentName:"a"},Object(s.b)("inlineCode",{parentName:"strong"},"useRecoilCallback()")))," - Asynchronous access to snapshot"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/docs/api-reference/core/useRecoilTransactionObserver"},Object(s.b)("strong",{parentName:"a"},Object(s.b)("inlineCode",{parentName:"strong"},"useRecoilTransactionObserver()")))," - Subscribe to snapshots of all state updates"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/docs/api-reference/core/useGotoRecoilSnapshot"},Object(s.b)("strong",{parentName:"a"},Object(s.b)("inlineCode",{parentName:"strong"},"useGotoRecoilSnapshot()")))," - Update current state to match snapshot")),Object(s.b)("h3",{id:"userecoilsnapshot"},"useRecoilSnapshot()"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"function useRecoilSnapshot(): Snapshot\n")),Object(s.b)("p",null,"You can use this hook to synchronously obtain a snapshot to the current state while rendering a component.  While conceptually simple, this hook will subscribe any component that uses it to any Recoil state change so it always renders with a snapshot of the current state.  Therefore, be careful using this hook.  One example when you may want to use it is for supporting server-side rendering where you need to synchronously have the state with the first render.  In the future, we may provide the ability to debounce for performance."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example")),Object(s.b)("p",null,"Define a ",Object(s.b)("inlineCode",{parentName:"p"},"<LinkToNewState>")," component that renders an ",Object(s.b)("inlineCode",{parentName:"p"},"<a>")," anchor with an ",Object(s.b)("inlineCode",{parentName:"p"},"href")," based on the current state with a mutation applied.  In this example ",Object(s.b)("inlineCode",{parentName:"p"},"uriFromSnapshot()")," is some user-defined function which encodes the current state in the URI which can be restored when loading the page."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"function LinkToNewState() {\n  const snapshot = useRecoilSnapshot();\n  const newSnapshot = snapshot.map(({set}) => set(myAtom, 42));\n  return <a href={uriFromSnapshot(newSnapshot)}>Click Me!</a>;\n}\n")),Object(s.b)("p",null,"This is a simplified example.  We have a helper like this for generating links in our browser history persistence library coming soon which is more extensible and optimized.  For example, it will hijack the click handler to update local state without needing to go through the browser history."),Object(s.b)("h3",{id:"userecoilcallback"},"useRecoilCallback()"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"type CallbackInterface = {\n  snapshot: Snapshot,\n  gotoSnapshot: Snapshot => void,\n  set: <T>(RecoilState<T>, (T => T) | T) => void,\n  reset: <T>(RecoilState<T>) => void,\n};\n\nfunction useRecoilCallback<Args, Return>(\n  callback: CallbackInterface => (...Args) => ReturnValue,\n  deps?: $ReadOnlyArray<mixed>,\n): (...Args) => ReturnValue\n")),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"useRecoilCallback()")," hook is similar to the React ",Object(s.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usecallback"},Object(s.b)("inlineCode",{parentName:"a"},"useCallback()"))," hook for producing a callback function.  But, instead of just providing an input callback function you wrap it with a function providing a callback interface parameter that gives you access to a ",Object(s.b)("inlineCode",{parentName:"p"},"Snapshot")," and ",Object(s.b)("inlineCode",{parentName:"p"},"set()"),"/",Object(s.b)("inlineCode",{parentName:"p"},"reset()")," callbacks to update the current global state.  The provided ",Object(s.b)("inlineCode",{parentName:"p"},"Snapshot")," represents the state when the callback is called, not when the callback function was originally created."),Object(s.b)("p",null,"NOTE: This is a slight breaking change in the API, but we are still on version ",Object(s.b)("inlineCode",{parentName:"p"},"0.0.x")," of Recoil and haven\u2019t fully started semantic versioning yet."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"useRecoilCallback()")," also takes an optional ",Object(s.b)("inlineCode",{parentName:"p"},"deps")," array parameter for controlling memoization.  You can extend the ",Object(s.b)("inlineCode",{parentName:"p"},"react-hooks/exhaustive-deps")," lint rule for ensuring this is properly used."),Object(s.b)("p",null,"Some motivations for using ",Object(s.b)("inlineCode",{parentName:"p"},"useRecoilCallback()"),":"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Asynchronously use Recoil state without subscribing a React component to re-render if the atom or selector is updated.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Deferring expensive lookups to an async action that you don't want to do at render-time.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Performing side-effects where you would like to also read or write to Recoil state.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Dynamically updating an atom or selector where we may not know at render-time which atom or selector we will want to update, so we can't use ",Object(s.b)("a",{parentName:"p",href:"https://recoiljs.org/docs/api-reference/core/useSetRecoilState"},Object(s.b)("inlineCode",{parentName:"a"},"useSetRecoilState()")),".")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Pre-fetching before rendering"))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example")),Object(s.b)("p",null,"Button component which will evaluate an expensive selector when clicked on."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"function ShowDetailsButton() {\n  const onClick = useRecoilCallback(({snapshot}) => async () => {\n    const data = await snapshot.getPromise(expensiveQuery);\n    showPopup(data);\n  });\n\n  return <button onClick={onClick}>Show Details</button>;\n}\n")),Object(s.b)("h3",{id:"userecoiltransactionobserver"},"useRecoilTransactionObserver()"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"function useRecoilTransactionObserver_UNSTABLE(({\n  snapshot: Snapshot,\n  previousSnapshot: Snapshot,\n}) => void)\n")),Object(s.b)("p",null,"This hook subscribes a callback to be executed every time there is a change to Recoil atom state.  Multiple updates may be batched together in a single transaction.  This hook is great for persisting state changes, dev tools, building history, &c.  In the future, we may allow the ability to subscribe to specific conditions or provide debouncing for performance."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Debug Observer Example")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"function DebugObserver() {\n  useRecoilTransactionObserver_UNSTABLE(({snapshot}) => {\n    window.myDebugState = {\n      a: snapshot.getLoadable(atomA).contents,\n      b: snapshot.getLoadable(atomB).contents,\n    };\n  });\n  return null;\n}\n")),Object(s.b)("h3",{id:"usegotorecoilstate"},"useGotoRecoilState()"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"function useGotoRecoilSnapshot(): Snapshot => void\n")),Object(s.b)("p",null,"This hook returns a callback which takes a ",Object(s.b)("inlineCode",{parentName:"p"},"Snapshot")," as a parameter and will update the current ",Object(s.b)("inlineCode",{parentName:"p"},"<RecoilRoot>")," state to match this atom state."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Time Travel Example")),Object(s.b)("p",null,"Example list of history of state changes with the ability to go back and restore previous state."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"function TimeTravelObserver() {\n  const [snapshots, setSnapshots] = useState([]);\n\n  useRecoilTransactionObserver_UNSTABLE(({snapshot}) => {\n    setSnapshots([...snapshots, snapshot]);\n  });\n\n  const gotoSnapshot = useGotoRecoilSnapshot();\n\n  return (\n    <ol>\n      {snapshots.map((snapshot, i) => (\n        <li key={i}>\n          Snapshot {i}\n          <button onClick={() => gotoSnapshot(snapshot)}>\n            Restore\n          </button>\n        </li>\n      )}\n    </ol>\n  );\n}\n")),Object(s.b)("h2",{id:"state-initialization"},"State Initialization"),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"<RecoilRoot>")," component also has an ",Object(s.b)("inlineCode",{parentName:"p"},"initializeState")," prop which can be used to initialize the atom state.  This prop takes a function with a ",Object(s.b)("inlineCode",{parentName:"p"},"MutableSnapshot")," parameter that can be used to setup the initial atom state.  This can be helpful for loading persisted state when you know all atoms in advance.  It can be useful for server-side rendering where the state should be setup synchronously for the first render."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"function MyApp() {\n  return (\n    <RecoilRoot\n      initializeState={({set}) => {\n        for (const [atom, value] of atoms) {\n          set(atom, value);\n        }\n      }}\n    >\n      <AppContents />\n    </RecoilRoot>\n  );\n}\n")),Object(s.b)("h2",{id:"whats-next"},"What\u2019s Next?"),Object(s.b)("p",null,"Snapshots allow us to observe and synchronize the global state.  But, what if we want a more granular and composable system to work with individual atoms?  We\u2019re working on the concept of ",Object(s.b)("em",{parentName:"p"},"Atom Effects")," for observing and dealing with side-effects at the atom level.  This will make it easier to persist state or bi-directionally sync with mutable storage.  Think of synchronizing state with the browser URI history, browser local storage, RESTful APIs, &c.  Coming soon!"),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"Snapshot")," API introduced here allows us to inspect the current state for individual atoms and selectors.  We\u2019ll be expanding the API to be able to inspect the set of available nodes and explore the data-flow graph structure.  This will be powerful for building dev tools.  Stay tuned!"),Object(s.b)("p",null,"And, of course, we still have exiciting support for React Concurrent Mode and improved speed, scalability, and memory management in the works."))}p.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),h=a,d=b["".concat(r,".").concat(h)]||b[h]||u[h]||s;return n?o.a.createElement(d,i(i({ref:t},c),{},{components:n})):o.a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var c=2;c<s;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);
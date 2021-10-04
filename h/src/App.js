import './App.css';
// import ClassCounter from './c1/ClassCounter'
// import HookCounter from './c1/HookCounter'
// import HookCounterTwo from './c2/HookCounterTwo'
// import HookCounterThree from './c3/HookCounterThree'
// import HookCounterFour from './c4/HookCounterFour'
// import HookCounterOne from './c5/HookCounterOne'
// import HookMouse from './c6/HookMouse';
// import MouseContainer from './c7/MouseContainer'
// import IntervalHookCounter from './c8/IntervalHookCounter'
// import DataFetching from './c9/DataFetching'

// import ComponentC from './c10/ComponentC'
// import React from 'react'
// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

// import CounterOne from './c11/CounterOne'
// import CounterTwo from './c12/CounterTwo';
// import CounterThree from './c13/CounterThree';

// import ComponentA from './c14/ComponentA'
// import ComponentB from './c14/ComponentB'
// import ComponentC from './c14/ComponentC'
// import { reducer, initialState } from './c14/util'
// import React, { useReducer } from 'react'
// export const CountContext = React.createContext()

// import DataFetchingOne from './c15/DataFetchingOne'
// import DataFetchingTwo from './c15/DataFetchingTwo'

// import ParentComponent from './c16/ParentComponent'

import Counter from './c17/Counter'

const App = () => {
  // const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">

      <Counter />

      {/* <ParentComponent /> */}

      {/* <DataFetchingTwo/> */}
      {/* <DataFetchingOne /> */}

      {/* <CountContext.Provider
         value={{countState: count, countDispatch: dispatch}}
      >
        Count - {count}
        <br/>
        <ComponentA/>
        <br/>
        <ComponentB/>
        <br/>
        <ComponentC/>
        <br/>
      </CountContext.Provider> */}
      {/* <CounterThree/> */}
      {/* <CounterTwo/> */}
      {/* <CounterOne /> */}
      {/* <UserContext.Provider value={'testXYZ321'}>
        <ChannelContext.Provider value={'channel888'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter/> */}
      {/* <MouseContainer/> */}
      {/* <HookMouse/> */}
      {/* <HookCounterOne/> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounter/> */}
      {/* <ClassCounter /> */}
    </div>
  )
}


export default App;

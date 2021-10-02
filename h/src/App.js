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

import CounterOne from './c11/CounterOne'


const App = () =>
  <div className="App">
    <CounterOne />

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



export default App;

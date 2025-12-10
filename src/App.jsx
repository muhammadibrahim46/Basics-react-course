import React from 'react'
// import Wellcome from './childe'
// import Maplist from './mapMethod/index'
// import Apipatch from './API'
// import User from './UseEffect'
// import Useref from './useRef'
import { useState } from "react";
import { ThemeContext } from './ThemeContext';

import Home from './home';



function App() {
  const [dark, setDark] =useState(false)
  return (
    <div>
<ThemeContext.Provider value={{dark,setDark}}>
  <Home/>
  </ThemeContext.Provider>
      {/* <Maplist /> */}
      {/* <Wellcome />
      <Apipatch />
      <User />
      <Useref /> */}
    </div>
  )
}

export default App
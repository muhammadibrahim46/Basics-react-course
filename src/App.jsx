import React from 'react'
import Wellcome from './childe'
import Maplist from './mapMethod/index'
import Apipatch from './API'
import User from './UseEffect'
import Useref from './useRef'


function App() {
  return (
    <div>
      {/* <Maplist /> */}
      <Wellcome />
      <Apipatch />
      <User />
      <Useref />
    </div>
  )
}

export default App
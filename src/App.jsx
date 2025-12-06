import React from 'react'
import Wellcome from './childe'
import Maplist from './mapMethod/index'
import Apipatch from './API'
import User from './UseEffect'


function App() {
  return (
    <div>
      <Maplist />
      {/* <Wellcome /> */}
      <Apipatch />
      <User />
    </div>
  )
}

export default App
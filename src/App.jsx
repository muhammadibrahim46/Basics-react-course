import React, {useState} from 'react'
// import Wellcome from './childe'
// import src from './assets/song.jpg'

function App() {
  const [show,setShow] = useState(true)
  return (
    <div>
      {/* <Wellcome name="ibrahim afridi" age={21} address="345 arfa tower" src={src} />
   <image  src={src}> */}
   <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p>Hello Ibrahim!</p>}
    </div>
  
    </div>
  )
}

export default App
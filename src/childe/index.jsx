import React,{useState} from 'react'


function Wellcome() {
 const [darkMode, setDarkMode] = useState(false)
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)
  const [input, setInput] = useState("")
  const [white, setWhite] = useState(false)

  return (
    <>
    <div className={`${white ? "bg-white text-black" : darkMode ? "bg-black text-white" : "bg-gray-300 text-black"} min-h-screen p-5 justify-center items-center flex`}>
      
      <button className='text-2xl justify-center items-center flex'  onClick={() => setWhite(!white)}>White Mode</button>

      <button className='text-2xl justify-center items-center flex' onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>

      <h1 className='text-2xl text-center'>{darkMode ? "ibrahim afridi" : "aryan afridi"}</h1>
      <div className='text-2xl text-center'>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && <p>Hello Ibrahim!</p>}
      </div>

      <div className='text-2xl text-center'>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>

      <form className='text-2xl  justify-center  text-center  p-5 bg-emerald-500 mx-100 rounded-2xl'>
        <input className='bg-white text-black rounded-2xl border-2 '
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
        />
        <h1>Hello {input}</h1>
      </form>
      

    </div>
  
    </>
  )
}

export default Wellcome
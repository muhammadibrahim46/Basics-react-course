import React,{useRef,useEffect,useState} from 'react'



function Useref() {
  // this is use for to start and stop the count 
const [second, setSecond]=useState(0)
const timeref=useRef(null)
function start (){
  if(!timeref.current){
  timeref.current=setInterval(()=>{
    setSecond((prev)=>prev+1)
  },100)

  
  }
}
function stop(){
  clearInterval(timeref.current)
  timeref.current=null
}
//  when you type some value in input that count and show on screen 
const [Count, setCount] = useState(0)
const randercount=useRef(1)
 function handleChange(e){
  setCount(e.target.value)
    randercount.current+=1
 }
//  when you click on the button it clear the input 
let inputref =useRef()
    function handleFocus() {
        inputref.current.value=""
    }
let boxref=useRef(false)
function changecolor(){
  boxref.current.style.backgroundColor=
  boxref.current.style.backgroundColor = "blue"
   ? "lightgreen": "lightblue";
}





  return (
    <div>
      <h1>{second}</h1>
      <button className='bg-green-600 text-white px-3 py-1' onClick={start}>Start</button>
      <button className='bg-green-600 text-white px-3 py-1' onClick={stop}>Stop</button>
        <input className='border-2 ' ref={inputref} type="text" name="" id="" /> <br />
        <button onClick={handleFocus}>Focus Input</button> 
        <br />
        <button className='p-4 text-2xl item-center justify-center' onClick={()=>setCount(Count+1)}>button</button>
   <p className='p-4 text-2xl item-center justify-center' >Render Count: {randercount.current} timer</p>
      <input onChange={handleChange} type="text" />
      <h1>total Count: {Count}</h1>
      <p>you type the text{randercount.current}</p>

      <div ref={boxref}  style={{width:"100px",height:"100px",backgroundColor:"lightblue"}}>
        <button  className="bg-purple-600 text-white px-3 py-1 mt-3" onClick={changecolor}>Change Color</button>
      </div>
    </div>
    
  )
}

export default Useref
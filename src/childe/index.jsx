import React from 'react'

function Wellcome(props) {
  return (
    <div> 
        <img src={props.src} />
        <h1>hellow {props.name} my age is  {props.age} <br /> and also this is my address {props.address} </h1>
    </div>
  )
}

export default Wellcome
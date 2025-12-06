import React from 'react'

 const Products=[
    { title:'garbage', id:1 },
    { title:'apple', id:2 },
    { title:'orange', id:3 }
 ]
function Maplist() {
    const listItems =Products.map(Products=> 
    <li key={Products.id}>
        {Products.title}
        </li>
        );
  return (
    <div>
        <ul>{listItems}</ul>
    </div>
  )
}

export default Maplist
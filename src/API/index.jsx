import React, { useEffect,useState } from 'react'

function Apipatch() {
    const [user,setUser] =useState([]);
    useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(data=>setUser(data))
console.log('components is mounted')
    },[])

  return (
    <>
    <div className=' '>
        <h1 className='text-3xl text-center'>Users List</h1>
        {user.map((user) => ( <div className='text-1xl text-center' key={user.name}> <p className='text-3xl text-center'>Name</p> {user.name},
            <h1 className='text-3xl text-center'>username</h1>
            <h1 className='text-1xl text-center'>{user.username}</h1>
            <h1 className='text-3xl text-center'>Email</h1>
            <h1 className='text-1xl text-center'>{user.email}</h1>
            <h1 className='text-3xl text-center'>Address</h1> 
            <h1>{user.address.street}, {user.address.city}</h1>
            
             </div> ))}
    
    </div>
    </>
  )
}

export default Apipatch
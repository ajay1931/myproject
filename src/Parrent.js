import React,{useEffect, useState} from 'react'
import Child from './Child'

export default function Parrent() {
  const[name,setName]=useState({"name":"sengs"})
  
  function changeName(){
    setName({"name":"alien"})
  }

    return (
  
    <Child title={name} onclick={changeName}/>
    
  )
}


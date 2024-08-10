import React,{useState} from 'react'
import Child from './Child'
import { cities,greetings } from './Home'

export default function Parrent() {
  const[name,setName]=useState({"name":"sengs"})
  
  function changeName(){
    setName({"name":"alien"})
  }

    return (
  
    <Child title={name} onclick={changeName}/>
    
  )
}


console.log(cities)
console.log(greetings)


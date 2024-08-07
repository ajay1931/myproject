import React, { useEffect } from 'react'

export default function Child(props) {
  const {title,onclick}=props
  useEffect(()=>{
    console.log(title.name)
  },[])
  return (
    <div>
      <h1>{title.name}</h1>
      <button onClick={onclick}>change</button>
    </div>
  )
}


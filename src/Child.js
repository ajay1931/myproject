import React from 'react'

export default function Child(props) {
  const {title,onclick}=props

  return (
    <div>
      <h1>{title.name}</h1>
      <button onClick={onclick}>change</button>
    </div>
  )
}


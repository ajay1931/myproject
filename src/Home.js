
import React, { useState } from 'react'

// export default function Home() {
//   const[name,setName]=useState('Hello react')
//   return (
//     <div>
//       <h1>{name}</h1>
//       <button onClick={()=>setName('hi')}>change name</button>
//     </div>
//   )
// }


// export default function Home() {
//   const[name,setName]=useState({greetings:'hello react'})

//   function changeName(){
//     setName({...name,greetings:'hii'})
//   }
//   return (
//     <div>
//       <h1>{name.greetings}</h1>
//       <button onClick={()=>changeName()}>change</button>
//     </div>
//   )
// }



export default function Home() {
  const [names, setNames] = useState([])
  
  function changeName() {
    setNames([...names, 'hi,hello'])
  }
  return (
    <div>
      {
        names && names.map((name,index) => {
          return <h1 key={index}>{name}</h1>
        })
      }
      <button onClick={changeName}>change</button>
    </div>
  )
}

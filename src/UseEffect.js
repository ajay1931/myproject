import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [num1, setNum1] = useState(1000)

    useEffect(()=>{
        setNum1(num1)
        console.log("useeffect")
        return(()=>{
            setNum1(null)
            console.log("memory cleared")
        })
    },[num1])
    return (
        <div>
            <h1>{num1}</h1>
            <button onClick={() => setNum1((value) => value+1)}>add numbers</button>
        </div>
    )
}

export default UseEffect

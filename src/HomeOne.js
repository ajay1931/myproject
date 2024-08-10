import React, { useState } from 'react'

function Home1() {
    const [ Num, setNum ] = useState(1)

    function addNum() {
        setNum((value) => {
            return value +1
        })
    }

    return (
        <div>
            <h1>{Num}</h1>
            <button onClick={addNum}>addNum</button>
        </div>
    )
}

export default Home1

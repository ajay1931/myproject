import React, { useState, useMemo } from 'react'
import { useEffect } from 'react';

function Memo() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number]);

    // const [doubleNumber, setDoubleNumber] = useState(0)
    // useEffect(()=>{
    //     setDoubleNumber(slowFunction(number))
    // },[number])

    const themeStyle = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black",
        }
    }, [dark])

    useEffect(() => {
        console.log("theme changed")
    }, [themeStyle])

    return (
        <div>
            <input type="number" value={number} onChange={(val) => setNumber(val.target.value)} />
            <button onClick={() => setDark((curVal) => !curVal)}>toggle theme</button>
            <div style={themeStyle}>{doubleNumber}</div>
        </div>
    )
}

export default Memo;

function slowFunction(num) {
    for (let i = 0; i < 100000; i++) { }
    return num * 2;
}

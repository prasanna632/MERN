import React, { useEffect,useState} from 'react'

const UseEffect = () => {
    const [count,setcount]=useState(0);
    const [value,setValue]=useState(0);
    useEffect(() => {
        console.log("UseEffect Mounted");
    },[count]);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>inc</button>
        <h1>{value}</h1>
        <button onClick={()=>setValue(value+1)}>inc</button>
    </div>
  )
}

export default UseEffect
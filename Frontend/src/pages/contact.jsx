import React ,{useState} from 'react'

const Contact = () => {
  const [name,setName]=useState("Sunny");
  const toggleName=()=>{
    setName(name==="Sunny"?"prasanna":"Sunny")
  }

  return (
    <div>
      <h1>Name : {name}</h1>
      <button onClick={toggleName}>Toggle</button>
    </div>
  )
}
export default Contact
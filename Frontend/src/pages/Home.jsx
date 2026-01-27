import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = ({name}) => {
  const naviagte = useNavigate();
  const handleClick=()=>{
    naviagte('/about')
  }
  return (
    <div>
        <h1>Name:{name}</h1>
        <button onClick={handleClick}>Go to about pages</button>
       
    </div>
  )
}
export default Home
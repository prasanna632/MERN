import React from 'react'
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import AuthContext from '../context/AuthContext';
import { use } from 'react';

 const Service = () => {
  const theme = useContext(ThemeContext);
  const user= useContext(AuthContext);
  return (
    <div>
      <h1>{theme}</h1>
      <p> Id : {user.id}</p>
      <p>Name : {user.name}</p>
      <p>Email : {user.email}</p>
      {theme}
    </div>
  )
}
export default Service
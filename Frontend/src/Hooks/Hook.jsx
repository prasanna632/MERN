import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Hook = () => {
  return (
    <div>
        <ol>
            <li><Link to='usestate'>UseState</Link></li>
            <li><Link to='useeffect'>UseEffect</Link></li>
            <li><Link to='useeffectapi'>UseEffectWithApi</Link></li>
            <li><Link to='useref'>UseRef</Link></li>
            <li><Link to='usereducer'>UseReducer</Link></li>
            
        </ol>
        <Outlet/>
    </div>
  )
}

export default Hook
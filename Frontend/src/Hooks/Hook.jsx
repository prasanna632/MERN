import React from 'react'
import { Link } from 'react-router-dom'

const Hook = () => {
  return (
    <div>
        <ol>
            <li><Link to='/usestate'>UseState</Link></li>
            <li><Link to='/useeffect'>UseEffect</Link></li>
            <li><Link to='/useeffectapi'>UseEffectWithApi</Link></li>
            
        </ol>
    </div>
  )
}

export default Hook
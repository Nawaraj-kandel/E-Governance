import React from 'react'
import { Link } from 'react-router-dom'

const Box = ({icon, name, link}) => {

  return (
    <div className='w-60 h-24 border-2 border-black flex justify-around items-center'>
      <div>icon</div>
      <div>
        <Link to={`${link}`}>{name}</Link>
      </div>
    </div>
  )
}

export default Box


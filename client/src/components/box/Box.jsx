import React from 'react'
import { Link } from 'react-router-dom'

const Box = ({icon, name, link}) => {

  return (
    <div className="  bg-green-200 w-60 h-24 border-2 cursor-pointer border-gray-300 rounded-lg shadow-md flex justify-around items-center transition duration-300 transform hover:scale-105 hover:shadow-lg">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200">
        <img src={icon} alt="icon" className="w-10 h-10" />
      </div>
      <div className="text-center">
        <Link to={link} className="text-gray-800 font-semibold hover:text-blue-600">{name}</Link>
      </div>
    </div>
  )
}

export default Box


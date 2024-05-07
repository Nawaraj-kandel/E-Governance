import React from 'react'

const Button = ({name}) => {
  return (
    <div>
         <button
          className= "w-24 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {name}
        </button>
    </div>
  )
}

export default Button

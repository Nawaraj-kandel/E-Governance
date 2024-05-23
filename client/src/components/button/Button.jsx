import React from 'react'

const Button = ({name}) => {
  return (
    <div>
         <button
          className= "w-22 h-12 bg-green-600 rounded-lg hover:bg-green-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
        >
          {name}
        </button>
    </div>
  )
}

export default Button

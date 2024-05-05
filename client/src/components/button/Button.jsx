import React from 'react'

const Button = ({name}) => {
  return (
    <div>
         <button
          className="w-24 h-12 bg-red-200 rounded-md border-none text-base"
        >
          {name}
        </button>
    </div>
  )
}

export default Button

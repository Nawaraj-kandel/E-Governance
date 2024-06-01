import React from 'react'

const Button = ({name}) => {
  return (
    <div>
         <button
          className= "w-24 h-12 rounded-t-lg bg-blue-400  hover:bg-blue-300 text-black  text-xl py-2 px-2  focus:outline-none focus:shadow-outline" style={{ fontFamily: 'Times New Roman' }}
        >
          {name}
        </button>
    </div>
  )
}

export default Button;

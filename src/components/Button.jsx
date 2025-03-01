import React from 'react'

const Button = ({ text, className, onClick }) => {
  return (
    <button id='buttono' className={`text-[#968B72] hidden md:inline border-2 cursor-pointer rounded-lg py-[4px] px-[8px] hover:bg-gray-700 hover:border-none hover:py-[6px] hover:px-[10px] ${className}`}
      style={{ borderColor: "#968B72" }} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
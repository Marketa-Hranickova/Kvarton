import React from 'react'

const Button = ({ text, className }) => {
  return (
    <button className={`text-[#968B72] border-2 cursor-pointer rounded-lg py-[4px] px-[8px] hover:bg-gray-700 hover:border-none hover:py-[6px] hover:px-[10px] ${className}`}
      style={{ borderColor: "#968B72" }}>
      {text}
    </button>
  )
}

export default Button
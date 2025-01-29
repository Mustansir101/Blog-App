import React from 'react'

// classname and ...props for any other className, or Btn Properties give by user
// children should always be in lowercase

function Button({
    children, 
    type="button",
    bgColor="bg-blue-600",
    textColor="text-white",
    className="",
    ...props
}) {

  return (
    <button className={`px-4 py-2 rounded-lg ${type} ${bgColor} ${textColor} ${className}`}
    {...props}>
        {children}
    </button>
  )

}

export default Button


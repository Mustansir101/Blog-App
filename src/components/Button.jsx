import React from 'react'

// classname and ...props for any other className, or Btn Properties give by user

function Button({
    Children, 
    type="button",
    bgColor="bg-blue-600",
    textColor="text-white",
    className="",
    ...props
}) {

  return (
    <button className={`px-4 py-2 rounded-lg ${type} ${bgColor} ${textColor}`}
    {...props}>
        {Children}
    </button>
  )

}

export default Button
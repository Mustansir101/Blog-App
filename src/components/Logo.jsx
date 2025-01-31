import React from 'react'
import myImage from "../../asset/Logo.png";

function Logo() {
  return (
    <div className='pt-1'>
      {/* <img src={myImage} alt="" 
       className='w-16 h-10 rounded-full shadow-2xl border border-gray-200'
      /> */}
      <span className='text-white text-xl'>&lt;Blog/&gt;</span>
    </div>
  )
}

export default Logo
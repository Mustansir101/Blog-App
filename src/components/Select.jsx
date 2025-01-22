import React,{useId, forwardRef} from 'react'

function Select({
    options,    // this should be an array
    label,
    className="",
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        <label htmlFor={id}></label>            {/* just to have unique id */}
        
        <select name="" id={id} ref={ref}
          className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`}
          {...props}
        >
            {options?.map( (option)=>(
                <option key={option} value={option}>
                    {option}
                </option>
            ) )}
        </select>
    
    </div>
  )
}

export default forwardRef(Select)               // another way

// note, if you try to map thru empty arr, website crashes
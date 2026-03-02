import React from 'react'

const Input = ({
    label,
    error,
    className="",
    ...props
}) => {
  return (
    <div className='flex flex-col gap-2 w-full'>
       {label && <label className='text-sm text-text-muted'> {label} </label>}

        <input  
            className = {`w-full px-4 py-2 bg-white text-black border border-transparent focus:border-primary focus:outline-none transition-all ${error ? "border-red-500":""} ${className} `}
            {...props}
        />
        {error && (
        <span className="text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  )
}

export default Input

import React from 'react'

const Input = ({
    label,
    error,
    className="",
    ...props
}) => {
  return (
    <div className='flex flex-col justify-start gap-2 w-full'>
       {label && <label className='text-sm text-black text-start'> {label} </label>}

        <input
            list={['amar',"vias","viabhav"]}
            className = {`w-full px-4 py-2 bg-white text-black border border-black rounded focus:border-primary focus:outline-none transition-all ${error ? "border-red-500":""} ${className} `}
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

import React from 'react'
import Input from './ui/Input'
import Button from './ui/Button'
import Icon from './ui/Icon'

const FlightSearch = () => {
  return (
    <div className='flex flex-col items-center gap-2 justify-center px-4 '>
        <h1 className='text-primary'>Search Your Flight</h1>
        <div className='rounded-lg shadow-lg p-6 bg-white grid gap-5 max-w-6xl w-full md:grid-cols-5 grid-cols-1 '>
           {/* from */}
           <Input label="From" placeholder="City or Airport"  />
           {/* destination */}
           <Input label="Destination" placeholder="City or Airport" />
           {/* persons */}
           <Input label="Persons" type="number" value={1} />
           <Input label="Date" type="date"/>
           <div className='flex items-end justify-center'>
             <Button className='flex gap-2' size='md'>Search <Icon name="Search" size='md'/></Button>
             
           </div>

           

        </div>
    </div>
  )
}

export default FlightSearch

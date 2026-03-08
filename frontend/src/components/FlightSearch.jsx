
import Input from './ui/Input'
import Button from './ui/Button'
import Icon from './ui/Icon'
import {useNavigate }from "react-router-dom"
import { useState } from 'react'


const FlightSearch = () => {
  const navigate = useNavigate();
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  return (
    <div className='flex flex-col items-center gap-2 justify-center px-4 '>
        <h1 className='text-primary'>Search Your Flight</h1>
        <div className='rounded-lg shadow-lg p-6 bg-white grid gap-5 max-w-6xl w-full md:grid-cols-3 grid-cols-1 '>
           {/* from */}
           <Input label="From" placeholder="City or Airport"
             value = {arrival}
             onChange = {(e) => setArrival(e.target.value)}
            />
           {/* destination */}
           <Input label="Destination" placeholder="City or Airport" 
             
             value = {departure}
             onChange = {(e) => setDeparture(e.target.value)}
           />
           
           <div className='flex items-end justify-center'>
             <Button
               className='flex gap-2'
               size='md'
               onClick={() => navigate(`/flights?departure=${departure}&arrival=${arrival}`)}
             >Search <Icon name="Search" size='md'/></Button>
             
           </div>

           

        </div>
    </div>
  )
}

export default FlightSearch

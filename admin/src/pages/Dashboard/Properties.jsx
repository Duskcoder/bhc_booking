import React from 'react'
import {useNavigate} from "react-router-dom"
function Properties() {
    const navigate=useNavigate()
   const handleClick=()=>{
    navigate("/addproperties")
   }
    return (
        <div className='px-2 '>
            <div className='d-flex justify-content-between'>
                <h5>Properties</h5>
                <button className='button_register' onClick={handleClick}>Add</button>
            </div>

        </div>
    )
}

export default Properties
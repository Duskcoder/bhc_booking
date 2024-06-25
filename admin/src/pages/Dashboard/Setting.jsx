import React,{useState} from 'react'
import Sidlebar from '../side/Sidlebar'
import Sidebarcontent from '../side/Sidebarcontent'
function Setting() {
    const [Active, setActive] = useState(1)
    return (
        <div className='container'>
            <div className=' row'>
                <div className='sticky-top col-lg-4' style={{cursor:"pointer"}}>
                    <Sidlebar Active={Active} setActive={setActive} />

                </div>
                <div className='col-lg-6'>
                    <Sidebarcontent Active={Active} />

                </div>

            </div>
        </div>
    )
}

export default Setting



import React, { useState } from 'react'
import Sidlebar from '../side/Sidlebar'
import Sidebarcontent from '../side/Sidebarcontent'
function Setting() {
    const [Active, setActive] = useState(1)
    return (
        <div className='container'>
            <div className='' >
                <div className='row justify-content-center' style={{ cursor: "pointer" }}>
                    <div className='col-lg-6 mb-5'>
                        <Sidlebar Active={Active} setActive={setActive} />
                    </div>

                </div>
                <div className="row justify-content-center mt-5">
                    <div className='col-lg-5'>
                        <Sidebarcontent Active={Active} />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Setting



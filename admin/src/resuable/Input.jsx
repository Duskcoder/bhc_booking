import React from 'react'

function Input(props) {
    const { type, onChange, onBlur, name, label, className, placeholder,value,readOnly} = props
    return (
        <div className='mt-3'>


            <label for="exampleInputEmail1" className='fs-6' style={{fontWeight:"500"}}>{label}</label>
            <input type={type} className={className} onChange={onChange} onBlur={onBlur} name={name} value={value} id="exampleInputEmail1" aria-label="emailHelp" autoComplete='off' placeholder={placeholder} readOnly={readOnly} />




        </div>
    )
}

export default Input
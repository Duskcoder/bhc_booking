import React from 'react'
import "../../style/Register.css"
import "../../style/Responsive.css"

import { Icons } from '../../resuable/Icons';
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"
function Reset() {
    const [eye, setEye] = React.useState(false);
    const [eye1, setEye1] = React.useState(false);

    const handleClick = () => {
        setEye(!eye);
    };
    const handleClick2 = () => {
        setEye1(!eye1);
    };
    const navigate = useNavigate()
    const handleClick1 = () => {
        navigate("/forget")
    }
   

    return (
        <div className='background__image'>
        <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6  shadow rounded-lg register_form1'>
                <div className='text-center'>
                    <h5 className="text__color font__size fw-bold">
                        Reset Account Password
                    </h5>
                    <p className="">Enter a new password for </p>
                </div>
                <div>




                    <div class="mt-3 password-icons">
                        <label class="form-label fs-6 " style={{ fontWeight: "500" }}>Password</label>
                        <input
                            type={eye ? "text" : "password"}
                            class={`form-control`}
                            id="exampleFormControlInput1"
                            placeholder="Password"
                            name="password"

                        />

                        <span className="password-icons--eye" onClick={handleClick}>
                            {eye ? Icons.eye.active : Icons.eye.default}
                        </span>

                    </div>
                    <div class="mt-3 password-icons">
                        <label class="form-label fs-6 " style={{ fontWeight: "500" }}>Password</label>
                        <input
                            type={eye1 ? "text" : "password"}
                            class={`form-control`}
                            id="exampleFormControlInput1"
                            placeholder="Password"
                            name="password"

                        />

                        <span className="password-icons--eye" onClick={handleClick2}>
                            {eye1 ? Icons.eye.active : Icons.eye.default}
                        </span>

                    </div>

                </div>
                <div className='mt-3 text-center'>

                    <button className=" button_register" type="submit">RESET PASSWORD</button>
                </div>


            </div>
        </div>
        </div>
    )
}

export default Reset
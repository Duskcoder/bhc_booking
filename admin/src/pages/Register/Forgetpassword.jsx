import React from 'react'
import "../../style/Register.css"
import "../../style/Responsive.css"
import Input from '../../resuable/Input'

import { useNavigate } from "react-router-dom";
import { useFormik } from "formik"
import * as Yup from "yup"
function Forgetpassword() {
    const { values, handleBlur, handleChange, resetForm, handleSubmit, errors, touched } = useFormik({
        initialValues: {

            email: "",



        },
        validationSchema: Yup.object().shape({

            email: Yup.string().email("Invalid email").required("Email is required"),


        }),
        onSubmit: (value) => {
            console.log(value);
        }
    })


    return (
        <div className='background__image'>
            <div className='row justify-content-center'>
                <div className='col-lg-4 col-md-6  shadow  register_form1'>
                    <div className='text-center'>
                        <h5 className="fw-bold text__color font__size">
                            Welcome Back!
                        </h5>
                        <p className="">
                            Enter the email address associate with your account and we'll send
                            you a link to reset your password
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>

                            <Input className={`form-control ${errors.email && touched.email ? "active" : ""}`} label="Email" type="email" name="email" values={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email" />
                            {errors.email && touched.email ? (
                                <small className="text-danger">{errors.email}</small>
                            ) : (
                                ""
                            )}





                        </div>
                        <div className='mt-3 text-center'>

                            <button className=" button_register" type="submit">SEND EMAIL</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Forgetpassword
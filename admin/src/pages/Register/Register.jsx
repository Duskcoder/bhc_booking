import React from 'react'
import "../../style/Register.css"
import "../../style/Responsive.css"
import Input from '../../resuable/Input'
import { Icons } from '../../resuable/Icons';
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"
function Register() {
    const { values, handleBlur, handleChange, resetForm, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            mobile: ""

        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string().min(8, "Password must be at least 8 characters").required("Email is required"),
            mobile: Yup.string()
                .matches(/^[0-9]{10}$/, "Invalid mobile number")
                .required("Mobile number is required"),
        }),
        onSubmit: (value) => {
            console.log(value);
        }
    })
    const [eye, setEye] = React.useState(false);
    const handleClick = () => {
        setEye(!eye);
    };
    const navigate = useNavigate()
    const handleClick1 = () => {
        navigate("/login")
    }
    return (
        <div className='background__image'>
            <div className='row justify-content-center'>
                <div className='col-lg-4 col-md-6  shadow-lg  register_form'>
                    <div className='text-center'>
                        <h5 className=" fw-bold text__color font__size">Join us Today</h5>
                        <p className="">Signup to become a Member</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Input className={`form-control ${errors.name && touched.name ? "active":""}`} label="Name" type="text" name="name" values={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="Name" />
                            {errors.name && touched.name ? (
                                <small className="text-danger">{errors.name}</small>
                            ) : (
                                ""
                            )}
                            <Input className={`form-control ${errors.email && touched.email ? "active":""}`} label="Email" type="email" name="email" values={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email" />
                            {errors.email && touched.email ? (
                                <small className="text-danger">{errors.email}</small>
                            ) : (
                                ""
                            )}
                            <Input className={`form-control ${errors.mobile && touched.mobile ? "active":""}`} label="Phone Number" type="number" name="mobile" values={values.mobile} onChange={handleChange} onBlur={handleBlur} placeholder="Mobile" />
                            {errors.mobile && touched.mobile ? (
                                <small className="text-danger">{errors.mobile}</small>
                            ) : (
                                ""
                            )}

                            <div class="mt-3 password-icons">
                                <label class="form-label fs-6 " style={{ fontWeight: "500" }}>Password</label>
                                <input
                                    type={eye ? "text" : "password"}
                                    className={`form-control ${errors.password && touched.password ? "active":""}`}
                                    id="exampleFormControlInput1"
                                    placeholder="Password"
                                    name="password"
                                    values={values.password} onChange={handleChange} onBlur={handleBlur}

                                />


                                <span className="password-icons--eye" onClick={handleClick}>
                                    {eye ? Icons.eye.active : Icons.eye.default}
                                </span>
                                {errors.password && touched.password ? (
                                    <small className="text-danger">{errors.password}</small>
                                ) : (
                                    ""
                                )}


                            </div>

                        </div>
                        <div className='mt-3 text-center'>

                            <button className=" button_register" type="submit">SIGN UP</button>
                        </div>
                    </form>
                    <div className="text-center pt-3">
                        <p >
                            Already a memeber?{" "}
                            <span className="color-token" onClick={handleClick1}>Login Here</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
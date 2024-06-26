import React from 'react'
import Input from '../../resuable/Input'
import { Icons } from '../../resuable/Icons';
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"
import Logo from "../../assets/logo_1.png"
function Role() {
    const { values, handleBlur, handleChange, resetForm, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            mobile: "",
            role: ""

        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string().min(8, "Password must be at least 8 characters").required("Email is required"),
            mobile: Yup.string()
                .matches(/^[0-9]{10}$/, "Invalid mobile number")
                .required("Mobile number is required"),
            role: Yup.string().required("Role is required"),
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

    return (
        <div className='ps-2'>
            <h5>Role</h5>
            <div className='row justify-content-center'>
                <div className='col-lg-4 col-md-6  shadow-lg '>
                    <div className='w-25 mx-auto'>
                        <img src={Logo} width="100%" />
                    </div>
                    <div className='text-center'>
                        <h5 className=" fw-bold mt-3 text__color font__size">Create A User Admin</h5>
                      
                    </div>
                    <form onSubmit={handleSubmit} className='px-2'>
                        <div >
                            <Input className={`form-control ${errors.name && touched.name ? "active" : ""}`} label="Name" type="text" name="name" values={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="Name" />
                            {errors.name && touched.name ? (
                                <small className="text-danger">{errors.name}</small>
                            ) : (
                                ""
                            )}
                            <Input className={`form-control ${errors.email && touched.email ? "active" : ""}`} label="Email" type="email" name="email" values={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email" />
                            {errors.email && touched.email ? (
                                <small className="text-danger">{errors.email}</small>
                            ) : (
                                ""
                            )}
                            <Input className={`form-control ${errors.mobile && touched.mobile ? "active" : ""}`} label="Phone Number" type="number" name="mobile" values={values.mobile} onChange={handleChange} onBlur={handleBlur} placeholder="Mobile" />
                            {errors.mobile && touched.mobile ? (
                                <small className="text-danger">{errors.mobile}</small>
                            ) : (
                                ""
                            )}

                            <div class="mt-3 password-icons">
                                <label class="form-label fs-6 " style={{ fontWeight: "500" }}>Password</label>
                                <input
                                    type={eye ? "text" : "password"}
                                    className={`form-control ${errors.password && touched.password ? "active" : ""}`}
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
                            <div className='mt-3'>
                                <label class="form-label fs-6 " style={{ fontWeight: "500" }}>Role</label>
                                <select class="form-select" aria-label="Default select example" name='role' value={values.role} onChange={handleChange} onBlur={handleBlur}>
                                    <option selected>Select the Role</option>
                                    <option value="sub_admin">Sub Admin</option>
                                    <option value="manager">Manager</option>
                                    <option value="employee">Employee</option>
                                </select>
                                {errors.role && touched.role ? (
                                    <small className="text-danger">{errors.role}</small>
                                ) : (
                                    ""
                                )}
                            </div>

                        </div>
                        <div className='mt-3 text-center'>

                            <button className=" button_register" type="submit">SUBMIT</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Role
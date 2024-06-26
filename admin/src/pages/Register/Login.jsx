import React from 'react'
import "../../style/Register.css"
import "../../style/Responsive.css"
import Input from '../../resuable/Input'
import { Icons } from '../../resuable/Icons';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik"
import * as Yup from "yup"
import Logo from "../../assets/logo_1.png"
import { useDispatch, useSelector } from "react-redux";
import { Adminlogincreate,resetSuccessState } from "../../feature/Register/Registerslice"
import Loading from '../../resuable/Loading';
function Login() {
    const [eye, setEye] = React.useState(false);
    const handleClick = () => {
        setEye(!eye);
    };
    const navigate = useNavigate()
    const handleClick1 = () => {
        navigate("/forget")
    }
    const { isSuccess, isLoading } = useSelector((state) => state.admin);
  
  
    const dispatch = useDispatch();
    const { values, handleBlur, handleChange, resetForm, handleSubmit, errors, touched } = useFormik({
        initialValues: {

            email: "",
            password: "",


        },
        validationSchema: Yup.object().shape({

            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string().min(8, "Password must be at least 8 characters").required("Email is required"),

        }),
        onSubmit: (value) => {
            dispatch(Adminlogincreate(value))
            resetForm()
        }
    })
 

    if(isLoading){
       return  <Loading/>
    }
    if(isSuccess){
        navigate("/")
        dispatch(resetSuccessState())
    }


    return (
        <div className='background__image'>
            <div className='row justify-content-center'>
                <div className='col-lg-4 col-md-6  shadow register_form1'>
                    <div className='w-25 mx-auto'>
                        <img src={Logo} width="100%" />
                    </div>
                    <div className='text-center'>
                        <h5 className="fw-bold text__color font__size">Welcome Back!</h5>
                        <p className="">Login in to access your account</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>

                            <Input className={`form-control ${errors.email && touched.email ? "active" : ""}`} label="Email" type="email" name="email" values={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email" />
                            {errors.email && touched.email ? (
                                <small className="text-danger">{errors.email}</small>
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
                         

                        </div>
                        <div className='mt-3 text-center'>

                            <button className=" button_register" type="submit"> SIGN IN</button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    )
}

export default Login
import React, { useReducer } from 'react'
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import * as Yup from "yup"
import { AdminPassword } from '../../feature/Register/Registerslice'
import { Icons } from '../../resuable/Icons';

const initialState = {
    oldpassword: false,
    newpassword: false,
    confirmpassword: false
}

function reducers(state, action) {
    switch (action.type) {
        case "oldpassword":
            return { ...state, oldpassword: !state.oldpassword }
        case "newpassword":
            return { ...state, newpassword: !state.newpassword }
        case "confirmpassword":
            return { ...state, confirmpassword: !state.confirmpassword }
        default:
            return state;
    }
}
function Changepassword() {
    const [state, dispatch] = useReducer(reducers, initialState)
    const dispatch1= useDispatch()
    const { handleBlur, handleChange, handleReset, handleSubmit, values, errors, touched } = useFormik({
        initialValues: {
            oldpassword: '',
            new_password: '',
            confirmpassword: ''
        },
        validationSchema: Yup.object().shape({
            oldpassword: Yup.string().required("Old password is required"),
            new_password: Yup.string().required("New password is required"),
            confirmpassword: Yup.string().oneOf([Yup.ref('new_password'), null], 'Passwords must match').required("Confirm password is required")
        }),
        onSubmit: (value) => {
            
            const data = { oldpassword: value.oldpassword, newpassword: value.new_password }
          
            dispatch1(AdminPassword(data))

        }
    })
    const handleOldpassword = () => {   
        dispatch({
            type: "oldpassword",
        })
    }
    const handleNewpassword = () => {
        dispatch({
            type: "newpassword",
        })
    }
    const handleConfirmPassword = () => {
        dispatch({
            type: "confirmpassword",
        })
    }
    return (
        <div className='shadow rounded p-3'>
            <div className=''>
                <h5 style={{ color: "#ad2524", textAlign: "center" }}>Change Password</h5>
                <div className='mt-3'>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-3 password-icons">
                            <label className="form-label fs-6 " style={{ fontWeight: "500" }}>Old Password</label>
                            <input

                                className={`form-control`}

                                placeholder="Password"
                                name="oldpassword"
                                type={state.oldpassword ? "text" : "password"}
                                onChange={handleChange}
                                value={values.oldpassword}
                                onBlur={handleBlur}
                            />

                            <span className="password-icons--eye" onClick={handleOldpassword}>
                                {state.oldpassword ? Icons.eye.active : Icons.eye.default}
                            </span>
                            {errors.oldpassword && touched.oldpassword ? <small className='text-danger'>{errors.oldpassword}</small> : ""}

                        </div>


                        <div className="mt-3 password-icons">
                            <label className="form-label fs-6 " style={{ fontWeight: "500" }}>Old Password</label>
                            <input

                                className={`form-control`}

                                placeholder="Password"
                                name="new_password"
                                type={state.newpassword ? "text" : "password"}
                                onChange={handleChange}
                                value={values.new_password}
                                onBlur={handleBlur}
                            />

                            <span className="password-icons--eye" onClick={handleNewpassword}>
                                {state.newpassword ? Icons.eye.active : Icons.eye.default}
                            </span>
                            {errors.new_password && touched.new_password ? <small className='text-danger'>{errors.new_password}</small> : ""}

                        </div>

                        <div className="mt-3 password-icons">
                            <label className="form-label fs-6 " style={{ fontWeight: "500" }}>Confirm Password</label>
                            <input

                                className={`form-control`}

                                placeholder="Confirm Password"
                                name="confirmpassword"
                                value={values.confirmpassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type={state.confirmpassword ? "text" : "password"}

                            />

                            <span className="password-icons--eye" onClick={handleConfirmPassword}>
                                {state.confirmpassword ? Icons.eye.active : Icons.eye.default}
                            </span>
                            {errors.confirmpassword && touched.confirmpassword ? <small className='text-danger'>{errors.confirmpassword}</small> : ""}


                        </div>
                        <div className="text-center pt-3">
                            <button className="button_register" type="submit">
                                Change Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Changepassword
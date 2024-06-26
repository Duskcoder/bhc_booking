import React, { useState, useEffect } from "react";

import Input from "../../resuable/Input";
import { TbEditOff, TbEdit } from "react-icons/tb";
import Changepassword from "./Changepassword";


import { useSelector, useDispatch } from "react-redux";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { AdminGetOnecreate } from "../../feature/Register/Registerslice";
import { useFormik } from "formik";
import * as Yup from "yup";



function Sidebarcontent({ Active }) {
    const [Edite, setEdite] = useState(false);

    const dispatch = useDispatch()
    const { AdmingetOne } = useSelector((state) => state.admin);
    console.log(AdmingetOne);


    useEffect(() => {
        dispatch(AdminGetOnecreate())
    }, [dispatch])


    const { values, handleBlur, handleChange, handleSubmit } = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: AdmingetOne?.name || "",
            email: AdmingetOne?.email || "",
            mobile: AdmingetOne?.mobile || "",
        },
        onSubmit: (value) => {

        },
    });
    const handleEdite = () => {
        setEdite(!Edite);
    };





    return (
        <div>
            {Active === 1 && (
                <div className="row shadow rounded-3">
                    <div className="col-lg-12 p-3" >
                        <div className="d-flex justify-content-between">
                            <h5 style={{ color: "#ad2524" }}>
                                {Edite ? "Edite Profile" : "View Profile"}
                            </h5>
                            <button className="button_register" onClick={handleEdite}>
                                {Edite ? <TbEdit /> : <TbEditOff />}
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>

                            <div className=" p-2">
                                <Input
                                    className="form-control"
                                    type="text"
                                    label="Name"
                                    placeholder="Name"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    readOnly={!Edite}
                                />
                                <Input
                                    className="form-control"
                                    type="text"
                                    label="Email"
                                    placeholder="Email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    readOnly={!Edite}
                                />
                                <Input
                                    className="form-control"
                                    type="number"
                                    label="Mobile Number"
                                    placeholder="Mobile Number"
                                    name="mobile"
                                    value={values.mobile}
                                    onChange={handleChange}
                                    readOnly={!Edite}
                                />
                            </div>
                            <div className="text-center pt-3">
                                <button
                                    className="button_register"
                                    type="submit"
                                    disabled={!Edite}
                                >
                                    {Edite ? "Edite Profile" : "View Profile"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {Active === 2 && <Changepassword />}

        </div>
    );
}
export default Sidebarcontent;

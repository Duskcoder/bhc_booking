import React, { useState } from 'react'
import { Icons } from '../../resuable/Icons'
import { useNavigate } from "react-router-dom"
import Input from '../../resuable/Input'
import { useFormik } from "formik"
import * as Yup from "yup"
function Addproperties() {
    const [images, setImages] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [showSortNotification, setShowSortNotification] = useState(true);
    const { values, handleBlur, handleChange, resetForm, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            product_name: "",
            product_price: "",
            address: "",
            country: "",
            option: "",



        },
        validationSchema: Yup.object().shape({
            product_name: Yup.string().required("Name is required"),
            product_price: Yup.string().required("Price is required"),
            address: Yup.string().required("Address is required"),
            country: Yup.string().required("Country is required"),
            option: Yup.string().required("Option is required"),

        }),
        onSubmit: (value) => {
            console.log(value);
        }
    })

    const handleImageChange = (e) => {
        e.preventDefault();
        const files = Array.from(e.target.files);
        setImages((prevImages) => [...prevImages, ...files]);
    };

    const handleImageDelete = (data) => {
        setImages((prevImages) => prevImages.filter((img) => img !== data));
    };

    const handleImageOrderChange = (dragIndex, hoverIndex) => {
        const newImages = [...images];
        const draggedImage = newImages[dragIndex];
        newImages.splice(dragIndex, 1);
        newImages.splice(hoverIndex, 0, draggedImage);
        setImages(newImages);
        setShowSortNotification(false);
    };

    const handleMouseOver = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseOut = () => {
        setHoveredIndex(null);
    };
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(-1)
    }
    return (
        <div className='ps-2'>
            <div className='d-flex gap-2'>
                <p onClick={handleClick}>{Icons.close.active}</p>
                <h5>Add Properties</h5>

            </div>

            <div className='row justify-content-center'>

                <div className='col-lg-6 card p-3 shadow-lg'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <Input className={`form-control ${errors.product_name && touched.product_name ? "active" : ""}`} label="Product Name" type="text" name="product_name" values={values.product_name} onChange={handleChange} onBlur={handleBlur} placeholder="Name" />

                            <Input className={`form-control ${errors.product_price && touched.product_price ? "active" : ""}`} label="Product Price" type="number" name="product_price" values={values.product_price} onChange={handleChange} onBlur={handleBlur} placeholder="Price" />

                            <div className='mt-3'>
                                <label for="exampleFormControlTextarea1" className="form-label" >Rent/Sales</label>
                                <select className={`form-select ${errors.option && touched.option ? "active" : ""}`} aria-label="Default select example" name='option' value={values.option} onChange={handleChange} onBlur={handleBlur}>
                                    <option selected>Open this select</option>
                                    <option value="rent">Rent</option>
                                    <option value="sales">sales</option>

                                </select>
                            </div>
                            <Input className={`form-control ${errors.country && touched.country ? "active" : ""}`} label="Country" type="text" name="country" values={values.country} onChange={handleChange} onBlur={handleBlur} placeholder="Country" />
                            <div class="mt-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Address</label>
                                <textarea className={`form-control ${errors.address && touched.address ? "active" : ""}`} id="exampleFormControlTextarea1" rows="3" name='address' value={values.address} onChange={handleChange} onBlur={handleBlur}></textarea>
                            </div>

                            <div>
                                <div style={{border:"1px solid black",padding:"5px"}}>
                                    <label className="pb-2">
                                        Minimum Four images <span className="text-red-500">*</span>
                                    </label>
                                    <label htmlFor="upload">Upload</label>
                                    <input
                                        type="file"
                                        id="upload"
                                        multiple
                                        onChange={handleImageChange}
                                        style={{ display: 'none' }}
                                    />

                                    <div className="mb-3">
                                        <div className="pb-2">
                                            {showSortNotification && (
                                                <div
                                                    className="notification d-flex justify-content-end"
                                                    style={{ fontFamily: 'Roboto, sans-serif' }}
                                                >
                                                    You can sort the images by drag-and-drop!
                                                </div>
                                            )}
                                            <div className="w-100 row" >
                                                {images.map((image, index) => (
                                                    <div
                                                        key={index}
                                                        className="position-relative col-lg-2"
                                                        draggable
                                                        onDragStart={(e) => {
                                                            e.dataTransfer.setData('text/plain', index);
                                                        }}
                                                        onDragOver={(e) => e.preventDefault()}
                                                        onDrop={(e) => {
                                                            e.preventDefault();
                                                            const dragIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
                                                            handleImageOrderChange(dragIndex, index);
                                                        }}
                                                        onMouseOver={() => handleMouseOver(index)}
                                                        onMouseOut={handleMouseOut}
                                                    >
                                                        <button
                                                            type="button"
                                                            onClick={() => handleImageDelete(image)}
                                                            className="btn-close position-absolute"
                                                            style={{ top: '0px', right: '0px' }}
                                                        ></button>
                                                        <div className="w-full">
                                                            <img
                                                                src={URL.createObjectURL(image)}
                                                                alt="image"
                                                                className="image-preview ms-2 bg-white"
                                                                width="100%"
                                                                title={hoveredIndex === index ? `Image ${index + 1}` : null}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='mt-3 text-center'>

                            <button className=" button_register" type="submit">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default Addproperties
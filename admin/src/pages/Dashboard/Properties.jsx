import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { getProduct, resetSuccessState, ProductgetOne, deletProduct } from '../../feature/admin/PropertieSlice'
import DataTable from "react-data-table-component";
import { customStyles } from './Dashboard';
import { Icons } from '../../resuable/Icons';
import { Url } from '../../api/Url';
function Properties() {
    const [open, setOpen] = useState(false);
    const { id } = useParams()

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = () => {
        navigate("/addproperties")
    }
    const handleClickEye = (id) => {
        navigate(`/properties/${id}`)
        setOpen(true);
    }
    const handleClickDelete = (id) => {
        dispatch(deletProduct(id))
    }
    const { productsGet, success, getOneproduct } = useSelector((state) => state.product)
   console.log(getOneproduct);
    useEffect(() => {
        dispatch(getProduct())
        dispatch(ProductgetOne(id))
    }, [dispatch, id])
    const columns = [
        { name: "Id", selector: (row) => row.id, sortable: true },
        { name: "Properties Name", selector: (row) => row.properties_name, sortable: true },
        { name: "Properties Price", selector: (row) => row.properties_price, sortable: true },
        { name: "Area", selector: (row) => row.country, sortable: true },
        { name: "Option", selector: (row) => row.option, sortable: true },
        {
            name: "Action",
            selector: (row) => row.action,
            sortable: false,
        },
    ];
    let data = []
    for (let i = 0; i < productsGet?.length; i++) {
        data.push({
            id: i + 1,
            properties_name: productsGet[i]?.propertie_name,
            properties_price: productsGet[i]?.product_price,
            country: productsGet[i]?.country,
            option: productsGet[i]?.option,
            action: (
                <div className='d-flex gap-3'>
                    <button onClick={() => handleClickEye(productsGet[i]?._id)}>{Icons.eye.active}</button>
                    <button onClick={() => handleClickDelete(productsGet[i]?._id)}>{Icons.eye.delete}</button>
                </div>
            )
        })
    }
    const handleClose = () => {
        setOpen(false)
        navigate("/properties")
    }

    return (
        <div className='px-2 '>
            <div className='d-flex justify-content-between'>
                <h5>Properties</h5>
                <button className='button_register' onClick={handleClick}>Add</button>
            </div>
            <div className='mt-4'>
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    customStyles={customStyles}
                />
            </div>

            {open &&
                <div className="showuser-screen">
                    <div className="showuser-model">
                        <div className="d-flex flex-column showuser-whole">
                            <div className="d-flex justify-content-between mt-4">
                                <h3 className="ms-3">Properties Details</h3>
                                <button className="me-3" onClick={handleClose}>{Icons.close.default}</button>
                            </div>
                            <div className="showuser-input-div mt-5">
                                <form className="w-100">
                                    <div>
                                        <label htmlFor="name" className="fw-bold">Name</label>
                                        <input
                                            type="text"
                                            className="showuser-input p-2 mb-2 w-100 fw-bold"
                                            disabled
                                            value={getOneproduct?.propertie_name || ''}
                                        />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <label htmlFor="email" className="fw-bold">Price</label>
                                        <input
                                            type="text"
                                            className="showuser-input p-2 mb-2 w-100 fw-bold"
                                            disabled
                                            value={getOneproduct?.product_price || ''}
                                        />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <label htmlFor="mobile" className="fw-bold">Area</label>
                                        <input
                                            type="text"
                                            className="showuser-input p-2 mb-2 w-100 fw-bold"
                                            disabled
                                            value={getOneproduct?.country || ''}
                                        />
                                    </div>
                                    <label htmlFor="mobile" className="fw-bold">Rent/Sales</label>
                                    <input
                                        type="text"
                                        className="showuser-input p-2 mb-2 w-100 fw-bold"
                                        disabled
                                        value={getOneproduct?.option || ''}
                                    />

                                    <div className='mb-3'>
                                        <label for="exampleFormControlTextarea1" class="form-label">Address</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={getOneproduct?.address}></textarea>
                                    </div>

                                </form>
                                <div className='row'>

                                    {
                                        getOneproduct?.images?.map((item) => (
                                            <div className='col-lg-6'>
                                                <img src={`${Url.BASE_URL}${item}`} width="100%" />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }

        </div >
    )
}

export default Properties
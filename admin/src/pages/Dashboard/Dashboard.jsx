import React, { useState } from 'react'
import {
    AreaChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    BarChart,
    Legend,
    Bar

} from "recharts";
import DataTable from "react-data-table-component";
import { Icons } from '../../resuable/Icons';
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminGetcreate } from '../../feature/Register/Registerslice';
import { getProduct } from '../../feature/admin/PropertieSlice'

const columns = [
    { name: "Id", selector: (row) => row.id, sortable: true },
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },
    { name: "Mobile", selector: (row) => row.mobile, sortable: true },
    { name: "Active", selector: (row) => row.active, sortable: true },

];
const data = []
for (let i = 0; i < 10; i++) {
    data.push({
        id: i + 1,
        name: "yogesh",
        email: "yogesh@gmail.com",
        mobile: "1234567890",

    })
}


export const customStyles = {
    headCells: {
        style: {
            fontWeight: "bold",
            fontSize: "15px",
            padding: "14px",
            color: "white",
            backgroundColor: "#ad2524",
        },
    },
    cells: {
        style: {
            fontSize: "14px",
            fontWeight: 600,
            padding: "8px",
        },
    },
};
function Dashboard() {
    const [rentProducts, setRentProducts] = useState([]);
    const [sellProducts, setSellProducts] = useState([]);
    const dispatch = useDispatch()
    const { productsGet } = useSelector((state) => state.product)

    const { allUser } = useSelector(state => state.admin)
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/user")
    }

    useEffect(() => {
        dispatch(AdminGetcreate())
        dispatch(getProduct())
    }, [dispatch])
    useEffect(() => {

        setRentProducts(productsGet?.filter((item) => item?.option === "rent"));
        setSellProducts(productsGet?.filter((item) => item?.option === "sales"));

    }, [productsGet]);

    const handleClick1 = () => {
        navigate("/properties")

    }

    const data1 = [
        {
            "name": "January",
            "sales": 4000,
            "rent": 2400
        },
        {
            "name": "Februray",
            "sales": 3000,
            "rent": 1398
        },
        {
            "name": "March",
            "sales": 2000,
            "rent": 9800
        },
        {
            "name": "Apirl",
            "sales": 2780,
            "rent": 3908
        },
        {
            "name": "May",
            "sales": 1890,
            "rent": 4800
        },
        {
            "name": "June",
            "sales": 2390,
            "rent": 3800
        },
        {
            "name": "July",
            "sales": 3490,
            "rent": 4300
        },
        {
            "name": "August",
            "sales": 3490,
            "rent": 4300
        },
        {
            "name": "September",
            "sales": 3490,
            "rent": 4300
        },
        {
            "name": "October",
            "sales": 3490,
            "rent": 4300
        },
        {
            "name": "November",
            "sales": 3490,
            "rent": 4300
        },
        {
            "name": "December",
            "sales": 3490,
            "rent": 4300
        }
    ]
    return (
        <div className='ps-2'>
            <h5>Dashboard</h5>
            <div class="row g-6 mb-6 mt-4">
                <div class="col-xl-3 col-sm-12 col-12">
                    <div class="card shadow border-0">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">Total Users</span>
                                    <span class="h3 font-bold mb-0">{allUser?.length || 0}</span>
                                </div>
                                <div class="col-auto">

                                    <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                        <i class="bi bi-people"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-2 text-center'>
                                <button className='button_deign' onClick={handleClick}>View <span className='pt-1'>{Icons.arrow.default}</span></button>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card shadow border-0">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">Total Unit Available Sales</span>
                                    <span class="h3 font-bold mb-0">{sellProducts?.length ||0}</span>
                                </div>
                                <div class="col-auto">
                                    <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                        <i class="bi bi-credit-card"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-2 text-center'>
                                <button className='button_deign' onClick={handleClick1}>View <span className='pt-1'>{Icons.arrow.default}</span></button>

                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card shadow border-0">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">Total Unit Available Rent</span>
                                    <span class="h3 font-bold mb-0">{rentProducts?.length || 0}</span>
                                </div>
                                <div class="col-auto">
                                    <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                                        <i class="bi bi-clock-history"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-2 mb-0 text-sm">
                                <div className='mt-2 text-center'>
                                    <button className='button_deign' onClick={handleClick1}>View <span className='pt-1'>{Icons.arrow.default}</span></button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 col-12">
                    <div class="card shadow border-0">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">Pending Notification</span>
                                    <span class="h3 font-bold mb-0">0</span>
                                </div>
                                <div class="col-auto">
                                    <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                        <i class="bi bi-minecart-loaded"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-2 mb-0 text-sm">
                                <div className='mt-2 text-center'>
                                    <button className='button_deign' onClick={handleClick}>View <span className='pt-1'>{Icons.arrow.default}</span></button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h5>Rend/Sales List</h5>
                <div className='row'>
                    <div className='col-lg-6'>
                        <BarChart width={800} height={400} data={data1}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="rent" fill="#8884d8" />
                            <Bar dataKey="sales" fill="#82ca9d" />
                        </BarChart>
                    </div>
                </div>
            </div>

            <div>
                <h5>Maintaenance List</h5>
                <div className='row'>
                    <DataTable
                        columns={columns}
                        data={data}
                        pagination
                        customStyles={customStyles}
                    />
                </div>
            </div>

        </div>
    )
}

export default Dashboard
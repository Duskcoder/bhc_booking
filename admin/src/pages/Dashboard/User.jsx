import React from 'react'
import DataTable from "react-data-table-component";
import { customStyles } from "../Dashboard/Dashboard"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminGetcreate } from '../../feature/Register/Registerslice';

function User() {

  const { allUser } = useSelector(state => state.admin)
  const dispatch = useDispatch()


  const columns = [
    { name: "Id", selector: (row) => row.id, sortable: true },
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },
    { name: "Mobile", selector: (row) => row.mobile, sortable: true },
    { name: "Role", selector: (row) => row.role, sortable: true },

  ];

  useEffect(() => {
    dispatch(AdminGetcreate())


  }, [dispatch])



  const data = []
  for (let i = 0; i < allUser?.length; i++) {
    data.push({
      id: i + 1,
      name: allUser[i]?.name,
      email: allUser[i]?.email,
      mobile: allUser[i]?.mobile,
      role: allUser[i]?.role

    })
  }
  return (
    <div className='ps-2'>
      <h5>Users</h5>
      <div className='row'>
        <DataTable
          columns={columns}
          data={data}
          pagination
          customStyles={customStyles}
        />
      </div>

    </div>
  )
}

export default User
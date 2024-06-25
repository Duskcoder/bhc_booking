import React from 'react'
import DataTable from "react-data-table-component";
import {customStyles} from "../Dashboard/Dashboard"
function User() {
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
import React from 'react'
import DataTable from "react-data-table-component";
import { customStyles } from "../Dashboard/Dashboard"
function Bookings() {
  const columns = [
    { name: "Booking_id", selector: (row) => row.id, sortable: true },
    { name: "Rent/Sales", selector: (row) => row.rent, sortable: true },
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },

    { name: "Active", selector: (row) => row.active, sortable: true },
    { name: "Action", selector: (row) => row.role, sortable: true },

  ];

  let details = [
    {
      id: "667b1143547bc2fa95fb1168",
      rent: "rent",
      name: "john",
      email: "john@gmail.com",

      status: "pending"
    },
  ]
  let data = []
  for (let i = 0; i < details.length; i++) {
    data.push({
      id: details[i].id,
      rent: details[i].rent,
      name: details[i].name,
      email: details[i].email,
      active: (
        <div
          style={{
            background:
              detail.status === "pending"
                ? "orange"
                : detail.status === "rejected"
                ? "red"
                : detail.status === "success"
                ? "green"
                : "gray",
            height: "20px",
            borderRadius: "10px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            color: "white",
            textTransform: "capitalize",
          }}
        >
          {detail.status}
        </div>
      ),
    })
  }

  return (
    <div className='ps-2'>
      <h5>Bookings</h5>
      <DataTable
        columns={columns}
        data={data}
        pagination
        customStyles={customStyles}
      />
    </div>
  )
}

export default Bookings
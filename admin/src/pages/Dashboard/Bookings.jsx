import React, { useState } from 'react';
import DataTable from "react-data-table-component";
import { customStyles } from "../Dashboard/Dashboard";
import { Icons } from '../../resuable/Icons';
import logo from "../../assets/tylos_apartment.webp"
import logo1 from "../../assets/eetached_house.webp"
function Bookings() {
  const [open, setOpen] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState({});

  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "Booking ID", selector: (row) => row.Booking_id, sortable: true },
    { name: "Rent/Sales", selector: (row) => row.rent, sortable: true },
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },
    { name: "Status", selector: (row) => row.status, sortable: true },
    { name: "Action", selector: (row) => row.action, sortable: true },
  ];

  const [details, setDetails]  = useState([
    {
      id: "1",
      Booking_id: "BK001",
      rent: "sale",
      name: "John",
      email: "john@gmail.com",
      status: "hold",
      properties_name: "Detached House",
      properties_price: "P.3,00,000",
      address: "Glen Valley, Gaborone",
      image: logo1,
      created_At:"26-06-2024T9:45A.M"
     
    },
    {
      id: "2",
      Booking_id: "BK002",
      rent: "rent",
      name: "Jackson",
      email: "jackson@gmail.com",
      status: "hold",
      properties_name: "Tylos Apartment",
      properties_price: "3500",
      address: "Maruapla, Gaborone",
      image: logo,
      created_At:"26-06-2024T10:45A.M"
    
    },
  ]);

  let data = details.map(detail => ({
    id: detail.id,
    Booking_id: detail.Booking_id,
    rent: detail.rent,
    name: detail.name,
    email: detail.email,
    status: (
      <div
        style={{
          background:
            detail.status === "hold" ? "orange" :
            detail.status === "rejected" ? "red" :
            detail.status === "approved" ? "green" : "gray",
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
    action: (
      <div className="mx-auto flex" onClick={() => handleEye(detail.id)}>
        <button className="mx-auto">
          {Icons.eye.active}
        </button>
      </div>
    )
  }));

  const handleEye = (index) => {
    const data = details.find((item) => item.id === index);
    setSelectedDetail(data);
    setOpen(true);
  };

  const handleUpdate = (currentStatus, newStatus) => {
    setDetails(prevDetails => {
      const updatedDetails = prevDetails.map(detail => {
        if (detail.id === selectedDetail.id) {
          return { ...detail, status: newStatus };
        }
        return detail;
      });
      setSelectedDetail({ ...selectedDetail, status: newStatus });
      return updatedDetails;
    });
  };

  return (
    <div className='ps-2'>
      <h5>Bookings</h5>
      <DataTable
        columns={columns}
        data={data}
        pagination
        customStyles={customStyles}
      />
      {open && (
        <div className="showuser-screen">
          <div className="showuser-model">
            <div className="d-flex flex-column showuser-whole">
              <div className="d-flex justify-content-between mt-4">
                <h3 className="ms-3">Bookings</h3>
                <button className="me-3" onClick={() => setOpen(false)}>
                  {Icons.close.default}
                </button>
              </div>
              <div className="showuser-input-div mt-5">
           
                <div>
                  <label htmlFor="Booking_id" className="fw-bold">Booking ID</label>
                  <input
                    type="text"
                    className="showuser-input p-2 mb-2 w-100 fw-bold"
                    disabled
                    value={selectedDetail.Booking_id || ""}
                  />
                </div>
                <div>
                  <label htmlFor="Booking_id" className="fw-bold">Property Name</label>
                  <input
                    type="text"
                    className="showuser-input p-2 mb-2 w-100 fw-bold"
                    disabled
                    value={selectedDetail.properties_name || ""}
                  />
                </div>
                <div>
                  <label htmlFor="Booking_id" className="fw-bold">Property Price</label>
                  <input
                    type="text"
                    className="showuser-input p-2 mb-2 w-100 fw-bold"
                    disabled
                    value={selectedDetail.properties_price || ""}
                  />
                </div>
                <div>
                  <label htmlFor="Booking_id" className="fw-bold">Rent/Sales</label>
                  <input
                    type="text"
                    className="showuser-input p-2 mb-2 w-100 fw-bold"
                    disabled
                    value={selectedDetail.rent || ""}
                  />
                </div>
                <div>
                  <label htmlFor="Booking_id" className="fw-bold">Created At</label>
                  <input
                    type="text"
                    className="showuser-input p-2 mb-2 w-100 fw-bold"
                    disabled
                    value={selectedDetail.created_At || ""}
                  />
                </div>
                <div className="d-flex flex-column">
                  <label htmlFor="name" className="fw-bold">Name</label>
                  <input
                    type="text"
                    className="showuser-input p-2 mb-2 w-100 fw-bold"
                    readOnly
                    value={selectedDetail.name || ""}
                  />
                </div>
                <div className="d-flex flex-column">
                  <label htmlFor="email" className="fw-bold">Email</label>
                  <input
                    type="text"
                    className="showuser-input p-2 mb-2 w-100 fw-bold"
                    disabled
                    value={selectedDetail.email || ""}
                  />
                </div>
                <label htmlFor="status" className="fw-bold">Status</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => handleUpdate(selectedDetail.status, e.target.value)}
                >
                  <option value="hold">Hold</option>
                  <option value="rejected">Rejected</option>
                  <option value="approved">Approved</option>
                </select>
                <div className='mt-2'>
                  <img src={selectedDetail.image} width="40%"/>
                </div>
                
              
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookings;

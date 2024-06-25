import React, { useState } from "react";
import { customStyles } from "./Dashboard";
import DataTable from "react-data-table-component";
import { Icons } from "../../resuable/Icons";
import "../../style/Maintenance.css";

function Maintenance() {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState({});
  const details = [
    {
      id: 1,
      name: "yogesh",
      email: "yogesh@gmail.com",
      mobile: "1111111111",
      active: "pending",
    },
    {
      id: 2,
      name: "gokul",
      email: "gokul@gmail.com",
      mobile: "2222222222",
      active: "rejected",
    },
    {
      id: 3,
      name: "maha",
      email: "maha@gmail.com",
      mobile: "2222222222",
      active: "success",
    },
  ];

  const handleClick = (id) => {
    const userDetails = details.find((user) => user.id === id);
    setDetail(userDetails);
    setOpen(true);
  };

  const columns = [
    { name: "Id", selector: (row) => row.id, sortable: true },
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },
    { name: "Mobile", selector: (row) => row.mobile, sortable: true },
    { name: "Active", selector: (row) => row.active, sortable: true },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: false,
    },
  ];

  const data = details.map((detail) => ({
    id: detail.id,
    name: detail.name,
    email: detail.email,
    mobile: detail.mobile,
    active: (
      <div
        style={{
          background:
            detail.active === "pending"
              ? "orange"
              : detail.active === "rejected"
              ? "red"
              : detail.active === "success"
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
        {detail.active}
      </div>
    ),
    action: (
      <div>
        <button onClick={() => handleClick(detail.id)}>
          {Icons.eye.active}
        </button>
      </div>
    ),
  }));

  return (
    <div className="ps-2">
      <h5 className="fs-3">Maintenance</h5>
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
                <h3 className="ms-3">Maintenance</h3>
                <button className="me-3" onClick={() => setOpen(false)}>
                  {Icons.close.default}
                </button>
              </div>
              <div className="showuser-input-div mt-5">
                <form className="w-100">
                  <div>
                    <label htmlFor="name" className="fw-bold">
                      Name
                    </label>
                    <input
                      type="text"
                      className="showuser-input p-2 mb-2 w-100 fw-bold"
                      disabled
                      value={detail.name || ""}
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <label htmlFor="email" className="fw-bold">
                      Email
                    </label>
                    <input
                      type="text"
                      className="showuser-input p-2 mb-2 w-100 fw-bold"
                    //   disabled
                      value={detail.email || ""}
                      readOnly
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <label htmlFor="mobile" className="fw-bold">
                      Mobile
                    </label>
                    <input
                      type="text"
                      className="showuser-input p-2 mb-2 w-100 fw-bold"
                      disabled
                      value={detail.mobile || ""}
                    />
                  </div>
                  <label htmlFor="mobile" className="fw-bold">
                    Status
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="pending">Pending</option>
                    <option value="rejected">Rejected</option>
                    <option value="success">Success</option>
                  </select>

                  <div className="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Message
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button className="button_register">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Maintenance;

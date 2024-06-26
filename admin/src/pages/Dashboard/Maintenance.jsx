import React, { useEffect, useState } from "react";
import { customStyles } from "./Dashboard";
import DataTable from "react-data-table-component";
import { Icons } from "../../resuable/Icons";
import "../../style/Maintenance.css";
import { useDispatch, useSelector } from "react-redux";
import {
  maintaenanceGetFromServer,
  mainTainencePatchServer,
} from "../../feature/maintainence/mainTainenceSlice";
import { BsMailbox2Flag } from "react-icons/bs";

function Maintenance() {
  const [open, setOpen] = useState(false);
  const { mainTainList } = useSelector((state) => state.main);
  const [detail, setDetail] = useState();

  const dispatch = useDispatch();

  const handleClick = (id) => {
    setDetail(id);
    setOpen(true);
  };

  useEffect(() => {
    dispatch(maintaenanceGetFromServer());
  }, [dispatch]);

  const handleUpdate = (id, data) => {
    dispatch(mainTainencePatchServer({ id, data }));
  };

  const handleSendEmail = () => {
    window.location.href = `mailto:${detail?.userId?.email}`;
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

  const data = mainTainList.map((detail, index) => ({
    id: detail?._id,
    name: (
      <span style={{ fontWeight: "bold", fontSize: "16px" }} key={index}>
        {detail?.userId?.name}
      </span>
    ),
    email: (
      <span style={{ fontWeight: "bold", fontSize: "16px" }}>
        {detail?.userId?.email}
      </span>
    ),
    mobile: (
      <span style={{ fontWeight: "bold", fontSize: "16px" }}>
        {detail?.userId?.mobile}
      </span>
    ),
    active: (
      <div
        style={{
          background:
            detail.status === "hold"
              ? "orange"
              : detail.status === "rejected"
                ? "red"
                : detail.status === "approved"
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
    action: (
      <div className="mx-auto flex">
        <button className="mx-auto" onClick={() => handleClick(detail)}>
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
                <div>
                  <label htmlFor="name" className="fw-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="showuser-input p-2 mb-2 w-100 fw-bold"
                    disabled
                    value={detail?.userId?.name || ""}
                  />
                </div>
                <div className="d-flex flex-column">
                  <label htmlFor="email" className="fw-bold">
                    Email
                  </label>
                  <input
                    type="text"
                    className="showuser-input p-2 mb-2 w-100 fw-bold"
                    value={detail?.userId?.email || ""}
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
                    value={detail?.userId?.mobile || ""}
                  />
                </div>
                <label htmlFor="mobile" className="fw-bold">
                  Status
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onClick={(e) => handleUpdate(detail?._id, e.target.value)}
                >
                  <option value="hold">Hold</option>
                  <option value="rejected">Rejected</option>
                  <option value="approved">Approved</option>
                </select>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    readOnly
                    value={detail?.message || ""}
                  ></textarea>
                </div>
                <div className="text-center">
                  <button className="button_register" onClick={handleSendEmail}>
                    <BsMailbox2Flag size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Maintenance;

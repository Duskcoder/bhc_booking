import React, { useEffect } from "react";
import { ImProfile } from "react-icons/im";
import { CiLogout } from "react-icons/ci";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TbPasswordFingerprint } from "react-icons/tb";

function Sidlebar({ Active, setActive }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("admin")
    window.location.reload()
    navigate("/")
  }

  return (
 

    <div className="shadow-md rounded p-3 d-flex justify-content-between">
      <div
        className="d-flex  align-items-center "
        onClick={() => setActive(1)}
      >
        <ImProfile size={25} className={Active === 1 ? "text-danger" : ""} />
        <span
          className={`${Active === 1 ? "text-danger" : ""
            } d-md-block fs-6 fw-semibold d-lg-block d-none ms-2`}
        >
          Profile
        </span>
      </div>
      <div
        className="d-flex align-items-center "
        onClick={() => setActive(2)}
      >
        <TbPasswordFingerprint size={20} className={Active === 2 ? "text-danger" : ""} />
        <span
          className={` ${Active === 2 ? "text-danger" : ""
            }  d-sm-none fs-6 fw-semibold d-lg-block d-none ms-2`}
        >
          Change Password
        </span>
      </div>

        <div
        className="d-flex align-items-center "
        onClick={handleLogout}
      >
        <CiLogout size={20} className={Active === 3 ? "text-danger" : ""} />
        <span
          className={`${Active === 3 ? "text-danger" : ""
            } d-md-block fs-6 fw-semibold d-none ms-2`}
        >
          Logout
        </span>
      </div>
    </div>

  );
}

export default Sidlebar;

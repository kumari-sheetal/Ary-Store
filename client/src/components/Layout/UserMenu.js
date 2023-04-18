import React from "react";
import { NavLink } from "react-router-dom";
import { FcViewDetails } from "react-icons/fc";
import { MdProductionQuantityLimits } from "react-icons/md";
const UserMenu = () => {
  return (
    <>
      <a
        className="btn btn-dark mt-5"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        Dashboard
      </a>
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Admin Panel
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            overflow
          />
        </div>
        <div className="offcanvas-body">
          <div
            className="list-group"
            style={{ gap: "50px" }}
            data-bs-dismiss="offcanvas"
          >
            <NavLink
              to="/dashboard/user/profile"
              className="list-group-item list-group-item-action"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "15px",
                alignItems: "center",
              }}
            >
              <FcViewDetails size="3em" />
              <span>User Profile</span>
            </NavLink>

            <NavLink
              to="/dashboard/user/orders"
              className="list-group-item list-group-item-action"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "15px",
                alignItems: "center",
              }}
            >
              <MdProductionQuantityLimits size="3em" />
              <span>Orders</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMenu;

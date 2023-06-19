import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FcViewDetails } from "react-icons/fc";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbUsers } from "react-icons/tb";
import { HiOutlineClipboardDocumentList } from "react-icons/hi";
import { AiOutlineInsertRowLeft } from "react-icons/ai";
import Layout from "./Layout";
import "../Layout/Admin.css";
const AdminMenu = () => {
  return (
    <div>
      <div>
        <a
          className="more btn  mt-5"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
          style={{ marginLeft: "2cm" }}

          // -------
        >
          &#9776; Open Sidebar
        </a>

        <div
          className="panel offcanvas offcanvas-start"
          tabIndex={-1}
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <h5 className=" filter offcanvas-title" id="offcanvasExampleLabel">
              Admin Panel
            </h5>
            <button
              type="button"
              className="more btn-close"
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
                to="/dashboard/admin/create-category"
                className="more btn"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "15px",
                  alignItems: "center",
                }}
              >
                <FcViewDetails size="3em" />
                <span>Create Category</span>
              </NavLink>

              <NavLink
                to="/dashboard/admin/create-product"
                className="more btn"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "15px",
                  alignItems: "center",
                }}
              >
                <MdProductionQuantityLimits size="3em" />
                <span>Create Products</span>
              </NavLink>
              <NavLink
                to="/dashboard/admin/products"
                className="more btn"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "15px",
                  alignItems: "center",
                }}
              >
                <AiOutlineInsertRowLeft size="3em" />
                <span> Products</span>
              </NavLink>

              {/* <NavLink
                to="/dashboard/admin/users"
                className="list-group-item list-group-item-action"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "15px",
                  alignItems: "center",
                }}
              >
                <TbUsers size="3em" />
                <span>Users</span>
              </NavLink> */}

              <NavLink
                to="/dashboard/admin/orders"
                className="more btn"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "15px",
                  alignItems: "center",
                }}
              >
                <TbUsers size="3em" />
                <span>All Orders</span>
              </NavLink>
              <NavLink
                to="/dashboard/admin/chat"
                className="more btn"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "15px",
                  alignItems: "center",
                }}
              >
                <TbUsers size="3em" />
                <span>Chats</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;

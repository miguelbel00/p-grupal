import React from "react";
import { Link } from "react-router-dom";
import "../adminStyles/sidebar.css"
import { useDispatch } from "react-redux";
import '../adminStyles/sidebar.css'
import { adminList } from "../redux/actions/actionsAdmin";


const Sidebar = () => {

  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(adminList(e.target.value))
  }


  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <span className="logo">Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <button className="btn_admin" name="User" value='user' onClick={handleClick}> User</button>
        <button className="btn_admin" name="Product" value='product' onClick={handleClick}>Product</button>
        <button className="btn_admin" name="Review" value='review' onClick={handleClick}>Review</button>
        <button className="btn_admin" name="Category" value='category' onClick={handleClick}>Category</button>
        <button className="btn_admin" name="Transaction" value='transaction' onClick={handleClick}>Transaction</button>
      </div>
      <hr />
    </div>
  );
};

export default Sidebar;


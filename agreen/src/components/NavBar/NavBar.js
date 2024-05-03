import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { DefaultButton } from "../index.js";

function NavBar() {
  return (
    <div className="navBarWrapper">
      <div className="navBarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navBarTitle">Agreen</div>
        </Link>
        <Link to="/Reason" style={{ textDecoration: "none" }}>
          <div className="navBarLink">Reason</div>
        </Link>  
        <Link to="/Team" style={{ textDecoration: "none" }}>
          <div className="navBarLink">Team</div>
          </Link>
        <Link to="/Design" style={{ textDecoration: "none" }}>
         <div className="navBarLink">Design</div>
        </Link>
        <Link to="/Product" style={{ textDecoration: "none" }}>
          <div className="navBarLink">Product</div>
        </Link>
        <Link to="/Automation" style={{ textDecoration: "none" }}>
          <div className="navBarLink">Automation</div>
        </Link>
        <Link to="/Security" style={{ textDecoration: "none" }}>
          <div className="navBarLink">Security</div>
        </Link>


      </div>
      <div className="navBarRight">
        <Link to="/BuyNow" style={{ textDecoration: "none" }}>
          <DefaultButton text="Buy Now" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;

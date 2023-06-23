import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="links">
          <Link to="/">Shop</Link>
          <Link to="/cart">
            <AiOutlineShoppingCart size={24} color="white" />
          </Link>
        </div>
      </div>
    </>
  );
};

import React from "react";
import "../Navbars/Nav.css";
import { Link, useNavigate } from "react-router-dom";
export default function Nav() {
  useNavigate();
  return (
    <div className="All-nav-items">
      <nav>
        <ul className="unorderlist">
          <div className="image-tag">
            <img
              src="https://www.uengage.in/images/addo/logos/lapinoz-logo.png"
              alt="Loading"
              className="img-fori"
            ></img>
          </div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="order">Order Online</a>
          </li>
          <li>
            <Link to="/store">Store Locator</Link>
          </li>
          <li>
            <Link to="franchise">Franchise Enquiry</Link>
          </li>
          <li>
            <a href="contact">Contact Us</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

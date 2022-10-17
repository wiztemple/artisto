import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.style.css";

const menus = [
    {
        title: 'Events',
        path: '/'
    },
    {
        title: 'Museum',
        path: '/'
    },
    {
        title: 'Arts',
        path: '/'
    },
    {
        title: 'Galleries',
        path: '/'
    },
]
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <svg
          width="30"
          height="33"
          viewBox="0 0 30 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.29046 21.9508L3.85315 24.0087C2.04667 26.5953 3.89726 30.145 7.05219 30.145H24.0923C27.081 30.145 28.9602 26.9225 27.4883 24.3213L20.3651 11.7332C18.951 9.23414 15.4132 9.06687 13.7696 11.4213L11.3677 14.8621M22.9796 16.1932L25.0668 7.62042C25.762 4.76497 23.1705 2.19497 20.3209 2.91393L4.95015 6.79205C2.13195 7.5031 1.0525 10.9352 2.95632 13.1314L5.61052 16.1932"
            stroke="white"
            strokeWidth="3.90203"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Artisto</span>
      </Link>
      <div className="nav-links">
        {
            menus.map((menu, index) => (
                <Link to={menu.path} key={index} className="nav-link">{menu.title}</Link>
            ))
        }
        <Link to="/" className="nav-link_btn btn">Login</Link>
        <Link to="/" className="nav-link_btn btn-inverse">Explore arts</Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";

import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      {/* <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul> */}

      {/* //Use NavLink */}
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? styles.active : "";
            }}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isPending, isActive }) => {
              return isPending ? styles.pending : isActive ? styles.active : "";
            }}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isPending, isActive }) => {
              return isPending ? styles.pending : isActive ? styles.active : "";
            }}
          >
            CONTACT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isPending, isActive }) => {
              return isPending ? styles.pending : isActive ? styles.active : "";
            }}
          >
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

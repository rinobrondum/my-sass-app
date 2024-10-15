import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";

export default function Nav() {
  return (
    // nav 100%
    <header class="nav">
      <div class="nav-inner-wrap">
        <div class="site-title">
          <img src="https://place-hold.it/140x50.jpg&fontsize=16" alt="logo" />
        </div>
        <nav class="main-nav">
          <ul class="menu">
            <li>
              <Link to="/">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/">
                <HiUsers /> Users
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

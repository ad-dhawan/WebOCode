import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { Menu } from '@material-ui/icons';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav class="navbar">
        <div class="nav-container">
          <Link exact to="/" class="nav-logo">
            RDA
          </Link>

          <ul class={click ? "nav-menu active" : "nav-menu"}>
          
            <li class="nav-item">
              <Link
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
              >
                Home
              </Link>
            </li>

            <li class="nav-item">
              <Link
                activeClass="active"
                to="stats"
                spy={true}
                smooth={true}
              >
                Stats
              </Link>
            </li>
            <li class="nav-item">
              <Link
                activeClass="active"
                to="news"
                spy={true}
                smooth={true}
              >
                News
              </Link>
            </li>
            <li class="nav-item">
              <Link
                activeClass="active"
                to="symptoms"
                spy={true}
                smooth={true}
              >
                Symptoms
              </Link>
            </li>
          </ul>
          <div class="nav-icon" onClick={handleClick}>
            <Menu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

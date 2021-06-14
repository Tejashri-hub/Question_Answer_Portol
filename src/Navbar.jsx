import React from "react";
import Image from "./Image";
import './Nav.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { NavLink,withRouter} from "react-router-dom";


function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navone">{<Image />}</div>
        <div className="navtwo">
          <input type="text" placeholder="Search" />
        </div>
        <NavLink to="/"><FontAwesomeIcon className="icon" icon={faHome} /></NavLink>
        <button>Login</button>
      </div>
    </>
  );
}

export default withRouter(Navbar);

import React from "react";
import "components/NavBar/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="color-navbar">
      <div className="contenedor navbar">
        <NavLink to="/" className="nombre-pagina">
          Yet Another Pokedux
        </NavLink>
        <FontAwesomeIcon icon={faHamburger} className="burger" />
      </div>
    </div>
  );
};

export default NavBar;

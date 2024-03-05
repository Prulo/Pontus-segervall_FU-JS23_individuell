import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../abstracts/Nav.scss";
import close from "../logos/close.png"

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleButtonClick = () => {
    setOpen(!open);
  };

  const handleCloseMenu = () => {
    setOpen(false);
  };

  const hamburgerTop = open ? "2rem" : "-6rem";

  return (
    <div className={`menu ${open ? "open" : ""}`}>
      <div
        className="hamburger"
        style={{ top: hamburgerTop }}
        onClick={handleButtonClick}
      >
        {open ? (
          
          <img className="close-logo" src={close} alt="dog" />
    
        ) : (
          <>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </>
        )}
      </div>
      {open && (
        <div className="linkwrapper">
          <Link
            to="/menu"
            className="links"
            onClick={
              location.pathname === "/menu" ? handleCloseMenu : undefined
            }
          >
            <h1>Menu</h1>
          </Link>
          <p id="underline">_________</p>
          <Link
            to="/About"
            className="links"
            onClick={
              location.pathname === "/About" ? handleCloseMenu : undefined
            }
          >
            <h1>Vårt kaffe</h1>
          </Link>
          <p id="underline">_________</p>
          <Link
            to="/menu"
            className="links"
            onClick={
              location.pathname === "/menu" ? handleCloseMenu : undefined
            }
          >
            <h1>Min profil</h1>
          </Link>
          <p id="underline">_________</p>
          <Link
            to="/menu"
            className="links"
            onClick={
              location.pathname === "/menu" ? handleCloseMenu : undefined
            }
          >
            <h1>Orderstatus</h1>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Nav;


import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import Reetesh from "../../assets/reetesh.jpg";
import "./Navbar.scss";
import MobileMenu from "./MobileMenu";
import Theme from "../Theme";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav>
      <div className="logo">
        <NavLink to="/">
          <img src={Reetesh} alt="Reetesh Profile" />
        </NavLink>
      </div>

      <ul className="navLinks">
        {["about", "contact", "work", "skills"].map((navlink, idx) => (
          <motion.li
            whileHover={{ textDecoration: "underline", y: -2 }}
            key={idx}
          >
            <NavLink
              to={`${navlink}`}
              className={({ isActive }) =>
                isActive ? "activeLink" : "inactiveLink"
              }
            >
              {navlink}
            </NavLink>
          </motion.li>
        ))}
      </ul>

      <div className="mobileMenuBar">
        <div className="mobileMenu">
          {!showMobileMenu ? (
            <HiMenuAlt4
              className="menuIcon"
              onClick={(e) => {
                setShowMobileMenu(true);
                e.stopPropagation();
              }}
            />
          ) : (
            <motion.div
              className="cancel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              <HiX
                className="cancelIcon"
                onClick={() => setShowMobileMenu(false)}
              />
            </motion.div>
          )}
        </div>

        {showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} />}
      </div>
      <Theme />
    </nav>
  );
};

export default Navbar;

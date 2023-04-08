import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import Reetesh from "../../assets/reetesh.jpg";
import "./Navbar.scss";

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
            <NavLink to={`${navlink}`}>{navlink}</NavLink>
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

        {showMobileMenu && (
          <motion.div
            className="mobileMenuLinks"
            initial={{ opacity: 0, x: 600 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -600 }}
            transition={{ duration: 0.6 }}
            onClick={(e) => e.stopPropagation()}
          >
            {["about", "contact", "work", "skills"].map((navlink, idx) => (
              <motion.li
                whileHover={{ textDecoration: "underline", x: -2 }}
                key={idx}
              >
                <NavLink
                  to={`${navlink}`}
                  onClick={() => setShowMobileMenu(false)}
                >
                  {navlink}
                </NavLink>
              </motion.li>
            ))}

            <div className="bubble"></div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

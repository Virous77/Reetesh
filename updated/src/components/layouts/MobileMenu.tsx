import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

type MobileMenuProps = {
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ setShowMobileMenu }) => {
  return (
    <motion.div
      className="mobileMenuLinks"
      initial={{ opacity: 0, x: 600 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -600 }}
      transition={{ duration: 0.6 }}
      onClick={(e) => e.stopPropagation()}
    >
      {["about", "contact", "work", "skills", "blogs"].map((navlink, idx) => (
        <motion.li
          whileHover={{ textDecoration: "underline", x: -2 }}
          key={idx}
        >
          <NavLink
            to={`${navlink}`}
            onClick={() => setShowMobileMenu(false)}
            className={({ isActive }) =>
              isActive ? "activeLink" : "inactiveLink"
            }
          >
            {navlink}
          </NavLink>
        </motion.li>
      ))}

      <div className="bubble"></div>
    </motion.div>
  );
};

export default MobileMenu;

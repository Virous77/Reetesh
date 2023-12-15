import React, { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Theme = () => {
  const localStheme = localStorage.getItem("theme-R");
  const activeTheme: string = localStheme ? JSON.parse(localStheme) : "";
  const [theme, setTheme] = useState(activeTheme === "dark" ? "Light" : "Dark");
  const body = document.querySelector("body");

  const handleToggle = () => {
    if (body?.classList.contains("darkTheme")) {
      body.classList.remove("darkTheme");
      setTheme("Dark");
      localStorage.setItem("theme-R", JSON.stringify("light"));
    } else {
      body?.classList.add("darkTheme");
      setTheme("Light");
      localStorage.setItem("theme-R", JSON.stringify("dark"));
    }
  };

  useEffect(() => {
    if (activeTheme === "dark") {
      body?.classList.add("darkTheme");
    }
  }, [theme]);
  return (
    <div className="theme">
      {theme === "Light" ? (
        <MdDarkMode
          onClick={handleToggle}
          color={`var(--main-font-color)`}
          size={20}
          cursor="pointer"
        />
      ) : (
        <MdLightMode
          onClick={handleToggle}
          color={`var(--main-font-color)`}
          size={20}
          cursor="pointer"
        />
      )}
    </div>
  );
};

export default Theme;

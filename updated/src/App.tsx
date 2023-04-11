import React, { useState, useEffect } from "react";
import Router from "./routes/Routes";
import { Navbar, Footer } from "./components/layouts/index";

const App = () => {
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
    <main>
      <Navbar />
      <Router />
      <Footer />
    </main>
  );
};

export default App;

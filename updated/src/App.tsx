import React from "react";
import Router from "./routes/Routes";
import { Navbar, Footer } from "./components/layouts/index";

const App = () => {
  return (
    <main>
      <Navbar />
      <Router />
      <Footer />
    </main>
  );
};

export default App;

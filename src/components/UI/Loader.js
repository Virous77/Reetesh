import React from "react";
import { ImSpinner9 } from "react-icons/im";
import "./Loader.css";

const Loader = () => {
  return (
    <section className="loader">
      <ImSpinner9 className="loaderIcon" />
    </section>
  );
};

export default Loader;

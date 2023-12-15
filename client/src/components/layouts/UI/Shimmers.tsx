import React from "react";
import "./Loader.scss";

const Shimmer = () => {
  return (
    <div className="shimmer-wrapper">
      <div className="shimmer"></div>
    </div>
  );
};

const ShimmeredParagraphs = () => {
  return (
    <div className="flex-container">
      <div className="shimmered-paragraph">
        <Shimmer />
      </div>
    </div>
  );
};

export default ShimmeredParagraphs;

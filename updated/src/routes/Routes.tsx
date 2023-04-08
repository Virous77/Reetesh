import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  WorkPage,
  SkillsPage,
  ContactPage,
} from "../pages/index";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default Router;

import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  WorkPage,
  SkillsPage,
  ContactPage,
  BlogPage,
  BlogDetailsPage,
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
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailsPage />} />
      </Routes>
    </>
  );
};

export default Router;

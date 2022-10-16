import "./App.css";
import { Navbar, Header } from "./components/layout";
import { About, Contact, Work, Skills } from "./components";
import { useFunctionContext } from "./store/functionContext";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterSub from "./components/layout/FooterSub";

function App() {
  const { setShowMobileMenu } = useFunctionContext();

  return (
    <section className="App" onClick={() => setShowMobileMenu(false)}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ToastContainer style={{ marginTop: "5rem" }} />
      <FooterSub />
    </section>
  );
}

export default App;

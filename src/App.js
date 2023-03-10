import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./component/NotFound";
import Aservice from "./component/Aservice";
import Home from "./component/Home";
import AaboutUs from "./component/AaboutUs";
import AContact from "./component/AContact";
import Careeres from "./component/Careeres";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AaboutUs />} />
        <Route path="/services" element={<Aservice />} />
        <Route path="/careers" element={<Careeres />} />
        <Route path="/contact" element={<AContact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./component/NotFound";
import Aservice from "./component/Aservice";
import Home from "./component/Home";
import AaboutUs from "./component/AaboutUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AaboutUs/>} />
        <Route path="/services" element={<Aservice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

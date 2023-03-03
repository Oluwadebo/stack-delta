import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./component/NotFound";
import Aservice from "./component/Aservice";
import Home from "./component/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Aservice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

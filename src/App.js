import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./component/NotFound";
import Aservice from "./component/Aservice";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Aservice/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

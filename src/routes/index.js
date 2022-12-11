import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound, Home } from "../containers";

export const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

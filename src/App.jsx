import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound404 from "./components/NotFound404";
import HomePage from "./pages/Home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* ovaina ny route nareo ny eto */}
          <Route path='/' element={<HomePage />} />
          {/* <Route path="/à-propos" element={<p>About</p>} /> */}
          {/* <Route path="/services" element={<p>Services</p>} /> */}
          {/* <Route path="/contact" element={<p>Contact</p>} /> */}
        </Route>

        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}
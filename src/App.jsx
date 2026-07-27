import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound404 from "./components/NotFound404";
import HomePage from "./pages/Home/Home";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
}
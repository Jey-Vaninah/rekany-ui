import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";

function Home() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-green-500 px-6 pt-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Accueil</h1>
        <p className="mt-4">Bienvenue sur la page d'accueil.</p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-blue-500 px-6 pt-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold">À propos</h1>
        <p className="mt-4">Page À propos.</p>
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-red-500 px-6 pt-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-4">Page non trouvée.</p>
        <Link to="/" className="underline mt-4 inline-block">Retour</Link>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

import { Link } from "react-router-dom";
import { FiArrowLeft, FiHome } from "react-icons/fi";
import { IoDiamondOutline } from "react-icons/io5";
import heroImage from "../assets/hero.png";

export default function NotFound404() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-stone-50 text-gray-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-bottom bg-repeat-x opacity-15 sm:h-72"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "360px auto",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-emerald-100/70 via-stone-50/80 to-stone-50 sm:h-80"
      />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="flex gap-3">
          <p className="text-[150px] font-extrabold text-transparent bg-clip-text bg-center bg-cover" 
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/f7/89/45/f78945a8579ebba360bdaba7d7103eb4.jpg')" }}
          >404</p>
        </div>

        <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-normal text-gray-950 sm:text-5xl">
          Oups... cette page est introuvable.
        </h1>

        <p className="mt-4 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
          La page que vous souhaitez rejoindre n'existe pas. Vous pouvez nous <span className="text-black bg-emerald-100 cursor-pointer px-1 text-center rounded-lg"><Link to="/contact">contacter</Link></span> pour discuter de vos plans.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gray-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-gray-950/15 transition hover:-translate-y-0.5 hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
          >
            <FiHome size={17} />
            Retour à l'accueil
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-gray-200 backdrop-blur-sm px-5 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
          >
            <FiArrowLeft size={17} />
            Page précédente
          </button>
        </div>
        <p className="mt-6 text-sm text-gray-500 absolute bottom-4">
          <span className="font-semibold text-gray-700">Besoin d'aide?</span> Contactez-nous à <span className="text-emerald-600 underline">contact@stone-mada.com</span>
        </p>
      </section>
    </main>
  );
}

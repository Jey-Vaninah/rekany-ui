import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoDiamondOutline } from "react-icons/io5";
import { FiShoppingCart, FiChevronDown, FiLogIn, FiUserPlus } from "react-icons/fi";

const NAV_LINKS = ["Accueil", "À propos", "Services" , "Blog", "Produits" , "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <motion.nav
      animate={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0)",
        boxShadow: scrolled
          ? "0 2px 24px 0 rgba(0,0,0,0.08)"
          : "0 0px 0px 0 rgba(0,0,0,0)",
        paddingTop: scrolled ? "10px" : "22px",
        paddingBottom: scrolled ? "10px" : "22px",
      }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-8 flex items-center justify-between"
      style={{ backdropFilter: scrolled ? "blur(12px)" : "none" }}
    >
      {/* Logo */}
      <motion.a
        href="#"
        className="flex items-center gap-2 select-none"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <span
          className="flex items-center justify-center rounded-xl bg-gray-900 text-white"
          style={{ width: 38, height: 38 }}
        >
          <IoDiamondOutline size={20} />
        </span>
        <span
          className="text-gray-900 font-bold tracking-tight text-xl"
          style={{ letterSpacing: "-0.02em" }}
        >
          Mada Stones
        </span>
      </motion.a>

      {/* Nav links */}
      <ul className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link, i) => (
          <li key={link}>
            <motion.a
              href="#"
              className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              whileHover="hover"
            >
              {link}
              {i === 0 && (
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900 rounded-full"
                  layoutId="underline"
                />
              )}
            </motion.a>
          </li>
        ))}
      </ul>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        {/* Cart icon */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.93 }}
          className="relative p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Panier"
        >
          <FiShoppingCart size={22} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-gray-900 rounded-full" />
        </motion.button>

        {/* Auth dropdown */}
        <div className="relative" ref={dropdownRef}>
          <motion.button
            onClick={() => setDropdownOpen((v) => !v)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl"
          >
            Mon compte
            <motion.span
              animate={{ rotate: dropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            >
              <FiChevronDown size={16} />
            </motion.span>
          </motion.button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                style={{ transformOrigin: "top right" }}
              >
                <a
                  href="#"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-700">
                    <FiLogIn size={16} />
                  </span>
                  Se connecter
                </a>
                <div className="mx-4 h-px bg-gray-100" />
                <a
                  href="#"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-3 px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-900 text-white">
                    <FiUserPlus size={16} />
                  </span>
                  S'inscrire
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
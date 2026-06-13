import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoDiamondOutline } from "react-icons/io5";
import { FiShoppingCart, FiChevronDown, FiLogIn, FiUserPlus, FiX, FiMenu } from "react-icons/fi";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/à-propos" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Produits", href: "/produits" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        animate={{
          backgroundColor: scrolled || mobileOpen ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0)",
          boxShadow: scrolled || mobileOpen
            ? "0 2px 24px 0 rgba(0,0,0,0.08)"
            : "0 0px 0px 0 rgba(0,0,0,0)",
          paddingTop: scrolled ? "10px" : "22px",
          paddingBottom: scrolled ? "10px" : "22px",
        }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 flex items-center justify-between"
        style={{ backdropFilter: scrolled || mobileOpen ? "blur(12px)" : "none" }}
      >
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center gap-2 select-none"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <span className="flex items-center justify-center rounded-xl bg-gray-900 text-white" style={{ width: 38, height: 38 }}>
            <IoDiamondOutline size={20} />
          </span>
          <span className="text-gray-900 font-bold tracking-tight text-xl" style={{ letterSpacing: "-0.02em" }}>
            Mada Stones
          </span>
        </motion.a>

        {/* Nav links — desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item, i) => (
            <li key={item.label}>
              <motion.a
                href={item.href}
                className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
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

        {/* Right actions — desktop */}
        <div className="hidden md:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.93 }}
            className="relative p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Panier"
          >
            <FiShoppingCart size={22} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-gray-900 rounded-full" />
          </motion.button>

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

        {/* Burger — mobile */}
        <motion.button
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          whileTap={{ scale: 0.93 }}
          aria-label="Menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <FiX size={24} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <FiMenu size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-24 pb-8 px-6 md:hidden overflow-y-auto"
          >
            {/* Nav links */}
            <ul className="flex flex-col gap-1 mb-6">
              {NAV_LINKS.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.05, duration: 0.22 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-lg font-semibold text-gray-800 hover:text-gray-900 py-3 border-b border-gray-100 transition-colors"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Divider */}
            <div className="h-px bg-gray-100 mb-6" />

            {/* Panier */}
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.38, duration: 0.22 }}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors mb-1"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gray-100 text-gray-700 relative">
                <FiShoppingCart size={18} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-gray-900 rounded-full" />
              </span>
              Mon panier
            </motion.a>

            {/* Se connecter */}
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.43, duration: 0.22 }}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors mb-1"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gray-100 text-gray-700">
                <FiLogIn size={18} />
              </span>
              Se connecter
            </motion.a>

            {/* S'inscrire */}
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.48, duration: 0.22 }}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gray-900 text-white">
                <FiUserPlus size={18} />
              </span>
              S'inscrire
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
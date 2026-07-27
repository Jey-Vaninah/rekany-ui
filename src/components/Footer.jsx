import { IoDiamondOutline } from "react-icons/io5";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

const quickLinks = ["Accueil", "A propos", "Services", "Produits", "Blog", "Contact"];
const services = ["Export de pierres", "Selection sur mesure", "Controle qualite", "Logistique"];

const contact = {
  phone: "+261 34 00 000 00",
  email: "contact@madastones.com",
  address: "Lot II M 12, Antananarivo 101, Madagascar",
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:gap-0 md:grid-cols-2 lg:grid-cols-40">
          <div className="space-y-5 lg:col-span-16">
            <a href="#" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-gray-950">
                <IoDiamondOutline size={22} />
              </span>
              <span className="text-xl font-bold tracking-tight">Mada Stones</span>
            </a>
            <p className="max-w-sm text-sm leading-6 text-gray-300">
              Pierres naturelles de Madagascar pour projets d'architecture,
              decoration et amenagement, avec une selection fiable et un suivi
              export soigne.
            </p>
            <div className="flex items-center gap-3">
              {[
                { label: "Facebook", icon: FiFacebook },
                { label: "Instagram", icon: FiInstagram },
                { label: "LinkedIn", icon: FiLinkedin },
              ].map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-100">
              Liens rapides
            </h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 transition hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-100">
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 transition hover:text-white"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='lg:col-span-8'>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-100">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-gray-300">
              <li className="flex gap-3">
                <FiMapPin className="mt-0.5 shrink-0 text-white" size={18} />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="shrink-0 text-white" size={18} />
                <a href={`tel:${contact.phone.replaceAll(" ", "")}`} className="hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="shrink-0 text-white" size={18} />
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Mada Stones. Tous droits reserves.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="transition hover:text-white">
              Mentions legales
            </a>
            <a href="#" className="transition hover:text-white">
              Confidentialite
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

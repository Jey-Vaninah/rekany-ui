import React, { useState } from "react";
import {
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle,
  Clock,
  Globe,
  ShoppingBag,
  Download,
  Leaf,
} from "lucide-react";
import rizierImage from "../../assets/images/rizier.jpg";
import Button from "../../components/ui/Button";

const contactMethods = [
  {
    icon: Phone,
    title: "Téléphone",
    value: "+261 32 07 400 06",
    hint: "Lundi – Samedi · 8h – 17h",
    href: "tel:+261320740006",
  },
  {
    icon: Mail,
    title: "Email",
    value: "rekany@gmail.com",
    hint: "Réponse sous 24 h",
    href: "mailto:rekany@gmail.com",
  },
  {
    icon: MapPin,
    title: "Siège social",
    value: "Lot IIK 60 B Mahatony",
    hint: "Antananarivo, Madagascar",
    href: "https://maps.google.com/?q=Antananarivo+Madagascar",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+261 32 07 400 06",
    hint: "Réponse rapide 7j/7",
    href: "https://wa.me/261320740006",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        prenom: "",
        nom: "",
        email: "",
        telephone: "",
        sujet: "",
        message: "",
        consent: false,
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1200);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-rekany-beige">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat pt-12 pb-16 lg:pt-16 lg:pb-24"
        style={{ backgroundImage: `url(${rizierImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-rekany-dark/80 via-rekany-dark/60 to-rekany-light/40 backdrop-blur-sm" />
        <div className="absolute top-0 right-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-rekany-light/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 translate-y-1/2 -translate-x-1/2 rounded-full bg-rekany-dark/30 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-rekany-light/30 bg-rekany-light/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <MessageCircle className="h-4 w-4" />
              <span>Restons en contact</span>
            </div>

            <h1 className="mb-6 font-poppins text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Contactez{" "}
              <span className="text-rekany-light">
                REKANY AGRI
              </span>
            </h1>

            <p className="text-lg font-light leading-relaxed text-white/80 md:text-xl">
              Une question sur nos produits bio, un projet d’export ou un partenariat ?
              Notre équipe vous répond avec la même passion que celle mêlée à nos terres.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-20 lg:pb-28 -mt-8 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-4">
            {contactMethods.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group bg-rekany-white rounded-2xl p-6 border border-rekany-cream shadow-sm hover:shadow-xl hover:border-rekany-light/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rekany-dark/10 to-rekany-light/10 text-rekany-light transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-rekany-dark group-hover:to-rekany-light group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-poppins text-lg font-semibold text-rekany-dark">
                    {item.title}
                  </h3>
                  <p className="mb-1 font-medium text-rekany-gray">{item.value}</p>
                  <p className="text-sm text-rekany-gray/60">{item.hint}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-8 lg:grid-cols-2">
            {/* Form */}
            <div className="bg-rekany-white rounded-3xl p-8 md:p-10 border border-rekany-cream shadow-sm">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <Leaf className="h-5 w-5 text-rekany-light" />
                  <h2 className="font-poppins text-2xl font-bold text-rekany-dark md:text-3xl">
                    Envoyez-nous un message
                  </h2>
                </div>
                <p className="text-rekany-gray/60">
                  Remplissez ce formulaire et notre équipe vous répondra rapidement.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="prenom" className="mb-1.5 block text-sm font-medium text-rekany-dark">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-rekany-cream bg-rekany-beige/30 px-4 py-3 text-rekany-gray placeholder-rekany-gray/40 focus:border-rekany-light focus:ring-2 focus:ring-rekany-light/20 outline-none transition-all duration-300"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="nom" className="mb-1.5 block text-sm font-medium text-rekany-dark">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-rekany-cream bg-rekany-beige/30 px-4 py-3 text-rekany-gray placeholder-rekany-gray/40 focus:border-rekany-light focus:ring-2 focus:ring-rekany-light/20 outline-none transition-all duration-300"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-rekany-dark">
                    Adresse Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-rekany-cream bg-rekany-beige/30 px-4 py-3 text-rekany-gray placeholder-rekany-gray/40 focus:border-rekany-light focus:ring-2 focus:ring-rekany-light/20 outline-none transition-all duration-300"
                    placeholder="exemple@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="mb-1.5 block text-sm font-medium text-rekany-dark">
                    Téléphone (optionnel)
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-rekany-cream bg-rekany-beige/30 px-4 py-3 text-rekany-gray placeholder-rekany-gray/40 focus:border-rekany-light focus:ring-2 focus:ring-rekany-light/20 outline-none transition-all duration-300"
                    placeholder="+261 XX XX XXX XX"
                  />
                </div>

                <div>
                  <label htmlFor="sujet" className="mb-1.5 block text-sm font-medium text-rekany-dark">
                    Sujet
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-rekany-cream bg-rekany-beige/30 px-4 py-3 text-rekany-gray focus:border-rekany-light focus:ring-2 focus:ring-rekany-light/20 outline-none transition-all duration-300"
                  >
                    <option value="" disabled>Choisissez un sujet</option>
                    <option value="particulier">Commande particulier</option>
                    <option value="grande-surface">Partenariat Grande Surface</option>
                    <option value="export">Export International</option>
                    <option value="restaurant">Restaurant / Hôtel</option>
                    <option value="agriculteur">Devenir agriculteur partenaire</option>
                    <option value="presse">Presse & Médias</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-rekany-dark">
                    Votre Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full resize-none rounded-xl border border-rekany-cream bg-rekany-beige/30 px-4 py-3 text-rekany-gray placeholder-rekany-gray/40 focus:border-rekany-light focus:ring-2 focus:ring-rekany-light/20 outline-none transition-all duration-300"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-1 h-5 w-5 cursor-pointer rounded border-rekany-cream text-rekany-light focus:ring-rekany-light"
                  />
                  <label htmlFor="consent" className="text-sm leading-relaxed text-rekany-gray/60">
                    J’accepte que mes données soient traitées par REKANY AGRI dans le cadre de ma demande.{" "}
                    <a href="#" className="text-rekany-light hover:underline">
                      Politique de confidentialité
                    </a>
                    .
                  </label>
                </div>

                <Button type="submit" variant="primary" icon disabled={isSubmitting}>
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>

              {isSubmitted && (
                <div className="mt-6 rounded-xl border border-rekany-light/30 bg-rekany-light/10 p-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-rekany-light" />
                    <p className="font-medium text-rekany-dark">
                      Votre message a bien été envoyé ! Nous vous répondrons très bientôt.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Map */}
            <div className="flex flex-col">
              <div className="bg-rekany-white rounded-3xl border border-rekany-cream shadow-sm p-2 flex-1">
                <div className="relative h-full min-h-[400px] overflow-hidden rounded-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242859.2547627579!2d47.40107905!3d-18.88792905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07de34f1f4eb3%3A0xdf10b5c0d41466c0!2sAntananarivo%2C%20Madagascar!5e0!3m2!1sfr!2s!4v1700000000000!5m2!1sfr!2s"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full min-h-[400px] w-full rounded-2xl border-0"
                    title="Localisation REKANY AGRI - Antananarivo, Madagascar"
                  />
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="bg-rekany-white rounded-xl p-4 text-center border border-rekany-cream">
                  <Clock className="mx-auto mb-2 h-5 w-5 text-rekany-light" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-rekany-gray/50">
                    Horaires
                  </p>
                  <p className="text-sm font-medium text-rekany-dark">Lun - Sam : 8h - 17h</p>
                </div>
                <div className="bg-rekany-white rounded-xl p-4 text-center border border-rekany-cream">
                  <Globe className="mx-auto mb-2 h-5 w-5 text-rekany-light" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-rekany-gray/50">
                    Livraison
                  </p>
                  <p className="text-sm font-medium text-rekany-dark">National & Export</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-rekany-dark via-rekany-dark to-rekany-light" />
            <div className="pointer-events-none absolute inset-0 opacity-10">
              <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-0 left-0 h-48 w-48 translate-y-1/2 -translate-x-1/2 rounded-full bg-white blur-3xl" />
            </div>

            <div className="relative px-8 py-16 text-center md:px-16 md:py-20">
              <Leaf className="h-12 w-12 text-white/40 mx-auto mb-4" />
              <h2 className="mb-4 font-poppins text-3xl font-bold text-white md:text-4xl">
                Prêt à goûter l’excellence bio ?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
                Que vous soyez un particulier, une grande surface ou un client à l’international,
                nos produits traçables et certifiés bio sont faits pour vous.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button variant="primary" icon>
                  Voir le catalogue
                </Button>
                <button className="flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3 font-semibold text-white transition-all hover:bg-white/10">
                  <Download className="h-5 w-5" />
                  <span>Notre plaquette</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/261320740006"
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-transform hover:scale-110"
        aria-label="Contact WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
        <span className="absolute right-16 whitespace-nowrap rounded-lg bg-rekany-dark px-3 py-1.5 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100">
          Discuter sur WhatsApp
        </span>
      </a>
    </div>
  );
}
import React, { useState } from "react";
import {
  MessageCircle,
  MapPin,
  Phone,
  ArrowUpRight,
  Mail,
  ExternalLink,
  Send,
  CheckCircle,
  Clock,
  Globe,
  ShoppingBag,
  Download,
} from "lucide-react";
import rizierImage from "../../assets/images/rizier.jpg";

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
    <div className="min-h-screen pt-24 pb-12">
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat pt-12 pb-16 lg:pt-16 lg:pb-24"
        style={{ backgroundImage: `url(${rizierImage})` }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
        <div className="absolute top-0 right-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-rekany-light/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 translate-y-1/2 -translate-x-1/2 rounded-full bg-rekany-dark/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-rekany-light/20 bg-rekany-light/10 px-4 py-2 text-sm font-medium text-rekany-dark backdrop-blur-sm">
              <MessageCircle className="h-4 w-4 text-rekany-light" />
              <span>Restons en contact</span>
            </div>

            <h1 className="mb-6 font-poppins text-4xl font-bold leading-tight text-rekany-dark md:text-5xl lg:text-6xl">
              Contactez{" "}
              <span className="bg-gradient-to-r from-rekany-dark to-rekany-light bg-clip-text text-transparent">
                REKANY AGRI
              </span>
            </h1>

            <p className="text-lg font-light leading-relaxed text-rekany-gray/80 md:text-xl">
              Une question sur nos produits bio, un projet d’export ou un partenariat ?
              Notre équipe vous répond avec la même passion que celle mêlée à nos terres.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
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
                  className="group glass-card rounded-2xl p-8 hover-lift"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-rekany-dark to-rekany-light transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mb-3 font-poppins text-xl font-semibold text-rekany-dark">
                    {item.title}
                  </h3>
                  <p className="mb-2 font-semibold text-rekany-dark">{item.value}</p>
                  <p className="text-sm leading-relaxed text-rekany-gray/70">{item.hint}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-8 lg:grid-cols-2">
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <div className="mb-8">
                <h2 className="mb-3 font-poppins text-2xl font-bold text-rekany-dark md:text-3xl">
                  Envoyez-nous un message
                </h2>
                <p className="text-rekany-gray/70">
                  Remplissez ce formulaire et notre équipe vous répondra rapidement.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="prenom" className="mb-2 block text-sm font-semibold text-rekany-dark">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                      className="form-input w-full rounded-xl bg-white/80 px-4 py-3.5 text-rekany-gray placeholder-rekany-gray/40"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="nom" className="mb-2 block text-sm font-semibold text-rekany-dark">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="form-input w-full rounded-xl bg-white/80 px-4 py-3.5 text-rekany-gray placeholder-rekany-gray/40"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-rekany-dark">
                    Adresse Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input w-full rounded-xl bg-white/80 px-4 py-3.5 text-rekany-gray placeholder-rekany-gray/40"
                    placeholder="exemple@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="mb-2 block text-sm font-semibold text-rekany-dark">
                    Téléphone (optionnel)
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="form-input w-full rounded-xl bg-white/80 px-4 py-3.5 text-rekany-gray placeholder-rekany-gray/40"
                    placeholder="+261 XX XX XXX XX"
                  />
                </div>

                <div>
                  <label htmlFor="sujet" className="mb-2 block text-sm font-semibold text-rekany-dark">
                    Sujet
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    required
                    className="form-input w-full cursor-pointer rounded-xl bg-white/80 px-4 py-3.5 text-rekany-gray"
                  >
                    <option value="" disabled>
                      Choisissez un sujet
                    </option>
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
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-rekany-dark">
                    Votre Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-input w-full resize-none rounded-xl bg-white/80 px-4 py-3.5 text-rekany-gray placeholder-rekany-gray/40"
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
                    className="mt-1 h-5 w-5 cursor-pointer rounded border-rekany-gray/30 text-rekany-dark focus:ring-rekany-light"
                  />
                  <label htmlFor="consent" className="text-sm leading-relaxed text-rekany-gray/70">
                    J’accepte que mes données soient traitées par REKANY AGRI dans le cadre de ma demande. {" "}
                    <a href="#" className="text-rekany-dark underline hover:text-rekany-light">
                      Politique de confidentialité
                    </a>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary flex w-full items-center justify-center space-x-2 rounded-xl py-4 text-base font-semibold text-white disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Envoi en cours...</span>
                  ) : (
                    <>
                      <span>Envoyer le message</span>
                      <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>

              {isSubmitted && (
                <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 text-green-600" />
                    <p className="font-medium text-green-800">
                      Votre message a bien été envoyé ! Nous vous répondrons très bientôt.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <div className="glass-card min-h-[400px] flex-1 rounded-3xl border border-white/60 p-2 shadow-lg">
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

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="glass-card rounded-xl p-4 text-center">
                  <Clock className="mx-auto mb-2 h-5 w-5 text-rekany-light" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-rekany-gray/60">
                    Horaires
                  </p>
                  <p className="text-sm font-medium text-rekany-dark">Lun - Sam : 8h - 17h</p>
                </div>
                <div className="glass-card rounded-xl p-4 text-center">
                  <Globe className="mx-auto mb-2 h-5 w-5 text-rekany-light" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-rekany-gray/60">
                    Livraison
                  </p>
                  <p className="text-sm font-medium text-rekany-dark">National & Export</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-rekany-dark via-rekany-dark to-rekany-light" />
            <div className="pointer-events-none absolute inset-0 opacity-10">
              <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-0 left-0 h-48 w-48 translate-y-1/2 -translate-x-1/2 rounded-full bg-white blur-3xl" />
            </div>

            <div className="relative px-8 py-16 text-center md:px-16 md:py-20">
              <h2 className="mb-4 font-poppins text-3xl font-bold text-white md:text-4xl">
                Prêt à goûter l’excellence bio ?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
                Que vous soyez un particulier, une grande surface ou un client à l’international,
                nos produits traçables et certifiés bio sont faits pour vous.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button className="flex items-center space-x-2 rounded-full bg-white px-8 py-3.5 font-semibold text-rekany-dark transition-colors hover:bg-rekany-beige">
                  <ShoppingBag className="h-5 w-5" />
                  <span>Voir le catalogue</span>
                </button>
                <button className="flex items-center space-x-2 rounded-full border-2 border-white/30 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/10">
                  <Download className="h-5 w-5" />
                  <span>Notre plaquette</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/261320740006"
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-transform hover:scale-110"
        aria-label="Contact WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
        <span className="absolute right-16 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100">
          Discuter sur WhatsApp
        </span>
      </a>
    </div>
  );
}

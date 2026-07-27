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
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rekany-light/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-rekany-dark/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-rekany-light/10 text-rekany-dark px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-rekany-light/20">
              <MessageCircle className="w-4 h-4 text-rekany-light" />
              <span>Restons en contact</span>
            </div>

            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-rekany-dark leading-tight mb-6">
              Contactez{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rekany-dark to-rekany-light">
                REKANY AGRI
              </span>
            </h1>

            <p className="text-lg md:text-xl text-rekany-gray/80 leading-relaxed font-light">
              Une question sur nos produits bio ? Un projet d'export ? Ou
              simplement envie de connaître nos paysans partenaires ? Notre
              équipe vous répond avec la même passion que celle mise dans nos
              terres.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Address Card */}
            <div className="glass-card rounded-2xl p-8 hover-lift group cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rekany-dark to-rekany-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-rekany-dark mb-3">
                Notre Adresse
              </h3>
              <p className="text-rekany-gray/80 leading-relaxed mb-4">
                <strong className="text-rekany-dark">Siège Social :</strong>
                <br />
                Lot IIK 60 B Mahatony
                <br />
                Antananarivo, Madagascar
              </p>
              <div className="pt-4 border-t border-rekany-dark/10">
                <p className="text-sm text-rekany-gray/60 mb-1 flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-rekany-light mr-2"></span>
                  Antenne Antsirabe
                </p>
                <p className="text-sm text-rekany-gray/60 flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-rekany-light mr-2"></span>
                  Antenne Anjororobe
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-2xl p-8 hover-lift group cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rekany-dark to-rekany-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-rekany-dark mb-3">
                Téléphone
              </h3>
              <p className="text-rekany-gray/80 leading-relaxed mb-4">
                Disponible du lundi au samedi
                <br />
                de 8h00 à 17h00 (EAT)
              </p>
              <a
                href="tel:+261320740006"
                className="inline-flex items-center text-rekany-dark font-semibold text-lg hover:text-rekany-light transition-colors group/link"
              >
                <span>+261 32 07 400 06</span>
                <ArrowUpRight className="w-5 h-5 ml-1 opacity-0 group-hover/link:opacity-100 transition-opacity" />
              </a>
              <div className="mt-4 flex items-center space-x-3">
                <a
                  href="https://wa.me/261320740006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-green-500/10 text-green-700 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-green-500/20 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="glass-card rounded-2xl p-8 hover-lift group cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rekany-dark to-rekany-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-rekany-dark mb-3">
                Email & Web
              </h3>
              <p className="text-rekany-gray/80 leading-relaxed mb-4">
                Pour toute demande commerciale,
                <br />
                partenariat ou information.
              </p>
              <a
                href="mailto:rekany@gmail.com"
                className="block text-rekany-dark font-semibold hover:text-rekany-light transition-colors mb-2"
              >
                rekany@gmail.com
              </a>
              <a
                href="https://www.rekany.mg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-rekany-light font-medium hover:text-rekany-dark transition-colors"
              >
                <span>www.rekany.mg</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Contact Form */}
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <div className="mb-8">
                <h2 className="font-poppins font-bold text-2xl md:text-3xl text-rekany-dark mb-3">
                  Envoyez-nous un message
                </h2>
                <p className="text-rekany-gray/70">
                  Remplissez le formulaire ci-dessous et nous vous répondrons
                  dans les 24 heures ouvrées.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="prenom"
                      className="block text-sm font-semibold text-rekany-dark mb-2"
                    >
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                      className="form-input w-full px-4 py-3.5 rounded-xl bg-white/80 text-rekany-gray placeholder-rekany-gray/40"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-sm font-semibold text-rekany-dark mb-2"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="form-input w-full px-4 py-3.5 rounded-xl bg-white/80 text-rekany-gray placeholder-rekany-gray/40"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-rekany-dark mb-2"
                  >
                    Adresse Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input w-full px-4 py-3.5 rounded-xl bg-white/80 text-rekany-gray placeholder-rekany-gray/40"
                    placeholder="exemple@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telephone"
                    className="block text-sm font-semibold text-rekany-dark mb-2"
                  >
                    Téléphone (optionnel)
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-3.5 rounded-xl bg-white/80 text-rekany-gray placeholder-rekany-gray/40"
                    placeholder="+261 XX XX XXX XX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="sujet"
                    className="block text-sm font-semibold text-rekany-dark mb-2"
                  >
                    Sujet
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    required
                    className="form-input w-full px-4 py-3.5 rounded-xl bg-white/80 text-rekany-gray cursor-pointer"
                  >
                    <option value="" disabled>
                      Choisissez un sujet
                    </option>
                    <option value="particulier">Commande particulier</option>
                    <option value="grande-surface">
                      Partenariat Grande Surface
                    </option>
                    <option value="export">Export International</option>
                    <option value="restaurant">Restaurant / Hôtel</option>
                    <option value="agriculteur">
                      Devenir agriculteur partenaire
                    </option>
                    <option value="presse">Presse & Médias</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-rekany-dark mb-2"
                  >
                    Votre Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-input w-full px-4 py-3.5 rounded-xl bg-white/80 text-rekany-gray placeholder-rekany-gray/40 resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-1 w-5 h-5 rounded border-rekany-gray/30 text-rekany-dark focus:ring-rekany-light cursor-pointer"
                  />
                  <label
                    htmlFor="consent"
                    className="text-sm text-rekany-gray/70 leading-relaxed"
                  >
                    J'accepte que mes données soient traitées par REKANY AGRI
                    dans le cadre de ma demande.{" "}
                    <a
                      href="#"
                      className="text-rekany-dark underline hover:text-rekany-light"
                    >
                      Politique de confidentialité
                    </a>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full text-white font-semibold py-4 rounded-xl text-base flex items-center justify-center space-x-2 group cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Envoi en cours...</span>
                  ) : (
                    <>
                      <span>Envoyer le message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Success Message Banner */}
              {isSubmitted && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl animate-fadeIn">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <p className="text-green-800 font-medium">
                      Votre message a bien été envoyé ! Nous vous répondrons
                      très bientôt.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Map */}
            <div className="flex flex-col">
              <div className="glass-card rounded-3xl p-2 flex-1 border border-white/60 shadow-lg min-h-[400px]">
                <div className="relative overflow-hidden rounded-2xl h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242859.2547627579!2d47.40107905!3d-18.88792905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07de34f1f4eb3%3A0xdf10b5c0d41466c0!2sAntananarivo%2C%20Madagascar!5e0!3m2!1sfr!2s!4v1700000000000!5m2!1sfr!2s"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0 min-h-[400px] rounded-2xl"
                    title="Localisation REKANY AGRI - Antananarivo, Madagascar"
                  ></iframe>
                </div>
              </div>

              {/* Quick Info Below Map */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="glass-card rounded-xl p-4 text-center">
                  <Clock className="w-5 h-5 text-rekany-light mx-auto mb-2" />
                  <p className="text-xs text-rekany-gray/60 uppercase tracking-wider font-semibold">
                    Horaires
                  </p>
                  <p className="text-sm text-rekany-dark font-medium">
                    Lun - Sam : 8h - 17h
                  </p>
                </div>
                <div className="glass-card rounded-xl p-4 text-center">
                  <Globe className="w-5 h-5 text-rekany-light mx-auto mb-2" />
                  <p className="text-xs text-rekany-gray/60 uppercase tracking-wider font-semibold">
                    Livraison
                  </p>
                  <p className="text-sm text-rekany-dark font-medium">
                    National & Export
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 lg:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-rekany-dark via-rekany-dark to-rekany-light"></div>
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
                Prêt à goûter l'excellence bio ?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                Que vous soyez un particulier, une grande surface ou un client à
                l'international, nos produits traçables et certifiés bio sont
                faits pour vous.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-white text-rekany-dark font-semibold px-8 py-3.5 rounded-full hover:bg-rekany-beige transition-colors flex items-center space-x-2 cursor-pointer">
                  <ShoppingBag className="w-5 h-5" />
                  <span>Voir le catalogue</span>
                </button>
                <button className="border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors flex items-center space-x-2 cursor-pointer">
                  <Download className="w-5 h-5" />
                  <span>Notre plaquette</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/261320740006"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40 group"
        aria-label="Contact WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-16 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
          Discuter sur WhatsApp
        </span>
      </a>
    </div>
  );
}

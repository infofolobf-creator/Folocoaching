import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/content';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  key?: string;
  prefilledService?: string;
  prefilledNotes?: string;
}

export default function ContactSection({ prefilledService, prefilledNotes }: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    serviceInterest: prefilledService || SERVICES[0].title,
    message: prefilledNotes || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate safe local persistence and feedback
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                Contact & Localisation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Construisons Ensemble Votre Feuille de Route
              </h2>
              <p className="text-slate-600 text-base mt-3 leading-relaxed">
                Vous souhaitez échanger sur les enjeux de votre équipe ou obtenir une proposition
                commerciale personnalisée ? Notre équipe de Bobo-Dioulasso vous répond sous 24h ouvrées.
              </p>
            </div>

            {/* Direct contact list */}
            <div className="space-y-4">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-amber-50/70 border border-slate-200 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-white shadow-xs text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Téléphone direct</p>
                  <p className="text-base font-bold text-slate-900">{COMPANY_INFO.phone}</p>
                  <p className="text-xs text-slate-500">Appel direct du lundi au samedi</p>
                </div>
              </a>

              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-emerald-50/60 hover:bg-emerald-100/60 border border-emerald-200/80 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-emerald-600 text-white shadow-xs">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-emerald-800 uppercase">WhatsApp Instantané</p>
                  <p className="text-base font-bold text-slate-900">Discuter avec un conseiller</p>
                  <p className="text-xs text-emerald-700">Réponse rapide & devis express</p>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 hover:bg-amber-50/70 border border-slate-200 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-white shadow-xs text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Courrier électronique</p>
                  <p className="text-base font-bold text-slate-900">{COMPANY_INFO.email}</p>
                  <p className="text-xs text-slate-500">Pour tout envoi de cahier des charges</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="p-3 rounded-lg bg-white shadow-xs text-amber-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Siège du Cabinet</p>
                  <p className="text-sm font-bold text-slate-900">{COMPANY_INFO.address}</p>
                  <p className="text-xs text-slate-500">Interventions dans tout le Burkina Faso & sous-région</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="p-3 rounded-lg bg-white shadow-xs text-amber-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Horaires d'ouverture</p>
                  <p className="text-xs font-semibold text-slate-800">{COMPANY_INFO.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF9F6] rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Demande de Devis ou Entretien Préalable
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Entretien de cadrage gratuit de 30 minutes sans engagement.
                  </p>
                </div>
                <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">
                    Votre demande a bien été transmise !
                  </h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Merci <span className="font-bold text-slate-900">{formData.fullName}</span>. Notre équipe étudie votre besoin et vous contactera sous 24h ouvrées à l'adresse <span className="font-bold text-slate-900">{formData.email}</span> ou par téléphone.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          organization: '',
                          role: '',
                          serviceInterest: SERVICES[0].title,
                          message: '',
                        });
                      }}
                      className="text-xs font-bold text-amber-700 hover:text-amber-800 underline cursor-pointer"
                    >
                      Envoyer une autre demande
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Nom et Prénom *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Ex: Kouamé Sawadogo"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Numéro Téléphone / WhatsApp *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="Ex: +226 70 00 00 00"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Adresse Email Professionnelle *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="Ex: direction@entreprise.bf"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Entreprise / Organisation *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Nom de votre structure"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Pôle d'intervention souhaité
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-sm"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Formation Intra-entreprise Spécifique">Formation Intra-entreprise Spécifique</option>
                      <option value="Diagnostic Global d'Organisation">Diagnostic Global d'Organisation</option>
                      <option value="Autre demande">Autre besoin spécifique</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Précisions sur vos défis ou vos attentes
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Décrivez brièvement le contexte, le nombre de collaborateurs concernés, et la période souhaitée..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white text-sm leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-amber-600/20 transition-all cursor-pointer text-sm"
                  >
                    {loading ? (
                      <span>Transmission en cours...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Envoyer ma demande de devis</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    🔒 Vos données restent strictement confidentielles. Elles ne seront jamais partagées à des tiers.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

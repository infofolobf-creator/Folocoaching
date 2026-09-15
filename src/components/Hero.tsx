import { ArrowRight, CheckCircle2, MessageCircle, Sparkles, Target, Users, Award, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeroProps {
  onOpenQuote: () => void;
  onScrollTo: (elementId: string) => void;
}

export default function Hero({ onOpenQuote, onScrollTo }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-white via-[#FAF9F6] to-[#F5F4F0] border-b border-slate-200/60"
    >
      {/* Subtle geometric background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute -top-24 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-4 w-80 h-80 bg-slate-300/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300/70 text-amber-900 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Cabinet Agréé de Coaching Professionnel & Formation Continue</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.12] tracking-tight">
              Révélez le potentiel de vos équipes et{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800">
                sécurisez l'exécution.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              FOLO accompagne les entreprises, administrations publiques et dirigeants en Afrique de l'Ouest
              à instaurer une cohésion durable, développer un leadership agile et ancrer des compétences opérationnelles d'impact.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm font-medium text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>80% pratique et mises en situation réelles</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Coachs certifiés ancrés dans les réalités locales</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Suivi d'impact à 30, 60 et 90 jours</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Programmes intra-entreprise sur-mesure</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                id="hero-btn-diagnostic"
                onClick={() => onScrollTo('diagnostic-section')}
                className="inline-flex items-center justify-center gap-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-md shadow-amber-600/20 hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-amber-200" />
                <span>Diagnostic de besoins gratuit</span>
              </button>

              <button
                id="hero-btn-quote"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base px-6 py-3.5 rounded-xl shadow-sm transition-all duration-200 cursor-pointer"
              >
                <span>Demander un devis</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="hero-btn-whatsapp"
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold text-base px-5 py-3.5 rounded-xl transition-colors"
                title="Échanger en direct sur WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Commitment Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200/80">
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg">
                    Fɔlɔ
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">La Signature FOLO</h3>
                    <p className="text-xs text-slate-500">Approche Holistique & Pragmatique</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Certifié
                </span>
              </div>

              <div className="py-6 space-y-4">
                <div className="flex gap-3.5 items-start p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                  <div className="p-2 rounded-lg bg-white shadow-xs text-amber-600">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Cohésion d’Équipe & Synergies</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Alignement des visions, fluidification de la communication interdépartementale.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                  <div className="p-2 rounded-lg bg-white shadow-xs text-blue-600">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Leadership Opérationnel</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Capacité à déléguer, à décider en contexte d'incertitude et à motiver sans contraindre.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                  <div className="p-2 rounded-lg bg-white shadow-xs text-emerald-600">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Exécution Quotidienne Rigueur</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Méthodes structurées pour transformer les stratégies en résultats tangibles mesurés.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Booking Snippet */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">Besoin d’un conseil immédiat ?</p>
                  <p className="text-sm font-bold text-slate-900">{COMPANY_INFO.phone}</p>
                </div>
                <button
                  id="hero-card-contact-btn"
                  onClick={() => onScrollTo('contact-section')}
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100 px-3.5 py-2 rounded-lg transition-colors"
                >
                  Nous écrire &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/60 backdrop-blur-xs border border-slate-200/40 shadow-2xs">
                <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-slate-800 mt-1">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

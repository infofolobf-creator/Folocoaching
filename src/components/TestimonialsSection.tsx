import { Quote, Star, CheckCircle, Building2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export default function TestimonialsSection() {
  return (
    <section id="testimonials-section" className="py-20 bg-[#FBFBFA] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
            Impact Mesuré & Retours d'Expérience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Ils Font Confiance à FOLO Coaching
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Découvrez comment nos interventions ont permis de transformer des équipes et de débloquer le potentiel des dirigeants au Burkina Faso et dans la sous-région.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between relative group hover:border-amber-400/80 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200" />
                </div>

                <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed mb-6">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                {t.metric && (
                  <div className="mb-3 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold inline-flex items-center gap-1.5 border border-emerald-200/60">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{t.metric}</span>
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    {t.name}
                  </h4>
                  <p className="text-xs font-medium text-slate-500">
                    {t.role} &bull; {t.organization}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client trust logos / segments banner */}
        <div className="mt-14 pt-8 border-t border-slate-200 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-5">
            Secteurs d'intervention privilégiés
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-bold text-slate-600">
            <span className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
              Banque, Microfinance & Assurances
            </span>
            <span className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
              Agroalimentaire & Industrie
            </span>
            <span className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
              Administrations Publiques & Collectivités
            </span>
            <span className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
              ONGs & Projets de Développement
            </span>
            <span className="px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
              PME, Startups & Commerce
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

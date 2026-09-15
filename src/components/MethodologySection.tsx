import { CheckCircle2, Award, Zap, TrendingUp, ShieldCheck } from 'lucide-react';
import { METHODOLOGY_STEPS, COMPANY_INFO } from '../data/content';

export default function MethodologySection() {
  return (
    <section id="methodology-section" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Excellence & Méthode Éprouvée</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            La Démarche Fɔlɔ : Du Diagnostic au Changement Durable
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
            Notre méthodologie refuse le plaquage de modèles théoriques occidentaux désincarnés. Nous intervenons
            directement dans le tissu réel de vos équipes pour un ancrage immédiat.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METHODOLOGY_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 hover:border-amber-500/60 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-extrabold text-amber-500 font-['Outfit'] group-hover:scale-110 transition-transform inline-block">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                    {idx === 0 && <CheckCircle2 className="w-4 h-4" />}
                    {idx === 1 && <Zap className="w-4 h-4" />}
                    {idx === 2 && <Award className="w-4 h-4" />}
                    {idx === 3 && <TrendingUp className="w-4 h-4" />}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs font-semibold text-amber-400/90 flex items-center gap-1.5">
                <span>Phase essentielle</span> &bull; <span>Qualité garantie</span>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment statement banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-600/20 via-amber-500/10 to-transparent border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">
              Une charte déontologique stricte et confidentielle
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              Tous nos coachs interviennent selon le code de déontologie international du coaching : neutralité bienveillante, secret professionnel absolu et respect inconditionnel des personnes.
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm shadow-md">
              Engagement FOLO 100% Terrain
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Users, Compass, Award, Rocket, Check, ArrowRight, Clock, Target, ChevronDown } from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Users':
        return <Users className="w-6 h-6" />;
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'Award':
        return <Award className="w-6 h-6" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6" />;
      default:
        return <Target className="w-6 h-6" />;
    }
  };

  const currentService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section id="services-section" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2">
            Notre Offre d'Accompagnement
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Des Solutions Ciblées pour Chaque Palier de Croissance
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Nous combinons l'art du questionnement de haut niveau et les outils de pilotage opérationnel
            pour générer des transformations durables.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {SERVICES.map((service) => {
            const isActive = service.id === activeServiceId;
            return (
              <button
                key={service.id}
                id={`service-tab-${service.id}`}
                onClick={() => setActiveServiceId(service.id)}
                className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'border-amber-500 bg-amber-500/5 shadow-md'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2.5 rounded-lg ${
                      isActive ? 'bg-amber-500 text-white shadow-xs' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {getIcon(service.iconName)}
                  </div>
                  <h3
                    className={`text-sm sm:text-base font-bold leading-tight ${
                      isActive ? 'text-amber-900' : 'text-slate-800'
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>
                <span
                  className={`mt-4 text-[11px] font-semibold flex items-center gap-1 ${
                    isActive ? 'text-amber-700 font-bold' : 'text-slate-400'
                  }`}
                >
                  {isActive ? 'Détails actifs' : 'Voir le programme'} &rarr;
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Service Detailed View Card */}
        <div className="bg-[#FAF9F6] rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/20">
                  {getIcon(currentService.iconName)}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {currentService.title}
                  </h3>
                  <p className="text-sm font-medium text-amber-700 mt-0.5">
                    {currentService.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-slate-700 text-base leading-relaxed">
                {currentService.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2 p-3 rounded-lg bg-white border border-slate-200/70">
                  <Target className="w-4 h-4 text-amber-600 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase">Public Cible</p>
                    <p className="text-slate-800 font-bold">{currentService.targetAudience}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-white border border-slate-200/70">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase">Rythme Recommandé</p>
                    <p className="text-slate-800 font-bold">{currentService.durationExample}</p>
                  </div>
                </div>
              </div>

              {/* Modules / Program content */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Piliers & Modules du cycle :
                </h4>
                <div className="space-y-2.5">
                  {currentService.modules.map((mod, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/60 shadow-2xs"
                    >
                      <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="text-sm font-medium text-slate-800">{mod}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: Tangible Outcomes & CTA */}
            <div className="lg:col-span-5 bg-white rounded-xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-6">
              <h4 className="font-extrabold text-slate-900 text-lg border-b border-slate-100 pb-3">
                Bénéfices Attendus & Impact
              </h4>

              <div className="space-y-3">
                {currentService.keyBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-1 rounded bg-emerald-50 text-emerald-700 shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-slate-700 leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
                <p className="text-xs font-bold text-amber-900 uppercase">Méthode d'intervention</p>
                <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                  Chaque accompagnement fait l'objet d'un cadrage préalable avec notre équipe de coachs
                  pour aligner l'intervention sur les réalités spécifiques de votre organisation.
                </p>
              </div>

              <button
                id={`btn-quote-service-${currentService.id}`}
                onClick={() => onSelectService(currentService.title)}
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-amber-600 text-white font-bold py-3.5 px-6 rounded-xl shadow transition-all duration-200 cursor-pointer text-sm"
              >
                <span>Demander une proposition pour ce pôle</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

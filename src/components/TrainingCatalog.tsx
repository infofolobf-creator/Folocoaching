import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, BookOpen, CheckCircle, ArrowRight, Search, Filter } from 'lucide-react';
import { TRAINING_CATALOG } from '../data/content';
import { TrainingProgram } from '../types';

interface TrainingCatalogProps {
  onRegisterTraining: (program: TrainingProgram) => void;
}

export default function TrainingCatalog({ onRegisterTraining }: TrainingCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Toutes les formations' },
    { id: 'leadership', label: 'Leadership & Management' },
    { id: 'cohesion', label: 'Cohésion & Équipe' },
    { id: 'soft-skills', label: 'Soft Skills & Communication' },
    { id: 'entrepreneuriat', label: 'Dirigeants & Entrepreneuriat' },
  ];

  const filteredPrograms = TRAINING_CATALOG.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.targetAudience.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="formations-section" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
              Développement des Compétences
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Catalogue des Formations Pratiques
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mt-2">
              Des modules courts, intenses et directement transposables en entreprise. Disponibles en inter-entreprises à Bobo-Dioulasso ou déployables sur-mesure dans vos locaux.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              id="training-search-input"
              type="text"
              placeholder="Rechercher une formation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-cat-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <p className="text-slate-500 text-sm">Aucune formation ne correspond à vos critères.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-amber-700 hover:underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-amber-400/80 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-100/70 text-amber-900 border border-amber-200">
                      {program.level}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {program.duration}
                      </span>
                      <span className="flex items-center gap-1 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {program.format}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
                    {program.title}
                  </h3>

                  <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                    {program.shortDesc}
                  </p>

                  {/* Key Objectives */}
                  <div className="space-y-2 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Compétences clés visées :
                    </p>
                    {program.objectives.map((obj, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Info & CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div>
                    {program.nextSession && (
                      <div className="text-xs">
                        <span className="text-slate-400">Prochaine session : </span>
                        <span className="font-bold text-slate-900">{program.nextSession}</span>
                      </div>
                    )}
                    {program.spotsLeft && (
                      <span className="text-[11px] font-semibold text-amber-700">
                        Il reste {program.spotsLeft} places disponibles
                      </span>
                    )}
                  </div>

                  <button
                    id={`register-btn-${program.id}`}
                    onClick={() => onRegisterTraining(program)}
                    className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>S'inscrire / Devis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom enterprise banner */}
        <div className="mt-12 p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-slate-900 text-base">
              Vous souhaitez former vos équipes en intra-entreprise ?
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              Nous adaptons le programme, les horaires et les études de cas au contexte précis de votre secteur d'activité.
            </p>
          </div>
          <button
            id="btn-intra-enterprise-quote"
            onClick={() => onRegisterTraining({
              id: 'intra-custom',
              title: 'Programme Intra-Entreprise Sur-Mesure',
              category: 'leadership',
              duration: 'Sur-mesure',
              level: 'Dirigeants',
              format: 'Intra-entreprise',
              shortDesc: 'Formation collective personnalisée dans vos locaux ou en séminaire résidentiel.',
              objectives: ['Adaptation 100% à vos objectifs'],
              targetAudience: 'Vos collaborateurs et managers',
            })}
            className="shrink-0 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-colors"
          >
            Demander un devis Intra
          </button>
        </div>
      </div>
    </section>
  );
}

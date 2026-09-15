import { useState } from 'react';
import { Sparkles, ArrowRight, RotateCcw, Check, MessageSquare, ChevronRight } from 'lucide-react';
import { DIAGNOSTIC_QUESTIONS } from '../data/content';

interface DiagnosticQuizProps {
  onSelectRecommendation: (serviceName: string, notes: string) => void;
}

export default function DiagnosticQuiz({ onSelectRecommendation }: DiagnosticQuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = DIAGNOSTIC_QUESTIONS[currentStep];

  const handleSelectOption = (optionIndex: number) => {
    const updated = [...answers];
    updated[currentStep] = optionIndex;
    setAnswers(updated);

    if (currentStep < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsCompleted(false);
  };

  // Compute recommendation
  const getRecommendation = () => {
    if (answers.length < DIAGNOSTIC_QUESTIONS.length) {
      return {
        service: "Coaching Professionnel & Diagnostic Global",
        summary: "Alignement managérial et renforcement de la dynamique d'équipe.",
        actionSteps: [
          "Entretien d'immersion avec vos cadres",
          "Cartographie des freins de communication",
          "Session de cadrage stratégique"
        ]
      };
    }

    const firstChoice = DIAGNOSTIC_QUESTIONS[0].options[answers[0]];
    const secondChoice = DIAGNOSTIC_QUESTIONS[1].options[answers[1]];
    const thirdChoice = DIAGNOSTIC_QUESTIONS[2].options[answers[2]];

    const service = firstChoice.recommendedService;

    const actionSteps = [
      `Phase 1 : Diagnostic approfondi ciblé sur "${firstChoice.label}"`,
      `Phase 2 : Parcours opérationnel orienté vers "${secondChoice.label}"`,
      `Phase 3 : Déploiement en format "${thirdChoice.label.split('(')[0]}" avec suivi d'impact`
    ];

    return {
      service,
      summary: `Votre profil organisationnel indique un fort levier de performance autour de : ${firstChoice.label.toLowerCase()}.`,
      actionSteps
    };
  };

  const recommendation = getRecommendation();

  return (
    <section id="diagnostic-section" className="py-16 bg-[#F8F7F4] border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Outil d'auto-évaluation gratuit</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Diagnostic Express de Vos Besoins
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Répondez à 3 questions clés pour identifier le programme d'accompagnement le plus adapté à votre organisation.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200/90 overflow-hidden">
          {!isCompleted ? (
            <div className="p-6 sm:p-10">
              {/* Progress Tracker */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Question {currentStep + 1} sur {DIAGNOSTIC_QUESTIONS.length}
                </span>
                <div className="flex gap-1.5">
                  {DIAGNOSTIC_QUESTIONS.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === currentStep
                          ? 'w-8 bg-amber-500'
                          : i < currentStep
                          ? 'w-4 bg-emerald-500'
                          : 'w-4 bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question Text */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                  {currentQuestion.question}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {currentQuestion.description}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = answers[currentStep] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-start gap-4 cursor-pointer group ${
                        isSelected
                          ? 'border-amber-500 bg-amber-50/50 shadow-sm'
                          : 'border-slate-200 hover:border-amber-300 hover:bg-slate-50/70'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border transition-colors ${
                          isSelected
                            ? 'bg-amber-500 text-white border-amber-500'
                            : 'bg-white text-slate-500 border-slate-300 group-hover:border-amber-400'
                        }`}
                      >
                        {isSelected ? <Check className="w-3.5 h-3.5" /> : idx + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-amber-900">
                          {option.label}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                          {option.description}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-amber-600 self-center shrink-0" />
                    </button>
                  );
                })}
              </div>

              {/* Navigation Back */}
              {currentStep > 0 && (
                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-start">
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    &larr; Revenir à la question précédente
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="p-6 sm:p-10 bg-gradient-to-b from-white to-amber-50/20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase mb-4">
                <Check className="w-3.5 h-3.5" />
                <span>Diagnostic complété avec succès</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Programme Recommandé :{' '}
                <span className="text-amber-700">{recommendation.service}</span>
              </h3>

              <p className="text-slate-600 text-base mt-2">
                {recommendation.summary}
              </p>

              <div className="my-6 p-5 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">
                  Proposition de feuille de route FOLO :
                </h4>
                <ul className="space-y-2.5">
                  {recommendation.actionSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  id="diagnostic-apply-btn"
                  onClick={() => {
                    const notes = `Diagnostic FOLO complété :\n- Priorité : ${recommendation.summary}\n- Programme recommandé : ${recommendation.service}`;
                    onSelectRecommendation(recommendation.service, notes);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl shadow transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Transmettre ce diagnostic pour un devis gratuit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="diagnostic-reset-btn"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-slate-700 font-semibold py-3 px-4 rounded-xl border border-slate-300 transition-colors"
                  title="Recommencer le questionnaire"
                >
                  <RotateCcw className="w-4 h-4 text-slate-500" />
                  <span>Recommencer</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

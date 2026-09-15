import { useState, type FormEvent } from 'react';
import { X, CheckCircle, Calendar, Clock, MapPin, Send } from 'lucide-react';
import { TrainingProgram } from '../types';
import { COMPANY_INFO } from '../data/content';

interface EnrollmentModalProps {
  program: TrainingProgram | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EnrollmentModal({ program, isOpen, onClose }: EnrollmentModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [participantsCount, setParticipantsCount] = useState('1');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  if (!isOpen || !program) return null;

  const whatsappFallbackLink = COMPANY_INFO.whatsappLink;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '358405bd-7f01-4888-a021-fd4e5074ee91',
          subject: `Inscription - ${program.title}`,
          from_name: 'Site FOLO Coaching & Formation',
          training_title: program.title,
          session: program.nextSession || 'à confirmer',
          name,
          email,
          phone,
          participants_count: participantsCount,
        }),
      });

      const result = await response.json();
      setLoading(false);

      if (result.success) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg"
          aria-label="Fermer la boîte de dialogue"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded">
                Inscription / Réservation de place
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-2">
                {program.title}
              </h3>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-3">
                <span className="flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {program.duration}
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {program.format}
                </span>
                {program.nextSession && (
                  <span className="flex items-center gap-1 font-bold text-amber-700">
                    <Calendar className="w-3.5 h-3.5" />
                    {program.nextSession}
                  </span>
                )}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Nom et Prénom *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Votre nom complet"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Email Professionnel *
                </label>
                <input
                  required
                  type="email"
                  placeholder="nom@domaine.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Téléphone / WhatsApp *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+226 ..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Nombre d'inscrits
                  </label>
                  <select
                    value={participantsCount}
                    onChange={(e) => setParticipantsCount(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="1">1 participant</option>
                    <option value="2-3">2 à 3 participants</option>
                    <option value="4-10">4 à 10 participants (Groupe)</option>
                    <option value=">10">Plus de 10 (Session dédiée)</option>
                  </select>
                </div>
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
                  La transmission a échoué (connexion instable).{' '}
                  <a href={whatsappFallbackLink} target="_blank" rel="noopener noreferrer" className="font-bold underline">
                    Envoyez votre demande via WhatsApp
                  </a>{' '}
                  ou réessayez.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-3 px-5 rounded-xl shadow transition-colors cursor-pointer text-sm"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? 'Transmission en cours...' : "Confirmer ma demande d'inscription"}</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              Demande enregistrée avec succès !
            </h4>
            <p className="text-sm text-slate-600">
              Votre inscription pour <span className="font-semibold">{program.title}</span> a bien été transmise à notre équipe. Un conseiller FOLO vous recontactera pour les détails logistiques.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 bg-slate-900 text-white font-semibold text-xs px-5 py-2.5 rounded-xl"
            >
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  return (
    <footer id="site-footer" className="bg-slate-950 text-slate-400 text-sm">
      {/* Top CTA band */}
      <div className="border-b border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Prêt à faire passer votre équipe à la vitesse supérieure ?
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Contactez nos coachs pour un diagnostic initial sans aucun engagement.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onScrollTo('contact-section')}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl transition-colors cursor-pointer text-sm shadow-md"
            >
              Prendre Contact
            </button>
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-4 py-3 rounded-xl transition-colors flex items-center gap-2 text-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-base">
                F
              </div>
              <span className="font-extrabold text-lg text-white font-['Outfit']">
                FOLO <span className="text-xs font-normal text-amber-400">({COMPANY_INFO.nativeName})</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Cabinet spécialisé dans le coaching professionnel d'équipe, le leadership agile,
              les formations opérationnelles et le mentorat des dirigeants d'entreprises.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Conformité & Éthique Professionnelle</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onScrollTo('hero-section')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('services-section')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Nos Pôles d'Expertise
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('methodology-section')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Démarche & Méthodologie
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('formations-section')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Catalogue des Formations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('diagnostic-section')}
                  className="hover:text-amber-400 transition-colors text-amber-400 font-semibold"
                >
                  Diagnostic Express
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollTo('testimonials-section')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Témoignages & Résultats
                </button>
              </li>
            </ul>
          </div>

          {/* Expertises */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Pôles d'Intervention
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>Coaching d'Équipe & Cohésion</li>
              <li>Leadership Opérationnel & Agile</li>
              <li>Formations Pratiques & Soft Skills</li>
              <li>Mentorat & Gouvernance PME</li>
              <li>Séminaires Résidentiels de Direction</li>
              <li>Audit de Climat Social & d'Exécution</li>
            </ul>
          </div>

          {/* Direct Coords */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Coordonnées
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-slate-500">
                Zone d'intervention : Bobo-Dioulasso, Ouagadougou, et mobilité dans toute l'Afrique de l'Ouest.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span>Bobo-Dioulasso, Burkina Faso</span>
            <span>&bull;</span>
            <span>Site officiel Folo Coaching</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

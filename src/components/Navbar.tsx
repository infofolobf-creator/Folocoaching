import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onOpenQuote: (defaultService?: string) => void;
  onScrollTo: (elementId: string) => void;
}

export default function Navbar({ onOpenQuote, onScrollTo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onScrollTo(id);
  };

  return (
    <header id="site-header" className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top emergency / quick contact bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[13px]">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Cabinet Conseil & Coaching Professionnel
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300">
              Bobo-Dioulasso, Burkina Faso
            </span>
          </div>

          <div className="flex items-center gap-4 text-[13px]">
            <a
              id="header-phone-link"
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold">{COMPANY_INFO.phone}</span>
            </a>
            <a
              id="header-whatsapp-link"
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        id="main-navigation"
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('hero-section')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              F
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 font-['Outfit']">
                  FOLO
                </span>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest px-1.5 py-0.5 rounded bg-amber-50 border border-amber-200/60">
                  {COMPANY_INFO.nativeName}
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                Coaching & Formation
              </p>
            </div>
          </button>

          {/* Desktop Menu Links */}
          <div className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-slate-700">
            <button
              id="nav-link-services"
              onClick={() => handleNavClick('services-section')}
              className="hover:text-amber-600 transition-colors cursor-pointer py-1"
            >
              Nos Pôles d'Expertise
            </button>
            <button
              id="nav-link-methodology"
              onClick={() => handleNavClick('methodology-section')}
              className="hover:text-amber-600 transition-colors cursor-pointer py-1"
            >
              Notre Démarche
            </button>
            <button
              id="nav-link-formations"
              onClick={() => handleNavClick('formations-section')}
              className="hover:text-amber-600 transition-colors cursor-pointer py-1"
            >
              Catalogue Formations
            </button>
            <button
              id="nav-link-diagnostic"
              onClick={() => handleNavClick('diagnostic-section')}
              className="flex items-center gap-1.5 text-amber-700 bg-amber-50/80 hover:bg-amber-100/80 px-3 py-1 rounded-full transition-colors cursor-pointer font-semibold border border-amber-200/70"
            >
              Diagnostic Express
            </button>
            <button
              id="nav-link-testimonials"
              onClick={() => handleNavClick('testimonials-section')}
              className="hover:text-amber-600 transition-colors cursor-pointer py-1"
            >
              Témoignages
            </button>
            <button
              id="nav-link-contact"
              onClick={() => handleNavClick('contact-section')}
              className="hover:text-amber-600 transition-colors cursor-pointer py-1"
            >
              Contact
            </button>
          </div>

          {/* Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="btn-nav-request-quote"
              onClick={() => onOpenQuote()}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Demander un devis</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            id="btn-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Ouvrir le menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-navigation-dropdown" className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-2 text-base font-medium text-slate-800">
              <button
                id="mobile-nav-services"
                onClick={() => handleNavClick('services-section')}
                className="text-left px-3 py-2 rounded-md hover:bg-slate-100"
              >
                Nos Pôles d'Expertise
              </button>
              <button
                id="mobile-nav-methodology"
                onClick={() => handleNavClick('methodology-section')}
                className="text-left px-3 py-2 rounded-md hover:bg-slate-100"
              >
                Notre Démarche
              </button>
              <button
                id="mobile-nav-formations"
                onClick={() => handleNavClick('formations-section')}
                className="text-left px-3 py-2 rounded-md hover:bg-slate-100"
              >
                Catalogue Formations
              </button>
              <button
                id="mobile-nav-diagnostic"
                onClick={() => handleNavClick('diagnostic-section')}
                className="text-left px-3 py-2 rounded-md bg-amber-50 text-amber-800 font-semibold"
              >
                Diagnostic Express Gratuit
              </button>
              <button
                id="mobile-nav-testimonials"
                onClick={() => handleNavClick('testimonials-section')}
                className="text-left px-3 py-2 rounded-md hover:bg-slate-100"
              >
                Témoignages & Résultats
              </button>
              <button
                id="mobile-nav-contact"
                onClick={() => handleNavClick('contact-section')}
                className="text-left px-3 py-2 rounded-md hover:bg-slate-100"
              >
                Nous contacter
              </button>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                id="mobile-btn-quote"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full text-center bg-slate-900 text-white font-semibold py-3 px-4 rounded-lg shadow"
              >
                Demander un devis sur-mesure
              </button>
              <a
                id="mobile-btn-whatsapp"
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 text-center bg-emerald-600 text-white font-semibold py-2.5 px-4 rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Échanger par WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

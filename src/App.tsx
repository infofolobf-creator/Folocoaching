import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DiagnosticQuiz from './components/DiagnosticQuiz';
import ServicesSection from './components/ServicesSection';
import MethodologySection from './components/MethodologySection';
import TrainingCatalog from './components/TrainingCatalog';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import EnrollmentModal from './components/EnrollmentModal';
import Footer from './components/Footer';
import { COMPANY_INFO } from './data/content';
import { TrainingProgram } from './types';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('');
  const [quoteNotes, setQuoteNotes] = useState<string>('');
  const [selectedProgramForEnrollment, setSelectedProgramForEnrollment] = useState<TrainingProgram | null>(null);
  const [isEnrollmentModalOpen, setIsEnrollmentModalOpen] = useState<boolean>(false);

  const handleScrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuote = (defaultService?: string) => {
    if (defaultService) {
      setSelectedServiceForQuote(defaultService);
    }
    handleScrollTo('contact-section');
  };

  const handleDiagnosticRecommendation = (serviceName: string, notes: string) => {
    setSelectedServiceForQuote(serviceName);
    setQuoteNotes(notes);
    handleScrollTo('contact-section');
  };

  const handleRegisterTraining = (program: TrainingProgram) => {
    setSelectedProgramForEnrollment(program);
    setIsEnrollmentModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-slate-800 selection:bg-amber-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenQuote={handleOpenQuote}
        onScrollTo={handleScrollTo}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenQuote={handleOpenQuote}
          onScrollTo={handleScrollTo}
        />

        <DiagnosticQuiz
          onSelectRecommendation={handleDiagnosticRecommendation}
        />

        <ServicesSection
          onSelectService={(serviceTitle) => handleOpenQuote(serviceTitle)}
        />

        <MethodologySection />

        <TrainingCatalog
          onRegisterTraining={handleRegisterTraining}
        />

        <TestimonialsSection />

        <ContactSection
          key={`${selectedServiceForQuote}-${quoteNotes}`}
          prefilledService={selectedServiceForQuote}
          prefilledNotes={quoteNotes}
        />
      </main>

      {/* Footer */}
      <Footer onScrollTo={handleScrollTo} />

      {/* Enrollment Modal */}
      <EnrollmentModal
        program={selectedProgramForEnrollment}
        isOpen={isEnrollmentModalOpen}
        onClose={() => {
          setIsEnrollmentModalOpen(false);
          setSelectedProgramForEnrollment(null);
        }}
      />

      {/* Persistent Floating Quick Action Bar */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end">
        <a
          id="floating-whatsapp-btn"
          href={COMPANY_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-full shadow-lg shadow-emerald-600/30 hover:shadow-xl transition-all duration-200 hover:scale-105"
          title="Échanger directement avec nos conseillers sur WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">WhatsApp Direct</span>
        </a>

        <a
          id="floating-phone-btn"
          href={`tel:${COMPANY_INFO.phoneClean}`}
          className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-full shadow-lg shadow-slate-900/30 hover:shadow-xl transition-all duration-200 hover:scale-105"
          title="Appel direct"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span className="hidden sm:inline">{COMPANY_INFO.phone}</span>
        </a>
      </div>
    </div>
  );
}

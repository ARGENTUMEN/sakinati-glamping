import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { StatusBanner } from './components/ui/StatusBanner';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Countdown } from './components/sections/Countdown';
import { Editorial } from './components/sections/Editorial';
import { Domes } from './components/sections/Domes';
import { Spa } from './components/sections/Spa';
import { Experiences } from './components/sections/Experiences';
import { Gastronomy } from './components/sections/Gastronomy';
import { Events } from './components/sections/Events';
import { BookingChannels } from './components/sections/BookingChannels';
import { Footer } from './components/layout/Footer';
import { PreBookingModal } from './components/booking/PreBookingModal';
import { TimeOfDayOverlay, FloatingLeaves } from './components/effects/Atmosphere';
import { LoadingScreen } from './components/effects/LoadingScreen';
import { CustomCursor } from './components/effects/CustomCursor';
import { GrainTexture } from './components/effects/GrainTexture';
import { Toaster } from 'sonner';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDome, setSelectedDome] = useState<string | undefined>(undefined);

  const handleOpenBooking = (domeName?: string) => {
    if (typeof domeName === 'string') {
      setSelectedDome(domeName);
    } else {
      setSelectedDome(undefined);
    }
    setIsBookingOpen(true);
  };

  return (
    <LanguageProvider>
      <LoadingScreen />
      <CustomCursor />
      <GrainTexture />
      <div className="min-h-screen bg-[#FDFCF8] font-sans text-stone-900 selection:bg-[#D4AF37] selection:text-white relative">
        <StatusBanner />
        <TimeOfDayOverlay />
        <FloatingLeaves />
        <Header onOpenBooking={() => handleOpenBooking()} />
        
        <main>
          <Hero onOpenBooking={() => handleOpenBooking()} />
          <Countdown />
          <Editorial />
          <Domes onOpenBooking={handleOpenBooking} />
          <Spa onOpenBooking={() => handleOpenBooking("Spa Priority")} />
          <Experiences onOpenBooking={() => handleOpenBooking("Experiences")} />
          <Gastronomy onOpenBooking={() => handleOpenBooking("Gastronomy")} />
          <Events onOpenBooking={() => handleOpenBooking("Events")} />
          <BookingChannels onOpenBooking={() => handleOpenBooking()} />
        </main>

        <Footer />
        
        <PreBookingModal 
          isOpen={isBookingOpen} 
          onClose={() => setIsBookingOpen(false)} 
          initialDome={selectedDome}
        />
        <Toaster position="top-center" />
      </div>
    </LanguageProvider>
  );
}

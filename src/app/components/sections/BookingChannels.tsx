import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

interface BookingChannelsProps {
  onOpenBooking: () => void;
}

export const BookingChannels = ({ onOpenBooking }: BookingChannelsProps) => {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-20 border-t border-stone-100">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-10">
          {t.booking.channelsTitle}
        </h3>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 opacity-70">
          {/* Direct */}
          <div className="flex flex-col items-center gap-2 group cursor-pointer" onClick={onOpenBooking}>
            <div className="text-xl font-serif text-[#2C2C2C] group-hover:text-[#556B2F] transition-colors">Sakinati Direct</div>
            <Badge variant="outline" className="text-[#556B2F] border-[#556B2F] text-[10px] rounded-full px-2">Best Rate</Badge>
          </div>

          {/* Airbnb */}
          <div className="flex flex-col items-center gap-2 opacity-50">
            <div className="text-xl font-bold text-[#FF5A5F]">airbnb</div>
            <span className="text-[10px] uppercase tracking-wider text-stone-400">{t.booking.comingSoon}</span>
          </div>

          {/* Booking */}
          <div className="flex flex-col items-center gap-2 opacity-50">
            <div className="text-xl font-bold text-[#003580]">Booking.com</div>
            <span className="text-[10px] uppercase tracking-wider text-stone-400">{t.booking.comingSoon}</span>
          </div>
        </div>

        <div className="mt-12">
            <Button 
                onClick={onOpenBooking}
                className="bg-[#556B2F] hover:bg-[#435425] text-white rounded-none px-10 py-4 uppercase tracking-widest text-xs"
            >
                {t.hero.ctaPrimary}
            </Button>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ChevronRight, Loader2 } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

interface PreBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDome?: string;
}

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  guests: z.string(),
  experience: z.string(),
  dates: z.string().optional(),
  type: z.enum(["waitlist", "prebook", "notify"]),
});

type FormData = z.infer<typeof formSchema>;

export const PreBookingModal = ({ isOpen, onClose, initialDome }: PreBookingModalProps) => {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, control, handleSubmit, trigger, formState: { errors }, watch } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      guests: "2",
      experience: "relax",
      type: "waitlist"
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success(t.booking.successTitle);
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4 py-4"
          >
            <div className="space-y-2">
              <Label htmlFor="name">{t.booking.nameLabel}</Label>
              <Input id="name" {...register("name")} placeholder="John Doe" className="rounded-none border-stone-200 focus:border-[#C5A059] focus:ring-[#C5A059]" />
              {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t.booking.emailLabel}</Label>
              <Input id="email" type="email" {...register("email")} placeholder="john@example.com" className="rounded-none border-stone-200 focus:border-[#C5A059] focus:ring-[#C5A059]" />
              {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4 py-4"
          >
            <div className="space-y-2">
              <Label>{t.booking.guestsLabel}</Label>
              <Controller
                control={control}
                name="guests"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="rounded-none border-stone-200">
                      <SelectValue placeholder="Select guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4+">4+ Guests</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div className="space-y-2">
              <Label>{t.booking.experienceLabel}</Label>
               <Controller
                control={control}
                name="experience"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="rounded-none border-stone-200">
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relax">Relax & Spa</SelectItem>
                      <SelectItem value="adventure">Adventure & Hiking</SelectItem>
                      <SelectItem value="romantic">Romantic Getaway</SelectItem>
                      <SelectItem value="astronomy">Astronomy & Night</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
             <div className="space-y-2">
              <Label>{t.booking.datesLabel} (Optional)</Label>
              <Input {...register("dates")} placeholder="Ex: July 2026" className="rounded-none border-stone-200" />
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6 py-4"
          >
             <Controller
                control={control}
                name="type"
                render={({ field }) => (
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="space-y-3">
                        <div className="flex items-center space-x-2 border border-stone-200 p-4 rounded-none hover:border-[#556B2F] transition-colors cursor-pointer">
                            <RadioGroupItem value="waitlist" id="r1" className="text-[#556B2F]" />
                            <Label htmlFor="r1" className="cursor-pointer grow font-normal">{t.booking.waitlistOption}</Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-stone-200 p-4 rounded-none opacity-60 cursor-not-allowed">
                            <RadioGroupItem value="prebook" id="r2" disabled />
                            <Label htmlFor="r2" className="grow font-normal text-stone-400">{t.booking.prebookOption}</Label>
                        </div>
                        <div className="flex items-center space-x-2 border border-stone-200 p-4 rounded-none hover:border-[#556B2F] transition-colors cursor-pointer">
                            <RadioGroupItem value="notify" id="r3" className="text-[#556B2F]" />
                            <Label htmlFor="r3" className="cursor-pointer grow font-normal">{t.booking.notifyOption}</Label>
                        </div>
                    </RadioGroup>
                )}
             />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-[#FDFCF8] rounded-none border-none">
        {isSuccess ? (
             <div className="p-12 flex flex-col items-center text-center space-y-6">
                <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-[#556B2F]/10 rounded-full flex items-center justify-center text-[#556B2F]"
                >
                    <CheckCircle2 className="w-10 h-10" />
                </motion.div>
                <h3 className="font-serif text-3xl text-[#2C2C2C]">{t.booking.successTitle}</h3>
                <p className="text-stone-500">{t.booking.successMessage}</p>
                <Button onClick={onClose} className="bg-[#2C2C2C] text-white rounded-none px-8 py-2 mt-4">
                    Close
                </Button>
            </div>
        ) : (
            <>
                <div className="p-6 md:p-8 bg-[#556B2F] text-white">
                    <DialogHeader>
                        <DialogTitle className="font-serif text-2xl tracking-wide">{t.booking.title}</DialogTitle>
                        <DialogDescription className="text-white/80">
                            {initialDome ? `Selected: ${initialDome}` : t.booking.subtitle}
                        </DialogDescription>
                    </DialogHeader>
                    {/* Progress */}
                    <div className="flex items-center space-x-2 mt-6">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className={`h-1 flex-1 transition-colors ${step >= s ? 'bg-[#C5A059]' : 'bg-white/20'}`} />
                        ))}
                    </div>
                </div>

                <div className="p-6 md:p-8">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <AnimatePresence mode="wait">
                            {renderStep()}
                        </AnimatePresence>

                        <div className="flex justify-between pt-6 mt-4 border-t border-stone-100">
                            {step > 1 ? (
                                <Button type="button" variant="ghost" onClick={prevStep} className="text-stone-500 hover:text-stone-800">
                                    Back
                                </Button>
                            ) : <div></div>}

                            {step < 3 ? (
                                <Button 
                                    type="button" 
                                    onClick={async () => {
                                        const isValid = await triggerStepValidation(step);
                                        if(isValid) nextStep();
                                    }} 
                                    className="bg-[#2C2C2C] text-white rounded-none"
                                >
                                    Next <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                            ) : (
                                <Button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="bg-[#C5A059] hover:bg-[#b08d48] text-white rounded-none w-full md:w-auto"
                                >
                                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                                    {t.booking.submit}
                                </Button>
                            )}
                        </div>
                    </form>
                </div>
            </>
        )}
      </DialogContent>
    </Dialog>
  );

  // Helper to validate current step fields
  async function triggerStepValidation(currentStep: number) {
      if (currentStep === 1) return await trigger(["name", "email"]);
      if (currentStep === 2) return await trigger(["guests", "experience", "dates"]);
      return true; 
  }
};

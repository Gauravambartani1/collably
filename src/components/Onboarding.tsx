import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WelcomeStep } from "./onboarding/WelcomeStep";
import { VibeStep } from "./onboarding/VibeStep";
import { BasicsStep } from "./onboarding/BasicsStep";
import { StatsStep } from "./onboarding/StatsStep";
import { CollabOptionsStep } from "./onboarding/CollabOptionsStep";
import { PreviewStep } from "./onboarding/PreviewStep";
import { SuccessStep } from "./onboarding/SuccessStep";
import { ProgressBar } from "./onboarding/ProgressBar";

export interface OnboardingData {
  name: string;
  handle: string;
  socialLinks: {
    instagram: string;
    tiktok: string;
  };
  tagline: string;
  vibe: string;
  stats: {
    followers: string;
    engagement: string;
    platform: string;
  };
  collabOptions: string[];
}

interface OnboardingProps {
  onComplete: (data: OnboardingData) => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<OnboardingData>({
    name: "",
    handle: "",
    socialLinks: {
      instagram: "",
      tiktok: ""
    },
    tagline: "",
    vibe: "",
    stats: {
      followers: "",
      engagement: "",
      platform: ""
    },
    collabOptions: []
  });

  const totalSteps = 7;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  // Auto-save data to localStorage
  useEffect(() => {
    localStorage.setItem('collably-onboarding', JSON.stringify(data));
  }, [data]);

  // Load saved data on mount
  useEffect(() => {
    const saved = localStorage.getItem('collably-onboarding');
    if (saved) {
      try {
        setData(JSON.parse(saved));
      } catch (e) {
        console.log('Failed to parse saved onboarding data');
      }
    }
  }, []);

  const updateData = (newData: Partial<OnboardingData>) => {
    setData(prev => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const steps = [
    <WelcomeStep key="welcome" onNext={nextStep} />,
    <VibeStep key="vibe" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    <BasicsStep key="basics" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    <StatsStep key="stats" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    <CollabOptionsStep key="collab" data={data} updateData={updateData} onNext={nextStep} onBack={prevStep} />,
    <PreviewStep key="preview" data={data} onNext={nextStep} onBack={prevStep} />,
    <SuccessStep key="success" data={data} onViewProfile={() => onComplete(data)} />
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Progress Bar - Only show after welcome step */}
      {currentStep > 0 && (
        <div className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-orange-100">
          <ProgressBar current={currentStep} total={totalSteps} />
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-lg mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {steps[currentStep]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
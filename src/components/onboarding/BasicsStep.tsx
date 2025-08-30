import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowLeft, User, AtSign, Instagram, Music, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { OnboardingData } from "../Onboarding";

interface BasicsStepProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function BasicsStep({ data, updateData, onNext, onBack }: BasicsStepProps) {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (field: string, value: string) => {
    if (field === 'instagram') {
      updateData({ socialLinks: { ...data.socialLinks, instagram: value } });
    } else if (field === 'tiktok') {
      updateData({ socialLinks: { ...data.socialLinks, tiktok: value } });
    } else {
      updateData({ [field]: value });
    }
  };

  const canProceed = data.name.trim() !== "" && data.handle.trim() !== "";

  const fields = [
    {
      id: 'name',
      icon: User,
      label: "What should brands call you?",
      placeholder: "Your name or brand name",
      value: data.name,
      required: true,
      emoji: "👋"
    },
    {
      id: 'handle',
      icon: AtSign,
      label: "Your unique handle",
      placeholder: "yourhandle (no @ needed)",
      value: data.handle,
      required: true,
      emoji: "✨"
    },
    {
      id: 'instagram',
      icon: Instagram,
      label: "Instagram (where you shine most?)",
      placeholder: "instagram.com/yourhandle",
      value: data.socialLinks.instagram,
      required: false,
      emoji: "📸"
    },
    {
      id: 'tiktok',
      icon: Music,
      label: "TikTok (optional)",
      placeholder: "tiktok.com/@yourhandle",
      value: data.socialLinks.tiktok,
      required: false,
      emoji: "🎵"
    },
    {
      id: 'tagline',
      icon: Sparkles,
      label: "I create magic by...",
      placeholder: "Describe your vibe in one line ✨",
      value: data.tagline,
      required: false,
      emoji: "💫"
    }
  ];

  return (
    <div className="space-y-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Tell us about yourself! 🌟
        </h2>
        <p className="text-gray-600 text-lg">
          Let's make your page uniquely you
        </p>
      </motion.div>

      {/* Form Fields */}
      <motion.div 
        className="space-y-6 max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {fields.map((field, index) => {
          const IconComponent = field.icon;
          const isFocused = focusedField === field.id;
          const hasValue = field.value.trim() !== "";
          
          return (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="space-y-2"
            >
              {/* Label */}
              <div className="flex items-center space-x-2">
                <span className="text-lg">{field.emoji}</span>
                <label className="font-medium text-gray-900">
                  {field.label}
                  {!field.required && (
                    <span className="text-sm text-gray-500 ml-1">(optional)</span>
                  )}
                </label>
              </div>

              {/* Input Container */}
              <motion.div
                className={`relative bg-white rounded-2xl border-2 transition-all duration-300 ${
                  isFocused
                    ? 'border-orange-300 shadow-lg ring-4 ring-orange-100'
                    : hasValue
                    ? 'border-orange-200 shadow-md'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center p-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 transition-all duration-300 ${
                    isFocused || hasValue
                      ? 'bg-orange-100 text-orange-600'
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  <Input
                    value={field.value}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    onFocus={() => setFocusedField(field.id)}
                    onBlur={() => setFocusedField(null)}
                    placeholder={field.placeholder}
                    className="border-0 bg-transparent text-lg placeholder:text-gray-400 focus:ring-0 p-0"
                  />
                </div>

                {/* Success indicator */}
                {hasValue && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </motion.div>
                )}
              </motion.div>

              {/* Helper text */}
              {field.id === 'handle' && (
                <p className="text-xs text-gray-500 ml-4">
                  This will be your page URL: collably.co/{data.handle || 'yourhandle'}
                </p>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Navigation */}
      <motion.div 
        className="flex items-center justify-between pt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-gray-600 hover:text-gray-900 font-medium group"
        >
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </Button>

        <Button
          onClick={onNext}
          disabled={!canProceed}
          className={`px-8 py-3 rounded-full font-bold transition-all duration-300 group ${
            canProceed
              ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:scale-105'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Continue
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>

      {/* Progress Encouragement */}
      {canProceed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <p className="text-orange-600 font-medium">
            Looking great! 🔥 You're building something amazing
          </p>
        </motion.div>
      )}
    </div>
  );
}
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowLeft, User, AtSign, Instagram, Music, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
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
      emoji: "✨"
    },
    {
      id: 'handle',
      icon: AtSign,
      label: "Your unique handle",
      placeholder: "yourhandle (no @ needed)",
      value: data.handle,
      required: true,
      emoji: "🎯"
    },
    {
      id: 'instagram',
      icon: Instagram,
      label: "Instagram profile",
      placeholder: "instagram.com/yourhandle",
      value: data.socialLinks.instagram,
      required: false,
      emoji: "📸"
    },
    {
      id: 'tiktok',
      icon: Music,
      label: "TikTok profile",
      placeholder: "tiktok.com/@yourhandle",
      value: data.socialLinks.tiktok,
      required: false,
      emoji: "🎵"
    }
  ];

  return (
    <div className="space-y-8 py-8 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Let's get you set up 🚀
        </h2>
        <p className="text-gray-300 text-lg max-w-lg mx-auto">
          Tell us the basics so brands can find and connect with you
        </p>
      </motion.div>

      {/* Form Fields */}
      <motion.div 
        className="space-y-6 max-w-lg mx-auto"
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
              className="space-y-3"
            >
              {/* Label */}
              <div className="flex items-center space-x-2">
                <span className="text-lg">{field.emoji}</span>
                <label className="font-medium text-white">
                  {field.label}
                  {!field.required && (
                    <span className="text-sm text-gray-400 ml-2">(optional)</span>
                  )}
                </label>
              </div>

              {/* Input Container */}
              <motion.div
                className={`relative bg-gray-900 rounded-xl border-2 transition-all duration-300 ${
                  isFocused
                    ? 'border-purple-500 shadow-lg shadow-purple-500/20'
                    : hasValue
                    ? 'border-gray-700 shadow-md'
                    : 'border-gray-800 hover:border-gray-700'
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center p-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 transition-all duration-300 ${
                    isFocused || hasValue
                      ? 'bg-gradient-to-r from-purple-600 to-teal-600 text-white'
                      : 'bg-gray-800 text-gray-400'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  <Input
                    value={field.value}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    onFocus={() => setFocusedField(field.id)}
                    onBlur={() => setFocusedField(null)}
                    placeholder={field.placeholder}
                    className="border-0 bg-transparent text-white text-lg placeholder:text-gray-500 focus:ring-0 p-0"
                  />
                </div>

                {/* Success indicator */}
                {hasValue && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </motion.div>
                )}
              </motion.div>

              {/* Helper text */}
              {field.id === 'handle' && (
                <p className="text-xs text-gray-400 ml-4">
                  Your page will be live at: collably.co/{data.handle || 'yourhandle'}
                </p>
              )}
            </motion.div>
          );
        })}

        {/* Bio Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="space-y-3"
        >
          <div className="flex items-center space-x-2">
            <span className="text-lg">💫</span>
            <label className="font-medium text-white">
              Tell your story
              <span className="text-sm text-gray-400 ml-2">(optional)</span>
            </label>
          </div>

          <motion.div
            className={`relative bg-gray-900 rounded-xl border-2 transition-all duration-300 ${
              focusedField === 'bio'
                ? 'border-purple-500 shadow-lg shadow-purple-500/20'
                : data.bio.trim() !== ""
                ? 'border-gray-700 shadow-md'
                : 'border-gray-800 hover:border-gray-700'
            }`}
            whileHover={{ scale: 1.01 }}
          >
            <div className="p-4">
              <Textarea
                value={data.bio}
                onChange={(e) => updateData({ bio: e.target.value })}
                onFocus={() => setFocusedField('bio')}
                onBlur={() => setFocusedField(null)}
                placeholder="What makes you unique? What do you love creating? Let brands know what you're all about..."
                className="border-0 bg-transparent text-white placeholder:text-gray-500 focus:ring-0 resize-none"
                rows={3}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Navigation */}
      <motion.div 
        className="flex items-center justify-between pt-8 max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-gray-400 hover:text-white font-medium group"
        >
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </Button>

        <Button
          onClick={onNext}
          disabled={!canProceed}
          className={`px-8 py-3 rounded-full font-medium transition-all duration-300 group ${
            canProceed
              ? 'bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white shadow-lg hover:scale-105'
              : 'bg-gray-800 text-gray-500 cursor-not-allowed'
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
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400 font-medium">
            Perfect! Your page is taking shape 🔥
          </p>
        </motion.div>
      )}
    </div>
  );
}
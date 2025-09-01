import { motion } from "motion/react";
import { ArrowRight, ArrowLeft, Palette, Dumbbell, Coffee, Gamepad2, Laptop, Sparkles, UtensilsCrossed, Camera, Music, Plane } from "lucide-react";
import { Button } from "../ui/button";
import { OnboardingData } from "../Onboarding";

interface VibeStepProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function VibeStep({ data, updateData, onNext, onBack }: VibeStepProps) {
  const vibes = [
    {
      id: "fashion",
      name: "Fashion",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      emoji: "👗",
      description: "Style & trends"
    },
    {
      id: "fitness",
      name: "Fitness",
      icon: Dumbbell,
      color: "from-green-500 to-emerald-500",
      emoji: "💪",
      description: "Health & wellness"
    },
    {
      id: "lifestyle",
      name: "Lifestyle",
      icon: Coffee,
      color: "from-amber-500 to-orange-500",
      emoji: "✨",
      description: "Daily inspiration"
    },
    {
      id: "tech",
      name: "Tech",
      icon: Laptop,
      color: "from-blue-500 to-indigo-500",
      emoji: "💻",
      description: "Innovation & reviews"
    },
    {
      id: "gaming",
      name: "Gaming",
      icon: Gamepad2,
      color: "from-purple-500 to-violet-500",
      emoji: "🎮",
      description: "Gaming & esports"
    },
    {
      id: "beauty",
      name: "Beauty",
      icon: Sparkles,
      color: "from-pink-500 to-purple-500",
      emoji: "💄",
      description: "Makeup & skincare"
    },
    {
      id: "food",
      name: "Food",
      icon: UtensilsCrossed,
      color: "from-red-500 to-orange-500",
      emoji: "🍕",
      description: "Recipes & dining"
    },
    {
      id: "travel",
      name: "Travel",
      icon: Plane,
      color: "from-cyan-500 to-blue-500",
      emoji: "✈️",
      description: "Adventure & explore"
    },
    {
      id: "photography",
      name: "Photography",
      icon: Camera,
      color: "from-gray-500 to-slate-600",
      emoji: "📸",
      description: "Visual storytelling"
    },
    {
      id: "music",
      name: "Music",
      icon: Music,
      color: "from-purple-500 to-pink-500",
      emoji: "🎵",
      description: "Beats & melodies"
    }
  ];

  const handleVibeSelect = (vibeId: string) => {
    updateData({ vibe: vibeId });
  };

  const canProceed = data.vibe !== "";

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
          What's your vibe? ✨
        </h2>
        <p className="text-gray-300 text-lg max-w-lg mx-auto">
          Choose your main content category so we can customize your page perfectly
        </p>
      </motion.div>

      {/* Vibe Grid */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {vibes.map((vibe, index) => {
          const IconComponent = vibe.icon;
          const isSelected = data.vibe === vibe.id;
          
          return (
            <motion.button
              key={vibe.id}
              onClick={() => handleVibeSelect(vibe.id)}
              className={`relative p-6 rounded-xl border-2 transition-all duration-300 ${
                isSelected
                  ? 'border-purple-500 bg-gray-800 shadow-lg shadow-purple-500/20 scale-105'
                  : 'border-gray-800 bg-gray-900 hover:border-gray-700 hover:bg-gray-800'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: isSelected ? 1.05 : 1 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ scale: isSelected ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Selection Indicator */}
              {isSelected && (
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.6 }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </motion.div>
              )}

              {/* Content */}
              <div className="text-center space-y-3">
                <div className="text-2xl">{vibe.emoji}</div>
                <div className={`w-12 h-12 mx-auto rounded-lg bg-gradient-to-br ${vibe.color} flex items-center justify-center shadow-md ${
                  isSelected ? 'shadow-lg' : ''
                }`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{vibe.name}</h3>
                  <p className="text-xs text-gray-400 mt-1">{vibe.description}</p>
                </div>
              </div>

              {/* Animated Background */}
              {isSelected && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-teal-900/20 rounded-xl -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Navigation */}
      <motion.div 
        className="flex items-center justify-between pt-8 max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
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

      {/* Encouragement */}
      {canProceed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400 font-medium">
            Perfect! This is going to look incredible 🔥
          </p>
        </motion.div>
      )}
    </div>
  );
}
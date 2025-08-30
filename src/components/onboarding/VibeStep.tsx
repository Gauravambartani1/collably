import { motion } from "motion/react";
import { ArrowRight, ArrowLeft, Palette, Dumbbell, Coffee, Gamepad2, Laptop, Sparkles, UtensilsCrossed } from "lucide-react";
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
      color: "from-pink-400 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      emoji: "👗"
    },
    {
      id: "fitness",
      name: "Fitness",
      icon: Dumbbell,
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      emoji: "💪"
    },
    {
      id: "lifestyle",
      name: "Lifestyle",
      icon: Coffee,
      color: "from-amber-400 to-orange-500",
      bgColor: "from-amber-50 to-orange-50",
      emoji: "✨"
    },
    {
      id: "tech",
      name: "Tech",
      icon: Laptop,
      color: "from-blue-400 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      emoji: "💻"
    },
    {
      id: "gaming",
      name: "Gaming",
      icon: Gamepad2,
      color: "from-purple-400 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
      emoji: "🎮"
    },
    {
      id: "beauty",
      name: "Beauty",
      icon: Sparkles,
      color: "from-pink-400 to-purple-500",
      bgColor: "from-pink-50 to-purple-50",
      emoji: "💄"
    },
    {
      id: "food",
      name: "Food",
      icon: UtensilsCrossed,
      color: "from-red-400 to-orange-500",
      bgColor: "from-red-50 to-orange-50",
      emoji: "🍕"
    }
  ];

  const handleVibeSelect = (vibeId: string) => {
    updateData({ vibe: vibeId });
  };

  const canProceed = data.vibe !== "";

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
          What's your world? 🌟
        </h2>
        <p className="text-gray-600 text-lg">
          This helps us make your page fit your vibe perfectly
        </p>
      </motion.div>

      {/* Vibe Grid */}
      <motion.div 
        className="grid grid-cols-2 gap-4 max-w-md mx-auto"
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
              className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                isSelected
                  ? `border-orange-300 bg-gradient-to-br ${vibe.bgColor} shadow-lg scale-105`
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: isSelected ? 1.05 : 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: isSelected ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Selection Indicator */}
              {isSelected && (
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.6 }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </motion.div>
              )}

              {/* Content */}
              <div className="text-center space-y-3">
                <div className="text-3xl">{vibe.emoji}</div>
                <div className={`w-10 h-10 mx-auto rounded-full bg-gradient-to-br ${vibe.color} flex items-center justify-center shadow-md`}>
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">{vibe.name}</h3>
              </div>

              {/* Animated Background */}
              {isSelected && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-pink-100/50 rounded-2xl -z-10"
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

      {/* Encouragement */}
      {canProceed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <p className="text-orange-600 font-medium">
            Perfect choice! ✨ This will look amazing
          </p>
        </motion.div>
      )}
    </div>
  );
}
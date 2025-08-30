import { motion } from "motion/react";
import { ArrowRight, ArrowLeft, Video, Gift, Mic, Handshake, Camera, Users, Calendar, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import { OnboardingData } from "../Onboarding";

interface CollabOptionsStepProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function CollabOptionsStep({ data, updateData, onNext, onBack }: CollabOptionsStepProps) {
  const collabTypes = [
    {
      id: 'sponsored-posts',
      name: 'Sponsored Posts',
      icon: Camera,
      emoji: '📸',
      description: 'Create content featuring brands',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'reels-videos',
      name: 'Reels & Videos',
      icon: Video,
      emoji: '🎥',
      description: 'Short-form video content',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 'giveaways',
      name: 'Giveaways',
      icon: Gift,
      emoji: '🎁',
      description: 'Host contests and giveaways',
      color: 'from-pink-400 to-pink-600'
    },
    {
      id: 'events',
      name: 'Event Appearances',
      icon: Calendar,
      emoji: '🎤',
      description: 'Attend launches and events',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 'brand-ambassador',
      name: 'Brand Ambassador',
      icon: Handshake,
      emoji: '🤝',
      description: 'Long-term partnerships',
      color: 'from-orange-400 to-orange-600'
    },
    {
      id: 'product-reviews',
      name: 'Product Reviews',
      icon: ShoppingBag,
      emoji: '⭐',
      description: 'Honest product testimonials',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      id: 'live-sessions',
      name: 'Live Sessions',
      icon: Users,
      emoji: '📹',
      description: 'Live streams and Q&As',
      color: 'from-red-400 to-red-600'
    },
    {
      id: 'podcast-guest',
      name: 'Podcast Guest',
      icon: Mic,
      emoji: '🎙️',
      description: 'Audio content appearances',
      color: 'from-teal-400 to-teal-600'
    }
  ];

  const toggleCollabOption = (optionId: string) => {
    const currentOptions = data.collabOptions || [];
    const isSelected = currentOptions.includes(optionId);
    
    if (isSelected) {
      updateData({
        collabOptions: currentOptions.filter(id => id !== optionId)
      });
    } else {
      updateData({
        collabOptions: [...currentOptions, optionId]
      });
    }
  };

  const selectedCount = data.collabOptions?.length || 0;
  const canProceed = selectedCount > 0;

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
          What collabs excite you? ✨
        </h2>
        <p className="text-gray-600 text-lg">
          Pick all that sound fun - brands will see what you're into!
        </p>
        {selectedCount > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full"
          >
            <span className="font-medium">{selectedCount} selected</span>
            <span className="text-sm">🔥</span>
          </motion.div>
        )}
      </motion.div>

      {/* Collab Options Grid */}
      <motion.div 
        className="grid grid-cols-2 gap-4 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {collabTypes.map((collab, index) => {
          const IconComponent = collab.icon;
          const isSelected = data.collabOptions?.includes(collab.id) || false;
          
          return (
            <motion.button
              key={collab.id}
              onClick={() => toggleCollabOption(collab.id)}
              className={`relative p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                isSelected
                  ? 'border-orange-300 bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg scale-105'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: isSelected ? 1.05 : 1,
                rotate: isSelected ? [0, -1, 1, 0] : 0
              }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.4,
                rotate: { duration: 0.5 }
              }}
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
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{collab.emoji}</div>
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${collab.color} flex items-center justify-center shadow-md`}>
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">
                    {collab.name}
                  </h3>
                  <p className="text-xs text-gray-600 leading-tight">
                    {collab.description}
                  </p>
                </div>
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

      {/* Quick Select Suggestions */}
      <motion.div 
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <p className="text-sm text-gray-500">
          Quick picks based on your vibe:
        </p>
        <div className="flex justify-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              const popularOptions = ['sponsored-posts', 'reels-videos', 'giveaways'];
              updateData({ collabOptions: popularOptions });
            }}
            className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 text-xs"
          >
            Popular picks ⭐
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => updateData({ collabOptions: collabTypes.map(c => c.id) })}
            className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 text-xs"
          >
            I'm open to everything! 🌟
          </Button>
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.div 
        className="flex items-center justify-between pt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
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
            Awesome choices! 🚀 Brands are going to love working with you
          </p>
        </motion.div>
      )}
    </div>
  );
}
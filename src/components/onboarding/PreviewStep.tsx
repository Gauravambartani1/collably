import { motion } from "motion/react";
import { ArrowRight, ArrowLeft, ExternalLink, Instagram, Music, Users, TrendingUp, Badge } from "lucide-react";
import { Button } from "../ui/button";
import { OnboardingData } from "../Onboarding";

interface PreviewStepProps {
  data: OnboardingData;
  onNext: () => void;
  onBack: () => void;
}

export function PreviewStep({ data, onNext, onBack }: PreviewStepProps) {
  const getVibeColors = (vibe: string) => {
    const colors = {
      fashion: { bg: 'from-pink-100 to-rose-100', accent: 'pink-500', border: 'pink-200' },
      fitness: { bg: 'from-green-100 to-emerald-100', accent: 'green-500', border: 'green-200' },
      lifestyle: { bg: 'from-amber-100 to-orange-100', accent: 'amber-500', border: 'amber-200' },
      tech: { bg: 'from-blue-100 to-indigo-100', accent: 'blue-500', border: 'blue-200' },
      gaming: { bg: 'from-purple-100 to-violet-100', accent: 'purple-500', border: 'purple-200' },
      beauty: { bg: 'from-pink-100 to-purple-100', accent: 'pink-500', border: 'pink-200' },
      food: { bg: 'from-red-100 to-orange-100', accent: 'red-500', border: 'red-200' },
    };
    return colors[vibe as keyof typeof colors] || colors.lifestyle;
  };

  const vibeColors = getVibeColors(data.vibe);
  const selectedCollabs = data.collabOptions || [];
  
  const collabEmojis: { [key: string]: string } = {
    'sponsored-posts': '📸',
    'reels-videos': '🎥',
    'giveaways': '🎁',
    'events': '🎤',
    'brand-ambassador': '🤝',
    'product-reviews': '⭐',
    'live-sessions': '📹',
    'podcast-guest': '🎙️'
  };

  const collabNames: { [key: string]: string } = {
    'sponsored-posts': 'Sponsored Posts',
    'reels-videos': 'Reels & Videos',
    'giveaways': 'Giveaways',
    'events': 'Event Appearances',
    'brand-ambassador': 'Brand Ambassador',
    'product-reviews': 'Product Reviews',
    'live-sessions': 'Live Sessions',
    'podcast-guest': 'Podcast Guest'
  };

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
          Looks 🔥! This is what brands will see
        </h2>
        <p className="text-gray-600 text-lg">
          Your collab page is ready to go live and start attracting partnerships
        </p>
      </motion.div>

      {/* Phone Preview */}
      <motion.div 
        className="max-w-sm mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Phone Frame */}
        <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
          <div className="bg-white rounded-[2rem] overflow-hidden relative">
            
            {/* Phone Header */}
            <div className="flex items-center justify-between p-4 bg-white">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-500 font-medium">
                collably.co/{data.handle || 'yourhandle'}
              </div>
            </div>

            {/* Profile Content */}
            <div className={`bg-gradient-to-br ${vibeColors.bg} px-6 pb-6`}>
              
              {/* Avatar */}
              <div className="text-center mb-4">
                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {(data.name || 'Creator')[0].toUpperCase()}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {data.name || 'Your Name'}
                </h3>
                
                {data.tagline && (
                  <p className="text-sm text-gray-600 mb-3">
                    {data.tagline}
                  </p>
                )}

                {/* Social Links */}
                <div className="flex justify-center space-x-2 mb-4">
                  {data.socialLinks.instagram && (
                    <div className={`w-8 h-8 bg-${vibeColors.accent} rounded-full flex items-center justify-center`}>
                      <Instagram className="w-4 h-4 text-white" />
                    </div>
                  )}
                  {data.socialLinks.tiktok && (
                    <div className={`w-8 h-8 bg-${vibeColors.accent} rounded-full flex items-center justify-center`}>
                      <Music className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>

                {/* Stats */}
                {(data.stats.followers || data.stats.engagement) && (
                  <div className={`bg-white/80 backdrop-blur rounded-lg p-3 mb-4 border border-${vibeColors.border}`}>
                    <div className="flex justify-center space-x-4 text-xs text-gray-600">
                      {data.stats.followers && (
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3" />
                          <span>{data.stats.followers} followers</span>
                        </div>
                      )}
                      {data.stats.engagement && (
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>{data.stats.engagement} engagement</span>
                        </div>
                      )}
                    </div>
                    {data.stats.platform && (
                      <div className="flex items-center justify-center mt-2">
                        <Badge className="w-3 h-3 text-green-600 mr-1" />
                        <span className="text-xs text-green-600 font-medium">Verified via {data.stats.platform}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Collab Options */}
                {selectedCollabs.length > 0 && (
                  <div className={`bg-white/90 backdrop-blur rounded-lg p-4 border border-${vibeColors.border}`}>
                    <h4 className="font-medium text-gray-900 mb-3 text-sm">Available for:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedCollabs.slice(0, 4).map((collabId) => (
                        <div key={collabId} className="flex items-center space-x-2 text-xs">
                          <span>{collabEmojis[collabId]}</span>
                          <span className="text-gray-700">{collabNames[collabId]}</span>
                        </div>
                      ))}
                    </div>
                    {selectedCollabs.length > 4 && (
                      <p className="text-xs text-gray-500 mt-2">
                        +{selectedCollabs.length - 4} more options
                      </p>
                    )}
                  </div>
                )}

                {/* CTA Button */}
                <div className="mt-4">
                  <div className={`bg-${vibeColors.accent} text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg`}>
                    Send Collab Request
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-center mt-4"
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Live Preview</span>
            <ExternalLink className="w-3 h-3" />
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Summary */}
      <motion.div 
        className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h3 className="font-bold text-gray-900 mb-4 text-center">Your Page Summary:</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Name:</span>
            <span className="font-medium">{data.name || 'Not set'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Handle:</span>
            <span className="font-medium">@{data.handle || 'not-set'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Vibe:</span>
            <span className="font-medium capitalize">{data.vibe || 'Not selected'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Collab Types:</span>
            <span className="font-medium">{selectedCollabs.length} selected</span>
          </div>
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
          Back to edit
        </Button>

        <Button
          onClick={onNext}
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-4 rounded-full text-lg font-bold shadow-xl hover:scale-105 transition-all duration-300 group"
        >
          Publish My Page! 🚀
          <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </motion.div>
    </div>
  );
}
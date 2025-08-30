import { useState } from "react";
import { motion } from "motion/react";
import { Copy, ExternalLink, Instagram, Twitter, Check, Share, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { OnboardingData } from "../Onboarding";

interface SuccessStepProps {
  data: OnboardingData;
  onViewProfile: () => void;
}

export function SuccessStep({ data, onViewProfile }: SuccessStepProps) {
  const [copied, setCopied] = useState(false);
  
  const pageUrl = `collably.co/${data.handle || 'yourhandle'}`;
  
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`https://${pageUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log('Failed to copy');
    }
  };

  const shareOptions = [
    {
      name: 'Instagram Story',
      icon: Instagram,
      color: 'from-pink-500 to-purple-500',
      action: () => window.open(`https://instagram.com`, '_blank')
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'from-blue-500 to-blue-600',
      action: () => window.open(`https://twitter.com/intent/tweet?text=Check out my new collab page! ${pageUrl}`, '_blank')
    }
  ];

  return (
    <div className="text-center space-y-8 py-8">
      {/* Celebration Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
        className="relative"
      >
        <div className="text-8xl mb-4">🎉</div>
        
        {/* Confetti */}
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: 0, 
              y: 0 
            }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0, 1, 0],
              x: Math.cos(i * 60 * Math.PI / 180) * 100,
              y: Math.sin(i * 60 * Math.PI / 180) * 100,
            }}
            transition={{ 
              delay: 0.5 + i * 0.1, 
              duration: 1.5,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>

      {/* Success Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="space-y-4"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Your Collab Page is live! 🎉
        </h1>
        
        <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
          Share your link in bio & let brands come to you. No more cold DMs!
        </p>
      </motion.div>

      {/* Page URL Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="bg-gradient-to-br from-orange-50 to-pink-50 border-2 border-orange-200 rounded-2xl p-6 max-w-md mx-auto"
      >
        <div className="flex items-center justify-between space-x-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-600 mb-1">Your collab page:</p>
            <p className="font-mono text-lg font-medium text-gray-900 truncate">
              {pageUrl}
            </p>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopyLink}
              className={`transition-all duration-300 ${
                copied
                  ? 'bg-green-100 text-green-700 hover:bg-green-100'
                  : 'hover:bg-orange-100 text-orange-600'
              }`}
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open(`https://${pageUrl}`, '_blank')}
              className="hover:bg-orange-100 text-orange-600"
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Copy Link Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <Button
          onClick={handleCopyLink}
          className={`px-12 py-4 rounded-full text-lg font-bold shadow-xl transition-all duration-300 group ${
            copied
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white hover:scale-105'
          }`}
        >
          {copied ? (
            <>
              <Check className="mr-2 w-5 h-5" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Copy My Link
            </>
          )}
        </Button>
      </motion.div>

      {/* Share Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="space-y-4"
      >
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <Share className="w-4 h-4" />
          <span className="text-sm font-medium">Share the excitement:</span>
        </div>
        
        <div className="flex justify-center space-x-4">
          {shareOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <motion.button
                key={option.name}
                onClick={option.action}
                className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${option.color} text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-4 h-4" />
                <span className="text-sm">{option.name}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg max-w-md mx-auto"
      >
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Sparkles className="w-5 h-5 text-orange-500" />
          <h3 className="font-bold text-gray-900">What's Next?</h3>
        </div>
        
        <div className="space-y-3 text-sm text-left mb-6">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</div>
            <p className="text-gray-700">Add this link to your Instagram bio</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</div>
            <p className="text-gray-700">Share it in your TikTok profile</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</div>
            <p className="text-gray-700">Watch brand collab requests roll in! 🚀</p>
          </div>
        </div>

        <Button
          onClick={onViewProfile}
          variant="outline"
          className="w-full border-orange-200 text-orange-600 hover:bg-orange-50"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          View My Live Page
        </Button>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-8 w-4 h-4 bg-orange-300 rounded-full"
          animate={{ 
            y: [0, -20, 0], 
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-32 right-12 w-3 h-3 bg-pink-300 rounded-full"
          animate={{ 
            y: [0, 15, 0], 
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-16 w-5 h-5 bg-blue-300 rounded-full"
          animate={{ 
            y: [0, -25, 0], 
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </div>
    </div>
  );
}
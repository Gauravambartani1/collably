import { useState } from "react";
import { motion } from "motion/react";
import { Copy, ExternalLink, Instagram, Twitter, Check, Share, Sparkles, Star, DollarSign } from "lucide-react";
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
      name: 'Instagram',
      icon: Instagram,
      color: 'from-pink-500 to-purple-500',
      action: () => window.open(`https://instagram.com`, '_blank')
    },
    {
      name: 'Twitter',  
      icon: Twitter,
      color: 'from-blue-500 to-cyan-500',
      action: () => window.open(`https://twitter.com/intent/tweet?text=Just created my creator page on @Collably! 🚀 ${pageUrl}`, '_blank')
    }
  ];

  return (
    <div className="text-center space-y-8 py-8 px-6">
      {/* Celebration Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
        className="relative"
      >
        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-600 to-teal-600 rounded-full flex items-center justify-center mb-6">
          <Star className="w-12 h-12 text-white fill-current" />
        </div>
        
        {/* Confetti */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full"
            initial={{ 
              opacity: 0, 
              scale: 0,
              x: 0, 
              y: 0 
            }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0, 1, 0],
              x: Math.cos(i * 45 * Math.PI / 180) * 120,
              y: Math.sin(i * 45 * Math.PI / 180) * 120,
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
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          You're all set! 🎉
        </h1>
        
        <p className="text-xl text-gray-300 max-w-lg mx-auto leading-relaxed">
          Your creator page is live and ready to attract premium brand partnerships
        </p>
      </motion.div>

      {/* Page URL Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="bg-gray-900 border-2 border-gray-800 rounded-xl p-6 max-w-lg mx-auto"
      >
        <div className="flex items-center justify-between space-x-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-400 mb-2">Your creator page:</p>
            <p className="font-mono text-lg font-medium text-white truncate">
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
                  ? 'bg-green-900/50 text-green-400 hover:bg-green-900/50'
                  : 'hover:bg-gray-800 text-gray-400 hover:text-white'
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
              className="hover:bg-gray-800 text-gray-400 hover:text-white"
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
          className={`px-12 py-4 rounded-full text-lg font-medium shadow-xl transition-all duration-300 group ${
            copied
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white hover:scale-105'
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
              Copy Link
            </>
          )}
        </Button>
      </motion.div>

      {/* Earning Potential */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 border border-green-700/50 rounded-xl p-6 max-w-lg mx-auto"
      >
        <div className="flex items-center justify-center space-x-2 mb-3">
          <DollarSign className="w-5 h-5 text-green-400" />
          <h3 className="font-semibold text-green-400">Ready to earn?</h3>
        </div>
        <p className="text-gray-300 text-sm">
          Creators on Collably typically see their first brand inquiry within 1-2 weeks of sharing their page.
        </p>
      </motion.div>

      {/* Share Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="space-y-4"
      >
        <div className="flex items-center justify-center space-x-2 text-gray-400">
          <Share className="w-4 h-4" />
          <span className="text-sm font-medium">Share the news:</span>
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
        transition={{ delay: 1.3, duration: 0.6 }}
        className="bg-gray-900 rounded-xl p-6 border border-gray-800 max-w-lg mx-auto"
      >
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Sparkles className="w-5 h-5 text-purple-400" />
          <h3 className="font-semibold text-white">Next Steps</h3>
        </div>
        
        <div className="space-y-3 text-sm text-left mb-6">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-teal-600 text-white rounded-full flex items-center justify-center text-xs font-medium mt-0.5">1</div>
            <p className="text-gray-300">Replace your link-in-bio with your new Collably page</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-teal-600 text-white rounded-full flex items-center justify-center text-xs font-medium mt-0.5">2</div>
            <p className="text-gray-300">Share it across all your social platforms</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-teal-600 text-white rounded-full flex items-center justify-center text-xs font-medium mt-0.5">3</div>
            <p className="text-gray-300">Watch premium brand deals come to you! 🚀</p>
          </div>
        </div>

        <Button
          onClick={onViewProfile}
          className="w-full bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          View My Creator Page
        </Button>
      </motion.div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-8 w-4 h-4 bg-purple-600/30 rounded-full"
          animate={{ 
            y: [0, -20, 0], 
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-32 right-12 w-3 h-3 bg-teal-600/30 rounded-full"
          animate={{ 
            y: [0, 15, 0], 
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-16 w-5 h-5 bg-purple-500/30 rounded-full"
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
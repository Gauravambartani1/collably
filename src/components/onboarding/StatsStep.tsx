import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowLeft, TrendingUp, Users, Instagram, Music, Upload, Shield } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { OnboardingData } from "../Onboarding";

interface StatsStepProps {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function StatsStep({ data, updateData, onNext, onBack }: StatsStepProps) {
  const [connectMethod, setConnectMethod] = useState<'manual' | 'connect' | null>(null);

  const handleStatsChange = (field: 'followers' | 'engagement' | 'platform', value: string) => {
    updateData({
      stats: {
        ...data.stats,
        [field]: value
      }
    });
  };

  const handleSkip = () => {
    updateData({
      stats: {
        followers: "",
        engagement: "",
        platform: ""
      }
    });
    onNext();
  };

  const canProceed = true; // This step is always optional

  const platforms = [
    {
      id: 'instagram',
      name: 'Instagram',
      icon: Instagram,
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: Music,
      color: 'from-black to-gray-800'
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
          Show off your stats! 📊
        </h2>
        <p className="text-gray-600 text-lg">
          Help brands see your awesome reach (totally optional!)
        </p>
      </motion.div>

      {/* Method Selection */}
      {!connectMethod && (
        <motion.div 
          className="space-y-4 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Connect Option */}
          <motion.button
            onClick={() => setConnectMethod('connect')}
            className="w-full p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl hover:border-green-300 hover:shadow-lg transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <div className="text-left flex-1">
                <h3 className="font-bold text-gray-900 mb-1">Connect Platform</h3>
                <p className="text-sm text-gray-600">Get verified stats automatically</p>
              </div>
              <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                Recommended
              </div>
            </div>
          </motion.button>

          {/* Manual Option */}
          <motion.button
            onClick={() => setConnectMethod('manual')}
            className="w-full p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-md transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-left flex-1">
                <h3 className="font-bold text-gray-900 mb-1">Enter Manually</h3>
                <p className="text-sm text-gray-600">Add your numbers yourself</p>
              </div>
            </div>
          </motion.button>
        </motion.div>
      )}

      {/* Connect Platform Flow */}
      {connectMethod === 'connect' && (
        <motion.div 
          className="space-y-6 max-w-md mx-auto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-center text-gray-600">
            Choose your main platform to connect:
          </p>
          
          <div className="grid gap-4">
            {platforms.map((platform) => {
              const IconComponent = platform.icon;
              return (
                <motion.button
                  key={platform.id}
                  className="flex items-center space-x-4 p-4 bg-white border-2 border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${platform.color} rounded-full flex items-center justify-center`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-900">{platform.name}</span>
                </motion.button>
              );
            })}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
              <div className="text-sm text-blue-700">
                <p className="font-medium mb-1">Safe & Secure</p>
                <p>We only read public stats. No posting or private access.</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Manual Entry Flow */}
      {connectMethod === 'manual' && (
        <motion.div 
          className="space-y-6 max-w-md mx-auto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Platform Selection */}
          <div className="space-y-2">
            <label className="font-medium text-gray-900 flex items-center space-x-2">
              <span className="text-lg">📱</span>
              <span>Which platform?</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {platforms.map((platform) => {
                const IconComponent = platform.icon;
                const isSelected = data.stats.platform === platform.id;
                
                return (
                  <button
                    key={platform.id}
                    onClick={() => handleStatsChange('platform', platform.id)}
                    className={`flex items-center space-x-2 p-3 rounded-xl border-2 transition-all duration-300 ${
                      isSelected
                        ? 'border-orange-300 bg-orange-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-8 h-8 bg-gradient-to-br ${platform.color} rounded-full flex items-center justify-center`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">{platform.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stats Inputs */}
          <div className="grid gap-4">
            <div className="space-y-2">
              <label className="font-medium text-gray-900 flex items-center space-x-2">
                <Users className="w-4 h-4 text-orange-500" />
                <span>Followers</span>
              </label>
              <Input
                value={data.stats.followers}
                onChange={(e) => handleStatsChange('followers', e.target.value)}
                placeholder="e.g., 50K or 50,000"
                className="bg-white border-2 border-gray-200 rounded-xl p-4 text-lg focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <div className="space-y-2">
              <label className="font-medium text-gray-900 flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-orange-500" />
                <span>Engagement Rate</span>
              </label>
              <Input
                value={data.stats.engagement}
                onChange={(e) => handleStatsChange('engagement', e.target.value)}
                placeholder="e.g., 5.2% or 8%"
                className="bg-white border-2 border-gray-200 rounded-xl p-4 text-lg focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
              />
            </div>
          </div>
        </motion.div>
      )}

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

        <div className="flex space-x-3">
          <Button
            variant="ghost"
            onClick={handleSkip}
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            Skip for now
          </Button>

          <Button
            onClick={onNext}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all duration-300 group"
          >
            Continue
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>

      {/* Encouragement */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <p className="text-gray-500 text-sm">
          Don't worry - you can always add or update these later! 🌟
        </p>
      </motion.div>
    </div>
  );
}
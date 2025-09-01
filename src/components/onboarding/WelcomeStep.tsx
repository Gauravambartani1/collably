import { motion } from "motion/react";
import { ArrowRight, Star, DollarSign, Zap, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";

interface WelcomeStepProps {
  onNext: () => void;
}

export function WelcomeStep({ onNext }: WelcomeStepProps) {
  const highlights = [
    { icon: DollarSign, text: "Higher payouts", color: "from-green-500 to-emerald-500" },
    { icon: TrendingUp, text: "More collabs", color: "from-purple-500 to-pink-500" },
    { icon: Zap, text: "Zero hassle", color: "from-blue-500 to-cyan-500" }
  ];

  return (
    <div className="text-center space-y-8 py-12 px-6">
      {/* Animated Welcome Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className="mb-8"
      >
        <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-600 to-teal-600 rounded-full flex items-center justify-center">
          <Star className="w-10 h-10 text-white fill-current" />
        </div>
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Hey Creator! 👋<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
            Time to get paid
          </span>
        </h1>
        
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Create your stunning creator page and start attracting premium brand partnerships today.
        </p>
      </motion.div>

      {/* Highlight Features */}
      <motion.div 
        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {highlights.map((highlight, index) => {
          const IconComponent = highlight.icon;
          return (
            <motion.div
              key={index}
              className="flex items-center space-x-3 bg-gray-900 border border-gray-800 px-4 py-3 rounded-xl hover:border-gray-700 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
            >
              <div className={`w-8 h-8 bg-gradient-to-r ${highlight.color} rounded-lg flex items-center justify-center`}>
                <IconComponent className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium text-gray-300">{highlight.text}</span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Success Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="grid grid-cols-3 gap-6 max-w-md mx-auto py-6"
      >
        <div className="text-center">
          <div className="text-2xl font-bold text-white">5K+</div>
          <div className="text-sm text-gray-400">creators</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">$2.3M+</div>
          <div className="text-sm text-gray-400">earned</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">4.9★</div>
          <div className="text-sm text-gray-400">rating</div>
        </div>
      </motion.div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-8 w-16 h-16 bg-purple-600/10 rounded-full blur-xl"
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-32 right-12 w-12 h-12 bg-teal-600/10 rounded-full blur-xl"
          animate={{ y: [0, 10, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="pt-6"
      >
        <Button 
          onClick={onNext}
          className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-12 py-4 rounded-full text-lg font-medium shadow-xl transform hover:scale-105 transition-all duration-300 group"
        >
          Create my page
          <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
        
        <p className="text-sm text-gray-400 mt-4">
          ✨ Free forever • 🚀 Live in minutes • 💰 Start earning today
        </p>
      </motion.div>
    </div>
  );
}
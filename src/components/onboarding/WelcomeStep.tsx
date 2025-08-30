import { motion } from "motion/react";
import { ArrowRight, Sparkles, Zap, Clock } from "lucide-react";
import { Button } from "../ui/button";

interface WelcomeStepProps {
  onNext: () => void;
}

export function WelcomeStep({ onNext }: WelcomeStepProps) {
  const benefits = [
    { icon: Clock, text: "60 second setup" },
    { icon: Sparkles, text: "Beautiful design" },
    { icon: Zap, text: "More collabs" }
  ];

  return (
    <div className="text-center space-y-8 py-8">
      {/* Animated Emoji */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className="text-6xl mb-4"
      >
        👋
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-4"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Hey Creator!<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
            Ready to land your next collab?
          </span>
        </h1>
        
        <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
          In 60 seconds, you'll have your own Collab Page live and ready to attract brands.
        </p>
      </motion.div>

      {/* Benefits */}
      <motion.div 
        className="flex items-center justify-center space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return (
            <motion.div
              key={index}
              className="flex items-center space-x-2 bg-white/80 backdrop-blur border border-orange-200 px-3 py-2 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
            >
              <IconComponent className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-8 w-16 h-16 bg-orange-200 rounded-full blur-xl"
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-32 right-12 w-12 h-12 bg-pink-200 rounded-full blur-xl"
          animate={{ y: [0, 10, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-20 h-20 bg-blue-200 rounded-full blur-xl"
          animate={{ y: [0, -15, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="pt-4"
      >
        <Button 
          onClick={onNext}
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 rounded-full text-xl font-bold shadow-xl transform hover:scale-105 transition-all duration-300 group"
        >
          Let's Go
          <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </Button>
        
        <p className="text-sm text-gray-500 mt-4">
          ✨ No boring forms • 🚀 Just fun questions • 📱 Mobile perfect
        </p>
      </motion.div>
    </div>
  );
}
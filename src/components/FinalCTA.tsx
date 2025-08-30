import { ArrowRight, Sparkles, Clock, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

interface FinalCTAProps {
  onStartOnboarding: () => void;
  onGoToBrandLanding?: () => void;
}

export function FinalCTA({ onStartOnboarding, onGoToBrandLanding }: FinalCTAProps) {
  const benefits = [
    {
      icon: Zap,
      text: "Set up in 60 seconds"
    },
    {
      icon: Sparkles,
      text: "Free forever plan"
    },
    {
      icon: Clock,
      text: "Go live instantly"
    }
  ];

  return (
    <>
      {/* Main CTA Section */}
      <div className="py-20 px-6 bg-gradient-to-br from-orange-500 to-pink-600 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute top-40 right-16 w-24 h-24 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-28 h-28 bg-white rounded-full blur-xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Join 1,200+ creators</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Your Collab Page is waiting.
              <br />
              <span className="text-orange-100">Start free in 60 seconds.</span>
            </h2>

            <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Stop competing for attention in DMs. Start attracting quality brand partnerships with a page that works 24/7.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur border border-white/20 px-4 py-2 rounded-full text-white"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={onStartOnboarding}
                  className="bg-white text-orange-600 hover:bg-orange-50 px-12 py-6 rounded-full text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                >
                  Create My Collab Page
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                {onGoToBrandLanding && (
                  <Button 
                    onClick={onGoToBrandLanding}
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-12 py-6 rounded-full text-xl font-bold backdrop-blur"
                  >
                    For Brands & Agencies
                  </Button>
                )}
              </div>
              
              <p className="text-orange-100 text-sm">
                ✨ No credit card required • 🚀 Live in minutes • 📱 Mobile-perfect
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur border-t border-gray-200 shadow-2xl z-50 md:hidden">
        <Button 
          onClick={onStartOnboarding}
          className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white py-4 rounded-full font-bold text-lg shadow-lg transform active:scale-95 transition-all duration-200 group"
        >
          Create My Page
          <ArrowRight className="ml-2 w-5 h-5 group-active:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Bottom spacer for mobile sticky button */}
      <div className="h-20 md:hidden"></div>
    </>
  );
}
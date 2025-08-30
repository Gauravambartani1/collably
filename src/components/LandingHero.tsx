import { useState, useEffect } from "react";
import { ArrowRight, Instagram, Youtube, Video, Users, TrendingUp, Star } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "motion/react";

interface LandingHeroProps {
  onStartOnboarding: () => void;
  onGoToBrandLanding: () => void;
}

export function LandingHero({ onStartOnboarding, onGoToBrandLanding }: LandingHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const creatorProfiles = [
    {
      name: "Emma Style",
      handle: "@emmastyle",
      niche: "Fashion",
      followers: "125K",
      engagement: "8.4%",
      image: "https://images.unsplash.com/photo-1650546585393-5a4dac0bfe8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYmxvZ2dlciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NjE4MzE5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-pink-100 to-pink-50",
      accent: "pink-400"
    },
    {
      name: "Jake Fitness",
      handle: "@jakefit",
      niche: "Fitness",
      followers: "89K",
      engagement: "12.1%",
      image: "https://images.unsplash.com/photo-1660557989710-1a91e7e89d1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwaW5mbHVlbmNlciUyMHdvcmtvdXQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTYxODMxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-green-100 to-green-50",
      accent: "green-400"
    },
    {
      name: "Mia Lifestyle",
      handle: "@mialife",
      niche: "Lifestyle",
      followers: "156K",
      engagement: "6.8%",
      image: "https://images.unsplash.com/photo-1674308994133-6b7e13a30ed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBibG9nZ2VyJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTYxODMyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "from-amber-100 to-amber-50",
      accent: "amber-400"
    }
  ];

  // Auto-scroll carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % creatorProfiles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-50 to-background dark:from-gray-900 dark:to-gray-800 overflow-hidden transition-colors duration-300">
      {/* Navigation Bar */}
      <nav className="relative z-20 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg"></div>
            <span className="font-bold text-foreground text-xl">Collably</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button
              onClick={onGoToBrandLanding}
              variant="outline"
              className="border-orange-200 text-orange-600 hover:bg-orange-50 hover:border-orange-300 dark:border-orange-600 dark:text-orange-400 dark:hover:bg-orange-900/20 transition-colors"
            >
              For Brands & Agencies
            </Button>
          </div>
        </div>
      </nav>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 dark:bg-orange-900 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-16 w-24 h-24 bg-pink-200 dark:bg-pink-900 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-blue-200 dark:bg-blue-900 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 px-6 py-8 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Side - Content */}
          <motion.div 
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Brand Badge */}
            <motion.div 
              className="inline-flex items-center space-x-2 bg-card border border-orange-200 dark:border-orange-600 px-4 py-2 rounded-full shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground font-medium">Collably Beta</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Your Collab Page.<br />
                Your Story.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                  One Link.
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Turn your bio link into a beautiful collab page that brands love — no more cold DMs.
              </motion.p>
            </div>

            {/* CTA Section */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button 
                onClick={onStartOnboarding}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg transform hover:scale-105 transition-all duration-300 group"
              >
                Create My Collab Page
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-sm text-muted-foreground">
                ✨ Free forever • 🚀 Set up in 60 seconds • 📱 Mobile-optimized
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start space-x-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Users className="w-4 h-4" />
                <span className="text-sm">1,200+ creators</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">3x more collabs</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Star className="w-4 h-4 fill-current text-yellow-400" />
                <span className="text-sm">4.9 rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Creator Profile Carousel */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative max-w-sm mx-auto">
              {/* Phone Frame */}
              <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden relative h-[600px]">
                  
                  {/* Creator Profile Cards */}
                  {creatorProfiles.map((creator, index) => (
                    <motion.div
                      key={index}
                      className={`absolute inset-0 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      } transition-opacity duration-1000`}
                      initial={false}
                      animate={{ 
                        opacity: index === currentSlide ? 1 : 0,
                        scale: index === currentSlide ? 1 : 0.95
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className={`h-full bg-gradient-to-br ${creator.color} p-6 flex flex-col`}>
                        
                        {/* Profile Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          </div>
                          <div className={`text-xs text-${creator.accent} font-medium`}>
                            collably.co/{creator.handle.slice(1)}
                          </div>
                        </div>

                        {/* Profile Content */}
                        <div className="text-center flex-1 flex flex-col justify-center">
                          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <ImageWithFallback
                              src={creator.image}
                              alt={creator.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <h3 className="font-bold text-gray-900 mb-1">{creator.name}</h3>
                          <p className={`text-${creator.accent} mb-4`}>{creator.handle}</p>
                          
                          <div className={`bg-white/80 backdrop-blur rounded-lg p-3 mb-4 border border-${creator.accent}/20`}>
                            <p className="text-gray-800 text-sm font-medium mb-2">
                              {creator.niche} Creator ✨
                            </p>
                            <div className="flex justify-center space-x-4 text-xs text-gray-600">
                              <span>{creator.followers} followers</span>
                              <span>{creator.engagement} engagement</span>
                            </div>
                          </div>

                          <div className="flex justify-center space-x-2">
                            <div className={`w-8 h-8 bg-${creator.accent} rounded-full flex items-center justify-center`}>
                              <Instagram className="w-4 h-4 text-white" />
                            </div>
                            <div className={`w-8 h-8 bg-${creator.accent} rounded-full flex items-center justify-center`}>
                              <Youtube className="w-4 h-4 text-white" />
                            </div>
                            <div className={`w-8 h-8 bg-${creator.accent} rounded-full flex items-center justify-center`}>
                              <Video className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {creatorProfiles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-orange-500 w-6' 
                        : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
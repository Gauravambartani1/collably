import { useState, useEffect } from "react";
import { ArrowRight, Star, DollarSign, Users, Zap, CheckCircle, Play, Instagram, Youtube, TrendingUp, Clock, Globe, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

interface LandingPageProps {
  onStartOnboarding: () => void;
  onGoToBrandLanding: () => void;
}

export function LandingPage({ onStartOnboarding, onGoToBrandLanding }: LandingPageProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const creatorEarnings = [
    { name: "Sarah Chen", handle: "@sarahlifestyle", earnings: "$12,500", period: "last month", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face" },
    { name: "Marcus Rodriguez", handle: "@marcusfit", earnings: "$8,900", period: "last month", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
    { name: "Priya Sharma", handle: "@priyastyle", earnings: "$15,200", period: "last month", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" }
  ];

  const testimonials = [
    {
      quote: "I went from 3 brand collabs a year to 3 per month. Collably changed everything.",
      author: "Emma Johnson",
      handle: "@emmajohnson",
      followers: "85K",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Brands actually reach out to ME now. My link-in-bio became a money machine.",
      author: "David Kim",
      handle: "@davidtech",
      followers: "120K",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      quote: "Setup took 2 minutes, first brand deal came in a week. Worth every second.",
      author: "Lisa Martinez",
      handle: "@lisamfit",
      followers: "95K",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg"></div>
              <span className="font-bold text-white text-xl">Collably</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                onClick={onGoToBrandLanding}
                variant="ghost"
                className="text-gray-300 hover:text-white"
              >
                For Brands
              </Button>
              <Button
                onClick={onStartOnboarding}
                className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-gray-800 text-gray-300 border-gray-700">
                <Star className="w-3 h-3 mr-1 text-yellow-400 fill-current" />
                Join 5,000+ creators earning more
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Turn your bio link into a
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400"> money machine</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Create a stunning creator page that attracts premium brands and converts followers into revenue. No more chasing DMs or low-ball offers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  onClick={onStartOnboarding}
                  className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-8 py-4 text-lg font-medium rounded-full transform hover:scale-105 transition-all duration-300 group"
                >
                  Start earning today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg rounded-full"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch how it works
                </Button>
              </div>

              <div className="text-sm text-gray-400">
                ✨ Free to start • 🚀 Setup in 60 seconds • 💰 No hidden fees
              </div>
            </motion.div>
          </div>

          {/* Creator Earnings Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {creatorEarnings.map((creator, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={creator.image}
                      alt={creator.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{creator.name}</h3>
                    <p className="text-sm text-gray-400">{creator.handle}</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">{creator.earnings}</div>
                  <div className="text-sm text-gray-400">earned {creator.period}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Collably works</h2>
            <p className="text-xl text-gray-400">Three simple steps to start earning</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Create your page",
                description: "Answer a few questions about yourself and your content. We'll build you a stunning creator page that showcases your best work.",
                icon: <Users className="w-8 h-8" />
              },
              {
                step: "2", 
                title: "Share your link",
                description: "Replace your boring bio link with your new Collably page. Brands can discover you, see your rates, and book collaborations instantly.",
                icon: <Globe className="w-8 h-8" />
              },
              {
                step: "3",
                title: "Get paid",
                description: "Brands reach out directly with real offers. No more chasing DMs or negotiating rates. Set your price and get paid fairly.",
                icon: <DollarSign className="w-8 h-8" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-teal-600 rounded-full flex items-center justify-center mx-auto text-white">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-black border-2 border-gray-700 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything you need to succeed</h2>
            <p className="text-xl text-gray-400">Professional tools that help you stand out and earn more</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Beautiful creator pages",
                description: "Stunning, mobile-optimized pages that showcase your content and make brands want to work with you.",
                icon: <Star className="w-6 h-6" />,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Smart pricing tools",
                description: "Set your rates for different types of content. Brands see your prices upfront - no more awkward negotiations.",
                icon: <DollarSign className="w-6 h-6" />,
                color: "from-green-500 to-teal-500"
              },
              {
                title: "Brand discovery",
                description: "Get found by premium brands looking for creators in your niche. Our algorithm matches you with perfect opportunities.",
                icon: <Zap className="w-6 h-6" />,
                color: "from-blue-500 to-purple-500"
              },
              {
                title: "Analytics dashboard",
                description: "Track your page views, brand inquiries, and earnings. See what's working and optimize for more revenue.",
                icon: <TrendingUp className="w-6 h-6" />,
                color: "from-orange-500 to-red-500"
              },
              {
                title: "Instant notifications",
                description: "Get notified the moment a brand wants to work with you. Respond quickly to secure the best deals.",
                icon: <Clock className="w-6 h-6" />,
                color: "from-cyan-500 to-blue-500"
              },
              {
                title: "Creator support",
                description: "Get help from our team of creator economy experts. We're here to help you maximize your earning potential.",
                icon: <Heart className="w-6 h-6" />,
                color: "from-pink-500 to-rose-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Creators love Collably</h2>
            <p className="text-xl text-gray-400">Join thousands of creators already earning more</p>
          </div>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl text-gray-300 mb-6 italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <ImageWithFallback
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-medium text-white">{testimonials[currentTestimonial].author}</div>
                  <div className="text-sm text-gray-400">
                    {testimonials[currentTestimonial].handle} • {testimonials[currentTestimonial].followers} followers
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-purple-500 w-6' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to start earning more?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who've transformed their social media presence into a profitable business with Collably.
            </p>
            
            <Button
              onClick={onStartOnboarding}
              className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-12 py-4 text-xl font-medium rounded-full transform hover:scale-105 transition-all duration-300 group mb-6"
            >
              Create your page now
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="text-sm text-gray-400">
              Free to start • No credit card required • Setup in under 60 seconds
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg"></div>
              <span className="font-bold text-white text-xl">Collably</span>
            </div>
            
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <button className="hover:text-white transition-colors">Privacy</button>
              <button className="hover:text-white transition-colors">Terms</button>
              <button className="hover:text-white transition-colors">Support</button>
              <button 
                onClick={onGoToBrandLanding}
                className="hover:text-white transition-colors"
              >
                For Brands
              </button>
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-sm mt-8">
            © 2024 Collably. Made for creators, by creators.
          </div>
        </div>
      </footer>
    </div>
  );
}
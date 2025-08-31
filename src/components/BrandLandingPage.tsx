import { useState } from "react";
import { ArrowRight, CheckCircle, TrendingUp, Users, Shield, Clock, Target, Zap, Star, PlayCircle, Search, Filter, MessageSquare, X, BarChart3, Award, Globe, Sparkles, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

interface BrandLandingPageProps {
  onStartOnboarding: () => void;
  onBackToCreatorLanding: () => void;
}

export function BrandLandingPage({ onStartOnboarding, onBackToCreatorLanding }: BrandLandingPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBudget, setSelectedBudget] = useState("Any Budget");

  const categories = ["All", "Fashion", "Fitness", "Lifestyle", "Tech", "Beauty", "Food"];
  const budgetRanges = ["Any Budget", "$1K-5K", "$5K-15K", "$15K+"];

  const sampleCreators = [
    {
      id: 1,
      name: "Emma Chen",
      handle: "@emmastyle",
      niche: "Fashion",
      followers: "125K",
      engagement: "8.4%",
      avgViews: "45K",
      image: "https://images.unsplash.com/photo-1590498945070-0b4f7f83a71b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY29udGVudCUyMGNyZWF0b3IlMjBicmFuZCUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc1NjU1MzAyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      lastCampaign: "Collaborated with Zara - 2.3M views",
      verified: true,
      priceRange: "$2K-4K"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      handle: "@marcusfit",
      niche: "Fitness",
      followers: "89K",
      engagement: "12.1%",
      avgViews: "38K",
      image: "https://images.unsplash.com/photo-1719241842868-8a22b99bc7b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvciUyMG1ha2luZyUyMHZpZGVvcyUyMGJyYW5kJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NTY1NTMwMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      lastCampaign: "Nike partnership - 1.8M reach",
      verified: true,
      priceRange: "$3K-6K"
    },
    {
      id: 3,
      name: "Sofia Martinez",
      handle: "@sofialife",
      niche: "Lifestyle",
      followers: "156K",
      engagement: "6.8%",
      avgViews: "52K",
      image: "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGluZmx1ZW5jZXIlMjBsaWZlc3R5bGUlMjBicmFuZHxlbnwxfHx8fDE3NTY1NTMwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      lastCampaign: "Apple collaboration - 3.2M impressions",
      verified: true,
      priceRange: "$4K-8K"
    }
  ];

  const testimonials = [
    {
      quote: "Collably helped us launch with the perfect creator in 48 hours—seamless and effective.",
      author: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow",
      logo: "TF"
    },
    {
      quote: "Finally, a platform where we can trust the metrics and move fast on campaigns.",
      author: "Marcus Rodriguez",
      role: "Creative Director",
      company: "Spark Agency",
      logo: "SA"
    },
    {
      quote: "The transparent pricing and verified data saved us weeks of back-and-forth.",
      author: "Emma Thompson",
      role: "Brand Manager",
      company: "GrowthLab",
      logo: "GL"
    }
  ];

  const handleBrowseCreators = () => {
    // This would typically open a creator discovery modal or page
    console.log("Browse creators clicked");
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b border-gray-800 bg-gray-900/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg"></div>
            <span className="font-bold text-white text-xl">Collably</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              onClick={onBackToCreatorLanding}
              variant="ghost"
              className="text-gray-400 hover:text-white"
            >
              For Creators
            </Button>
            <Button
              onClick={onStartOnboarding}
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white"
            >
              Start a Campaign
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1664520132859-727fc515fc8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY3JlYXRvcnMlMjBjb2xsYWJvcmF0aW5nJTIwYnJhbmRzfGVufDF8fHx8MTc1NjU1MzAxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Diverse creators collaborating"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <motion.div 
                  className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur border border-white/20 px-4 py-2 rounded-full"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <Target className="w-4 h-4 text-orange-400" />
                  <span className="text-sm font-medium">For Brands & Agencies</span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Find creators who move culture—and{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                    drive results
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                  Skip the endless outreach. Collably matches your brand with the right creators, fast.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={onStartOnboarding}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-medium shadow-lg group"
                >
                  Start a Campaign
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  onClick={handleBrowseCreators}
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium backdrop-blur"
                >
                  Browse Creators
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">1,200+</div>
                  <div className="text-sm text-gray-400">Verified Creators</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">48hrs</div>
                  <div className="text-sm text-gray-400">Avg. Match Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.8/5</div>
                  <div className="text-sm text-gray-400">Brand Rating</div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual - Creator Stats */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-6">
                {sampleCreators.slice(0, 2).map((creator, index) => (
                  <motion.div 
                    key={creator.id}
                    className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  >
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden mx-auto border-2 border-white/30">
                        <ImageWithFallback
                          src={creator.image}
                          alt={creator.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{creator.name}</h4>
                        <p className="text-sm text-gray-300">{creator.handle}</p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-xs text-gray-400">
                          {creator.followers} followers
                        </div>
                        <div className="text-lg font-bold text-orange-400">
                          {creator.engagement}
                        </div>
                        <div className="text-xs text-gray-400">engagement rate</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain vs Solution */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why brands struggle with creator partnerships
            </h2>
            <p className="text-xl text-gray-300">
              Traditional outreach is broken. Collably fixes it.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Pain Points */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-red-600 mb-6">The Old Way</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Endless DMs</h4>
                    <p className="text-gray-300">Hunting through Instagram, sending hundreds of cold messages with poor response rates.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Unverified Numbers</h4>
                    <p className="text-gray-300">Creators show you screenshots that could be fake. No way to verify real engagement.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Unpredictable Outcomes</h4>
                    <p className="text-gray-300">No historical data, unclear pricing, and campaigns that take months to launch.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Solutions */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-green-600 mb-6">The Collably Way</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Curated Matches</h4>
                    <p className="text-gray-300">Our platform connects you with pre-vetted creators who match your brand and audience.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Verified Analytics</h4>
                    <p className="text-gray-300">All metrics are pulled directly from Instagram Insights and TikTok Studio. No fake numbers.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Transparent & Fast</h4>
                    <p className="text-gray-300">Clear pricing upfront, campaign history visible, and launch partnerships in days not months.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How it works
            </h2>
            <p className="text-xl text-gray-300">
              From brief to campaign launch in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Share your campaign goals",
                description: "Tell us about your brand, target audience, and campaign objectives. We'll understand what success looks like for you.",
                icon: Target,
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "02", 
                title: "Get matched with verified creators",
                description: "Within 24 hours, receive a curated list of creators with verified metrics that align with your goals and budget.",
                icon: Users,
                color: "from-orange-500 to-pink-500"
              },
              {
                step: "03",
                title: "Launch and track results",
                description: "Approve your preferred creators, launch your campaign, and track performance—all in one dashboard.",
                icon: BarChart3,
                color: "from-green-500 to-emerald-500"
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-bold text-gray-500 mb-2">STEP {item.step}</div>
                      <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Connection Line */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-600 to-transparent transform -translate-y-1/2 z-10"></div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Creator Discovery Preview */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Discover creators that fit your brand
            </h2>
            <p className="text-xl text-gray-300">
              Browse verified creators with transparent metrics and pricing
            </p>
          </div>

          {/* Filters */}
          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <span className="font-medium text-gray-300">Filters:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedCategory === category
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="w-px h-6 bg-gray-600"></div>

              <div className="flex flex-wrap gap-2">
                {budgetRanges.map((budget) => (
                  <button
                    key={budget}
                    onClick={() => setSelectedBudget(budget)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedBudget === budget
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Creator Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {sampleCreators.map((creator, index) => (
              <motion.div 
                key={creator.id}
                className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-700 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <ImageWithFallback
                          src={creator.image}
                          alt={creator.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{creator.name}</h4>
                        <p className="text-sm text-gray-400">{creator.handle}</p>
                      </div>
                    </div>
                    {creator.verified && (
                      <Badge className="bg-green-900/20 text-green-400 border-green-600">
                        <Shield className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>

                  <div className="bg-gray-800 rounded-xl p-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="font-bold text-white">{creator.followers}</div>
                        <div className="text-xs text-gray-400">Followers</div>
                      </div>
                      <div>
                        <div className="font-bold text-orange-400">{creator.engagement}</div>
                        <div className="text-xs text-gray-400">Engagement</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                      {creator.niche}
                    </Badge>
                    <p className="text-sm text-gray-300">{creator.lastCampaign}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-white">{creator.priceRange}</span>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={handleBrowseCreators}
              variant="outline"
              className="border-orange-500 text-orange-400 hover:bg-orange-900/20 px-8 py-3"
            >
              Browse all creators →
            </Button>
          </div>
        </div>
      </section>

      {/* Trust & Speed Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Campaigns that start in days, not months
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              From brief to live collaboration in under a week—with transparent pricing and verified data.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-green-900/20 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="font-bold text-white">Verified Metrics</h3>
                <p className="text-gray-300 text-center">All engagement data pulled directly from platform analytics</p>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-blue-900/20 rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="font-bold text-white">Transparent Pricing</h3>
                <p className="text-gray-300 text-center">See creator rates upfront with no hidden fees or markups</p>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-orange-900/20 rounded-2xl flex items-center justify-center">
                  <Clock className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="font-bold text-white">Lightning Fast</h3>
                <p className="text-gray-300 text-center">Get matched with creators in 24hrs, launch in under a week</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why brands choose Collably
            </h2>
            <p className="text-xl text-gray-300">
              Stop wasting time on traditional outreach that doesn't work
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-2">
              
              {/* Collably Column */}
              <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg mx-auto mb-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Collably</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Verified insights from platform APIs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Transparent, upfront pricing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Smart creator matching</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Launch campaigns in days</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">All-in-one campaign management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Real-time performance tracking</span>
                  </div>
                </div>
              </div>

              {/* Traditional Outreach Column */}
              <div className="p-8 bg-gradient-to-br from-red-50 to-pink-50">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-gray-400 rounded-lg mx-auto mb-4"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Traditional Outreach</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">Screenshots that could be fake</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">Hidden costs and surprise fees</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">Endless back-and-forth messaging</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">Campaigns take weeks to launch</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">Scattered tools and spreadsheets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">Manual reporting and guesswork</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by leading brands
            </h2>
            <p className="text-xl text-gray-600">
              See what marketing teams are saying about Collably
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="space-y-6">
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                      <span className="font-bold text-gray-600">{testimonial.logo}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm font-medium text-orange-600">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to find your perfect creator match?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of brands using Collably to launch campaigns that actually drive results.
            </p>
            
            <Button 
              onClick={onStartOnboarding}
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-12 py-4 rounded-full font-medium shadow-lg group"
            >
              Start Your Campaign
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-gray-400 text-sm mt-6">
              ✨ No setup fees • 🚀 Live in 48 hours • 📊 Transparent pricing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg"></div>
            <span className="font-bold text-gray-900 text-xl">Collably</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <button
              onClick={onBackToCreatorLanding}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              For Creators
            </button>
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </button>
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              Support
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
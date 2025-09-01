import { ArrowLeft, ExternalLink, Instagram, Music, Youtube, Mail, MapPin, Users, TrendingUp, Star, Calendar, DollarSign, MessageCircle, Heart, Verified, Clock, Award, BarChart3, Target, Zap, CheckCircle, Globe, Camera, Video, Mic, Shield, Eye, ThumbsUp, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { OnboardingData } from "./Onboarding";
import { motion } from "motion/react";

interface ProfilePageProps {
  data: OnboardingData;
  onBackToLanding: () => void;
}

export function ProfilePage({ data, onBackToLanding }: ProfilePageProps) {
  // Get vibe-specific content
  const getVibeContent = (vibe: string) => {
    const vibeContent = {
      fashion: {
        emoji: "👗",
        description: "Fashion & Style Creator",
        specialties: ["Outfit Styling", "Brand Lookbooks", "Fashion Hauls", "Trend Forecasting"],
        demographics: {
          primaryAge: "18-34",
          topLocation: "Urban Areas",
          interests: ["Fashion", "Beauty", "Lifestyle"]
        }
      },
      fitness: {
        emoji: "💪",
        description: "Fitness & Wellness Creator",
        specialties: ["Workout Videos", "Nutrition Tips", "Transformation Stories", "Wellness Coaching"],
        demographics: {
          primaryAge: "25-44",
          topLocation: "Health-Conscious Cities",
          interests: ["Fitness", "Health", "Nutrition"]
        }
      },
      lifestyle: {
        emoji: "✨",
        description: "Lifestyle Creator",
        specialties: ["Daily Vlogs", "Product Reviews", "Life Inspiration", "Home Decor"],
        demographics: {
          primaryAge: "22-40",
          topLocation: "Suburban & Urban",
          interests: ["Lifestyle", "Home", "Family"]
        }
      },
      tech: {
        emoji: "💻",
        description: "Tech Creator",
        specialties: ["Product Reviews", "Tech Tutorials", "Unboxing Videos", "Industry Insights"],
        demographics: {
          primaryAge: "20-35",
          topLocation: "Tech Hubs",
          interests: ["Technology", "Gaming", "Innovation"]
        }
      },
      gaming: {
        emoji: "🎮",
        description: "Gaming Creator",
        specialties: ["Game Reviews", "Live Streams", "Gaming Tutorials", "Esports Commentary"],
        demographics: {
          primaryAge: "16-30",
          topLocation: "Global",
          interests: ["Gaming", "Entertainment", "Technology"]
        }
      },
      beauty: {
        emoji: "💄",
        description: "Beauty Creator",
        specialties: ["Makeup Tutorials", "Product Reviews", "Skincare Routines", "Beauty Tips"],
        demographics: {
          primaryAge: "18-35",
          topLocation: "Beauty-Forward Cities",
          interests: ["Beauty", "Fashion", "Self-Care"]
        }
      },
      food: {
        emoji: "🍕",
        description: "Food Creator",
        specialties: ["Recipe Videos", "Restaurant Reviews", "Cooking Tutorials", "Food Photography"],
        demographics: {
          primaryAge: "25-45",
          topLocation: "Food Cities",
          interests: ["Food", "Cooking", "Dining"]
        }
      },
      travel: {
        emoji: "✈️",
        description: "Travel Creator",
        specialties: ["Destination Guides", "Travel Vlogs", "Cultural Experiences", "Travel Tips"],
        demographics: {
          primaryAge: "22-40",
          topLocation: "Global",
          interests: ["Travel", "Culture", "Adventure"]
        }
      },
      photography: {
        emoji: "📸",
        description: "Photography Creator",
        specialties: ["Photo Tutorials", "Behind the Scenes", "Equipment Reviews", "Visual Storytelling"],
        demographics: {
          primaryAge: "20-40",
          topLocation: "Creative Cities",
          interests: ["Photography", "Art", "Visual Arts"]
        }
      },
      music: {
        emoji: "🎵",
        description: "Music Creator",
        specialties: ["Music Covers", "Original Songs", "Music Production", "Live Performances"],
        demographics: {
          primaryAge: "18-35",
          topLocation: "Music Cities",
          interests: ["Music", "Entertainment", "Arts"]
        }
      }
    };
    return vibeContent[vibe as keyof typeof vibeContent] || vibeContent.lifestyle;
  };

  const vibeContent = getVibeContent(data.vibe);

  // Enhanced collaboration packages with psychological pricing
  const collabPackages = [
    {
      type: "Creator Bundle",
      subtitle: "Most Popular Choice",
      price: data.pricing?.post || 750,
      originalPrice: 1200,
      description: "Complete content package with multiple deliverables",
      deliverables: [
        "1 Instagram feed post",
        "3 Instagram stories", 
        "1 Reel/TikTok video",
        "Usage rights included",
        "2 rounds of revisions",
        "Performance analytics"
      ],
      timeline: "3-5 business days",
      badge: "MOST POPULAR",
      savings: "Save 38%",
      color: "from-purple-600 to-teal-600"
    },
    {
      type: "Premium Campaign",
      subtitle: "Brand Partnerships",
      price: data.pricing?.reel || 1500,
      originalPrice: 2200,
      description: "Comprehensive campaign for major brand collaborations",
      deliverables: [
        "2 Instagram feed posts",
        "5 Instagram stories",
        "2 Reels/TikTok videos",
        "Extended usage rights",
        "Performance analytics",
        "Dedicated account manager",
        "Priority support"
      ],
      timeline: "5-7 business days",
      badge: "PREMIUM",
      savings: "Save 32%",
      color: "from-orange-500 to-pink-500"
    }
  ];

  // Enhanced audience analytics with more detailed data
  const audienceAnalytics = {
    genderSplit: { female: 68, male: 30, other: 2 },
    topAgeGroups: [
      { range: "25-34", percentage: 45, color: "#8B5CF6" },
      { range: "18-24", percentage: 28, color: "#06B6D4" },
      { range: "35-44", percentage: 20, color: "#10B981" },
      { range: "45+", percentage: 7, color: "#F59E0B" }
    ],
    topLocations: [
      { city: "Mumbai", percentage: 22, flag: "🇮🇳" },
      { city: "Delhi", percentage: 18, flag: "🇮🇳" },
      { city: "Bangalore", percentage: 15, flag: "🇮🇳" },
      { city: "New York", percentage: 12, flag: "🇺🇸" },
      { city: "London", percentage: 8, flag: "🇬🇧" }
    ],
    engagement: {
      avgLikes: "2.5K",
      avgComments: "180",
      avgShares: "95",
      bestPostTime: "7-9 PM IST",
      engagementRate: "8.2%",
      reachRate: "15.3%"
    },
    interests: [
      { name: "Fashion", percentage: 35 },
      { name: "Beauty", percentage: 28 },
      { name: "Lifestyle", percentage: 22 },
      { name: "Travel", percentage: 15 }
    ]
  };

  // Enhanced testimonials with more social proof
  const testimonials = [
    {
      brand: "Nykaa",
      logo: "NK",
      text: "Absolutely incredible work! The content quality exceeded our expectations and the engagement was phenomenal. ROI was 4.2x our investment.",
      author: "Brand Manager",
      campaign: "Summer Beauty Collection",
      metrics: "4.2x ROI • 2.3M reach",
      rating: 5
    },
    {
      brand: "Myntra",
      logo: "MY",
      text: "Professional, creative, and always delivers on time. The audience loves the content and our sales increased by 127% during the campaign.",
      author: "Marketing Director",
      campaign: "Fashion Week Partnership",
      metrics: "127% sales increase",
      rating: 5
    },
    {
      brand: "Zomato",
      logo: "ZO",
      text: "The storytelling and visual quality were outstanding. Best performing creator partnership we've had this year.",
      author: "Campaign Lead",
      campaign: "Food Festival Promotion",
      metrics: "3.8M impressions",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onBackToLanding}
            className="text-gray-400 hover:text-white group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back
          </Button>
          
          <div className="text-sm text-gray-400 font-mono">
            collably.co/{data.handle || 'creator'}
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Enhanced Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-3 gap-12 mb-16"
        >
          {/* Profile Column - Enhanced */}
          <div className="lg:col-span-1 text-center lg:text-left space-y-6">
            {/* Brand Favorite Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-full font-bold shadow-lg"
            >
              <Award className="w-4 h-4" />
              <span>BRAND FAVORITE</span>
            </motion.div>

            {/* Enhanced Profile Image */}
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-gradient-to-r from-purple-600 to-teal-600 p-2 shadow-2xl">
                <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">
                    {data.name[0]?.toUpperCase() || 'C'}
                  </span>
                </div>
              </div>
              
              {/* Verified Badge */}
              <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-r from-purple-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg border-4 border-black">
                <Verified className="w-6 h-6 text-white fill-current" />
              </div>
              
              {/* Online Status */}
              <div className="absolute -top-3 -right-6 bg-green-500 px-3 py-1 rounded-full text-sm font-medium animate-pulse shadow-lg">
                🟢 Online
              </div>
            </div>

            {/* Name and Title */}
            <div className="space-y-3">
              <h1 className="text-4xl font-bold text-white">{data.name}</h1>
              <p className="text-xl text-gray-400">@{data.handle}</p>
              
              {/* One-liner/Tagline */}
              {data.tagline && (
                <p className="text-lg text-gray-300 font-medium italic">
                  "{data.tagline}"
                </p>
              )}
              
              {/* Creator Type */}
              <Badge className="bg-gray-800 text-gray-300 border-gray-700 text-base px-4 py-2">
                <span className="mr-2 text-xl">{vibeContent.emoji}</span>
                {vibeContent.description}
              </Badge>
            </div>

            {/* Enhanced Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-800 text-center">
                <div className="text-3xl font-bold text-white">{data.stats.followers || "180K"}</div>
                <div className="text-sm text-gray-400">Followers</div>
              </div>
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-800 text-center">
                <div className="text-3xl font-bold text-green-400">4.9</div>
                <div className="text-sm text-gray-400">★ Rating</div>
              </div>
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-800 text-center">
                <div className="text-3xl font-bold text-white">{data.stats.engagement || "8.2%"}</div>
                <div className="text-sm text-gray-400">Engagement</div>
              </div>
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-800 text-center">
                <div className="text-3xl font-bold text-purple-400">< 2h</div>
                <div className="text-sm text-gray-400">Response</div>
              </div>
            </div>

            {/* Response Time & Availability */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-green-400">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Usually responds within 2 hours</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Next available: This week</span>
              </div>
              <div className="flex items-center space-x-2 text-orange-400">
                <Shield className="w-5 h-5" />
                <span className="font-medium">100% response rate</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              {data.socialLinks.instagram && (
                <a
                  href={data.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors hover:scale-110 transform duration-200"
                >
                  <Instagram className="w-5 h-5 text-gray-400" />
                </a>
              )}
              {data.socialLinks.tiktok && (
                <a
                  href={data.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors hover:scale-110 transform duration-200"
                >
                  <Music className="w-5 h-5 text-gray-400" />
                </a>
              )}
              {data.socialLinks.youtube && (
                <a
                  href={data.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors hover:scale-110 transform duration-200"
                >
                  <Youtube className="w-5 h-5 text-gray-400" />
                </a>
              )}
            </div>

            {/* Urgency/Scarcity Message */}
            <div className="bg-gradient-to-r from-orange-600 to-pink-600 text-white px-6 py-4 rounded-xl text-center shadow-lg">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Zap className="w-5 h-5" />
                <span className="font-bold">Limited Availability</span>
              </div>
              <p className="text-orange-100 text-sm">
                Only 2 collaboration spots available this month
              </p>
            </div>
          </div>

          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            {data.bio && (
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                    <Sparkles className="w-6 h-6 mr-3 text-purple-400" />
                    About {data.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{data.bio}</p>
                </CardContent>
              </Card>
            )}

            {/* Specialties */}
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-teal-400" />
                  Content Specialties
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {vibeContent.specialties.map((specialty, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="flex items-center space-x-3 text-gray-300 bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="font-medium">{specialty}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Big CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-16 py-6 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                <MessageCircle className="w-6 h-6 mr-4" />
                Start Collaboration
                <Sparkles className="w-6 h-6 ml-4 group-hover:rotate-12 transition-transform" />
              </Button>
              <p className="text-sm text-gray-400 mt-4 flex items-center justify-center space-x-4">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  Response within 2 hours
                </span>
                <span className="flex items-center">
                  <Shield className="w-4 h-4 mr-1" />
                  Free consultation
                </span>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Collaboration Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Collaboration Packages</h2>
            <p className="text-gray-400 text-lg">Choose the perfect package for your brand goals</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {collabPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <Card
                  className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 relative overflow-hidden group hover:shadow-2xl hover:scale-105"
                >
                  {/* Badge */}
                  <div className={`absolute top-6 right-6 bg-gradient-to-r ${pkg.color} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}>
                    {pkg.badge}
                  </div>
                  
                  {/* Savings Badge */}
                  <div className="absolute top-6 left-6 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {pkg.savings}
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{pkg.type}</h3>
                      <p className="text-gray-400">{pkg.subtitle}</p>
                    </div>
                    
                    {/* Pricing with Psychology */}
                    <div className="flex items-baseline space-x-3 mb-6">
                      <span className="text-4xl font-bold text-white">₹{pkg.price.toLocaleString()}</span>
                      <span className="text-xl text-gray-500 line-through">₹{pkg.originalPrice.toLocaleString()}</span>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{pkg.description}</p>
                    
                    {/* Deliverables */}
                    <div className="space-y-3 mb-8">
                      <h4 className="font-semibold text-white text-lg">What's included:</h4>
                      {pkg.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center space-x-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Timeline */}
                    <div className="flex items-center space-x-2 text-gray-400 mb-8">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium">Delivery: {pkg.timeline}</span>
                    </div>
                    
                    {/* CTA Button */}
                    <Button
                      className={`w-full bg-gradient-to-r ${pkg.color} hover:shadow-lg text-white py-4 text-lg font-bold rounded-xl transform hover:scale-105 transition-all duration-300`}
                    >
                      Select Package
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Audience Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Audience Analytics</h2>
            <p className="text-gray-400 text-lg">Verified insights to help you make informed decisions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Gender Split */}
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Users className="w-6 h-6 text-purple-400" />
                  <h3 className="font-bold text-white text-lg">Gender Split</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300 font-medium">Female</span>
                      <span className="text-white font-bold">{audienceAnalytics.genderSplit.female}%</span>
                    </div>
                    <Progress value={audienceAnalytics.genderSplit.female} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300 font-medium">Male</span>
                      <span className="text-white font-bold">{audienceAnalytics.genderSplit.male}%</span>
                    </div>
                    <Progress value={audienceAnalytics.genderSplit.male} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300 font-medium">Other</span>
                      <span className="text-white font-bold">{audienceAnalytics.genderSplit.other}%</span>
                    </div>
                    <Progress value={audienceAnalytics.genderSplit.other} className="h-3" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Age Groups */}
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <BarChart3 className="w-6 h-6 text-teal-400" />
                  <h3 className="font-bold text-white text-lg">Age Groups</h3>
                </div>
                <div className="space-y-4">
                  {audienceAnalytics.topAgeGroups.map((group, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300 font-medium">{group.range}</span>
                        <span className="text-white font-bold">{group.percentage}%</span>
                      </div>
                      <Progress value={group.percentage} className="h-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Locations */}
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Globe className="w-6 h-6 text-blue-400" />
                  <h3 className="font-bold text-white text-lg">Top Locations</h3>
                </div>
                <div className="space-y-4">
                  {audienceAnalytics.topLocations.map((location, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300 font-medium flex items-center">
                          <span className="mr-2">{location.flag}</span>
                          {location.city}
                        </span>
                        <span className="text-white font-bold">{location.percentage}%</span>
                      </div>
                      <Progress value={location.percentage} className="h-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Engagement Metrics */}
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  <h3 className="font-bold text-white text-lg">Engagement</h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Avg. Likes</span>
                    <span className="text-white font-bold">{audienceAnalytics.engagement.avgLikes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Avg. Comments</span>
                    <span className="text-white font-bold">{audienceAnalytics.engagement.avgComments}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Engagement Rate</span>
                    <span className="text-green-400 font-bold">{audienceAnalytics.engagement.engagementRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Best Time</span>
                    <span className="text-white font-bold">{audienceAnalytics.engagement.bestPostTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Audience Interests */}
          <div className="lg:col-span-3">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-orange-400" />
                  Audience Interests
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {audienceAnalytics.interests.map((interest, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white mb-2">{interest.percentage}%</div>
                      <div className="text-gray-400">{interest.name}</div>
                      <Progress value={interest.percentage} className="h-2 mt-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Enhanced Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Brand Testimonials</h2>
            <p className="text-gray-400 text-lg">What leading brands say about working with {data.name}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
              >
                <Card className="bg-gray-900 border-gray-800 h-full hover:border-gray-700 transition-colors">
                  <CardContent className="p-8">
                    {/* Brand Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{testimonial.logo}</span>
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">{testimonial.brand}</div>
                        <div className="text-gray-400 text-sm">{testimonial.campaign}</div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial */}
                    <p className="text-gray-300 mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                    {/* Metrics */}
                    <div className="bg-gray-800 rounded-lg p-4 mb-4">
                      <div className="text-green-400 font-bold text-center">{testimonial.metrics}</div>
                    </div>

                    {/* Author */}
                    <div className="text-center">
                      <p className="text-gray-400 text-sm">— {testimonial.author}, {testimonial.brand}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-purple-900/50 to-teal-900/50 border-purple-700/50">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Performance Highlights</h2>
                <p className="text-gray-300 text-lg">Proven results that brands love</p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">4.2x</div>
                  <div className="text-gray-400">Average ROI</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">15M+</div>
                  <div className="text-gray-400">Total Reach</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <ThumbsUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">95%</div>
                  <div className="text-gray-400">Brand Satisfaction</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-400">Brand Partners</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Final Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-purple-900/50 to-teal-900/50 border-purple-700/50">
            <CardContent className="p-12">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Something Amazing?</h2>
                <p className="text-gray-300 mb-8 text-xl leading-relaxed">
                  Join {data.stats.followers || "180K"} followers and 50+ satisfied brands who trust {data.name} for authentic, high-quality content that drives real results.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-12 py-4 text-xl font-bold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Start Collaboration
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 px-12 py-4 text-xl font-bold rounded-xl"
                  >
                    <Calendar className="w-6 h-6 mr-3" />
                    Schedule Call
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold text-green-400">100%</div>
                    <div className="text-gray-400 text-sm">Response Rate</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold text-purple-400">< 2hrs</div>
                    <div className="text-gray-400 text-sm">Avg Response</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold text-orange-400">4.9★</div>
                    <div className="text-gray-400 text-sm">Brand Rating</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Success Banner */}
      <div className="fixed bottom-6 right-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg z-50">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="font-medium">Page is Live! 🎉</span>
        </div>
      </div>
    </div>
  );
}
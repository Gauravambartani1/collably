import { ArrowLeft, ExternalLink, Instagram, Music, Youtube, Mail, MapPin, Users, TrendingUp, Star, Calendar, DollarSign, MessageCircle, Heart, Verified, Clock, Award, BarChart3, Target, Zap, CheckCircle, Globe, Camera, Video, Mic } from "lucide-react";
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

  // Sample collaboration packages (max 2 columns)
  const collabPackages = [
    {
      type: "Content Package",
      subtitle: "Most Popular",
      price: data.pricing?.post || 500,
      originalPrice: 750,
      description: "Complete content package with multiple deliverables",
      deliverables: [
        "1 Instagram feed post",
        "3 Instagram stories", 
        "1 Reel/TikTok video",
        "Usage rights included",
        "2 rounds of revisions"
      ],
      timeline: "3-5 business days",
      badge: "BEST VALUE"
    },
    {
      type: "Premium Campaign",
      subtitle: "Brand Partnerships",
      price: data.pricing?.reel || 1200,
      originalPrice: 1500,
      description: "Comprehensive campaign for major brand collaborations",
      deliverables: [
        "2 Instagram feed posts",
        "5 Instagram stories",
        "2 Reels/TikTok videos",
        "Extended usage rights",
        "Performance analytics",
        "Dedicated account manager"
      ],
      timeline: "5-7 business days",
      badge: "PREMIUM"
    }
  ];

  // Sample audience analytics
  const audienceAnalytics = {
    genderSplit: { female: 68, male: 32 },
    topAgeGroups: [
      { range: "25-34", percentage: 45 },
      { range: "18-24", percentage: 28 },
      { range: "35-44", percentage: 20 }
    ],
    topLocations: [
      { city: "New York", percentage: 18 },
      { city: "Los Angeles", percentage: 15 },
      { city: "Chicago", percentage: 12 }
    ],
    engagement: {
      avgLikes: "2.5K",
      avgComments: "180",
      avgShares: "95",
      bestPostTime: "7-9 PM EST"
    }
  };

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
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-3 gap-8 mb-12"
        >
          {/* Profile Column */}
          <div className="lg:col-span-1 text-center lg:text-left">
            {/* Brand Favorite Banner */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-full mb-4 font-semibold">
              <Award className="w-4 h-4" />
              <span>BRAND FAVORITE</span>
            </div>

            {/* Profile Image */}
            <div className="relative inline-block mb-6">
              <div className="w-40 h-40 mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gradient-to-r from-purple-600 to-teal-600 p-1">
                <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                  <span className="text-5xl font-bold text-white">
                    {data.name[0]?.toUpperCase() || 'C'}
                  </span>
                </div>
              </div>
              
              {/* Verified Badge */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-600 to-teal-600 rounded-full flex items-center justify-center">
                <Verified className="w-4 h-4 text-white fill-current" />
              </div>
              
              {/* Online Status */}
              <div className="absolute -top-2 -right-4 bg-green-500 px-2 py-1 rounded-full text-xs font-medium animate-pulse">
                🟢 Online
              </div>
            </div>

            {/* Name and Title */}
            <h1 className="text-3xl font-bold text-white mb-2">{data.name}</h1>
            <p className="text-lg text-gray-400 mb-1">@{data.handle}</p>
            
            {/* Creator Type */}
            <Badge className="mb-4 bg-gray-800 text-gray-300 border-gray-700">
              <span className="mr-1">{vibeContent.emoji}</span>
              {vibeContent.description}
            </Badge>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">{data.stats.followers || "50K"}</div>
                <div className="text-sm text-gray-400">Followers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-green-400">4.9</div>
                <div className="text-sm text-gray-400">★ Rating</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">{data.stats.engagement || "8.5%"}</div>
                <div className="text-sm text-gray-400">Engagement</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-400">&lt; 2h</div>
                <div className="text-sm text-gray-400">Response</div>
              </div>
            </div>

            {/* Response Time & Availability */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-green-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Usually responds within 2 hours</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Next available: This week</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-3 mb-6">
              {data.socialLinks.instagram && (
                <a
                  href={data.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-gray-400" />
                </a>
              )}
              {data.socialLinks.tiktok && (
                <a
                  href={data.socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Music className="w-4 h-4 text-gray-400" />
                </a>
              )}
              {data.socialLinks.youtube && (
                <a
                  href={data.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Youtube className="w-4 h-4 text-gray-400" />
                </a>
              )}
            </div>
          </div>

          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            {data.bio && (
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">About {data.name}</h3>
                  <p className="text-gray-300 leading-relaxed">{data.bio}</p>
                </CardContent>
              </Card>
            )}

            {/* Specialties */}
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Specialties</h3>
                <div className="grid grid-cols-2 gap-3">
                  {vibeContent.specialties.map((specialty, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-gray-300"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{specialty}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Big CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Start Collaboration
              </Button>
              <p className="text-sm text-gray-400 mt-2">
                Get a response within 2 hours • Free consultation
              </p>
            </div>
          </div>
        </motion.div>

        {/* Collaboration Packages - 2 Column Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Collaboration Packages</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {collabPackages.map((pkg, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors relative overflow-hidden"
              >
                {pkg.badge && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-teal-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {pkg.badge}
                  </div>
                )}
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white">{pkg.type}</h3>
                    <p className="text-sm text-gray-400">{pkg.subtitle}</p>
                  </div>
                  
                  <div className="flex items-baseline space-x-2 mb-4">
                    <span className="text-3xl font-bold text-white">${pkg.price}</span>
                    <span className="text-lg text-gray-500 line-through">${pkg.originalPrice}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{pkg.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {pkg.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>Delivery: {pkg.timeline}</span>
                  </div>
                  
                  <Button
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white border-0"
                  >
                    Select Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Audience Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Audience Analytics</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Gender Split */}
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="w-5 h-5 text-purple-400" />
                  <h3 className="font-semibold text-white">Gender Split</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">Female</span>
                      <span className="text-white">{audienceAnalytics.genderSplit.female}%</span>
                    </div>
                    <Progress value={audienceAnalytics.genderSplit.female} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">Male</span>
                      <span className="text-white">{audienceAnalytics.genderSplit.male}%</span>
                    </div>
                    <Progress value={audienceAnalytics.genderSplit.male} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Age Groups */}
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-teal-400" />
                  <h3 className="font-semibold text-white">Age Groups</h3>
                </div>
                <div className="space-y-3">
                  {audienceAnalytics.topAgeGroups.map((group, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{group.range}</span>
                        <span className="text-white">{group.percentage}%</span>
                      </div>
                      <Progress value={group.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Locations */}
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <h3 className="font-semibold text-white">Top Locations</h3>
                </div>
                <div className="space-y-3">
                  {audienceAnalytics.topLocations.map((location, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{location.city}</span>
                        <span className="text-white">{location.percentage}%</span>
                      </div>
                      <Progress value={location.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Engagement Metrics */}
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Target className="w-5 h-5 text-green-400" />
                  <h3 className="font-semibold text-white">Engagement</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Avg. Likes</span>
                    <span className="text-white">{audienceAnalytics.engagement.avgLikes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Avg. Comments</span>
                    <span className="text-white">{audienceAnalytics.engagement.avgComments}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Best Time</span>
                    <span className="text-white">{audienceAnalytics.engagement.bestPostTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Recent Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Recent Reviews</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">BM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Brand Manager</div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">
                  "Absolutely incredible work! The content quality exceeded our expectations and the engagement was phenomenal. Will definitely work with {data.name} again."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Startup Founder</div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">
                  "Professional, creative, and delivered on time. The ROI on our collaboration was amazing. Highly recommend for any brand looking for authentic content."
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-purple-900/50 to-teal-900/50 border-purple-700/50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Create Something Amazing?</h2>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                Join {data.stats.followers || "50K"} followers and dozens of satisfied brands who trust {data.name} for authentic, high-quality content.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-medium"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start Collaboration
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-lg"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Success Banner */}
      <div className="fixed bottom-6 right-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="font-medium">Page is Live! 🎉</span>
        </div>
      </div>
    </div>
  );
}
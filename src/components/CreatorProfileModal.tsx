import { useState } from 'react';
import { X, Star, Heart, MessageCircle, Play, Instagram, Youtube, Linkedin, Twitter, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { motion, AnimatePresence } from 'motion/react';

interface Creator {
  id: number;
  name: string;
  descriptor: string;
  bio: string;
  category: string;
  profileImage: string;
  instagramFollowers: string;
  twitterFollowers?: string;
  tiktokFollowers?: string;
  youtubeSubscribers?: string;
  linkedinFollowers?: string;
  startingPrice: number;
  platforms: string[];
  audienceMatch: number;
  verified: boolean;
  rating: number;
}

interface CreatorProfileModalProps {
  creator: Creator;
  isOpen: boolean;
  onClose: () => void;
  isFavorited: boolean;
  onToggleFavorite: () => void;
}

export function CreatorProfileModal({ creator, isOpen, onClose, isFavorited, onToggleFavorite }: CreatorProfileModalProps) {
  const [currentPortfolioIndex, setCurrentPortfolioIndex] = useState(0);

  // Mock data for enhanced profile
  const engagementRate = "12.5%";
  const handle = `@${creator.name.toLowerCase().replace(/\s+/g, '')}`;
  
  // Mock demographic data
  const ageData = [
    { name: '18-24', value: 35, color: '#8B5CF6' },
    { name: '25-34', value: 45, color: '#06B6D4' },
    { name: '35-44', value: 15, color: '#10B981' },
    { name: '45+', value: 5, color: '#F59E0B' },
  ];

  const genderData = [
    { name: 'Female', value: 65, color: '#EC4899' },
    { name: 'Male', value: 32, color: '#3B82F6' },
    { name: 'Other', value: 3, color: '#6B7280' },
  ];

  const locationData = [
    { name: 'India', value: 45 },
    { name: 'USA', value: 25 },
    { name: 'UK', value: 15 },
    { name: 'Canada', value: 10 },
    { name: 'Other', value: 5 },
  ];

  // Mock portfolio items
  const portfolioItems = [
    { id: 1, type: 'reel', thumbnail: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=600&fit=crop', views: '2.1M' },
    { id: 2, type: 'post', thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop', likes: '45K' },
    { id: 3, type: 'story', thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop', views: '890K' },
    { id: 4, type: 'reel', thumbnail: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop', views: '1.8M' },
    { id: 5, type: 'post', thumbnail: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=600&fit=crop', likes: '67K' },
    { id: 6, type: 'reel', thumbnail: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop', views: '3.2M' },
  ];

  // Mock packages
  const packages = [
    {
      id: 1,
      name: 'Bundle',
      description: '1 Reel + 3 Stories + 1 Post',
      price: 25000,
      recommended: true,
      features: ['Script approval', 'Revision included', 'Cross-platform posting', 'Analytics report']
    },
    {
      id: 2,
      name: 'Single Reel',
      description: 'One Instagram Reel',
      price: 15000,
      features: ['Script approval', 'One revision', '24-48h delivery']
    },
    {
      id: 3,
      name: 'Story Package',
      description: '3 Instagram Stories',
      price: 8000,
      features: ['Custom graphics', 'Swipe-up links', 'Same day delivery']
    },
    {
      id: 4,
      name: 'Static Post',
      description: 'One Instagram Post',
      price: 5000,
      features: ['Professional editing', 'Caption included', 'One revision']
    }
  ];

  // Mock testimonials
  const testimonials = [
    {
      brand: 'Nike',
      text: 'Amazing engagement and authentic content delivery. Exceeded our expectations!',
      campaign: 'Summer Collection Launch'
    },
    {
      brand: 'Spotify',
      text: 'Professional, creative, and delivered on time. Would definitely work again.',
      campaign: 'Playlist Promotion'
    }
  ];

  const formatPrice = (price: number) => {
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L`;
    } else {
      return `₹${(price / 1000).toFixed(0)}K`;
    }
  };

  const formatFollowers = (followers: string) => {
    return followers;
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Instagram": return <Instagram className="w-5 h-5" />;
      case "Twitter": return <Twitter className="w-5 h-5" />;
      case "TikTok": return <Play className="w-5 h-5" />;
      case "YouTube": return <Youtube className="w-5 h-5" />;
      case "LinkedIn": return <Linkedin className="w-5 h-5" />;
      default: return null;
    }
  };

  const getPlatformFollowers = (platform: string) => {
    switch (platform) {
      case "Instagram": return creator.instagramFollowers;
      case "Twitter": return creator.twitterFollowers;
      case "TikTok": return creator.tiktokFollowers;
      case "YouTube": return creator.youtubeSubscribers;
      case "LinkedIn": return creator.linkedinFollowers;
      default: return null;
    }
  };

  const nextPortfolio = () => {
    setCurrentPortfolioIndex((prev) => (prev + 3) % portfolioItems.length);
  };

  const prevPortfolio = () => {
    setCurrentPortfolioIndex((prev) => (prev - 3 + portfolioItems.length) % portfolioItems.length);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        
        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-gray-900 rounded-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden border border-gray-700"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Scrollable Content */}
          <div className="overflow-y-auto max-h-[90vh] pb-20">
            {/* Hero Section */}
            <div className="relative h-64 bg-gradient-to-br from-purple-600/20 to-teal-600/20">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-start space-x-4">
                  {/* Profile Photo */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
                      <ImageWithFallback
                        src={creator.profileImage}
                        alt={creator.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {creator.verified && (
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center border-3 border-gray-900">
                        <Star className="w-4 h-4 text-white fill-current" />
                      </div>
                    )}
                  </div>

                  {/* Creator Info */}
                  <div className="flex-1 text-white">
                    <h1 className="text-3xl font-bold">{creator.name}</h1>
                    <p className="text-lg text-gray-300 mt-1">{handle}</p>
                    <p className="text-gray-300 mt-2 max-w-md">{creator.descriptor}</p>
                    
                    {/* Quick Stats */}
                    <div className="flex items-center space-x-6 mt-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{creator.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                        <span className="text-sm">{creator.audienceMatch}% audience match</span>
                      </div>
                      <Badge variant="outline" className="border-white/30 text-white">
                        {creator.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-8">
              {/* Stats Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Social Media Stats */}
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-6">Social Media Reach</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {creator.platforms.map((platform) => {
                      const followers = getPlatformFollowers(platform);
                      if (!followers) return null;
                      
                      return (
                        <div key={platform} className="bg-gray-700 rounded-lg p-4">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="text-gray-300">
                              {getPlatformIcon(platform)}
                            </div>
                            <span className="text-sm text-gray-400 capitalize">{platform}</span>
                          </div>
                          <div className="text-2xl font-bold text-white">{formatFollowers(followers)}</div>
                          {platform === "Instagram" && (
                            <div className="text-sm text-gray-400 mt-1">
                              {engagementRate} avg engagement
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Audience Demographics */}
                <div className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-6">Audience Demographics</h3>
                  
                  {/* Age Chart */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-300 mb-3">Age Distribution</h4>
                    <div className="h-32">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={ageData}
                            cx="50%"
                            cy="50%"
                            innerRadius={30}
                            outerRadius={50}
                            dataKey="value"
                          >
                            {ageData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {ageData.map((entry) => (
                        <div key={entry.name} className="flex items-center space-x-1 text-xs">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></div>
                          <span className="text-gray-400">{entry.name}: {entry.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Gender & Location */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Gender</h4>
                      {genderData.map((entry) => (
                        <div key={entry.name} className="flex items-center justify-between text-sm mb-1">
                          <span className="text-gray-400">{entry.name}</span>
                          <span className="text-white">{entry.value}%</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Top Locations</h4>
                      {locationData.slice(0, 3).map((entry) => (
                        <div key={entry.name} className="flex items-center justify-between text-sm mb-1">
                          <span className="text-gray-400">{entry.name}</span>
                          <span className="text-white">{entry.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Carousel */}
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Recent Work</h3>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={prevPortfolio}
                      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 text-white" />
                    </button>
                    <button
                      onClick={nextPortfolio}
                      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {portfolioItems.slice(currentPortfolioIndex, currentPortfolioIndex + 3).map((item) => (
                    <div key={item.id} className="relative group cursor-pointer">
                      <div className="aspect-[9/16] bg-gray-700 rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={item.thumbnail}
                          alt={`Portfolio item ${item.id}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-black/60 text-white text-xs">
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </Badge>
                      </div>
                      <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                        {item.views || item.likes}
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                        <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Collaboration Packages */}
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Collaboration Packages</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`relative bg-gray-700 rounded-lg p-5 border transition-all duration-300 hover:bg-gray-650 ${
                        pkg.recommended ? 'border-purple-500 ring-1 ring-purple-500/20' : 'border-gray-600'
                      }`}
                    >
                      {pkg.recommended && (
                        <div className="absolute -top-2 left-4">
                          <Badge className="bg-purple-600 text-white">Recommended</Badge>
                        </div>
                      )}
                      
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-semibold text-white">{pkg.name}</h4>
                          <p className="text-sm text-gray-400">{pkg.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{formatPrice(pkg.price)}</div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Brand Testimonials</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testimonials.map((testimonial, idx) => (
                    <div key={idx} className="bg-gray-700 rounded-lg p-5">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg"></div>
                        <div>
                          <div className="font-medium text-white">{testimonial.brand}</div>
                          <div className="text-sm text-gray-400">{testimonial.campaign}</div>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm italic">"{testimonial.text}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sticky CTA Footer */}
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-2xl font-bold text-white">
                  {formatPrice(creator.startingPrice)}
                  <span className="text-sm text-gray-400 font-normal ml-1">starting price</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button
                  onClick={onToggleFavorite}
                  className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <Heart 
                    className={`w-5 h-5 transition-colors ${
                      isFavorited ? 'text-red-500 fill-red-500' : 'text-gray-400 hover:text-red-400'
                    }`}
                  />
                </button>
                
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message
                </Button>
                
                <Button className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white">
                  Start Collaboration
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
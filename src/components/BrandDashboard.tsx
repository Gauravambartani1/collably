import { useState } from "react";
import { Search, Filter, ChevronDown, Instagram, Youtube, Linkedin, ArrowUpDown, Users, Eye, Star, ChevronUp, Play, Heart, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Slider } from "./ui/slider";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { motion } from "motion/react";
import { CreatorProfileModal } from "./CreatorProfileModal";

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

interface BrandDashboardProps {
  onLogout: () => void;
}

export function BrandDashboard({ onLogout }: BrandDashboardProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([10000, 100000]);
  const [followerRange, setFollowerRange] = useState([20000, 2000000]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  
  // Modal state
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Filter panel state
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [followerOpen, setFollowerOpen] = useState(true);
  const [platformOpen, setPlatformOpen] = useState(true);

  const categories = ["Lifestyle", "Tech", "Comedy", "Fashion", "Fitness", "Food", "Beauty", "Travel"];
  const platforms = ["Instagram", "Twitter", "TikTok", "YouTube", "LinkedIn"];

  // Dummy creator data
  const allCreators: Creator[] = [
    {
      id: 1,
      name: "Aisha Khan",
      descriptor: "Lifestyle Creator",
      bio: "Authentic lifestyle content with a focus on wellness, travel, and everyday inspiration. Creating meaningful connections with millennial women.",
      category: "Lifestyle",
      profileImage: "https://images.unsplash.com/photo-1661436170168-7ce82d649532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjQ2NzIxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      instagramFollowers: "485K",
      twitterFollowers: "42K",
      tiktokFollowers: "320K",
      youtubeSubscribers: "125K",
      startingPrice: 25000,
      platforms: ["Instagram", "Twitter", "TikTok", "YouTube"],
      audienceMatch: 94,
      verified: true,
      rating: 4.9
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      descriptor: "Comedy & Entertainment",
      bio: "Stand-up comedian turned digital creator. Viral comedy skits and relatable content that resonates with Gen Z and millennial audiences.",
      category: "Comedy",
      profileImage: "https://images.unsplash.com/photo-1520529277867-dbf8c5e0b340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwcG9ydHJhaXRzJTIwcHJvZmlsZSUyMHBpY3R1cmVzfGVufDF8fHx8MTc1NjU1NDA2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      instagramFollowers: "1.2M",
      twitterFollowers: "156K",
      tiktokFollowers: "2.1M",
      youtubeSubscribers: "890K",
      startingPrice: 75000,
      platforms: ["Instagram", "Twitter", "TikTok", "YouTube"],
      audienceMatch: 89,
      verified: true,
      rating: 4.8
    },
    {
      id: 3,
      name: "Priya Sharma",
      descriptor: "Fashion & Style",
      bio: "Sustainable fashion advocate and style influencer. Curating affordable fashion looks and promoting conscious consumption among young professionals.",
      category: "Fashion",
      profileImage: "https://images.unsplash.com/photo-1706025090794-7ade2c1b6208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzU2NTU0MDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      instagramFollowers: "675K",
      twitterFollowers: "85K",
      tiktokFollowers: "125K",
      youtubeSubscribers: "45K",
      startingPrice: 35000,
      platforms: ["Instagram", "Twitter", "TikTok", "YouTube"],
      audienceMatch: 91,
      verified: true,
      rating: 4.7
    },
    {
      id: 4,
      name: "David Chen",
      descriptor: "Tech Reviewer & Educator",
      bio: "In-depth tech reviews and educational content for gadget enthusiasts. Helping consumers make informed decisions about their tech purchases.",
      category: "Tech",
      profileImage: "https://images.unsplash.com/photo-1611403119860-57c4937ef987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGNvbnRlbnQlMjBjcmVhdG9yJTIwcG9ydHJhaXQlMjBzbWlsZXxlbnwxfHx8fDE3NTY1NTQwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      instagramFollowers: "320K",
      twitterFollowers: "95K",
      youtubeSubscribers: "1.5M",
      linkedinFollowers: "85K",
      startingPrice: 45000,
      platforms: ["Instagram", "Twitter", "YouTube", "LinkedIn"],
      audienceMatch: 96,
      verified: true,
      rating: 4.9
    },
    {
      id: 5,
      name: "Sofia Martinez",
      descriptor: "Fitness & Wellness Coach",
      bio: "Certified fitness trainer and wellness advocate. Sharing workout routines, healthy recipes, and mindfulness practices for a balanced lifestyle.",
      category: "Fitness",
      profileImage: "https://images.unsplash.com/photo-1621011075232-00178254fa1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHlvdW5nJTIwcGVvcGxlJTIwZGl2ZXJzZSUyMHBvcnRyYWl0c3xlbnwxfHx8fDE3NTY1NTQwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      instagramFollowers: "785K",
      twitterFollowers: "128K",
      tiktokFollowers: "425K",
      youtubeSubscribers: "235K",
      startingPrice: 30000,
      platforms: ["Instagram", "Twitter", "TikTok", "YouTube"],
      audienceMatch: 88,
      verified: true,
      rating: 4.8
    },
    {
      id: 6,
      name: "Raj Patel",
      descriptor: "Food & Cooking Expert",
      bio: "Master chef and culinary storyteller. Bringing authentic Indian recipes and fusion cuisine to food lovers worldwide with easy-to-follow tutorials.",
      category: "Food",
      profileImage: "https://images.unsplash.com/photo-1613053341085-db794820ce43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxsZW5uaWFsJTIwaW5mbHVlbmNlciUyMGxpZmVzdHlsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjU1NDA3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      instagramFollowers: "520K",
      tiktokFollowers: "890K",
      youtubeSubscribers: "185K",
      startingPrice: 28000,
      platforms: ["Instagram", "TikTok", "YouTube"],
      audienceMatch: 87,
      verified: false,
      rating: 4.6
    },
    {
      id: 7,
      name: "Emma Johnson",
      descriptor: "Beauty & Skincare",
      bio: "Licensed esthetician and beauty expert. Sharing honest product reviews, skincare routines, and makeup tutorials for all skin types and budgets.",
      category: "Beauty",
      profileImage: "https://images.unsplash.com/photo-1520529277867-dbf8c5e0b340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwcG9ydHJhaXRzJTIwcHJvZmlsZSUyMHBpY3R1cmVzfGVufDF8fHx8MTc1NjU1NDA2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      instagramFollowers: "650K",
      tiktokFollowers: "1.1M",
      youtubeSubscribers: "295K",
      startingPrice: 40000,
      platforms: ["Instagram", "TikTok", "YouTube"],
      audienceMatch: 93,
      verified: true,
      rating: 4.8
    },
    {
      id: 8,
      name: "James Wilson",
      descriptor: "Travel & Adventure",
      bio: "Adventure photographer and travel enthusiast. Documenting breathtaking destinations and sharing budget travel tips for the modern explorer.",
      category: "Travel",
      profileImage: "https://images.unsplash.com/photo-1706025090794-7ade2c1b6208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzU2NTU0MDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      instagramFollowers: "425K",
      tiktokFollowers: "180K",
      youtubeSubscribers: "520K",
      startingPrice: 35000,
      platforms: ["Instagram", "TikTok", "YouTube"],
      audienceMatch: 85,
      verified: true,
      rating: 4.7
    },
    {
      id: 9,
      name: "Neha Gupta",
      descriptor: "Lifestyle & Home",
      bio: "Interior design enthusiast and home organization expert. Creating beautiful, functional spaces on a budget and sharing DIY home improvement projects.",
      category: "Lifestyle",
      profileImage: "https://images.unsplash.com/photo-1661436170168-7ce82d649532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjQ2NzIxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      instagramFollowers: "385K",
      twitterFollowers: "58K",
      youtubeSubscribers: "125K",
      startingPrice: 22000,
      platforms: ["Instagram", "Twitter", "YouTube"],
      audienceMatch: 90,
      verified: false,
      rating: 4.5
    },
    {
      id: 10,
      name: "Alex Kim",
      descriptor: "Gaming & Esports",
      bio: "Professional esports player and gaming content creator. Providing gameplay tutorials, reviews, and entertainment for the gaming community.",
      category: "Tech",
      profileImage: "https://images.unsplash.com/photo-1611403119860-57c4937ef987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGNvbnRlbnQlMjBjcmVhdG9yJTIwcG9ydHJhaXQlMjBzbWlsZXxlbnwxfHx8fDE3NTY1NTQwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      instagramFollowers: "280K",
      tiktokFollowers: "750K",
      youtubeSubscribers: "1.2M",
      startingPrice: 50000,
      platforms: ["Instagram", "TikTok", "YouTube"],
      audienceMatch: 92,
      verified: true,
      rating: 4.9
    },
    {
      id: 11,
      name: "Lila Thompson",
      descriptor: "Sustainable Fashion",
      bio: "Eco-conscious fashion blogger promoting sustainable style choices. Showcasing ethical brands, thrift finds, and slow fashion principles.",
      category: "Fashion",
      profileImage: "https://images.unsplash.com/photo-1621011075232-00178254fa1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHlvdW5nJTIwcGVvcGxlJTIwZGl2ZXJzZSUyMHBvcnRyYWl0c3xlbnwxfHx8fDE3NTY1NTQwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      instagramFollowers: "195K",
      tiktokFollowers: "85K",
      youtubeSubscribers: "65K",
      startingPrice: 18000,
      platforms: ["Instagram", "TikTok", "YouTube"],
      audienceMatch: 86,
      verified: false,
      rating: 4.4
    },
    {
      id: 12,
      name: "Carlos Rivera",
      descriptor: "Music & Entertainment",
      bio: "Singer-songwriter and music producer creating original music and covers. Connecting with music lovers through live performances and behind-the-scenes content.",
      category: "Comedy",
      profileImage: "https://images.unsplash.com/photo-1613053341085-db794820ce43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxsZW5uaWFsJTIwaW5mbHVlbmNlciUyMGxpZmVzdHlsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjU1NDA3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      instagramFollowers: "720K",
      tiktokFollowers: "1.8M",
      youtubeSubscribers: "445K",
      startingPrice: 60000,
      platforms: ["Instagram", "TikTok", "YouTube"],
      audienceMatch: 89,
      verified: true,
      rating: 4.8
    },
    {
      id: 13,
      name: "Arun Krishnan",
      descriptor: "Startup & Business",
      bio: "Serial entrepreneur and business mentor. Sharing startup insights, funding tips, and entrepreneurial journey stories for aspiring business owners.",
      category: "Tech",
      profileImage: "https://images.unsplash.com/photo-1520529277867-dbf8c5e0b340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwcG9ydHJhaXRzJTIwcHJvZmlsZSUyMHBpY3R1cmVzfGVufDF8fHx8MTc1NjU1NDA2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      instagramFollowers: "95K",
      linkedinFollowers: "125K",
      youtubeSubscribers: "85K",
      startingPrice: 32000,
      platforms: ["Instagram", "LinkedIn", "YouTube"],
      audienceMatch: 95,
      verified: true,
      rating: 4.7
    },
    {
      id: 14,
      name: "Maya Patel",
      descriptor: "Yoga & Mindfulness",
      bio: "Certified yoga instructor and mindfulness coach. Promoting mental health awareness through guided meditations, yoga flows, and self-care practices.",
      category: "Fitness",
      profileImage: "https://images.unsplash.com/photo-1706025090794-7ade2c1b6208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzU2NTU0MDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      instagramFollowers: "425K",
      twitterFollowers: "67K",
      youtubeSubscribers: "195K",
      startingPrice: 20000,
      platforms: ["Instagram", "Twitter", "YouTube"],
      audienceMatch: 88,
      verified: false,
      rating: 4.6
    }
  ];

  // Filter creators based on search and filters
  const filteredCreators = allCreators.filter(creator => {
    const matchesSearch = creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         creator.descriptor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         creator.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(creator.category);
    const matchesPrice = creator.startingPrice >= priceRange[0] && creator.startingPrice <= priceRange[1];
    
    // Convert follower strings to numbers for comparison
    const getFollowerCount = (followerStr: string) => {
      if (!followerStr) return 0;
      const num = parseFloat(followerStr);
      if (followerStr.includes('M')) return num * 1000000;
      if (followerStr.includes('K')) return num * 1000;
      return num;
    };
    
    const maxFollowers = Math.max(
      getFollowerCount(creator.instagramFollowers),
      getFollowerCount(creator.tiktokFollowers || "0"),
      getFollowerCount(creator.youtubeSubscribers || "0"),
      getFollowerCount(creator.linkedinFollowers || "0")
    );
    
    const matchesFollowers = maxFollowers >= followerRange[0] && maxFollowers <= followerRange[1];
    const matchesPlatforms = selectedPlatforms.length === 0 || 
                            selectedPlatforms.some(platform => creator.platforms.includes(platform));

    return matchesSearch && matchesCategory && matchesPrice && matchesFollowers && matchesPlatforms;
  });

  // Sort creators
  const sortedCreators = [...filteredCreators].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.startingPrice - b.startingPrice;
      case "price-high":
        return b.startingPrice - a.startingPrice;
      case "followers":
        const aFollowers = Math.max(
          parseInt(a.instagramFollowers.replace(/[KM]/g, '')) * (a.instagramFollowers.includes('M') ? 1000 : 1),
          parseInt(a.tiktokFollowers?.replace(/[KM]/g, '') || '0') * (a.tiktokFollowers?.includes('M') ? 1000 : 1)
        );
        const bFollowers = Math.max(
          parseInt(b.instagramFollowers.replace(/[KM]/g, '')) * (b.instagramFollowers.includes('M') ? 1000 : 1),
          parseInt(b.tiktokFollowers?.replace(/[KM]/g, '') || '0') * (b.tiktokFollowers?.includes('M') ? 1000 : 1)
        );
        return bFollowers - aFollowers;
      case "audience":
        return b.audienceMatch - a.audienceMatch;
      default: // featured
        return b.rating - a.rating;
    }
  });

  const formatPrice = (price: number) => {
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L`;
    } else {
      return `₹${(price / 1000).toFixed(0)}K`;
    }
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

  const getPlatformFollowers = (creator: Creator, platform: string) => {
    switch (platform) {
      case "Instagram": return creator.instagramFollowers;
      case "Twitter": return creator.twitterFollowers;
      case "TikTok": return creator.tiktokFollowers;
      case "YouTube": return creator.youtubeSubscribers;
      case "LinkedIn": return creator.linkedinFollowers;
      default: return null;
    }
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  const handlePlatformChange = (platform: string, checked: boolean) => {
    if (checked) {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    } else {
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== platform));
    }
  };

  const handleCreatorClick = (creator: Creator) => {
    setSelectedCreator(creator);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCreator(null);
  };

  const handleToggleFavorite = (creatorId: number) => {
    setFavorites(prev => 
      prev.includes(creatorId) 
        ? prev.filter(id => id !== creatorId)
        : [...prev, creatorId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Navigation */}
      <header className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg"></div>
              <span className="text-xl font-bold text-white">Collably</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button className="text-gray-300 hover:text-white transition-colors">Browse Creators</button>
              <button className="text-gray-300 hover:text-white transition-colors">Case Studies</button>
              <button className="text-gray-300 hover:text-white transition-colors">Pricing</button>
              <button className="text-gray-300 hover:text-white transition-colors">Contact Sales</button>
            </nav>

            {/* CTA */}
            <div className="flex items-center space-x-4">
              <Button 
                onClick={onLogout}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Logout
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search & Sort */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search creators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 h-12"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 bg-gray-800 border-gray-700 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="followers">Follower Count</SelectItem>
                  <SelectItem value="audience">Audience Match</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-400">
                Showing {sortedCreators.length} creators
              </p>
            </div>

            {/* Creator Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedCreators.map((creator, index) => (
                <motion.div
                  key={creator.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => handleCreatorClick(creator)}
                  className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl cursor-pointer border border-gray-700 relative"
                >
                  {/* Heart/Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleFavorite(creator.id);
                    }}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-700 transition-colors z-10"
                  >
                    <Heart 
                      className={`w-5 h-5 transition-colors ${
                        favorites.includes(creator.id) 
                          ? 'text-red-500 fill-red-500' 
                          : 'text-gray-400 hover:text-red-400'
                      }`}
                    />
                  </button>

                  {/* Main Content */}
                  <div className="flex items-start space-x-4">
                    {/* Profile Photo */}
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <ImageWithFallback
                          src={creator.profileImage}
                          alt={creator.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {creator.verified && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center border-2 border-gray-800">
                          <Star className="w-2.5 h-2.5 text-white fill-current" />
                        </div>
                      )}
                    </div>

                    {/* Creator Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white text-lg truncate">{creator.name}</h3>
                      <p className="text-gray-400 text-sm mt-1 line-clamp-2">{creator.descriptor}</p>
                    </div>
                  </div>

                  {/* Social Media Stats */}
                  <div className="flex items-center space-x-6 mt-4">
                    {creator.platforms.slice(0, 3).map((platform) => {
                      const followers = getPlatformFollowers(creator, platform);
                      if (!followers) return null;
                      
                      return (
                        <div key={platform} className="flex items-center space-x-2">
                          <div className="w-5 h-5 text-gray-400">
                            {getPlatformIcon(platform)}
                          </div>
                          <span className="text-sm text-white font-medium">{followers}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Starting Price */}
                  <div className="mt-6">
                    <div className="text-2xl font-bold text-white">
                      {formatPrice(creator.startingPrice)}
                      <span className="text-sm text-gray-400 font-normal ml-2">starting video price</span>
                    </div>
                  </div>

                  {/* Quick Stats - Hidden in compact view */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-xs text-gray-400">{creator.audienceMatch}% match</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-white">{creator.rating}</span>
                    </div>
                    <Badge 
                      variant="outline" 
                      className="text-xs border-gray-600 text-gray-300"
                    >
                      {creator.category}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Filter Sidebar */}
          <div className="w-80 bg-gray-800 rounded-xl p-6 h-fit border border-gray-700">
            <div className="flex items-center space-x-2 mb-6">
              <Filter className="w-5 h-5 text-gray-400" />
              <h3 className="font-medium text-white">Filters</h3>
            </div>

            <div className="space-y-6">
              {/* Category Filter */}
              <Collapsible open={categoryOpen} onOpenChange={setCategoryOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-left">
                  <span className="font-medium text-white">Category</span>
                  {categoryOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-3 mt-3">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                      />
                      <label htmlFor={category} className="text-sm text-gray-300 cursor-pointer">
                        {category}
                      </label>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              {/* Price Range Filter */}
              <Collapsible open={priceOpen} onOpenChange={setPriceOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-left">
                  <span className="font-medium text-white">Price Range</span>
                  {priceOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-4 mt-3">
                  <div>
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>{formatPrice(priceRange[0])}</span>
                      <span>{formatPrice(priceRange[1])}</span>
                    </div>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={100000}
                      min={10000}
                      step={5000}
                      className="w-full"
                    />
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Follower Range Filter */}
              <Collapsible open={followerOpen} onOpenChange={setFollowerOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-left">
                  <span className="font-medium text-white">Followers</span>
                  {followerOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-4 mt-3">
                  <div>
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>{followerRange[0] >= 1000000 ? `${(followerRange[0]/1000000).toFixed(1)}M` : `${(followerRange[0]/1000).toFixed(0)}K`}</span>
                      <span>{followerRange[1] >= 1000000 ? `${(followerRange[1]/1000000).toFixed(1)}M` : `${(followerRange[1]/1000).toFixed(0)}K`}</span>
                    </div>
                    <Slider
                      value={followerRange}
                      onValueChange={setFollowerRange}
                      max={2000000}
                      min={20000}
                      step={50000}
                      className="w-full"
                    />
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Platform Filter */}
              <Collapsible open={platformOpen} onOpenChange={setPlatformOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-left">
                  <span className="font-medium text-white">Platforms</span>
                  {platformOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-3 mt-3">
                  {platforms.map((platform) => (
                    <div key={platform} className="flex items-center space-x-2">
                      <Checkbox
                        id={platform}
                        checked={selectedPlatforms.includes(platform)}
                        onCheckedChange={(checked) => handlePlatformChange(platform, checked as boolean)}
                      />
                      <label htmlFor={platform} className="text-sm text-gray-300 cursor-pointer flex items-center space-x-2">
                        {getPlatformIcon(platform)}
                        <span>{platform}</span>
                      </label>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>

      {/* Creator Profile Modal */}
      {selectedCreator && (
        <CreatorProfileModal
          creator={selectedCreator}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          isFavorited={favorites.includes(selectedCreator.id)}
          onToggleFavorite={() => handleToggleFavorite(selectedCreator.id)}
        />
      )}
    </div>
  );
}
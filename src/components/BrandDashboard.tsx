import { useState } from "react";
import { Search, Filter, ChevronDown, Instagram, Youtube, Linkedin, ArrowUpDown, Users, Eye, Star, ChevronUp, Play } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Slider } from "./ui/slider";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { motion } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";

interface Creator {
  id: number;
  name: string;
  descriptor: string;
  category: string;
  profileImage: string;
  instagramFollowers: string;
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
  
  // Filter panel state
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [followerOpen, setFollowerOpen] = useState(true);
  const [platformOpen, setPlatformOpen] = useState(true);

  const categories = ["Lifestyle", "Tech", "Comedy", "Fashion", "Fitness", "Food", "Beauty", "Travel"];
  const platforms = ["Instagram", "TikTok", "YouTube", "LinkedIn"];

  // Dummy creator data
  const allCreators: Creator[] = [
    {
      id: 1,
      name: "Aisha Khan",
      descriptor: "Lifestyle Creator",
      category: "Lifestyle",
      profileImage: "https://images.unsplash.com/photo-1661436170168-7ce82d649532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjQ2NzIxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      instagramFollowers: "485K",
      tiktokFollowers: "320K",
      youtubeSubscribers: "125K",
      startingPrice: 25000,
      platforms: ["Instagram", "TikTok", "YouTube"],
      audienceMatch: 94,
      verified: true,
      rating: 4.9
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      descriptor: "Comedy & Entertainment",
      category: "Comedy",
      profileImage: "https://images.unsplash.com/photo-1520529277867-dbf8c5e0b340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwcG9ydHJhaXRzJTIwcHJvZmlsZSUyMHBpY3R1cmVzfGVufDF8fHx8MTc1NjU1NDA2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      instagramFollowers: "1.2M",
      tiktokFollowers: "2.1M",
      youtubeSubscribers: "890K",
      startingPrice: 75000,
      platforms: ["Instagram", "TikTok", "YouTube"],
      audienceMatch: 89,
      verified: true,
      rating: 4.8
    },
    {
      id: 3,
      name: "Priya Sharma",
      descriptor: "Fashion & Style",
      category: "Fashion",
      profileImage: "https://images.unsplash.com/photo-1706025090794-7ade2c1b6208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzU2NTU0MDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      instagramFollowers: "675K",
      tiktokFollowers: "125K",
      youtubeSubscribers: "45K",
      startingPrice: 35000,
      platforms: ["Instagram", "TikTok", "YouTube"],
      audienceMatch: 91,
      verified: true,
      rating: 4.7
    },
    {
      id: 4,
      name: "David Chen",
      descriptor: "Tech Reviewer & Educator",
      category: "Tech",
      profileImage: "https://images.unsplash.com/photo-1611403119860-57c4937ef987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGNvbnRlbnQlMjBjcmVhdG9yJTIwcG9ydHJhaXQlMjBzbWlsZXxlbnwxfHx8fDE3NTY1NTQwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      instagramFollowers: "320K",
      youtubeSubscribers: "1.5M",
      linkedinFollowers: "85K",
      startingPrice: 45000,
      platforms: ["Instagram", "YouTube", "LinkedIn"],
      audienceMatch: 96,
      verified: true,
      rating: 4.9
    },
    {
      id: 5,
      name: "Sofia Martinez",
      descriptor: "Fitness & Wellness Coach",
      category: "Fitness",
      profileImage: "https://images.unsplash.com/photo-1621011075232-00178254fa1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHlvdW5nJTIwcGVvcGxlJTIwZGl2ZXJzZSUyMHBvcnRyYWl0c3xlbnwxfHx8fDE3NTY1NTQwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      instagramFollowers: "785K",
      tiktokFollowers: "425K",
      youtubeSubscribers: "235K",
      startingPrice: 30000,
      platforms: ["Instagram", "TikTok", "YouTube"],
      audienceMatch: 88,
      verified: true,
      rating: 4.8
    },
    {
      id: 6,
      name: "Raj Patel",
      descriptor: "Food & Cooking Expert",
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
      category: "Lifestyle",
      profileImage: "https://images.unsplash.com/photo-1661436170168-7ce82d649532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjQ2NzIxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      instagramFollowers: "385K",
      youtubeSubscribers: "125K",
      startingPrice: 22000,
      platforms: ["Instagram", "YouTube"],
      audienceMatch: 90,
      verified: false,
      rating: 4.5
    },
    {
      id: 10,
      name: "Alex Kim",
      descriptor: "Gaming & Esports",
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
      category: "Fitness",
      profileImage: "https://images.unsplash.com/photo-1706025090794-7ade2c1b6208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzU2NTU0MDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      instagramFollowers: "425K",
      youtubeSubscribers: "195K",
      startingPrice: 20000,
      platforms: ["Instagram", "YouTube"],
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
      case "Instagram": return <Instagram className="w-4 h-4" />;
      case "TikTok": return <Play className="w-4 h-4" />;
      case "YouTube": return <Youtube className="w-4 h-4" />;
      case "LinkedIn": return <Linkedin className="w-4 h-4" />;
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

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header Navigation */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-teal-500 rounded-lg"></div>
              <span className="text-xl font-bold text-foreground">Collably</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button className="text-muted-foreground hover:text-foreground transition-colors">Browse Creators</button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">Pricing</button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">Contact Sales</button>
            </nav>

            {/* CTA */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button 
                onClick={onLogout}
                variant="outline"
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
                className="pl-10 h-12"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 bg-gray-800 border-gray-700 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
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
              <p className="text-muted-foreground">
                Showing {sortedCreators.length} creators
              </p>
            </div>

            {/* Creator Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedCreators.map((creator, index) => (
                <motion.div
                  key={creator.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 hover:bg-accent/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl cursor-pointer border border-border"
                >
                  <div className="space-y-4">
                    {/* Profile Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full overflow-hidden">
                            <ImageWithFallback
                              src={creator.profileImage}
                              alt={creator.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {creator.verified && (
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                              <Star className="w-3 h-3 text-white fill-current" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-foreground truncate">{creator.name}</h3>
                          <p className="text-sm text-muted-foreground truncate">{creator.descriptor}</p>
                        </div>
                      </div>
                      <Badge 
                        variant="outline" 
                        className="text-xs"
                      >
                        {creator.category}
                      </Badge>
                    </div>

                    {/* Platform Icons */}
                    <div className="flex items-center space-x-2">
                      {creator.platforms.map((platform) => (
                        <div key={platform} className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                          {getPlatformIcon(platform)}
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="space-y-2">
                      {creator.instagramFollowers && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Instagram</span>
                          <span className="text-foreground">{creator.instagramFollowers}</span>
                        </div>
                      )}
                      {creator.tiktokFollowers && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">TikTok</span>
                          <span className="text-foreground">{creator.tiktokFollowers}</span>
                        </div>
                      )}
                      {creator.youtubeSubscribers && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">YouTube</span>
                          <span className="text-foreground">{creator.youtubeSubscribers}</span>
                        </div>
                      )}
                      {creator.linkedinFollowers && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">LinkedIn</span>
                          <span className="text-foreground">{creator.linkedinFollowers}</span>
                        </div>
                      )}
                    </div>

                    {/* Audience Match */}
                    <div className="bg-muted rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Audience Match</span>
                        <span className="text-sm font-medium text-orange-500">{creator.audienceMatch}%</span>
                      </div>
                      <div className="w-full bg-muted-foreground/20 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-orange-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${creator.audienceMatch}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Pricing & Rating */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-bold text-foreground">{formatPrice(creator.startingPrice)}</p>
                        <p className="text-xs text-muted-foreground">starting collaboration</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-foreground">{creator.rating}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white">
                      View Profile
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Filter Sidebar */}
          <div className="w-80 bg-card rounded-xl p-6 h-fit border border-border">
            <div className="flex items-center space-x-2 mb-6">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <h3 className="font-medium text-foreground">Filters</h3>
            </div>

            <div className="space-y-6">
              {/* Category Filter */}
              <Collapsible open={categoryOpen} onOpenChange={setCategoryOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-left">
                  <span className="font-medium text-foreground">Category</span>
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
                      <label htmlFor={category} className="text-sm text-muted-foreground cursor-pointer">
                        {category}
                      </label>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              {/* Price Range Filter */}
              <Collapsible open={priceOpen} onOpenChange={setPriceOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-left">
                  <span className="font-medium text-foreground">Price Range</span>
                  {priceOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-4 mt-3">
                  <div className="px-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={100000}
                      min={10000}
                      step={5000}
                      className="w-full"
                    />
                    <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                      <span>{formatPrice(priceRange[0])}</span>
                      <span>{formatPrice(priceRange[1])}</span>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Follower Count Filter */}
              <Collapsible open={followerOpen} onOpenChange={setFollowerOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-left">
                  <span className="font-medium text-foreground">Follower Count</span>
                  {followerOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-4 mt-3">
                  <div className="px-2">
                    <Slider
                      value={followerRange}
                      onValueChange={setFollowerRange}
                      max={2000000}
                      min={20000}
                      step={50000}
                      className="w-full"
                    />
                    <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                      <span>{followerRange[0] >= 1000000 ? `${(followerRange[0]/1000000).toFixed(1)}M` : `${(followerRange[0]/1000).toFixed(0)}K`}</span>
                      <span>{followerRange[1] >= 1000000 ? `${(followerRange[1]/1000000).toFixed(1)}M` : `${(followerRange[1]/1000).toFixed(0)}K`}</span>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Platform Filter */}
              <Collapsible open={platformOpen} onOpenChange={setPlatformOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-left">
                  <span className="font-medium text-foreground">Platforms</span>
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
                      <label htmlFor={platform} className="text-sm text-muted-foreground cursor-pointer flex items-center space-x-2">
                        {getPlatformIcon(platform)}
                        <span>{platform}</span>
                      </label>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Clear Filters */}
            <Button 
              variant="outline" 
              className="w-full mt-6"
              onClick={() => {
                setSelectedCategories([]);
                setSelectedPlatforms([]);
                setPriceRange([10000, 100000]);
                setFollowerRange([20000, 2000000]);
                setSearchQuery("");
              }}
            >
              Clear All Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Instagram, Youtube, Video, Mail, Award, Zap, Music } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  name: string;
  handle: string;
  tagline: string;
  followers: string;
  engagement: string;
  platform: string;
  instagram?: string;
  tiktok?: string;
  vibe: string;
  accentColor: string;
}

export function HeroSection({
  name,
  handle,
  tagline,
  followers,
  engagement,
  platform,
  instagram,
  tiktok,
  vibe,
  accentColor
}: HeroSectionProps) {
  return (
    <div className="relative bg-gradient-to-br from-orange-100 to-white py-12 px-4 overflow-hidden">
      {/* Background Pattern for Visual Interest */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-500 rounded-full"></div>
        <div className="absolute top-32 right-16 w-12 h-12 bg-orange-400 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-orange-300 rounded-full"></div>
      </div>

      <div className="max-w-sm mx-auto text-center relative z-10">
        {/* Authority Badge */}
        <div className="inline-flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-full mb-4 shadow-lg">
          <Award className="w-4 h-4" />
          <span className="text-sm font-medium">Verified Creator</span>
        </div>

        {/* Profile Image with Enhanced Visual Hierarchy */}
        <div className="relative mb-6">
          <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl relative">
            <div className="w-full h-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-4xl font-bold">
              {name[0]?.toUpperCase() || 'C'}
            </div>
            {/* Online Status Indicator - Trust Signal */}
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          {/* Social Proof - Live Indicator */}
          <div className="absolute -top-2 -right-2 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">
            <Zap className="w-3 h-3 inline mr-1" />
            LIVE
          </div>
        </div>

        {/* Name and Handle with Authority */}
        <h1 className="mb-2 text-gray-900">{name}</h1>
        <p className="text-orange-600 mb-1">@{handle}</p>
        
        {/* Credibility Indicators */}
        <div className="flex justify-center items-center space-x-4 mb-6 text-sm text-gray-600">
          <span className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            Verified
          </span>
          <span className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Active Today
          </span>
        </div>

        {/* Enhanced Value Proposition */}
        <div className="bg-white/80 backdrop-blur rounded-lg p-4 mb-6 border border-orange-200 shadow-lg">
          <p className="text-gray-800 mb-2 font-medium">
            🚀 {tagline}
          </p>
          <p className="text-gray-600 text-sm">
            {vibe.charAt(0).toUpperCase() + vibe.slice(1)} Creator • {followers} Engaged Followers
            {engagement && ` • ${engagement} Avg Engagement`} ✨
          </p>
        </div>

        {/* Social Links with Enhanced Visual Appeal */}
        <div className="flex justify-center space-x-3 mb-6">
          {instagram && (
            <a 
              href={instagram} 
              className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center hover:from-orange-500 hover:to-orange-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
          )}
          {tiktok && (
            <a 
              href={tiktok} 
              className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center hover:from-orange-500 hover:to-orange-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
              aria-label="TikTok"
            >
              <Music className="w-6 h-6 text-white" />
            </a>
          )}
          <a 
            href="#contact" 
            className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center hover:from-orange-500 hover:to-orange-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-white" />
          </a>
        </div>

        {/* Urgency/Scarcity Indicator */}
        <div className="bg-orange-600 text-white px-6 py-3 rounded-full inline-flex items-center space-x-2 font-medium shadow-lg">
          <span className="w-2 h-2 bg-orange-300 rounded-full animate-ping"></span>
          <span>2 Collaboration Spots Available This Month</span>
        </div>
      </div>
    </div>
  );
}
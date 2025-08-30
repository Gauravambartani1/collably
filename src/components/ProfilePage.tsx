import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { HeroSection } from "./HeroSection";
import { AudienceSnapshot } from "./AudienceSnapshot";
import { ServicesSection } from "./ServicesSection";
import { PastCollabsSection } from "./PastCollabsSection";
import { ContactForm } from "./ContactForm";
import { OnboardingData } from "./Onboarding";

interface ProfilePageProps {
  data: OnboardingData;
  onBackToLanding: () => void;
}

export function ProfilePage({ data, onBackToLanding }: ProfilePageProps) {
  const getVibeColors = (vibe: string) => {
    const colors = {
      fashion: { primary: '#ec4899', secondary: '#f9a8d4' },
      fitness: { primary: '#10b981', secondary: '#6ee7b7' },
      lifestyle: { primary: '#f59e0b', secondary: '#fcd34d' },
      tech: { primary: '#3b82f6', secondary: '#93c5fd' },
      gaming: { primary: '#8b5cf6', secondary: '#c4b5fd' },
      beauty: { primary: '#ec4899', secondary: '#f9a8d4' },
      food: { primary: '#ef4444', secondary: '#fca5a5' },
    };
    return colors[vibe as keyof typeof colors] || colors.lifestyle;
  };

  const vibeColors = getVibeColors(data.vibe);

  // Convert onboarding data to profile format
  const profileData = {
    name: data.name || "Creator Name",
    handle: data.handle || "creator",
    tagline: data.tagline || "Creating amazing content that inspires and engages",
    followers: data.stats.followers || "50K",
    engagement: data.stats.engagement || "8.5%",
    platform: data.stats.platform || "instagram",
    instagram: data.socialLinks.instagram,
    tiktok: data.socialLinks.tiktok,
    vibe: data.vibe,
    collabOptions: data.collabOptions || []
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      {/* Header with Back Button */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onBackToLanding}
            className="text-gray-600 hover:text-gray-900 group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
          
          <div className="text-sm text-gray-500">
            collably.co/{profileData.handle}
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-orange-600 hover:text-orange-700"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Page
          </Button>
        </div>
      </div>

      {/* Profile Content */}
      <div className="space-y-0">
        <HeroSection 
          name={profileData.name}
          handle={profileData.handle}
          tagline={profileData.tagline}
          followers={profileData.followers}
          engagement={profileData.engagement}
          platform={profileData.platform}
          instagram={profileData.instagram}
          tiktok={profileData.tiktok}
          vibe={profileData.vibe}
          accentColor={vibeColors.primary}
        />
        
        <AudienceSnapshot 
          vibe={profileData.vibe}
          accentColor={vibeColors.primary}
        />
        
        <ServicesSection 
          collabOptions={profileData.collabOptions}
          vibe={profileData.vibe}
          accentColor={vibeColors.primary}
        />
        
        <PastCollabsSection 
          vibe={profileData.vibe}
          accentColor={vibeColors.primary}
        />
        
        <ContactForm 
          creatorName={profileData.name}
          accentColor={vibeColors.primary}
        />
      </div>

      {/* Success Banner */}
      <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg z-50">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="font-medium">Page is Live! 🎉</span>
        </div>
      </div>
    </div>
  );
}
import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { Onboarding, OnboardingData } from "./components/Onboarding";
import { ProfilePage } from "./components/ProfilePage";
import { BrandLandingPage } from "./components/BrandLandingPage";
import { BrandOnboarding, BrandOnboardingData } from "./components/BrandOnboarding";
import { BrandDashboard } from "./components/BrandDashboard";

type AppView = 'landing' | 'onboarding' | 'profile' | 'brand-landing' | 'brand-onboarding' | 'brand-dashboard';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('landing');
  const [profileData, setProfileData] = useState<OnboardingData | null>(null);
  const [brandData, setBrandData] = useState<BrandOnboardingData | null>(null);

  const handleStartOnboarding = () => {
    setCurrentView('onboarding');
  };

  const handleOnboardingComplete = (data: OnboardingData) => {
    setProfileData(data);
    setCurrentView('profile');
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
  };

  const handleGoToBrandLanding = () => {
    setCurrentView('brand-landing');
  };

  const handleStartBrandOnboarding = () => {
    setCurrentView('brand-onboarding');
  };

  const handleBrandOnboardingComplete = (data: BrandOnboardingData) => {
    setBrandData(data);
    setCurrentView('brand-dashboard');
  };

  const handleBackToBrandLanding = () => {
    setCurrentView('brand-landing');
  };

  return (
    <div className="dark min-h-screen bg-gray-900 text-white">
      {currentView === 'landing' && (
        <LandingPage 
          onStartOnboarding={handleStartOnboarding}
          onGoToBrandLanding={handleGoToBrandLanding}
        />
      )}
      
      {currentView === 'onboarding' && (
        <Onboarding onComplete={handleOnboardingComplete} />
      )}
      
      {currentView === 'profile' && profileData && (
        <ProfilePage 
          data={profileData} 
          onBackToLanding={handleBackToLanding}
        />
      )}

      {currentView === 'brand-landing' && (
        <BrandLandingPage 
          onStartOnboarding={handleStartBrandOnboarding}
          onBackToCreatorLanding={handleBackToLanding}
        />
      )}

      {currentView === 'brand-onboarding' && (
        <BrandOnboarding 
          onComplete={handleBrandOnboardingComplete}
          onBack={handleBackToBrandLanding}
        />
      )}

      {currentView === 'brand-dashboard' && brandData && (
        <BrandDashboard 
          onLogout={handleBackToBrandLanding}
        />
      )}
    </div>
  );
}
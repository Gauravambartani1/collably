import { LandingHero } from "./LandingHero";
import { ProblemSolution } from "./ProblemSolution";
import { FeaturesSection } from "./FeaturesSection";
import { SocialProofSection } from "./SocialProofSection";
import { FinalCTA } from "./FinalCTA";
import { LandingFooter } from "./LandingFooter";

interface LandingPageProps {
  onStartOnboarding: () => void;
  onGoToBrandLanding: () => void;
}

export function LandingPage({ onStartOnboarding, onGoToBrandLanding }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gray-900">
      <LandingHero onStartOnboarding={onStartOnboarding} onGoToBrandLanding={onGoToBrandLanding} />
      <ProblemSolution />
      <FeaturesSection />
      <SocialProofSection />
      <FinalCTA onStartOnboarding={onStartOnboarding} onGoToBrandLanding={onGoToBrandLanding} />
      <LandingFooter />
    </div>
  );
}
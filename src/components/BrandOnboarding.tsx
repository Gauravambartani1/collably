import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle, Upload, Building, Users2, Globe, Briefcase, Eye, TrendingUp, BarChart3, Target, Clock, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export interface BrandOnboardingData {
  name: string;
  workEmail: string;
  companyName: string;
  companySize: string;
  industry: string;
  website: string;
  logo?: File;
}

interface BrandOnboardingProps {
  onComplete: (data: BrandOnboardingData) => void;
  onBack: () => void;
}

export function BrandOnboarding({ onComplete, onBack }: BrandOnboardingProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<BrandOnboardingData>({
    name: "",
    workEmail: "",
    companyName: "",
    companySize: "",
    industry: "",
    website: "",
  });

  const totalSteps = 3; // Personal info, Company info, Success

  const companySizes = [
    "1-10 employees",
    "11-50 employees", 
    "51-200 employees",
    "201-500 employees",
    "501-1,000 employees",
    "1,000+ employees"
  ];

  const industries = [
    "Technology",
    "E-commerce",
    "Fashion & Beauty",
    "Health & Wellness",
    "Food & Beverage",
    "Travel & Hospitality",
    "Entertainment & Media",
    "Financial Services",
    "Education",
    "Non-profit",
    "Other"
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(data);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setData({ ...data, logo: file });
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return data.name.trim() !== "" && data.workEmail.trim() !== "";
      case 2:
        return data.companyName.trim() !== "" && data.companySize !== "" && data.industry !== "" && data.website.trim() !== "";
      case 3:
        return true;
      default:
        return false;
    }
  };

  const getLeftSideContent = () => {
    switch (currentStep) {
      case 1:
        return {
          title: "Join 500+ brands getting real results",
          subtitle: "From startups to Fortune 500 companies, brands trust Collably to connect with the right creators and drive measurable outcomes.",
          features: [
            { icon: TrendingUp, text: "Average 4.2x ROI on campaigns" },
            { icon: Clock, text: "Launch campaigns 10x faster" },
            { icon: Eye, text: "Verified creator metrics" }
          ],
          image: "https://images.unsplash.com/photo-1624555130666-eb3a38b6c3b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBzdGFydHVwfGVufDF8fHx8MTc1NjU1MzcxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        };
      case 2:
        return {
          title: "Get matched with creators who fit your brand",
          subtitle: "Our platform uses your company details to find creators who align with your industry, audience, and goals.",
          features: [
            { icon: Target, text: "Smart creator matching" },
            { icon: BarChart3, text: "Real-time campaign tracking" },
            { icon: Zap, text: "Automated campaign management" }
          ],
          image: "https://images.unsplash.com/photo-1677506050775-18ac86b9c2c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjB0ZWFtJTIwY29sbGFib3JhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTY1NTM3MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        };
      case 3:
        return {
          title: "You're ready to start creating",
          subtitle: "Your account is set up and we're already matching you with the perfect creators for your brand.",
          features: [
            { icon: CheckCircle, text: "Account created successfully" },
            { icon: Users2, text: "Creator matching in progress" },
            { icon: Building, text: "Campaign dashboard ready" }
          ],
          image: "https://images.unsplash.com/photo-1538688210005-863b336def45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGNhbXBhaWduJTIwc3VjY2VzcyUyMG1ldHJpY3MlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU2NTUzNzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        };
      default:
        return {
          title: "",
          subtitle: "",
          features: [],
          image: ""
        };
    }
  };

  const leftContent = getLeftSideContent();

  return (
    <div className="min-h-screen bg-white flex">
      
      {/* Left Side - Visual Content */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={leftContent.image}
            alt="Brand collaboration"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center px-12 py-16">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl"></div>
              <span className="text-2xl font-bold">Collably</span>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold leading-tight">
                  {leftContent.title}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {leftContent.subtitle}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {leftContent.features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    >
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-orange-400" />
                      </div>
                      <span className="text-gray-200">{feature.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Brands</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24hrs</div>
                <div className="text-sm text-gray-400">Avg Match</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.2x</div>
                <div className="text-sm text-gray-400">Avg ROI</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col">
        
        {/* Header */}
        <div className="flex-shrink-0 px-8 py-6 border-b border-gray-100 bg-white">
          <div className="flex items-center justify-between">
            <div className="lg:hidden flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg"></div>
              <span className="font-bold text-gray-900 text-xl">Collably</span>
            </div>
            
            <div className="flex items-center space-x-4 ml-auto">
              <span className="text-sm text-gray-600">
                Step {currentStep} of {totalSteps}
              </span>
              <div className="flex space-x-1">
                {[...Array(totalSteps)].map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index < currentStep ? 'bg-orange-500' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 flex flex-col justify-center px-8 py-12">
          <div className="max-w-md mx-auto w-full space-y-8">
            
            {/* Step 1: Personal Info */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Let's get started
                  </h2>
                  <p className="text-gray-600">
                    Tell us about yourself to create your account
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={data.name}
                      onChange={(e) => setData({ ...data, name: e.target.value })}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="workEmail">Work Email</Label>
                    <Input
                      id="workEmail"
                      type="email"
                      placeholder="you@company.com"
                      value={data.workEmail}
                      onChange={(e) => setData({ ...data, workEmail: e.target.value })}
                      className="h-12"
                    />
                  </div>
                </div>

                <p className="text-sm text-gray-500">
                  By continuing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </motion.div>
            )}

            {/* Step 2: Company Info */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-gray-900">
                    About your company
                  </h2>
                  <p className="text-gray-600">
                    Help us match you with the right creators
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      placeholder="Your company name"
                      value={data.companyName}
                      onChange={(e) => setData({ ...data, companyName: e.target.value })}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companySize">Company Size</Label>
                    <Select onValueChange={(value) => setData({ ...data, companySize: value })}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        {companySizes.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select onValueChange={(value) => setData({ ...data, industry: value })}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      placeholder="https://yourcompany.com"
                      value={data.website}
                      onChange={(e) => setData({ ...data, website: e.target.value })}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="logo">Company Logo (Optional)</Label>
                    <div className="relative">
                      <input
                        id="logo"
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <Label
                        htmlFor="logo"
                        className="flex items-center justify-center h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-orange-400 transition-colors"
                      >
                        <div className="text-center space-y-2">
                          <Upload className="w-6 h-6 text-gray-400 mx-auto" />
                          <div className="text-sm text-gray-600">
                            {data.logo ? data.logo.name : "Click to upload logo"}
                          </div>
                        </div>
                      </Label>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Success */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8 text-center"
              >
                <div className="space-y-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-gray-900">
                      You're all set!
                    </h2>
                    <p className="text-gray-600">
                      Welcome to Collably, {data.name.split(' ')[0]}! Your account is ready.
                    </p>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 text-left">
                  <h4 className="font-medium text-gray-900 mb-4">What happens next?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-orange-600">1</span>
                      </div>
                      <span className="text-sm text-gray-600">We're analyzing your company profile</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-orange-600">2</span>
                      </div>
                      <span className="text-sm text-gray-600">You'll receive creator matches within 24 hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-orange-600">3</span>
                      </div>
                      <span className="text-sm text-gray-600">Launch your first campaign</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <p className="text-sm text-gray-500">
                    Check your email ({data.workEmail}) for next steps.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8">
              <Button
                onClick={handlePrevious}
                variant="outline"
                className="flex items-center space-x-2 px-6 py-3"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </Button>

              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <span>
                  {currentStep === 1 ? "Continue" : 
                   currentStep === 2 ? "Complete Setup" : 
                   "Go to Dashboard"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
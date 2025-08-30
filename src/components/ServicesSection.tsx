import { Camera, Video, Gift, Calendar, CheckCircle, Star, TrendingUp, Clock, Mic, Users, ShoppingBag, Handshake } from "lucide-react";

interface ServicesSectionProps {
  collabOptions: string[];
  vibe: string;
  accentColor: string;
}

export function ServicesSection({ collabOptions, vibe, accentColor }: ServicesSectionProps) {
  const collabTypeToService = {
    'sponsored-posts': {
      icon: Camera,
      title: "Sponsored Posts",
      description: "High-quality feed posts with authentic storytelling",
      features: ["Professional photography", "Branded content", "Story highlights"],
      pricing: "Starting at $500",
      roi: "Average 2.5x ROI",
      deliveryTime: "3-5 days"
    },
    'reels-videos': {
      icon: Video,
      title: "Reels & Video Content",
      description: "Engaging short-form video content that converts",
      features: ["Trending formats", "Product showcases", "Behind-the-scenes"],
      pricing: "Starting at $800",
      roi: "Average 4x ROI",
      deliveryTime: "5-7 days"
    },
    'giveaways': {
      icon: Gift,
      title: "Giveaways & Contests",
      description: "Boost brand awareness through strategic partnerships",
      features: ["Contest management", "Entry tracking", "Winner selection"],
      pricing: "Starting at $1,200",
      roi: "Average 6x reach",
      deliveryTime: "2-3 weeks"
    },
    'events': {
      icon: Calendar,
      title: "Events & Appearances",
      description: "In-person brand activations and virtual events",
      features: ["Event coverage", "Live streaming", "Meet & greets"],
      pricing: "Custom pricing",
      roi: "Premium exposure",
      deliveryTime: "Custom timeline"
    },
    'brand-ambassador': {
      icon: Handshake,
      title: "Brand Ambassador",
      description: "Long-term partnerships for sustained brand growth",
      features: ["Monthly content", "Exclusive partnerships", "Performance tracking"],
      pricing: "Monthly retainers",
      roi: "Long-term ROI",
      deliveryTime: "Ongoing"
    },
    'product-reviews': {
      icon: ShoppingBag,
      title: "Product Reviews",
      description: "Honest testimonials that build trust with audiences",
      features: ["Detailed reviews", "Unboxing videos", "Comparison content"],
      pricing: "Starting at $400",
      roi: "High conversion",
      deliveryTime: "3-5 days"
    },
    'live-sessions': {
      icon: Users,
      title: "Live Sessions",
      description: "Real-time engagement through live streams and Q&As",
      features: ["Live streaming", "Q&A sessions", "Product demos"],
      pricing: "Starting at $600",
      roi: "Direct engagement",
      deliveryTime: "Scheduled"
    },
    'podcast-guest': {
      icon: Mic,
      title: "Podcast Appearances",
      description: "Share expertise and promote brands through audio content",
      features: ["Interview prep", "Show notes", "Cross-promotion"],
      pricing: "Starting at $300",
      roi: "Niche targeting",
      deliveryTime: "Flexible"
    }
  };

  // Create services array based on selected collab options
  const services = collabOptions.map((optionId, index) => ({
    ...collabTypeToService[optionId as keyof typeof collabTypeToService],
    popular: index === 0 // Make first selected option popular
  })).filter(Boolean);

  // Add default services if none selected
  if (services.length === 0) {
    services.push(
      { ...collabTypeToService['sponsored-posts'], popular: false },
      { ...collabTypeToService['reels-videos'], popular: true },
      { ...collabTypeToService['giveaways'], popular: false }
    );
  }

  return (
    <div className="py-12 px-4 bg-gradient-to-br from-orange-100 to-orange-50">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full mb-4 shadow-lg">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Most Requested Services</span>
          </div>
          <h2 className="mb-2 text-gray-900">Services & Collaborations</h2>
          <p className="text-gray-600">Proven content formats that deliver results</p>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-2 relative overflow-hidden transform hover:-translate-y-1 transition-all duration-300 ${
                service.popular ? 'border-orange-400 shadow-orange-200' : 'border-orange-200'
              }`}>
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                    Most Popular ⭐
                  </div>
                )}
                
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg ${
                    service.popular ? 'ring-2 ring-orange-300' : ''
                  }`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-gray-900 flex items-center">
                      {service.title}
                      {service.popular && <Star className="w-4 h-4 ml-2 text-orange-500 fill-current" />}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm">{service.description}</p>
                    
                    {/* ROI & Delivery Info */}
                    <div className="flex items-center space-x-4 mb-3 text-xs">
                      <div className="flex items-center text-green-600">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        <span className="font-medium">{service.roi}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{service.deliveryTime}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-1 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className={`font-medium text-sm ${
                      service.popular ? 'text-orange-600' : 'text-orange-600'
                    }`}>{service.pricing}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Custom Package Section */}
        <div className="mt-8">
          <div className="bg-gradient-to-br from-white to-orange-50 rounded-xl p-6 shadow-lg border border-orange-200 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500 opacity-10 rounded-full -mr-10 -mt-10"></div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-2 text-gray-900">Custom Campaign Packages</h3>
              <p className="text-gray-600 text-sm mb-4">
                Need something specific? I create tailored collaboration packages 
                with guaranteed results based on your unique goals.
              </p>
              
              {/* Value Props */}
              <div className="grid grid-cols-2 gap-3 text-xs text-gray-600 mb-4">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                  Flexible pricing
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                  ROI guarantee
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                  Multi-platform
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                  Priority support
                </div>
              </div>
              
              <div className="inline-flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                <span>Book free 15-min strategy call</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
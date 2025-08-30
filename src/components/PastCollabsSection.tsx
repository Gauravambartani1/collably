import { Star, TrendingUp, Eye, Heart, CheckCircle, Award, ExternalLink, ArrowRight, Quote, Users, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PastCollabsSectionProps {
  vibe: string;
  accentColor: string;
}

export function PastCollabsSection({ vibe, accentColor }: PastCollabsSectionProps) {
  const brands = [
    { name: "Glossier", tier: "Premium" },
    { name: "Sephora", tier: "Premium" },
    { name: "ASOS", tier: "Fashion" },
    { name: "Nike", tier: "Athletic" },
    { name: "Anthropologie", tier: "Lifestyle" },
    { name: "Urban Outfitters", tier: "Fashion" }
  ];

  const testimonials = [
    {
      brand: "Glossier",
      text: "Sarah's authentic approach to product integration resulted in a 40% increase in engagement and 25% boost in sales for our campaign.",
      author: "Marketing Director",
      rating: 5,
      metric: "40% engagement ↗",
      campaign: "Summer Glow Collection"
    },
    {
      brand: "ASOS",
      text: "Professional, creative, and always delivers on time. Her audience loves the content she creates and our ROI was exceptional.",
      author: "Brand Manager",
      rating: 5,
      metric: "3.2x ROI",
      campaign: "Fall Fashion Week"
    },
    {
      brand: "Nike",
      text: "The storytelling and visual quality exceeded our expectations. Sarah drove more conversions than any other creator partner.",
      author: "Campaign Lead",
      rating: 5,
      metric: "127% sales lift",
      campaign: "Air Max Launch"
    }
  ];

  return (
    <div className="py-12 px-4 bg-white">
      <div className="max-w-md mx-auto">
        {/* Enhanced Header with Social Proof */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full mb-4 shadow-lg">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">Trusted by Leading Brands</span>
          </div>
          <h2 className="mb-2 text-gray-900">Past Collaborations</h2>
          <p className="text-gray-600">Join the brands seeing real results</p>
        </div>

        {/* Enhanced Brand Logos Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-3 gap-4">
            {brands.map((brand, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 flex flex-col items-center justify-center min-h-[100px] border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-gray-800 font-medium text-center mb-1">{brand.name}</span>
                <span className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded-full">{brand.tier}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Testimonials */}
        <div className="space-y-6 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-gray-900 mb-2 flex items-center justify-center">
              <Quote className="w-5 h-5 mr-2 text-orange-500" />
              What Brands Say
            </h3>
            <p className="text-gray-600 text-sm">Real feedback from real campaigns</p>
          </div>
          
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border border-orange-200 shadow-lg">
              {/* Campaign Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-medium">{testimonial.brand[0]}</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{testimonial.brand}</div>
                    <div className="text-xs text-gray-500">{testimonial.campaign}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-green-600">{testimonial.metric}</div>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex items-start space-x-3">
                <Quote className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 mb-3 italic">"{testimonial.text}"</p>
                  <div className="text-sm text-gray-600">
                    — {testimonial.author}, {testimonial.brand}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-2xl mb-8">
          <h3 className="text-center mb-6 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Performance Highlights
          </h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur">
              <Users className="w-6 h-6 mx-auto mb-2" />
              <div className="font-medium mb-1">50+</div>
              <p className="text-orange-100 text-xs">Brand Partners</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur">
              <Award className="w-6 h-6 mx-auto mb-2" />
              <div className="font-medium mb-1">95%</div>
              <p className="text-orange-100 text-xs">Repeat Rate</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur">
              <Star className="w-6 h-6 mx-auto mb-2" />
              <div className="font-medium mb-1">4.9★</div>
              <p className="text-orange-100 text-xs">Avg Rating</p>
            </div>
          </div>
        </div>

        {/* ROI Showcase */}
        <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-200 shadow-lg">
          <div className="text-center">
            <Target className="w-8 h-8 mx-auto mb-3 text-green-600" />
            <h3 className="mb-3 text-gray-900">Average Campaign Results</h3>
            <div className="grid grid-cols-2 gap-4 text-center mb-4">
              <div>
                <div className="text-2xl font-bold text-green-600">3.8x</div>
                <div className="text-sm text-gray-600">Average ROI</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">127%</div>
                <div className="text-sm text-gray-600">Sales Increase</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Consistent results across fashion, beauty, and lifestyle brands
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
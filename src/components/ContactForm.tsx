import { useState } from "react";
import { Send, Calendar, Zap, CheckCircle, Clock, Star, Award, Users, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface ContactFormProps {
  creatorName: string;
  accentColor: string;
}

export function ContactForm({ creatorName, accentColor }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brandName: "",
    email: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        brandName: "",
        email: "",
        budget: "",
        message: ""
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="py-12 px-4 bg-gradient-to-br from-orange-100 to-orange-50">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl p-8 text-center shadow-2xl border border-orange-200">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="mb-3 text-gray-900">🎉 Collaboration Request Received!</h3>
            <p className="text-gray-600 mb-4">
              Thank you for your interest! You'll receive a detailed proposal within 
              <span className="font-medium text-orange-600"> 6 hours</span> with custom pricing and timeline.
            </p>
            <div className="bg-orange-50 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-700">
                <Clock className="w-4 h-4 inline mr-2" />
                Average response time: <span className="font-medium">3.2 hours</span>
              </p>
            </div>
            <p className="text-sm text-gray-500">
              Check your inbox and follow me for behind-the-scenes content!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 bg-gradient-to-br from-orange-100 to-orange-50">
      <div className="max-w-md mx-auto">
        {/* Urgency Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-full mb-4 shadow-lg animate-pulse">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Limited Spots Available - Act Fast!</span>
          </div>
          <h2 className="mb-2 text-gray-900">Let's Create Something Viral Together</h2>
          <p className="text-gray-600">Join 50+ brands who've seen average 3x ROI</p>
        </div>

        {/* Social Proof Mini-Banner */}
        <div className="bg-white rounded-lg p-4 mb-6 shadow-lg border border-orange-200">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-600">
              <Users className="w-4 h-4 mr-2" />
              <span>12 brands contacted this week</span>
            </div>
            <div className="flex items-center text-yellow-600">
              <Star className="w-4 h-4 mr-1 fill-current" />
              <span className="font-medium">4.9/5 rating</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-2xl space-y-6 border border-orange-200">
          {/* Trust Signal Header */}
          <div className="flex items-center justify-center space-x-2 text-green-600 mb-4">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">Secure & Confidential</span>
          </div>

          {/* Brand Name */}
          <div className="space-y-2">
            <Label htmlFor="brandName" className="flex items-center">
              Brand Name *
              <span className="ml-2 text-xs text-gray-500">(helps me personalize proposal)</span>
            </Label>
            <Input
              id="brandName"
              type="text"
              placeholder="e.g., Nike, Glossier, Local Coffee Co."
              value={formData.brandName}
              onChange={(e) => handleInputChange("brandName", e.target.value)}
              required
              className="bg-orange-50 border-orange-200 focus:border-orange-400 focus:ring-orange-400"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center">
              Business Email *
              <span className="ml-2 text-xs text-gray-500">(for proposal delivery)</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="marketing@yourbrand.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              className="bg-orange-50 border-orange-200 focus:border-orange-400 focus:ring-orange-400"
            />
          </div>

          {/* Budget Range with Psychology */}
          <div className="space-y-2">
            <Label htmlFor="budget" className="flex items-center">
              Investment Range
              <span className="ml-2 text-xs text-green-600">(unlock exclusive packages)</span>
            </Label>
            <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
              <SelectTrigger className="bg-orange-50 border-orange-200">
                <SelectValue placeholder="Select your budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-1k">Starter Package: Under $1,000</SelectItem>
                <SelectItem value="1k-5k">Growth Package: $1,000 - $5,000 ⭐</SelectItem>
                <SelectItem value="5k-10k">Premium Package: $5,000 - $10,000 🚀</SelectItem>
                <SelectItem value="10k-plus">Enterprise Package: $10,000+ 👑</SelectItem>
                <SelectItem value="discuss">Custom Solution - Let's discuss</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message with Guiding Questions */}
          <div className="space-y-2">
            <Label htmlFor="message">Campaign Details *</Label>
            <Textarea
              id="message"
              placeholder="Tell me about:
• Your brand and target audience
• Campaign goals (awareness, sales, engagement?)
• Timeline and key dates
• Any specific ideas or requirements
• What success looks like to you"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              required
              rows={6}
              className="bg-orange-50 border-orange-200 focus:border-orange-400 focus:ring-orange-400 resize-none"
            />
          </div>

          {/* Enhanced Submit Button with Psychology */}
          <div className="space-y-4">
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
              disabled={!formData.brandName || !formData.email || !formData.message}
            >
              <Send className="w-5 h-5 mr-2" />
              Send My Collaboration Request
            </Button>
            
            {/* Immediate Value Promise */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                ⚡ <span className="font-medium">Instant confirmation</span> + detailed proposal within 6 hours
              </p>
            </div>
          </div>

          {/* Trust Building Footer */}
          <div className="border-t border-gray-200 pt-4">
            <div className="grid grid-cols-3 gap-4 text-center text-xs text-gray-500">
              <div>
                <div className="font-medium text-gray-700">100%</div>
                <div>Response Rate</div>
              </div>
              <div>
                <div className="font-medium text-gray-700">6 Hours</div>
                <div>Avg Response</div>
              </div>
              <div>
                <div className="font-medium text-gray-700">95%</div>
                <div>Client Retention</div>
              </div>
            </div>
          </div>
        </form>

        {/* Alternative Contact with Urgency */}
        <div className="mt-6 text-center">
          <div className="bg-white rounded-lg p-4 shadow-lg border border-orange-200">
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium text-orange-600">Urgent project?</span> Direct contact:
            </p>
            <a 
              href="mailto:hello@sarahmitchell.com" 
              className="text-orange-600 hover:text-orange-700 font-medium"
            >
              hello@sarahmitchell.com
            </a>
            <p className="text-xs text-gray-500 mt-1">Usually respond within 2 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Star, Quote, TrendingUp, Users, Heart } from "lucide-react";
import { motion } from "motion/react";

export function SocialProofSection() {
  const testimonial = {
    text: "I used Collably for 1 week and already had 3 brands reach out — no awkward DMs.",
    author: "Maya Chen",
    handle: "@mayacreates",
    niche: "Lifestyle Creator",
    followers: "87K followers",
    avatar: "MC"
  };

  const brands = [
    "Glossier", "Sephora", "ASOS", "Nike", "H&M", "Urban Outfitters", 
    "Revolve", "Princess Polly", "Mejuri", "Glow Recipe", "Fenty Beauty", "Skims"
  ];

  const stats = [
    {
      icon: Users,
      value: "1,200+",
      label: "Active Creators",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: TrendingUp,
      value: "3x",
      label: "More Collaborations",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Heart,
      value: "95%",
      label: "Creator Satisfaction",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: Star,
      value: "4.9★",
      label: "Average Rating",
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <div className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Testimonial */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-orange-100">
              
              {/* Quote Decoration */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex justify-center space-x-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-orange-400 text-orange-400" />
                ))}
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.handle} • {testimonial.niche}</div>
                  <div className="text-sm text-gray-500">{testimonial.followers}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            
            return (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Brand Logos */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Trusted by creators collaborating with
            </h3>
            <p className="text-gray-600">
              Join thousands of creators working with the world's biggest brands
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 opacity-60">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-gray-300 hover:opacity-100 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
              >
                <span className="font-medium text-gray-700 text-center text-sm">
                  {brand}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Trust Badge */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 px-6 py-3 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 font-medium text-sm">
                Actively facilitating brand partnerships daily
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
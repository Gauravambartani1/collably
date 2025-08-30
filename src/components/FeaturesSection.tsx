import { Link, Mail, BarChart3, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export function FeaturesSection() {
  const mainFeatures = [
    {
      icon: Link,
      title: "One link, all your collabs",
      description: "Replace messy link trees with one beautiful collab page",
      benefit: "Streamlined discovery",
      color: "from-blue-400 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: Mail,
      title: "Brands reach out professionally",
      description: "Structured contact forms mean serious inquiries only",
      benefit: "Higher quality leads",
      color: "from-green-400 to-green-600",
      bgColor: "from-green-50 to-green-100"
    },
    {
      icon: BarChart3,
      title: "Verified stats (no screenshots needed)",
      description: "Connected analytics show real, up-to-date metrics",
      benefit: "Build instant trust",
      color: "from-purple-400 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    },
    {
      icon: Sparkles,
      title: "Aesthetic profile, your vibe",
      description: "Customizable themes that match your brand perfectly",
      benefit: "Stand out authentically",
      color: "from-pink-400 to-pink-600",
      bgColor: "from-pink-50 to-pink-100"
    }
  ];

  const additionalFeatures = [
    "Mobile-optimized design",
    "Custom domain support",
    "Analytics dashboard",
    "Brand matching algorithm",
    "Collaboration templates",
    "Payment integration",
    "Media kit generator",
    "Automated follow-ups"
  ];

  return (
    <div className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Everything you need</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for creators, <span className="text-orange-500">loved by brands</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stop explaining yourself. Start showcasing your value with features that actually matter.
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <motion.div
                key={index}
                className={`relative p-8 rounded-3xl bg-gradient-to-br ${feature.bgColor} border border-white/50 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10 translate-x-8 -translate-y-8">
                  <div className={`w-full h-full bg-gradient-to-br ${feature.color} rounded-full`}></div>
                </div>
                
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                <div className="flex items-center text-sm font-medium text-gray-700">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  <span>{feature.benefit}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Features */}
        <motion.div 
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Plus everything else you'd expect
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've thought of everything so you don't have to. Focus on creating, we'll handle the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 text-orange-600 font-medium hover:text-orange-700 cursor-pointer group">
              <span>See all features in action</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
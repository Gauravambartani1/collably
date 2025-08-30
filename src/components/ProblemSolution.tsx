import { MessageCircleX, FileX, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function ProblemSolution() {
  const problems = [
    {
      icon: MessageCircleX,
      title: "Brands ghost your DMs?",
      description: "Your pitch gets lost in the noise of endless DMs",
      color: "text-red-500"
    },
    {
      icon: FileX,
      title: "Sick of pitching yourself again & again?",
      description: "Copy-pasting your stats and portfolio gets old fast",
      color: "text-orange-500"
    },
    {
      icon: Sparkles,
      title: "Your Collab Page does the talking for you.",
      description: "One beautiful link that showcases everything brands need",
      color: "text-green-500"
    }
  ];

  return (
    <div className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The creator struggle is <span className="text-orange-500">real</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've all been there. Let's fix this once and for all.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            const isolution = index === 2; // Last card is the solution
            
            return (
              <motion.div
                key={index}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                  isolution 
                    ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:border-green-300' 
                    : 'bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-gray-300'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                {isolution && (
                  <div className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1 text-xs font-medium rounded-full">
                    Solution ✨
                  </div>
                )}
                
                <div className={`w-12 h-12 ${isolution ? 'bg-green-500' : 'bg-gray-400'} rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>

                {isolution && (
                  <div className="mt-6 flex items-center text-green-600 font-medium">
                    <span>See how it works</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Before vs After Comparison */}
        <motion.div 
          className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-0">
            
            {/* Before */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-red-50 to-orange-50">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <MessageCircleX className="w-4 h-4" />
                  <span>Before Collably</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The DM Disaster</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/80 rounded-lg p-4 border border-red-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-400 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 mb-1">Hey! I'm @creator123 with 50K followers...</p>
                      <p className="text-xs text-gray-500">✓ Read</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/80 rounded-lg p-4 border border-red-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-400 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 mb-1">Here's my media kit and rates...</p>
                      <p className="text-xs text-gray-500">✓ Read</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/80 rounded-lg p-4 border border-red-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-400 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 mb-1">Hello? Still interested?</p>
                      <p className="text-xs text-gray-500">✓ Read</p>
                    </div>
                  </div>
                </div>

                <div className="text-center text-red-600 font-medium text-sm mt-6">
                  👻 No response... again
                </div>
              </div>
            </div>

            {/* After */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>With Collably</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Outreach</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/80 rounded-lg p-4 border border-green-200">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">Sarah Mitchell</h4>
                    <p className="text-sm text-gray-600 mb-3">Fashion & Lifestyle Creator</p>
                    <div className="grid grid-cols-2 gap-3 text-xs text-gray-600 mb-4">
                      <div>
                        <div className="font-medium text-gray-900">180K</div>
                        <div>Followers</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">8.2%</div>
                        <div>Engagement</div>
                      </div>
                    </div>
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Send Collab Request
                    </div>
                  </div>
                </div>

                <div className="text-center text-green-600 font-medium text-sm mt-6">
                  ✨ Professional, clear, effective
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
import { Users, TrendingUp, Target, MapPin, Star, BarChart3, Heart, UserCheck, Eye, Award, Zap, Quote } from "lucide-react";

interface AudienceSnapshotProps {
  vibe: string;
  accentColor: string;
}

export function AudienceSnapshot({ vibe, accentColor }: AudienceSnapshotProps) {
  const stats = [
    {
      icon: Users,
      label: "Total Followers",
      value: "252K",
      description: "Across all platforms",
      growth: "+15K this month",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: Heart,
      label: "Avg Engagement",
      value: "8.2%",
      description: "Above industry average",
      growth: "2.3x higher",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: Eye,
      label: "Monthly Views",
      value: "1.2M",
      description: "Consistent growth",
      growth: "+300K this month",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: TrendingUp,
      label: "Growth Rate",
      value: "+15%",
      description: "Last 3 months",
      growth: "Accelerating",
      color: "from-green-400 to-green-600"
    }
  ];

  return (
    <div className="py-12 px-4 bg-white relative">
      {/* Trust Signals Banner */}
      <div className="max-w-md mx-auto mb-8">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg p-4 text-center shadow-lg">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Award className="w-5 h-5" />
            <span className="font-medium">Industry Leading Metrics</span>
          </div>
          <p className="text-orange-100 text-sm">Consistently outperforming 90% of creators in my niche</p>
        </div>
      </div>

      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="mb-2 text-gray-900">Audience Snapshot</h2>
          <p className="text-gray-600">Proven metrics that drive brand success</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-5 text-center border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="mb-1 text-gray-900">{stat.value}</div>
                <h3 className="text-gray-800 mb-1">{stat.label}</h3>
                <p className="text-gray-500 text-xs mb-2">{stat.description}</p>
                {/* Growth Indicator - Psychology: Momentum */}
                <div className="text-green-600 text-xs font-medium flex items-center justify-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stat.growth}
                </div>
              </div>
            );
          })}
        </div>

        {/* Platform Breakdown with Enhanced Social Proof */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-lg mb-8">
          <h3 className="mb-4 text-center text-gray-900 flex items-center justify-center">
            <Target className="w-5 h-5 mr-2 text-orange-500" />
            Platform Breakdown
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">Instagram</span>
              </div>
              <div className="text-right">
                <span className="text-gray-900 font-medium">180K followers</span>
                <div className="text-green-600 text-xs">↗ 12K this month</div>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-red-600 rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">YouTube</span>
              </div>
              <div className="text-right">
                <span className="text-gray-900 font-medium">45K subscribers</span>
                <div className="text-green-600 text-xs">↗ 2K this month</div>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">TikTok</span>
              </div>
              <div className="text-right">
                <span className="text-gray-900 font-medium">27K followers</span>
                <div className="text-green-600 text-xs">↗ 8K this month</div>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Boosters */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg p-4 text-center shadow-lg">
            <Zap className="w-6 h-6 mx-auto mb-2" />
            <div className="font-medium">98%</div>
            <div className="text-orange-100 text-xs">Response Rate</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-4 text-center shadow-lg">
            <Award className="w-6 h-6 mx-auto mb-2" />
            <div className="font-medium">4.9★</div>
            <div className="text-green-100 text-xs">Brand Rating</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-4 text-center shadow-lg">
            <Target className="w-6 h-6 mx-auto mb-2" />
            <div className="font-medium">72H</div>
            <div className="text-blue-100 text-xs">Avg Delivery</div>
          </div>
        </div>
      </div>
    </div>
  );
}
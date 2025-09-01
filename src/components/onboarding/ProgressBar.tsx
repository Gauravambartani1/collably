import { motion } from "motion/react";
import { Check, Star } from "lucide-react";

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;
  const stepLabels = ["Welcome", "Vibe", "Basics", "Stats", "Collabs", "Preview", "Live!"];

  return (
    <div className="px-6 py-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="relative mb-4">
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-600 to-teal-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          
          {/* Progress Dots */}
          <div className="absolute -top-1 left-0 w-full flex justify-between">
            {Array.from({ length: total }, (_, index) => {
              const isCompleted = index < current;
              const isCurrent = index === current;
              
              return (
                <motion.div
                  key={index}
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    isCompleted
                      ? 'bg-gradient-to-r from-purple-600 to-teal-600 border-transparent'
                      : isCurrent
                      ? 'bg-black border-purple-500 shadow-lg'
                      : 'bg-gray-800 border-gray-700'
                  }`}
                  initial={{ scale: 0.8 }}
                  animate={{ 
                    scale: isCurrent ? 1.2 : isCompleted ? 1 : 0.8,
                    rotate: isCompleted ? 360 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {isCompleted && (
                    <Check className="w-2.5 h-2.5 text-white" />
                  )}
                  {isCurrent && (
                    <motion.div
                      className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Step Info */}
        <div className="flex items-center justify-center space-x-2 text-sm">
          <Star className="w-4 h-4 text-purple-400" />
          <span className="text-gray-300">
            Step {current + 1} of {total}: {stepLabels[current]}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400 font-medium">
            {Math.round(progress)}% complete
          </span>
        </div>
      </div>
    </div>
  );
}
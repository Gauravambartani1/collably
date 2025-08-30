import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;
  const stepLabels = ["Welcome", "Vibe", "Basics", "Stats", "Collabs", "Preview", "Live!"];

  return (
    <div className="px-4 py-4">
      <div className="max-w-lg mx-auto">
        {/* Progress Bar */}
        <div className="relative mb-4">
          <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"
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
                      ? 'bg-orange-500 border-orange-500'
                      : isCurrent
                      ? 'bg-white border-orange-500 shadow-lg'
                      : 'bg-white border-orange-200'
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
                      className="w-1.5 h-1.5 bg-orange-500 rounded-full"
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
          <Sparkles className="w-4 h-4 text-orange-500" />
          <span className="text-gray-600">
            Step {current + 1} of {total}: {stepLabels[current]}
          </span>
          <span className="text-orange-500 font-medium">
            {Math.round(progress)}% complete
          </span>
        </div>
      </div>
    </div>
  );
}
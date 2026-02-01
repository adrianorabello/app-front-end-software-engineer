import { motion } from 'motion/react';
import { Volume2 } from 'lucide-react';
import { VocabularyItem } from '@/types';

interface VocabularyCardProps {
  item: VocabularyItem;
  index: number;
}

export function VocabularyCard({ item, index }: VocabularyCardProps) {
  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(item.word);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
          {item.word}
        </h3>
        <button
          onClick={handleSpeak}
          className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
          title="Listen to pronunciation"
          aria-label="Listen to pronunciation"
        >
          <Volume2 className="w-5 h-5" />
        </button>
      </div>

      <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
        {item.description}
      </p>

      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-4 border border-indigo-100/50">
        <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
          Example
        </p>
        <p className="text-indigo-900/80 font-medium italic text-sm">
          "{item.useCase}"
        </p>
      </div>
    </motion.div>
  );
}

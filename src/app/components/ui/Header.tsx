import { BookOpen } from 'lucide-react';

interface HeaderProps {
  onRefresh: () => void;
  isLoading: boolean;
}

export function Header({ onRefresh, isLoading }: HeaderProps) {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-lg text-white">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">English Vocabulary Helper</h1>
            <p className="text-xs text-slate-500 font-medium">Daily words for beginners & intermediate</p>
          </div>
        </div>
        
        <button
          onClick={onRefresh}
          disabled={isLoading}
          className="hidden sm:flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-full text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Updating...' : 'Refresh Words'}
        </button>
      </div>
    </header>
  );
}

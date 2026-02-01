import { motion } from 'motion/react';
import { RefreshCw, AlertCircle, FileSearch } from 'lucide-react';

export function LoadingState() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm h-48 animate-pulse">
          <div className="h-6 bg-slate-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-slate-100 rounded w-full mb-2"></div>
          <div className="h-4 bg-slate-100 rounded w-5/6 mb-6"></div>
          <div className="h-16 bg-indigo-50/50 rounded-lg w-full"></div>
        </div>
      ))}
    </div>
  );
}

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="bg-red-50 p-4 rounded-full text-red-500 mb-4">
        <AlertCircle className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">Something went wrong</h3>
      <p className="text-slate-500 max-w-md mb-6">{message}</p>
      <button
        onClick={onRetry}
        className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium shadow-lg shadow-slate-900/10"
      >
        <RefreshCw className="w-4 h-4" />
        Try Again
      </button>
    </div>
  );
}

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="bg-slate-50 p-4 rounded-full text-slate-400 mb-4">
        <FileSearch className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">No words found</h3>
      <p className="text-slate-500 max-w-md">
        We couldn't find any vocabulary matching your search. Try adjusting your filter.
      </p>
    </div>
  );
}

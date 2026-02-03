import { useState, useEffect, useMemo } from 'react';
import { Header } from '@/app/components/ui/Header';
import { SearchBar } from '@/app/components/ui/SearchBar';
import { VocabularyList } from '@/app/components/vocabulary/VocabularyList';
import { LoadingState, ErrorState } from '@/app/components/ui/States';
import { VocabularyItem } from '@/types';
import { Toaster, toast } from 'sonner';

// Fallback data in case the API is down or quota exceeded (for demonstration stability)
const FALLBACK_DATA: VocabularyItem[] = [
  {
    word: "Serendipity",
    description: "The occurrence and development of events by chance in a happy or beneficial way.",
    useCase: "We found this amazing restaurant by pure serendipity."
  },
  {
    word: "Ephemeral",
    description: "Lasting for a very short time.",
    useCase: "Fashions are ephemeral, changing with every season."
  },
  {
    word: "Resilience",
    description: "The capacity to recover quickly from difficulties; toughness.",
    useCase: "Her resilience helped her overcome the tragedy and rebuild her life."
  },
  {
    word: "Mellifluous",
    description: "Typically of a sound) pleasingly smooth and musical to hear.",
    useCase: "She had a rich, mellifluous voice that captivated the audience."
  },
  {
    word: "Ineffable",
    description: "Too great or extreme to be expressed or described in words.",
    useCase: "The ineffable beauty of the sunset left us speechless."
  },
  {
    word: "Petrichor",
    description: "A pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather.",
    useCase: "As the storm broke, the air was filled with the scent of petrichor."
  }
];

export default function App() {
  const [words, setWords] = useState<VocabularyItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchWords = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Intentional delay to show loading state nicely
      await new Promise(resolve => setTimeout(resolve, 800));
      
      //const response = await fetch('http://localhost:3000/ask');
      const response = await fetch('http://52.4.148.215:3000/ask');
      
      if (!response.ok) {
        throw new Error(`Server returned status: ${response.status}`);
      }

      const data = await response.json();
      
      // Validation to ensure data is array
      if (Array.isArray(data)) {
        setWords(data);
        toast.success('Vocabulary updated successfully');
      } else {
        throw new Error('Invalid data format received from server');
      }
    } catch (err) {
      console.error(err);
      // Auto-fallback to demo data for better UX
      setWords(FALLBACK_DATA);
      toast.error('Server unavailable. Using demo words instead.', {
        duration: 5000,
        description: 'The backend service seems to be down. Enjoy these sample words!'
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWords();
  }, []);

  const filteredWords = useMemo(() => {
    if (!searchTerm) return words;
    const lowerTerm = searchTerm.toLowerCase();
    return words.filter(item => 
      item.word.toLowerCase().includes(lowerTerm) || 
      item.description.toLowerCase().includes(lowerTerm)
    );
  }, [words, searchTerm]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Toaster position="top-center" richColors />
      <Header onRefresh={fetchWords} isLoading={isLoading} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Expand Your <span className="text-indigo-600">Vocabulary</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover new words, understand their meaning, and learn how to use them in real contexts.
          </p>
        </div>

        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        <div className="min-h-[400px]">
          {isLoading ? (
            <LoadingState />
          ) : error ? (
            <ErrorState message={error} onRetry={fetchWords} />
          ) : (
            <VocabularyList items={filteredWords} />
          )}
        </div>
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} English Vocabulary Helper. Learning made simple.</p>
        </div>
      </footer>
    </div>
  );
}

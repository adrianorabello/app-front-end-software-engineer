import { VocabularyItem } from '@/types';
import { VocabularyCard } from './VocabularyCard';
import { EmptyState } from '../ui/States';

interface VocabularyListProps {
  items: VocabularyItem[];
}

export function VocabularyList({ items }: VocabularyListProps) {
  if (items.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <VocabularyCard 
          key={`${item.word}-${index}`} 
          item={item} 
          index={index} 
        />
      ))}
    </div>
  );
}

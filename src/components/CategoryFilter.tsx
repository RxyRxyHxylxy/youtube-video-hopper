
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <ScrollArea className="w-full whitespace-nowrap pb-3">
      <div className="flex space-x-2">
        <Button
          variant={selectedCategory === null ? "secondary" : "ghost"}
          size="sm"
          onClick={() => onSelectCategory(null)}
          className="rounded-full"
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "secondary" : "ghost"}
            size="sm"
            onClick={() => onSelectCategory(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
};

export default CategoryFilter;

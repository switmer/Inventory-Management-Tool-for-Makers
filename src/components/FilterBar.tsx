import React from 'react';
import { Filter, ChevronDown, Plus } from 'lucide-react';
interface FilterBarProps {
  title: string;
  showAddButton?: boolean;
  addButtonText?: string;
  onAddClick?: () => void;
}
const FilterBar = ({
  title,
  showAddButton = true,
  addButtonText = 'Add New',
  onAddClick
}: FilterBarProps) => {
  return <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
      </div>
      <div className="flex items-center gap-3 mt-4 md:mt-0">
        <div className="flex items-center">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm border border-amber-200/60 dark:border-amber-900/40 rounded-l-md bg-white dark:bg-card hover:bg-secondary dark:hover:bg-secondary">
            <span>All Categories</span>
            <ChevronDown size={15} />
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm border-y border-r border-amber-200/60 dark:border-amber-900/40 rounded-r-md bg-white dark:bg-card hover:bg-secondary dark:hover:bg-secondary">
            <Filter size={15} />
            <span>Filter</span>
          </button>
        </div>
        {showAddButton && <button onClick={onAddClick} className="btn-artisan flex items-center gap-1.5 px-3 py-1.5">
            <Plus size={15} />
            {addButtonText}
          </button>}
      </div>
    </div>;
};
export default FilterBar;
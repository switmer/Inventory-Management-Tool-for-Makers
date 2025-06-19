import React, { useState } from 'react';
import { Bell, Search, Menu, Moon, Sun, Download, Calendar, ChevronDown } from 'lucide-react';
const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [timeRange, setTimeRange] = useState('Last 7 Days');
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setIsDarkMode(!isDarkMode);
  };
  return <header className="border-b border-amber-200/60 dark:border-amber-900/40 bg-white dark:bg-card px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center md:hidden">
          <button className="p-2 rounded-md text-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary">
            <Menu size={20} />
          </button>
        </div>
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-muted-foreground" />
            </div>
            <input type="text" placeholder="Find materials, batches, orders..." className="input-artisan pl-10 w-full md:w-80" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm border border-amber-200/60 dark:border-amber-900/40 rounded-md bg-white dark:bg-card hover:bg-secondary dark:hover:bg-secondary">
            <Download size={15} />
            Export
          </button>
          <div className="relative">
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm border border-amber-200/60 dark:border-amber-900/40 rounded-md bg-white dark:bg-card hover:bg-secondary dark:hover:bg-secondary">
              <Calendar size={15} />
              <span>{timeRange}</span>
              <ChevronDown size={15} />
            </button>
          </div>
          <button onClick={toggleDarkMode} className="p-2 rounded-full text-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="p-2 rounded-full text-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </button>
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">
            CM
          </div>
        </div>
      </div>
    </header>;
};
export default Header;
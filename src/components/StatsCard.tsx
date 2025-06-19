import React from 'react';
import { BoxIcon } from 'lucide-react';
interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changePercent?: number;
  icon?: BoxIcon;
  color?: string;
}
const StatsCard = ({
  title,
  value,
  change,
  changePercent = 0,
  icon: Icon,
  color = 'primary'
}: StatsCardProps) => {
  return <div className="bg-white dark:bg-card rounded-lg border border-amber-200/60 dark:border-amber-900/40 p-5 hover:shadow-sm transition-all">
      <h3 className="text-sm font-medium text-muted-foreground mb-1">
        {title}
      </h3>
      <div className="flex items-baseline gap-2">
        <p className="text-3xl font-bold text-foreground">{value}</p>
        {(changePercent !== undefined || change) && <div className="flex items-center">
            {changePercent !== 0 && <span className={`text-xs font-medium px-1.5 py-0.5 rounded-full flex items-center gap-0.5
                  ${changePercent > 0 ? 'text-emerald-700 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30' : changePercent < 0 ? 'text-rose-700 dark:text-rose-500 bg-rose-50 dark:bg-rose-950/30' : 'text-amber-700 dark:text-amber-500 bg-amber-50 dark:bg-amber-950/30'}`}>
                {changePercent > 0 ? '↑' : changePercent < 0 ? '↓' : ''}
                {Math.abs(changePercent)}%
              </span>}
            {change && <span className="text-xs text-muted-foreground ml-1">
                from last period
              </span>}
          </div>}
      </div>
      {Icon && <div className="absolute top-4 right-4 p-2 rounded-full bg-primary/10 text-primary">
          <Icon size={18} />
        </div>}
    </div>;
};
export default StatsCard;
import React from 'react';
import { AlertTriangle } from 'lucide-react';
interface LowStockItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  threshold: number;
}
interface LowStockAlertProps {
  items: LowStockItem[];
}
const LowStockAlert = ({
  items
}: LowStockAlertProps) => {
  if (!items.length) return null;
  return <div className="bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/50 rounded-lg p-5 shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2.5 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400">
          <AlertTriangle size={18} />
        </div>
        <h3 className="font-medium text-amber-800 dark:text-amber-300">
          Materials Running Low
        </h3>
      </div>
      <div className="space-y-3 mt-4">
        {items.map(item => <div key={item.id} className="flex items-center justify-between text-sm p-2.5 bg-white dark:bg-card/50 rounded-md border border-amber-100 dark:border-amber-900/30">
            <span className="text-foreground font-medium">{item.name}</span>
            <span className="font-medium text-amber-700 dark:text-amber-400">
              {item.quantity} {item.unit} left
            </span>
          </div>)}
      </div>
      <button className="w-full mt-4 btn-artisan">Restock Materials</button>
    </div>;
};
export default LowStockAlert;
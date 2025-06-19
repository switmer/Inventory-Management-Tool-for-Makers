import React from 'react';
interface ProgressCardProps {
  title: string;
  current: number;
  total: number;
  status: string;
  dueDate?: string;
}
const ProgressCard = ({
  title,
  current,
  total,
  status,
  dueDate
}: ProgressCardProps) => {
  const percentage = Math.round(current / total * 100);
  let statusColor = 'bg-gray-500 dark:bg-gray-600';
  let statusBg = 'bg-gray-100 dark:bg-gray-800/50';
  let statusText = 'text-gray-700 dark:text-gray-300';
  if (status === 'In Progress') {
    statusColor = 'bg-blue-500 dark:bg-blue-600';
    statusBg = 'bg-blue-50 dark:bg-blue-900/20';
    statusText = 'text-blue-700 dark:text-blue-300';
  }
  if (status === 'Completed') {
    statusColor = 'bg-emerald-500 dark:bg-emerald-600';
    statusBg = 'bg-emerald-50 dark:bg-emerald-900/20';
    statusText = 'text-emerald-700 dark:text-emerald-300';
  }
  if (status === 'Delayed') {
    statusColor = 'bg-rose-500 dark:bg-rose-600';
    statusBg = 'bg-rose-50 dark:bg-rose-900/20';
    statusText = 'text-rose-700 dark:text-rose-300';
  }
  return <div className="card-artisan p-5">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-medium text-foreground">{title}</h3>
        <div className={`px-2.5 py-1 text-xs font-medium rounded-full ${statusBg} ${statusText}`}>
          {status}
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-muted-foreground">Progress</span>
          <span className="font-medium text-foreground">{percentage}%</span>
        </div>
        <div className="w-full bg-secondary dark:bg-secondary rounded-full h-2.5 overflow-hidden">
          <div className={`${statusColor} rounded-full h-2.5`} style={{
          width: `${percentage}%`
        }}></div>
        </div>
      </div>
      <div className="mt-3 flex justify-between text-sm">
        <span className="text-muted-foreground">
          {current} of {total} completed
        </span>
        {dueDate && <span className={`font-medium ${percentage < 50 && status !== 'Completed' ? 'text-amber-600 dark:text-amber-400' : 'text-muted-foreground'}`}>
            Due: {dueDate}
          </span>}
      </div>
    </div>;
};
export default ProgressCard;
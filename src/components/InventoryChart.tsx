import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
interface InventoryChartProps {
  data: any[];
  title: string;
}
const InventoryChart = ({
  data,
  title
}: InventoryChartProps) => {
  return <div className="bg-white dark:bg-card rounded-lg border border-amber-200/60 dark:border-amber-900/40 p-5">
      <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{
          top: 5,
          right: 20,
          left: 10,
          bottom: 5
        }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" stroke="#9ca3af" fontSize={12} tickMargin={10} />
            <YAxis stroke="#9ca3af" fontSize={12} tickMargin={10} />
            <Tooltip contentStyle={{
            backgroundColor: 'white',
            borderColor: '#f3e8d5',
            borderRadius: '0.5rem',
            fontSize: '0.875rem'
          }} />
            <Legend />
            <Line type="monotone" dataKey="materials" stroke="#7B8C66" strokeWidth={2} dot={{
            r: 4
          }} activeDot={{
            r: 6
          }} name="Materials" />
            <Line type="monotone" dataKey="wip" stroke="#A7896D" strokeWidth={2} dot={{
            r: 4
          }} activeDot={{
            r: 6
          }} name="Work In Progress" />
            <Line type="monotone" dataKey="finished" stroke="#8C5A3C" strokeWidth={2} dot={{
            r: 4
          }} activeDot={{
            r: 6
          }} name="Finished Goods" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>;
};
export default InventoryChart;
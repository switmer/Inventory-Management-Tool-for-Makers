import React from 'react';
import { Plus, Filter, ArrowUpDown, ClipboardList } from 'lucide-react';
import ProgressCard from '../components/ProgressCard';
const WorkInProgress = () => {
  const wipItems = [{
    id: '1',
    title: 'Speckled Mugs Batch #142',
    current: 6,
    total: 10,
    status: 'In Progress',
    dueDate: 'Aug 15',
    materials: ['White Clay', 'Speckled Glaze'],
    stage: 'Glazing'
  }, {
    id: '2',
    title: 'Ceramic Planters Batch #143',
    current: 2,
    total: 8,
    status: 'In Progress',
    dueDate: 'Aug 22',
    materials: ['Speckled Clay', 'Matte Black Glaze'],
    stage: 'Drying'
  }, {
    id: '3',
    title: 'Vases Batch #141',
    current: 12,
    total: 12,
    status: 'Completed',
    materials: ['White Clay', 'Blue Glaze'],
    stage: 'Final Inspection'
  }, {
    id: '4',
    title: 'Custom Order - Wedding Favors',
    current: 3,
    total: 25,
    status: 'Delayed',
    dueDate: 'Aug 10',
    materials: ['White Clay', 'Clear Glaze', 'Gold Luster'],
    stage: 'Throwing'
  }, {
    id: '5',
    title: 'Small Bowls Batch #144',
    current: 0,
    total: 15,
    status: 'Not Started',
    dueDate: 'Aug 30',
    materials: ['Speckled Clay', 'Clear Glaze'],
    stage: 'Planned'
  }, {
    id: '6',
    title: 'Dinner Plates Batch #145',
    current: 4,
    total: 6,
    status: 'In Progress',
    dueDate: 'Aug 25',
    materials: ['White Clay', 'Clear Glaze'],
    stage: 'Bisque Firing'
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Work In Progress
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Track your ongoing production batches
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
          <Plus size={16} />
          Start New Batch
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <ClipboardList size={16} className="text-gray-400" />
          </div>
          <input type="text" placeholder="Search batches..." className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-950 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900">
            <Filter size={16} />
            Filter
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-950 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900">
            <ArrowUpDown size={16} />
            Sort
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wipItems.map(item => <div key={item.id} className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <div className={`px-2 py-1 text-xs font-medium rounded-full ${item.status === 'In Progress' ? 'bg-blue-500' : item.status === 'Completed' ? 'bg-green-500' : item.status === 'Delayed' ? 'bg-red-500' : item.status === 'Not Started' ? 'bg-gray-500' : 'bg-gray-500'} text-white`}>
                {item.status}
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 dark:text-gray-400">
                  Progress
                </span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {Math.round(item.current / item.total * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-primary rounded-full h-2" style={{
              width: `${Math.round(item.current / item.total * 100)}%`
            }}></div>
              </div>
            </div>
            <div className="mt-3 flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">
                {item.current} of {item.total} completed
              </span>
              {item.dueDate && <span className="text-gray-600 dark:text-gray-400">
                  Due: {item.dueDate}
                </span>}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  Current Stage:
                </span>
                <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200">
                  {item.stage}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  Materials:
                </span>
                <div className="flex flex-wrap gap-1">
                  {item.materials.map((material, idx) => <span key={idx} className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200">
                      {material}
                    </span>)}
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 py-2 text-xs font-medium text-center border border-gray-200 dark:border-gray-800 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-300">
                Update Progress
              </button>
              <button className="flex-1 py-2 text-xs font-medium text-center bg-primary text-white rounded-md hover:bg-primary/90">
                View Details
              </button>
            </div>
          </div>)}
      </div>
    </div>;
};
export default WorkInProgress;
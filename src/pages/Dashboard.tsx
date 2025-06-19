import React from 'react';
import { Package, ClipboardList, ShoppingCart, AlertTriangle, Boxes, Sparkles, Star, Clock, Users } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import LowStockAlert from '../components/LowStockAlert';
import ProgressCard from '../components/ProgressCard';
import InventoryChart from '../components/InventoryChart';
import FilterBar from '../components/FilterBar';
const Dashboard = () => {
  const lowStockItems = [{
    id: '1',
    name: 'White Clay',
    quantity: 5,
    unit: 'lbs',
    threshold: 10
  }, {
    id: '2',
    name: 'Blue Glaze',
    quantity: 8,
    unit: 'oz',
    threshold: 16
  }, {
    id: '3',
    name: 'Packaging Boxes',
    quantity: 3,
    unit: 'units',
    threshold: 5
  }];
  const inventoryData = [{
    date: 'Apr 1',
    materials: 18,
    wip: 8,
    finished: 32
  }, {
    date: 'Apr 8',
    materials: 20,
    wip: 10,
    finished: 36
  }, {
    date: 'Apr 15',
    materials: 24,
    wip: 12,
    finished: 42
  }, {
    date: 'Apr 22',
    materials: 22,
    wip: 14,
    finished: 45
  }, {
    date: 'Apr 29',
    materials: 24,
    wip: 12,
    finished: 47
  }, {
    date: 'May 6',
    materials: 26,
    wip: 10,
    finished: 50
  }];
  return <div className="space-y-6">
      <FilterBar title="Studio Overview" showAddButton={false} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Materials" value="24" changePercent={12} change="from last period" />
        <StatsCard title="Works In Progress" value="12" changePercent={0} change="from last period" />
        <StatsCard title="Finished Pieces" value="47" changePercent={8} change="from last period" />
        <StatsCard title="Orders to Fulfill" value="8" changePercent={-20} change="from last period" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <InventoryChart data={inventoryData} title="Inventory Trends" />
        </div>
        <div>
          <LowStockAlert items={lowStockItems} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">
                Active Batches
              </h2>
              <a href="/wip" className="text-sm text-primary hover:underline font-medium">
                View all
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ProgressCard title="Speckled Mugs Batch #142" current={6} total={10} status="In Progress" dueDate="Aug 15" />
              <ProgressCard title="Ceramic Planters Batch #143" current={2} total={8} status="In Progress" dueDate="Aug 22" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">
                Recent Orders
              </h2>
              <a href="/orders" className="text-sm text-primary hover:underline font-medium">
                View all
              </a>
            </div>
            <div className="card-artisan">
              <table className="min-w-full divide-y divide-amber-200/60 dark:divide-amber-900/40">
                <thead className="bg-secondary dark:bg-secondary">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Items
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-card divide-y divide-amber-200/60 dark:divide-amber-900/40">
                  <tr className="hover:bg-secondary dark:hover:bg-secondary transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-foreground">
                      #ORD-2023-08-042
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-muted-foreground">
                      Sarah Johnson
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-muted-foreground">
                      2 Speckled Vases
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-400">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary dark:hover:bg-secondary transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-foreground">
                      #ORD-2023-08-041
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-muted-foreground">
                      Artisanal Home Goods
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-muted-foreground">
                      10 Mugs, 5 Bowls
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-400">
                        Processing
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary dark:hover:bg-secondary transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-foreground">
                      #ORD-2023-08-040
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-muted-foreground">
                      Michael Chen
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-muted-foreground">
                      1 Custom Planter
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-400">
                        Shipped
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">
                Studio Metrics
              </h2>
            </div>
            <div className="space-y-4">
              <div className="bg-white dark:bg-card rounded-lg border border-amber-200/60 dark:border-amber-900/40 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Star size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Average Rating
                      </p>
                      <p className="text-xl font-bold text-foreground">4.8/5</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium px-1.5 py-0.5 rounded-full text-emerald-700 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30">
                    ↑ 0.2
                  </span>
                </div>
              </div>
              <div className="bg-white dark:bg-card rounded-lg border border-amber-200/60 dark:border-amber-900/40 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Avg. Production Time
                      </p>
                      <p className="text-xl font-bold text-foreground">
                        4.2 days
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-medium px-1.5 py-0.5 rounded-full text-emerald-700 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30">
                    ↑ 8%
                  </span>
                </div>
              </div>
              <div className="bg-white dark:bg-card rounded-lg border border-amber-200/60 dark:border-amber-900/40 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Users size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Active Customers
                      </p>
                      <p className="text-xl font-bold text-foreground">32</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium px-1.5 py-0.5 rounded-full text-emerald-700 dark:text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30">
                    ↑ 12%
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">
                Quick Actions
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button className="p-3 text-sm font-medium text-center bg-white dark:bg-card border border-amber-200/60 dark:border-amber-900/40 rounded-lg hover:bg-secondary dark:hover:bg-secondary transition-all shadow-sm hover:shadow-md">
                Add Material
              </button>
              <button className="p-3 text-sm font-medium text-center bg-white dark:bg-card border border-amber-200/60 dark:border-amber-900/40 rounded-lg hover:bg-secondary dark:hover:bg-secondary transition-all shadow-sm hover:shadow-md">
                Start Batch
              </button>
              <button className="p-3 text-sm font-medium text-center bg-white dark:bg-card border border-amber-200/60 dark:border-amber-900/40 rounded-lg hover:bg-secondary dark:hover:bg-secondary transition-all shadow-sm hover:shadow-md">
                Record Order
              </button>
              <button className="p-3 text-sm font-medium text-center bg-white dark:bg-card border border-amber-200/60 dark:border-amber-900/40 rounded-lg hover:bg-secondary dark:hover:bg-secondary transition-all shadow-sm hover:shadow-md">
                Ship Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Dashboard;
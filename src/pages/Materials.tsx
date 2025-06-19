import React from 'react';
import { Package, Plus, Filter, ArrowUpDown } from 'lucide-react';
import FilterBar from '../components/FilterBar';
const Materials = () => {
  const materials = [{
    id: '1',
    name: 'White Clay',
    category: 'Clay',
    quantity: 5,
    unit: 'lbs',
    supplier: 'ClayWorks Inc.',
    threshold: 10,
    lastOrdered: '2023-07-15'
  }, {
    id: '2',
    name: 'Speckled Clay',
    category: 'Clay',
    quantity: 15,
    unit: 'lbs',
    supplier: 'ClayWorks Inc.',
    threshold: 10,
    lastOrdered: '2023-07-15'
  }, {
    id: '3',
    name: 'Blue Glaze',
    category: 'Glaze',
    quantity: 8,
    unit: 'oz',
    supplier: 'Glaze Master',
    threshold: 16,
    lastOrdered: '2023-07-20'
  }, {
    id: '4',
    name: 'Matte Black Glaze',
    category: 'Glaze',
    quantity: 24,
    unit: 'oz',
    supplier: 'Glaze Master',
    threshold: 16,
    lastOrdered: '2023-07-20'
  }, {
    id: '5',
    name: 'Clear Glaze',
    category: 'Glaze',
    quantity: 32,
    unit: 'oz',
    supplier: 'Glaze Master',
    threshold: 16,
    lastOrdered: '2023-06-10'
  }, {
    id: '6',
    name: 'Packaging Boxes - Small',
    category: 'Packaging',
    quantity: 3,
    unit: 'units',
    supplier: 'EcoPack',
    threshold: 5,
    lastOrdered: '2023-07-05'
  }, {
    id: '7',
    name: 'Packaging Boxes - Medium',
    category: 'Packaging',
    quantity: 12,
    unit: 'units',
    supplier: 'EcoPack',
    threshold: 10,
    lastOrdered: '2023-07-05'
  }, {
    id: '8',
    name: 'Tissue Paper',
    category: 'Packaging',
    quantity: 45,
    unit: 'sheets',
    supplier: 'EcoPack',
    threshold: 20,
    lastOrdered: '2023-07-05'
  }];
  return <div className="space-y-6">
      <FilterBar title="Materials" addButtonText="Add Material" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-card rounded-lg border border-amber-200/60 dark:border-amber-900/40 p-4">
          <p className="text-sm font-medium text-muted-foreground">
            Total Materials
          </p>
          <p className="text-2xl font-bold text-foreground mt-1">24</p>
        </div>
        <div className="bg-white dark:bg-card rounded-lg border border-amber-200/60 dark:border-amber-900/40 p-4">
          <p className="text-sm font-medium text-muted-foreground">
            Clay Materials
          </p>
          <p className="text-2xl font-bold text-foreground mt-1">6</p>
        </div>
        <div className="bg-white dark:bg-card rounded-lg border border-amber-200/60 dark:border-amber-900/40 p-4">
          <p className="text-sm font-medium text-muted-foreground">
            Glaze Materials
          </p>
          <p className="text-2xl font-bold text-foreground mt-1">8</p>
        </div>
        <div className="bg-white dark:bg-card rounded-lg border border-amber-200/60 dark:border-amber-900/40 p-4">
          <p className="text-sm font-medium text-muted-foreground">
            Low Stock Items
          </p>
          <p className="text-2xl font-bold text-rose-600 dark:text-rose-500 mt-1">
            3
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Package size={16} className="text-muted-foreground" />
          </div>
          <input type="text" placeholder="Find a material..." className="input-artisan pl-10 w-full" />
        </div>
      </div>
      <div className="card-artisan">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-amber-200/60 dark:divide-amber-900/40">
            <thead className="bg-secondary dark:bg-secondary">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Material
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Category
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Supplier
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Last Ordered
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-card divide-y divide-amber-200/60 dark:divide-amber-900/40">
              {materials.map(material => <tr key={material.id} className="hover:bg-secondary dark:hover:bg-secondary">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-foreground">
                    {material.name}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-muted-foreground">
                    {material.category}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-muted-foreground">
                    {material.quantity} {material.unit}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-muted-foreground">
                    {material.supplier}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-muted-foreground">
                    {material.lastOrdered}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {material.quantity < material.threshold ? <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-400">
                        Running Low
                      </span> : <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-400">
                        Well Stocked
                      </span>}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary hover:text-primary/80 mr-3">
                      Edit
                    </button>
                    <button className="text-primary hover:text-primary/80">
                      Order
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};
export default Materials;
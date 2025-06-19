import React from 'react';
import { Plus, Filter, ArrowUpDown, Boxes, Search } from 'lucide-react';
const FinishedGoods = () => {
  const products = [{
    id: '1',
    name: 'Speckled Mug',
    sku: 'MUG-SPK-001',
    category: 'Mugs',
    quantity: 24,
    cost: 8.5,
    price: 28.0,
    location: 'Shelf A3',
    batch: 'Batch #139'
  }, {
    id: '2',
    name: 'Blue Vase - Small',
    sku: 'VSE-BLU-S',
    category: 'Vases',
    quantity: 12,
    cost: 12.75,
    price: 45.0,
    location: 'Shelf B2',
    batch: 'Batch #141'
  }, {
    id: '3',
    name: 'Blue Vase - Medium',
    sku: 'VSE-BLU-M',
    category: 'Vases',
    quantity: 8,
    cost: 18.25,
    price: 65.0,
    location: 'Shelf B2',
    batch: 'Batch #141'
  }, {
    id: '4',
    name: 'Ceramic Planter - Black',
    sku: 'PLT-BLK-001',
    category: 'Planters',
    quantity: 5,
    cost: 14.5,
    price: 52.0,
    location: 'Shelf C1',
    batch: 'Batch #140'
  }, {
    id: '5',
    name: 'Dinner Plate - White',
    sku: 'PLT-WHT-001',
    category: 'Tableware',
    quantity: 16,
    cost: 10.25,
    price: 32.0,
    location: 'Shelf D2',
    batch: 'Batch #138'
  }, {
    id: '6',
    name: 'Ceramic Bowl - Speckled',
    sku: 'BWL-SPK-001',
    category: 'Tableware',
    quantity: 18,
    cost: 9.75,
    price: 34.0,
    location: 'Shelf D3',
    batch: 'Batch #138'
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Finished Goods
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage your completed products inventory
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
          <Plus size={16} />
          Add Product
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={16} className="text-gray-400" />
          </div>
          <input type="text" placeholder="Search products..." className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map(product => <div key={product.id} className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <Boxes size={48} className="text-gray-400 dark:text-gray-600" />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SKU: {product.sku}
                  </p>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Category</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {product.category}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Quantity</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {product.quantity}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {product.location}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Batch</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {product.batch}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 py-2 text-xs font-medium text-center border border-gray-200 dark:border-gray-800 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-300">
                  Edit
                </button>
                <button className="flex-1 py-2 text-xs font-medium text-center bg-primary text-white rounded-md hover:bg-primary/90">
                  View Details
                </button>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
};
export default FinishedGoods;
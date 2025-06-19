import React from 'react';
import { Plus, Filter, ArrowUpDown, ShoppingCart, Search } from 'lucide-react';
const Orders = () => {
  const orders = [{
    id: '#ORD-2023-08-042',
    customer: 'Sarah Johnson',
    date: '2023-08-05',
    items: [{
      name: 'Speckled Vase - Small',
      quantity: 2
    }],
    total: 90.0,
    status: 'Pending'
  }, {
    id: '#ORD-2023-08-041',
    customer: 'Artisanal Home Goods',
    date: '2023-08-04',
    items: [{
      name: 'Speckled Mug',
      quantity: 10
    }, {
      name: 'Ceramic Bowl - Speckled',
      quantity: 5
    }],
    total: 450.0,
    status: 'Processing'
  }, {
    id: '#ORD-2023-08-040',
    customer: 'Michael Chen',
    date: '2023-08-03',
    items: [{
      name: 'Ceramic Planter - Black',
      quantity: 1
    }],
    total: 52.0,
    status: 'Shipped'
  }, {
    id: '#ORD-2023-08-039',
    customer: 'Local Boutique',
    date: '2023-08-02',
    items: [{
      name: 'Blue Vase - Medium',
      quantity: 3
    }, {
      name: 'Blue Vase - Small',
      quantity: 4
    }],
    total: 375.0,
    status: 'Delivered'
  }, {
    id: '#ORD-2023-08-038',
    customer: 'Emily Parker',
    date: '2023-08-01',
    items: [{
      name: 'Dinner Plate - White',
      quantity: 4
    }, {
      name: 'Ceramic Bowl - Speckled',
      quantity: 4
    }],
    total: 264.0,
    status: 'Delivered'
  }, {
    id: '#ORD-2023-07-037',
    customer: 'David Wilson',
    date: '2023-07-31',
    items: [{
      name: 'Speckled Mug',
      quantity: 2
    }],
    total: 56.0,
    status: 'Delivered'
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Orders
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage customer orders and fulfillment
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
          <Plus size={16} />
          New Order
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={16} className="text-gray-400" />
          </div>
          <input type="text" placeholder="Search orders..." className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
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
      <div className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-950 divide-y divide-gray-200 dark:divide-gray-800">
              {orders.map(order => <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="space-y-1">
                      {order.items.map((item, idx) => <div key={idx}>
                          {item.quantity}x {item.name}
                        </div>)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    ${order.total.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${order.status === 'Pending' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-400' : order.status === 'Processing' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-400' : order.status === 'Shipped' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-400' : 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400'}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary hover:text-primary/80 mr-3">
                      View
                    </button>
                    <button className="text-primary hover:text-primary/80">
                      Update
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};
export default Orders;
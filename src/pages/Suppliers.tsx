import React from 'react';
import { Plus, Filter, ArrowUpDown, ShoppingBag, Search, Phone, Mail, MapPin } from 'lucide-react';
const Suppliers = () => {
  const suppliers = [{
    id: '1',
    name: 'ClayWorks Inc.',
    contact: 'John Smith',
    email: 'john@clayworks.com',
    phone: '(555) 123-4567',
    address: '123 Pottery Lane, Ceramics City, CC 12345',
    materials: ['White Clay', 'Speckled Clay']
  }, {
    id: '2',
    name: 'Glaze Master',
    contact: 'Emily Johnson',
    email: 'emily@glazemaster.com',
    phone: '(555) 234-5678',
    address: '456 Glaze Ave, Finish Town, FT 23456',
    materials: ['Blue Glaze', 'Matte Black Glaze', 'Clear Glaze']
  }, {
    id: '3',
    name: 'EcoPack',
    contact: 'Michael Brown',
    email: 'michael@ecopack.com',
    phone: '(555) 345-6789',
    address: '789 Packaging Blvd, Box City, BC 34567',
    materials: ['Packaging Boxes', 'Tissue Paper']
  }, {
    id: '4',
    name: 'Kiln Supplies Co.',
    contact: 'Sarah Davis',
    email: 'sarah@kilnsupplies.com',
    phone: '(555) 456-7890',
    address: '101 Firing Road, Heat Valley, HV 45678',
    materials: ['Kiln Shelves', 'Kiln Wash']
  }, {
    id: '5',
    name: 'Tool Depot',
    contact: 'David Wilson',
    email: 'david@tooldepot.com',
    phone: '(555) 567-8901',
    address: '202 Workshop Lane, Tool Town, TT 56789',
    materials: ['Pottery Tools', 'Trimming Tools']
  }, {
    id: '6',
    name: 'Artisan Materials',
    contact: 'Jessica Miller',
    email: 'jessica@artisanmaterials.com',
    phone: '(555) 678-9012',
    address: '303 Craft Street, Artisan City, AC 67890',
    materials: ['Specialty Glazes', 'Underglazes', 'Decorating Tools']
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Suppliers
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage your material suppliers and contacts
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
          <Plus size={16} />
          Add Supplier
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={16} className="text-gray-400" />
          </div>
          <input type="text" placeholder="Search suppliers..." className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
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
        {suppliers.map(supplier => <div key={supplier.id} className="bg-white dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {supplier.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {supplier.contact}
                </p>
              </div>
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <ShoppingBag size={20} />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail size={14} className="text-gray-500 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  {supplier.email}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone size={14} className="text-gray-500 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  {supplier.phone}
                </span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin size={14} className="text-gray-500 dark:text-gray-400 mt-1" />
                <span className="text-gray-700 dark:text-gray-300">
                  {supplier.address}
                </span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                Materials Supplied
              </h4>
              <div className="flex flex-wrap gap-2">
                {supplier.materials.map((material, idx) => <span key={idx} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200">
                    {material}
                  </span>)}
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 py-2 text-xs font-medium text-center border border-gray-200 dark:border-gray-800 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-300">
                Edit
              </button>
              <button className="flex-1 py-2 text-xs font-medium text-center bg-primary text-white rounded-md hover:bg-primary/90">
                Order Materials
              </button>
            </div>
          </div>)}
      </div>
    </div>;
};
export default Suppliers;
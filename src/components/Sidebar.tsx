import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, ClipboardList, ShoppingBag, ShoppingCart, Users, Settings, Boxes, Palette } from 'lucide-react';
const Sidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  const navItems = [{
    path: '/',
    icon: <LayoutDashboard size={20} />,
    label: 'Studio Home'
  }, {
    path: '/materials',
    icon: <Package size={20} />,
    label: 'Materials'
  }, {
    path: '/wip',
    icon: <ClipboardList size={20} />,
    label: 'In Progress'
  }, {
    path: '/finished-goods',
    icon: <Boxes size={20} />,
    label: 'Finished Pieces'
  }, {
    path: '/orders',
    icon: <ShoppingCart size={20} />,
    label: 'Orders'
  }, {
    path: '/suppliers',
    icon: <ShoppingBag size={20} />,
    label: 'Suppliers'
  }, {
    path: '/customers',
    icon: <Users size={20} />,
    label: 'Customers'
  }, {
    path: '/settings',
    icon: <Settings size={20} />,
    label: 'Settings'
  }];
  return <aside className="hidden md:flex flex-col w-64 border-r border-amber-200/80 dark:border-amber-900/50 bg-white dark:bg-card clay-texture">
      <div className="p-6 border-b border-amber-200/80 dark:border-amber-900/50">
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
            <Palette size={18} />
          </div>
          <h1 className="text-2xl font-bold text-foreground">StudioShelf</h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Crafting organized spaces
        </p>
      </div>
      <nav className="flex-1 pt-5">
        <ul className="space-y-1.5 px-3">
          {navItems.map(item => <li key={item.path}>
              <Link to={item.path} className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${isActive(item.path) ? 'bg-primary/10 text-primary dark:bg-primary/20' : 'text-foreground hover:bg-secondary dark:hover:bg-secondary'}`}>
                {item.icon}
                {item.label}
              </Link>
            </li>)}
        </ul>
      </nav>
      <div className="p-4 m-4 border border-amber-200/80 dark:border-amber-900/50 rounded-lg bg-secondary dark:bg-secondary">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            CM
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              Ceramic Studio
            </p>
            <p className="text-xs text-muted-foreground">Artisan Plan</p>
          </div>
        </div>
      </div>
    </aside>;
};
export default Sidebar;
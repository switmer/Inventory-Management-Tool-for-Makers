import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({
  children
}: LayoutProps) => {
  return <div className="flex h-screen w-full bg-background text-foreground">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-5 md:p-8">{children}</main>
      </div>
    </div>;
};
export default Layout;
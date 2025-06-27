
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  Users, 
  Settings, 
  Tag, 
  BarChart3,
  Menu,
  LogOut,
  Store
} from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Products", href: "/admin/products", icon: Package },
    { name: "Orders", href: "/admin/orders", icon: ShoppingBag },
    { name: "Categories", href: "/admin/categories", icon: Tag },
    { name: "Promotions", href: "/admin/promotions", icon: BarChart3 },
    { name: "Customers", href: "/admin/customers", icon: Users },
    { name: "Settings", href: "/admin/settings", icon: Settings }
  ];

  const isActive = (path: string) => {
    if (path === "/admin") {
      return location.pathname === "/admin";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="mr-4"
              >
                <Menu className="h-5 w-5" />
              </Button>
              
              <Link to="/admin" className="flex items-center">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">SW</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">The Suits World</h1>
                  <p className="text-xs text-gray-600">Admin Panel</p>
                </div>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Store Online
              </Badge>
              
              <Link to="/">
                <Button variant="outline" size="sm">
                  <Store className="w-4 h-4 mr-2" />
                  View Store
                </Button>
              </Link>

              <div className="flex items-center">
                <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">A</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300 bg-white shadow-sm border-r min-h-screen`}>
          <nav className="mt-8 px-4">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(item.href)
                        ? 'bg-slate-900 text-white'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <item.icon className={`mr-3 h-5 w-5 ${!sidebarOpen && 'mr-0'}`} />
                    {sidebarOpen && item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {sidebarOpen && (
              <div className="mt-8 pt-6 border-t">
                <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-gray-900">
                  <LogOut className="mr-3 h-5 w-5" />
                  Sign Out
                </Button>
              </div>
            )}
          </nav>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

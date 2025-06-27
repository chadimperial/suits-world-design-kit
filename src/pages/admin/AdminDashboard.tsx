
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingBag, 
  Users, 
  DollarSign, 
  Package, 
  TrendingUp, 
  AlertCircle,
  Plus,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$47,892",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Orders",
      value: "1,234",
      change: "+5.2%", 
      icon: ShoppingBag,
      color: "text-blue-600"
    },
    {
      title: "Products",
      value: "342",
      change: "+2.1%",
      icon: Package,
      color: "text-purple-600"
    },
    {
      title: "Customers",
      value: "2,847",
      change: "+8.3%",
      icon: Users,
      color: "text-orange-600"
    }
  ];

  const recentOrders = [
    { id: "#3421", customer: "John Smith", amount: "$599", status: "completed", date: "2024-01-20" },
    { id: "#3420", customer: "Sarah Johnson", amount: "$899", status: "processing", date: "2024-01-20" },
    { id: "#3419", customer: "Mike Davis", amount: "$349", status: "shipped", date: "2024-01-19" },
    { id: "#3418", customer: "Emily Chen", amount: "$1299", status: "completed", date: "2024-01-19" },
    { id: "#3417", customer: "David Wilson", amount: "$449", status: "pending", date: "2024-01-18" }
  ];

  const topProducts = [
    { name: "Executive Navy Suit", sales: 89, revenue: "$53,311" },
    { name: "Classic Charcoal Blazer", sales: 67, revenue: "$23,383" },
    { name: "Wedding Tuxedo Set", sales: 45, revenue: "$58,455" },
    { name: "Business Pantsuit", sales: 34, revenue: "$20,366" },
    { name: "Prom Suit Collection", sales: 29, revenue: "$17,401" }
  ];

  const lowStockItems = [
    { name: "Navy Suit - Size 42", stock: 3, sku: "SW-NS-42" },
    { name: "Charcoal Blazer - Size 40", stock: 2, sku: "SW-CB-40" },
    { name: "Wedding Tuxedo - Size 44", stock: 1, sku: "SW-WT-44" },
    { name: "Black Formal Shoes - Size 10", stock: 4, sku: "SW-BFS-10" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's your store overview.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/admin/products">
              <Button className="bg-slate-900 hover:bg-slate-800">
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline">
                <Eye className="w-4 h-4 mr-2" />
                View Store
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Recent Orders
                  <Link to="/admin/orders">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </CardTitle>
                <CardDescription>Latest customer orders and their status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div>
                          <p className="font-medium text-slate-900">{order.id}</p>
                          <p className="text-sm text-gray-600">{order.customer}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                        <div className="text-right">
                          <p className="font-medium text-slate-900">{order.amount}</p>
                          <p className="text-sm text-gray-600">{order.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Products & Alerts */}
          <div className="space-y-6">
            {/* Top Products */}
            <Card>
              <CardHeader>
                <CardTitle>Top Products</CardTitle>
                <CardDescription>Best performing items this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-medium text-slate-900 truncate">
                          {product.name}
                        </p>
                        <p className="text-sm font-medium text-slate-900">
                          {product.revenue}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <Progress value={(product.sales / 100) * 100} className="flex-1 mr-2" />
                        <span className="text-xs text-gray-600">{product.sales} sold</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Low Stock Alert */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-orange-600">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Low Stock Alert
                </CardTitle>
                <CardDescription>Items running low in inventory</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {lowStockItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <div>
                        <p className="font-medium text-slate-900 text-sm">{item.name}</p>
                        <p className="text-xs text-gray-600">{item.sku}</p>
                      </div>
                      <Badge variant="outline" className="text-orange-600 border-orange-600">
                        {item.stock} left
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Analytics Charts */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Sales Analytics</CardTitle>
              <CardDescription>Revenue trends over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">Sales Chart Component</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Category Performance</CardTitle>
              <CardDescription>Sales distribution by product category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">Category Chart Component</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;

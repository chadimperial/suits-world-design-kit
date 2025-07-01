
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Mail, Phone, MapPin, Edit, Trash2, Filter, Download } from "lucide-react";

const AdminCustomers = () => {
  const customers = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      phone: "+1 (555) 123-4567",
      location: "New York, NY",
      orders: 8,
      totalSpent: "$2,450",
      lastOrder: "2024-01-15",
      status: "active",
      joinDate: "2023-03-15"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 (555) 234-5678",
      location: "Los Angeles, CA",
      orders: 12,
      totalSpent: "$3,890",
      lastOrder: "2024-01-20",
      status: "vip",
      joinDate: "2022-11-08"
    },
    {
      id: 3,
      name: "Mike Davis",
      email: "mike.davis@email.com",
      phone: "+1 (555) 345-6789",
      location: "Chicago, IL",
      orders: 5,
      totalSpent: "$1,200",
      lastOrder: "2024-01-18",
      status: "active",
      joinDate: "2023-07-22"
    },
    {
      id: 4,
      name: "Emily Chen",
      email: "emily.chen@email.com",
      phone: "+1 (555) 456-7890",
      location: "San Francisco, CA",
      orders: 15,
      totalSpent: "$4,560",
      lastOrder: "2024-01-19",
      status: "vip",
      joinDate: "2022-05-10"
    },
    {
      id: 5,
      name: "David Wilson",
      email: "d.wilson@email.com",
      phone: "+1 (555) 567-8901",
      location: "Miami, FL",
      orders: 2,
      totalSpent: "$450",
      lastOrder: "2023-12-20",
      status: "inactive",
      joinDate: "2023-10-05"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'vip':
        return <Badge className="bg-purple-100 text-purple-800">VIP</Badge>;
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'inactive':
        return <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const stats = [
    { title: "Total Customers", value: "2,847", change: "+8.3%" },
    { title: "Active Customers", value: "2,234", change: "+5.2%" },
    { title: "VIP Customers", value: "156", change: "+12.1%" },
    { title: "New This Month", value: "89", change: "+15.7%" }
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Customers</h1>
            <p className="text-gray-600">Manage your customer base and relationships</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button className="bg-slate-900 hover:bg-slate-800">
              <Plus className="w-4 h-4 mr-2" />
              Add Customer
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <p className="text-xs text-green-600 mt-1">{stat.change} from last month</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <CardTitle>Customer List</CardTitle>
                <CardDescription>View and manage all customers</CardDescription>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search customers..."
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Desktop Table */}
            <div className="hidden md:block">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Orders</TableHead>
                    <TableHead>Total Spent</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium text-slate-900">{customer.name}</p>
                          <p className="text-sm text-gray-600">Joined {customer.joinDate}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Mail className="w-3 h-3 mr-2 text-gray-400" />
                            {customer.email}
                          </div>
                          <div className="flex items-center text-sm">
                            <Phone className="w-3 h-3 mr-2 text-gray-400" />
                            {customer.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center text-sm">
                          <MapPin className="w-3 h-3 mr-2 text-gray-400" />
                          {customer.location}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{customer.orders}</p>
                          <p className="text-sm text-gray-600">Last: {customer.lastOrder}</p>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{customer.totalSpent}</TableCell>
                      <TableCell>{getStatusBadge(customer.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {customers.map((customer) => (
                <Card key={customer.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-medium text-slate-900">{customer.name}</h3>
                        <p className="text-sm text-gray-600">Joined {customer.joinDate}</p>
                      </div>
                      {getStatusBadge(customer.status)}
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Mail className="w-3 h-3 mr-2 text-gray-400" />
                        {customer.email}
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-3 h-3 mr-2 text-gray-400" />
                        {customer.phone}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-2 text-gray-400" />
                        {customer.location}
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-4 pt-3 border-t">
                      <div className="text-sm">
                        <span className="font-medium">{customer.orders} orders</span>
                        <span className="text-gray-600 ml-2">• {customer.totalSpent}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminCustomers;

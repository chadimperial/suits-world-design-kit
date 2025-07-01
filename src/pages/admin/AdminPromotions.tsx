
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Tag, Calendar, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const AdminPromotions = () => {
  const promotions = [
    {
      id: 1,
      name: "New Year Sale",
      type: "percentage",
      value: 25,
      code: "NEWYEAR25",
      status: "active",
      startDate: "2024-01-01",
      endDate: "2024-01-31",
      used: 156,
      limit: 500
    },
    {
      id: 2,
      name: "Wedding Season",
      type: "fixed",
      value: 100,
      code: "WEDDING100",
      status: "scheduled", 
      startDate: "2024-03-01",
      endDate: "2024-06-30",
      used: 0,
      limit: 200
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'scheduled':
        return <Badge className="bg-blue-100 text-blue-800">Scheduled</Badge>;
      case 'expired':
        return <Badge className="bg-gray-100 text-gray-800">Expired</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Promotions</h1>
            <p className="text-gray-600">Manage discounts and promotional campaigns</p>
          </div>
          <div className="flex gap-3">
            <Link to="/sale">
              <Button variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Sales Page
              </Button>
            </Link>
            <Button className="bg-slate-900 hover:bg-slate-800">
              <Plus className="w-4 h-4 mr-2" />
              Create Promotion
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          {promotions.map((promo) => (
            <Card key={promo.id}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center gap-3">
                      <Tag className="w-5 h-5 text-slate-900" />
                      {promo.name}
                      {getStatusBadge(promo.status)}
                    </CardTitle>
                    <CardDescription>
                      Code: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{promo.code}</span>
                    </CardDescription>
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
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Discount</p>
                    <p className="font-medium">
                      {promo.type === 'percentage' ? `${promo.value}%` : `$${promo.value}`} off
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-gray-600">Duration</p>
                      <p className="font-medium">{promo.startDate} to {promo.endDate}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600">Usage</p>
                    <p className="font-medium">{promo.used} / {promo.limit} used</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Performance</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${(promo.used / promo.limit) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminPromotions;

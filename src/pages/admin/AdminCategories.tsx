
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Package } from "lucide-react";

const AdminCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Men's Suits",
      slug: "mens-suits",
      products: 45,
      status: "active",
      description: "Premium formal wear for men"
    },
    {
      id: 2,
      name: "Women's Suits", 
      slug: "womens-suits",
      products: 32,
      status: "active",
      description: "Professional and elegant collections"
    },
    {
      id: 3,
      name: "Children's Suits",
      slug: "childrens-suits", 
      products: 18,
      status: "active",
      description: "Special occasion formal wear for kids"
    }
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Categories</h1>
            <p className="text-gray-600">Manage product categories and organization</p>
          </div>
          <Button className="bg-slate-900 hover:bg-slate-800">
            <Plus className="w-4 h-4 mr-2" />
            Add Category
          </Button>
        </div>

        <div className="grid gap-6">
          {categories.map((category) => (
            <Card key={category.id}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center gap-3">
                      <Package className="w-5 h-5 text-slate-900" />
                      {category.name}
                      <Badge className="bg-green-100 text-green-800">
                        {category.products} products
                      </Badge>
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
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
                <div className="text-sm text-gray-600">
                  <p>Slug: /{category.slug}</p>
                  <p>Status: <Badge variant="outline">{category.status}</Badge></p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminCategories;

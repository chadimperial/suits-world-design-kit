
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WomensCategory = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popularity");

  const products = [
    {
      id: 5,
      name: "Executive Business Pantsuit",
      price: 649,
      originalPrice: 849,
      image: "https://images.unsplash.com/photo-1594736797933-d0dec65ba2ac?w=300&h=400&fit=crop",
      rating: 4.9,
      reviews: 98,
      category: "Business Suits",
      sizes: ["2", "4", "6", "8", "10", "12"],
      colors: ["Navy", "Charcoal", "Black"],
      badge: "Best Seller"
    },
    {
      id: 6,
      name: "Elegant Wedding Suit",
      price: 799,
      originalPrice: 1099,
      image: "https://images.unsplash.com/photo-1594736797933-d0dec65ba2ac?w=300&h=400&fit=crop",
      rating: 5.0,
      reviews: 67,
      category: "Wedding Suits",
      sizes: ["2", "4", "6", "8", "10"],
      colors: ["Ivory", "Blush", "Navy"],
      badge: "Premium"
    },
    {
      id: 7,
      name: "Cocktail Blazer Set",
      price: 499,
      originalPrice: 699,
      image: "https://images.unsplash.com/photo-1594736797933-d0dec65ba2ac?w=300&h=400&fit=crop",
      rating: 4.7,
      reviews: 124,
      category: "Cocktail Suits",
      sizes: ["2", "4", "6", "8", "10", "12"],
      colors: ["Black", "Burgundy", "Emerald"],
      badge: "New Arrival"
    },
    {
      id: 8,
      name: "Professional Skirt Suit",
      price: 579,
      originalPrice: 749,
      image: "https://images.unsplash.com/photo-1594736797933-d0dec65ba2ac?w=300&h=400&fit=crop",
      rating: 4.6,
      reviews: 89,
      category: "Skirt Suits",
      sizes: ["2", "4", "6", "8", "10", "12", "14"],
      colors: ["Navy", "Gray", "Black"],
      badge: "Classic"
    }
  ];

  const categories = [
    "Business Suits",
    "Wedding Suits",
    "Cocktail Suits", 
    "Skirt Suits",
    "Blazer Sets",
    "Formal Dresses"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-slate-900">Home</Link> 
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">Women's Suits</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar - Similar to Men's category */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg border p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-slate-900" />
                <h3 className="font-semibold text-slate-900">Filters</h3>
              </div>

              {/* Search */}
              <div className="mb-6">
                <Label className="text-sm font-medium text-slate-900 mb-2 block">Search</Label>
                <div className="relative">
                  <Input placeholder="Search products..." className="pl-8" />
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <Label className="text-sm font-medium text-slate-900 mb-3 block">Category</Label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={category} />
                      <Label htmlFor={category} className="text-sm text-gray-600 cursor-pointer">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-slate-900 hover:bg-slate-800">
                Apply Filters
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Women's Suits</h1>
                <p className="text-gray-600">Sophisticated and elegant formal wear for the modern professional woman</p>
                <p className="text-sm text-gray-500 mt-2">Showing 1-12 of 36 products</p>
              </div>

              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Most Popular</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-lg overflow-hidden">
                  <Button 
                    variant={viewMode === "grid" ? "default" : "ghost"} 
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-none"
                  >
                    Grid
                  </Button>
                  <Button 
                    variant={viewMode === "list" ? "default" : "ghost"} 
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-none"
                  >
                    List
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
              {products.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-yellow-600 text-white">
                      {product.badge}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <Badge variant="outline" className="text-xs text-gray-600">
                        {product.category}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-slate-900">${product.price}</span>
                        <span className="text-gray-500 line-through ml-2">${product.originalPrice}</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Save ${product.originalPrice - product.price}
                      </Badge>
                    </div>

                    <div className="flex gap-2">
                      <Link to={`/product/${product.id}`} className="flex-1">
                        <Button className="w-full bg-slate-900 hover:bg-slate-800">
                          View Details
                        </Button>
                      </Link>
                      <Button variant="outline" className="px-4">
                        ♡
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="default" size="sm" className="bg-slate-900">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WomensCategory;

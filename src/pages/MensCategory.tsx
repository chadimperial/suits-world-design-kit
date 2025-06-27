
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

const MensCategory = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popularity");

  const products = [
    {
      id: 1,
      name: "Executive Navy Business Suit",
      price: 599,
      originalPrice: 799,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 4.8,
      reviews: 124,
      category: "Corporate Suits",
      sizes: ["38", "40", "42", "44", "46"],
      colors: ["Navy", "Charcoal"],
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Classic Charcoal Three-Piece",
      price: 899,
      originalPrice: 1199,
      image: "https://images.unsplash.com/photo-1594736797933-d0dec65ba2ac?w=300&h=400&fit=crop",
      rating: 4.9,
      reviews: 89,
      category: "Three-Piece Suits",
      sizes: ["36", "38", "40", "42", "44"],
      colors: ["Charcoal", "Black"],
      badge: "Premium"
    },
    {
      id: 3,
      name: "Wedding Tuxedo Set",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=300&h=400&fit=crop",
      rating: 5.0,
      reviews: 67,
      category: "Wedding Suits",
      sizes: ["38", "40", "42", "44"],
      colors: ["Black", "Midnight Blue"],
      badge: "Luxury"
    },
    {
      id: 4,
      name: "Casual Navy Blazer",
      price: 349,
      originalPrice: 449,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 4.6,
      reviews: 156,
      category: "Blazers",
      sizes: ["38", "40", "42", "44", "46", "48"],
      colors: ["Navy", "Gray", "Brown"],
      badge: "New Arrival"
    }
  ];

  const categories = [
    "Corporate Suits",
    "Wedding Suits", 
    "Prom Suits",
    "Three-Piece Suits",
    "Blazers",
    "Formal Trousers"
  ];

  const priceRanges = [
    "Under $300",
    "$300 - $500",
    "$500 - $800", 
    "$800 - $1200",
    "Over $1200"
  ];

  const sizes = ["36", "38", "40", "42", "44", "46", "48", "50"];
  const colors = ["Black", "Navy", "Charcoal", "Gray", "Brown", "Blue"];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-slate-900">Home</Link> 
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">Men's Suits</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
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

              {/* Price Range */}
              <div className="mb-6">
                <Label className="text-sm font-medium text-slate-900 mb-3 block">Price Range</Label>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <div key={range} className="flex items-center space-x-2">
                      <Checkbox id={range} />
                      <Label htmlFor={range} className="text-sm text-gray-600 cursor-pointer">
                        {range}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-6">
                <Label className="text-sm font-medium text-slate-900 mb-3 block">Size</Label>
                <div className="grid grid-cols-4 gap-2">
                  {sizes.map((size) => (
                    <Button 
                      key={size} 
                      variant="outline" 
                      size="sm" 
                      className="h-8 text-xs hover:bg-slate-900 hover:text-white"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="mb-6">
                <Label className="text-sm font-medium text-slate-900 mb-3 block">Colors</Label>
                <div className="space-y-2">
                  {colors.map((color) => (
                    <div key={color} className="flex items-center space-x-2">
                      <Checkbox id={color} />
                      <Label htmlFor={color} className="text-sm text-gray-600 cursor-pointer">
                        {color}
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
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Men's Suits</h1>
                <p className="text-gray-600">Premium collection of formal wear for the modern gentleman</p>
                <p className="text-sm text-gray-500 mt-2">Showing 1-12 of 48 products</p>
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
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="secondary" className="text-xs">
                        Quick View
                      </Button>
                    </div>
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

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-600">
                        <span>Sizes: {product.sizes.join(", ")}</span>
                      </div>
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

export default MensCategory;

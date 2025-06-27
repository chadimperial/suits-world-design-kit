
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
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  sizes: string[];
  colors: string[];
  badge: string;
}

interface MensPageLayoutProps {
  title: string;
  description: string;
  products: Product[];
  categories: string[];
  breadcrumbPath: string;
}

const MensPageLayout = ({ title, description, products, categories, breadcrumbPath }: MensPageLayoutProps) => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popularity");

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
      
      {/* Hero Section with uploaded image */}
      <section className="relative h-[60vh] bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/2bfbe23c-666e-4b7d-afd7-3e34cb4599d2.png" 
            alt="The Suits World Team"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-blue-800/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-xl mb-6 text-blue-100">
              {description}
            </p>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-400 text-white border-0">
              Shop Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link> 
            <span className="mx-2">/</span>
            <Link to="/mens" className="hover:text-blue-600">Men's Suits</Link>
            <span className="mx-2">/</span>
            <span className="text-blue-600 font-medium">{breadcrumbPath}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg border p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Filters</h3>
              </div>

              {/* Search */}
              <div className="mb-6">
                <Label className="text-sm font-medium text-gray-900 mb-2 block">Search</Label>
                <div className="relative">
                  <Input placeholder="Search products..." className="pl-8" />
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <Label className="text-sm font-medium text-gray-900 mb-3 block">Category</Label>
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
                <Label className="text-sm font-medium text-gray-900 mb-3 block">Price Range</Label>
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
                <Label className="text-sm font-medium text-gray-900 mb-3 block">Size</Label>
                <div className="grid grid-cols-4 gap-2">
                  {sizes.map((size) => (
                    <Button 
                      key={size} 
                      variant="outline" 
                      size="sm" 
                      className="h-8 text-xs hover:bg-blue-600 hover:text-white hover:border-blue-600"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="mb-6">
                <Label className="text-sm font-medium text-gray-900 mb-3 block">Colors</Label>
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

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Apply Filters
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
                <p className="text-gray-600">{description}</p>
                <p className="text-sm text-gray-500 mt-2">Showing 1-12 of {products.length} products</p>
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
                    <Badge className="absolute top-3 left-3 bg-blue-600 text-white">
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
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
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
                        <span className="text-2xl font-bold text-gray-900">${product.price}</span>
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
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
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
                <Button variant="default" size="sm" className="bg-blue-600">1</Button>
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

export default MensPageLayout;

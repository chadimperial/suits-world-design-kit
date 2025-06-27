
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ChildrensCategory = () => {
  const products = [
    {
      id: 9,
      name: "Boys' First Communion Suit",
      price: 199,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=300&h=400&fit=crop",
      rating: 4.8,
      reviews: 45,
      category: "Boys' Suits",
      sizes: ["4", "6", "8", "10", "12"],
      badge: "Popular"
    },
    {
      id: 10,
      name: "Girls' Formal Dress Suit",
      price: 149,
      originalPrice: 229,
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=300&h=400&fit=crop",
      rating: 4.9,
      reviews: 32,
      category: "Girls' Suits",
      sizes: ["4", "6", "8", "10", "12"],
      badge: "New"
    },
    {
      id: 11,
      name: "Ring Bearer Tuxedo",
      price: 179,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=300&h=400&fit=crop",
      rating: 5.0,
      reviews: 28,
      category: "Wedding Party",
      sizes: ["2T", "3T", "4", "6", "8"],
      badge: "Premium"
    },
    {
      id: 12,
      name: "Flower Girl Dress Set",
      price: 129,
      originalPrice: 189,
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=300&h=400&fit=crop",
      rating: 4.7,
      reviews: 41,
      category: "Wedding Party",
      sizes: ["2T", "3T", "4", "6", "8"],
      badge: "Sweet"
    }
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
            <span className="text-slate-900 font-medium">Children's Suits</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Children's Formal Wear</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Special occasion outfits for your little ones. From weddings to formal events, 
            we have the perfect suits and dresses for boys and girls.
          </p>
        </div>

        {/* Category Sections */}
        <div className="space-y-16">
          {/* Boys' Section */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Boys' Collection</h2>
              <Button variant="outline">View All Boys' Suits</Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.filter(p => p.category === "Boys' Suits" || p.category === "Wedding Party").slice(0, 2).map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-blue-600 text-white">
                      {product.badge}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-slate-900 mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-xl font-bold text-slate-900">${product.price}</span>
                        <span className="text-gray-500 line-through ml-2 text-sm">${product.originalPrice}</span>
                      </div>
                    </div>
                    <Link to={`/product/${product.id}`}>
                      <Button className="w-full bg-slate-900 hover:bg-slate-800 text-sm">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Girls' Section */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Girls' Collection</h2>
              <Button variant="outline">View All Girls' Suits</Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.filter(p => p.category === "Girls' Suits" || p.id === 12).slice(0, 2).map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-pink-600 text-white">
                      {product.badge}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-slate-900 mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-xl font-bold text-slate-900">${product.price}</span>
                        <span className="text-gray-500 line-through ml-2 text-sm">${product.originalPrice}</span>
                      </div>
                    </div>
                    <Link to={`/product/${product.id}`}>
                      <Button className="w-full bg-slate-900 hover:bg-slate-800 text-sm">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Size Guide */}
          <section className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Children's Size Guide</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Boys' Sizing</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Size</th>
                        <th className="text-left py-2">Age</th>
                        <th className="text-left py-2">Height (in)</th>
                        <th className="text-left py-2">Chest (in)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b"><td className="py-2">4</td><td>3-4 yrs</td><td>39-41</td><td>23</td></tr>
                      <tr className="border-b"><td className="py-2">6</td><td>5-6 yrs</td><td>42-45</td><td>25</td></tr>
                      <tr className="border-b"><td className="py-2">8</td><td>7-8 yrs</td><td>46-49</td><td>26</td></tr>
                      <tr className="border-b"><td className="py-2">10</td><td>9-10 yrs</td><td>50-53</td><td>28</td></tr>
                      <tr><td className="py-2">12</td><td>11-12 yrs</td><td>54-57</td><td>30</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Girls' Sizing</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Size</th>
                        <th className="text-left py-2">Age</th>
                        <th className="text-left py-2">Height (in)</th>
                        <th className="text-left py-2">Chest (in)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b"><td className="py-2">4</td><td>3-4 yrs</td><td>39-41</td><td>22</td></tr>
                      <tr className="border-b"><td className="py-2">6</td><td>5-6 yrs</td><td>42-45</td><td>24</td></tr>
                      <tr className="border-b"><td className="py-2">8</td><td>7-8 yrs</td><td>46-49</td><td>25</td></tr>
                      <tr className="border-b"><td className="py-2">10</td><td>9-10 yrs</td><td>50-53</td><td>27</td></tr>
                      <tr><td className="py-2">12</td><td>11-12 yrs</td><td>54-57</td><td>29</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChildrensCategory;

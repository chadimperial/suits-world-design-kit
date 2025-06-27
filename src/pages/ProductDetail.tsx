
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Heart, Share2, Truck, Shield, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data
  const product = {
    id: 1,
    name: "Executive Navy Business Suit",
    price: 599,
    originalPrice: 799,
    rating: 4.8,
    reviews: 124,
    category: "Corporate Suits",
    sku: "SW-ENS-001",
    description: "Crafted from premium wool blend fabric, this executive navy business suit embodies sophistication and professionalism. Perfect for boardroom meetings, important presentations, and formal occasions.",
    features: [
      "100% Premium Wool Blend",
      "Slim Fit Design",
      "Half-Canvas Construction", 
      "Premium Italian Buttons",
      "Dry Clean Only"
    ],
    sizes: ["36", "38", "40", "42", "44", "46", "48"],
    colors: [
      { name: "Navy", value: "#1a365d" },
      { name: "Charcoal", value: "#2d3748" }
    ],
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1594736797933-d0dec65ba2ac?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
    ],
    inStock: true,
    badge: "Best Seller"
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Classic Charcoal Blazer",
      price: 349,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 4.6
    },
    {
      id: 3,
      name: "Premium Dress Shirt",
      price: 89,
      image: "https://images.unsplash.com/photo-1594736797933-d0dec65ba2ac?w=300&h=400&fit=crop",
      rating: 4.7
    },
    {
      id: 4,
      name: "Silk Tie Collection",
      price: 45,
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=300&h=400&fit=crop",
      rating: 4.9
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Michael Johnson",
      rating: 5,
      date: "2024-01-15",
      comment: "Exceptional quality and perfect fit. The tailoring is impeccable and the fabric feels premium. Highly recommended!",
      verified: true
    },
    {
      id: 2, 
      name: "David Chen",
      rating: 4,
      date: "2024-01-10",
      comment: "Great suit for the price. Fast delivery and good customer service. Will order again.",
      verified: true
    },
    {
      id: 3,
      name: "Robert Wilson",
      rating: 5,
      date: "2024-01-05",
      comment: "Perfect for business meetings. Elegant design and comfortable to wear all day.",
      verified: false
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
            <Link to="/mens" className="hover:text-slate-900">Men's Suits</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg bg-gray-100">
              <img 
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-[600px] object-cover"
              />
              {product.badge && (
                <Badge className="absolute top-4 left-4 bg-yellow-600 text-white">
                  {product.badge}
                </Badge>
              )}
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-slate-900' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold text-slate-900 mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
                <span className="text-sm text-gray-500">SKU: {product.sku}</span>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                <Badge className="bg-green-100 text-green-800">
                  Save ${product.originalPrice - product.price}
                </Badge>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Product Options */}
            <div className="space-y-6">
              {/* Size Selection */}
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-3">
                  Size {selectedSize && <span className="text-gray-500">({selectedSize})</span>}
                </label>
                <div className="grid grid-cols-7 gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedSize(size)}
                      className={selectedSize === size ? "bg-slate-900" : ""}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-3">
                  Color {selectedColor && <span className="text-gray-500">({selectedColor})</span>}
                </label>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === color.name 
                          ? 'border-slate-900 ring-2 ring-slate-900 ring-offset-2' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-3">Quantity</label>
                <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1,2,3,4,5].map(num => (
                      <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-slate-900 hover:bg-slate-800"
                  disabled={!selectedSize || !selectedColor}
                >
                  Add to Cart - ${product.price}
                </Button>
                <Button size="lg" variant="outline" className="px-4">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-4">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
              
              <Button variant="outline" size="lg" className="w-full">
                Buy Now - Express Checkout
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="border-t pt-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Truck className="w-6 h-6 text-green-600 mb-2" />
                  <span className="text-sm font-medium">Free Shipping</span>
                  <span className="text-xs text-gray-500">Orders $500+</span>
                </div>
                <div className="flex flex-col items-center">
                  <Shield className="w-6 h-6 text-blue-600 mb-2" />
                  <span className="text-sm font-medium">Quality Guarantee</span>
                  <span className="text-xs text-gray-500">Premium Materials</span>
                </div>
                <div className="flex flex-col items-center">
                  <RefreshCw className="w-6 h-6 text-purple-600 mb-2" />
                  <span className="text-sm font-medium">Easy Returns</span>
                  <span className="text-xs text-gray-500">30-Day Policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="size-guide">Size Guide</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Product Description</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {product.description} This sophisticated piece is designed for the modern professional 
                    who demands both style and functionality. The premium construction ensures durability 
                    while maintaining an elegant silhouette that commands respect in any setting.
                  </p>
                  <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-600">• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Fabric & Material</h4>
                      <dl className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Fabric:</dt>
                          <dd className="font-medium">100% Premium Wool Blend</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Weight:</dt>
                          <dd className="font-medium">290gsm</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Lining:</dt>
                          <dd className="font-medium">Polyester Blend</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Care:</dt>
                          <dd className="font-medium">Dry Clean Only</dd>
                        </div>
                      </dl>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Construction</h4>
                      <dl className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Fit:</dt>
                          <dd className="font-medium">Slim Fit</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Button Stance:</dt>
                          <dd className="font-medium">Two Button</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Lapel:</dt>
                          <dd className="font-medium">Notched Lapel</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Vents:</dt>
                          <dd className="font-medium">Double Side Vents</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="size-guide" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Size Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2">Size</th>
                          <th className="text-left py-3 px-2">Chest (in)</th>
                          <th className="text-left py-3 px-2">Waist (in)</th>
                          <th className="text-left py-3 px-2">Shoulder (in)</th>
                          <th className="text-left py-3 px-2">Length (in)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { size: "36", chest: "36-37", waist: "30-31", shoulder: "17", length: "29" },
                          { size: "38", chest: "38-39", waist: "32-33", shoulder: "17.5", length: "29.5" },
                          { size: "40", chest: "40-41", waist: "34-35", shoulder: "18", length: "30" },
                          { size: "42", chest: "42-43", waist: "36-37", shoulder: "18.5", length: "30.5" },
                          { size: "44", chest: "44-45", waist: "38-39", shoulder: "19", length: "31" },
                        ].map((row) => (
                          <tr key={row.size} className="border-b">
                            <td className="py-3 px-2 font-medium">{row.size}</td>
                            <td className="py-3 px-2">{row.chest}</td>
                            <td className="py-3 px-2">{row.waist}</td>
                            <td className="py-3 px-2">{row.shoulder}</td>
                            <td className="py-3 px-2">{row.length}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <div className="space-y-6">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-medium">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium text-slate-900">{review.name}</p>
                            <p className="text-sm text-gray-500">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : ''}`} />
                            ))}
                          </div>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">Verified Purchase</Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Complete the Look</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-slate-900 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-slate-900">${product.price}</span>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <Button size="sm" className="w-full mt-3 bg-slate-900 hover:bg-slate-800">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Shield, Truck, RefreshCw, User } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const categories = [
    {
      title: "Men's Suits",
      description: "Premium business and formal wear",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      link: "/mens",
      subcategories: ["Corporate Suits", "Wedding Suits", "Blazers"]
    },
    {
      title: "Women's Suits",
      description: "Professional and elegant collections",
      image: "https://images.unsplash.com/photo-1594736797933-d0dec65ba2ac?w=400&h=600&fit=crop",
      link: "/womens",
      subcategories: ["Business Suits", "Cocktail Suits", "Formal Dresses"]
    },
    {
      title: "Children's Suits",
      description: "Special occasion formal wear",
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=600&fit=crop",
      link: "/childrens",
      subcategories: ["Boys' Suits", "Girls' Suits", "Wedding Party"]
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Executive Navy Suit",
      price: 599,
      originalPrice: 799,
      image: "https://images.unsplash.com/photo-1594736797933-d0dec65ba2ac?w=300&h=400&fit=crop",
      rating: 4.8,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Classic Charcoal Blazer",
      price: 349,
      originalPrice: 449,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 4.9,
      badge: "New Arrival"
    },
    {
      id: 3,
      name: "Wedding Three-Piece",
      price: 899,
      originalPrice: 1199,
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=300&h=400&fit=crop",
      rating: 5.0,
      badge: "Premium"
    }
  ];

  const testimonials = [
    {
      name: "Michael Johnson",
      rating: 5,
      comment: "Exceptional quality and perfect fit. The tailoring service exceeded my expectations."
    },
    {
      name: "Sarah Davis",
      rating: 5,
      comment: "Beautiful suits for my wedding party. Professional service and timely delivery."
    },
    {
      name: "Robert Chen",
      rating: 4,
      comment: "Great selection and competitive prices. Will definitely shop here again."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Discover Your Perfect Suit
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Premium formal wear for men, women, and children. 
              Crafted with precision, designed for elegance.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white">
                Shop Collection
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                Custom Tailoring
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections of premium formal wear designed for every occasion
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    {category.subcategories.map((sub, i) => (
                      <Badge key={i} variant="secondary" className="mr-2 mb-2 bg-white/20 text-white border-white/30">
                        {sub}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-slate-900">{category.title}</CardTitle>
                <CardDescription className="text-gray-600">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to={category.link}>
                  <Button className="w-full bg-slate-900 hover:bg-slate-800">
                    Explore Collection
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Products</h2>
            <p className="text-gray-600">Handpicked bestsellers from our premium collection</p>
          </div>
          
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              {featuredProducts.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-lg transition-shadow">
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
                      <h3 className="font-semibold text-slate-900 mb-2">{product.name}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({product.rating})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-slate-900">${product.price}</span>
                          <span className="text-gray-500 line-through ml-2">${product.originalPrice}</span>
                        </div>
                        <Link to={`/product/${product.id}`}>
                          <Button size="sm" className="bg-slate-900 hover:bg-slate-800">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Shield className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="font-semibold text-slate-900 mb-2">Quality Guarantee</h3>
            <p className="text-gray-600 text-sm">Premium materials and expert craftsmanship</p>
          </div>
          <div className="flex flex-col items-center">
            <Truck className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="font-semibold text-slate-900 mb-2">Free Shipping</h3>
            <p className="text-gray-600 text-sm">On orders over $500 worldwide</p>
          </div>
          <div className="flex flex-col items-center">
            <RefreshCw className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="font-semibold text-slate-900 mb-2">Easy Returns</h3>
            <p className="text-gray-600 text-sm">30-day hassle-free return policy</p>
          </div>
          <div className="flex flex-col items-center">
            <User className="w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="font-semibold text-slate-900 mb-2">Personal Styling</h3>
            <p className="text-gray-600 text-sm">Expert advice and custom fitting</p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">Trusted by thousands of satisfied customers worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

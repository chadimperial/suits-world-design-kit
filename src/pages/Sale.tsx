
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Tag, Star, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Sale = () => {
  const promotions = [
    {
      id: 1,
      name: "New Year Sale",
      description: "Start the year in style with our premium collection",
      discount: 25,
      code: "NEWYEAR25",
      validUntil: "January 31, 2024",
      image: "/lovable-uploads/4ba80d39-2697-438c-9ed7-86f8311f2935.png",
      category: "All Categories",
      featured: true
    },
    {
      id: 2,
      name: "Wedding Season Special",
      description: "Perfect suits for your special day",
      discount: 100,
      discountType: "fixed",
      code: "WEDDING100",
      validUntil: "June 30, 2024",
      image: "/lovable-uploads/0a33b8bd-fc15-4411-ab2a-42148e84048b.png",
      category: "Wedding Collection",
      featured: true
    },
    {
      id: 3,
      name: "Corporate Collection",
      description: "Professional attire for the modern workplace",
      discount: 15,
      code: "CORPORATE15",
      validUntil: "March 15, 2024",
      image: "/lovable-uploads/301108ce-641b-41ae-9c86-23ef3a068aac.png",
      category: "Men's Suits",
      featured: false
    },
    {
      id: 4,
      name: "Holiday Special",
      description: "Celebrate the holidays with elegant formal wear",
      discount: 30,
      code: "HOLIDAY30",
      validUntil: "December 31, 2024",
      image: "/lovable-uploads/2fd4c19b-518b-46cb-8715-afec72c8925d.png",
      category: "All Categories",
      featured: false
    }
  ];

  const featuredPromotions = promotions.filter(promo => promo.featured);
  const regularPromotions = promotions.filter(promo => !promo.featured);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-3xl text-white">
            <div className="flex items-center justify-center mb-4">
              <Gift className="w-8 h-8 mr-3" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Special Offers & Sales
              </h1>
            </div>
            <p className="text-lg sm:text-xl mb-6 text-gray-200">
              Discover amazing deals on premium formal wear and accessories
            </p>
            <Badge className="bg-red-600 text-white text-lg px-6 py-2">
              Up to 30% OFF
            </Badge>
          </div>
        </div>
      </section>

      {/* Featured Promotions */}
      <section className="py-12 sm:py-16 container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Featured Deals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Limited time offers on our most popular collections
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredPromotions.map((promo) => (
            <Card key={promo.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={promo.image} 
                  alt={promo.name}
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-600 text-white text-lg px-4 py-2">
                    {promo.discountType === 'fixed' ? `$${promo.discount} OFF` : `${promo.discount}% OFF`}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{promo.name}</h3>
                    <p className="text-gray-200 text-sm sm:text-base">{promo.description}</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">Valid until {promo.validUntil}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {promo.category}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
                    <Tag className="w-4 h-4 mr-2 text-gray-600" />
                    <span className="font-mono text-sm font-semibold">{promo.code}</span>
                  </div>
                  <Button className="bg-slate-900 hover:bg-slate-800">
                    Shop Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Regular Promotions */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">More Great Deals</h2>
            <p className="text-gray-600">Additional savings across our collections</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularPromotions.map((promo) => (
              <Card key={promo.id} className="group hover:shadow-lg transition-shadow">
                <div className="flex">
                  <div className="relative w-1/3">
                    <img 
                      src={promo.image} 
                      alt={promo.name}
                      className="w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 bg-yellow-600 text-white text-sm">
                      {promo.discount}% OFF
                    </Badge>
                  </div>
                  <CardContent className="flex-1 p-4 sm:p-6">
                    <CardTitle className="text-lg mb-2">{promo.name}</CardTitle>
                    <CardDescription className="text-sm mb-3">
                      {promo.description}
                    </CardDescription>
                    <div className="flex items-center text-gray-600 mb-3">
                      <Clock className="w-3 h-3 mr-1" />
                      <span className="text-xs">Until {promo.validUntil}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center bg-gray-100 px-2 py-1 rounded text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        <span className="font-mono">{promo.code}</span>
                      </div>
                      <Button size="sm" className="bg-slate-900 hover:bg-slate-800 text-xs">
                        Shop Now
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Promo Codes */}
      <section className="py-12 sm:py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">How to Use Promo Codes</h2>
            <p className="text-gray-600">Follow these simple steps to apply your discount</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mb-4 text-lg font-bold">
                1
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Add Items to Cart</h3>
              <p className="text-gray-600 text-sm">Browse and select your favorite products</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mb-4 text-lg font-bold">
                2
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Enter Promo Code</h3>
              <p className="text-gray-600 text-sm">Apply the code at checkout</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center mb-4 text-lg font-bold">
                3
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Enjoy Savings</h3>
              <p className="text-gray-600 text-sm">See your discount applied instantly</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sale;

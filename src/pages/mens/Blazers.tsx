
import MensPageLayout from "@/components/mens/MensPageLayout";

const Blazers = () => {
  const products = [
    {
      id: 501,
      name: "Navy Sport Blazer",
      price: 399,
      originalPrice: 529,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 4.6,
      reviews: 89,
      category: "Blazers",
      sizes: ["38", "40", "42", "44", "46"],
      colors: ["Navy", "Gray"],
      badge: "Casual"
    },
    {
      id: 502,
      name: "Charcoal Business Blazer",
      price: 449,
      originalPrice: 599,
      image: "https://images.unsplash.com/photo-1594736797933-d0dec65ba2ac?w=300&h=400&fit=crop",
      rating: 4.7,
      reviews: 123,
      category: "Blazers",
      sizes: ["36", "38", "40", "42", "44"],
      colors: ["Charcoal", "Black"],
      badge: "Business"
    },
    {
      id: 503,
      name: "Tweed Country Blazer",
      price: 549,
      originalPrice: 729,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 4.8,
      reviews: 67,
      category: "Blazers",
      sizes: ["38", "40", "42", "44"],
      colors: ["Brown", "Green"],
      badge: "Heritage"
    },
    {
      id: 504,
      name: "Modern Slim Blazer",
      price: 379,
      originalPrice: 499,
      image: "https://images.unsplash.com/photo-1594736797933-d0dec65ba2ac?w=300&h=400&fit=crop",
      rating: 4.5,
      reviews: 145,
      category: "Blazers",
      sizes: ["36", "38", "40", "42", "44", "46"],
      colors: ["Navy", "Gray", "Black"],
      badge: "Slim Fit"
    }
  ];

  const categories = [
    "Sport Blazers",
    "Business Blazers",
    "Casual Blazers",
    "Tweed Blazers",
    "Slim Fit",
    "Regular Fit"
  ];

  return (
    <MensPageLayout
      title="Blazers"
      description="Premium blazers for business and casual occasions"
      products={products}
      categories={categories}
      breadcrumbPath="Blazers"
    />
  );
};

export default Blazers;

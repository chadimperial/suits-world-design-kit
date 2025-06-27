
import MensPageLayout from "@/components/mens/MensPageLayout";

const PromSuits = () => {
  const products = [
    {
      id: 301,
      name: "Classic Prom Tuxedo",
      price: 449,
      originalPrice: 599,
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=300&h=400&fit=crop",
      rating: 4.7,
      reviews: 89,
      category: "Prom",
      sizes: ["36", "38", "40", "42", "44"],
      colors: ["Black", "Navy", "Burgundy"],
      badge: "Popular"
    },
    {
      id: 302,
      name: "Modern Prom Suit",
      price: 399,
      originalPrice: 529,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 4.6,
      reviews: 123,
      category: "Prom",
      sizes: ["36", "38", "40", "42"],
      colors: ["Navy", "Charcoal", "Royal Blue"],
      badge: "Trendy"
    },
    {
      id: 303,
      name: "Velvet Prom Blazer Set",
      price: 549,
      originalPrice: 729,
      image: "https://images.unsplash.com/photo-1594736797933-d0dec65ba2ac?w=300&h=400&fit=crop",
      rating: 4.8,
      reviews: 67,
      category: "Prom",
      sizes: ["38", "40", "42", "44"],
      colors: ["Burgundy", "Forest Green", "Navy"],
      badge: "Luxury"
    },
    {
      id: 304,
      name: "Slim Fit Prom Tuxedo",
      price: 479,
      originalPrice: 639,
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=300&h=400&fit=crop",
      rating: 4.7,
      reviews: 145,
      category: "Prom",
      sizes: ["36", "38", "40", "42", "44"],
      colors: ["Black", "Midnight Blue"],
      badge: "Slim Fit"
    }
  ];

  const categories = [
    "Classic Tuxedos",
    "Modern Suits",
    "Velvet Blazers",
    "Slim Fit",
    "Colorful Options",
    "Rental Available"
  ];

  return (
    <MensPageLayout
      title="Prom Suits"
      description="Stylish prom suits and tuxedos to make your night unforgettable"
      products={products}
      categories={categories}
      breadcrumbPath="Prom Suits"
    />
  );
};

export default PromSuits;

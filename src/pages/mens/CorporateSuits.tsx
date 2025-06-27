
import MensPageLayout from "@/components/mens/MensPageLayout";

const CorporateSuits = () => {
  const products = [
    {
      id: 101,
      name: "Executive Navy Business Suit",
      price: 699,
      originalPrice: 899,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 4.9,
      reviews: 156,
      category: "Corporate",
      sizes: ["38", "40", "42", "44", "46"],
      colors: ["Navy", "Charcoal"],
      badge: "Best Seller"
    },
    {
      id: 102,
      name: "Professional Charcoal Suit",
      price: 649,
      originalPrice: 849,
      image: "https://images.unsplash.com/photo-1594736797933-d0dec65ba2ac?w=300&h=400&fit=crop",
      rating: 4.8,
      reviews: 123,
      category: "Corporate",
      sizes: ["36", "38", "40", "42", "44"],
      colors: ["Charcoal", "Black"],
      badge: "Premium"
    },
    {
      id: 103,
      name: "Modern Slim Fit Business Suit",
      price: 599,
      originalPrice: 799,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 4.7,
      reviews: 89,
      category: "Corporate",
      sizes: ["38", "40", "42", "44"],
      colors: ["Navy", "Gray"],
      badge: "New Arrival"
    },
    {
      id: 104,
      name: "Classic Black Corporate Suit",
      price: 749,
      originalPrice: 999,
      image: "https://images.unsplash.com/photo-1594736797933-d0dec65ba2ac?w=300&h=400&fit=crop",
      rating: 4.9,
      reviews: 201,
      category: "Corporate",
      sizes: ["36", "38", "40", "42", "44", "46"],
      colors: ["Black", "Charcoal"],
      badge: "Executive"
    }
  ];

  const categories = [
    "Slim Fit",
    "Regular Fit",
    "Modern Fit",
    "Executive Cut",
    "Two-Piece",
    "Three-Piece"
  ];

  return (
    <MensPageLayout
      title="Corporate Suits"
      description="Professional business suits designed for the modern executive"
      products={products}
      categories={categories}
      breadcrumbPath="Corporate Suits"
    />
  );
};

export default CorporateSuits;


import MensPageLayout from "@/components/mens/MensPageLayout";

const WeddingSuits = () => {
  const products = [
    {
      id: 201,
      name: "Classic Wedding Tuxedo",
      price: 1299,
      originalPrice: 1699,
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=300&h=400&fit=crop",
      rating: 5.0,
      reviews: 78,
      category: "Wedding",
      sizes: ["38", "40", "42", "44", "46"],
      colors: ["Black", "Midnight Blue"],
      badge: "Luxury"
    },
    {
      id: 202,
      name: "Groom's Special Three-Piece",
      price: 999,
      originalPrice: 1299,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 4.9,
      reviews: 134,
      category: "Wedding",
      sizes: ["36", "38", "40", "42", "44"],
      colors: ["Navy", "Charcoal", "Gray"],
      badge: "Popular"
    },
    {
      id: 203,
      name: "Vintage Wedding Suit",
      price: 849,
      originalPrice: 1099,
      image: "https://images.unsplash.com/photo-1594736797933-d0dec65ba2ac?w=300&h=400&fit=crop",
      rating: 4.8,
      reviews: 92,
      category: "Wedding",
      sizes: ["38", "40", "42", "44"],
      colors: ["Cream", "Light Gray"],
      badge: "Vintage"
    },
    {
      id: 204,
      name: "Modern Groom Tuxedo",
      price: 1199,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=300&h=400&fit=crop",
      rating: 4.9,
      reviews: 167,
      category: "Wedding",
      sizes: ["36", "38", "40", "42", "44", "46"],
      colors: ["Black", "Navy"],
      badge: "Modern"
    }
  ];

  const categories = [
    "Tuxedos",
    "Three-Piece Suits",
    "Vintage Style",
    "Modern Cut",
    "Classic Fit",
    "Destination Wedding"
  ];

  return (
    <MensPageLayout
      title="Wedding Suits"
      description="Elegant wedding suits and tuxedos for your special day"
      products={products}
      categories={categories}
      breadcrumbPath="Wedding Suits"
    />
  );
};

export default WeddingSuits;

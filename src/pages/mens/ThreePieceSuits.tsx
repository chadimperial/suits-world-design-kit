
import MensPageLayout from "@/components/mens/MensPageLayout";

const ThreePieceSuits = () => {
  const products = [
    {
      id: 401,
      name: "Executive Three-Piece Navy",
      price: 899,
      originalPrice: 1199,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 4.9,
      reviews: 112,
      category: "Three-Piece",
      sizes: ["38", "40", "42", "44", "46"],
      colors: ["Navy", "Charcoal"],
      badge: "Executive"
    },
    {
      id: 402,
      name: "Classic Charcoal Three-Piece",
      price: 849,
      originalPrice: 1099,
      image: "https://images.unsplash.com/photo-1594736797933-d0dec65ba2ac?w=300&h=400&fit=crop",
      rating: 4.8,
      reviews: 98,
      category: "Three-Piece",
      sizes: ["36", "38", "40", "42", "44"],
      colors: ["Charcoal", "Black"],
      badge: "Classic"
    },
    {
      id: 403,
      name: "Vintage Brown Three-Piece",
      price: 799,
      originalPrice: 1049,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 4.7,
      reviews: 76,
      category: "Three-Piece",
      sizes: ["38", "40", "42", "44"],
      colors: ["Brown", "Tan"],
      badge: "Vintage"
    },
    {
      id: 404,
      name: "Modern Slim Three-Piece",
      price: 949,
      originalPrice: 1249,
      image: "https://images.unsplash.com/photo-1594736797933-d0dec65ba2ac?w=300&h=400&fit=crop",
      rating: 4.9,
      reviews: 134,
      category: "Three-Piece",
      sizes: ["36", "38", "40", "42", "44", "46"],
      colors: ["Navy", "Gray", "Black"],
      badge: "Modern"
    }
  ];

  const categories = [
    "Classic Fit",
    "Slim Fit",
    "Regular Fit",
    "Vintage Style",
    "Modern Cut",
    "Executive"
  ];

  return (
    <MensPageLayout
      title="Three-Piece Suits"
      description="Complete three-piece suits with jacket, vest, and trousers"
      products={products}
      categories={categories}
      breadcrumbPath="Three-Piece Suits"
    />
  );
};

export default ThreePieceSuits;

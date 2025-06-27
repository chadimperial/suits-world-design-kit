
import MensPageLayout from "@/components/mens/MensPageLayout";

const FormalTrousers = () => {
  const products = [
    {
      id: 601,
      name: "Classic Dress Pants Navy",
      price: 149,
      originalPrice: 199,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=400&fit=crop",
      rating: 4.5,
      reviews: 156,
      category: "Dress Pants",
      sizes: ["30", "32", "34", "36", "38", "40"],
      colors: ["Navy", "Charcoal"],
      badge: "Versatile"
    },
    {
      id: 602,
      name: "Charcoal Formal Trousers",
      price: 129,
      originalPrice: 169,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=400&fit=crop",
      rating: 4.4,
      reviews: 123,
      category: "Dress Pants",
      sizes: ["30", "32", "34", "36", "38"],
      colors: ["Charcoal", "Black"],
      badge: "Classic"
    },
    {
      id: 603,
      name: "Slim Fit Dress Pants",
      price: 159,
      originalPrice: 209,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=400&fit=crop",
      rating: 4.6,
      reviews: 89,
      category: "Dress Pants",
      sizes: ["30", "32", "34", "36", "38", "40"],
      colors: ["Navy", "Gray"],
      badge: "Slim Fit"
    },
    {
      id: 604,
      name: "Pleated Formal Trousers",
      price: 179,
      originalPrice: 239,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=400&fit=crop",
      rating: 4.7,
      reviews: 67,
      category: "Dress Pants",
      sizes: ["32", "34", "36", "38", "40"],
      colors: ["Black", "Charcoal"],
      badge: "Executive"
    }
  ];

  const categories = [
    "Flat Front",
    "Pleated",
    "Slim Fit",
    "Regular Fit",
    "Dress Pants",
    "Suit Separates"
  ];

  return (
    <MensPageLayout
      title="Formal Trousers"
      description="Premium dress pants and formal trousers for any occasion"
      products={products}
      categories={categories}
      breadcrumbPath="Formal Trousers"
    />
  );
};

export default FormalTrousers;

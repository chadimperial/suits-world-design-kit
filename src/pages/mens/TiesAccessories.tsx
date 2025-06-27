
import MensPageLayout from "@/components/mens/MensPageLayout";

const TiesAccessories = () => {
  const products = [
    {
      id: 801,
      name: "Silk Navy Tie",
      price: 59,
      originalPrice: 79,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
      rating: 4.7,
      reviews: 156,
      category: "Neckties",
      sizes: ["Standard"],
      colors: ["Navy", "Burgundy", "Gray"],
      badge: "Silk"
    },
    {
      id: 802,
      name: "Bow Tie Set",
      price: 45,
      originalPrice: 59,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
      rating: 4.6,
      reviews: 89,
      category: "Bow Ties",
      sizes: ["Standard"],
      colors: ["Black", "Navy", "Burgundy"],
      badge: "Formal"
    },
    {
      id: 803,
      name: "Patterned Tie Collection",
      price: 69,
      originalPrice: 89,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
      rating: 4.8,
      reviews: 123,
      category: "Neckties",
      sizes: ["Standard"],
      colors: ["Multi", "Navy", "Gray"],
      badge: "Designer"
    },
    {
      id: 804,
      name: "Tie Clip Set",
      price: 39,
      originalPrice: 49,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300&h=400&fit=crop",
      rating: 4.5,
      reviews: 67,
      category: "Tie Clips",
      sizes: ["Standard"],
      colors: ["Silver", "Gold"],
      badge: "Accessory"
    }
  ];

  const categories = [
    "Silk Ties",
    "Bow Ties",
    "Patterned Ties",
    "Solid Colors",
    "Tie Clips",
    "Tie Sets"
  ];

  return (
    <MensPageLayout
      title="Ties & Accessories"
      description="Premium neckties, bow ties, and accessories for the finishing touch"
      products={products}
      categories={categories}
      breadcrumbPath="Ties & Accessories"
    />
  );
};

export default TiesAccessories;

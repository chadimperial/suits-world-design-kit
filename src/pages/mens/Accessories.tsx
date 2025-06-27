
import MensPageLayout from "@/components/mens/MensPageLayout";

const Accessories = () => {
  const products = [
    {
      id: 701,
      name: "Leather Belt Brown",
      price: 89,
      originalPrice: 119,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop",
      rating: 4.6,
      reviews: 89,
      category: "Belts",
      sizes: ["32", "34", "36", "38", "40"],
      colors: ["Brown", "Black"],
      badge: "Leather"
    },
    {
      id: 702,
      name: "Silk Pocket Square Set",
      price: 49,
      originalPrice: 69,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
      rating: 4.8,
      reviews: 123,
      category: "Pocket Squares",
      sizes: ["One Size"],
      colors: ["Navy", "Burgundy", "Gray"],
      badge: "Elegant"
    },
    {
      id: 703,
      name: "Gold Cufflinks Set",
      price: 129,
      originalPrice: 169,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=300&h=400&fit=crop",
      rating: 4.9,
      reviews: 67,
      category: "Cufflinks",
      sizes: ["One Size"],
      colors: ["Gold", "Silver"],
      badge: "Luxury"
    },
    {
      id: 704,
      name: "Suspenders Classic",
      price: 69,
      originalPrice: 89,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop",
      rating: 4.4,
      reviews: 45,
      category: "Suspenders",
      sizes: ["One Size"],
      colors: ["Black", "Brown"],
      badge: "Classic"
    }
  ];

  const categories = [
    "Belts",
    "Pocket Squares",
    "Cufflinks",
    "Suspenders",
    "Bow Ties",
    "Collar Pins"
  ];

  return (
    <MensPageLayout
      title="Men's Accessories"
      description="Complete your formal look with premium accessories"
      products={products}
      categories={categories}
      breadcrumbPath="Accessories"
    />
  );
};

export default Accessories;

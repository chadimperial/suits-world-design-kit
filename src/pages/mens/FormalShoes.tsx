
import MensPageLayout from "@/components/mens/MensPageLayout";

const FormalShoes = () => {
  const products = [
    {
      id: 901,
      name: "Oxford Black Leather",
      price: 249,
      originalPrice: 329,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop",
      rating: 4.8,
      reviews: 134,
      category: "Oxfords",
      sizes: ["7", "8", "9", "10", "11", "12"],
      colors: ["Black", "Brown"],
      badge: "Classic"
    },
    {
      id: 902,
      name: "Brown Brogue Shoes",
      price: 279,
      originalPrice: 369,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop",
      rating: 4.7,
      reviews: 89,
      category: "Brogues",
      sizes: ["7", "8", "9", "10", "11"],
      colors: ["Brown", "Tan"],
      badge: "Heritage"
    },
    {
      id: 903,
      name: "Loafers Business Style",
      price: 199,
      originalPrice: 259,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop",
      rating: 4.6,
      reviews: 156,
      category: "Loafers",
      sizes: ["7", "8", "9", "10", "11", "12"],
      colors: ["Black", "Brown"],
      badge: "Comfort"
    },
    {
      id: 904,
      name: "Derby Formal Shoes",
      price: 229,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop",
      rating: 4.7,
      reviews: 78,
      category: "Derby",
      sizes: ["7", "8", "9", "10", "11"],
      colors: ["Black", "Burgundy"],
      badge: "Versatile"
    }
  ];

  const categories = [
    "Oxfords",
    "Brogues", 
    "Loafers",
    "Derby Shoes",
    "Monk Straps",
    "Dress Boots"
  ];

  return (
    <MensPageLayout
      title="Formal Shoes"
      description="Premium leather shoes to complete your formal attire"
      products={products}
      categories={categories}
      breadcrumbPath="Formal Shoes"
    />
  );
};

export default FormalShoes;

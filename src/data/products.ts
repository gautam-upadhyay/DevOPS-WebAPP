export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  weight: string;
  category: string;
  discount?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export const categories: Category[] = [
  { id: "fruits", name: "Fruits & Vegetables", icon: "🥦", color: "bg-accent" },
  { id: "dairy", name: "Dairy & Bread", icon: "🥛", color: "bg-secondary/20" },
  { id: "snacks", name: "Snacks & Munchies", icon: "🍿", color: "bg-offer/10" },
  { id: "drinks", name: "Cold Drinks & Juices", icon: "🥤", color: "bg-primary/10" },
  { id: "instant", name: "Instant & Frozen", icon: "🍜", color: "bg-secondary/20" },
  { id: "bakery", name: "Bakery & Biscuits", icon: "🍪", color: "bg-offer/10" },
  { id: "tea", name: "Tea, Coffee & Health", icon: "☕", color: "bg-accent" },
  { id: "atta", name: "Atta, Rice & Dal", icon: "🌾", color: "bg-secondary/20" },
];

export const products: Product[] = [
  { id: 1, name: "Fresh Bananas", price: 45, originalPrice: 55, image: "🍌", weight: "1 kg", category: "fruits", discount: 18 },
  { id: 2, name: "Organic Tomatoes", price: 35, originalPrice: 42, image: "🍅", weight: "500 g", category: "fruits", discount: 17 },
  { id: 3, name: "Baby Spinach", price: 30, image: "🥬", weight: "200 g", category: "fruits" },
  { id: 4, name: "Amul Toned Milk", price: 29, image: "🥛", weight: "500 ml", category: "dairy" },
  { id: 5, name: "Brown Bread", price: 45, originalPrice: 50, image: "🍞", weight: "400 g", category: "dairy", discount: 10 },
  { id: 6, name: "Curd (Dahi)", price: 35, image: "🥣", weight: "400 g", category: "dairy" },
  { id: 7, name: "Lay's Classic Salted", price: 20, image: "🥔", weight: "52 g", category: "snacks" },
  { id: 8, name: "Kurkure Masala", price: 20, image: "🌶️", weight: "75 g", category: "snacks" },
  { id: 9, name: "Dark Fantasy", price: 40, originalPrice: 50, image: "🍫", weight: "100 g", category: "snacks", discount: 20 },
  { id: 10, name: "Coca-Cola", price: 40, image: "🥤", weight: "750 ml", category: "drinks" },
  { id: 11, name: "Mango Juice", price: 25, originalPrice: 30, image: "🧃", weight: "200 ml", category: "drinks", discount: 17 },
  { id: 12, name: "Maggi Noodles", price: 14, image: "🍜", weight: "70 g", category: "instant" },
  { id: 13, name: "Frozen Peas", price: 65, originalPrice: 80, image: "🫛", weight: "500 g", category: "instant", discount: 19 },
  { id: 14, name: "Marie Gold Biscuit", price: 30, image: "🍪", weight: "250 g", category: "bakery" },
  { id: 15, name: "Green Tea Bags", price: 120, originalPrice: 150, image: "🍵", weight: "25 bags", category: "tea", discount: 20 },
  { id: 16, name: "Basmati Rice", price: 180, originalPrice: 210, image: "🍚", weight: "1 kg", category: "atta", discount: 14 },
];

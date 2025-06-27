
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Search, User, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [cartItems] = useState(3); // Mock cart count

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <span>Free shipping on orders over $500 | Custom tailoring available</span>
          <div className="flex items-center gap-4">
            <Link to="/admin" className="hover:text-yellow-400 transition-colors">
              Admin Portal
            </Link>
            <span>Call: 1-800-SUITS-01</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SW</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">The Suits World</h1>
              <p className="text-xs text-gray-600">Premium Formal Wear</p>
            </div>
          </Link>

          {/* Main Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-900">Men's</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-96">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-slate-900 mb-3">Suits</h4>
                        <ul className="space-y-2 text-sm">
                          <li><NavigationMenuLink className="text-gray-600 hover:text-slate-900">Corporate Suits</NavigationMenuLink></li>
                          <li><NavigationMenuLink className="text-gray-600 hover:text-slate-900">Wedding Suits</NavigationMenuLink></li>
                          <li><NavigationMenuLink className="text-gray-600 hover:text-slate-900">Prom Suits</NavigationMenuLink></li>
                          <li><NavigationMenuLink className="text-gray-600 hover:text-slate-900">Three-Piece Suits</NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-3">Accessories</h4>
                        <ul className="space-y-2 text-sm">
                          <li><NavigationMenuLink className="text-gray-600 hover:text-slate-900">Blazers</NavigationMenuLink></li>
                          <li><NavigationMenuLink className="text-gray-600 hover:text-slate-900">Formal Trousers</NavigationMenuLink></li>
                          <li><NavigationMenuLink className="text-gray-600 hover:text-slate-900">Ties & Accessories</NavigationMenuLink></li>
                          <li><NavigationMenuLink className="text-gray-600 hover:text-slate-900">Formal Shoes</NavigationMenuLink></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-slate-900">Women's</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-96">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-slate-900 mb-3">Suits</h4>
                        <ul className="space-y-2 text-sm">
                          <li><NavigationMenuLink className="text-gray-600 hover:text-slate-900">Business Suits</NavigationMenuLink></li>
                          <li><NavigationMenuLink className="text-gray-600 hover:text-slate-900">Wedding Suits</NavigationMenuLink></li>
                          <li><NavigationMenuLink className="text-gray-600 hover:text-slate-900">Cocktail Suits</NavigationMenuLink></li>
                          <li><NavigationMenuLink className="text-gray-600 hover:text-slate-900">Skirt Suits</NavigationMenuLink></li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-3">Collection</h4>
                        <ul className="space-y-2 text-sm">
                          <li><NavigationMenuLink className="text-gray-600 hover:text-slate-900">Blazer Sets</NavigationMenuLink></li>
                          <li><NavigationMenuLink className="text-gray-600 hover:text-slate-900">Formal Dresses</NavigationMenuLink></li>
                          <li><NavigationMenuLink className="text-gray-600 hover:text-slate-900">Accessories</NavigationMenuLink></li>
                          <li><NavigationMenuLink className="text-gray-600 hover:text-slate-900">Formal Shoes</NavigationMenuLink></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/childrens">
                  <NavigationMenuLink className="text-slate-900 hover:text-slate-700 px-4 py-2">
                    Children's
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="text-slate-900 hover:text-slate-700 px-4 py-2">
                  Sale
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search Bar */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Input 
                placeholder="Search suits..." 
                className="w-64 pl-10 border-gray-300 focus:border-slate-900"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-slate-900">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-slate-900 relative">
                <ShoppingBag className="w-5 h-5" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs px-1 min-w-[20px] h-5 flex items-center justify-center rounded-full">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

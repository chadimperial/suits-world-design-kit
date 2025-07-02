
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { AdminAuthProvider } from "@/hooks/useAdminAuth";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AdminProtectedRoute } from "@/components/AdminProtectedRoute";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import MensCategory from "./pages/MensCategory";
import WomensCategory from "./pages/WomensCategory";
import ChildrensCategory from "./pages/ChildrensCategory";
import ProductDetail from "./pages/ProductDetail";
import Sale from "./pages/Sale";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminCategories from "./pages/admin/AdminCategories";
import AdminPromotions from "./pages/admin/AdminPromotions";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminCustomers from "./pages/admin/AdminCustomers";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminLogin from "./pages/admin/AdminLogin";
import CorporateSuits from "./pages/mens/CorporateSuits";
import WeddingSuits from "./pages/mens/WeddingSuits";
import PromSuits from "./pages/mens/PromSuits";
import ThreePieceSuits from "./pages/mens/ThreePieceSuits";
import Accessories from "./pages/mens/Accessories";
import Blazers from "./pages/mens/Blazers";
import FormalTrousers from "./pages/mens/FormalTrousers";
import TiesAccessories from "./pages/mens/TiesAccessories";
import FormalShoes from "./pages/mens/FormalShoes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <AdminAuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/mens" element={<MensCategory />} />
              <Route path="/mens/corporate-suits" element={<CorporateSuits />} />
              <Route path="/mens/wedding-suits" element={<WeddingSuits />} />
              <Route path="/mens/prom-suits" element={<PromSuits />} />
              <Route path="/mens/three-piece-suits" element={<ThreePieceSuits />} />
              <Route path="/mens/accessories" element={<Accessories />} />
              <Route path="/mens/blazers" element={<Blazers />} />
              <Route path="/mens/formal-trousers" element={<FormalTrousers />} />
              <Route path="/mens/ties-accessories" element={<TiesAccessories />} />
              <Route path="/mens/formal-shoes" element={<FormalShoes />} />
              <Route path="/womens" element={<WomensCategory />} />
              <Route path="/childrens" element={<ChildrensCategory />} />
              <Route path="/sale" element={<Sale />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminProtectedRoute><AdminDashboard /></AdminProtectedRoute>} />
              <Route path="/admin/products" element={<AdminProtectedRoute><AdminProducts /></AdminProtectedRoute>} />
              <Route path="/admin/categories" element={<AdminProtectedRoute><AdminCategories /></AdminProtectedRoute>} />
              <Route path="/admin/promotions" element={<AdminProtectedRoute><AdminPromotions /></AdminProtectedRoute>} />
              <Route path="/admin/orders" element={<AdminProtectedRoute><AdminOrders /></AdminProtectedRoute>} />
              <Route path="/admin/customers" element={<AdminProtectedRoute><AdminCustomers /></AdminProtectedRoute>} />
              <Route path="/admin/settings" element={<AdminProtectedRoute><AdminSettings /></AdminProtectedRoute>} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AdminAuthProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

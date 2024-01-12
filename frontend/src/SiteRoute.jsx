import { Route, Routes } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import CartPage from "./pages/CartPage";
import AuthPage from "./pages/AuthPage";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Shop from "./pages/Shop";
import BlogDetailsPage from "./pages/BlogDetailsPage";

function SiteRoute() {
  return (
    <>
      <Routes>
        <Route path="/index.html" element={<Home />} />
        <Route path="/shop.html" element={<Shop />} />
        <Route path="/blog.html" element={<BlogPage />} />
        <Route path="/contact.html" element={<Contact />} />
        <Route path="/cart.html" element={<CartPage />} />
        <Route path="/account.html" element={<AuthPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/blog/:id" element={<BlogDetailsPage />} />
      </Routes>
    </>
  );
}

export default SiteRoute;

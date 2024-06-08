import "./App.css";
// import Pages
import Home from "./pages/Home/Home";
import Allproducts from "./pages/ALL PRODUCTS/Allproducts";
import Clearance from "./pages/CLEARANCE SALE/Clearance";
import PremiumShoes from "./pages/PREMIUM SHOES/PremiumShoes";
import MensShoes from "./pages/MENS SHOES/MensShoes";
import WomensShoes from "./pages/WOMENS SHOES/WomensShoes";
import Reviews from "./pages/CUSTOMER REVIEWS/Reviews";
// import components
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
// react routes
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/all-products" element={<Allproducts />} />
        <Route exact path="/clearance-sale" element={<Clearance />} />
        <Route exact path="/premium-shoes" element={<PremiumShoes />} />
        <Route exact path="/mens-shoes" element={<MensShoes />} />
        <Route exact path="/womens-shoes" element={<WomensShoes />} />
        <Route exact path="/customer-reviews" element={<Reviews />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

'use client';
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Newsletter from "../../../components/Newsletter";
import ProductInfo from "../../../components/ProductDetail/ProductInfo";
import Reviews from "../../../components/ProductDetail/Reviews";
import SuggestedProducts from "../../../components/ProductDetail/SuggestedProducts";

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <ProductInfo />
      <Reviews />
      <SuggestedProducts />
      <Newsletter />
      <Footer />
    </>
  );
}

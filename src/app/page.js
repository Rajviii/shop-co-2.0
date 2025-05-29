'use client';
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import BrandStrip from "../components/BrandStrip";
import ProductCarousel from "../components/ProductCarousel";
import CategoryGrid from "../components/CategoryGrid";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <BrandStrip />
      <ProductCarousel title="New Arrivals" endpoint="/api/products/new" />
      <ProductCarousel title="Top Selling" endpoint="/api/products/top" />
      <CategoryGrid />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

'use client';

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Newsletter from "../../components/Newsletter";
import CategoryContent from '../../components/Category/CategoryContent'

export default function CategoryPage() {
  return (
    <>
      <Navbar />
      <CategoryContent />
      <Newsletter />
      <Footer />
    </>
  );
}

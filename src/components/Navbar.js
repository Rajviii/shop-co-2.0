"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isMenDropdownOpen, setIsMenDropdownOpen] = useState(false);

  const router = useRouter();
  const shopRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (shopRef.current && !shopRef.current.contains(event.target)) {
        setIsShopDropdownOpen(false);
        setIsMenDropdownOpen(false);
      }
    }
    if (isShopDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isShopDropdownOpen]);

  const handleTShirtsClick = (e) => {
    e.stopPropagation();
    setIsShopDropdownOpen(false);
    setIsMenDropdownOpen(false);
    router.push("/men/tshirts");
  };

  const handleCategoryClick = (e) => {
    e.stopPropagation();
    setIsShopDropdownOpen(false);
    router.push("/casual");
  };

  const [showTopBanner, setShowTopBanner] = useState(true);

  useEffect(() => {
    setShowTopBanner(true);
  }, []);

  return (
    <>
      {showTopBanner && (
        <div className="bg-black text-white flex items-center justify-center px-4 py-2 relative text-sm">
          <span>
            Sign up and get 20 % off to your first order{" "}
            <span className="underline font-semibold ml-1 cursor-not-allowed text-gray-500">
              Sign Up Now
            </span>
          </span>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-lg"
            aria-label="Close banner"
            onClick={() => setShowTopBanner(false)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <FiX />
          </button>
        </div>
      )}
      <nav className="bg-white shadow-md sticky top-0 z-50 px-6 py-4">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          <div className="flex items-center gap-6 w-full">
            <div
              className="font-bold text-2xl text-black whitespace-nowrap cursor-pointer"
              onClick={() => router.push("/")}
            >
              SHOP.CO
            </div>

            <ul className="hidden md:flex gap-6 text-sm text-black whitespace-nowrap relative">
              <li
                className="relative cursor-pointer flex items-center"
                ref={shopRef}
                onClick={() => setIsShopDropdownOpen((open) => !open)}
              >
                Shop
                <span className="ml-1">
                  <svg
                    className={`w-4 h-4 inline transition-transform ${
                      isShopDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
                {isShopDropdownOpen && (
                  <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md py-2 w-40 z-10">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMenDropdownOpen((open) => !open);
                      }}
                    >
                      Men
                      <svg
                        className={`w-3 h-3 ml-2 transition-transform ${
                          isMenDropdownOpen ? "rotate-90" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {isMenDropdownOpen && (
                        <ul className="absolute left-full top-0 ml-2 bg-white shadow-lg rounded-md py-2 w-40 z-20">
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={handleTShirtsClick}
                          >
                            T-shirts
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Women
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={handleCategoryClick}
                    >
                      Category
                    </li>
                  </ul>
                )}
              </li>
              <li>On Sale</li>
              <li>New Arrivals</li>
              <li>Brands</li>
            </ul>

            <div className="hidden md:flex relative w-full max-w-sm">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FiSearch />
              </span>
              <input
                type="text"
                placeholder="Search for products..."
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              className="md:hidden text-2xl text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          <div className="flex gap-4 text-xl text-black ml-4">
            <FiShoppingCart />
            <FiUser />
          </div>
        </div>

        {isMenuOpen && (
          <ul className="md:hidden mt-4 flex flex-col gap-2 text-black text-sm px-4">
            <li className="font-semibold">Shop</li>
            <ul className="ml-4 flex flex-col gap-1">
              <li className="cursor-pointer" onClick={handleTShirtsClick}>
                Men - T-shirts
              </li>
              <li className="cursor-pointer">Women</li>
              <li className="cursor-pointer" onClick={handleCategoryClick}>
                Category
              </li>
            </ul>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
        )}
      </nav>
    </>
  );
}

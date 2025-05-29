import Image from 'next/image';
import modelBanner from '../assets/images/model-banner.jpg';
export default function HeroBanner() {
  return (
    <div className="w-full bg-[#F3F0F1] px-6 py-12">
      <div className="grid lg:grid-cols-2 items-center max-w-screen-xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            FIND CLOTHES THAT MATCH YOUR STYLE
          </h1>
          <p className="text-gray-600">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and style.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-md">
            Shop Now
          </button>
          <div className="flex flex-col sm:flex-row gap-6 mt-6 text-lg text-black">
            <div className="flex flex-col items-start sm:items-center">
              <span className="font-bold text-black text-2xl">200+</span>
              <span className="text-sm text-gray-700">
                International Brands
              </span>
            </div>
            <div className="flex flex-col items-start sm:items-center">
              <span className="font-bold text-black text-2xl">2,000+</span>
              <span className="text-sm text-gray-700">
                High-Quality Products
              </span>
            </div>
            <div className="flex flex-col items-start sm:items-center">
              <span className="font-bold text-black text-2xl">30,000+</span>
              <span className="text-sm text-gray-700">Happy Customers</span>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <div className="relative w-full h-[700px]">
            <Image
              src={modelBanner}          
              alt="Hero Model"
              fill
              className="object-cover object-top rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Newsletter() {
  return (
    <div className="bg-black rounded-xl p-6 max-w-7xl mx-auto mt-10 text-white">
      <div className="max-w-2xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Heading */}
          <div className="md:w-1/2 w-full text-left flex justify-start">
            <h2 className="text-2xl md:text-3xl font-bold mb-0 leading-tight">
              STAY UPTO DATE ABOUT<br />
              <span className="block">OUR LATEST OFFERS</span>
            </h2>
          </div>
          {/* Right: Input and Button */}
          <div className="md:w-1/2 w-full flex flex-col items-end justify-end gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white px-5 py-3 rounded-full w-full md:w-3/4 text-black placeholder-gray-500 focus:outline-none"
            />
            <button className="bg-white text-black font-medium px-6 py-3 rounded-full w-full md:w-3/4">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

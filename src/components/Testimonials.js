export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah M.",
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      stars: 5,
    },
    {
      name: "Alex K.",
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions!",
      stars: 5,
    },
    {
      name: "James L.",
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      stars: 5,
    },
  ];

  return (
    <div className="bg-white px-6 py-12 max-w-screen-xl mx-auto text-left">
      <h2 className="text-2xl font-semibold mb-6 text-black">
        Our Happy Customers
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <div className="mt-2 text-yellow-500">
              {Array.from({ length: 5 }).map((_, idx) => (
                <span key={idx}>{idx < r.stars ? "★" : "☆"}</span>
              ))}
            </div>
            <div className="flex items-center">
              <p className="text-lg text-black font-semibold">{r.name}</p>
              <svg
                className="ml-2 w-5 h-5 text-green-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="white"
                />
                <path
                  d="M9 12l2 2 4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-sm text-black">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

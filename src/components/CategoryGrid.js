import Image from "next/image";
import casual from "../assets/images/casual.png";
import formal from "../assets/images/formal.png";
import party from "../assets/images/party.png";
import gym from "../assets/images/gym.png";

export default function CategoryGrid() {
  const categories = [
    { alt: "Casual", src: casual },
    { alt: "Formal", src: formal },
    { alt: "Party", src: party },
    { alt: "Gym", src: gym },
  ];

  return (
    <div className="bg-gray-100 rounded-xl p-6 max-w-5xl mx-auto mt-10">
  <h2 className="text-xl font-semibold text-center mb-6">BROWSE BY DRESS STYLE</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {categories.map((cat, index) => (
      <div key={index} className="flex flex-col items-center w-full">
        <div className="w-full h-60 flex items-center justify-center overflow-hidden">
          <Image
            src={cat.src}
            alt={cat.alt}
            className="object-contain w-full h-full"
          />
        </div>
        <h4 className="mt-2 text-sm font-medium text-gray-800 text-center">
          {cat.alt}
        </h4>
      </div>
    ))}
  </div>
</div>

    // <section className="flex justify-center px-6 py-16">
      
    // </section>
  );
}

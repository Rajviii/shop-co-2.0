import Image from "next/image";

import versaceLogo from "../assets/images/versace-logo.png";
import zaraLogo from "../assets/images/zara-logo.png";
import gucciLogo from "../assets/images/gucci-logo.png";
import pradaLogo from "../assets/images/prada-logo.png";
import calvinKleinLogo from "../assets/images/calvinklein-logo.png";

export default function BrandStrip() {
  const brandLogos = [
    { alt: "Versace", src: versaceLogo },
    { alt: "Zara", src: zaraLogo },
    { alt: "Gucci", src: gucciLogo },
    { alt: "Prada", src: pradaLogo },
    { alt: "Calvin Klein", src: calvinKleinLogo },
  ];

  return (
    <div className="bg-black py-6 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center items-center gap-24">
        {brandLogos.map((brand, index) => (
          <Image
            key={index}
            src={brand.src}
            alt={brand.alt}
            className="grayscale hover:grayscale-0 transition"
            width={brand.width}
            height={brand.height}
          />
        ))}
      </div>
    </div>
  );
}
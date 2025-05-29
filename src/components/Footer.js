import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 py-16 text-sm">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-xl mb-3 text-black">SHOP.CO</h3>
          <p className="text-gray-600">Your fashion destination.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-black">Company</h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-black">Help</h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">FAQs</li>
            <li className="hover:underline cursor-pointer">Returns</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-black">Follow Us</h4>
          <div className="flex gap-4 text-xl">
            <FaInstagram />
            <FaTwitter />
            <FaFacebookF />
          </div>
        </div>
      </div>
    </footer>
  );
}
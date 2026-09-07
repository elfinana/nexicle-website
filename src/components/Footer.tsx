import { Link } from "react-router-dom";
import { img } from "../lib/images";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <Link to="/" className="inline-block mb-6">
          <img src={img["logo-nexicle"]} alt="Nexicle" className="h-8 w-auto" />
        </Link>
      <div className="text-sm text-gray-700 space-y-1">
  <p>211, Aureune B/D, 84, Madeul-ro 13-gil, Dobong-gu, Seoul, Republic of Korea</p>
  <p>Tel +82 10-4174-9546</p>
  <p>Email nexicle@nexicle.kr</p>
</div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-gray-500">
          <Link to="/about" className="hover:text-black">About Us</Link>
          <Link to="/procedure-ai" className="hover:text-black">Procedure AI</Link>
          <Link to="/controlxr" className="hover:text-black">ControlXR</Link>
          <Link to="/technology" className="hover:text-black">Technology</Link>
          <Link to="/updates" className="hover:text-black">Updates</Link>
          <Link to="/contact" className="hover:text-black">Contact Us</Link>
        </div>
        <p className="mt-8 text-xs text-gray-400">© 2026 Nexicle. All rights reserved.</p>
      </div>
    </footer>
  );
}

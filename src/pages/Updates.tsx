import { Link } from "react-router-dom";
import { updates } from "../data/updates";
import { img } from "../lib/images";
import CTABanner from "../components/CTABanner";

export default function Updates() {
  return (
    <div>
      <section className="max-w-4xl mx-auto px-6 md:px-10 pt-20 pb-16 text-center">
        <p className="text-[#362FFA] font-semibold tracking-wide mb-4">UPDATES</p>
        <h1 className="text-4xl md:text-6xl font-bold text-black">News & Updates</h1>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {updates.map((u) => (
            <Link
              key={u.id}
              to={`/updates/${u.id}`}
              className="block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-[#362FFA] transition-all"
            >
              <div className="h-44 bg-gray-50 flex items-center justify-center p-6">
                <img src={img[u.image]} alt="" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-black text-lg mb-3 leading-snug">{u.title}</h3>
                <p className="text-gray-400 text-sm">{u.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner image="updates-cta-glasses" />
    </div>
  );
}

import { Link } from "react-router-dom";
import { img } from "../lib/images";

export default function CTABanner({ image = "cta-glasses-banner" }: { image?: string }) {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-20">
      <div className="relative rounded-3xl overflow-hidden bg-black text-white min-h-[420px] flex items-center">
        <img
          src={img[image] || img["cta-glasses-banner"]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="relative z-10 max-w-xl px-8 py-16 md:px-16 md:py-24">
          <p className="text-xs font-bold tracking-widest text-white/60 mb-4">REQUEST CUSTOM SOLUTION</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Built for your <span className="text-[#6f8cff]">procedures.</span>
          </h2>
          <p className="text-white/70 mb-8">
            Every organization's procedures are different. Tell us what you're working with, and we'll show you how Nexicle fits.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#362FFA] hover:bg-[#2a24d6] transition-colors rounded-full px-6 py-3 font-semibold"
          >
            Contact us →
          </Link>
        </div>
      </div>
    </section>
  );
}

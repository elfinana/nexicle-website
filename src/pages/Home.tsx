import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import CTABanner from "../components/CTABanner";
import { img } from "../lib/images";

const heroImg = img["home-hero-bg"];
const heroOverlay = img["home-hero-dashboard"];

const steps = [
  { n: 1, title: "Observe", desc: "Capture raw footage" },
  { n: 2, title: "Understand", desc: "Analyze the footage" },
  { n: 3, title: "Evaluate", desc: "Compare against protocol" },
  { n: 4, title: "Report", desc: "Report the reasoning" },
  { n: 5, title: "Improve", desc: "Track skill growth" },
];

const stats = [
  { value: "85–95%", label: "Action detection accuracy" },
  { value: "≤3s", label: "Per-step evaluation time" },
  { value: "1,000+", label: "Concurrent users supported" },
];

const useCases = [
  {
    title: "Digital healthcare",
    to: "/healthcare",
    desc: "Turn nursing skill checks and clinical procedures into measurable, evidence-backed outcomes.",
  },
  {
    title: "Defense",
    to: "/defense",
    desc: "Verify every training scenario and field procedure meets protocol, with zero room for error.",
  },
  {
    title: "Manufacturing",
    to: "/manufacturing",
    desc: "Ensure every assembly and maintenance step is executed correctly, reducing costly errors at scale.",
  },
];

export default function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#use-cases") {
      document.getElementById("use-cases")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-36 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
            AI that analyzes and evaluates real-world procedures.
          </h1>
          <img src={heroOverlay} alt="" className="mt-12 mx-auto max-w-2xl w-full opacity-90 rounded-2xl" />
        </div>
      </section>

      {/* Why Nexicle */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-20 text-center">
        <p className="text-[#362FFA] font-semibold tracking-wide mb-4">WHY NEXICLE</p>
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
          When something goes wrong, the result alone doesn't tell you why.
        </h2>
        <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto">
          Procedure AI analyzes users' first-person video to understand how they actually perform a task and identify where problems occur.
        </p>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-20">
        <p className="text-[#362FFA] font-semibold tracking-wide text-center mb-10">HOW IT WORKS</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-[#89b8ff]/30 border border-[#89b8ff] flex items-center justify-center text-2xl font-bold text-black mb-4">
                {s.n}
              </div>
              <h3 className="font-bold text-lg text-black">{s.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* By the numbers */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[#362FFA] font-semibold tracking-wide mb-4">BY THE NUMBERS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-14">Built for accuracy, not just speed</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300">
            {stats.map((s) => (
              <div key={s.label} className="py-8 md:py-0">
                <p className="text-5xl md:text-7xl font-bold text-black">{s.value}</p>
                <p className="text-gray-500 text-lg mt-3">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="use-cases" className="max-w-6xl mx-auto px-6 md:px-10 py-20 scroll-mt-24">
        <p className="text-[#362FFA] font-semibold tracking-wide text-center mb-4">USE CASES</p>
        <h2 className="text-3xl md:text-5xl font-bold text-black text-center mb-14">
          Bring clarity to every critical procedure
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((u) => (
            <Link
              key={u.title}
              to={u.to}
              className="block p-8 rounded-2xl border border-gray-200 hover:border-[#362FFA] hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-black mb-3">{u.title}</h3>
              <p className="text-gray-600 mb-4">{u.desc}</p>
              <span className="text-[#362FFA] font-medium">Explore use cases →</span>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

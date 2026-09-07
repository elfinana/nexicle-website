import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import CTABanner from "../components/CTABanner";
import { img } from "../lib/images";
import {
  Glasses,
  Brain,
  SquareCheck,
  ClipboardList,
  TrendingUp,
} from "lucide-react";
import { ShieldCheck, Zap, Users } from "lucide-react";

const heroImg = img["home-hero-bg"];
const heroOverlay = img["home-hero-dashboard"];

const steps = [
  {
    n: 1,
    title: "Observe",
    desc: "Capture raw footage",
    icon: Glasses,
    pos: "top",
  },
  {
    n: 2,
    title: "Understand",
    desc: "Analyze the footage",
    icon: Brain,
    pos: "right-top",
  },
  {
    n: 3,
    title: "Evaluate",
    desc: "Compare against protocol",
    icon: SquareCheck,
    pos: "right-bottom",
  },
  {
    n: 4,
    title: "Report",
    desc: "Report the reasoning",
    icon: ClipboardList,
    pos: "left-bottom",
  },
  {
    n: 5,
    title: "Improve",
    desc: "Track skill growth",
    icon: TrendingUp,
    pos: "left-top",
  },
];

const stats = [
  { value: "85–95%", label: "Action detection accuracy" },
  { value: "≤3s", label: "Per-step evaluation time" },
  { value: "1,000+", label: "Concurrent users supported" },
];

// 중앙 원 기준 5개 노드의 방사형 위치 (퍼센트/좌표 기반)
const nodePosition: Record<string, string> = {
  top: "top-0 left-1/2 -translate-x-1/2",
  "right-top": "top-[30%] right-0 translate-x-1/4",
  "right-bottom": "bottom-0 right-[8%]",
  "left-bottom": "bottom-0 left-[8%]",
  "left-top": "top-[30%] left-0 -translate-x-1/4",
};

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
      document
        .getElementById("use-cases")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      {/* Hero */}


{/* Hero */}
<section className="relative overflow-hidden h-[80vh] min-h-[560px] bg-black">

  <video
    src="/videos/0904-3.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Left dark gradient for text readability */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/10 to-transparent" />

  {/* Corner brackets (decorative, like the reference) */}
  <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-[#4ADE80]/60" />
  <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-[#4ADE80]/60" />

  {/* Text content */}
  <div className="relative h-full max-w-6xl  px-2 md:px-10 flex items-center">
    <div className="max-w-md">
      <p className="text-[#4ADE80] font-semibold tracking-widest text-sm mb-4">
        PROCEDURE AI
      </p>
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
        AI that understands
        <br />
        how work is performed.
      </h1>
      <p className="text-gray-300 text-base leading-relaxed">
        From first-person video
        <br />
        to procedure understanding
        <br />
        and evaluation.
      </p>
    </div>
  </div>
</section>

{/* Why Nexicle */}
<section className="max-w-6xl mx-auto px-6 md:px-10 py-20 text-center">
  <p className="text-[#362FFA] font-semibold tracking-wide mb-4">
    WHY NEXICLE
</p>
  <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
    When something goes wrong, the result alone doesn't tell you why.
  </h2>
  <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto mb-16">
    Procedure AI analyzes users' first-person video to understand how they
    actually perform a task and identify where problems occur.
  </p>

  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
    <img
      src={img["main-reason"]}
      alt="Traditional evaluation result"
      className="w-full max-w-[220px] rounded-2xl border border-gray-200 shadow-sm"
    />
    <p className="text-gray-400 font-medium text-lg whitespace-nowrap px-2">
      What actually <br/>happened?
    </p>
    <img
      src={img["main-report"]}
      alt="Manufacturing Work Report"
      className="w-full max-w-2xl rounded-2xl border border-gray-200 shadow-sm"
    />
  </div>
</section>

      {/* How it works — radial hub-and-spoke layout */}
      <section className="max-w-3xl mx-auto px-6 md:px-10 py-20">
        <p className="text-[#362FFA] font-semibold tracking-wide text-center mb-16">
          HOW IT WORKS
        </p>
        <div className="relative w-full max-w-[620px] aspect-square mx-auto">
          {/* 중앙에서 각 노드로 이어지는 점선 */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 620 620"
            fill="none"
          >
            <line
              x1="310"
              y1="310"
              x2="310"
              y2="90"
              stroke="#c9c9c9"
              strokeDasharray="4 5"
            />
            <line
              x1="310"
              y1="310"
              x2="500"
              y2="200"
              stroke="#c9c9c9"
              strokeDasharray="4 5"
            />
            <line
              x1="310"
              y1="310"
              x2="470"
              y2="450"
              stroke="#c9c9c9"
              strokeDasharray="4 5"
            />
            <line
              x1="310"
              y1="310"
              x2="150"
              y2="450"
              stroke="#c9c9c9"
              strokeDasharray="4 5"
            />
            <line
              x1="310"
              y1="310"
              x2="120"
              y2="200"
              stroke="#c9c9c9"
              strokeDasharray="4 5"
            />
          </svg>

          {/* 중앙 노드 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-[#89b8ff]/40 border border-[#89b8ff] flex items-center justify-center text-center">
            <span className="font-bold text-black text-lg leading-snug">
              Procedure
              <br />
              AI
            </span>
          </div>

          {/* 5개 스포크 노드 */}
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.n}
                className={`absolute ${nodePosition[s.pos]} w-36 text-center`}
              >
                <div className="relative mx-auto w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-3">
                  <Icon className="w-7 h-7 text-black" strokeWidth={1.75} />
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#89b8ff]/60 border border-[#89b8ff] flex items-center justify-center text-xs font-bold text-black">
                    {s.n}
                  </span>
                </div>
                <h3 className="font-bold text-black">{s.title}</h3>
                <p className="text-gray-500 text-sm mt-0.5">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* By the numbers */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[#362FFA] font-semibold tracking-wide mb-4">
            BY THE NUMBERS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Built for real-world performance.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 mt-20">
            {/* Column 1 */}
            <div className="py-8 md:py-0 md:px-6">
             
              <p className="text-[#362FFA] font-extrabold leading-none mb-3">
                <span className="text-3xl align-baseline">Up to </span>
                <span className="text-6xl">95</span>
                <span className="text-4xl">%</span>
              </p>
              <p className="font-bold text-black text-lg mb-6">
                AI detection accuracy
              </p>
              <div className="border-t border-gray-200 pt-6 flex items-start gap-4 text-left">
                <div className="w-12 h-12 rounded-full bg-[#e4e9ff] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck
                    className="w-6 h-6 text-[#362FFA]"
                    strokeWidth={1.8}
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  Validated through{" "}
                  <span className="text-[#362FFA] font-semibold">
                    internal testing
                  </span>
                  .
                  <br />
                  Continuously improving for real-world reliability.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="py-8 md:py-0 md:px-6">
           
              <p className="text-[#362FFA] font-extrabold text-6xl leading-none mb-3">
                ≤3s
              </p>
              <p className="font-bold text-black text-lg mb-6">
                From video to evaluation
              </p>
              <div className="border-t border-gray-200 pt-6 flex items-start gap-4 text-left">
                <div className="w-12 h-12 rounded-full bg-[#e4e9ff] flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-[#362FFA]" strokeWidth={1.8} />
                </div>
                <p className="text-gray-600 text-sm">
                  Fast results, without compromising on procedure understanding.
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="py-8 md:py-0 md:px-6">
          
              <p className="text-[#362FFA] font-extrabold text-6xl leading-none mb-3">
                1,000+
              </p>
              <p className="font-bold text-black text-lg mb-6">
                Concurrent users supported
              </p>
              <div className="border-t border-gray-200 pt-6 flex items-start gap-4 text-left">
                <div className="w-12 h-12 rounded-full bg-[#e4e9ff] flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#362FFA]" strokeWidth={1.8} />
                </div>
                <p className="text-gray-600 text-sm">
                  <span className="text-[#362FFA] font-semibold">
                    Multi-user evaluation
                  </span>
                  <br />
                  Stable performance, even with thousands of users at the same
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section
        id="use-cases"
        className="max-w-6xl mx-auto px-6 md:px-10 py-20 scroll-mt-24"
      >
        <p className="text-[#362FFA] font-semibold tracking-wide text-center mb-4">
          USE CASES
        </p>
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
              <h3 className="text-xl font-semibold text-black mb-3">
                {u.title}
              </h3>
              <p className="text-gray-600 mb-4">{u.desc}</p>
              <span className="text-[#362FFA] font-medium">
                Explore use cases →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

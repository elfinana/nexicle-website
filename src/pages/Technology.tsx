import CTABanner from "../components/CTABanner";
import {
  Target,
  User,
  PlaySquare,
  Brain,
  Network,
  BarChart3,
  FileText,
} from "lucide-react";

const differences = [
  {
    n: 1,
    title: "More Than One Moment",
    desc: "We analyze multiple moments in order to understand the complete procedure.",
    sub: "See the full procedure, not just a single image.",
    image: "tech-diff-1",
  },
  {
    n: 2,
    title: "More Than a Fixed Sequence",
    desc: "Understand conditions, branches, and repeated steps.",
    sub: "We understand real-world procedures with loops, branches, conditions, and time constraints.",
    image: "tech-diff-2",
  },
  {
    n: 3,
    title: "More Than One Domain",
    desc: "Adapt to different procedures across different domains.",
    sub: "From healthcare and manufacturing to defense, Procedure AI automatically adapts to the procedure and its context.",
    image: "tech-diff-3",
  },
];

const flow = [
  { n: 1, title: "First-Person Input", desc: "Video / Audio" },
  {
    n: 2,
    title: "VLM",
    desc: "Understand actions, objects, and context in natural language.",
  },
  {
    n: 3,
    title: "State Machine",
    desc: "Understand procedure logic: sequence, conditions, loops, parallel steps, time checks.",
  },
  {
    n: 4,
    title: "AI Evaluation",
    desc: "Action Recognition, Sequence Check, Timing, Compliance",
  },
  {
    n: 5,
    title: "Evidence & Report",
    desc: "Generate evidence-based evaluation and feedback with reasoning.",
  },
];

const improvements = [
  "Collect real-world execution data",
  "Refine SOP logic and evaluation rules",
  "Expand procedure scenarios",
  "Improve accuracy and adaptability",
];

const perf = [
  { value: "≤ 3 sec", label: "Per-step evaluation time" },
  {
    value: "1,000+",
    label: "Concurrent users supported within a single organization",
  },
];

import { img } from "../lib/images";

export default function Technology() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#362FFA] font-semibold tracking-wide mb-4">
              technology
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
              From First-Person Video to Procedural Intelligence
            </h1>
            <p className="text-lg text-gray-700 mb-10">
              We combine VLM and state machine technology to analyze worker
              actions, assess procedures, and document the results as evidence.
            </p>
            <div className="flex flex-wrap gap-10">
              <div className="flex items-start gap-3">
                <Target
                  className="w-5 h-5 text-[#362FFA] mt-0.5"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="font-medium text-black">Real-time Analysis</p>
                  <p className="text-gray-500 text-sm">≤ 3 sec</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User
                  className="w-5 h-5 text-[#362FFA] mt-0.5"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="font-medium text-black">Built to Scale</p>
                  <p className="text-gray-500 text-sm">
                    1,000+ concurrent users supported
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={img["tech-hero-glasses"]}
            alt=""
            className="rounded-2xl w-full"
          />
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-5xl font-bold text-black text-center mb-12">
            What Makes Procedure AI Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differences.map((d) => (
              <div
                key={d.n}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <img
                  src={img[d.image]}
                  alt=""
                  className="w-full h-40 object-cover border-b border-gray-200"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#362FFA] text-white flex items-center justify-center font-bold flex-shrink-0">
                      {d.n}
                    </div>
                    <h3 className="text-[#1b76ff] font-bold text-xl">
                      {d.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 pl-[52px]">
                    {d.desc}
                  </p>
                  {d.sub && (
                    <div className="bg-[#89b8ff]/20 border border-[#362FFA] rounded-xl p-3 text-sm text-gray-700">
                      {d.sub}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-2xl md:text-4xl font-bold text-black text-center mb-10">
          First-Person (Nexicle) vs Third-Person (CCTV)
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First-Person */}
          <div className="bg-[#dce6ff] border border-blue-100 rounded-2xl p-6">
            <p className="text-center font-bold text-lg text-black mb-4">
              First-Person (Nexicle)
            </p>
            <img
              src={img["tech-firstperson-photo"]}
              alt=""
              className="rounded-xl w-full h-40 object-cover border border-gray-200"
            />
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                {
                  title: "What the worker sees",
                  desc: "Capture exactly what matters.",
                },
                {
                  title: "Fewer blind spots",
                  desc: "No important details are missed.",
                },
                {
                  title: "Understand What Happened",
                  desc: "See the actions and steps that led to the result.",
                },
              ].map((f) => (
                <div key={f.title}>
                  <p className="font-semibold text-black text-xs mb-1">
                    {f.title}
                  </p>
                  {f.desc && (
                    <p className="text-gray-600 text-[11px] leading-snug">
                      {f.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Third-Person */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-center font-bold text-lg text-black mb-4">
              Third-Person (CCTV)
            </p>
            <img
              src={img["tech-thirdperson-photo"]}
              alt=""
              className="rounded-xl w-full h-40 object-cover border border-gray-200"
            />
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                {
                  title: "Limited viewpoint",
                  desc: "You see only what the camera sees.",
                },
                {
                  title: "Blind spots",
                  desc: "Important actions are often hidden.",
                },
                {
                  title: "Missed details",
                  desc: "Hard to know exactly what happened.",
                },
              ].map((f) => (
                <div key={f.title}>
                  <p className="font-semibold text-black text-xs mb-1">
                    {f.title}
                  </p>
                  {f.desc && (
                    <p className="text-gray-600 text-[11px] leading-snug">
                      {f.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* VS badge */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-300 items-center justify-center text-xs font-bold text-gray-600 shadow-sm">
            VS
          </div>
        </div>
      </section>

<section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
  <div className="border border-gray-200 rounded-2xl p-8 md:p-10">
    <h2 className="text-2xl md:text-4xl font-bold text-black text-center mb-10">
      How Procedure AI Works
    </h2>
    <div className="flex flex-nowrap items-start justify-center gap-2 md:gap-4">
      {flow.map((f, i) => {
        const Icon = [PlaySquare, Brain, Network, BarChart3, FileText][i];
        return (
          <div key={f.n} className="flex items-start gap-2 md:gap-4 min-w-0">
            <div className="w-20 sm:w-28 md:w-40 text-center">
              <Icon
                className="w-6 h-6 md:w-9 md:h-9 text-[#2f6fed] mx-auto mb-2 md:mb-3"
                strokeWidth={1.8}
              />
              <p className="font-bold text-black text-xs md:text-base">
                {f.n}. {f.title}
              </p>
              <p className="text-[9px] md:text-xs text-gray-500 mt-1 whitespace-pre-line">
                {f.desc}
              </p>
            </div>
            {i < flow.length - 1 && (
              <span className="text-gray-300 mt-2 md:mt-4 text-xs md:text-base flex-shrink-0">→</span>
            )}
          </div>
        );
      })}
    </div>
  </div>
</section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">
              Continuous Improvement
            </h3>
            <p className="text-gray-600 mb-4">
              The more real procedures we analyze, the smarter Procedure AI
              gets.
            </p>
            <ul className="space-y-2 text-gray-700">
              {improvements.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="text-[#362FFA]">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">
              Performance & Scalability
            </h3>
            <div className="space-y-6">
              {perf.map((p) => (
                <div key={p.label}>
                  <p className="text-3xl font-bold text-[#1b76ff]">{p.value}</p>
                  <p className="text-gray-600 text-sm">{p.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner image="tech-cta-glasses" />
    </div>
  );
}

import CTABanner from "../components/CTABanner";

const differences = [
  { n: 1, title: "More Than One Moment", desc: "We analyze multiple moments in order to understand the complete procedure.", sub: "See the full procedure, not just a single image.", image: "tech-diff-1" },
  { n: 2, title: "More Than a Fixed Sequence", desc: "Understand conditions, branches, and repeated steps.", image: "tech-diff-2" },
  { n: 3, title: "More Than Just a Result", desc: "We show what happened, when, and why the decision was made.", sub: "Provide the evidence behind every AI decision.", image: "tech-diff-3" },
];

const flow = [
  { n: 1, title: "First-Person Input", desc: "Video / Audio" },
  { n: 2, title: "VLM", desc: "Understand actions, objects, and context in natural language." },
  { n: 3, title: "State Machine", desc: "Understand procedure logic: sequence, conditions, loops, parallel steps, time checks." },
  { n: 4, title: "AI Evaluation", desc: "Action Recognition, Sequence Check, Timing, Compliance" },
  { n: 5, title: "Evidence & Report", desc: "Generate evidence-based evaluation and feedback with reasoning." },
];

const improvements = [
  "Collect real-world execution data",
  "Refine SOP logic and evaluation rules",
  "Expand procedure scenarios",
  "Improve accuracy and adaptability",
];

const perf = [
  { value: "≤ 3 sec", label: "Per-step evaluation time" },
  { value: "1,000+", label: "Concurrent users supported within a single organization" },
];

import { img } from "../lib/images";

export default function Technology() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 md:px-10 pt-20 pb-16">
        <p className="text-[#362FFA] font-semibold tracking-wide mb-4">TECHNOLOGY</p>
        <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
          From First-Person Video to Procedural Intelligence
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mb-10">
          We combine VLM and state machine technology to analyze worker actions, assess procedures, and document the results as evidence.
        </p>
        <img src={img["tech-hero-glasses"]} alt="" className="rounded-2xl w-full max-w-3xl mb-10" />
        <div className="flex flex-wrap gap-10">
          <div>
            <p className="font-medium text-black text-lg">Real-time Analysis</p>
            <p className="text-gray-500">≤ 3 sec</p>
          </div>
          <div>
            <p className="font-medium text-black text-lg">Built to Scale</p>
            <p className="text-gray-500">1,000+ concurrent users supported</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-5xl font-bold text-black text-center mb-12">
            What Makes Procedure AI Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differences.map((d) => (
              <div key={d.n} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <img src={img[d.image]} alt="" className="w-full h-40 object-cover border-b border-gray-200" />
                <div className="p-6">
                  <div className="w-10 h-10 rounded-full bg-[#362FFA] text-white flex items-center justify-center font-bold mb-4">{d.n}</div>
                  <h3 className="text-[#1b76ff] font-bold text-xl mb-2">{d.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{d.desc}</p>
                  {d.sub && <div className="bg-[#89b8ff]/20 border border-[#362FFA] rounded-xl p-3 text-sm text-gray-700">{d.sub}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-2xl md:text-4xl font-bold text-black text-center mb-12">How Procedure AI Works</h2>
        <div className="flex flex-wrap items-start justify-center gap-4">
          {flow.map((f, i) => (
            <div key={f.n} className="flex items-start gap-4">
              <div className="w-40 text-center">
                <p className="font-bold text-black">{f.n}. {f.title}</p>
                <p className="text-xs text-gray-500 mt-1">{f.desc}</p>
              </div>
              {i < flow.length - 1 && <span className="text-gray-300 mt-4">→</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-2xl md:text-4xl font-bold text-black text-center mb-10">First-Person (Nexicle) vs Third-Person (CCTV)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img src={img["tech-firstperson-photo"]} alt="" className="rounded-2xl w-full border border-gray-200" />
            <p className="text-center font-semibold text-black mt-3">First-Person (Nexicle)</p>
          </div>
          <div>
            <img src={img["tech-thirdperson-photo"]} alt="" className="rounded-2xl w-full border border-gray-200" />
            <p className="text-center font-semibold text-black mt-3">Third-Person (CCTV)</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">Continuous Improvement</h3>
            <p className="text-gray-600 mb-4">The more real procedures we analyze, the smarter Procedure AI gets.</p>
            <ul className="space-y-2 text-gray-700">
              {improvements.map((s) => (
                <li key={s} className="flex gap-2"><span className="text-[#362FFA]">✓</span>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-black mb-4">Performance & Scalability</h3>
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

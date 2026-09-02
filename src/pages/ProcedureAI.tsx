import CTABanner from "../components/CTABanner";
import { img } from "../lib/images";

const understands = [
  { title: "Action", desc: "What was done" },
  { title: "Sequence", desc: "Was the order correct" },
  { title: "Object", desc: "Was the right tool used" },
  { title: "Attention", desc: "Where they were looking" },
  { title: "Timing", desc: "Too fast or too slow" },
  { title: "Compliance", desc: "Was the SOP followed" },
];

const features = [
  { title: "Detect procedure deviations", desc: "Missed steps, wrong order, repetition" },
  { title: "Evaluate performance", desc: "Auto score, SOP comparison, proficiency" },
  { title: "Explain every decision", desc: "Why it failed, AI reasoning" },
  { title: "Generate reports", desc: "Auto report, timeline, replay" },
];

const flow = ["Raw XR data", "Action recognition", "Procedure understanding", "SOP comparison", "Risk detection", "AI evaluation", "Report"];

const outputs = [
  { title: "Timeline", desc: "See the entire procedure step by step." },
  { title: "Replay", desc: "Review the actual procedure video." },
  { title: "Reasoning", desc: "Understand why each decision was made." },
  { title: "Checklist", desc: "Check SOP compliance at a glance." },
];

const benefits = [
  "Objective assessment",
  "Reduce manual evaluation",
  "Standardized evaluation",
  "Track over time",
];

export default function ProcedureAI() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 md:px-10 pt-20 pb-16">
        <p className="text-[#362FFA] font-semibold tracking-wide mb-4">PROCEDURE AI</p>
        <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
          AI that understands how work is actually performed.
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 max-w-3xl">
          Procedure AI analyzes every action, compares it with standard procedures, and generates objective evaluation automatically.
        </p>
        <img src={img["pai-icon-timeline"]} alt="" className="mt-10 rounded-2xl border border-gray-200 w-full max-w-2xl" />
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <p className="text-[#362FFA] font-semibold tracking-wide text-center mb-10">WHAT PROCEDURE AI UNDERSTANDS</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {understands.map((u) => (
            <div key={u.title} className="p-6 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-semibold text-black mb-2">{u.title}</h3>
              <p className="text-gray-500">{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-[#362FFA] font-semibold tracking-wide text-center mb-10">KEY FEATURES</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-6 rounded-2xl border border-gray-200">
                <h3 className="text-2xl font-semibold text-black mb-2">{f.title}</h3>
                <p className="text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-10 py-16 text-center">
        <p className="text-[#362FFA] font-semibold tracking-wide mb-10">AI EVALUATION FLOW</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {flow.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <span
                className={`px-5 py-3 rounded-2xl border text-sm md:text-base font-semibold ${
                  i === 2 ? "bg-[#89b8ff]/30 border-[#362FFA] text-black" : "bg-white border-gray-300 text-black"
                }`}
              >
                {step}
              </span>
              {i < flow.length - 1 && <span className="text-gray-300">→</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-3xl md:text-5xl font-bold text-black text-center mb-4">
          Clear results, backed by evidence
        </h2>
        <p className="text-[#362FFA] font-semibold tracking-wide text-center mb-10">OUTPUT</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {outputs.map((o) => (
            <div key={o.title} className="p-6 rounded-2xl border border-gray-200 text-center">
              <h3 className="font-semibold text-black mb-2">{o.title}</h3>
              <p className="text-gray-500 text-sm">{o.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center bg-gray-50 rounded-2xl py-10">
          <p className="text-6xl font-bold text-[#362FFA] mb-2">85–95%</p>
          <p className="text-gray-500">Action recognition accuracy</p>
          <p className="text-xs text-gray-400 mt-2">* Based on Nexicle PoC / Nursing Skills – Oral Medication Model</p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-[#362FFA] font-semibold tracking-wide text-center mb-10">BENEFITS</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {benefits.map((b) => (
              <div key={b} className="font-semibold text-black text-lg">{b}</div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner image="pai-cta-glasses" />
    </div>
  );
}

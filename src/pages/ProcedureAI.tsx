import CTABanner from "../components/CTABanner";
import { img } from "../lib/images";
import { Clock, Target, Ruler } from "lucide-react";

const understands = [
  { title: "Action", desc: "What was done" },
  { title: "Sequence", desc: "Was the order correct" },
  { title: "Object", desc: "Was the right tool used" },
  { title: "Repeated Action", desc: "Distinguishes identical actions by their position in the procedure." },
  { title: "Quality Check", desc: "Verifies whether the action was performed correctly." },
  { title: "Compliance", desc: "Was the SOP followed" },
];

const features = [
  {
    title: "Detect procedure deviations",
    desc: "Missed steps, wrong order, repetition",
  },
  {
    title: "Evaluate performance",
    desc: "Auto score, SOP comparison, proficiency",
  },
  { title: "Explain every decision", desc: "Why it failed, AI reasoning" },
  { title: "Generate reports", desc: "Auto report, timeline, replay" },
];

const flow = [
  "Raw XR data",
  "Action recognition",
  "Procedure understanding",
  "SOP comparison",
  "Risk detection",
  "AI evaluation",
  "Report",
];

const outputs = [
  {
    type: "stat",
    title: "AI score",
    value: "85–95%",
    desc: "Action recognition accuracy",
    footnote: "* Based on Nexicle PoC / Nursing Skills – Oral Medication Model",
  },
  {
    type: "info",
    title: "Timeline",
    desc: "See the entire procedure step by step.",
    icon: Clock,
  },
  { type: "info", title: "Replay", desc: "Review the actual procedure video." },
  {
    type: "info",
    title: "Reasoning",
    desc: "Understand why each decision was made.",
  },
  {
    type: "info",
    title: "Checklist",
    desc: "Check SOP compliance at a glance.",
  },
];

const benefits = [
  { title: "Objective assessment", icon: Target },
  { title: "Reduce manual evaluation", icon: Target },
  { title: "Standardized evaluation", icon: Ruler },
  { title: "Track over time", icon: Target },
];

export default function ProcedureAI() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 md:px-10 pt-20 pb-16">
        <p className="text-[#362FFA] font-semibold tracking-wide mb-4">
          PROCEDURE AI
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
          AI that understands how work is actually performed.
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 max-w-3xl">
          Procedure AI analyzes every action, compares it with standard
          procedures, and generates objective evaluation automatically.
        </p>
        {/* <img src={img["pai-icon-timeline"]} alt="" className="mt-10 rounded-2xl border border-gray-200 w-full max-w-2xl" /> */}
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <p className="text-[#362FFA] font-semibold tracking-wide text-center mb-10">
          WHAT PROCEDURE AI UNDERSTANDS
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {understands.map((u) => (
            <div
              key={u.title}
              className="p-6 rounded-2xl border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-black mb-2">
                {u.title}
              </h3>
              <p className="text-gray-500">{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-[#362FFA] font-semibold tracking-wide text-center mb-10">
            KEY FEATURES
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white p-6 rounded-2xl border border-gray-200"
              >
                <h3 className="text-2xl font-semibold text-black mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-md mx-auto px-6 md:px-10 py-16 text-center">
        <p className="text-[#362FFA] font-semibold tracking-wide mb-10">
          AI EVALUATION FLOW
        </p>
<div className="flex flex-col items-center gap-2">
  {flow.map((step, i) => (
    <div key={step} className="flex flex-col items-center">
      <span className="w-64 px-5 py-3 rounded-xl border bg-white border-gray-300 text-black text-sm md:text-base font-semibold">
        {step}
      </span>
      {i < flow.length - 1 && (
        <span className="text-gray-300 my-1">↓</span>
      )}
    </div>
  ))}
</div>
      </section>

<section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
  <p className="text-[#362FFA] font-semibold tracking-wide text-center mb-4">OUTPUT</p>
  <h2 className="text-3xl md:text-5xl font-bold text-black text-center mb-12">
    Clear results, backed by evidence
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {/* AI Score */}
    {/* <div className="p-6 rounded-2xl border border-gray-200">
      <h3 className="font-semibold text-black mb-4">AI score</h3>
      <p className="mb-2">
        <span className="text-lg font-bold text-[#362FFA]">up to </span>
        <span className="text-5xl font-extrabold text-[#362FFA]">95%</span>
      </p>
      <p className="text-gray-700 text-sm font-medium mb-4">Action recognition accuracy</p>
      <p className="text-xs text-gray-400">
      Based on internal validation using first-person procedural scenarios
      </p>
    </div> */}

    {/* Timeline */}
    <div className="p-6 rounded-2xl border border-gray-200">
      <h3 className="font-semibold text-black mb-2">Timeline</h3>
      <p className="text-gray-500 text-sm mb-4">See the entire procedure step by step.</p>
      <img
        src={img["output-timeline"]}
        alt="Timeline"
        className="w-full rounded-xl border border-gray-100"
      />
    </div>

    {/* Replay */}
    <div className="p-6 rounded-2xl border border-gray-200">
      <h3 className="font-semibold text-black mb-2">Replay</h3>
      <p className="text-gray-500 text-sm mb-4">Review the actual procedure video.</p>
      <img
        src={img["output-replay"]}
        alt="Replay"
        className="w-full rounded-xl border border-gray-100"
      />
    </div>

    {/* Reasoning */}
    <div className="p-6 rounded-2xl border border-gray-200">
      <h3 className="font-semibold text-black mb-2">Reasoning</h3>
      <p className="text-gray-500 text-sm mb-4">Understand why each decision was made.</p>
      <img
        src={img["output-reasoning"]}
        alt="Reasoning"
        className="w-full rounded-xl border border-gray-100"
      />
    </div>

    {/* Checklist */}
    <div className="p-6 rounded-2xl border border-gray-200">
      <h3 className="font-semibold text-black mb-2">Checklist</h3>
      <p className="text-gray-500 text-sm mb-4">Check SOP compliance at a glance.</p>
      <img
        src={img["output-cl"]}
        alt="Checklist"
        className="w-full rounded-xl border border-gray-100"
      />
    </div>
  </div>
</section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-[#362FFA] font-semibold tracking-wide text-center mb-10">
            BENEFITS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {benefits.map((b) => (
              <div key={b.title} className="flex flex-col items-center">
                <b.icon
                  className="w-6 h-6 text-[#362FFA] mb-3"
                  strokeWidth={1.75}
                />
                <p className="font-semibold text-black">{b.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner image="pai-cta-glasses" />
    </div>
  );
}

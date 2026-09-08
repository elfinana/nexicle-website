import CTABanner from "../components/CTABanner";
import { BadgeCheck, AlertCircle, ShieldCheck } from "lucide-react";

const problems = [
  {
    title: "The Work Process Is Invisible.",
    desc: "It's hard to verify the actual order and method a worker used to complete a task.",
  },
  {
    title: "Work Variance Is Hard to Manage.",
    desc: "Even for the same task, methods vary by worker, causing inconsistent quality and results.",
  },
  {
    title: "The Root Cause Is Hard to Find.",
    desc: "Once a defect or incident occurs, it's difficult to trace back to the step where the problem began.",
  },
];

const process = [
  {
    title: "First-Person Video Analysis",
    desc: "Analyzes footage captured from the worker's point of view in real time.",
  },
  {
    title: "Automatic Procedure Step Recognition",
    desc: "Automatically recognizes each step of the defined SOP and tracks progress.",
  },
  {
    title: "AI-Based Performance Evaluation",
    desc: "AI compares actual performance against the SOP to evaluate whether each step was completed correctly.",
  },
  {
    title: "Evidence-Based Records",
    desc: "All analysis results and supporting evidence are logged as data for future training and improvement.",
  },
];

const cases = [
  {
    title: "Assembly Work",
    desc: "Checks the assembly sequence and part fastening, and evaluates the worker's procedure compliance.",
    image: "mfg-case-1",
  },
  {
    title: "Equipment Inspection",
    desc: "Analyzes the defined inspection sequence and checklist items to identify any missed checks.",
    image: "mfg-case-2",
  },
  {
    title: "Welding and Machining",
    desc: "Analyzes the welding sequence and key work actions to verify compliance with standard procedure.",
    image: "mfg-case-3",
  },
];

const gains = [
  {
    title: "Standardization",
    desc: "Brings worker-to-worker variation under a single, consistent standard procedure",
  },
  {
    title: "Error Identification",
    desc: "Precisely identifies recurring errors and procedure deviations using data",
  },
  {
    title: "Stronger Safety",
    desc: "Detects risky behavior in advance to build a safer work environment",
  },
];

import { img } from "../lib/images";

export default function Manufacturing() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#362FFA] font-semibold tracking-wide mb-4">
              USE CASE
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Manufacturing
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-black mb-4">
              Precise work builds quality and safety.
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              Procedure AI analyzes the worker's actual work process to check
              standard procedure compliance and work quality in real time.
            </p>
          </div>
          <img
            src={img["mfg-hero-photo"]}
            alt=""
            className="rounded-2xl w-full"
          />
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-10">
            Challenges on the Factory Floor
          </h2>
          <p className="text-gray-600 mb-10 max-w-4xl">
            Finding problems only after the work is done makes it hard to
            reduce recurring errors and quality issues.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div
                key={p.title}
                className="bg-[#89b8ff]/20 border border-[#362FFA] rounded-2xl p-6"
              >
                <h3 className="font-semibold text-black text-lg mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img src={img["mf-platform"]} alt="" className="rounded-2xl w-full" />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">
              Analyze in real time, evaluate with precision.
            </h2>
            <div className="space-y-6">
              {process.map((p) => (
                <div key={p.title}>
                  <h3 className="text-[#1b76ff] font-bold text-lg mb-1">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-[#362FFA] font-semibold tracking-wide text-center mb-10">
            Where It Applies
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-2xl border border-black overflow-hidden"
              >
                <img
                  src={img[c.image]}
                  alt=""
                  className="w-full h-44 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {c.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-6 md:px-10">
    <p className="text-[#362FFA] font-semibold tracking-wide mb-4">
      EVALUATION REPORT
    </p>
    <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
      Manufacturing Work Report
    </h2>
    <p className="text-gray-600 mb-8">
      Provides a comprehensive view of work performance based on objective
      data and AI analysis.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
      <div className="md:col-span-4 bg-white rounded-2xl p-8">
        <img
          src={img["mf-report-bg"]}
          alt=""
          className="w-full rounded-xl border border-gray-200"
        />
      </div>
      <div className="md:col-span-1 space-y-8">
        {[
          {
            title: "Step-by-Step Work Performance Analysis",
            desc: "Breaks down assembly and work procedures step by step to check the outcome of each process.",
          },
          {
            title: "Work Time Analysis",
            desc: "Compares the time spent on each work step against the average to analyze work efficiency.",
          },
          {
            title: "Production Output and Anomaly Events",
            desc: "Shows production output alongside any critical events that occurred during the work process.",
          },
          {
            title: "AI Analysis Results",
            desc: "Analyzes the outcome and cause at each step to evaluate the work process as a whole.",
          },
        ].map((item) => (
          <div key={item.title}>
            <h3 className="font-bold text-black text-lg mb-1">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

 

      <CTABanner image="mfg-cta-glasses" />
    </div>
  );
}
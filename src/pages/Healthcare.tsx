import CTABanner from "../components/CTABanner";
import {
  ShieldCheck,
  FileText,
  TrendingUp,
  Clock,
  User,
  ClipboardList,
  FileBarChart2,
  GraduationCap,
  Database,
  Brain,
} from "lucide-react";
import { Link } from "react-router-dom";

const challenges = [
  {
    title: "Limited Observation",
    desc: "Hard to monitor every learner through direct instructor observation alone",
  },
  {
    title: "Subjective Evaluation",
    desc: "Experience-based grading can lack consistency",
  },
  {
    title: "No Performance Record",
    desc: "Without data on the performance itself, repeated practice has limited value",
  },
  {
    title: "Patient Safety Risk",
    desc: "Procedural non-compliance and errors can lead to medical incidents",
  },
];

const values = [
  {
    title: "Stronger Patient Safety",
    desc: "Automatically detects missed steps, sequence errors, and risky actions to prevent incidents",
  },
  {
    title: "Better Learning Outcomes",
    desc: "Objective evaluation and feedback improve learning outcomes and competency",
  },
  {
    title: "Less Time on Training and Evaluation",
    desc: "Automated evaluation reports reduce the workload on instructors",
  },
  {
    title: "Standardized Procedure Management",
    desc: "SOP-based, consistent evaluation minimizes quality variance",
  },
  {
    title: "Data-Driven Improvement",
    desc: "Ongoing data analysis drives improvement in clinical procedures and training",
  },
];

const cases = [
  {
    title: "Nursing Skills Training",
    desc: "Real-time compliance checks across various clinical procedures such as equipment checks and infection control",
    image: "hc-case-nursing",
  },
  {
    title: "Clinical Field Checks",
    desc: "Real-time compliance checks for on-site tasks such as patient care and safety protocols",
    image: "hc-case-clinical",
  },
  {
    title: "Rehabilitation Monitoring",
    desc: "Standardizes rehabilitation procedures, such as therapeutic exercise and equipment use, with real-time progress monitoring",
    image: "hc-case-rehab",
  },
];

import { img } from "../lib/images";

export default function Healthcare() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#362FFA] font-semibold tracking-wide mb-4">
              USE CASE
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Digital Healthcare
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-black mb-4">
              Making medical training and fieldwork safer and more precise
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              Procedure AI analyzes medical procedure performance in real
              time and delivers accurate feedback, improving training
              outcomes and strengthening patient safety and quality of care
              in clinical settings.
            </p>
          </div>
          <img
            src={img["hc-hero-photo"]}
            alt=""
            className="rounded-2xl w-full"
          />
        </div>
      </section>

      <section className="relative bg-gray-50 py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
          <div className="max-w-xl">
            <p className="text-[#362FFA] font-semibold tracking-wide mb-4">
              THE CHALLENGE
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-6">
              Medical training faces real challenges.
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed">
              In medical training and fieldwork, it's difficult to track
              performance in real time
              <br />
              and evaluate it objectively.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {challenges.map((c, i) => {
              const Icon = [User, Clock, FileText, ShieldCheck][i];
              return (
                <div
                  key={c.title}
                  className="bg-white p-6 rounded-2xl border border-gray-200 text-center"
                >
                  <Icon
                    className="w-8 h-8 text-[#362FFA] mx-auto mb-4"
                    strokeWidth={1.8}
                  />
                  <h3 className="font-bold text-black mb-2">{c.title}</h3>
                  <p className="text-gray-500 text-sm">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

   
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <p className="text-[#362FFA] font-semibold tracking-wide text-center mb-10">
          The Value We Deliver
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {values.map((v, i) => {
            const Icon = [
              ShieldCheck,
              TrendingUp,
              Clock,
              ClipboardList,
              FileBarChart2,
            ][i];
            return (
              <div
                key={v.title}
                className="bg-white rounded-2xl border border-gray-200 p-6 text-center"
              >
                <Icon
                  className="w-8 h-8 text-[#362FFA] mx-auto mb-4"
                  strokeWidth={1.8}
                />
                <h3 className="font-bold text-black mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="bg-[#eef2ff] rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            {/* Left: text */}
            <div>
              <p className="text-[#362FFA] font-semibold tracking-wide mb-4">
                HEALTHCARE COLLABORATION
              </p>
              <h2 className="text-2xl md:text-4xl font-bold text-black mb-4 leading-tight">
                K University,
                <br />
                Nursing Education
              </h2>
              <p className="text-gray-600">
                Preparing together to bring AI-based procedure evaluation
                into real medical education settings
              </p>
            </div>

            {/* Right: highlight panel */}
            <div className="bg-white/70 rounded-2xl p-6">
              <div className="grid grid-cols-3 gap-4 text-center mb-6">
                {[
                  { label: "Real Training Environment", Icon: GraduationCap },
                  { label: "Procedure Data", Icon: Database },
                  { label: "AI Evaluation", Icon: Brain },
                ].map(({ label, Icon }) => (
                  <div key={label}>
                    <Icon
                      className="w-7 h-7 text-black mx-auto mb-2"
                      strokeWidth={1.8}
                    />
                    <p className="font-semibold text-black text-sm">{label}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-700 text-center sm:text-left">
                  See how Procedure AI can be applied to your environment
                </p>
                <Link
                  to="/contact"
                  className="bg-[#362FFA] text-white text-sm font-semibold px-5 py-2.5 rounded-full whitespace-nowrap"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Screenshot grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { key: "hc-kuniv-1", label: "First-Person Video" },
              { key: "hc-kuniv-2", label: "Procedure Step List" },
              { key: "hc-kuniv-3", label: "Behavior Analysis" },
              { key: "hc-kuniv-4", label: "Detailed Evaluation Results" },
            ].map(({ key, label }) => (
              <div key={key}>
                <p className="font-bold text-black text-sm mb-2 text-center">
                  {label}
                </p>
                <img
                  src={img[key]}
                  alt={label}
                  className="rounded-xl border border-gray-200 w-full h-56 object-cover bg-white"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
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
      </section>

<section className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-6 md:px-10">
    <p className="text-[#362FFA] font-semibold tracking-wide mb-4">
      EVALUATION REPORT
    </p>
    <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
      Digital Healthcare Report
    </h2>
    <p className="text-gray-600 mb-8">
      Quantitatively evaluates procedure compliance and risk factors based
      on real performance data.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
      <div className="md:col-span-4 bg-white rounded-2xl p-8">
        <img
          src={img["hc-report-bg"]}
          alt=""
          className="w-full rounded-xl border border-gray-200"
        />
      </div>
      <div className="md:col-span-1 space-y-8">
        {[
          {
            title: "Step-by-Step Performance Analysis",
            desc: "Breaks down the nursing procedure step by step to check whether each step was performed and how accurately.",
          },
          {
            title: "Performance Time Analysis",
            desc: "Compares total performance time against time spent per step to analyze the flow and pacing of the procedure.",
          },
          {
            title: "Safety Event Detection",
            desc: "Detects and flags safety-related behaviors and missed steps that occur during performance.",
          },
          {
            title: "Video-Based Review",
            desc: "Lets you review exactly how the nursing procedure unfolded using the actual performance footage.",
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

      <CTABanner image="hc-cta-glasses" />
    </div>
  );
}
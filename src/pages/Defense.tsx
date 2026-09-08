import CTABanner from "../components/CTABanner";

const cases = [
  {
    title: "Individual Combat Skills Training",
    desc: "Evaluates procedure compliance and accuracy for individual combat skills such as marksmanship, malfunction clearance, and equipment handling",
    image: "def-case-1",
  },
  {
    title: "Team Tactical Training",
    desc: "Evaluates procedure execution, teamwork, and communication in platoon/squad-level tactical training",
    image: "def-case-2",
  },
  {
    title: "Equipment Maintenance and Inspection",
    desc: "Evaluates compliance and quality for maintenance procedures on weapons, vehicles, and aviation equipment",
    image: "def-case-3",
  },
];

const challenges = [
  {
    title: "Procedural Non-Compliance and Errors",
    desc: "Hard to monitor every trainee through direct instructor observation alone",
  },
  {
    title: "Difficult to Track in Real Time",
    desc: "Hard to monitor and give feedback to many trainees at once, in real time.",
  },
  {
    title: "Subjective Evaluation",
    desc: "With few evaluators available, it's difficult to keep evaluation standards consistent and objective.",
  },
  {
    title: "Underused Training Data",
    desc: "Without systematic recording and analysis, training data is hard to use for improvement.",
  },
];

const process = [
  {
    title: "First-Person Video Analysis",
    desc: "Analyzes footage captured from the trainee's point of view in real time.",
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

import { img } from "../lib/images";

export default function Defense() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#362FFA] font-semibold tracking-wide mb-4">
              USE CASE
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Defense
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-black mb-4">
              Sharpening training accuracy and strengthening combat readiness.
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              Procedure AI analyzes training and mission performance in real
              time, evaluating procedure compliance and risky behavior to
              create a safer, more effective military operating environment.
            </p>
          </div>
          <img
            src={img["def-hero-photo"]}
            alt=""
            className="rounded-2xl w-full"
          />
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-[#362FFA] font-semibold tracking-wide mb-4">
            THE CHALLENGE
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-10">
            Defense training and mission execution face real challenges.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {challenges.map((c) => (
              <div
                key={c.title}
                className="bg-white p-6 rounded-2xl border border-gray-200 text-center"
              >
                <h3 className="font-bold text-black mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTE: layout changed to two-column per Figma — image left, heading+process list right.
          The actual capture image asset hasn't been exported yet due to Figma rate limits,
          so def-analysis-photo is used as a temporary placeholder. */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src={img["def-analysis-photo"]}
            alt=""
            className="rounded-2xl w-full"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">
              From training to evaluation, we analyze and record it in real
              time.
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
      Defense Training Report
    </h2>
    <p className="text-gray-600 mb-8">
      Provides a comprehensive view of training and mission performance
      based on objective data and AI analysis.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
      <div className="md:col-span-4 bg-gray-50 rounded-2xl p-8">
        <img
          src={img["def-report-photo"]}
          alt=""
          className="w-full rounded-xl border border-gray-200"
        />
      </div>
      <div className="md:col-span-1 space-y-8">
        {[
          {
            title: "Tactical Step-by-Step Performance Analysis",
            desc: "Breaks down the training procedure step by step to check the outcome of each action.",
          },
          {
            title: "Movement Path and Position Analysis",
            desc: "Analyzes the accuracy of the training route based on actual movement paths and checkpoints.",
          },
          {
            title: "Video-Based Review",
            desc: "Lets you review each situation and how it was handled using actual footage from the training.",
          },
          {
            title: "AI Analysis Results",
            desc: "Analyzes the outcome and cause at each step to evaluate the training process as a whole.",
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

      <CTABanner image="def-cta-glasses" />
    </div>
  );
}
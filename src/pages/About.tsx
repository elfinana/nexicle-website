import CTABanner from "../components/CTABanner";
import { img } from "../lib/images";
import { Brain, Cog, Bot } from "lucide-react";

const coreValues = [
  {
    n: "01",
    title: "PREPARE",
    desc: "우리는 현재에 머무르지 않고, 더 나은 내일을 준비합니다. 변화와 새로운 가능성을 살피며 필요한 기술과 방법을 만들어갑니다.",
  },
  {
    n: "02",
    title: "NEXT",
    desc: "우리는 더 나은 방법을 찾습니다. 익숙한 방식에 머무르기보다 새로운 가능성을 살피고, 사람과 현장에 필요한 변화를 만들어갑니다.",
  },
  {
    n: "03",
    title: "RISE",
    desc: "우리는 함께 성장합니다. 작은 경험과 배움을 쌓아가며 사람과 조직이 자신의 가능성을 더 잘 펼칠 수 있도록 돕습니다.",
  },
  {
    n: "04",
    title: "PINNACLE",
    desc: "우리는 더 나은 결과를 향해 나아갑니다. 기술의 완성도뿐 아니라 사람이 실제로 체감할 수 있는 변화까지 꾸준히 만들어갑니다.",
  },
  {
    n: "05",
    title: "Trust",
    desc: "저희는 기술이 만들어내는 결과를 중요하게 생각합니다. 정확하고 믿을 수 있는 기술로 사람과 조직이 안심할 수 있는 변화를 만듭니다.",
  },
];

const visions = [
  {
    title: "Beyond seeing, toward understanding",
    desc: "Not just what happened, but whether it was right.",
  },
  {
    title: "One platform, any procedure",
    desc: "Wherever a procedure matters, our platform can understand it.",
  },
  {
    title: "The standard for procedure intelligence",
    desc: "Becoming the platform the world turns to.",
  },
];

const backedBy = [
  "about-logo-korea-itp",
  "about-logo-nvidia",
  "about-logo-novatek",
  "about-logo-20oz",
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={img["about-hero"]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="max-w-xl">
            <p className="text-[#362FFA] font-semibold tracking-wide mb-4">
              ABOUT US
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              We are Nexicle
            </h1>
            <p className="text-lg text-gray-700">
              We collect data on tasks performed by people in real-world
              settings and use AI to analyze the process and procedure of that
              work. Nexicle understands how people actually work, and based on
              this understanding, enables more accurate and safer task
              performance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="relative bg-gray-50 py-20 overflow-visible">
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[#362FFA] font-semibold tracking-wide mb-4">
            WHAT DRIVES US
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Our Mission
          </h2>
          <p className="text-lg md:text-2xl text-gray-700">
            If you cannot tell whether each step was performed correctly, it is
            difficult to identify where problems occurred, and the same mistakes
            are likely to be repeated. We analyze how work is actually performed
            and evaluate it against defined procedures. This helps organizations
            identify the root cause of problems and understand what needs to be
            improved.
          </p>
        </div>
        <img
          src={img["about-vision-image"]}
          alt=""
          className="absolute right-0 bottom-0 translate-y-1/4 w-64 md:w-80 opacity-90 pointer-events-none"
        />
      </section>

      {/* <section className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-black text-center mb-4">
          Our Core Values
        </h2>
        <p className="text-gray-600 text-center text-lg mb-14">
          Prepare for what's next. Rise together. Make a difference.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((v) => (
            <div key={v.n} className="p-6 rounded-2xl border border-gray-200">
              <span className="text-4xl font-bold text-gray-300">{v.n}</span>
              <h3 className="text-2xl font-semibold text-black mt-2 mb-3">
                {v.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section> */}

<section className="bg-gray-50 py-20">
  <div className="max-w-6xl mx-auto px-6 md:px-10">
    <h2 className="text-3xl md:text-5xl font-bold text-black text-center mb-4">
      Our Vision
    </h2>
    <p className="text-gray-600 text-center text-lg mb-14">
      Becoming the standard for every industry and every procedure.
      <br />
      That is the future we envision.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {visions.map((v, i) => {
        const Icon = [Brain, Cog, Bot][i];
        return (
          <div
            key={v.title}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col"
          >
            <div className="h-40 flex items-center justify-center">
              {i === 1 ? (
                <div className="w-14 h-14 rounded-full border border-dashed border-gray-300 flex items-center justify-center">
                  <Icon
                    className="w-6 h-6 text-gray-400"
                    strokeWidth={1.5}
                  />
                </div>
              ) : (
                <Icon
                  className="w-12 h-12 text-gray-400"
                  strokeWidth={1.5}
                />
              )}
            </div>
            <div className="bg-gray-100 p-6 text-left flex-1">
              <h3 className="font-semibold text-black mb-2">{v.title}</h3>
              <p className="text-gray-500 text-sm">{v.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      <CTABanner image="about-cta-glasses" />
    </div>
  );
}

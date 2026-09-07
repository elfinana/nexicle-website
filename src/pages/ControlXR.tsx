import CTABanner from "../components/CTABanner";
import { img } from "../lib/images";

const capabilities = [
  {
    title: "Multi-user monitoring",
    desc: "Monitor multiple XR users simultaneously from a single dashboard.",
    image: "cxr-dashboard-1",
  },
  {
    title: "Effortless Device Management",
    desc: "Remotely deploy and update 1,000+ devices within a single organization.",
    image: "cxr-dashboard-2",
  },
  {
    title: "User Control & Real-Time Communication",
    desc: "Monitor user screens in real time and support screenshots, recording, remote control, and instant messaging.",
    image: "cxr-dashboard-3",
  },
  {
    title: "Session management",
    desc: "Manage recordings, screenshots, session data, and evaluation results.",
    image: "cxr-dashboard-4",
  },
];

export default function ControlXR() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
              The platform for real-time XR operations.
            </h1>
            <p className="text-lg md:text-2xl text-gray-700">
              ControlXR is the platform that operates Procedure AI in real-world
              settings. It connects XR devices with users and administrators,
              enabling real-time monitoring, communication, and session
              management.
            </p>
          </div>
          <img
            src={img["cxr-diagram"]}
            alt=""
            className="rounded-2xl border border-gray-200 w-full"
          />
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-16 text-center">
        <p className="text-[#362FFA] font-semibold tracking-wide mb-4">
          HOW ControlXR WORKS
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-10">
          One platform. Every device. Every user.
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6 text-xl font-medium text-black">
          <span>XR devices</span>
          <span className="text-gray-300">→</span>
          <span>ControlXR</span>
          <span className="text-gray-300">→</span>
          <span>Admin dashboard</span>
        </div>
        <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
          Connect XR devices, stream real-time data, and manage multiple users
          from one centralized platform.
        </p>
      </section>

   <section className="bg-gray-50 py-16">

<div className="max-w-5xl mx-auto px-6 md:px-10">
  <p className="text-[#362FFA] font-semibold tracking-wide text-center mb-16">
    CORE CAPABILITIES
  </p>
  <div className="space-y-20">
    {capabilities.map((c) => (
      <div key={c.title} className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
          {c.title}
        </h3>
        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
          {c.desc}
        </p>
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <img src={img[c.image]} alt="" className="w-full h-auto" />
        </div>
      </div>
    ))}
  </div>
</div>
</section>

      <CTABanner image="cxr-cta-glasses" />
    </div>
  );
}

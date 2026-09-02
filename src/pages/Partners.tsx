const strategicPartners = [
  { org: "Kyung Hee University, College of Nursing", tag: "MOU", desc: "Joint research on AI-powered nursing assessment and educational procedure intelligence." },
  { org: "Ajou University Hospital", tag: "PoC", desc: "Infection control procedure analysis linked with clinical big data." },
  { org: "Scotland Interface", tag: "Research", desc: "Global research collaboration for procedure intelligence." },
  { org: "KAIST", tag: "Research", desc: "Research collaboration exploring metaverse, medical AI, and biomedical engineering." },
  { org: "KISTI", tag: "Research", desc: "Joint research on XR, AI, and VLM-based performance evaluation." },
  { org: "Century Co., Ltd.", tag: "Industry", desc: "Procedure analysis for wiring, assembly, and inspection in manufacturing." },
];

const recognitions = [
  { title: "NVIDIA Inception", desc: "Selected as an AI startup member supporting advanced GPU infrastructure and the global AI ecosystem." },
  { title: "TIPS", desc: "Selected for Korea's leading technology startup acceleration program." },
  { title: "Seed investment", desc: "Completed seed funding round." },
  { title: "Technology value assessment", desc: "Technology valued at KRW 1.9 billion." },
  { title: "Android XR", desc: "Selected for Google's Android XR Catalyst Program, with early access to Xreal's Aura device ahead of launch." },
];

import { img } from "../lib/images";
import CTABanner from "../components/CTABanner";

export default function Partners() {
  return (
    <div>
      <section className="relative max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-16 text-center overflow-hidden rounded-3xl">
        <img src={img["partners-hero-bg"]} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10" />
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">
          Trusted by leading institutions driving AI, XR and Procedure Intelligence
        </h1>
        <p className="text-lg text-gray-600">
          Building the future of human procedure intelligence with leading organizations, research institutions and innovation partners.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <p className="text-[#362FFA] font-semibold tracking-wide text-center mb-2">STRATEGIC PARTNERS</p>
        <h2 className="text-2xl md:text-4xl font-bold text-black text-center mb-12">
          Academic, clinical and industry collaboration
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strategicPartners.map((p) => (
            <div key={p.org} className="bg-white p-6 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold text-black mb-2">{p.org}</h3>
              <p className="text-gray-600 text-sm mb-3">{p.desc}</p>
              <span className="text-[#362FFA] font-bold text-sm">{p.tag}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-[#362FFA] font-semibold tracking-wide text-center mb-2">TECHNOLOGY AND INNOVATION RECOGNITION</p>
          <h2 className="text-2xl md:text-4xl font-bold text-black text-center mb-12">
            Government, investment, and industry recognition.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recognitions.map((r) => (
              <div key={r.title} className="bg-white p-6 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-semibold text-black mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

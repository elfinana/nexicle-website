import CTABanner from "../components/CTABanner";

const cases = [
  { title: "개인 전투 기술 훈련", desc: "사격, 고장 처리, 장비 취급 등 개인 전투 기술의 절차 전수 여부와 정확도 평가", image: "def-case-1" },
  { title: "팀 전술 훈련", desc: "소대/분대 단위 전술 훈련의 절차 수행, 협업, 의사소통 평가", image: "def-case-2" },
  { title: "장비 정비 및 점검", desc: "무기, 차량, 항공 장비 정비 절차의 준수 여부 및 품질 평가", image: "def-case-3" },
];

const challenges = [
  { title: "실시간 파악 어려움", desc: "다수의 훈련자를 실시간으로 모니터링 하고 피드백하기 어렵습니다." },
  { title: "평가의 주관성", desc: "평가자가 제한되어 있어 평가 기준의 일관성과 객관성 확보가 어렵습니다." },
  { title: "절차 미준수 및 오차", desc: "교수의 직접 관찰만으로 모든 학습자를 확인하기 어려움" },
  { title: "훈련 데이터 활용 부족", desc: "훈련 데이터가 체계적으로 기록/분석되지 않아 개선에 활용하기 어렵습니다." },
];

const process = [
  { title: "1인칭 영상 기반 분석", desc: "훈련자의 시선에서 촬영된 영상을 실시간으로 분석합니다." },
  { title: "절차 단계 자동 인식", desc: "정의된 SOP의 단계별 절차를 자동으로 인식하고 진행 상황을 추적합니다." },
  { title: "AI 기반 수행 평가", desc: "실제 수행과 SOP를 비교하여 단계별 수행 여부를 AI가 평가합니다." },
  { title: "근거 기반 기록", desc: "모든 분석 결과와 판단 근거를 데이터로 기록하여 추후 교육과 개선에 활용할 수 있습니다." },
];

import { img } from "../lib/images";

export default function Defense() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 md:px-10 pt-20 pb-16">
        <p className="text-[#362FFA] font-semibold tracking-wide mb-4">USE CASE</p>
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">Defense</h1>
        <p className="text-xl md:text-2xl font-semibold text-black mb-4">훈련의 정확도를 높이고, 전투 준비 태세를 강화합니다.</p>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
          Procedure AI가 훈련 및 임무 수행과정을 실시간으로 분석하고 절차 준수 여부와 위험 행위를 평가하며, 더 안전하고 효과적인 군 운영 환경을 만듭니다.
        </p>
        <img src={img["def-hero-photo"]} alt="" className="mt-10 rounded-2xl w-full max-w-3xl" />
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-[#362FFA] font-semibold tracking-wide mb-4">THE CHALLENGE</p>
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-10">국방 훈련 및 임무 수행, 이런 어려움이 있습니다.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {challenges.map((c) => (
              <div key={c.title} className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
                <h3 className="font-bold text-black mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-10">훈련부터 평가까지, 실시간으로 분석하고 기록합니다.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {process.map((p) => (
            <div key={p.title}>
              <h3 className="text-[#1b76ff] font-bold text-xl mb-2">{p.title}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-[#362FFA] font-semibold tracking-wide text-center mb-10">적용 가능한 사례</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl border border-black overflow-hidden">
                <img src={img[c.image]} alt="" className="w-full h-44 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">{c.title}</h3>
                  <p className="text-gray-600 text-sm">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-10 py-16">
        <p className="text-[#362FFA] font-semibold tracking-wide mb-4">EVALUATION REPORT</p>
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">평가 리포트 예시</h2>
        <p className="text-gray-600 mb-8">객관적인 데이터와 AI 분석을 기반으로 훈련/임무 수행 결과를 종합적으로 제공합니다.</p>
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
            <div><p className="text-3xl font-semibold text-black">92.4%</p><p className="text-gray-500 text-sm mt-1">종합 점수</p></div>
            <div><p className="text-3xl font-semibold text-black">03:24</p><p className="text-gray-500 text-sm mt-1">전체 수행 시간</p></div>
            <div><p className="text-3xl font-semibold text-black">95.6%</p><p className="text-gray-500 text-sm mt-1">절차 준수율</p></div>
            <div><p className="text-3xl font-semibold text-black">1건</p><p className="text-gray-500 text-sm mt-1">위험 행동 감지</p></div>
          </div>
          <img src={img["def-report-photo"]} alt="" className="w-full rounded-xl border border-gray-200" />
        </div>
      </section>

      <CTABanner image="def-cta-glasses" />
    </div>
  );
}

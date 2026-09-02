import CTABanner from "../components/CTABanner";

const challenges = [
  { title: "제한적인 관찰", desc: "교수의 직접 관찰만으로 모든 학습자를 확인하기 어려움" },
  { title: "평가의 주관성", desc: "경험에 기반한 평가로 일관성이 떨어질 수 있음" },
  { title: "기록의 부재", desc: "수행 과정에 대한 데이터가 남지 않아, 반복 학습에 한계" },
  { title: "환자 안전 리스크", desc: "절차 미준수 및 오류로 인한 의료 사고 가능성 존재" },
];

const values = [
  { title: "환자 안전 강화", desc: "절차 누락, 순서 오류, 위험 행동을 자동 감지하여 사고 예방" },
  { title: "교육 효과 향상", desc: "객관적 평가와 피드백으로 학습 효과 및 역량 향상" },
  { title: "교육/평가 시간 절감", desc: "자동 평가 리포트로 강사의 업무 부담 감소" },
  { title: "표준화된 절차 관리", desc: "SOP 기반 일관된 평가로 품질 편차 최소화" },
  { title: "데이터 기반 개선", desc: "지속적 데이터 분석으로 의료 절차 및 교육 개선" },
];

const cases = [
  { title: "간호 술기 교육", desc: "장비 점검, 감염 관리, 환자 이송 등 다양한 임상 절차의 준수 여부 실시간 확인", image: "hc-case-nursing" },
  { title: "임상 현장 체크", desc: "환자 처치, 감염 관리, 안전 수칙 등 현장 업무의 절차 준수 여부를 실시간 확인", image: "hc-case-clinical" },
  { title: "재활 치료 모니터링", desc: "운동 치료, 운동 기구 착용 등 재활 절차를 표준화하고 진행 상태 실시간 모니터링", image: "hc-case-rehab" },
];

import { img } from "../lib/images";

export default function Healthcare() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 md:px-10 pt-20 pb-16">
        <p className="text-[#362FFA] font-semibold tracking-wide mb-4">USE CASE</p>
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">Digital Healthcare</h1>
        <p className="text-xl md:text-2xl font-semibold text-black mb-4">의료 교육과 현장 업무를 더 안전하고 정확하게</p>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
          Procedure AI가 의료 절차 수행을 실시간으로 분석하고 정확한 피드백을 제공하여, 교육 효과를 높이고 의료 현장의 환자 안전과 품질을 향상시킵니다.
        </p>
        <img src={img["hc-hero-photo"]} alt="" className="mt-10 rounded-2xl w-full max-w-3xl" />
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <p className="text-[#362FFA] font-semibold tracking-wide mb-4">THE CHALLENGE</p>
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-10">의료 교육, 이런 어려움이 있습니다.</h2>
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

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <p className="text-[#362FFA] font-semibold tracking-wide text-center mb-10">이런 가치를 제공합니다</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {values.map((v) => (
            <div key={v.title} className="text-center">
              <h3 className="font-bold text-black mb-2">{v.title}</h3>
              <p className="text-gray-500 text-sm">{v.desc}</p>
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
        <p className="text-gray-600 mb-8">실제 수행 데이터를 기반으로 절차 준수 여부와 위험 요소를 정량적으로 평가합니다.</p>
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
            <div><p className="text-3xl font-semibold text-black">92.4%</p><p className="text-gray-500 text-sm mt-1">종합 점수</p></div>
            <div><p className="text-3xl font-semibold text-black">03:24</p><p className="text-gray-500 text-sm mt-1">전체 수행 시간</p></div>
            <div><p className="text-3xl font-semibold text-black">95.6%</p><p className="text-gray-500 text-sm mt-1">단계 수행률</p></div>
            <div><p className="text-3xl font-semibold text-black">1건</p><p className="text-gray-500 text-sm mt-1">위험 행동 감지</p></div>
          </div>
          <img src={img["hc-report-bg"]} alt="" className="w-full rounded-xl border border-gray-200" />
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[#362FFA] font-semibold tracking-wide mb-4">HEALTHCARE COLLABORATION</p>
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">K University, Nursing Education</h2>
          <p className="text-gray-600 mb-10">AI 기반 절차 평가의 실제 의료 교육 현장 적용을 함께 준비하고 있습니다</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["hc-kuniv-1", "hc-kuniv-2", "hc-kuniv-3", "hc-kuniv-4"].map((k) => (
              <img key={k} src={img[k]} alt="" className="rounded-xl w-full h-48 object-cover" />
            ))}
          </div>
        </div>
      </section>

      <CTABanner image="hc-cta-glasses" />
    </div>
  );
}

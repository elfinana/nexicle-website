import CTABanner from "../components/CTABanner";
import { BadgeCheck, AlertCircle, ShieldCheck } from "lucide-react";

const problems = [
  {
    title: "작업 과정이 보이지 않습니다.",
    desc: "작업자가 실제로 어떤 순서와 방식으로 작업했는지 확인하기 어렵습니다.",
  },
  {
    title: "작업 편차를 관리하기 어렵습니다.",
    desc: "같은 작업이라도 작업자마다 방식이 달라져 품질과 작업 결과에 편차가 발생합니다.",
  },
  {
    title: "문제가 발생한 원인을 찾기 어렵습니다.",
    desc: "불량이나 사고가 발생한 후에는 어느 단계에서 문제가 시작됐는지 추적하기 어렵습니다.",
  },
];

const process = [
  {
    title: "1인칭 영상 기반 분석",
    desc: "작업자의 시선에서 촬영된 영상을 실시간으로 분석합니다.",
  },
  {
    title: "절차 단계 자동 인식",
    desc: "정의된 SOP의 단계별 절차를 자동으로 인식하고 진행 상황을 추적합니다.",
  },
  {
    title: "AI 기반 수행 평가",
    desc: "실제 수행과 SOP를 비교하여 단계별 수행 여부를 AI가 평가합니다.",
  },
  {
    title: "근거 기반 기록",
    desc: "모든 분석 결과와 판단 근거를 데이터로 기록하여 추후 교육과 개선에 활용할 수 있습니다.",
  },
];

const cases = [
  {
    title: "조립 작업",
    desc: "조립 순서와 부품 체결 여부를 확인하고 작업자의 절차 준수 상태를 평가합니다.",
    image: "mfg-case-1",
  },
  {
    title: "설비 점검",
    desc: "정해진 점검 순서와 확인 항목을 분석하여 누락된 점검을 식별합니다.",
    image: "mfg-case-2",
  },
  {
    title: "용접, 가공 작업",
    desc: "용접 순서와 주요 작업 행동을 분석하여 표준 작업 수행 여부를 확인합니다.",
    image: "mfg-case-3",
  },
];

const gains = [
  {
    title: "표준화",
    desc: "작업자마다 다른 방식의 작업을 표준 절차로 일관되게 관리",
  },
  {
    title: "오류 식별",
    desc: "반복되는 오류와 절차 이탈을 데이터로 정확히 식별",
  },
  {
    title: "안전 강화",
    desc: "위험 행동을 사전에 감지하여 안전한 작업 환경 구축",
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
              정확한 작업이 품질과 안전을 만듭니다.
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              Procedure AI는 작업자의 실제 작업 과정을 분석하여 표준 절차 준수
              여부와 작업 품질을 실시간으로 확인합니다.
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
            현장의 문제
          </h2>
          <p className="text-gray-600 mb-10 max-w-3xl">
            작업이 끝난 후에야 문제를 발견하는 방식으로는 반복되는 작업 오류와
            품질 문제를 줄이기 어렵습니다.
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
              실시간으로 분석하고, 정확하게 평가합니다.
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
            적용 가능한 사례
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
      객관적인 데이터와 AI 분석을 기반으로 훈련/임무 수행 결과를
      종합적으로 제공합니다.
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
            title: "작업 단계별 수행 분석",
            desc: "조립 및 작업 절차를 단계별로 분석하여 각 공정의 수행 결과를 확인합니다.",
          },
          {
            title: "작업 시간 분석",
            desc: "각 작업 단계의 수행 시간과 평균 시간을 비교하여 작업 효율을 분석합니다.",
          },
          {
            title: "생산 결과 및 이상 이벤트",
            desc: "생산 수량과 작업 과정에서 발생한 Critical Event를 함께 확인합니다.",
          },
          {
            title: "AI 분석 결과",
            desc: "각 단계에서 발생한 결과와 원인을 분석하여 훈련 과정 전반을 평가합니다.",
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

      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="bg-[#dce6ff] border border-blue-200 rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-8">
              데이터가 만드는 지속 가능한 개선
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {gains.map((g, i) => {
                const Icon = [BadgeCheck, AlertCircle, ShieldCheck][i];
                return (
                  <div key={g.title} className="flex items-start gap-3">
                    <Icon
                      className="w-6 h-6 text-[#362FFA] flex-shrink-0 mt-0.5"
                      strokeWidth={1.8}
                    />
                    <div>
                      <h3 className="font-bold text-black mb-1">{g.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {g.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CTABanner image="mfg-cta-glasses" />
    </div>
  );
}

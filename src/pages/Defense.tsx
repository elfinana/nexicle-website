import CTABanner from "../components/CTABanner";

const cases = [
  {
    title: "개인 전투 기술 훈련",
    desc: "사격, 고장 처리, 장비 취급 등 개인 전투 기술의 절차 전수 여부와 정확도 평가",
    image: "def-case-1",
  },
  {
    title: "팀 전술 훈련",
    desc: "소대/분대 단위 전술 훈련의 절차 수행, 협업, 의사소통 평가",
    image: "def-case-2",
  },
  {
    title: "장비 정비 및 점검",
    desc: "무기, 차량, 항공 장비 정비 절차의 준수 여부 및 품질 평가",
    image: "def-case-3",
  },
];

const challenges = [
  {
    title: "절차 미준수 및 오차",
    desc: "교수의 직접 관찰만으로 모든 학습자를 확인하기 어려움",
  },
  {
    title: "실시간 파악 어려움",
    desc: "다수의 훈련자를 실시간으로 모니터링 하고 피드백하기 어렵습니다.",
  },
  {
    title: "평가의 주관성",
    desc: "평가자가 제한되어 있어 평가 기준의 일관성과 객관성 확보가 어렵습니다.",
  },
  {
    title: "훈련 데이터 활용 부족",
    desc: "훈련 데이터가 체계적으로 기록/분석되지 않아 개선에 활용하기 어렵습니다.",
  },
];

const process = [
  {
    title: "1인칭 영상 기반 분석",
    desc: "훈련자의 시선에서 촬영된 영상을 실시간으로 분석합니다.",
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
              훈련의 정확도를 높이고, 전투 준비 태세를 강화합니다.
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              Procedure AI가 훈련 및 임무 수행과정을 실시간으로 분석하고 절차
              준수 여부와 위험 행위를 평가하며, 더 안전하고 효과적인 군 운영
              환경을 만듭니다.
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
            국방 훈련 및 임무 수행, 이런 어려움이 있습니다.
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
          실제 캡처 이미지 자산이 Figma 레이트리밋으로 아직 export되지 않아 def-analysis-photo로 임시 대체함. */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src={img["def-analysis-photo"]}
            alt=""
            className="rounded-2xl w-full"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">
              훈련부터 평가까지, 실시간으로 분석하고 기록합니다.
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
      Defense Training Report
    </h2>
    <p className="text-gray-600 mb-8">
      객관적인 데이터와 AI 분석을 기반으로 훈련/임무 수행 결과를 종합적으로
      제공합니다.
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
            title: "전술 단계별 수행 분석",
            desc: "훈련 절차를 단계별로 분석하여 각 행동의 수행 결과를 확인합니다.",
          },
          {
            title: "이동 경로 및 위치 분석",
            desc: "실제 이동 경로와 체크포인트를 기반으로 훈련 경로의 정확도를 분석합니다.",
          },
          {
            title: "영상 기반 검토",
            desc: "훈련 당시의 실제 영상을 통해 각 상황과 수행 과정을 다시 확인합니다.",
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

      <CTABanner image="def-cta-glasses" />
    </div>
  );
}

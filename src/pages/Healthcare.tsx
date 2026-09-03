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
    title: "제한적인 관찰",
    desc: "교수의 직접 관찰만으로 모든 학습자를 확인하기 어려움",
  },
  {
    title: "평가의 주관성",
    desc: "경험에 기반한 평가로 일관성이 떨어질 수 있음",
  },
  {
    title: "기록의 부재",
    desc: "수행 과정에 대한 데이터가 남지 않아, 반복 학습에 한계",
  },
  {
    title: "환자 안전 리스크",
    desc: "절차 미준수 및 오류로 인한 의료 사고 가능성 존재",
  },
];

const values = [
  {
    title: "환자 안전 강화",
    desc: "절차 누락, 순서 오류, 위험 행동을 자동 감지하여 사고 예방",
  },
  {
    title: "교육 효과 향상",
    desc: "객관적 평가와 피드백으로 학습 효과 및 역량 향상",
  },
  {
    title: "교육/평가 시간 절감",
    desc: "자동 평가 리포트로 강사의 업무 부담 감소",
  },
  {
    title: "표준화된 절차 관리",
    desc: "SOP 기반 일관된 평가로 품질 편차 최소화",
  },
  {
    title: "데이터 기반 개선",
    desc: "지속적 데이터 분석으로 의료 절차 및 교육 개선",
  },
];

const cases = [
  {
    title: "간호 술기 교육",
    desc: "장비 점검, 감염 관리, 환자 이송 등 다양한 임상 절차의 준수 여부 실시간 확인",
    image: "hc-case-nursing",
  },
  {
    title: "임상 현장 체크",
    desc: "환자 처치, 감염 관리, 안전 수칙 등 현장 업무의 절차 준수 여부를 실시간 확인",
    image: "hc-case-clinical",
  },
  {
    title: "재활 치료 모니터링",
    desc: "운동 치료, 운동 기구 착용 등 재활 절차를 표준화하고 진행 상태 실시간 모니터링",
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
              의료 교육과 현장 업무를 더 안전하고 정확하게
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              Procedure AI가 의료 절차 수행을 실시간으로 분석하고 정확한
              피드백을 제공하여, 교육 효과를 높이고 의료 현장의 환자 안전과
              품질을 향상시킵니다.
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
              의료 교육, 이런 어려움이 있습니다.
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed">
              의료 교육과 현장 업무에서는 수행 과정을 실시간으로 파악하고
              <br />
              객관적으로 평가하기 어렵습니다.
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

        <img
          src={img["hc-challenge"]}
          alt=""
          className="hidden md:block absolute top-0 right-0 h-full w-[420px] object-cover"
        />
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <p className="text-[#362FFA] font-semibold tracking-wide text-center mb-10">
          이런 가치를 제공합니다
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
                AI 기반 절차 평가의 실제 의료 교육 현장 적용을 함께 준비하고
                있습니다
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
              { key: "hc-kuniv-1", label: "1인칭 영상" },
              { key: "hc-kuniv-2", label: "절차 단계 리스트" },
              { key: "hc-kuniv-3", label: "행동 분석" },
              { key: "hc-kuniv-4", label: "세부 평가 결과" },
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
            실제 수행 데이터를 기반으로 절차 준수 여부와 위험 요소를 정량적으로
            평가합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="bg-white rounded-2xl p-8">
              <img
                src={img["hc-report-bg"]}
                alt=""
                className="w-full rounded-xl border border-gray-200"
              />
            </div>
            <div className="space-y-8">
              {[
                {
                  title: "단계별 수행 분석",
                  desc: "간호 절차를 단계별로 분석하여 각 단계의 수행 여부와 정확도를 확인합니다.",
                },
                {
                  title: "수행 시간 분석",
                  desc: "전체 수행 시간과 단계별 소요 시간을 비교하여 절차 수행의 흐름과 시간을 분석합니다.",
                },
                {
                  title: "안전 이벤트 감지",
                  desc: "수행 과정에서 발생한 안전 관련 행동과 누락된 절차를 감지하고 확인합니다.",
                },
                {
                  title: "영상 기반 검토",
                  desc: "실제 수행 영상을 기반으로 간호 절차가 진행된 과정을 다시 확인할 수 있습니다.",
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

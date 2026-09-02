# Nexicle Website (React + Tailwind + React Router)

Figma 디자인("Nexicle Homepage")을 기반으로 구현한 전체 웹사이트입니다.

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:5173 접속. 아래 모든 URL이 바로 접속 가능합니다.

| URL | 페이지 |
|---|---|
| `/` | MAIN |
| `/about` | About Us |
| `/procedure-ai` | Procedure AI |
| `/controlxr` | ControlXR |
| `/healthcare` | Digital Healthcare |
| `/defense` | Defense |
| `/manufacturing` | Manufacturing |
| `/technology` | Technology |
| `/partners` | Partners & Recognition |
| `/updates` | Updates 목록 |
| `/updates/1` ~ `/updates/5` | Updates 상세 5개 |
| `/contact` | Contact Us |

## 프로덕션 빌드

```bash
npm run build
npm run preview
```

## 구조

- `src/components/Header.tsx`, `Footer.tsx`, `Layout.tsx` — 모든 페이지 공통 (Header 드롭다운: Product/Use Cases/Company, 모바일 햄버거 메뉴 포함)
- `src/pages/*.tsx` — 각 페이지
- `src/data/updates.ts` — Updates 5건 데이터 (여기서 관리)
- `src/App.tsx` — React Router 라우팅 정의

## ⚠️ 중요: 이미지 에셋 만료 안내

페이지에 쓰인 이미지/아이콘 URL은 Figma의 임시 CDN(`figma.com/api/mcp/asset/...`) 링크로, **발급 후 약 7일 뒤 만료**됩니다.
실제 배포 전에는 아래 작업이 필요합니다:
1. 각 이미지를 다운로드하여 `src/assets/` 등에 저장
2. import 방식으로 교체 (`import heroImg from './assets/hero.png'`)
3. 또는 자체 CDN/스토리지에 업로드 후 URL 교체

## 반응형

Tailwind의 responsive 유틸리티(`sm:`, `md:`, `lg:`)를 사용해 데스크톱/태블릿/모바일에서 레이아웃이 자연스럽게 흐르도록 구현했습니다.
(참고: Figma 원본은 고정 픽셀 좌표 기반 데스크톱 목업이라, 완전히 동일한 절대 좌표 그대로는 반응형이 될 수 없어 flex/grid 기반으로 재구성했습니다. 텍스트·섹션 구성·수치는 Figma 원본과 동일합니다.)

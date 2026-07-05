<div align="center">

# LawDigest FE

**AI 기반 법안 요약 서비스 모두의입법의 Next.js 프론트엔드**

![Next.js 15](https://img.shields.io/badge/Next.js_15-000000?style=flat-square&logo=nextdotjs&logoColor=white) ![React 19](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) ![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white)

[English](./README.en.md)

</div>

---

## 소개

LawDigest FE는 모두의입법 서비스의 프론트엔드 저장소입니다. 법안 피드, 법안 상세, 의원·정당 프로필, 타임라인, 검색, 팔로우, 알림, 사용자 영역을 Next.js App Router 기반으로 구성합니다.

API 호출은 Axios와 Zod 검증, TanStack Query 캐싱, Zustand UI 상태, token reissue/logout 이벤트 흐름을 조합해 처리합니다. UI는 shadcn/Radix 기반 컴포넌트와 Tailwind CSS를 사용합니다.

## 주요 기능

| 기능 | 설명 |
|---|---|
| 법안 피드와 상세 | 법안 목록, 상세 정보, 메타 정보, 진행 상태를 사용자가 읽기 쉬운 화면으로 제공합니다. |
| 의원·정당 도메인 | 의원, 정당, 팔로우, 프로필 중심 화면을 feature module 단위로 관리합니다. |
| 검색·타임라인 | 검색 modal, timeline page, pagination, 상태별 목록을 제공합니다. |
| 검증된 API 레이어 | Zod schema와 React Query hook으로 API 응답을 다룹니다. |
| 디자인 시스템 | Radix/shadcn 기반 atoms, molecules, organisms와 Storybook/test 자산을 포함합니다. |

## 저장소 구조

| 경로 | 역할 |
|---|---|
| app/{module}/ | Feature modules such as bill, congressman, party, auth, user, notification, following, timeline, search, home |
| app/common/ | Shared components, hooks, lib, types, utils, validation |
| tests/ | Vitest component, hook, template, and service tests |
| docs/superpowers/ | Refactor/design specs and implementation plans |
| server.js | Local custom server entry when using npm run local |

## 빠른 시작

### 의존성 설치

```bash
npm install
```

### 개발 서버

```bash
npm run dev
```

### 프로덕션 빌드

```bash
npm run build
```

### 로컬 서버

```bash
npm run local
```

### Storybook

```bash
npm run storybook
```

## 검증

| 항목 | 명령 |
|---|---|
| Type check | `npm run typecheck` |
| Unit tests | `npm test` |
| Coverage | `npm run coverage` |
| E2E tests | `npm run test:e2e` |

## 운영 메모

- Node.js 20.19 이상이 필요합니다.
- `NEXT_PUBLIC_URL`, `NEXT_PUBLIC_IMAGE_URL`, `NEXT_PUBLIC_HOSTNAME`, `NEXT_PUBLIC_DOMAIN` 환경 변수를 확인합니다.
- 브라우저 요청은 `/v1/*` rewrite를 통해 백엔드로 전달됩니다.

## 문서 작성 근거

이 README는 저장소 안의 다음 파일과 문서를 기준으로 작성했습니다.

- `CLAUDE.md`
- `package.json`
- `app/page.tsx`
- `docs/superpowers/`

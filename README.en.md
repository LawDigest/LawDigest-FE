<div align="center">

# LawDigest FE

**The Next.js frontend for LawDigest, an AI-powered Korean legislative bill summary service**

![Next.js 15](https://img.shields.io/badge/Next.js_15-000000?style=flat-square&logo=nextdotjs&logoColor=white) ![React 19](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) ![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white)

[한국어](./README.md)

</div>

---

## Overview

LawDigest FE is the frontend repository for the LawDigest service. It renders bill feeds, bill details, congressperson and party profiles, timelines, search, following, notifications, and user-facing flows using the Next.js App Router.

The app combines Axios, Zod validation, TanStack Query, Zustand, token reissue/logout events, shadcn/Radix components, and Tailwind CSS.

## Highlights

| Area | Description |
|---|---|
| Bill feed and detail pages | Presents legislative bills, metadata, and progress state in a feed-oriented UI. |
| Congressperson and party domains | Organizes congressperson, party, following, and profile features as modules. |
| Search and timeline | Provides search modal flows, timeline pages, pagination, and status-specific lists. |
| Validated API layer | Uses Zod schemas and React Query hooks to keep API contracts explicit. |
| Design system | Includes Radix/shadcn-based atoms, molecules, organisms, tests, and Storybook assets. |

## Repository Structure

| Path | Role |
|---|---|
| app/{module}/ | Feature modules such as bill, congressman, party, auth, user, notification, following, timeline, search, home |
| app/common/ | Shared components, hooks, lib, types, utils, validation |
| tests/ | Vitest component, hook, template, and service tests |
| docs/superpowers/ | Refactor/design specs and implementation plans |
| server.js | Local custom server entry when using npm run local |

## Quick Start

### Install dependencies

```bash
npm install
```

### Run dev server

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Run local server

```bash
npm run local
```

### Storybook

```bash
npm run storybook
```

## Verification

| Check | Command |
|---|---|
| Type check | `npm run typecheck` |
| Unit tests | `npm test` |
| Coverage | `npm run coverage` |
| E2E tests | `npm run test:e2e` |

## Operational Notes

- Requires Node.js 20.19 or later.
- Check `NEXT_PUBLIC_URL`, `NEXT_PUBLIC_IMAGE_URL`, `NEXT_PUBLIC_HOSTNAME`, and `NEXT_PUBLIC_DOMAIN`.
- Browser requests use `/v1/*` rewrites to reach the backend.

## Documentation Sources

This README was written from the following files and documents in this repository.

- `CLAUDE.md`
- `package.json`
- `app/page.tsx`
- `docs/superpowers/`

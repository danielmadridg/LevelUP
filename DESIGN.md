# LevelUp - Real Life RPG Gamification

## 1. Tech Stack Justification

### Frontend

- **React 19 & Next.js 15 (App Router)**: The industry standard for production-grade React apps. Provides server-side rendering (SSR) for SEO and initial load performance, plus React Server Components (RSC) for efficient data fetching.
- **TypeScript**: Essential for maintainability and type safety, especially given the strict data modeling requirements (User, Stats, Logs).
- **CSS Modules (Vanilla CSS)**: chosen for maximum flexibility and performance without the abstraction cost of runtime CSS-in-JS. Allows strict control over the "RPG minimalista" aesthetic.
- **Framer Motion**: The best-in-class library for React animations, necessary for the "smooth animations" and "feedback visual" requirements.
- **Zustand**: Lightweight global state management. Used for tracking optimistic UI updates (e.g., instant XP gain animation) before the server confirms.

### Backend & Database

- **Serverless Architecture (Next.js API Routes / Server Actions)**: Simplifies deployment and scaling.
- **Firebase Firestore**: NoSQL Document Database. Replaced Postgres for simpler scaling and full Firebase ecosystem integration.
- **Authentication**: Auth.js with **Firestore Adapter**.
- **Zod**: Schema validation for both frontend forms and backend API inputs.

## 2. Architecture Overview

- **Mobile-First Design**: UI components built for touch targets and vertical scrolling first.
- **Authentication**: Auth.js (NextAuth) handling secure sessions (Google/Email).
- **Data Flow**:
  - **Fetch**: Server Components fetch data directly via Prisma.
  - **Mutate**: Server Actions handle data mutations (add log, update stats).
  - **State**: Client context (Zustand) mirrors critical user stats for instant feedback/animations.

## 3. Data Model (Firestore Document Structure)

```json
// Collection: users
{
  "uid": "user_abc123",
  "name": "Player 1",
  "email": "player@example.com",
  "image": "https://...",
  "level": 1,
  "xp": 0,
  "createdAt": "Timestamp"
}

// Sub-collection: users/{uid}/logs
{
  "id": "log_xyz",
  "activity": "Gym",
  "xpGained": 100,
  "createdAt": "Timestamp"
}

// Sub-collection: users/{uid}/stats
{
  "id": "stat_strength",
  "level": 5,
  "xp": 250
}
```

## 4. Design System (Aesthetics)

- **Theme**: Dark Mode by default.
- **Colors**:
  - **Background**: Deep Slate (`#0f172a`)
  - **Surface**: Dark Blue/Gray (`#1e293b`)
  - **Primary/Accent**: Neon Gold (`#fbbf24`) for XP/Level up, Cyan (`#22d3ee`) for Mana/Knowledge.
- **Typography**: Inter or similar sans-serif. Clean, readable.
- **Feedback**:
  - XP Bar fills up with animation.
  - Floating text numbers on action (+10 XP).

## 5. Folder Structure

```
/src
  /app
    /api           (API routes if needed, mostly Server Actions)
    /(auth)        (Login/Register pages)
    /(dashboard)   (Protected routes: Dashboard, Stats, Profile)
    layout.tsx     (Root layout with Providers)
    page.tsx       (Landing page)
    globals.css    (Global variables & reset)
  /components
    /ui            (Button, Card, Progress - Reusable basic UI)
    /rpg           (LevelBadge, XpBar, StatCard - Domain specific)
    /layout        (Sidebar, Header)
  /lib
    prisma.ts      (DB client)
    utils.ts       (Helpers)
    constants.ts   (Game configuration, e.g., XP tables)
  /hooks           (useLevelUp, custom hooks)
  /store           (Zustand store for UI state)
  /types           (TS interfaces)
```

## 6. Future Improvements

- **Social**: Friends leaderboards.
- **Mobile App**: Wrap current PWA in Capacitor or rebuild in React Native.
- **Gamification**: Daily streaks, Quests system.

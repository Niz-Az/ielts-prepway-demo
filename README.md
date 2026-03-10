# IELTS Prepway Demo (Public Portfolio Version)

## Project Title
IELTS Prepway Demo

## Project Overview
This repository is a portfolio-safe demo of an IELTS preparation platform. It focuses on front-end quiz architecture using React and local sample data.

## Tech Stack
- React
- JavaScript (ES Modules)
- Vite
- Local JSON mock data

## Features Demonstrated
- Dynamic question rendering from JSON
- Component-based UI composition
- Quiz state management with React hooks
- Navigation between questions (previous/next)
- Basic result summary view with answer review

## Architecture Overview
```text
/ieltsprepway-demo
  /frontend
    /src
      /components
        QuestionCard.jsx
        QuizProgress.jsx
      /pages
        CompletionSummary.jsx
      /styles
        global.css
      App.jsx
      main.jsx
    package.json
    vite.config.js
  /sample-data
    reading-questions.json
  /screenshots
    README.md
  README.md
  package.json
```

The `frontend` app consumes mock JSON data from `sample-data` to simulate quiz behavior without connecting to production backend services.

## Screenshots
Add screenshots to `/screenshots` and reference them here.

Example:
- `![Quiz flow](./screenshots/quiz-flow.png)`

## Demo Disclaimer
This repository contains a simplified demo of a larger IELTS preparation platform.  
Certain production components (authentication, full question bank, and backend services) are omitted.

## Run Locally
From the repository root:

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in terminal output.

## Conversion Instructions (from private production repo to this demo)
1. Remove backend integration files (Supabase clients, server secrets, migrations, auth tokens).
2. Replace production question sources with synthetic JSON in `sample-data/`.
3. Keep only representative UI components that show architecture and state logic.
4. Remove payment flows, admin-only tools, and internal analytics.
5. Rewrite README for portfolio audience (high-level architecture + clear disclaimer).
6. Run a secret scan (e.g., `rg -n "SUPABASE|SECRET|API_KEY|TOKEN" .`) before publishing.

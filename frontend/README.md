# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page,
and the counters in the header follow automatically. A button in the
header switches between light and dark mode. Changes are lost on refresh,
which is what stage 6 and stage 10 fix.

## Status
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [ ] Stage 6: loading data from a mock API

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S5-R1 | list kept in useState, in App | App.jsx#L.. | read |
| S5-R2 | toggling changes state and card look | App.jsx#L..-L..<br>MaintenanceCard.jsx#L.. | click a checkbox |
| S5-R3 | delete removes the item | App.jsx#L..-L..<br>MaintenanceCard.jsx#L.. | click Delete |
| S5-R4 | header counter derived, not in state | App.jsx#L.. | toggle, watch header |
| S5-R5 | immutable updates (no push, splice, assignment) | App.jsx#L..-L.. | read |
| S5-R6 | light/dark toggle: state + data-theme on html | App.jsx#L..-L..<br>App.css#L..-L.. | click the button, both system themes |
| S5-R7 | no console warnings; README + AI log | README.md, ai-log/etapa-05.md | F12, Console |
| S5-R8 | commit "Stage 5" pushed | link to the commit | commit history |
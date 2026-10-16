# AI Log – Stage 3: Vite and React

## Project
AutoCare – Car Maintenance Manager

## Objective
Migrate the AutoCare project from HTML, CSS and JavaScript to a React application created with Vite.

## AI tools used
ChatGPT was used to explain the project requirements, guide the implementation step by step, adapt the existing code to React and troubleshoot errors.

## Development process
1. Moved the files from previous stages into the mockup folder.
2. Created the React project using Vite and selected ESLint.
3. Encountered an ECONNRESET network error during installation. The issue was resolved by running npm install again.
4. Started the development server using npm run dev.
5. Removed the default Vite demonstration files.
6. Copied the original AutoCare styles into App.css and changed the main container to a single-column layout.
7. Updated main.jsx to import App.css.
8. Moved the original maintenanceTasks array into App.jsx.
9. Implemented a dynamic counter for active maintenance tasks using filter().
10. Converted the AutoCare header into JSX.
11. Displayed the maintenance tasks temporarily as JSON.
12. Updated index.html with the AutoCare title and Romanian language setting.
13. Verified the application in the browser.
14. Successfully executed npm run build.

## Results
The application displays three maintenance tasks, of which two are active. The counter is dynamically calculated from the data.

The existing AutoCare design was preserved, and the application runs locally using Vite and React.

## Verification
The application was tested in the browser, and npm run build completed successfully without errors.

## AI contribution and personal work
ChatGPT provided guidance, explanations and code suggestions. I applied the changes in Visual Studio Code, checked the results, solved the installation issue and verified the working application.
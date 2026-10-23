# AutoCare – Car Maintenance Manager

## Project description

AutoCare is a web application concept for organizing car maintenance and repair tasks. It helps users keep track of maintenance operations, their completion status, priority, and category.

The application is intended for car owners who want to organize routine maintenance and safety checks in one place.

This is the initial static mockup created for Stage 1 using HTML and CSS. The topic is proposed for approval by the project coordinator.

## Data model

Each maintenance task will contain the following information:

| Field    | Description                                               | Example    |
| -------- | --------------------------------------------------------- | ---------- |
| Name     | Name of the maintenance task                              | Oil change |
| Status   | Boolean value indicating whether the task is completed    | false      |
| Priority | One value selected from a fixed list: Urgent, Normal, Low | Urgent     |
| Category | Type of maintenance operation                             | Engine     |
| Owner    | User to whom the task belongs                             | Demo User  |

Additional descriptive information may be displayed in the interface.

## Sample data

| Name             | Status        | Priority | Category | Owner     |
| ---------------- | ------------- | -------- | -------- | --------- |
| Oil change       | Not completed | Urgent   | Engine   | Demo User |
| Brake inspection | Completed     | Normal   | Brakes   | Demo User |
| Tire replacement | Not completed | Low      | Tires    | Demo User |

The sample tasks are static examples used to demonstrate the interface.

## Technologies

* HTML5 for the page structure and semantic elements.
* CSS3 for layout, colors, responsive design, and dark theme.
* JavaScript for data management, validation, and testing in the browser console.


## How to run

1. Download or open the project folder.
2. Open `index.html` in a web browser.
3. Resize the browser window to check the responsive layout.
4. Use the `Tab` key to check keyboard focus visibility.
5. Press `F12` and open the `Console` tab to view the JavaScript test results.
6. Refresh the browser page to run the JavaScript tests again.


No server or additional software is required for this static mockup.

## AI usage

ChatGPT was used to help choose and describe the AutoCare project topic, plan the HTML structure, and create and refine the CSS layout. The generated code was added to the project and should be reviewed and understood by the student.

## Stage 1 verification

The GitHub permalinks and verification instructions for the Stage 1 requirements will be added after the code has been published to the repository.


## Stage 2: Data Logic (JavaScript)

AutoCare uses JavaScript to manage car maintenance tasks.

The `autocare.js` file contains:
- An array with three maintenance tasks.
- Functions to list and search tasks.
- A function to count active tasks.
- A function to add new tasks with validation.
- A function to change task completion status.
- A function to delete tasks.

The functions do not modify the original array.

All JavaScript tests are displayed in the browser console (F12).

## Status


- [x] Stage 1: HTML and CSS mockup
- [x] Stage 2: JavaScript data logic
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [ ] Stage 5: local state and events



## Stage 2 verification

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S2-R1 | JavaScript linked to HTML |[View code](https://github.com/VladTeodor20/AutoCare/blob/944f34c80fcaafe15be77bf9f4c60b2b1d8a2a4e/index.html#L108)| Open page and press F12 |
| S2-R2 | Three tasks with required fields |[View code](https://github.com/VladTeodor20/AutoCare/blob/944f34c80fcaafe15be77bf9f4c60b2b1d8a2a4e/autocare.js#L2-L30)| Read autocare.js |
| S2-R3 | List, count, search, add, toggle, delete | [View code](https://github.com/VladTeodor20/AutoCare/blob/944f34c80fcaafe15be77bf9f4c60b2b1d8a2a4e/autocare.js#L35-L134) | Check console output |
| S2-R4 | Validation of name and priority | [View code](https://github.com/VladTeodor20/AutoCare/blob/944f34c80fcaafe15be77bf9f4c60b2b1d8a2a4e/autocare.js#L78-L93) | Check validation messages |
| S2-R5 | Original array remains unchanged | [View code](https://github.com/VladTeodor20/AutoCare/blob/944f34c80fcaafe15be77bf9f4c60b2b1d8a2a4e/autocare.js#L153-L155) | Check console output |
| S2-R6 | README and AI log | [README](https://github.com/VladTeodor20/AutoCare/blob/944f34c80fcaafe15be77bf9f4c60b2b1d8a2a4e/README.md) / [AI log](https://github.com/VladTeodor20/AutoCare/blob/944f34c80fcaafe15be77bf9f4c60b2b1d8a2a4e/ai-log/etapa-02.md) | Read files |
| S2-R7 | Stage 2 commit published | [View commit](https://github.com/VladTeodor20/AutoCare/commit/bdf2df8) | Check Git history |
## Stage 3: Vite and React project

The AutoCare application now lives in `frontend/` and is built with Vite and React.

The maintenance tasks from Stage 2 have been moved into the main React component (`App.jsx`).

The application displays 3 maintenance tasks, including 2 active tasks. The counter is calculated dynamically from the data.

The original styles from Stage 1 have been reused in `App.css`.


At the end of Stage 3, the maintenance tasks were temporarily displayed as JSON. In Stage 4, this was replaced with reusable React components that render the tasks as cards.
 React components for displaying individual tasks will be implemented in Stage 4.

## How to run

1. Open the project in Visual Studio Code.
2. Open a terminal.
3. Run the following commands:

    cd frontend
    npm install
    npm run dev

4. Open http://localhost:5173/ in your browser.

## Build verification

The application was successfully built using:

    npm run build

The build completed without errors.


## Stage 4: components

The maintenance tasks are now rendered from data using two reusable React components:

- `MaintenanceList` receives the entire maintenanceTasks array through props and generates a card for each task using map() and a unique key.
- `MaintenanceCard` receives a single task through props and displays its name, category, description, owner, priority, and completion status.

The application displays an explicit message when the list is empty.

Completed tasks have a different visual appearance from active tasks.

The components are stored in `frontend/src/components/`.

The application was tested with an empty list and by changing the completion status of a task. No React warnings were observed in the browser console.

## Stage 4 verification

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S4-R1 | Two React components | [Components folder](https://github.com/VladTeodor20/AutoCare/tree/835a4ab7e54eacff647040b2c24c003cf208e38f/frontend/src/components) | Open folder |
| S4-R2 | Card receives data through props | [MaintenanceCard.jsx](https://github.com/VladTeodor20/AutoCare/blob/835a4ab7e54eacff647040b2c24c003cf208e38f/frontend/src/components/MaintenanceCard.jsx#L7-L29) | Read component |
| S4-R3 | map and unique key, no React warnings | [MaintenanceList.jsx](https://github.com/VladTeodor20/AutoCare/blob/835a4ab7e54eacff647040b2c24c003cf208e38f/frontend/src/components/MaintenanceList.jsx#L8-L17) | Inspect code and browser console |
| S4-R4 | Empty list message | [MaintenanceList.jsx](https://github.com/VladTeodor20/AutoCare/blob/835a4ab7e54eacff647040b2c24c003cf208e38f/frontend/src/components/MaintenanceList.jsx#L3-L6) | Set array to empty |
| S4-R5 | Completion status changes card appearance | [MaintenanceCard.jsx](https://github.com/VladTeodor20/AutoCare/blob/835a4ab7e54eacff647040b2c24c003cf208e38f/frontend/src/components/MaintenanceCard.jsx#L7-L29) | Change completed flag |
| S4-R6 | README and AI log completed | [README](https://github.com/VladTeodor20/AutoCare/blob/835a4ab7e54eacff647040b2c24c003cf208e38f/README.md#L136-L149) / [AI Log](https://github.com/VladTeodor20/AutoCare/blob/835a4ab7e54eacff647040b2c24c003cf208e38f/ai-log/etapa-04.md) | Read files |
| S4-R7 | Stage 4 commit pushed to GitHub | [View commit](https://github.com/VladTeodor20/AutoCare/commit/835a4ab7e54eacff647040b2c24c003cf208e38f) | Check commit history |

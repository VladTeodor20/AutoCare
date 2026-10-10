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
- [ ] Stage 3: React and Vite


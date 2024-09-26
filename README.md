# Assignment 3 - Table Checklist

## Author: Mayukh Sinha  
**NUID**: 002316499

## Overview

This project is a dynamic checklist that allows users to manage student award records in a tabular format. The application includes the ability to add, edit, and delete student records, dynamically show/hide additional information for each student, and enable/disable functionalities based on user input.

## Structure

The project consists of:
- `index.html`: The structure of the table and buttons.
- `style.css`: Styling for the table and its elements.
- `script.js`: The JavaScript functions that handle table interactivity.
  
## Features

- **Dynamic Table Rows**: New rows can be added dynamically, and they inherit the existing CSS styling.
- **Row Management**: Users can edit or delete rows, and these actions will trigger confirmation messages.
- **Checkbox Functionality**: Checking a row changes its background color and enables the submit button.
- **Row Expansion/Collapse**: Clicking on the green arrow expands or collapses the additional details for each student.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Functions](#functions-in-scriptjs)
4. [Styling](#functions-in-stylecss)
5. [Assignment Requirements](#assignment-requirements)
6. [Submission](#submission)

## Installation

1. Download the project from the repository or canvas.
2. Open `index.html` in your browser.

## Usage

1. Upon loading, your name and NUID are displayed at the top of the page.
2. The table is collapsed by default. Clicking the arrows will expand/collapse the rows.
3. You can add new student rows using the "Add New Student" button.
4. Select any row to see the submit button enabled and interact with edit/delete options.
5. De-select all rows to disable the submit button.

## Functions in `script.js`

### 1. `window.onload`
- Initializes the page by displaying the name, NUID, and setting up the initial controls.

### 2. `displayStudentDetails()`
- Displays your full name and NUID at the top of the page.

### 3. `initializeControls()`
- Disables the submit button and hides the row expansion sections.
- Sets up event listeners for checkboxes, buttons, and row actions.

### 4. `addNewRow()`
- Adds a new row to the table with dummy data for a new student and advisor.
- Attaches listeners for the newly added checkbox and green arrow.
- Displays a confirmation popup for successful row addition.

### 5. `handleCheckboxFunctionality()`
- Dynamically manages the visibility of delete/edit buttons and submit button functionality based on selected checkboxes.

### 6. `handleCheckboxChange()`
- Changes the row background color to yellow when selected.
- Enables the delete/edit functionality for the selected row.
- Disables these functionalities if unchecked.

### 7. `deleteRow()`
- Deletes the selected row and its associated dropdown details.
- Displays a confirmation popup for successful deletion.

### 8. `openEditPopup()`
- Opens a non-editable popup showing the details of the selected student.
- Allows for an "Update" button to display a confirmation message.

### 9. `toggleDropdownRow()`
- Expands or collapses the detailed row for each student when the arrow is clicked.

### 10. `closePopup()`
- Closes the edit popup when the cancel button is clicked.

## Functions in `style.css`

### 1. Table Styling
- **Table Borders**: Solid borders for a clear structure.
- **Row Styling**: Alternating row colors for readability and highlighted color changes for selected rows.
  
### 2. Button Styling
- **Submit Button**: Initially grayed out, changes to orange when enabled.
- **Add New Student Button**: Styled to stand out for ease of adding rows.

### 3. Popup Styling
- **Edit Popup**: Centers the popup with a shadow effect to highlight it over the table.
  
### 4. Hidden Elements
- **Dropdown Sections**: These sections are hidden by default and expand when the arrow is clicked.

## Assignment Requirements

1. The page loads with your full name and NUID displayed.
2. The table is collapsed initially.
3. The "Submit" button is disabled and grayed out until a checkbox is selected.
4. New student rows can be added dynamically with auto-generated student names and details.
5. The row's background color changes when selected, and the delete/edit buttons appear.
6. Popups are used to confirm row additions, deletions, and edits.
7. Arrows toggle the expansion/collapse of student details.


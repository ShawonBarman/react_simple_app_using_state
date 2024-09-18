# React State Toggle Apps

This repository contains four simple React applications built to demonstrate the use of state for various toggle functionalities. Each app is designed to handle a specific UI/UX scenario where toggling visibility, such as password fields, modals, menus, and FAQ sections, is required.

## Applications Overview

1. **Password Hide/Show React App**
   - A simple application that toggles the visibility of a password input field between hidden (password) and visible (text).

2. **Menu Hide/Show React App**
   - This app implements a responsive menu with an open/close functionality. The menu can be toggled using a button.

3. **React Modal Show/Hide App**
   - A dual modal system that allows the user to open and close two separate modals for "Enquiry" and "Quote" with forms inside them.

4. **FAQ Section React App**
   - A Frequently Asked Questions (FAQ) section that allows users to expand or collapse answers by clicking on the questions.

## Installation

To run these apps locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ShawonBarman/react_some_simple_apps_using_state.git
   cd <repo-name>
   ```

2. **Install dependencies:**

   Make sure you have Node.js and npm installed.

   ```bash
   npm install
   ```

3. **Run the applications:**

   ```bash
   npm start
   ```

## File Structure

Each app is stored under the src/ folder. Here’s a quick overview of the folder structure:

  ```bash
    src/
    ├── password_hide_show_react_app/  # Password field toggle app
    ├── menu_hide_show_react_app/      # Menu toggle app
    ├── react_modal_show_hide_app/     # Modal toggle app
    └── FAQ_section_react_app/         # FAQ section app
  ```

Each folder contains an App.jsx file, which is the main component file for that specific app.

## Built With

- React.js
- JavaScript (ES6+)
- CSS for basic styling

## How to Use Each App

1. **Password Hide/Show App:**
   - Enter a password in the field and click “Show” to view the password in plain text. Click “Hide” to hide the password.
   
2. **Menu Hide/Show App:**
   - Click on the hamburger menu icon (☰) to display the menu and the cross icon (×) to hide the menu.
   
3. **Modal Show/Hide App:**
   - Click “Enquiry Now” to open the enquiry modal and “Get a Quote” to open the quote modal. Click the close (×) button to hide the modals.
   
4. **FAQ Section App:**
   - Click on any question in the FAQ list to toggle the visibility of the answer.
  
## Purpose

This repository is part of a learning project to practice state management in React. The primary focus is on understanding how to manage and toggle states in React using the useState hook.

## License

This project is open-source and available under the MIT License.

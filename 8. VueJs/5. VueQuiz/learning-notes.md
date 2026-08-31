# VueQuiz Learning Notes

## Project Overview

This project is a Vue.js quiz application built with Vite. It demonstrates basic Vue app structure, component composition, routing, and data-driven UI rendering.

## Main Concepts Covered

### 1. Vue App Setup

- Created with Vite and Vue 3
- Main entry point in `src/main.js`
- Root component rendered through `App.vue`

### 2. Components

The app uses reusable UI components such as:

- `QuizHeader.vue`
- `QuizCard.vue`
- `QuizContent.vue`
- `QuizResult.vue`

These components help separate the interface into smaller, maintainable pieces.

### 3. Data Handling

- Quiz data is stored in `src/data/quizes.json`
- The app loads and uses that data to render questions and answers
- JSON structure helps keep the quiz content separate from logic

### 4. Routing

- Route configuration is located in `src/router/index.js`
- Views are stored in `src/views/`
- This allows navigation between the home page and the quiz page

### 5. User Interaction

- Users can answer quiz questions
- The app tracks progress and calculates final results
- Conditional rendering is used to show the result screen after completion

## Suggested Learning Goals

- Understand how Vue components communicate with props and events
- Practice using JSON data in Vue apps
- Learn how to organize pages and routes in a small app
- Explore conditional rendering and state updates

## Important Files

- `src/App.vue` — main app container
- `src/main.js` — bootstrap file
- `src/router/index.js` — route setup
- `src/views/Home.vue` — home page
- `src/views/Quiz.vue` — quiz page
- `src/data/quizes.json` — quiz dataset

## Notes

This project is useful for practicing:

- component-based architecture
- file-based app organization
- reactive UI updates
- basic routing

## Next Steps

- Add more quiz categories
- Improve styling and layout
- Add score history or timer features
- Add validation and better state handling

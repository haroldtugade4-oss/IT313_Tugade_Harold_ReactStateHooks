# Lab 5: React State & Hooks - Practice Tracker

## Problem Overview
This application is a React Native study-tracking utility designed for laboratory sessions. It tracks the number of practice problems solved by a student and logs elapsed time using a custom stopwatch hook.

## Features & Implementation
- **PracticeTracker Component**: Handles counter state (`solved`) and conditionally displays "Great job!" when the count reaches 5.
- **Stopwatch Component**: Displays formatted elapsed time (`MM:SS`) and indicates whether the timer is "Running..." or "Paused".
- **useStopwatch Custom Hook**: Encapsulates `useState` and `useEffect` with `setInterval` to manage time progression and includes a cleanup function (`clearInterval`).
- **Lifting State Up**: State is managed in the parent component (`App.js`), allowing sync between `PracticeTracker` and `Stopwatch`.

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone <YOUR_REPOSITORY_URL>
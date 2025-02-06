# Mobiscroll Monthly Calendar Timeline Replica

This project is a desktop view replica of the Mobiscroll monthly calendar timeline built using **ReactJs** and **ViteJs**. The application includes drag functionality, event management, and date navigation. The goal was to recreate the timeline view and add custom functionality without using any Mobiscroll libraries.

## Demo

[Live Demo](#) (Update with the actual link)

## Features

- **Monthly Calendar View:** An exact replica of the Mobiscroll monthly calendar.
- **Drag Functionality:** Select a timeline and add events by dragging.
- **Color-coded Events:** Each event is assigned a different color for better distinction.
- **Event Movement:** Drag events horizontally between dates.
- **Add Resources (Y-Axis):** Dynamically add resources to the calendar.
- **Highlight Today's Date:** Current day is highlighted.
- **Delete Event:** Ability to delete events with an alert confirmation.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed.

- [Node.js](https://nodejs.org/)

### Installation

1. Clone the repo

   ```bash
   git clone https://github.com/your-username/mobiscroll-calendar-timeline.git
   ```

2. Navigate to the project directory

   ```bash
   cd mobiscroll-calendar-timeline
   ```

3. Install the dependencies

   ```bash
   npm install
   ```

4. Run the development server

   ```bash
   npm run dev
   ```

5. Open the app in your browser at

   ```bash
   http://localhost:5173/
   ```

### Building for Production

To create a production build:

```bash
npm run build
```

## Technologies Used

- **ReactJs**: Component-based UI development.
- **ViteJs**: Fast build tool for modern web applications.

## Project Structure

- **Components**: Each UI element is built as a reusable React component.
- **State Management**: Used `useState` and `useEffect` hooks for handling local state.
- **Drag and Drop**: Custom drag functionality for selecting timelines and moving events.
- **Local State Persistence**: Implemented local state persistence across hard refreshes using browser local storage.

## Learning and Reflections

1. **Things Learned**:

   - Implementing a drag-and-drop functionality from scratch.
   - Managing dynamic components and states effectively in React.
   - Building a full calendar system without using third-party libraries.

2. **Most Difficult Part**:

   - The drag-and-drop functionality combined with event color assignment and horizontal movement.

3. **What I Would Have Done Differently**:

   - If given more time, I would optimize the rendering for better performance and add animations for smoother user experience.


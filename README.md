# QueueLess (TypeScript + React)

A simple React web application built with TypeScript that helps users avoid waiting in physical queues by showing queue length and allowing them to "join" virtually.

## Features

- View available places (canteen, hospital, salon, bank, post office)
- See current queue count and estimated wait time for each place
- Join queues virtually
- View your position in joined queues
- Leave queues when needed
- Simple and clean UI with hover effects
- **TypeScript support** with full type safety

## Technology Stack

- **TypeScript** (v4.9.5)
- **React** (v18.2.0) with functional components
- **HTML5**
- **CSS3** (no external frameworks)
- **JavaScript** (ES6+)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

### Building for Production

Create an optimized production build:
```bash
npm run build
```

## Project Structure

```
queueless/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── PlaceCard.tsx
│   │   ├── QueueModal.tsx
│   │   └── MyQueue.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── index.css
├── tsconfig.json
├── package.json
└── README.md
```

## TypeScript Features

- **Type Safety**: All components and functions are fully typed
- **Shared Types**: Common interfaces defined in `src/types/index.ts`
- **Props Interface**: Each component has strongly typed props
- **Function Parameters**: All parameters have explicit type annotations
- **Return Types**: All functions have explicit return types

## How It Works

1. **Home Page**: Displays a list of places with current queue information
2. **Join Queue**: Click "Join Queue" to add yourself to a queue
3. **Queue Modal**: Shows your position and estimated wait time
4. **My Queues**: View all queues you've joined and leave them if needed

## Data

This application uses dummy/static data with no backend or database connection. All queue data is managed in the component state using React hooks.

## Contributing

This is a simple educational project. Feel free to modify and improve it!

## License

This project is open source and available under the MIT License.

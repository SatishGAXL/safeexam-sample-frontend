# SafeExam Sample Frontend

A React-based frontend application for the SafeExam system that allows secure submission of exam answers to a blockchain network.

## Features

- Wallet Creation and Management
- Exam Answer Submission to Blockchain
- Transaction Tracking
- User-friendly Interface

## Tech Stack

- React + TypeScript
- Ant Design (UI Components)
- Axios (HTTP Client)
- Vite (Build Tool)

## Project Structure

```
safeexam-sample-frontend/
├── src/                          # Source code directory
│   ├── assets/                   # Static assets folder
│   │   └── App.css              # Main application styles
│   ├── App.tsx                  # Main application component
│   ├── main.tsx                 # Application entry point
│   └── utils.ts                 # Utility functions and configurations
├── dist/                        # Production build output
│   ├── assets/                 # compiled assets folder
│   └── index.html              # Built HTML file
└── README.md                    # Project documentation
```

## Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/SatishGAXL/safeexam-sample-frontend.git
cd safeexam-sample-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

## Configuration

The application connects to a backend API. The API URL can be configured in `src/utils.ts`:

```typescript
export const backendUrl = "https://safeexam-api-d4fga3ercpaaekey.centralindia-01.azurewebsites.net";
// For local development:
// export const backendUrl = "http://localhost:3000";
```

## Features Description

### Wallet Management
- Automatic wallet creation for new users
- Local storage of wallet addresses
- Option to reset and create new wallets

### Exam Answer Submission
The form includes fields for:
- Booklet ID
- Center Name
- City
- Exam Timing (Start/End)
- Exam Title
- Question & Answer
- Student ID
- Suspicious Activity Detection

### Transaction Processing
- Real-time transaction status updates
- Transaction hash display
- Direct link to blockchain explorer

## Component Documentation

### Main Components

#### App.tsx
The main application component that handles:
- Wallet connection
- Form management
- Transaction submission
- UI rendering

#### utils.ts
Utility functions for:
- Message notifications (success, error, warning)
- Random string generation
- API endpoint configuration

## Usage

1. Launch the application
2. Connect/Create wallet (automatic on first load)
3. Fill in the exam details form
4. Submit transaction
5. View transaction status and hash

## Error Handling

The application includes comprehensive error handling for:
- Wallet creation failures
- Transaction submission errors
- Network connectivity issues

## Build

To build for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.
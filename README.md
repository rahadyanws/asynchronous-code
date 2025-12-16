# Library Borrowing System

Simple implementation of a Library Borrowing System using **TypeScript** and **Jest**.
Designed for the "Asynchronous Code Session" task (30 minutes).

## Prerequisites
- Node.js installed (v14+ recommended)

## Installation
1. Open terminal in the project directory.
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### 1. Run Automated Tests (Recommended)
To verify the logic and requirements using the Jest test suite:
```bash
npm test
```
*Expected Output*: Test suite passes (7 tests).

### 2. Run Manual Demo
To see a live simulation of the library system in action:
```bash
npm start
```
*Expected Output*: Logs of adding books, searching, and borrowing/returning books.

## Project Structure
- `src/Library.ts`: Main logic class.
- `src/models/`: Data models (`Book`, `Member`).
- `tests/Library.test.ts`: Unit tests coverage.
- `src/index.ts`: Demo script.

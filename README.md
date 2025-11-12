# Assignment 13 – UC Component Library (Code Quality Checks + CI/CD)

Author: Muskanpreet Kaur
Container Name: kaur_muskanpreet_coding_assignment13
Working Directory: kaur_muskanpreet_ui_garden_build_checks
Port: 8018

---

## Overview

This assignment extends the UI Component Library from Assignment 12 by adding code quality checks, pre-commit hooks, and a CI/CD pipeline using Docker and GitHub Actions.

The implementation ensures that:
- Code passes Prettier, ESLint, and Tests before any commit.
- GitHub Actions also enforces these same checks on every push or pull request.
- The application runs inside a Docker container at http://localhost:8018.

---

## Tools & Technologies

- React (Create React App)
- Node.js 20 (Alpine)
- ESLint (A linter for js, ts code to check syntax errors)
- Prettier (A code formatter)
- Husky + Lint-Staged (Husky is a Git tool that adds hooks, like pre-commit, to automate code quality checks)
- Jest (Javascript testing framework, used to write and run automated tests)
- Docker
- GitHub Actions (CI/CD) - hooks can be bypassed, husky runs locally.

---

## Step-by-Step Implementation

### 1. Clone the Repository

```bash
git clone https://github.com/<mkaur124>/kaur_muskanpreet_ui_garden_build_checks.git
cd kaur_muskanpreet_ui_garden_build_checks

# Install Dependencies
npm install

# Run the Application Locally
npm start
# Open http://localhost:8018 to view it in your browser.

# Install Code Quality Tools
npm install --save-dev eslint prettier husky lint-staged

# Initialize ESLint
npx eslint --init

# Create ESLint and Prettier Config Files
# Add Lint and Prettier Commands to package.json

# Enable Husky and Lint-Staged
npx husky install

# Add Pre-Commit Hook
npx husky add .husky/pre-commit "npm run lint && npm run prettier:check && npm test"

# Commit Husky Setup
git add .husky
git commit -m ""

# Run Tests Manually
npm test

# Run tests inside Docker
docker exec -it kaur_muskanpreet_coding_assignment13 npm test

# Build Docker Image
docker build -t kaur_muskanpreet_coding_assignment13 .

# Run Docker Container
docker run -p 8018:8018 --name kaur_muskanpreet_coding_assignment13 kaur_muskanpreet_coding_assignment13

# Push to GitHub
git add .
git commit -m "Add CI workflow for lint, prettier, and tests"
git push origin main

# Final Output Summary
React component library running at: http://localhost:8018

Husky pre-commit hooks enforce lint, format, and test checks

GitHub Actions workflow validates code quality remotely

Docker container name: kaur_muskanpreet_coding_assignment13
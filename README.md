# Code Generator

A CLI tool for generating code from templates.

## Features

- Multiple template types
- React component generation
- Express route generation
- MongoDB model generation
- CLI interface

## Tech Stack

- **Language**: Node.js
- **CLI**: Native Node.js

## Project Structure

\`\`\`
code-generator/
├── src/
│   ├── generator.js     # Code generator
│   └── utils/           # Template engine
├── cli.js               # CLI entry point
└── package.json
\`\`\`

## Installation

\`\`\`bash
npm install -g .
\`\`\`

## Usage

\`\`\`bash
codegen react-component MyComponent src/components/MyComponent.jsx
codegen express-route users src/routes/users.js
codegen mongodb-model Product src/models/Product.js
\`\`\`

---

**POWERED BY L8AB SYSTEMS**

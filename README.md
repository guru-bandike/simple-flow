<h1 align="center" style="font-weight: bolder; color: #059d06">Simple Flow</h1>

<p align="center">
  <a href="https://chatbot-flow-builder-guru-bandikes-projects.vercel.app/" target="_blank">View Live App</a>
</p>

## Project Description

A **Flow-based Chatbot Builder** built using React Flow and Next.js. This visual tool allows users to create, connect, and configure chatbot conversation flows using custom draggable nodes.

---

## Features

- **Drag-and-Drop Nodes**: Build conversations visually with drag-enabled text nodes.
- **Editable Nodes**: Modify node content dynamically via a settings panel.
- **Flow Canvas**: Zoomable, pannable, and responsive React Flow canvas.

---

## Tech Stack

This project is built using:

### Frontend

- **Next.js** – React framework. (Recommended by React)
- **@xyflow/react (React Flow)** – Interactive flow canvas rendering.
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development.
- **TypeScript** – Type-safe development experience.

### Development Tools

- **VS Code** – IDE.
- **npm** – Package manager.

---

## Folder Structure

```
chatbot-flow-builder/
├── app/
├── components/
│   ├── flow/
│   │   ├── DnDContext.tsx
│   │   ├── FlowBuilder.tsx
│   │   ├── FlowCanvas.tsx
│   │   └── index.ts
│   ├── nodes/
│   │   ├── TextNode.tsx
│   │   └── index.ts
│   ├── panels/
│   │   ├── NodesPanel.tsx
│   │   ├── SettingsPanel.tsx
│   │   └── index.ts
├── data/
│   ├── initialData.ts
│   └── index.ts
├── hooks/
│   ├── useFlowBuilder.ts
│   └── index.ts
├── lib/
│   ├── constants.ts
│   ├── nodeFactory.ts
│   └── index.ts
├── types/
│   ├── flow.ts
│   └── index.ts
├── public/
│   └── favicon.ico
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## Installation and Setup

Follow these steps to set up the project locally:

### Prerequisites

Make sure you have the following installed:

- **Node.js**: [https://nodejs.org](https://nodejs.org)
- **npm**

### Clone the Repository

```bash
git clone https://github.com/guru-bandike/simple-flow
cd simple-flow
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

The app will be available at http://localhost:3000

---

## License

This project is licensed under the MIT License.

<h3 align="center" style="font-weight: bolder; color: #059d06">😊Happy Coding!</h3>

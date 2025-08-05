# mindmap ai-supported todo app

A Next.js, React todo app with AI assistance helping users break down and decide on their next task!
[skip to demo](https://github.com/cooljasonmelton/mindmap-todo-frontend/blob/main/README.md#demo)

<img width="100%" height="auto" alt="Screenshot 2025-07-27 at 9 47 25 PM" src="https://github.com/user-attachments/assets/40990488-1359-4e70-9d6a-7e371d376526" />

## Key Features

- Create, Read, Update, Destroy todo tasks
- Select task and have AI break it into steps
- Select task and get AI generated brainstorming questions about task
- Ask AI a custom question

## Built With​

### front end:

- TypeScript
- React
- Next.js
- Tailwind
- React Query

### apis:

- Node.js, Express, SQLite Database
- Ollama LLM (run locally local)

## LOCAL SET UP

1. Clone repos for frontend and api:

```
git clone https://github.com/cooljasonmelton/mindmap-todo-frontend
git clone https://github.com/cooljasonmelton/mindmap-todo-api
```

2. Install LLM [Ollama](https://ollama.com/) and run locally

```
brew install ollama
ollama serve
```

3. Set up backend api and database per the mindmap-todo-api [local set up instructions](https://github.com/cooljasonmelton/mindmap-todo-api?tab=readme-ov-file#local-set-up)

4. start the frontend:

```
npm run dev
```

## Use Cases:

### Break task into steps:

<img width="100%" height="auto" alt="Screenshot 2025-07-27 at 9 47 05 PM" src="https://github.com/user-attachments/assets/a4cb5772-fc58-47bd-ac6c-2894647e243c" />

### Brainstorm a task:

<img width="100%" height="auto" alt="Screenshot 2025-07-27 at 9 46 43 PM" src="https://github.com/user-attachments/assets/e8a50cc4-8a06-41e1-ac23-6e3921697aba" />

### Ask custom question:

<img width="100%" height="auto" alt="Screenshot 2025-07-27 at 9 46 27 PM" src="https://github.com/user-attachments/assets/798c3911-27b1-47b9-9208-5a72b368d3fc" />

### DEMO
https://github.com/user-attachments/assets/68c9f38e-9518-431b-a73e-9dc8bb3b7292


<hr/>

Created by
<a href='https://github.com/cooljasonmelton'> Jason Melton</a>

<hr/>
<br/>
<br/>
<br/>
<br/>

# DEV Notes:

COLORS:

https://coolors.co/0c0f0a-fbff12-dde000-ee8037-ff206e-e0004f-41ead4-ebebeb-ffffff

#### TODO LIST

- loader

ai possible features brainstorm:

- random todo (non-ai)
- summarize todo list themes
- suggest item
  - toggle suggest easiest item
  - toggle suggest important item
- break down todo into steps

perfect world features:

- like freeform app on mac, can drag screen and look at different items and click to interact or order them with drag and drop
- trash can for tasks where you can go through and bring back tasks or permenantly delete them

```

```

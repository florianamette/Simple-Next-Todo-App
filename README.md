# 📝 Simple To-Do App with Next.js & Tailwind CSS

A lightweight, responsive, and modern **To-Do App** built using **Next.js** and styled with **Tailwind CSS**. This app allows users to manage their daily tasks effortlessly.

---

## 🌟 Features

- **Add Tasks**: Quickly add tasks with a simple input field.
- **Mark as Complete**: Check off tasks as you complete them.
- **Delete Tasks**: Remove tasks from the list with a single click.
- **Keyboard Support**: Press **Enter** to add tasks without using the mouse.
- **Responsive Design**: Styled with **Tailwind CSS** for a clean, modern look.

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js and npm installed on your system.
- A code editor like VS Code.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/florianamette/Simple-Next-Todo-App.git
   cd simple-next-todo-app
   ```
2. Install the dependencies:

   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
    npm run dev
    ```
   
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🛠️ Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Node.js**: Backend runtime for running the development environment.

---

## ✨ How to Use

1. **Add a Task**:
- Type a task into the input field.
- Press **Enter** or click the **Add** button.

2. **Mark as Complete**:
- Check the box next to a task to mark it as completed. The task will appear with a strikethrough and gray text.

3. **Delete a Task**:
- Click the **Delete** button to remove the task from the list.

## Project Structure

```
simple-next-todo-app/
├── components/
│   ├── TaskInput.tsx      # Component for adding tasks
│   ├── TaskItem.tsx       # Component for individual task items
│   └── TaskList.tsx       # Component for displaying the task list
├── pages/
│   ├── index.tsx          # Main page of the app
├── styles/
│   ├── globals.css        # Global styles including Tailwind
├── public/                # Static assets
├── package.json           # Project dependencies
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```
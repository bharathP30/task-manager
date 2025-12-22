# Task Manager
A simple, responsive task management app that lets you add tasks with description, priority, category and due date, and this app will also lets you toggle tasks by their completion status, it also lets you search tasks in real time. Built with React hooks and Tailwind CSS.


## Features

✅ Add tasks with priority levels (High/Medium/Low)
📁 Organize by categories (Personal/School/Work/Shopping/Others)
📅 Set due dates for tasks
🔍 Search tasks by content
🎯 Filter by category, priority, and completion status
✔️ Mark tasks as complete/incomplete
🗑️ Delete tasks
📊 View task statistics (Total/Active/Completed)

## Tech Stack

**React** (with useState and icons)
**Tailwind CSS**
**JavaScript**

## How to use

### Adding a Task

Type your task in the "Enter Task..." input field
Choose a category from the dropdown (Personal, School, Work, Shopping, Others)
Select a priority level (High, Medium, Low)
Pick a due date using the date picker
Click the "Add Task" button (it'll be disabled if the task field is empty)

### Managing Tasks

Mark as Complete: Click on the task text to toggle between done/pending
Delete a Task: Click the trash icon (🗑️) on the right side of any task
View Details: Each task shows its priority level, category, and due date below the task name

### Filtering Your Tasks

By Status: Use the dropdown at the top to show All/Done/Pending tasks
By Category: Click category buttons (All, Personal, School, Work, Shopping, Others) to filter
By Priority: Click priority buttons (All, High, Medium, Low) to filter
Search: Type in the search bar to find tasks by name

### Pro tip: Filters work together! You can search for term "meeting" while filtering by "Work" category and "High" priority to narrow down results.
Understanding the Stats
The dashboard shows three numbers:

Total: All tasks you've created
Active: Tasks that aren't completed yet
Completed: Tasks you've marked as done

### Installation
```
# Clone the repository
git clone https://github.com/bharathP30/movie-search-app.git

# Navigate into the project folder
cd movie-search-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

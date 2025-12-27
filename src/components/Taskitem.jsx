import { FaTrash } from "react-icons/fa";

export default function TaskItem({ task, onToggle, onDelete }) {
  const isDone = "text-sm text-gray-200 md:text-xl line-through opacity-50 transition duration-300 cursor-pointer";
  const notDone = "text-sm text-gray-100 md:text-xl transition duration-300 cursor-pointer";

  return (
    <li className="animate-fadeIn flex flex-col gap-2 my-2 p-4 rounded-md space-y-1 md:p-6 bg-gradient-to-br from-black to-gray-800 hover:from-gray-900 hover:to-gray-700 transition-all duration-300">
      <div className="flex justify-between items-center gap-2">
        <p
          onClick={() => onToggle(task.id)}
          className={task.completed ? isDone : notDone}
        >
         {task.content}
        </p>
        <button 
          className="text-red-500 text-lg px-2 rounded-md hover:scale-110 transition-all duration-300"
          onClick={() => onDelete(task.id)}
        >
          <FaTrash/>
        </button>
      </div>
      <div className="flex justify-between items-baseline gap-2">
        <p className="text-sm text-gray-400">
         
          {task.order} | {task.type}
        </p>
        {task.dueDate && (
          <p className="font-mono text-sm text-gray-400">
            📅 {task.dueDate}
          </p>
        )}
      </div>
    </li>
  );
}
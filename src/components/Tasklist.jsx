import Taskitem from "./Taskitem";

export default function Tasklist({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p className="text-gray-500 m-8">No tasks match your filters 🔍</p>;
  }

  return (
    <ul className="space-y-2">
      {tasks.map(task => (
        <Taskitem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
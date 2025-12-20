import { useState } from "react";

export default function App() {
    const [list, setList] = useState([]);
    const [task, setTask] = useState("");
    const [priority, setPriority] = useState("Low");
    const [category, setCategory] = useState("Personal");
    const [date, setDate] = useState("");
    const [categoryfilter, setCategoryfilter] = useState("");
    const [priorityfilter, setPriorityfilter] = useState("");
    const [searchterm, setSearchterm] = useState("");
    const [status, setStatus] = useState("false");

    const addTask = () => {
                if (task.trim().length === 0) {
                    return;
                }
                
                const data = {
                id: Date.now(),
                content: task,
                type: category,          
                order: priority,          
                dueDate: date,     
                completed: false,       
                }
            setList([...list, data]);
            setTask("");
        
    };

    const isDone = "text-sm text-gray-400 line-through opacity-50";
    const notDone = "text-sm text-gray-400 ";

return (
    <div className="min-h-screen w-full p-4 bg-gradient-to-b from-gray-900 via-gray-600 to-gray-900">
        <header className="">
            <h1 className="text-3xl text-gray-400 font-sans font-bold text-center my-6 ">Task Manager</h1>
        </header>

        <div className='w-full p-4 text-center mb-4 md:mx-auto md:max-w-4xl md:p-8 md:text-xl text-white rounded-lg font-sans bg-gradient-to-br from-gray-900 to-gray-700'>
            <label className="inline mx-auto" htmlFor="taskInput">
            <input required
                   className='w-full mx-auto rounded-lg p-2 m-2 outline-none font-sans text-black focus:shadow-sm' 
                   onChange={(e) => setTask(e.target.value)} 
                   type="text" 
                   id="taskInput" 
                   value={task} 
                   placeholder='Enter Task...'/>
            </label>

            <div className='flex justify-between items-end'>

                    <select  
                    className='rounded-md border-none text-center w-fit py-1 md:max-w-40 md:mx-4 bg-gray-600 text-white font-sans' 
                    onChange={(e) => setCategory(e.target.value)} 
                    name="categoryType" 
                    id="categoryType"
                    value={category}
                    >
                        <option value="Personal">Personal</option>
                        <option value="Work">Work</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Others">Others</option>
 
                    </select>

                    <select 
                    className='rounded-md border-none text-center max-w-16 py-1 md:max-w-40 md:mx-4 bg-gray-600 text-white font-sans' 
                    onChange={(e) => setPriority(e.target.value)} 
                    name="priorityType" 
                    id="priorityType"
                    value={priority}
                    >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
 
                    </select>

                    <label htmlFor="deadDate">
                    <input required
                    className='rounded-lg py-1 text-center border-none font-sans w-fit md:max-w-40 text-black' 
                    onChange={(e) => setDate(e.target.value)} 
                    type="date" 
                    id="deadDate" 
                    value={date}
                    />
                    </label>
            </div>
            <button 
                onClick={addTask} 
                disabled={task.trim().length === 0}
                className={`text-white text-md w-1/3 mt-4 text-center p-2 rounded-md transition-all duration-200 
                         ${task.trim().length === 0 
                            ? 'bg-gray-500 cursor-not-allowed' 
                            : 'bg-green-500 active:scale-105 active:bg-green-600'}`}
                        >
                        Add Task
            </button>
        </div>

        <div className="w-full p-4 text-center mb-4 md:mx-auto md:max-w-4xl md:p-8 md:text-xl text-white rounded-lg font-sans bg-gradient-to-br from-gray-900 to-gray-700">
                <h2 className="text-center font-sans font-semibold text-xl text-gray-100">Tasks</h2>
            {   list.length === 0 ? (
                <p className="text-gray-500 mb-6">No tasks yet</p>
            ):(
                <ul className="space-y-2"> 
                         {
                            list.map(entry =>(
                            <li key={entry.id}
                                className="flex flex-col gap-2 my-2 p-4 rounded-md space-y-1 bg-gradient-to-br from-black to-gray-800"
                            >
                               <div className="flex justify-between items-center">
                                    <p className="text-md flex-wrap">{entry.content}</p>
                                    <button className="bg-slate-600 text-red-600 text-lg px-2 rounded-md focus:transform focus:scale-105 transition-all duration-300"
                                            onClick={()=>(setList(list.filter(item => item.id !== entry.id)))}
                                    >X</button>
                               </div>
                               <div className="flex justify-between items-baseline gap-2">
                                    <p className={entry.completed?isDone:notDone}
                                        onClick={() => {
                                                setList(list.map(item => 
                                                        item.id === entry.id 
                                                        ? {...item, completed: !item.completed} 
                                                        : item
                                                        ))
                                            }}      
                                    >{entry.order} | {entry.type}</p>

                                    <p className="font-mono ">Due: {entry.dueDate}</p>
                               </div>
                                
                            </li>
                         ))
                         }
                </ul>
                
            )


            }

        </div>

    </div>
)
}
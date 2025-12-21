import { useState } from "react";
import { FaTrash } from "react-icons/fa";

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

    const isDone = "text-sm text-gray-200 line-through opacity-50 transition duration-300";
    const notDone = "text-sm text-gray-100 transition duration-300";
    const btn = "text-md text-center w-fit px-4 py-1 rounded-full transition-all duration-300 focus:scale-105 ";
    const active = "bg-gray-500 ";
    const inactive = "bg-gray-600 text-gray-100 ";

    const filteredList = list.filter(entry => {
            const cat = categoryfilter === "All" || categoryfilter === entry.type;
            const prio = priorityfilter === "All" || priorityfilter === entry.order;

            return cat && prio;
    });

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
                        <option value="School">School</option>
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
        
        <div className="space-x-1 space-y-1 flex justify-center items-center flex-wrap mb-4">
            <button  
            onClick={()=>(setCategoryfilter("All"))}
            className={`${btn}${categoryfilter === "All"? active : inactive}`}>All</button>
            <button  
            onClick={()=>(setCategoryfilter("Personal"))}
            className={`${btn}${categoryfilter === "Personal"? active : inactive}`}>Personal</button>
            <button  
            onClick={()=>(setCategoryfilter("School"))}
            className={`${btn}${categoryfilter === "School"? active : inactive}`}>School</button>
            <button  
            onClick={()=>(setCategoryfilter("Work"))}
            className={`${btn}${categoryfilter === "Work"? active : inactive}`}>Work</button>
            <button  
            onClick={()=>(setCategoryfilter("Shopping"))}
            className={`${btn}${categoryfilter === "Shopping"? active : inactive}`}>Shopping</button>
            <button  
            onClick={()=>(setCategoryfilter("Others"))}
            className={`${btn}${categoryfilter === "Others"? active : inactive}`}>Others</button>
        </div>

        <div className="mx-auto space-x-1 space-y-1 flex justify-center items-center flex-wrap mb-4">
            <button
            onClick={()=>(setPriorityfilter("All"))}
            className={`${btn}${priorityfilter === "All"? active : inactive}`}>All</button>
            <button
            onClick={()=>(setPriorityfilter("High"))}
            className={`${btn}${priorityfilter === "High"? active : inactive}`}>High</button>
            <button
            onClick={()=>(setPriorityfilter("Medium"))}
            className={`${btn}${priorityfilter === "Medium"? active : inactive}`}>Medium</button>
            <button
            onClick={()=>(setPriorityfilter("Low"))}
            className={`${btn}${priorityfilter === "Low"? active : inactive}`}>Low</button>
        
        </div>

        <div className="w-full p-4 text-center mb-4 md:mx-auto md:max-w-4xl md:p-8 md:text-xl text-white rounded-lg font-sans bg-gradient-to-br from-gray-900 to-gray-700">
                <h2 className="text-center font-sans font-semibold text-xl text-gray-100">Tasks</h2>
            {   list.length === 0 ? (
                <p className="text-gray-500 mb-6">No tasks yet</p>
            ):(
                <ul className="space-y-2"> 
                         {
                            filteredList.map(entry =>(
                            <li key={entry.id}
                                className="flex flex-col gap-2 my-2 p-4 rounded-md space-y-1 bg-gradient-to-br from-black to-gray-800 transition-all duration-500"
                            >
                               <div className="flex justify-between items-center">
                                    <p
                                        onClick={() => {
                                                setList(list.map(item => 
                                                        item.id === entry.id 
                                                        ? {...item, completed: !item.completed} 
                                                        : item
                                                        ))
                                            }}   
                                     className={entry.completed?isDone:notDone}
                                           
                                    >{entry.content}</p>
                                    <button className=" text-red-500 text-lg px-2 rounded-md focus:transform focus:scale-105 transition-all duration-300"
                                            onClick={()=>(setList(list.filter(item => item.id !== entry.id)))}
                                    >
                                        <FaTrash/>
                                    </button>
                               </div>
                               <div className="flex justify-between items-baseline gap-2">
                                    <p
                                        className="text-sm text-gray-400"
                                    >{entry.order} | {entry.type}
                                    </p>

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
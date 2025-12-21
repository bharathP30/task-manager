import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function App() {
    const [list, setList] = useState([]);
    const [task, setTask] = useState("");
    const [priority, setPriority] = useState("Low");
    const [category, setCategory] = useState("Personal");
    const [date, setDate] = useState("");
    const [categoryfilter, setCategoryfilter] = useState("All");
    const [priorityfilter, setPriorityfilter] = useState("All");
    const [searchterm, setSearchterm] = useState("");
    const [statusFilter, setStatusfilter] = useState("All");

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
            setDate("");
        
    };

    const totalTasks = list.length;
    const activeTasks = list.filter(t => !t.completed).length;
    const completedTasks = list.filter(t => t.completed).length;

    const isDone = "text-sm text-gray-200 md:text-xl line-through opacity-50 transition duration-300";
    const notDone = "text-sm text-gray-100 md:text-xl transition duration-300";
    const btn = "text-md text-center w-fit px-4 py-1 rounded-full md:text-lg transition-all duration-300 focus:scale-105 ";
    const active = "bg-gray-500 shadow-sm";
    const inactive = "bg-gray-700 text-gray-100 ";

    const filteredList = list.filter(entry => {
           const term = searchterm === "" || entry.content.toLowerCase().includes(searchterm.toLowerCase());
            const taskStatus = statusFilter === "All" || (statusFilter === "true" && entry.completed) || (statusFilter === "false" && !entry.completed);
            const cat = categoryfilter === "All" || categoryfilter === entry.type;
            const prio = priorityfilter === "All" || priorityfilter === entry.order;

            return term && taskStatus && cat && prio;
    });
    

return (
    <div className="min-h-screen w-full p-4 bg-gradient-to-b from-gray-900 via-gray-600 to-gray-900">
    
        <header className="">
            <h1 className="text-3xl text-gray-400 font-sans font-bold text-center my-6
                          md:text-6xl md:my-12
                            ">Task Manager</h1>
        </header>

        <div className="w-full space-x-1 bg-gray-900 p-2 my-4 rounded-lg flex
                        md:max-w-xl md:mx-auto md:space-x-2 
                        ">
            
             <select className="w-fit text-center rounded-md py-1 outline-none appearance-none
                                 bg-gray-800 text-gray-300"
                    name="statusFilter" id="statusFilter"
                    value={statusFilter}
                    onChange={(e)=>setStatusfilter(e.target.value)}
                    >
                    <option value="All">All</option>
                    <option value="true">Done</option>
                    <option value="false">Pending</option>
             </select>
            <input type="search"
             className="rounded-lg w-full bg-gray-800 text-gray-100 h-10 outline-none p-2
                       focus:ring-1 focus:ring-blue-500"
             value={searchterm}
             placeholder="Search tasks..."
             onChange={(e)=>setSearchterm(e.target.value)}
             />

        </div>

        <div className='w-full p-4 text-center mb-4 text-white rounded-lg font-sans bg-gradient-to-b from-gray-900 to-gray-700
                        md:mx-auto md:max-w-3xl md:p-8 md:text-lg md:my-12'>
        
            <input required
                   className='w-full mx-auto rounded-lg p-2 m-2 outline-none
                             text-gray-100 bg-gray-700 font-sans 
                             focus:ring-1 ring-green-400' 
                   onChange={(e) => setTask(e.target.value)} 
                   type="text" 
                   id="taskInput" 
                   value={task} 
                   placeholder='Enter Task...'/>
         

            <div className='flex justify-between items-end md:justify-center md:gap-4'>

                    <select  
                    className='rounded-md text-center w-fit py-1 
                                md:w-1/4 bg-gray-600 text-white 
                                font-sans outline-none' 
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
                    className='rounded-md outline-none text-center w-1/5 py-1
                         bg-gray-600 text-white font-sans
                      ' 
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
                    className='rounded-lg py-1 text-center outline-none font-sans w-fit
                    bg-gray-600 text-white md:max-w-40' 
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
                className={`text-white text-md w-1/3 mt-4 text-center p-2 rounded-md 
                    transition-all duration-200 md:mt-8
                         ${task.trim().length === 0 
                            ? 'bg-gray-500 cursor-not-allowed text-gray-700' 
                            : 'bg-green-500 active:scale-105 active:bg-green-600'}`}
                        >
                        Add Task
            </button>
        </div>
        
       <div className="md:mb-8">
         <div className="space-x-1 space-y-1 flex justify-center items-center flex-wrap mb-2  md:space-x-2 md:space-y-2">
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

        <div className="mx-auto space-x-1 space-y-1 flex justify-center items-center flex-wrap mb-2  md:space-x-2 md:space-y-2">
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
       </div>

        <div className="w-full p-4 text-center mb-4 
        md:mx-auto md:max-w-3xl md:p-8
        text-white rounded-lg font-sans bg-gradient-to-b from-gray-900 to-gray-800">
                
                <div className="flex justify-around text-center mb-4">
                    <div>
                        <p className="text-md md:text-2xl font-bold text-purple-400">{totalTasks}</p>
                        <p className="text-xs text-gray-400">Total</p>
                    </div>
                    <div>
                        <p className="text-md md:text-2xl font-bold text-blue-400">{activeTasks}</p>
                        <p className="text-xs text-gray-400">Active</p>
                    </div>
                    <div>
                        <p className="text-md md:text-2xl font-bold text-green-400">{completedTasks}</p>
                        <p className="text-xs text-gray-400">Completed</p>
                    </div>
                </div>
            {   list.length === 0 ? (
                <p className="text-gray-500 m-8">No tasks yet</p>
            ):(
                <ul className="space-y-2"> 
                         {
                            filteredList.map(entry =>(
                            <li key={entry.id}
                                className="flex flex-col gap-2 my-2 p-4 rounded-md space-y-1
                                           md:p-8
                                bg-gradient-to-br from-black to-gray-800 transition-all duration-500"
                            >
                               <div className="flex justify-between items-center gap-2">
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

                                    <p className="font-mono text-sm">Due: {entry.dueDate}</p>
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
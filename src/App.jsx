import { useState } from "react";

export default function App() {
    const [list, setList] = useState([]);
    const [task, setTask] = useState([]);
    const [priority, setPriority] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("All");
    const [categoryfilter, setCategoryfilter] = useState("");
    const [priorityfilter, setPriorityfilter] = useState("");
    const [searchterm, setSearchterm] = useState("");
    const [status, setStatus] = useState("false");

    const addTask = () => {
        const data = {
                id: Date.now(),
                title: task,
                type: category,          
                order: priority,          
                dueDate: date,     
                completed: false,       
        }
        setList([...list, data]);
        setTask("");
    };


return (
    <div className="min-h-screen w-full p-4 bg-gradient-to-b from-gray-900 via-gray-600 to-gray-900">
        <header className="">
            <h1 className="text-3xl text-gray-400 font-sans font-bold text-center my-6 ">Task Manager</h1>
        </header>

        <div className='w-full p-4 md:mx-auto md:max-w-4xl md:p-8 md:text-xl text-white rounded-lg font-sans bg-gradient-to-br from-gray-900 to-gray-600'>
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

                <div className="space-x-1 space-y-1">
                    <label htmlFor="deadDate">
                    <input required
                    className='rounded-lg py-1 text-center border-none font-sans w-fit md:max-w-40 text-black' 
                    onChange={(e) => setDate(e.target.value)} 
                    type="date" 
                    id="deadDate" 
                    value={date}
                    />
                    </label>

                    <select 
                    className='rounded-md border-none w-fit md:max-w-40 md:mx-4 bg-gray-600 text-white font-sans' 
                    onChange={(e) => setCategory(e.target.value)} 
                    name="categoryType" 
                    id="categoryType"
                    value={category}
                    >
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Others">Others</option>
 
                    </select>

                    <select 
                    className='p-2 focus:outline-none max-w-20 md:max-w-40 md:mx-4 rounded-md border-none bg-gray-600 text-white font-sans' 
                    onChange={(e) => setPriority(e.target.value)} 
                    name="priorityType" 
                    id="priorityType"
                    value={priority}
                    >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
 
                    </select>
                </div>
            </div>
            <button 
                onClick = {addTask} 
                className=' text-white text-2xl
                text-center font-semibold w-fit p-2 rounded-md transition-all duration-200 active:scale-105 bg-green-500 active:bg-green-600'>
                  +
            </button>
        </div>



    </div>
)
}
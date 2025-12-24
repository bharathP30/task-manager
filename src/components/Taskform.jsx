import { useState } from "react";

export default function Taskform({addTask}){
        const [task, setTask] = useState("");
        const [priority, setPriority] = useState("Low");
        const [category, setCategory] = useState("Personal");
        const [date, setDate] = useState("");

        const handleSubmit = () => {
                if (task.trim().length === 0) return;
                
                addTask({
                id: Date.now(),
                content: task,
                type: category,          
                order: priority,          
                dueDate: date,     
                completed: false,       
                });

            setTask("");
            setDate("");
        
    };

    return (
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
                            className='rounded-md text-center w-fit p-1 
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
                            className='rounded-md outline-none text-center w-1/5 p-1
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
                            className='rounded-lg p-1 text-center outline-none font-sans w-32 md:w-40
                            bg-gray-600 text-white md:max-w-40' 
                            onChange={(e) => setDate(e.target.value)} 
                            type="date" 
                            id="deadDate"
                            value={date}
                            />
                            </label>
                    </div>
                    <button 
                        onClick={handleSubmit} 
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
    )
}
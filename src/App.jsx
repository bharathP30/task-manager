import { useState, useEffect } from "react";
import { Analytics } from '@vercel/analytics/react'; 
import Stats from "./components/Stats";
import Taskform from "./components/Taskform";
import Searchbar from "./components/Searchbar";
import Filterbar from "./components/Filterbar";
import Tasklist from "./components/Tasklist";

 function useLocalStorage(key , initialValue){

        const [isloaded, setIsloaded] = useState(false);
        const [value, setValue] = useState(()=> {
         try {
          const storedValue = localStorage.getItem(key);
          return storedValue ? JSON.parse(storedValue) : initialValue;
         } catch (error) {
           console.error("Error reading localStorage key “" + key + "”: ", error);
           return initialValue;
         }
        });
      
        useEffect(()=>{
          setIsloaded(true);
        },[]);

        useEffect(()=>{
         if(isloaded){
          try {
           localStorage.setItem(key, JSON.stringify(value));
          } catch (error) {
           console.error("Error setting localStorage key “" + key + "”: ", error);
          } 
        }
        }, [key, value, isloaded])
        return [value, setValue];
    } 

export default function App() {
    const [list, setList] = useLocalStorage("data", []);
    const [categoryfilter, setCategoryfilter] = useState("All");
    const [priorityfilter, setPriorityfilter] = useState("All");
    const [searchterm, setSearchterm] = useState("");
    const [statusFilter, setStatusfilter] = useState("All");
    

    const createTask = (newtask) =>{
        setList([...list, newtask]);
    }

    const toggleTask = (id) => {
    setList(list.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setList(list.filter(task => task.id !== id));
  };

    const totalTasks = list.length;
    const activeTasks = list.filter(t => !t.completed).length;
    const completedTasks = list.filter(t => t.completed).length;


    const filteredList = list.filter(entry => {
           const term = searchterm === "" || entry.content.toLowerCase().includes(searchterm.toLowerCase());
            const taskStatus = statusFilter === "All" || (statusFilter === "true" && entry.completed) || (statusFilter === "false" && !entry.completed);
            const cat = categoryfilter === "All" || categoryfilter === entry.type;
            const prio = priorityfilter === "All" || priorityfilter === entry.order;

            return term && taskStatus && cat && prio;
    });
    

return (
    <>
        <div className="min-h-screen w-full p-4 bg-gradient-to-b from-gray-900 via-gray-600 to-gray-900">
    
        <header className="">
            <h1 className="text-3xl text-gray-400 font-sans font-bold text-center my-6
                          md:text-6xl md:my-12
                            ">Task Manager</h1>
        </header>

        <Searchbar 
            searchterm={searchterm}
            onSearchChange={setSearchterm}
            statusFilter={statusFilter}
            onStatusChange={setStatusfilter}
        />

        <Taskform 
            addTask={createTask}
        />
        
        <Filterbar 
            categoryFilter={categoryfilter}
            priorityFilter={priorityfilter}
            onCategoryChange={setCategoryfilter}
            onPriorityChange={setPriorityfilter}
        />


        <div className="w-full p-4 text-center mb-4 
        md:mx-auto md:max-w-3xl md:p-8
        text-white rounded-lg font-sans bg-gradient-to-b from-gray-900 to-gray-800">

            <Stats
                 totalTasks={totalTasks}
                 activeTasks={activeTasks}
                 completedTasks={completedTasks}
            /> 
        
        {list.length === 0 ? (
          <p className="text-gray-500 m-8">No tasks yet.</p>
        ) : (
          <Tasklist
            tasks={filteredList}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        )}
           
        </div>
        </div>
    <Analytics/>
    </>
)
}
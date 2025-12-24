import Filterbutton from "./Filterbutton";

export default function Filterbar ({ categoryFilter, onCategoryChange, priorityFilter, onPriorityChange }) {
    const categories = ['All', 'Personal', 'School', 'Work', 'Shopping', 'Others'];
    const priorities = ['All', 'High', 'Medium', 'Low'];


    return (
         <div className="md:mb-8">
                 <div className="space-x-1 space-y-1 flex justify-center items-center flex-wrap mb-2  md:space-x-2 md:space-y-2">
                   {categories.map(cat => (
                    <Filterbutton
                        key={cat}
                        label={cat}
                        isActive={categoryFilter === cat}
                        onClick={() => onCategoryChange(cat)}
                        />
                     ))}
                </div>
        
                <div className="mx-auto space-x-1 space-y-1 flex justify-center items-center flex-wrap mb-2  md:space-x-2 md:space-y-2">
                    {priorities.map(priority => (
                        <Filterbutton
                            key={priority}
                            label={priority}
                            isActive={priorityFilter === priority}
                            onClick={() => onPriorityChange(priority)}
                        />
                    ))}
                </div>
               </div>
        

    )
}
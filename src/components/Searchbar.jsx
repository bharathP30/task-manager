
export default function Searchbar ({searchterm, onSearchChange, statusFilter, onStatusChange}) {


    return (
        <div className="w-full space-x-1 bg-gray-900 p-2 my-4 rounded-lg flex
                                md:max-w-xl md:mx-auto md:space-x-2 
                                ">
                    
                     <select className="w-fit text-center rounded-md py-1 outline-none appearance-none
                                         bg-gray-800 text-gray-300"
                            name="statusFilter" id="statusFilter"
                            value={statusFilter}
                            onChange={(e)=>onStatusChange(e.target.value)}
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
                     onChange={(e)=>onSearchChange(e.target.value)}
                     />
        
                </div>
    )
}
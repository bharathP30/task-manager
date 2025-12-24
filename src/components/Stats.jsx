export default function Stats({totalTasks, activeTasks, completedTasks}){

    return (
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
    )
}
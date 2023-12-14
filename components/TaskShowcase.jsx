import { useGetTasksQuery } from "@/app/api/apiSlice";

export default function TaskShowcase() {
  const {
    data: tasks,
    isLoading,
    isSuccess,
    isError,
    error    
  } = useGetTasksQuery();
  return(
    <div className="flex justify-center">
      <div className="lg:w-[700px] w-full bg-white rounded-md shadow-sm p-5 mt-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h2 className="font-bold mb-4">Task name</h2>
            <div className="flex">
              <span className="text-gray-400">Category: <span className="py-1 px-3 bg-gray-900 rounded-full text-white">Work</span></span>
              <span className="text-gray-400 ml-3">Priority: <span className="py-1 px-3 bg-red-900 rounded-full text-white">High</span></span>
            </div>
            <span className="text-gray-400 mt-3">Deadline: <span className="py-1 px-3 bg-green-900 rounded-full text-white">20-12-2023</span></span>
          </div>
          <div>
            
            <span>Action</span>
          </div>
        </div>
      </div>
    </div>
  )
}

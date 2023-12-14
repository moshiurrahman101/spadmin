"use client";
import TaskShowcase from "@/components/TaskShowcase";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { useGetTasksQuery } from "@/app/api/apiSlice";

export default function Task() {
    const {
        data: tasks,
        isLoading,
        isSuccess,
        isError,
        error    
      } = useGetTasksQuery();

      let content;
      if (isLoading) {
        content = <h2>Loading...</h2>
      }else if(isSuccess){
        content = JSON.stringify(tasks)
      }else if(isError){
        content = <h2>{error}</h2>
      }
    return(
        <div className="flex justify-stretch w-screen h-screen bg-gray-100">
            <Sidebar />
            <main className="w-screen p-5">
                <Header heading="All Task" />
                 <TaskShowcase />
                 {
                    
                 }
            </main>
        </div>
    )
}

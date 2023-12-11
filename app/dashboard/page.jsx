import TaskShowcase from "@/components/TaskShowcase";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function Dashboard(){
    return(
        <div className="flex justify-stretch w-screen h-screen bg-gray-100">
            <Sidebar />
            <main className="w-screen p-5">
                <Header heading="Dashboard"/>
                <hr className="mt-5"/>
                <TaskShowcase />
            </main>
        </div>
    )
}
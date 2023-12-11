import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function Task() {
    return(
        <div className="flex justify-stretch w-screen h-screen bg-gray-100">
            <Sidebar />
            <main className="w-screen p-5">
                <Header heading="All Task" />
                
            </main>
        </div>
    )
}

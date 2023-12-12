import AddTask from "@/components/AddTask";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function CreateTask() {
  return (
    <div className="flex justify-stretch w-screen h-screen bg-gray-100">
      <Sidebar />
      <main className="w-screen p-5">
        <Header heading="Create a Task" />
        <AddTask />
      </main>
    </div>
  );
}

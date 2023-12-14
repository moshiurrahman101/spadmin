import TaskShowcase from "@/components/TaskShowcase";
import TopCard from "@/components/dashboard/TopCard";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

export default function Dashboard() {
  return (
    <div className="overflow-x-hidden flex justify-stretch w-screen h-screen bg-gray-100">
      <Sidebar />
      <main className="w-screen lg:p-5 p-1">
        <Header heading="Dashboard" />
        <hr className="mt-5" />
        <TopCard />
        <TaskShowcase />
      </main>
    </div>
  );
}

import Link from "next/link";

export default function TaskShowcase() {
  return (
    <div className="flex justify-between gap-5">
        <div className="mt-5 w-[100%]">
            <h2 className="text-xl font-bold">Today need complete</h2>
            <Link href={"/dashboard/task/"}>
            <div className="w-[100%] mt-3 shadow-md rounded-sm p-5 flex flex-col justify-between">
                <h2 className="text-sm font-semibold">Task name 1</h2>
                <div className="felx justify-between mt-2">
                    <span className="text-sm font-semibold text-gray-600">Priority: </span>
                    <span className="py-1 px-6 rounded-full bg-red-200 text-red-900 text-sm">High</span>
                </div>
                <div className="felx justify-between my-3">
                    <span className="text-sm font-semibold text-gray-600">Status: </span>
                    <span className="py-1 px-6 rounded-full bg-green-200 text-green-800 text-sm">Started</span>
                </div>
            </div>
            </Link>
        </div>
        <div className="mt-5 w-[100%]">
            <h2 className="text-xl font-bold">This Week</h2>
            <Link href={"/dashboard/task/"}>
            <div className="w-[100%] mt-3 shadow-md rounded-sm p-5 flex flex-col justify-between">
                <h2 className="text-sm font-semibold">Task name 1</h2>
                <div className="felx justify-between mt-2">
                    <span className="text-sm font-semibold text-gray-600">Priority: </span>
                    <span className="py-1 px-6 rounded-full bg-red-200 text-red-900 text-sm">High</span>
                </div>
                <div className="felx justify-between my-3">
                    <span className="text-sm font-semibold text-gray-600">Status: </span>
                    <span className="py-1 px-6 rounded-full bg-green-200 text-green-800 text-sm">Started</span>
                </div>
            </div>
            </Link>
        </div>

    </div>
  )
}

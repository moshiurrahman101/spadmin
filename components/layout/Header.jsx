"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
export default function Header(props) {
  const { data: session } = useSession();
  return (
    <>
      <div className="flex justify-between lg:flex-row md:flex-row flex-col md:gap-5 md:overflow-hidden sm:gap-4 md:pt-3 sm:pt-3 lg:items-center md:items-center">
        <h2 className="text-lg font-semibold">{props.heading}</h2>
        <form className="flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center">
          <input type="text" placeholder="Find your task" />
          <div className="lg:mt-0 md:mt-0 mt-5">
            <Link
              href={"/dashboard/task/create"}
              className="bg-blue-600 text-center py-1 text-white ml-2 px-2 rounded-full text-sm font-semibold"
            >
              Add Task
            </Link>
          </div>
        </form>
        <h2 className="lg:block hidden">
          Welcome,{" "}
          <span className="font-bold text-blue-600">{session?.user?.name}</span>
        </h2>
      </div>
    </>
  );
}

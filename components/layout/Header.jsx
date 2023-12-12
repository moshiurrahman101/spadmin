"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
export default function Header(props) {
  const { data: session } = useSession();
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">{props.heading}</h2>
        <form>
          <input type="text" placeholder="Find your task" />
          <Link
            href={"/dashboard/task/create"}
            className="bg-blue-600 text-center py-1 text-white ml-2 px-2 rounded-full text-sm font-semibold"
          >
            Add Task
          </Link>
        </form>
        <h2>
          Welcome,{" "}
          <span className="font-bold text-blue-600">{session?.user?.name}</span>
        </h2>
      </div>
    </>
  );
}

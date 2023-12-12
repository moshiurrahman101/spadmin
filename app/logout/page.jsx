"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();
  const confirmSignOut = async () => {
    await signOut();
    router.push("/");
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
        role="alert"
      >
        <strong className="font-bold">Are you sure want to logout!</strong>
        <span className="block sm:inline">
          If yes, click the confirm button or cancle button
        </span>
        <div className="flex justify-between mt-5">
          <Link
            href={"/dashboard/"}
            className="py-2 px-4 text-white bg-black rounded-sm"
          >
            Go back to Dashboard
          </Link>
          <button
            onClick={confirmSignOut}
            className="py-2 px-4 text-white bg-red-600 rounded-sm"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

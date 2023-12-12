"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Field must be fill-up!");
      return;
    }
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        setError("Invalid credentials!");
        return;
      }
      if (res.ok) {
        setSuccess("Login Successfuly!");
        router.replace("dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-600">
        <h1 className="text-xl font-bold my-4">Enter Login Information</h1>
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 my-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">{error}</strong>
          </div>
        )}
        {success && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 my-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">{success}</strong>
          </div>
        )}

        <form onSubmit={submitHandler} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-blue-600 text-white py-2 rounded-sm font-bold">
            Login
          </button>
        </form>
        <div className=" mt-3 text-right">
          <Link href={"/register"} className="text-sm font-bold">
            Dont&#39;s Have an Account?{" "}
            <span className="underline">Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

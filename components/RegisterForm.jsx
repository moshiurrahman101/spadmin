"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!name || !email || !password) {
      setError("Must be fill-up all feild!");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const { user } = await resUserExists.json();
      if (user) {
        setError("User already exists!");
      }
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        setSuccess("Successfully! Redirecting to login.");
        setTimeout(() => {
          router.push("/");
        }, 3000);
      } else {
        console.log("User registration faild.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-600">
        <h1 className="text-xl font-bold my-4">Create new account</h1>
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

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-blue-600 text-white py-2 rounded-sm font-bold">
            Register
          </button>
        </form>
        <div className=" mt-3 text-right">
          <Link href={"/"} className="text-sm font-bold">
            Already Have an Account? <span className="underline">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

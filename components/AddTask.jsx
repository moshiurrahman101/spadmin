"use client";
import { useState } from "react";
import DateTimePicker from "./smallElements/DateTimePicker";

export default function AddTask() {
  const [categories, setCategories] = useState("");
  return (
    <div className="flex mt-5 justify-center">
      <div className="mt-5 p-5 min-w-md bg-white rounded-md shadow-sm">
        <h1 className="text-center text-black font-semibold text-lg mb-5">
          Add your new task
        </h1>
        <form className="flex flex-col gap-6">
          <input type="text" name="name" placeholder="Task Name" />
          <select
            name="categories"
            onChange={(e) => setCategories(e.target.value)}
          >
            <option value="">Task category</option>
            <option value="Personal">Personal</option>
            <option value="Work">Work (Project)</option>
            <option value="Finance">Finance</option>
          </select>
          <textarea
            placeholder="Write your task description here..."
            name="Description"
            rows="4"
            className="p-3"
          ></textarea>
          {categories == "Work" && <DateTimePicker />}

          <button
            type="submit"
            className="py-3 px-6 bg-blue-600 text-white font-bold"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

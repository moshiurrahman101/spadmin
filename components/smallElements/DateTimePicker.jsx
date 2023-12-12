"use client";

export default function DateTimePicker() {
  return (
    <div className="flex flex-col">
      <label htmlFor="date" className="text-gray-400">
        Select your deadline
      </label>
      <input
        type="date"
        name="dateTimePicker"
        placeholder="Select your Deadline"
      />
    </div>
  );
}

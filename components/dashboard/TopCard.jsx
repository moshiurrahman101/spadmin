export default function TopCard() {
  return (
    <div className="flex justify-between lg:flex-row flex-col">
      <div className="mt-5 lg:w-[250px] flex justify-between items-center p-5 bg-white shadow-lg rounded-md">
        <h2 className="font-bold text-red-600">High Priority</h2>
        <div className="font-bold bg-red-300 rounded-lg text-red-700 p-5 w-fit">
          19
        </div>
      </div>
      <div className="mt-5 lg:w-[250px] flex justify-between items-center p-5 bg-white shadow-lg rounded-md">
        <h2 className="font-bold text-blue-600">Total Task</h2>
        <div className="font-bold bg-blue-300 rounded-lg text-blue-700 p-5 w-fit">
          120
        </div>
      </div>
      <div className="mt-5 lg:w-[250px] flex justify-between items-center p-5 bg-white shadow-lg rounded-md">
        <h2 className="font-bold text-green-600">Total Complete</h2>
        <div className="font-bold bg-green-300 rounded-lg text-green-700 p-5 w-fit">
          19
        </div>
      </div>
    </div>
  );
}

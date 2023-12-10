import Link from "next/link";

export default function RegisterForm(){
    return <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-600">
            <h1 className="text-xl font-bold my-4">Create new account</h1>
            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 my-3 rounded relative" role="alert">
                <strong class="font-bold">Error! </strong>
                <span class="block sm:inline">Error message here...</span>
            </div>

            <form className="flex flex-col gap-3">
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="bg-blue-600 text-white py-2 rounded-sm font-bold">Register</button>
            </form>
            <div className=" mt-3 text-right">
                <Link href={"/"} className="text-sm font-bold">
                    Already Have an Account? <span className="underline">Login</span>
                </Link>
            </div>
            <hr />
            {/* Social Login */}
            <div className="mt-5">
                <p className="text-gray-500 font-semibold">With Social Sign up</p>
                <div className="flex gap-5 mt-4">
                    <button className="py-1 px-6 bg-red-700 rounded-sm text-white font-bold">Google</button>
                    <button className="py-1 px-6 bg-blue-700 rounded-sm text-white font-bold">Facebook</button>
                </div>
            </div>
            
        </div>
    </div>
}
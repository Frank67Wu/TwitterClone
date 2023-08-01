import Link from "next/link";

export default function Signup() {
    return (
        <div className="flex justify-center my-16 w-[625px] rounded-3xl border-2 bg-white">
            <form className="flex flex-col">
                <img className="w-16 h-16 self-center mt-2" src="/images/icon.png"></img>
                <h1 className="text-4xl font-semibold pt-6">Join 7witter today</h1>
                <button className="rounded-full border-2 py-1.5 text-gray-500 mt-10"> Sign up with 500gle</button>
                <button className="rounded-full border-2 py-1.5 font-bold mt-6"> Sign up with 4pple</button>
                <div className="flex py-5 items-center">
                    <div className="flex-grow border-t border-black"></div>
                    <span className="flex-shrink mx-4">Or</span>
                    <div className="flex-grow border-t border-black"></div>
                </div>
                <button className="text-white bg-black font-bold rounded-full py-2">Create account</button>

                <div className="flex mt-16">
                <h1 className="text-gray-500">Have an account already?</h1>
                <Link className="ml-1 text-blue-500 mb-20" href={"/login"}>Log in</Link>
                </div>

            </form>

        </div>
    )
}
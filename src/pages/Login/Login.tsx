import { FormEvent } from "react";
import Button from "../../components/Button";


export const Login = () => {
    
    const handleLogin = (ev: FormEvent) => {
        ev.preventDefault();
        console.log("Você efetuou o login!")
    };

    return (
        <div className="w-screen h-screen bg-slate-800 flex items-center justify-end">
         <div className="w-5/12	h-screen bg-gray-200 flex flex-col items-center justify-center gap-5">
          <h1 className="text-center text-gray-400 font-bold text-5xl">4devs</h1>
          <form className="flex flex-col gap-3" onSubmit={handleLogin}>
              <label className="block">
                <span className="text-gray-700">Email</span>
                <input
                  type="email"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder="john@example.com"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Password</span>
                <input
                  type="password"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
              <Button type="submit">Login</Button>
          </form>
         </div>
        </div>
    );
}
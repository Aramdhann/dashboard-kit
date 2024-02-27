import React, { lazy, Suspense } from "react";
const Loading = lazy(() => import("components/Loading.jsx"));

const Login = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <div className="flex items-center justify-center bg-zinc-800 h-screen p-3">
        <div className="flex flex-col gap-10 p-5 bg-white rounded-lg">
          <div className="flex flex-col text-center">
            <div className="flex flex-col gap-2 mb-5">
              <div className="relative mx-auto bg-blue-500 h-[40px] w-[40px] rounded-full">
                <div className="absolute bg-white p-2 h-[20px] w-[15px] mt-[10px] ml-[15px] rounded-r-full"></div>
              </div>
              <p className="text-gray-400">Dashboard Kit</p>
            </div>
            <p className="font-medium text-xl mb-2">Log In to Dashboard Kit</p>
            <p className="text-xs text-gray-400">
              Enter your email and password below
            </p>
          </div>
          <form action="" className="flex flex-col gap-5">
            <div>
              <label htmlFor="email" className="text-gray-400 font-medium">
                Email
              </label>
              <input
                className="flex p-3 border rounded-lg hover:border-blue-500"
                placeholder="Email address"
              ></input>
            </div>
            <div>
              <label htmlFor="email" className="text-gray-400 font-medium">
                Password
              </label>
              <input
                className="flex p-3 border rounded-lg hover:border-blue-500"
                placeholder="Password"
                type="password"
              ></input>
            </div>
            <button className="flex justify-center bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
              Log In
            </button>
          </form>
          <div className="flex gap-1 justify-center text-xs">
            <p>Don't have an account? </p>
            <a href="" className="text-blue-500 hover:text-blue-400">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Login;

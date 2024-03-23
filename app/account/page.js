"use client";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { useEffect } from "react";
import Link from "next/link";

function Auth() {
  const [isLoading, setIsLoading] = useState(true);

  const [auth, setAuth] = useState(0);
  const [user, setUser] = useState({
    username: "",
    uid: "",
    progress: 0,
    isPaid: 0,
    email: "",
  });

  useEffect(() => {
    setUser({
      username: localStorage.getItem("username"),
      uid: localStorage.getItem("userId"),
      progress: localStorage.getItem("progress"),
      isPaid: localStorage.getItem("isPaid"),
      email: localStorage.getItem("email"),
    });
    setIsLoading(false);
  }, []);
  return (
    <div className="bg-gray-950 px-8 py-44 min-h-screen flex items-center">
      {isLoading && <p className="text-xl my-8 mx-8 ">Loading . . . </p>}
      {!isLoading && (
        <div className="w-full">
          {" "}
          {!user.username && !user.uid && (
            <h1 className="text-4xl poppins text-white text-center font-bold">
              Choose the method
            </h1>
          )}
          <div className="flex items-center justify-between mx-auto mb-8">
            {!user.username && !user.uid && (
              <div className="w-5/12 mx-auto gap-4 flex  items-center justify-center mt-8">
                <p
                  className={
                    auth == 0
                      ? "bg-white text-gray-900 px-4 py-1 font-bold cursor-pointer rounded-md"
                      : "bg-green-200/20 text-gray-900 px-4 py-1 font-bold cursor-pointer rounded-md"
                  }
                  onClick={() => {
                    setAuth(0);
                  }}
                >
                  Login
                </p>
                <h1
                  className={
                    auth == 0
                      ? "bg-green-300/20 text-gray-900 px-4 py-1 font-bold cursor-pointer rounded-md"
                      : "bg-white text-gray-900 px-4 py-1 font-bold cursor-pointer rounded-md"
                  }
                  onClick={() => {
                    setAuth(1);
                  }}
                >
                  Register
                </h1>
              </div>
            )}
          </div>
          {user.username && user.uid && (
            <div className="poppins p-8 bg-gray-50/10 rounded-md  md:w-1/2 mx-auto flex md:flex-row gap-8 flex-col items-start justify-between">
              <div className="md:w-5/12">
                <p className="text-white text-2xl w-full text-left font-semibold inline-block">
                  User information
                </p>
                <div className="grid grid-cols-1 p-4 bg-white/20 rounded-sm mt-4 text-white text-sm poppins">
                  <p className="border-t-2 border-gray-950/50 py-2 gap-2 flex items-center">
                    <div className="w-full text-center font-semibold">
                      {user.username}
                    </div>
                  </p>
                </div>
                <button
                  className="mt-8 hidden md:block hover:scale-105 transition-all bg-red-400 px-4 py-2 rounded-md  text-sm font-semibold"
                  onClick={() => {
                    localStorage.clear();
                    setUser({ username: "", uid: "" });
                    window.location.reload();
                  }}
                >
                  Log out
                </button>
              </div>
              <div className="md:w-4/12 w-full text-white">
                <p className="poppins mb-2 text-xs">Current progress</p>
                <Link
                  href="/course"
                  className="p-2 w-full border-2 border-white/50 bg-green-300 rounded-full flex items-center justify-center"
                >
                  <p className="text-xs poppins font-bold text-gray-950">
                    {user.progress} / 36 Completed
                  </p>
                </Link>
                <button
                  className="mt-8 md:hidden text-gray-950 bg-red-400 px-4 py-2 rounded-md font-semibold"
                  onClick={() => {
                    localStorage.clear();
                    setUser({ username: "", uid: "" });
                  }}
                >
                  Log out
                </button>
              </div>
            </div>
          )}
          {!user.username && !user.uid && auth == 0 && <Login />}
          {!user.username && !user.uid && auth == 1 && <Register />}
        </div>
      )}
    </div>
  );
}

export default Auth;

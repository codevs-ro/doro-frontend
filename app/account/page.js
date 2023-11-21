"use client";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { useEffect } from "react";

function Auth() {
  const [isLoading, setIsLoading] = useState(true);

  const [auth, setAuth] = useState(0);
  const [user, setUser] = useState({ username: "", uid: "" });

  useEffect(() => {
    setUser({
      username: localStorage.getItem("username"),
      uid: localStorage.getItem("userId"),
    });
    setIsLoading(false);
  }, []);
  return (
    <div className="bg-gray-900 p-20 h-screen">
      {isLoading && <p className="text-xl my-8 mx-8 ">Loading . . . </p>}
      {!isLoading && (
        <div>
          {" "}
          <div className="flex items-center justify-between w-3/12 mx-auto mb-8">
            {!user.username && !user.uid && (
              <div className="w-full flex items-center justify-between mt-8">
                <h1
                  className={
                    auth == 0
                      ? "bg-fuchsia-200/80 text-gray-900 px-4 py-1 font-bold cursor-pointer rounded-md"
                      : "bg-fuchsia-200/20 text-gray-900 px-4 py-1 font-bold cursor-pointer rounded-md"
                  }
                  onClick={() => {
                    setAuth(0);
                  }}
                >
                  Login
                </h1>
                <h1
                  className={
                    auth == 0
                      ? "bg-fuchsia-600/20 text-gray-900 px-4 py-1 font-bold cursor-pointer rounded-md"
                      : "bg-fuchsia-600/80 text-gray-900 px-4 py-1 font-bold cursor-pointer rounded-md"
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
            <div className="bg-purple-300 p-8 w-1/2 mx-auto flex flex-col items-center ">
              <p className="text-gray-950 w-full text-center font-bold">
                Logged in as{" "}
                <span className="text-green-300">{user.username}</span>
              </p>
              <button
                className="mt-8 bg-red-400 px-4 py-2 rounded-md font-semibold"
                onClick={() => {
                  localStorage.clear();
                  setUser({ username: "", uid: "" });
                }}
              >
                Log out
              </button>
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

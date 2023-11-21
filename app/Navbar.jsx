"use client";

import { useState, useEffect } from "react";

function Navbar() {
  const [user, setUser] = useState({ username: "", uid: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    setUser({
      username: localStorage.getItem("username"),
      uid: localStorage.getItem("userId"),
    });
    setIsLoading(false);
  }, []);
  return (
    <nav className="bg-gray-200 p-4 fixed top-0 w-full flex items-center justify-between">
      <a
        href="/"
        className="font-bold font-sans py-2 px-4 text-xl flex items-center justify-start gap-1 text-gray-950"
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-green-500 mr-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.876.517A1 1 0 0 0 17 0H3a1 1 0 0 0-.871.508C1.63 1.393 0 5.385 0 6.75a3.236 3.236 0 0 0 1 2.336V19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9.044a3.242 3.242 0 0 0 1-2.294c0-1.283-1.626-5.33-2.124-6.233ZM15.5 14.7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1-.8-.8v-2.4a.8.8 0 0 1 .8-.8h2.4a.8.8 0 0 1 .8.8v2.4ZM16.75 8a1.252 1.252 0 0 1-1.25-1.25 1 1 0 0 0-2 0 1.25 1.25 0 0 1-2.5 0 1 1 0 0 0-2 0 1.25 1.25 0 0 1-2.5 0 1 1 0 0 0-2 0A1.252 1.252 0 0 1 3.25 8 1.266 1.266 0 0 1 2 6.75C2.306 5.1 2.841 3.501 3.591 2H16.4A19.015 19.015 0 0 1 18 6.75 1.337 1.337 0 0 1 16.75 8Z" />
        </svg>
        Doro Online
      </a>
      <div className="w-5/12 flex items-center justify-between">
        <a href="/course" className="text-gray-950">
          Course
        </a>
      </div>
      <div>
        {isLoading && (
          <p className="w-full text-center text-xs text-gray-950/20">
            Loading . . .{" "}
          </p>
        )}
        {!isLoading && (
          <div>
            {user.username && user.uid && (
              <div
                className="bg-red-300 cursor-pointer relative py-2 text-sm px-4 font-semibold rounded-sm flex items-center justify-start"
                onClick={() => setShown(!shown)}
              >
                <svg
                  className="w-4 h-4 inline-block text-gray-800 mr-2 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 14 18"
                >
                  <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                {user.username}
                {shown && (
                  <div className="py-2 px-4 text-xs flex flex-col gap-2 bg-red-300 border-2 border-red-800  rounded-x-md rounded-b-md absolute   w-full top-8 left-0">
                    <a href="/account">Log out</a>
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a className="/terms-of-use">Terms of use</a>
                  </div>
                )}
              </div>
            )}
            {!user.username && !user.uid && (
              <a
                href="/account"
                className="bg-red-200 text-gray-950 font-sans py-2 px-4 font-bold rounded-md"
              >
                Authenticate
              </a>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

"use client";

import { stringify } from "postcss";
import { useState, useEffect } from "react";

function Navbar() {
  const [user, setUser] = useState({ id: "", name: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    setUser({
      id: localStorage.getItem("userId"),
      name: localStorage.getItem("username"),
      isPaid: localStorage.getItem("isPaid"),
    });
    setIsLoading(false);
  }, []);
  console.log(user);
  const handlePayment = async () => {
    try {
      const response = await fetch(
        "https://dorobantu-backend.vercel.app/api/v1/create-checkout-session ",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            id: user.id,
            name: user.name,
            isPaid: user.isPaid,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        window.location.href = data.url;
      } else {
        console.error("Error in creating the session");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };
  return (
    <nav className="bg-gray-950 border-b  border-white/20 px-2 md:px-16 lg:px-32 xl:px-36 2xl:px-96 py-4 fixed top-0 w-full flex items-center justify-between">
      <a
        href="/"
        className="poppins text-green-300  font-bold font-sans py-2 px-4 text-sm md:text-xl flex items-center justify-start gap-1 "
      >
        successful-mind.com
      </a>
      {!isLoading && user.isPaid === "true" && (
        <div className="w-5/12 text-white  items-center hidden md:block justify-between">
          <a href="/course">Course</a>
        </div>
      )}
      <div className="flex items-center justify-between">
        {isLoading && (
          <p className="w-full text-center text-xs text-gray-950/20">
            Loading . . .{" "}
          </p>
        )}
        {!isLoading && (
          <div>
            {user.name && user.id && (
              <div
                className=" cursor-pointer relative py-2 text-sm px-4 text-gray-50 font-semibold rounded-sm flex items-center justify-start"
                onClick={() => setShown(!shown)}
              >
                <svg
                  className="w-4 h-4 mr-1 text-gray-800 dark:text-blue-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 21 21"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"
                  />
                </svg>
                {user.name}
                {shown && (
                  <div className="py-2 px-4 text-xs text-gray-950 flex flex-col gap-4 bg-gray-100 border-4 border-gray-400  rounded-md rounded-b-md absolute   w-full top-8 left-0">
                    {user.isPaid === "true" && (
                      <a href="/course" className="md:hidden block">
                        Course
                      </a>
                    )}
                    {user.isPaid === "false" && (
                      <button
                        onClick={handlePayment}
                        className="md:hidden bg-green-300  p-1 text-center rounded-md block"
                      >
                        Buy Course
                      </button>
                    )}
                    <a href="/account">Log out</a>
                    {/* <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-of-use">Terms of use</a> */}
                  </div>
                )}
              </div>
            )}
            {!user.name && !user.id && (
              <a
                href="/account"
                className="border-2 text-xs border-green-300 poppins text-white font-sans py-2 px-4 font-bold rounded-md"
              >
                Register / Login
              </a>
            )}
          </div>
        )}
        {user.isPaid === "false" && (
          <button
            className="hidden md:block py-2 px-4 ml-2 text-sm font-semibold text-gray-950 rounded-md poppins  bg-green-300"
            onClick={handlePayment}
          >
            Buy the course
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

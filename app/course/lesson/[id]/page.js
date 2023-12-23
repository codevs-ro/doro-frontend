// Example of using useRouter in a Next.js functional component
"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LessonPage = () => {
  const [user, setUser] = useState({ id: "", name: "" });
  const [lesson, setLesson] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const idPath = usePathname();

  function generateRandomKey() {
    return Math.floor(Math.random() * 1000000); // Change the range as needed
  }
  useEffect(() => {
    // Get user details from localStorage
    const storedUserId = localStorage.getItem("userId");
    const storedUsername = localStorage.getItem("username");

    // Update user state with values from localStorage
    setUser({
      id: storedUserId,
      name: storedUsername,
    });
  }, []);

  const fetchData = async (name, id) => {
    try {
      const url = `https://dorobantu-backend.vercel.app/api/v1${idPath}`; // Replace with your API endpoint

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          id: id,
          name: name,
          // Add other headers as needed
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json().then((data) => setLesson(data));
      // Handle the data received from the server
    } catch (error) {
      // Handle fetch errors
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    if (idPath != null && user.name && user.id) {
      const id = user.id;
      const name = user.name;
      try {
        fetchData(name, id);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching lessons:", error);
        setLoading(false);
      }
    }
  }, [user]);
  // Render conten  t based on the fetched data
  return (
    <div className=" py-36 px-4 bg-gray-950">
      {!lesson[0] && loading && <p>Loading ...</p>}
      {lesson[0] && (
        <div className="md:w-5/12 flex flex-col mx-auto gap-8  ">
          <h1 className="font-bold flex items-start poppins text-2xl text-white">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-green-300 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            {lesson[0].content.title}
          </h1>
          <div className="flex flex-col  items-start gap-12"></div>
          {lesson[0].content.parts.map((item) => {
            return (
              <p
                className="text-white/80 poppins text-sm font-normal"
                key={generateRandomKey()}
              >
                {item}
              </p>
            );
          })}
          <button className="bg-green-300  mt-8 p-2 poppins font-semibold rounded-md">
            Complete Lesson
          </button>
          <div className="mt-8 bg-white/80 p-6  rounded-md text-gray-950">
            <h1 className="poppins  text-3xl">Any misunderstandings?</h1>
            <p className="mt-4 poppins text-sm">
              Fill in your email address and we will get back to you shortly!
            </p>
            <div className="flex items-center justify-between mt-4">
              <input
                type="email"
                placeholder="your-email@example.com"
                className="placeholder:text-sm placeholder:text-white/50 w-8/12 bg-gray-950/20  rounded-md px-4 py-1 border-2 border-gray-950/30"
              ></input>
              <button className="text-xs font-bold px-8 py-2 poppins  ml-2   bg-green-300 rounded-md">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonPage;

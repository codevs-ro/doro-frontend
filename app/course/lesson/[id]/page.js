"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LessonPage = () => {
  const [user, setUser] = useState({ id: "", name: "", num: "" });
  const [lesson, setLesson] = useState([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("");
  const router = useRouter();
  const idPath = usePathname();

  function generateRandomKey() {
    return Math.floor(Math.random() * 1000000); // Change the range as needed
  }
  useEffect(() => {
    // Get user details from localStorage
    const storedUserId = localStorage.getItem("userId");
    const storedUsername = localStorage.getItem("username");
    const storedNum = localStorage.getItem("progress");

    // Update user state with values from localStorage
    setUser({
      id: storedUserId,
      name: storedUsername,
      num: storedNum,
    });
  }, []);
  useEffect(() => {
    if (user.num == 36) {
      setLocation("https://doro-frontend-ten.vercel.app/completed");
    } else
      setLocation(
        `https://doro-frontend-ten.vercel.app/course/lesson/${
          Number(user.num) + Number(2)
        }`
      );
  }, [user.num]);
  console.log(location);
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

      const data = await response.json().then((data) => {
        setLesson(data);
      });
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

  const updateProgress = async () => {
    const number = lesson[0].id;
    try {
      const response = await fetch(
        "https://dorobantu-backend.vercel.app/api/v1/update-progress",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            id: user.id,
            name: user.name,
          },
          body: JSON.stringify({
            // Stringify the object
            id: user.id,
            number: number,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
        console.log(response);
      }
      const data = await response.json(); // Removed .then(console.log(data))
      console.log(data); // Log the response data here
      localStorage.setItem("progress", number);
      window.location.href = location;
    } catch (err) {
      console.log(err);
    }
  };
  if (lesson[0])
    return (
      <div className=" py-36 px-4 bg-gray-950">
        {lesson[0] && (
          <div className="md:w-5/12 flex flex-col mx-auto gap-8  ">
            <h1 className="font-bold flex items-start poppins text-2xl text-white">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-green-300 mr-2"
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
            {user.num <= lesson[0].id && (
              <button
                className="bg-green-300  mt-8 p-2 poppins font-semibold rounded-md"
                onClick={updateProgress}
              >
                Complete Lesson
              </button>
            )}
            {user.num > lesson[0].id && (
              <div className="bg-green-300  text-center mt-8 p-2 poppins font-semibold rounded-md">
                <svg
                  className="w-4 h-4 text-gray-800 inline-block mr-2 dark:text-gray-950"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
                </svg>{" "}
                Completed
              </div>
            )}
            <div className="mt-8 bg-white/80 p-6  rounded-md text-gray-950">
              <h1 className="poppins  text-3xl">Any misunderstandings?</h1>
              <p className="mt-4 poppins text-sm mb-4">
                Ask us any question related to the course and we will get back
                to you shortly!
              </p>
              <a
                className="text-xs font-bold px-8 py-2 poppins  bg-green-300 rounded-md"
                href="mailto:email@example.com?subject=Subject%20of%20the%20Email&body=Body%20of%20the%20Email"
              >
                Send an email
              </a>
            </div>
          </div>
        )}
      </div>
    );
  else
    return (
      <div className=" py-36 px-4  bg-gray-950">
        <div className="md:w-5/12  mx-auto h-screen bg-white/10 p-1 animate-pulse"></div>
      </div>
    );
};

export default LessonPage;

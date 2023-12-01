"use client";
import { useEffect, useState } from "react";

const Lesson = (props) => {
  return (
    <a
      className=" p-1 cursor-pointer bg-gray-200 rounded-sm"
      href={`/course/lesson/${props.id}`}
    >
      <h3 className="text-lg font-bold text-gray-950 p-1 ">
        Lesson {props.id}
      </h3>

      <h5 className="text-sm text-gray-950 p-1 ">{props.title}</h5>
    </a>
  );
};

function Course() {
  const [user, setUser] = useState({ id: "", name: "" });
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

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
      const url = "https://dorobantu-backend.vercel.app/api/v1/course"; // Replace with your API endpoint

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

      const data = await response.json().then((data) => setLessons(data));
      // Handle the data received from the server
    } catch (error) {
      // Handle fetch errors
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    if (user.id && user.name) {
      const name = user.name;
      const id = user.id;
      fetchData(name, id);
    }
  }, [user]);

  return (
    <div className=" py-24 bg-gray-900 text-xl flex items-center gap-8 flex-col justify-center text-white">
      <div>
        <p className="text-center font-bold underline underline-offset-4">
          {" "}
          Course Lessons{" "}
        </p>{" "}
      </div>
      <div className="md:w-5/12 grid grid-cols-1 gap-2 p-1">
        {lessons &&
          lessons.map((item) => {
            return (
              <Lesson
                key={item.id}
                id={item.id}
                url={item.id}
                title={item.content.title}
              />
            );
          })}
        {loading && <p className="text-gray-950 text-center">Loading...</p>}
      </div>
    </div>
  );
}

export default Course;

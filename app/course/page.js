"use client";
import { useEffect, useState } from "react";

const Lesson = (props) => {
  return (
    <a
      className=" p-2 cursor-pointer bg-gray-200/50 flex items-center justify-start gap-2 hover:bg-gray-200/80 transition-all rounded-sm"
      href={`/course/lesson/${props.id}`}
    >
      <h5 className="text-2xl w-1/12 h-auto text-center font-bold  text-white/80 poppins">
        {props.id}
      </h5>

      <p className="text-sm text-gray-950 px-4 poppins border-l-2 border-white/80">
        {props.title}
      </p>
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
    <div className="px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96  pt-36 pb-24 bg-gray-950 flex md:flex-row flex-col gap-8 justify-between  text-white">
      <div className="">
        <p className="text-left font-bold text-4xl capitalize">
          {" "}
          Your learning path{" "}
        </p>{" "}
        <div className="md:w-8/12 mt-4">
          <p className="poppins mb-2 text-xs">Current progress</p>
          <div className="p-2 w-full border-2 border-white/50 bg-green-300 rounded-full flex items-center justify-center">
            <p className="text-xs poppins font-bold text-gray-950">100%</p>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 gap-2 p-1">
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

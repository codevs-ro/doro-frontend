"use client";
import { useEffect, useState } from "react";

const Lesson = (props) => {
  return (
    <a
      className=" p-1 cursor-pointer bg-gray-200/50 hover:bg-gray-200/80 transition-all rounded-sm"
      href={`/course/lesson/${props.id}`}
    >
      <h3 className="text-lg font-bold text-white poppins p-1 ">
        Lesson {props.id}
      </h3>

      <h5 className="text-sm text-gray-950 p-1 poppins">{props.title}</h5>
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
    <div className="px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96  pt-36 pb-24 bg-gray-950   text-white">
      <div>
        <p className="text-center font-bold text-4xl ">
          {" "}
          Your learning path is here!{" "}
        </p>{" "}
      </div>
      <div className="md:w-1/2 mx-auto mt-8 grid grid-cols-1 gap-2 p-1">
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

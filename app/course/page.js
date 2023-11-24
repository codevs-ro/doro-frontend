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
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/course")
      .then((data) => data.json())
      .then((data) => {
        setLessons(data);
        setLoading(false);
      });
  }, []);
  console.log(lessons);
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

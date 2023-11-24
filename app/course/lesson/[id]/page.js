// Example of using useRouter in a Next.js functional component
"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LessonPage = () => {
  const [lesson, setLesson] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const id = usePathname();

  if (id != null) {
    useEffect(() => {
      fetch(`http://localhost:5000/api/v1${id}`) // Make sure to add a slash before the id
        .then((response) => response.json())
        .then((data) => {
          // Handle fetched data
          setLesson(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching lessons:", error);
          setLoading(false);
        });
    }, []);
  }

  console.log(lesson);
  // Render conten  t based on the fetched data
  return (
    <div className=" py-36   bg-gray-900">
      {!lesson[0] && loading && <p>Loading ...</p>}
      {lesson[0] && (
        <div className="md:w-1/2 flex flex-col mx-auto gap-8  ">
          <h1 className="font-bold text-2xl text-center underline underline-offset-4">
            {lesson[0].content.title}
          </h1>
          <div className="flex flex-col  items-start gap-12"></div>
          {lesson[0].content.parts.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
      )}
    </div>
  );
};

export default LessonPage;

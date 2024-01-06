"use client";
import { useEffect, useState } from "react";

const Lesson = (props) => {
  return (
    <a
      className={
        props.completed
          ? ` p-2 cursor-pointer bg-green-200/60 flex items-center justify-start gap-2 hover:bg-gray-200/80 transition-all rounded-sm`
          : `p-2 cursor-pointer bg-gray-50/30 flex items-center justify-start gap-2 hover:bg-gray-200/80 transition-all rounded-sm`
      }
      href={props.unlocked ? `/course/lesson/${props.id}` : ""}
    >
      <h5
        className={
          props.unlocked
            ? `text-2xl w-1/12 h-auto text-center font-bold  text-white/80 poppins`
            : `text-2xl w-1/12 h-auto text-center font-bold  text-red-400 poppins`
        }
      >
        {props.id}
      </h5>

      <p
        className={
          props.unlocked
            ? `text-sm text-gray-950 px-4 poppins border-l-2 border-white/80`
            : `text-sm text-red-400  px-4 poppins border-l-2 border-red-400`
        }
      >
        {props.title}
      </p>
      {props.unlocked && !props.completed && (
        <svg
          className="w-5 h-5 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M15.077.019a4.658 4.658 0 0 0-4.083 4.714V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-1.006V4.68a2.624 2.624 0 0 1 2.271-2.67 2.5 2.5 0 0 1 2.729 2.49V8a1 1 0 0 0 2 0V4.5A4.505 4.505 0 0 0 15.077.019ZM9 15.167a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Z" />
        </svg>
      )}

      {!props.unlocked && (
        <svg
          className="w-5 h-5 text-gray-800 dark:text-red-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
        </svg>
      )}
    </a>
  );
};

function Course() {
  const [user, setUser] = useState({ id: "", name: "", progress: 0, num: 0 });
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  // modules states
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);
  const [fourth, setFourth] = useState([]);
  const [fifth, setFifth] = useState([]);
  //shown/hidden for modules
  const [firstShown, setFirstShown] = useState(false);
  const [secondShown, setSecondShown] = useState(false);
  const [thirdShown, setThirdShown] = useState(false);
  const [fourthShown, setFourthShown] = useState(false);
  const [fifthShown, setFifthShown] = useState(false);

  useEffect(() => {
    // Get user details from localStorage
    const storedProgress = localStorage.getItem("progress");
    const storedUserId = localStorage.getItem("userId");
    const storedUsername = localStorage.getItem("username");

    // Update user state with values from localStorage
    setUser({
      id: storedUserId,
      name: storedUsername,
      num: storedProgress,
      progress: Math.floor((Number(storedProgress) / 36) * 100),
    });
    if (user.id && user.name) {
      setLoading(false);
    }
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
        window.location.href = "/";
      }

      const data = await response.json().then((data) => setLessons(data));
      // Handle the data received from the server
    } catch (error) {
      // Handle fetch errors
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    if (user.id !== "" && user.name !== "") {
      const name = user.name;
      const id = user.id;
      fetchData(name, id);
    }
  }, [user]);
  useEffect(() => {
    if (lessons) {
      setFirst(lessons.slice(1, 9));
      setSecond(lessons.slice(9, 15));
      setThird(lessons.slice(15, 22));
      setFourth(lessons.slice(22, 28));
      setFifth(lessons.slice(28, 36));
    }
  }, [lessons]);

  //conditional rendering in functie de requestul pentru lessons
  if (lessons.length > 0) {
    return (
      <div className=" px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96  py-36 bg-gray-950 flex md:flex-row flex-col gap-8 justify-between  text-white">
        <div className="">
          <p className="text-left font-bold text-4xl capitalize">
            {" "}
            Your learning path{" "}
          </p>{" "}
          <div className="md:w-8/12 mt-4">
            <p className="poppins mb-2 text-xs ">Current progress</p>
            <div className="p-2 w-full border-2 border-white/50 bg-green-300 rounded-full flex items-center justify-center">
              <p className="text-xs poppins font-bold text-gray-950">
                {user.progress} %
              </p>
            </div>
            <h1 className="text-2xl font-bold poppins text-white poppins mt-8 border-t-2  pl-2 pt-2 border-white/50">
              Live
            </h1>
            <p className="poppins p-2">
              Every Saturday on the{" "}
              <a
                href="https://youtube.com"
                target="blank"
                className="text-yellow-500 underline underline-offset-2"
              >
                youtube channel
              </a>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2  md:w-1/2">
          {first && (
            <>
              <div
                className="bg-gray-50/30 p-2 cursor-pointer w-full flex items-center justify-center"
                onClick={() => setFirstShown(!firstShown)}
              >
                <h1 className="poppins font-bold text-xl ">Module I</h1>
              </div>

              {firstShown && (
                <div className=" grid grid-cols-1 gap-2 p-1">
                  <Lesson
                    key={1}
                    id={1}
                    completed={user.num >= 1 ? true : false}
                    title={"What Does Success Mean to You?"}
                    unlocked={1 - user.num <= 1 ? true : false}
                  />
                  {first.map((item) => {
                    return (
                      <Lesson
                        key={item.id}
                        id={item.id}
                        completed={user.num >= item.id ? true : false}
                        url={item.id}
                        title={item.content.title}
                        unlocked={item.id - user.num <= 1 ? true : false}
                      />
                    );
                  })}
                </div>
              )}
            </>
          )}
          {second && (
            <>
              <div
                className="bg-gray-50/30 p-2 cursor-pointer w-full flex items-center justify-center"
                onClick={() => setSecondShown(!secondShown)}
              >
                <h1 className="poppins font-bold text-xl w-full text-center">
                  Module II
                </h1>
              </div>

              {secondShown && (
                <div className=" grid grid-cols-1 gap-2 p-1">
                  {second.map((item) => {
                    return (
                      <Lesson
                        key={item.id}
                        id={item.id}
                        completed={user.num >= item.id ? true : false}
                        url={item.id}
                        title={item.content.title}
                        unlocked={item.id - user.num <= 1 ? true : false}
                      />
                    );
                  })}
                </div>
              )}
            </>
          )}
          {third && (
            <>
              <div
                className="bg-gray-50/30 p-2 cursor-pointer w-full flex items-center justify-center"
                onClick={() => setThirdShown(!thirdShown)}
              >
                <h1 className="poppins font-bold text-xl w-full text-center">
                  Module III
                </h1>
              </div>

              {thirdShown && (
                <div className=" grid grid-cols-1 gap-2 p-1">
                  {third.map((item) => {
                    return (
                      <Lesson
                        key={item.id}
                        id={item.id}
                        completed={user.num >= item.id ? true : false}
                        url={item.id}
                        title={item.content.title}
                        unlocked={item.id - user.num <= 1 ? true : false}
                      />
                    );
                  })}
                </div>
              )}
            </>
          )}
          {fourth && (
            <>
              <div
                className="bg-gray-50/30 p-2 cursor-pointer w-full flex items-center justify-center"
                onClick={() => setFourthShown(!fourthShown)}
              >
                <h1 className="poppins font-bold text-xl w-full text-center">
                  Module IV
                </h1>
              </div>

              {fourthShown && (
                <div className=" grid grid-cols-1 gap-2 p-1">
                  {fourth.map((item) => {
                    return (
                      <Lesson
                        key={item.id}
                        id={item.id}
                        completed={user.num >= item.id ? true : false}
                        url={item.id}
                        title={item.content.title}
                        unlocked={item.id - user.num <= 1 ? true : false}
                      />
                    );
                  })}
                </div>
              )}
            </>
          )}
          {fifth && (
            <>
              <div
                className="bg-gray-50/30 p-2 cursor-pointer w-full flex items-center justify-center"
                onClick={() => setFifthShown(!fifthShown)}
              >
                <h1 className="poppins font-bold text-xl w-full text-center">
                  Module V
                </h1>
              </div>

              {fifthShown && (
                <div className=" grid grid-cols-1 gap-2 p-1">
                  {fifth.map((item) => {
                    return (
                      <Lesson
                        key={item.id}
                        id={item.id}
                        completed={user.num >= item.id ? true : false}
                        url={item.id}
                        title={item.content.title}
                        unlocked={item.id - user.num <= 1 ? true : false}
                      />
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96 h-screen pt-36 pb-24 bg-gray-950 flex md:flex-row flex-col gap-8 justify-between  text-white">
        <div className="w-8/12 h-5/12 mx-auto p-2 animate-pulse flex items-center justify-center bg-white/10 rounded-md poppins text-xl"></div>
      </div>
    );
  }
}

export default Course;

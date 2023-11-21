function Course() {
  return (
    <div className="h-screen py-24 bg-gray-900 text-xl flex items-center justify-center text-white">
      <p className="text-center font-bold">
        {" "}
        Course{" "}
        <a
          href="/course/module"
          className="px-2 underline underline-offset-2 bg-green-500/20 text-white"
        >
          Module
        </a>
        <a
          href="/course/module/lesson"
          className="px-2 underline ml-2 underline-offset-2 bg-purple-500/20 text-white"
        >
          Lesson
        </a>
      </p>{" "}
    </div>
  );
}

export default Course;

import Image from "next/image";
import Link from "next/link";
function About() {
  return (
    <>
      <First />
      <Second />
      <Bundle />
    </>
  );
}

function First() {
  return (
    <div className="px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96  py-24 bg-gray-50 text-xl  text-gray-950">
      <div className="w-full flex items-center justify-between  flex-col md:grid md:grid-cols-2 md:gap-y-4">
        <h1 className="text-4xl font-semibold poppins w-11/12">
          Ignite Your Personal Evolution
        </h1>
        <Image
          src="/chart.svg"
          className="md:hidden my-8 w-full"
          width={1280}
          height={1280}
        ></Image>
        <p className="mt-4 font-medium text-sm mb-8">
          Unleash your potential. Embark on a journey of self-discovery and
          growth, where every lesson sparks a realization and every insight
          fuels your evolution. This isn’t just a course; it’s an invitation to
          embrace your best self.
        </p>
        <Image
          src="/chart.svg"
          className="hidden w-9/12 md:block"
          width={1280}
          height={1280}
        ></Image>
        <p className="mt-4 hidden md:block font-medium text-sm mb-8">
          Dive into a curated collection of wisdom and practical tools designed
          to empower your personal growth. <br /> This isn’t about changing who
          you are; it's about revealing the incredible person you've always
          been, waiting to emerge. From professional aspirations to personal
          fulfillment, discover how this course transcends boundaries, nurturing
          every facet of your journey. Take charge, define your narrative, and
          write your story of boundless success.
        </p>
      </div>
    </div>
  );
}
function Second() {
  return (
    <div className="px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96  py-24 bg-gray-950 text-xl  text-gray-50">
      <div className="w-full flex items-center justify-between  flex-col md:grid md:grid-cols-3 md:gap-8 ">
        <h1 className="text-4xl font-semibold poppins w-full">
          Craft Your Unique Success Story
        </h1>
        <Image
          src="/success.svg"
          className="w-full"
          width={1280}
          height={1280}
        ></Image>

        <p className="mt-4 font-medium text-sm mb-8">
          Seize the tools to carve your own path to success. Each module is a
          stepping stone toward a more empowered you. Discover strategies,
          unlock hidden abilities, and redefine what's possible.
        </p>
      </div>
    </div>
  );
}
function Bundle() {
  return (
    <div className="px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96  py-24 bg-gray-950 text-xl flex items-center justify-between text-white">
      <div className="w-full md:flex items-center justify-center hidden">
        <Image
          src="/bundle-img.svg"
          className="w-8/12"
          width={1280}
          height={1280}
          alt="Bundle Image"
        />
      </div>
      <div className="poppins w-full">
        <h1 className="text-4xl font-semibold poppins flex items-center">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-yellow-500 inline-block mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M18.435 7.546A2.32 2.32 0 0 1 17.7 5.77a3.354 3.354 0 0 0-3.47-3.47 2.322 2.322 0 0 1-1.776-.736 3.357 3.357 0 0 0-4.907 0 2.281 2.281 0 0 1-1.776.736 3.414 3.414 0 0 0-2.489.981 3.372 3.372 0 0 0-.982 2.49 2.319 2.319 0 0 1-.736 1.775 3.36 3.36 0 0 0 0 4.908A2.317 2.317 0 0 1 2.3 14.23a3.356 3.356 0 0 0 3.47 3.47 2.318 2.318 0 0 1 1.777.737 3.36 3.36 0 0 0 4.907 0 2.36 2.36 0 0 1 1.776-.737 3.356 3.356 0 0 0 3.469-3.47 2.319 2.319 0 0 1 .736-1.775 3.359 3.359 0 0 0 0-4.908ZM8.5 5.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3 9.063a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2.207-6.856-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          Best deal
        </h1>
        <p className="mt-4 font-medium text-sm mb-8">
          Get the course now for a maximum return on investment!
        </p>
        <div className="w-full flex md:hidden items-center justify-between md:justify-center ">
          <Image
            src="/bundle-img.svg"
            className="w-6/12 "
            alt="Bundle Image"
            width={1280}
            height={1280}
          />
          <div className="my-8 p-2 gap-2  flex flex-col">
            <h4 className="text-xs poppins font-semibold text-white flex items-center">
              <svg
                className="w-4 h-4 inline-block mr-2 text-gray-800 dark:text-yellow-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              Self-Awareness
            </h4>
            <h4 className="text-xs poppins font-semibold text-white flex items-center">
              <svg
                className="w-4 h-4 inline-block mr-2 text-gray-800 dark:text-yellow-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              Skill Enhancement
            </h4>
            <h4 className="text-xs poppins font-semibold text-white flex items-center">
              <svg
                className="w-4 h-4 inline-block mr-2 text-gray-800 dark:text-yellow-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              Increased Confidence
            </h4>
            <h4 className="text-xs poppins font-semibold text-white flex items-center">
              <svg
                className="w-4 h-4 inline-block mr-2 text-gray-800 dark:text-yellow-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              Improved Relationships
            </h4>
            <h4 className="text-xs poppins font-semibold text-white flex items-center">
              <svg
                className="w-4 h-4 inline-block mr-2 text-gray-800 dark:text-yellow-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              Goal Achievement
            </h4>
          </div>
        </div>
        {/* Benefits */}
        <div className="my-8 border-l-2  hidden border-green-300 p-4 gap-2  md:flex flex-col">
          <h4 className="text-md poppins font-semibold text-white flex items-center">
            <svg
              className="w-4 h-4 inline-block mr-2 text-gray-800 dark:text-yellow-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            Self-Awareness
          </h4>
          <h4 className="text-md poppins font-semibold text-white flex items-center">
            <svg
              className="w-4 h-4 inline-block mr-2 text-gray-800 dark:text-yellow-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            Improved Relationships
          </h4>
          <h4 className="text-md poppins font-semibold text-white flex items-center">
            <svg
              className="w-4 h-4 inline-block mr-2 text-gray-800 dark:text-yellow-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            Skill Enhancement
          </h4>
          <h4 className="text-md poppins font-semibold text-white flex items-center">
            <svg
              className="w-4 h-4 inline-block mr-2 text-gray-800 dark:text-yellow-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            Increased Confidence
          </h4>
          <h4 className="text-md poppins font-semibold text-white flex items-center">
            <svg
              className="w-4 h-4 inline-block mr-2 text-gray-800 dark:text-yellow-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            Goal Achievement
          </h4>
        </div>
        <div className="flex items-center gap-2 justify-start">
          <Link
            href="/account"
            className="text-sm rounded-sm   text-center block md:inline-block md:text-left text-gray-950 font-semibold bg-green-300 px-6 py-2"
          >
            <svg
              className="w-4 h-4 text-gray-800 dark:text-gray-950 inline-block mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
            </svg>
            Get the course
          </Link>
          <p className="my-4 font-bold text-2xl flex items-center justify-start text-green-300 ">
            <span className="line-through text-sm  text-red-400 mr-2 ">
              €250
            </span>
            €99
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

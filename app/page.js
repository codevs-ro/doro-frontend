import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Find your own way today | Successful Mind",
  description:
    "Learn how to take controll over your life and achieve your goals with the speed of light. ",
};

const Hero = () => {
  return (
    <div className="min-h-screen px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96  pt-36 pb-24 bg-gray-950 text-xl flex md:flex-row flex-col items-center justify-between text-white">
      <div className="poppins w-full">
        <h1 className="text-4xl font-semibold poppins slide-in">
          Find your own way today!
        </h1>
        <p className="mt-4  text-sm mb-8 slide-in">
          Learn how to take controll over your life and achieve your goals with
          the speed of light.
        </p>
        <Link
          href="/about"
          className="text-sm slide-in hover:scale-105 transition-all hover:bg-green-400 hidden md:inline-block rounded-sm text-gray-950 font-semibold bg-green-300 px-6 py-2"
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
          See more
        </Link>
        <div className="w-full md:hidden">
          <Image
            className="w-full z-0"
            src="/hero-img.svg"
            width={3600}
            height={3600}
            alt="Hero Image"
            priority
          />
        </div>
        <Link
          href="/about"
          className="text-sm text-center md:hidden mt-6 block rounded-sm text-gray-950 font-semibold bg-green-300 px-6 py-2"
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
          See more
        </Link>
        <div className="grid gap-4 md:gap-2 grid-cols-5 md:mt-8 mt-2 w-3/12 slide-left">
          <svg
            className="w-4 h-4 text-gray-800 dark:text-yellow-500 mt-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-gray-800 dark:text-yellow-500 mt-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-gray-800 dark:text-yellow-500 mt-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-gray-800 dark:text-yellow-500 mt-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-gray-800 dark:text-yellow-500 mt-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
        <p className="text-xs mt-1 text-white/50 slide-left  ">
          Rated by{" "}
          <span className="font-bold underline underline-offset-2">
            our students
          </span>
        </p>
      </div>
      <div className="w-full hidden md:flex items-center justify-end">
        <Image
          className="w-8/12 slide-right z-0"
          src="/hero-img.svg"
          width={3600}
          height={3600}
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

function AboutCourse() {
  return (
    <div className="px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96  py-24 bg-gray-50 text-xl flex flex-col text-white">
      <div className="poppins text-center text-gray-950">
        <div className="pt-1 mx-auto mb-4 rounded-full bg-yellow-500 w-1/12"></div>
        <h1 className="text-4xl font-semibold poppins slide-in">
          Why choose this Guide ?
        </h1>
        <div className="w-full md:grid md:grid-cols-3 flex flex-col gap-8 mx-auto mt-8">
          <p className="mt-4 font-medium  slide-left text-sm mb-4 md:w-10/12 md:text-left ">
            This Guide is the epitome of personal development, designed by
            leaders for your success.
          </p>
          <Image
            src="/about-img.svg"
            className="w-full"
            width={3600}
            height={3600}
            alt="About The Course Illustration"
            priority
          />
          <p className="mt-4 md:w-10/12 slide-right md:text-right font-medium text-sm md:mb-4  ">
            Trusted and effective, this guide ensures personal growth. Join
            achievers and begin your transformation today.
          </p>
        </div>
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
          width={3600}
          height={3600}
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
          Get the gudie now for a maximum return on investment!
        </p>
        <div className="w-full flex md:hidden items-center justify-between md:justify-center ">
          <Image
            src="/bundle-img.svg"
            className="w-6/12 "
            alt="Bundle Image"
            width={3600}
            height={3600}
            priority
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
        <Link
          href="/about"
          className=" hover:scale-105 transition-all hover:bg-green-400 text-sm rounded-sm  mt-4 text-center block md:inline-block md:text-left text-gray-950 font-semibold bg-green-300 px-6 py-2"
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
          More info
        </Link>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="poppins px-8 md:px-16 lg:px-32 xl:px-36 2xl:px-96  py-24 bg-gray-50 text-xl flex flex-col items-center gap-4 text-gray-950">
      <h1 className="text-4xl">Let's talk about it</h1>
      <p className=" font-medium text-sm md:w-5/12 text-center mt-4">
        Fill in your email address and we will contact you and discuss any issue
        regarding your purchase or any additional interest you may have.
      </p>

      <a
        className=" hover:scale-105 transition-all hover:bg-green-400 text-sm mt-4 px-8 py-2 poppins  bg-green-300 rounded-sm"
        href="mailto:email@example.com?subject=Subject%20of%20the%20Email&body=Body%20of%20the%20Email"
      >
        <svg
          className="w-6 h-6 text-gray-800 inline-block mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z"
            clip-rule="evenodd"
          />
        </svg>
        Send an email
      </a>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <Hero />
      <AboutCourse />
      <Bundle />
      <Contact />
    </>
  );
}

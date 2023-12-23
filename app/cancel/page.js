import Image from "next/image";
import Link from "next/link";
function Cancel() {
  return (
    <div className="px-8 h-screen md:px-16 lg:px-32 xl:px-36 2xl:px-96  py-36 bg-gray-950 text-xl flex flex-col md:flex-row items-center justify-between text-white">
      <div>
        <h1 className="poppins text-4xl font-bold text-center md:text-left text-white">
          Purchase Cancelled
        </h1>
        <Image
          src="/cancel.svg"
          alt="Cancel Illustration"
          width={400}
          height={400}
          className="mt-8 md:hidden"
        />
        <Link
          href="/course"
          className="poppins bg-green-300 block md:inline-block w-8/12 mx-auto px-6 py-2 rounded-md text-center  mt-8 text-gray-950 text-sm font-bold"
        >
          Take me home
          <svg
            className="w-4 h-4 text-gray-800 dark:text-gray-950 inline-block ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 15"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3"
            />
          </svg>
        </Link>
      </div>
      <div className="w-8/12 flex items-center justify-end">
        <Image
          src="/cancel.svg"
          alt="Cancel Illustration"
          width={400}
          height={400}
          className="hidden md:block"
        />
      </div>
    </div>
  );
}

export default Cancel;

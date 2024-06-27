import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <footer className="px-6 md:px-16 border-t border-white/20 lg:px-32 xl:px-36 2xl:px-96 py-12 gap-8 md:flex-row flex-col flex items-start justify-start bg-gray-950">
      <a
        href="/"
        className="py-2  font-bold font-sans w-full text-xl poppins flex items-center justify-start text-green-300"
      >
        successful-mind.com
      </a>

      <div className="grid grid-cols-1 md:grid-cols-3 items-start justify-start w-full text-sm gap-8 md:gap-12 text-white poppins">
        <div className="grid grid-cols-1 items-center text-center gap-4">
          <h3 className="text-lg font-medium">Website Map</h3>
          <Link
            href="/"
            className="hover:underline hover:text-yellow-300 transition-all"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:underline hover:text-yellow-300 transition-all"
          >
            About
          </Link>
        </div>
        <div className="grid grid-cols-1 items-center text-center gap-4">
          <h3 className="text-lg font-medium">Social Media</h3>
          <Link
            href="/"
            className="hover:underline hover:text-yellow-300 transition-all"
          >
            LinkedIN
          </Link>
          <Link
            href="/about"
            className="hover:underline hover:text-yellow-300 transition-all"
          >
            Instagram
          </Link>
        </div>
        <div className="grid grid-cols-1 items-center text-center gap-4">
          <h3 className="text-lg font-medium">Contact us</h3>
          <Link
            href="mailto:motivational1money1@gmail.com"
            className="hover:underline hover:text-yellow-300 transition-all"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

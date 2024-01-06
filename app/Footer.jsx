function Footer() {
  return (
    <footer className="px-6 md:px-16 border-t border-white/20 lg:px-32 xl:px-36 2xl:px-96 py-12 gap-8 md:flex-row flex-col flex items-start justify-start bg-gray-950">
      <a
        href="/"
        className="py-2  font-bold font-sans w-full text-xl poppins flex items-center justify-start text-green-300"
      >
        successful-mind.com
      </a>
      <div className="grid grid-cols-1 md:grid-cols-4 w-full text-sm gap-8 md:gap-12 text-white poppins">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-use">Terms of use</a>
      </div>
    </footer>
  );
}

export default Footer;

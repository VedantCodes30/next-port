export default function Footer() {
  return (
    <footer className="backdrop-blur-md bg-white/10 text-white py-4 px-6  mt-auto w-full p-2">
      <div className="p-2 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm">
        <p>
          &copy; {new Date().getFullYear()} VedantCodes. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a
            href="https://github.com/vedantcodes30"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

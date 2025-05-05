export default function Header() {
  const link = ["Home", "Skills", "About", "Contact"];

  return (
    <header className="fixed w-[100dvw] z-50 backdrop-blur-lg rounded-2xl ">
      <nav className=" text-white">
        <ul className="flex gap-2 justify-center p-4  items-center text-black text-center">
          {link.map((text) => (
            <li key={text} className="px-2 py-2">
              <a href={`#${text.toLowerCase()}`} className="hover:underline">
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

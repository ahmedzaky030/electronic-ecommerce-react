import ChipLogo from '../assets/chip.webp';

export function Header() {
  const pages = ["Home", "Store", "Service", "Projects", "Contact Us", "Login"];
  return (
    <header className="flex *:flex-row  border-b-black">
      <div className="flex-shrink">
        <img src={ChipLogo} alt="Integrated Circuit" className="w-24 h-24" />
      </div>
      <nav className="flex-grow">
        <ul className="flex flex-row items-center justify-center">
          { pages.map((v) => (
            <li
              className="box-border mx-4 my-2 hover:border-b-2 border-solid border-gray-500
                         p-2 cursor-pointer hover:border-red-500"
            >{v}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

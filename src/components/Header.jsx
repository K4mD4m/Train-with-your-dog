import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex flex-wrap justify-between items-center">
        <h1 className="text-2xl font-bold">Dog Training Journal</h1>
        <ul className="flex space-x-4 mt-2 sm:mt-0">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/examples" className="hover:underline">
              Examples
            </Link>
          </li>
          <li>
            <Link to="/inspiration" className="hover:underline">
              Inspiration
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
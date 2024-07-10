import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">China Info</div>
      <nav className="flex space-x-4">
        <NavLink to="/" className="hover:underline">Home</NavLink>
        <NavLink to="/culture" className="hover:underline">Culture</NavLink>
        <NavLink to="/history" className="hover:underline">History</NavLink>
        <NavLink to="/tourism" className="hover:underline">Tourism</NavLink>
        <NavLink to="/contact" className="hover:underline">Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;
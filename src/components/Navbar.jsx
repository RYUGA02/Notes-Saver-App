import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full max-w-4xl mx-auto mb-6 px-4">
      <div className="flex gap-6 text-lg font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-purple-400"
              : "text-zinc-400 hover:text-purple-300"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/pastes"
          className={({ isActive }) =>
            isActive
              ? "text-purple-400"
              : "text-zinc-400 hover:text-purple-300"
          }
        >
          Paste
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

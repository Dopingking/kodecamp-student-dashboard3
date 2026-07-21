// Styling Method: Tailwind CSS

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `block px-4 py-2 rounded-lg transition-all duration-300 ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-slate-700 hover:bg-slate-100"
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-xl font-bold text-blue-600">
          KodeCamp
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>

          <NavLink to="/enroll" className={navClass}>
            Enroll
          </NavLink>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-2">

          <NavLink
            to="/"
            end
            className={navClass}
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/enroll"
            className={navClass}
            onClick={() => setOpen(false)}
          >
            Enroll
          </NavLink>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  // Requirement: Navbar shows on dashboard only (meaning when authenticated)
  if (!isAuthenticated) return null;

  return (
    <nav className="bg-slate-800 border-b border-slate-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-indigo-500 tracking-tight">CybrMoon</span>
          </div>
          <div>
            <button
              onClick={logout}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

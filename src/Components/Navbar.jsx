import React from "react";

function Navbar() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-600 text-white px-6 py-3 flex justify-between items-center w-full h-[10vh]">
      <h1 className="text-xl font-bold">TODO List</h1>

      <p className="italic text-sm sm:text-base">"Manage your tasks, shape your day!"</p>
    </div>
  );
}

export default Navbar;

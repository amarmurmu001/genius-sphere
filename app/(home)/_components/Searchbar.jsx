import React from "react";
import { Search } from "lucide-react";

const Searchbar = () => {
  return (
    <div className="flex items-center gap-3 border p-2 rounded-md bg-gray-50 ">
      <Search height={20}/>
      <input className="bg-transparent outline-none" type="search" placeholder="Search Course"  />
    </div>
  );
};

export default Searchbar;

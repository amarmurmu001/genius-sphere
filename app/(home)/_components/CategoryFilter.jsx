"use client";
import React, { useState } from "react";

function CategoryFilter() {
  const filterOptions = [
    {
      id: 1,
      name: "All",
      value: "all",
    },
    {
      id: 2,
      name: "React js",
      value: "reactjs",
    },
    {
      id: 3,
      name: "Next js",
      value: "nextjs",
    },
    {
      id: 4,
      name: "Django",
      value: "django",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex gap-5 items-center p-5">
      {filterOptions.map((subject, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`${activeIndex == index ? "bg-gray-100" : null} border p-1 
        text-sm px-4 rounded-md hover:border-gray-950 font-semibold`}
        >
          <h2>{subject.name}</h2>
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

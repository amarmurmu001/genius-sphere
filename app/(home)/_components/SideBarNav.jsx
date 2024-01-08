'use client'
import React, { useState } from "react";
import * as LucideIcons from "lucide-react";

const SideBarNav = () => {
  const menuList = [
    {
      id: 1,
      name: "Browse",
      icon: "Search",
      path: "/browse",
    },
    {
      id: 2,
      name: "Dashboard",
      icon: "Layout",
      path: "/dashboard",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: "Shield",
      path: "/upgrade",
    },
    {
      id: 4,
      name: "Newsletter",
      icon: "Mail",
      path: "/newsletter",
    },
  ];
  const [activeIndex, setActiveIndex] = useState();

  const getIconComponent = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    if (IconComponent) {
      return <IconComponent />;
    }
    return null;
  };

  return (
    <div className="h-full bg-white border-r flex flex-col overflow-y-auto shadow-md">
      <h1 className="text-lg font-extrabold border-b p-5 flex justify-center">
        GeniusSphere
      </h1>
      <div className=" flex flex-col">
        {menuList.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className={`flex items-center gap-2 p-4 text-gray-600
          cursor-pointer hover:bg-gray-100 ${
            activeIndex == index ? "bg-gray-100" : null
          } `}
          >
            {getIconComponent(item.icon)}
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarNav;

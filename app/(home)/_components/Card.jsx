import React from "react";
import Link from "next/link";
const Card = (course) => {
  return (
    <Link href={"browse/course-preview/" + course.id}>
      <div
        key={course.key}
        className="rounded-lg w-[240px] overflow-hidden h-auto border shadow-md border-b-gray-200"
      >
        <img
          className="w-[240px] h-[135px] object-cover "
          src={course.image}
          alt=""
        />
        <div className="h-auto p-3">
          <h2 className="font-semibold">{course.title}</h2>
          <p className="flex text-sm text-gray-500 justify-between">
            {course.description} <span>{course.duration}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;

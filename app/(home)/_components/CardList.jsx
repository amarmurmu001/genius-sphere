import React, { useEffect, useState } from "react";
import Card from "./Card";
import {getCourseLists} from "@/app/_api";

const CardList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseLists().then((res) => {
      console.log(res.courseLists)
      setCourses(res.courseLists);
    });
  };
  return (
    <div className="flex flex-row flex-wrap gap-5 p-5">
      {courses.map((course, index) => (
        <Card
        id={course.id}
        key={index} 
        title={course.name}
        description={course.description}
        image={course.banner.url}
        />
      ))}
    </div>
  );
};

export default CardList;

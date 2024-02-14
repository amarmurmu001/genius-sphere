"use client";
import { getCourseById } from "@/app/_api";
import React, { useEffect, useState } from "react";

const CoursePreview = ({ params }) => {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    params.courseId ? getCourse(params.courseId) : null;
  }, []);

  const getCourse = () => {
    getCourseById(params.courseId).then((resp) => {
      setCourseData(resp.courseList);
    });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-2">
        
      </div>
      <div>Enroll</div>
    </div>
  );
};

export default CoursePreview;

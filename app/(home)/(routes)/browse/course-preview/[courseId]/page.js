"use client";
import { getCourseById } from "@/app/_api";
import React, { useEffect, useState } from "react";
import VideoPlayer from "./_components/VideoPlayer";

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
  
  return courseData.name&&(
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className="col-span-2">
        <VideoPlayer  videoUrl={courseData.chapter[0].video.url}/>
      </div>
      <div>Enroll</div>
    </div>
  );
};

export default CoursePreview;

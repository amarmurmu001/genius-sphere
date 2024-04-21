import React from "react";

function VideoPlayer({videoUrl}) {
  return (
    <div className=" border p-2 m-5 rounded-md">
      <h2 className="text-gray-500 mb-3">Course Preview</h2>
      <video width={1000} height={2500} controls controlsList="nodownlaod" src={videoUrl}></video>
    </div>
  );
}

export default VideoPlayer;

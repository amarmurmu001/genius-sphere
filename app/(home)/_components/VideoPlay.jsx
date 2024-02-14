import React from 'react'

function VideoPlay() {
  return (
    <div>
        <h2 className='text-gray-400 mb-3'>Course Preview</h2>
        <video width="100" height="250" controls controlsList='nodownload'></video>
    </div>
  )
}

export default VideoPlay
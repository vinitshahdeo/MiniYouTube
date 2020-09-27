import React from 'react';

const VideoDetail = ({video}) =>{
  if(!video)
  {
    return <div>Loading...</div>
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <section className="video-detail col-md-8" tabindex="0">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} title={video.snippet.title}></iframe>
      </div>
      <section className="details">
        <div>{video.snippet.title}</div>
        <div className="desc-video">{video.snippet.description}</div>
      </section>
    </section>
  );
}

export default VideoDetail;

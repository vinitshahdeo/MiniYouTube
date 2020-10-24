import React from "react";
import PropTypes from "prop-types";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div className="desc-video">{video.snippet.description}</div>
      </div>
    </div>
  );
};

VideoDetail.propTypes = {
  video: PropTypes.any,
};

export default VideoDetail;

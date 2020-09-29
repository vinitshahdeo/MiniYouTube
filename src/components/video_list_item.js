import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video;
  console.log(video);
  const imgUrl = video.snippet.thumbnails.default.url;
  const imgAlt = video.snippet.title;
  return (
    <li onClick ={() => onVideoSelect(video)} className="list-group-item" tabindex="0">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imgUrl} alt={imgAlt}/>
        </div>
        <div className="media-body">
          <div className="media-heading video-title">{video.snippet.title}</div>
        </div>
      </div>
    </li>
    );
}

export default VideoListItem;

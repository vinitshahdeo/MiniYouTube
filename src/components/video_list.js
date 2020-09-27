import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) =>{
    const videoItems = props.videos.map((video) => {
    return <VideoListItem
              onVideoSelect = {props.onVideoSelect}
              key={video.etag}
              video={video}
            />;
  });
  return (
    <aside>
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    </aside>
  )
}

export default VideoList;

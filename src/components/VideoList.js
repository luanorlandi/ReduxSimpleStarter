import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = props => (
  <ul className="col-md-4 list-group">
    {props.videos.map(video => (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    ))}
  </ul>
);

export default VideoList;

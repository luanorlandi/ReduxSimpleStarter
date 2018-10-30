import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  const { title, thumbnails } = video.snippet;
  const { url } = thumbnails.default;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <div className="media-left">
            <img className="media-object" src={url} />
          </div>
          <div className="media-body">
            <div className="media-heading">{title}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;

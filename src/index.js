import React, { Component } from "react";
import ReactDOM from "react-dom";
import youTubeSearch from "youtube-api-search";
import { debounce } from "lodash";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  componentDidMount = () => {
    this.videoSearch("nasa");
  };

  videoSearch = term => {
    youTubeSearch({ key: YOUTUBE_API_KEY, term }, videos => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  };

  render = () => {
    const videoSearch = debounce(term => {
      this.videoSearch(term), 300;
    });

    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  };
}

ReactDOM.render(<App />, document.querySelector(".container"));

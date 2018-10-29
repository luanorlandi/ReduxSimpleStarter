import React from "react";
import ReactDOM from "react-dom";
import youTubeSearch from "youtube-api-search";

import SearchBar from "./components/SearchBar";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

youTubeSearch({ key: YOUTUBE_API_KEY, term: "surfboards" }, function(data) {
  console.log(data);
});

const App = () => (
  <div>
    <SearchBar />
  </div>
);

ReactDOM.render(<App />, document.querySelector(".container"));

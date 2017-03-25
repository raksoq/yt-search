import React from "react";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

const API_KEY = "AIzaSyAUJJ2QvFRF4N-_EtIGAIy-0H4nT4UEFtI";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };
        YTSearch({ key: API_KEY, term: "volvo" }, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={ this.state.videos } />
            </div>
        );
    }
}
export default App;

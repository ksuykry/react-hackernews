import React, { Component } from "react";
import StoryList from "./StoryList";

/** App component. Renders list of jokes. */

class App extends Component {
  render() {
    return (
      <div className="App">
        <StoryList />
      </div>
    );
  }
}

export default App;

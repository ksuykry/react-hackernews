import React, { Component } from "react";
import "./Story.css";

/** A single story, along with title of story. */

class Stories extends Component {
  render() {
    const { title, url } = this.props;

    return (
      <li>
          <a href={url}>Title: {title}</a>
        </li>
    );
  }
}

export default Stories;

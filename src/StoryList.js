import React, { Component } from "react";
import axios from "axios";
import Stories from "./Stories";
import SearchForm from "./SearchForm";
import "./StoryList.css";

/** List of stories. */

/**
 * {
  "hits": [
    {
      "title": "New Ramsey number upper bound: $R(5, 5),
      "url": "https://arxiv.org/abs/1703.08768",
    ]
 */

class StoryList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      isLoading: true
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  /* at mount, get stories */

  async componentDidMount() {
    const stories = await this.getStories();
    this.setState({
      stories,
      isLoading: false,
    });
  }

  /* retrieve stories from API */

  async getStories(term = "react") {
    let res = await axios(`https://hn.algolia.com/api/v1/search?query=${term}`);
    console.log(res)
    return res.data.hits.filter((story) => story.url && story.title);
  }

  /* set to loading state, and then call getstories */


  async handleSearch(term) {
    this.setState({ requestCompleted: false });
    const stories = await this.getStories(term);
    this.setState({ stories, isLoading: false });
  }

  render() {
    if (this.state.isLoading === true) {
      return <div>Loading..</div>
    }
    return (
      <>
        <SearchForm handleSearch={this.handleSearch} />
        <ul>
          {this.state.stories.map((item) => (
            <Stories key={item.objectID} url={item.url} title={item.title} />
          ))}
        </ul>
      </>
    )
  }
}


export default StoryList;

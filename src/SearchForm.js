import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      query: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.state.query);
    this.props.handleSearch(this.state.query);
    this.setState({
      query: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="term">Term: </label>
        <input
          value={this.state.query}
          onChange={this.handleChange}
          name="query"
          id="term"
        />
        <button>Search </button>
      </form>
    );
  }
}

export default SearchForm;

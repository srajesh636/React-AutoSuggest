import React, { Component } from "react";
import { connect } from "react-redux";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.props.dispatch({
      type: "KEYWORD",
      payload: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <div className="input-container w-100 d-flex justify-content-center">
          <input
            className="search-box px-5 py-3"
            placeholder="Search for something..."
            onChange={this.handleChange}
          />
          <i className="fas fa-search search-icon pl-1" />
        </div>
      </div>
    );
  }
}

export default connect()(SearchBox);

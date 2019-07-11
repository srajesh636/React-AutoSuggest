import React, { Component } from "react";
import Highlighter from "react-highlight-words";
import { connect } from "react-redux";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: this.props.keyword
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.keyword !== nextProps.keyword) {
      this.setState({
        keyword: nextProps.keyword
      });
    }
  }

  render() {
    let { data } = this.props;
    let { keyword } = this.state;
    return (
      <div className="row px-4 pt-3 pb-2">
        <div className="col-sm-6 col-md-2 col-lg-2">
          <img
            src={data.imageUrl}
            width="50"
            height="50"
            className="rounded-circle"
            alt="assignment"
          />
        </div>
        <div className="col-sm-5 col-md-6 col-lg-7">
          <Highlighter
            highlightClassName="text-highlight"
            searchWords={[keyword]}
            autoEscape={true}
            textToHighlight={data.name}
          />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-3 text-right">
          <p className="text-secondary small mt-2">{data.address}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    keyword: state.keyword
  };
};
export default connect(mapStateToProps)(ListItem);

import React, { Component } from "react";
import ListItem from "./ListItem";
import _ from "lodash";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { title, data } = this.props;
    return (
      <div className="list-card">
        <div className="list-title">
          <h6 className="title-color pt-3 pl-3 text-secondary text-uppercase">
            {title}
          </h6>
        </div>
        <div className="list-body bg-white">
          {_.isEmpty(data) === false ? (
            data.map((i, index) => {
              return <ListItem key={index} data={i} />;
            })
          ) : (
            <div className="p-5 text-center">
              <p className="font-weight-normal small">{`No ${title} Found`}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default List;

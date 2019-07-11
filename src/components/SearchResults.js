import React, { Component } from "react";
import List from "./List";
import { data } from "../data/search-data.json";
import { connect } from "react-redux";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animalsList: [],
      filteredAnimalList: [],
      humansList: [],
      filteredHumanList: []
    };
  }

  componentDidMount() {
    let animalsList = data.filter(i => i.category === "animal");
    let humansList = data.filter(i => i.category === "human");

    this.setState({
      animalsList,
      humansList,
      filteredAnimalList: animalsList,
      filteredHumanList: humansList
    });
  }

  componentWillReceiveProps(nextProps) {
    let { animalsList, humansList } = this.state;
    //Filter Search list Based on keyword.
    if (this.props.keyword !== nextProps.keyword) {
      let keyword = nextProps.keyword;
      let newHumansList = humansList.filter(i =>
        i.name.toLowerCase().includes(keyword.toLowerCase())
      );
      let newAnimalList = animalsList.filter(i =>
        i.name.toLowerCase().includes(keyword.toLowerCase())
      );
      this.setState({
        filteredHumanList: newHumansList,
        filteredAnimalList: newAnimalList
      });
    }
  }

  render() {
    let { filteredAnimalList, filteredHumanList } = this.state;
    let { keyword } = this.props;
    let showResults = keyword && keyword.trim() !== "";
    
    return (
      <div className="container">
        {showResults && (
          <>
            <div className="mt-3">
              <div>
                <List title="Humans" data={filteredHumanList} />
                <List title="Animals" data={filteredAnimalList} />
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    keyword: state.keyword
  };
};

export default connect(mapStateToProps)(SearchResults);

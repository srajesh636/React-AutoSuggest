import React from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div className="App">
      <div className="container px-5  d-flex justify-content-center flex-column p-5">
        <h5 className="text-center font-weight-light py-4">
          BTT - AutoComplete
        </h5>
        <SearchBox />
        <SearchResults />
      </div>
    </div>
  );
}

export default App;

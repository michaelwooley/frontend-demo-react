import React from "react";
import { Nav } from "components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <h1 className="title is-1">
        This is an icon:
        <span className="icon">
          <i className="fas fa-code"></i>
        </span>
        .
      </h1>
    </div>
  );
}

export default App;

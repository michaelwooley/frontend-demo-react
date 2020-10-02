import React from "react";
import { Nav } from "containers/Nav";
import { ContextProvider } from "containers/ContextProviders";

function App() {
  return (
    <>
      <ContextProvider>
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
      </ContextProvider>
    </>
  );
}

export default App;

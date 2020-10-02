import React, { useContext } from "react";
import { Nav } from "containers/Nav";
import { ContextProvider } from "containers/ContextProviders";
import { ModalsContext } from "common/context";

function App() {
  const { modals } = useContext(ModalsContext);

  return (
    <>
      <ContextProvider>
        <div className="App">
          <Nav />

          <div className="container">
            <div className="box">
              Modal container status: {JSON.stringify(modals)}
              <code></code>
            </div>
          </div>
        </div>
      </ContextProvider>
    </>
  );
}

export default App;

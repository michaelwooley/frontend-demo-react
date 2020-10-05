import React, { useContext } from "react";
import { Nav } from "containers/Nav";
import { ContextProvider } from "containers/ContextProviders";
import { ModalsContext } from "common/context";
import { Footer } from "components/Footer";

function App() {
  const { modals } = useContext(ModalsContext);

  return (
    <>
      <ContextProvider>
        <div className="App">
          <Nav />

          <main>
            <div className="container">
              <div className="box">
                Modal container status: {JSON.stringify(modals)}
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </ContextProvider>
    </>
  );
}

export default App;

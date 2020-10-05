import React, { useContext } from "react";
import { Nav } from "containers/Nav";
import { ContextProvider } from "containers/ContextProviders";
import { ModalsContext } from "common/context";
import { Footer } from "components/Footer";
import { Modals } from "containers/Modals";

function App() {
  const { modals } = useContext(ModalsContext);

  return (
    <>
      <ContextProvider>
        <div>
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
        <Modals />
      </ContextProvider>
    </>
  );
}

export default App;

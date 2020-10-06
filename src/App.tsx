import { Footer } from "components/Footer";
import { CityBlockIterator } from "containers/CityBlockIterator";
import { ContextProvider } from "containers/ContextProviders";
import { Modals } from "containers/Modals";
import { Nav } from "containers/Nav";
import React from "react";

function App() {
  return (
    <>
      <ContextProvider>
        <div>
          <Nav />

          <main className="container">
            <CityBlockIterator></CityBlockIterator>
          </main>
          <Footer />
        </div>
        <Modals />
      </ContextProvider>
    </>
  );
}

export default App;

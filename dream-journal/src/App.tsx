import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import DreamsList from "./components/DreamsList/DreamsList.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";

import ThemeProvider from "./providers/ThemeProvider.tsx";
import DreamsProvider from "./providers/DreamsProvider.tsx";
import FiltersProvider from "./providers/FiltersProvider.tsx";
import ModalProvider from "./providers/ModalProvider.tsx";

function App() {
  return (
    <ThemeProvider>
      <DreamsProvider>
        <FiltersProvider>
          <ModalProvider>
            <div className="app">
              <Header />
              <main>
                <Toolbar />
                <DreamsList />
              </main>
              <Footer />
            </div>
          </ModalProvider>
        </FiltersProvider>
      </DreamsProvider>
    </ThemeProvider>
  );
}

export default App;

/*
  Component:
  - is a function
  - its name has to be PascalCase
  - returns ReactNode
  - gets props
 */

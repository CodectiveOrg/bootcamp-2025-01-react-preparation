import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import ItemsList from "./components/ItemsList/ItemsList.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Toolbar />
        <ItemsList />
      </main>
      <Footer />
    </div>
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

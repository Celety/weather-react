import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="Content">
        <SearchEngine />
        <Footer />
      </div>
    </div>
  );
}

export default App;

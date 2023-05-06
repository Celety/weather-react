import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundVideo from "./background.mp4";

import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <video playsInline autoPlay muted loop id="backgroundVideo">
        <source src={backgroundVideo} type="video/mp4" />{" "}
      </video>
      <div className="Content">
        <SearchEngine defaultCity="WARSAW" />
        <Footer />
      </div>
    </div>
  );
}

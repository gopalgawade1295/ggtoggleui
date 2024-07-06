import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

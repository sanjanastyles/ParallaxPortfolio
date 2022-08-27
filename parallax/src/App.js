import "./App.css";
import Header from "./Containers/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Containers/About/About";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;

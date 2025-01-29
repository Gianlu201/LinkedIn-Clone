import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import MainComponent from "./components/MainComponent";
import Footer from "./components/Footer";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <div className="overflow-hidden">
      <NavbarComponent />
      <MainComponent />
      <Footer />
    </div>
  );
}
export default App;

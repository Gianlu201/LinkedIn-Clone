import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import MainComponent from "./components/MainComponent";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className=" overflow-hidden">
      <MainComponent />
      <Footer />
    </div>
  );
}
export default App;

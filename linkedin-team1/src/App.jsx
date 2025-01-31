import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import MainComponent from "./components/MainComponent";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import JobsComponent from "./components/JobsComponent";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavbarComponent />
        <Routes>
          <Route path="/post" element={<HomeComponent />} />
          <Route path="/post/:postId" element={<HomeComponent />} />
          <Route path="/" element={<HomeComponent />} />
          <Route path="/profile/:profileId" element={<MainComponent />} />
          <Route path="/jobs" element={<JobsComponent />} />
          <Route path="/jobs/:query" element={<JobsComponent />} />
          <Route
            path="/jobs/:query/company/:company/job/:jobId/:imgIndex"
            element={<JobsComponent />}
          />
          <Route path={"/*"} element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

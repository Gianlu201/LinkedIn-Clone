import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const StaticSuggested = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchJobs = () => {
    navigate(`/jobs/${search}`);
  };

  const handleClick = (label) => {
    setSearch(label);
    searchJobs();
  };

  return (
    <Container className="mt-2 bg-white border border-1 rounded-3 bordinoGames">
      <div className="mt-3 align-items-center justify-content-between d-flex">
        <h5 className=" fw-bold ms-1 mt-2"> Suggested for you </h5>
        <i className="bi bi-x-lg me-2"></i>
      </div>
      <div className="d-flex my-3 flex-wrap ">
        {[
          "remote jobs",
          "legal",
          "assistant",
          "marketing",
          "graduate",
          "developer",
          "sales",
          "google",
        ].map((label, i) => (
          <Button
            key={i}
            size="sm"
            className="border border-primary text-primary bg-transparent btnPSection rounded-5 me-1 fw-bold mt-1 d-flex justify-content-center align-items-center"
            onClick={() => handleClick(label)}
          >
            <i className="bi bi-search fs-6"></i>
            <span className="ps-1">{label}</span>
          </Button>
        ))}
      </div>
    </Container>
  );
};
export default StaticSuggested;

import { Container, Button } from "react-bootstrap";

const StaticSuggested = () => {
  return (
    <Container className="mt-4 bg-white border border-1 rounded-3 bordinoGames">
      <div className="mt-3 align-items-center justify-content-between d-flex">
        <p className="fs-5 fw-bold ms-1 "> Suggested for you </p>
        <i className="bi bi-x-lg me-2"></i>
      </div>
      <hr className="mb-1 " />
      <div className="d-flex my-3 flex-wrap justify-content-between">
        <Button
          variant="outline-primary"
          size="sm"
          className="btnSuggested fw-bold mx-2 mt-1 d-flex justify-content-center align-items-center"
        >
          {" "}
          <i className="bi bi-search fs-6"></i>
          <span className="ps-1">remote jobs </span>
        </Button>
        <Button
          variant="outline-primary"
          size="sm"
          className="btnSuggested fw-bold mx-2 mt-1 d-flex justify-content-center align-items-center"
        >
          {" "}
          <i className="bi bi-search fs-6"></i>
          <span className="ps-1"> legal</span>
        </Button>
        <Button
          variant="outline-primary"
          size="sm"
          className="btnSuggested fw-bold mx-2 mt-1 d-flex justify-content-center align-items-center"
        >
          {" "}
          <i className="bi bi-search fs-6"></i>
          <span className="ps-1">assistant </span>
        </Button>
        <Button
          variant="outline-primary"
          size="sm"
          className="btnSuggested fw-bold mx-2 mt-1 d-flex justify-content-center align-items-center"
        >
          {" "}
          <i className="bi bi-search fs-6"></i>
          <span className="ps-1">marketing </span>
        </Button>
        <Button
          variant="outline-primary"
          size="sm"
          className="btnSuggested fw-bold mx-2 mt-1 d-flex justify-content-center align-items-center"
        >
          {" "}
          <i className="bi bi-search fs-6"></i>
          <span className="ps-1">graduate </span>
        </Button>
        <div className="d-flex my-3 flex-wrap justify-content-between">
          <Button
            variant="outline-primary"
            size="sm"
            className="btnSuggested fw-bold mx-2 mt-2 d-flex justify-content-center align-items-center"
          >
            {" "}
            <i className="bi bi-search fs-6"></i>{" "}
            <span className="ps-1"> developer</span>
          </Button>
          <Button
            variant="outline-primary"
            size="sm"
            className="btnSuggested fw-bold mx-2 mt-2 d-flex justify-content-center align-items-center"
          >
            {" "}
            <i className="bi bi-search fs-6"></i>{" "}
            <span className="ps-1">sales </span>
          </Button>
          <Button
            variant="outline-primary"
            size="sm"
            className="btnSuggested fw-bold mx-2 mt-2 d-flex justify-content-center align-items-center"
          >
            {" "}
            <i className="bi bi-search fs-6"></i>{" "}
            <span className="ps-1">google </span>
          </Button>
        </div>
      </div>
    </Container>
  );
};
export default StaticSuggested;

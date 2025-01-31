import { Container, Row, Col } from "react-bootstrap";

const PreferencesSideComp = () => {
  return (
    <Container
      fluid
      className=" bg-white mt-2 my-md-2 rounded-3 px-0 d-flex bordinoGames"
    >
      {" "}
      <Row className=" mx-1">
        <Col xs={12} className="pt-3 pb-1 d-flex">
          <i className="bi bi-bookmark-fill d-inline-block"></i>
          <div>
            <a
              className="fw-semibold text-black ms-2 d-inline-block homeLinks"
              href="javascript:void(0)"
            >
              Preferences{" "}
            </a>
          </div>
        </Col>
        <Col xs={12} className="py-2 d-flex">
          <i className="bi bi-people-fill d-inline-block"></i>
          <div>
            <a
              className="fw-semibold text-black ms-2 d-inline-block homeLinks"
              href="javascript:void(0)"
            >
              My Jobs{" "}
            </a>
          </div>
        </Col>
        <Col xs={12} className="py-1 d-flex">
          <i className="bi bi-newspaper d-inline-block"></i>
          <div>
            <a
              className="fw-semibold text-black ms-2 d-inline-block homeLinks"
              href="javascript:void(0)"
            >
              Interview Prep{" "}
            </a>
          </div>
        </Col>
        <hr className="mt-2 mb-3" />
        <Col xs={12} className="pb-3 d-flex align-items-center">
          <i className="bi bi-pencil-square text-primary"></i>
          <div>
            <a
              className="fw-bold text-primary pb-1 ms-2 d-inline-block homeLinks"
              href="javascript:void(0)"
            >
              Post a free job{" "}
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PreferencesSideComp;

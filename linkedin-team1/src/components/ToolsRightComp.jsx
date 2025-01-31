import { Container, Row, Col } from "react-bootstrap";

const ToolsRightComp = () => {
  return (
    <Container
      fluid
      className=" bg-white mt-2 my-md-2 rounded-3 px-0 d-flex bordinoGames"
    >
      {" "}
      <Row className=" mx-1">
        <Col xs={12} className="pt-3 d-flex">
          <i className="bi bi-bookmark-fill d-inline-block"></i>
          <div>
            <a
              className="fw-semibold text-black ms-2 d-inline-block homeLinks"
              href="javascript:void(0)"
            >
              Saved Items{" "}
            </a>
          </div>
        </Col>
        <Col xs={12} className="py-1 d-flex">
          <i className="bi bi-people-fill d-inline-block"></i>
          <div>
            <a
              className="fw-semibold text-black ms-2 d-inline-block homeLinks"
              href="javascript:void(0)"
            >
              Groups{" "}
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
              Newsletter{" "}
            </a>
          </div>
        </Col>
        <Col xs={12} className="pb-3 d-flex">
          <i className="bi bi-calendar-event d-inline-block"></i>
          <div>
            <a
              className="fw-semibold text-black ms-2 d-inline-block homeLinks"
              href="javascript:void(0)"
            >
              Events{" "}
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ToolsRightComp;

/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col, Button } from "react-bootstrap";

const ActivityComp = () => {
  return (
    <Container
      fluid
      className=" bg-white mt-2 rounded-3 position-relative bordinoGames"
    >
      <Row className="ms-2 align-items-md-start">
        <Col xs={12} md={6} className="mt-3 mb-2">
          <h3>Activity</h3>
          <p className=" text-primary fw-bold">5 followers</p>
        </Col>
        <i className="bi bi-pencil fs-5 matitina"></i>
        <Col
          xs={12}
          md={6}
          className="mt-md-3 mb-2 d-flex justify-content-md-end pe-md-5"
        >
          <Button className="btn btn-sm border-primary bg-transparent text-primary rounded-4 btnPSection px-3 fw-bold me-lg-3 me-xl-4 me-xxl-5">
            Create a post
          </Button>
        </Col>
        <Col xs={12}>
          <p className=" fw-bold">You haven't posted yet</p>
          <p>Posts you share will be displayed here</p>
        </Col>
      </Row>
      <hr className="mt-2 mb-0" />
      <Row>
        <Col>
          <Button className=" bg-transparent w-100 border-0 text-black mt-0 pb-2 fw-bold d-flex align-items-center justify-content-center btnAnalytics">
            Show all activity <i className="bi bi-arrow-right-short fs-5"></i>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ActivityComp;

/* eslint-disable react/no-unescaped-entities */

import { Container, Row, Col, Button } from "react-bootstrap";

const AnalyticsComp = () => {
  return (
    <Container fluid className=" bg-white mt-4 rounded-3">
      <Row>
        <Col xs={12} className="mt-3 mb-2 ms-3">
          <h3>Analytics</h3>
          <p>
            <i className="bi bi-eye-fill me-1"></i>
            Private to you
          </p>
        </Col>
      </Row>
      <Row className="mx-2 mt-1">
        <Col xs={12} lg={4} className="d-flex mb-4">
          <i className="bi bi-people-fill fs-5"></i>
          <div className=" ms-1">
            <a href="#" className="mainLink fw-bold">
              5 profile views
            </a>
            <p>Discover who's viewed your profile</p>
          </div>
        </Col>

        <Col xs={12} lg={4} className=" d-flex mb-4">
          <i className="bi bi-bar-chart-line-fill fs-5"></i>
          <div className="ms-1">
            <a href="#" className="mainLink fw-bold">
              0 post impressions
            </a>
            <p>Start a post to increase engagement</p>
            <p className=" text-secondary">Past 7 days</p>
          </div>
        </Col>

        <Col xs={12} lg={4} className=" d-flex">
          <i className="bi bi-search fs-5"></i>
          <div className=" ms-1">
            <a href="#" className="mainLink fw-bold">
              1 search appearance
            </a>
            <p>See how often you appear in search results</p>
          </div>
        </Col>
      </Row>
      <hr className="mt-2 mb-0" />
      <Row>
        <Col>
          <Button className=" bg-transparent w-100 border-0 text-black mt-0 pb-2 fw-bold d-flex align-items-center justify-content-center btnAnalytics">
            Show all analytics <i className="bi bi-arrow-right-short fs-5"></i>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AnalyticsComp;

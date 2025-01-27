/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col, Card } from "react-bootstrap";

const ProfileComp = () => {
  return (
    <Container fluid className="mt-2">
      <Row>
        <Col className="p-0">
          <img
            src="https://placecats.com/576/150"
            alt=""
            className="profileTop rounded-top-3"
          />
          <img
            src="https://placecats.com/150/150"
            alt=""
            className="profileImg rounded-circle border border-white border-3"
          />
          <i className="bi bi-camera-fill profileIcon text-primary bg-white px-2 py-1 rounded-circle"></i>
          <button className="profilePen border-0 bg-transparent">
            <i className="bi bi-pencil fs-4"></i>
          </button>
        </Col>
        <Col className="mt-5 ms-3" xs={12}>
          <Row className=" mt-5 w-100 justify-content-between align-items-start">
            <Col xs={6}>
              <h1 className="fs-3 fw-bold mb-0">Camilla Zicari</h1>
              <button className="border-primary bg-transparent rounded-4 text-primary btnBadge mt-1">
                <i className="bi bi-patch-check me-1"></i>
                Add verification badge
              </button>
              <p>Consulente Commerciale</p>
              <p className="mt-1">
                Italy |{" "}
                <span className=" text-primary fw-bold">Contact info</span>
              </p>
              <p className=" text-primary fw-bold">5 connections</p>
            </Col>
            <Col xs={6}>
              <p className="mb-0">IIS Giosuè Carducci</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className="mt-2 me-3 align-items-center">
                <Col xs={4}>
                  <button
                    className="btn btn-sm bg-primary text-white rounded-4 border-0 w-100"
                    id="btnOpenTo"
                  >
                    Open to
                  </button>
                </Col>
                <Col xs={4}>
                  <button className="btn btn-sm border-primary bg-transparent text-primary rounded-4 w-100 btnPSection">
                    Add profile section
                  </button>
                </Col>
                <Col xs={4}>
                  <button
                    className="btn btn-sm border-secondary bg-transparent text-secondary rounded-4 w-75"
                    id="btnResources"
                  >
                    Resources
                  </button>
                </Col>
                <Col xs={11}>
                  <button className="mt-2 border-primary bg-transparent text-primary rounded-4 w-100 btnPSection btn btn-sm">
                    Enhance profile
                  </button>
                </Col>
                <Col xs={1}></Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={12} className="ms-3">
          <Row xs={2} className=" my-3 flex-nowrap overflow-auto">
            <Col>
              <Card className=" d-flex justify-content-between cardRelative h-100">
                <Card.Body>
                  <Card.Title className=" fs-6">Open to work</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted fs-6">
                    Manager and Salesperson rol...
                  </Card.Subtitle>
                  <Card.Link href="#" className=" fs-6">
                    Show details
                  </Card.Link>
                </Card.Body>
                <i className="bi bi-pencil fs-6 cardPen"></i>
              </Card>
            </Col>

            <Col>
              <Card className=" d-flex justify-content-between h-100 cardRelative">
                <Card.Body>
                  <Card.Title className="cardText">
                    {" "}
                    <span className=" fw-bold">
                      Share that you're hiring
                    </span>{" "}
                    and attract qualified candidates
                  </Card.Title>
                  <Card.Link href="#" className=" fs-6">
                    Get started
                  </Card.Link>
                </Card.Body>
                <i className="bi bi-x cardX fs-3"></i>
              </Card>
            </Col>

            <Col>
              <Card className=" d-flex justify-content-between h-100 cardRelative">
                <Card.Body>
                  <Card.Title className="cardText">
                    {" "}
                    <span className=" fw-bold">Showcase your services</span> as
                    a selection on your profile so ypur business can be easily
                    discovered
                  </Card.Title>
                  <Card.Link href="#" className=" fs-6">
                    Get started
                  </Card.Link>
                </Card.Body>
                <i className="bi bi-x cardX fs-3"></i>
              </Card>
            </Col>

            <Col>
              <Card className=" d-flex justify-content-between h-100 cardRelative">
                <Card.Body>
                  <Card.Title className="cardText">
                    {" "}
                    <span className=" fw-bold">Tell non-profits</span> you're
                    interested in getting involved with your time and skills
                  </Card.Title>
                  <Card.Link href="#" className=" fs-6">
                    Get started
                  </Card.Link>
                </Card.Body>
                <i className="bi bi-x cardX fs-3"></i>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileComp;

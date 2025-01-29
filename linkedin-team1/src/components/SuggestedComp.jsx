import { Container, Row, Col, Card, Button } from "react-bootstrap";

const SuggestedComp = () => {
  return (
    <Container fluid className=" bg-white mt-4 rounded-3 bordinoGames">
      <Row className=" pb-3">
        <Col xs={12} className="my-3 ms-3">
          <h3>Suggested for you</h3>
          <p>
            <i className="bi bi-eye-fill me-1"></i>
            Private to you
          </p>
        </Col>
        <Col xs={12}>
          <Row className="flex-nowrap overflow-auto pb-3">
            <Col xs={11} lg={6}>
              <Card className=" d-flex justify-content-between h-100">
                <Card.Body>
                  <Card.Title className=" fw-bold fs-6">
                    <img
                      src="https://static.licdn.com/aero-v1/sc/h/3o60b3fz42izy3afjrr1o436e"
                      alt=""
                      className=" me-2"
                    />
                    Where are you located?
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-black fw-light cardFont mt-2">
                    Members who include a postal code location receive up to 70%
                    as many profile views.
                  </Card.Subtitle>
                  <Button
                    className=" bg-transparent border-black text-black rounded-5 btn-sm px-3 mt-2 fw-bold"
                    id="btnResources"
                  >
                    Add location
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={11} lg={6}>
              <Card className=" d-flex justify-content-between h-100">
                <Card.Body>
                  <Card.Title className=" fw-bold fs-6 d-flex align-items-center">
                    <img
                      src="https://static.licdn.com/aero-v1/sc/h/db05fgvyq7n2ng4fiexgf4hcq"
                      alt=""
                      className=" me-2"
                    />
                    <p>
                      Write a summary to highlight your personality or work
                      experience{" "}
                    </p>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-black fw-light cardFont mt-2">
                    Members who include a summary receive up to 3.9 times as
                    many profile views.
                  </Card.Subtitle>
                  <Button
                    className=" bg-transparent border-black text-black rounded-5 btn-sm px-3 mt-2 fw-bold"
                    id="btnResources"
                  >
                    Add a summary
                  </Button>
                </Card.Body>
              </Card>
            </Col>{" "}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SuggestedComp;

/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col } from "react-bootstrap";

const GamesComp = () => {
  return (
    <Container fluid className=" bg-white mt-2 mt-md-4 rounded-3 bordinoGames">
      <Row className="align-items-md-start">
        <Col xs={12} className="my-2">
          <p className=" fw-bold w-100">Today's puzzle games</p>
        </Col>
      </Row>
      <Row className=" align-items-center pb-2 hoverRow">
        <Col xs={11} lg={10}>
          <Row className=" align-items-center">
            <Col xs={1} className="pe-4 pe-md-3 pe-lg-3">
              <img
                src="https://static.licdn.com/aero-v1/sc/h/25itbd3dpc6ockbgvdhot9qp1"
                alt=""
                className=" pt-1"
              />
            </Col>
            <Col xs={10} className="ps-2 ps-md-3 ps-lg-4">
              <p className="fw-semibold w-100 titleGames">
                <u>Queens</u>
              </p>
              <p className="descriptionsGames">Crown each region</p>
            </Col>
          </Row>
        </Col>
        <Col xs={1}>
          <i className="bi bi-chevron-right"></i>
        </Col>
      </Row>

      <Row className=" align-items-center py-2 hoverRow">
        <Col xs={11} lg={10}>
          <Row className=" align-items-center">
            <Col xs={1} className="pe-4 pe-2 pe-md-3 pe-lg-3">
              <img
                src="https://static.licdn.com/aero-v1/sc/h/im5l00imv9odauybfemlfxm6"
                alt=""
                className=" pt-1"
              />
            </Col>
            <Col xs={10} className="ps-2 ps-md-3 ps-lg-4">
              <p className="fw-semibold w-100 titleGames">
                <u>Tango</u>
              </p>
              <p className="descriptionsGames">Harmonize the grid</p>
            </Col>
          </Row>
        </Col>
        <Col xs={1}>
          <i className="bi bi-chevron-right"></i>
        </Col>
      </Row>

      <Row className=" align-items-center py-2 hoverRow">
        <Col xs={11} lg={10}>
          <Row className=" align-items-center">
            <Col xs={1} className="pe-4 pe-2 pe-md-3 pe-lg-3">
              <img
                src="https://static.licdn.com/aero-v1/sc/h/3zbbe4rnqg4embu5uy17dpiph"
                alt=""
                className=" pt-1"
              />
            </Col>
            <Col xs={10} className="ps-2 ps-md-3 ps-lg-4">
              <p className="fw-semibold w-100 titleGames">
                <u>Pinpoint</u>
              </p>
              <p className="descriptionsGames">Guess the category</p>
            </Col>
          </Row>
        </Col>
        <Col xs={1}>
          <i className="bi bi-chevron-right"></i>
        </Col>
      </Row>

      <Row className=" align-items-center py-2 hoverRow">
        <Col xs={11} lg={10}>
          <Row className=" align-items-center">
            <Col xs={1} className="pe-4 pe-2 pe-md-2 pe-lg-3">
              <img
                src="https://static.licdn.com/aero-v1/sc/h/8ilyk40nkjoeuzohmqsoc6iiv"
                alt=""
                className=" pt-1"
              />
            </Col>
            <Col xs={10} className="ps-2 ps-md-3 ps-lg-4">
              <p className="fw-semibold w-100 titleGames">
                <u>Crossclimb</u>
              </p>
              <p className="descriptionsGames">Unlock a trivia ladder</p>
            </Col>
          </Row>
        </Col>
        <Col xs={1}>
          <i className="bi bi-chevron-right"></i>
        </Col>
      </Row>
    </Container>
  );
};

export default GamesComp;

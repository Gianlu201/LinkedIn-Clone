import { Container, Row, Col } from "react-bootstrap";
import HomeProfile from "./HomeProfile";

const HomeComponent = () => {
  return (
    <Container className=" mt-5 pt-5">
      <Row>
        <Col xs={12} md={4} lg={3} className=" border border-1 border-danger">
          <h1>PARTE 1</h1>
          <HomeProfile/>
        </Col>
        <Col xs={12} md={8} lg={9} className=" border border-1 border-danger">
          <Row>
            <Col
              xs={12}
              lg={7}
              xl={8}
              className=" border border-1 border-danger"
            >
              <h1>Parte 2</h1>
            </Col>
            <Col
              xs={12}
              lg={5}
              xl={4}
              className=" border border-1 border-danger"
            >
              <h1>Parte 3</h1>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeComponent;

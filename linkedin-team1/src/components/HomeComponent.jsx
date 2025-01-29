import { Container, Row, Col } from "react-bootstrap";
import HomeProfile from "./HomeProfile";

const HomeComponent = () => {
  return (
    <Container className=" mt-5 pt-3">
      <Row>
        <Col xs={12} md={4} lg={3}>
<<<<<<< HEAD
          <HomeProfile/>
=======
          <HomeProfile />
>>>>>>> 9f3632b6213d683d8ea32bd0bd79812ff8ea85ab
        </Col>
        <Col xs={12} md={8} lg={9}>
          <Row>
            <Col xs={12} lg={7} xl={8}>
              <h1>Parte 2</h1>
            </Col>
            <Col xs={12} lg={5} xl={4}></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeComponent;

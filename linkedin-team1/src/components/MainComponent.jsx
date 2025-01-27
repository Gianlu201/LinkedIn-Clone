import ProfileComp from "./ProfileComp";
import { Container, Row, Col } from "react-bootstrap";

const MainComponent = () => {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col>
          <ProfileComp />
        </Col>
      </Row>
    </Container>
  );
};

export default MainComponent;

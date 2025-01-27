import ProfileComp from "./ProfileComp";
import { Container, Row, Col } from "react-bootstrap";
import SuggestedComp from "./SuggestedComp";

const MainComponent = () => {
  return (
    <Container className="p-0">
      <Row>
        <Col xs={12} md={8}>
          <ProfileComp />
          <SuggestedComp />
        </Col>
        <Col xs={0} md={4}></Col>
      </Row>
    </Container>
  );
};

export default MainComponent;

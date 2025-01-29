import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const AboutComp = () => {
  const profile = useSelector((state) => {
    return state.profile;
  });

  return (
    <Container
      fluid
      className="bordinoGames bg-white mt-2 rounded-3 position-relative"
    >
      <Row className="ms-2 align-items-md-start">
        <Col xs={12} md={6} className="mt-3 mb-2">
          <h3>About</h3>
          <p className="mt-2 mb-3">{profile.bio}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutComp;

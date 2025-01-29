import { Container, Row, Col } from "react-bootstrap";
import GamesComp from "./GamesComp";
import AddToFeed from "./AddToFeed";
import HiringComp from "./HiringComp";
import HomeProfile from "./HomeProfile";

const HomeComponent = () => {
  return (
    <Container className="mt-5 pt-2">
      <Row>
        <Col xs={12} md={4} lg={3}>
          <HomeProfile />
          <HomeProfile />
        </Col>
        <Col xs={12} md={8} lg={9}>
          <Row>
            <Col xs={12} lg={7} xl={8}></Col>
            <Col xs={12} lg={5} xl={4}>
              <GamesComp />
              <AddToFeed />
              <HiringComp />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeComponent;

import { Container, Row, Col } from "react-bootstrap";
import GamesComp from "./GamesComp";
import AddToFeed from "./AddToFeed";
import HiringComp from "./HiringComp";
import HomeProfile from "./HomeProfile";
import ToolsRightComp from "./ToolsRightComp";
import NewPostComp from "./NewPostComp";
import FeedAreaComp from "./FeedAreaComp";

const HomeComponent = () => {
  return (
    <Container className="mt-5 pt-2">
      <Row>
        <Col xs={12} md={4} lg={3}>
          <HomeProfile />
          <ToolsRightComp />
        </Col>
        <Col xs={12} md={8} lg={9}>
          <Row>
            <Col xs={12} lg={7} xl={8}>
              <NewPostComp />
              <div className="d-flex my-2">
                <hr className=" flex-grow-1" />
                <p>
                  Select feed view: <b>Most relevant first</b>
                </p>
              </div>
              <FeedAreaComp />
            </Col>
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

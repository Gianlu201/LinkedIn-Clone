import { Container, Row, Col } from "react-bootstrap";
import JobsProfile from "./JobsProfile";
import PreferencesSideComp from "./PreferencesSideComp";
import ProfileFooter from "./ProfileFooter";
import StaticSuggested from "./StaticSuggested";

const JobsComponent = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={5} lg={4}>
        <JobsProfile/>
        <PreferencesSideComp/>
        <ProfileFooter/>
        </Col>
        <Col xs={12} md={7} lg={8}>
        <StaticSuggested/> 
        </Col>
      </Row>
    </Container>
  );
};

export default JobsComponent;

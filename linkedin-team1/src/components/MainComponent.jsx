import ProfileComp from "./ProfileComp";
import { Container, Row, Col } from "react-bootstrap";
import SuggestedComp from "./SuggestedComp";
import AnalyticsComp from "./AnalyticsComp";
import ActivityComp from "./ActivityComp";
import ExperienceComp from "./ExperienceComp";
import EducationComp from "./EducationComp";
import SkillsComp from "./SkillsComp";
import InterestsComp from "./InterestsComp";
import LanguageUrlComp from "./LanguageUrlComp";
import HiringAdviceComp from "./HiringAdviceComp";
import MoreProfilesComp from "./MoreProfilesComp";

const MainComponent = () => {
  return (
    <Container className="p-0">
      <Row>
        <Col xs={12} md={7} lg={8} className=" ps-xxl-5">
          <ProfileComp />
          <SuggestedComp />
          <AnalyticsComp />
          <ActivityComp />
          <ExperienceComp />
          <EducationComp />
          <SkillsComp />
          <InterestsComp />
        </Col>
        <Col xs={0} md={5} lg={4} className=" ps-xxl-5">
          <LanguageUrlComp />

          <HiringAdviceComp />

          <MoreProfilesComp title="More profiles for you" />

          <MoreProfilesComp title="People you may know" />

          <HiringAdviceComp />
        </Col>
      </Row>
    </Container>
  );
};

export default MainComponent;

import ProfileComp from './ProfileComp';
import { Container, Row, Col } from 'react-bootstrap';
import SuggestedComp from './SuggestedComp';
import AnalyticsComp from './AnalyticsComp';
import ActivityComp from './ActivityComp';
import ExperienceComp from './ExperienceComp';
import EducationComp from './EducationComp';
import SkillsComp from './SkillsComp';
import InterestsComp from './InterestsComp';
import LanguageUrlComp from './LanguageUrlComp';
import HiringComp from './HiringComp';
import MoreProfilesComp from './MoreProfilesComp';
import AboutComp from './AboutComp';
import PeopleComp from './PeopleComp';
import Footer from './Footer';

const MainComponent = () => {
  return (
    <>
      <Container className='p-0 mt-5 pt-3'>
        <Row>
          <Col xs={12} md={7} lg={8} className=' ps-xxl-5'>
            <ProfileComp />
            <AboutComp />
            <SuggestedComp />
            <AnalyticsComp />
            <ActivityComp />
            <ExperienceComp />
            <EducationComp />
            <SkillsComp />
            <InterestsComp />
          </Col>
          <Col xs={0} md={5} lg={4} className=' pe-xxl-5'>
            <LanguageUrlComp />

            <HiringComp />

            <MoreProfilesComp title='More profiles for you' />

            <PeopleComp title='People you may know' />

            <HiringComp />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default MainComponent;

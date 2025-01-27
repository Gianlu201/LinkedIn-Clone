import ProfileComp from './ProfileComp';
import { Container, Row, Col } from 'react-bootstrap';
import SuggestedComp from './SuggestedComp';
import AnalyticsComp from './AnalyticsComp';
import ActivityComp from './ActivityComp';
import ExperienceComp from './ExperienceComp';
import EducationComp from './EducationComp';
import SkillsComp from './SkillsComp';
import InterestsComp from './InterestsComp';
import HiringAdviceComp from './HiringAdviceComp';
import MoreProfilesComp from './MoreProfilesComp';

const MainComponent = () => {
  return (
    <Container className='p-0'>
      <Row>
        <Col xs={12} md={9}>
          <ProfileComp />
          <SuggestedComp />
          <AnalyticsComp />
          <ActivityComp />
          <ExperienceComp />
          <EducationComp />
          <SkillsComp />
          <InterestsComp />
        </Col>
        <Col xs={0} md={3}>
          <Container className='mt-2 pb-3 bg-white rounded-3'>
            <div className='position-relative'>
              <h4 className='pt-3'>Profile language</h4>
              <p className='small text-secondary mt-2'>Italiano</p>
              <i className='bi bi-pencil fs-5 matitina'></i>
            </div>
            <hr className='m-0 mt-3' />
            <div className='position-relative'>
              <h4 className='pt-3'>Public profile & URL</h4>
              <p className='small text-secondary mt-2'>
                www.linkedin.com/in/camilla-zicari
              </p>
              <i className='bi bi-pencil fs-5 matitina'></i>
            </div>
          </Container>

          <HiringAdviceComp />

          <MoreProfilesComp title='More profiles for you' />

          <MoreProfilesComp title='People you may know' />

          <HiringAdviceComp />
        </Col>
      </Row>
    </Container>
  );
};

export default MainComponent;

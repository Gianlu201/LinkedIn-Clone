import { useSelector } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import companyImages from '../data/company_images.json';

const JobPicksComp = () => {
  const jobs = useSelector((state) => {
    return state.jobs;
  });

  const getCompanyImage = (ind) => {
    let indice = ind;

    if (ind > companyImages.length - 1) {
      let division = Math.floor(ind / (companyImages.length - 1));
      indice = ind - division * (companyImages.length - 1);
    }

    return indice;
  };

  return (
    <Container
      fluid
      className=' bg-white mt-4 rounded-3 position-relative bordinoGames'
    >
      <Row className='align-items-md-start'>
        <Col xs={12} className='mt-3 mb-1 ps-4 ps-md-2 ps-lg-3 ps-xl-4'>
          <h5 className=' fw-bold mt-2 pb-1'>Job picks for you</h5>
          <p className=' text-secondary small jobsDesc'>
            Based on your profile, preferences, and activity like applies,
            searches and saves
          </p>
        </Col>{' '}
      </Row>{' '}
      {jobs.slice(0, 3).map((job, index) => {
        return (
          <Row className=' align-items-start' key={job._id}>
            <Col xs={11}>
              <Row className='py-3'>
                <Col
                  xs={2}
                  lg={1}
                  className='pe-0 pe-md-2 pe-lg-0 ms-lg-3 d-flex justify-content-center justify-content-lg-end'
                >
                  {' '}
                  <img
                    src={companyImages[getCompanyImage(index)]?.image}
                    alt=''
                    style={{ width: '48px', height: '48px' }}
                    className=' pt-1'
                  />
                </Col>
                <Col xs={10} className='ps-0 ps-lg-2'>
                  <Link
                    to={`/jobs/developer/company/${job.company_name}/job/${
                      job._id
                    }/${getCompanyImage(index)}`}
                    className='fw-bold fs-6 w-100 mainLink text-primary'
                  >
                    {job.title}
                  </Link>
                  <p className='descriptions'>
                    {job.company_name} • {job.category}
                  </p>
                  <p className='descriptions text-secondary'>
                    {job.candidate_required_location} •{' '}
                    {job.publication_date.slice(0, 10)}
                  </p>
                  <p className='promoted text-secondary d-flex align-items-center'>
                    {' '}
                    Promoted •{' '}
                    <i className='bi bi-linkedin icon-linkedin mx-1 fs-6'>
                      {' '}
                    </i>{' '}
                    Easy Apply
                  </p>{' '}
                </Col>
              </Row>
            </Col>
            <Col xs={1} className='px-md-0 px-lg-3 px-xxl-4 py-3'>
              <i className='bi bi-x-lg fs-6 me-3 me-lg-0'></i>
            </Col>
            <hr className=' mb-0' />
          </Row>
        );
      })}
      <Row className=' btnAnalytics'>
        <Col>
          <Button className=' bg-transparent w-100 border-0 text-black mt-0 pb-2 fw-bold d-flex align-items-center justify-content-center'>
            Show all <i className='bi bi-arrow-right-short fs-5'></i>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default JobPicksComp;

import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const LanguageUrlComp = () => {
  const profile = useSelector((state) => {
    return state.profile;
  });

  const currentProfile = useSelector((state) => {
    return state.currentProfile;
  });

  return (
    <Container
      fluid
      className=' bg-white mt-4 my-md-2 pb-2 rounded-3 bordinoGames'
    >
      <Row className='ms-2 ms-md-0 align-items-md-start position-relative'>
        <Col xs={12} className='mt-3 mb-2'>
          <h3 className='fontDestra '>Profile language</h3>
          <p className='pDestra'>Italiano</p>
          {profile._id === currentProfile._id && (
            <button className='btn bg-white border-0 matitinaDestra'>
              <i className='bi bi-pencil fs-5 matitina '></i>
            </button>
          )}
        </Col>
      </Row>
      {profile._id === currentProfile._id && (
        <>
          <hr className='mt-1 mb-0' />
          <Row className='ms-2 ms-md-0 align-items-md-start position-relative'>
            <Col xs={12} className='mt-3 mb-2'>
              <h3 className='fontDestra '>Public profile & URL</h3>
              <p className='pDestra'>www.linkedin.com/in/gianluca-di-diego</p>
              <button className='btn bg-white border-0 matitinaDestra'>
                <i className='bi bi-pencil fs-5 matitina'></i>
              </button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default LanguageUrlComp;

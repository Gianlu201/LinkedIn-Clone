/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HomeProfile = () => {
  const profile = useSelector((state) => {
    return state.profile;
  });

  const dispatch = useDispatch();

  const token = import.meta.env.VITE_TOKEN;
  const url = 'https://striveschool-api.herokuapp.com/api/profile/me';

  const getProfile = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log('PROFILO:', data);
        dispatch({
          type: 'GET_PROFILE',
          payload: data,
        });
      } else {
        throw new Error('Errore nel recupero dei dati');
      }
    } catch (error) {
      console.log('errore', error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {}, []);
  return (
    <Container fluid className=' bg-white mt-4 rounded-3 bordinoGames'>
      <Row className=' bg-white rounded-3'>
        <Col className='p-0 mb-3 profileTopHome'>
          <img
            src='https://static.vecteezy.com/system/resources/thumbnails/023/856/872/small/ai-generated-organic-design-background-and-banner-in-different-colour-gradient-photo.jpeg'
            alt=''
            className='img-fluid rounded-top-3 sfondoGattoHome'
            style={{ width: '900px' }}
          />
          <Link to={`/profile/${profile._id}`}>
            <img
              src={profile.image}
              alt=''
              className='profileImgHome rounded-circle border border-white border-3'
            />
          </Link>
        </Col>
        <Col className='mt-3 mt-md-3 ms-1' xs={12}>
          <Row className=' mt-3 w-100 justify-content-between align-items-start'>
            <Col xs={6} md={12}>
              <Link
                to={`/profile/${profile._id}`}
                className='fs-5 fw-bold my-0'
              >
                {profile.name} {profile.surname}
              </Link>
              <p className='ProfTitleHome'>{profile.title}</p>
              <p className='mt-0 text-muted'>{profile.area}</p>
            </Col>
            <Col xs={6} md={12} className='my-md-2'>
              <Button
                size='sm'
                className='btnSideProf mx-2 w-100 justify-content-center align-items-center fw-semibold mb-2'
              >
                <i className='bi bi-plus-lg fs-6'></i> Experience{' '}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr className=' my-1' />
      <Row className=' bg-white rounded-3'>
        <Col xs={10} className='py-2'>
          <a href='javascript:void(0)' className='homeLinks text-black fw-bold'>
            Connections
          </a>
          <br />
          <a href='javascript:void(0)' className='homeLinks text-muted fw-bold'>
            Grow your network
          </a>
        </Col>
        <Col xs={2} className='py-2'>
          <a href='javascript:void(0)' className='homeLinksNum'>
            2
          </a>
        </Col>
      </Row>
      <hr className=' my-1' />
      <Row className='my-2 bg-white rounded-3'>
        <Col xs={12} className='py-1'>
          <p className='text-muted homeLinks'>
            {' '}
            Grow your career with Premium{' '}
          </p>
        </Col>
        <Col xs={12} className='pt-1 pb-2 d-flex align-items-center'>
          <img
            src='/imgGiallina.svg'
            style={{ width: '18px', height: '18px' }}
          />
          <span className='small fw-bold homeLinks'> Try 1 month for €0</span>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeProfile;

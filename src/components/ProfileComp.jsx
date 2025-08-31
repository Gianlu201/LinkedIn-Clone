/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ModalComp from './ModalComp';
import { useParams } from 'react-router-dom';

const ProfileComp = () => {
  const profile = useSelector((state) => {
    return state.profile;
  });

  const params = useParams();
  const dispatch = useDispatch();

  const getParamsProfile = async () => {
    const token = import.meta.env.VITE_TOKEN;
    const url = `https://striveschool-api.herokuapp.com/api/profile/${params.profileId}`;

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

        setCurrentProfile(data);
        dispatch({
          type: 'SET_CURRENT_PROFILE',
          payload: data,
        });
      } else {
        throw new Error('Errore nel recupero dei dati');
      }
    } catch (error) {
      console.log('errore', error);
    }
  };

  const [width, setWidth] = useState(window.innerWidth);
  const [currentProfile, setCurrentProfile] = useState({});

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    getParamsProfile();
  }, [params.profileId]);

  return (
    <Container className='my-2 bg-white rounded-3 bordinoGames'>
      <Row>
        <Col className='p-0 profileTop'>
          <img
            src='https://static.vecteezy.com/system/resources/thumbnails/023/856/872/small/ai-generated-organic-design-background-and-banner-in-different-colour-gradient-photo.jpeg'
            alt=''
            className='img-fluid rounded-top-3 sfondoGatto'
            style={{ width: '900px', height: '165px' }}
          />
          <img
            src={currentProfile.image}
            alt=''
            className='profileImg rounded-circle border border-white border-3'
          />
          {profile._id === currentProfile._id && (
            <i className='bi bi-camera-fill profileIcon text-primary bg-white px-2 py-1 rounded-circle'></i>
          )}

          {profile._id === currentProfile._id && (
            <button
              data-bs-toggle='modal'
              data-bs-target='#exampleModal2'
              className='profilePen border-0 bg-transparent'
            >
              <i className='bi bi-pencil fs-4'></i>
            </button>
          )}
        </Col>
        <Col className='mt-4 mt-md-3 ms-3' xs={12}>
          <Row className=' mt-5 w-100 justify-content-between align-items-start'>
            <Col xs={6} md={12}>
              <h1 className='fs-3 fw-bold mb-0'>
                {currentProfile.name}&nbsp;{currentProfile.surname}
              </h1>

              {profile._id === currentProfile._id && (
                <button className='btn btn-sm border-primary bg-transparent rounded-4 text-primary btnBadge mt-1 fw-bold'>
                  <i className='bi bi-patch-check me-1'></i>
                  Add verification badge
                </button>
              )}

              <p>{currentProfile.title}</p>
              <p className='mt-1'>
                {currentProfile.area} |{' '}
                <span className=' text-primary fw-bold'>Contact info</span>
              </p>
              <p className=' text-primary fw-bold'>5 connections</p>
            </Col>
            <Col xs={6} md={12} className='my-md-2'>
              <p className='mb-0 text-secondary'>
                Liceo Scientifico P. Metastasio
              </p>
            </Col>
          </Row>
          {profile._id === currentProfile._id ? (
            <Row>
              <Col>
                <Row className='mt-2 ms-1 me-2 align-items-center'>
                  <Col xs={4} md={3} className='px-0 pe-2 me-md-2'>
                    <button
                      className='btn btn-sm bg-primary text-white rounded-4 border-0 w-100'
                      id='btnOpenTo'
                    >
                      Open to
                    </button>
                  </Col>
                  <Col
                    xs={4}
                    md={6}
                    lg={5}
                    className='px-0 pe-2 pe-md-2 me-md-2'
                  >
                    <button className='btn btn-sm border-primary bg-transparent text-primary rounded-4 w-100 btnPSection'>
                      Add profile section
                    </button>
                  </Col>
                  {width > 991 ? (
                    <Col xs={4} lg={3} className='px-0 pe-2'>
                      <button
                        className='btn btn-sm border-secondary bg-transparent text-secondary rounded-4 w-75'
                        id='btnResources'
                      >
                        Resources
                      </button>
                    </Col>
                  ) : width > 767 ? (
                    <Col md={2} className='px-0 pe-2'>
                      <button
                        className='btn btn-sm border-secondary bg-transparent text-secondary rounded-circle'
                        id='btnResources'
                      >
                        <i className='bi bi-three-dots'></i>
                      </button>
                    </Col>
                  ) : (
                    <Col xs={4} className='px-0 pe-2'>
                      <button
                        className='btn btn-sm border-secondary bg-transparent text-secondary rounded-4 w-75'
                        id='btnResources'
                      >
                        Resources
                      </button>
                    </Col>
                  )}

                  <Col xs={11} className='px-0'>
                    <button className='mt-2 border-primary bg-transparent text-primary rounded-4 w-100 btnPSection btn btn-sm'>
                      Enhance profile
                    </button>
                  </Col>
                  <Col xs={1}></Col>
                </Row>
              </Col>
            </Row>
          ) : (
            <Row className='mb-4'>
              <Col>
                <Row className='mt-2 ms-1 me-2 align-items-center'>
                  <Col xs={4} md={3} lg={4} className='px-0 pe-2 me-md-2'>
                    <button className='btn btn-sm bg-primary text-white rounded-4 border-0 w-100'>
                      <i className='bi bi-plus-lg me-2'></i>
                      Follow
                    </button>
                  </Col>
                  <Col
                    xs={4}
                    md={6}
                    lg={4}
                    className='px-0 pe-2 pe-md-2 me-md-2'
                  >
                    <button className='btn btn-sm border-primary bg-transparent text-primary rounded-4 w-100 btnPSection'>
                      Message
                    </button>
                  </Col>
                  <Col
                    xs={4}
                    md={3}
                    lg={3}
                    className='px-0 pe-2 pe-md-2 me-md-2'
                  >
                    <button className='btn btn-sm border-secondary bg-transparent text-secondary rounded-4 w-75'>
                      More
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          )}
        </Col>
        {profile._id === currentProfile._id && (
          <Col xs={12} className=''>
            <Row
              xs={2}
              md={1}
              lg={2}
              className=' my-3 flex-nowrap overflow-auto pb-3'
            >
              <Col className='pe-1'>
                <Card
                  className=' d-flex justify-content-between cardRelative h-100'
                  id='cardBg'
                >
                  <Card.Body>
                    <Card.Title className=' fs-6'>Open to work</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted fs-6'>
                      Manager and Salesperson rol...
                    </Card.Subtitle>
                    <Card.Link href='javascript:void(0)' className=' fs-6'>
                      Show details
                    </Card.Link>
                  </Card.Body>
                  <i className='bi bi-pencil fs-6 cardPen'></i>
                </Card>
              </Col>

              <Col className='pe-1'>
                <Card className=' d-flex justify-content-between h-100 cardRelative'>
                  <Card.Body>
                    <Card.Title className='cardText pe-3'>
                      {' '}
                      <span className=' fw-bold'>
                        Share that you're hiring
                      </span>{' '}
                      and attract qualified candidates
                    </Card.Title>
                    <Card.Link href='javascript:void(0)' className=' fs-6'>
                      Get started
                    </Card.Link>
                  </Card.Body>
                  <i className='bi bi-x cardX fs-3'></i>
                </Card>
              </Col>

              <Col className='pe-1'>
                <Card className=' d-flex justify-content-between h-100 cardRelative'>
                  <Card.Body>
                    <Card.Title className='cardText pe-3'>
                      {' '}
                      <span className=' fw-bold'>
                        Showcase your services
                      </span>{' '}
                      as a selection on your profile so ypur business can be
                      easily discovered
                    </Card.Title>
                    <Card.Link href='javascript:void(0)' className=' fs-6'>
                      Get started
                    </Card.Link>
                  </Card.Body>
                  <i className='bi bi-x cardX fs-3'></i>
                </Card>
              </Col>

              <Col className='pe-1'>
                <Card className=' d-flex justify-content-between h-100 cardRelative'>
                  <Card.Body>
                    <Card.Title className='cardText pe-3'>
                      {' '}
                      <span className=' fw-bold'>Tell non-profits</span> you're
                      interested in getting involved with your time and skills
                    </Card.Title>
                    <Card.Link href='javascript:void(0)' className=' fs-6'>
                      Get started
                    </Card.Link>
                  </Card.Body>
                  <i className='bi bi-x cardX fs-3'></i>
                </Card>
              </Col>
            </Row>
          </Col>
        )}
      </Row>
      <ModalComp />
    </Container>
  );
};

export default ProfileComp;

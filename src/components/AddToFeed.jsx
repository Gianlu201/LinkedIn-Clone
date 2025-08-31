/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AddToFeed = () => {
  const profiles = useSelector((state) => {
    return state.profiles;
  });

  const dispatch = useDispatch();

  const token = import.meta.env.VITE_TOKEN;
  const url = 'https://striveschool-api.herokuapp.com/api/profile/';

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
        console.log(data);
        dispatch({
          type: 'GET_PROFILES',
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

  return (
    <Container fluid className=' bg-white mt-2 rounded-3 bordinoGames'>
      <div className=' d-flex justify-content-between align-items-center'>
        <p className=' fw-bold mt-2'>Add to your feed</p>
        <i
          className='bi bi-info-square-fill my-2 pe-1 small'
          style={{ cursor: 'pointer' }}
        ></i>
      </div>
      {profiles.slice(55, 58).map((profile) => {
        return (
          <div key={profile._id}>
            <div className='d-flex my-3'>
              <div>
                <img
                  src={
                    profile.image !== ' '
                      ? profile.image
                      : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
                  }
                  alt='profile picture'
                  className='rounded-circle suggestedImg'
                />
              </div>
              <div className='ms-2'>
                <Link
                  to={`/profile/${profile._id}`}
                  className='h6 mainLink titleGames'
                >
                  {profile.name} {profile.surname}
                </Link>
                <p className='small descriptionsGames'>{profile.title}</p>
                <p className='small descriptionsGames'>{profile.bio}</p>
                <button
                  className='btn btn-sm border-black bg-transparent text-black rounded-5 ps-1 pe-2 mt-3 d-flex align-items-center py-0'
                  id='btnResources'
                >
                  <i className='bi bi-plus me-1 fs-6'></i>
                  Follow
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <Row>
        <Col className='btnAnalytics'>
          <Button className=' bg-transparent w-100 border-0 text-black pb-2 fw-semibold d-flex align-items-center justify-content-center text-start recommendations'>
            View all recommendations{' '}
            <i className='bi bi-arrow-right-short fs-5'></i>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AddToFeed;

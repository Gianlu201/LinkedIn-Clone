/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PeopleComp = (props) => {
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
    <Container className='bg-white mt-2 rounded-3 pt-3 bordinoGames'>
      <h5>{props.title}</h5>

      {profiles.slice(25, 30).map((profile, i) => {
        return (
          <div key={profile._id}>
            <div className='d-flex mt-2'>
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
                <Link to={`/profile/${profile._id}`} className='h6 mainLink'>
                  {profile.name} {profile.surname}
                </Link>
                <p className='small'>{profile.title}</p>
                <p className='small profBio'>{profile.bio}</p>
                <button
                  className='btn btn-sm border-secondary bg-transparent text-secondary rounded-4 px-3 mt-2'
                  id='btnResources'
                >
                  <i className='bi bi-person-plus-fill me-1'></i>
                  Connect
                </button>
              </div>
            </div>
            {i < 4 && <hr />}
          </div>
        );
      })}

      <hr className='mt-3 mb-0' />
      <Row>
        <Col>
          <Button className=' bg-transparent w-100 border-0 text-black mt-0 pb-2 fw-bold d-flex align-items-center justify-content-center btnAnalytics'>
            Show all
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PeopleComp;

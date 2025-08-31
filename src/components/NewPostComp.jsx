import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import NewPostModal from './NewPostModal';
import { useNavigate } from 'react-router-dom';

const NewPostComp = () => {
  const profile = useSelector((state) => {
    return state.profile;
  });

  const navigate = useNavigate();

  return (
    <Container fluid className=' bg-white mt-2 mt-md-4 rounded-3 bordinoGames'>
      {profile._id && (
        <>
          <div className=' d-flex pt-3 align-items-center '>
            <img
              src={profile.image}
              alt='profile picture'
              className=' rounded-circle me-2'
              style={{ width: '50px' }}
            />
            <button
              type='button'
              className='btn bg-trasparent border border-1 border-black rounded-5 w-100 h-75 fw-semibold'
              data-bs-toggle='modal'
              data-bs-target='#newPostModal'
              onClick={() => {
                navigate('/post/');
              }}
            >
              Start a post
            </button>
          </div>
          <div className=' d-flex justify-content-around py-2'>
            <button
              type='button'
              className='btn bg-trasparent fw-medium btnPost py-1 d-flex align-items-center'
              data-bs-toggle='modal'
              data-bs-target='#mediaModalPost'
            >
              <i className='me-2 bi bi-image text-primary fs-5'></i>
              Media
            </button>
            <button
              type='button'
              className='btn bg-trasparent fw-medium btnPost py-1 d-flex align-items-center'
              data-bs-toggle='modal'
              data-bs-target='#eventModalPost'
            >
              <i className='me-2 bi bi-calendar3 text-warning fs-5'></i>
              Event
            </button>
            <button
              type='button'
              className='btn bg-trasparent fw-medium btnPost py-1 d-flex align-items-center'
              data-bs-toggle='modal'
              data-bs-target='#articleModalPost'
            >
              <i className='me-2 bi bi-newspaper text-danger fs-5'></i>
              Write article
            </button>
          </div>
        </>
      )}
      <NewPostModal />
    </Container>
  );
};

export default NewPostComp;

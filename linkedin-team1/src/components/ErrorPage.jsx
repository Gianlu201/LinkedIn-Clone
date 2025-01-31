import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Container className='d-flex justify-content-center align-items-center mt-5 pt-5'>
      <div
        className='d-flex flex-column align-items-center w-50 text-center mt-4'
        style={{ maxWidth: '330px' }}
      >
        <img
          src='https://static.licdn.com/aero-v1/sc/h/3p7p6a7q99wymlzghijta8d3p'
          alt='error image'
        />
        <h2 className='mt-4'>This page doesn&apos;t exist</h2>
        <p className=' text-secondary my-2'>
          Please check your URL or return to LinkedIn home.
        </p>
        <Link
          to={'/'}
          className='btn btn-outline-primary fw-medium rounded-5 mt-3'
        >
          Go to Your feed
        </Link>
      </div>
    </Container>
  );
};

export default ErrorPage;

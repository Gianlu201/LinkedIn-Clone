import { Container } from 'react-bootstrap';

const HiringAdviceComp = () => {
  return (
    <Container className='bg-white mt-4 rounded-3 position-relative p-0 text-center overflow-hidden'>
      <a href='#'>
        <img
          src='https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png'
          alt='hiring advice image'
          className='w-100'
          style={{ maxWidth: '312px' }}
        />
      </a>
    </Container>
  );
};

export default HiringAdviceComp;

import { Button, Col, Container, Row } from 'react-bootstrap';

const MoreProfilesComp = (props) => {
  return (
    <Container className='bg-white mt-4 rounded-3 pt-3'>
      <h5>{props.title}</h5>

      <div className='d-flex mt-2'>
        <div>
          <img
            src='https://placecats.com/100/100'
            alt='profile picture'
            className=' rounded-circle suggestedImg'
          />
        </div>
        <div className='ms-2'>
          <a href='#' className='h6 mainLink'>
            Paperino
          </a>
          <p className='small'>Junior Data Engineer</p>
          <p className='small'>Lorem ipsum dolor sit, amet..</p>
          <button
            className='btn btn-sm border-secondary bg-transparent text-secondary rounded-4 px-3 mt-2'
            id='btnResources'
          >
            <i className='bi bi-person-plus-fill me-1'></i>
            Connect
          </button>
        </div>
      </div>
      <hr />

      <div className='d-flex mt-2'>
        <div>
          <img
            src='https://placecats.com/100/100'
            alt='profile picture'
            className=' rounded-circle suggestedImg'
          />
        </div>
        <div className='ms-2'>
          <a href='#' className='h6 mainLink'>
            Paperino
          </a>
          <p className='small'>Junior Data Engineer</p>
          <p className='small'>Lorem ipsum dolor sit, amet..</p>
          <button
            className='btn btn-sm border-secondary bg-transparent text-secondary rounded-4 px-3 mt-2'
            id='btnResources'
          >
            <i className='bi bi-person-plus-fill me-1'></i>
            Connect
          </button>
        </div>
      </div>
      <hr />

      <div className='d-flex mt-2'>
        <div>
          <img
            src='https://placecats.com/100/100'
            alt='profile picture'
            className=' rounded-circle suggestedImg'
          />
        </div>
        <div className='ms-2'>
          <a href='#' className='h6 mainLink'>
            Paperino
          </a>
          <p className='small'>Junior Data Engineer</p>
          <p className='small'>Lorem ipsum dolor sit, amet..</p>
          <button
            className='btn btn-sm border-secondary bg-transparent text-secondary rounded-4 px-3 mt-2'
            id='btnResources'
          >
            <i className='bi bi-person-plus-fill me-1'></i>
            Connect
          </button>
        </div>
      </div>
      <hr />

      <div className='d-flex mt-2'>
        <div>
          <img
            src='https://placecats.com/100/100'
            alt='profile picture'
            className=' rounded-circle suggestedImg'
          />
        </div>
        <div className='ms-2'>
          <a href='#' className='h6 mainLink'>
            Paperino
          </a>
          <p className='small'>Junior Data Engineer</p>
          <p className='small'>Lorem ipsum dolor sit, amet..</p>
          <button
            className='btn btn-sm border-secondary bg-transparent text-secondary rounded-4 px-3 mt-2'
            id='btnResources'
          >
            <i className='bi bi-person-plus-fill me-1'></i>
            Connect
          </button>
        </div>
      </div>
      <hr />

      <div className='d-flex mt-2'>
        <div>
          <img
            src='https://placecats.com/100/100'
            alt='profile picture'
            className=' rounded-circle suggestedImg'
          />
        </div>
        <div className='ms-2'>
          <a href='#' className='h6 mainLink'>
            Paperino
          </a>
          <p className='small'>Junior Data Engineer</p>
          <p className='small'>Lorem ipsum dolor sit, amet..</p>
          <button
            className='btn btn-sm border-secondary bg-transparent text-secondary rounded-4 px-3 mt-2'
            id='btnResources'
          >
            <i className='bi bi-person-plus-fill me-1'></i>
            Connect
          </button>
        </div>
      </div>

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

export default MoreProfilesComp;

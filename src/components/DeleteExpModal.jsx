import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DeleteExpModal = (props) => {
  const profile = useSelector((state) => {
    return state.profile;
  });

  const navigate = useNavigate();

  const deleteExp = async (id) => {
    const url = `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences/`;
    const token = import.meta.env.VITE_TOKEN;
    try {
      const response = await fetch(url + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        // TODO toast da inserire per dare conferma!
        document.getElementById('closeDeleteExpModal').click();
        props.setMyExpId('');
      } else {
        throw new Error("Errore nell'invio dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className='modal fade'
      id='deleteExpModal'
      tabIndex='-1'
      aria-labelledby='exampleModalLabel '
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='exampleModalLabel'>
              <i className='bi bi-exclamation-triangle-fill text-danger me-2'></i>
              Are you sure?
            </h1>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              id='closeDeleteExpModal'
            ></button>
          </div>
          <div className='modal-body'>
            This action is irreversible! It will not be possible to recover your
            post!
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
            >
              Close
            </button>
            <Button
              variant='danger'
              type='button'
              className='btn btn-primary'
              onClick={() => {
                deleteExp(props.myExpId);
                navigate(`/profile/${profile._id}`);
                props.getExperience;
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteExpModal;

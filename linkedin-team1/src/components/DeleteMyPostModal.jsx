import { Button } from "react-bootstrap";

const DeleteMyPostModal = () => {
  return (
    <div
      className="modal fade"
      id="deleteMyPostModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              <i className="bi bi-exclamation-triangle-fill text-danger me-2"></i>
              Are you sure?
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            This action is irreversible! It will not be possible to recover your
            post!
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <Button variant="danger" type="button" className="btn btn-primary">
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteMyPostModal;

import { Button } from "react-bootstrap";

const DeleteMyPostModal = (props) => {
  console.log(props.postId);

  const deletePost = async (id) => {
    const url = "https://striveschool-api.herokuapp.com/api/posts/";
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk4OWY3MDhlOWNjZDAwMTUyMGFiN2EiLCJpYXQiOjE3MzgwNTU1MzYsImV4cCI6MTczOTI2NTEzNn0.7puTeQLut5TMH7Z8bH5-8DgDjNZ9Iyw_phbiNUCxSEk";
    try {
      const response = await fetch(url + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        // TODO toast da inserire per dare conferma!
        document.getElementById("closeDeleteMyPostModal").click();
        props.setCurrentPostId("");
      } else {
        throw new Error("Errore nell'invio dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="modal fade"
      id="deleteMyPostModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel "
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
              id="closeDeleteMyPostModal"
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
            <Button
              variant="danger"
              type="button"
              className="btn btn-primary"
              onClick={() => {
                deletePost(props.postId);
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

export default DeleteMyPostModal;

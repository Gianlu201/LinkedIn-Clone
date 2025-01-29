import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import NewPostModal from "./NewPostModal";

const NewPostComp = () => {
  // const token =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk4OWY3MDhlOWNjZDAwMTUyMGFiN2EiLCJpYXQiOjE3MzgwNTU1MzYsImV4cCI6MTczOTI2NTEzNn0.7puTeQLut5TMH7Z8bH5-8DgDjNZ9Iyw_phbiNUCxSEk';
  // const url = 'https://striveschool-api.herokuapp.com/api/posts/';

  const profile = useSelector((state) => {
    return state.profile;
  });

  return (
    <Container fluid className=" bg-white mt-2 mt-md-4 rounded-3 bordinoGames">
      {profile._id && (
        <>
          <div className=" d-flex pt-3  ">
            <img
              src={profile.image}
              alt="profile picture"
              className=" rounded-circle me-3"
              style={{ width: "50px" }}
            />
            <button
              type="button"
              className="btn bg-trasparent border border-1 border-black rounded-5 w-100"
              data-bs-toggle="modal"
              data-bs-target="#newPostModal"
            >
              Start a post
            </button>
          </div>
          <div className=" d-flex justify-content-around py-2">
            <button
              type="button"
              className="btn bg-trasparent fw-medium btnPost py-3"
              data-bs-toggle="modal"
              data-bs-target="#mediaModalPost"
            >
              <i className="me-2 bi bi-image"></i>
              Media
            </button>
            <button
              type="button"
              className="btn bg-trasparent fw-medium btnPost py-3"
              data-bs-toggle="modal"
              data-bs-target="#eventModalPost"
            >
              <i className="me-2 bi bi-calendar3"></i>
              Event
            </button>
            <button
              type="button"
              className="btn bg-trasparent fw-medium btnPost py-3"
              data-bs-toggle="modal"
              data-bs-target="#articleModalPost"
            >
              <i className="me-2 bi bi-newspaper"></i>
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
